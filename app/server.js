if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');

app.set('models', './models');
app.use(express.static('./public'));
const router = require('./router');
const PORT = process.env.PORT || 5050;

app.use('router');

// lancement du serveur
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

// toutes les promesses qu'on n'entoure pas d'un try/catch seront automatiquement stoppées ici si elles sont rejetées
// NB : DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process
process.on('unhandledRejection', (err) => {
    console.log('Interception d\'un rejet de promesse');
    console.error(err);
  });