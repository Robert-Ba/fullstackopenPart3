const mongoose = require('mongoose')

if (!process.argv[2]) {
  console.log('Password is required')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const phone = process.argv[4]

const url = `mongodb+srv://rbalchunas:${password}@cluster0.2pzb7i0.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`
mongoose.set('strictQuery', false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

Person = mongoose.model('Person', personSchema)

if(name) {
  // Save new person
  const person = new Person({
    name: name,
    number: phone
  })

  person.save().then(res => {
    console.log(`Added ${name} number ${phone} to phonebook`)
    mongoose.connection.close()
  })
} else {
  // Log persons
  Person
    .find({})
    .then(persons => {
      console.log('Phonebook:')
      persons.forEach(person => {
        console.log(person.name, person.number)
      })

      mongoose.connection.close()
    })
}
