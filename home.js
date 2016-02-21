import React, {
	Component,
	Image,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import Button from 'react-native-button';

import {matchesRoute} from './router';
import SwipeableView from './swipeable-view';
import {genUser} from './user-generator';

export default class Home extends Component {
	componentWillMount() {
		this._loadNextUser();
	}

	_loadNextUser() {
		const user = genUser();

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
				source={uri}
				style={styles.image}
			/>
		));

		return (
			<View style={styles.container}>
				<Button
					onPress={() => this._matchesScreen()}
					style={{fontSize: 20, color: 'white', textDecorationLine: 'underline'}}
				>
					{'Your Matches'}
				</Button>
				<View style={{height: 50}} />
				<SwipeableView
					onSwipeComplete={() => this._swiped()}
					style={styles.card}
				>
					<Text style={styles.text}>
						{displayName}
					</Text>
					<View style={styles.images}>
						{[...images]}
					</View>
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
	images: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: 300,
	},
	image: {
		width: 120,
		height: 180,
	},
	text: {
		color: 'white',
	},
});
