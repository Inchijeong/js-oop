var kim = {
    name: 'kim',
    first: 10,
    second: 20,
    third: 30,
    sum: function(){
        return this.first+this.second+this.thrid;
    }
}
var lee = {
    name: 'kim',
    first: 10,
    second: 10,
    third: 10,
    sum: function(){
        return this.first+this.second+this.thrid;
    }
}
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

var d1 = new Date('2019-10-16');
console.log('d1.getFullYear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth());

function Person(name, first, second){
    this.name=name;
    this.first=first;
    this.second=second;
    this.sum = function(){
        return this.first+this.second;
    }
}

var pak = new Person('pak', 10, 20);
var sin = new Person('sin', 10, 10);
console.log("pak.sum()", pak.sum());
console.log("sin.sum()", sin.sum());