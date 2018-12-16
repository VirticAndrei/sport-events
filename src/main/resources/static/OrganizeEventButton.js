function showEventOrganizeForm() {
    document.getElementById("eventOrganizeDiv").classList.add('showOptions');
}

function hideEventOrganizeForm() {
    document.getElementById("eventOrganizeDiv").classList.remove('showOptions');
}

function toggleAtivitiesList() {
	document.getElementById('activitiesListDiv').classList.toggle('showOptions');
	document.getElementById('activitiesListDiv2').classList.toggle('showOptions');
}

function showAddressField() {
	document.getElementById('addressOption').classList.add('showOptions');
}

function showRentOption() {
	document.getElementById('rentOption').classList.add('showOptions');
}

function hideAddressField() {
	document.getElementById('addressOption').classList.remove('showOptions');
}

function hideRentOption() {
	document.getElementById('rentOption').classList.remove('showOptions');
}

function showResponsePannel() {
	hideEventOrganizeForm();
	document.getElementById('responsePannel').classList.add('showOptions');
	document.getElementById('responseText').innerText = 'Eveniment organizat cu succes!';
}

function hideResponsePannel() {
	document.getElementById('responsePannel').classList.remove('showOptions');
}

function selectActivity(event) {
	var activityId = event.target.id;
	var activity = document.getElementById(activityId).innerText;
	var activityLabel = document.getElementById('activityLabel');
	activityLabel.innerText = activity;
	
	toggleAtivitiesList();
	
	if(activityId === 'hiking'){
		showAddressField();
		hideRentOption();
	}
	else {
		showRentOption();
		hideAddressField();
	}
}