
// let frm = document.querySelector('#form1');        
// 	frm.addEventListener('submit',(event) =>{
// 		event.preventDefault();                     //prevent default action
// 		let frmdata = new FormData(frm);            //place all form data into variable frmdata.
// 		let obj = Object.fromEntries(frmdata);      //create object of variable 'frmdata'.     
		
// 		let txt ='';
// 		for (let x in obj) {
// 			 txt = txt + `${obj[x]} `;
// 		};
// 		window.alert(txt);  
// });
function getFormValues() {
    // Prevent the default form submission
    event.preventDefault();

    // Get the values from the form
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    // Display the values using alert
    alert("First Name: " + firstName + "\nLast Name: " + lastName);
}

// Attach the function to the form submission event
document.getElementById("myForm").addEventListener("submit", getFormValues);