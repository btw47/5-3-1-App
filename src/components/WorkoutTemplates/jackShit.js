import moment from 'moment';

//jackShit4Days needs to be fixed so that it renders 2 workouts per day

function jackShit4Days(props) {
    return [
        {
            title: 'Deadlift',
            allday: true,
            start: moment().weekday(props.day1),
            end: moment().weekday(props.day1),
            desc: "Weight/Reps" + props.deadliftW1D0 + ", " + props.deadliftW1D1 + ", " + props.deadliftW1D2
        },
        {
            title: 'Overhead Press',
            allday: true,
            start: moment().weekday(props.day1),
            end: moment().weekday(props.day1),
            desc: "Weight/Reps" + props.ohpW1D0 + ", " + props.ohpW1D1 + ", " + props.ohpW1D2
        },
        {
            title: 'Squat',
            allday: true,
            start: moment().weekday(props.day1),
            end: moment().weekday(props.day1),
            desc: "Weight/Reps" + props.squatW1D0 + ", " + props.squatW1D1 + ", " + props.squatW1D2
        },
        {

            title: 'Bench Press',
            allday: true,
            start: moment().weekday(props.day1),
            end: moment().weekday(props.day1),
            desc: "Weight/Reps" + props.benchW1D0 + ", " + props.benchW1D1 + ", " + props.benchW1D2
        },
        {
            title: 'Deadlift',
            allday: true,
            start: moment().weekday(props.day1 + 7),
            end: moment().weekday(props.day1 + 7),
            desc: "Weight/Reps" + props.deadliftW2D0 + ", " + props.deadliftW2D1 + ", " + props.deadliftW2D2
        },
        {
            title: 'Overhead Press',
            allday: true,
            start: moment().weekday(props.day1 + 7),
            end: moment().weekday(props.day1 + 7),
            desc: "Weight/Reps" + props.ohpW2D0 + ", " + props.ohpW2D1 + ", " + props.ohpW2D2
        },
        {
            title: 'Squat',
            allday: true,
            start: moment().weekday(props.day1 + 7),
            end: moment().weekday(props.day1 + 7),
            desc: "Weight/Reps" + props.squatW2D0 + ", " + props.squatW2D1 + ", " + props.squatW2D2
        },
        {

            title: 'Bench Press',
            allday: true,
            start: moment().weekday(props.day1 + 7),
            end: moment().weekday(props.day1 + 7),
            desc: "Weight/Reps" + props.benchW2D0 + ", " + props.benchW2D1 + ", " + props.benchW2D2
        },
        {
            title: 'Deadlift',
            allday: true,
            start: moment().weekday(props.day1 + 14),
            end: moment().weekday(props.day1 + 14),
            desc: "Weight/Reps" + props.deadliftW3D0 + ", " + props.deadliftW3D1 + ", " + props.deadliftW3D2
        },
        {
            title: 'Overhead Press',
            allday: true,
            start: moment().weekday(props.day1 + 14),
            end: moment().weekday(props.day1 + 14),
            desc: "Weight/Reps" + props.ohpW3D0 + ", " + props.ohpW3D1 + ", " + props.ohpW3D2
        },
        {
            title: 'Squat',
            allday: true,
            start: moment().weekday(props.day1 + 14),
            end: moment().weekday(props.day1 + 14),
            desc: "Weight/Reps" + props.squatW3D0 + ", " + props.squatW3D1 + ", " + props.squatW3D2
        },
        {

            title: 'Bench Press',
            allday: true,
            start: moment().weekday(props.day1 + 14),
            end: moment().weekday(props.day1 + 14),
            desc: "Weight/Reps" + props.benchW3D0 + ", " + props.benchW3D1 + ", " + props.benchW3D2
        },
        {
            title: 'Deadlift',
            allday: true,
            start: moment().weekday(props.day1 + 21),
            end: moment().weekday(props.day1 + 21),
            desc: "Weight/Reps" + props.deadliftW4D0 + ", " + props.deadliftW4D1 + ", " + props.deadliftW4D2
        },
        {
            title: 'Overhead Press',
            allday: true,
            start: moment().weekday(props.day1 + 21),
            end: moment().weekday(props.day1 + 21),
            desc: "Weight/Reps" + props.ohpW4D0 + ", " + props.ohpW4D1 + ", " + props.ohpW4D2
        },
        {
            title: 'Squat',
            allday: true,
            start: moment().weekday(props.day1 + 21),
            end: moment().weekday(props.day1 + 21),
            desc: "Weight/Reps" + props.squatW4D0 + ", " + props.squatW4D1 + ", " + props.squatW4D2
        },
        {

            title: 'Bench Press',
            allday: true,
            start: moment().weekday(props.day1 + 21),
            end: moment().weekday(props.day1 + 21),
            desc: "Weight/Reps" + props.benchW4D0 + ", " + props.benchW4D1 + ", " + props.benchW4D2
        },
    ];
}

