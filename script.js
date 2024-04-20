//your JS code here. If required.
let inputBox = document.querySelector('#fname');

inputBox.addEventListener('blur',convertUpperCase);

function convertUpperCase() {
	if(inputBox.value!="") {
		let str = inputBox.value;
		inputBox.value = str.toUpperCase();
	}
	
}