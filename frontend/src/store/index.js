import { configureStore } from '@reduxjs/toolkit';
import Cookie from 'js-cookie';

const mainReducer = (
	prevState = {
		user: {
			name: Cookie.get('name') || 'Антонина',
			avatar: Cookie.get('avatar') || 'avatar.png',
			role: Cookie.get('role') || 'methodist'
		}
	},
	action
) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_ROLE':
			Cookie.set('role', payload);
			return {
				...prevState,
				user: {
					...prevState.user,
					role: payload
				}
			};
		default:
			return prevState;
	}
};

export default configureStore({ reducer: mainReducer });
