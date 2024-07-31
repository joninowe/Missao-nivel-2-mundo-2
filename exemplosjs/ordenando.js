// Creating the bblSort function
bubble_sort = (vet3) => {
    
    for(var i = 0; i < vet3.length; i++){
       
      // Last i elements are already in place 
      for(var j = 0; j < ( vet3.length - i -1 ); j++){
         
        // Checking if the item at present iteration
        // is greater than the next iteration
        if(vet3[j] > vet3[j+1]){
           
          // If the condition is true then swap them
          var temp = vet3[j]
          vet3[j] = vet3[j + 1]
          vet3[j+1] = temp
        }
      }
    }
    // Print the sorted vet3ay
    return vet3;
};


teste = () => {
    return alert('teste');
}

swap = (vet, pos1, pos2) => {
	let valor1 = vet[pos1]
    let valor2 = vet[pos2]
    vet[pos1] = valor2;
    vet[pos2] = valor1;
    return (vet);
}

shuffle = (vetor) => {
var i = vetor.length, j, temp;
while (--i > 0) {
    j = Math.floor(Math.random() * (i+1));
    temp = vetor[j];
    vetor[j] = vetor[i];
    vetor[i] = temp;
}
return (vetor);
}

// Função selectionSort

function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return (inputArr);
};

// Função quick_sort e particionamento

function swap2(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}


/*

<script>

    var vet = [1,2,3,4,5,6,7,8,9,10];
    swap = (vet, pos1, pos2) => {
        valor1 = vet[pos1]
        valor2 = vet[pos2]
        vet[pos1] = valor2;
        vet[pos2] = valor1;
        return (vet);
    }

    document.getElementById("documento").innerHTML = swap(vet, 0, 3);


    var vet2 = [1,2,3,4,5,6,7,8,9,10];
    shuffle = (vetor, giros) => {
    var i = giros, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (vetor.length));
        alert(j);
        temp = vetor[j];
        vetor[j] = vetor[i];
        vetor[i] = temp;
    }
    return (vetor);
    }

document.getElementById("documento2").innerHTML = shuffle(vet2,3);

    </script>
*/