console.log("✅ content.js is loaded");


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "autofill") {
          console.log("📩 Autofill message received");

    // Full Name
    const nameInput = document.querySelector(
      'input[name="name"], input[name="fullName"], input[placeholder*="Name"]'
    );
    if (nameInput) {
      nameInput.value = "Khushi Jagga";
    }

    // Email Address
    const emailInput = document.querySelector(
      'input[type="email"], input[name="email"], input[placeholder*="Email"]'
    );
    if (emailInput) {
      emailInput.value = "khushijagga14@gmail.com";
    }

    // Phone Number
    const phoneInput = document.querySelector(
      'input[type="tel"], input[name="phone"], input[placeholder*="Phone"]'
    );
    if (phoneInput) {
      phoneInput.value = "9817326283";
    }

    // Skills / Experience
    const skillsInput = document.querySelector(
      'textarea[name="skills"], textarea[name="experience"], textarea[placeholder*="Skills"], textarea[placeholder*="Experience"]'
    );
    if (skillsInput) {
      skillsInput.value =
        "Frontend Development, JavaScript, HTML, CSS, Chrome Extensions";
    }
  }
});
