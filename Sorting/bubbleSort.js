// const array = [1, 568, 7, 4, 51, 8, 4, 85, 15, 834, 78, 64, 894, 351, 984, 584, 68, 985, 258, 9]

const array = [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]


for (let i = 0; i < array.length; i++) {

    for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j]; 
            array[j] = array[j + 1];
            array[j + 1] = temp;


        }

    }


}

console.log(array)



