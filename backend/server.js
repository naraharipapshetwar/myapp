require('./models/db');
const express = require('express');
const cors = require('cors');
const employeeController = require('./controllers/employeeController');
const Employee = require('./models/Employee');

const app = express();

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send('Welcome')
})

app.post('/posts', (req, res) => {
    // do a db call

    const data = req.body;


    // if (data.length !== 10)
    //         return res.status(400).send('invalid length')

    console.log(data)

    // const newEmployee=new Employee(data)

    const arr = [
        {
            name: 'first doc',
            description:'first desc'
        },
        {
            name: 'second doc',
            description:'second desc'
        }
    ]
    res.status(200).send(arr);
})


 app.listen(5000, ()=> {
     console.log('express server started at port 5000');
 });

app.use('/employee',employeeController);