// Carpark Controller

const fetch = require('node-fetch')
const api_url = 'https://data.melbourne.vic.gov.au/resource/dtpv-d4pf.json'


// show the status of carparks using a pie chart 
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
	fetch(parking_by_id)
		.then(res => res.json())
		.then(json => {
			// console.log(json[0])
			res.render('carpark/carpark_id',
				{
					status: JSON.stringify(json[0]['status']),
					lat: JSON.stringify(json[0]['lat']),
					lon: JSON.stringify(json[0]['lon']),
					id: JSON.stringify(json[0]['bay_id'])
				})
		})
		.catch(err => console.log(err))
}

module.exports.index = index
module.exports.show = show