const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const availableEndpoints = [
        { path: '/calculate/5/plus/3', description: 'Addition: 5 + 3' },
        { path: '/calculate/10/minus/4', description: 'Subtraction: 10 - 4' },
        // Add more examples here
    ];

    const html = `
    <html>
    <head>
        <title>Available Endpoints</title>
    </head>
    <body>
        <h1>Available Endpoints</h1>
        <ul>
            ${availableEndpoints.map(endpoint => `<li><a href="${endpoint.path}">${endpoint.description}</a></li>`).join('')}
        </ul>
    </body>
    </html>
    `;

    res.send(html);
});

module.exports = router;
