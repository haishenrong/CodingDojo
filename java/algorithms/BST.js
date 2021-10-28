class Queue extends Array {
    enqueue(val) {
        this.push(val);
    }

    dequeue() {
        return this.shift();
    }

    peek() {
        return this[0];
    }

    isEmpty() {
        return this.length === 0;
    }
}
class BSTNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
    }

    insert = (val) => {
        if(this.root == null){
            this.root = new BSTNode(val);
            return;
        }
        var nn = new BSTNode(val);
        var runner = this.root;
        while(runner != null){
            if(runner.value >= val){
                if(runner.left != null)
                    runner = runner.left;
                else{
                    runner.left = nn;
                    break;
                }
            }
            else{
                if(runner.right != null)
                    runner = runner.right;
                else{
                    runner.right = nn;
                    break;
                }
            }
        }
        return nn;
    }

    insertRec = (val) => {
        if(this.root == null)
            this.root = new BSTNode(val);
        else{
            var runner = this.root;
            return runner.ins(val);
        }
    }

    ins = (val) => {
        if(this.value <= val && this.left == null){
            this.left = new BSTNode(val);
            return;
        }
        if(this.value <= val && this.left != null){
            return this.left.ins(val);
        }
        if(this.value <= val && this.right == null){
            this.right = new BSTNode(val);
            return;
        }
        if(this.value <= val && this.right != null){
            return this.right.ins(val);
        }
    }

    findMin() {
        var runner = this.root;
        while (runner.left != null) 
            runner = runner.left;
        return runner.value;
    }

    findMax() {
        var runner = this.root;
        while (runner.right != null) 
            runner = runner.right;
        return runner.value;
    }

    printBST = () => {
        var runner = this.root;
        var q = new Queue();
        var q2 = new Queue();
        q.enqueue(runner);
        var string = "";
        while(!q.isEmpty()){
            runner = q.dequeue();
            var one = new BSTNode(null);
            var two = new BSTNode(null);
            if(runner.value === null) {
                string+="- "; 
                q2.enqueue(one);
                q2.enqueue(two);
                continue;
            } else {
                runner.left!=null ? q2.enqueue(runner.left) : q2.enqueue(one);
                runner.right!=null ? q2.enqueue(runner.right) : q2.enqueue(two);
                string += runner.value + " " ;
            }
            if(q.isEmpty()){
                console.log(string);
                string = "";
                q = q2;
                if(q2.every(element => element.value === null)){
                    console.log(q2);
                    console.log(q);
                    break;
                }
                q2 = new Queue();
            } 
        }
        console.log(string);
    }

    // call with root
    contains = (target, node=this.root) => {
        if(node == null)
            return false;
        return node.value == target || this.contains(target, node.left) || this.contains(target, node.right);
    }
    // call with root
    size = (node=this.root) => {
        if(node == null)
            return 0;
        return 1 + this.size(node.left) + this.size(node.right);
    }
    height = (node=this.root) => {
        return node === null ? 0 : 1 +  Math.max(this.height(node.left),this.height(node.right));
    }
    balance = (node=this.root) => {
        return node === null ? 0 : this.height(node.left) === this.height(node.right);
    }

    delete = (val, node=this.root) => {
        if(node.left == null && node.right == null)
            return;
        if(node.value < val && node.right != null && node.right.value != val){
            return this.delete(val, node.right);
        }
        else if (node.value > val && node.left != null && node.left.value != val) {
            return this.delete(val, node.left);
        }
        else {
            if(node.left != null && node.left.value === val){
                if(node.left.left === null && node.left.right === null){
                    node.left = null;
                    return;
                }
                if(node.left.left === null && node.left.right != null ){
                    node.left=node.left.right;
                    return;
                }
                if(node.left.left != null && node.left.right === null ){
                    node.left=node.left.left;
                    return;
                }
                else{
                    var nodeHolder = node.left;
                    node.left = this.min(node.left.right);
                    node.left.left = nodeHolder.left;
                    node.left.right = nodeHolder.right;
                    return;
                }
                    
            }
            if(node.right != null && node.right.value === val){
                if(node.right.left === null && node.right.right === null){
                    node.right = null;
                    return;
                }
                if(node.right.left === null && node.right.right != null ){
                    node.right=node.right.right;
                    return;
                }
                if(node.right.left != null && node.right.right === null ){
                    node.right=node.right.left;
                    return;
                }
                else{
                    var nodeHolder = node.right;
                    node.right = this.min(node.right.right);
                    node.right.left = nodeHolder.left;
                    node.right.right = nodeHolder.right;
                    return;
                }
                    
            }

        }
    }
    min = (node) => {
        var runner = node.left;
        var walker = node;
        while (runner.left != null){
            walker = runner;
            runner = runner.left;
        }
        walker.left = null;
        return runner;
    }
}

var bst = new BST();
bst.insert(42);
bst.insert(32);
bst.insert(67);
bst.insert(100);
bst.insert(65);
bst.insert(44);
bst.insert(12);
bst.insert(35);
//bst.insert(54);
bst.insert(77);
bst.printBST();
// console.log(bst.size());
// console.log(bst.contains(67));
// console.log(bst.contains(101));
// console.log(bst.height());
// console.log(bst.balance());
bst.delete(67);
bst.printBST();
