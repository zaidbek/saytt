let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let userImage = null;
let clothesImage = null;

document.getElementById("upload").addEventListener("change", function(e) {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = function(event) {
        let img = new Image();
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            userImage = img;
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(file);
});

function addClothes(src) {
    clothesImage = new Image();
    clothesImage.onload = function() {
        if (userImage) {
            ctx.drawImage(userImage, 0, 0);
            ctx.drawImage(clothesImage, 50, 100, 200, 200); // положение и размер одежды
        }
    }
    clothesImage.src = src;
}