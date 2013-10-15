  var eggcount = 0;
  var alleggcount= 0;
  var allcount = document.getElementById('allcount');
  var count = document.getElementById('count');
  
  var element = document.getElementById('eggy');
   function countEggy(){
        eggcount++;
        alleggcount++;
        document.getElementById('allcount').innerHTML = alleggcount;
        document.getElementById('count').innerHTML = eggcount;

    }
    
    