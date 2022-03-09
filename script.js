const btn = document.querySelector(".dice-container");
const adviceId = document.getElementById("advice-id");
const adviceContent = document.getElementById("advice");

const defaultAdvice = {
    advice: "\"It is easy to sit up and take notice, what's difficult is getting up and taking action.\"",
    id: 117
}
let advice = defaultAdvice;

btn.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
        if (data) {
            advice.id = data.slip.id;
            advice.advice = data.slip.advice;
        }
        adviceId.innerHTML = advice.id;
        adviceContent.innerHTML = advice.advice;
        
    })
    .catch(err => console.err(err));
})

