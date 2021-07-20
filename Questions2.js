let PairNumbers = (array, number) => {
    let low = 0;
    let high = arr.length - 1;
    while (low < high) {

        if (arr[low] + arr[high] > number) {
            high--;
        } else if (arr[low] + arr[high] < number) {
            low++;
        } else if (arr[low] + arr[high] == number) {
            console.log("" + arr[low] + " + " + arr[high] + " ");
            low++;
            high--;
        }
    }
}

let arr = [1, 2, 3, 4, 5];
PairNumbers(arr, 7);