var VP_ODOMETER = VP_ODOMETER || {};

VP_ODOMETER.init = function(){

  function loadCSS( link ){
    var fileref = document.createElement( 'link' );
    fileref.setAttribute( "rel","stylesheet" );
    fileref.setAttribute( "href", link );
    document.getElementsByTagName("head")[0].appendChild( fileref );
  }

  loadCSS( "http://github.hubspot.com/odometer/themes/odometer-theme-train-station.css" );

  VP_ODOMETER.initialCount();
}

VP_ODOMETER.firstCount = 3224573.0;
VP_ODOMETER.totalCount = 0;
VP_ODOMETER.increment = 0.075;
VP_ODOMETER.startingDate = '10/21/2021';

VP_ODOMETER.initialCount = function(){
  var startDate = new Date( VP_ODOMETER.startingDate );
  var todayDate = new Date();
  var diffTime = Math.abs( todayDate - startDate );
  var addedCount = diffTime/1000 * VP_ODOMETER.increment;
  VP_ODOMETER.totalCount = VP_ODOMETER.firstCount + addedCount;
  VP_ODOMETER.updateCount();
};

VP_ODOMETER.updateCount = function(){
  VP_ODOMETER.totalCount += VP_ODOMETER.increment;
  odometer.innerHTML = VP_ODOMETER.totalCount;
  setTimeout( VP_ODOMETER.updateCount, 1000 );
}

VP_ODOMETER.init();
