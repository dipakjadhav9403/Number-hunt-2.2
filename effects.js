/* =========================================
   SOUND + ANIMATION LAYER
   (sounds are generated with the Web Audio API: no audio files needed)
========================================= */
const Sound = (() => {
  let ctx, sfxOn = localStorage.getItem("nh-sfx") !== "off", musicOn = false, timer, step = 0;
  const get = () => (ctx = ctx || new (window.AudioContext || window.webkitAudioContext)());
  function tone(f, dur = 0.15, type = "sine", delay = 0, vol = 0.18) {
    const c = get(), t = c.currentTime + delay, o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(c.destination); o.start(t); o.stop(t + dur + 0.05);
  }
  function say(list, pitch, rate) {
    if (!("speechSynthesis" in window)) return;
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(list[Math.floor(Math.random() * list.length)]);
      u.pitch = pitch; u.rate = rate; u.volume = 1; speechSynthesis.speak(u);
    } catch (e) {}
  }
  const seq = (notes, type, gap, dur, vol) => notes.forEach((n, i) => tone(n, dur, type, i * gap, vol));
  const fx = {
    click:   () => tone(660, 0.07, "triangle", 0, 0.1),
    select:  () => seq([523, 784], "triangle", 0.08, 0.12),
    start:   () => seq([392, 523, 659, 784], "triangle", 0.09, 0.15),
    correct: () => {
      seq([523, 659, 784, 1047, 784, 1047, 1319], "triangle", 0.09, 0.28, 0.2);
      for (let i = 0; i < 8; i++) tone(1500 + Math.random() * 1500, 0.1, "sine", 0.1 + i * 0.07, 0.06);
      say(["Yay!", "Well done!", "Great job!", "Awesome!", "Hooray!"], 1.5, 1.1);
    },
    wrong: () => {
      [392, 370, 349].forEach((f, i) => tone(f, 0.35, "sawtooth", i * 0.35, 0.12));
      tone(311, 0.9, "sawtooth", 1.05, 0.12);
      tone(156, 0.9, "triangle", 1.05, 0.12);
      say(["Oh no!", "Oh no! Try again!"], 0.7, 0.85);
    },
    streak:  () => { seq([784, 988, 1175, 1568, 1976], "square", 0.07, 0.12, 0.08); say(["You are on fire!", "Amazing!"], 1.5, 1.1); },
    finish:  () => seq([523, 523, 523, 659, 784, 659, 784, 1047], "triangle", 0.14, 0.25),
    pop:     () => tone(900, 0.06, "sine", 0, 0.1)
  };
  const play = n => { if (sfxOn) try { fx[n](); } catch (e) {} };
  const melody = [523, 587, 659, 784, 880, 784, 659, 587, 523, 659, 784, 659];
  function toggleMusic() {
    musicOn = !musicOn;
    clearInterval(timer);
    if (musicOn) timer = setInterval(() => { tone(melody[step++ % melody.length], 0.5, "sine", 0, 0.035); if (step % 4 === 0) tone(melody[0] / 2, 0.9, "triangle", 0, 0.03); }, 450);
    return musicOn;
  }
  function toggleSfx() { sfxOn = !sfxOn; localStorage.setItem("nh-sfx", sfxOn ? "on" : "off"); if (sfxOn) fx.pop(); return sfxOn; }
  return { play, toggleMusic, toggleSfx, isSfx: () => sfxOn };
})();

/* ---------- header buttons ---------- */
const soundBtn = document.getElementById("soundBtn"), musicBtn = document.getElementById("musicBtn");
const paintSound = () => { soundBtn.textContent = Sound.isSfx() ? "🔊" : "🔇"; soundBtn.classList.toggle("off", !Sound.isSfx()); };
paintSound();
soundBtn.onclick = () => { Sound.toggleSfx(); paintSound(); };
musicBtn.onclick = () => musicBtn.classList.toggle("on", Sound.toggleMusic());

/* ---------- generic button click sound + ripple ---------- */
document.addEventListener("click", e => {
  const b = e.target.closest("button, .class-card, .level-card, .theory-tab");
  if (!b || b.id === "soundBtn" || b.id === "checkBtn") return;
  Sound.play("click");
  if (!b.matches(".class-card, .level-card")) {
    const r = b.getBoundingClientRect(), s = document.createElement("span");
    s.className = "ripple"; s.style.left = e.clientX - r.left + "px"; s.style.top = e.clientY - r.top + "px";
    b.appendChild(s); setTimeout(() => s.remove(), 600);
  }
});

/* ---------- hook the game functions ---------- */
const retrigger = (el, cls) => { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); };

const _select = selectClass;
selectClass = function (n) { Sound.play("select"); _select(n); };

const _start = startPractice;
startPractice = function (lvl) { Sound.play("start"); _start(lvl); };

const _load = loadQuestion;
loadQuestion = function () { _load(); retrigger(document.querySelector(".question-area"), "swap"); };

const _check = checkAnswer;
checkAnswer = function () {
  const wasAnswered = answeredCurrent;
  _check();
  if (wasAnswered) return;
  const fb = document.getElementById("feedback");
  if (!answeredCurrent) { Sound.play("wrong"); retrigger(document.getElementById("answerInput"), "shake"); return; }
  if (fb.classList.contains("correct")) {
    if (streak > 0 && streak % 5 === 0) {
      Sound.play("streak"); fb.textContent += ` 🔥 ${streak} in a row!`;
    } else Sound.play("correct");
    ["headerScore", "gameScore", "streak"].forEach(id => retrigger(document.getElementById(id), "bump"));
    retrigger(document.querySelector(".question-icon"), "hop");
  } else {
    Sound.play("wrong"); retrigger(document.querySelector(".game-box"), "shake");
  }
};

const _finish = finishPractice;
finishPractice = function () {
  _finish(); Sound.play("finish");
  const el = document.getElementById("finalScore"), end = score; let n = 0;
  const id = setInterval(() => { el.textContent = ++n; if (n >= end) clearInterval(id); }, 35);
  if (end >= 30) for (let i = 0; i < 4; i++) setTimeout(createConfetti, i * 350);
};

/* ---------- hero character ---------- */
const faces = ["🤓", "😎", "🤩", "🥳", "🧐"]; let fi = 0;
document.querySelector(".character-face").addEventListener("click", function () {
  this.textContent = faces[++fi % faces.length];
  retrigger(this, "hop"); Sound.play("pop");
});
document.querySelectorAll(".floating-number").forEach((n, i) =>
  n.addEventListener("click", () => { retrigger(n, "hop"); Sound.play("pop"); }));

/* ---------- scroll effects ---------- */
const prog = document.getElementById("scrollProgress"), head = document.querySelector("header");
addEventListener("scroll", () => {
  const h = document.documentElement;
  prog.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + "%";
  head.classList.toggle("scrolled", h.scrollTop > 20);
}, { passive: true });

const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: 0.15 });
document.querySelectorAll(".section-title, .class-card, .level-card, .game-box").forEach((el, i) => {
  el.classList.add("reveal"); el.style.setProperty("--d", (i % 5) * 0.08 + "s"); io.observe(el);
});
