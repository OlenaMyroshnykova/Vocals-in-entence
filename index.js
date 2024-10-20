function getSentence(sentence) {
    return sentence;
}

function searchVocals(sentence) {
    const vocals = ['a', 'e', 'i', 'o', 'u'];
    const foundVocals = [...new Set(sentence.toLowerCase().split('').filter(char => vocals.includes(char)))];
    return foundVocals;
}

function deleteDuplicity(list) {
    return [...new Set(list)];
}

function getVocals(sentence) {
    const vocalsList = searchVocals(sentence);
    return vocalsList.join(',');
}

document.getElementById('vowelForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const sentence = document.getElementById('inputId').value;

    const result = getVocals(sentence);

    document.getElementById('result').textContent = result ? result : 'No se encontraron vocales';
});

function setInputValueFromParagraph(paragraphId) {
    const paragraph = document.getElementById(paragraphId);
    const input = document.getElementById('inputId');
    if (paragraph && input) {
        input.value = paragraph.textContent;
    }
}

document.getElementById('pId1').addEventListener('click', function() {
    setInputValueFromParagraph('pId1');
});
document.getElementById('pId2').addEventListener('click', function() {
    setInputValueFromParagraph('pId2');
});
document.getElementById('pId3').addEventListener('click', function() {
    setInputValueFromParagraph('pId3');
});
document.getElementById('pId4').addEventListener('click', function() {
    setInputValueFromParagraph('pId4');
});
document.getElementById('pId5').addEventListener('click', function() {
    setInputValueFromParagraph('pId5');
});
document.getElementById('pId6').addEventListener('click', function() {
    setInputValueFromParagraph('pId6');
});
