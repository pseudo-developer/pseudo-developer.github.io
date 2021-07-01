(function() {
  if (!PIXI.utils.isWebGLSupported()) return;

  const fireworks = new FIREWORKS({
    full_screen: true,
    target_node: null,
    amount: 7
  });
  
  const is_mobile = 'ontouchend' in document;
  if (!is_mobile) {
    fireworks.start_burst();
    return;
  }
  
  installFont(
    "Noto Sans JP", 
    "@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap');"
  ).then(() => {
    const TAP_TO_START = document.createElement("div");
    document.body.appendChild(TAP_TO_START); 

    TAP_TO_START.innerText = "TAP TO START";
    TAP_TO_START.classList.add("start");

    window.addEventListener("touchend", function init() {
      window.removeEventListener("touchend", init);
      document.body.removeChild(TAP_TO_START);

      fireworks.start_burst();
    }, false);
  });
}());



