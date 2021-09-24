function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms)
    })
}

// Promise.all
// (async function main(){ // 배열로 값이 넘어옴
//     const results = await Promise.all([p(1000), p(2000), p(3000), p(4000)]);
//     console.log(results);
// })();

// Promise.race
(async function main(){ // 배열로 값이 넘어옴
    const result = await Promise.race([p(1000), p(2000), p(3000), p(4000)]);
    console.log(result);
})();
