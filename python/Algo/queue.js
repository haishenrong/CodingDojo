

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
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
  isEmpty() {
    if(this.head == null){
      return true
    }
  else{
    return false
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

// a queue operates on the principal of "First In, First Out" like waiting in line for something
class SLQueue{
    constructor() {
        this.head = null
        this.tail = null
    }

    // add a node with the given value to the end of queue
    enqueue(value) {
        var nn = new Node(value)
        if(this.tail == null){
            this.tail = nn
            this.head = nn
            nn.next = null
        }
        else{
            this.tail.next = nn
            nn.next = null
            this.tail = nn
        }
    }

    // remove and return the front value from the queue
    dequeue() {
        if(this.isEmpty()){
        console.log("List is empty")
        return
        }
        var value = this.head.value
        this.head = this.head.next
        return value
    }

    //return true/false based on whether you find the given value in a queue
    contains(value) {
        var runner = this.head
        while(runner != null){
          if(runner.value == value){
            return true
          }
          runner = runner.next
        }
        return false
    }

    // write an algo that prints the values in a queue in order; try and identify the FRONt and TAIL as well
    displayQueue(){
        var runner = this.head
        while(runner != null){
            console.log(runner.value)
            runner = runner.next
        }
    }

    // return the value of the front node without removing from list
    front() {
        if(this.isEmpty()){
          console.log("The list is empty")
        }
        else{
          console.log(this.head.value)
        }
    }

    // return whether or not a list is empty
    isEmpty() {
        if(this.head == null){
          return true
        }
      else{
        return false
      }
    }
  
    size(){
      var counter = 0
      var runner = this.head
      while(runner != null){
        runner = runner.next
        counter++
      }
      return counter
    }

    interleaveQueue(){
      if(this.size() <= 2){
        console.log("string too small")
        return
      }
      var half_size = this.size()/2
      var halfway_head = this.head
      var counter = 0
      while(counter < half_size-1){
        halfway_head = halfway_head.next
        counter++
      }
      var second_head = halfway_head.next
      console.log(second_head.value)
      halfway_head.next = null
      var runner = this.head
      while(runner != null){
        var node = new Node(second_head.value)
        node.next = runner.next
        runner.next = node
        runner = runner.next.next
        second_head = second_head.next
      }
    }

    isPalindrome(){
      var runner = this.head
      var secondList = new SLStack()
      while (runner != null){
        secondList.push(runner.value)
        runner = runner.next
      }
      var head = this.head
      var tail = secondList.top
      while(!secondList.isEmpty() && head.value == tail.value){
        head = head.next
        secondList.pop()
        tail = secondList.top
      }
      if(head.value != tail.value)
        return false
      return true;
    }
}

var q = new SLQueue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
console.log(q.isPalindrome())
q.enqueue(6);
q.enqueue(5);
q.enqueue(4);
q.enqueue(3);
q.enqueue(2);
q.enqueue(1);
console.log(q.isPalindrome())
q.displayQueue();
