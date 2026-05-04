// JavaScript for Student Portal - Group 4

// Function to handle password change (Project Req: Function & Event)
function changePassword() {
    // Variable assignment (Project Req: Variables)
    let newPass = prompt("Enter your new password:");
    
    // Conditional statement (Project Req: Conditionals)
    if (newPass !== null && newPass !== "") {
        alert("Password updated successfully!"); // Output (Project Req: Output)
    } else {
        alert("Password change cancelled.");
    }
}

// Optional: Preview the profile picture when uploaded
const fileInput = document.getElementById('fileInput');
if(fileInput) {
    fileInput.onchange = evt => {
        const [file] = fileInput.files;
        if (file) {
            document.getElementById('profilePic').src = URL.createObjectURL(file);
        }
    }
}