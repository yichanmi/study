/**
 * Loop 반복문
 * 
 * 1) for
 * 2) while
 */

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log("--------------------------------------");

// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }

// console.log("--------------------------------------");

// for (let i = 0; i < 3; i++) {
//     for (let j = 3; j > 0; j--) {
//         console.log(i , j);
//     }
// }

// console.log("--------------------------------------");

// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }

// // i가 1씩 올라갈때마다 j를 3부터 1씩 감소시켜 반복시킨다.
// for (let i = 0 ; i < 3; i++) {
//     for (let j = 3; j > 0; j--) {
//         console.log(i, j);
//     }
// }

// console.log("--------------------------------------");

// *를 이용해서 5*5 정사각형을 출력해라
// let square = '';
// let side = 5;

// for (let i = 0; i < side; i++) {
//     for (let j = 0; j < side; j++) {
//         square += "*";
//     }
//     square += "\n";
// }

// console.log(square);

// console.log("--------------------------------------");

// // *를 이용해서 피라미드를 만들어라.
// let square2 = '';

// for (let i = 0; i <= 5; i++) {
//     for (let j = 0; j < i; j++) {
//         square2 += "*";
//     }
//     square2 += "\n";
// }

// console.log(square2);

// console.log("--------------------------------------");

// // *를 이용해서 역 피라미드를 만들어라.
// let square3 = '';

// for (let i = 0; i < 5; i++) {
//     for (let j = i; j < 5; j++) {
//         square3 += "*";
//     }
//     square3 += "\n";
// }

// console.log(square3);


/**
 * for in 
 */
const me = {
    name : 'chan',
    year : 1997,
}
// 객체를 for-in문쓰면 key값은 속성명(key)
for (let key in me) {
    console.log(key);
    console.log(key);
}

console.log("--------------------------------------");


/* 
   ★ 인덱스 값을 가지고 오고 싶을때는 for-in
   ★ 값을 가지고 오고 싶을때는 for-of 사용하기
 */

const subArr = ['국어', '영어', '수학', '사회', '과학'];
// 리스트를 for-in문 쓰면 key는 인덱스 값 출력
for (let key in subArr) {
    console.log(key); // 인덱스 값
    // `백틱을 사용하여 인덱스값과 인덱스에 해당하는 값 출력
    console.log(`${key} : ${subArr[key]}`);
}

console.log("--------------------------------------");

/**
 * for of : 리스트에서 사용할 수 있다.
 */
for (let val of subArr) {
    console.log(val); // 리스트의 "값"이 순서대로 출력한다.
}

console.log("--------------------------------------");

/**
 * while
 */
let num = 0;
// 조건이 false가 될때까지 실행
while(num < 10) {
    num++;
    console.log(num);
}

console.log("--------------------------------------");

/**
 * break
 */
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // i가 5가 되면 반복문 전체 종료
    }
    console.log(i); // 5가 들어가기전에 루프문이 종료
}

console.log("--------------------------------------");

let number = 0;

// 0부터 시작
while(number < 10) {
    if (number === 5) {
        break;
    }

    // 여기서 0이 1로 변함.
    // 1 -> 2
    // 2 -> 3
    // 3 -> 4
    // 4 -> 5 여기서 number가 5가 되므로 위 break문으로 반복문 종료.
    number++;
    console.log(number); //5출력
}

console.log("--------------------------------------");

/**
 * continue
 */
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // i가 5일때만 건너뛰고 반복 계속해라
    }
    console.log(i);
}