const express = require('express');

 var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

router.get('/',  (req,res) => {

    res.render("employee/addOrEdit",{
        viewTitle : "Insert Employee"
    });

});

router.post('/' , (req,res) => {
    insertRecord(req,res);
    // if(req.body._id =='')
    //     insertRecord(req,res);
    // else
    //     updateRecord(req,res);

    
});

function insertRecord(req,res){
    
    var employee = new Employee();
    employee.rtino = req.body.rtino; 
employee.rticat = req.body.rticat;    
employee.fullname = req.body.fullname;
employee.gender = req.body.gender;
employee.address = req.body.adress;
employee.datereq = req.body.datereq;
employee.summary = req.body.summary;
employee.extrainformation = req.body.extrainformation;
employee.save((err, doc) => {
    if(!err) {
            res.redirect('employee');

    }
    else{
        if(err.name == 'ValidationError'){
            handleValidationError(err , req.body);

            res.render("employee/addOrEdit",{
                viewTitle : "Insert Employee",
                employee : req.body
           });
        }
                    console.log('error during record insersion : '+err);
    }
})

}

// function insertRecord(req,res){

// var employee = new Employee();
// employee.rtino = req.body.rtino; 
// employee.rticat = req.body.rticat;    
// employee.fullname = req.body.fullname;
// employee.gender = req.body.gender;
// employee.address = req.body.adress;
// employee.datereq = req.body.datereq;
// employee.summary = req.body.summary;
// employee.extrainformation = req.body.extrainformation;


// employee.save((err,doc)=>{
//   if(!err) {
//         res.redirect('employee/list');
//     }else{
//      if(err.name == 'ValidationError'){
//       handleValidationError(err , req.body);
    //     res.render("employee/addOrEdit",{
    //      viewTitle : "Insert Employee",
    //      employee : req.body
    // });
//         }
//         else
//             console.log('error during record insersion : '+err);
//     }
    // }else{
//            console.log('error during record insersion : '+err);
//      }
// });

 //}

// function updateRecord(req,res){
//     Employee.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, doc) =>{
//         if(!err){
//             res.redirect('employee/list');
//         }
//         else {
//             if(err.name == 'ValidationError'){
//                 handleValidationError(err, req.body);
//                 res.render("employee/addOrEdit",{
//                     viewTitle : "Update Employee",
//                     employee : req.body
//                 });
//             }
//             else {
//                 console.log('error dusing record udpdate: '+ err);
//             }
//         }

//     })
// }

router.get('/list',  (req,res) => {

     Employee.find((err,docs)=>{
        if(!err){
             res.render("employee/list" ,{
                 list : docs
             });
         }
         else{
             console.log('Error in retrieving employee list: '+ err);
         }
     }).lean()

    

});

 function handleValidationError(err,body){

 for(field in err.errors){
    switch(err.errors[field].path){
        case 'fullname':
          body['fullNameError']= err.errors[field].message;
            break;

        case 'rtino':
                body['rtinoError']= err.errors[field].message;
                break;

        case 'rticat':
            body['rticatError']= err.errors[field].message;
            break;

        case 'datereq':
            body['datereqError']= err.errors[field].message;
            break;

        case 'summary' :
            body['summaryError']= err.errors[field].message;
            break;

        case 'extrainformation':
            body['extrainformationError']= err.errors[field].message;
            break;


        default : 
            break;
    }
}

 }

// router.get('/:id',  (req,res) => {
//     Employee.findById(req.params.id, (err, doc)=> {
//         if(!err){
//             res.render("employee/addOrEdit",{
//                 viewTitle : "Update Employee",
//                 employee : doc
//             });
//         }
//     }).lean()
// });

// router.get('/delete/:id', (req,res) =>{
//     Employee.findByIdAndRemove(req.params.id, (err, doc) => {
//         if(!err) {
//             res.redirect('/employee/list');
//         }
//         else {
//             console.log('Error in employee delete :'+ err);
//         }
//     });
// });


 module.exports = router;