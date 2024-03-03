from flask import Flask, request, jsonify
from flask_cors import CORS
from sql_connection import get_sql_connection
import products as products
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

connection = get_sql_connection()
# GET ROUTES --------------------------------------------------------------------------------------

@app.route('/searchProducts', methods=['GET'])
def search_products():
    product_name = request.args.get('name')
    company_name = request.args.get('company')

    if product_name and not company_name:
        products_found = products.get_products_by_name(connection, product_name)
    elif company_name and not product_name:
        products_found = products.get_products_by_company(connection, company_name)
    else:
        # Handle the case where both product name and company name are provided
        # You can choose to prioritize one over the other or handle this case differently
        products_found = products.get_all_products(connection)

    response = jsonify(products_found)
    return response


@app.route('/getProducts', methods = ['GET'])
def get_all_products():
    all_products = products.get_all_products(connection)
    response = jsonify(all_products)
    
    return response

@app.route('/getProductsByName', methods=['GET'])
def get_products_by_name():
    product_name = request.args.get('name')  # Get the 'name' parameter from the query string
    products_found = products.get_products_by_name(connection, product_name)
    response = jsonify(products_found)
    return response

# Route to handle product search by company
@app.route('/getProductsByCompany', methods=['GET'])
def get_products_by_company():
    company_name = request.args.get('company')  # Get the 'company' parameter from the query string
    products_found = products.get_products_by_company(connection, company_name)
    response = jsonify(products_found)
    return response



# POST ROUTES --------------------------------------------------------------------------------------


if __name__ == "__main__":
    app.run(port = 5000)
    print("Flask server running on port 5000")