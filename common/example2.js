alert('scope');

//블럭
{
    const name = 'Mark';
    console.log(name);
}
// console.log(name); X 에러

// 밖에서 안으로 O
let age = 37;
{
    age++;
    console.log(age);
}
console.log(age++);

//중첩
{
    {
        {
            console.log(age + '!');
        }
    }
}

//조건문
if(true) {
    let age = 37;
    console.log(age);
}

age++;

//반복문
for(let i = 0; i < 5; i++) {
    const message = 'hello' + i;
    console.log(message);
}
//console.log(message);

//함수
function hello1() {
    const names = "Mina";
    console.log(names);
}
//console.log(names);

//arraw 함수
const hello2 = () => {
    const ages = 33;
    console.log(ages);
}
//console.log(ages);