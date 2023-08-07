const title = "Mystery Box ";
const author = "charvi";
const likes = 30;

//concatenation way
let res =
  "The blog called " + title + " by " + author + " has " + likes + " likes ";
console.log(res);

//template string way
let reslt = `the blog called ${title} by ${author} has ${likes} likes`;
console.log(reslt);
// creating html templates
let html = `
 <h2>${title}</h2>
 <p>By ${author}</p>
 <span>This blog has ${likes}</span>
 `;
console.log(html);

//nan and undefined
let age;
console.log(age, age + 3, "the age is ${age}");
