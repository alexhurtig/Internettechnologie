function checkForm(){
var form = document.forms[0];
var error = "";
if (form.vorname.value==""){
    error = error + "Vorname fehlt! ";
}
if (form.nachname.value==""){
    error = error + "Nachnamefelt! ";
}
if (form.email.value==""){
    error = error + "E-Mail! ";
}
if (form.beschreibung.length < 50){
    error = error + "Beschreibung zu kurz! ";
}
if (form.note.value=="bitte Auswählen!"){
    error = error + "Note fehlt! ";
}
if (form.AGB.value!=checked){
    error = error + "AGB nicht bestätigt! ";
}
if (error != ""){
    var errorMessage= "Alter du hast wat verjessen: ";
    errorMessage = errorMessage + error;
    window.alert(errorMessage);
    return false;
}
}

function clean(){
    window.alert("Wirklich alles loeschen?");
}

function welcome(){
    window.alert("Willkommen!");
}