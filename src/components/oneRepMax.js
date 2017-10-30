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

weeklyTemplate = (oneRepMax, numWeeks = 4, numSets = 3) => {
  var template = [];
  for (var i = 0; i < numWeeks; i++) {
    template[i] = [];

    for (var j = 0; j < numSets; j++) {
      template[i][j] = oneRepMax * 0.65 + " x 5";
    }
  }
  /*
  [...new Array(numWeeks)].map((v,week) => {
    [...new Array(numSets)].map((w,set) => {
        return (oneRepMax*0.65 + " x 5")
    })
   
    }*/
  return template;
};

weeklyTemplate = oneRepMax => {
  const t = ({ percent, reps }) =>
    `${Math.round(percent * oneRepMax)} x ${reps}`;
  //const t = ({ percent, reps }) => `${Math.round(percent * oneRepMax)}${unit} x ${reps}`;
  return [
    // week 1
    [
      t({ percent: 0.65, reps: 5 }),
      t({ percent: 0.75, reps: 5 }),
      t({ percent: 0.85, reps: "5+" })
    ],
    // week 2
    [
      t({ percent: 0.7, reps: 3 }),
      t({ percent: 0.8, reps: 3 }),
      t({ percent: 0.9, reps: "3+" })
    ],
    // week 3
    [
      t({ percent: 0.75, reps: 5 }),
      t({ percent: 0.85, reps: 3 }),
      t({ percent: 0.95, reps: "1+" })
    ],
    // week 4
    [
      t({ percent: 0.4, reps: 5 }),
      t({ percent: 0.5, reps: 5 }),
      t({ percent: 0.6, reps: "only 5" })
    ]
  ];
};

console.log(weeklyTemplate(100));

//week 1 (65% x 5) (75% x 5) (85% x 5+)
//week 2 (70% x 3) (80% x 3) (90% x 3+)
//week 3 (75% x 5) (85% x 3) (95% x 1+)
//week 4 (40% x 5) (50% x 5) (60% x 5)
