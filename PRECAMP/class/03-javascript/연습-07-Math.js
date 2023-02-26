Math.floor(Math.random() * 1000000)
// 516532

String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
// "902182"

let result = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
// undefined

result
// "609935"


//응용
const number = Math.random()
// undefined

const token = Math.floor(number * 1000000)
// undefined

const paddedToken = String(token).padStart(6,"0")
// undefined

console.log("휴대폰 인증번호: " + paddedToken)
// 휴대폰 인증번호: 882968