const nav = document.querySelector("#primary-navigation");
const menuBtn = document.querySelector(".menu-btn");

// when menuBtn is clicked
menuBtn.addEventListener("click", ()=>{
  const visibility = nav.getAttribute("data-visible");
  console.log(visibility)
  if(visibility === "false"){
    nav.setAttribute("data-visible", true);
    menuBtn.setAttribute("aria-expanded", true);
  }else{
    nav.setAttribute("data-visible", false);
    menuBtn.setAttribute("aria-expanded", false);
  }

})