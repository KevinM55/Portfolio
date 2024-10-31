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
 const keywords = ["name","hello","hi","greetings","hey", "education", "project", "skills", "soft","summary",
    "technical", "about","github","linkedin","yes","contacts","collision","detection","vehicle","shape","iot ",
    "socials","social","location", "contact","collision", "timeline", "programming", "ar", "language",
"restaurant","menu","plc", "water", "level", "control","iot","certificate","certification","shape","recognition"]
    let sentence = " ";
function findKeyword(userInput, keywords){
    for (let keyword of keywords){if(userInput.includes(keyword)) return keyword;}
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
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return; 
    addMessage(`You: ${userInput}`, "user-message");
    let response = findKeyword(userInput, keywords); 
    if (!response) {
        response = "I'm sorry, I didn't understand that. Can you ask something else?";
    } else {
        switch(response) {
          case "hi":
          case "hello":
          case "greetings": 
          case "hey":
                response = "Hey there, how may I help you?"; 
                break;
            case "contact":
            case "contacts": 
            response = "You can reach me via the following" +  
            "Email: mduduzikevin93gmail.com" 
            + "LinkedIn: " 
            + "GitHub:";
                break;
            case "project":  case "projects":
                response = "I’ve worked on various projects that showcase my technical expertise"
                + "and problem-solving abilities. Here are a few examples:" + 
                "Project list: "
                 +" 1. Collision Detection Vehicle"
                 +"2. AR Restaurant Menu"
                 +"3. PLC Water Level Control"
                 +"4. Shape Recognition" + "Let me know if you would like to more...";
                break;
                case "collision": case "detection": case "vehicle":
                 response = "This project focuses on using sensors to detect and avoid obstacles"
                 +" autonomously. Technologies used include Arduino and L298 motor driver"
                  +"including Ultrasonic and IR Sensors "; 
                  break;
                case "ar": case "restaurant": case "menu":
                response = "An interactive menu system using augmented reality. Developed using Unity,"+
                "Blender, ARkit and ARcore for seamless food ordering process";
                break;
                case "plc": case "water": case "level": case "control":
                    response = "This project is designed to monitor and control water levels using a Programmable"
                    + "logic controller. It simulates an automated process in which the PLC manages water inflow and outflow";
                    break;
                case "iot": case "shape": case "recognition":
                    response = "This project showcases the use of IOT technology for shape recognition," + 
                    "utilizing a Rasperi Pi as the primary processing";
                    break;
            case "skills":
                response = "I possess a variety of technical and soft skills of which include"
                +"Web development, programming, ML, critical thinking and time management";
                break;
            case "about":
                response = "I recently graduated with a National Diploma in Information Technology" + 
                " (Intelligent Industrial Systems) from Tshwane University of Technology. "+
                "I’m passionate about creating solutions in intelligent systems and IoT. Would you like to learn about my skills or my projects?";
              //  if(userInput ==="yes"){response = "My projects";}
                break;
            case "education": 
            response = "N.Dip IT (Intelligent Industrial Sytems) "+ "Tshwane University of Technology"
            + "Relevant courses: "
            + "Industrial Control Systems\t Robotics & Automation\t Embedded systems\t" 
            + "Machine Learning\t IoT Applications ";
            break;  
            default:
         response = "I'm here to assist you!";
                break; }
             
    }
    addMessage(`Chatbot: ${response}`, "bot-message");
    document.getElementById("user-input").value = "";
}
function findKeyword(userInput, keywords) {
    for (let keyword of keywords) {
        if (userInput.toLowerCase().includes(keyword.toLowerCase())) { 
            return keyword;}
    }   return null; 
}
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

