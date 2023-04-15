// Bubble Sort Algorithm
// Problem Statement: Given an array of N integers, write a program to implement the Bubble Sorting algorithm.


// Example 1:
// Input: N = 6, array[] = {13,46,24,52,20,9}
// Output: 9,13,20,24,46,52
// Explanation: After sorting we get 9,13,20,24,46,52


// Input: N = 5, array[] = {5,4,3,2,1}
// Output: 1,2,3,4,5
// Explanation: After sorting we get 1,2,3,4,5



function bubbleSort(arr, n) {

    for (let i = 0; i < n-1; i++) {
        let flag = 0
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                flag = 1
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
        if (flag == 0)
            break
    }
    console.log(arr.join(" "));
    return arr.join(" ")
}

bubbleSort([1, 2, 3, 5, 4], 5)