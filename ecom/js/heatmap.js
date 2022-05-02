const ses_id = uuidv4();
const pg_id = "f8eccf87-9b5d-4f24-9032-64e67e783d51";
var socket = io("https://heatmap-ws.herokuapp.com");
// var socket = io("http://0.0.0.0:8765");

socket.on('connect', function() {
        socket.emit('my event', {data: 'I\'m connected!'});
    });

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
};

(function() {
    "use strict";


    initWatchers();
    console.log('Initializing Visitor Tracker done.');


    function initWatchers() {
        // watch mouse clicks
        watch(document, 'click', function(event) {
            return { session_id: ses_id, page_id: pg_id, x: event.clientX, y: event.clientY };
        });

        // watch mouse move
       // watch(document, 'mousemove', function(event) {
       //     return { type: 'MOUSE_MOVE', x: event.clientX, y: event.clientY };
       // });
    }

    function watch(target, eventName, transformEventCb, callCbOnInit) {
        if (callCbOnInit) {
            sendMessage(transformEventCb(null));
        }

        target.addEventListener(eventName, function(event) {
            sendMessage(transformEventCb(event));
        }, true);
    }

    function sendMessage(event) {
        console.log("sending socket message",JSON.stringify(event));
        socket.emit("click", JSON.stringify(event));
    }
})();
