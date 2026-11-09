document.getElementById('greetBtn').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value.trim();
    const messageElement = document.getElementById('greetingMessage');

    if (name) {
        messageElement.textContent = `안녕하세요, ${name}님! 반갑습니다.`;
        messageElement.style.color = '#1a73e8';
    } else {
        messageElement.textContent = '이름을 입력해 주세요!';
        messageElement.style.color = '#d93025';
    }
});

// 엔터 키 지원
document.getElementById('nameInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('greetBtn').click();
    }
});
