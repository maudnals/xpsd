import { h, Component } from 'preact';
import style from './style';
import { connect } from 'react-redux';

class Profile extends Component {
	state = {
		showSteps: false,
		stepIdx: 0
	};

	toggleShowSteps = () => {
		this.setState({ showSteps: !this.state.showSteps });
	}

	toNextStep = () => {
		this.setState({ stepIdx: this.state.stepIdx + 1 });
	}

	render() {
		const { showSteps, stepIdx } = this.state;
		const { visibilityFilter } = this.props;
		console.log('visibilityFilter', visibilityFilter);
		const cl = stepIdx === 0 ? style.red : style.blue;
		return (
			<div class={style.home}>
				<div>
					<h1>XSS attack for cookie stealing</h1>
					<div>[Summary]</div>
					{/* todo templating */}
					{/* <h1>victim - blue team - red team</h1> */}
					{/* what happens */}
					{/* how to see it */}
					{/* play the attack as the victim */}
					<button onClick={this.toggleShowSteps}>Play</button>
				</div>
				{
					showSteps &&
					(<>
						<div class={`${cl} ${style.overlay}`}>
							<div class={style.content}>
								test
							</div>
							<div>XSS attack for cookie stealing</div>
							<button onClick={this.toggleShowSteps}>Close</button>
							{stepIdx === 0 &&
								<>
									<h1>Step 1: 😈Attacker: posts a comment</h1>
									<p>Attacker: posts a comment</p>
									<p>Victim: logs in, effectively setting the cookie to ...</p>
									<p>Victim: opens the comment page</p>
									<h2>Comments</h2>
									<p>George: This is so cool!</p>
									<p>Mallory:<script>console.log("hi")</script>
									</p>
									<div class={style.window} />
									<button onClick={this.toNextStep}>Next</button>
								</>}
							{stepIdx === 1 && <><h1>Step 2: User: logs in</h1></>}
						</div>
					</>
					)
				}
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { visibilityFilter } = state;
	return { visibilityFilter };
};

export default connect(mapStateToProps)(Profile);
