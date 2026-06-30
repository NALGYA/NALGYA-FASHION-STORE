// ==========================================
// DUMMY DATABASE PRODUCT
// ==========================================
const PRODUCTS = [
    {
        id: 1,
        name: "Sling Bag NALGYA",
        category: "Aksesoris",
        price: 660000,
        oldPrice: 1050000,
        discount: 20,
        rating: 4.9,
        reviewsCount: 120,
        image: "NALGYA/SlingBag.png",
        sizes: ["Medium"],
        colors: ["#030303ff", "#e6adb7ff", "#ffffffff"],
        colorNames: ["black", "Dusty Pink", "white"],
        description: "Sling Bag Wanita Nalgya berwarna dusty pink dari kulit sintetis ini tampil modis dengan ciri khas tali bahu yang dililit scarf motif",
        isNew: true,
        isBest: true
    },
    {
        id: 2,
        name: "Flatshoes Cantika",
        category: "Sepatu",
        price: 600000,
        oldPrice: 850000,
        discount: 25,
        rating: 4.9,
        reviewsCount: 85,
        image: "NALGYA/flatshoes.jpg",
        sizes: ["37", "38", "39", "40"],
        colors: ["#4e0615c3", "#e1ab75ff", "#ef1010ff"],
        colorNames: ["Burgundy", "Cream", "Red"],
        description: "Flatshoes Wanita Cantika bermotif bunga sepatu wanita yang empuk dan nyaman dipakai sehari-hari.",
        isNew: true,
        isBest: false
    },
    {
        id: 3,
        name: "Set Aksesoris Berliana",
        category: "Aksesoris",
        price: 1599000,
        oldPrice: 2500000,
        discount: 25,
        rating: 4.9,
        reviewsCount: 230,
        image: "NALGYA/set aksesoris.jpg",
        sizes: ["All Size"],
        colors: ["#656363ff", "#e8d79eff", "#db7aaaff"],
        colorNames: ["Silver", "Gold", "Rose Gold"],
        description: "Set Aksesoris Berliana menghadirkan kemewahan dengan desain elegan dan detail berkilau. Cocok dikenakan untuk pesta, acara formal, maupun melengkapi penampilan sehari-hari agar terlihat lebih anggun.",
        isNew: false,
        isBest: true
    },
    {
        id: 4,
        name: "Celana High Waist Cullotes",
        category: "Celana",
        price: 279000,
        oldPrice: 399000,
        discount: 30,
        rating: 4.9,
        reviewsCount: 145,
        image: "NALGYA/celana.jpg",
        sizes: ["28", "30", "32", "34"],
        colors: ["#f3ede0ff", "#020005ff", "#271601ff"],
        colorNames: ["Khaki", "Taupe Brown", "Jet Black"],
        description: "Celana Hiht Waist Cullotes katun premium untuk kebebasan bergerak sepanjang hari. Cocok untuk acara semi-formal kantoran maupun nongkrong santai di akhir pekan.",
        isNew: false,
        isBest: false
    },
    {
        id: 5,
        name: "Kemeja Pink Wanita Slimfit",
        category: "Atasan",
        price: 199000,
        oldPrice: 289000,
        discount: 25,
        rating: 4.9,
        reviewsCount: 92,
        image: "NALGYA/kemejapink.jpg",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["#ea6b97ff", "#264f6bff", "#bc198eff"],
        colorNames: ["Bone White", "Royal Blue", "Crimson Red"],
        description: "Kemeja Slim Fit Wanita terbuat dari bahan berkualitas yang lembut, adem, dan nyaman dipakai sepanjang hari. Desain slim fit memberikan siluet yang anggun tanpa mengurangi kenyamanan saat beraktivitas.",
        isNew: true,
        isBest: true
    },
    {
        id: 6,
        name: "Dress Wanita Summer",
        category: "Dress",
        price: 359000,
        oldPrice: 549000,
        discount: 24,
        rating: 4.9,
        reviewsCount: 63,
        image: "NALGYA/dress.jpg",
        sizes: ["M", "L", "XL", "XXL"],
        colors: ["#3d8ce1ff", "#ca6060ff"],
        colorNames: ["Polished Gold", "Matte Black"],
        description: "Dress wanita dengan desain anggun dan modern yang memberikan kesan feminin di setiap penampilan. Dibuat dari bahan berkualitas yang lembut dan nyaman dipakai, cocok untuk pesta, acara formal, maupun aktivitas sehari-hari.",
        isNew: false,
        isBest: false
    },
    {
        id: 7,
        name: "Topi Wanita Summer",
        category: "Aksesoris",
        price: 119000,
        oldPrice: 159000,
        discount: 25,
        rating: 4.9,
        reviewsCount: 319,
        image: "NALGYA/topi.jpg",
        sizes: ["All Size"],
        colors: ["#489cefff", "#ed7399ff", "#f1e5e5ff"],
        colorNames: ["Heather Gray", "Slate Blue", "Charcoal Black"],
        description: "Topi dengan desain modern dan stylish yang cocok melengkapi berbagai gaya. Terbuat dari bahan berkualitas, ringan, dan nyaman dipakai untuk aktivitas sehari-hari maupun saat bepergian.",
        isNew: true,
        isBest: false
    },
    {
        id: 8,
        name: "Heels Wanita Cyntya",
        category: "Sepatu",
        price: 599000,
        oldPrice: 899000,
        discount: 20,
        rating: 4.9,
        reviewsCount: 541,
        image: "NALGYA/heels.jpg",
        sizes: ["37", "38", "39", "40"],
        colors: ["#ca4a79ff", "#000000", "#fcf7faff"],
        colorNames: ["Cognac Brown", "Pitch Black", "Blush Pink"],
        description: "Heels Cyntya hadirdengan desain elegan dan modern yang memberikan kesan anggun di setiap langkah. Dibuat dari material berkualitas dengan sol yang nyaman, cocok digunakan untuk pesta, acara formal, maupun aktivitas sehari-hari.",
        isNew: false,
        isBest: true
    }
];

