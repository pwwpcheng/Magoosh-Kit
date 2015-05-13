// Saves options to chrome.storage
function save_options() {
  localStorage["in-use"] = document.getElementById('myCheck').checked;
}

// Restores checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
	if(localStorage["in-use"]==="false")
		document.getElementById('myCheck').checked = false;
	else
		document.getElementById('myCheck').checked = true;
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('myCheck').addEventListener('click', save_options);
