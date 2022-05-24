console.log("bonjour string");
var bonjour = `bonjour gateway`;
console.log(bonjour);
var hello = String("bonjour le monde");
console.log(hello);
var bon = String(40);
console.log(bon);
var chiffre = 2022;
console.log(chiffre.toString());
console.log(typeof chiffre.toString());
var joy = "hygo fghj gkggjk";
console.log(joy.length);
console.log(chiffre.toString().length);
var chiffString = chiffre.toString();
console.log(chiffString.length);
var z = 2035;
console.log(z.toString().length);

// concatenation

var bonsoir = "bonsoir";
var leMonde = "le monde";
console.log(bonsoir + " " + leMonde);
console.log("bonsoir" + " marc " + "le monde");
console.log(bonsoir.concat(" ").concat(leMonde));
console.log(`${bonsoir} ${leMonde}`);
bonsoir = bonsoir.split("");
bonsoir = bonsoir.reverse();
bonsoir = bonsoir.join("");
console.log(bonsoir);

// comparaison des chaine de caractere

var alice = "alice";
var banane = "banane";
console.log(alice.localeCompare("alice"));
console.log(alice == "alice");
console.log(2022 === "2022");

var fruits = ["ananas", "mangue", "guayave", "pqsteque", "papaye"];
fruits.sort(function (a, b) {
  return a.localeCompare(b);
});
console.log(fruits);

console.log(alice.charAt(10));

console.log(alice[2]);

console.log(alice.indexOf("ce"));

var phrase = "bienvenu a douala";
console.log(phrase.includes("rue"));

var texFaux = "je ss ma ss mappelle ss jean ss";
texFaux = texFaux.split("ss");
texFaux = texFaux.join("");
console.log(texFaux);

var text1 = "je ss ma ss mappelle ss jean ss";
text1 = text1.replace("ss", "");
console.log(text1);
console.log("alice".toUpperCase());

console.log("ha".repeat(10));
