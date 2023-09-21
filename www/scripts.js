// Function to toggle VPN
function toggleVPN() {
    $.post("/api/vpn/toggle", function(data) {
        document.getElementById("status").innerHTML = "<span style='font-weight: 100;'>Toggle status:</span> " + data.status;
        checkStatus(); // Call checkStatus to update the button text and color
    });
}

// Function to check VPN status
function checkStatus() {
    $.get("/api/vpn/status", function(data) {
        document.getElementById("vpnStatus").innerHTML = "<span style='font-weight: 100;'>VPN status:</span> " + data.status;

        // Update button text and color based on VPN status
        var btn = document.getElementById("vpnToggleButton");
        if (data.status === "Enabled") {
            btn.innerHTML = "<i class='fa-solid fa-power-off'></i> Disable VPN";
            btn.classList.remove("btn-success"); // Remove green color
            btn.classList.add("btn-danger"); // Add red color
        } else {
            btn.innerHTML = "<i class='fa-solid fa-power-off'></i> Enable VPN";
            btn.classList.remove("btn-danger"); // Remove red color
            btn.classList.add("btn-success"); // Add green color
        }
    });
}

// Check the status when the page loads
window.onload = checkStatus;

// Refresh status every 5 seconds
setInterval(checkStatus, 5000);
