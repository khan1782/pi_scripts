
const fetch = require('node-fetch');

const PDU_URL = "http://syn.dyndns.org:8001";
const PDU_AUTHORIZATION = "dGVzdG1lOnRlc3RtZQ=="

const pdu_url_path= (outlet_index, state) =>  `/cmd.cgi?$A3%20${outlet_index}%20${state}`

async function toggleOutlet(outlet_index, state) {
	let response = await fetch(`${PDU_URL}${pdu_url_path(outlet_index,state)}`, {
		"credentials":"include",
		"headers":{
			"Authorization":`Basic ${PDU_AUTHORIZATION}`
		},
		"body":null,
	});
	console.log(response);
	console.log(response.text().then(console.log));
}


toggleOutlet("1","0");
toggleOutlet("1","1");



const schedule = require("node-schedule");
const rule = new schedule.RecurrenceRule();
//rule.minute = 40;
// rule.second = 10;
rule.hour = 5;
rule.minute = 15;
var jj = schedule.scheduleJob(rule, function(){
	console.log("execute jj");
	toggleOutlet("1","1");
});





