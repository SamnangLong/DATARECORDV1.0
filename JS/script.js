var connection_status= false;
var subTopic='' ;


setTimeout(function() {
    ConnectToMQTT();
  }, 2000);
function ConnectToMQTT(){
    // Generate a random number for the client ID
    const randomClientNumber = Math.floor(Math.random() * 1000) + 1;
    const clientID = 'DATA_RECORD' + randomClientNumber;
          host = 'blithesome-chiropractor.cloudmqtt.com';
          port = 443;

    // Create a client instance
    // client = new Paho.MQTT.Client('e8f424ec.emqx.cloud', 8083, "test");
    client = new Paho.MQTT.Client(host, Number(port), clientID);

    // set callback handlers
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

    // connect the client
    client.connect({
      onSuccess: onConnect,
      // onFailure: onFailure,
      useSSL: true,

      userName: 'rwufzabs',
      password: 'kVZNw5Tuj6e5',
      mqttVersion:4
  });
}


// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  connection_status = true ;
  // alert("Connect to server is success.");
  setTimeout(() => {
    console.log('Connection successful!');
  }, 2000);

  const subTopic1 = 'VFD_DATA' ;
  const subTopic2 = 'DOL_DATA' ;
  qos = 0;
  client.subscribe(subTopic1);
  client.subscribe(subTopic2);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+ responseObject.errorMessage);
      alert("MQTT Connection Lost");
    }
}
  
  
  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
      
    const values = message.payloadString.split(',');

    if(message.destinationName === 'VFD_DATA'){
        document.getElementById('rows_V11').value += `${values[0]}\n`;
        document.getElementById('rows_V12').value += `${values[1]}\n`;
        document.getElementById('rows_V13').value += `${values[2]}\n`;
        document.getElementById('rows_V14').value += `${values[3]}\n`;
        document.getElementById('rows_V15').value += `${values[4]}\n`;
        document.getElementById('rows_V16').value += `${values[5]}\n`;

        document.getElementById('rows_V21').value += `${values[6]}\n`;
        document.getElementById('rows_V22').value += `${values[7]}\n`;
        document.getElementById('rows_V23').value += `${values[8]}\n`;
        document.getElementById('rows_V24').value += `${values[9]}\n`;
        document.getElementById('rows_V25').value += `${values[10]}\n`;
        document.getElementById('rows_V26').value += `${values[11]}\n`;

        document.getElementById('rows_V31').value += `${values[12]}\n`;
        document.getElementById('rows_V32').value += `${values[13]}\n`;
        document.getElementById('rows_V33').value += `${values[14]}\n`;
        document.getElementById('rows_V34').value += `${values[15]}\n`;
        document.getElementById('rows_V35').value += `${values[16]}\n`;
        document.getElementById('rows_V36').value += `${values[17]}\n`;

        document.getElementById('rows_V41').value += `${values[18]}\n`;
        document.getElementById('rows_V42').value += `${values[19]}\n`;
        document.getElementById('rows_V43').value += `${values[20]}\n`;
        document.getElementById('rows_V44').value += `${values[21]}\n`;
        document.getElementById('rows_V45').value += `${values[22]}\n`;
        document.getElementById('rows_V46').value += `${values[23]}\n`;

        document.getElementById('rows_V51').value += `${values[24]}\n`;
        document.getElementById('rows_V52').value += `${values[25]}\n`;
        document.getElementById('rows_V53').value += `${values[26]}\n`;
        document.getElementById('rows_V54').value += `${values[27]}\n`;
        document.getElementById('rows_V55').value += `${values[28]}\n`;
        document.getElementById('rows_V56').value += `${values[29]}\n`;

        document.getElementById('rows_V61').value += `${values[30]}\n`;
        document.getElementById('rows_V62').value += `${values[31]}\n`;
        document.getElementById('rows_V63').value += `${values[32]}\n`;
        document.getElementById('rows_V64').value += `${values[33]}\n`;
        document.getElementById('rows_V65').value += `${values[34]}\n`;
        document.getElementById('rows_V66').value += `${values[35]}\n`;

        document.getElementById('rows_V71').value += `${values[36]}\n`;
        document.getElementById('rows_V72').value += `${values[37]}\n`;
        document.getElementById('rows_V73').value += `${values[38]}\n`;
        document.getElementById('rows_V74').value += `${values[39]}\n`;
        document.getElementById('rows_V75').value += `${values[40]}\n`;
        document.getElementById('rows_V76').value += `${values[41]}\n`;
    }
    else if (message.destinationName === 'DOL_DATA') {
        // Display data from DOL_DATA topic
        document.getElementById('rows_D11').value += `${values[0]}\n`;
        document.getElementById('rows_D12').value += `${values[1]}\n`;
        document.getElementById('rows_D13').value += `${values[2]}\n`;
        document.getElementById('rows_D14').value += `${values[3]}\n`;
        document.getElementById('rows_D15').value += `${values[4]}\n`;
        document.getElementById('rows_D16').value += `${values[5]}\n`;

        document.getElementById('rows_D21').value += `${values[6]}\n`;
        document.getElementById('rows_D22').value += `${values[7]}\n`;
        document.getElementById('rows_D23').value += `${values[8]}\n`;
        document.getElementById('rows_D24').value += `${values[9]}\n`;
        document.getElementById('rows_D25').value += `${values[10]}\n`;
        document.getElementById('rows_D26').value += `${values[11]}\n`;

        document.getElementById('rows_D31').value += `${values[12]}\n`;
        document.getElementById('rows_D32').value += `${values[13]}\n`;
        document.getElementById('rows_D33').value += `${values[14]}\n`;
        document.getElementById('rows_D34').value += `${values[15]}\n`;
        document.getElementById('rows_D35').value += `${values[16]}\n`;
        document.getElementById('rows_D36').value += `${values[17]}\n`;

        document.getElementById('rows_D41').value += `${values[18]}\n`;
        document.getElementById('rows_D42').value += `${values[19]}\n`;
        document.getElementById('rows_D43').value += `${values[20]}\n`;
        document.getElementById('rows_D44').value += `${values[21]}\n`;
        document.getElementById('rows_D45').value += `${values[22]}\n`;
        document.getElementById('rows_D46').value += `${values[23]}\n`;

        document.getElementById('rows_D51').value += `${values[24]}\n`;
        document.getElementById('rows_D52').value += `${values[25]}\n`;
        document.getElementById('rows_D53').value += `${values[26]}\n`;
        document.getElementById('rows_D54').value += `${values[27]}\n`;
        document.getElementById('rows_D55').value += `${values[28]}\n`;
        document.getElementById('rows_D56').value += `${values[29]}\n`;

        document.getElementById('rows_D61').value += `${values[30]}\n`;
        document.getElementById('rows_D62').value += `${values[31]}\n`;
        document.getElementById('rows_D63').value += `${values[32]}\n`;
        document.getElementById('rows_D64').value += `${values[33]}\n`;
        document.getElementById('rows_D65').value += `${values[34]}\n`;
        document.getElementById('rows_D66').value += `${values[35]}\n`;

        document.getElementById('rows_D71').value += `${values[36]}\n`;
        document.getElementById('rows_D72').value += `${values[37]}\n`;
        document.getElementById('rows_D73').value += `${values[38]}\n`;
        document.getElementById('rows_D74').value += `${values[39]}\n`;
        document.getElementById('rows_D75').value += `${values[40]}\n`;
        document.getElementById('rows_D76').value += `${values[41]}\n`;
    }
}