// async function에서 return 되는 값은 Promise.resolve 함수로 감싸서 리턴된다.

function p (ms) {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(ms);
            //reject(new Error('reason'));
        }, ms);
    })
}

//
async function asyncP(){
    const ms = await p(2000); //new promise 리턴-> reject, resolve 중 하나 불릴 때 까지 
    return ms + '후에 Promise.resolve로 감싸져서 리턴됩니다.';
}

(async function main(){
    try{
        const name = await asyncP(); //비동기 처리 끝나면 밑으로
        console.log(name);
    } catch {
        //reject
        console.log(error, `${error} 실행실패★★`);
    }
})();