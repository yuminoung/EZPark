

function flyToCarpark(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 15
    });
}


//pop a textbox on the map showing details when user cliked the sidebar carparks
function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    // Check if there is already a popup on the map and if so, remove it
    if (popUps[0]) popUps[0].remove();
    var popup = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML('<h3>' + currentFeature.properties.id + '</h3>' +
            '<h4>' + currentFeature.properties.status + '</h4>')
        .addTo(map);
}


function buildLocationList(data) {
    for (i = 0; i < data.features.length; i++) {
        // Create an array of all the stores and their properties
        var currentFeature = data.features[i];
        // Shorten data.feature.properties to just `prop` so we're not
        // writing this long form over and over again.
        var prop = currentFeature.properties;
        // Select the listing container in the HTML
        var listings = document.getElementById('listings');
        // Append a div with the class 'item' for each store
        var listing = listings.appendChild(document.createElement('div'));
        listing.className = 'item';
        listing.id = "listing-" + i;
        // Create a new link with the class 'title' for each store
        // and fill it with the store address
        var link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link.dataPosition = i;
        link.innerHTML = prop.id;
        var details = listing.appendChild(document.createElement('div'));
        details.innerHTML = prop.status;
        details.innerHTML += ' · estimated ' + prop.distance + ' meters';
        link.addEventListener('click', function (e) {
            // Update the currentFeature to the store associated with the clicked link
            var clickedListing = data.features[this.dataPosition];
            // 1. Fly to the point associated with the clicked link
            flyToCarpark(clickedListing);
            // 2. Close all other popups and display popup for clicked store
            createPopUp(clickedListing);
            // 3. Highlight listing in sidebar (and remove highlight for all other listings)
            var activeItem = document.getElementsByClassName('active');
            if (activeItem[0]) {
                activeItem[0].classList.remove('active');
            }
            this.parentNode.classList.add('active');
        });
    }
}