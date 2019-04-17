
export const ADD_RECIPI = 'ADD_RECIPI';
export const REMOVE_FROM_CALENDER = 'REMOVE_FROM_CALENDER';

export function addRecipi({ day, recipi, meal }) {
    return {
        type: ADD_RECIPI,
        day,
        recipi,
        meal
    }
}

export function removeFromCalender({ day, meal }) {
    return {
        type: REMOVE_FROM_CALENDER,
        day,
        meal
    }
}