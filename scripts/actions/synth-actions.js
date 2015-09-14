var AppDispatcher  = require('../AppDispatcher'),
	SynthConstants = require('../AppConstants');

var SynthActions = {
	playNote: function(note) {
		AppDispatcher.dispatch({
			actionType: SynthConstants.SYNTH_PLAY_NOTE,
			note: note
		});
	},
	stopNote: function(note) {
		AppDispatcher.dispatch({
			actionType: SynthConstants.SYNTH_STOP_NOTE,
			note: note
		});
	},	
	updatePartialDetune: function(id, val) {
		AppDispatcher.dispatch({
			actionType: SynthConstants.SYNTH_UPDATE_PARTIAL_DETUNE,
			id: id,
			val: val
		});
	},
	updatePartialGain: function(id, val) {
		AppDispatcher.dispatch({
			actionType: SynthConstants.SYNTH_UPDATE_PARTIAL_GAIN,
			id: id,
			val: val
		});
	}
};

module.exports = SynthActions;