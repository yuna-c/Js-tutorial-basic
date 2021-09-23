/*
excutor 의 resolve 함수를 실행 할 때 인자를 넣어 실행하면(fulfilled 상태로 바꿀 때),  then의 callback 함수의 인자로 받을 수 있습니다.
    resolve('hello');
    then((message)=>{...})
*/
/*
비동기 => 원격에 있는 데이터를 가져올 때 사용, 
원격으로 요청 후 정상적으로 받았을 때 받아온 데이터를 then으로 데이터를 주고 UI를 받아올 때 쓰임
*/
function p(){
    return new Promise((resolve,reject)=>{
        /* pending */
        setTimeout(()=>{
            resolve('aion');// 객체, 메세지(문자열) 담아 보낼 수 있음
            //reject();
        }, 1000);
    })
}

p()
    .then(message => {
        console.log('1초 후 fulfilled❤ 됩니다.', message);
    })
    .catch(() => {
        console.log('1초 후 rejected❤ 됩니다.');
    });