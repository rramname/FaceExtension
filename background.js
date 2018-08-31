console.log("background")


navigator.webkitGetUserMedia({audio: true, video: true}, function() {
    console.log('ok');
}, function(e) {
    console.log(e);
});
// function init() {
//     navigator.webkitGetUserMedia({audio:false, video:true},
//                                  onGetStream,
//                                  onGetStreamFailed);
//   }
  
//   function onGetStream(stream) {
//     console.log('Got stream', stream);
//   }
  
//   function onGetStreamFailed(e) {
//     console.log('Failed to get stream', e);
//   }
  

function init() {
    sr = new  webkitSpeechRecognition();
    sr.onresult = onSpeechResult;
    sr.onerror = onSpeechError;
    sr.maxAlternatives = 10;
    sr.lang = 'en';
    sr.continuous = true;
    sr.interimResults = true;
    sr.start();
  }
  
  function onSpeechResult(res) {
    console.log('Speech result', res);
  }
  
  function onSpeechError(err) {
    console.log('Speech error', err);
  }
  
  //init();
  
  