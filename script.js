/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

/*-----------------------------------------------------
KEVIN
------------------------------------------------------*/



/*---------------------------------------------------------------
FIN-------------------------------------------------------------*/


/* "The troll guest" Just open the developer tools (with the F12 key) on any browser and, in the console tab, copy and paste this */

_img = document.createElement("img");
_img.style.position = 'absolute';
_img.style.margin = '0';
_img.style.zIndex = '1000';
_img.onload = function() {
  document.body.insertBefore(_img, document.body.firstChild);
  setInterval(function(){
    document.getElementById('char1').style.left = Math.floor(Math.random() * (window.innerWidth - _img.width))+'px';
    document.getElementById('char1').style.top = Math.floor(Math.random() * (window.innerHeight - _img.height))+'px';
    var randomRot = (-45+Math.floor((Math.random()*90)));
    document.getElementById('char1').style.transform = 'rotate('+randomRot+'deg)';
    document.getElementById('char1').style.webkitTransform = 'rotate('+randomRot+'deg)';

  }, 1500);
}


