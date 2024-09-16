from sql_connection import get_sql_connection
import mysql.connector

def get_all_vendors(connection):
    try:
        cursor = connection.cursor()
        query = "SELECT vendor_id, vendor_name, phone, email FROM inventory_system.vendors;"
        cursor.execute(query)
    
        response = []
        print(response)
       
        for (id, vendor_name, phone, email) in cursor.fetchall():
            response.append({
                'id': id,
                'name': vendor_name,
                'phone_number': phone,
                'email': email
            })
        return response
    
    except mysql.connector.Error as err:
        print("Error accessing MySQL:", err)
        return None