// 반복문이 없다면?
console.log('안녕하세요');
console.log('안녕하세요');
console.log('안녕하세요');
console.log('안녕하세요');
console.log('안녕하세요');

// for문을 사용한다면?
// 보통 어떤 유한한 횟수만큼 반복할 때는 for문을 사용합니다.

for(let i = 0; i < 5; i++){
    console.log('안녕하세요!');
}

// 초기화 하면서 선언된 변수를 중괄호 안 반복 블럭에서 사용 할 수 있습니다.
for(let i = 0; i < 5; i++){
    console.log('hi hello 안녕', i);
}

for(let i = 0, j = 5; i < 5; i++){
    console.log('hi hello 안녕!', i, j);
}

for(let i = 0, j = 2; i < 5; i++, j = j * j){
    // i는 하나씩 증가시키고 j는 j*j되는 값을 실행
    console.log('hi hello 안녕!!', i, j);
}

// 반복문을 즉시 종료하고 싶을 때는 반복되는 블럭 안에서 break;를 실행하면 가능합니다.
for(let i = 0; i < 5; i++){
    console.log(i);
    if(i > 2) {
        break;

        //3 후에 반복문 종료되니까 안녕 안찍힘
    }
    console.log('hi hello 안녕★', i);
}

// 반복되는 블럭 안에서 continue;를 만나면 거기서 바로 해당 블럭은 종료됩니다.
// 그리고 이와 같이 다음 반복이 있으면 다음 반복으로 넘어갑니다.
for(let i = 0; i < 5; i++){
    console.log('~★ ~!', i);
    if(i < 2){
        continue;
        //i가 2보다 작을때는 hi가 통과되어서 안찍힘
    }
    console.log(' ~★ ~ hi hello 안녕★', i);
}