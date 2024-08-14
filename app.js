var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-them");
  if (document.body.classList.contains("dark-them")) {
    icon.src = "images/new_img_js_4-removebg-preview.png";
  } else {
    icon.src = "images/new_img_js_3-removebg-preview.png";
  }
};
