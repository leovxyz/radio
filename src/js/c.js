
// Remove the info bar after 2 clicks
// let clickCount = 0;
// const info = document.querySelector('.info');

// function trackClicks() {
//     clickCount++; // Increment the click count by 1
    
//     if (clickCount >= 2) {
//         info.style.filter = 'blur(15px)';
//         info.style.opacity = '0';
//         info.style.top = '-4%'
//         info.style.transition = 'all 2s cubic-bezier(0.22, 1, 0.36, 1)';
//     } console.log(clickCount);
// }

// document.addEventListener('click', trackClicks);


// Restarts the songs 
function pageReload() {
    setTimeout(() => {
        location.reload();
    }, 180000); // 3 minutes in milliseconds
}

pageReload();