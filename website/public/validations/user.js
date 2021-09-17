window.addEventListener("load", function() {

    let formulario = document.querySelector("form.createForm");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault()
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


        if (errores.length > 0){
            
            let ul = document.querySelector("div.errores ul");
            for(let i = 0; i < errores.length; i++){
                ul.innerHTML += "<li>"+errores[i]+"</li>"
            }
        }
        
    })
})