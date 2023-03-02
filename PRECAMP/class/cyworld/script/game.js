function word_game() {
    let inputWord = document.getElementById("inputWord").value
    let word = document.getElementById("word").innerText

    let lastWord = word[word.length - 1]
    let firstWord = inputWord[0]

    if(lastWord === firstWord) {
        document.getElementById("result").innerText = "정답!"
        document.getElementById("result").style.color = "blue"
        document.getElementById("word").innerText = inputWord
        document.getElementById("inputWord").value = ""
    } else {
        document.getElementById("result").innerText = "땡!"
        document.getElementById("result").style.color = "red"
        document.getElementById("inputWord").value = ""
    }
}

function lotto_game() {
    var arr = new Array()

    for(i=0; i<6; i++) {
        let random_number = Math.floor(Math.random() * 100)

        if(random_number >= 1 && random_number <= 45) {
            if(i>0 && arr[i-1] === random_number) {
                i--
            } else {
                arr[i] = random_number
            }
        } else {   
            i--
        }
    }

    document.getElementById("num_1").innerText = arr[0]
    document.getElementById("num_2").innerText = arr[1]
    document.getElementById("num_3").innerText = arr[2]
    document.getElementById("num_4").innerText = arr[3]
    document.getElementById("num_5").innerText = arr[4]
    document.getElementById("num_6").innerText = arr[5]

    document.getElementById("game__subtitle").innerText = "추첨 완료!"
}