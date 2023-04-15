// Selection Sort Algorithm
// Problem Statement: Given an array of N integers, write a program to implement the Selection sorting algorithm.

// Example 1:
// Input: N = 6, array[] = {13,46,24,52,20,9}
// Output: 9,13,20,24,46,52
// Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52

// Example 2:
// Input: N=5, array[] = {5,4,3,2,1}
// Output: 1,2,3,4,5
// Explanation: After sorting the array is: 1, 2, 3, 4, 5


/**
 * select minimum and swap
 * 
 * 13 46 24 52 20 9
 * 
 * take arr[0] as minimum
 * 
 * compare from i+1 to n and find minimum got 9
 * now swap 13 and 9 
 * 9 46 24 52 20 13 
 * 
 * after 1st iteration first element is on its place 
 * 
 * we use selection sort in pagination mostly
 */

function selectionSort(arr, n) {

    for (let i = 0; i < n-1; i++) {
        let min = i
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min])
                min = j
        }
        if (min != i) {
            let temp = arr[min]
            arr[min] = arr[i]
            arr[i] = temp
        }
    }
    console.log(arr.join(" "));
    return arr.join(' ')
}
selectionSort([3, 2, 1, 5, 4], 5)