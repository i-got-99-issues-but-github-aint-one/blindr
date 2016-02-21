import React, {
	Component,
} from 'react-native';

import ExNavigator from '@exponent/react-native-navigator';
import {homeRoute} from './router';

export default class Root extends Component {
	render() {
		return (
			<ExNavigator
				initialRoute={homeRoute()}
				sceneStyle={{ paddingTop: 64 }}
				style={{ flex: 1 }}
			/>
		);
	}
}
