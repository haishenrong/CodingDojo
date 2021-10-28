class Node{
    constructor(val){
        this.val = val;
        this.next = null; 
        this.prev = null; // SLL (.head)
    }
}

class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addToFront = (val) => {
        var node = new Node(val);
        if(this.head == null){
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
    }

    addToBack = (val) => {
        var node = new Node(val);
        if(this.tail == null){
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }

    removeFront = () => {
        if(this.head == null)
            return;
        if(this.head == this.tail){
            this.head = null;
            this.tail = null;
            return;
        }
        this.head = this.head.next;
        this.head.prev = null;
    }

    removeBack = () => {
        if(this.head == null)
            return;
        if(this.head == this.tail){
            this.head = null;
            this.tail = null;
            return;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
    }

    print = () => {
        let returnStr = '';
        let runner = this.head;
        while(runner != null){
            returnStr += `${runner.val} -> `;
            runner = runner.next;
        }
        console.log(returnStr);
        return returnStr;
    }
    reversePrint = () => {
        let returnStr = '';
        let runner = this.tail;
        while(runner != null){
            returnStr += `${runner.val} -> `;
            runner = runner.prev;
        }
        console.log(returnStr);
        return returnStr;
    }
    reverse = () => {
        if(this.head == null || this.head.next == null)
            return;
        var runner = this.head;
        var frontRunner = this.head;
        while(runner != null){
            frontRunner = frontRunner.next;
            runner.next = runner.prev;
            runner.prev = frontRunner;
            runner = frontRunner;
        }
        runner = this.head;
        this.head = this.tail;
        this.tail = runner;
        return;
    }
}

const dll = new DLL();
dll.addToFront(9);
dll.addToFront(3);
dll.addToFront(65);
dll.addToFront(98);
dll.addToFront(7);
dll.addToBack(9);
dll.addToBack(3);
dll.addToBack(35);
dll.addToBack(16);
dll.addToBack(343);
dll.addToBack(7);
dll.print();
dll.removeBack();
dll.removeFront();
dll.print();
dll.reversePrint();
dll.reverse();
dll.print();
