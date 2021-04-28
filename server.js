const express= require('express')
const app=express();
const cors = require('cors');
const bodyParser = require('body-parser');

const user=require('./client/routes/user');
const morgan = require('morgan');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.use('/user',user)
app.use('/', express.static('public'));

app.post('/text', (req, res) => {
  const text = req.body.name;fghfg
  res.json({
      success:true,
      user:req.body.name
  })
});


// var myLogger = function(req, res, next) {
//     console.log(req.url);
//     next();
// };

// app.use(myLogger);
app.use(morgan('dev'))

app.get('/api/customers', (req,res)=>{
    const customers =[
        {id: 1, firstName:'John', lastName:'Doe'},
        {id: 2, firstName:'Steve', lastName:'Smith'},
        {id: 3, firstName:'Mary', lastName:'Swanson'},
    ]

    res.json(customers)
})

app.listen(5000, function(){ console.log(`Server started on port 3000`)})
