/**
 * Created by Rajendra on 7/21/17.
 */
function showPicture() {
    var sourceOfPicture = "Images/Table1.png";
    var img = document.getElementById('bigpic');
    img.src = sourceOfPicture.replace('90x90', '225x225');
    img.style.display = "block";
    var imgs = document.getElementById("BackButton");
    imgs.style.display="block";
}
function hidePicture() {
    var sourceOfPicture = "Images/Table1.png";
    var img = document.getElementById('bigpic');
    img.src = sourceOfPicture.replace('90x90', '225x225');
    img.style.display = "none";
    var imgs = document.getElementById("BackButton");
    imgs.style.display="none";

}