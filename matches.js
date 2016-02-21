import React, {
	Component,
	Image,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import {genUser, genImage} from './user-generator';

function gen() {
	const user = genUser();
	user.image = genImage();
	return user;
}

export default class Matches extends Component {
	constructor(props) {
		super(props);

		// todo: generate users
		this.users = [
			gen(),
			gen(),
			gen(),
			gen(),
			gen(),
			gen(),
			gen(),
			gen(),
			gen(),
		];
	}

	render() {
		const matches = this.users.map((user, i) => (
			<View
				key={`user-${i}`}
				style={styles.row}
			>
				<Image source={user.image} />
				<Text>{user.name}</Text>
			</View>
		));

		return (
			<View style={styles.container}>
				{[...matches]}
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
	row: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 200,
	},
});
