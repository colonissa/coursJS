console.log("date du jour");
var date = new Date("2022-05-25");
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getTime());
console.log(date.getMinutes());

var demain = new Date(2022, 04, date.getDate() + 2);
console.log(demain);

// comparer deux dates
console.log(date.valueOf() === demain.valueOf());
var difference = demain.getTime() - date.getTime();
console.log(difference);
