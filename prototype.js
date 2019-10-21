function Person(name, first, second){
    this.name=name;
    this.first=first;
    this.second=second;
}

Person.prototype.sum = function(){
    return 'prototype : '+(this.first+this.second);
}

var pak = new Person('pak', 10, 20);
pak.sum = function(){
    return 'this : '+(this.first+this.second);
}
var sin = new Person('sin', 10, 10);
console.log("pak.sum()", pak.sum());
console.log("sin.sum()", sin.sum());