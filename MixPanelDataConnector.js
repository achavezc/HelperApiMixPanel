//   You put the mat down, and then you jump to conclusions
module.exports = require('./lib/mixpanel');
mixpanel = require('./lib/mixpanel');


var  api_secret = '447e92839ec3755e52b7c559ebe15d31';

var mx = new mixpanel({
    api_secret: api_secret
});

mx.export_data({ from_date: '2017-02-11', to_date: '2017-03-11' }, function(res) {
    res.on('data', function(event_object) {
        console.dir(event_object);
    });
    res.on('end', function() {
        console.log('All events have been retrieved');
    });
});
