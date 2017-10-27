//1 Rep Max function calculator and Lists for accessory exercises
import React, { Component } from "react";

let oneRepMax = (weight, reps) => {
  return weight * reps * 0.0333 + weight;
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
