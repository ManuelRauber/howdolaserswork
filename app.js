!function () {
    'use strict';

    function playRandomPewPewSounds(audioElement) {
        var nextSound = Math.random() * 1500;

        setTimeout(function () {
            audioElement.play();
        }, nextSound);
    }

    document.addEventListener('DOMContentLoaded', function () {
        var htmlAudioElement = document.getElementById('pewpewSound');

        htmlAudioElement.addEventListener('ended', function () {
            playRandomPewPewSounds(htmlAudioElement);
        });

        playRandomPewPewSounds(htmlAudioElement);
    });
}();
