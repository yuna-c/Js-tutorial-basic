/*
콜백 헬 : 함수가 아래로 진행되지 않고 callback 안으로 중첩
보통 비동기 작업을 할 때, callback 함수를 인자로 넣어 로직이 끝나면 callback 함수를 호출 합니다.
이런 경우 함수가 아래로 진행되지 않고, callback 함수 안으로 진행됩니다.
*/

//비동기 작업을 callback으로 할 때
function c(callback){ //인자
    setTimeout(()=>{
        callback();
    }, 1000);
};
//한번의 콜백을 받는다 
c(() => {
    // 끝나면 진행 할 함수 
    console.log('1000ms 후 callback 함수가 됩니다.');
});
//두번째 callback 
c(() => {
    c(() => { //2초 후
        console.log('2000ms 후 callback 함수가 됩니다.');
        c(() => { //3초 후
            // 끝나면 진행 할 함수 
            console.log('3000ms 후 callback 함수가 됩니다.');
        });
    });
});

