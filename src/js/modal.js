function modal() {
    const modals = Array.from(document.querySelectorAll("[id^=modal]"));
    modals.forEach((modal, index) => {
        if (isPlaying && currentAudio === audioElements[index]) {
            modal.style.filter = "blur(0px)";
            modal.style.transform = "translate(-0%, 0%)";
        } else {
            modal.style.filter = "blur(7px)";
            modal.style.transform = "translate(-0%, 200%)";
        }
        modal.style.transition = "transform 0.3s ease-in-out, filter 0.6s ease-in-out"; // Transition for modal - version 1.
        // modal.style.transition = "transform 0s ease-in-out, filter 0.6s ease-in-out"; // Transition for modal - version 2.
    });
}

modal();