function jackShit3Days(props) {
    return [
        {
            title: 'Deadlift',
            allday: true,
            start: moment().weekday(props.day1),
            end: moment().weekday(props.day1),
            desc: "Weight/Reps" + props.deadliftW1D0 + ", " + props.deadliftW1D1 + ", " + props.deadliftW1D2
        },
        {
            title: 'Overhead Press',
            allday: true,
            start: moment().weekday(props.day1),
            end: moment().weekday(props.day1),
            desc: "Weight/Reps" + props.ohpW1D0 + ", " + props.ohpW1D1 + ", " + props.ohpW1D2
        },
        {
            title: 'Squat',
            allday: true,
            start: moment().weekday(props.day1),
            end: moment().weekday(props.day1),
            desc: "Weight/Reps" + props.squatW1D0 + ", " + props.squatW1D1 + ", " + props.squatW1D2
        },
        {

            title: 'Bench Press',
            allday: true,
            start: moment().weekday(props.day1 + 7),
            end: moment().weekday(props.day1 + 7),
            desc: "Weight/Reps" + props.benchW1D0 + ", " + props.benchW1D1 + ", " + props.benchW1D2
        },
        {
            title: 'Deadlift',
            allday: true,
            start: moment().weekday(props.day1 + 7),
            end: moment().weekday(props.day1 + 7),
            desc: "Weight/Reps" + props.deadliftW2D0 + ", " + props.deadliftW2D1 + ", " + props.deadliftW2D2
        },
        {
            title: 'Overhead Press',
            allday: true,
            start: moment().weekday(props.day1 + 7),
            end: moment().weekday(props.day1 + 7),
            desc: "Weight/Reps" + props.ohpW2D0 + ", " + props.ohpW2D1 + ", " + props.ohpW2D2
        },
        {
            title: 'Squat',
            allday: true,
            start: moment().weekday(props.day1 + 14),
            end: moment().weekday(props.day1 + 14),
            desc: "Weight/Reps" + props.squatW2D0 + ", " + props.squatW2D1 + ", " + props.squatW2D2
        },
        {

            title: 'Bench Press',
            allday: true,
            start: moment().weekday(props.day1 + 14),
            end: moment().weekday(props.day1 + 14),
            desc: "Weight/Reps" + props.benchW2D0 + ", " + props.benchW2D1 + ", " + props.benchW2D2
        },
        {
            title: 'Deadlift',
            allday: true,
            start: moment().weekday(props.day1 + 14),
            end: moment().weekday(props.day1 + 14),
            desc: "Weight/Reps" + props.deadliftW3D0 + ", " + props.deadliftW3D1 + ", " + props.deadliftW3D2
        },
        {
            title: 'Overhead Press',
            allday: true,
            start: moment().weekday(props.day1 + 21),
            end: moment().weekday(props.day1 + 21),
            desc: "Weight/Reps" + props.ohpW3D0 + ", " + props.ohpW3D1 + ", " + props.ohpW3D2
        },
        {
            title: 'Squat',
            allday: true,
            start: moment().weekday(props.day1 + 21),
            end: moment().weekday(props.day1 + 21),
            desc: "Weight/Reps" + props.squatW3D0 + ", " + props.squatW3D1 + ", " + props.squatW3D2
        },
        {

            title: 'Bench Press',
            allday: true,
            start: moment().weekday(props.day1 + 21),
            end: moment().weekday(props.day1 + 21),
            desc: "Weight/Reps" + props.benchW3D0 + ", " + props.benchW3D1 + ", " + props.benchW3D2
        },
        {
            title: 'Deadlift',
            allday: true,
            start: moment().weekday(props.day1 + 28),
            end: moment().weekday(props.day1 + 28),
            desc: "Weight/Reps" + props.deadliftW4D0 + ", " + props.deadliftW4D1 + ", " + props.deadliftW4D2
        },
        {
            title: 'Overhead Press',
            allday: true,
            start: moment().weekday(props.day1 + 28),
            end: moment().weekday(props.day1 + 28),
            desc: "Weight/Reps" + props.ohpW4D0 + ", " + props.ohpW4D1 + ", " + props.ohpW4D2
        },
        {
            title: 'Squat',
            allday: true,
            start: moment().weekday(props.day1 + 28),
            end: moment().weekday(props.day1 + 28),
            desc: "Weight/Reps" + props.squatW4D0 + ", " + props.squatW4D1 + ", " + props.squatW4D2
        },
        {

            title: 'Bench Press',
            allday: true,
            start: moment().weekday(props.day1 + 35),
            end: moment().weekday(props.day1 + 35),
            desc: "Weight/Reps" + props.benchW4D0 + ", " + props.benchW4D1 + ", " + props.benchW4D2
        },
    ]
}

