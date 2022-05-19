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
