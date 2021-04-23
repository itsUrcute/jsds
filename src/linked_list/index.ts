type nodeornull = LLNode | null;

class LLNode{
    value: number;
    nextval: nodeornull;
    constructor(value: number){
        this.value = value;
        this.nextval = null;
    }
}

class LinkedList{
    head: nodeornull = null;
}

//insert a value to the front of a ll
function insert(ll: LinkedList, newnode: LLNode): void{
    newnode.nextval = ll.head;
    ll.head = newnode;
}

//extract the head value of a ll and return it
function extract(ll: LinkedList): number | null{
    if(ll.head === null){
        return null;
    }
    let r = ll.head.value;
    ll.head = ll.head.nextval;
    return r;
}

//converts ll to array
function ll_to_array(ll: LinkedList): number[]{
    let arr: number[] = new Array();
    let node = ll.head;
    while(node?.value){
        arr.push(node.value);
        node = node.nextval;
    }
    return arr;
}

//converts an array to ll
function array_to_ll(arr: number[]): LinkedList{
    let ll: LinkedList = new LinkedList()
    for(let i = arr.length ; i > -1 ; --i){
        insert(ll, new LLNode(arr[i]))
    }
    return ll
}

//sum of the elements of a ll
function ll_sum(head: nodeornull, sum = 0): number | null{
    if(head === null){
        return null;
    }
    sum += head.value;
    if(head.nextval === null){
        return sum;
    }
    return ll_sum(head.nextval, sum)
}

//Demo

let a = new LinkedList();

insert(a, new LLNode(6))
insert(a, new LLNode(7))
insert(a, new LLNode(8))
insert(a, new LLNode(5))
insert(a, new LLNode(7))
console.log(ll_to_array(a))
console.log(extract(a))
console.log(ll_to_array(a))
console.log(ll_sum(a.head))
let b = array_to_ll([1,2,3,4,5])
console.log(ll_to_array(b))