var superObj = {superVal:'super'}
// var subObj = {subVal:'sub'}
// subObj.__proto__=superObj;
var subObj = Object.create(superObj);
subObj.subVal = 'sub';
debugger;
console.log('subObj.subVal =>', subObj.subVal); // subObj.subVal => sub
console.log('subObj.superVal =>', subObj.superVal); // subObj.superVal => super
subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal); // superObj.superVal => super

