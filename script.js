const works = [
    {
        title: "Adagio for Strings - Samuel Barber",
        melody: "Intervalos pequeños",
        tempo: "Tempo lento",
        rhythm: "Patrón regular",
        volume: "Pianissimo a fortissimo",
        emotion: ["Tristeza", "Melancolía"]
    },
    {
        title: "Symphony No. 9 in D Minor, Op. 125 (Ode to Joy) - Ludwig van Beethoven",
        melody: "Intervalos grandes",
        tempo: "Tempo mediano",
        rhythm: "Patrón regular",
        volume: "Fortissimo",
        emotion: ["Alegría", "Exaltación"]
    },
    {
        title: "The Rite of Spring - Igor Stravinsky",
        melody: "Intervalos grandes",
        tempo: "Tempo variado, mayormente rápido",
        rhythm: "Patrón irregular",
        volume: "Fortissimo",
        emotion: ["Sorpresa", "Inquietud"]
    },
    {
        title: "Night on Bald Mountain - Modest Mussorgsky",
        melody: "Intervalos grandes",
        tempo: "Tempo rápido",
        rhythm: "Patrón irregular",
        volume: "Fortissimo",
        emotion: ["Miedo", "Inquietud"]
    },
    {
        title: "Clair de Lune - Claude Debussy",
        melody: "Intervalos pequeños",
        tempo: "Tempo lento",
        rhythm: "Patrón regular",
        volume: "Pianissimo a mezzopiano",
        emotion: ["Tranquilidad", "Calma"]
    },
    {
        title: "Symphony No. 5 in C Minor, Op. 67 (First Movement) - Ludwig van Beethoven",
        melody: "Intervalos grandes",
        tempo: "Tempo rápido",
        rhythm: "Patrón regular",
        volume: "Fortissimo",
        emotion: ["Furia", "Determinación"]
    },
    {
        title: "Canon in D Major - Johann Pachelbel",
        melody: "Intervalos pequeños",
        tempo: "Tempo lento a mediano",
        rhythm: "Patrón regular",
        volume: "Mezzopiano",
        emotion: ["Calma", "Serenidad"]
    },
    {
        title: "In the Hall of the Mountain King - Edvard Grieg",
        melody: "Intervalos pequeños al principio, luego grandes",
        tempo: "Tempo rápido (acelerando)",
        rhythm: "Patrón regular",
        volume: "Mezzoforte a fortissimo",
        emotion: ["Sorpresa", "Tensión creciente"]
    },
    {
        title: "Pavane - Gabriel Fauré",
        melody: "Intervalos pequeños",
        tempo: "Tempo lento",
        rhythm: "Patrón regular",
        volume: "Pianissimo a mezzopiano",
        emotion: ["Tristeza", "Melancolía"]
    },
    {
        title: "O Fortuna from Carmina Burana - Carl Orff",
        melody: "Intervalos grandes",
        tempo: "Tempo rápido",
        rhythm: "Patrón regular",
        volume: "Fortissimo",
        emotion: ["Furia", "Dramatismo"]
    }
];

let currentWorkIndex = 0;

function loadNewWork() {
    currentWorkIndex = Math.floor(Math.random() * works.length);
    const work = works[currentWorkIndex];
    document.getElementById('work-title').innerText = work.title;
    document.querySelectorAll('input[type=radio]').forEach(input => input.checked = false);
    document.getElementById('result').innerText = '';
    document.getElementById('overlay').style.display = 'none';
}

function checkAnswers() {
    const work = works[currentWorkIndex];

    const selectedMelody = document.querySelector('input[name="melody"]:checked');
    const selectedTempo = document.querySelector('input[name="tempo"]:checked');
    const selectedRhythm = document.querySelector('input[name="rhythm"]:checked');
    const selectedVolume = document.querySelector('input[name="volume"]:checked');
    const selectedEmotion = Array.from(document.querySelectorAll('input[name="emotion"]:checked')).map(e => e.value);

    const correctMelody = selectedMelody && selectedMelody.value === work.melody;
    const correctTempo = selectedTempo && selectedTempo.value === work.tempo;
    const correctRhythm = selectedRhythm && selectedRhythm.value === work.rhythm;
    const correctVolume = selectedVolume && selectedVolume.value === work.volume;
    const correctEmotion = selectedEmotion.length && selectedEmotion.every(e => work.emotion.includes(e)) && work.emotion.length === selectedEmotion.length;

    const allCorrect = correctMelody && correctTempo && correctRhythm && correctVolume && correctEmotion;

    const resultText = allCorrect ? '✔' : '✘';
    document.getElementById('result').innerText = resultText;
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById('overlay').innerText = resultText;
}

window.onload = loadNewWork;
