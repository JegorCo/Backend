var inputField = document.getElementById("name");
var outputBlock = document.getElementById("OutputName");
var radioGender = document.querySelectorAll('input[type="radio"]');
var OutputGender = document.getElementById("OutputGender");
var inputDate = document.getElementById("start");
var outputDate = document.getElementById("outputDate");
var inputName = document.getElementById("name");
var inputNameError = document.querySelector(".inputNameError");
var inputBarError = document.querySelector("name");
var inputTelegram = document.getElementById("Telegram");
var inputNameTelegramError = document.getElementById("inputNameTelegramError");
var inputPhone = document.getElementById("numberphone")
var inputPhoneError = document.getElementById("phoneError");
var inputFile = document.getElementById("inputFile");
var outputImagePreview = document.getElementById("outputImagePreview");
/* var continueUrl = document.querySelector("continue-url"); */
var buttonContinue = document.querySelector(".continue");


inputField.addEventListener('input', handleInput);

function handleInput(event) {
    inputValue = event.target.value;
    outputBlock.textContent = inputValue;
  }

radioGender.forEach(function(radioOption){
  radioOption.addEventListener('change', function(){
    var label = document.querySelector(`label[for="${this.id}"]`);
    var labelText = label.textContent;
    OutputGender.textContent = labelText;
  });
});


inputDate.addEventListener('input', function(){
  const birthDate = new Date(inputDate.value);
  const currentDate = new Date();
  const ageInMilliseconds = currentDate - birthDate;
  const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
  console.log(birthDate, currentDate, ageInYears);
  outputDate.textContent = `${ageInYears} лет`;
});

inputName.addEventListener('input', function(){
  const inputValue = inputName.value;
  const regex = /^[a-zA-Zа-яА-Я\s]+$/;
  if (!regex.test(inputValue)) {
    inputNameError.textContent = 'Неверный формат имени';
  }
  else{
    inputNameError.textContent = '';
  }
  
});

inputTelegram.addEventListener('input', function(){
  const inputValue = inputTelegram.value;
  const regex = /[a-zA-Z0-9_]{5,32}$/;
  if (!regex.test(inputValue)) {
    inputNameTelegramError.textContent = 'Неверный формат ввода';
  }
  else{
    inputNameTelegramError.textContent = '';
  }
  
});

inputPhone.addEventListener('input', function(){
  const inputValue = inputPhone.value;
  const regex = /^((\+7|7|8)+([0-9]){10})$/;
  if (!regex.test(inputValue)) {
    inputPhoneError.textContent = 'Неверный формат ввода';
  }
  else{
    inputPhoneError.textContent = '';
  }
  
});

a = ""

function reference(){
  document.location.assign(a)
}

inputFile.addEventListener('change', function(){
  var file = inputFile.files[0]; 
  var reader = new FileReader();
  reader.onload = function(event) {
    var imageUrl = event.target.result;
    outputImagePreview.src = imageUrl;
  };
  reader.readAsDataURL(file);
  buttonContinue.style.opacity = "1";
  globalThis.a = "file:///C:/Users/faers/Desktop/HomemeetReg/src/index2.html"
})

