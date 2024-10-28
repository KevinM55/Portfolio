(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
   /* document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })*/
})();
function toggleChatbot() {
    const chatbot = document.getElementById("chat-container");
    if (chatbot.style.display === "none" || chatbot.style.display ==="") {
        chatbot.style.display = "flex";
    } else {
        chatbot.style.display = "none";
    }
}
function addMessage(message, className) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.className = className;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; 
}
function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim().toLowerCase();   
    if (userInput === "") return; 
    addMessage(`You: ${userInput}`, "user-message"); 
    let response = ""; 
    addMessage(`Chatbot: ${response}`, "bot-message");
    document.getElementById("user-input").value = "";
}
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

