var Partial    = require("./Partial"),
	React 	   = require("react"),
	SynthStore = require("../stores/SynthStore");

function getSynthState() {
	return {
		synthSettings: SynthStore.getSynthSettings()
	};
}

var Synth = React.createClass({
	getInitialState: function() {
		return getSynthState();
	},
	render: function() {
		return (
			<div>
				<div className="visualizer__wrapper">
					<canvas className="visualizer"></canvas>
				</div>
				<div className="synth">
					{this.renderPartials(this.state.synthSettings.partials)}
				</div>
			</div>
		);
	},
	renderPartials: function(partials) {
		return Object.keys(partials).map(function(key) {
			var partial = partials[key];

			return (
				<Partial partial={partial} />
			);
		}.bind(this));
	},
	componentDidMount: function() {
		SynthStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		SynthStore.removeChangeListener(this._onChange);
	},
	_onChange: function() {
		this.setState(getSynthState());
	}
});

module.exports = Synth;