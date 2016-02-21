import React, {
	Component,
	Image,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import UserGenerator from './user-generator';

export default class Matches extends Component {
	constructor(props) {
		super(props);

		// todo: generate users
		this.users = UserGenerator();
	}

	render() {
		const matches = this.users.map((user, i) => (
			<View
				key={`user-${i}`}
				styles={styles.row}
			>
				<Image source={require(`./${user.images[0]}`)} />
				<Text>{'blah'}</Text>
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
	},
});
