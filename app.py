from flask import Flask, render_templates('formulario.html')
import smtplib
from email.mime.text import MIMEText

app = Flask(name)

@app.route('/', methods=['GET', 'POST'])
def formulario():
    if request.method == 'POST':
        nombre = request.form['nombre']
        email = request.form['email']
        mensaje = request.form['mensaje']
        
        # Configuración para enviar el correo
        remitente = "todoslosviernes2016@gmail.com"
        contraseña = "ielsqbbkxcbswams"  # Usa una contraseña de aplicación para mayor seguridad
        destinatarios = ["todoslosviernes2016@gmail.com", "todoslosviernes2015@gmail.com"]
        
        # Crear el mensaje
        msg = MIMEText(f"Nombre: {nombre}\nEmail: {email}\nMensaje: {mensaje}")
        msg['Subject'] = "Nuevo mensaje del formulario web"
        msg['From'] = remitente
        
        # Enviar el correo a ambos destinatarios
        try:
            with smtplib.SMTP('smtp.gmail.com', 587) as servidor:
                servidor.starttls()
                servidor.login(remitente, contraseña)
                for destinatario in destinatarios:
                    msg['To'] = destinatario
                    servidor.send_message(msg)
            return "Formulario enviado con éxito"
        except Exception as e:
            return f"Error al enviar el formulario: {str(e)}"
    
    return render_template('formulario.html')

if name == 'main':
    app.run(debug=True)
