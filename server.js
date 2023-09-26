const express = require('express');
const app = express();
const router = require('./router');
const path = require('path');
const {middlewareGlobal} = require('./src/middlewares/middlewaresGlobal');

// app.use(express.urlencoded({extended:false}))
app.use(express.static(path.resolve(__dirname, 'public/assets')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set("view engine", "ejs");


// USE MIDDLEWARES
app.use(middlewareGlobal);
// USE ROUTERS
app.use(router);

// STart up our server
app.listen(4444, () => {
  console.log('Listen Port')
  console.log('access the port http://localhost:4444');
})
