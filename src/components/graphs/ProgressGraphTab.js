import React, { Component } from 'react';
import DumbGraph from './DumbAreaGraph';
import { Tab } from 'react-bootstrap';

class ProgressGraphTab extends Component {
  calculateGains = () => {
    if (this.props.currentStats.ormBench) {
      const { currentStats, oldStats, stat } = this.props;
      const currStat = currentStats[stat];
      const oldStat = oldStats[stat];
      const smallDate = oldStats.date.split(' ').slice(1, 3);
      const joinDate = smallDate.join(' ');
      const fullDate = `${joinDate}, ${oldStats.date.split(' ').slice(3, 4)}`;

      const diff = currStat - oldStat;
      const percentDiff = (diff / oldStat * 100).toFixed(2);

      return (
        <table
          class="table table-bordered"
          style={{ width: '95vw', margin: 'auto' }}>
          <thead>
            <tr>
              <th />
              <th style={{ 'text-align': 'center' }}>Day One ({fullDate})</th>
              <th style={{ 'text-align': 'center' }}>Present</th>
              <th style={{ 'text-align': 'center' }}>Percent Gain (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" style={{ 'text-align': 'center' }}>
                Weight
              </th>
              <td>{oldStat} lbs</td>
              <td>{currStat} lbs</td>
              <td>{percentDiff}%</td>
            </tr>
          </tbody>
        </table>
      );
    }
  };

  render() {
    console.log('TAB PROPS', this.props);

    return (
      <Tab eventKey={this.props.eventKey} title={this.props.title}>
        <div class="card">
          <DumbGraph
            title={this.props.title}
            data={this.props.data}
            dataKey={this.props.dataKey}
            height={this.props.height}
            color={this.props.color}
          />
          <hr />
          <div class="card-block" style={{ 'text-align': 'center' }}>
            <h2>See your progress below!</h2>
            <br />
            {this.calculateGains()}
            <br />
          </div>
        </div>
      </Tab>
    );
  }
}

export default ProgressGraphTab;
