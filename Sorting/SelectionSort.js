const array = [1, 568, 7, 4, 51, 8, 4, 85, 15, 834, 78, 64, 894, 351, 984, 584, 68, 985, 258, 9]




for (let i = 0; i < array.length; i++) {

    let minValueIndex = i;

    for (let j = i; j < array.length; j++) {
        if (array[minValueIndex] > array[j]) {
            minValueIndex = j;
        }
    }

    let temp = array[minValueIndex]
    array[minValueIndex] = array[i]
    array[i] = temp
}



console.log(array)
