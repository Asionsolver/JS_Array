const MAX_SIZE = 30;

class Stack {
    constructor(){
        this.list = new Array(MAX_SIZE);
        this.top = -1;
    }
    //add item to the top of the Stack
    push(item){
        if(this.top >= MAX_SIZE){
            console.log("Stack Overflow");
            return false;
        }
        this.list[++this.top] = item;
        return true;
    }

    //remove item from the top of the Stack
    pop(){
        if(this.isEmpty()){
            console.log("Stack Underflow");
            return false;
        }
        let item = this.list[this.top];
        delete this.list[this.top];
        this.top--;
        return item;
    }

    //return the item at the top of the Stack
    peek(){
        if(this.isEmpty()){
            console.log("Stack Underflow");
            return false;
        }
        return this.list[this.top];
    }

    //return true if the Stack is empty
    isEmpty(){
        return this.top < 0;
    }
}

module.exports = Stack;