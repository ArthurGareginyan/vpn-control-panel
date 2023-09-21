// VPN Control Panel API calls
document.addEventListener("DOMContentLoaded", function() {

    // Common function to handle fetch API
    async function fetchData(url, method) {
        try {
            let response = await fetch(url, {method: method});
            if (!response.ok) {
                throw new Error(`Server responded with status: ${response.statusText}`);
            }
            let data = await response.json();
            return data;
        } catch (error) {
            throw new Error(`An error occurred: ${error}`);
        }
    }

    // Common function to update status message with styling
    function updateStatusMessage(message, type) {
        let prefix = type === 'status' ? '<span style="font-weight: 100;"> VPN ' + type + ':</span> ' : '<span style="font-weight: 100;">Error:</span> ';
        document.getElementById("status").innerHTML = prefix + message;
    }

    // Toggle VPN
    document.getElementById("vpnToggleButton").addEventListener("click", async function() {
        try {
            updateStatusMessage("Processing...", 'status');
            const data = await fetchData('/api/vpn/toggle', 'POST');
            updateStatusMessage(`${data.status}`, 'status');
            checkStatus(); // Call checkStatus to update the button text and color
        } catch (error) {
            updateStatusMessage(`${error.message}`, 'error');
        }
    });

    // Function to check the status
    async function checkStatus() {
        try {
            const data = await fetchData('/api/vpn/status', 'GET');
            updateStatusMessage(`${data.status}`, 'status');
            
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
        } catch (error) {
            updateStatusMessage(`${error.message}`, 'error');
        }
    }

    // Check the status when the page loads and refresh status every 5 seconds
    checkStatus(); // Check the status initially when the page loads
    setInterval(checkStatus, 5000); // Refresh status every 5 seconds

});
