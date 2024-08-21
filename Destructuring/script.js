console.log("Destructuring");
let Myfruits={
    firstfruit:"Apple",
    secondfruit: "Banana",
    thirdfruit:"Mango",
};
console.log("Myfruits",Myfruits);
/*Array Destructuring
let [f1,f2,f3] = Myfruits;
console.log("f1",f1);
console.log("f2",f2);
console.log(f3);*/
//object destructuring
let {firstfruit,secondfruit,thirdfruit}=Myfruits;
console.log(firstfruit);
console.log(secondfruit);
console.log(thirdfruit);