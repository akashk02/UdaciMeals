import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { addRecipi, removeFromCalender } from '../actions'


class App extends Component {

  handleThings = () => {
    this.props.dispatch(addRecipi({}))
  }

  render() {
    console.log('props =', this.props);
    return (
      <div >
        Hello World
      </div>
    );
  }
}


function mapStateToProps(calender) {
  const dayOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  return {
    calender: dayOrder.map((day) => (
      {
        day,
        meals: Object.keys(calender[day]).reduce((meals, meal) => {
          meals[meal] = calender[day][meal] ?
            calender[day][meal] :
            null

          return meals;

        }, {})
      }
    ))
  }
}



/**  Alternative Logic */

// function mapStateToProps(calender) {
//   const dayOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
//   return {
//     calender: dayOrder.map((day) => (
//       {
//         day,
//         meals: calender[day] ?
//           calender[day] :
//           {
//             breakfast: null,
//             dinner: null,
//             lunch: null
//           }
//       }
//     ))
//   }
// }

export default connect(mapStateToProps)(App);
