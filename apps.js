alert("Estamos Sistema de Registro");
console.log("Estamos Sistema de Registro");
// write a function to find all images without alternate text and give them a red border
function addRedBorderToImagesWithoutAltText() {
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        if (!images[i].alt) {
            images[i].style.border = '2px solid red';
        }
    }
}