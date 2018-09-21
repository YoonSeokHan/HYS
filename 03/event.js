// var btn = document.getElementById('btn');

var btn = document.querySelector('#btn');
console.log(btn);


function click() {
    return function () {
        console.log('click', event);
        window.open('http://daum.net', '', 'width=500, height=500');
    };
}


btn.addEventListener('click', click())


