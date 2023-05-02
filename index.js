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
    const keyBoard = this.keyBoard;
    // console.log(keyBoard)
    let langKey = [];
    if (localStorage.getItem("language") === "en") {
      langKey = ENKEY;
    } else {
      langKey = RUKEY;
    }
    // console.log(langKey);
    for (let row = 0; row < langKey.length; row++) {
      const newKeyBoard = {};
      newKeyBoard.keyDiv = document.createElement("div");
      newKeyBoard.keyDiv.classList.add("key-row");
      newKeyBoard.keyDiv.classList.add(`key-row-${row}`);
      // keyBoard.append(newKeyBoard.keyDiv);
      for (let colum = 0; colum < langKey[row].length; colum++) {
        
        let item = '';
        if (typeof langKey[row][colum] === 'object') {
          let elem = langKey[row][colum][0];
          item = elem;
        } else {
          let elem = langKey[row][colum];
          item = elem;
        }
        // console.log(item);

        
        newKeyBoard.button = document.createElement('div');
        newKeyBoard.button.textContent = item;
        newKeyBoard.button.classList.add('btn');
        if (newKeyBoard.button.textContent === ' ') {
          newKeyBoard.button.style.paddingLeft = '180px';
          newKeyBoard.button.style.paddingRight = '180px';
        } else if (newKeyBoard.button.textContent === 'Shift') {
          newKeyBoard.button.style.paddingLeft = '50px';
          newKeyBoard.button.style.paddingRight = '50px';
        }
        //   console.log(newKeyBoard.button);
        newKeyBoard.keyDiv.append(newKeyBoard.button);
        // keyBoard.append(newKeyBoard.button);
        
      }
      keyBoard.append(newKeyBoard.keyDiv);
    }
  };

  // outputkey() {
  
  // }

}

const newKey = new KeyBody();
newKey.receiveKey();

// const newKey = new KeyBody();
export default newKey;
