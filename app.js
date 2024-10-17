// // let btn = document.querySelector("button");
// // console.dir(btn);

// //but if we want to click on mutiple buttons then
// let btns = document.querySelectorAll("button");
// console.dir(btns);


// // btn.onclick = function(){
// //     console.log("button was clicked ");
// // };

// // or we can write like this
// function sayHello(){
//     alert("Hello");
// };

// //btns.onclick = sayHello;
// // now as we have many buttons so we use loop to set onclick property on each
// for(btn of btns){
//     btn.onclick = sayHello;
//     btn.onmouseenter = function(){
//         console.log("you clicked button");
//     }
// }




            // Event Listeners
    // we have learned two methods , inline event in html like onclick and onmouseenter
    // second was creating functions for event occurance 
    // third now we will learn Event Listeners
    // addEventListener
    // element.addEventListener(event, callback);
    // event can be click, drag or key press etc.

let btns = document.querySelectorAll("button");
for(btn of btns){
   // console.dir(btn);
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", dblClicked);
    
}

function sayHello(){
    console.log("hello");
}

function sayName(){
    console.log("Bheesham");
}

function dblClicked(){
    console.log("you double clicked");
}