function checkForm(){
/*var form = document.form[0];
var error = "";
if (form.vorname.value == ""){
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
}
if (error != ""){
    var errorMessage= "Versuche es noch einmal, du hast folgendes vergessen: \n";
    errorMessage = errorMessage + error;*/
    window.alert(errorMessage);
/*    return false;
} else {
    return true;
}*/
}

function clean(){
    var conf=window.confirm('Wirklich alles loeschen?');
    return conf;
}

function welcome(){
    window.alert('Willkommen!');
}

function mousOver(){
    document.getElementById("bild").src = "android.jpg";
}

function mousWeg(){
    document.getElementById("bild").src = "beispiel.jpg";
}