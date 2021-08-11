// Plum Tree Garden
// bitStuff.js

// inserts noninformation bits into data to break up bit patterns

function bit_stuffing() {


  var og_index = [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0];

  var bits = og_index.join();

  var trick = ' ';

  bits = bits.split(',').join(trick);

  var bit_inject = " 0 1 1 1 1 1 1 0 ";

  var bit_switch = "";

  var a, i;

  var ai = 0;

  

  for (i = 0; i < bits.length; i++) {

    a = bits.charAt(i);

    bit_switch = bit_switch + a;

    if (bits[i] == 1) {

      ai++;

    }

    if (ai == 5) {

      bit_switch = bit_switch + " 0 ";

    }

  }

  console.log("PS C:\\dhr> C:\\Users\dhr\\OneDrive\\DCforProgrammers\\bitstuffing4.ps1");

  console.log("Before stuffing: " + bits);

  console.log("After stuffing:  " + bit_switch.replace(/\s\s+/g, ' '));

  console.log("After framing:  " +

              bit_inject.replace(/\s\s+/g, ' ') + 

              bit_switch.replace(/\s\s+/g, ' ') + 

              bit_inject);

  console.log("PS C:\\Users\\dhr>");

}


bit_stuffing()
