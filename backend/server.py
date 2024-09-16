from flask import Flask, request, jsonify
from flask_cors import CORS
from sql_connection import get_sql_connection
import products as products
import vendors as vendors
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


@app.route('/getProductsByCompany', methods=['GET'])
def get_products_by_company():
    company_name = request.args.get('company')  # Get the 'company' parameter from the query string
    products_found = products.get_products_by_company(connection, company_name)
    response = jsonify(products_found)
    return response

@app.route('/orders', methods=['GET'])
def get_all_products_reorder():
    reorder_list = products.products_reorder(connection)
    response = jsonify(reorder_list)
    return response


@app.route('/vendors', methods=['GET'])
def get_all_vendors():
    vendors_list = vendors.get_all_vendors(connection)
    response = jsonify(vendors_list)
    return response


# POST ROUTES --------------------------------------------------------------------------------------


@app.route('/create-product', methods=['POST'])
def create_product():
    data = request.json

    # Extract data from the request
    vendor_id = data.get('vendorId')
    barcode = data.get('barcode')
    product_name = data.get('productName')
    weight = data.get('weight')
    weight_measurement = data.get('weightMeasurement')
    product_company = data.get('productCompany')
    product_type = data.get('productType')
    threshold_amount = data.get('thresholdAmount')
    selling_price = data.get('sellingPrice')

    response = products.add_product(connection, vendor_id, barcode, product_name, weight, weight_measurement, product_company, product_type, threshold_amount, selling_price)
    print(response)
    return jsonify(response)



if __name__ == "__main__":
    app.run(port = 5000)
    print("Flask server running on port 5000")

