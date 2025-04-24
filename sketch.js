let questions = [
  {
    question: "棒球比賽中，一場比賽通常有幾局？",
    options: ["6局", "7局", "9局", "12局"],
    answer: 2
  },
  {
    question: "棒球場上的投手站在哪個位置？",
    options: ["一壘", "二壘", "投手丘", "本壘"],
    answer: 2
  },
  {
    question: "棒球比賽中，三振是指什麼？",
    options: ["三次擊球未中", "三次跑壘失敗", "三次接球失誤", "三次得分"],
    answer: 0
  },
  {
    question: "棒球比賽中，滿壘是指什麼情況？",
    options: ["三個壘包上都有跑者", "兩個壘包上有跑者", "本壘有跑者", "所有壘包都空"],
    answer: 0
  },
  {
    question: "棒球比賽中，哪個位置的球員負責接住投手的球？",
    options: ["捕手", "一壘手", "外野手", "游擊手"],
    answer: 0
  },
  {
    question: "棒球比賽中，打擊者擊出全壘打時，最多可以得幾分？",
    options: ["1分", "2分", "3分", "4分"],
    answer: 3
  },
  {
    question: "棒球比賽中，哪個聯盟是美國職棒大聯盟的一部分？",
    options: ["美國聯盟", "國家聯盟", "太平洋聯盟", "中央聯盟"],
    answer: 0
  },
  {
    question: "棒球比賽中，外野手的主要任務是什麼？",
    options: ["接住飛球", "投球", "跑壘", "擊球"],
    answer: 0
  },
  {
    question: "棒球比賽中，裁判會在哪種情況下判定跑者出局？",
    options: ["跑者被觸殺", "跑者未踩壘", "跑者被接殺", "以上皆是"],
    answer: 3
  },
  {
    question: "棒球比賽中，哪個國家被認為是棒球的發源地？",
    options: ["美國", "日本", "韓國", "古巴"],
    answer: 0
  }
];

let currentQuestionIndex = 0;
let feedback = "";

function setup() {
  createCanvas(800, 600);
  textSize(20);
}

function draw() {
  background('#778da9');
  if (currentQuestionIndex < questions.length) {
    let q = questions[currentQuestionIndex];
    text(`問題 ${currentQuestionIndex + 1}: ${q.question}`, 50, 50);
    for (let i = 0; i < q.options.length; i++) {
      // 繪製選項
      fill(255);
      rect(50, 100 + i * 50, 700, 40);
      fill(0);
      text(q.options[i], 60, 130 + i * 50);
    }
    if (feedback) {
      text(feedback, 50, 350);
    }
  } else {
    text("問答結束！感謝參與！", 50, 50);
  }
}

function mousePressed() {
  if (currentQuestionIndex < questions.length) {
    let q = questions[currentQuestionIndex];
    for (let i = 0; i < q.options.length; i++) {
      // 檢查滑鼠是否點擊在選項上
      if (
        mouseX > 50 &&
        mouseX < 750 &&
        mouseY > 100 + i * 50 &&
        mouseY < 140 + i * 50
      ) {
        if (i === q.answer) {
          feedback = "答對了！";
        } else {
          feedback = `答錯了！正確答案是: ${q.options[q.answer]}`;
        }
        currentQuestionIndex++;
        break;
      }
    }
  }
}