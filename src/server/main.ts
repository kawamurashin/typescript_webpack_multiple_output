const port:number = 11003;
const express = require('express');
const app = express();
app.use(express.static('dist/public'));
app.listen(port, () =>
{
    console.log('Listening on port ' + port);
    console.log("http://localhost:" + port);
});
console.log("start!");