const express = require('express')
const app = express()

const PORT = 3001

app.use(express.json())

// hardcoded persons data
let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

// Return all persons
app.get('/api/persons', (req, res) => {
  res.json(persons)
})

// Return info page
app.get('/info', (req, res) => {
  res.send(`
    <div>
      <p>Phonebook has info for ${persons.length} people</p>
      <p>${new Date()}</p>
    </div>
  `)
})

// Return data for one person
app.get('/api/persons/:id', (req, res) => {
  const person = persons.find(person => person.id === Number(req.params.id))

  if(person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

// Delete a person from persons data
app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  res.status(204).end()
})

// Add a person
app.post('/api/persons', (req, res) => {
  if(typeof req.body.name !== 'string' || req.body.name.length < 1) {
    return res.status(422).json({
      message: 'name is required'
    })
  }
  
  if(typeof req.body.number !== 'string' || req.body.number.length < 1) {
    return res.status(422).json({
      message: 'phone number is required'
    })
  }

  if(persons.find(person => person.name === req.body.name)) {
    return res.status(409).json({
      message: 'name already exists'
    })
  }

  const person = {
    id: Math.round(Math.random() * 10000),
    name: req.body.name,
    number: req.body.number
  }

  persons = persons.concat(person)

  res.json(person)
})


// app.put()
app.listen(PORT, () => {
  console.log(`Express server started on ${PORT}`)
})