// PROMO SLIDES DATA
const PROMOS = [
    {
        title: "Koleksi aksesoris",
        desc: "Diskon hingga 20%-30% untuk seluruh aksesoris terlaris.",
        image: "NALGYA/set aksesoris.jpg"
    },
    {
        title: "Promo Awal Bulan - Cashback 10%",
        desc: "Gunakan kode kupon PROMOFASHION untuk diskon belanja Anda.",
        image: "NALGYA/SlingBag.png"
    },
    {
        title: "Heels wanita cyntya",
        desc: "Langkah makin pede dengan alas kaki trendi edisi terbatas.",
        image: "NALGYA/heels.jpg"
    }
];

// ==========================================
// STATE MANAGEMENT (LOCAL STORAGE INTERACTION)
// ==========================================
const State = {
    getCart() {
        return JSON.parse(localStorage.getItem('fashion_cart')) || [];
    },
    saveCart(cart) {
        localStorage.setItem('fashion_cart', JSON.stringify(cart));
        this.updateBadgeCounts();
    },
    getWishlist() {
        return JSON.parse(localStorage.getItem('fashion_wishlist')) || [];
    },
    saveWishlist(wishlist) {
        localStorage.setItem('fashion_wishlist', JSON.stringify(wishlist));
        this.updateBadgeCounts();
    },
    getOrders() {
        return JSON.parse(localStorage.getItem('fashion_orders')) || [];
    },
    saveOrders(orders) {
        localStorage.setItem('fashion_orders', JSON.stringify(orders));
    },
    getTheme() {
        return localStorage.getItem('fashion_theme') || 'light';
    },
    saveTheme(theme) {
        localStorage.setItem('fashion_theme', theme);
    },

    // Updates shopping cart badge bubble in bottom and top navs
    updateBadgeCounts() {
        const cart = this.getCart();
        const wishlist = this.getWishlist();

        const cartTotalQty = cart.reduce((sum, item) => sum + item.quantity, 0);

        // Target elements across index, checkout, payment
        const cartBadges = document.querySelectorAll('.cart-badge');
        const cartCounts = document.querySelectorAll('.cart-count');
        const wishlistBadges = document.querySelectorAll('.wishlist-badge');

        cartBadges.forEach(el => el.textContent = cartTotalQty);
        cartCounts.forEach(el => el.textContent = cartTotalQty);
        wishlistBadges.forEach(el => el.textContent = wishlist.length);
    }
};

// ==========================================
// TOAST NOTIFICATION UTILITY
// ==========================================
function showToast(message, icon = "✅") {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    container.innerHTML = `
        <div class="toast">
            <span class="toast-icon">${icon}</span>
            <span class="toast-message">${message}</span>
        </div>
    `;

    // Animate in
    setTimeout(() => {
        container.classList.add('active');
    }, 50);

    // Dismiss after 2.5s
    setTimeout(() => {
        container.classList.remove('active');
    }, 2500);
}

// Rupiah Formatter
function formatRupiah(number) {
    return 'Rp ' + number.toLocaleString('id-ID');
}

// ==========================================
// ROUTER INITIALIZER (CHECK PAGE CONTEXT)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Apply global dark mode preference
    initTheme();
    State.updateBadgeCounts();

    const path = window.location.pathname;

    if (path.includes("checkout.html")) {
        initCheckoutPage();
    } else if (path.includes("payment.html")) {
        initPaymentPage();
    } else {
        // Defaults to index.html logic
        initIndexPage();
    }
});

// ==========================================
// DARK MODE & THEME LOGIC
// ==========================================
function initTheme() {
    const currentTheme = State.getTheme();
    const body = document.body;

    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }

    // Sync the dark mode toggle switch if present
    const toggle = document.getElementById('darkModeToggle');
    if (toggle) {
        toggle.checked = (currentTheme === 'dark');
        toggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                body.classList.add('dark-theme');
                State.saveTheme('dark');
                showToast("Tema Gelap diaktifkan", "🌙");
            } else {
                body.classList.remove('dark-theme');
                State.saveTheme('light');
                showToast("Tema Terang diaktifkan", "☀️");
            }
        });
    }
}

