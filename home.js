import React, {
	Component,
	Image,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import {matchesRoute} from './router';
import SwipeableView from './swipeable-view';
import UserGenerator from './user-generator';

export default class Home extends Component {
	componentWillMount() {
		this._loadNextUser();
	}

	_loadNextUser() {
		const user = UserGenerator();

		this.setState({ user });
	}

	_swiped(direction) {
		if (direction === SwipeableView.swipeDirection.right) {
			this._loadNextUser();
		} else {
			this._loadNextUser();
		}
	}

	_matchesScreen() {
		const route = matchesRoute();
		this.props.navigator.push(route);
	}

	render() {
		const u = this.state.user;

		const displayName = `${u.name} (${u.age})`;

		const images = u.images.map((uri, i) => (
			<Image
				key={`image-${i}`}
				resizeMode='contain'
				source={{uri}}
				style={styles.image}
			/>
		));

		return (
			<View style={styles.container}>
				<SwipeableView
					onSwipeComplete={this._swiped.bind(this)}
					style={styles.card}
				>
					<Text style={styles.text}>
						{displayName}
					</Text>
					{[...images]}
				</SwipeableView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#3b417f',
	},
	card: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: 320,
		height: 300,
	},
	text: {
		color: 'white',
	},
});