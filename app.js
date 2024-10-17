// let btn = document.querySelector("button");
// console.dir(btn);

//but if we want to click on mutiple buttons then
let btns = document.querySelectorAll("button");
console.dir(btns);


// btn.onclick = function(){
//     console.log("button was clicked ");
// };

// or we can write like this
function sayHello(){
    alert("Hello");
};

//btns.onclick = sayHello;
// now as we have many buttons so we use loop to set onclick property on each
for(btn of btns){
    btn.onclick = sayHello;
    btn.onmouseenter = function(){
        console.log("you clicked button");
    }
}