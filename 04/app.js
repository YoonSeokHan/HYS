var wrap = document.querySelector('.wrap');

var str = '';

for(var i=0; i<4; i++){
    for(var j=0; j<4; j++){

        str += ((i+j) %2 == 0) ? '<div class="b"></div>' : '<div class="w"></div>';

    }
}
wrap.innerHTML = str;
var blocks = document.querySelectorAll('.wrap > div');

// blocks.forEach(function(block){

//     block.addEventListener('click', function(event) { 
//       console.log(block);
//       block.style.backgroundColor = 'yellow';
//     })
  
//   });

// for(var i=0; i< 16; i++){
//     // console.log(blocks[i]);

//     blocks[i].addEventListener('click', function(event){

//         debugger;
//         blocks[i].style.backgroundColor = 'yellow';
//     });
// }

function select(event) {
    var block = event.currentTarget;
    block.style.backgroundColor = 'yellow';
    //     // block.className += ' y';
  
  }
  for(var i=0; i < 16; i++) {
    // console.log( blocks[i] );
    blocks[i].addEventListener('click', select);
  
  }