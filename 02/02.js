 // doc객체 중에 add함수사용(인수전달해야함) comcontent나오면 돔감지(로드완료되어 어디든 갈수있는상태)
// =로 값을 할당하는건 속성(프로퍼티)
// 객체(값=속성(키,몸무게)과 행위를 가짐).메서드(함수) 이벤트 감지>어느시점에? 돔로드가 됐다면 어떤일 할건데? 함수에 인수가 바로 들어올수있음 익명(콜백)함수
// {}바디부분 ({}); 전체 세팅부터 하고 코드작성)
// 잘 되고있는지 디버깅하기위해 콘솔창에 출력(개발자도구>콘솔탭에서 볼수있음)


const btCreate = (bt, idTxt, captionNode, parentNode) => {
    bt.setAttribute('id', idTxt);
    bt.appendChild(captionNode);
    parentNode.append(bt);
}

document.addEventListener("DOMContentLoaded",() =>{
console.log('Dom 완성');


const msg = document.querySelector('#msg');
//btDiv에 갖다붙임
const btDiv = document.getElementById('btDiv');


//버튼 요소만듦. 변수화 시켜서 가지고 있어야 함 bt1이라는 이름으로 저장. 갖다쓸수있게
 //변수에 호스팅
 //const 상수선언 한번선언하면 안바뀜 다음번에 쓰려면 선언된 bt1을 써야함
 const bt1 = document.createElement('button');
 
 //버튼만들어서 const 써서 bt1과 붙여야 함 글자써짐
 const bt1Txt = document.createTextNode('버튼11');

 const bt2 = document.createElement('button');
 const bt2Txt = document.createTextNode('버튼21');


//  //속성추가
//  bt1.setAttribute('id', 'bt11');

//  //자식노드를 갖다붙여서 한세트를 만듦
//  bt1.appendChild(bt1Txt);

//  //노드에 끼우기 위해 append
//  btDiv.append(bt1);


btCreate(bt1, 'bt11', bt1Txt, btDiv);
btCreate(bt2, 'bt21', bt2Txt, btDiv);

 

 //click이벤트 발생하면 할일 씀
 bt1.addEventListener('click', ()=>{
    //id가 msg찾아서 태그박음 달면 태그까지 들어감(쓸수있음) 속성이라 =써야함
   
    // document.querySelector('#msg').innerHTML='<h1>안녕하세요!!</h1>';
   //msg반복사용해야 되므로 위에 const msg 만들고 윗문장 삭제
    
    //msg에 값이 없으면 글자나옴
    // if (msg.innerHTML == '')
    //     msg.innerHTML = '<h1>안녕하세요!!</h1>';
    // else
    //     msg.innerHTML='';
    msg.innerHTML = '<h1>안녕하세요!</h1>'
 });

 bt2.addEventListener('click', ()=>{
    msg.innerHTML = ''
});

//버튼 11 > 내용나오고  21>지우고



 });




