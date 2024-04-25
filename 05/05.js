

// 숫자입력 후 버튼누르면 랜덤값 생성됨
// 랜덤값이 입력값보다 크면 up이미지 출력
// 랜덤값이 입력값보다 작으면 down 이미지 출력
// 랜덤값과 입력값이 같으면 굿잡 이미지 출력


/*
1. DOM에서 제어할 노드를 가져오기(이미지1, 폼1 버튼1)
2. 버튼 클릭되면 
[확인버튼일때]
    - 랜덤수 생성(1~100)=>랜덤수는 다시 하기 전까지 변경되면 안됨
    - input 박스 값이 없으면 '값을 입력하세요' 메시지 출력
    - input 박스 값이 1에서 100사이 숫자가 아니면 '입력오류' 메시지 출력
    - input 박스 값이 랜덤수보다 작으면 up이미지
    - input 박스 값이 랜덤수보다 크면 down이미지
    - input 박스 값과 랜덤수가 같으면 good이미지 =>input이 보이지 않아야 함(인풋박스를 숨겨야 함)
    - 버튼의 캡션을 변경 > '숫자를 생성해 주세요'
[숫자를 생성해 주세요 버튼일때]
    -초기화 : 랜덤수 새로 생성, input박스 보이기..


*/

document.addEventListener("DOMContentLoaded",() =>{
    
    //1. DOM에서 제어할 노드를 가져오기(이미지1, 폼1 버튼1)
    const updowning = document.querySelector('#updowning');
    const input = document.querySelector('#txt1');
    const bt = document.querySelector('#bt')


    //랜덤수
    let n; //click 안에 만들면 계속 변화함. 밖에 만들어야 한번만 실행되고 안됨
    let flag = false;
    bt.addEventListener('click', (e)=>{ //if flag안넣으면 버튼 누를때마다 다른숫자 나옴. 새게임할때까지 고정해야함
        //form 태그 사용시 다시 호출되지 않도록
        e.preventDefault();
        
        if(!flag){ //if(flag == false)
            flag = true //flag가 flalse면 랜덤값 안만들고 true면 랜덤값 만들어줌(반대여도 됨)
            n = Math.floor(Math.random() * 100 + 1); //1~100
            console.log('n =',n)
        }

        //input 박스 값이 없으면 '값을 입력하세요' 메시지 출력

        //입력값 체크
        if(input.value == ''){ //값 입력안하고 버튼 누르면
            alert('값을 입력하세요');
            input.focus(); //커서를 인풋박스에 
           return ;
        }
        console.log(n);
        

        // if(input.value == 'n');
        // arlert('같음');


});

        


    });
    




