// Event date - Set to September 1, 2025
const eventDate = new Date("2025-09-01T09:00:00").getTime();

// Data for stalls and products using pre-fetched stock photos
const stallsData = {
    food: [
        {
            id: 1,
            name: "Spice Garden",
            description: "Authentic Indian cuisine with traditional flavors and modern presentation",
            category: "Food & Beverages",
            image: "https://pixabay.com/get/ged4e99ecf4cd4814c260b244281ad7dc03c8c7944c8bf1f2bbf5cf0be098bd9b62bfd081a52627deb0d4ff508711eba9898100a1bacbe279a0ca70f1ef588bd1_1280.jpg",
            products: [
                { name: "Butter Chicken", description: "Creamy tomato-based curry with tender chicken", price: "₹299" },
                { name: "Biryani", description: "Fragrant basmati rice with aromatic spices", price: "₹349" },
                { name: "Naan Bread", description: "Fresh baked tandoor bread", price: "₹199" },
                { name: "Mango Lassi", description: "Traditional yogurt drink with mango", price: "₹129" }
            ]
        },
        {
            id: 2,
            name: "Pizza Palace",
            description: "Wood-fired authentic Italian pizzas made with fresh ingredients",
            category: "Food & Beverages",
            image: "https://pixabay.com/get/gf5b39aa056d29cdd15d25c0324aeb0ff680d1f8a1f7fabe53f9ff85efbaf73b1ebce4593ca1ae1d38351304976190dde7551d0652d437ba8b3679f1c9a8448ec_1280.jpg",
            products: [
                { name: "Margherita", description: "Classic tomato sauce with fresh mozzarella", price: "₹399" },
                { name: "Pepperoni", description: "Spicy pepperoni with melted cheese", price: "₹449" },
                { name: "Vegetarian Supreme", description: "Fresh vegetables with herbs", price: "₹429" },
                { name: "Garlic Bread", description: "Crispy bread with garlic butter", price: "₹149" }
            ]
        },
        {
            id: 3,
            name: "Street Food Corner",
            description: "Popular Indian street food and regional specialties",
            category: "Food & Beverages",
            image: "https://pixabay.com/get/g6c68891acc781e9113f30fa6113e262b34c5a24ec242cc4be4bbdb64192e1e95cc20fd3ee9e67b4c968cdf76d070e5605afb669bd80ccd7b321bb68f75ee19ec_1280.jpg",
            products: [
                { name: "Pani Puri", description: "Crispy shells with spiced water", price: "₹99" },
                { name: "Vada Pav", description: "Mumbai's favorite street burger", price: "₹59" },
                { name: "Dosa", description: "South Indian crispy crepe", price: "₹149" },
                { name: "Kulfi", description: "Traditional Indian ice cream", price: "₹79" }
            ]
        }
    ],
    clothes: [
        {
            id: 4,
            name: "Fashion Forward",
            description: "Contemporary fashion for the modern wardrobe",
            category: "Clothing & Fashion",
            image: "https://pixabay.com/get/g04ec5444ba5cbc5479835a70efcd51ef746998a72bfefe3635e6db58e33cd59917979f1ede4162a9ec3ea6b24acbf664286bc0fd643bcb0fcf3052de74f73c66_1280.jpg",
            products: [
                { name: "Designer Kurta", description: "Premium cotton ethnic wear", price: "₹899" },
                { name: "Denim Jacket", description: "Trendy casual outerwear", price: "₹1,299" },
                { name: "Summer Dress", description: "Light and comfortable fabric", price: "₹1,099" },
                { name: "Casual Shirt", description: "Versatile everyday wear", price: "₹799" }
            ]
        },
        {
            id: 5,
            name: "Traditional Textiles",
            description: "Handwoven fabrics and traditional clothing",
            category: "Clothing & Fashion",
            image: "https://pixabay.com/get/g530d7718ff8d03386b441003ee4cdfa57dab2ff9fc0c42d8b52f89882a678f88d7af188485290266245a2860b900441a511c2ff22cef0b96c99fd72367b3acad_1280.jpg",
            products: [
                { name: "Silk Saree", description: "Pure silk traditional wear", price: "₹2,999" },
                { name: "Cotton Dupatta", description: "Handloom cotton scarf", price: "₹499" },
                { name: "Khadi Shirt", description: "Handspun cotton shirt", price: "₹899" },
                { name: "Embroidered Shawl", description: "Traditional embroidered wrap", price: "₹1,299" }
            ]
        }
    ],
    accessories: [
        {
            id: 6,
            name: "Jewelry Corner",
            description: "Handcrafted jewelry and fashion accessories",
            category: "Accessories & Jewelry",
            image: "https://pixabay.com/get/g29c0154afc2c4cbc627bddc2f81ecefd327f3d4cba92ad17b68a37c2e108370afc06e505bfaf2ec4b0bfe18880b97abf291492ead6a2219a3efdd5c96f67dc2e_1280.jpg",
            products: [
                { name: "Silver Necklace", description: "Handcrafted silver jewelry", price: "₹1,999" },
                { name: "Earrings Set", description: "Traditional design earrings", price: "₹899" },
                { name: "Leather Handbag", description: "Premium leather bag", price: "₹2,499" },
                { name: "Silk Scarf", description: "Luxury silk accessory", price: "₹699" }
            ]
        }
    ],
    handicrafts: [
        {
            id: 7,
            name: "Artisan Crafts",
            description: "Traditional handicrafts and handmade items",
            category: "Handicrafts & Art",
            image: "https://pixabay.com/get/g28ed1be5c667cd046313e2d22fc46541917686d75ebffbebc881d38eb2ca0466e409d922d0de9b5d9228d5aa06192e2c26acd4c563570ea76052eede02bfe16a_1280.jpg",
            products: [
                { name: "Handmade Pottery", description: "Traditional clay pottery", price: "₹599" },
                { name: "Wooden Sculptures", description: "Carved wooden art pieces", price: "₹1,299" },
                { name: "Painted Canvas", description: "Original artwork on canvas", price: "₹899" },
                { name: "Brass Decoratives", description: "Traditional brass items", price: "₹799" }
            ]
        },
        {
            id: 8,
            name: "Cultural Crafts",
            description: "Regional arts and cultural artifacts",
            category: "Handicrafts & Art",
            image: "https://pixabay.com/get/g49d64d220aeb9abae9a2fcd5a0d84ca01b73a5cae5a237fd83b1c4a0c2f283cad2fc986c5e626e8eb44b32d8be458acd079a5e296335eb918cba9615f5222fbb_1280.jpg",
            products: [
                { name: "Madhubani Paintings", description: "Traditional Bihar folk art", price: "₹1,199" },
                { name: "Bamboo Crafts", description: "Eco-friendly bamboo products", price: "₹399" },
                { name: "Terracotta Items", description: "Clay decorative pieces", price: "₹299" },
                { name: "Block Print Fabric", description: "Hand block printed textiles", price: "₹699" }
            ]
        }
    ],
    games: [
        {
            id: 9,
            name: "Traditional Games",
            description: "Classic games and entertainment for all ages",
            category: "Games & Entertainment",
            image: "https://pixabay.com/get/gdac188d982321361c1ef9ba5657135e3ddc3f937455fecb046740da3894401105366765886301b30da17dc1d9536c7d45cae77f61d5c82eed3708cd4978527ba_1280.jpg",
            products: [
                { name: "Chess Set", description: "Handcrafted wooden chess", price: "₹1,299" },
                { name: "Carrom Board", description: "Premium quality carrom", price: "₹2,499" },
                { name: "Playing Cards", description: "Traditional card games set", price: "₹199" },
                { name: "Puzzle Games", description: "Educational puzzle collection", price: "₹599" }
            ]
        }
    ]
};

