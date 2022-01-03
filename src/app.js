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

function randomExcuses() {
  let whoNum = Math.floor(Math.random() * 4);
  let actionNum = Math.floor(Math.random() * 4);
  let whatNum = Math.floor(Math.random() * 3);
  let whenNum = Math.floor(Math.random() * 5);

  document.getElementById("excuses").innerHTML =
    who[whoNum] +
    " " +
    action[actionNum] +
    " " +
    what[whatNum] +
    " " +
    when[whenNum];
}
window.onload = randomExcuses();
