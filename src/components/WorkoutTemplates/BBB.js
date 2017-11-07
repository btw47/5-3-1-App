import moment from 'moment';
import React from 'react';
import day1 from '../calendar';
import day2 from '../calendar';
import day3 from '../calendar';
import day4 from '../calendar';

function BBB4days(props) {
  return [
    {
      title: 'Deadlift',
      allDay: true,
      start: moment().weekday(props.day1),
      end: moment().weekday(props.day1),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'DeadLift 5x10',
      allDay: true,
      start: moment().weekday(props.day1),
      end: moment().weekday(props.day1),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'Accessory 5x',
      allDay: true,
      start: moment().weekday(props.day1),
      end: moment().weekday(props.day1),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Bench Press',
      allDay: true,
      start: moment().weekday(props.day2),
      end: moment().weekday(props.day2),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Bench Press 5x10',
      allDay: true,
      start: moment().weekday(props.day2),
      end: moment().weekday(props.day2),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Accessory 5x',
      allDay: true,
      start: moment().weekday(props.day2),
      end: moment().weekday(props.day2),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Squat',
      allDay: true,
      start: moment().weekday(props.day3),
      end: moment().weekday(props.day3),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Squat 5x10',
      allDay: true,
      start: moment().weekday(props.day3),
      end: moment().weekday(props.day3),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Accessory 5x',
      allDay: true,
      start: moment().weekday(props.day3),
      end: moment().weekday(props.day3),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Overhead Press',
      allDay: true,
      start: moment().weekday(props.day4),
      end: moment().weekday(props.day4),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Overhead Press 5x10',
      allDay: true,
      start: moment().weekday(props.day4),
      end: moment().weekday(props.day4),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Accessory 5x',
      allDay: true,
      start: moment().weekday(props.day4),
      end: moment().weekday(props.day4),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Deadlift',
      allDay: true,
      start: moment().weekday(props.day1 + 7),
      end: moment().weekday(props.day1 + 7),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'DeadLift 5x10',
      allDay: true,
      start: moment().weekday(props.day1 + 7),
      end: moment().weekday(props.day1 + 7),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'Accessory 5x',
      allDay: true,
      start: moment().weekday(props.day1 + 7),
      end: moment().weekday(props.day1 + 7),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Bench Press',
      allDay: true,
      start: moment().weekday(props.day2 + 7),
      end: moment().weekday(props.day2 + 7),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Bench Press 5x10',
      allDay: true,
      start: moment().weekday(props.day2 + 7),
      end: moment().weekday(props.day2 + 7),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Accessory 5x',
      allDay: true,
      start: moment().weekday(props.day2 + 7),
      end: moment().weekday(props.day2 + 7),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Squat',
      allDay: true,
      start: moment().weekday(props.day3 + 7),
      end: moment().weekday(props.day3 + 7),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Squat 5x10',
      allDay: true,
      start: moment().weekday(props.day3 + 7),
      end: moment().weekday(props.day3 + 7),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Accessory 5x',
      allDay: true,
      start: moment().weekday(props.day3 + 7),
      end: moment().weekday(props.day3 + 7),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Overhead Press',
      allDay: true,
      start: moment().weekday(props.day4 + 7),
      end: moment().weekday(props.day4 + 7),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Overhead Press 5x10',
      allDay: true,
      start: moment().weekday(props.day4 + 7),
      end: moment().weekday(props.day4 + 7),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Accessory 5x',
      allDay: true,
      start: moment().weekday(props.day4 + 7),
      end: moment().weekday(props.day4 + 7),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Deadlift',
      allDay: true,
      start: moment().weekday(props.day1 + 14),
      end: moment().weekday(props.day1 + 14),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'DeadLift 5x10',
      allDay: true,
      start: moment().weekday(props.day1 + 14),
      end: moment().weekday(props.day1 + 14),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'Accessory 5x',
      allDay: true,
      start: moment().weekday(props.day1 + 14),
      end: moment().weekday(props.day1 + 14),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Bench Press',
      allDay: true,
      start: moment().weekday(props.day2 + 14),
      end: moment().weekday(props.day2 + 14),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Bench Press 5x10',
      allDay: true,
      start: moment().weekday(props.day2 + 14),
      end: moment().weekday(props.day2 + 14),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Accessory 5x',
      allDay: true,
      start: moment().weekday(props.day2 + 14),
      end: moment().weekday(props.day2 + 14),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Squat',
      allDay: true,
      start: moment().weekday(props.day3 + 14),
      end: moment().weekday(props.day3 + 14),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Squat 5x10',
      allDay: true,
      start: moment().weekday(props.day3 + 14),
      end: moment().weekday(props.day3 + 14),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Accessory 5x',
      allDay: true,
      start: moment().weekday(props.day3 + 14),
      end: moment().weekday(props.day3 + 14),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Overhead Press',
      allDay: true,
      start: moment().weekday(props.day4 + 14),
      end: moment().weekday(props.day4 + 14),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Overhead Press 5x10',
      allDay: true,
      start: moment().weekday(props.day4 + 14),
      end: moment().weekday(props.day4 + 14),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Accessory 5x',
      allDay: true,
      start: moment().weekday(props.day4 + 14),
      end: moment().weekday(props.day4 + 14),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Deadlift',
      allDay: true,
      start: moment().weekday(props.day1 + 21),
      end: moment().weekday(props.day1 + 21),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'DeadLift 5x10',
      allDay: true,
      start: moment().weekday(props.day1 + 21),
      end: moment().weekday(props.day1 + 21),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'Accessory 5x',
      allDay: true,
      start: moment().weekday(props.day1 + 21),
      end: moment().weekday(props.day1 + 21),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Bench Press',
      allDay: true,
      start: moment().weekday(props.day2 + 21),
      end: moment().weekday(props.day2 + 21),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Bench Press 5x10',
      allDay: true,
      start: moment().weekday(props.day2 + 21),
      end: moment().weekday(props.day2 + 21),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Accessory 5x',
      allDay: true,
      start: moment().weekday(props.day2 + 21),
      end: moment().weekday(props.day2 + 21),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Squat',
      allDay: true,
      start: moment().weekday(props.day3 + 21),
      end: moment().weekday(props.day3 + 21),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Squat 5x10',
      allDay: true,
      start: moment().weekday(props.day3 + 21),
      end: moment().weekday(props.day3 + 21),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Accessory 5x',
      allDay: true,
      start: moment().weekday(props.day3 + 21),
      end: moment().weekday(props.day3 + 21),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Overhead Press',
      allDay: true,
      start: moment().weekday(props.day4 + 21),
      end: moment().weekday(props.day4 + 21),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Overhead Press 5x10',
      allDay: true,
      start: moment().weekday(props.day4 + 21),
      end: moment().weekday(props.day4 + 21),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Accessory 5x',
      allDay: true,
      start: moment().weekday(props.day4 + 21),
      end: moment().weekday(props.day4 + 21),
      desc: 'Fuck Shit Up G'
    }
  ];
}

