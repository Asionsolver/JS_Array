// What is Queue?
// In computer science, a queue is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and the removal of entities from the other end of the sequence. By convention , the of the sequence at which elements are added is called the back, tail, or rear of the queue, and at which elements are removed is called the head or front of the queue,  analogously to the words use when people line upto wait for goods or services.

// In short term: Queue is a FIFO (First In First Out) data structure. The element that is added first will be removed first.

// Dequeue Steps:
// 1. Remove the element from the front of the queue.
// 2. Shift all the elements to the left by one position.
// 3. Decrement the rear pointer.

/**
@ Implement of Queue
*/

const MAX_SIZE = 30;

class Queue {
    constructor(){
        this.queue = new Array(MAX_SIZE);
        this.front = 0;
        this.rear = 0;
    }

    //add item to the rear of the Queue
    enqueue(item){
        if(this.rear === MAX_SIZE){
            console.log("Queue Overflow");
            return false;
        }
        this.queue[this.rear++] = item;
        return true;
    }

    //remove item from the front of the Queue
    dequeue(){
        if(this.isEmpty()){
            console.log("Queue Underflow");
            return;
        }

        let item = this.queue[this.front];
        for (let i =this.front; i < this.rear-1; i++) {
            this.queue[i] = this.queue[i+1];
        }
        delete this.queue[--this.rear];
        return item;
    }

    //show the Queue items
    show(){
        if(this.isEmpty()){
            console.log("Queue Underflow");
            return false;
        }
        for (let i = this.front; i < this.rear; i++) {
            console.log('[Displaying]',this.queue[i]);
        }
    }

    //next item in the Queue
    next(){
        if(this.isEmpty()){
            console.log("Queue Underflow");
            return;
        }
        return this.queue[this.front];
    }
    //return true if the Queue is empty
    isEmpty() {
        return this.front === this.rear;
    }
}

module.exports = Queue;