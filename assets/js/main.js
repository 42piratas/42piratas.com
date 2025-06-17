// Main JavaScript for 42piratas website
// Exact cursor implementation matching live website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initializeCustomCursor();
    initializeSounds();
    initializeInteractions();
    optimizeImages();
});

// Custom Cursor Implementation - Matching Live Website
function initializeCustomCursor() {
    // Only initialize on devices with mouse/trackpad
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        createCustomCursor();
    }
}

function createCustomCursor() {
    // Force hide all cursors first
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';

    // Create cursor element with exact live website specifications
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    cursor.className = 'cursor-default';

    // Live website cursor specifications
    const cursorStyles = {
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '40px',  // Larger size to match live website
        height: '40px', // Larger size to match live website
        backgroundImage: "url('/assets/cursor/cursor-default.svg')",
        backgroundSize: '40px 40px', // Explicit size
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        pointerEvents: 'none',
        zIndex: '9999999', // Even higher z-index
        transition: 'all 0.15s ease-out',
        transform: 'translate(-20px, -20px)', // Center properly for 40px cursor
        opacity: '1',
        visibility: 'visible',
        display: 'block'
    };

    // Apply all styles
    Object.assign(cursor.style, cursorStyles);

    document.body.appendChild(cursor);

    console.log('🎯 Live-style cursor created with aggressive cursor hiding');

    // Force cursor hiding on ALL elements
    const forceNoCursor = () => {
        const allElements = document.querySelectorAll('*');
        allElements.forEach(el => {
            el.style.cursor = 'none';
        });
    };

    // Apply immediately and on DOM changes
    forceNoCursor();
    setTimeout(forceNoCursor, 100);

    // Track mouse movement with high precision
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Update position with proper centering for 40px cursor
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';

        // Force cursor hiding on mouse move too
        if (e.target && e.target.style) {
            e.target.style.cursor = 'none';
        }
    });

    // Interactive elements - exact selectors from live website
    const interactiveElements = document.querySelectorAll('a, button, .project-box, [role="button"], .hero-link, .footer-link, .project-title');
    const textElements = document.querySelectorAll('input[type="text"], input[type="email"], input[type="search"], textarea, [contenteditable="true"]');

    console.log('🔗 Interactive elements found:', interactiveElements.length);
    console.log('✏️ Text elements found:', textElements.length);

    // Hover state for interactive elements
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            // Hover state - change to cursor-click.svg with larger scale
            cursor.style.backgroundImage = "url('/assets/cursor/cursor-click.svg')";
            cursor.style.transform = 'translate(-20px, -20px) scale(1.3)';
            cursor.style.transition = 'all 0.15s ease-out';

            console.log('🎯 Hover state activated - using cursor-click.svg');
        });

        element.addEventListener('mouseleave', () => {
            // Return to default state - cursor-default.svg
            cursor.style.backgroundImage = "url('/assets/cursor/cursor-default.svg')";
            cursor.style.transform = 'translate(-20px, -20px) scale(1)';
            cursor.style.transition = 'all 0.15s ease-out';

            console.log('👋 Left hover state - back to cursor-default.svg');
        });

        element.addEventListener('mousedown', () => {
            // Click state - stay with cursor-click.svg but scale down
            cursor.style.backgroundImage = "url('/assets/cursor/cursor-click.svg')";
            cursor.style.transform = 'translate(-20px, -20px) scale(0.8)';
            cursor.style.transition = 'all 0.1s ease-out';

            console.log('👆 Click state activated - cursor-click.svg scaled down');
        });

        element.addEventListener('mouseup', () => {
            // Return to hover state after click - cursor-click.svg at hover scale
            cursor.style.backgroundImage = "url('/assets/cursor/cursor-click.svg')";
            cursor.style.transform = 'translate(-20px, -20px) scale(1.3)';
            cursor.style.transition = 'all 0.15s ease-out';

            console.log('👆 Click released, back to hover - cursor-click.svg');
        });
    });

    // Writing cursor for text elements
    textElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.backgroundImage = "url('/assets/cursor/cursor-write.svg')";
            cursor.style.transform = 'translate(-20px, -20px) scale(1.1)';
            cursor.style.transition = 'all 0.15s ease-out';

            console.log('✏️ Write cursor activated');
        });

        element.addEventListener('mouseleave', () => {
            cursor.style.backgroundImage = "url('/assets/cursor/cursor-default.svg')";
            cursor.style.transform = 'translate(-20px, -20px) scale(1)';
            cursor.style.transition = 'all 0.15s ease-out';

            console.log('✏️ Left write cursor');
        });
    });

    // Reset to default when over general areas
    document.addEventListener('mouseover', (e) => {
        const isInteractive = e.target.closest('a, button, .project-box, [role="button"], .hero-link, .footer-link, .project-title');
        const isText = e.target.closest('input[type="text"], input[type="email"], input[type="search"], textarea, [contenteditable="true"]');

        if (!isInteractive && !isText) {
            cursor.style.backgroundImage = "url('/assets/cursor/cursor-default.svg')";
            cursor.style.transform = 'translate(-20px, -20px) scale(1)';
            cursor.style.transition = 'all 0.15s ease-out';
        }
    });

    // Handle page focus/blur
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cursor.style.opacity = '0.3';
        } else {
            cursor.style.opacity = '1';
        }
    });

    // Debug cursor state after initialization
    setTimeout(() => {
        const rect = cursor.getBoundingClientRect();
        console.log('🔍 Cursor debug info:');
        console.log('- Size:', cursor.style.width, 'x', cursor.style.height);
        console.log('- Position:', cursor.style.left, cursor.style.top);
        console.log('- Transform:', cursor.style.transform);
        console.log('- Background:', cursor.style.backgroundImage);
        console.log('- Bounding rect:', rect);
        console.log('- Z-index:', cursor.style.zIndex);
        console.log('- Opacity:', cursor.style.opacity);
    }, 500);
}

