function login(){
  var user = document.getElementById("user").value;
  var pass = document.getElementById("Pass").value;
  if (user =='saicharts' && pass=='123'){
    window.open('index.html');
  }
  else{
    alert('Wrong username or password');
  }
}
