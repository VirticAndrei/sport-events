function showEventParticipateForm() {
    document.getElementById("eventParticipateDiv").classList.add('showParticipateEvent');
}

function hideEventParticipateForm() {
    document.getElementById("eventParticipateDiv").classList.remove('showParticipateEvent');
}

function toggleCategoryList() {
	document.getElementById("categoriesListDiv").classList.toggle('showParticipateEvent');
}

function showSearchEventPannel() {
	document.getElementById("searchEventPannel").classList.add('showParticipateEvent');
	hideEventParticipateForm();
}

function hideSearchEventPannel() {
	document.getElementById("searchEventPannel").classList.remove('showParticipateEvent');
}

function toggleParticipateAtivitiesList() {
	document.getElementById('activitiesListDiv2').classList.toggle('showParticipateEvent');
}

function selectCategory(event) {
	var categoryId = event.target.id;
	var category = document.getElementById(categoryId).innerText;
	var categoryLabel = document.getElementById('categoryLabel');
	categoryLabel.innerText = category;
	
	toggleCategoryList();
}
function selectActivityOrg(event) {
	var activityId = event.target.id;
	var activity = document.getElementById(activityId).innerText;
	var activityLabel = document.getElementById('activityLabelOrg');
	activityLabel.innerText = activity;
	
	toggleParticipateAtivitiesList();
	
}


