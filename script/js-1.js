// // 조건문 switch 다중조건처리
// let a = 20
// switch(a){
//     case 10:console.log('a==10');break;
//     case 20:console.log('a==20');break;
//     default:console.log('일치하는 값 없음');
// }
// //--------------------------------------------2
// let b = 10
// let c = 5
// let total =b>c
// switch(total){
//     case true:console.log('참');break;
//     case false:console.log('거짓');break;
//     default:console.log('잘못된 접근입니당~')
// }
// //---------------------------------------3
// // let 딸기 = '1000원'
// // let 수박 = '5000원'
// // let 오렌지 = '2000원'
// let fruit = window.prompt('과일을 말해라')
// switch(fruit){
//     case '딸기':console.log('1000원');break;
//     case '수박':console.log('5000원');break;
//     case '오렌지':console.log('2000원');break;
//     default:console.log('.판매하지 않는 상품입니다.')
// }
//-------------------------------------------4
// let num1 = Number(prompt('첫번째 수 입력'))
// let num2 = Number(prompt('두번째 수 입력'))
// let op = prompt('연산법(+,-,*,/.%)를 정하세요') 
// let result                        
// switch(op){
//     case '+':result=num1+num2;break;
//     case '-':result=num1-num2;break;
//     case '*':result=num1*num2;break;
//     case '/':result=num1/num2;break;
//     case '%':result=num1%num2;break;
//     default:result=('잘못된 계산입니다')
// }
// console.log(result)
//--------------------------------------------5
// if(lucky == 1){
    //     result = '당첨!냉장고'}
    // else if(lucky == 2){
        //     result = '당첨!세탁기'}
        // else if(lucky == 3){
            //     result = '당첨!Tv'}
            // else {
                //     result = '꽝'}
                // console.log(result)
                
let lucky = 3
let result
switch(lucky){
    case 1:result='당첨!냉장고';break;
    case 2:result='당첨!냉장고';break;
    case 3:result='당첨!냉장고';break;
    default:result=('꽝')
}
