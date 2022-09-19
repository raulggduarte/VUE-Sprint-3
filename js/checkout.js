
// Exercise 6
function validate(event) {
	var error = 0;
	const minCharacters = 3;
	const minPhoneCharacters = 9;
	const hasOnlyLetters = new RegExp (/^[a-zA-Z]+$/);
	const hasOnlyNumbers = new RegExp(/^\d+$/);
	const isValidEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
	const hasNumbersAndLetters = new RegExp (/^(?=.*?\d)(?=.*?[a-zA-Z])[A-Za-z\d].+$/);


	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");  
	var errorLastN = document.getElementById("errorLastN");  
	var errorPassword = document.getElementById("errorPassword");  
	var errorPhone = document.getElementById("errorPhone");  
	
	// Validate fields entered by the user: name, phone, password, and email

	if( fName.value == "" || fName.value.length < minCharacters || !hasOnlyLetters.test(fName.value) ){
		error++;
		errorName.style.display = "block";
		fName.style.border = '5px solid red';
	} else {
		errorName.style.display = 'none';
		fName.style.border = '3px solid green';
	}

	if( fEmail.value == "" || fEmail.value.value < minCharacters || !isValidEmail.test(fEmail.value) ){
		error++;
		errorEmail.style.display = "block";
		fEmail.style.border = '5px solid red';
	} else {
		errorEmail.style.display = 'none';
		fEmail.style.border = '3px solid green';
	}

	if( fAddress.value == "" || fAddress.value.length < minCharacters ){
		error++;
		errorAddress.style.display = "block";
		fAddress.style.border = '5px solid red';
	} else {
		errorAddress.style.display = 'none';
		fAddress.style.border = '3px solid green';
	}

	if( fLastN.value == "" || fLastN.value.length < minCharacters || !hasOnlyLetters.test(fLastN.value) ){
		error++;
		errorLastN.style.display = "block";
		fLastN.style.border = '5px solid red';
	} else {
		errorLastN.style.display = 'none';
		fLastN.style.border = '3px solid green';
	}

	if( fPassword.value == "" || fPassword.value.length < minCharacters || !hasNumbersAndLetters.test(fPassword.value)) {
		error++;
		errorPassword.style.display = "block";
		fPassword.style.border = '5px solid red';
	} else {
		errorPassword.style.display = 'none';
		fPassword.style.border = '3px solid green';
	}

	if( fPhone.value == "" || fPhone.value.length < minPhoneCharacters || !hasOnlyNumbers.test(fPhone.value) ){
		error++;
		errorPhone.style.display = "block";
		fPhone.style.border = '5px solid red';
	} else {
		errorPhone.style.display = 'none';
		fPhone.style.border = '3px solid green';
	}

	if(error > 0){
		alert("Error");
		event.preventDefault();
	}else{
		alert("OK");
	}
}
