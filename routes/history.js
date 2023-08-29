const express = require('express');
const fs = require('fs');

const router = express.Router();
const historyFilePath = './history.json';

function loadHistory() {
    if (fs.existsSync(historyFilePath)) {
        const data = fs.readFileSync(historyFilePath, 'utf8');
        return JSON.parse(data);
    }
    return [];
}
router.get('/', (req, res) => {
    const history = loadHistory();
    res.json(history);
});




module.exports = router;
