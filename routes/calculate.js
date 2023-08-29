const express = require('express');
const fs = require('fs');

const router = express.Router();
const historyFilePath = './history.json';

function saveHistory(history) {
    fs.writeFileSync(historyFilePath, JSON.stringify(history), 'utf8');
}


router.post('/:num1/:operator/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const operator = req.params.operator;
    const num2 = parseFloat(req.params.num2);
    
    // Perform operation and calculate answer
    let answer;
    switch (operator) {
        case 'plus':
            answer = num1 + num2;
            break;
        case 'minus':
            answer = num1 - num2;
            break;
        case 'times':
            answer = num1 * num2;
            break;
        case 'divs':
            answer = num1 / num2;
            break;
        // Add other cases for different operators
        default:
            res.status(400).json({ error: 'Invalid operator' });
            return;
    }

    const question = `${num1} ${operator} ${num2}`;
    const history = loadHistory();

    history.unshift({ question, answer });
    if (history.length > 20) {
        history.pop();
    }
    
    saveHistory(history);
    
    res.json({ question, answer });
});


function loadHistory() {
    if (fs.existsSync(historyFilePath)) {
        const data = fs.readFileSync(historyFilePath, 'utf8');
        return JSON.parse(data);
    }
    return [];
}

module.exports = router;
