"use strict";

//常量
const grade = "二年级";
let des = "ES6语法尝试";

//增强的字面量声明
const tools = {
    des:"自定义工具对象",
    log(){
        console.log.apply(console,arguments);
    }
};

//类
class Persion{
    constructor(){
        this.name = null;
        this.age = 0;
    }

    talk(msg){
        tools.log(`{this.name} speak: {msg}`);
    }
}

//继承
class Mate extends Persion{

    constructor(opt={}){ //默认参数值
        super(name);
        this.kind = "学生";
        this.name = opt.name;
        this.age = opt.age;
        this.score = "0";
    }

    study(){
        tools.log("Mate study fn");
    }
}
//let 关键字
let classMates = [
    new Mate({name:"张三",age:15}),
    new Mate({name:"李四",age:16}),
    new Mate({name:"张三",age:15})
];

//解构
let [mate1, mate2, mate3] = classMates;
let {name:mate1_name, age, sex="male"} = mate1;
console.log("解构mate1", mate1);
console.log("解构mate1.name", mate1_name);

//迭代器
var students = {}

students[Symbol.iterator] = function() {
    let index = 1;
    return {
        next() {
            return {done: index>10, value: "value is"+index++}
        }
    }
}

for(var i of students) {
    console.log(i);
}


!function(){
    //Map，Set 和 WeakMap，WeakSet
    var s = new Set();
    s.add("hello").add("goodbye").add("hello");
    s.size === 2;
    s.has("hello") === true;

    var m = new Map();
    m.set("hello", 42);
    m.set(s, 34);
    m.get(s) == 34;
}();


!function(){ return; //Babel和chrome不支持
    //Proxy, 定义被侦听的目标对象
    var engineer = { name: 'Joe Sixpack', salary: 50 };
    //定义处理程序
    var interceptor = {
        set: function (receiver, property, value) {
            console.log(property, 'is changed to', value);
            receiver[property] = value;
        }
    };
    //创建代理以进行侦听
    engineer = Proxy(engineer, interceptor);
    //做一些改动来触发代理
    engineer.salary = 60;//控制台输出：salary is changed to 60
}();

!function(){
    var arr = Array.from(document.querySelectorAll("*"));
    tools.log(arr);
}();

function decorate(_classMates=[]){
   return classMates.map((item,index)=>{
        item.id = index;
       return item;
    });

}

function render(dom={}, data=[]){
    let html = "";
    data.forEach((item)=>{
        html+=`<li>${item.name}</li>`;
    });
    dom.innerHTML += `<ul>${html}</ul>`;
}

window.onload=function(){
    var data = decorate(classMates);

    //for...of
    for(let value of data){
        tools.log(value);
    }

    render(document.body, data);
    tools.log(data);



}