function jackShit2Days(props) {
    return [
        {
            title: 'Deadlift',
            allday: true,
            start: moment().weekday(props.day1),
            end: moment().weekday(props.day1),
            desc: "Weight/Reps" + props.deadliftW1D0 + ", " + props.deadliftW1D1 + ", " + props.deadliftW1D2
        },
        {
            title: 'Overhead Press',
            allday: true,
            start: moment().weekday(props.day1),
            end: moment().weekday(props.day1),
            desc: "Weight/Reps" + props.ohpW1D0 + ", " + props.ohpW1D1 + ", " + props.ohpW1D2
        },
        {
            title: 'Squat',
            allday: true,
            start: moment().weekday(props.day1),
            end: moment().weekday(props.day1),
            desc: "Weight/Reps" + props.squatW1D0 + ", " + props.squatW1D1 + ", " + props.squatW1D2
        },
        {

            title: 'Bench Press',
            allday: true,
            start: moment().weekday(props.day1),
            end: moment().weekday(props.day1),
            desc: "Weight/Reps" + props.benchW1D0 + ", " + props.benchW1D1 + ", " + props.benchW1D2
        },
        {
            title: 'Deadlift',
            allday: true,
            start: moment().weekday(props.day1 + 7),
            end: moment().weekday(props.day1 + 7),
            desc: "Weight/Reps" + props.deadliftW2D0 + ", " + props.deadliftW2D1 + ", " + props.deadliftW2D2
        },
        {
            title: 'Overhead Press',
            allday: true,
            start: moment().weekday(props.day1 + 7),
            end: moment().weekday(props.day1 + 7),
            desc: "Weight/Reps" + props.ohpW2D0 + ", " + props.ohpW2D1 + ", " + props.ohpW2D2
        },
        {
            title: 'Squat',
            allday: true,
            start: moment().weekday(props.day1 + 7),
            end: moment().weekday(props.day1 + 7),
            desc: "Weight/Reps" + props.squatW2D0 + ", " + props.squatW2D1 + ", " + props.squatW2D2
        },
        {

            title: 'Bench Press',
            allday: true,
            start: moment().weekday(props.day1 + 7),
            end: moment().weekday(props.day1 + 7),
            desc: "Weight/Reps" + props.benchW2D0 + ", " + props.benchW2D1 + ", " + props.benchW2D2
        },
        {
            title: 'Deadlift',
            allday: true,
            start: moment().weekday(props.day1 + 14),
            end: moment().weekday(props.day1 + 14),
            desc: "Weight/Reps" + props.deadliftW3D0 + ", " + props.deadliftW3D1 + ", " + props.deadliftW3D2
        },
        {
            title: 'Overhead Press',
            allday: true,
            start: moment().weekday(props.day1 + 14),
            end: moment().weekday(props.day1 + 14),
            desc: "Weight/Reps" + props.ohpW3D0 + ", " + props.ohpW3D1 + ", " + props.ohpW3D2
        },
        {
            title: 'Squat',
            allday: true,
            start: moment().weekday(props.day1 + 14),
            end: moment().weekday(props.day1 + 14),
            desc: "Weight/Reps" + props.squatW3D0 + ", " + props.squatW3D1 + ", " + props.squatW3D2
        },
        {

            title: 'Bench Press',
            allday: true,
            start: moment().weekday(props.day1 + 14),
            end: moment().weekday(props.day1 + 14),
            desc: "Weight/Reps" + props.benchW3D0 + ", " + props.benchW3D1 + ", " + props.benchW3D2
        },
        {
            title: 'Deadlift',
            allday: true,
            start: moment().weekday(props.day1 + 21),
            end: moment().weekday(props.day1 + 21),
            desc: "Weight/Reps" + props.deadliftW4D0 + ", " + props.deadliftW4D1 + ", " + props.deadliftW4D2
        },
        {
            title: 'Overhead Press',
            allday: true,
            start: moment().weekday(props.day1 + 21),
            end: moment().weekday(props.day1 + 21),
            desc: "Weight/Reps" + props.ohpW4D0 + ", " + props.ohpW4D1 + ", " + props.ohpW4D2
        },
        {
            title: 'Squat',
            allday: true,
            start: moment().weekday(props.day1 + 21),
            end: moment().weekday(props.day1 + 21),
            desc: "Weight/Reps" + props.squatW4D0 + ", " + props.squatW4D1 + ", " + props.squatW4D2
        },
        {

            title: 'Bench Press',
            allday: true,
            start: moment().weekday(props.day1 + 21),
            end: moment().weekday(props.day1 + 21),
            desc: "Weight/Reps" + props.benchW4D0 + ", " + props.benchW4D1 + ", " + props.benchW4D2
        },
    ]
};


export { jackShit4Days, jackShit3Days, jackShit2Days }