// Variables
var synth = window.speechSynthesis;
var textToSpeak = '';
var speakButton = document.getElementById('speakButton');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');
var button5 = document.getElementById('button5');
var speakTextButton = document.getElementById('speakTextButton');

// Arrays
var nouns = ['dog', 'cat', 'bird', 'tree', 'house'];
var verbs = ['runs', 'jumps', 'flies', 'swims', 'eats'];
var adjectives = ['happy', 'sad', 'big', 'small', 'beautiful'];
var places = ['park', 'beach', 'mountain', 'city', 'forest'];

// Functions
function speakNow(string) {
var utterThis = new SpeechSynthesisUtterance(string);
synth.speak(utterThis);
}

function generateRandomPhrase() {
var randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
var randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
var randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
var randomPlace = places[Math.floor(Math.random() * places.length)];
textToSpeak += randomNoun + ' ' + randomVerb + ' ' + randomAdjective + ' ' + randomNoun + ' in ' + randomPlace + '. ';
}

// Event Listeners
speakButton.addEventListener('click', function() {
speakNow(textToSpeak);
});

button1.addEventListener('click', function() {
generateRandomPhrase();
});

button2.addEventListener('click', function() {
generateRandomPhrase();
});

button3.addEventListener('click', function() {
generateRandomPhrase();
});

button4.addEventListener('click', function() {
generateRandomPhrase();
});

button5.addEventListener('click', function() {
generateRandomPhrase();
});

speakTextButton.addEventListener('click', function() {
speakNow(textToSpeak);
});

// Take it further - Reset button
var resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
document.body.appendChild(resetButton);

resetButton.addEventListener('click', function() {
textToSpeak = '';
});