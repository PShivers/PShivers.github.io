const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render();
});

app.use(express.static(__dirname + '/client/build/'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })

const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log(
    'Express server listening on port %d in %s mode',
    this.address().port,
    app.settings.env
  );
});
