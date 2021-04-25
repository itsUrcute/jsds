//max-heap.
//Use -ve of numbers to use as a min-heap.
class Heap{
    val: Array< number | null > = [ null, 5 ];
};

//sift-up pushes an element up in the heap until the element above it is greater than the element.
function heap_sift_up( heap: Heap, index = heap.val.length - 1 ): void {
    if ( index < 2) return;
    let { val } = heap;
    if ( val[index] > val[Math.floor(index / 2)] ){
        [val[index], val[Math.floor(index / 2)]] = [val[Math.floor(index / 2)], val[index]];
        heap_sift_up( heap, Math.floor(index / 2) );
    }
    else {
        return;
    }
}

//sift-down pushes an element down the heap until the element below it is lesser than the element.
function heap_sift_down(heap: Heap, index: number): void {
    let { val } = heap;
    let a = [val[index * 2], index * 2];
    let b = [val[index * 2 + 1], index * 2 + 1];
    if ( val[index] < a[0] || val[index] < b[0] ){
        let sm = Math.max( a[0], b[0] );
        let i = sm == a[0] ? a[1] : b[1];
        [val[index], val[i]] = [val[i], val[index]];
        heap_sift_down(heap, i);
    }
    else { return; }
}

//inserts an element in the heap and arranges the value using sift-up.
function heap_insert(heap: Heap, a: number): void {
    heap.val.push(a);
    heap_sift_up(heap);
    return;
}

//extracts the first(greatest) element from the heap and arranges the rest of the heap using sift-down
function heap_extract( heap: Heap ): number | null {
    let { val } = heap;
    if (val.length < 2){
        return null;
    }
    let first = val[1];
    val[1] = val.pop();
    heap_sift_down(heap, 1);
    return first;
}

//creates a heap from an array
function create_heap( arr: number[] ): Heap {
    let heap = new Heap;
    for ( let i = 0; i < arr.length; i++){
        heap_insert(heap, arr[i]);
    }
    return heap;
}

let x = create_heap([2, 8, 4, 56, 32, 3, 56, 8, 34, 44, 53, 22, 345]);
console.log(x);
heap_insert(x, 67);
console.log(x);
console.log(heap_extract(x));