// DOM Elements
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const stallsContainer = document.getElementById('stalls-container');
const loadingMessage = document.getElementById('loading-message');
const errorMessage = document.getElementById('error-message');
const emptyState = document.getElementById('empty-state');
const modal = document.getElementById('products-modal');
const modalTitle = document.getElementById('modal-title');
const productsContainer = document.getElementById('products-container');
const closeBtn = document.querySelector('.close');
const categoryCards = document.querySelectorAll('.category-card');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Utility Functions
function showLoading() {
    hideAllStates();
    loadingMessage.style.display = 'block';
}

function showError() {
    hideAllStates();
    errorMessage.style.display = 'block';
}

function showEmpty() {
    hideAllStates();
    emptyState.style.display = 'block';
}

function hideAllStates() {
    loadingMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    emptyState.style.display = 'none';
}

function showStalls() {
    hideAllStates();
    stallsContainer.style.display = 'grid';
}

// Countdown Timer
function updateCountdown() {
    try {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            // Event has passed - show zeros
            daysElement.textContent = '00';
            hoursElement.textContent = '00';
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysElement.textContent = days.toString().padStart(2, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    } catch (error) {
        console.error('Error updating countdown:', error);
        // Show default values on error
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
    }
}

// Display Stalls with error handling
function displayStalls(category) {
    try {
        showLoading();
        
        // Simulate loading delay for better UX
        setTimeout(() => {
            let stalls = [];
            
            if (category === 'all') {
                // Show all stalls from all categories
                Object.values(stallsData).forEach(categoryStalls => {
                    stalls = stalls.concat(categoryStalls);
                });
            } else {
                stalls = stallsData[category] || [];
            }
            
            stallsContainer.innerHTML = '';
            
            if (stalls.length === 0) {
                showEmpty();
                return;
            }
            
            stalls.forEach(stall => {
                const stallCard = document.createElement('div');
                stallCard.className = 'stall-card';
                stallCard.onclick = () => showProducts(stall);
                stallCard.setAttribute('tabindex', '0');
                stallCard.setAttribute('role', 'button');
                stallCard.setAttribute('aria-label', `View products from ${stall.name}`);
                
                // Add keyboard support
                stallCard.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        showProducts(stall);
                    }
                });
                
                stallCard.innerHTML = `
                    <div class="stall-image">
                        <img src="${stall.image}" alt="${stall.name}" loading="lazy" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTUwQzIyNy42MTQgMTUwIDI1MCAyNy4zODU4IDI1MCAyMDBTMjI3LjYxNCAyNTAgMjAwIDI1MFMxNTAgMjI3LjYxNCAxNTAgMjAwUzE3Mi4zODYgMTUwIDIwMCAxNTBaIiBmaWxsPSIjOUI5RDlGIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzZCNzI4MCI+SW1hZ2UgTm90IEZvdW5kPC90ZXh0Pgo8L3N2Zz4='; this.alt='Image not available';">
                    </div>
                    <div class="stall-info">
                        <h3>${stall.name}</h3>
                        <p>${stall.description}</p>
                        <span class="stall-category">${stall.category}</span>
                    </div>
                `;
                
                stallsContainer.appendChild(stallCard);
            });
            
            showStalls();
        }, 500); // 500ms loading delay
        
    } catch (error) {
        console.error('Error displaying stalls:', error);
        showError();
    }
}

