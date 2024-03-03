from sql_connection import get_sql_connection
import mysql

    
# Method to retrieve all the products in the products database
def get_all_products(connection):
    try:
        cursor = connection.cursor()
        query = ("SELECT p.product_id, p.product_name, p.product_company, p.product_weight,  p.weight_measurement, p.product_selling_price, i.remaining_quantity FROM products p INNER JOIN inventory i ON p.product_id = i.product_id;")
        cursor.execute(query)
    
        response = []
        # ID, Name, Company, Weight + weightmeasurement, Price, Stock
        for (id, name, company, weight, measurement, price, stock ) in cursor:
            response.append(
                {
                    'product_id': id,
                    'name': name,
                    'company': company,
                    'weight': str(weight) + measurement,
                    'price': price,
                    'stock': stock

                }
            )
        
        return response
    except mysql.connector.Error as err:
        print("Error accessing MySQL:", err)
        return None



# Method to retrieve products that are similiar to the user-input product_name
# If provided user input, add the WHERE clause into the query and execute it
# Otherwise query all products (keep the products list originally as it is in the landing page)
def get_products_by_name(connection, product_name=None):
    try:
        cursor = connection.cursor()
    
        # Construct the base SQL query
        query = ("SELECT p.product_id, p.product_name, p.product_company, "
                "p.product_weight, p.weight_measurement, p.product_selling_price, "
                "i.remaining_quantity FROM products p INNER JOIN inventory i ON "
                "p.product_id = i.product_id")

        # If a product name is provided, add a WHERE clause with the LIKE condition
        if product_name:
            query += " WHERE p.product_name LIKE %s"
            cursor.execute(query, ('%' + product_name + '%',))
        else:
            cursor.execute(query)
        
        response = []
        for (id, name, company, weight, measurement, price, stock ) in cursor:
            response.append(
                {
                    'product_id': id,
                    'name': name,
                    'company': company,
                    'weight': str(weight) + measurement,
                    'price': price,
                    'stock': stock

                }
            )
        
        return response
    except mysql.connector.Error as err:
        print("Error accessing MySQL:", err)
        return None



def get_products_by_company(connection, company_name=None):
    cursor = connection.cursor()
   
    
    # Construct the base SQL query
    query = ("SELECT p.product_id, p.product_name, p.product_company, "
             "p.product_weight, p.weight_measurement, p.product_selling_price, "
             "i.remaining_quantity FROM products p INNER JOIN inventory i ON "
             "p.product_id = i.product_id")

    # If a product name is provided, add a WHERE clause with the LIKE condition
    if company_name:
        query += " WHERE p.product_company LIKE %s"
        cursor.execute(query, ('%' + company_name + '%',))
    else:
        cursor.execute(query)
    
    response = []
    
    for (id, name, company, weight, measurement, price, stock ) in cursor:
        response.append(
            {
                'product_id': id,
                'name': name,
                'company': company,
                'weight': str(weight) + measurement,
                'price': price,
                'stock': stock

            }
        )
    print(response)
    return response
    

if __name__ == '__main__':
    connection = get_sql_connection()
    
    