let currentPage = 1;
let flippedTiles = 0;

        // Create sparkles effect
        function createSparkles() {
            const sparklesContainer = document.querySelector('.sparkles');
            for (let i = 0; i < 20; i++) {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                sparkle.style.animationDelay = Math.random() * 3 + 's';
                sparklesContainer.appendChild(sparkle);
            }
        }

        createSparkles();
// Password hint toggle
function toggleHint(hintId) {
    const hint = document.getElementById(hintId);
    hint.classList.toggle('show');
}

// Check first password
function checkPassword1() {
    const input = document.getElementById('password1');
    const error = document.getElementById('error1');
    
    if (input.value.toLowerCase() === 'mawuli') {
        // Show success message
        const container = document.querySelector('#page1 .password-container');
        container.innerHTML = '<div class="success-message">Of course it\'s me 💜</div>';
        
        // Move to next page after 1.5 seconds
        setTimeout(() => {
            goToPage(2);
        }, 1500);
    } else {
        error.classList.add('show');
        input.value = '';
        setTimeout(() => {
            error.classList.remove('show');
        }, 2000);
    }
}

// Check second password
function checkPassword2() {
    const input = document.getElementById('password2');
    const error = document.getElementById('error2');
    
    if (input.value.toLowerCase() === 'bakhita') {
        // Show success message
        const container = document.querySelector('#page2 .password-container');
        container.innerHTML = '<div class="success-message">Of course it\'s you! 💜</div>';
        
        // Move to valentine question
        setTimeout(() => {
            goToPage(3);
        }, 1500);
    } else {
        error.classList.add('show');
        input.value = '';
        setTimeout(() => {
            error.classList.remove('show');
        }, 2000);
    }
}

// Add Enter key support
document.addEventListener('DOMContentLoaded', function() {
    const password1Input = document.getElementById('password1');
    const password2Input = document.getElementById('password2');
    
    if (password1Input) {
        password1Input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') checkPassword1();
        });
    }
    
    if (password2Input) {
        password2Input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') checkPassword2();
        });
    }
});
        // Modern "No" button dodge with smooth animation
        function makeNoButtonDodge(btnId) {
            const btn = document.getElementById(btnId);
            let isDodging = false;
            
            function dodge() {
                if (isDodging) return;
                isDodging = true;
                
                const maxX = window.innerWidth - btn.offsetWidth - 40;
                const maxY = window.innerHeight - btn.offsetHeight - 40;
                
                const newX = Math.max(20, Math.random() * maxX);
                const newY = Math.max(20, Math.random() * maxY);
                
                btn.style.position = 'fixed';
                btn.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                btn.style.left = newX + 'px';
                btn.style.top = newY + 'px';
                
                setTimeout(() => {
                    isDodging = false;
                }, 300);
            }

            btn.addEventListener('mouseenter', dodge);
            btn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                dodge();
            });
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                dodge();
            });
        }

        makeNoButtonDodge('noBtn3');

        function goToPage(pageNum) {
            const currentPageEl = document.getElementById('page' + currentPage);
            const nextPageEl = document.getElementById('page' + pageNum);
            
            currentPageEl.style.opacity = '0';
            currentPageEl.style.transform = 'translateY(-30px)';
            
            setTimeout(() => {
                currentPageEl.classList.remove('active');
                currentPage = pageNum;
                nextPageEl.classList.add('active');
            }, 300);
        }

        function flipTile(tile) {
            if (!tile.classList.contains('flipped')) {
                tile.classList.add('flipped');
                flippedTiles++;
                
                // Check if all tiles are flipped
                if (flippedTiles === 9) {
                    setTimeout(() => {
                        goToPage(5);
                    }, 3000); // 3 second delay
                }
            }
        }

        // Add smooth page scroll prevention
        document.body.style.overflow = 'hidden';