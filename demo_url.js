var url = require('url')
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//parse the adress
var q = url.parse(adr, true);
/*The parse method returns an object containing url properties */
console.log(q.host);
console.log(q.hostname);
console.log(q.search);
console.log(q.port);

/*the query property returns an object with all the querystring parameters as properties:*/
var qdata = q.query;
console.log(qdata.month);
