import com.sap.gateway.ip.core.customdev.util.Message;
import groovy.json.*

def Message processData(Message message) {
    def json = new JsonSlurper().parseText(message.getBody(String));
    message.setProperty("ref_num",json.reference_num)
    return message;
}