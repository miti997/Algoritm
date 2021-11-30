const itterate = () => {
    let array = [1,2,3];
    let counter = 1;
    let arrayResults = [];
    while (counter < 6) {
        let removedElements = 0;
        if (array.length > 1) {
            array.forEach(function() {
                console.log(removedElements);
                if (removedElements+1 in array) {
                    if (counter % 2 == 0) {
                        arrayResults.push(array[removedElements] * array[removedElements+1]);
                        removedElements += 2;
                    } else {
                        arrayResults.push(array[removedElements] + array[removedElements+1]);
                        removedElements += 2;
                    }
                }

            });

            if (array.length % 2 != 0) {
                arrayResults.push(array[array.length-1]);
            }
        
            arrayResults = arrayResults.filter(function( element ) {
                return element !== undefined;
            });
            console.log(arrayResults);

            array = arrayResults;
            arrayResults = [];
            removedElements = 0;
        }

        counter ++;
        console.log(array);
    }
}