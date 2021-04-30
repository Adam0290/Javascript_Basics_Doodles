let body = document.querySelector("body"); // Body Node //

let h1 = document.createElement("h1"); // createElement >>> Created a h1 Node. //
h1.innerHTML = "Hello World!"; // Gave it a Value. //
body.appendChild(h1); // appendChild  >>> This line of code has attached the h1 to the Body Node, and thus visible on the page. //

// Append means attaching something to the end of something. //

let d = document.createElement("div"); // Created a div. //
d.innerHTML = "I'm a div";
body.appendChild(d); // styling the div (CSS) //
d.style.height = "100px";
d.style.width = "100px";
d.style.backgroundColor = "green";

// If I wanted to style it externally I can create a class name and style in the HTML / CSS page. //

d.className = "card"; // Now I can go on the external stylesheet and use .card to style the property. //

body.removeChild(d); // removeChild >>>> This removes the property >>> no longer a child of the body. //



// let d = document.getElementById("div1"); getElementById >>>> Grabbing the ID from the HTML code. //

// let d = document.getElementsByClassName("box"); // getElementsByClassName >>>> Grabbing the class from the HTML code. //

// let d = document.getElementsByName("d1");  // getElementsByName >>>> from the HTML code. //

// let d = document.getElementsByTagName("d1");  // getElementsByTagName >>>> select the tag name. //


// querySelector are used to style CSS in Javascript. //


// let d = document.querySelector("div"); // Grab this node to manipulate it (styling) //

// let d = document.querySelector("d1"); // Select by Name //

// let d = document.querySelector(".box"); // Select by Class //

// let d = document.querySelector("#div1"); // Select by ID //



// ID is ALWAYS unique  >>>>>> Class can be given to multiple elements //