// ==========================================
// 🏠 INDEX.HTML PAGE LOGIC
// ==========================================
function initIndexPage() {
    let currentSlide = 0;
    let shopCategoryFilter = "Semua";
    let shopSearchQuery = "";
    let shopSortOption = "populer";
    let selectedSize = "";
    let selectedColor = "";
    let activeModalProduct = null;

    // A. BOTTOM NAVIGATION TAB SWITCHER
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');
    const tabContents = document.querySelectorAll('.tab-content');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const tabId = item.getAttribute('data-tab');
            if (!tabId) return;

            // Update bottom nav active styling
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Show appropriate content tab
            tabContents.forEach(tab => tab.classList.remove('active'));
            const targetTab = document.getElementById(tabId + 'Tab');
            if (targetTab) {
                targetTab.classList.add('active');
            }

            // Specific Tab Render Refreshers
            if (tabId === 'wishlist') {
                renderWishlist();
            } else if (tabId === 'cart') {
                renderCart();
            } else if (tabId === 'profile') {
                renderProfile();
            } else if (tabId === 'shop') {
                renderShopCatalog();
            }
        });
    });

    // B. SEARCH & FILTER INTERACTION
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            shopSearchQuery = e.target.value;
            // Force redirection to shop tab for searches
            openShopTab(shopSearchQuery);
        });
    }

    function openShopTab(searchKeyword = "") {
        const shopNavItem = document.querySelector('.bottom-nav [data-tab="shop"]');
        if (shopNavItem) {
            shopNavItem.click();
        }
        if (searchKeyword !== "") {
            const shopSearchInput = document.getElementById('shopSearchInput');
            if (shopSearchInput) {
                shopSearchInput.value = searchKeyword;
            }
            shopSearchQuery = searchKeyword;
            renderShopCatalog();
        }
    }

    const shopSearchInput = document.getElementById('shopSearchInput');
    if (shopSearchInput) {
        shopSearchInput.addEventListener('input', (e) => {
            shopSearchQuery = e.target.value;
            renderShopCatalog();
        });
    }

    const catSelectFilter = document.getElementById('catSelectFilter');
    if (catSelectFilter) {
        catSelectFilter.addEventListener('change', (e) => {
            shopCategoryFilter = e.target.value;
            renderShopCatalog();
        });
    }

    const sortSelectFilter = document.getElementById('sortSelectFilter');
    if (sortSelectFilter) {
        sortSelectFilter.addEventListener('change', (e) => {
            shopSortOption = e.target.value;
            renderShopCatalog();
        });
    }

    // C. PROMO SLIDER AUTO SWITCHER
    const sliderContainer = document.getElementById('promoSlider');
    if (sliderContainer) {
        // Generate Slider slides
        sliderContainer.innerHTML = PROMOS.map((promo, idx) => `
            <div class="promo-slide ${idx === 0 ? 'active' : ''}" style="background-image: url('${promo.image}')">
                <div class="promo-overlay">
                    <h3 class="promo-title">${promo.title}</h3>
                    <p class="promo-desc">${promo.desc}</p>
                </div>
            </div>
        `).join('');

        setInterval(() => {
            const slides = document.querySelectorAll('.promo-slide');
            if (slides.length === 0) return;

            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 4000);
    }

    // D. CATEGORY CHIPS HANDLERS
    const categoryChips = document.querySelectorAll('.categories-scroll .category-item');
    categoryChips.forEach(chip => {
        chip.addEventListener('click', () => {
            categoryChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            const selectedCat = chip.getAttribute('data-category');
            shopCategoryFilter = selectedCat;

            // Sync Shop Tab dropdown selector
            if (catSelectFilter) {
                catSelectFilter.value = selectedCat;
            }

            openShopTab();
            renderShopCatalog();
        });
    });

    // E. RENDER LISTS FOR HOME TAB (NEW ARRIVAL & BEST SELLER)
    function renderHomeLists() {
        const newArrivalsList = document.getElementById('newArrivalsList');
        const bestSellersList = document.getElementById('bestSellersList');

        if (newArrivalsList) {
            const newArrivals = PRODUCTS.filter(p => p.isNew);
            newArrivalsList.innerHTML = newArrivals.map(p => generateProductCardHTML(p)).join('');
        }

        if (bestSellersList) {
            const bestSellers = PRODUCTS.filter(p => p.isBest);
            bestSellersList.innerHTML = bestSellers.map(p => generateProductCardHTML(p)).join('');
        }

        attachProductCardListeners();
    }

    function generateProductCardHTML(p) {
        const wishlist = State.getWishlist();
        const activeWishClass = wishlist.includes(p.id) ? 'active' : '';
        const wishIcon = wishlist.includes(p.id) ? '❤️' : '🤍';

        return `
            <div class="product-card" data-id="${p.id}">
                <div class="product-img-wrapper">
                    <img class="product-img" src="${p.image}" alt="${p.name}" loading="lazy">
                    <div class="product-badges">
                        ${p.isNew ? '<span class="badge badge-new">New</span>' : ''}
                        ${p.discount > 0 ? `<span class="badge badge-discount">-${p.discount}%</span>` : ''}
                    </div>
                    <button class="wishlist-toggle ${activeWishClass}" data-id="${p.id}">${wishIcon}</button>
                </div>
                <div class="product-info">
                    <span class="product-cat">${p.category}</span>
                    <h4 class="product-title">${p.name}</h4>
                    <div class="product-rating">
                        ⭐ ${p.rating} <span class="product-rating-count">(${p.reviewsCount})</span>
                    </div>
                    <div class="product-price-row">
                        <div class="price-container">
                            <span class="product-price">${formatRupiah(p.price)}</span>
                            ${p.discount > 0 ? `<span class="product-old-price">${formatRupiah(p.oldPrice)}</span>` : ''}
                        </div>
                        <button class="add-cart-fast" data-id="${p.id}">🛒</button>
                    </div>
                </div>
            </div>
        `;
    }

    function attachProductCardListeners() {
        // Detail Modal Opener
        const cardImagesAndTitles = document.querySelectorAll('.product-card .product-img-wrapper, .product-card .product-title, .product-card .product-cat');
        cardImagesAndTitles.forEach(element => {
            element.addEventListener('click', (e) => {
                // Prevent trigger when clicking wishlist toggle
                if (e.target.classList.contains('wishlist-toggle')) return;

                const card = element.closest('.product-card');
                const id = parseInt(card.getAttribute('data-id'));
                const product = PRODUCTS.find(p => p.id === id);
                if (product) {
                    openProductModal(product);
                }
            });
        });

        // Fast Add Cart Button
        const fastCartBtns = document.querySelectorAll('.add-cart-fast');
        fastCartBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(btn.getAttribute('data-id'));
                const product = PRODUCTS.find(p => p.id === id);
                if (product) {
                    // Adds standard first size & color
                    const size = product.sizes[0];
                    const colorName = product.colorNames[0];
                    addToCart(product.id, size, colorName, 1);
                }
            });
        });

        // Wishlist Toggle Buttons
        const wishBtns = document.querySelectorAll('.wishlist-toggle');
        wishBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(btn.getAttribute('data-id'));
                toggleWishlist(id, btn);
            });
        });
    }

    // F. WISHLIST TOGGLE LOGIC
    function toggleWishlist(id, btnElement = null) {
        let wishlist = State.getWishlist();
        const index = wishlist.indexOf(id);
        const product = PRODUCTS.find(p => p.id === id);

        if (index > -1) {
            wishlist.splice(index, 1);
            State.saveWishlist(wishlist);
            showToast(`${product.name} dihapus dari Favorit`, "💔");
            if (btnElement) {
                btnElement.classList.remove('active');
                btnElement.innerHTML = '🤍';
            }
        } else {
            wishlist.push(id);
            State.saveWishlist(wishlist);
            showToast(`${product.name} disimpan ke Favorit`, "❤️");
            if (btnElement) {
                btnElement.classList.add('active');
                btnElement.innerHTML = '❤️';
            }
        }

        // Refresh active state if user is on wishlist tab
        const activeTab = document.querySelector('.bottom-nav .nav-item.active').getAttribute('data-tab');
        if (activeTab === 'wishlist') {
            renderWishlist();
        }
    }

    // G. ADD TO CART LOGIC
    function addToCart(productId, size, color, quantity) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        let cart = State.getCart();
        // Check duplicate items
        const duplicateIdx = cart.findIndex(item => item.id === productId && item.size === size && item.color === color);

        if (duplicateIdx > -1) {
            cart[duplicateIdx].quantity += quantity;
        } else {
            cart.push({
                id: productId,
                size: size,
                color: color,
                quantity: quantity
            });
        }

        State.saveCart(cart);
        showToast(`${product.name} (${size}) ditambahkan ke keranjang!`, "🛍️");
    }

    // H. DETAIL MODAL DIALOG
    const modal = document.getElementById('productDetailModal');
    const closeModalBtn = document.getElementById('closeModal');

    if (closeModalBtn && modal) {
        closeModalBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        // Close modal when tapping overlay background
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    function openProductModal(product) {
        activeModalProduct = product;
        selectedSize = product.sizes[0];
        selectedColor = product.colorNames[0];

        document.getElementById('modalImage').src = product.image;
        document.getElementById('modalTitle').textContent = product.name;
        document.getElementById('modalCategory').textContent = product.category;
        document.getElementById('modalRating').textContent = `⭐ ${product.rating} (${product.reviewsCount} Ulasan)`;
        document.getElementById('modalPrice').textContent = formatRupiah(product.price);
        document.getElementById('modalDesc').textContent = product.description;

        // Render Size Selector Chips
        const sizeBox = document.getElementById('modalSizeSelector');
        sizeBox.innerHTML = product.sizes.map((s, idx) => `
            <button class="size-chip ${idx === 0 ? 'active' : ''}" data-size="${s}">${s}</button>
        `).join('');

        // Render Color selector dots
        const colorBox = document.getElementById('modalColorSelector');
        colorBox.innerHTML = product.colors.map((hex, idx) => `
            <div class="color-dot ${idx === 0 ? 'active' : ''}" style="background-color: ${hex}" data-color-name="${product.colorNames[idx]}" title="${product.colorNames[idx]}"></div>
        `).join('');

        // Size Event Attachments
        const sizeChips = sizeBox.querySelectorAll('.size-chip');
        sizeChips.forEach(chip => {
            chip.addEventListener('click', () => {
                sizeChips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                selectedSize = chip.getAttribute('data-size');
            });
        });

        // Color Event Attachments
        const colorDots = colorBox.querySelectorAll('.color-dot');
        colorDots.forEach(dot => {
            dot.addEventListener('click', () => {
                colorDots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
                selectedColor = dot.getAttribute('data-color-name');
            });
        });

        // Direct Modal Buy Now Buttons
        const addToCartBtn = document.getElementById('modalAddToCart');
        const buyNowBtn = document.getElementById('modalBuyNow');

        // Remove old listeners
        const newAddToCartBtn = addToCartBtn.cloneNode(true);
        const newBuyNowBtn = buyNowBtn.cloneNode(true);
        addToCartBtn.parentNode.replaceChild(newAddToCartBtn, addToCartBtn);
        buyNowBtn.parentNode.replaceChild(newBuyNowBtn, buyNowBtn);

        // Attach fresh event listeners
        newAddToCartBtn.addEventListener('click', () => {
            addToCart(activeModalProduct.id, selectedSize, selectedColor, 1);
            modal.classList.remove('active');
        });

        newBuyNowBtn.addEventListener('click', () => {
            addToCart(activeModalProduct.id, selectedSize, selectedColor, 1);
            modal.classList.remove('active');
            // Directly head to Cart tab then trigger checkout redirect
            const cartTabItem = document.querySelector('.bottom-nav [data-tab="cart"]');
            if (cartTabItem) cartTabItem.click();
        });

        modal.classList.add('active');
    }

    // I. RENDERING SHOP CATALOGUE TAB
    function renderShopCatalog() {
        const shopProductsList = document.getElementById('shopProductsList');
        if (!shopProductsList) return;

        // Filter products
        let filtered = PRODUCTS;

        if (shopCategoryFilter !== "Semua") {
            filtered = filtered.filter(p => p.category === shopCategoryFilter);
        }

        if (shopSearchQuery.trim() !== "") {
            const query = shopSearchQuery.toLowerCase();
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query) ||
                p.category.toLowerCase().includes(query)
            );
        }

        // Sorting Option
        if (shopSortOption === "rendah") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (shopSortOption === "tinggi") {
            filtered.sort((a, b) => b.price - a.price);
        } else {
            // "populer" by rating
            filtered.sort((a, b) => b.rating - a.rating);
        }

        if (filtered.length === 0) {
            shopProductsList.innerHTML = `
                <div class="empty-state" style="grid-column: span 2">
                    <div class="empty-icon">🔍</div>
                    <h4 class="empty-title">Produk Tidak Ditemukan</h4>
                    <p class="empty-desc">Coba gunakan kata kunci pencarian lain atau ganti filter Anda.</p>
                </div>
            `;
            return;
        }

        shopProductsList.innerHTML = filtered.map(p => generateProductCardHTML(p)).join('');
        attachProductCardListeners();
    }

    // J. RENDERING WISHLIST TAB
    function renderWishlist() {
        const container = document.getElementById('wishlistList');
        if (!container) return;

        const wishlistIds = State.getWishlist();
        const favoriteProducts = PRODUCTS.filter(p => wishlistIds.includes(p.id));

        if (favoriteProducts.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">❤️</div>
                    <h4 class="empty-title">Favorit Anda Kosong</h4>
                    <p class="empty-desc">Tekan tombol hati di produk untuk menyimpannya di sini.</p>
                    <button class="btn btn-primary" onclick="document.querySelector('.bottom-nav [data-tab=\\'shop\\']').click()">Cari Produk</button>
                </div>
            `;
            return;
        }

        container.innerHTML = `
            <div class="products-grid">
                ${favoriteProducts.map(p => generateProductCardHTML(p)).join('')}
            </div>
        `;
        attachProductCardListeners();
    }

    // K. RENDERING CART TAB
    function renderCart() {
        const container = document.getElementById('cartItemsList');
        if (!container) return;

        const cart = State.getCart();

        if (cart.length === 0) {
            document.getElementById('cartTabEmpty').style.display = 'flex';
            document.getElementById('cartTabFilled').style.display = 'none';
            return;
        }

        document.getElementById('cartTabEmpty').style.display = 'none';
        document.getElementById('cartTabFilled').style.display = 'block';

        container.innerHTML = cart.map((item, idx) => {
            const product = PRODUCTS.find(p => p.id === item.id);
            if (!product) return '';

            return `
                <div class="cart-item">
                    <img class="cart-item-img" src="${product.image}" alt="${product.name}">
                    <div class="cart-item-details">
                        <h4 class="cart-item-title">${product.name}</h4>
                        <p class="cart-item-meta">Ukuran: ${item.size} | Warna: ${item.color}</p>
                        <span class="cart-item-price">${formatRupiah(product.price)}</span>
                    </div>
                    <div class="cart-item-actions">
                        <button class="delete-cart-item" data-index="${idx}">🗑️</button>
                        <div class="cart-qty-control">
                            <button class="qty-btn qty-minus" data-index="${idx}">-</button>
                            <span class="qty-val">${item.quantity}</span>
                            <button class="qty-btn qty-plus" data-index="${idx}">+</button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Attach listeners for cart updates
        container.querySelectorAll('.qty-minus').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-index'));
                updateCartQty(idx, -1);
            });
        });

        container.querySelectorAll('.qty-plus').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-index'));
                updateCartQty(idx, 1);
            });
        });

        container.querySelectorAll('.delete-cart-item').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-index'));
                deleteCartItem(idx);
            });
        });

        // Coupon application handler
        const applyCouponBtn = document.getElementById('applyCouponBtn');
        const couponInput = document.getElementById('couponInput');

        applyCouponBtn.addEventListener('click', () => {
            const code = couponInput.value.trim().toUpperCase();
            if (code === 'PROMOFASHION') {
                localStorage.setItem('fashion_coupon', 'PROMOFASHION');
                showToast("Kupon diskon 10% berhasil dipasang!", "🎟️");
                calculateCartPrices();
            } else if (code === "") {
                showToast("Masukkan kode kupon terlebih dahulu.", "⚠️");
            } else {
                showToast("Kode kupon tidak valid/kedaluwarsa.", "❌");
            }
        });

        calculateCartPrices();
    }

    function updateCartQty(index, change) {
        let cart = State.getCart();
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
            showToast("Produk dihapus dari keranjang.", "🗑️");
        }
        State.saveCart(cart);
        renderCart();
    }

    function deleteCartItem(index) {
        let cart = State.getCart();
        cart.splice(index, 1);
        State.saveCart(cart);
        showToast("Produk dihapus dari keranjang.", "🗑️");
        renderCart();
    }

    function calculateCartPrices() {
        const cart = State.getCart();
        let subtotal = 0;

        cart.forEach(item => {
            const product = PRODUCTS.find(p => p.id === item.id);
            if (product) {
                subtotal += product.price * item.quantity;
            }
        });

        // Check active coupon discount (10%)
        const coupon = localStorage.getItem('fashion_coupon');
        let discount = 0;
        const discountRow = document.getElementById('cartDiscountRow');

        if (coupon === 'PROMOFASHION') {
            discount = Math.round(subtotal * 0.1);
            discountRow.style.display = 'flex';
            document.getElementById('cartDiscountVal').textContent = `- ${formatRupiah(discount)}`;
        } else {
            discountRow.style.display = 'none';
        }

        const grandTotal = subtotal - discount;

        document.getElementById('cartSubtotal').textContent = formatRupiah(subtotal);
        document.getElementById('cartGrandTotal').textContent = formatRupiah(grandTotal);

        // Redirect to Checkout Page Trigger
        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) {
            // Remove old listener
            const newCheckoutBtn = checkoutBtn.cloneNode(true);
            checkoutBtn.parentNode.replaceChild(newCheckoutBtn, checkoutBtn);
            newCheckoutBtn.addEventListener('click', () => {
                // Save checkout data temporarily for checkout.html
                const summary = {
                    subtotal: subtotal,
                    discount: discount,
                    couponCode: coupon || null
                };
                localStorage.setItem('checkout_summary', JSON.stringify(summary));
                window.location.href = 'checkout.html';
            });
        }
    }

    // L. RENDERING PROFILE TAB (ORDERS HISTORY)
    function renderProfile() {
        const ordersListContainer = document.getElementById('ordersHistoryList');
        if (!ordersListContainer) return;

        const orders = State.getOrders();

        if (orders.length === 0) {
            ordersListContainer.innerHTML = `
                <div class="empty-state" style="padding: 20px 0;">
                    <div class="empty-icon" style="font-size: 32px;">📦</div>
                    <h5 class="empty-title">Belum Ada Transaksi</h5>
                    <p class="empty-desc">Riwayat pesanan belanja Anda akan tercatat di sini.</p>
                </div>
            `;
            return;
        }

        ordersListContainer.innerHTML = orders.reverse().map(order => `
            <div class="order-card">
                <div class="order-header">
                    <span class="order-id">${order.invoiceId}</span>
                    <span class="order-date">${order.date}</span>
                </div>
                <div class="order-body">
                    <div class="order-items-info">
                        ${order.items.map(item => `${item.name} (${item.quantity}x)`).join(', ')}
                    </div>
                    <span class="order-amount">${formatRupiah(order.total)}</span>
                </div>
                <div class="order-footer">
                    <span class="order-items-info" style="font-size: 10px;">Metode: ${order.paymentMethod}</span>
                    <span class="order-status status-${order.status.toLowerCase()}">${order.status}</span>
                </div>
            </div>
        `).join('');
    }

    // Initial render call on page load
    renderHomeLists();
}

