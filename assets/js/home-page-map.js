




// For Map
const mapButton1 = document.getElementById("map-button-1");
const mapButton2 = document.getElementById("map-button-2");
const mapButton3 = document.getElementById("map-button-3");
const mapButton4 = document.getElementById("map-button-4");
const mapButton5 = document.getElementById("map-button-5");
const mapButton6 = document.getElementById("map-button-6");
const mapButton7 = document.getElementById("map-button-7");
const mapButton8 = document.getElementById("map-button-8");
const mapButton9 = document.getElementById("map-button-9");
const mapButton10 = document.getElementById("map-button-10");



const homePageCloseButton = document.getElementById("homePageCloseButton");



mapButton1.addEventListener("click", function(){
    this.classList.add("active");
    mapButton2.classList.remove("active");
    mapButton3.classList.remove("active");
    mapButton4.classList.remove("active");
    mapButton5.classList.remove("active");
    mapButton6.classList.remove("active");
    mapButton7.classList.remove("active");
    mapButton8.classList.remove("active");
    mapButton9.classList.remove("active");
    mapButton10.classList.remove("active");
    homePageCloseButton.classList.add("active");
});

mapButton2.addEventListener("click", function(){
    this.classList.add("active");
    mapButton1.classList.remove("active");
    mapButton3.classList.remove("active");
    mapButton4.classList.remove("active");
    mapButton5.classList.remove("active");
    mapButton6.classList.remove("active");
    mapButton7.classList.remove("active");
    mapButton8.classList.remove("active");
    mapButton9.classList.remove("active");
    mapButton10.classList.remove("active");
    homePageCloseButton.classList.add("active");
});

mapButton3.addEventListener("click", function(){
    this.classList.add("active");
    mapButton1.classList.remove("active");
    mapButton2.classList.remove("active");
    mapButton4.classList.remove("active");
    mapButton5.classList.remove("active");
    mapButton6.classList.remove("active");
    mapButton7.classList.remove("active");
    mapButton8.classList.remove("active");
    mapButton9.classList.remove("active");
    mapButton10.classList.remove("active");
    homePageCloseButton.classList.add("active");
});

mapButton4.addEventListener("click", function(){
    this.classList.add("active");
    mapButton1.classList.remove("active");
    mapButton2.classList.remove("active");
    mapButton3.classList.remove("active");
    mapButton5.classList.remove("active");
    mapButton6.classList.remove("active");
    mapButton7.classList.remove("active");
    mapButton8.classList.remove("active");
    mapButton9.classList.remove("active");
    mapButton10.classList.remove("active");
    homePageCloseButton.classList.add("active");
});

mapButton5.addEventListener("click", function(){
    this.classList.add("active");
    mapButton1.classList.remove("active");
    mapButton2.classList.remove("active");
    mapButton3.classList.remove("active");
    mapButton4.classList.remove("active");
    mapButton6.classList.remove("active");
    mapButton7.classList.remove("active");
    mapButton8.classList.remove("active");
    mapButton9.classList.remove("active");
    mapButton10.classList.remove("active");
    homePageCloseButton.classList.add("active");
});

mapButton6.addEventListener("click", function(){
    this.classList.add("active");
    mapButton1.classList.remove("active");
    mapButton2.classList.remove("active");
    mapButton3.classList.remove("active");
    mapButton4.classList.remove("active");
    mapButton5.classList.remove("active");
    mapButton7.classList.remove("active");
    mapButton8.classList.remove("active");
    mapButton9.classList.remove("active");
    mapButton10.classList.remove("active");
    homePageCloseButton.classList.add("active");
});

mapButton7.addEventListener("click", function(){
    this.classList.add("active");
    mapButton1.classList.remove("active");
    mapButton2.classList.remove("active");
    mapButton3.classList.remove("active");
    mapButton4.classList.remove("active");
    mapButton5.classList.remove("active");
    mapButton6.classList.remove("active");
    mapButton8.classList.remove("active");
    mapButton9.classList.remove("active");
    mapButton10.classList.remove("active");
    homePageCloseButton.classList.add("active");
});

mapButton8.addEventListener("click", function(){
    this.classList.add("active");
    mapButton1.classList.remove("active");
    mapButton2.classList.remove("active");
    mapButton3.classList.remove("active");
    mapButton4.classList.remove("active");
    mapButton5.classList.remove("active");
    mapButton6.classList.remove("active");
    mapButton7.classList.remove("active");
    mapButton9.classList.remove("active");
    mapButton10.classList.remove("active");
    homePageCloseButton.classList.add("active");
});

mapButton9.addEventListener("click", function(){
    this.classList.add("active");
    mapButton1.classList.remove("active");
    mapButton2.classList.remove("active");
    mapButton3.classList.remove("active");
    mapButton4.classList.remove("active");
    mapButton5.classList.remove("active");
    mapButton6.classList.remove("active");
    mapButton7.classList.remove("active");
    mapButton8.classList.remove("active");
    mapButton10.classList.remove("active");
    homePageCloseButton.classList.add("active");
});

mapButton10.addEventListener("click", function(){
    this.classList.add("active");
    mapButton1.classList.remove("active");
    mapButton2.classList.remove("active");
    mapButton3.classList.remove("active");
    mapButton4.classList.remove("active");
    mapButton5.classList.remove("active");
    mapButton6.classList.remove("active");
    mapButton7.classList.remove("active");
    mapButton8.classList.remove("active");
    mapButton9.classList.remove("active");
    homePageCloseButton.classList.add("active");
});




homePageCloseButton.addEventListener("click", function(){
    mapButton1.classList.remove("active");
    mapButton2.classList.remove("active");
    mapButton3.classList.remove("active");
    mapButton4.classList.remove("active");
    mapButton5.classList.remove("active");
    mapButton6.classList.remove("active");
    mapButton7.classList.remove("active");
    mapButton8.classList.remove("active");
    mapButton9.classList.remove("active");
    mapButton10.classList.remove("active");
    homePageCloseButton.classList.remove("active");
});

$('body').on('hidden.bs.modal', '.modal', function () {
    $('video').trigger('pause');
    });