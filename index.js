// replace these values with those generated in your TokBox Account
var apiKey = "46482492";
var sessionId = "2_MX40NjQ4MjQ5Mn5-MTU3NzEyODM5MTE0MX5mT1V2TXlMWmpFMXZVVDF3cTkyVG1YU1F-fg";
var token = "T1==cGFydG5lcl9pZD00NjQ4MjQ5MiZzaWc9YTYwM2MxNGZhNWExNmY0Njk0NWRhMGFhZGJmMzFhY2M5MDI1NDgyMzpzZXNzaW9uX2lkPTJfTVg0ME5qUTRNalE1TW41LU1UVTNOekV5T0RNNU1URTBNWDVtVDFWMlRYbE1XbXBGTVhaVlZERjNjVGt5VkcxWVUxRi1mZyZjcmVhdGVfdGltZT0xNTc3MTI4NDUzJm5vbmNlPTAuNDA3Njg5NzEyNDI2ODE5NzMmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU3OTcyMDQ1MiZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";

// (optional) add server code here

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '50rem'
    }, handleError);
  });

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '50rem'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}

initializeSession();