// ==========================================
// 📦 CHECKOUT.HTML PAGE LOGIC
// ==========================================
function initCheckoutPage() {
    const summaryData = JSON.parse(localStorage.getItem('checkout_summary'));
    const cart = State.getCart();

    if (!summaryData || cart.length === 0) {
        showToast("Keranjang Anda kosong! Mengalihkan...", "⚠️");
        setTimeout(() => { window.location.href = 'index.html'; }, 1500);
        return;
    }

    // Render Preview Items list
    const itemsPreview = document.getElementById('checkoutItemsPreview');
    if (itemsPreview) {
        itemsPreview.innerHTML = cart.map(item => {
            const product = PRODUCTS.find(p => p.id === item.id);
            if (!product) return '';
            return `
                <div class="checkout-item-preview">
                    <span class="checkout-item-name">${product.name}</span>
                    <span class="checkout-item-qty">${item.quantity}x</span>
                    <span class="checkout-item-price">${formatRupiah(product.price * item.quantity)}</span>
                </div>
            `;
        }).join('');
    }

    // Calculation vars
    let subtotal = summaryData.subtotal;
    let discount = summaryData.discount;
    let shippingFee = 0;

    // Elements
    const subtotalEl = document.getElementById('checkoutSubtotal');
    const discountEl = document.getElementById('checkoutDiscount');
    const shippingEl = document.getElementById('checkoutShipping');
    const totalEl = document.getElementById('checkoutTotal');
    const courierSelect = document.getElementById('courierSelect');
    const checkoutForm = document.getElementById('checkoutDetailsForm');

    subtotalEl.textContent = formatRupiah(subtotal);
    discountEl.textContent = discount > 0 ? `- ${formatRupiah(discount)}` : formatRupiah(0);

    if (discount === 0) {
        document.getElementById('checkoutDiscountRow').style.display = 'none';
    }

    // Update prices on shipping courier change
    courierSelect.addEventListener('change', () => {
        shippingFee = parseInt(courierSelect.value) || 0;
        shippingEl.textContent = formatRupiah(shippingFee);
        const finalTotal = subtotal - discount + shippingFee;
        totalEl.textContent = formatRupiah(finalTotal);
    });

    // Initial Trigger
    courierSelect.dispatchEvent(new Event('change'));

    // Handle Form Submit
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const customerName = document.getElementById('custName').value.trim();
        const customerPhone = document.getElementById('custPhone').value.trim();
        const customerAddress = document.getElementById('custAddress').value.trim();
        const selectedCourierText = courierSelect.options[courierSelect.selectedIndex].text;

        if (shippingFee === 0) {
            showToast("Silakan pilih kurir pengiriman!", "⚠️");
            return;
        }

        // Store checkout state into pending order
        const invoiceId = "INV-" + Math.floor(100000 + Math.random() * 900000);
        const pendingOrder = {
            invoiceId: invoiceId,
            date: new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }),
            customer: {
                name: customerName,
                phone: customerPhone,
                address: customerAddress
            },
            courier: selectedCourierText,
            subtotal: subtotal,
            discount: discount,
            shipping: shippingFee,
            total: subtotal - discount + shippingFee,
            items: cart.map(item => {
                const product = PRODUCTS.find(p => p.id === item.id);
                return {
                    id: item.id,
                    name: product.name,
                    quantity: item.quantity,
                    price: product.price,
                    size: item.size,
                    color: item.color
                };
            })
        };

        localStorage.setItem('pending_order', JSON.stringify(pendingOrder));
        window.location.href = 'payment.html';
    });
}

