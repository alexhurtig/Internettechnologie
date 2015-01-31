function checkForm(){
var form = document.forms[0];
var error = "";
if (form.vorname.value == ""){
    error += "Vorname fehlt! \n";
}
if (form.nachname.value==""){
    error += "Nachname fehlt! \n";
}
if (form.email.value==""){
    error += "E-Mail! \n";
}
if (form.beschreibung.value.length < 50){
    error += "Beschreibung zu kurz! \n";
}
if (!form.AGB.checked){
    error += "AGB nicht bestaetigt! \n";
}
if (error != ""){
    var errorMessage= "Versuche es noch einmal, du hast folgendes vergessen: \n";
    errorMessage = errorMessage + error;
    window.alert(errorMessage);
    return false;
} else {
    return true;
}
return false;
}

function clean(){
    var conf=window.confirm('Wirklich alles loeschen?');
    return conf;
}

function welcome(){
    window.alert('Willkommen!');
}

function mousOver(){
    document.getElementById("bild").src = "pagefiles/android.jpg";
}

function mousWeg(){
    document.getElementById("bild").src = "{% static "beispiel.jpg"%}";
}