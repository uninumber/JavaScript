function calculations() {
	inicio = document.querySelector('input#num1').focus()
}

function calcular() {
	let num1 = document.querySelector('input#num1').value
	let num2 = document.querySelector('input#num2').value
	let action = document.querySelector('select#operator').value
	let res = document.querySelector('div#res')

	let total = 0;

	if (typeof num1 == 'string' && typeof num2 == 'string') {
		return alert("You entered string.type, enter numbers:");
	}

	if (num1.length < 1 || num2.length < 1) {
		return alert('Please enter number.')
	}

	if (action == 'addition') {
		total = Number(num1) + Number(num2)
	} else if (action == 'subtraction') {
		total = num1 - num2
	} else if (action == 'multiplication') {
		total = num1 * num2
	} else {
		total = num1 / num2
	}

    res.innerHTML = total.toFixed(2).replace('.', ',')
}	

function erase() {
	
	document.querySelector('input#num1').value = ''
	
	document.querySelector('input#num2').value = ''

	document.querySelector('div#res').innerHTML = ''
	calculations()
}
