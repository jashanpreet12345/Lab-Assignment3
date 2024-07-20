const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let items = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Carrot' }
];

// CREATE
app.post('/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// READ
app.get('/items', (req, res) => {
  res.json(items);
});

// UPDATE
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(item => item.id === id);
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  item.name = req.body.name;
  res.json(item);
});

// DELETE
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(item => item.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }
  const deletedItem = items.splice(index, 1);
  res.json(deletedItem);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});