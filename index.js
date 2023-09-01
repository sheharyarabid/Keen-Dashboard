let isClick = false;
function filterClick(){
    isClick = !isClick;
    const filterMenu = document.getElementById('filter-menu');
    if(isClick){
        filterMenu.classList.add('show')
    }else{
        filterMenu.classList.remove('show')
    }
}