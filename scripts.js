window.onload=function(){
let bouton = document.getElementById('central-bloc');
let g = document.getElementById('g');
let c = document.getElementById('c');

bouton.addEventListener("mouseover", function( event ) {
  // on met l'accent sur la cible de mouseover
  g.style.transform = "translate(-30px, -30px)";
  g.style.transitionDuration = '1s';
 
  c.style.transform = "translate(30px, 30px)";
  c.style.transitionDuration = '1s';
  
}, false); 
  
  bouton.addEventListener("mouseleave", function( event ) {
    g.style.transform = "";
  g.style.transitionDuration = '1s';
 
  c.style.transform = "";
  c.style.transitionDuration = '1s';
});
}
