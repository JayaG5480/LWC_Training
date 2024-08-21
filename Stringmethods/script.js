console.log("string Methods");
let mystring="We are learning javascript";
console.log("mystring",mystring);
//includes method
let Im1=mystring.includes("java");
console.log(Im1);
//indexof method
let mycountry = "I love India";
console.log('mycountry',mycountry);
let mc=mycountry.indexOf("I"); 
console.log(mc);
//startswith method
let cm=mycountry.startsWith("I");
console.log("cm",cm);
//slice method
let m=mycountry.slice(2, 3);
console.log(m);
//splice method
//let n=mycountry.splice(1,3);
//console.log('n',n);
//length method
let l = mycountry.length;
console.log('l',l);
//split method
let sp = mycountry.split(" ");
console.log("sp",sp);
//join Method
let joined = ["jaya","is","looking","good"];
let joinedstring = joined.join(" ");
console.log("joinedstring",joinedstring);
//tolowercase and toupparcase
let tlc= mycountry.toLocaleLowerCase();
console.log("tlc",tlc);
let toup = mycountry.toUpperCase();
console.log("toup",toup);
//if user gives different formet we conver single formet below like this 
let nam = "JaYa";
console.log("nam",nam);
let lowercs=nam.toLocaleLowerCase();
console.log("lowercs",lowercs);
let correctedName=lowercs.charAt(0).toUpperCase()+lowercs.slice(1);
console.log("correctedName",correctedName);