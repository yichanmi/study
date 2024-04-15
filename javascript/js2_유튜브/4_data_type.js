/**
 * Data Types
 * 
 * ★여섯개의 Primitive Type과
 *   한개의 오브젝트 타입이있다.
 * 
 * Primitive Type
 * 1) Number
 * 2) String
 * 3) Boolean (참1, 거짓0)
 * 4) undefined
 * 5) null
 * 6) Symbol
 * 
 * 7) Object(객체)
 *    Function
 *    Array
 *    Object
 */

/*Number 타입 */
const age = 32;
const pi = 3.14;
const temp = -10;

console.log(typeof temp);
console.log(typeof pi);

console.log("--------------------------------------------------------");

const infinity = Infinity; // 무한대
const ninfinity = -Infinity; // - 무한대
console.log(typeof infinity, typeof ninfinity);


console.log("--------------------------------------------------------");

/*String 타입 */
const myHome = '경기도';
console.log(typeof myHome);

const ive = "'아이브' 안유진";
console.log(ive);

/**
 * Template Literal
 * 
 * Escaping Charactor
 * 1) newLine : \n
 * 2) tab : \t
 * 3) 백슬러시를 스트링으로 표현하고싶다면 두번 입력
 */
const mi = '나\n야\t나\\나';
console.log(mi);

const smallQutoation = '아이브\'라비앙로즈\'';
console.log(smallQutoation);

// 아래가 ``으로 템플릿 리터럴 : 입력한 그대로 출력됨.
const myHome2 = `경기도
내고향 "<div>dd</div>"`;
console.log(myHome2);
console.log(typeof myHome2);

const groupName = '아이브';
console.log(groupName + "안유진");
console.log(`${groupName} 안유진`); // 변수명을 넣어서 가능 : `${변수명}`



console.log("--------------------------------------------------------");

/**Boolean 타입 */
const isTrue = true; // 참1
const isFalse = false; // 거짓0
console.log(typeof isTrue);
console.log(typeof isFalse);

console.log("--------------------------------------------------------");

/** undefined 
* 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값
* 직접 Undefined로 값을 초기화하는 것은 미친짓이다.
*/
// let noInit = undefined; // 이렇게 선언 ㄴㄴ
let noInit;
console.log(noInit);
console.log(typeof noInit);

console.log("--------------------------------------------------------");

/**
 * null 타입
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할때
 */
let init = null;
console.log(init);
console.log(typeof init);

console.log("--------------------------------------------------------");

/**
 * Symbol 타입
 * 유일무이한 값을 생성할때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol함수를 호출해서 사용
 */
const test1 = '1';
const test2 = '2';

console.log(test1 === test2);

// 아래는 같은 값을 입력한 것처럼 보이나 값은 보존이 되고, 유일무이한 값으로 인식
const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2);


console.log("--------------------------------------------------------");

/**
 * ★ Object 타입 ★
 * 
 * 1) Map 
 * 키:value의 쌍
 */
const dict = {
    red : '빨간색',
    green : '초록색',
    pink : '핑크색'
};
console.log(dict);
console.log(dict['red']);
console.log(dict['green']);
console.log(dict['pink']);

console.log(typeof dict);

console.log(`\n\n`);


/** 
* Array 타입
* 값을 리스트로 나열할 수 있는 타입 : 변수명 = [값1, 값2, 값3...];
*/
const colorArray = [
    '핑크색',
    '파란색',
    '빨간색',
    '초록색'
];
console.log(colorArray);

/**
 * index
 *  0 부터 시작해서 1씩 증가
 */
console.log(colorArray[0]);
console.log(colorArray[3]);

colorArray[0] = '주홍색'; // 0번째 인덱스 값 변경
console.log(colorArray);
console.log(typeof colorArray); // 오브젝트타입

console.log(`\n\n`);

/**
 * static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시를 한다.
 * 
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 "추론"한다 
 * js -> 다이나믹 타이핑
 */