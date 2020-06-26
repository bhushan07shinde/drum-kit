
for(let i=0;i<document.querySelectorAll(".drum").length;i++)
{

document.querySelectorAll(".drum")[i].addEventListener("click",ok);
function ok(){

   let x=this.innerHTML;
   band(x);
   animation(x);
 }
}




document.addEventListener("keydown",function(event){
  band(event.key);
  animation(event.key);
});

function band(M)
{
  switch (M) {
    case "w":
    let tom1=new Audio("sounds/tom-1.mp3");
    tom1.play();
    document.body.style.backgroundColor="orange";
      break;

    case "a":
    let tom2=new Audio("sounds/tom-2.mp3");
    tom2.play();
    document.body.style.backgroundColor="blue";
      break;

    case "s":
    let tom3=new Audio("sounds/tom-3.mp3");
    tom3.play();
    document.body.style.backgroundColor="yellow";
      break;

    case "d":
    let tom4=new Audio("sounds/tom-4.mp3");
    tom4.play();
    document.body.style.backgroundColor="black";
      break;

    case "j":
    let snare=new Audio("sounds/snare.mp3");
    snare.play();
    document.body.style.backgroundColor="#79d70f";
      break;

    case "k":
    let kick=new Audio("sounds/kick-bass.mp3");
    kick.play();
    document.body.style.backgroundColor="#fd2eb3";

      break;

    case "l":
    let crash=new Audio("sounds/crash.mp3");
    crash.play();
    document.body.style.backgroundColor="#6a197d";
      break;

    default:

  }

}


function animation(key)
{
  let button=document.querySelector("."+key);
  button.classList.add("pressed");
  setTimeout(function(){
    button.classList.remove("pressed");
  },100);
}
