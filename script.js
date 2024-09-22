//home page
let heroBtn = document.querySelector(".hero-btn");
let homePage = document.querySelector(".hero");
//education page
let educationBtn = document.querySelector(".education-btn");
let educationPage = document.querySelector(".education");
// skills page
let skillsBtn = document.querySelector(".skills-btn");
let skillsPage = document.querySelector(".skills");
//services page
let servicesBtn = document.querySelector(".services-btn");
let servicesPage = document.querySelector(".services");
//contact page
let contactBtnNav = document.querySelector(".contact-btn-nav");
let contactPage = document.querySelector(".contact");
//left and right door
let leftDoor = document.querySelector(".left-door");
let rightDoor = document.querySelector(".right-door");
////////
// skills progress bars and % //
// html
let htmlBar = document.querySelector(".html-bar");
let htmlPersent = document.querySelector(".html-persent>p");
// css
let cssBar = document.querySelector(".css-bar");
let cssPersent = document.querySelector(".css-persent>p");
//js
let jsBar = document.querySelector(".js-bar");
let jsPersent = document.querySelector(".js-persent");
//react
let reactBar = document.querySelector(".react-bar");
let reactPersent = document.querySelector(".react-persent");
//nodejs
let nodejsBar = document.querySelector(".nodejs-bar");
let nodejsPersent = document.querySelector(".nodejs-persent");
//python
let pythonBar = document.querySelector(".python-bar");
let pythonPersent = document.querySelector(".python-persent");
//django
let djangoBar = document.querySelector(".django-bar");
let djangoPersent = document.querySelector(".django-persent");
//c
let cBar = document.querySelector(".c-bar");
let cPersent = document.querySelector(".c-persent");
//git
let gitBar = document.querySelector(".git-bar");
let gitPersent = document.querySelector(".git-persent");
////////
// circle progress bar animanion
let circleProBar = document.querySelector(".progressbar");
////////
const skillsAnimations1 = () => {
  htmlBar.setAttribute("style", "animation-name:html-pro-bar-var-1;");
  cssBar.setAttribute("style", "animation-name:css-pro-bar-var-1;");
  jsBar.setAttribute("style", "animation-name:js-pro-bar-var-1;");
  reactBar.setAttribute("style", "animation-name:react-pro-bar-var-1;");
  nodejsBar.setAttribute("style", "animation-name:nodejs-pro-bar-var-1;");
  pythonBar.setAttribute("style", "animation-name:python-pro-bar-var-1;");
  djangoBar.setAttribute("style", "animation-name:django-pro-bar-var-1;");
  cBar.setAttribute("style", "animation-name:c-pro-bar-var-1;");
  gitBar.setAttribute("style", "animation-name:git-pro-bar-var-1;");
  circleProBar.classList.add("progressbar-animation-1");
  circleProBar.classList.remove("progressbar-animation-2");
};
const skillsAnimations2 = () => {
  htmlBar.setAttribute("style", "animation-name:html-pro-bar-var-2;");
  cssBar.setAttribute("style", "animation-name:css-pro-bar-var-2;");
  jsBar.setAttribute("style", "animation-name:js-pro-bar-var-2;");
  reactBar.setAttribute("style", "animation-name:react-pro-bar-var-2;");
  nodejsBar.setAttribute("style", "animation-name:nodejs-pro-bar-var-2;");
  pythonBar.setAttribute("style", "animation-name:python-pro-bar-var-2;");
  djangoBar.setAttribute("style", "animation-name:django-pro-bar-var-2;");
  cBar.setAttribute("style", "animation-name:c-pro-bar-var-2;");
  gitBar.setAttribute("style", "animation-name:git-pro-bar-var-2;");
  circleProBar.classList.add("progressbar-animation-2");
  circleProBar.classList.remove("progressbar-animation-1");
};
/////////
//home page
const setHome1 = () => {
  heroBtn.setAttribute("onclick", "setHome2()");
  contactPage.setAttribute("style", "z-index: -1;");
  servicesPage.setAttribute("style", "z-index: -1;");
  skillsPage.setAttribute("style", "z-index: -1;");
  educationPage.setAttribute("style", "z-index: -1;");
  leftDoor.setAttribute("style", "animation-name:left-door-1;");
  rightDoor.setAttribute("style", "animation-name:right-door-1;");
  homePage.setAttribute("style", "z-index: 1;");
  openMenuBar2() 
};
const setHome2 = () => {
  heroBtn.setAttribute("onclick", "setHome1()");
  contactPage.setAttribute("style", "z-index: -1;");
  servicesPage.setAttribute("style", "z-index: -1;");
  skillsPage.setAttribute("style", "z-index: -1;");
  educationPage.setAttribute("style", "z-index: -1;");
  leftDoor.setAttribute("style", "animation-name:left-door-2;");
  rightDoor.setAttribute("style", "animation-name:right-door-2;");
  homePage.setAttribute("style", "z-index: 1;");
  openMenuBar2() 
};
// education page
const setEdu1 = () => {
  educationBtn.setAttribute("onclick", "setEdu2()");
  contactPage.setAttribute("style", "z-index: -1;");
  servicesPage.setAttribute("style", "z-index: -1;");
  skillsPage.setAttribute("style", "z-index: -1;");
  homePage.setAttribute("style", "z-index: -1;");
  leftDoor.setAttribute("style", "animation-name:left-door-3;");
  rightDoor.setAttribute("style", "animation-name:right-door-3;");
  educationPage.setAttribute("style", "z-index: 1;");
  openMenuBar2()
};
const setEdu2 = () => {
  educationBtn.setAttribute("onclick", "setEdu1()");
  contactPage.setAttribute("style", "z-index: -1;");
  servicesPage.setAttribute("style", "z-index: -1;");
  skillsPage.setAttribute("style", "z-index: -1;");
  homePage.setAttribute("style", "z-index: -1;");
  leftDoor.setAttribute("style", "animation-name:left-door-4;");
  rightDoor.setAttribute("style", "animation-name:right-door-4;");
  educationPage.setAttribute("style", "z-index: 1;");
  openMenuBar2()
};
//skills page
const setSkill1 = () => {
  skillsBtn.setAttribute("onclick", "setSkill2()");
  contactPage.setAttribute("style", "z-index: -1;");
  servicesPage.setAttribute("style", "z-index: -1;");
  educationPage.setAttribute("style", "z-index: -1;");
  homePage.setAttribute("style", "z-index: -1;");
  leftDoor.setAttribute("style", "animation-name:left-door-5;");
  rightDoor.setAttribute("style", "animation-name:right-door-5;");
  skillsPage.setAttribute("style", "z-index: 1;");
  skillsAnimations1();
  openMenuBar2()
};
const setSkill2 = () => {
  skillsBtn.setAttribute("onclick", "setSkill1()");
  contactPage.setAttribute("style", "z-index: -1;");
  servicesPage.setAttribute("style", "z-index: -1;");
  educationPage.setAttribute("style", "z-index: -1;");
  homePage.setAttribute("style", "z-index: -1;");
  leftDoor.setAttribute("style", "animation-name:left-door-6;");
  rightDoor.setAttribute("style", "animation-name:right-door-6;");
  skillsPage.setAttribute("style", "z-index: 1;");
  skillsAnimations2();
  openMenuBar2()
};
//services page
const setServ1 = () => {
  servicesBtn.setAttribute("onclick", "setServ2()");
  contactPage.setAttribute("style", "z-index: -1;");
  skillsPage.setAttribute("style", "z-index: -1;");
  educationPage.setAttribute("style", "z-index: -1;");
  homePage.setAttribute("style", "z-index: -1;");
  leftDoor.setAttribute("style", "animation-name:left-door-7;");
  rightDoor.setAttribute("style", "animation-name:right-door-7;");
  servicesPage.setAttribute("style", "z-index: 1;");
  openMenuBar2()
};
const setServ2 = () => {
  servicesBtn.setAttribute("onclick", "setServ1()");
  contactPage.setAttribute("style", "z-index: -1;");
  skillsPage.setAttribute("style", "z-index: -1;");
  educationPage.setAttribute("style", "z-index: -1;");
  homePage.setAttribute("style", "z-index: -1;");
  leftDoor.setAttribute("style", "animation-name:left-door-8;");
  rightDoor.setAttribute("style", "animation-name:right-door-8;");
  servicesPage.setAttribute("style", "z-index: 1;");
  openMenuBar2()
};
//contact page
let delayInMilliseconds = 1500; //1 second
const setContact1 = () => {
  contactBtnNav.setAttribute("onclick", "setContact2()");
  servicesPage.setAttribute("style", "z-index: -1;");
  skillsPage.setAttribute("style", "z-index: -1;");
  educationPage.setAttribute("style", "z-index: -1;");
  homePage.setAttribute("style", "z-index: -1;");
  leftDoor.setAttribute("style", "animation-name:left-door-9;");
  rightDoor.setAttribute("style", "animation-name:right-door-9;");
  contactPage.setAttribute("style", "z-index: 1;");
  openMenuBar2()
  setTimeout(function() {
    switchToContact()
  }, delayInMilliseconds);
};
const setContact2 = () => {
  contactBtnNav.setAttribute("onclick", "setContact1()");
  servicesPage.setAttribute("style", "z-index: -1;");
  skillsPage.setAttribute("style", "z-index: -1;");
  educationPage.setAttribute("style", "z-index: -1;");
  homePage.setAttribute("style", "z-index: -1;");
  leftDoor.setAttribute("style", "animation-name:left-door-10;");
  rightDoor.setAttribute("style", "animation-name:right-door-10;");
  contactPage.setAttribute("style", "z-index: 1;");
  openMenuBar2()
  setTimeout(function() {
    switchToContact()
  }, delayInMilliseconds);
};
const setContact3 = () => {
  contactBtnNav.setAttribute("onclick", "setContact2()");
  servicesPage.setAttribute("style", "z-index: -1;");
  skillsPage.setAttribute("style", "z-index: -1;");
  educationPage.setAttribute("style", "z-index: -1;");
  homePage.setAttribute("style", "z-index: -1;");
  leftDoor.setAttribute("style", "animation-name:left-door-9;");
  rightDoor.setAttribute("style", "animation-name:right-door-9;");
  contactPage.setAttribute("style", "z-index: 1;");
  // openMenuBar2()
  setTimeout(function() {
    switchToContact()
  }, delayInMilliseconds);
};
const sethire1 = () => {
  document.querySelector(".contact>h2").innerHTML='Mail&nbsp;<span>Me</span>'
  contactBtnNav.setAttribute("onclick", "setContact2()");
  servicesPage.setAttribute("style", "z-index: -1;");
  skillsPage.setAttribute("style", "z-index: -1;");
  educationPage.setAttribute("style", "z-index: -1;");
  homePage.setAttribute("style", "z-index: -1;");
  leftDoor.setAttribute("style", "animation-name:left-door-9;");
  rightDoor.setAttribute("style", "animation-name:right-door-9;");
  contactPage.setAttribute("style", "z-index: 1;");
  // openMenuBar2()
};
const switchToContact=()=>{
  document.querySelector(".contact>h2").innerHTML='Contact&nbsp;<span>Me</span>'
}

