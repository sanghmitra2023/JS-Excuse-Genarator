/* eslint-disable */
import "bootstrap";
import "./style.css";

const who = [
  "My dog",
  "A strange person",
  "Elvis",
  "My best friend",
  "Someone"
];

const action = ["ate", "played with", "burnt", "flushed away", "tore"];

const what = ["my homewok", "the keys", "my car", "the box", "the dinner"];

const when = [
  "before the class!",
  "right on time!",
  "when I finished!",
  "during my lunch!",
  "while I was playing!"
];

function getRandomItem(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function getRandomPhrase() {
  return `${getRandomItem(who)} ${getRandomItem(action)} 
  ${getRandomItem(what)} ${getRandomItem(when)}`;
}
document
  .getElementById("button")
  .addEventListener(
    "click",
    e =>
      (document.getElementById("phrase").innerHTML = getRandomPhrase(
        who,
        action,
        what,
        when
      ))
  );
