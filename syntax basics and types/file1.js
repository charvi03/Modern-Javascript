// alert("hello");
//variables rules
console.log(1);
let age = 22;
let year = 2001;
console.log(age, year);
age = 30;
console.log(age);

const points = 100;
// points = 100;
// console.log(points);

var score = 75;
console.log(score);
//strings
console.log("hello");
let email = "charvi@gmail.com";
console.log(email);

//string concatenation
let firstname = "hello";
let lastname = "world";
let fullname = firstname + " " + lastname;
console.log(fullname);
//getting charcaters
console.log(fullname[2]);
//string length
console.log(fullname.length);

// string methods
console.log(fullname.toUpperCase());
console.log(fullname.toLowerCase());
let index = email.indexOf("@");
console.log(index);

//common string methods
let result1 = email.lastIndexOf("i");
console.log(result1);
let result2 = email.slice(0, 7);
console.log(result1);
let result3 = email.substring(3, 8);
console.log(result3);
let result4 = email.replace("i", "e");
console.log(result4);
