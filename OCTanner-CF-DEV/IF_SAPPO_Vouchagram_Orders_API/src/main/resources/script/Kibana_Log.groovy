import com.sap.gateway.ip.core.customdev.util.Message;
import java.util.HashMap;
def Message processData(Message message) {
    def body = message.getBody(String);
    def messageLog = messageLogFactory.getMessageLog(message);
    if(messageLog != null){
        messageLog.setStringProperty("Logging#2", "Printing Payload As Attachment")
        messageLog.addAttachmentAsString("KibanaPayload:", body, "text/plain");
     }
    return message;
}