//SELECT THE :ROOT PROPERTY
let rootColor = document.querySelector(":root");
//ONLOAD FUNCTION
const mainColorChange = () => {
  const c1 = "#ff0015";
  const c2 = "#FF00FE";
  const c3 = "#00ff48";
  const c4 = "#00ffff";
  let mainColorNumber = Math.floor(Math.random() * 4) + 1;
  console.log(mainColorNumber);
  switch (mainColorNumber) {
    case 1:
      rootColor.style.setProperty("--main-color", "#ff0015");
      break;
    case 2:
      rootColor.style.setProperty("--main-color", "#FF00FE");
      break;
    case 3:
      rootColor.style.setProperty("--main-color", "#00ff48");
      break;
    case 4:
      rootColor.style.setProperty("--main-color", "#00ffff");
      break;
  }

  // rootColor.style.setProperty('--main-color', '#00ff48');
};
// MENU CONTROLLER 
let menuIcon = document.querySelector(".menu-icon");
let navMenu = document.querySelector(".nav-list");
let menuIconI = document.querySelector(".menu-icon>i");
const openMenuBar1 = () => {
  navMenu.setAttribute("style", "animation-name: menuBabAnimation-2;");
  menuIcon.setAttribute("onclick", "openMenuBar2()");
  menuIconI.setAttribute("class", "ri-menu-unfold-2-line menu-i");
};
const openMenuBar2 = () => {
  navMenu.setAttribute("style", "animation-name: menuBabAnimation-1;");
  menuIcon.setAttribute("onclick", "openMenuBar1()");
  menuIconI.setAttribute("class", "ri-menu-fold-2-line menu-i");
};
