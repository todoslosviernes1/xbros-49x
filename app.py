from flask import Flask  
  
   
app = Flask(__name__)

@app.route('/send-email', methods=['POST'])
def send_email():
    try:
        # Obtén los datos del formulario
        recipient = request.form.get('recipient')
        subject = request.form.get('subject')
        message_content = request.form.get('message')

        # Configura los detalles del correo
        sender_email = "todoslosviernes2016@gmail.com"
        sender_password = "ielsqbbkxcbswams"  # Usa una contraseña de aplicación de Gmail
        smtp_server = "smtp.gmail.com"
        smtp_port = 587

        # Crear el correo
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = recipient
        msg['Subject'] = subject
        msg.attach(MIMEText(message_content, 'plain'))

        # Conecta al servidor SMTP y envía el correo
        with smtplib.SMTP(smtp_server, smtp_port) as server: