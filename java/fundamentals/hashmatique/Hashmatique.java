package fundamentals.hashmatique;
import java.util.*;

public class Hashmatique {
    HashMap<String, String> trackList = new HashMap<>();
    String[] titles = {"Emerald Dreams", "Leaving", "Angel", "The Last Stand"};
    String[] lyrics = {"You have moved\nLike so many others\nLoves on the wall\nAnd on my soul\nAll it takes is on my back\nForcing your hand\nLies on the floor - flashes her teeth in a smile\n(looking at you baby)\nTry get along - without a doubt - hardest we fall\n(looking at you baby)\n\nLooking at you baby", 
    "Whatever pleases you don’t stop\nIf you’re found in a fire\nI’ll leave you there to burn\nWhatever pleases you don’t stop\nDon’t be afraid to leave or stick around\nWon’t you stick around?\nYou are love\nWon’t you stick around?\nI don’t want to leave\nI just want to run nonstop\nI will suffer now\nWon’t you stick around?\nThe story falls\nYou’re leaving me\nAnd I will stop to say goodbye\nBefore you and I collapse\nAnd I will stop leading you on\nYou’re leaving me behind\nI know it’s sudden I\nCould look you in the eyes\nAnd beg of you to stay\nBut the story starts\nWhen you leave this place\nAnd I’m begging you to stay\nI’m begging you to stay\nWhile you pack your bags\nYou’re just saving face\nAnd you leave this place\nBut I’m begging you to stay\nI’m begging you to stay",
    "Where will I go when you don't need me anymore\nFilled with questions as you waltz right out the door\nI am beaten, cast aside and dragged through dirt\nYou are needed, you are needed\nWe are the only ones who know where we belong\nWe are the only ones who know\nWe are the only ones who know where we belong\nWe are the only ones who know\nWhere will I go when you don't need me anymore\nFilled with questions that you want me to ignore\nI am defeated, still alive but I am numb\nYou are needed, you are needed\nWe are the only ones who know where we belong\nWe are the only ones who know\nWe are the only ones who know where we belong\nWe are the only ones who know",
    "I found a son, I see a man undone\nI couldn't love, I should've loved someone\nI feel about a certain love to you\nI keep aside a sea in love with youI found a son, I see a man undone\nI couldn't love, I should've loved someone\nI feel about a certain love to you\nI keep aside a sea in love with youSideshow cars and plastic stars\nA turgid affair\nIlluminates the dwindling scars\nThey point and stare\n\nI've been longing for a son like you\nI've been searching for a way out too\nAnd somebody\nSomebody's looking for youIf I find some way out\nThen I will stay\nWith heart split two ways down\nLike tears on my faceWe'll find our way out\nWithout a map, just our hearts\nAnd when we get out\nWe'll topple off your house of cardsSideshow cars and plastic stars\nA turgid affair\nIlluminates the dwindling scars\nThey point and stareI've been longing for a son like you\nI've been searching for a way out too\nAnd somebody\nSomebody's looking for you"
    };

    public Hashmatique() {
        for(int i = 0; i<titles.length; i++){
            trackList.put(titles[i], lyrics[i]);
        }
    }

    public String getLyrics(String key) {
        return trackList.get(key);
    }
    Set<String> keys = trackList.keySet();
    public void printAll() {
        for(String key:keys){
            System.out.println(key);
            System.out.println(trackList.get(key));
        }
    }
}
