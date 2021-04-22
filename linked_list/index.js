class Node{
    constructor(value, nextval = null){
        this.value = value;
        this.nextval = nextval;
    }
}

class LinkedList{
    head = null;
}

function insert(ll, newnode){
    newnode.nextval = ll.head;
    ll.head = newnode;
}

function extract(ll){
    let r = ll.head.value;
    ll.head = ll.head.nextval;
    return r;
}

function ll_to_array(ll){
    array = new Array()
    node = ll.head;
    while(node?.value){
        array.push(node.value);
        node = node.nextval;
    }
    return array;
}

function array_to_ll(arr){
    ll = new LinkedList()
    for(let i = arr.length ; i > -1 ; --i){
        insert(ll, new Node(arr[i]))
    }
    return ll
}

function ll_sum(head, sum = 0){
    sum += head.value;
    if(head.nextval === null){
        return sum;
    }
    return ll_sum(head.nextval, sum)
}

let a = new LinkedList();

insert(a, new Node(6))
insert(a, new Node(7))
insert(a, new Node(8))
insert(a, new Node(5))
insert(a, new Node(7))
console.log(ll_to_array(a))
console.log(extract(a))
console.log(ll_to_array(a))
console.log(ll_sum(a.head))
let b = array_to_ll([1,2,3,4,5])
console.log(ll_to_array(b))