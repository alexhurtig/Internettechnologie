function checkForm(){
var form = document.form[0];
var error = "asdf";
/*if (form.vorname.value==""){
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
if (form.note.indexOf== "bitte"){
    error = error + "Note fehlt! ";
}
if (!form.AGB.value=checked){
    error = error + "AGB nicht bestätigt! ";
}*/
if (error != ""){
    var errorMessage= "Versuche es noch einmal, du hast folgendes vergessen: \n";
    errorMessage = errorMessage + error;
    window.alert(errorMessage);
    return false;
}
return true;
}

function clean(){
    var conf=window.confirm('Wirklich alles loeschen?');
    //if (conf){
    //    return (set type"reset");
    //} else {
    //    return conf;
    //}
}

function welcome(){
    window.alert('Willkommen!');
}