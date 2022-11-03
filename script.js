//Nomor 1
let changeText = document.getElementById("name");
changeText.innerText = "Membuat Teks (No. 1)";

//Nomor 2
let newElement = document.createElement("p");
newElement.innerHTML = "Menambah Elemen Baru (No. 2)";
changeText.appendChild(newElement);

//Nomor 3
function hidepesan () {
    var hide = document.getElementById("input")
    if (hide.style.display === "block"){
        hide.style.display = "none"
    }else {
        hide.style.display = "block";
    }
}
function getPesan() {
    var ambil = document.getElementById("pesan").value;
    document.getElementById("output").innerHTML = ambil;

}

document.getElementById("incrementButton").addEventListener("click", increment);
