import pandas as pd
import joblib
def normalizing(df):
    df.drop(columns='customerID',inplace=True)
    df.replace('No internet service', 'No', inplace=True)
    df.replace('No phone service', 'No', inplace=True)
    '''Encoding The Categorical values'''
    feature_le = ["Partner","Dependents","PhoneService","MultipleLines", "OnlineSecurity", "OnlineBackup", "DeviceProtection", "TechSupport", "StreamingTV", "StreamingMovies", "PaperlessBilling"]
    for i in feature_le:
        df[i] = df[i].map({"Yes":1, "No":0})
    df["gender"]=df["gender"].map({"Female":1,"Male":0})
    """One hot encoding for these attributes"""
    features_ohe = ["InternetService","Contract","PaymentMethod"]
    df_ohe = pd.get_dummies(df, columns=features_ohe)
    for col in df_ohe.columns:
        if df_ohe[col].dtype == 'bool':  # Check if the column is boolean
            df_ohe[col] = df_ohe[col].astype(int)

    '''Scaler Encoding'''
    
    cols = ["tenure", 'MonthlyCharges', 'TotalCharges']
    df_mms = pd.DataFrame(df_ohe, columns=cols)
    df_remaining = df_ohe.drop(columns=cols)
    mms = joblib.load('mms.pkl')
    rescaled_feature = mms.transform(df_mms)
    rescaled_feature_df = pd.DataFrame(rescaled_feature, columns=cols, index=df_remaining.index)
    df = pd.concat([rescaled_feature_df,df_remaining],axis=1)
    desired_index = ['tenure', 'MonthlyCharges', 'TotalCharges', 'gender', 'SeniorCitizen',
       'Partner', 'Dependents', 'PhoneService', 'MultipleLines',
       'OnlineSecurity', 'OnlineBackup', 'DeviceProtection', 'TechSupport',
       'StreamingTV', 'StreamingMovies', 'PaperlessBilling',
       'InternetService_DSL', 'InternetService_Fiber optic',
       'InternetService_No', 'Contract_Month-to-month', 'Contract_One year',
       'Contract_Two year', 'PaymentMethod_Bank transfer (automatic)',
       'PaymentMethod_Credit card (automatic)',
       'PaymentMethod_Electronic check', 'PaymentMethod_Mailed check']
    df = df.reindex(columns=desired_index, fill_value=0)
    return df

#Testing phase

# data =  {'customerID':['Test'], 
#          'gender': ['Female'],          
# 'SeniorCitizen'  :   [0]  , 
# 'Partner'      :      ['Yes']  ,
# 'Dependents'    :     ['No']  ,
# 'tenure'        :      [1] ,
# 'PhoneService'   :  ['No'] ,
# 'MultipleLines'  :   ['No'] ,  
# 'InternetService'  :  ['DSL'] , 
# 'OnlineSecurity'   :   ['No'] ,
# 'OnlineBackup'     :   ['Yes'] ,
# 'DeviceProtection' :   ['No'] ,
# 'TechSupport'     :    ['No'] ,
# 'StreamingTV'    :    ['No'] ,
# 'StreamingMovies'  :   ['No'],
# 'Contract'         :   ['Month-to-month'] ,
# 'PaperlessBilling' :   ['Yes'] ,
# 'PaymentMethod'     :  ['Electronic check'] ,
# 'MonthlyCharges'   :   [29.85] ,
# 'TotalCharges'    :    [29.85],       }
# test = pd.DataFrame(data)
# df = normalizing(test)
# print(df)
