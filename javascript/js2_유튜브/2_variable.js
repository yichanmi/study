/**
 * Variable 선언하기
 * 
 * 1) var - 더이상 쓰지 않는다.
 * 2) let 
 * 3) const
 */
var name = 'mimi';
let name2 = 'chch';
const name3 = 'hihi';

console.log(name, name2, name3);

/**
 * let과 var로 선언하면 값을 추후 변경할 수 있다
 */
name2 = '123';
console.log(name2);

const newJeans = '뉴진스';
// newJeans = '뉴진스변경'; const는 값을 변경하면 에러남.
console.log(newJeans);

/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는 것.
 * 2) 할당
 */
var name; // 선언
var a = '나야'; // 할당

let girl; // 선언
console.log(girl); // undefined : 값이 정의되지 않음

// console girl2; => 값을 무조건 초기화시켜줘야함.
