import helloWorld from "common";

const elem = document.createElement("div");
elem.innerHTML = helloWorld();
document.body.appendChild(elem);

console.log(helloWorld());
