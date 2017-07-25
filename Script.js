/**
 * Created by Rajendra on 7/21/17.
 */

/*...........USER HOME ........
...............................
 */
function showPicture() {
    var sourceOfPicture = "Images/Table1.png";
    var img = document.getElementById('Table1');
    img.src = sourceOfPicture.replace('90x90', '225x225');
    img.style.display = "block";
    var GraphButton= document.getElementById("GraphButton");
    GraphButton.style.display="block";
    var UndoButton = document.getElementById("BackButton");
    UndoButton.style.display="block";
    var ExportButton = document.getElementById("ExportButton");
    ExportButton.style.display="block";
}
function HidePicture() {
    var sourceOfPicture = "Images/Table1.png";
    var img = document.getElementById('Table1');
    img.src = sourceOfPicture.replace('90x90', '225x225');
    img.style.display = "none";
    var GraphButton= document.getElementById("GraphButton");
    GraphButton.style.display="none";
    var sourceOfChartsHome = "Images/ChartsHome.png";
    var ChartsHome = document.getElementById('ChartsHome');
    ChartsHome.src = sourceOfChartsHome.replace('90x90', '225x225');
    ChartsHome.style.display = "none";
    var UndoButton = document.getElementById("BackButton");
    UndoButton.style.display="none";
    var ExportButton = document.getElementById("ExportButton");
    ExportButton.style.display="none";
}
function ShowChartsHome() {
    var sourceOfChartsHome = "Images/ChartsHome.png";
    var ChartsHome = document.getElementById('ChartsHome');
    ChartsHome.src = sourceOfChartsHome.replace('90x90', '225x225');
    ChartsHome.style.display = "block";

}
function ExportDataAlert(){
    alert("Sorry, this is just a prototype!");
}

/*...........CONTACT US ........
 ...............................
 */
function SubmitContact() {
    alert(" Thank you for contacting us. We will get back to you as soon as possible.");
}