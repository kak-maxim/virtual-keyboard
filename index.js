const ENKEY = [
  [
    ["`", "~"],["1", "!"],["2", "@"],["3", "#"],["4", "$"],["5", "%"],["6", "^"],["7", "&"],["8", "*"],["9", "("],["0", ")"],["-", "_"],["=", "+"],"Backspace",
  ],
  [
    "Tab","q","w","e","r","t","y","u","i","o","p",["[", "{"],["]", "}"],["\\", "|"],"Delete",
  ],
  [
    "CapsLock","a","s","d","f","g","h","j","k","l",[";", ":"],["'", '"'],"Enter",
  ],
  [
    "Shift","z","x","c","v","b","n","m",[",", "<"],[".", ">"],["/", "?"],"▲","Shift",
  ],
  ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
];
const RUKEY = [
  [
    ["ё", "Ё"], ["1", "!"], ["2", '"'], ["3", "№"], ["4", ";"], ["5", "%"], ["6", ":"], ["7", "?"], ["8", "*"], ["9", "("], ["0", ")"], ["-", "_"], ["=", "+"], "Backspace",
  ],
  [
    "Tab","q","w","e","r","t","y","u","i","o","p",["[", "{"],["]", "}"],["\\", "|"],"Delete",
  ],
  [
    "CapsLock","a","s","d","f","g","h","j","k","l",[";", ":"],["'", '"'],"Enter",
  ],
  [
    "Shift","z","x","c","v","b","n","m",[",", "<"],[".", ">"],["/", "?"],"▲","Shift",
  ],
  ["Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
];

class KeyBody {
  constructor() {
    // console.log(this);
    this.main = document.createElement('main');
    this.main.classList.add('main');
    this.title = document.createElement('h1');
    this.title.textContent = ' ';
    this.title.classList.add('title');
    this.textarea = document.createElement('textarea');
    this.textarea.rows = '5';
    this.textarea.classList.add('textarea');
    this.keyBoard = document.createElement('div');
    this.keyBoard.classList.add('key');
    this.botomtxt = document.createElement('div');
    this.botomtxt.classList.add('ps');
    this.botomtxt.textContent = `переключение языка осуществляется сочетанием клавиш "Alt+Shift" или "Ctrl+Shift"`;
    this.main.append(this.title);
    this.main.append(this.textarea);
    this.main.append(this.keyBoard);
    this.main.append(this.botomtxt);
    document.body.prepend(this.main);
  }
}
 // const newKey = new KeyBody();
  export default newKey;
