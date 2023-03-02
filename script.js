var typed = new Typed(".auto-type", {
  strings: ["Programmer.", "Frontend Developer.", "Gamer."],
  typeSpeed: 150,
  backspeed: 150,
  loop: true,
});

$("#plang").on("click", function () {
  $(".skillsf2").load("ProgLang.txt");
});

$("#webDev").on("click", function () {
  $(".skillsf2").load("WebDev.txt");
});

$("#softW").on("click", function () {
  $(".skillsf2").load("softwares.txt");
});

