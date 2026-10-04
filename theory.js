/* =========================================
   DETAILED THEORY  (Classes 1-5)
========================================= */
const row = (n, e) => `<span class="vis">${Array.from({length: n}, (_, i) => `<span style="--i:${i}">${e}</span>`).join("")}</span>`;
const pie = (n, d) => `<span class="pie" style="--p:${(n / d) * 360}deg"></span><b class="vis-label">${n}/${d}</b>`;
const T = (icon, title, intro, points, steps, ex, mistake, fun, vis = "") => ({icon, title, intro, points, steps, ex, mistake, fun, vis});

const theoryData = {
1: [
  T("🔢","Numbers","Numbers tell us how many things there are. We use ten digits (0 to 9) to build every number in the world.",
    ["Each digit has a place: ones, then tens.","In 36, the 3 is worth 30 and the 6 is worth 6.","Bigger numbers come later when we count; smaller numbers come earlier.","Use < (less than), > (greater than) and = (equal) to compare."],
    ["Look at the digit on the left (tens) first.","The number with more tens is bigger.","If tens are equal, compare the ones."],
    [["Which is bigger, 47 or 52?","Tens: 4 vs 5. So 52 is bigger."],["What is the value of 8 in 83?","8 is in the tens place, so it is 80."]],
    "Reading 12 as 21. Always read the tens digit first.","Zero was invented in India, and it changed all of mathematics!",row(10,"⭐")),
  T("➕","Addition","Addition means joining groups together to find the total. The sign for addition is +.",
    ["The answer of an addition is called the sum.","Order does not matter: 3 + 5 = 5 + 3.","Adding 0 does not change a number.","You can use a number line: jump forward."],
    ["Write the bigger number first.","Count on the smaller number from it.","Say the last number you reach: that is the sum."],
    [["7 + 5 = ?","Start at 7, jump 5: 8, 9, 10, 11, 12. Sum = 12."],["9 + 6 = ?","Make 10 first: 9 + 1 = 10, then 10 + 5 = 15."]],
    "Counting the starting number as one jump. Start at 7, then the first jump lands on 8.","Doubles are easy to remember: 6 + 6 = 12, 7 + 7 = 14.",row(7,"🍎")+"<b class='vis-label'>+</b>"+row(5,"🍌")),
  T("➖","Subtraction","Subtraction means taking some away from a group. The sign is −. The answer is called the difference.",
    ["Subtraction is the opposite of addition.","15 − 6 = 9 because 9 + 6 = 15.","Order matters: 9 − 4 is not the same as 4 − 9.","Subtracting 0 leaves the number unchanged."],
    ["Start with the bigger number.","Count back the smaller number.","Check by adding your answer to the number you took away."],
    [["15 − 6 = ?","Count back 6 from 15: 14, 13, 12, 11, 10, 9. Answer = 9."],["12 − 5 = ?","Check: 7 + 5 = 12, so the answer is 7."]],
    "Counting the number you start on. Count back starting from the next number.","If you take away everything, you are left with 0.",row(8,"🎈")),
  T("🔷","Shapes","Shapes have sides (straight edges) and corners (where two sides meet). Learning them helps us describe the world.",
    ["Circle: no sides, no corners.","Triangle: 3 sides, 3 corners.","Square: 4 equal sides, 4 corners.","Rectangle: 4 sides, opposite sides are equal."],
    ["Look at the shape carefully.","Touch and count each side.","Count the corners.","Match with the shapes you know."],
    [["How many sides does a rectangle have?","4 sides. The two long sides are equal and the two short sides are equal."],["Which shape has no corners?","A circle."]],
    "Calling a rectangle a square. A square needs all sides equal.","A football (soccer) ball is covered in pentagons and hexagons!",row(3,"🔺")+row(2,"🟦")+row(1,"⭕"))
],
2: [
  T("➕","Addition","Adding bigger numbers means we add place by place: ones, tens, then hundreds.",
    ["Line up the digits: ones under ones, tens under tens.","Always start from the ones place.","If ones add up to 10 or more, carry 1 to the tens.","You can check by adding in the opposite order."],
    ["Write the numbers one below the other.","Add the ones. Carry if the sum is 10 or more.","Add the tens (plus the carry).","Add the hundreds."],
    [["245 + 123 = ?","Ones 5+3=8, tens 4+2=6, hundreds 2+1=3. Answer 368."],["48 + 27 = ?","Ones 8+7=15, write 5 carry 1. Tens 4+2+1=7. Answer 75."]],
    "Forgetting the carried 1.","Carrying is also called regrouping, because we regroup 10 ones into 1 ten.",row(5,"🟦")+"<b class='vis-label'>+</b>"+row(3,"🟦")),
  T("➖","Subtraction","Subtraction finds how much is left or how far apart two numbers are.",
    ["Subtract ones first, then tens, then hundreds.","If the top digit is smaller, borrow 10 from the next place.","Check: difference + smaller number = bigger number."],
    ["Write the bigger number on top.","Subtract the ones. Borrow if needed.","Subtract the tens.","Subtract the hundreds."],
    [["500 − 235 = ?","Borrow across the zeros: 500 = 4 hundreds, 9 tens, 10 ones. 10−5=5, 9−3=6, 4−2=2. Answer 265."],["72 − 38 = ?","Borrow: 12−8=4, 6−3=3. Answer 34."]],
    "Subtracting the smaller digit from the bigger one in each column, even when it is on the bottom.","Subtraction was written as a minus sign − for the first time in the 1400s.",row(9,"🍪")),
  T("✖️","Multiplication","Multiplication is repeated addition of equal groups. The sign is ×. The answer is the product.",
    ["4 × 3 means 3 groups of 4 (or 4 groups of 3).","Order does not matter: 4 × 3 = 3 × 4.","Any number × 1 is itself. Any number × 0 is 0.","Tables help you answer quickly."],
    ["Draw or imagine equal groups.","Write the repeated addition.","Add, or recall it from the table."],
    [["4 × 3 = ?","4 + 4 + 4 = 12."],["5 × 6 = ?","Count in 5s six times: 5,10,15,20,25,30. Answer 30."]],
    "Adding instead of multiplying: 4 × 3 is 12, not 7.","The 9 times table trick: digits of the answer always add up to 9 (9×4=36, 3+6=9).",row(4,"🍎")+row(4,"🍎")+row(4,"🍎")),
  T("⏰","Time","We measure time in seconds, minutes, hours and days. A clock has a short hour hand and a long minute hand.",
    ["60 seconds = 1 minute. 60 minutes = 1 hour.","24 hours = 1 day. 7 days = 1 week.","When the minute hand is on 6 it is half past.","When the minute hand is on 12 it is o'clock."],
    ["Read the hour hand first.","Then count the minutes: each number is 5 minutes.","Say the time: hour, then minutes."],
    [["How many minutes are in 2 hours?","2 × 60 = 120 minutes."],["Hour hand on 3, minute hand on 6. What time?","Half past 3, which is 3:30."]],
    "Reading the minute hand number as minutes directly. The 6 means 30 minutes, not 6.","A day has 86,400 seconds!","<span class='vis'><span>🕒</span></span>")
],
3: [
  T("✖️","Multiplication","Multiplication is a fast way of adding equal groups. It also builds arrays (rows and columns).",
    ["Learn tables up to 10 × 10.","a × b = b × a.","To multiply by 10, add a zero at the end.","Break big numbers: 8 × 12 = 8×10 + 8×2."],
    ["Break the number into tens and ones.","Multiply each part.","Add the two answers."],
    [["8 × 6 = ?","8 × 6 = 48."],["7 × 12 = ?","7×10=70, 7×2=14, 70+14 = 84."]],
    "Mixing up 7×8 (56) and 6×8 (48). Practise the tricky ones.","A chessboard is an 8 × 8 array of 64 squares.",row(6,"🟪")+row(6,"🟪")),
  T("➗","Division","Division means sharing equally or finding how many groups fit. The sign is ÷.",
    ["Division is the opposite of multiplication.","24 ÷ 6 = 4 because 6 × 4 = 24.","Dividend ÷ divisor = quotient.","Sometimes there is a remainder (what is left over)."],
    ["Think of the multiplication fact.","Find what × divisor gives the dividend.","Check by multiplying back."],
    [["24 ÷ 6 = ?","6 × 4 = 24, so the answer is 4."],["17 ÷ 5 = ?","5×3=15, left 2. Quotient 3, remainder 2."]],
    "Dividing the wrong way round. 6 ÷ 24 is not 24 ÷ 6.","You can never divide by zero.",row(12,"🍬")),
  T("🍕","Fractions","A fraction is a part of a whole. The whole is cut into equal parts.",
    ["Numerator (top): parts we take.","Denominator (bottom): total equal parts.","1/2 is bigger than 1/4: fewer cuts make bigger pieces.","Equal fractions: 1/2 = 2/4."],
    ["Count all equal parts: the denominator.","Count the parts you need: the numerator.","Write numerator over denominator."],
    [["Colour 3 of 4 equal parts. Fraction?","3/4."],["Which is bigger: 1/3 or 1/5?","1/3, because thirds are bigger pieces than fifths."]],
    "Using unequal parts. Fractions need equal parts.","Pizza slices are real-life fractions!",pie(3,4)),
  T("📐","Geometry","Geometry studies shapes, lines and angles. We also measure the distance around a shape (perimeter).",
    ["Perimeter = total length of all sides.","Rectangle perimeter = 2 × (length + width).","Square perimeter = 4 × side.","A right angle is a square corner (90°)."],
    ["Write the formula.","Put in the numbers.","Add or multiply carefully.","Write the unit (cm, m)."],
    [["Rectangle 8 cm by 5 cm. Perimeter?","2 × (8+5) = 2 × 13 = 26 cm."],["Square side 7 m. Perimeter?","4 × 7 = 28 m."]],
    "Adding only two sides. Perimeter goes all the way around.","Ancient Egyptians used geometry to rebuild farms after Nile floods.",row(4,"🟩"))
],
4: [
  T("🔢","Large Numbers","Large numbers have thousands and ten-thousands. Place value tells us the worth of each digit.",
    ["Places: ones, tens, hundreds, thousands, ten-thousands.","In 45,678 the 4 is 40,000.","Commas separate groups of three digits.","Compare numbers by their leftmost digit first."],
    ["Write the number with commas.","Name the place of the digit.","Multiply the digit by its place value."],
    [["Value of 5 in 45,678?","5 is in thousands place: 5,000."],["Add 1,250 + 340","1,250 + 300 = 1,550; + 40 = 1,590."]],
    "Missing zeros when writing numbers in words.","Counting to a million, one number per second, takes about 12 days!",row(5,"🔟")),
  T("🍕","Fractions","Fractions with the same denominator are easy to add and subtract: only the numerators change.",
    ["Like fractions have the same denominator.","1/4 + 2/4 = 3/4.","Never add the denominators.","Compare like fractions by looking at numerators."],
    ["Check the denominators are equal.","Add or subtract the numerators.","Keep the denominator the same."],
    [["2/7 + 3/7 = ?","(2+3)/7 = 5/7."],["5/8 − 2/8 = ?","3/8."]],
    "Writing 1/4 + 2/4 = 3/8. The denominator stays 4.","A mixed number like 1¾ is a whole plus a fraction.",pie(3,4)),
  T("🔢","Decimals","Decimals show parts smaller than 1. The dot is called the decimal point.",
    ["First place after the point is tenths, then hundredths.","0.5 = 5/10 = 1/2.","0.25 = 25/100.","Money uses decimals: ₹12.50."],
    ["Line up the decimal points.","Fill missing places with zeros.","Add or subtract as normal.","Bring the point straight down."],
    [["2.5 + 1.3 = ?","2.5 + 1.3 = 3.8."],["Write 7/10 as a decimal.","0.7."]],
    "Not lining up the decimal points.","A ten-rupee note is 10 whole units; a ten-paise coin is 0.10.",row(5,"🟨")),
  T("📐","Area & Perimeter","Perimeter is the distance around a shape. Area is the space inside it.",
    ["Perimeter is measured in cm, m.","Area is measured in square units (cm², m²).","Rectangle area = length × width.","Square area = side × side."],
    ["Draw the shape and label sides.","Choose perimeter or area.","Write formula, substitute, solve, add unit."],
    [["Rectangle 10 cm × 6 cm. Area?","10 × 6 = 60 cm²."],["Same rectangle. Perimeter?","2 × (10+6) = 32 cm."]],
    "Mixing up area and perimeter. Remember: area = inside.","Farmers use area to know how much seed to buy.",row(6,"🟧")+row(6,"🟧"))
],
5: [
  T("🔢","Decimals","Decimals extend place value to tenths, hundredths and thousandths, and we can use all four operations.",
    ["Add and subtract by aligning points.","Multiply by 10: move point 1 place right.","Divide by 10: move point 1 place left.","Compare decimals digit by digit from the left."],
    ["Line up decimal points.","Add zeros as placeholders.","Calculate.","Place the decimal point in the answer."],
    [["2.5 + 1.5 = ?","4.0 = 4."],["0.4 × 10 = ?","Move point right: 4."]],
    "Thinking 0.30 is bigger than 0.4. Compare 0.30 and 0.40: 0.4 is bigger.","Decimals are used in sports timing and science measurements.",row(5,"🟦")),
  T("🍕","Fractions","Fractions can be simplified, compared and converted to decimals.",
    ["Simplify by dividing top and bottom by the same number.","6/8 = 3/4.","Fraction to decimal: divide numerator by denominator.","1/2 = 0.5, 1/4 = 0.25."],
    ["Find a common factor.","Divide numerator and denominator.","Repeat until nothing divides both."],
    [["Simplify 6/8","Divide by 2: 3/4."],["1/4 as a decimal?","1 ÷ 4 = 0.25."]],
    "Dividing only the top number.","Musical notes use fractions: half note, quarter note.",pie(1,2)),
  T("💯","Percentages","Percentage means 'out of 100'. The symbol is %.",
    ["25% = 25/100 = 0.25.","50% is half, 25% is a quarter, 10% is a tenth.","To find x% of N: x/100 × N.","Discount = percent of price; final price = price − discount."],
    ["Write the percentage as a fraction over 100.","Multiply by the number.","Use the answer (add or subtract if needed)."],
    [["20% of 150?","20/100 × 150 = 30."],["₹400 bag, 25% off. Final?","25% = ₹100. Final = ₹300."]],
    "Forgetting to subtract the discount from the price.","'Per cent' comes from Latin: per centum, 'by the hundred'.",row(10,"🟪")),
  T("🧠","Word Problems","Word problems tell a story using math. Read, plan, solve and check.",
    ["Find the question first.","Underline the numbers.","Words like 'total' suggest +; 'left' suggests −; 'each' suggests ×; 'share' suggests ÷.","Always write the unit in the answer."],
    ["Read the problem twice.","Decide the operation.","Write the number sentence.","Solve and check it makes sense."],
    [["One pen costs ₹10. Cost of 5 pens?","5 × 10 = ₹50."],["₹100 shared among 4 friends. Each gets?","100 ÷ 4 = ₹25."]],
    "Using the wrong operation. Re-read the keywords.","Detectives solve cases the same way: clues, plan, answer!",row(5,"✏️"))
]
};

