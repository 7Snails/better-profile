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


var username = URL.split("/")[4];

var xmlhttp = new XMLHttpRequest(),
  parsedJSON;



xmlhttp.open('GET', 'https://api.scratch.mit.edu/users/' + username, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
    parsedJSON = JSON.parse(xmlhttp.responseText);
    var joindate = parsedJSON.history.joined;
    var newjoindate = joindate.split("T")[0].split("-");
    newjoindate = newjoindate[1] + "/" + newjoindate[2] + "/" + newjoindate[0];
    //console.log(newjoindate);
    var node = document.createElement("P");
    var textnode = document.createTextNode(newjoindate);
    node.appendChild(textnode);
    document.getElementsByClassName("footer")[0].appendChild(node);
  }
};
