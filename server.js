//const cors = require('cors');
const path = require('path');
//const bodyParser = require('body-parser');
//const jwt = require('jsonwebtoken');
const express = require('express');
// const mongoose = require('mongoose');
// const categories = require('./app/controllers/im-categories.controller');
// const productTypes = require('./app/controllers/im-type-product.controller');
// const profilesStores = require('./app/controllers/im-profile-store.controller');
// const user = require('./app/controllers/im-user.controller');
// const config = require('./config/config.server');
const app = express();
//app.use(cors());
//app.use(bodyParser.json());
// mongoose.connect(config.configServer.urlDb);
//
// //REST Профиль магазина
// app.get('/api/allProfiles', profilesStores.getAllProfileStores);
// app.get('/api/getProfile', profilesStores.getProfileStore);
// app.post('/api/changeProfile', profilesStores.changeProfileStore);
// app.post('/api/loadAvatar', profilesStores.loadAvatar);
//
// //REST Категорий и Подкатегорий товаров
// app.get('/api/category', categories.getCategories);
// app.post('/api/createCategory', categories.createCategory);
// app.post('/api/createSubcategory', categories.createSubcategory);
//
// //REST Типов товаров
// app.get('/api/typeProduct', productTypes.getTypeProduct);
// app.post('/api/createTypeProduct', productTypes.createTypeProduct);
//
// //REST Авторизация, Аунтификация, Создание пользователя
// app.post('/api/logoutUser', user.userLogout);
// app.post('/api/loginUser', user.userLogin);
// app.post('/api/createUser', user.createUser);
// app.get('/api/checkUserToken', user.checkUserLogin);
// Раскоментить при продуктовой сборке
//app.use(express.static(__dirname + '/public/shop'));
app.get('*', function (req, res) {
    res.send('Home page');
    res.sendFile(path.join(__dirname + '/public/shop/index.html'));
});
const port = process.env.PORT || 5000;
app.listen(port, () =>
    console.log('Server started on port 5000'));
//module.exports = app;

// const express = require('express');
// const app = express();
// //app.use(express.logger());
//
// app.get('/', function(request, response) {
//     response.send('Hello World!');
// });
//
// const port = process.env.PORT || 5000;
// app.listen(port, function() {
//     console.log("Listening on " + port);
// });
