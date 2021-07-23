/*
    Developer - Rahul Yadav
    Date - 25-Jun-2021
    This script will read the JSON response from Vouchagram and will extract the API response code, status, desc & encrypted data.
    API response Status, Code & desc will be set as property.
    Encrypted data will be set to body parameter and will be sent to decryptor 
*/

import com.sap.gateway.ip.core.customdev.util.Message;
import groovy.json.*

def Message processData(Message message) {
    def json = new JsonSlurper().parseText(message.getBody(String));
    def messageLog = messageLogFactory.getMessageLog(message);
    if(messageLog != null){
    //reading the nodes of the response JSON & setting the property & message body	

    message.setProperty("api_status",json.status[0])
    message.setProperty("api_resp_code",json.code[0])
    message.setProperty("api_resp_desc",json.desc[0])
	message.setBody(json.data[0])
    }else{
        message.setBody("")
    }
	
    return message;
}