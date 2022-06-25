// dropdown navbar

let avatar = document.querySelector(".avatar"),
  notification = document.querySelector(".notification");

dropMenu(avatar)
dropMenu(notification)

function dropMenu(selector){
  selector.addEventListener("click", () => {
    let dropdownMenu = selector.querySelector(".dropdown-menu");
    dropdownMenu.classList.contains("active")? dropdownMenu.classList.remove("active") : dropdownMenu.classList.add("active")
  })
}

// avatar.addEventListener("click", () => {
//     console.log('foi')
//   let dropdown_menu = document.querySelector(".dropdown-menu");
//   dropdown_menu.style.background = "red";
// });

