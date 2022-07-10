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

// side bar
let sidebar = document.querySelector(".sidebar")
let  bars = document.querySelector(".bars")

window.matchMedia("(max-width : 768px)").matches ? sidebar.classList.remove("active") : sidebar.classList.add("active")

bars.addEventListener("click", () => {
  sidebar.classList.contains("active") ? sidebar.classList.remove("active") : sidebar.classList.add("active")
})

// botão do botão ação 
function actionDropdown(id) {
// minha solução
  // let dropdownActionItem = document.querySelector(".dropdown-action-item")
  // dropdownActionItem.classList.contains("show-dropdown-action")? dropdownActionItem.classList.remove("show-dropdown-action") : dropdownActionItem.classList.add("show-dropdown-action")
  
  closeDropdownAction()
  // solução do celke
  document.getElementById("actionDropdown" + id).classList.toggle("show-dropdown-action")
}

// fechando a pagina
window.onclick = function(event) {
  if(!event.target.matches(".dropdown-btn-action")){
    // document.getElementById("actionDropdown").classList.remove("show-dropdown-action")
    closeDropdownAction()
  }
}

function closeDropdownAction () {
  var dropdowns = document.getElementsByClassName("dropdown-action-item")
  var i;
  for(i= 0; i< dropdowns.length; i++){
    var openDropdown = dropdowns[i]
    if(openDropdown.classList.contains("show-dropdown-action")){
      openDropdown.classList.remove("show-dropdown-action")
    }

  }
}
  