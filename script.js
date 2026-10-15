/* ==========================================
   INTERACTIONS & TYPEWRITER LAYER
   Sanskruti Jagdale - Portfolio
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // -------------------------------------------
    // 1. TYPEWRITER EFFECT IN HERO SECTION
    // -------------------------------------------
    const typewriterEl = document.getElementById('typewriter');
    if (typewriterEl) {
        const roles = [
            'Frontend Engineer',
            'UI/UX Designer',
            'Digital Marketer @ Moash',
            'Team Lead @ Team COSMOS'
        ];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 90;

        function type() {
            const currentRole = roles[roleIndex];
            if (isDeleting) {
                typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 45;
            } else {
                typewriterEl.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 90;
            }

            if (!isDeleting && charIndex === currentRole.length) {
                isDeleting = true;
                typingSpeed = 1600; // Pause at end of title
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typingSpeed = 350; // Pause before next title
            }

            setTimeout(type, typingSpeed);
        }

        type();
    }

    // -------------------------------------------
    // 2. SMOOTH SCROLLING FOR NAV ANCHORS
    // -------------------------------------------
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
