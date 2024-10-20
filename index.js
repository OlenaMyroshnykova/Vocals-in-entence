// function getSentence(sentence) {
//     return sentence;
// }

// function searchVocals(sentence) {
//     const vocals = ['a', 'e', 'i', 'o', 'u'];
//     const foundVocals = [...new Set(sentence.toLowerCase().split('').filter(char => vocals.includes(char)))];
//     return foundVocals;
// }

// function deleteDuplicity(list) {
//     const vocals = ['a', 'e', 'i', 'o', 'u'];
//     let foundVocals = [];

//     for (let item of list) {
//         let strItem = String(item).toLowerCase();

//         for (let char of strItem) {
//             if (vocals.includes(char) && !foundVocals.includes(char)) {
//                 foundVocals.push(char); 
//             }
//         }
//     }
//     return `['${foundVocals.join("', '")}']`;
//  }

// function getVocals(sentence) {
//     const vocalsList = searchVocals(sentence);
//     return vocalsList.join(',');
// }

// document.getElementById('vowelForm').addEventListener('submit', function(event) {
//     event.preventDefault(); 

//     const sentence = document.getElementById('inputId').value;

//     const result = getVocals(sentence);

//     document.getElementById('result').textContent = result ? result : 'No se encontraron vocales';
// });

// function setInputValueFromParagraph(paragraphId) {
//     const paragraph = document.getElementById(paragraphId);
//     const input = document.getElementById('inputValue');
//     if (paragraph && input) {
//         input.value = paragraph.textContent;
//     }
// }

// document.getElementById('executeButton').addEventListener('click', function() {
//     const selectedFunction = document.getElementById('functionSelect').value;
//     const inputValue = document.getElementById('inputValue').value;
//     let result;

//     switch (selectedFunction) {
//         case 'getSentence':
//             result = getSentence(inputValue);
//             break;
//         case 'searchVocals':
//             result = searchVocals(inputValue);
//             break;
//         case 'deleteDuplicity':
//             result = deleteDuplicity(inputValue.split(','));
//             break;
//         case 'getVocals':
//             result = getVocals(inputValue);
//             break;
//         default:
//             result = 'Función no encontrada';
//     }

//     document.getElementById('result').textContent = Array.isArray(result) ? result.join(', ') : result;
// });

// document.addEventListener("DOMContentLoaded", function() {
//     // Вызов каждой функции и вставка результатов в соответствующие элементы
//     document.getElementById('result1').textContent = `'${getSentence('la')}'`;
//     document.getElementById('result2').textContent = JSON.stringify(searchVocals('lo'));
//     document.getElementById('result3').textContent = JSON.stringify(searchVocals('la le li lo lu'));
//     document.getElementById('result4').textContent = JSON.stringify(deleteDuplicity(['i', 'i']));
//     document.getElementById('result5').textContent = JSON.stringify(searchVocals('la le li lo lu pa pe pi po pu'));
//     document.getElementById('result6').textContent = `'${getVocals('Hello World!')}'`;
// });

// document.getElementById('pId1').addEventListener('click', function() {
//     setInputValueFromParagraph('pId1');
// });
// document.getElementById('pId2').addEventListener('click', function() {
//     setInputValueFromParagraph('pId2');
// });
// document.getElementById('pId3').addEventListener('click', function() {
//     setInputValueFromParagraph('pId3');
// });
// document.getElementById('pId4').addEventListener('click', function() {
//     setInputValueFromParagraph('pId4');
// });
// document.getElementById('pId5').addEventListener('click', function() {
//     setInputValueFromParagraph('pId5');
// });
// document.getElementById('pId6').addEventListener('click', function() {
//     setInputValueFromParagraph('pId6');
// });
// Функции
function getSentence(sentence) {
    return sentence;
}

function searchVocals(sentence) {
    const vocals = ['a', 'e', 'i', 'o', 'u'];
    let foundVocals = [];

    for (let char of sentence.toLowerCase()) {
        if (vocals.includes(char) && !foundVocals.includes(char)) {
            foundVocals.push(char);
        }
    }

    return foundVocals;
}

function deleteDuplicity(list) {
    const vocals = ['a', 'e', 'i', 'o', 'u'];
    let foundVocals = [];

    for (let item of list) {
        let strItem = String(item).toLowerCase();

        for (let char of strItem) {
            if (vocals.includes(char) && !foundVocals.includes(char)) {
                foundVocals.push(char);
            }
        }
    }

    return `['${foundVocals.join("', '")}']`;
}

function getVocals(sentence) {
    let foundVocals = searchVocals(sentence);
    return foundVocals.join(',');
}

// Универсальная функция для запуска функций и отображения результата
function runFunction(funcName, inputId, resultId) {
    const inputValue = document.getElementById(inputId).value;
    let result;

    // Выполняем выбранную функцию
    switch (funcName) {
        case 'getSentence':
            result = getSentence(inputValue);
            break;
        case 'searchVocals':
            result = searchVocals(inputValue);
            break;
        case 'deleteDuplicity':
            result = deleteDuplicity(inputValue);
            break;
        case 'getVocals':
            result = getVocals(inputValue);
            break;
        default:
            result = 'Función no encontrada';
    }

    // Отображаем результат
    document.getElementById(resultId).textContent = Array.isArray(result) ? JSON.stringify(result) : result;
}
