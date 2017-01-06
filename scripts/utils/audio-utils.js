const ctx = new AudioContext();
var synth;

function createPartial(part, val, baseFreq) {
    var osc = ctx.createOscillator(),
    gain = ctx.createGain();

    osc.frequency.value = baseFreq * part;
    gain.gain.value = val;

    osc.connect(gain);
    osc.start(0);

    return osc;
}

function createSynth(baseFreq, partials) {
    var amp = ctx.createGain();
    
    Object.keys(partials).forEach( part => {
        createPartial(part, partials[part].val, baseFreq).connect(amp);
    });

    return amp;
}

export function play(baseFreq, mastGain, partials) {
    synth = createSynth(baseFreq, partials);
    synth.gain.value = parseFloat(mastGain, 10);

    synth.connect(ctx.destination)
}

export function stop() {
    synth.disconnect();
    synth = null;
}