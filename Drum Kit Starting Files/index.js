
var elements = document.querySelectorAll(".drum");


elements.forEach((item) => {
    item.addEventListener("click", function () {
        var itemId = this.innerHTML;
        var audio;

        switch (itemId) {
            case 'w':
                audio = new Audio('sounds/crash.mp3')
                break;
            case 'a':
                audio = new Audio('sounds/kick-bass.mp3')
                break;
            case 's':
                audio = new Audio('sounds/snare.mp3')
                break;

            case 'd':
                audio = new Audio('sounds/tom-1.mp3')
                break;
            case 'j':
                audio = new Audio('sounds/tom-2.mp3')
                case 'k':
            audio = new Audio('sounds/tom-3.mp3')
            break;
        case 'l':
            audio = new Audio('sounds/tom-4.mp3')
            break;
        }
                

                    
        audio.play();

    })
});

document.addEventListener("keydown", function(event) {
    var key = event.key; 
    var audio;

    switch (key) {
        case 'w':
            audio = new Audio('sounds/crash.mp3')
            break;
        case 'a':
            audio = new Audio('sounds/kick-bass.mp3')
            break;
        case 's':
            audio = new Audio('sounds/snare.mp3')
            break;

        case 'd':
            audio = new Audio('sounds/tom-1.mp3')
            break;
        case 'j':
            audio = new Audio('sounds/tom-2.mp3')
            break;
        case 'k':
            audio = new Audio('sounds/tom-3.mp3')
            break;
        case 'l':
            audio = new Audio('sounds/tom-4.mp3')
            break;

    }
    audio.play()

});


