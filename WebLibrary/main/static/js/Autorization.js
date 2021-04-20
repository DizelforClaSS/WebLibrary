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


const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('LastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
let flag=true;

fname.addEventListener('input',checkName);
lname.addEventListener('input',checkLastName);
email.addEventListener('input',checkEmail);
password.addEventListener('input', checkPass);
password2.addEventListener('input',checkPass2);

var validateBtn = form.querySelector('.validateBtn');
form.addEventListener('submit', function (event) {
  event.preventDefault(); //запрещает перезагурузку страницы
  if(checkInputs())
    form.submit();
})


function checkInputs(){

  flag=true;
  checkName();
  checkLastName();
  checkEmail();
  checkPass();
  checkPass2();
  return flag;
}

function setErrorFor(input, message){
  const formControl=input.parentElement;
  const small=formControl.querySelector('small');

  small.innerText=message;
  formControl.className='form-control error';
}

function setErrorForVeryLong(input, message){
  const formControl=input.parentElement;
  const small=formControl.querySelector('small');

  small.innerText=message;
  formControl.className='form-control errorverylong';
}

function setErrorForLong(input, message){
  const formControl=input.parentElement;
  const small=formControl.querySelector('small');

  small.innerText=message;
  formControl.className='form-control errorlong';
}

 function setSuccessFor(input){
   const formControl=input.parentElement;
   formControl.className='form-control success';
 }

 function isEmail(email){
   return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);
 }

 function correctName(name){
   return /^([A-ZА-Я]{1}[a-zа-я]{1,28})/.test(name);
 }

 function correctPass(password){
   return /(?=.*[0-9])(?=.*[a-zа-я])(?=.*[A-ZА-Я])[0-9a-zA-Zа-яА-Я!@#$%^&*]{8,}/.test(password)
 }

function checkName(){
  const fnameValue=fname.value.trim();
  if(fnameValue ===''){
    setErrorFor(fname, "Имя не должно быть пустым");
    flag=false;
  } else if(!correctName(fnameValue)){
    setErrorForLong(fname, "В имени может быть только 1 Большая буква, при этом длина фамилии не менее 2 символов");
    flag=false;
  }else{
    setSuccessFor(fname);
  }
}

function checkLastName(){
  const lnameValue=lname.value.trim();
  if(lnameValue ===''){
    setErrorFor(lname, "Фамилия не должно быть пустым");
    flag=false;
  }
  else if(!correctName(lnameValue)){
    setErrorForVeryLong(lname, "В фамилии может быть только 1 Большая буква, при этом длина фамилии не менее 2 символов");
    flag=false;
  }else
  {
    setSuccessFor(lname);
  }
}

function checkEmail(){
  const emailValue=email.value.trim();
  if(emailValue ===''){
     setErrorFor(email, "Почта не должна быть пустой");
     flag=false;
  }else if(!isEmail(emailValue)){
     setErrorFor(email, "Это не почта");
     flag=false;
  } else
  {
    setSuccessFor(email);
  }
}

function checkPass(){
  const passwordValue=password.value.trim();
  if(passwordValue ===''){
    setErrorFor(password, "Пароль не должен быть пустым");
    flag=false;
  }else if(!correctPass(passwordValue)){
     setErrorForLong(password, "Пароль должен содержать Прописные и строчные символы, а также цифры, а его длина не менее 8 символов");
     flag=false;
  }
  else{
    setSuccessFor(password);
  }
}

function checkPass2(){
  const passwordValue=password.value.trim();
  const password2Vlaue=password2.value.trim();
  if(password2Vlaue !== passwordValue){
    setErrorFor(password2, "Пароли должны совпадать");
    flag=false;
  }else{
    setSuccessFor(password2);
  }
}