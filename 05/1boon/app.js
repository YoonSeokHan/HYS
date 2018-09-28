// console.log('1boon')

// var url = 'https://1boon.kakao.com/ch/enter.json?page=1&pagesize=20'

// getUrlData(url, function(json){
//     console.log(data);

//     var str = '';
//     for(var i=0; i < json,data,length; i++){
//         var title = (json.data[i].title;
//             var path = json.data[i].path;
//             str += '<a href="https://1boon.kakao.com/' + path + '"target = "_blink">' + title + '</a><br>'
//     }

//     document.getElementById('wrap').innerHTML = str;
// })


// function getUrlData(url, callback){
//     fetch(url)
//     .then(function(response){
//         response.json().then(function(data){
//           console.log('json data:',data);
//           callback(data)
//           //document.getElementById('name').innerHTML = data.name;
//         });
//       })
//      .catch(function(err) {
//         console.log('Fetch Error :-S', err);
//       });

// }

var count = 1;
var url = 'https://1boon.kakao.com/ch/enter.json?page=1&pagesize=10';
var btn = document.getElementById('btn');


console.log('1boon');



function print(json){
  console.log( json );

  var str = '';

  for(var i=0; i < json.data.length; i++){
    
    var title = json.data[i].title;
    var path =json.data[i].path; 
    str += '<a href="https://1boon.kakao.com/'+path+'">' + title + '</a><br>';
  }

  document.getElementById('wrap').innerHTML += str;
}



function getUrlData(url, callback) {
  fetch(url)
    .then(function(response) {
      response.json().then(function(data) {
        
        // console.log('json data:', data);
        callback(data)
      });
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
    
}


btn.addEventListener('click',function(){
 
  count++;
  var url = "https://1boon.kakao.com/ch/enter.json?page="+count+"&pagesize=10";
  getUrlData(url,print);
  
 
});

getUrlData(url,print);




