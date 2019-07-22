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

  //function that gets node at index

  //function that removes a node at index

  //function that clears list

  //function that prints list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);

ll.printListData();
