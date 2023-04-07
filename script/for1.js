// //반복문 ★★★★★😎
// /* 
// for (초기값; 조건식; 증감식){
//     조건식이 참일 때 반복실행구문
// } */
// // for 초기변수명 : i, j, m, n 순서로 작성
// for(let i=0; i<10; i++){
//     console.log(`javascript ${i+1}`)
// }
// for(let i=0; i<4; i++){
//     console.log(`day ${i+1}`)//DOM에서 index는 0부터 인식하기 때문에 순서가 바뀌지 않기 위해 i=0으로 시작한다.
// }
// let a  = ['html', 'css', 'javascript']
// for(let i=0; i<3; i++){
//     console.log(a[i])
// }
// // let coffee = ['아메리카노','카페라떼','카푸치노','에스프레소','돌체라떼']
// // for(let i=0;i<5;i++){
// //     console.log(`${i+1}번 메뉴 ${coffee[i]}`)
// // }
// console.log('------------------------------------')
// let coffee = ['아메리카노','카페라떼','카푸치노','에스프레소','돌체라떼']
// for(let i=4;i>-1;i--){
//     console.log(`${i}번 메뉴 ${coffee[i]}`)
// }
// let fruit = new Array('사과','망고','오렌지','레몬','딸기','귤','복숭아','멋쟁이토마토~');
// console.log(fruit.length)//length는 1부터 시작이므로 초과나 미만을 이용해야 맞다
// for(let i=0;i<fruit.length;i++){
//     console.log(fruit[i])
// }
// console.log('--------------------------------------')
// for(let i=fruit.length-1;i>=0;i--){
//     console.log(fruit[i])//대입자체는 크기를 줄이거나 늘릴 수 없으므로 -1해준다
// }
// //반복문 + 조건문 
// //반복 {조건문}
// //1~20 홀수만 출력
// for(let i=1; i<21; i++){
//     if(i%2){
//         console.log(i)
//     }
// }
//5~15까지 짝수만 출력
for(let i=5; i<16; i++){if(i%2==0){console.log(i)}}
console.log('---------------------------------')
//1~10까지 역순 홀수 출력
for(let i=10; i>0; i--){if(i%2){console.log(i)}}
console.log('---------------------------------')
//10~20 역순 짝수 출력
for(let i=20; i>=10; i--){if(i%2==0){console.log(i)}}
console.log('---------------------------------')
//반복문 이용 총 합 구하기
let data = [10,20,30,40,50]
let result = 0 //result=0을 하지 않으면 NaN + 20 이므로 초기값을 설정해준다.
for(let i=0; i<data.length; i++){
    result += data[i]
    }
console.log(`data 변수의 총 합은 ${result}입니다.`)
// result += data[0]
// result += data[1]
// result += data[2]
// result += data[3]
// result += data[4]
console.log('-----------------------------------------------')
//1~10 반복문 태그작성 document.write()
for(let i=1; i<11; i++){
    if(i%2){
        document.write(`<p class="bg1">${i}</p>`)}
    else{
        document.write(`<p class="bg2">${i}</p>`)}
    // console.log(i)`
    // document.write(`<p class="bg1">${i}</p>`)//스크립트를 통해 태그를 만듬
}