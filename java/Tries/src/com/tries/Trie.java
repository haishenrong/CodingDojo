package com.tries;

import java.util.LinkedList;

public class Trie {
    public Node root;
    
    public Trie() {
        this.root = new Node();
    }
    
    public void insertWord(String word) {
        // gets the root node;
        Node currentNode = this.root;
        
        // iterates over every character in the word
        for(int i = 0; i < word.length(); i++) {
            // currentLetter is just the character / letter at the iteration
            Character currentLetter = word.charAt(i);
            // ask if the current letter is in the map of the current node
            Node child = currentNode.children.get(currentLetter);
            if(child == null) {
                child = new Node();
                currentNode.children.put(currentLetter, child); 
            } 
            
            currentNode = child;
        }
        currentNode.isCompleteWord = true;
    }
    
    public boolean isPrefixValid(String prefix) {
        Node currentNode = this.root;
        for(int i = 0; i < prefix.length(); i++) {
            Character currentLetter = prefix.charAt(i);
            Node child = currentNode.children.get(currentLetter);
            if(child == null) {
                return false;
            }
            currentNode = child;
        }
        return !currentNode.isCompleteWord;
    }
    
    public boolean isWordValid(String word) {
        Node currentNode = this.root;
        for(int i = 0; i < word.length(); i++) {
            Character currentLetter = word.charAt(i);
            Node child = currentNode.children.get(currentLetter);
            if(child == null) {
                return false;
            }
            currentNode = child;
        }
        return currentNode.isCompleteWord;
    }
    
    public void printAllKeys() {
    	 Node currentNode = this.root;
    	 LinkedList<Node> queue = new LinkedList<>();
    	 queue.add(currentNode);
         while(!queue.isEmpty()) {
             currentNode = queue.poll();
             System.out.print("Node: ");
             if(!currentNode.children.isEmpty()) {
            	 currentNode.children.forEach((k,v) -> {
            		 System.out.print(k);
            		 queue.add(v);
            	 });
             }
             System.out.println("");
         }
    }
}
