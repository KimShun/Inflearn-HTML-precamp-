const email = "codecamp@gmail.com" //const는 let과 다르게 지정된 값을 절대 바꿀 수 없다.
// undefined, 
email.includes("@") //includes는 해당 배열에 포함이 되어있는지를 확인해준다.
// true
email.split("@") //split은 문자 기준으로 쪼갠다.
// (2) ['codecamp', 'gmail.com']
email.split("@")[0]
// 'codecamp'
email.split("@")[1]
// 'gmail.com'
let userMail = email.split("@")[0]
// undefined
userMail
// 'codecamp'
let company = email.split("@")[1]
// undefined
company
// 'gmail.com'
let maskingMail = []
// undefined
maskingMail.push(userMail[0])
// 1
maskingMail.push(userMail[1])
// 2
maskingMail.push(userMail[2])
// 3
maskingMail.push(userMail[3])
// 4
maskingMail
// (4) ['c', 'o', 'd', 'e']
maskingMail.push("*")
// 5
maskingMail.push("*")
// 6
maskingMail.push("*")
// 7
maskingMail.push("*")
// 8
maskingMail
// (8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
maskingMail.join("-")
// 'c-o-d-e-*-*-*-*'
maskingMail.join("")
// 'code****'
maskingMail.join("") + "@" + company
// 'code****@gmail.com'
let result = maskingMail.join("") + "@" + company
// undefined
result
// 'code****@gmail.com'