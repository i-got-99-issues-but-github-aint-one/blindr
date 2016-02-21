import Home from './home';
import Matches from './matches';

export function homeRoute() {
	return {
		getSceneClass() {
			return Home;
		},

		getTitle() {
			return 'Blindr';
		},
	};
}

export function matchesRoute() {
	return {
		getSceneClass() {
			return Matches;
		},

		getTitle() {
			return 'Your Matches';
		},
	};
}
