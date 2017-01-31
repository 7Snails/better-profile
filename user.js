// ==UserScript==
// @name         Better Profile
// @version      0.1
// @description  Adds more cool stuff to your profile!
// @author       @7Snails
// @match        https://scratch.mit.edu/users/*
// @match        http://scratch.mit.edu/users/*
// @grant        none
// ==/UserScript==

var username = "7Snails";//Scratch.INIT_DATA.LOGGED_IN_USER.model.username;

var xmlhttp = new XMLHttpRequest(),
        parsedJSON;
if(window.location.href.includes("scratch.mit.edu/users/") === true) {


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
