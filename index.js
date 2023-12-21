function addRow() {
    var table = document.getElementById("#Qualification-table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    for (var i = 0; i < 10; i++) {
        var cell = newRow.insertCell(i);
        var input = document.createElement("input");
        input.type = "text";
        input.name = "col" + (i + 2) + "[]";
        cell.appendChild(input);
    }

    var deleteCell = newRow.insertCell(7);
    var deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.onclick = function () { deleteRow(this); };
    deleteButton.innerHTML = "Delete";
    deleteCell.appendChild(deleteButton);
}

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
function redirectToPreview() {
    localStorage.setItem('generatePDF', 'true');
    window.location.href = 'preview.html';
}
// work
function addWorkRow() {
    var table = document.getElementById("Work-data-table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    for (var i = 0; i < 10; i++) {
        var cell = newRow.insertCell(i);
        var input = document.createElement("input");
        input.type = "text";
        input.name = "col" + (i + 1) + "[]";
        cell.appendChild(input);
    }

    var deleteCell = newRow.insertCell(5);
    var deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.onclick = function () { deleteRow(this); };
    deleteButton.innerHTML = "Delete";
    deleteCell.appendChild(deleteButton);
}

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// language
function addLanguageRow() {
    var table = document.getElementById("language-data-table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    for (var i = 0; i < 5; i++) {
        var cell = newRow.insertCell(i);
        var input = document.createElement("input");
        input.type = "text";
        input.name = "language" + (i + 1) + "[]";
        cell.appendChild(input);
    }

    var deleteCell = newRow.insertCell(5);
    var deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.onclick = function () { deleteRow(this); };
    deleteButton.innerHTML = "Delete";
    deleteCell.appendChild(deleteButton);
}

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
function preview() {
    var formData = {};

    formData.firstName = document.getElementById('firstName').value;

    formData.lastName = document.getElementById('lastName').value;

    formData.dateOfBirth = document.getElementById('dateOfBirth').value;

    formData.maritalStatus = getMaritalStatus();

    formData.gender = getGender();

    formData.workStatus = getWorkStatus()
 
    formData.age = document.getElementById('age').value;

    formData.presentlocation = document.getElementById('presentlocation').value;

    formData.permanentlocation = document.getElementById('permanentlocation').value;

    formData.phoneNumber = document.getElementById('phoneNumber').value;

    formData.email = document.getElementById('email').value;

    formData.summeryskills = document.getElementById('summeryskills').value;

    formData.currentdesignation = document.getElementById('currentdesignation').value;

    formData.expecteddesignation = document.getElementById('expecteddesignation').value;

    formData.currentgrosssalary = document.getElementById('currentgrosssalary').value;

    formData.Currentctc = document.getElementById('Currentctc').value;

    formData.expectedgrosssalary = document.getElementById('expectedgrosssalary').value;

    formData.expectedctc = document.getElementById('expectedctc').value;

    formData.forinterview = document.getElementById('forinterview').value;

    formData.noticeperiod = document.getElementById('noticeperiod').value;

    formData.noticeperiod = document.getElementById('noticeperiod').value;


    

    localStorage.setItem('previewFormData', JSON.stringify(formData));
    window.location.href = 'preview.html';

}


function getMaritalStatus() {
    var radios = document.getElementsByName('maritalStatus');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
    return null;
}
function getGender() {
    var radios = document.getElementsByName('gender');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
    return null;
}
function getWorkStatus() {
    var radios = document.getElementsByName('workStatus');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
    return null;
}