/*
* The integration developer needs to create the method processData 
 This method takes Message object of package com.sap.gateway.ip.core.customdev.util
 which includes helper methods useful for the content developer:
 The methods available are:
    public java.lang.Object getBody()
	public void setBody(java.lang.Object exchangeBody)
   public java.util.Map<java.lang.String,java.lang.Object> getHeaders()
    public void setHeaders(java.util.Map<java.lang.String,java.lang.Object> exchangeHeaders)
    public void setHeader(java.lang.String name, java.lang.Object value)
    public java.util.Map<java.lang.String,java.lang.Object> getProperties()
    public void setProperties(java.util.Map<java.lang.String,java.lang.Object> exchangeProperties) 
 */
importClass(com.sap.gateway.ip.core.customdev.util.Message);
importClass(java.util.HashMap);
function processData(message) {
       var body = message.getBody();
       body.toString();
       var modifiedBody=body.replace("xml"," ")
       var properties = message.getProperties();
      // var tenantId=properties.get("TenantName")+" URL - "+properties.get("TenantUrl");
       var keyFieldName=properties.get("keyFieldName");
       var keyField= properties.get("keyField");
       var customErrorMessage= "NA";
       if(properties.get("customErrorMessage")!=null){
         customErrorMessage = properties.get("customErrorMessage");
         customErrorMessage=customErrorMessage.replace("xml"," ")
        customErrorMessage=customErrorMessage.replace("<"," ")
       customErrorMessage=customErrorMessage.replace(">"," ")
       customErrorMessage=customErrorMessage.replace("}"," ")
       customErrorMessage=customErrorMessage.replace("{"," ")
       customErrorMessage=customErrorMessage.replace("/"," ")
       customErrorMessage=customErrorMessage.replace("/"," ")
       customErrorMessage=customErrorMessage.replace("/"," ")
       customErrorMessage=customErrorMessage.replace("\""," ")
       customErrorMessage=customErrorMessage.replace("?"," ")
       customErrorMessage=customErrorMessage.replace(":"," ")
         
       }
       var logId = properties.get("SAP_MessageProcessingLogID");
       var timeStamp = properties.get("CamelCreatedTimestamp");
       var iFlowName=properties.get("iFlowName");
      // var emailGroup=properties.get("emailGroup");
       modifiedBody=modifiedBody.replace("<"," ")
       modifiedBody.replace(">"," ")
       modifiedBody=modifiedBody.replace("}"," ")
       modifiedBody=modifiedBody.replace("{"," ")
       modifiedBody=modifiedBody.replace("/"," ")
       modifiedBody=modifiedBody.replace("/"," ")
       modifiedBody=modifiedBody.replace("/"," ")
       modifiedBody=modifiedBody.replace("\""," ")
       modifiedBody=modifiedBody.replace("?"," ")
       modifiedBody=modifiedBody.replace(":"," ")


       modifiedBody='{"root":{\n"statusCode": "400",\n' + '"timeStamp": "' + timeStamp + '",\n' + '"keyField": "' + keyField + '",\n' + '"keyFieldName": "' + keyFieldName + '",\n' + '"customErrorMessage": "' + customErrorMessage + '",\n' + '"logId": "' + logId + '",\n' + '"iFlowName": "' + iFlowName + '",\n' + '"errorMessage": "' + modifiedBody + '"\n}}';
       modifiedBody=modifiedBody.replace("null"," ")
       message.setBody(modifiedBody );
       var messageLog = messageLogFactory.getMessageLog(message);
    if(messageLog != null){
        messageLog.addAttachmentAsString("JS_Error_Message_Builder", modifiedBody, "text/plain");
    }
       
     return message;
}