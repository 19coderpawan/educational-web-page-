const toogle_btn=document.querySelector(".toogle_btn")
const toogle_btn_icon=document.querySelector(".toogle_btn i")
const dropdown_menu=document.querySelector(".dropdown-menu")

toogle_btn.onclick=function(){
  dropdown_menu.classList.toogle('open');
  const isOpen=dropdown_menu.classList.contains('open');

  toogle_btn.classList=isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars fa-spin'
}


dropdownMenu.classList.toggle('open');
const isOpen = dropdownMenu.classList.contains('open');

toggleBtnIcon.classList = isOpen
  ? 'fa-solid fa-bars '
  : 'fa-solid fa-bars fa-spin';