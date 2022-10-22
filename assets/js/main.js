let mobile_menu = document.getElementById("mobile_menu");
// //Die Striche vom Menu verstecken
// let getHeaderDiv = document.querySelector(".div_menu");

function showMenu() {
    console.log("show menu")
    mobile_menu.style.left = "80%";
    mobile_menu.style.right = 0;
    // //Die Striche vom Menu verstecken
    // getHeaderDiv.style.display = "none";

}

function closeMenu() {
    console.log("close menu")
    mobile_menu.style.left = "100%"
    mobile_menu.style.right = "-100%"
    // //Die Striche vom Menu wieder holen
    // getHeaderDiv.style.display = "flex";
}