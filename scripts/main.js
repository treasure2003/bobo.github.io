let myButton  = document.querySelector("button");
let myH1 = document.querySelector("h1");

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myH1.textContent = "Mozilla 酷毙了," + storedName;
    
}
myButton.onclick  = function(){
    setUserName();
}


function setUserName(){
    let myName = prompt("请输入用户姓名...");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name",myName);
    myH1.textContent = "Mozilla 酷毙了," + myName;
    }
    
}