class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a stack operates on the principal of "First In, Last Out" like waiting in line for something
class SLStack{
    constructor() {
        this.top = null
    }

    // add a given value to your stack
    push(value){
        var newNode = new Node(value)
        newNode.next = this.top
        this.top = newNode
        return this;
    }
    
    // remove and return the top value
    pop(){
        // if there's nothing in the stack, then what?
        if (!this.top) {
            console.log("This stack is empty!")
            return null;
        }
        var removed = this.top
        this.top = this.top.next
        return removed.value
    }

    // return (don't remove) the top value of a stack
    returnTop() {
        if(!this.top) {
            console.log("This stack is empty!")
            return null
        } else {
            return this.top.value
        }
    }

    printStack() {
        var runner = this.top
        while(runner != null) {
            console.log(`The current value is: ${runner.value}`)
            runner = runner.next
        }
        return this
    }
}
