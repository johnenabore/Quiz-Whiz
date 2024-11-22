const barsOpen = document.getElementById('barsOpen');
const barsButton = document.getElementById('bars');
let header = document.querySelector('header');
let mainContainer = document.getElementById('mainContainer');

barsButton.onclick = function(){
    barsOpen.classList.toggle('show')
    header.style.opacity = '0.3';
    mainContainer.style.opacity = '0.3';
}
document.addEventListener('click', function(e){
    if(!barsOpen.contains(e.target) && e.target !== barsButton){
        barsOpen.classList.remove('show');
        header.style.opacity = '1';
        mainContainer.style.opacity = '1'
    }
})

const searchContainer = document.getElementById("searchcontainer");

searchContainer.onclick = function() {
    searchContainer.classList.toggle('show');
    const searchInput = document.getElementById('searchInput');
    if (searchContainer.classList.contains("show")) {
        searchInput.focus();
    }
};
