/** Operators
 * 
 * 연산자
 */

/**산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셉
 * 4) 나눗셈
 * 5) 나머지
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);

console.log('-----------------------------------------------');

console.log(10 * (10 + 10));

/**
 * 증가와 감소
 */
let num = 1;
num++;
console.log(num);

num--;
console.log(num);

console.log('-----------------------------------------------');

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = num++; // ++를 "뒤"에 붙히게 되면 "다른 오퍼레이터가 먼저 실행(= 저장,할당)" 후 값을 증가
console.log(result, num);

result = num--;
console.log(result, num);

result = ++num; // ++를 "앞"에 붙히게 되면 "값을 먼저 증가 후 다른 오퍼레이터 실행(=)"
console.log(result, num);

result = --num;
console.log(result, num);

console.log('-----------------------------------------------');

/**
 * 숫자 타입이 아닌 타입에 +, -를 사용하면 어떻게 될까???
 */
/*1. String 타입 */
console.log("<string 타입>");
let sample = '99'; //string
console.log(+sample);
console.log(typeof +sample); // 숫자로 이루어진 문자열은 앞에 +를 붙혔을때 number타입으로 바뀜.
console.log(typeof sample); // 그대로 string

console.log(`\n\n`);

/*2. Boolean 타입 */
console.log("<Boolean 타입>");
sample = false;
console.log(sample);
console.log(typeof sample);

console.log(+sample); // 0:f , 1:t
console.log(typeof +sample);

console.log(`\n\n`);

console.log('<숫자가 아닌 문자열>');
sample = '안유진';
// Nan => Not a Number : 숫자가 아니다.
console.log(+sample);

console.log(`\n\n`);

sample = '99';
console.log(-sample); // -99
console.log(typeof -sample); //number타입

console.log('-----------------------------------------------');

/**
 * 할당 연산자 (assignment operator) : 계산한 다음 값을 다시 할당한다.
 * : 주로 값을 누적시킬때 많이 사용함.
 */
console.log('할당 연산자 시작');

number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

console.log('-----------------------------------------------');

/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

// 1번 타입
// == : 왼쪽 값을 오른쪽 값과 타입을 일치시켜서 값이 일치하는지를 비교함
console.log(5 == 5); // true
console.log(5 == '5'); // true
console.log(0 == ''); // true
console.log(true == 1); // true
console.log(true == '1'); // true
console.log(false == 0); // true

console.log(`\n`);

// 2번 타입
// === : 타입과 값이 모두 일치하는지를 비교함. ==보다는 ===사용 권장
console.log(5 === 5); // true
console.log('5' !== '5');
console.log(5 === '5');
console.log(0 === '');
console.log(true === 1);
console.log(true === '1');
console.log(false === 0);

console.log('-----------------------------------------------');

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);

console.log('-----------------------------------------------');

/**
 * 삼항 조건 연산자 (ternary operator)
 */
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');

console.log('-----------------------------------------------');

/**
 * 논리 연산자
 * 1) && (and)
 * 2) || (or)
 */

// && 조건은 모두 true여야 true를 반환한다.
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('-----------------------------------------------');

// || 조건은 하나만 true여도 true
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(`\n`);
console.log('-----------------------------------------------');

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);

console.log(`\n`);
console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);

console.log('-----------------------------------------------');

/**
 * 단축평가 (short circuit evaluation)
 * 
 * 앤 좌 트 우
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * 
 * 올 좌 트 좌
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 */
console.log(true || '아이브');
console.log(false || '아이브');
console.log(false && '아이브');
console.log(true && '아이브');

console.log(true && true && '아이브'); // true와 true 먼저 비교 후 true 와 아이브 비교
console.log(true && false && '아이브'); // false

console.log('-----------------------------------------------');

console.log(1 > 10 || 1 < 10); 
console.log(0 < 10 || '아이브'); 
console.log(0 === 0 && '아이브');
console.log(1 && '아이브');

console.log('-----------------------------------------------');

/**
 *  < 단축평가를 유용하게 사용하는 방법 >
 *  1. 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때
 *  2. 함수 매개변수에 기본값을 설정할 떄
 */
var aa = 10;
var bb = null;
console.log(aa && aa !== '');
console.log(bb || ''); // 결과 빈값


console.log('-----------------------------------------------');

/**
 * 지수 연산자
 */
console.log(3 ** 2); // 2의 2승
console.log(10 ** 3); // 2의 2승

console.log('-----------------------------------------------');

/**
 * null 연산자
 */
let name;
console.log(name);

// 좌측 값이 null이거나 undefined일때 우측값을 반환해라.
// 1
name = name ?? 'chan';
console.log(name); // name = "chan"

// 2
name = name ?? '아이브';
console.log(name); // 이미 위에서 name에 "chan"값을 저장해줬기 때문에 null 또는 undefined이 아님

// 1과 같은 말
let name2;
name2 ??= '나야나';
console.log(name2);