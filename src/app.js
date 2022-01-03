let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function randomExcuse() {
  let whoNumber = Math.floor(Math.random() * 4);
  let actionNumber = Math.floor(Math.random() * 4);
  let whatNumber = Math.floor(Math.random() * 3);
  let whenNumber = Math.floor(Math.random() * 5);

  document.getElementById("excuse").innerHTML =
    who[whoNumber] +
    " " +
    action[actionNumber] +
    " " +
    what[whatNumber] +
    " " +
    when[whenNumber];
}
window.onload = randomExcuse();
