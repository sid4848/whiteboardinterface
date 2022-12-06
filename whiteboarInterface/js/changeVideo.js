
var selectedHandStyle = document.getElementById("handStyleSelect")
var selectedImage = document.getElementById("imageSelect")
var selectingVideo = document.getElementById("myVideo")
var playButton = document.getElementById("myBtn")

// const images = ["../img/Hellworld.svg", "../img/GoodDay.svg", "../img/Happy.svg", "../img/Enjoy.svg", "../img/curve.svg"]
// const values = ["a", "b"]

function changeVideo() {

    let classname = "btn play_button btn-primary"
    
        if (selectedImage.value === "../img/Hellworld.svg") {
            playButton.className = classname
            if (selectedHandStyle.value === "a") {
                console.log("selecting video a")
                selectingVideo.src = "../video/HelloWorld1.mp4"
                console.log(selectingVideo.src)
            } else {
                console.log("selecting video b")
                selectingVideo.src = "../video/HelloWorld2.mp4"
                console.log(selectingVideo.src)
            }
        }
        // if (selectedImage.value === "../img/Enjoy.svg") {
        //     if (selectedHandStyle.value === "a") {
        //         selectingVideo.src = "../video/Enjoy1.mp4"
        //         playButton.className = classname
        //     } else {
        //         selectingVideo.src = "../video/Enjoy2.mp4"
        //         playButton.className = classname
        //     }
        // }
        // if (selectedImage.value === "../img/Happy.svg") {
        //     if (selectedHandStyle.value === "a") {
        //         selectingVideo.src = "../video/Happy1.mp4"
        //         playButton.className = classname
        //     } else {
        //         selectingVideo.src = "../video/Happy2.mp4"
        //         playButton.className = classname
        //     }
        // }
        // if (selectedImage.value === "../img/GoodDay.svg") {
        //     if (selectedHandStyle.value === "a") {
        //         selectingVideo.src = "../video/GoodDay1.mp4"
        //         playButton.className = classname
        //     } else {
        //         selectingVideo.src = "../video/GoodDay2.mp4"
        //         playButton.className = classname
        //     }
        // }
        // if (selectedImage.value === "../img/curve.svg") {
        //     if (selectedHandStyle.value === "a") {
        //         selectingVideo.src = "../video/curve1.mp4"
        //         playButton.className = classname
        //     } else {
        //         selectingVideo.src = "../video/curve2.mp4"
        //         playButton.className = classname
        //     }
        // }
    }