// Sound Effects (keeping the same)
let clickSound, hoverSound;
let soundsEnabled = true;

function initializeSounds() {
    try {
        clickSound = new Audio('/assets/sounds/sound_click.wav');
        hoverSound = new Audio('/assets/sounds/sound_hover.wav');

        clickSound.preload = 'auto';
        hoverSound.preload = 'auto';
        clickSound.volume = 0.3;
        hoverSound.volume = 0.15;

        clickSound.addEventListener('error', () => {
            console.log('❌ Click sound failed to load');
            soundsEnabled = false;
        });

        hoverSound.addEventListener('error', () => {
            console.log('❌ Hover sound failed to load');
            soundsEnabled = false;
        });

        document.addEventListener('click', enableSounds, { once: true });
        document.addEventListener('keydown', enableSounds, { once: true });

    } catch (error) {
        console.log('❌ Sound initialization failed:', error);
        soundsEnabled = false;
    }
}

function enableSounds() {
    if (soundsEnabled && clickSound && hoverSound) {
        clickSound.load();
        hoverSound.load();
        console.log('🔊 Sounds enabled');
    }
}

function playHoverSound() {
    if (soundsEnabled && hoverSound) {
        hoverSound.currentTime = 0;
        hoverSound.play().catch(() => {});
    }
}

function playClickSound() {
    if (soundsEnabled && clickSound) {
        clickSound.currentTime = 0;
        clickSound.play().catch(() => {});
    }
}

// Enhanced Interactions (keeping the same)
function initializeInteractions() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const interactiveElements = document.querySelectorAll('a, button, .project-box, [role="button"]');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', playHoverSound);
        element.addEventListener('click', playClickSound);
    });

    const projectBoxes = document.querySelectorAll('.project-box');
    projectBoxes.forEach((box, index) => {
        box.setAttribute('tabindex', '0');
        box.setAttribute('role', 'button');
        box.setAttribute('aria-label', `View project: ${box.querySelector('.project-title')?.textContent || 'Project'}`);

        box.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const link = box.querySelector('.project-title');
                if (link) {
                    playClickSound();
                    box.style.transform = 'scale(0.98)';
                    setTimeout(() => {
                        box.style.transform = '';
                        window.open(link.href, '_blank');
                    }, 100);
                }
            }
        });

        box.addEventListener('click', function(e) {
            if (e.target === box || (e.target.closest('.project-box') === box && !e.target.closest('a'))) {
                const link = box.querySelector('.project-title');
                if (link) {
                    playClickSound();
                    window.open(link.href, '_blank');
                }
            }
        });
    });

    document.body.classList.add('loaded');
}

function optimizeImages() {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage && 'IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('loaded');
                    observer.unobserve(entry.target);
                }
            });
        });
        imageObserver.observe(heroImage);
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
