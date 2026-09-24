const array = [1, 568, 7, 4, 51, 8, 4, 85, 15, 834, 78, 64, 894, 351, 984, 584, 68, 985, 258, 9, 74, 85, 4212, 58, 6, 8, 5, 236, 8, 481, 288, 56, 84, 55, 98, 552, 238, 945,
    6879, 8, 556, 12, 23, 5, 78, 56, 44, 2, 487, 5, 4, 57, 24, 87, 5, 78, 98, 5, 45, 215, 42, 65, 4589, 5, 21, 56987, 5]

const findElm = 87;
let found = -1;

for (let i = 0; i < array.length; i++) {
    if (array[i] === findElm) {
        found = i;
        break;
    }


}


if (found !== -1) {
    console.log(`element trouve! `)

} else {
    console.log(`element non trouve! `)
}





console.log(array)



