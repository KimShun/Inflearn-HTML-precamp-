function verify() {
    const number = Math.random() * 1000000;
    const Token = Math.floor(number)
    const paddedToken = String(Token).padStart(6, "0")

    document.getElementById("verify_target").innerText = paddedToken
    document.getElementById("verify_target").style.color = "#" + paddedToken

    let time = 180
    setInterval(function(){
        if(time >= 0) {
            let min = Math.floor(time / 60)
            let sec = String(time % 60).padStart(2, "0")
            document.getElementById("verify_timer").innerText = min + ":" + sec
            time--
        } else {
            document.getElementById("verify_check").disabled = true
            document.getElementById("verify_check").innerText = "시간초과"
        }
    }, 1000)
}