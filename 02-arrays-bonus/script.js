const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];
//Proviamo a farlo senza usare semplicemente reverse()
for (let i = teachers.length - 1; i >= 0; i--) { // Scorro al contrario l'array, 
  // partendo dall'indice dell'ultimo elemento e fermandomi all'indice 0
  reversedTeachers.push(teachers[i]); // Aggiungo teachers[i] 
  // (Quindi i valori di teachers, partendo dall'ultimo fino al primo) all'interno di reversedTeachers
}

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = null;

// 3. Rimuovi 'Ed' dall'array teachers

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = null;

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;