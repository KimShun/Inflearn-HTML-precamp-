const verify_phone = () => {
    let phone1 = document.getElementById("phone1").value
    if(phone1.length === 3) {
        document.getElementById("phone2").focus()
    }

    let phone2 = document.getElementById("phone2").value
    if(phone2.length === 4) {
        document.getElementById("phone3").focus()
    }

    let phone3 = document.getElementById("phone3").value
    if(phone1.length == 3 && phone2.length == 4 && phone3.length == 4) {
        document.getElementById("verify_send").disabled = false
    } else {
        document.getElementById("verify_send").disabled = true
    }
}

let timer
let isStarted = false
const verify = () => {
    alert("해당 핸드폰 번호로 인증번호를 전송하였습니다. '인증번호' 입력 란에 올바르게 입력해주세요.")
    document.getElementById("verify_send").disabled = true
    document.getElementById("verify_send").innerText = "인증번호 재전송"

    if(isStarted == false) {
        isStarted = true
        document.getElementById("verify_text").disabled = false
        document.getElementById("verify_check").disabled = false
        document.getElementById("verify_check").innerText = "인증확인"

        const number = Math.random() * 1000000
        const Token = Math.floor(number)
        const PaddedToken = String(Token).padStart(6, "0")

        document.getElementById("verify_look").innerText = PaddedToken

        let time = 180

        timer = setInterval(function() {
            if(time >= 0) {
                let min = Math.floor(time / 60)
                let sec = String(time % 60).padStart(2, "0")
                document.getElementById("verify_timer").innerText = min + ":" + sec
                time--
            } else {
                document.getElementById("verify_text").disabled = true
                document.getElementById("verify_check").disabled = true
                document.getElementById("verify_check").innerText = "시간초과"
                isStarted = false
                clearInterval(timer)
                document.getElementById("verify_send").disabled = false
            }
        }, 1000)
    }
}

let verify_checking = false
const verify_check = () => {
    const verify_input = document.getElementById("verify_text").value

    if(verify_look.innerText == verify_input) {
        alert("핸드폰 인증이 완료되었습니다!")
        verify_checking = true
        document.getElementById("verify_text").disabled = true
        document.getElementById("verify_check").disabled = true
        clearInterval(timer)
        document.getElementById("verify_check").innerText = "인증완료"
    } else {
        alert("인증번호가 틀렸습니다!")
    }
}

const signup = () => {
    let email = document.getElementById("email").value
    let pw1 = document.getElementById("pw1").value
    let pw2 = document.getElementById("pw2").value

    if(email && pw1 && pw2 && verify_checking) {
        document.getElementById("submit").disabled = false
    } else {
        document.getElementById("submit").disabled = true
    }
}

const submit = () => {
    alert("회원가입이 정상적으로 완료되었습니다. 환영합니다 ^^")
}