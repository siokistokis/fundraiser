
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve images statically
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Rename file with timestamp
    }
});

const upload = multer({ storage });

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Change if needed
    password: '', // Change if needed
    database: 'fundraiser_db'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL Database');
});

// Handle donations
app.post('/FundMePage', (req, res) => {
    let { fundraiserId, amount } = req.body;

    // Parse the amount to a number
    amount = parseFloat(amount);
    if (isNaN(amount)) {
        return res.status(400).json({ error: 'Invalid donation amount' });
    }

    if (!fundraiserId || !amount) {
        return res.status(400).json({ error: 'Fundraiser ID and amount are required' });
    }

    // Fetch the current donatedAmount and goalAmount for the fundraiser
    const getFundraiserSql = "SELECT goalAmount, donatedAmount FROM fundraisers WHERE id = ?";
    db.query(getFundraiserSql, [fundraiserId], (err, results) => {
        if (err) {
            console.error('Database error fetching fundraiser details:', err);  // More detailed logging
            return res.status(500).json({ error: err.message });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'Fundraiser not found' });
        }

        const { goalAmount, donatedAmount } = results[0];
        const newDonatedAmount = donatedAmount + amount;

        // Ensure the donated amount does not exceed the goal
        if (newDonatedAmount > goalAmount) {
            return res.status(400).json({ error: 'Donation exceeds fundraiser goal' });
        }

        // Update the fundraiser with the new donated amount
        const updateFundraiserSql = "UPDATE fundraisers SET donatedAmount = ? WHERE id = ?";
        db.query(updateFundraiserSql, [newDonatedAmount, fundraiserId], (err, updateResult) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            // Calculate the remaining amount
            const remainingAmount = goalAmount - newDonatedAmount;

            // Insert the donation into the donations table
            const insertDonationSql = "INSERT INTO donations (fundraiserId, amount) VALUES (?, ?)";
            db.query(insertDonationSql, [fundraiserId, amount], (err, donationResult) => {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }

                // Respond with the updated fundraiser details
                res.status(200).json({
                    message: 'Donation recorded successfully!',
                    remainingAmount: remainingAmount,
                    newDonatedAmount: newDonatedAmount
                });
            });
        });
    });
});

// Handle fundraiser creation
// Handle fundraiser creation with image upload
app.post('/fundraisers', upload.single('image'), (req, res) => {
    console.log("Received File:", req.file); 
    const { title, goalAmount, description, organizer, cause } = req.body;

    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    if (!title || !goalAmount || !description || !organizer || !cause) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = "INSERT INTO fundraisers (title, goalAmount, description, organizer, cause, donatedAmount, image) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [title, goalAmount, description, organizer, cause, 0, imageUrl], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.status(200).json({ message: 'Fundraiser created successfully!', imageUrl });
    });
});
// Handle contact form submissions
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    console.log("Received Contact Form Data:", req.body); // Debugging line

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({ error: err.message });
        }

        res.status(200).json({ message: 'Message sent successfully!' });
    });
});

//Admin registration
// Admin Registration
app.post('/admin/register', async (req, res) => {
    console.log("Received data:", req.body);  // Debugging line
    
    const { username, email, password, repeatPassword } = req.body;

    if (!username || !email || !password || !repeatPassword) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    if (password !== repeatPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = "INSERT INTO admins (username, email, password) VALUES (?, ?, ?)";
        db.query(sql, [username, email, hashedPassword], (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Registration failed: ' + err.message });
            }
            res.status(200).json({ message: 'Admin registered successfully!' });
        });
    } catch (err) {
        res.status(500).json({ error: 'Error hashing password' });
    }
});


//admin login
// Admin Login 
app.post('/admin/login', async (req, res) => {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    // Check if the username exists in the database
    const sql = "SELECT * FROM admins WHERE username = ?";
    db.query(sql, [username], async (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query failed' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'Admin not found' });
        }

        const admin = results[0];

        // Compare the entered password with the hashed password
        const passwordMatch = await bcrypt.compare(password, admin.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Incorrect password' });
        }

        // Successful login
        res.status(200).json({ message: 'Login successful', admin: { id: admin.id, username: admin.username, email: admin.email } });
    });
});

//Fetching unconfirmed

app.get('/admin/fundraisers', (req, res) => {
    const sql = "SELECT * FROM fundraisers WHERE confirmed = FALSE";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
});




//Confirm a Fundraiser

app.post('/admin/confirm-fundraiser', (req, res) => {
    const { fundraiserId } = req.body;

    const sql = "UPDATE fundraisers SET confirmed = TRUE WHERE id = ?";
    db.query(sql, [fundraiserId], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Fundraiser confirmed successfully!" });
    });
});


// API Endpoint to fetch all table data
app.get('/api/fundraisers', (req, res) => {
    // const sql = "SELECT * FROM fundraisers";
    const sql = "SELECT * FROM fundraisers WHERE confirmed = TRUE ORDER BY donatedAmount ASC";
    db.query(sql, (err, results) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({ error: "Database query failed" });
        }
        res.status(200).json(results);
    });
});

// API Endpoint to fetch a single fundraiser by ID
app.get('/api/fundraisers/:id', (req, res) => {
    const { id } = req.params;
    const sql = "SELECT * FROM fundraisers WHERE id = ?";
    
    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({ error: "Database query failed" });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: "Fundraiser not found" });
        }

        res.status(200).json(results[0]); // Send the first (and only) result
    });
});

// Start Server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});