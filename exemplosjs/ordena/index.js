var listaNumeros = [];

function add() {
  var input = document.getElementById("valor");
  var ul = document.getElementById("valores");
  var newEl = document.createElement("li");
  newEl.innerText = input.value;
  listaNumeros.push(Number(input.value));
  ul.appendChild(newEl);
  console.log(input);
}

function ordenar() {

  //verifica opcao no select
  var sort = document.getElementById("sort");
  console.log(sort.value);

  switch (sort.value) {
    case "blubble":
      bubbleSort(listaNumeros);
    case "selection":
      selectionSort(listaNumeros);
    case "quick":
      quickSort(listaNumeros, 0, listaNumeros.length - 1);
  }
}

function misturar() {}

function bubbleSort(lista) {
  //Inicio da ordenacao do Bubble Sort
  let copia;
  let troca;
  do {
    troca = 0;
    for (let i = 0; i < lista.length - 1; i++) {
      if (lista[i] > lista[i + 1]) {
        copia = lista[i];
        lista[i] = lista[i + 1];
        lista[i + 1] = copia;
        troca = 1;
      }
    }
  } while (troca);
  //Finaliza Bubble Sort e gera uma lista ordenada
  reordenaUL(lista);
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    let aux;
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i != min) {
      aux = arr[i];
      arr[i] = arr[min];
      arr[min] = aux;
    }
  }

  reordenaUL(arr);
}

function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
      index = partition(items, left, right); //index returned from partition
      if (left < index - 1) { //more elements on the left side of the pivot
          return quickSort(items, left, index - 1);
      }
      if (index < right) { //more elements on the right side of the pivot
          return quickSort(items, index, right);
      }
  }
  reordenaUL(items);
}

function swap(items, leftIndex, rightIndex){
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

function reordenaUL(lista) {
  var ul = document.getElementById("valores");
  ul.innerText = ""; //apaga tudo dentro da tag <ul>

  //Adiciona li da lista ordenada dentor de ul
  for (var i = 0; i < lista.length; i++) {
    var newEl = document.createElement("li");
    newEl.innerText = lista[i];
    ul.appendChild(newEl);
  }
}
