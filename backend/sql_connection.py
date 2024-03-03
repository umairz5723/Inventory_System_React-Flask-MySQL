import mysql.connector

__cnx = None

def get_sql_connection():
    global __cnx
    if __cnx is None:
        try:
            __cnx = mysql.connector.connect(user='root', password='root',
                                             host='127.0.0.1',
                                             database='inventory_system')
        except mysql.connector.Error as err:
            print("Error connecting to MySQL:", err)
            raise  # Re-raise the exception for the caller to handle

    return __cnx

def close_sql_connection():
    global __cnx
    if __cnx is not None:
        __cnx.close()
        __cnx = None