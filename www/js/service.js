angular.module('app.service', [])

.service('getEventData', function(){

  this.getMarkers=function(eventArray){
    var markers=[];
    for(i=0; i<eventArray.length;i++){
      var events=eventArray[i];
      var marker=[];
      marker.push(events.location_name);
      marker.push(events.lat);
      marker.push(events.lng);
      markers.push(marker);

  }
    return markers;
  };

  this.getInfoWindowContent=function(eventArray){
      var infoWindowContent=[];
      for(i=0; i<eventArray.length;i++){
        var events=eventArray[i];
        infoWindowContent.push(['<div class="info_content">' +
        '<h3>'+ events.event_name +'</h3>' +
        '<p>'+ events.event_time+'</p>' + '</div>']);
    }

    return infoWindowContent;
  };

})
