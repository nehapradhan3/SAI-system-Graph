/*
* @author Neha Pradhan
* 17th May 2017
*/

!function ($) {
 'use strict';

/*
 * login form check values
*/

 $("#login-submit" ).click(function( event ) {

   event.preventDefault();
   var emailVal = $('.login-email').val().trim(),
       passwordVal = $('.login-password').val().trim();
  //validation logic
  if(emailVal.length <= 0 || emailVal == null || passwordVal.length <=0 || passwordVal == null){
    $.notify("Insufficient information !", "error");
  }else if(emailVal.length >= 1 &&  passwordVal.length >=1 ){
     if(emailVal =="saicharts" && passwordVal =="123"){ //change this with backend
    	 localStorage.setItem('login', true);
    	 $("#form").submit();
       window.location.href = "index.html"; 
     }
    $.notify("Use email:saicharts and password:123 to login", "info");
  }
});
 
// user logout actons
$('#user-logout').off('click');
$('#user-logout').on('click', function(){
  localStorage.removeItem('login')
  window.location.href = "index.html"; // redirect to index.html
})
}(jQuery);

