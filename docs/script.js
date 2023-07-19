const texts = [
    "Shubham",
    "Developer",
    "Designer",
    "Gammer",
    "Travlar"
];

const typingOptions = {
    strings: texts,
    // smartBackspace: false,
    shuffle: false,
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: "_",
};

const textContainer = document.getElementById("textContainer");
const typed = new Typed(textContainer, typingOptions);