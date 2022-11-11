import { jest } from "@jest/globals";

/* 
👉 Write your kata here!
Its super sunday! The premier league is kicking off this fine evening!
We've got some cracking games on today coming from the north all the way to the south.
Right Jeff heres what you've got to do;
Write a function that works out the scoree from the strings provided
Rules: 
Capital letters are a goal
Lower case letters are offside 
For example "MmmMEee" would equal two goals for "M" and one for "E" resulting in "M" taking the win.
Return example: "M" or "Draw"  
*/

//👉 Write the function your CodeWarriors will start with below here:

export function result(score) {
  let results = {};
  for (let i = 0; i < score.length; i++) {
    if (/[A-Z]/.test(score[i])) {
      const team = score[i];
      if (typeof results[team] === "number") {
        results[team]++;
      } else {
        results[team] = 0;
      }
    }
  }

  const askvpArray = Object.keys(results).map((key) => {
    return { key, score: results[key] };
  });
  const uniqueScores = askvpArray.map((k) => k.score).filter((v, i, s) => s.indexOf(v) === i);
  if (uniqueScores.length == 1) {
    return "Draw";
  }
  return askvpArray.sort((a, b) => b.score - a.score)[0].key;
}
