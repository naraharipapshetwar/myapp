const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB',{useNewUrlParser : true,useUnifiedTopology:true},(err)=> {
    if(!err) {
        console.log('mongodb conection successfull...');
    }
    else{
        console.log('erroe in db connection '+err);
    }
    
 });


 require("./employee_model");
