'use strict';

const setActive = function(menuItems, className) {
    for (let i = 0; i < menuItems.length; i++) {
        if (document.location.href !== menuItems[i].href) {
            continue;
        }
        menuItems[i].className = className + " active";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const navMenu = document.getElementById("nav");
    const menuItems = navMenu.getElementsByTagName("a");
    setActive(menuItems, "navLink")
})