// Função para trocar os valores de duas posições em um vetor
const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

// Função para embaralhar os elementos de um vetor
const shuffle = (arr, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
        const index1 = Math.floor(Math.random() * arr.length);
        const index2 = Math.floor(Math.random() * arr.length);
        swap(arr, index1, index2);
    }
};

// Função para ordenar um vetor de inteiros com o algoritmo Bubble Sort
const bubble_sort = (arr) => {
    const n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                swapped = true;
            }
        }
    } while (swapped);
};

// Função para ordenar um vetor de inteiros utilizando o algoritmo Selection Sort
const selection_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(arr, i, minIndex);
        }
    }
};

// Função para ordenar um vetor de inteiros com o algoritmo Quick Sort
const quick_sort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        const pivotIndex = partition(arr, left, right);
        quick_sort(arr, left, pivotIndex - 1);
        quick_sort(arr, pivotIndex + 1, right);
    }
};

// Função de particionamento de apoio ao Quick Sort
const partition = (arr, left, right) => {
    const pivot = arr[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, right);
    return i + 1;
};

// Função para adicionar um valor à lista de valores
const add = () => {
    const valueInput = document.getElementById('valor');
    const value = parseInt(valueInput.value);
    if (!isNaN(value)) {
        const valuesList = document.getElementById('valores');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(value));
        valuesList.appendChild(li);
    }
    valueInput.value = '';
};

// Função para ordenar os valores na lista
const ordenar = () => {
    const valuesList = document.getElementById('valores');
    const values = Array.from(valuesList.children).map(li => parseInt(li.textContent));
    const algorithm = document.getElementById('algoritmo').value;

    switch (algorithm) {
        case 'bubble':
            bubble_sort(values);
            break;
        case 'selection':
            selection_sort(values);
            break;
        case 'quick':
            quick_sort(values);
            break;
        default:
            break;
    }

    // Atualiza a lista de valores ordenados
    valuesList.innerHTML = '';
    values.forEach(value => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(value));
        valuesList.appendChild(li);
    });
};

// Função para misturar os valores na lista
const misturar = () => {
    const valuesList = document.getElementById('valores');
    const values = Array.from(valuesList.children).map(li => parseInt(li.textContent));
    shuffle(values, values.length * 2); // Embaralha o vetor

    // Atualiza a lista de valores misturados
    valuesList.innerHTML = '';
    values.forEach(value => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(value));
        valuesList.appendChild(li);
    });
};