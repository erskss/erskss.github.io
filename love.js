const phrases = [
    "Прости меня❤️", "Я хочу тебе кое что сказать", "Попробуй еще раз", "Нажми еще раз", 
    "Давай не сдавайся, нажимай, оно того стоит", "Обещаю последний раз", "А ведь", 
    "Просто хотел сказать", "Что люблю тебя ❤️", "Давай помиримся? Мне надо с тобой поговорить", "Все, смотри",
];

let clickCount = 0;
let stopTextChange = false;
const textElement = document.getElementById("text");
const button = document.getElementById("showGifButton");
const gifContainer = document.getElementById("gifContainer");

// Функция для создания плавающего сердечка
function createFloatingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    
    const colors = ["#ff0000", "#ff69b4"];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    const sizes = ["16px", "24px", "32px", "40px"];
    heart.style.fontSize = sizes[Math.floor(Math.random() * sizes.length)];
    
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);
    
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.bottom = `-20px`;
    
    heart.animate(
        [
            { transform: `translateY(0)`, opacity: 1 },
            { transform: `translateY(-100vh)`, opacity: 0 }
        ],
        {
            duration: 5000,
            easing: "linear",
            fill: "forwards"
        }
    );
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createFloatingHeart, 500);

// Обработчик кликов для смены текста
document.body.addEventListener("click", () => {
    if (!stopTextChange) {
        textElement.textContent = phrases[clickCount % phrases.length];
        textElement.style.color = ["#ff0000", "#ff69b4"][Math.floor(Math.random() * 2)];
        clickCount++;
    }
    
    if (clickCount === 15) {
        button.style.display = "block";
        stopTextChange = true;
    }
});

// Обработчик клика по кнопке, чтобы показать гифку
button.addEventListener("click", () => {
    gifContainer.style.display = "flex";
});

// Обработчик клика по гифке, чтобы закрыть её
gifContainer.addEventListener("click", () => {
    gifContainer.style.display = "none";
});
