//finally

function p (ms) {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(ms);
            // reject(new Error('reason'));
        }, ms);
    })
}

//
async function asyncP(){
    const ms = await p(2000); //에러 발생
    return ms + '후에 Promise.resolve로 감싸져서 리턴됩니다.';
}

(async function main(){
    try{
        const name = await asyncP(); //비동기 처리 끝나면 밑으로
        console.log(name);
    } catch(error) {
        //reject
        console.log(error, `${error} 실행실패★★`);
    } finally { //마지막에 찍힘
        console.log('end');
    }
})();