console.log('Array Methods');
let mycities=["Hyderaba","AP"];
console.log("My cities",mycities);
//Pop Method------by using this mthod we can remove last element
let mycities1=mycities.pop();
console.log("Pop method",mycities1);
console.log("After Pop Method",mycities);
//Push ------ By using this we add element at the last
 mycities.push("MP");
console.log("Push Method",mycities);
//shift---remove the first elemnt of the Array 
mycities.shift();
console.log("shift method",mycities);
console.log("after shift method",mycities);
//unshift---add element at the first
mycities.unshift("TS");
console.log("Unshift Method",mycities);
//join ------ change Array to string 
let myarray =["My","Name","is","Jaya"];
console.log("before Join method",myarray);
let joinArray = myarray.join(" ");
console.log("after Join Method---->",joinArray);
let joinArray1 = myarray.join("***");
console.log("Join method",joinArray1);
//tostring method ----> it is also covert Array in to the string by using","
let mytostring = myarray.toString();
console.log("tostring method",mytostring);
//sort method----->Sorts the elements of an array in place and returns the array.
let mysortmethod = myarray.sort();
console.log("sort method",mysortmethod);
//reverse method----> Reverses an array in place.  The first array element becomes the last and the last becomes the first.
let reversem = myarray.reverse();
console.log("Reverse Method",reversem);
//concat method---->Returns a new array comprised of this array joined with other array(s) and/or value(s).
let newArray = ["Vikram"];
let contactm = newArray.concat(myarray);
console.log("contact Array",contactm);
console.log(myarray.concat(newArray));
//indexof method---->Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
//let indexofm = myarray.indexOf("is");
console.log(myarray.indexOf("is"));
//filter method---->
console.log (myarray.filter())