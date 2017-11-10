import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

class Calculator extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    submitted: false
  };

  componentWillMount() {
    if (this.props.state.OneRep.calculatedMax) {
      this.setState({ submitted: true });
    }
  }

  componentDidMount() {
    if (!this.state.Bench) {
      this.refs.BenchWeight.focus();
    }
  }

  oneRepMax = (weight, reps) => {
    let max = (weight * reps * 0.0333 + weight) * 0.9;
    return Math.ceil(max);
  };

  onCalculate = event => {
    this.setState({
      Bench: this.oneRepMax(
        parseInt(this.refs.BenchWeight.value),
        parseInt(this.refs.BenchReps.value)
      ),
      Overhead: this.oneRepMax(
        parseInt(this.refs.OverheadWeight.value),
        parseInt(this.refs.OverheadReps.value)
      ),
      Deadlift: this.oneRepMax(
        parseInt(this.refs.DeadliftWeight.value),
        parseInt(this.refs.DeadliftReps.value)
      ),
      Squat: this.oneRepMax(
        parseInt(this.refs.SquatWeight.value),
        parseInt(this.refs.SquatReps.value)
      )
    });
  };

  FillinStats = event => {
    // this.bench.value = this.state.Bench;
    // this.Overheadlift.value = this.state.Overhead;
    // this.Deadlift.value = this.state.Deadlift;
    // this.Squat.value = this.state.Squat;

    this.props.setORM(
      this.state.Bench,
      this.state.Overhead,
      this.state.Deadlift,
      this.state.Squat
    );
  };

  renderMaxes = () => {
    if (this.state.Bench) {
      return (
        <div>
          <h4>Bench: {this.state.Bench}</h4>
          <h4>Overhead: {this.state.Overhead}</h4>
          <h4>Deadlift: {this.state.Deadlift}</h4>
          <h4>Squat: {this.state.Squat}</h4>
          <button
            type="button"
            className="btn btn-primary"
            onClick={event => this.FillinStats(event)}>
            <span className="md-" /> Fill in stats
          </button>
          <button
            type="button"
            className="btn"
            style={{ float: 'right' }}
            onClick={() => {
              this.setState({
                Bench: null,
                Overhead: null,
                Deadlift: null,
                Squat: null
              });
            }}>
            <span className="sm">back</span>
          </button>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {!this.state.Bench && (
          <div>
            <label>Bench Press</label>
            <br />
            <input type="text" placeholder="Weight" ref="BenchWeight" />
            <input type="text" placeholder="Reps" ref="BenchReps" />
            <br />
            <label>Overhead Press</label>
            <br />
            <input type="text" placeholder="Weight" ref="OverheadWeight" />
            <input type="text" placeholder="Reps" ref="OverheadReps" />
            <br />
            <label>Deadlift</label>
            <br />
            <input type="text" placeholder="Weight" ref="DeadliftWeight" />
            <input type="text" placeholder="Reps" ref="DeadliftReps" />
            <br />
            <label>Squat</label>
            <br />
            <input type="text" placeholder="Weight" ref="SquatWeight" />
            <input type="text" placeholder="Reps" ref="SquatReps" />
            <br />
            <button
              type="button"
              className="btn btn-primary"
              onClick={event => this.onCalculate(event)}>
              <span className="md-" /> Calculate
            </button>
          </div>
        )}
        <div>{this.renderMaxes()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
