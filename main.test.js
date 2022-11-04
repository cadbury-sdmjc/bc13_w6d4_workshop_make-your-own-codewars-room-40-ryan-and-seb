//👉 Write your tests below here:

//!football game//
// Team vs Team
// string as input with goals
// team with most goals returns win
// if same goals its a draw
// offside is lowercase
//e.g liv vs man (LmMLlLM) = 3xliv goals 2xman goals 2x offside
import { jest } from "@jest/globals";
import { result } from "./main.js";

test.each([
  ["LmMLlLM", "L"],
  ["AaIiI", "I"],
  ["cCTt", "Draw"],
  ["LLLLLbB", "L"],
  ["aAMMmm", "M"],
])("match score", function (score, winner) {
  const actual = result(score);
  expect(actual).toBe(winner);
});
