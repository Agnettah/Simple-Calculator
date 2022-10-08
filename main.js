// alert("Hello world")
let num1=120;
let num2=240;
let sum=summartion(num1,num2);
console.log(sum);
function summartion(a,b){
    return a+b;
}
var values=[20,30,40,50]
console.log(values.length);
values.push(60);
values.unshift;

const product= {
    name:"veggies",
    price:200,
    qty:5,
    total:function(){
        return this.price*this.qty;

    }
}
console.log(product.total);
sum=summartion(num1,num2);
//<p>0</p>


function summartion(){
    const a=document.getElementById("num1");
    const b=document.getElementById("num2");
    const sum=parseFloat(a.value)+ parseFloat(b.value)
    const output=document.getElementById("output");
    output.innerHTML=sum;
}

const sumBtn=document.getElementById("sum")
sumBtn.addEventListener("click",
function () {
    summartion()
})
