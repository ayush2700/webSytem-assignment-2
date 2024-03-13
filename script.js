function question1() {
    var input = document.getElementById("input").value;
    var vowels = 0;
    var consonants = 0;

    for (var i = 0; i < input.length; i++) {
        var char = input[i];
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            vowels++;
        } else {
            consonants++;
        }
    }
    document.getElementById("result1").textContent = `Vowels: ${vowels}, Consonants: ${consonants}`;
}

function question2() {
    var number = document.getElementById("number2").value;
    var reversedNumber = 0;
    var temp = number;

    while (temp > 0) {
        var lastDigit = temp % 10;
        reversedNumber = reversedNumber * 10 + lastDigit;
        temp = Math.floor(temp / 10);

        // temp = temp / 10;
    }

    if (number == reversedNumber) {
        result2.textContent = "it is Pallindrome";
    } else {
        result2.textContent = "it is not a Pallindrome";
    }

}

function question3() {
    var amount = +document.getElementById("number3").value;
    var percentage = +document.getElementById("number4").value;

    var total = (amount * (percentage / 100)) + amount;

    document.getElementById("result3").textContent = `total amount: ${total}`;
}
