import React, {
	Animated,
	Component,
	PanResponder,
	View,
} from 'react-native';

import Clamp from 'clamp';

export default class SwipeableView extends Component {
	static propTypes = {
		children: React.PropTypes.node.isRequired,
		onSwipeComplete: React.PropTypes.func.isRequired,
		style: View.propTypes.style,
		swipeThreshold: React.PropTypes.number,
	};

	static defaultProps = {
		swipeThreshold: 120,
	};

	static swipeDirection = {
		left: Symbol('left'),
		right: Symbol('right'),
	};

	constructor(props) {
		super(props);

		this.state = {
			pan: new Animated.ValueXY(),
			enter: new Animated.Value(0.5),
		};
	}

	componentWillMount() {
		this._panResponder = PanResponder.create({
			onMoveShouldSetResponderCapture: () => true,
			onMoveShouldSetPanResponderCapture: () => true,

			onPanResponderGrant: () => {
				this.state.pan.setOffset({ x: this.state.pan.x._value, y: this.state.pan.y._value });
				this.state.pan.setValue({ x: 0, y: 0 });
			},

			onPanResponderMove: Animated.event([
				null,
				{ dx: this.state.pan.x, dy: this.state.pan.y },
			]),

			onPanResponderRelease: (e, { vx, vy }) => {
				this.state.pan.flattenOffset();
				let velocity;

				if (vx >= 0) {
					velocity = Clamp(vx, 3, 5);
				} else if (vx < 0) {
					velocity = Clamp(vx * -1, 3, 5) * -1;
				}

				if (Math.abs(this.state.pan.x._value) > this.props.swipeThreshold) {
          Animated.decay(this.state.pan, {
            velocity: { x: velocity, y: vy },
            deceleration: 0.98,
          }).start(() => this._handleSwipe(this.state.pan.x._value));
        } else {
          Animated.spring(this.state.pan, {
            toValue: { x: 0, y: 0 },
            friction: 4,
          }).start();
        }
			},
		});
	}

	componentDidMount() {
		this._animateEntrance();
	}

	componentDidUpdate() {
		this._animateEntrance();
	}

	_animateEntrance() {
		Animated.spring(
			this.state.enter,
			{ toValue: 1, friction: 8 }
		).start();
	}

	_handleSwipe(xValue) {
		this.state.pan.setValue({ x: 0, y: 0 });
		this.state.enter.setValue(0);

		const direction = xValue > 0 ? 'right' : 'left';
		const directionSymbol = SwipeableView.swipeDirection[direction];

		this.props.onSwipeComplete(directionSymbol);
	}

	render() {
		const { pan, enter } = this.state;
		const [translateX, translateY] = [pan.x, pan.y];
		const scale = enter;

		const rotate = pan.x.interpolate({
			inputRange: [-200, 0, 200],
			outputRange: ['-30deg', '0deg', '30deg'],
		});

		const opacity = pan.x.interpolate({
			inputRange: [-200, 0, 200],
			outputRange: [0.5, 1, 0.5],
		});

		const animatedCardStyles = {
			transform: [{ translateX }, { translateY }, { rotate }, { scale }],
			opacity: opacity,
		};

		return (
			<Animated.View
				style={[this.props.style, animatedCardStyles]}
				{...this._panResponder.panHandlers}
			>
				{this.props.children}
			</Animated.View>
		);
	}
}
