// await를 사용하는 경우, 항상 async 함수 안에서 사용되어야 한다.

function p(ms){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(ms);
        }, ms);
    });
}

//- 메인 함수를 호출하면 실행 
// async function main(){
//     const ms = await p(1000);
//     console.log(`${ms} ms 후에 실행된다★★`);
// }

// main();

//- 즉시실행 함수 호출 
(async function main(){ //만들자마자 실행되는 함수기 때문에 이렇게 해도 상관이 없다
    const ms = await p(1000); //await가 있으면 비동기 처리가 끝날 때 까지 기다렸다가 값(인자)를 넘겨서 밑으로 진행됨
    console.log(`${ms} ms 후에 실행된다★★`);
})();