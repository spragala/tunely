let express = require("express"),
    app = express();
    db = require('./models');
    // need to include body-parser
let controllers = require('./controllers');
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', function homepage(req, res){
  res.sendFile(__dirname + '/views/index.html')
});

app.get('/api', controllers.api.index);

app.get('/api/album', controllers.album.index);

app.post('/api/album', controllers.album.create);




app.listen(process.env.PORT || 8000, function (){
  console.log("Tune.ly server is up and running on http://localhost:8000/")
});
