const about_link = document.querySelector("#about");
const contact_link = document.querySelector("#contact");
const about_section = document.querySelector(".about-content");
const contact_section = document.querySelector(".contact-content");

let i = 0;
let txt = "I am a mobile}}}}}}web}}}Software developer =)";
let speed = 100;

(typeWriter = () => {
  if (i < txt.length) {
    if (txt.charAt(i) === "}") {
      let text = document.getElementById("type").innerHTML;

      editedText = text.slice(0, -1);
      document.getElementById("type").innerHTML = editedText;
      speed = 250;
    } else {
      document.getElementById("type").innerHTML += txt.charAt(i);
      speed = 100;
    }
    i++;
    setTimeout(typeWriter, speed);
  }
})();

about_link.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Me",
    top: 50,
    right: 50,
    bottom: 0,
    left: 50,
    background: "#00aa00",
    height: "400px",
    width: "700px",
    mount: about_section,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

contact_link.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "Contact Me",
    top: 200,
    right: 50,
    bottom: 0,
    left: 150,
    background: "#00aa00",
    height: "350px",
    width: "400px",
    mount: contact_section,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
