# app.py (backend)

from flask import Flask, request, jsonify
import pandas as pd
import joblib
from flask_cors import CORS

# Import your normalizing function from its file
from normalizing import normalizing
from answer_predict import answer_predict

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173", "allow_headers": ["Content-Type", "Authorization"], "supports_credentials": True}})


@app.route('/process_form', methods=['POST'])
def process_form():
    try:
        data = request.json
        data['customerID'] = "3"
        # data['Churn'] = "Yes"
        
        # Convert incoming data into pandas DataFrame
        df = pd.DataFrame([data])
        
        # Call your normalizing function
        processed_df = normalizing(df)

        # Make the prediction
        result = answer_predict(processed_df)
        # Example response back to frontend
        response = {'message': 'Prediction complete!', 'prediction': result}
        return jsonify(response)
    
    except Exception as e:
        print("Error:", e)  # Log the error for debugging
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
