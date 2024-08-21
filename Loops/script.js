console.log('Loop');
//for loop
let myarry=["Apple","Banana","Grapes"];
console.log("myarray",myarry);
for(index=0;index<myarry.length;index++)
    {
//console.log('my',myarry);
       console.log(index,myarry[index]);
}
//for-in loop
let mydetails = {fname: "jaya",
    sname: "Gandla",
};
console.log("mydetails",mydetails);
for (const key in mydetails) {
  console.log(key);
}
//for-of loop
for (const iterator of myarry) {
    console.log(iterator);
}
//access the values
//entries()we can use for the get key and value of object
//key()used for  get the key
//values()used for get the value 
for (const [index,values] of myarry.entries()) {
    console.log(index,values);
}
//object inside object for-of loop
let workingHours = {
    Thu:{open:"10 AM", close:"11 PM"},
    Fri:{open:"10 AM", close:"11 PM"},
    Sat:{open:"10 AM", close:"11 PM"},
};
console.log("workingHours",workingHours);
//destracturing Array 
/*for (const [key,value] of Object.entries(workingHours)) {
console.log(key,value);
    
}*/
//agin destructuring to get the values
for (const [key,{open,close}] of Object.entries(workingHours)) {
   console.log(key,open,close); 
   //console.log('on'  +  key + 'we open at '+ open+ 'close at '+close);

//best practice for use string iterposotion
console.log(`on ${key} we open at ${open} and we close at ${close}`);

}