function showMessage() {
    const message = document.getElementById("message");
    message.textContent = "Ты мое сердечко 💖";
    message.style.opacity = "1";

    setTimeout(() => {
        message.textContent = "Нажми на меня ☺️";
    }, 3000);
}
