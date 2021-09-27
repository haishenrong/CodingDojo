package fundamentals.alfredBot;

import java.util.Date;
public class AlfredQuotes {
    
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }
    
    public String guestGreeting(String name) {
        // YOUR CODE HERE
        return String.format("Hello, %s. Lovely to see you.", name);
    }
    
    public String dateAnnouncement() {
        // YOUR CODE HERE
        return "It is currently " + new Date();
    }
    
    public String respondBeforeAlexis(String conversation) {
        // YOUR CODE HERE
        String reply = conversation.contains("Alexis") 
            ? "Right away, sir. She certainly isn't sophisticated enough for that." 
            : conversation.contains("Alfred") 
                ? "At your service. As you wish, naturally." 
                : "Right. And with that I shall retire.";
        return reply;
    }
    
    // NINJA BONUS
    // See the specs to overload the guessGreeting method
    public String guestGreeting(String name, String dayPeriod) {
        // YOUR CODE HERE
        return String.format("Good %s, %s. Lovely to see you.", dayPeriod, name);
    }
    // SENSEI BONUS
    // Write your own AlfredQuote method using any of the String methods you have learned!
}

