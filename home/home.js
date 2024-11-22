const form = document.querySelector("form");
const input = document.querySelector("input[type='text']");
const ul = document.querySelector("ul");

const addTexts = (text) => {
  if (text !== "") {
    const li = document.createElement("li");
    const spanText = document.createElement("span");

    const button = document.createElement("button");

    spanText.innerText = `${text} (처음 본 친구)`;
    spanText.style.paddingRight = "6px";
    button.innerText = "지우기";
    button.addEventListener("click", delItem);

    li.appendChild(spanText);
    li.appendChild(button);
    ul.appendChild(li);
  }
};
const delItem = (e) => {
  if (e.target.tagName === "BUTTON") {
    const target = e.target.parentElement;
    target.remove();
  }
};

const ilchon = (e) => {
  e.preventDefault();

  const ilchonText = input.value;
  input.value = "";

  if (ilchonText !== "") {
    addTexts(ilchonText);
  }
};

form.addEventListener("submit", ilchon);
