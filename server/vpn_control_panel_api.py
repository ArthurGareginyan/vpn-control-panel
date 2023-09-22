from flask import Flask, jsonify
import subprocess

app = Flask(__name__)

@app.route('/toggle', methods=['POST'])
def toggle():
    try:
        subprocess.run(["/usr/local/bin/vpn_control_panel.sh"], check=True)
        return jsonify({"status": "Success"}), 200
    except subprocess.CalledProcessError:
        return jsonify({"status": "Failure"}), 500

@app.route('/status', methods=['GET'])
def status():
    result = subprocess.run(["sudo", "wg", "show", "wg0"], capture_output=True, text=True)
    if "peer:" in result.stdout:
        return jsonify(status='Enabled')
    else:
        return jsonify(status='Disabled')
