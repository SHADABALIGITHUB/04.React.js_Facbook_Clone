const  express = require('express');
const cors =require('cors');
const bodyParser = require('body-parser');
const connection=require('./db');

const app = express();

const port=5000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


const RegisterRoutes = require('./Routes/registerRoutes');
const LoginRoutes=require('./Routes/loginRoute');

app.use('/create',RegisterRoutes);
app.use('/login',LoginRoutes);



app.listen(port, () => {

    console.log(`Server listening on port ${port}`);
});


