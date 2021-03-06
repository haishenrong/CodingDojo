class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class SLList{
    constructor(){
        this.head = null
    }

    addToFront(value) {
        // step #1) create an instance of a Node, using the input value
        var nn = new Node(value);
        // // step #1a [EDGE CASE]) check the edge case of nothing in your list
        // if(this.head == null) {
        //     // set this.head equal to whatever node I've created
        //     this.head = nn
        //     // return 'this' to end function and allow chaining of methods
        //     return this
        // }
        // step #2) point our node into the list
        nn.next = this.head
        // step #3) move the head pointer to the correct location
        this.head = nn
    }

    // given a value, add it to the back of your singly linked list
    // what if the list is empty?
    addToBack(value) {
        // step #1) create an instance of a Node, using the input value
        var nn = new Node(value);
        // step #1a [EDGE CASE]) check the edge case of nothing in your list
        if(this.head == null) {
            console.log("Nothing in list, so simply add to this.head")
            // set this.head equal to whatever node I've created
            this.head = nn
            // return 'this' to end function and allow chaining of methods
            return this
        }
        // step #2) traverse to the location where you want to add the node (aka, the final node in the list)
        var runner = this.head;

        while(runner.next != null) {
            runner = runner.next
        }
        // step #3) change runner's .next pointer, to point at our new node
        runner.next = nn
    }

    contains(value) {
        var runner = this.head;
        while(runner != null && runner.value != value)
            runner = runner.next
        if(runner == null)
            return false
        else 
            return true
    }
    
    removeFromBack() {
        if(this.head == null){
            console.log('empty list')
            return this
        }
        if(this.head.next == null)
        {
            this.head = this.head.next
            return this
        }
        var fill = this.head;
        while(fill.next.next != null)
            fill = fill.next
        fill.next = null
        return this;
    }

    removeFromFront() {
        if(this.head == null){
            console.log('empty list')
            return this
        }
        //this.head.next = null
        this.head = this.head.next
        return this.head
    }
    // print the singly linked list
    printValues() {
        // step #0 [EDGE CASE]) handle a case where there is nothing in the list
        if(this.head == null){
            console.log("There's nothing in the list! Dummy!")
            return this
        }
        //step #1) establish a runner to traverse through the list
        var runner = this.head;

        // NOTE: we can move runner all the way into null because our loop will exit as soon as runner hits null, avoiding any errors with printing
        while(runner != null) {
            // step #2) print the values at each iteration before moving the runner!
            console.log(`The current value is: ${runner.value}`)
            runner = runner.next
        }
        console.log("We have hit the end of the list!")
        return this;
    }

    appendValue(loc, value){
        var appendee = new Node(value)
        if(loc == 0){
            appendee.next = this.head
            this.head = appendee
            return
        }
            
        var runner = this.head
        var count = 1
        while(runner != null && count < loc)
        {
            count ++
            runner = runner.next
        }
        runner != null 
        ? (appendee.next = runner.next, runner.next = appendee)
        : (console.log('loc is null'))
    }

    prependValue(loc, value) {
        var prependee = new Node(value)
        if(loc == 0){
            prependee.next = this.head
            this.head = prependee
            return
        }
        var runner = this.head
        var count = 1
        while(runner != null && count < loc-1)
        {
            count ++
            runner = runner.next
        }
        runner != null 
        ? (prependee.next = runner.next, runner.next = prependee)
        : (console.log('loc is null'))
    }

    prependValueNull(loc, value) {
        var prependee = new Node(value)
        if(loc == 0){
            prependee.next = this.head
            this.head = prependee
            return
        }
        var runner = this.head
        var count = 1
        while(count < loc-1)
        {
            if(runner.next == null)
            {
                var nextNode = new Node(undefined)
                nextNode.next = null
                runner.next=nextNode
            }
            count ++
            runner = runner.next
        }
        prependee.next = runner.next
        runner.next = prependee
        console.log('loc is null')
    }
    moveMinToFront(){
        var runner=this.head;
        if(this.head==null){
            console.log("This is an empty list");
            return
        }
        else if(this.head.next==null){
            console.log("This is the min");
            return
        }
        var min = runner.value;
        while(runner.next!=null){
            if(min > runner.next.value){
                min = runner.next.value;
            }
            runner=runner.next
        }
        runner=this.head
        while(runner.next.value!=min){
            runner=runner.next
        }
        runner.next=runner.next.next

        var newNode = new Node(min);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }


    moveMaxToBack(){
        var runner=this.head;
        if(this.head==null){
            console.log("This is an empty list");
            return
        }
        else if(this.head.next==null){
            console.log("This is the min");
            return
        }
        var max = runner.value;
        while(runner.next!=null){
            if(max < runner.next.value){
                max = runner.next.value;
            }
            runner=runner.next
        }
        runner=this.head
        while(runner.next.value!=max){
            runner=runner.next
        }
        runner.next=runner.next.next

        this.addToBack(max);
        return this.head;
    }

    reverse = () => {
        if(this.head == null || this.head.next == null)
            return this;
        var backRunner = this.head;
        var runner = this.head.next;
        var forwardRunner = this.head.next;
        backRunner.next = null;
        while (runner != null){
            forwardRunner = forwardRunner.next;
            runner.next = backRunner;
            backRunner = runner;
            runner = forwardRunner;
        }
        this.head = backRunner;
        return;
    }
}

const sll = new SLList();
sll.addToFront(9)
sll.addToFront(3)
sll.addToFront(-4)
sll.addToFront(16)
sll.addToFront(7) // front should be lost
sll.addToBack(5)
sll.addToBack(48)
sll.addToBack(-5)
sll.addToBack(-15)
sll.addToBack(14) // back should be lost

sll.reverse();
sll.printValues();
