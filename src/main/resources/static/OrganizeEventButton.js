function showEventOrganizeForm() {
    document.getElementById("eventOrganizeDiv").classList.add('showOrganizeEvent');
}

function hideEventOrganizeForm() {
    document.getElementById("eventOrganizeDiv").classList.remove('showOrganizeEvent');
}

function toggleAtivitiesList() {
	document.getElementById('activitiesListDiv').classList.toggle('showOrganizeEvent');
	
}

function showAddressField() {
	document.getElementById('addressOption').classList.add('showOrganizeEvent');
}

function showRentOption() {
	document.getElementById('rentOption').classList.add('showOrganizeEvent');
}

function hideAddressField() {
	document.getElementById('addressOption').classList.remove('showOrganizeEvent');
}

function hideRentOption() {
	document.getElementById('rentOption').classList.remove('showOrganizeEvent');
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