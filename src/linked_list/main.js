class Node{
    constructor(value){
        this.value = value;
        this.nextval = null;
    }
}

class LinkedList{
    head = null;
}

//insert a value to the front of a ll
function insert(ll, value){
    let newnode = new Node(value);
    newnode.nextval = ll.head;
    ll.head = newnode;
}

//extract the head value of a ll and return it
function extract(ll){
    let r = ll.head.value;
    ll.head = ll.head.nextval;
    return r;
}

//converts ll to array
function ll_to_array(ll){
    let array = new Array();
    let node = ll.head;
    while(node?.value != null){
        array.push(node.value);
        node = node.nextval;
    }
    return array;
}

//converts an array to ll
function array_to_ll(arr){
    let ll = new LinkedList();
    for(let i = arr.length ; i > -1 ; --i){
        insert(ll, arr[i]);
    }
    return ll;
}

//sum of the elements of a ll
function ll_sum(head, sum = 0){
    sum += head.value;
    if(head.nextval === null){
        return sum;
    }
    return ll_sum(head.nextval, sum);
}

//Demo

let a = new LinkedList();

insert(a, 6);
insert(a, 7);
insert(a, 8);
insert(a, 5);
insert(a, 7);
console.log(ll_to_array(a));
console.log(extract(a));
console.log(ll_to_array(a));
console.log(ll_sum(a.head));
let b = array_to_ll([1,2,3,4,5]);
console.log(ll_to_array(b));