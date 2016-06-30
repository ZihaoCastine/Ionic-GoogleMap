angular.module('app.controller',[])

.controller('MapController', function($scope, getEventData,eventsFactory) {
      function initialize() {


        var myLatlng = new google.maps.LatLng(39.7473430,-75.5471370);
        var bounds = new google.maps.LatLngBounds();
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP

        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);

        //Marker + infowindow
      //  var contentString = "<p>Event Name: Slick Back Party<br>Time: 12:00AM</p>";
      eventsFactory.getEvents().then(function(resp){
        $scope.events= resp.data;
        $scope.infoWindowContent = getEventData.getInfoWindowContent($scope.events);
        $scope.markers=getEventData.getMarkers($scope.events);
        var infowindow = new google.maps.InfoWindow(), marker, i;
      //  console.log(hi+"$scope.events");

          // Loop through our array of markers & place each one on the map
        for( i = 0; i <  $scope.markers.length; i++ ) {
            var position = new google.maps.LatLng($scope.markers[i][1], $scope.markers[i][2]);
            bounds.extend(position);
            marker = new google.maps.Marker({
                position: position,
                map: map,
                title: $scope.markers[i][0]
            });

            // Allow each marker to have an info window
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent($scope.infoWindowContent[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));

            // Automatically center the map fitting all markers on the screen
              map.fitBounds(bounds);
            }
          })

      }

      google.maps.event.addDomListener(window, 'load', initialize());

    })

.controller('loginController', function($scope,$state) {
  $scope.markerMap=function(){
    $state.go('googleMap');
  }

  $scope.heatMap=function(){
    $state.go('heatMap');
  }
})


.controller('heatMapController', function($scope) {
  function initialize() {


    var myLatlng = new google.maps.LatLng(39.7473430,-75.5471370);
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP

    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var heatMapData = [
      {location: new google.maps.LatLng(39.7473430,-75.5471370), weight: 1},
      {location: new google.maps.LatLng(39.7473420,-75.5471370), weight: 1},
      {location: new google.maps.LatLng(39.7473410,-75.5471370), weight: 1},
      {location: new google.maps.LatLng(39.7473400,-75.5471370), weight: 1},
      {location: new google.maps.LatLng(39.7473440,-75.5471370), weight: 1},
      {location: new google.maps.LatLng(39.7473450,-75.5471370), weight: 1},
      {location: new google.maps.LatLng(39.7461310,-75.5473880), weight: 1},
      {location: new google.maps.LatLng(39.7451310,-75.5483880), weight: 1}



      ];

  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatMapData
  });
  heatmap.setMap(map);

  }

  google.maps.event.addDomListener(window, 'load', initialize());
})
