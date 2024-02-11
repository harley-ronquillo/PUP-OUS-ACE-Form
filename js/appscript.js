function toggleSemesterChange() {
    var semesterChangeSelect = document.getElementById('semesterChangeSelect').value;
    var changedElements = document.querySelectorAll('.changed');
    var otherElements = document.querySelectorAll('.other');
   
    if (semesterChangeSelect === 'changed') {
        changedElements.forEach(element => element.style.display = 'block');
        otherElements.forEach(element => element.style.display = 'none');
    } else {
        changedElements.forEach(element => element.style.display = 'none');
        otherElements.forEach(element => element.style.display = 'block');
    }
}

  








