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
      start: moment().weekday(day2 + 14),
      end: moment().weekday(props.day2 + 14),
      desc: 'Fuck Shit Up G'
    },
    {
      title: 'Accessory 5x',
      allDay: true,
      start: moment().weekday(props.day2 + 14),
      end: moment().weekday(day2 + 14),
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

export default BBB4days;
