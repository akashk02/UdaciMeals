import {
    ADD_RECIPI,
    REMOVE_FROM_CALENDER
} from '../actions'

const initialCalendarState = {
    sunday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    monday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    tuesday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    wednesday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    thursday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    friday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
    saturday: {
        breakfast: null,
        lunch: null,
        dinner: null,
    },
}

function calender(state = initialCalendarState, action) {
    const { day, recipi, meal } = action;

    switch (action.type) {
        case ADD_RECIPI:
            return {
                ...state,
                [day]: {
                    ...state[day],
                    [meal]: recipi.label
                }
            }

        case REMOVE_FROM_CALENDER:
            return {
                ...state,
                [day]: {
                    ...state[day],
                    [meal]: null
                }
            }

        default: return state;
    }
}

export default calender;