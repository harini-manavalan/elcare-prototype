document.addEventListener("DOMContentLoaded", () => {
    const monitoringCard = document.querySelector(".monitoring");
  
    if (monitoringCard) {
      monitoringCard.addEventListener("click", () => {
        alert("✅ AI Monitoring Camera is now ACTIVE.\nMonitoring posture, health, and safety...");
      });
    }
  });
  
  function toggleChatbot() {
    const chatbox = document.getElementById("chatbox");
    chatbox.style.display = chatbox.style.display === "block" ? "none" : "block";
  }
  