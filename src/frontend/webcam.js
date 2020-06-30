// https://www.kirupa.com/html5/accessing_your_webcam_in_html5.htm

/**
 * Starts the video with provided selector
 * @param {String} selector 
 */
export const startVideo = (selector) => {
    const video = document.querySelector(selector);

    if (video) {
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({
                    video: true
                })
                .then(function (stream) {
                    video.srcObject = stream;
                })
                .catch(function (err) {
                    console.log("Something went wrong!");
                });
        }
    }
}

export const stopVideo = (selector) => {
    const video = document.querySelector(selector);


    var stream = video.srcObject;
    var tracks = stream.getTracks();

    for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        track.stop();
    }

    video.srcObject = null;

}