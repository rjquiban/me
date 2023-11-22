var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    let down = this.children[0].children[1].children[0];
    let up = this.children[0].children[1].children[1];

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        up.style.display = "none";
        down.style.display = "block"
        panel.style.maxHeight = null;
    } else {
        up.style.display = "block";
        down.style.display = "none"
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
