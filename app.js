let p = document.querySelector("#p");
let cp = document.querySelector("#Cp");
let pv = document.querySelector("#pv");
let btn = document.querySelector("#btn");

btn.addEventListener("click", ()=>{
    PassValid();
});

function PassValid(){
    if(p.value !== cp.value || p.value == "" || cp.value == "" ){
        pv.innerHTML = "Entered Password and Confirm password do not match";
    } else {
        console.log("Passwords match, saved");
        // Here you can proceed with your form submission or any other action
        window.location.href = "/reg.html";
    }
}

function Done(){
    window.location.href = "/Done.HTML";
}