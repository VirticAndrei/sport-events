function showEventParticipateForm() {
    document.getElementById("eventParticipateDiv").classList.add('showOptions');
}

function hideEventParticipateForm() {
    document.getElementById("eventParticipateDiv").classList.remove('showOptions');
}

function toggleCategoryList() {
	document.getElementById("categoriesListDiv").classList.toggle('showOptions');
}

function showSearchEventPannel() {
	document.getElementById("searchEventPannel").classList.add('showOptions');
	hideEventParticipateForm();
}

function hideSearchEventPannel() {
	document.getElementById("searchEventPannel").classList.remove('showOptions');
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
	
	toggleAtivitiesList();
	
}


