import React, { Component } from 'react';
import '../css/Dashboard.css';
import axios from 'axios'

export default class WorkoutApi extends Component {
    state = {
        exercise: {}
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const ta = this.refs.textarea.value;
        console.log("TA", ta)
        const exerciseUrl = `https://wger.de/api/v2/exercise/search/?term=${ta}`
        console.log("URLLLL", exerciseUrl);
        const axiosReq = axios.get(exerciseUrl).then(res => console.log(res)).catch(error => console.log('error', error));
        console.log('AXXXX', axiosReq);
        // console.log("QUERY", )
        this.refs.textarea.value = ''

    }


    render() {
        const exercise = this.state.exercise;

        return (
            <div>
                <div className='workoutApi'>
                    <h1>Exercise image search</h1>
                    <p>Don't know how to do a specific exercise? Try entering the name of the exercise in our search and get an image of what the exercise looks like.</p>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type='textarea' ref='textarea' />
                        {/* ref allows you to id the input and reset it in the handleSubmit function */}
                        <button>Search Exercises</button>
                    </form>
                    <br />
                    <div>
                        <label className='workoutApi'>Here is the exercise image that you requested:</label>
                        {/* <span>{exercise}</span> */}
                    </div>
                </div>
            </div>
        )
    }
}