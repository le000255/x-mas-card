const envelope = document.querySelector("#envelope");
// console.log("init:", envelope.getAttribute("data-envelope"));
const att = "data-envelope"
const letter = document.querySelector("#letter");

/* ------------- envelope handler ------------- */

// stop user from clicking during animation
// default time to wait is 3s
function pausePointerEvent(element, timeOut = 3000) {
  element.style.pointerEvents = "none";
  setTimeout(() => {
    element.style.pointerEvents = "inherit";
  }, timeOut);
}

envelope.addEventListener('click', () => {
  const stat = envelope.getAttribute(att);
  if (stat === "isClosed") {
    envelope.classList.add("envelope__opened");
    envelope.setAttribute(att, "isOpen")
    letter.classList.remove("isClosed")

  } else if (stat === "isOpen") {
    letter.classList.add("isClosed");
    envelope.setAttribute(att, "isClosed");

    setTimeout(() => {
      letter.classList.remove("isClosed")
      envelope.classList.remove("envelope__opened");
    }, 3000)
  }

  pausePointerEvent(envelope, 4500);

})

// prevent double click events
// when the letter is open & users want to click on
// the child anchor link
document.querySelector("#eddie").onclick = (e) => { e.stopPropagation() }

/* ---------- mobile: message handler --------- */

const messageHandler = document.querySelector(".btn__ms-handler");
const msgBoxDisplay = document.querySelector("#msg-box");
const scrollContainer = document.querySelector(".container__small-screen")

const BTN_TEXT_PROMPT_OPEN = "Xem trước nội dung trên điện thoại"
const BTN_TEXT_PROMPT_CLOSE = "Ẩn nội dung"
// console.log(messageHandler.textContent);
function handleMsg() {
  if (msgBoxDisplay.classList.contains("hide")) {
    messageHandler.textContent = BTN_TEXT_PROMPT_CLOSE;
  } else {
    messageHandler.textContent = BTN_TEXT_PROMPT_OPEN;
  }
  setTimeout(() => {
    scrollContainer.scroll({ top: 150, behavior: "smooth" });
  }, 200);
  msgBoxDisplay.classList.toggle("hide");


}

// reveal & hide message on click
// only on small screens
messageHandler.onclick = (e) => handleMsg(e);