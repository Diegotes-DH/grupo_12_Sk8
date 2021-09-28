window.addEventListener("load", function() {

    let formulario = document.querySelector("form.createForm");
    let fieldname = document.querySelector("input.name");
    let fieldlastname = document.querySelector("input.lastname");
    let fieldemail = document.querySelector("input.email"); 
    let fieldpassword = document.querySelector("input.password");



    fieldname.addEventListener('focusout', function() {
        if (fieldname.value == '') {
            fieldname.style.background = '#F76E6E';
        }
    });

    fieldlastname.addEventListener('focusout', function() {
        if (fieldlastname.value == '') {
            fieldlastname.style.background = '#F76E6E';
        }
    });
    
    fieldemail.addEventListener('focusout', function() {
        if (fieldemail.value == '') {
            fieldemail.style.background = '#F76E6E';
        }
    });

    fieldpassword.addEventListener('focusout', function() {
        if (fieldpassword.value == '') {
            fieldpassword.style.background = '#F76E6E';
        }
    });



    formulario.addEventListener("submit", function(event) {
        
        let errores = [];
        
        let fieldname = document.querySelector("input.name");
        if (fieldname.value == ""){
            errores.push("El campo de nombre tiene que estar completo")
            
        } else if (fieldname.value.length <= 2){
            errores.push("El campo de nombre tiene que tener al menos 2 caracteres")
        }
        let fieldlastname = document.querySelector("input.lastname");
        if (fieldlastname.value == ""){
            errores.push("El campo de apellido tiene que estar completo")
            
        } else if (fieldlastname.value < 2){
            errores.push("El campo de apellido tiene que tener al menos 2 caracteres")
        }
        let fieldemail = document.querySelector("input.email"); 
        if (fieldemail.value == ""){
            errores.push("El campo de email tiene que estar completo")
        }
        let fieldpassword = document.querySelector("input.password");
        if (fieldpassword.value == ""){
            errores.push("El campo de contraseña tiene que estar completo")
        }else if (fieldpassword.value.length <= 8){
            errores.push("El campo de coontraseña tiene que tener al menos 8 caracteres")
        }



        console.log(errores)
        if (errores.length > 0){
            event.preventDefault();
            let ul = document.querySelector("div.errores ul");
            for(let i = 0; i < errores.length; i++){
                ul.innerHTML += "<li>"+errores[i]+"</li>"
            }
        }
        
    })
})