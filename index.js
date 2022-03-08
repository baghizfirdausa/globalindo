function modalOff() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

function modalOn(img) {
    var img = document.getElementById(img);
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}