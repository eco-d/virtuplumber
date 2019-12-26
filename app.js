// replace these values with those generated in your TokBox Account
var apiKey = "46482492";
var sessionId = "1_MX40NjQ4MjQ5Mn5-MTU3NzM5MjMxOTc1MH5VNkdMWmRXSDVoSFNHTUNBZ0lJMUNyTG1-fg";
var token = "T1==cGFydG5lcl9pZD00NjQ4MjQ5MiZzaWc9Y2JkMjI1ZWQ4YjYyYzVlNzRlYWQyYzYxNGM1OTdmZjVjYzcxOTgzMzpzZXNzaW9uX2lkPTFfTVg0ME5qUTRNalE1TW41LU1UVTNOek01TWpNeE9UYzFNSDVWTmtkTVdtUlhTRFZvU0ZOSFRVTkJaMGxKTVVOeVRHMS1mZyZjcmVhdGVfdGltZT0xNTc3MzkyMzgzJm5vbmNlPTAuNTE3NjM2OTk3NzcxMTQwNCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTc5OTg0MzgyJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

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
