function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

// slider script
var slides=document.querySelector('.slider-items').children;
var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var totalSlides=slides.length;
var index=0;

nextSlide.onclick=function () {
    next("next");
}
prevSlide.onclick=function () {
    next("prev");
}

function next(direction){

  if(direction=="next"){
     index++;
      if(index==totalSlides){
       index=0;
      }
  } 
  else{
          if(index==0){
           index=totalSlides-1;
          }
          else{
           index--;
          }
   }

 for(i=0;i<slides.length;i++){
         slides[i].classList.remove("active");
 }
 slides[index].classList.add("active");     

}



// Contact form



function withkeychecking(){
    // Declaring variables for picking the values

    var username = document.getElementById("user").value;
    var email = document.getElementById("mail").value;
    var comments = document.getElementById("comments").value;

    // patrrens
    var usernamepattren = /^[A-Za-z]{3,40}$/;
    var emailpattren = /^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|\"[a-zA-Z0-9.+!% -]{1,64}\")@[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$/;
    var commentspattren = /^[A-Za-z]{3,150}$/;

    // check statment for user name

    if (usernamepattren.test(username)){
        document.getElementById("user").style.backgroundColor = "#9ffeb0";
        
    }
    else{
        document.getElementById("user").style.backgroundColor = "#f5bec7";
        return false;
    }

    
    // check statment for mail
    
    if (emailpattren.test(email)){
        document.getElementById("mail").style.backgroundColor = "#9ffeb0";
    }
    else{
        document.getElementById("mail").style.backgroundColor = "#f5bec7";
        return false;
    }

    // check statment for comments
    if (commentspattren.test(comments)){
        document.getElementById("comments").style.backgroundColor = "#9ffeb0";
    }
    else{
        document.getElementById("comments").style.backgroundColor = "#f5bec7";
        return false;
    } 

}







function validateloginForm(){
    // Declaring variables for picking the values

    var username = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    // patrrens
    var usernamepattren = /^[A-Za-z]{3,40}$/;
    var passwordpattren = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;

    

    // check styatment for user name

    if (usernamepattren.test(username)){
        document.getElementById("usernameerror").innerHTML = "";
        
    }
    else{
        document.getElementById("usernameerror").innerHTML = "** just characyers are allowed minimum 3";
        return false;
    }

    // check statment for Password
    
    if (passwordpattren.test(password)){
        document.getElementById("passworderror").innerHTML = "";
    }
    else{
        document.getElementById("passworderror").innerHTML = "** Password must be greater than 8 characters and alpha numeriac";
        return false;
    }

}





function loginWithKeyChecking(){
    // Declaring variables for picking the values

    var username = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    // patrrens
    var usernamepattren = /^[A-Za-z]{3,40}$/;
    var passwordpattren = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;

    // check statment for user name

    if (usernamepattren.test(username)){
        document.getElementById("user").style.backgroundColor = "#4d5d53";
        
    }
    else{
        document.getElementById("user").style.backgroundColor = "#f5bec7";
        return false;
    }

    // check statment for Password
    
    if (passwordpattren.test(password)){
        document.getElementById("password").style.backgroundColor = "#4d5d53";
    }
    else{
        document.getElementById("password").style.backgroundColor = "#f5bec7";
        return false;
    }
    

}

