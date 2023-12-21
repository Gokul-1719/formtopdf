document.addEventListener('DOMContentLoaded', function () {
    var jsonData = localStorage.getItem('previewFormData');

    if (jsonData) {
        var formData = JSON.parse(jsonData);

        function setInnerText(id, value) {
            var element = document.getElementById(id);
            if (element) {
                element.innerText = value;
            } else {
                console.error("Element with id '" + id + "' not found.");
            }
        }

        setInnerText('previewFirstName', formData.firstName); 
        setInnerText('previewlastName', formData.lastName);
        setInnerText('previewAge', formData.age);
        setInnerText('maritalStatus', formData.maritalStatus);
        setInnerText('gender', formData.gender);
        setInnerText('workStatus', formData.workStatus);
        setInnerText('previewdateOfBirth', formData.dateOfBirth);
        setInnerText('previewPresentLocation', formData.presentlocation);
        setInnerText('previewPermanentLocation', formData.permanentlocation);
        setInnerText('previewPhoneNumber', formData.phoneNumber);
        setInnerText('previewemail', formData.email);
        setInnerText('previewsummerySkills', formData.summeryskills);
        setInnerText('previewcurrentDesignation', formData.currentdesignation);
        setInnerText('previewexpectedDesignation', formData.expecteddesignation);
        setInnerText('previewcurrentGrossSalary', formData.currentgrosssalary);
        setInnerText('previewCurrentctc', formData.Currentctc);
        setInnerText('previewcurrentexpectedgrosssalary', formData.expectedgrosssalary);
        setInnerText('previewexpectedctc', formData.expectedctc);
        setInnerText('previewforinterview', formData.forinterview);
        setInnerText('previewnoticeperiod', formData.noticeperiod);
    }
});


function print() {
    var elementHTML = document.querySelector("#resumContainer");
    var label = "resume";

    html2pdf(elementHTML, {
        filename: label,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
    

}


document.addEventListener('DOMContentLoaded', function () {
    var generatePDFFlag = localStorage.getItem('generatePDF');

    if (generatePDFFlag === 'true') {
        localStorage.removeItem('generatePDF');
    
        print();
    }
});