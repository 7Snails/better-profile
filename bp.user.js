// ==UserScript==
// @name         Better Profile
// @version      0.1
// @description  Adds more cool stuff to your profile!
// @author       @7Snails
// @match        https://scratch.mit.edu/users/*
// @match        http://scratch.mit.edu/users/*
// @grant        none
// @downloadURL  https://github.com/7Snails/better-profile/raw/master/bp.user.js
// @updateURL    https://github.com/7Snails/better-profile/raw/master/bp.user.js
// ==/UserScript==

var URL = window.location.href
if(URL.includes("scratch.mit.edu/users/") === true) {
        
var username = URL.split("/")[4];
console.log(username)

var xmlhttp = new XMLHttpRequest(),
        parsedJSON;



    xmlhttp.open('GET', 'https://api.scratch.mit.edu/users/' + username, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        parsedJSON = JSON.parse(xmlhttp.responseText);
        var joindate = parsedJSON.history.joined;
        console.log(joindate);
      }
   };
}
