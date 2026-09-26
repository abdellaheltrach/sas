"Consigne : écrivez un programme qui trouve la plus longue sous-séquence de nombres strictement croissants dans le tableau ci-dessous, et affiche sa longueur ainsi que les nombres qui la composent."
const array = [3, 10, 2, 1, 20, 4, 5, 6, 1, 8, 9, 10, 11];


let maxSome = 0;
let totalElementInMax = 0;

for (let i = 0; i < array.length; i++) {

    let some = array[i];
    console.log(array[i]);
    let countElements = 1;
    for (let j = i; j < array.length; j++) {

        if (array[j] < array[j + 1]) {
            some += array[j+1];
            countElements++;

        } else {
            if(maxSome<some){
                maxSome=some;
                totalElementInMax = countElements;

            }

            i =j;
            break;
        }


    }


}



console.log(`Somme de la plus longue sous-séquence : ${maxSome}`);
console.log(`Nombres la element : ${totalElementInMax}`);