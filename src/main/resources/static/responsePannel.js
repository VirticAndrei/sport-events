function showResponsePannel(text) {
	hideEventOrganizeForm();
	document.getElementById('responsePannel').classList.add('showResponse');
	document.getElementById('responseText').innerText = text;
}

function hideResponsePannel() {
	document.getElementById('responsePannel').classList.remove('showResponse');
}