function menuclick() {
const menu = document.getElementById("menu");
const menutopspan = document.getElementById("menutopspan");
const menubottomspan = document.getElementById("menubottomspan");
const main = document.getElementById("main");
const menulinkslist = document.getElementById("menulinkslist");
const projects = document.getElementById("projects");
const bubblecodes = document.getElementById("bubblecodes");
const title = document.getElementById("title");
const redflex = document.getElementById("redflex");

menutopspan.classList.toggle("active");
menubottomspan.classList.toggle("active");
menu.classList.toggle("active");
main.classList.toggle("active");
menulinkslist.classList.toggle("active");
projects.classList.toggle("active");
bubblecodes.classList.toggle("active");
title.classList.toggle("active");
redflex.classList.toggle("active");
}