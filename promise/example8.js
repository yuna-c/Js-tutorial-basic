/*
p라는 프로미스 객체가 fulfilled 되는 시점에 p.then 안에 설정한 callback 함수가 실행됩니다.
*/

const p = new Promise((resolve,reject)=>{ // 함수로 지정
    /* pending */
    setTimeout(() =>{
        resolve(); /* fulfilled */
    }, 1000);
});

p.then(()=>{ /* callback */
    //resolve(); 후에 실행되는것 , 1초 후에 시작 함

})

// const q = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve();
//     }, 1000);
// })

// q.then(()=>{
//     resolve();
// });