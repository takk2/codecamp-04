//  알고리즘 문제 풀이

// 1.변수와 상수
// 001. 선언과 할당 - 'name'이라는 변수를 선언하고, 자신의 이름을 할당하시오.

let neme = '김영탁'
const name = "김영탁"

// 002. 재할당 - 주어진 변수 'name'에 "철수"를 재할당 하시오.

let name = "영희"
name = "철수"

// 2.배열(연습문제)
// 003. 배열의 선언과 할당 - 주어진 변수 fruits에 "사과","바나나", "파인애플"을 담아주세요

let fruits = []
fruits = ["사과", "바나나", "파인애플"]

// 004. 배열의 기능 - 주어진 fruits 배열에서 마지막 요소를 꺼내 newFruits에 넣어주세요.

let fruits = ["사과", "바나나", "파인애플"]
let newFruits = []
newFruits.push(fruits[fruits.length-1])

// 005. 배열의 기능 - 학생들의 이름이 담긴 students 배열이 있습니다. 배열에서 2번 째 요소까지의 데이터들을 뽑아 새로운 배열을 만드세요.

let students = ["철수", "영희", "훈이", "짱구", "유리"]
newStudents = students.slice(0.2)

// 006. 배열의 기능 - 주어진 fruits 배열의 모든 요소에 "맛있는" 이라는 문자열을 추가하세요.

let fruits = ["사과", "바나나"]

fruits[0] = "맛있는" + "사과"
fruits[1] = "맛있는" + "바나나"


// 007. 문자열 배열 - 상수 number는 핸드폰 번호가 담긴 문자열입니다. 해당 문자열을 "010", "1234", "5678"로 나눈 배열을 만드세요.

const number = "01012345678"

let newNumber = []
newNumber.push(number(0,3))
newNumber.push(number(3,7))
newNumber.push(number(7,11))

// 3. 객체(연습문제)
// 008. 객체의 선언과 할당 - 주어진 student 객체에 'name'이라는 키를 만들고 "철수"를 할당하세요.

let student = {}
student.name = "철수"

// 009. 객체의 키&값 추가 - student와 school 두 개의 객체가 있습니다. student 객체에 school이라는 객체를 할당해야 합니다.

const student = {
	name: "철수",
	age: 8,
};

const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}

student.school = school

// 010. 객체의 키&값 삭제 - 주어진  student는 "철수"에 대한 정보를 모아둔 객체입니다. 그런데 철수와 관련이 없는 drink라는 키가 있네요. student에서 { drink: "사이다" }를 삭제해주세요.

let student = {
	name: "철수",
	drink: "사이다"
};

delete student.drink

// 011. 객체와 배열의 값 - 주어진 classmates는 "다람쥐초등학교" 학생들의 정보를 모아둔 배열입니다. 그런데 자세히 보니 "영희" 학생의 정보가 잘못 입력되어 있습니다. "영희"의 school 값을 "다람쥐초등학교"로 바꿔주세요.

const classmates = [
	{
		name: "철수",
		age: 8,
		school: "다람쥐초등학교"
	},
	{
		name: "영희",
		age: 8,
		school: "토끼초등학교"
	},
	{
		name: "짱구",
		age: 8,
		school: "다람쥐초등학교"
	}
];

classmates[1].school = "다람쥐초등학교"

// 6. 조건문(연습문제)
// 018. 조건문 연습 - input1, input2에는 boolean 타입인 true, false가 입력됩니다. 
//                 둘 중에 하나라도 true라면 "true" 두 개 모두 false면 "false"라는 문구를 띄워주세요.

function boolean(input1, input2) {
	if( input1 === false && input2 === false ) {
		return false;

	} else if( input1 === true || input2 === true ) {
		return true;
	}
}

// 019 홀짝 - 입력되는 숫자가 짝수인지 홀수인지 구별하는 함수를 만들려고 합니다. 
//           입력된 값이 "짝수"이면 "Even", "홀수"이면 "Odd", 0이면 "Zero"라는 문구를 띄워주세요.

function evenOdd(num) {

	if ( num === 0 ) {
		console.log("Zero");

	} else if ( num % 2 === 0 ) {
		console.log("Even");

	} else if ( num % 2 === 1 ) {
		console.log("Odd");
	}
}

// 020. 온도 - 입력되는 온도에 따라 문구를 띄워주는 온도계 함수를 만들려고 합니다. 
//            입력된 값에 따라 알맞은 문구를 띄워주세요 18이하면 "조금 춥네요" 19~23이면 "날씨가 좋네요" 24이상이면 "조금 덥습니다"

function temperature(num){
	if( num >= 24 ) {
		console.log("조금 덥습니다.")
	} else if( num >= 19 && num <= 23 ) {
		console.log("날씨가 좋네요.")
	} else if( num <= 18 ) {
		console.log("조금 춥네요.")
	}
}

// 021. 며칠 - 입력되는 달(month)에 따라 각 달에 며칠이 있는지 보여주는 함수를 만들려고 합니다.
//            각 조건에 해당하는 알맞은 값을 입력해주세요.

function days(month) {
	if( 
				month === 1 
		 || month === 3 
		 || month === 5 
     || month === 7
		 || month === 8
		 || month === 10
		 || month === 12
	) {
		return 31;

	} else if( month === 2 ) {
		return 28;

	} else if( 
		month === 4 || month === 6 || month === 9 || month === 11
) {
		return 30;
	}
}

// 022. 미니계산기 - 숫자 2개와 연산자를 입력받아 알맞게 계산하는 미니계산기 함수를 만들어주세요.
// num1과 num2는 숫자열, operator는 문자열로 입력됩니다. 
// operator "+", "/", "-", "*" 이외의 다른 값이 들어온다면 "올바른 입력이 아닙니다"라는 문구를 띄워주세요.

function calculator(num1, num2, operator){
	if (operator === "?") {
		console.log("")

	} else if(operator ==="?") {
		console.log("")

	}
}

function calculator(num1, num2, operator){
	if (operator === "+") {
		console.log(num1 + num2)
	} else if(operator === "/") {
		console.log(num1 / num2)
	} else if(operator === "-") {
		console.log(num1 - num2)	
	} else if(operator === "*") {
		console.log(num1 * num2)
	} else {
		console.log("올바른 입력이 아닙니다")
	}
}
