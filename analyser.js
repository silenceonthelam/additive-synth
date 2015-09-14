var canvas = document.querySelector("canvas"),
    canvasCtx = canvas.getContext("2d");

var height = canvas.height,
    width = canvas.width;

var analyser = audioCtx.createAnalyser();

analyser.fftSize = 2048;
analyser.smoothingTimeConstant = .5; // 0 - 1

synth.connect(analyser);
analyser.connect(audioCtx.destination);

// - fftSize
//     unsigned long representing size of the FFT 
//     to be used to determine the frequency domain
//     + buffer size used to analyse
//     + must be power of 2
// - AnalyserNode.getFloatFrequencyData()
//     Copies the current frequency data into a 
//     Float32Array array passed into it.
// - AnalyserNode.getByteFrequencyData()
//     Copies the current frequency data into a 
//     Uint8Array (unsigned byte array) passed into it.
// - AnalyserNode.getFloatTimeDomainData()
//     Copies the current waveform, or time-domain, data 
//     into a Float32Array array passed into it.
// - AnalyserNode.getByteTimeDomainData()
//     Copies the current waveform, or time-domain, data 
//     into a Uint8Array (unsigned byte array) passed into it.
// - freqDomain: arr of 32-bit floats corresponding to freq domain
//     + values normalized b/n 0 and 1
//     + indicies of output can be mapped linear b/n 0 and nyquist
//     + can also be arr of 8-bit unsigned ints (getByteFrequencyData)
//         * these values scaled b/n minDb and maxDb
// - getByteFrequencyData results in normalized arr of vals
//     + 0 - 255

function draw(ctx) {
    // for (bin = 0; bin < audioSource.streamData.length; bin ++) {
    //     var val = audioSource.streamData[bin];
    //     var red = val;
    //     var green = 255 - val;
    //     var blue = val / 2; 
    //     context.fillStyle = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    //     context.fillRect(bin * 2, 0, 2, 200);
    // }
    // ctx.fillRect(0, 0, 10, data);

    requestAnimationFrame(draw);

    var barWidth, barHeight, barSpacing, frequencyData, barCount, loopStep, hue;

    barWidth = 10;
    barSpacing = 2;

    ctx.clearRect(0, 0, width, height);

    // nyquist: half of ctx.sampleRate / fftSize
    frequencyData = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(frequencyData);

    barCount = Math.round(width / (barWidth + barSpacing));
    loopStep = Math.floor(frequencyData.length / barCount);

    for (var i = 0; i < barCount; i++) {
        barHeight = frequencyData[i * loopStep];
        hue = parseInt(120 * (1 - (barHeight / 255)), 10);
        ctx.fillStyle = 'hsl(' + hue + ',75%,50%)';
        ctx.fillRect(((barWidth + barSpacing) * i) +
                    (barSpacing / 2), height, barWidth - barSpacing, -barHeight);
    }
}

draw(canvasCtx);

// AnalyserNode.minDecibels / .maxDecibels
// Is a double value representing the minimum power value in the scaling range for the FFT analysis data, for conversion to unsigned byte values — basically, this specifies the minimum value for the range of results when using getByteFrequencyData().

// getFrequencyValue: function(frequency) {
//     // for 1,000-Hz sine wave, expect that getFrequencyValue(1000) would return peak val
//     // var nyquist = context.sampleRate/2;
//     // var index = Math.round(frequency/nyquist * freqDomain.length);
//     // return freqDomain[index];
// }

// - freq bands split eq
//     + ea elem N of arr: N * samplerate/fftSize
// - first bin is 0
// - sampleRate = 44100
// - fftSize = 512
// - second bin = 86.13Hz
// - length of sample data is 1/2 fftSize
// - 256 bins, ea will be 86.13Hz apart
// - vals in these bins are how much of ea. freq is present in signal
//     + how loud the freq is

// _init = function () {
//     _source = null;
//     _gainNode = _context.createGain();
//     _filterNode = _context.createBiquadFilter();
//     _equalizerNodes = [
//         _context.createBiquadFilter() * 6
//     ];
//     _filterNode.type = 0;
//     _filterNode.frequency.value = 10000;
//     _filterNode.Q.value = 0;
//     _filterNode.gain.value = 0;
//     frequencies = [50, 160, 500, 1600, 5000, 20000];
//     for (i = 0; i < 6; i++) {
//         _equalizerNodes[i].frequency.value = frequencies[i];
//         _equalizerNodes[i].type = 5;
//         _equalizerNodes[i].Q.value = 2;
//     }
//     _gainNode.connect(_analyserNode);
//     _filterNode.connect(_gainNode);
//     _equalizerNodes[0].connect(_equalizerNodes[1]);
//     _equalizerNodes[1].connect(_equalizerNodes[2]);
//     _equalizerNodes[5].connect(_gainNode);
//     onOptionsChangeListener = function () {
//         _option = this.value;
//         switch (this.value) {
//          case 'filters':
//             _$filters.show();
//             _$equalizer.hide();
//             break;
//          case 'equalizer':
//             _$filters.hide();
//             _$equalizer.show();
//             break;
//         }
//         _createRoutingGraph();
//     };
//     onEqualizerChangeListener = function () {
//         var index;
//         index = parseInt($(this).attr('id').replace('equalizer-', ''), 10);
//         _equalizerNodes[index].gain.value = parseInt(this.value, 10);
//     };
//     _startTimer();
// };
// _generateAndPlaySound = function (name) {
//     if (_generationMethods.hasOwnProperty(name)) {
//         _stopSound();
//         /* Generate sound with the given method. */
//         _source = _generationMethods[name]();
//         _createRoutingGraph();
//         _source.start(0);
//         /* Set playback rate to a new value because it could be changed
//          * while no sound was played. */
//         _setPlaybackRate(_$playbackRate.val());
//     }
// };
// _stopSound = function () {
//     if (_source && _isSoundPlaying()) {
//         _source.stop(0);
//         _source = null;
//     }
// };
// _setPlaybackRate = function (val) {
//     if (_isSoundPlaying()) {
//         /* We have to check existence of playbackRate property in case of
//          * OscillatorNode in which we can change that value. */
//         if (_source.hasOwnProperty('playbackRate')) {
//             _source.playbackRate.value = val;
//         }
//     }
// };
// _createRoutingGraph = function () {
//     /* disconnect to make sure there is only one route in graph. */
//     _source.disconnect(0);
//     switch (_option) {
//      case 'filters':
//         _source.connect(_filterNode);
//         break;
//      case 'equalizer':
//         _source.connect(_equalizerNodes[0]);
//         break;
//      case 'disabled':
//         _source.connect(_gainNode);
//         break;
//     }
// };

// var audio = new Audio();
    //     audio.src = '/audio/OVos.mp3';
    //     audio.controls = true;
    //     audio.autoplay = true;
    //     document.body.appendChild(audio);

    //     // Wait for window.onload to fire. See crbug.com/112368
    //     window.addEventListener('load', function(e) {
    //       // Our <audio> element will be the audio source.
    //       var source = context.createMediaElementSource(audio);
    //       source.connect(analyser);
    //       analyser.connect(context.destination);

    //       // ...call requestAnimationFrame() and render the analyser's output to canvas.
    //     }, false);