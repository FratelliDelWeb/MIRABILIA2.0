var  Db = require('./dbconnections');
const Cliente = require('./objects/Cliente');
const  express = require('express');
const  bodyParser = require('body-parser');
const  cors = require('cors');
const  app = express();
const  router = express.Router();

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.use((request, response, next) => {
  console.log('middleware');
  next();
});



router.route('/clienti').get((request, response) => {
  Db.getClienti().then((data) => {
    response.json(data[0]);
  })
})

router.route('/clienti/:id').get((request, response) => {
  Db.getCliente(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/clienti').post((request, response) => {
  let  cliente = { ...request.body }
  Db.addCliente(cliente).then(data  => {
    response.status(201).json(data);
  })
})


var  port = process.env.PORT || 8080;
app.listen(port);
console.log('Order API is runnning at ' + port);