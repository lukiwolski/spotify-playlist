// express imports
import express from 'express';
import path from 'path';

const app = express();

app.use(express.static('app'));

app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});