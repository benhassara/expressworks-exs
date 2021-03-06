var express = require('express');
var app = express();
var crypto = require('crypto');

app.put('/message/:id', function(req, res) {
  var id = req.params.id;
  var response = crypto.createHash('sha1')
                       .update(new Date().toDateString() + id)
                       .digest('hex');
  res.end(response);
});

app.listen(process.argv[2]);
