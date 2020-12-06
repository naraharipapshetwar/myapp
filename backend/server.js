require('./models/db');
const express = require('express');

const employeeController = require('./controllers/employeeController');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).send('Welcome')
})

app.post('/posts', (req, res) => {
    // do a db call
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