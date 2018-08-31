
//chrome.contentSettings.CameraContentSetting="ALLOW"
        
//console.log(chrome.contentSettings.CameraContentSetting);
//setTimeout(function(){login()},4000);

// var video = document.getElementById('video');

// // Get access to the camera!
// if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//     // Not adding `{ audio: true }` since we only want video now
//     navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
//         video.src = window.URL.createObjectURL(stream);
//         video.play();
//     });
// }

// function login(){
//     document.getElementsByClassName("js-username-field")[0].value="rramname"
// }

var gotImage=false;
 function login() {
  var video = document.getElementById('video');
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  var tracker = new tracking.ObjectTracker('face');
  tracker.setInitialScale(4);
  tracker.setStepSize(2);
  tracker.setEdgesDensity(0.1);

  tracking.track('#video', tracker, { camera: true });

  tracker.on('track', function(event) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    event.data.forEach(function(rect) {
      context.strokeStyle = '#a64ceb';
      context.strokeRect(rect.x, rect.y, rect.width, rect.height);
      context.font = '11px Helvetica';
      context.fillStyle = "#fff";
      context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
      context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
      var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0,0, 200, 200);
        canvas.toBlob((blb => { this.Detect(blb) }))
      
    });
    
    //tracker.stop();
  });
  
//  var gui = new dat.GUI();
//   gui.add(tracker, 'edgesDensity', 0.1, 0.5).step(0.01);
//   gui.add(tracker, 'initialScale', 1.0, 10.0).step(0.1);
//   gui.add(tracker, 'stepSize', 1, 5).step(0.1);
};

function Detect(file){

    // if(gotImage==false){
    //     console.log("getting")
    
    // var xmlHttp = new XMLHttpRequest();
    //     var url="https://tagtheface.herokuapp.com/getFaceData";
    //     xmlHttp.open("POST",url,true);
    // xmlHttp.setRequestHeader("Content-Type", "application/octet-stream");
    //     xmlHttp.send(file);
    //     xmlHttp.onreadystatechange = function (response) {
    // if (this.readyState == 4 && this.status == 200) {
    //  let face=JSON.parse(this.responseText)
    //    console.log(face[0])
       
    //    }
    //     }
   
    //     gotImage=true;
    // }
}