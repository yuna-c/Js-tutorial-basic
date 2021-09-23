/*
p라는 프로미스 객체가 fulfilled 되는 시점에 p.then 안에 설정한 callback 함수가 실행됩니다.
*/

// const p = new Promise((resolve,reject)=>{ //Promise 객체가 만들어지는 순간
//     /* pending */
//     setTimeout(() =>{
//         resolve(); /* fulfilled */
//     }, 1000);
// });

// p.then(()=>{ /* callback */
//     console.log('1000ms 후에 fulfilled 됩니다.');
// })

const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve();
    }, 1000);
});

p.then(()=>{ //실제 불릴 함수
    console.log('풀필드❤')
});