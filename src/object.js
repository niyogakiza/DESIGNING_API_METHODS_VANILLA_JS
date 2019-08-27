const students = {
  amelia: 20,
  beatrice: 22,
  cece: 20,
  lea: 19,
  john: 21
};

Object.entries(students);
// [
//  [ 'amelia', 20 ],
//  [ 'beatrice', 22 ],
//  [ 'cece', 20 ],
//  [ 'lea', 19 ],
//  [ 'john', 21 ]
// ]

/** Convert to array in order to make use of .filter() function */
let overTwentyOne = Object.entries(students).filter(([name, age]) => {
  return age >= 21;
}); // [['beatrice', 22], ['john', 21 ]]

// Turn multidimensional array back into an object
// let DrinkingAgeStudents = {}
// for (let [name, age] of overTwentyOne) {
//   DrinkingAgeStudents[name] = age
// } // { beatrice: 22, john : 21 }

// use of Object.fromEntries
let DrinkingAgeStudents = Object.fromEntries(overTwentyOne); // { beatrice: 22, john : 21 }

let children = [
  ["amelia", 22],
  ["beatrice", 22],
  ["cece", 20],
  ["lea", 19],
  ["john", 21]
];

let childrenObj = Object.fromEntries(children); // { beatrice: 22, cece: 20, lea: 19, john: 21 } dropped amelia because has the same key as beatrice

s;
