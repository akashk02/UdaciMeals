import React, { Component } from 'react';
//import '../App.css';
import { connect } from 'react-redux'
import { addRecipi, removeFromCalender } from '../actions'
import { capitalize } from '../utils/helper'
import CalendarIcon from 'react-icons/lib/fa/calendar-plus-o'

class App extends Component {


  render() {
    console.log('props =', this.props);
    const { calender, remove } = this.props;
    const mealOrder = ['breakfast', 'lunch', 'dinner'];

    return (
      <div className='container'>
        <ul className='meal-types'>
          {mealOrder.map((mealType) => (
            <li key={mealType} className='subheader'>
              {capitalize(mealType)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}


function mapStateToProps({ calender }, { food }) {
  const dayOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  return {
    calender: dayOrder.map((day) => (
      {
        day,
        meals: Object.keys(calender[day]).reduce((meals, meal) => {
          meals[meal] = calender[day][meal] ?
            food[calender[day][meal]] :
            null

          return meals;

        }, {})
      }
    ))
  }
}

function mapDispactToProps(dispatch) {
  return {
    selectRecipi: (data) => (addRecipi(data)),
    remove: (data) => (removeFromCalender(data))

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

export default connect(mapStateToProps, mapDispactToProps)(App);
