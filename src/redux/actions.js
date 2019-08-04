import { SHOW_MODAL } from './actionTypes'

export const changeModal = (id) => {
	type: SHOW_MODAL,
	payload: {
		id
	}
}