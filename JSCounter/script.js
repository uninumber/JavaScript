function count() {
	let start = document.querySelector("input#start").value;
	let end = document.querySelector("input#end").value;
	let step = document.querySelector("input#step").value;
	let res = document.querySelector("div#result");
	let txt = '<div class="bola extremos">start</div>';

	if (start.length == 0 || end.length == 0 || step.length == 0) {
		alert("Please, insert the number.");
		return;
	}

	for (let i = Number(start); i <= Number(end); i += Number(step)) {
		txt += `<div class="bola">${i}</div>`;
	}

	txt += '<div class="bola extremos">end</div>';
	res.innerHTML = txt;


}





