function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms)
    })
}

// Promise -> 계속 만들어서 return해서 체이닝
p(1000)
    .then(() => p(1000))
    .then(() => p(1000))
    .then(ms => {  // 1초씩 더 연결하는 체이닝 처리
        console.log( `${ms * 3} ms 후에 실행`);
    });

// async await -> 한줄 한줄이 비동기가 끝나면 진행이된다
(async function main() {
    const ms = await p(1000);
    await p(1000);
    await p(1000);
    console.log( (ms * 3) + `ms 후에 실행`);
})();