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


def products_reorder(connection):
    cursor = connection.cursor()
   
    
    # Construct the base SQL query
    query = (
        "SELECT p.product_id, p.product_name, p.product_company, p.product_weight, "
        "p.weight_measurement, i.remaining_quantity, p.threshold_amount "
        "FROM products p "
        "INNER JOIN inventory i on p.product_id = i.product_id "
        "WHERE i.remaining_quantity <= p.threshold_amount;"
    )

    cursor.execute(query)
    
    response = []
    
    for (id, name, company, weight, measurement, remaining, threshold) in cursor:
        response.append(
            {
                'id': id,
                'name': name,
                'company': company,
                'weight': str(weight) + " " + measurement,
                'remaining_quanitity': remaining,
                'threshold_amount': threshold

            }
        )
    print(response)
    return response


# ------------------------------------------- POST METHODS ----------------------------------------------------------------
def add_product(connection, vendor_id, barcode, product_name, weight, weight_measurement, product_company, product_type, threshold_amount, selling_price):
    try:
        cursor = connection.cursor()
        
        # Check if the product already exists
        check_query = """
        SELECT COUNT(*) FROM products
        WHERE product_barcode = %s OR (product_name = %s AND product_company = %s);
        """
        check_values = (barcode, product_name, product_company)
        cursor.execute(check_query, check_values)
        count = cursor.fetchone()[0]

        if count > 0:
            return {"status": "error", "message": "This product is already in the system"}
        
        # Define the SQL query to insert a new product
        insert_query = """
        INSERT INTO products (vendor_id, product_barcode, product_name, product_weight, weight_measurement, product_company, product_type, threshold_amount, product_selling_price)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s);
        """
        
        # Create a tuple with the values to be inserted
        insert_values = (vendor_id, barcode, product_name, weight, weight_measurement, product_company, product_type, threshold_amount, selling_price)
        
        # Execute the query
        cursor.execute(insert_query, insert_values)
        
        # Commit the transaction
        connection.commit()
        
        # Return success message
        return {"status": "success", "message": "Product added successfully"}
    
    except mysql.connector.Error as err:
        print("Error accessing MySQL:", err)
        return {"status": "error", "message": str(err)}
    
    finally:
        # Close the cursor
        cursor.close()


if __name__ == '__main__':
    connection = get_sql_connection()
    
