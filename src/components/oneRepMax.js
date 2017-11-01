//1 Rep Max function calculator and Lists for accessory exercises
import React, { Component } from "react";

let oneRepMax = (weight, reps) => {
  return (weight * reps * 0.0333 + weight) * 0.9;
};

const coreLifts = [
  "Deadlift",
  "Bench Press",
  "Squat",
  "Standing Military Press"
];

//const assistanceTemplates

const squattingExercises = ["front squat", "safety bar squat", "box squat"];

const pullingExercises = [
  "straight leg deadlift",
  "good morning",
  "trap bar deadlift",
  "rack/block deadlift"
];

const pressingExercises = [
  "log press",
  "log bench press",
  "close-grip bench press",
  "incline press",
  "floor press",
  "2-board press"
];

// weeklyTemplate = (oneRepMax, numWeeks = 4, numSets = 3) => {
//   var template = [];
//   for (var i = 0; i < numWeeks; i++) {
//     template[i] = [];

//     for (var j = 0; j < numSets; j++) {
//       template[i][j] = oneRepMax * 0.65 + " x 5";
//     }
//   }
//   /*
//   [...new Array(numWeeks)].map((v,week) => {
//     [...new Array(numSets)].map((w,set) => {
//         return (oneRepMax*0.65 + " x 5")
//     })

//     }*/
//   return template;
// };
