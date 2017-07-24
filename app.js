var index =1 ;
// slides(index);
function slides(ind) {
var potatoes = document.getElementsByClassName("potatoes");
    if ( ind > potatoes.length) {
        index =1 ;
    }
    if  (ind < 1){
        index = slides.length;
    }
    for( var i =0 ; i < potatoes.length ; i++ ){
        potatoes[i].style.display = 'none';
    }
    potatoes[index -1].style.display = 'block';
    potatoes[index -1].style.transition= 'all 0.5s';
}
