from flask import Flask, request, jsonify
import smtplib
import os
from email.message import EmailMessage
from flask_cors import CORS
from dotenv import load_dotenv

# Carregar variáveis de ambiente do .env
load_dotenv()

app = Flask(__name__)
CORS(app)

# In-memory storage for contact messages
contacts = []

# Configurações de email (usar variáveis de ambiente para segurança)
SMTP_SERVER = os.environ.get('SMTP_SERVER', 'smtp.gmail.com')
SMTP_PORT = int(os.environ.get('SMTP_PORT', 587))
SMTP_USER = os.environ.get('SMTP_USER')  # Email da conta remetente
SMTP_PASS = os.environ.get('SMTP_PASS')  # Password/app password
EMAIL_TO = 'likeabossjogos7@gmail.com'  # Email de destino fixo

@app.route('/api/contact', methods=['POST'])
def add_contact():
    data = request.get_json()
    if not data or not all(k in data for k in ('name', 'email', 'message')):
        return jsonify({'error': 'Missing required fields'}), 400
    contact = {
        'id': len(contacts) + 1,
        'name': data['name'],
        'email': data['email'],
        'message': data['message']
    }
    contacts.append(contact)

    # Enviar email
    try:
        msg = EmailMessage()
        msg['Subject'] = f'Novo contacto de {contact["name"]} via site'
        msg['From'] = SMTP_USER  # Remetente: email autenticado do backend
        msg['To'] = EMAIL_TO
        msg['Reply-To'] = contact['email']  # Facilita resposta direta ao cliente
        msg.set_content(f"""
Nome: {contact['name']}
Email: {contact['email']}
Mensagem:
{contact['message']}
""")

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASS)
            server.send_message(msg)
    except Exception as e:
        return jsonify({'error': 'Erro ao enviar email', 'detail': str(e)}), 500

    return jsonify({'success': True, 'contact': contact}), 201

@app.route('/api/contact', methods=['GET'])
def get_contacts():
    return jsonify({'contacts': contacts})

if __name__ == '__main__':
    from waitress import serve
    port = int(os.environ.get('PORT', 5000))
    print(f"Starting server with waitress on port {port}...")
    serve(app, host='0.0.0.0', port=port)
