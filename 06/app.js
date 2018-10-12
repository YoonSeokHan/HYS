console.log('app')

var appkey = '3934565a4b0b4024e9df2dca71b24057';
var query = '제주대학교';
var url = `https://dapi.kakao.com/v2/search/web?query=${query}`;


var myHeaders = new Headers();
myHeaders.append("Authorization", "KakaoAK 3934565a4b0b4024e9df2dca71b24057");
var options = {headers : myHeaders};


fetch(url, options)
  .then(function(response){
    response.json().then(function(data){
      console.log('json data:',data);
    });
  })
 