// Show Products Modal with error handling
function showProducts(stall) {
    try {
        if (!stall || !stall.products) {
            throw new Error('Invalid stall data');
        }
        
        modalTitle.textContent = `${stall.name} - Products`;
        productsContainer.innerHTML = '';

        stall.products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            productCard.innerHTML = `
                <h4>${product.name}</h4>
                <p>${product.description}</p>
                <div class="product-price">${product.price}</div>
            `;
            
            productsContainer.appendChild(productCard);
        });

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Focus management for accessibility
        closeBtn.focus();
        
    } catch (error) {
        console.error('Error showing products:', error);
        alert('Unable to load products. Please try again.');
    }
}

// Close Modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Mobile Navigation Toggle
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Update ARIA attributes for accessibility
    const isActive = navMenu.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isActive);
}

// Smooth Scrolling for Navigation Links
function smoothScroll(target) {
    try {
        const element = document.querySelector(target);
        if (element) {
            const offsetTop = element.offsetTop - 100; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    } catch (error) {
        console.error('Error with smooth scroll:', error);
    }
}

// Update Active Category
function updateActiveCategory(clickedCard, category) {
    // Remove active class from all cards
    categoryCards.forEach(card => {
        card.classList.remove('active');
        card.setAttribute('aria-selected', 'false');
    });
    
    // Add active class to clicked card
    clickedCard.classList.add('active');
    clickedCard.setAttribute('aria-selected', 'true');
    
    // Display stalls for selected category
    displayStalls(category);
    
    // Smooth scroll to stalls section
    smoothScroll('#stalls');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize countdown
        updateCountdown();
        setInterval(updateCountdown, 1000);
        
        // Display all stalls by default
        displayStalls('all');

        // Category click events
        categoryCards.forEach(card => {
            // Mouse click events
            card.addEventListener('click', function() {
                const category = this.dataset.category;
                updateActiveCategory(this, category);
            });
            
            // Keyboard support
            card.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const category = this.dataset.category;
                    updateActiveCategory(this, category);
                }
            });
            
            // Set initial ARIA attributes
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-selected', card.classList.contains('active'));
        });

        // Modal close events
        closeBtn.addEventListener('click', closeModal);
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
        
        // Close modal with Escape key
        window.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && modal.style.display === 'block') {
                closeModal();
            }
        });

        // Mobile navigation
        hamburger.addEventListener('click', toggleMobileMenu);
        
        // Set initial ARIA attributes for hamburger menu
        hamburger.setAttribute('aria-label', 'Toggle navigation menu');
        hamburger.setAttribute('aria-expanded', 'false');

        // Navigation link clicks
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = this.getAttribute('href');
                smoothScroll(target);
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    toggleMobileMenu();
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                if (navMenu.classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        });

        // Handle footer links
        document.querySelectorAll('.footer-section a[href^="#"]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = this.getAttribute('href');
                smoothScroll(target);
            });
        });
        
        // Add loading animation to navbar on scroll
        let lastScrollTop = 0;
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const navbar = document.querySelector('.navbar');
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                navbar.style.transform = 'translateX(-50%) translateY(-100%)';
            } else {
                // Scrolling up
                navbar.style.transform = 'translateX(-50%) translateY(0)';
            }
            lastScrollTop = scrollTop;
        });
        
    } catch (error) {
        console.error('Error during initialization:', error);
        // Show error state if initialization fails
        showError();
    }
});

// Handle window resize for responsive design
window.addEventListener('resize', function() {
    // Close mobile menu on resize to larger screen
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        toggleMobileMenu();
    }
});

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Error handling for global errors
window.addEventListener('error', function(event) {
    console.error('Global error:', event.error);
    // Could implement error reporting here
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled promise rejection:', event.reason);
    event.preventDefault(); // Prevent the default console error
});


