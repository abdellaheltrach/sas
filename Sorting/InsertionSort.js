const array = [1, 568, 7, 4, 51, 8, 4, 85, 15, 834, 78, 64, 894, 351, 984, 584, 68, 985, 258, 9]




for (let i = 1; i < array.length; i++) {

    for (let j = i; j > 0; j--) {

        if (array[j - 1] > array[j]) {
            let temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;
            continue;
        }
        else{
            break;
        }

    }
}



console.log(array)
