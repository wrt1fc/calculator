const display = document.querySelector("#display");/**Если у элемента есть атрибут id, то мы можем получить его вызовом document.getElementById(id), где бы он ни находился. */
const buttons = document.querySelectorAll("button");

buttons.forEach((item)=> {/**Метод forEach() можно использовать, когда вам необходимо совершить одну и ту же операцию над всеми элементами массива. */
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";/**Свойство innerText позволяет считывать или задавать текстовое содержимое элемента. При считывании текста с элемента будет возвращена строка с текстовым содержимым всех вложенных дочерних элементов.  */
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);/**убирает последний символ*/
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };   
});


const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark
};