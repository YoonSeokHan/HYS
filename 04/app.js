var wrap = document.querySelector('.wrap');

var str = '';

for(var i=0; i<4; i++){
    for(var j=0; j<4; j++){

        str += ((i+j) %2 == 0) ? '<div class="b"></div>' : '<div class="w"></div>';

    }
}
wrap.innerHTML = str;