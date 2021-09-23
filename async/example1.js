// Promise 객체를 리턴하는 함수
function p(ms){
    return new Promise((resolve, reject) => {
        //비동기
        setTimeout(() =>{
            resolve(ms);
        }, ms);
    })
}

// Promise 객체를 이용해서 비동기 로직을 수행할 떄
p(1000).then(ms =>{ //비동기 끝나면 일어나는 
    console.log(`${ms} ms 후에 실행된다★`);
})

// Promise 객체를 리턴하는 함수를 await로 호출하는 방법
//await p(1000); // then으로 가지 않고 정상적으로 실행 됬을때 async가 ms값으로 옴
const ms = await p(1000); //전역
console.log(`${ms} ms 후에 실행된다★★`);

//실제로는 비동기적인 처리로 보냈지만 함수가 끝날때 까지 다음줄로 넘어가지않고, 기다렸다가 resolve 되면 인자값을 return해서 밑으로 이어짐 
// 전역이 async로 감싸져 있지 않아서 에러뜸