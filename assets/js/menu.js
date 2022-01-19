// For Menu
function toggleMenu(){
    const menuToggle = document.querySelector('.toggle-menu-icon .fa-bars');
    const menuToggle2 = document.querySelector('.toggle-menu-icon .fa-times');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    menuToggle2.classList.toggle('active');
}