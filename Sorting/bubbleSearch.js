const array = [1, 568, 7, 4, 51, 8, 4, 85, 15, 834, 78, 64, 894, 351, 984, 584, 68, 985, 258, 9]




for (let i = 0; i < array.length - i; i++) {

    for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j]; //586
            array[j] = array[j + 1];//7
            array[j + 1] = temp;


        }

    }


}

console.log(array)



