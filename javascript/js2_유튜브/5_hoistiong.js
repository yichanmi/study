/** 
 * Hoisting
*/

console.log('hello');
console.log('world');

// console.log(name); // undefined
// var name = '이름';
// console.log(name);

// 아래 코드 처럼 동작함
// var name;
// console.log(name);
// name = '이름이름';
// console.log(name);

/**
 * Hoisting은 무엇인가?
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 */

// 아래코드는 let으로 선언하였다.
// 실행결과 name변수가 정의되지않았다고 에러를 뱉음. 즉 변수가 정의된 상태임 => 호이스팅 o
// 하지만 var은 호이스팅 현상(변수가 선언되기 전에 사용되는 현상)을 막아주지 못하고
// let과 const는 변수는 이러한 호이스팅 현상을 막아줄 수 있다. (호이스팅이 발생안하는 건 아님)
console.log(name);
let name = '이름1';

console.log(name);
const name2 = '이름1';
