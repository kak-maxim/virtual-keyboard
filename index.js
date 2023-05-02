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

class KeyBody {
  constructor() {
    // console.log(this);
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
  receiveKey() {
    const keyBoard = this;
    let langKey = [];
    if (localStorage.getItem("language") === "en") {
      langKey = ENKEY;
    } else {
      langKey = RUKEY;
    }

    for (let Row = 0; Row < langKey.length; Row++) {
      for (let colom = 0; colom < keys[Row].length; colom++) {
        let value = "";
        if (typeof keys[Row][colom] === "object") {
          let item = keys[Row][colom][0];
          value = item;
          item = 0;
        } else {
          let item = keys[Row][colom];
          value = item;
          item = 0;
        }
        const newKey = {};
        newKey.button = document.createElement("div");
        newKey.button.textContent = value;
        newKey.button.classList.add("keyButton");
        newKey.button.classList.add("button");
        keyBoard.append(newKey.button);
      }
    }
  }

  outputkey() {
    


  }

}

const newKey = new KeyBody();
newKey.receiveKey();

// const newKey = new KeyBody();
export default newKey;
