const pages=[
    {
        page:"Home",
        navigate: homePage
    },
    {
        page:"About",
        navigate: about
    },
    {
        page:"Interact",
        navigate: interact
    }
]


function navButton(pg, pr, nv){
    let button = document.createElement("button");
    button.innerHTML=pg;
    button.addEventListener("click", function(){
        document.body.querySelector(".wrapper").innerHTML=""
        nv();
    })
    pr.appendChild(button);
}

function navigation (){
    let nav=document.createElement("nav");
    let wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    nav.style.height="100px";
    nav.style.backgroundColor="green";
    for(obj of pages){
        navButton(obj.page, nav, obj.navigate)
    }
    document.body.appendChild(nav);
    document.body.appendChild(wrapper);
}

function homePage(){
    let home = document.createElement("h1");
    home.innerHTML= "Home Page";
    document.body.querySelector(".wrapper").appendChild(home);
}

function about(){
    let about = document.createElement("h1");
    about.innerHTML="About";
    document.body.querySelector(".wrapper").appendChild(about);
    let dale = document.createElement("h3");
    dale.innerHTML="Dale";
    document.body.querySelector(".wrapper").appendChild(dale);
}

function interact() {
    let interact = document.createElement("h2");
    interact.innerHTML = "Interact";
    document.body.querySelector(".wrapper").appendChild(interact);
    let count = document.createElement("h3");
    count.innerHTML = "Counter";
    document.body.querySelector(".wrapper").appendChild(count);
    counterButton();

}

function counterButton() {
    let button1 = document.createElement("button");
    button1.innerHTML="Increase";
    document.body.querySelector(".wrapper").appendChild(button1);
}
// let counterNumber = 0;
// function counter() {
//     updateDisplay(++counterNumber);}
//
// function counterNumber() {
//     let counterNumber = document.createElement("h3");
//     counterNumber.innerHTML = value;
//     document.body.querySelector(".wrapper").appendChild(counterNumber);
// }
// function updateDisplay(value) {
//     document.getElementById(counter()).innerHTML = value;}
//
navigation()
homePage()
