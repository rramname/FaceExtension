

    window.addEventListener("message", function(event) {
        // if (event.source != window)
        //     return;
    
        if (event.data.type && (event.data.type == "FD")) {
            chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
              });

        }
    });
    
    
