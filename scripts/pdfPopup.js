// let isActive = true;
let popup;
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

/**
 * @param {HTMLElement} pdfView
 * @var {Window | null} popup
 */
function pdfPopup(pdfView) {
  if (!popup || popup.closed) {
    if (pdfView) {
      pdfView.style.height = "100vh";
      pdfView.style.width = "100vw";
      popup = window.open("", "", "fullscreen=yes");
      const doc = popup.document;
      doc.open()?.write(pdfView.outerHTML);
      const pdf = doc.getElementById("resourceobject");
      const spans = doc.getElementsByTagName("span");
      for (let i = 0; i < spans.length; i++) {
        spans[i].remove();
      }
      pdf.style.width = "100vw";
      pdf.style.height = "100vh";
    }
  }
  popup.focus();
  // popup.close();
}
/**
 * @var {HTMLElement} pdfView
//  * @param {CSSStyleDeclaration} width
 */
async function addPopUpButton() {
  const pdfView = document.getElementById("region-main");
  const button = document.createElement("button");
  button.onclick = () => pdfPopup(pdfView);
  button.textContent = "Popup";
  button.id = "popup-btn";
  const rowDiv = document.getElementsByTagName("h1")[0];
  rowDiv.append(button);
  button.style.borderRadius = ".25rem";
  button.style.backgroundColor = "#005f9f";
  button.style.color = "#FFF";
  button.style.margin = "0px";
  button.style.padding = "0px";
  button.style.height = "40px";

  for (let i = 0; i < 3; i++) {
    await sleep(300);
    button.style.opacity = "50%";
    await sleep(300);
    button.style.opacity = "100%";
  }
}

addPopUpButton();
