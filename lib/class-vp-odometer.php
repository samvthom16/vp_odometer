<?php

  class VP_ODOMETER{

    function __construct(){
      add_shortcode( 'vp_odometer', function( $atts ){
        ob_start();
        ?>

        <!-- Odometer includes -->
        <div id="odometer" class="odometer"></div>
        <script src="http://github.hubspot.com/odometer/odometer.js"></script>
        <script type='text/javascript' src='<?php echo plugins_url( 'main.js' , dirname(__FILE__) );?>'></script>
        <?php
        return ob_get_clean();
      } );
    }

  }

  new VP_ODOMETER;
