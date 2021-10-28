class Node{
    constructor(val){
        this.val = val;
        this.next = null; // node (.val, .next)
        //THIS IS NEW
        this.child = null; // SLL (.head)
    }
}

class SLL{
    constructor(){
        this.head = null;
    }

    addToFront(val){
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    printMe(){
        let returnStr = '';
        let runner = this.head;
        while(runner != null){
            returnStr += `${runner.val} -> `;
            runner = runner.next;
        }
        console.log(returnStr);
        return returnStr;
    }

    //populates each node with a random amount of children from 0 to 4
    populateChildren(){

        let runner = this.head;

        while(runner !== null){
            let numChildren = Math.floor(Math.random() * 5);
            if(numChildren !== 0){
                let childList = new SLL();
                for(let i = 0; i < numChildren; ++i){
                    childList.addToFront(Math.floor(Math.random() * 50));
                }
                runner.child = childList;
            }
            runner = runner.next;
        }
    }

    flattenChildren() {
        // traverse through the list until we encounter a node with children
        let runner = this.head;
        while (runner !== null) {
            if (runner.child) {
                let runner2 = runner.child.head;
                // traverse through the children until we reach the end.
                while (runner2.next !== null) {
                    runner2 = runner2.next;
                }
                // once we reach the end, we start linking our nodes
                runner2.next = runner.next;
                runner.next = runner.child.head;
                // remove the runner's children
                runner.child = null;
            }
            runner = runner.next;
        }
        return this;
    }
    printMeWithChildren(){
        let returnStr = '';
        let runner = this.head;
        while(runner != null){
            returnStr += `${runner.val}`;
            if(runner.child){
                returnStr += "(";
                let runner2 = runner.child.head;
                while(runner2 !== null){
                    returnStr += `${runner2.val} ->`;
                    runner2 = runner2.next;
                }
                returnStr += ")";
            }
            returnStr += " -> ";
            runner = runner.next;
        }
        console.log(returnStr);
        return returnStr;
    }
}

const sll = new SLL();
sll.addToFront(9)
sll.addToFront(3)
sll.addToFront(-4)
sll.addToFront(16)
sll.addToFront(7) // front should be lost
sll.populateChildren();
console.log("Pre-Flat");
sll.printMeWithChildren();
sll.flattenChildren();
console.log("Post-flat");
sll.printMeWithChildren();
