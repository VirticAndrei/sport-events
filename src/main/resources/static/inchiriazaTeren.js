function showInchiriazaTeren() {
	document.getElementById("InchiriazaTerenDiv").classList.add('show');
}

function hideInchiriazaTeren() {
	document.getElementById("InchiriazaTerenDiv").classList.remove('show');
}

function showAvailableTerens(){
	document.getElementById("searchTerenPannel").classList.add('show');
	hideInchiriazaTeren();
}

function hideAvailableTerens() {
	document.getElementById("searchTerenPannel").classList.remove('show');
	showInchiriazaTeren();
}

function inchiriazaTeren() {
	showResponsePannel('Teren inchiriat cu succes!');
	hideAvailableTerens();
	hideInchiriazaTeren();
}

function hideSuccessInchiriaza() {
	document.getElementById("responsePannel").classList.remove('show');
}

function toggleInchiriazaAtivitiesList() {
	
	document.getElementById('activitiesListDiv3').classList.toggle('show');
}

function selectActivityInc(event) {
	var activityId = event.target.id;
	var activity = document.getElementById(activityId).innerText;
	var activityLabel = document.getElementById('activityLabelInc');
	activityLabel.innerText = activity;
	
	toggleInchiriazaAtivitiesList();
	
}