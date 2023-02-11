let classmate = ["철수", "영희", "훈이"]
// undefined
classmate
// (3) ['철수', '영희', '훈이']
classmate[0]
// '철수'
classmate[1]
// '영희'
classmate[2]
// '훈이'
classmate.includes("훈이")
// true
classmate.includes("맹구")
// false
classmate.length
// 3
classmate.push("맹구")
// 4
classmate
// (4) ['철수', '영희', '훈이', '맹구']
classmate.length
// 4
classmate.pop()
// '맹구'
classmate
// (3) ['철수', '영희', '훈이']

let developer = ["협력", "실력", "연봉", "인성", "아이디어"]
// undefined
developer[4]
// '아이디어'
let dream = ["커리어점프", "성공", "할수있다"]
// undefined
developer.concat(dream)
// (8) ['협력', '실력', '연봉', '인성', '아이디어', '커리어점프', '성공', '할수있다']