// ==========================================
// 💳 PAYMENT.HTML PAGE LOGIC
// ==========================================
function initPaymentPage() {
    const pendingOrder = JSON.parse(localStorage.getItem('pending_order'));

    if (!pendingOrder) {
        showToast("Pesanan tidak ditemukan! Mengalihkan...", "⚠️");
        setTimeout(() => { window.location.href = 'index.html'; }, 1500);
        return;
    }

    // Render invoice summary details
    document.getElementById('payInvoiceId').textContent = pendingOrder.invoiceId;
    document.getElementById('payTotalAmount').textContent = formatRupiah(pendingOrder.total);
    document.getElementById('payTotalRecap').textContent = formatRupiah(pendingOrder.total);

    // Tab Switch selectors for Payment methods
    const methodCards = document.querySelectorAll('.payment-method-card');
    const paymentInstructions = document.getElementById('paymentInstructions');
    let selectedMethod = "QRIS"; // Default

    methodCards.forEach(card => {
        card.addEventListener('click', () => {
            methodCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            selectedMethod = card.getAttribute('data-method');
            renderInstructionDetails(selectedMethod, pendingOrder.total);
        });
    });

    function renderInstructionDetails(method, total) {
        if (method === 'QRIS') {
            paymentInstructions.innerHTML = `
                <div class="qris-box">
                    <img class="qris-header-logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_QRIS.svg" alt="QRIS Logo">
                    <div class="qris-code">
                        <!-- Simulate dynamic QRIS code representation -->
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=FASHION-INV-${pendingOrder.invoiceId}" alt="QRIS Code">
                    </div>
                    <p style="font-size: 11px; color: #6c757d; text-align: center;">Scan kode QR di atas menggunakan aplikasi DANA, OVO, GoPay, LinkAja, atau Mobile Banking Anda.</p>
                </div>
            `;
        } else if (method === 'DANA') {
            paymentInstructions.innerHTML = `
                <div class="dana-box">
                    <img class="payment-method-logo" src="https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.png" alt="DANA Logo" style="height: 30px; margin-bottom: 8px;">
                    <h4 class="dana-box-title">DANA Instant Pay</h4>
                    <p class="dana-box-desc">Klik tombol di bawah untuk langsung membuka aplikasi DANA di HP Anda dan menyelesaikan pembayaran secara instan.</p>
                    <a href="dana://pay?invoice=${pendingOrder.invoiceId}&amount=${total}" class="btn btn-primary btn-block" style="background-color: #1189d6; color: white;" id="btnDanaDirect">
                        Buka Aplikasi DANA
                    </a>
                </div>
            `;

            // Add custom local simulation fallback click on direct app button
            const btnDana = document.getElementById('btnDanaDirect');
            if (btnDana) {
                btnDana.addEventListener('click', (e) => {
                    e.preventDefault();
                    showToast("Membuka aplikasi DANA...", "📱");

                    // Open a simulated popup to show premium app flow interaction
                    setTimeout(() => {
                        const confirmSim = confirm("SIMULASI INTEGRASI DANA:\n\nApakah Anda ingin menyetujui pembayaran sebesar " + formatRupiah(total) + " di aplikasi DANA?");
                        if (confirmSim) {
                            processSuccessPayment();
                        }
                    }, 800);
                });
            }
        } else if (method === 'BCA_VA') {
            paymentInstructions.innerHTML = `
                <div style="padding: 12px; font-size: 12px; display: flex; flex-direction: column; gap: 8px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; background-color: var(--bg-tertiary); padding: 12px; border-radius: 8px;">
                        <div>
                            <span style="font-size: 10px; color: var(--text-secondary);">Nomor Virtual Account</span>
                            <h4 style="font-size: 16px; font-weight: 700; color: var(--accent-color);" id="vaNumber">80012089${pendingOrder.invoiceId.split('-')[1]}</h4>
                        </div>
                        <button class="btn btn-secondary" style="padding: 6px 12px; font-size: 11px;" onclick="navigator.clipboard.writeText(document.getElementById('vaNumber').textContent); alert('Nomor VA disalin!')">Salin</button>
                    </div>
                    <p><b>Petunjuk Transfer BCA Virtual Account:</b></p>
                    <ol style="margin-left: 16px; display: flex; flex-direction: column; gap: 4px;">
                        <li>Buka aplikasi m-BCA atau masuk ke ATM BCA.</li>
                        <li>Pilih menu <b>Transfer > BCA Virtual Account</b>.</li>
                        <li>Masukkan Nomor Virtual Account di atas.</li>
                        <li>Masukkan nominal transfer persis sebesar <b>${formatRupiah(total)}</b>.</li>
                        <li>Masukkan PIN BCA Anda dan selesaikan transaksi.</li>
                    </ol>
                </div>
            `;
        }
    }

    // Init first default instruction
    renderInstructionDetails(selectedMethod, pendingOrder.total);

    // Confirm Payment Click Handler
    const confirmPayBtn = document.getElementById('confirmPaymentBtn');
    confirmPayBtn.addEventListener('click', () => {
        processSuccessPayment();
    });

    function processSuccessPayment() {
        // Move order to permanent history orders
        const orders = State.getOrders();

        const newOrder = {
            ...pendingOrder,
            paymentMethod: selectedMethod,
            status: "Diproses" // Mark as active process
        };

        orders.push(newOrder);
        State.saveOrders(orders);

        // Clear Cart & Kupon & Pending Orders
        State.saveCart([]);
        localStorage.removeItem('fashion_coupon');
        localStorage.removeItem('checkout_summary');
        localStorage.removeItem('pending_order');

        // Render digital receipt
        document.getElementById('recInvoice').textContent = newOrder.invoiceId;
        document.getElementById('recDate').textContent = newOrder.date;
        document.getElementById('recMethod').textContent = selectedMethod;
        document.getElementById('recTotal').textContent = formatRupiah(newOrder.total);

        // Slide success modal screen overlay in
        const successOverlay = document.getElementById('successOverlay');
        successOverlay.classList.add('active');

        // Handle Return Home button
        document.getElementById('btnSuccessDone').addEventListener('click', () => {
            // Re-route to profile tab in index.html to view history orders status
            window.location.href = 'index.html?tab=profile';
        });
    }
}

// Redirect URL Tab handling helper for URL parameter ?tab=profile
if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
    const params = new URLSearchParams(window.location.search);
    const targetTab = params.get('tab');
    if (targetTab) {
        setTimeout(() => {
            const tabItem = document.querySelector(`.bottom-nav .nav-item[data-tab="${targetTab}"]`);
            if (tabItem) tabItem.click();
        }, 100);
    }
}
