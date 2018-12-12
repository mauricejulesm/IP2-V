/* An object containing all the various feeds as specified at
* https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
* To be used when generating the buttons.
*/
let quakeFeeds = {
    'past hour': {
      'earthquakes': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson',
      '1.0+': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson',
      '2.5+': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_hour.geojson',
      '4.5+': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_hour.geojson',
      'significant': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_hour.geojson'
    },
    'past day': {
      'earthquakes': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson',
      '1.0+': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.geojson',
      '2.5+': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson',
      '4.5+': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson',
      'significant': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_day.geojson'
    },
    'past week': {
      'earthquakes': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson',
      '1.0+': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.geojson',
      '2.5+': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson',
      '4.5+': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson',
      'significant': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson'
    },
    'past month': {
      'earthquakes': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson',
      '1.0+': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_month.geojson',
      '2.5+': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson',
      '4.5+': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson',
      'significant': 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson'
    }
  };
  
  let map;
  
  /*function initmap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 2,
      center: new google.maps.LatLng(-25.344, 131.036),
      mapTypeId: 'terrain'
    });
  }
  
  function makeChildProps(feeds, currentProp) {
    let childProps = '';
    for (let prop in feeds[currentProp]) {
      let element = '';
      if (feeds[currentProp].hasOwnProperty(prop)) {
        element = `<div class="child-prop"><button class="feed-name" data-feedurl=${feeds[currentProp][prop]}>${prop}</button></div>`;
      }
      console.log(element);
      childProps += element;
    }
    return childProps;
  }
  
  for (let prop in quakeFeeds) {
    if (!quakeFeeds.hasOwnProperty(prop)) {
      continue;
    }
    $('#feedSelector').append(`<div class="'feed-date">${prop}</div>${makeChildProps(quakeFeeds, prop)}`);
    console.log(makeChildProps(quakeFeeds, prop));
  }
  
  $('.feed-name').click((e) => {
    $.ajax({
      url: $(e.target).data('feedurl'),
      success: (data) => {
        let places = [];
        $.each(data.features, (key, val) => {
          // noinspection JSUnresolvedVariable
          places.push(val.properties.place);
        });
        alert(places);
      }
    });
  });
  
  $(document).ready(() => {
    $('#earthquakes').click(load('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.geojson'))
  });
  
  
  function load(url) {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 2,
      center: new google.maps.LatLng(-25.344, 131.036),
      mapTypeId: 'terrain'
    });
  
    $.ajax({
      url: url,
      error: () => {
        $('#info').html('<p>An error has occurred</p>');
      },
      success: (data) => {
        let i = 0;
        let markers = [];
        $.each(data.features, function (key, val) {
          // Get the lati and lng data for use in the markers
          let coords = val.geometry.coordinates;
          let latLng = new google.maps.LatLng(coords[1], coords[0]);
          // Now create a new marker on the map
          markers[i++] = new google.maps.Marker({
            position: latLng,
            map: map
          }); // Add the marker to array to be used by cluster-er
        });
        let markerCluster = new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})
      }
    });
  }*/
  
  
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 2,
      center: new google.maps.LatLng(2.8, -187.3),
      mapTypeId: 'terrain'
    });
  }
  
  function makeChildProps(obj, currentProp) {
    let childProps = '';
  
    for (let prop in obj[currentProp]) {
      let el = "<div class='child-prop'><button class='feed-name' data-feedurl='" + obj[currentProp][prop] + "'>" + prop + "</button></div>";
      childProps += el;
    }
  
    return childProps;
  }
  
  for (var prop in quakeFeeds) {
    if (!quakeFeeds.hasOwnProperty(prop)) {
      continue;
    }
    $('#feedSelector').append("<div class='feed-date'>" + prop + "</div>" + makeChildProps(quakeFeeds, prop));
    console.log(makeChildProps(quakeFeeds, prop));
  }
  
  switchMap = (url) => {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 2,
      center: new google.maps.LatLng(2.8, -187.3),
      mapTypeId: 'terrain'
    });
  
    $.ajax({
      url: url,
      error: function () {
        $('#info').html('<p>An error has occurred</p>');
      },
  
      success: function (data) {
        i = 0;
        let markers = [];
        $.each(data.features, function (key, val) {
          let coords = val.geometry.coordinates;
          lat = coords[1];
          lng = coords[0];
  
          let latLng = new google.maps.LatLng(lat, lng);
          let marker = new google.maps.Marker({
            position: latLng,
            map: map,
            label: val.properties.mag.toString()
          });
          the_href = val.properties.url + "\'" + ' target=\'_blank\'';
          let infowindow = new google.maps.InfoWindow({
            content: " <div id=\"weatherImage\"></div>\n" +
                " <div id=\"weatherInfo\">No Weather data available</div>"
          });
  
          marker.addListener('click', function () {
            // We use the lat and lon as the parameters in the API call to weather service
            let lat = marker.position.lat();
            let lng = marker.position.lng();
            theURL = 'http://api.apixu.com/v1/current.json?key=241ab0f9ad074597a52135112181012&q=' + lat.toFixed(4) + ',' + lng.toFixed(4);
            $.ajax({
              url: theURL,
              success: function (data) {
                image = new Image();
                if (data.error) {
                  image.src = "http://via.placeholder.com/64x64?text=%20"; // Error, so we use blank image for weather. See 'error:' below for another way to include a small blank image
                }
                else {
                  image.src = "http:" + data.current.condition.icon;
                  $('#weatherInfo').html('<p>Description: ' + data.current.condition.text + '</p>' +
                      '<p>Temperature: ' + data.current.temp_c + '&#8451</p>' +
                      '<p></p>' //TODO add the need data
                  );
                }
                image.onload = function () {
                  $('#weatherImage').empty().append(image);
                };
  
              },
              error: function () {
                image = new Image();
                image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAAPElEQVR42u3OMQEAAAgDIJfc6BpjDyQgt1MVAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBgXbgARTAX8ECcrkoAAAAAElFTkSuQmCC";
                image.onload = function () {
                  //set the image into the web page
                  $('#weatherImage').empty().append(image);
                };
              }
            });
            infowindow.open(map, marker);
          });
          markers[i++] = marker;
        });
        let markerCluster = new MarkerClusterer(map, markers,
            { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
      }
    });
  };
  
  $('.feed-name').click(function (e) {
    // We fetch the earthquake feed associated with the actual button that has been pressed.
    // In this example we are not plotting on a map, just demonstrating how to get the data.
    $.ajax({
      url: $(e.target).data('feedurl'), // The GeoJSON URL associated with a specific button was stored in the button's properties when the button was created
  
      success: function (data) {  // We've received the GeoJSON data
        let places = []; // We store the names of earthquake locations in this array
        $.each(data.features, function (key, val) {  // Just get a single value ('place') and save it in an array
          places.push(val.properties.place); // Add a new earthquake location to the array.
        });
        switchMap($(e.target).data('feedurl')); // show all the places in an alert box
      }
    });
  });