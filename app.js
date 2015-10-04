!function () {
    'use strict';

    var lastFlashIndex = 2;

    function flashPewPew(pewpew) {
        pewpew.classList.add('flash-pew-pew');

        setTimeout(function () {
            pewpew.classList.remove('flash-pew-pew');
        }, 250);
    }

    function flashPewPews(pewpew1, pewpew2) {
        if (lastFlashIndex === 2) {
            flashPewPew(pewpew1);
            lastFlashIndex = 1;
            return;
        }

        flashPewPew(pewpew2);
        lastFlashIndex = 2;
    }

    function playRandomPewPewSounds(audioElement, pewpew1, pewpew2) {
        var nextSound = Math.random() * 1500;

        setTimeout(function () {
            audioElement.play();
            flashPewPews(pewpew1, pewpew2);
        }, nextSound);
    }

    document.addEventListener('DOMContentLoaded', function () {
        var htmlAudioElement = document.getElementById('pewpewSound');
        var pewpew1 = document.getElementById('pewpew-1');
        var pewpew2 = document.getElementById('pewpew-2');

        htmlAudioElement.addEventListener('ended', function () {
            playRandomPewPewSounds(htmlAudioElement, pewpew1, pewpew2);
        });

        playRandomPewPewSounds(htmlAudioElement, pewpew1, pewpew2);
    });
}();
