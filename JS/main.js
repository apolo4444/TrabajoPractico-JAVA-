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
    */
   
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