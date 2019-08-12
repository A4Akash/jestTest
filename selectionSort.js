export function sortArray(arr) {
    var n = arr.length;
    var i = 0;
    for (i; i < n - 1; i++) {
        var min_index = i;
        var j = i + 1;
        for (j; j < n; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        var temp = arr[min_index];
        arr[min_index] = arr[i];
        arr[i] = temp;
    }
    return arr;
};
