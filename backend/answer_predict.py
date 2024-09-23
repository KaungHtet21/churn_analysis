import joblib
from normalizing import normalizing
import pandas as pd
def answer_predict(df):
    # model_files = ['LR1.pkl', 'RF1.pkl', 'DT1.pkl', 'NB1.pkl', 'SVC1.pkl', 'KNN1.pkl']
    #predictions = []
    model = joblib.load('LR1.pkl')
    final_prediction = model.predict(df)
    
    # Iterate over all model files
    # for model_file in model_files:
    #     model = joblib.load(model_file)  # Load each model
    #     prediction = model.predict(df)  # Predict using the normalized data
        
    #     # Store the prediction result (1 or 0) in the predictions list
    #     predictions.append(prediction[0])  
    
    # Aggregating the results: majority vote
    # final_prediction = round(sum(predictions) / len(predictions))  # Taking majority vote
    return "Yes" if final_prediction == 1 else "No"

data =  {'customerID':['Test'], 
         'gender': ['Female'],          
'SeniorCitizen'  :   [0] , 
'Partner'      :      ['Yes']  ,
'Dependents'    :     ['No']  ,
'tenure'        :      [1] ,
'PhoneService'   :  ['No'] ,
'MultipleLines'  :   ['No'] ,  
'InternetService'  :  ['DSL'] , 
'OnlineSecurity'   :   ['No'] ,
'OnlineBackup'     :   ['Yes'] ,
'DeviceProtection' :   ['No'] ,
'TechSupport'     :    ['No'] ,
'StreamingTV'    :    ['No'] ,
'StreamingMovies'  :   ['No'],
'Contract'         :   ['Month-to-month'] ,
'PaperlessBilling' :   ['Yes'] ,
'PaymentMethod'     :  ['Electronic check'] ,
'MonthlyCharges'   :   [29.85] ,
'TotalCharges'    :    [29.85],
       }
test = pd.DataFrame(data)
df = normalizing(test)
print(answer_predict(df))
