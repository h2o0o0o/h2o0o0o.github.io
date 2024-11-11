// balance.js

// Функция для установки куки
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Функция для получения куки
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// Функция для получения текущего баланса
function getBalance() {
    let balance = getCookie('balance');
    if (balance === null) {
        balance = 1000; // Начальный баланс
        setBalance(balance);
    } else {
        balance = parseInt(balance);
    }
    return balance;
}

// Функция для установки нового баланса
function setBalance(amount) {
    setCookie('balance', amount, 365); // Кука действительна 1 год
}

// Функция для добавления к балансу
function addBalance(amount) {
    let balance = getBalance();
    balance += amount;
    setBalance(balance);
}

// Функция для вычитания из баланса
function subtractBalance(amount) {
    let balance = getBalance();
    balance -= amount;
    if (balance < 0) balance = 0;
    setBalance(balance);
}
