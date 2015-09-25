function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

function Node(val) {
  this.next = null;
  this.prev = null;
  this.value = val;
}

function DoublyLinkedList() {
  LinkedList.apply(this);
}

LinkedList.prototype.add = function(value) {
  var node = new Node(value);
  this.length ++;

  if (this.length === 1){
    this.head = node;
    this.tail = node;
  }

  //newNode = tail
  //newNode.prev = what tail was
  if (this.length > 1){
    this.head.next = node;
    this.tail = node;
    node.prev = this.tail.prev;
  }

    // this.head.next = node;
    // this.tail = node2;
    // node.prev = null;
    // node.next = this.tail;
    // node2.next = null;
    // node2.prev = node;

  //   this.tail = node2;
  //   node1.next = this.tail;
  //   node2.prev = this.head;
  // }

  // if (this.length === 3){

  //   this.head = node1;
  //   this.tail = node3;
  //   node3.prev = node2;
  //   node3.next = null;
  //   node2.next = node3;
  //   node2.prev = node1;
  // }


  // if (this.head === null){
  //   this.head = newNode;
  //   if (this.tail === null){
  //     this.tail = this.head;
  //   }
  // } else {
  //     // this.head.next = newNode;
  //     newNode.next = //something;
  //     newNode.prev = //something;
  //   };
};

LinkedList.prototype.removeLast = function() {
  //iterate down and keep track of second to last one
  this.length --;
  if (this.length > 0){
    for (var i = 0; i < this.length; i++) {
      this.tail.prev.next = null;
    }
  }
  // else if (this.length === 0){
  //   this.tail = null;
  //   this.head = null;
  // }
};

DoublyLinkedList.prototype = Object.create(LinkedList.prototype);
DoublyLinkedList.prototype.constructor = DoublyLinkedList;

function CircularLinkedList() {
  LinkedList.apply(this);
}

CircularLinkedList.prototype = Object.create(LinkedList.prototype);
CircularLinkedList.prototype.constructor = CircularLinkedList;

module.exports.Node = Node;
module.exports.LinkedList = LinkedList;
module.exports.CircularLinkedList = CircularLinkedList;
module.exports.DoublyLinkedList = DoublyLinkedList;