function BBB3days(props){
  return [
    {
      title: '3x5',
      allDay: true,
      start: moment().weekday(props.day1),
      end: moment().weekday(props.day1),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'DeadLift 3x5',
      allDay: true,
      start: moment().weekday(props.day1),
      end: moment().weekday(props.day1),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'Bench 3x5',
      allDay: true,
      start: moment().weekday(props.day1),
      end: moment().weekday(props.day1),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Military',
      allDay: true,
      start: moment().weekday(props.day1),
      end: moment().weekday(props.day1),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Military',
      allDay: true,
      start: moment().weekday(props.day2),
      end: moment().weekday(props.day2),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'DeadLift 3x5',
      allDay: true,
      start: moment().weekday(props.day2),
      end: moment().weekday(props.day2),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'Bench 3x5',
      allDay: true,
      start: moment().weekday(props.day2),
      end: moment().weekday(props.day2),
      desc: 'Fuck Shit Up G'
    },
    {
      title: '3x5',
      allDay: true,
      start: moment().weekday(props.day2),
      end: moment().weekday(props.day2),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Military',
      allDay: true,
      start: moment().weekday(props.day3),
      end: moment().weekday(props.day3),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'DeadLift 3x5',
      allDay: true,
      start: moment().weekday(props.day3),
      end: moment().weekday(props.day3),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'Bench 3x5',
      allDay: true,
      start: moment().weekday(props.day3),
      end: moment().weekday(props.day3),
      desc: 'Fuck Shit Up G'
    },
    {
      title: '3x5',
      allDay: true,
      start: moment().weekday(props.day3),
      end: moment().weekday(props.day3),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Squat',
      allDay: true,
      start: moment().weekday(props.day1 + 7),
      end: moment().weekday(props.day1 + 7),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'Military 3x5',
      allDay: true,
      start: moment().weekday(props.day1 + 7),
      end: moment().weekday(props.day1 + 7),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'Deadlift 3x3',
      allDay: true,
      start: moment().weekday(props.day1 + 7),
      end: moment().weekday(props.day1 + 7),
      desc: 'Fuck Shit Up G'
    },
    {
      title: '3x3',
      allDay: true,
      start: moment().weekday(props.day1 + 7),
      end: moment().weekday(props.day1 + 7),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Squat',
      allDay: true,
      start: moment().weekday(props.day2 + 7),
      end: moment().weekday(props.day2 + 7),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'Military 3x5',
      allDay: true,
      start: moment().weekday(props.day2 + 7),
      end: moment().weekday(props.day2 + 7),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'Deadlift 3x3',
      allDay: true,
      start: moment().weekday(props.day2 + 7),
      end: moment().weekday(props.day2 + 7),
      desc: 'Fuck Shit Up G'
    },
    {
      title: '3x3',
      allDay: true,
      start: moment().weekday(props.day2 + 7),
      end: moment().weekday(props.day2 + 7),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Squat',
      allDay: true,
      start: moment().weekday(props.day3 + 7),
      end: moment().weekday(props.day3 + 7),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'Military 3x5',
      allDay: true,
      start: moment().weekday(props.day3 + 7),
      end: moment().weekday(props.day3 + 7),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'Deadlift 3x3',
      allDay: true,
      start: moment().weekday(props.day3 + 7),
      end: moment().weekday(props.day3 + 7),
      desc: 'Fuck Shit Up G'
    },
    {
      title: '3x3',
      allDay: true,
      start: moment().weekday(props.day3 + 7),
      end: moment().weekday(props.day3 + 7),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Bench',
      allDay: true,
      start: moment().weekday(props.day1 + 14),
      end: moment().weekday(props.day1 + 14),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'Squat 3x3',
      allDay: true,
      start: moment().weekday(props.day1 + 14),
      end: moment().weekday(props.day1 + 14),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'Military 3x3',
      allDay: true,
      start: moment().weekday(props.day1 + 14),
      end: moment().weekday(props.day1 + 14),
      desc: 'Fuck Shit Up G'
    },
    {
      title: '5/3/1',
      allDay: true,
      start: moment().weekday(props.day1 + 14),
      end: moment().weekday(props.day1 + 14),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Bench',
      allDay: true,
      start: moment().weekday(props.day2 + 14),
      end: moment().weekday(props.day2 + 14),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'Squat 3x3',
      allDay: true,
      start: moment().weekday(props.day2 + 14),
      end: moment().weekday(props.day2 + 14),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'Military 3x3',
      allDay: true,
      start: moment().weekday(props.day2 + 14),
      end: moment().weekday(props.day2 + 14),
      desc: 'Fuck Shit Up G'
    },
    {
      title: '5/3/1',
      allDay: true,
      start: moment().weekday(props.day2 + 14),
      end: moment().weekday(props.day2 + 14),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Bench',
      allDay: true,
      start: moment().weekday(props.day3 + 14),
      end: moment().weekday(props.day3 + 14),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'Squat 3x3',
      allDay: true,
      start: moment().weekday(props.day3 + 14),
      end: moment().weekday(props.day3 + 14),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'Military 3x3',
      allDay: true,
      start: moment().weekday(props.day3 + 14),
      end: moment().weekday(props.day3 + 14),
      desc: 'Fuck Shit Up G'
    },
    {
      title: '5/3/1',
      allDay: true,
      start: moment().weekday(props.day3 + 14),
      end: moment().weekday(props.day3 + 14),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Deadlift',
      allDay: true,
      start: moment().weekday(props.day1 + 21),
      end: moment().weekday(props.day1 + 21),
      desc: 'Fuck Shit up G'
    },
    {
      title: '5/3/1 Bench',
      allDay: true,
      start: moment().weekday(props.day1 + 21),
      end: moment().weekday(props.day1 + 21),
      desc: 'Fuck Shit up G'
    },
    {
      title: '5/3/1 Squat',
      allDay: true,
      start: moment().weekday(props.day1 + 21),
      end: moment().weekday(props.day1 + 21),
      desc: 'Fuck Shit Up G'
    },
    {
      title: '5/3/1',
      allDay: true,
      start: moment().weekday(props.day1 + 21),
      end: moment().weekday(props.day1 + 21),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Deadlift',
      allDay: true,
      start: moment().weekday(props.day2 + 21),
      end: moment().weekday(props.day2 + 21),
      desc: 'Fuck Shit up G'
    },
    {
      title: '5/3/1 Bench',
      allDay: true,
      start: moment().weekday(props.day2 + 21),
      end: moment().weekday(props.day2 + 21),
      desc: 'Fuck Shit up G'
    },
    {
      title: '5/3/1 Squat',
      allDay: true,
      start: moment().weekday(props.day2 + 21),
      end: moment().weekday(props.day2 + 21),
      desc: 'Fuck Shit Up G'
    },
    {
      title: '5/3/1',
      allDay: true,
      start: moment().weekday(props.day2 + 21),
      end: moment().weekday(props.day2 + 21),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Deadlift',
      allDay: true,
      start: moment().weekday(props.day3 + 21),
      end: moment().weekday(props.day3 + 21),
      desc: 'Fuck Shit up G'
    },
    {
      title: '5/3/1 Bench',
      allDay: true,
      start: moment().weekday(props.day3 + 21),
      end: moment().weekday(props.day3 + 21),
      desc: 'Fuck Shit up G'
    },
    {
      title: '5/3/1 Squat',
      allDay: true,
      start: moment().weekday(props.day3 + 21),
      end: moment().weekday(props.day3 + 21),
      desc: 'Fuck Shit Up G'
    },
    {
      title: '5/3/1',
      allDay: true,
      start: moment().weekday(props.day3 + 21),
      end: moment().weekday(props.day3 + 21),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Military/Deadlift',
      allDay: true,
      start: moment().weekday(props.day1 + 28),
      end: moment().weekday(props.day1 + 28),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'Deload Bench',
      allDay: true,
      start: moment().weekday(props.day1 + 28),
      end: moment().weekday(props.day1 + 28),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'Deload Squat',
      allDay: true,
      start: moment().weekday(props.day1 + 28),
      end: moment().weekday(props.day1 + 28),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Deload',
      allDay: true,
      start: moment().weekday(props.day1 + 28),
      end: moment().weekday(props.day1 + 28),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Military/Deadlift',
      allDay: true,
      start: moment().weekday(props.day2 + 28),
      end: moment().weekday(props.day2 + 28),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'Deload Bench',
      allDay: true,
      start: moment().weekday(props.day2 + 28),
      end: moment().weekday(props.day2 + 28),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'Deload Squat',
      allDay: true,
      start: moment().weekday(props.day2 + 28),
      end: moment().weekday(props.day2 + 28),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Deload',
      allDay: true,
      start: moment().weekday(props.day2 + 28),
      end: moment().weekday(props.day2 + 28),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Military/Deadlift',
      allDay: true,
      start: moment().weekday(props.day3 + 28),
      end: moment().weekday(props.day3 + 28),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'Deload Bench',
      allDay: true,
      start: moment().weekday(props.day3 + 28),
      end: moment().weekday(props.day3 + 28),
      desc: 'Fuck Shit up G'
    },
    {
      title: 'Deload Squat',
      allDay: true,
      start: moment().weekday(props.day3 + 28),
      end: moment().weekday(props.day3 + 28),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Deload',
      allDay: true,
      start: moment().weekday(props.day3 + 28),
      end: moment().weekday(props.day3 + 28),
      desc: 'Fuck Shit Up G'
    },
    
  ];
}

