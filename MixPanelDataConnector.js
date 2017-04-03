//   You put the mat down, and then you jump to conclusions
module.exports = require('./lib/mixpanel');
mixpanel = require('./lib/mixpanel');



var mx = new mixpanel({
    api_secret: '447e92839ec3755e52b7c559ebe15d31'
});

lastUpdated = {
  from_date : '2017-03-11',
  to_date : '2017-03-12'
}

function getEvents(lastUpdated){
    mx.export_data({ from_date: lastUpdated.from_date, to_date: lastUpdated.to_date }, function(res) {
        res.on('data', function(event_object) {
            console.dir(event_object);
        });
        res.on('end', function() {
            console.log('All events have been retrieved');
        });
    })
}

getEvents(lastUpdated);