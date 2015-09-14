// es6/node polyfills
    var assign            = require("object-assign"), // copy objs
        EventEmitter      = require("events").EventEmitter; // event helpers

    // flux architecture
    var AppDispatcher  = require("../AppDispatcher"),
        SynthConstants = require("../AppConstants");

    const CHANGE_EVENT = "change";

var _synthSettings = {
    partials: {
        partial1: {
            gainVal: .1,
            id: "1",
            detuneVal: 0,
            oscFreq: ""
        },
        partial2: {
            gainVal: .1,
            id: "2",
            detuneVal: 0,
            oscFreq: ""
        },
        partial3: {
            gainVal: .1,
            id: "3",
            detuneVal: 0,
            oscFreq: ""
        },
        partial4: {
            gainVal: .1,
            id: "4",
            detuneVal: 0,
            oscFreq: ""
        },
        partial5: {
            gainVal: .1,
            id: "5",
            detuneVal: 0,
            oscFreq: ""
        },
        partial6: {
            gainVal: .1,
            id: "6",
            detuneVal: 0,
            oscFreq: ""
        },
        partial7: {
            gainVal: .1,
            id: "7",
            detuneVal: 0,
            oscFreq: ""
        },
        partial8: {
            gainVal: .1,
            id: "8",
            detuneVal: 0,
            oscFreq: ""
        },
        partial9: {
            gainVal: .1,
            id: "9",
            detuneVal: 0,
            oscFreq: ""
        },
        partial10: {
            gainVal: .1,
            id: "10",
            detuneVal: 0,
            oscFreq: ""
        },
        partial11: {
            gainVal: .1,
            id: "11",
            detuneVal: 0,
            oscFreq: ""
        },
        partial12: {
            gainVal: .1,
            id: "12",
            detuneVal: 0,
            oscFreq: ""
        },
        partial13: {
            gainVal: .1,
            id: "13",
            detuneVal: 0,
            oscFreq: ""
        },
        partial14: {
            gainVal: .1,
            id: "14",
            detuneVal: 0,
            oscFreq: ""
        },
        partial15: {
            gainVal: .1,
            id: "15",
            detuneVal: 0,
            oscFreq: ""
        },
        partial16: {
            gainVal: .1,
            id: "16",
            detuneVal: 0,
            oscFreq: ""
        }
    }
};

function updatePartialDetune(id, val) {
    _synthSettings.partials[id].gainVal = val;
}

function updatePartialGain(id, val) {
    _synthSettings.partials[id].detuneVal = val;   
}

function createOscs(ctx) {
    return ctx.createOscillator();
}

function createGains(ctx) {
    return ctx.createGain();
}

var currentNotes = [],
    currentGainNodes = [];

function playNote(note) {
    var baseFreq = note.freq;

    Object.keys(_synthSettings.partials).forEach(function(key) {
        var partial = _synthSettings.partials[key];

        
    });

    // osc.frequency.value = 160;
    // osc.connect(audioCtx.destination);

    // osc.frequency.value = freq;
    // osc.detune.value = _synthSettings.detuneAmt;

    // osc.type = _synthSettings.oscType;

    // default the gain to 0 so envelopes will work
    // gainNode.gain.value = 0;

    // osc.connect(gainNode);
    // gainNode.connect(audioCtx.destination);

    // osc.start(0);

    // var now = audioCtx.currentTime;
    // var param = this.envelope.gain;

    // gainNode.gain.cancelScheduledValues(now); // 0
    // gainNode.gain.setValueAtTime(0, now);
    // gainNode.gain.linearRampToValueAtTime(_synthSettings.masterGain, now + .001);
    // gainNode.gain.linearRampToValueAtTime(_synthSettings.masterGain, now + .001);

    // currentNotes.push(osc);
    // currentGainNodes.push(gainNode);    
}

function stopNote(note) {
    console.log("note", note);

    // var currentNote = currentNotes.pop();
    // var currentGainNode = currentGainNodes.pop();

    // var now = audioCtx.currentTime;
    // currentGainNode.gain.cancelScheduledValues(now);
    // currentGainNode.gain.setTargetAtTime(0.0, now + .25, .15);
}

var SynthStore = assign({}, EventEmitter.prototype, {
    getSynthSettings: function() {
        return _synthSettings;
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    switch(action.actionType) { 
        case SynthConstants.SYNTH_UPDATE_PARTIAL_DETUNE:
            updatePartialDetune(action.id, action.val);
            SynthStore.emitChange();
            break;

        case SynthConstants.SYNTH_UPDATE_PARTIAL_GAIN:
            updatePartialGain(action.id, action.val);
            SynthStore.emitChange();
            break;

        case SynthConstants.SYNTH_PLAY_NOTE:
            var note = action.note;
            note.freq = 440;
            playNote(note);
            _currentNote = note;
            SynthStore.emitChange();
            break;

        case SynthConstants.SYNTH_STOP_NOTE:
            stopNote(action.note);
            _currentNote = {};
            SynthStore.emitChange();
            break;    

        default:
            // no op
    }
});

module.exports = SynthStore;