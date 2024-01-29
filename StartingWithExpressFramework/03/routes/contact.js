const express = require('express');
const router = express.Router();

// Define your contact routes here
router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'contact.html'));
});

router.post('/submit-contact', (req, res) => {
    // Handle the form submission
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // Process the submitted data as needed (e.g., send an email, save to a database)

    // For now, just send a response
    res.send(`
        <h1>Thank you for your message, ${name}!</h1>
        <p>We'll get back to you at ${email} as soon as possible.</p>
    `);
});

module.exports = router;
