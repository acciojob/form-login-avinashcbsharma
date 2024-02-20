let frm = document.querySelector('#form1');
        
        frm.addEventListener('submit',(event) =>{
            event.preventDefault();                     //prevent default action
            let frmdata = new FormData(frm);            //place all form data into variable frmdata.
            let obj = Object.fromEntries(frmdata);      //create object of variable 'frmdata'.     
            
            let txt ='';
            for (let x in obj) {
                 txt = txt + `${obj[x]} `;
            };
            window.alert(txt);  
        });