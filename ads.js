const adimages = [
    "gordonsunshinead.jpg",
    "lebron2.gif",
    "freeglendairyad.gif"
];
const adlinks = [
    "https://www.youtube.com/watch?v=Zj78r7CWJf8",
    "https://www.youtube.com/@OneyPlays",
    ""
];

let index1 = Math.floor( adimages.length *Math.random());
let index2 = Math.floor( adimages.length *Math.random());
let leftaddiv = document.createElement("div");
var leftlink = document.createElement("a");
leftlink.href = adlinks[index1];
var leftimg = document.createElement("img");
leftaddiv.style="position:absolute;left:0%; top:30%; width:7%;"
var leftbutton = document.createElement("button");
leftbutton.setAttribute("onclick", "leftaddiv.remove();");
leftbutton.className="adclose";
var leftadcloseimg = document.createElement("img");
leftadcloseimg.className = "adclose"
leftadcloseimg.src = "./adclose.png";
leftbutton.appendChild(leftadcloseimg);
leftimg.src = adimages[index1];
leftimg.style="width:100%";
leftlink.appendChild(leftimg);
leftaddiv.appendChild(leftlink);
leftaddiv.appendChild(leftbutton);
let rightaddiv = document.createElement("div");
var rightlink = document.createElement("a");
rightlink.href = adlinks[index2];
var rightimg = document.createElement("img");
var rightbutton = document.createElement("button");
rightbutton.setAttribute("onclick", "rightaddiv.remove();");
rightbutton.className="adclose";
var rightadcloseimg = document.createElement("img");
rightadcloseimg.className = "adclose"
rightadcloseimg.src = "./adclose.png";
rightbutton.appendChild(rightadcloseimg);
rightaddiv.style="position:absolute;right:0%; top:30%; width:7%;"
rightimg.src = adimages[index2];
rightimg.style="width:100%;";
rightaddiv.appendChild(rightbutton);
rightlink.appendChild(rightimg);
rightaddiv.appendChild(rightlink);
document.body.appendChild(leftaddiv);
document.body.appendChild(rightaddiv);