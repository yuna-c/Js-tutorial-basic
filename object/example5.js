//prototype 상속

//부모 객체
function Person(){

}

Person.prototype.hello = function(){
    console.log('hello');
}

//자식 객체
function Korean(region){
    this.region = region;
    this.where = function(){
        console.log('where', this.region);
    };
}

Korean.prototype = Person.prototype;

const k = new Korean('Seoul');

k.hello();
k.where();

console.log(k instanceof Korean);
console.log(k instanceof Person);
console.log(k instanceof Object);




function Onedays(){}

Onedays.prototype.hello = function(){
    console.log("OK Bye");
}

function Wenday(that){
    this.that = that;
    this.where = function(){
        console.log('where', this.that);
    }
}

Wenday.prototype = Onedays.prototype;

const d = new Wenday('thisday');

d.hello();
d.where();

console.log(d instanceof Onedays);
console.log(d instanceof Wenday);
console.log(d instanceof Object);