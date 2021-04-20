menu.onclick= function getMenu(){
  let x = document.getElementById("navigate");
  let y= document.getElementById("MyNav");
  if(x.className === "topnav") {
    x.className += " responsive";
    y.className +=" resp";

  }else{
    x.className="topnav";
    y.className=" nav"
  }
}


/*const menu = document.querySelector('#menu'),
x = document.querySelector('#navigate');


menu.addEventListener('click', function() {
x.classList.toggle('responsive');
}); */

let y= document.getElementById("MyNav");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }

}

// function scrollFunctionforNav() {
//   if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 170) {
//        y.style.position = "fixed";
//        y.style.backgroundColor="#ecd083";

//     } else {
//       y.style.position="relative";
//       y.style.backgroundColor="transparent"

//     }

// }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



