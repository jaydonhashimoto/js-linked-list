class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //function that inserts first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //function that inserts last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    //if empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      //iterate to last node
      while (current.next) {
        current = current.next;
      }
      //append node to end of LL
      current.next = node;
    }
    this.size++;
  }

  //function that inserts at index
  insertAt(data, index) {
    //check if index is within bounds
    if (index > 0 && index > this.size) {
      return;
    }

    //if first index
    if (index === 0) {
      //call insert first method
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current, previous;

    //set current to first
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current; //node before index
      count++;
      current = current.next; //node after index
    }
    node.next = current;
    previous.next = node;

    this.size++;
  }

  //function that gets node at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  //function that removes a node at index
  removeAt(index) {
    //check bounds
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    //remove first
    if (index == 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  //function that clears list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //function that prints list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  //function that reverses the list
  reverse() {
    let current = this.head;
    let previous,
      next = null;

    while (current) {
      //store next
      next = current.next;

      //reverse current node's pointer
      current.next = previous;

      //move pointers one position ahead
      previous = current;
      current = next;
    }
    this.head = previous;
  }
}

class MergedSortedList {
  sortedMerge(headA, headB) {
    //a dummy first node to hang result on
    let dummyNode = new Node(0);
    //tail points to the last result node
    let tail = dummyNode;

    while (true) {
      //if either list runs out, use other list
      if (!headA) {
        tail.next = headB;
        break;
      } else if (!headB) {
        tail.next = headA;
        break;
      }

      //compare data, append to tail and advance head
      if (headA.data <= headB.data) {
        tail.next = headA;
        headA = headA.next;
      } else {
        tail.next = headB;
        headB = headB.next;
      }

      //advance tail
      tail = tail.next;
    }
    return dummyNode.next;
  }
}

const ll = new LinkedList();
const ll2 = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll2.insertFirst(1);
ll2.insertFirst(2);
ll2.insertFirst(3);
// ll.insertLast(400);
// ll.insertAt(500, 2);

// ll.printListData();
// console.log('reversed list:');
// ll.reverse();
// ll.printListData();
ll.head = new MergedSortedList().sortedMerge(ll.head, ll2.head);
ll.printListData();
