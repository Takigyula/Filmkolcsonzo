const express = require(' express');
const app = express();
const mysql = require('mysql');
const router = express.Router();
const RatingController = require('../controllers/RatingController');

// Adatbázis kapcsolat beállítása
const db = mysql.createConnection({
  host: 'localhost',
  user: 'felhasznalo',
  password: 'jelszo',
  database: 'adatbazis'
});

// Adatbázis kapcsolat létrehozása
db.connect((err) => {
  if (err) {
    console.error('Adatbázis kapcsolat hiba:', err);
    return;
  }
  console.log('Adatbázis kapcsolat létrehozva');
});

// API endpoint a statusz frissítéséhez
app.put('/api/cinema/nezok/statusz', (req, res) => {
  const { id, statusz } = req.body;

  // Adatbázisbeli művelet a statusz frissítéséhez
  const query = 'UPDATE nezok SET statusz = ? WHERE id = ?';
  db.query(query, [statusz, id], (err, results) => {
    if (err) {
      console.error('Adatbázis hiba:', err);
      res.status(500).send({ message: 'Adatbázis hiba' });
      return;
    }

    if (results.affectedRows === 0) {
      res.status(404).send({ message: 'Felhasználó nem található' });
      return;
    }

    res.send({ message: 'Statusz frissítve' });
  });
});

// API endpoint az értékelések létrehozásához
app.post('/api/ratings', (req, res) => {
  const { filmId, userId, rating } = req.body;

  // Adatbázisbeli művelet az értékelés létrehozásához
  const query = 'INSERT INTO ertekelesek (filmId, userId, rating) VALUES (?, ?, ?)';
  db.query(query, [filmId, userId, rating], (err, results) => {
    if (err) {
      console.error('Adatbázis hiba:', err);
      res.status(500).send({ message: 'Adatbázis hiba' });
      return;
 }

    res.status(201).send({ message: 'Értékelés sikeresen hozzáadva', id: results.insertId });
  });
});

// Szerver elindítása
const port = 3500;
app.listen(port, () => {
  console.log(`Szerver elindítva a ${port} porton`);
});