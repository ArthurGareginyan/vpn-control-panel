# VPN Control Panel

![Screenshot](https://github.com/ArthurGareginyan/vpn-control-panel/blob/main/screenshot.png)

## Description

The VPN Control Panel is a straightforward web interface that enables you to remotely enable or disable the WireGuard virtual network interface (`wg0`) on your home server. Developed with Ubuntu Server 22.04 in mind, this project utilizes a Python-based API, Nginx for reverse proxying, and a clean and minimalist HTML/JS interface for ease of use.

## Why This Project Exists

Managing a home server with a WireGuard VPN requires SSHing into the machine to enable or disable the virtual network interface (`wg0`). This project aims to simplify these tasks by offering a straightforward web interface.

## Structure

- `/server/`               : Folder containing files for the home server machine.
  - `vpn_control_panel_api.py` : Python script for the API running on your home server.
  - `vpn_control_panel_api.service` : Systemd service file for the API.
  - `vpn_control_panel.sh` : Shell script for power control.

- `/reverse_proxy/`        : Folder containing files related to Nginx reverse proxy.
  - `nginx_config.txt`     : Nginx configuration file.
  
- `/www/`                  : Folder containing files for the web server machine.
  - `index.html`           : Web page with buttons for power control.
  - `scripts.js`           : JavaScript file for handling button clicks.
  - `styles.css`           : Stylesheet for the web interface.
  - `/assets/lib/`         : Folder containing third-party libraries.
    - `fontawesome/`       : FontAwesome library files.
    - `bootstrap/`         : Bootstrap library files.

## Installation

1. **Clone the Repository**
    ```bash
    git clone https://github.com/ArthurGareginyan/vpn-control-panel.git
    ```

2. **Run the API Service**
    ```bash
    sudo systemctl start vpn_control_panel_api.service
    ```

3. **Configure Nginx**

    Include the provided nginx_config.txt in your Nginx configuration.

4. **Access the Web Interface**

    Open your web browser and navigate to the IP address where your web interface is hosted.

## Files

## Contributing

I warmly welcome contributions from the community. If you'd like to contribute, please fork the repository and make changes as you'd like, then create a pull request for review.

## License

This project is open-source and available under the MIT License.

## Credits

Created and maintained by [Arthur Gareginyan](https://www.mycyberuniverse.com), founder of [Space X-Chimp](https://www.spacexchimp.com).
