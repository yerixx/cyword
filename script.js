const navHome = document.querySelector("#navHome");
const navGame = document.querySelector("#navGame");
const navJukebox = document.querySelector("#navJukebox");

const contentFrame = document.querySelector("#frame");
const navItems = document.querySelectorAll(".navItem");

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    const isActive = navItem.classList.contains("active");

    navItems.forEach((item) => item.classList.remove("active"));

    if (!isActive) {
      navItem.classList.add("active");
    }
  });
});

const homeChange = () => {
  contentFrame.setAttribute("src", "./home/home.html");
  navHome.style = "background: #fff; color: #55b2e4";
  navGame.style = "none";
  navJukebox.style = "none";
};
const gameChange = () => {
  contentFrame.setAttribute("src", "./game/game.html");
  navHome.style = "none";
  navGame.style = "background: #fff; color: #55b2e4";
  navJukebox.style = "none";
};
const jukeChange = () => {
  contentFrame.setAttribute("src", "./jukebox/jukebox.html");
  navHome.style = "none";
  navGame.style = "none";
  navJukebox.style = "background: #fff; color: #55b2e4";
};
navHome.addEventListener("click", homeChange);
navGame.addEventListener("click", gameChange);
navJukebox.addEventListener("click", jukeChange);

//Title Edit
const titleEditBtn = document.querySelector(".titleEditBtn");
const contentsTitle = document.querySelector(".contentsTitle");
const contentTop = document.querySelector(".contentTop");

let inputElement, cancelButton, saveButton; // 전역에서 관리

const EditTitle = () => {
  // 수정 중인 상태에서 다시 수정 버튼이 눌리지 않도록
  if (contentTop.querySelector(".contentsTitleEdit")) {
    return;
  }

  // 기존 텍스트를 저장
  const originalText = contentsTitle.innerText;

  // input 요소 생성
  inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.className = "contentsTitleEdit";
  inputElement.value = originalText;

  // contentsTitle을 input으로 교체
  contentTop.replaceChild(inputElement, contentsTitle);

  // input 요소에 포커스를 자동으로 줘서 수정 가능하게 만듬
  inputElement.focus();

  inputElement.addEventListener("input", () => {
    if (inputElement.value.length > 25) {
      inputElement.value = inputElement.value.slice(0, 25); // 25자 이상은 잘라냄
    }
  });

  cancelButton = document.createElement("button");
  cancelButton.innerText = "취소";
  cancelButton.className = "contentEditBtn";

  cancelButton.addEventListener("click", () => {
    contentsTitle.innerText = originalText;
    contentTop.replaceChild(contentsTitle, inputElement);
    removeButtons();
  });

  // 저장 버튼 생성
  saveButton = document.createElement("button");
  saveButton.innerText = "저장";
  saveButton.className = "contentEditBtn";

  saveButton.addEventListener("click", () => {
    // 수정된 값을 contentsTitle에 반영
    contentsTitle.innerText = inputElement.value;
    contentTop.replaceChild(contentsTitle, inputElement);
    removeButtons(); // 버튼 제거
  });

  // 버튼들을 contentTop에 추가
  contentTop.appendChild(cancelButton);
  contentTop.appendChild(saveButton);
};

// 버튼들을 삭제하는 함수
const removeButtons = () => {
  if (cancelButton && saveButton) {
    contentTop.removeChild(cancelButton);
    contentTop.removeChild(saveButton);
  }
};

// 수정 버튼 클릭 시 EditTitle 호출
titleEditBtn.addEventListener("click", EditTitle);

//profileEdit
const profileEdit = document.querySelector(".profileEdit");
const profileMessage = document.querySelector(".profileMessage");
const profileMessageEdit = document.querySelector(".profileMessageEdit");

let originalText = profileMessage.innerText; // 원본 텍스트 저장

const EditProfile = () => {
  if (profileMessage.querySelector("textarea")) {
    return;
  }

  // 입력 필드 생성
  const inputElement = document.createElement("textarea");
  inputElement.className = "profileMessageEdit";
  inputElement.type = "textarea";
  inputElement.value = profileMessage.innerText;

  // 기존 텍스트를 빈 상태로 초기화
  profileMessage.innerHTML = "";
  profileMessage.appendChild(inputElement);

  // 취소 버튼 생성
  const cancelButton = document.createElement("button");
  cancelButton.innerText = "취소";
  cancelButton.className = "EditBtn";

  cancelButton.addEventListener("click", () => {
    profileMessage.innerHTML = originalText;
    profileMessage.focus();
  });

  // 저장 버튼 생성
  const saveButton = document.createElement("button");
  saveButton.innerText = "저장";
  saveButton.className = "EditBtn";

  saveButton.addEventListener("click", () => {
    originalText = inputElement.value;
    profileMessage.innerHTML = inputElement.value;
  });

  // 버튼들을 profileMessage에 추가
  profileMessage.appendChild(cancelButton);
  profileMessage.appendChild(saveButton);
};

profileEdit.addEventListener("click", EditProfile);
