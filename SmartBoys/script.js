let targetNumber;
let attempts;

function startGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1; // 1 dan 100 gacha bo'lgan sonlarni tasodifiy chiqarish
    attempts = 0;
    document.getElementById('message').textContent = 'Taxmin qiling!';
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess').value, 10);
    attempts++;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById('message').textContent = '1 dan 100 gacha raqam kiriting.';
    } else if (userGuess === targetNumber) {
        document.getElementById('message').textContent = `Tabriklaymiz! Siz ${attempts} ta urinishda raqamni to\'g\'ri topdingiz.`;
    } else if (userGuess < targetNumber) {
        document.getElementById('message').textContent = 'Juda past! Qayta urinib ko\'ring.';
    } else {
        document.getElementById('message').textContent = 'Juda baland! Qayta urinib ko\'ring.';
    }
}

function resetGame() {
    startGame();
    document.getElementById('guess').value = '';
    document.getElementById('message').textContent = 'Taxmin qilib ko\'ring!';
}

startGame();
