/* ============================================
   RANCA UPAS BEAUTY — Camping & Nature Website
   JavaScript — Interactions, Data & Logic
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ============ Paket Tenda Data (Updated from brochure) ============
    const paketData = {
        'alas-matras': [
            {
                name: 'Paket Matras Arpenaz 4.0',
                price: 275000,
                capacity: 'Untuk 4 Orang/Tenda',
                features: ['Tenda Arpenaz 4.0', '4 Matras', '4 Sleeping Bag', 'Lampu', 'Bongkar Pasang']
            },
            {
                name: 'Paket Matras Mandala',
                price: 250000,
                capacity: 'Untuk 4 Orang/Tenda',
                features: ['Tenda Mandala', '4 Matras', '4 Sleeping Bag', 'Lampu', 'Bongkar Pasang']
            },
            {
                name: 'Paket Matras Charly',
                price: 325000,
                capacity: 'Untuk 6 Orang/Tenda',
                features: ['Tenda Mandala', '6 Matras', '6 Sleeping Bag', 'Lampu', 'Bongkar Pasang']
            }
        ],
        'alas-kasur': [
            {
                name: 'Paket Kasur Arpenaz 4.0',
                price: 350000,
                capacity: 'Untuk 4 Orang/Tenda',
                features: ['Tenda Arpenaz 4.0', '2 Kasur Unk 4 Orang', '4 Sleeping Bag', 'Lampu', 'Bongkar Pasang']
            },
            {
                name: 'Paket Kasur Mandala',
                price: 350000,
                capacity: 'Untuk 4 Orang/Tenda',
                features: ['Tenda Mandala', '2 Kasur Unk 4 Orang', '4 Sleeping Bag', 'Lampu', 'Bongkar Pasang']
            },
            {
                name: 'Paket Kasur Arpenaz 4.1',
                price: 400000,
                capacity: 'Untuk 4 Orang/Tenda',
                features: ['Tenda Arpenaz 4.1', '2 Kasur Unk 4 Orang', '4 Sleeping Bag', 'Lampu', 'Bongkar Pasang']
            }
        ],
        'matras-lengkap': [
            {
                name: 'Paket Matras Lengkap Arpenaz 4.0',
                price: 375000,
                capacity: 'Untuk 4 Orang/Tenda',
                features: ['Tenda Arpenaz 4.0', '4 Matras', '4 Sleeping Bag', 'Lampu', '4 Kursi + 1 Meja', 'Flysheet 3x4', 'Kompor + Gas', 'Bongkar Pasang']
            },
            {
                name: 'Paket Matras Lengkap Arpenaz 4.1',
                price: 450000,
                capacity: 'Untuk 4 Orang/Tenda',
                features: ['Tenda Arpenaz 4.1', '4 Matras', '4 Sleeping Bag', 'Lampu', '4 Kursi + 1 Meja', 'Flysheet 3x4', 'Kompor + Gas', 'Bongkar Pasang']
            },
            {
                name: 'Paket Matras Lengkap Arpenaz 4.2',
                price: 475000,
                capacity: 'Untuk 4 Orang/Tenda',
                features: ['Tenda Arpenaz 4.2', '4 Matras', '4 Sleeping Bag', 'Lampu', '4 Kursi + 1 Meja', 'Flysheet 3x4', 'Kompor + Gas', 'Bongkar Pasang']
            }
        ],
        'kasur-lengkap': [
            {
                name: 'Paket Kasur Lengkap Arpenaz 4.0',
                price: 450000,
                capacity: 'Untuk 4 Orang/Tenda',
                features: ['Tenda Arpenaz 4.0 / Mandala', '2 Kasur Unk 4 Orang', '4 Sleeping Bag', 'Lampu', '4 Kursi + 1 Meja', 'Flysheet 3x4', 'Kompor Gas', 'Bongkar Pasang']
            },
            {
                name: 'Paket Kasur Lengkap Arpenaz 4.1',
                price: 550000,
                capacity: 'Untuk 4 Orang/Tenda',
                note: 'Harga sudah termasuk tiket camp untuk 4 Orang',
                features: ['Tenda Arpenaz 4.1', '2 Kasur Unk 4 Orang + 2 Bantal', '4 Sleeping Bag', 'Lampu', '4 Kursi + 1 Meja', 'Flysheet 3x4', 'Kompor Gas', 'Bongkar Pasang']
            },
            {
                name: 'Paket Kasur Lengkap Arpenaz 4.2',
                price: 600000,
                capacity: 'Untuk 4 Orang/Tenda',
                note: 'Harga sudah termasuk tiket camp untuk 4 Orang',
                features: ['Tenda Arpenaz 4.2', '2 Kasur Unk 4 Orang + 2 Bantal', '4 Sleeping Bag', 'Lampu', '4 Kursi + 1 Meja', 'Flysheet 3x4', 'Kompor + Gas', 'Bongkar Pasang']
            }
        ],
        'estetik': [
            {
                name: 'Paket Estetik Landwolf / Eclipta',
                price: 700000,
                capacity: 'Untuk 4 Orang/Tenda',
                note: 'Paket sudah termasuk Bongkar Pasang. Area Camp Wilayah Cikole Lembang, Sariater dan Ciwidey',
                features: ['Kasur Busa Unk 4 Orang', '4 Bantal', '4 Sleeping Bag', '2 Lampu', 'Nesting', '4 Kursi 1 Meja Aesthetic', 'Kompor + Gas', 'Kabel Colokan Listrik 5m', 'Grill Pan']
            },
            {
                name: 'Paket Estetik Naturehike V13',
                price: 800000,
                capacity: 'Untuk 4 Orang/Tenda',
                note: 'Paket sudah termasuk Bongkar Pasang. Area Camp Wilayah Cikole Lembang, Sariater dan Ciwidey',
                features: ['Kasur Busa Unk 4 Orang', '4 Bantal', '4 Sleeping Bag', '2 Lampu', 'Nesting', '4 Kursi 1 Meja Aesthetic', 'Kompor + Gas', 'Kabel Colokan Listrik 5m', 'Grill Pan']
            }
        ]
    };

    // ============ Price List Data ============
    const pricelistData = [
        {
            title: 'KAPASITAS 2 ORANG',
            tiers: [
                {
                    name: 'Tier Reguler',
                    price: 'Rp 120.000',
                    type: 'reguler',
                    features: ['Tenda Dome + Matras Spon', 'Lampu Penerangan Tenda', 'Jasa Bongkar Pasang']
                },
                {
                    name: 'Tier Medium',
                    price: 'Rp 210.000',
                    type: 'medium',
                    features: ['Semua Benefit Reguler', '+ Sleeping Bag Hangat (2 Pcs)', '+ Free Kayu Bakar Api Unggun']
                },
                {
                    name: 'Tier Premium',
                    price: 'Rp 260.000',
                    type: 'premium',
                    features: ['Semua Benefit Medium', '+ Upgrade Kasur Empuk & Bantal']
                }
            ]
        },
        {
            title: 'KAPASITAS 4 ORANG',
            tiers: [
                {
                    name: 'Tier Reguler',
                    price: 'Rp 200.000',
                    type: 'reguler',
                    features: ['Tenda Frame Besar + Matras', 'Lampu Tenda Utama', 'Jasa Bongkar Pasang']
                },
                {
                    name: 'Tier Medium',
                    price: 'Rp 305.000',
                    type: 'medium',
                    features: ['Semua Benefit Reguler', '+ Full Sleeping Bag Tim (4 Pcs)', '+ Free Kayu Bakar Api Unggun']
                },
                {
                    name: 'Tier Premium',
                    price: 'Rp 355.000',
                    type: 'premium',
                    features: ['Semua Benefit Medium', '+ Upgrade Kasur Empuk & Bantal']
                }
            ]
        },
        {
            title: 'KAPASITAS 6 ORANG',
            tiers: [
                {
                    name: 'Tier Reguler',
                    price: 'Rp 240.000',
                    type: 'reguler',
                    features: ['Tenda Keluarga Luas + Matras', 'Sistem Penerangan Utama', 'Jasa Bongkar Pasang']
                },
                {
                    name: 'Tier Medium',
                    price: 'Rp 375.000',
                    type: 'medium',
                    features: ['Semua Benefit Reguler', '+ Paket Sleeping Bag Lengkap (6 Pcs)', '+ Free Kayu Bakar Api Unggun']
                },
                {
                    name: 'Tier Premium',
                    price: 'Rp 475.000',
                    type: 'premium',
                    features: ['Semua Benefit Medium', '+ Upgrade Kasur Empuk & Bantal']
                }
            ]
        },
        {
            title: 'KAPASITAS 12 ORANG',
            tiers: [
                {
                    name: 'Tier Reguler',
                    price: 'Rp 320.000',
                    type: 'reguler',
                    features: ['Tenda Jumbo Lorong + Full Matras', 'Penerangan Tenda Titik Ganda', 'Jasa Bongkar Pasang']
                },
                {
                    name: 'Tier Medium',
                    price: 'Rp 565.000',
                    type: 'medium',
                    features: ['Semua Benefit Reguler', '+ Paket Sleeping Bag Jumbo (12 Pcs)', '+ Free Kayu Bakar api Unggun']
                },
                {
                    name: 'Tier Premium',
                    price: 'Rp 765.000',
                    type: 'premium',
                    features: ['Semua Benefit Medium', '+ Upgrade Kasur Empuk & Bantal']
                }
            ]
        }
    ];

    // ============ Category Labels ============
    const categoryLabels = {
        'alas-matras': '🛏️ Alas Matras',
        'alas-kasur': '🛋️ Alas Kasur',
        'matras-lengkap': '🎒 Matras Lengkap',
        'kasur-lengkap': '✨ Kasur Lengkap',
        'estetik': '🦋 Estetik'
    };

    // ============ Preloader ============
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.body.style.overflow = 'auto';
            animateHeroElements();
        }, 2200);
    });

    // Fallback
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 4000);

    // ============ Navigation ============
    const navbar = document.getElementById('main-nav');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    const navLinkElements = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        updateActiveNav();
        handleBackToTop();
    });

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    navLinkElements.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });

    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinkElements.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ============ Hero Animations ============
    function animateHeroElements() {
        const heroElements = document.querySelectorAll('.hero-content [data-animate]');
        heroElements.forEach((el, index) => {
            const delay = parseInt(el.getAttribute('data-delay') || 0) + index * 100;
            setTimeout(() => {
                el.classList.add('animate-in');
            }, delay + 300);
        });
    }

    // ============ Counter Animation ============
    function animateCounters() {
        const counters = document.querySelectorAll('[data-count]');
        counters.forEach(counter => {
            if (counter.dataset.animated) return;
            counter.dataset.animated = 'true';

            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const startTime = performance.now();

            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 4);
                counter.textContent = Math.floor(eased * target);

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            }
            requestAnimationFrame(updateCounter);
        });
    }

    // ============ Scroll Animations ============
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
    };

   const animationTimeouts = new WeakMap();

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Elemen masuk ke viewport -> animasikan masuk
            const delay = parseInt(entry.target.getAttribute('data-delay') || 0);
            const timeoutId = setTimeout(() => {
                entry.target.classList.add('animate-in');
            }, delay);
            animationTimeouts.set(entry.target, timeoutId);
        } else {
            // Elemen keluar dari viewport -> reset, supaya animasi muncul lagi nanti
            const pendingTimeout = animationTimeouts.get(entry.target);
            if (pendingTimeout) {
                clearTimeout(pendingTimeout);
                animationTimeouts.delete(entry.target);
            }
            entry.target.classList.remove('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('[data-animate]:not(.hero-content [data-animate])').forEach(el => {
    observer.observe(el);
});
    const tentangStats = document.querySelector('.tentang-stats');
    if (tentangStats) {
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entries[0].target);
            }
        }, { threshold: 0.5 });
        statsObserver.observe(tentangStats);
    }

    // ============ Paket Tenda Rendering ============
    const paketGrid = document.getElementById('paket-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function formatPrice(price) {
        return 'Rp ' + price.toLocaleString('id-ID');
    }

    function renderPaket(filter = 'alas-matras') {
        paketGrid.innerHTML = '';
        const items = paketData[filter] || [];

        items.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'paket-card';
            card.style.animationDelay = (index * 100) + 'ms';

            const featuresHtml = item.features.map(f => `<div class="paket-feature">${f}</div>`).join('');
            
            // Note badge if exists
            const noteHtml = item.note 
                ? `<div class="paket-note">📌 ${item.note}</div>` 
                : '';

            card.innerHTML = `
                <div class="paket-card-header">
                    <h3>${item.name}</h3>
                </div>
                <div class="paket-card-body">
                    <div class="paket-price">${formatPrice(item.price)}</div>
                    <div class="paket-capacity">${item.capacity}</div>
                    ${noteHtml}
                    <div class="paket-features">
                        ${featuresHtml}
                    </div>
                    <a href="#reservasi" class="btn btn-primary btn-full">Pesan Sekarang</a>
                </div>
            `;

            paketGrid.appendChild(card);
        });
    }

    renderPaket('alas-matras');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPaket(btn.getAttribute('data-filter'));
        });
    });

    // ============ Populate Reservation Dropdown from Paket Data ============
    function populatePaketDropdown() {
        const select = document.getElementById('res-paket');
        if (!select) return;

        // Keep the first "Pilih paket" option
        const firstOption = select.querySelector('option');

        // Clear existing options
        select.innerHTML = '';
        select.appendChild(firstOption);

        // Add paket tenda options grouped by category
        Object.keys(paketData).forEach(category => {
            const label = categoryLabels[category] || category;
            const optgroup = document.createElement('optgroup');
            optgroup.label = label;

            paketData[category].forEach(item => {
                const option = document.createElement('option');
                option.value = `${category}--${item.name}`;
                option.textContent = `${item.name} - ${formatPrice(item.price)}`;
                optgroup.appendChild(option);
            });

            select.appendChild(optgroup);
        });

        // Add price list tier options
        const tierGroup = document.createElement('optgroup');
        tierGroup.label = '📋 Price List Camping';

        pricelistData.forEach(group => {
            group.tiers.forEach(tier => {
                const option = document.createElement('option');
                option.value = `pricelist--${group.title}--${tier.name}`;
                option.textContent = `${group.title} - ${tier.name} (${tier.price})`;
                tierGroup.appendChild(option);
            });
        });

        select.appendChild(tierGroup);
    }

    populatePaketDropdown();

    // ============ Price List Rendering ============
    const pricelistGrid = document.getElementById('pricelist-grid');

    function renderPricelist() {
        pricelistGrid.innerHTML = '';

        pricelistData.forEach(group => {
            const card = document.createElement('div');
            card.className = 'pricelist-card';

            const tiersHtml = group.tiers.map(tier => {
                const featuresHtml = tier.features.map(f => `<li>${f}</li>`).join('');
                return `
                    <div class="tier-block">
                        <div class="tier-header">
                            <span class="tier-name">${tier.name}</span>
                            <span class="tier-price ${tier.type}">${tier.price}</span>
                        </div>
                        <ul class="tier-features">
                            ${featuresHtml}
                        </ul>
                    </div>
                `;
            }).join('');

            card.innerHTML = `
                <div class="pricelist-card-header">
                    <h3>${group.title}</h3>
                </div>
                <div class="pricelist-card-body">
                    ${tiersHtml}
                </div>
            `;

            pricelistGrid.appendChild(card);
        });
    }

    renderPricelist();

    // ============ Reservation Form ============
    const reservationForm = document.getElementById('reservation-form');
    const modal = document.getElementById('reservation-modal');
    const modalClose = document.getElementById('modal-close');
    const dateInput = document.getElementById('res-date');

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    if (dateInput) {
        dateInput.setAttribute('min', today);
    }

    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(reservationForm);
        const data = Object.fromEntries(formData);

        // Show loading state
        const submitBtn = document.getElementById('submit-reservation');
        const originalContent = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Mengirim...</span>';
        submitBtn.disabled = true;

        // Simulate submission
        setTimeout(() => {
            // Show success modal
            modal.classList.add('active');
            submitBtn.innerHTML = originalContent;
            submitBtn.disabled = false;
            reservationForm.reset();

            console.log('Reservation submitted:', data);
        }, 1500);
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    document.querySelector('.modal-overlay').addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // ============ Back to Top ============
    const backToTop = document.getElementById('back-to-top');

    function handleBackToTop() {
        if (window.scrollY > 600) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ============ Scroll Indicator ============
    const scrollIndicator = document.getElementById('scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const tentangSection = document.getElementById('tentang');
            if (tentangSection) {
                tentangSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // ============ Smooth Scroll for Anchor Links ============
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = navbar.offsetHeight;
                const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight;
                window.scrollTo({
                    top: targetPos,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============ Area Cards Tilt Effect ============
    const areaCards = document.querySelectorAll('.area-card');
    areaCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const tiltX = (y - centerY) / centerY * 4;
            const tiltY = (centerX - x) / centerX * 4;
            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // ============ Galeri Hover Effects ============
    const galeriItems = document.querySelectorAll('.galeri-item');
    galeriItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const tiltX = (y - centerY) / centerY * 3;
            const tiltY = (centerX - x) / centerX * 3;
            item.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.03)`;
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // ============ Keyboard Accessibility ============
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.classList.remove('active');
            navToggle.classList.remove('active');
            navLinks.classList.remove('open');
        }
    });

    // ============ Reduced Motion Support ============
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('[data-animate]').forEach(el => {
            el.classList.add('animate-in');
        });
    }

    console.log('%c🏕️ RANCA UPAS BEAUTY', 'font-size: 16px; color: #1B5E20; font-weight: bold;');
    console.log('%cCamping & Nature Experience Website', 'font-size: 12px; color: #888;');
});


const reservationForm = document.getElementById('reservation-form');
const waPhoneNumber = '6282120730123'; // +62 821-2073-0123

if (reservationForm) {
  reservationForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('res-name').value;

    const guestsSelect = document.getElementById('res-guests');
    const guests = guestsSelect.options[guestsSelect.selectedIndex].text;

    const dateInput = document.getElementById('res-date').value;
    const formattedDate = dateInput
      ? new Date(dateInput).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
      : '-';

    const paketSelect = document.getElementById('res-paket');
    const paket = paketSelect.options[paketSelect.selectedIndex].text;

    const notes = document.getElementById('res-notes').value;

    let message = `Halo Ranca Upas Beauty, saya ingin reservasi camping dengan detail:\n\n`;
    message += `Nama: ${name}\n`;
    message += `Jumlah Peserta: ${guests}\n`;
    message += `Tanggal Check-in: ${formattedDate}\n`;
    message += `Paket: ${paket}\n`;
    if (notes) message += `Catatan: ${notes}\n`;
    message += `\nMohon info ketersediaan dan konfirmasinya. Terima kasih!`;

    const waUrl = `https://wa.me/${waPhoneNumber}?text=${encodeURIComponent(message)}`;

    // Buka WhatsApp di tab baru
    window.open(waUrl, '_blank');

    // Tampilkan modal sukses (sesuaikan dengan cara modal Anda di-show)
    const modal = document.getElementById('reservation-modal');
    if (modal) modal.classList.add('active');

    reservationForm.reset();
  });
}


const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");

document.querySelectorAll(".gallery-link").forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        modal.style.display = "flex";
        modalImg.src = this.href;
    });
});

document.querySelector(".close-modal").addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.style.display = "none";
    }
});


const reviewForm=document.getElementById("reviewForm");

const reviewList=document.getElementById("reviewList");

const reviewCount=document.getElementById("reviewCount");

const averageRating=document.getElementById("averageRating");

let reviews=JSON.parse(localStorage.getItem("reviews"))||[];

function renderReviews(){

reviewList.innerHTML="";

let total=0;

reviews.forEach((r,index)=>{

total+=Number(r.rating);

reviewList.innerHTML+=`

<div class="review-card">

<h4>${r.name}</h4>

<p>${"⭐".repeat(r.rating)}</p>

<p>${r.message}</p>

<div class="review-date">

${r.date}

</div>

<button onclick="deleteReview(${index})">

Hapus

</button>

</div>

`;

});

reviewCount.innerHTML=reviews.length;

averageRating.innerHTML=

reviews.length?

(total/reviews.length).toFixed(1):"0";

localStorage.setItem(

"reviews",

JSON.stringify(reviews)

);

}

reviewForm.addEventListener(

"submit",

function(e){

e.preventDefault();

reviews.unshift({

name:reviewName.value,

rating:reviewRating.value,

message:reviewMessage.value,

date:new Date().toLocaleDateString("id-ID")

});

renderReviews();

reviewForm.reset();

});

function deleteReview(index){

reviews.splice(index,1);

renderReviews();

}

renderReviews();

