let x;
let y;
let z;

document.getElementById("button").onclick=function(){

    x=Math.floor(Math.random()*9)+1;
    y=Math.floor(Math.random()*9)+1;
    z=Math.floor(Math.random()*9)+1;

    document.getElementById("xlabel").innerHTML=x;
    document.getElementById("ylabel").innerHTML=y;
    document.getElementById("zlabel").innerHTML=z;
}

document.getElementById("button1").onclick=function(){

    x=Math.floor(Math.random()*9)+1;
    y=Math.floor(Math.random()*9)+1;

    document.getElementById("label1").innerHTML=x;
    document.getElementById("label2").innerHTML=y;
}