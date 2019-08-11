import { SHOW_MODAL } from './actionTypes'

export const changeModal = (id) => {
	return ({
		type: SHOW_MODAL,
		payload: {
			id
		}
	})
}