const swap = (vetor, i, j) => {
  let troca = vetor[i];
  vetor[i] = vetor[j];
  vetor[j] = troca;
  return vetor;
}

const shuffle = (vetor, quantTrocas) => {
  for (let i = 0; i < quantTrocas; i++) {
    const x = Math.floor(Math.random() * vetor.length);
    const y = Math.floor(Math.random() * vetor.length);
    swap(vetor, x, y);
  }

  return vetor;
};

const bubble_sort = (vetor) => {
  for (let i = 0; i < vetor.length; i++) {

      for (let j = 0; j < (vetor.length - i - 1); j++) {
          if (vetor[j] > vetor[j + 1]) {
              vetor = swap(vetor, j, j + 1);
          }
      }
  }

  return vetor;
}

const selection_sort = (vetor) => {
  const len = vetor.length;
  for (let i = 0; i < len - 1; i++) {
      let minValor = i;
      for (let j = i + 1; j < len; j++) {
          if (vetor[j] < vetor[minValor]) {
              minValor = j;
          }
      }
      if (minValor !== i) {
          swap(vetor, i, minValor);
      }
  }

  return vetor;
};

const quick_sort = (vetor, primeiro, ultimo) => {
  let index;
  if (vetor.length > 1) {
      index = partition(vetor, primeiro, ultimo);
      if (primeiro < index - 1) {
          quick_sort(vetor, primeiro, index - 1);
      }
      if (index < ultimo) {
          quick_sort(vetor, index, ultimo);
      }
  }
  return vetor;
}

const partition = (vetor, primeiro, ultimo) => {

  let pivot = vetor[Math.floor((ultimo + primeiro) / 2)];
  let i = primeiro;
  let j = ultimo;

  while (i <= j) {
      while (vetor[i] < pivot) {
          i++;
      }
      while (vetor[j] > pivot) {
          j++;

      }
      if (i <= j) {
          swap(vetor, i, j);
          i++;
          j++
      }
  }
  return i;
}


