const ENKEY = [
  [
    ["`", "~"],
    ["1", "!"],
    ["2", "@"],
    ["3", "#"],
    ["4", "$"],
    ["5", "%"],
    ["6", "^"],
    ["7", "&"],
    ["8", "*"],
    ["9", "("],
    ["0", ")"],
    ["-", "_"],
    ["=", "+"],
    "Backspace",
  ],
  [
    "Tab",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    ["[", "{"],
    ["]", "}"],
    ["\\", "|"],
    "Delete",
  ],
  [
    "CapsLock",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    [";", ":"],
    ["'", '"'],
    "Enter",
  ],
  [
    "Shift",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    [",", "<"],
    [".", ">"],
    ["/", "?"],
    "▲",
    "Shift",
  ],
  ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
];
const RUKEY = [
  [
    ["ё", "Ё"],
    ["1", "!"],
    ["2", '"'],
    ["3", "№"],
    ["4", ";"],
    ["5", "%"],
    ["6", ":"],
    ["7", "?"],
    ["8", "*"],
    ["9", "("],
    ["0", ")"],
    ["-", "_"],
    ["=", "+"],
    "Backspace",
  ],
  [
    "Tab",
    "й",
    "ц",
    "у",
    "к",
    "е",
    "н",
    "г",
    "ш",
    "щ",
    "з",
    "х",
    "ъ",
    ["\\", "|"],
    "Delete",
  ],
  [
    "CapsLock",
    "ф",
    "ы",
    "в",
    "а",
    "п",
    "р",
    "о",
    "л",
    "д",
    ["ж"],
    ["э"],
    "Enter",
  ],
  [
    "Shift",
    "я",
    "ч",
    "с",
    "м",
    "и",
    "т",
    "ь",
    "б",
    "ю",
    [".", ","],
    "▲",
    "Shift",
  ],
  ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
];

class keyBody {
  constructor() {
    this.main = document.createElement("main");
    this.main.classList.add("main");
    this.title = document.createElement("h1");
    this.title.textContent = " ";
    this.title.classList.add("title");
    this.textarea = document.createElement("textarea");
    this.textarea.rows = "5";
    this.textarea.classList.add("textarea");
    this.keyBoard = document.createElement("div");
    this.keyBoard.classList.add("key");
    this.bottxt = document.createElement("div");
    this.bottxt.classList.add("bottxt");
    this.bottxt.textContent = `Переключение языка осуществляется сочетанием клавиш Alt+Shift или Ctrl+Shift`;
    this.main.append(this.title);
    this.main.append(this.textarea);
    this.main.append(this.keyBoard);
    this.main.append(this.bottxt);
    document.body.prepend(this.main);
  }

  insertTextCursor(event) {
    const textarea = document.querySelector(".textarea");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    textarea.setRangeText(event, start, end, "end");
  }

  handleButtonClick(event) {
    const btn = event.target;
    const textarea = document.querySelector(".textarea");
    const keyValue = btn.textContent;

    if (keyValue === "Backspace") {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      if (start === end) {
        textarea.setRangeText("", start - 1, end, "end");
      } else {
        textarea.setRangeText("", start, end, "end");
      }
    } else if (keyValue === "Enter") {
      this.insertTextCursor("\n");
    } else if (keyValue === "Tab") {
      this.insertTextCursor("\t");
    } else if (keyValue === " ") {
      this.insertTextCursor(" ");
    } else if (
      keyValue !== "Shift" &&
      keyValue !== "Ctrl" &&
      keyValue !== "Alt" &&
      keyValue !== "Win" &&
      keyValue !== "CapsLock" &&
      keyValue !== "Delete" &&
      keyValue !== "▲" &&
      keyValue !== "►" &&
      keyValue !== "◄" &&
      keyValue !== "▼"
    ) {
      this.insertTextCursor(keyValue);
    }
  }

  receiveKey() {
    const textarea = document.querySelector(".textarea");
    textarea.focus();
    const keyBoard = this.keyBoard;
    // console.log(keyBoard)
    let langKey = [];
    if (localStorage.getItem("language") === "en") {
      langKey = RUKEY;
    } else {
      langKey = ENKEY;
    }
    // console.log(localStorage.getItem("language"));
    // console.log(langKey);
    for (let row = 0; row < langKey.length; row++) {
      const newKeyBoard = {};
      newKeyBoard.keyDiv = document.createElement("div");
      newKeyBoard.keyDiv.classList.add("key-row");
      newKeyBoard.keyDiv.classList.add(`key-row-${row}`);
      // keyBoard.append(newKeyBoard.keyDiv);
      for (let colum = 0; colum < langKey[row].length; colum++) {
        let item = "";
        if (typeof langKey[row][colum] === "object") {
          let elem = langKey[row][colum][0];
          item = elem;
        } else {
          let elem = langKey[row][colum];
          item = elem;
        }
        // console.log(item);

        newKeyBoard.button = document.createElement("div");
        newKeyBoard.button.textContent = item;
        newKeyBoard.button.classList.add("btn");
        if (newKeyBoard.button.textContent === " ") {
          newKeyBoard.button.style.paddingLeft = "180px";
          newKeyBoard.button.style.paddingRight = "180px";
        } else if (newKeyBoard.button.textContent === "Shift") {
          newKeyBoard.button.style.paddingLeft = "50px";
          newKeyBoard.button.style.paddingRight = "50px";
        }
        //   console.log(newKeyBoard.button);
        newKeyBoard.keyDiv.append(newKeyBoard.button);
        // keyBoard.append(newKeyBoard.button);
      }
      keyBoard.append(newKeyBoard.keyDiv);
    }
    this.actionsclick();
  }

  actionsKeyup(event) {
    const currentBtn = event.target.closest(".button");
    if (!currentBtn) return;
    currentBtn.classList.add("btn-active");
    setTimeout(() => {
      currentBtn.classList.remove("btn-active");
    }, 150);
  }

  actionsclick() {
    const btnColection = document.querySelectorAll(".btn");
    btnColection.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        btn.classList.add("btn-active");
        setTimeout(() => {
          btn.classList.remove("btn-active");
        }, 200);
        this.handleButtonClick(event);
      });
    });
  }
}

const newKey = new keyBody();
newKey.receiveKey();

document.addEventListener("keydown", (event) => {
  const btnsCollection = document.querySelectorAll(".btn");
  btnsCollection.forEach((btn) => {
    if (
      btn.textContent === event.key ||
      btn.textContent.toUpperCase() === event.key
    ) {
      btn.classList.add("btn-active");
    }
  });
});

document.addEventListener("keyup", (event) => {
  const btnsCollection = document.querySelectorAll(".btn");
  btnsCollection.forEach((btn) => {
    if (
      btn.textContent === event.key ||
      btn.textContent.toUpperCase() === event.key
    ) {
      btn.classList.remove("btn-active");
    }
  });
});

newKey.keyBoard.addEventListener("keyup", (event) => {
  newKey.actionsKeyup(event);
});

// const newKey = new keyBody();
export default newKey;
