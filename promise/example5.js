/*
excutor 함수 인자 중 하나인 resolve 함수를 실행하면, fulfilled(이행) 상태가 됩니다.
*/ 

new Promise((resolve,reject)=>{
    // 객체 생성이되면 pending 상태
    // 비동기 처리 상황

    // 끝났을 때
    resolve(); // fullfilled 상태
});