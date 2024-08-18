document.addEventListener('DOMContentLoaded', () => { 
    const songCovers = document.querySelectorAll('.songCover');
    let activeSongCover = null; // Track the currently active song cover

    songCovers.forEach(songCover => {
        const initialTop = songCover.style.top; // Store the initial position
        songCover.style.transition = ' top 0.8s, filter 1.5s ease';

        const handleClick = () => {
            if (activeSongCover && activeSongCover !== songCover) {
                activeSongCover.style.top = initialTop; // Reset the previously active song cover
                activeSongCover = null; // Clear the active song cover reference
            }

            // Toggle the current song cover's state
            if (activeSongCover === songCover) {
                songCover.style.top = initialTop; // Reset to initial position
                activeSongCover = null; // Clear the active song cover reference
            } else {
                songCover.style.top = '28%'; 
                activeSongCover = songCover; // Set the active song cover to the clicked one
            }

            // // Apply blur to inactive song covers
            // songCovers.forEach(c => {
            //     if (c !== activeSongCover) {
            //         c.style.filter = activeSongCover ? 'blur(1.5px)' : 'none'; // Apply blur if there's an active song cover
            //     } else {
            //         c.style.filter = 'none'; // Remove blur from the active song cover
            //     }
            // });
        };

        songCover.addEventListener('click', handleClick);
        
    });
});