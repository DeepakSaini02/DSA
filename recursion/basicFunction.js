// print n to 1

function printCount(n){

    function rec(x){
        if(x<=0)
        return

        console.log(x);
         rec(x-1)
    }
    rec(n)
}

// print 1 to n
function printCount(n){

    function rec(x){
        if(x<=0)
        return

         rec(x-1)
        console.log(x);
    }
    rec(n)
}

printCount(10)


// Sum of first N Natural Numbers

function sumFirstNatural(n){
    let sum=0
    function rec(val){
        if(val<=0)
        return 

        sum+=val
        rec(val-1)
    }
    rec(n)
    console.log(sum);
}

sumFirstNatural(5)

// factorial

function fact(n) {

    function rec(x) {
        if (x <= 1)
            return x

        return x * rec(x - 1)
    }
    let t = rec(n)
    console.log(t);
}
fact(5)


// reverse an array 

function rev(n,arr){
    /**
     * we have 1 2 3 4 5 first step 
     */
    function rec(n,arr){
        if(n<=1)
        return 

        const removeValue=arr.pop()
        rec(n-1,arr)
        arr.unshift(removeValue)
    }
    rec(n,arr)
    console.log(arr);
}

rev(5,[1,2,3,4,5])

