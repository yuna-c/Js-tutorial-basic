// Promise 객체가 rejected 된 경우의 처리를 위해
// try catch를 이용한다.

function p(ms) {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            // resolve(ms);
            reject(new Error('reason'));
        }, ms);
    })
}

// async 즉시실행(resolve = 정상적으로 끝났다.)
(async function main() {
    try{
        const ms = await p(1000);
        // 정상적인 처리인 경우 여기서 실행, 처리
    } catch(error) { //new Error reason
        console.log(error, `${error} 실행실패★★`);
    }
})();