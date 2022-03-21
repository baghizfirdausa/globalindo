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

function openMenu() {
    console.log(10);
    var nav = document.getElementById('sub');
    nav.style.display = "flex";
    nav.style.position = "sticky";
    var op = document.getElementById('icon-op');
    op.style.display = "none";
    var cls = document.getElementById('icon-cls');
    cls.style.display = "block";
}

function closeMenu() {
    console.log(10);
    var nav = document.getElementById('sub');
    nav.style.display = "none";
    var op = document.getElementById('icon-op');
    op.style.display = "block";
    var cls = document.getElementById('icon-cls');
    cls.style.display = "none";
}