
for (let i = 0; i <= 4; i++) {
    string = "";

    for (let j = 1; j <= i; j++) {

        if (j % 2 === 0) {

            string += `(${j})`;
        }
        else {
            string += `${j}`;
        }

    }

    console.log(string)
}