import React, { Component } from 'react';
import '../App.css';
import { addRecipi, removeFromcalendar } from '../actions'

class App extends Component {
  state = {
    calendar: null
  }

  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {

      this.setState(() => ({
        calendar: store.getState()
      })
      )

    })
  }

  submitFood = () => {
    this.props.store.dispatch(addRecipi({
      day: 'monday',
      meal: 'breakfast',
      recipi: {
        label: this.input.value
      }

    }));

    this.input.value = '';
  }

  input = "Aakash Singh"
  render() {
    return (
      <div className="App">
        <input
          type='text'
          ref={(input) => this.input = input}
          placeholder="Monday's Breakfast"
        >
        </input>
        <button onClick={this.submitFood}>submit</button>

        <pre>
          Mondays's Breakfast: {this.state.calendar && this.state.calendar.monday.breakfast}
        </pre>
      </div>
    );
  }
}

export default App;
