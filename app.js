let array = "Hello world adada gjgdsfjgsfdjgh";
let c = "",
  b = "";
array = array.toUpperCase();
array = array.split(" ");
array.forEach((element) => {
  b = element[0].toLowerCase();
  c += b + element.slice(1, element.length) + " ";
});
console.log(c);
//--------------------------------
function random(min, max) {
  return Math.ceil(min + Math.random() * (max - min));
}
console.log(random(12, 15));
let number;
//--------------------------------
let mod = Array(),
  ostat;
let ii = Array();
function binar(number) {
  while (number > 0) {
    ostat = number % 2;
    mod += ostat;
    number = Math.floor(number / 2);
    // console.log(mod);
  }
  for (let i = mod.length - 1; i >= 0; i--) {
    ii += mod[i];
    ii = ii.split(" ");

    ii = ii.join("");
  }
  console.log(ii);
}
binar(12);
