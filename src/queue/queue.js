/**
  * Queue
  */

class Queue {
  constructor() {
    this.queue = [];
    this.offset = 0;
  }

  get length() {
    return this.queue.length - this.offset;
  }

  get peek() {
    return (this.queue.length > 0 ? this.queue[this.offset] : undefined);
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    if (this.queue.length == 0) return undefined;

    const item = this.queue[this.offset];
    if (++ this.offset * 2 >= this.queue.length){
      queue  = this.queue.slice(this.offset);
      offset = 0;
    }

    return item;
  }
}

module.exports = Queue;
