/*
1. DOM에서 이미지와 버튼을 가져오기 > DOM 생성이 된 후에 가져와야함
2. 버튼에 클릭이벤트를 만들기
3. 버튼 클릭하면 랜덤수 생성되어야 함(1~6)

자바스크립트 랜덤수 검색> 난수 생성하기
Math.floor(Math.random() * 6) // 0~5 숫자 생성
Math.floor(Math.random() * 6) +1 //1~6 숫자 생성
Math.floor : 소수점 떼줌
랜덤수 생성됐으면
4. 랜덤수에 해당하는 이미지를 이미지 src속성에 넣기

*/

document.addEventListener("DOMContentLoaded",() =>{
    //1. DOM에서 이미지와 버튼 가져오기    
    //이미지에 id걸어도 됨
    const img = document.querySelector('#btDiv > img');
    const bt = document.querySelector('#btDiv > button');

    //2. 버튼 Click 이벤트 만들기

    bt.addEventListener('click', ()=>{
    //3. 랜덤수 생성
    const n = Math.floor(Math.random() * 6) +1;

    //4.속성바꿈 랜덤수에 해당되는 이미지를 src속성에 넣기 src 문자열 안에서 변수n쓰고 싶을때 ``씀
   //기본형 element.setAttribute('attributename','attributevalue');
    img.setAttribute('src', `./img/${n}.png`);
    img.setAttribute('alt', `${n}`);

    });

});

