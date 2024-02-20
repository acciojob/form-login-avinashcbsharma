
let frm = document.querySelector('#form1');        
function getFormValues() {
	 event.preventDefault();

    // Get the values from the form
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    // Display the values using alert
    alert( firstName + ' ' +lastName);
}

// Attach the function to the form submission event
frm.addEventListener("submit", getFormValues);