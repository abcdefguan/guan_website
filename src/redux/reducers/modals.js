import { SHOW_MODAL } from './../actionTypes'

//Indicates ID of modal to display, -1 when no modal displayed
const initState = -1;

export const modal = (state = initState, action) => {
	switch (action.type){
		case SHOW_MODAL: {
			return action.payload.id
		}
		default:
			return state
	}
}