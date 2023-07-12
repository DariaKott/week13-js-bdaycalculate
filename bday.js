let birthday = document.getElementById("input-date");

let result = document.getElementById("result");

const errorMessage = document.getElementById("error-message");

function getDate() {
    let bdayDate = new Date(birthday.value);
    console.log(bdayDate);

    if (isNaN(bdayDate)) {
        errorMessage.textContent = "Пожалуйста, введите дату рождения.";
        result.textContent = "";
        return;
    }

    errorMessage.textContent = "";

    let today = new Date();
    let diffInMSec = Math.abs(bdayDate - today);
    let diffInDays = Math.ceil(diffInMSec / (24 * 60 * 60 * 1000));

    if ((diffInDays % 10 === 1) && (diffInDays % 100 != 11)) {
        result.textContent = "До вашего дня рождения остался " + diffInDays + ' день.'
    }

    else if ((diffInDays % 10 >= 2) && (diffInDays % 10 <= 4) && (!((diffInDays % 100 >= 12) && (diffInDays % 100 <= 14)))) {
        result.textContent = "До вашего дня рождения осталось " + diffInDays + ' дня.'
    }

    else {
        result.textContent = "До вашего дня рождения осталось " + diffInDays + ' дней.'
    }
}

let button = document.getElementById("button");
button.addEventListener("click", getDate);

