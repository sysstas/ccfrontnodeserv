var express = require('express')
var app = express()
var path = require('path');
app.set('port', (process.env.PORT || 3000))

app.use(express.static('app'))
app.route('/*').get(function(req, res) { 
    return res.sendFile(path.join( __dirname+'/app/index.html')); 
});

app.listen(app.get('port'), function(){
    console.log('Server is listen on ', app.get('port'))
})