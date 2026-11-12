function registeruser() {
    const fullname = document.getElementById("fullname").value.trim();
    const age = Number(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const location = document.getElementById("location").value;
    const interest = document.getElementById("interests").value;
    const messageElement = document.getElementById("registermessage");

    if (!fullname || !age || !gender || !location || !interest) {
        messageElement.textContent = "Please fill in all fields.";
        return;
    }

    if (age < 18 || age > 100) {
        messageElement.textContent = "You must be between 18 and 100 to register.";
        return;
    }
    messageElement.textContent = `Welcome to DrinkMate, ${fullname}! You are registered successfully. You're looking for ${interest.toLowerCase()}.`;
}

document.getElementById("profile-pic").addEventListener("change", function (event) {
    const files = event.target.files;
    const preview = document.getElementById("photopreview");

    if (files.length > 0) {
        const reader = new FileReader();
        reader.onload = function () {
            preview.src = reader.result;
            preview.style.display = "block";
        };
        reader.readAsDataURL(files[0]);
    } else {
        preview.removeAttribute("src");
        preview.style.display = "none";
    }
});
