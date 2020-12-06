const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    }
})

// var employeeSchema = new mongoose.Schema({

//         rtino : {
//             type :String,
//             required : true
//         },

//         rticat :{
//             type : String,
//             required : true
//         },

//         fullname : {
//             type :String,
//             required : true
//         },

//         gender : {
//              type :String,
//         },

//         address : {
//             type :String,
//        },
//         datereq : {
//                 type :String,
//                 required : true
//             },

//         summary : {
//              type :String,
//             required : true
//         },

//     extrainformation : {
//         type : String,
//         required : true
//     }
// });

// employeeSchema.path('email').validate((val)=>{
//     emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     return emailRegex.test(val);
    
// },'Invalid email.');

mongoose.model('Employee', employeeSchema);