var React 	     = require("react"),
	SynthActions = require("../actions/synth-actions"),
	SynthStore   = require("../stores/SynthStore");

var Partial = React.createClass({
	render: function() {
		var partial = this.props.partial;
		return (
			<div className="partial">
				<h3 className="partial__title">{"Partial: " + partial.id}</h3>
				<label className="partial__label--gain" 
						htmlFor={partial.id + "gain"} key={partial.id + "gain"}>
					<span className="partial__label__text--gain">
						Gain
					</span>
					<input 
						className="partial__slider--gain" 
						id={partial.id}
						max="1"
						min="0"
						onChange={this.updatePartialGain}
						step=".01"
						type="range"
						value={partial.gainVal} />
				</label>
				<label className="partial__label--detune" 
					htmlFor={partial.id} key={partial.id}>
					<span className="partial__label__text--detune">
						Detune
					</span>
					<input 
						className="partial__slider--detune" 
						id={partial.id}
						max="50"
						min="-50"
						onChange={this.updatePartialDetune}
						step="1"
						type="range"
						value={partial.detuneVal} />
				</label>		
			</div>
		);
	},
	updatePartialDetune: function(e) {
		SynthActions.updatePartialDetune(this.props.partial.id, e.target.value);
	},
	updatePartialGain: function(e) {
		SynthActions.updatePartialGain(this.props.partial.id, e.target.value);
	}
});

module.exports = Partial;