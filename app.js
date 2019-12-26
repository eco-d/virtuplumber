// replace these values with those generated in your TokBox Account
var apiKey = "46482492";
var sessionId = "1_MX40NjQ4MjQ5Mn5-MTU3NzM5MDQ2MjcwMX52WExMZGY1bnFiYzlINWNpcGJZcEwvRDB-fg";
var token = "T1==cGFydG5lcl9pZD00NjQ4MjQ5MiZzaWc9MDdhMjZlZDUzOTY5ZTYyYzQzMWE2MzgxNWM0ZTBhNmE1NmNhNGUyZDpzZXNzaW9uX2lkPTFfTVg0ME5qUTRNalE1TW41LU1UVTNOek01TURRMk1qY3dNWDUyV0V4TVpHWTFibkZpWXpsSU5XTnBjR0paY0V3dlJEQi1mZyZjcmVhdGVfdGltZT0xNTc3MzkwNjk1Jm5vbmNlPTAuOTk1NjM1OTA2MzkyNzk5MSZyb2xlPXN1YnNjcmliZXImZXhwaXJlX3RpbWU9MTU3NzQxMjI5NCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";

// (optional) add server code here
    // var SERVER_BASE_URL = 'https://virtplumber.herokuapp.com'; //'http://localhost:8080/room';
    // fetch(SERVER_BASE_URL + '/session').then(function(res) {
    //   return res.json();
    // }).then(function(res) {
    //   apiKey = res.apiKey;
    //   sessionId = res.sessionId;
    //   token = res.token;
    //   initializeSession();
    // }).catch(handleError);



// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
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

session.on('streamCreated', function(event) {
  session.subscribe(event.stream, 'subscriber', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);
});

initializeSession();
