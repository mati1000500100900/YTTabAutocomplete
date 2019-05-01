// ==UserScript==
// @name         Youtube Tab
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bash-like tab autocomplete
// @author       mati1000500100900
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector("#search").addEventListener("keydown", tabPressed);
})();

function tabPressed(event){
    if(event.keyCode==9){
        event.preventDefault();
        var chosenOne = document.querySelector("#sbse0").querySelector('.sbqs_c').querySelector("b");
        event.target.value+=chosenOne.innerText.trim().split(' ')[0]+" ";
    }
}