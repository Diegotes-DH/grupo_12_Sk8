window.addEventListener("load", function() {

    let formulario = document.querySelector("form#form-product");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault()
        
        let errores = [];
        let fieldname = document.querySelector("input[name='productName']");
        if (fieldname.value == ""){
            errores.push("El campo de nombre tiene que estar completo")
            
        } else if (fieldname.value.length <= 5){
            errores.push("El campo de nombre tiene que tener al menos 5 caracteres")
        }
        let fieldBrand = document.querySelector("select[name='productBrand']");
        if (fieldBrand.value == ""){
            errores.push("Tiene que seleccionar una marca")   
        }
        let fieldDescript = document.querySelector("input[name='productDescript']"); 
        if (fieldDescript.value == ""){
            errores.push("El campo de descripcion tiene que estar completo")
        }else if (fieldDescript.value.length <= 8){
            errores.push("El campo de contraseña tiene que tener al menos 20 caracteres")
        }
        let fieldCat = document.querySelector("select[name='productCat']");
        if (fieldCat.value == ""){
            errores.push("Tiene que seleccionar una categoria")
        }
        let fieldColor = document.querySelector("select[name='productColors']");
        if (fieldColor.value == ""){
            errores.push("Tiene que seleccionar un color")
        }let fieldPrice = document.querySelector("input[name='productPrice']");
        if (fieldPrice.value == ""){
            errores.push("El campo de precio tiene que estar completo")
        }
        console.log(errores);
        if (errores.length > 0){
            let ul = document.querySelector("div.errores ul");
            for(let i = 0; i < errores.length; i++){
                ul.innerHTML += "<li>"+errores[i]+"</li>"
            }
        }else{
            event.target.submit()
        }
    })
    
})