let theoryClass = 1, theoryTab = 0;

function loadTheory(classNumber, tab = 0) {
  theoryClass = classNumber; theoryTab = tab;
  const list = theoryData[classNumber], t = list[tab];
  document.getElementById("theoryIntro").textContent = `Detailed lessons for Class ${classNumber}. Tap a topic to explore.`;

  const tabs = list.map((x, i) =>
    `<button class="theory-tab ${i === tab ? "active" : ""}" onclick="loadTheory(${classNumber},${i})">${x.icon} ${x.title}</button>`).join("");

  document.getElementById("theoryContainer").innerHTML = `
    <div class="theory-tabs">${tabs}</div>
    <article class="theory-panel" id="theoryPanel">
      <header class="tp-head"><div class="tp-icon">${t.icon}</div>
        <div><h3>${t.title}</h3><p>${t.intro}</p></div></header>
      ${t.vis ? `<div class="tp-vis">${t.vis}</div>` : ""}
      <div class="tp-cols">
        <section><h4>🔑 Key ideas</h4><ul>${t.points.map(p => `<li>${p}</li>`).join("")}</ul></section>
        <section><h4>🪜 Step by step</h4><ol>${t.steps.map(s => `<li>${s}</li>`).join("")}</ol></section>
      </div>
      <section><h4>✏️ Worked examples</h4>
        <div class="ex-grid">${t.ex.map(e => `<div class="ex-card"><strong>${e[0]}</strong><button class="reveal-btn" onclick="this.nextElementSibling.classList.toggle('open')">Show answer</button><div class="ex-ans">${e[1]}</div></div>`).join("")}</div>
      </section>
      <div class="tp-notes"><div class="note warn">⚠️ <b>Common mistake:</b> ${t.mistake}</div><div class="note fun">🌟 <b>Fun fact:</b> ${t.fun}</div></div>
      <div class="tp-actions">
        <button class="secondary-btn" onclick="readTheory()">🔊 Read aloud</button>
        <button class="primary-btn" onclick="document.getElementById('difficulty').scrollIntoView({behavior:'smooth'})">🎯 Practice Class ${classNumber}</button>
      </div>
    </article>`;
}

function readTheory() {
  if (!("speechSynthesis" in window)) return;
  if (speechSynthesis.speaking) { speechSynthesis.cancel(); return; }
  const t = theoryData[theoryClass][theoryTab];
  const u = new SpeechSynthesisUtterance(`${t.title}. ${t.intro} Key ideas. ${t.points.join(". ")}. Common mistake. ${t.mistake}`);
  u.rate = 0.9; speechSynthesis.speak(u);
}
