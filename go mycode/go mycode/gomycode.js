var titre=document.getElementById("titre");
titre.style.color="red";

var getText=document.getElementById("changestyle")

function Weight(){
    event.preventDefault();
    getText.style.fontWeight="bold";
}

function Style(){
    event.preventDefault();
    getText.style.fontStyle="italic";
}

function Decoration(){
    event.preventDefault();
    getText.style.textDecoration="underline";
}

function Size(){
    event.preventDefault();
    var x=document.getElementById("bam").value;
    getText.style.fontSize=x;
}


function Family(){
    event.preventDefault();
    var y=document.getElementById("splash").value;
    getText.style.fontFamily=y;
}

