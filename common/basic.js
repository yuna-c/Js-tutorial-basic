myName = 'nana'; //변수 선언 할당
console.log(myName);
let myName1 = 'nanaa'; //변수선언 값 할당
// console.log(myName1);
myName1;

console.log(true);
console.log(false);
console.log('Anna');

let name = 'Unb';
console.log(name);

let hello = 'hello';
let java = 'javascript';
console.log(hello + java);
console.log(`${hello} ${java}`);

// alert(1000 + 200 + 90 + 2);
// alert(`${hello} ${java}`)

// confirm('Yes?');
//y = true
//f = false

var people = 'man';
console.log(people);
1000 + 900 + 90 + 4;

console.log(1000 + 900 + 90 + 4);
console.log(true, 25, 100+209)

var $nana = 'nana' + ' loves' + ' forever';
console.log($nana, typeof $nana);
var _name = 23;
console.log(_name, typeof _name)
var person = {
    hisName : 'mark',
    hisAge : 34,
    hisHobby : 'play game'
}
console.log(person, typeof person);
console.log(person.hisName);
console.log(person.hisAge);
console.log(person.hisHobby);



function arrayy(){
    //let a= [];
    alert('!');
}

console.log(arrayy, typeof arrayy);

const sum  = 5 + 10;
let result = false;

console.log(result);

sum % 3 === 0 ? console.log('야호3') : console.log('XXX'); 

if(sum % 3 === 0 & sum % 5 === 0) {
    console.log('야호15!!!');
    result = true;
} else {
    console.log('XXX');
}
console.log(result);

const cats = {
    nana : 'cat_0',
    deve : 'cat_1',
    crise : 'cat_2'
}
console.log(cats, typeof cats);
// console.log(cats[nana]);
for (const key in cats){
    console.log(cats[key]);
}
Object.keys(cats);

console.log(cats.deve);

for(let i = 0; i < 5; i++){
    const message = "hello" + i;
    console.log(message);
}

function hello1(){
    const hello = "hello";
    console.log(hello);
}
console.log(hello);


//arraw 함수
const hello2 = () => {
    const ages = 31;
    console.log(ages);
}
console.log(hello2);
//[Function: hello2]

{
    const mama = 'mama';
    console.log(mama);
}
// X console.log(mama);

let numbering = 33;
{
    numbering++;
    console.log(numbering);
}
console.log(numbering);

{
    numbering--;
    console.log(numbering);
}

console.log(numbering++ + "@");
console.log(numbering-- + "@");

if(true){
    let numbering = 80;
    console.log(numbering);
}
numbering++;
console.log(numbering);

var a = 0;
(function(){
    a++;
    console.log(a);
})();
console.log(a);

var b = 4;
(function(){
    b--;
    console.log(b);
})();

console.log(b);


var mini;
console.log(mini);
mini = 'nana';
console.log(mini);

bye();
function bye(){
    console.log('ok,bye');
}
bye();


let example;
console.log(example);

example = "Nana";

console.log(example);

//boolean
const isTrue = true;
const isFasle = false;

console.log(isTrue, typeof isTrue);
console.log(isFasle, typeof isFasle);

//[Boolean: false] object
const aaa = new Boolean(false);
console.log(aaa, typeof aaa);

if (aaa){ console.log('false?');}

//2 함수
const bbb = Boolean(false);

console.log(bbb, typeof bbb);

if(bbb) { 
    console.log('false?');//조건문 안이 실행
}

const nullObj = null;
console.log(nullObj, typeof nullObj);

let ccc;
console.log(ccc, typeof ccc);

if(nullObj == ccc){
    console.log(nullObj == ccc);
}

if(nullObj === ccc){
    console.log(nullObj === ccc);
}

const d = Number('Mark'); //문자열 형변환
console.log(d, typeof d);

const e = Number('37'); //문자열 => 숫자열
console.log(e, typeof e);

const mark = 'Mark';
console.log(mark, typeof mark);
const multi = mark + 'LEE';
console.log(multi, typeof multi);

const multiple = `${multi} Choi`;
console.log(multiple, typeof multiple);

//symbol
const cy = Symbol('Mark');
const dy = Symbol('Mark');

console.log(cy === dy);

const num = 25;

if(num % 3 === 0){
    console.log('num 은 3의 배수 입니다.');
} else if (num % 5 === 0){
    console.log('num 은 5의 배수 입니다.');
} else {
    console.log('num 은 3의 배수도 아니고, 5의 배수도 아닙니다.');
}

const multipleOfThree = (num % 3 === 0);
const multipleOfFive = (num % 5 === 0);
if(multipleOfThree && multipleOfFive){
    console.log('num은 15의 배수입니다.')
} else if(multipleOfThree){
    console.log('num은 3의 배수입니다.')
} else if(multipleOfFive){
    console.log('num은 5의 배수입니다.')
} else {
    console.log('num은 3과 5의 배수가 아닙니다.')
}


if(multipleOfThree && multipleOfFive){
    console.log('n 은 15의 배수 입니다.');
} else {
    if(multipleOfThree){
        console.log('n 은 3의 배수 입니다.');
    } else if (multipleOfFive){
        console.log('n 은 5의 배수 입니다.');
    } else {
        console.log('n 은 3의 배수도 아니고, 5의 배수도 아닙니다.');
    }
}

// 표현식 || 표현식

// 참이거나 참
if(true || true){
    console.log('두개 모두 참이면 참입니다');
}

// 참이거나 거짓
if(true || false){
    console.log('한개만 참이면 참입니다');
}

// 거짓이거나 참
if(false || true){
    console.log('한개만 참이면 참입니다');
}

// 거짓이거나 거짓
if(false || false){
    console.log('두개 모두 거짓이면 거짓입니다');
}