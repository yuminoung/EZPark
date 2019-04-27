// Carpark Controller

const fetch = require('node-fetch')
const api_url = 'https://data.melbourne.vic.gov.au/resource/dtpv-d4pf.json'


//show all the street parking locations
var index = function (req, res) {
	fetch(api_url)
		.then(res => res.json())
		.then(json => {

			var occu_count = 0
			var unccu_count = 0

			for (var i = 0; i < json.length; i++) {
				if (json[i]['status'] == 'Unoccupied') {
					unccu_count += 1
				} else {
					occu_count += 1
				}
			}
			res.render('carpark/carpark_pie', {
				occu: JSON.stringify(occu_count),
				unccu: JSON.stringify(unccu_count),
				total: JSON.stringify(json.length)
			})
		})
		.catch(err => console.log(err))
}


//show a single street parking location
var show = function (req, res) {
	let parking_by_id = api_url + '?bay_id=' + req.params.id
	fetch(parking_by_id).then(res => res.json()).then(json => res.send(json)).catch(err => console.log(err))
}

module.exports.index = index
module.exports.show = show