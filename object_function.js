var kim = {name:'kim', first:10, second:20}
var lee = {name:'kim', first:10, second:10}
function sum(prefix){
    return prefix+(this.first+this.second);
}
sum.call(kim); // sum(); 과 같다
console.log("sum.call(kim) ", sum.call(kim, '=> '));
console.log("sum.call(lee) ", sum.call(lee, ': '));
var kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum());