// var real = new Float32Array([0,0.4,0.4,1,1,1,0.3,0.7,0.6,0.5,0.9,0.8]);

function AdditiveNote(partials) {
    // var wave = _.pluck(partials, "gain");
    // var osc = audioCtx.createOscillator();

    // var real = new Float32Array(wave);
 
    // var imag = new Float32Array(real.length);
    // var waveTable = audioCtx.createPeriodicWave(real, imag);
 
    // osc = audioCtx.createOscillator();
    // osc.setPeriodicWave(waveTable);
    // osc.frequency.value = 160;
    // osc.connect(audioCtx.destination);

    // osc.start(0);
}

function playAdditiveSynthNote(freq) {
	// var osc = new AdditiveNote(),
		// gainNode = audioCtx.createGain();

	// osc.frequency.value = freq;
	// osc.detune.value = _synthSettings.fineTuneAmt;

	// default the gain to 0 so envelopes will work
	// gainNode.gain.value = 0;

	// osc.connect(gainNode);
	// gainNode.connect(audioCtx.destination);

	// var now = audioCtx.currentTime;

	// gainNode.gain.cancelScheduledValues(now);
	// gainNode.gain.setValueAtTime(gainNode.gain.value, now);
	// gainNode.gain.linearRampToValueAtTime(_synthSettings.masterGain.val, now + .001);

	// gainNode.gain.cancelScheduledValues(now + 1);
	// gainNode.gain.setTargetAtTime(0.0, now + 1 + .25, .15);

	// currentGainNodes.push(gainNode);
}

function stopAdditiveSynthNote() {
	// // todo: fix this
	// var currentGainNode = currentGainNodes.pop();

	// var now = audioCtx.currentTime;
	// currentGainNode.gain.cancelScheduledValues(now);
	// currentGainNode.gain.setTargetAtTime(0.0, now + .25, .15);
}

// - each one will have a frequency and an amplitude (env)
// - waveforms comprised of "partials"
//     - presence of these partials and their strength (amplitude) determine timbre or color of sound
//     - it's how we tell a violin from a piano or a saxophone from a euphonium
//     - for instance, if higher partials are stronger, the sound will be more "brilliant", or pointy
//         - cylindrical
//         - trumpet
//         - oboe
//     - stronger lower partials offer a more mellow sound like on a horn, euphonium, tuba
// - we start with a frequency, aka "fundamental", aka first partial
//     - if these ratios are harmonic, you will hear that pitch
//     - if not, you will hear werid shit
// - all partials can have the duration
//     - or not
//     - ENVELOPES!!!
//     - people other than postmen can get excited about them now
// - sounds are difficult to model
//     - each partial has many variable
//         - frequency over time
//         - gain over time
//         - duration
// - add a touch of randomness
// - creating noise with weird ratios
//     - guns and games
// - mapping of one control to any param
//     - midi velocity to # synth partials: brightness control

// shiftWave: function() {
// 	// starting with a simple sine wave:
// 	// var a1 = 0.0;
// 	// var b1 = 1.0;

// 	// // Apply a simple rotation to the initial coefficients
// 	// var shift = 2 * Math.PI * 0.5; // Shift the waveform 50% -- phase
// 	// real[1] = a1 * Math.cos(shift) - b1 * Math.sin(shift);
// 	// imag[1] = a1 * Math.sin(shift) + b1 * Math.cos(shift);
// 	// var wt = context.createWaveTable(real, imag);
// 	// myOscillator.setWaveTable(wt);

// 	// var curveSin = new Float32Array(12);
// 	// var curveCos = new Float32Array(12);
// 	// curveSin[0] = 0;
// 	// curveCos[0] = 0;
// 	// for (var i = 1; i < 12; i++) {
// 	// 	curveSin[i] = harm_arr[i] * harm_arr[0] * Math.cos(hars_arr[i]);
// 	// 	curveCos[i] = harm_arr[i] * harm_arr[0] * Math.sin(hars_arr[i]);
// 	// }
// 	// var waveTable = context.createPeriodicWave(curveCos, curveSin);
// 	// oscillator.setPeriodicWave(waveTable);
// }