

//const handleClick(n)
function handleClick(n){
    document.querySelector('#msg').innerHTML = `<h1>안녕하세요! ${n}</h1>`;
    // 문자열 넣을땐 1옆에 ``를 넣어줌

}
document.addEventListener("DOMContentLoaded", ()=>{
 // document.getElementById('msg').innerHTML = '안녕하세요';
//document.querySelector('#msg').innerHTML = '<h1>안녕하세요</h1>';


});

//innerHTML은 속성(프로퍼티)