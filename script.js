document.addEventListener("DOMContentLoaded", function() {
    const celebrateBtn = document.getElementById('celebrateBtn');
    const confettiContainer = document.getElementById('confetti');
    const balloonsContainer = document.getElementById('balloons');
    const music = document.getElementById('celebrateMusic'); // Get the audio element

    let animationInProgress = false;
    
    celebrateBtn.addEventListener('click', function() {
        if (!animationInProgress) {
            animationInProgress = true;
            celebrateBtn.disabled = true;
            celebrateBtn.textContent = "Celebration in Progress... 🎉";

            
            music.play(); 
            startConfetti();

           
            startBalloons();

            setTimeout(() => {
                animationInProgress = false;
                celebrateBtn.disabled = false; 
                celebrateBtn.textContent = "Celebrate Again 🎉";
                music.pause(); 
                music.currentTime = 0;
                stopConfetti();
                stopBalloons();
            }, 10000); // Stop after 8 seconds
        }
    });

    function startConfetti() {
        for (let i = 0; i < 100; i++) {
            const confettiPiece = document.createElement('div');
            confettiPiece.style.left = `${Math.random() * 100}%`;
            confettiPiece.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration
            confettiPiece.style.animationDelay = `${Math.random() * 3}s`; // Random delay
            confettiContainer.appendChild(confettiPiece);
        }
    }

    function stopConfetti() {
        while (confettiContainer.firstChild) {
            confettiContainer.removeChild(confettiContainer.firstChild);
        }
    }

    function startBalloons() {
        for (let i = 0; i < 5; i++) {
            const balloon = document.createElement('div');
            balloon.style.left = `${Math.random() * 100}%`;
            balloon.style.animationDuration = `${Math.random() * 4 + 2}s`; // Random duration
            balloon.style.animationDelay = `${Math.random() * 3}s`; // Random delay
            balloonsContainer.appendChild(balloon);
        }
    }

    function stopBalloons() {
        while (balloonsContainer.firstChild) {
            balloonsContainer.removeChild(balloonsContainer.firstChild);
        }
    }
});
