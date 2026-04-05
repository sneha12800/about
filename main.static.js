document.addEventListener('DOMContentLoaded', () => {
    // --- New Header Logic ---
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    const toggleMobileMenu = () => {
        const isOpen = mobileMenu.classList.toggle('open');
        if (isOpen) {
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else {
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            document.body.style.overflow = '';
        }
    };

    if(mobileToggle) mobileToggle.addEventListener('click', toggleMobileMenu);

    // Close menu when any nav link is clicked
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if(mobileMenu.classList.contains('open')) toggleMobileMenu();
        });
    });

    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .bento-item, .value-card, .dept-card, .testimonial-card, .gallery-item').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)";
        observer.observe(el);
    });

    const subNav = document.querySelector('.sub-nav');
    const hero = document.querySelector('.hero');
    const sectionElements = document.querySelectorAll('section[id]');
    const subLinks = document.querySelectorAll('.sub-links a');

    // Main Navbar & Sub-nav sticky logic
    const utilityBar = document.getElementById('utility-bar');
    const mainHeader = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        // New Header scroll logic
        const isScrolled = window.scrollY > 50;
        if (isScrolled) {
            if(utilityBar) utilityBar.classList.add('scrolled');
            if(mainHeader) mainHeader.classList.add('scrolled');
        } else {
            if(utilityBar) utilityBar.classList.remove('scrolled');
            if(mainHeader) mainHeader.classList.remove('scrolled');
        }
        // Sticky Sub-nav toggle
        if (window.scrollY > hero.offsetHeight - 100) {
            subNav.classList.add('sticky');
        } else {
            subNav.classList.remove('sticky');
        }

        // ScrollSpy logic
        let currentSectionId = '';
        sectionElements.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        subLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });

        // Reveal animations
        document.querySelectorAll('.section, .bento-item, .value-card, .dept-card, .testimonial-card, .gallery-item, .vision-box, .value-item-new, .timeline-item, .practice-item').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (id.startsWith('#') && document.querySelector(id)) {
                e.preventDefault();
                document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Stats Counter Animation
    const animateValue = (obj, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start) + (obj.dataset.suffix || "");
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                obj.innerHTML = end + (obj.dataset.suffix || "");
            }
        };
        window.requestAnimationFrame(step);
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateValue(entry.target, 0, target, 2000);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number').forEach(stat => statsObserver.observe(stat));
});
