
const defaultTicketPrice = 200

const fields = [
   {
      "fieldName": "nombre",
      "regexPattern": /^[a-z ,.'-]+$/i
   },
   {
      "fieldName": "apellido",
      "regexPattern": /^[a-z ,.'-]+$/i
   },
   {
      "fieldName": "mail",
      "regexPattern": /\S+@\S+\.\S+/
   },
   {
      "fieldName": "cantidad",
      "regexPattern": /^[0-9]+$/
   }
]

const categories = [
   {
      "index": 1,
      "name": "Estudiante",
      "desc": 0.8
   },
   {
      "index": 2,
      "name": "Estudiante",
      "desc": 0.5
   },
   {
      "index": 3,
      "name": "Estudiante",
      "desc": 0.15
   }
]

function calcularPrecioTicket() {
   var allFieldsValid = fields.every(isFieldValid)
   if (allFieldsValid){
      var categoria = document.getElementById("categoria").value;
      if (categoria <= 0){
         alert("No se selecciono categoria.")
      } else {
         var cant = document.getElementById("cantidad").value
         var desc = categories.find(f => f.index == categoria).desc;
         document.getElementById("totalPagar").innerText = "$Total a pagar "+ (defaultTicketPrice * cant)*(1 - desc);
      }
   } 
   // else {
   //    alert("Hay errores (f)!")
   // }
}


function isFieldValid(fieldProperties) {
   var field = document.getElementById(fieldProperties.fieldName);
   field.classList.remove("is-invalid")
   focusIfEmpty(field, fieldProperties);
   validateWithRegex(field, fieldProperties);
   return !field.classList.contains("is-invalid")
}

function focusIfEmpty(field, fieldProperties) {
   if (field.value === ""){
      field.classList.add("is-invalid");
      alert("Falta ingresar el campo: " + fieldProperties.fieldName)
      field.focus();
   }
}

function validateWithRegex(field, fieldProperties){
   alert(field.value)
   alert(fieldProperties.regexPattern)
   if (!fieldProperties.regexPattern.test(field.value)){
      alert("Error de validacion en el campo: " + fieldProperties.fieldName)
      field.classList.add("is-invalid");
   }
}

document.getElementById("btnResumen").addEventListener("click", calcularPrecioTicket);

/*
function calcularTotal(){
    var name=document.getElementById("nombre");
    var surname=document.getElementById("apellido");
    var mail=document.getElementById("mail");
    var cant= document.getElementById("cantidad");  
    var categoria=document.getElementById("categoria");
   
   
    if(/^(?!.* $)[A-Z][a-z ]+$/.test(name.value)){
       //name.value!=/(\Number)/
       //alert("Falta ingresar un nombre");
       name.classList.remove("is-invalid");
       //name.focus();
    }else if(name.value===""){
       name.classList.add("is-invalid");
       name.focus();
    }
   
    const validMail= mail=>{ return /\S+@\S+\.\S+/.test(mail.value);}
   
    if(!validMail(mail)){
        mail.classList.add("is-invalid");
       // mail.focus();
       alert("Error!!!");
    }else{
       mail.classList.remove("is-invalid");
    }
   
    /* if(surname.value===""){
       alert("Falta ingresar un apellido");
       surname.focus();
    }
   
    if(cant.value===""){
       alert("Falta ingresar una cantidad");
       cant.focus();
    }
   
    if(categoria.value===""){
       alert("Falta ingresar una cantidad");
       categoria.focus();
    }
    
   
    if(visualViewport.value==0){
       resumenTotal=200*cant.value;
    }
   
    if(visualViewport.value==1){
       resumenTotal=200*0.5*cant.value;
    }
   
    if(visualViewport.value==2){
       resumenTotal=200*0.2*cant.value;
    }
   
    if(visualViewport.value==3){
       resumenTotal=200*0.15*cant.value;
    }
   
    document.getElementById("totalPagar").innerText=resumenTotal;
   
   }
   
   const BTNCLICK= document.getElementById("btnResumen");
   BTNCLICK.addEventListener("click",calcularTotal);
   */
