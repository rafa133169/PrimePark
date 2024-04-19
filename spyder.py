import serial
import mysql.connector

# Configuración de la conexión a la base de datos MySQL
db_config = {
    'host': "mysql-ricoline2.alwaysdata.net",
    'user': "ricoline2",
    'password': "1234561331",
    'database': "ricoline2_primepark"
}

# Intentar conectar a la base de datos
try:
    db = mysql.connector.connect(**db_config)
    cursor = db.cursor()
except mysql.connector.Error as err:
    print(f"Error al conectar a MySQL: {err}")
    exit(1)

# Abrir conexión serial
arduino = serial.Serial('COM7', 9600, timeout=1)  # Ajusta esto al puerto correcto



try:
    while True:
        data = arduino.readline().decode().strip() 
        # Leer y decodificar datos del Arduino
        
        cursor.execute("SELECT estatus FROM servo WHERE id_servo = 1")  # Cambia '1' por el ID del servo adecuado
        resultado = cursor.fetchone()  # Obtener el resultado de la consulta
        db.commit()

        if resultado:  # Verificar si se obtuvo un resultado
            estado_actual = resultado[0]  # Obtener el estado actual desde el resultado de la consulta
            print(f"estatus {estado_actual}")
            # Comparar el estado actual con el valor obtenido del Arduino
            if estado_actual == 1:
                # Enviar la respuesta al Arduino a través del puerto serial
                nuevo_estado = str(estado_actual).encode()
                arduino.write(b'premium')
                cursor.execute("UPDATE servo SET estatus = 0 WHERE id_servo = 1")
                db.commit()
            elif estado_actual == 2:
                nuevo_estado = str(estado_actual).encode()
                arduino.write(b'estandar')
                cursor.execute("UPDATE servo SET estatus = 0 WHERE id_servo = 1")  
                db.commit()
                
        if data:
            try:
                code = str( data)  # Leer distancia y temperatura
                print(f"{code}") 
                
                

                # Determinar el color del LED basado en la distancia
                if code == 'st1' :
                    # Insertar datos en la tabla
                    sql_puerto_serial = "UPDATE infrarojos SET estatus = 'ocupado' where id_infrarojo=1"
                    cursor.execute(sql_puerto_serial)
                    db.commit()
                    
                elif code == 'st2':
                    # Insertar datos en la tabla
                    sql_puerto_serial = "UPDATE infrarojos SET estatus = 'ocupado' where id_infrarojo=2"
                    cursor.execute(sql_puerto_serial)
                    db.commit()
               
            
                # Insertar datos en la tabla tb_puerto_serial
                #sql_puerto_serial = "INSERT INTO tb_puerto_serial (mensaje, led_color) VALUES (%s, %s)"
                #cursor.execute(sql_puerto_serial, (data, led_color))
                #db.commit()

                # Insertar datos en la tabla temperatura
                #sql_temperatura = "INSERT INTO temperatura (temperatura) VALUES (%s)"
                #cursor.execute(sql_temperatura, (temperatura,))
                #db.commit()

                #print(f"Distancia: {distancia} cm, Temperatura: {temperatura} C, LED: {led_color}")
            except ValueError:
                # Si no se puede convertir a un entero, muestra un mensaje de advertencia
                print("Los datos recibidos no son válidos:", data)
except KeyboardInterrupt:
    print("Programa terminado por el usuario")
except mysql.connector.Error as err:
    print(f"Error al interactuar con MySQL: {err}")
finally:
    # Cerrar conexiones
    if db.is_connected():
        cursor.close()
        db.close()
    arduino.close()