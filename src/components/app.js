import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

const VISIBILITY_FILTERS = {
	ALL: 'all',
	COMPLETED: 'completed',
	INCOMPLETE: 'incomplete'
};
  

const initialState = VISIBILITY_FILTERS.ALL;

const SET_FILTER = 'SET_FILTER';

const visibilityFilter = (state = initialState, action) => {
	switch (action.type) {
		case SET_FILTER: {
			return action.payload.filter;
		}
		default: {
			return state;
		}
	}
};

const rootReducer = combineReducers({ visibilityFilter });
const store = createStore(rootReducer);

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<Provider store={store}>
				<div id="app">
					<Header />
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Profile path="/profile/" user="me" />
						<Profile path="/profile/:user" />
					</Router>
				</div>
			</Provider>
		);
	}
}
