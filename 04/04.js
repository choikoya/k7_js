//버튼클릭> com에서 랜덤값 받아서 주사위 굴리기
//me 는 선택값 주사위 나오기
// com 값과 me값이 일치하면 맞춤/ 다르면 틀림 출력

/*
1. DOM에서 제어할 노드를 가져오기(이미지2, 버튼6, 결과메세지)
2. 6개 버튼 클릭을 확인-어떤 버튼이 눌러졌는지
3. 버튼 클릭이 되면 
    - 해당하는 버튼의 숫자를 추출한다(1버튼>1, 3버튼>3)=>사용자 선택 숫자(user) =>이미지 변경
    - 랜덤수를 생성 =>컴퓨터 숫자(com) =>이미지 변경
    - 사용자 선택수(user)와 랜덤수(com)를 비교
    - 결과 출력 

*/


document.addEventListener("DOMContentLoaded",() =>{  //여기서 끊어서 엔터(습관!!)
   
    //1. DOM에서 제어할 노드를 가져오기(이미지2, 버튼6, 결과메세지)


    //const comImg = document.getElementById('com');//getElementByID는 그냥 아이디만 쓰면됨
    const comImg = document.querySelector('#com'); //query는 #아이디써야함 요즘은 qurey많이씀
    const userImg = document.querySelector('#user');
    const msg = document.querySelector('#msg');

    //All 여러개 들고옴 다른데 버튼없으면 'button' 써도됨/  section > button
    //여러개중 들고오고싶은것들만 클래스 써서 들고올수있음 button class=bt4면 js에서 .bt4로 지정해서 들고옴 
    const bts = document.querySelectorAll('.bt4');
   // console.log(bts);

    // //반복문1
    // console.log('**반복문1**')
    // for(let i = 0; i<bts.length; i++){  //java에선 변수로 const(안바뀜) let(바뀜)씀 i가 계속 바뀌니까 let씀
    // console.log(bts[i])
    // }


    // //반복문2
    // console.log('**반복문2**')
    // for(let i in bts){ //키를 가져옴
    //     console.log(bts[i])
    // }

    // //반복문3
    
    // console.log('**반복문3**')
    // bts.forEach(bt => { //파라미터 한개일땐 파라미터 괄호 생략가능
    //     console.log(bt)
    // })
 

    //  //반복문4
    //  for(let bt of bts){
    //     console.log(bt)
    //  }


    //  //인덱스도 뽑을수있음 entries하면 인덱스값, 자체값을 그대로 가져옴 두개를 배열로 나누어 받음
    //  for(let [i,bt] of bts.entries()){
    //     console.log(i, bt)
    //  }

    //2. 6개 버튼 클릭을 확인
   // bts[0].addEventListener('click', () => {}); //이런식으로 하면 6번 버튼 하나씩 달아줘야함
    for(let bt of bts){ 
    bt.addEventListener('click', ()=>{ //6개 버튼에 클릭이벤트를 달아줌

        //  //3. 버튼 클릭이 되면 
//  - 해당하는 버튼의 숫자를 추출한다(1버튼>1, 3버튼>3)=>사용자 선택 숫자(user) =>이미지 변경
//  - 랜덤수를 생성 =>컴퓨터 숫자(com) =>이미지 변경
//  - 사용자 선택수(user)와 랜덤수(com)를 비교
//  - 결과 출력 
     // console.log(bt.innerHTML);
     // console.log(bt.textContent.slice(0,1))//cosole로 보면 버튼값 나옴 
        const user = parseInt(bt.textContent.slice(0,1)) //유저에 넣음
      // 문자열 자르기 문법 str.slice(beginIndex[, endIndex])
        const com = Math.floor(Math.random()*6)+1; 
    
        comImg.setAttribute('src',`./img/${com}.png`);
        comImg.setAttribute('alt',`computer num ${com}`);
        
    
        userImg.setAttribute('src',`./img/${user}.png`);
        userImg.setAttribute('alt',`user num ${user}`);
        
      if(com == user){
        msg.innerHTML = '맞음';
      }
      else {
        msg.innerHTML = '틀림';
      }
      
    }); 
    }
    
});



/*
    const bt = document.querySelector('#btDiv > button');

    bt.addEventListener('click', ()=>{
    const n = Math.floor(Math.random() * 6) +1;
    const m = 

    img.setAttribute('src2', `./img/${n}.png`);

    if 

    img.setAttribute('alt', `${n}`);

  
    img.setAttribute('src', `./img/${n}.png`);
    img.setAttribute('alt', `${n}`);

    });
 */   