function BBB2days(props){
  return[
  {
    title: 'Squat',
    allDay: true,
    start: moment().weekday(props.day1),
    end: moment().weekday(props.day1),
    desc: '5/3/1 sets and reps'
  },
  {
    title: 'Bench',
    allDay: true,
    start: moment().weekday(props.day1),
    end: moment().weekday(props.day1),
    desc: '5/3/1 sets and reps'
  },
  {
    title: 'Accessory 1',
    allDay: true,
    start: moment().weekday(props.day1),
    end: moment().weekday(props.day1),
    desc: 'Chin-ups: 3 sets of 10, Back Raises: 3 sets of 15, Dumbbell Bench Press: 3 sets of 10, Rear Laterals: 3 sets of 20'
  },
  {
    title: 'Accessory 2(optional)',
    allDay: true,
    start: moment().weekday(props.day1),
    end: moment().weekday(props.day1),
    desc: 'Chin-ups: 3 sets of 10, Back Raises: 3 sets of 15, Dumbbell Bench Press: 3 sets of 10, Rear Laterals: 3 sets of 20'
  },
  {
    title: 'Deadlift',
    allDay: true,
    start: moment().weekday(props.day2),
    end: moment().weekday(props.day2),
    desc: '5/3/1 sets and reps'
  },
  {
    title: 'Press',
    allDay: true,
    start: moment().weekday(props.day2),
    end: moment().weekday(props.day2),
    desc: '5/3/1 sets and reps'
  },
  {
    title: 'Accessory 1',
    allDay: true,
    start: moment().weekday(props.day2),
    end: moment().weekday(props.day2),
    desc: 'Dumbbell Rows: 3 sets of 10, Dips: 3 sets of 10-15, Good Mornings: 3 sets of 10, Curls: 3 sets of 10'
  },
  {
    title: 'Accessory 2(optional)',
    allDay: true,
    start: moment().weekday(props.day2),
    end: moment().weekday(props.day2),
    desc: 'Dumbbell Rows: 3 sets of 10, Dips: 3 sets of 10-15, Good Mornings: 3 sets of 10, Curls: 3 sets of 10'
  },
  {
    title: 'Squat',
    allDay: true,
    start: moment().weekday(props.day1 + 7),
    end: moment().weekday(props.day1 + 7),
    desc: '5/3/1 sets and reps'
  },
  {
    title: 'Bench',
    allDay: true,
    start: moment().weekday(props.day1 + 7),
    end: moment().weekday(props.day1 + 7),
    desc: '5/3/1 sets and reps'
  },
  {
    title: 'Accessory 1',
    allDay: true,
    start: moment().weekday(props.day1 + 7),
    end: moment().weekday(props.day1 + 7),
    desc: 'Chin-ups: 3 sets of 10, Back Raises: 3 sets of 15, Dumbbell Bench Press: 3 sets of 10, Rear Laterals: 3 sets of 20'
  },
  {
    title: 'Accessory 2(optional)',
    allDay: true,
    start: moment().weekday(props.day1 + 7),
    end: moment().weekday(props.day1 + 7),
    desc: 'Chin-ups: 3 sets of 10, Back Raises: 3 sets of 15, Dumbbell Bench Press: 3 sets of 10, Rear Laterals: 3 sets of 20'
  },
  {
    title: 'Deadlift',
    allDay: true,
    start: moment().weekday(props.day2 + 7),
    end: moment().weekday(props.day2 + 7),
    desc: '5/3/1 sets and reps'
  },
  {
    title: 'Press',
    allDay: true,
    start: moment().weekday(props.day2 + 7),
    end: moment().weekday(props.day2 + 7),
    desc: '5/3/1 sets and reps'
  },
  {
    title: 'Accessory 1',
    allDay: true,
    start: moment().weekday(props.day2 + 7),
    end: moment().weekday(props.day2 + 7),
    desc: 'Dumbbell Rows: 3 sets of 10, Dips: 3 sets of 10-15, Good Mornings: 3 sets of 10, Curls: 3 sets of 10'
  },
  {
    title: 'Accessory 2(optional)',
    allDay: true,
    start: moment().weekday(props.day2 + 7),
    end: moment().weekday(props.day2 + 7),
    desc: 'Dumbbell Rows: 3 sets of 10, Dips: 3 sets of 10-15, Good Mornings: 3 sets of 10, Curls: 3 sets of 10'
  },
  {
    title: 'Squat',
    allDay: true,
    start: moment().weekday(props.day1 + 14),
    end: moment().weekday(props.day1 + 14),
    desc: '5/3/1 sets and reps'
  },
  {
    title: 'Bench',
    allDay: true,
    start: moment().weekday(props.day1 + 14),
    end: moment().weekday(props.day1 + 14),
    desc: '5/3/1 sets and reps'
  },
  {
    title: 'Accessory 1',
    allDay: true,
    start: moment().weekday(props.day1 + 14),
    end: moment().weekday(props.day1 + 14),
    desc: 'Chin-ups: 3 sets of 10, Back Raises: 3 sets of 15, Dumbbell Bench Press: 3 sets of 10, Rear Laterals: 3 sets of 20'
  },
  {
    title: 'Accessory 2(optional)',
    allDay: true,
    start: moment().weekday(props.day1 + 14),
    end: moment().weekday(props.day1 + 14),
    desc: 'Chin-ups: 3 sets of 10, Back Raises: 3 sets of 15, Dumbbell Bench Press: 3 sets of 10, Rear Laterals: 3 sets of 20'
  },
  {
    title: 'Deadlift',
    allDay: true,
    start: moment().weekday(props.day2 + 14),
    end: moment().weekday(props.day2 + 14),
    desc: '5/3/1 sets and reps'
  },
  {
    title: 'Press',
    allDay: true,
    start: moment().weekday(props.day2 + 14),
    end: moment().weekday(props.day2 + 14),
    desc: '5/3/1 sets and reps'
  },
  {
    title: 'Accessory 1',
    allDay: true,
    start: moment().weekday(props.day2 + 14),
    end: moment().weekday(props.day2 + 14),
    desc: 'Dumbbell Rows: 3 sets of 10, Dips: 3 sets of 10-15, Good Mornings: 3 sets of 10, Curls: 3 sets of 10'
  },
  {
    title: 'Accessory 2(optional)',
    allDay: true,
    start: moment().weekday(props.day2 + 14),
    end: moment().weekday(props.day2 + 14),
    desc: 'Dumbbell Rows: 3 sets of 10, Dips: 3 sets of 10-15, Good Mornings: 3 sets of 10, Curls: 3 sets of 10'
  },
  {
    title: 'Squat',
    allDay: true,
    start: moment().weekday(props.day1 + 21),
    end: moment().weekday(props.day1 + 21),
    desc: '5/3/1 sets and reps'
  },
  {
    title: 'Bench',
    allDay: true,
    start: moment().weekday(props.day1 + 21),
    end: moment().weekday(props.day1 + 21),
    desc: '5/3/1 sets and reps'
  },
  {
    title: 'Accessory 1',
    allDay: true,
    start: moment().weekday(props.day1 + 21),
    end: moment().weekday(props.day1 + 21),
    desc: 'Chin-ups: 3 sets of 10, Back Raises: 3 sets of 15, Dumbbell Bench Press: 3 sets of 10, Rear Laterals: 3 sets of 20'
  },
  {
    title: 'Accessory 2(optional)',
    allDay: true,
    start: moment().weekday(props.day1 + 21),
    end: moment().weekday(props.day1 + 21),
    desc: 'Chin-ups: 3 sets of 10, Back Raises: 3 sets of 15, Dumbbell Bench Press: 3 sets of 10, Rear Laterals: 3 sets of 20'
  },
  {
    title: 'Deadlift',
    allDay: true,
    start: moment().weekday(props.day2 + 21),
    end: moment().weekday(props.day2 + 21),
    desc: '5/3/1 sets and reps'
  },
  {
    title: 'Press',
    allDay: true,
    start: moment().weekday(props.day2 + 21),
    end: moment().weekday(props.day2 + 21),
    desc: '5/3/1 sets and reps'
  },
  {
    title: 'Accessory 1',
    allDay: true,
    start: moment().weekday(props.day2 + 21),
    end: moment().weekday(props.day2 + 21),
    desc: 'Dumbbell Rows: 3 sets of 10, Dips: 3 sets of 10-15, Good Mornings: 3 sets of 10, Curls: 3 sets of 10'
  },
  {
    title: 'Accessory 2(optional)',
    allDay: true,
    start: moment().weekday(props.day2 + 21),
    end: moment().weekday(props.day2 + 21),
    desc: 'Dumbbell Rows: 3 sets of 10, Dips: 3 sets of 10-15, Good Mornings: 3 sets of 10, Curls: 3 sets of 10'
  },
]
}

export {BBB4days, BBB3days, BBB2days};



