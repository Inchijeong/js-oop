// 배열
var memberArray = ['egoing', 'graphittie', 'leezhce'];
console.log("memberArray[2]", memberArray[2]);
// 객체
var memberObject = {
    manager:'egoing',
    developer:'graphittie',
    designer:'leezhce'
}
// 읽기
console.log("memberObject.designer", memberObject.designer);
console.log("memberObject[designer]", memberObject['designer']);
// 수정
memberObject.designer = 'leezche';
console.log("memberObject[designer]", memberObject['designer']);
// 삭제
delete memberObject.manager
console.log('after delete memberObject', memberObject.manager);