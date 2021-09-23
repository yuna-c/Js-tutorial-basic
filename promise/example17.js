/*
then 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝하면. 비동기 작업을 순차적으로 아래로 표현 가능
then에서 함수를 넣는 여러 방법을 확인해 봅시다.
*/

function p() {
    //Promise 객체를 리턴
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

p()//pending상태 
.then(() => {
    return p();// 새로운 promise 개체를 만들어 return
})
//이후 또 작업을 원한다면 2초후 
.then(() => p()) //arrow function은 중괄호 생략 가능하니 이렇게 하면 똑같은 결과
// 3초후 
.then(p)
.then(()=>{
    console.log('4000ms 후 fulfilled 됩니다.')
})