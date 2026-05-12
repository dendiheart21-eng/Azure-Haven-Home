const products = [
    {
        id: 1,
        name: "Harbor Line Dining Chair",
        category: "Chair",
        price: 6950,
        rating: 4.5,
        newarrival: 5,
        description: "The Harbor Line Dining Chair combines sleek modern design with coastal-inspired aesthetics. Crafted from high-quality wood and upholstered in durable fabric, this chair offers both comfort and style. Perfect for dining rooms or accent seating in any contemporary home.",
        images: [
            "Images/WEBSITE PRODUCTS/3/4P.png",
            "Images/20x24/FP/1.png",
            "Images/20x24/FP/2.png",
            "Images/20x24/FP/3.png",
            "Images/20x24/FP/4.png"
        ]
    },
    {
        id: 2,
        name: "Marina Luxe Lounge Chair",
        category: "Chair",
        price: 18500,
        rating: 5,
        newarrival: 5,
        description: "Indulge in luxury with the Marina Luxe Lounge Chair. Featuring plush cushions and a curved design for optimal comfort, this chair is ideal for relaxation. The premium materials ensure durability while the elegant finish complements any decor.",
        images: [
            "Images/WEBSITE PRODUCTS/2/4P.png",
            "Images/20x24/FP/5.png",
            "Images/20x24/FP/6.png",
            "Images/20x24/FP/7.png",
            "Images/20x24/FP/8.png"
        ]
    },
    {
        id: 3,
        name: "Blue Harbor Console Table",
        category: "Table",
        price: 11900,
        rating: 4,
        newarrival: 5,
        description: "The Blue Harbor Console Table adds a touch of coastal charm to your living space. With its sturdy construction and versatile design, it's perfect for entryways, hallways, or behind sofas. The blue accent brings a refreshing vibe to your home.",
        images: [
            "Images/WEBSITE PRODUCTS/5/3P.png",
            "Images/20x24/FP/9.png",
            "Images/20x24/FP/10.png",
            "Images/20x24/FP/11.png",
            "Images/20x24/FP/12.png"
        ]
    },
    {
        id: 4,
        name: "Sapphire Nest Bedside Table",
        category: "Table",
        price: 7450,
        rating: 4.5,
        newarrival: 5,
        description: "Nestle your essentials in the Sapphire Nest Bedside Table. This compact yet functional table features a drawer for storage and a surface for lamps, books, or decor. The sapphire-inspired design adds a serene touch to your bedroom.",
        images: [
            "Images/WEBSITE PRODUCTS/7/2P.png",
            "Images/20x24/FP/13.png",
            "Images/20x24/FP/14.png",
            "Images/20x24/FP/15.png",
            "Images/20x24/FP/16.png"
        ]
    },
    {
        id: 5,
        name: "Azure Crest Accent Chair",
        category: "Chair",
        price: 12950,
        rating: 4.5,
        newarrival: 1,
        description: "Make a statement with the Azure Crest Accent Chair. Its bold design and comfortable seating make it a focal point in any room. Upholstered in premium fabric with sturdy wooden legs, this chair blends style and functionality seamlessly.",
        images: [
            "Images/WEBSITE PRODUCTS/1/4P.jpg",
            "Images/20x24/FP/17.png",
            "Images/20x24/FP/18.png",
            "Images/20x24/FP/19.png",
            "Images/20x24/FP/20.png"
        ]
    },
    {
        id: 6,
        name: "Tideview Coffee Table",
        category: "Table",
        price: 14800,
        rating: 5,
        newarrival: 2,
        description: "Elevate your living room with the Tideview Coffee Table. Featuring a spacious surface and lower shelf for storage, this table is both practical and stylish. The tide-inspired design evokes a sense of calm and tranquility.",
        images: [
            "Images/WEBSITE PRODUCTS/4/2P.png",
            "Images/20x24/FP/21.png",
            "Images/20x24/FP/22.png",
            "Images/20x24/FP/23.png",
            "Images/20x24/FP/24.png"
        ]
    },
    {
        id: 7,
        name: "Horizon Calm Sofa",
        category: "Seating",
        price: 38500,
        rating: 4,
        newarrival: 3,
        description: "Experience ultimate comfort with the Horizon Calm Sofa. Designed for relaxation, this sofa features deep cushions and supportive seating. The horizon-inspired pattern adds a modern touch to your seating area.",
        images: [
            "Images/WEBSITE PRODUCTS/6/2P.png",
            "Images/20x24/FP/25.png",
            "Images/20x24/FP/26.png",
            "Images/20x24/FP/27.png",
            "Images/20x24/FP/28.png"
        ]
    },
    {
        id: 8,
        name: "Coastal Glow Writing Desk",
        category: "Table",
        price: 16900,
        rating: 4.5,
        newarrival: 4,
        description: "Illuminate your workspace with the Coastal Glow Writing Desk. This desk provides ample surface area for work or study, with drawers for organization. The coastal design brings inspiration and focus to your daily tasks.",
        images: [
            "Images/WEBSITE PRODUCTS/8/2P.png",
            "Images/20x24/FP/29.png",
            "Images/20x24/FP/30.png",
            "Images/20x24/FP/31.png",
            "Images/20x24/FP/32.png"
        ]
    }
];

// Function to get product by ID
function getProductById(id) {
    return products.find(product => product.id == id);
}

// Function to get related products by category
function getRelatedProducts(category, excludeId) {
    return products.filter(product => product.category === category && product.id !== excludeId);
}

// Add to cart function
function addToCart(productId, quantity = 1) {
    const numericId = Number(productId);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => Number(item.id) === numericId);
    if (existingItem) {
        existingItem.quantity += Number(quantity);
    } else {
        cart.push({ id: numericId, quantity: Number(quantity) });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
    if (typeof updateCartBadge === 'function') {
        updateCartBadge();
    }
}

// Get cart items
function getCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart
        .map(item => {
            const product = getProductById(Number(item.id));
            return product ? { ...product, quantity: Number(item.quantity) } : null;
        })
        .filter(item => item !== null);
}

function updateCartPreview() {
    const previewItems = document.getElementById('cart-preview-items');
    const previewEmpty = document.querySelector('.cart-preview-empty');
    if (!previewItems || !previewEmpty) return;

    const cartItems = getCartItems();
    previewItems.innerHTML = '';

    if (cartItems.length === 0) {
        previewEmpty.style.display = 'block';
        return;
    }

    previewEmpty.style.display = 'none';
    cartItems.slice(0, 4).forEach(item => {
        const row = document.createElement('div');
        row.className = 'cart-preview-item';
        row.innerHTML = `
            <img src="${item.images[0]}" alt="${item.name}">
            <div class="cart-preview-item-details">
                <p>${item.name}</p>
                <small>Qty: ${item.quantity}</small>
            </div>
        `;
        previewItems.appendChild(row);
    });
}

function initCartPreview() {
    const cartLink = document.querySelector('a[href="Cart.html"]');
    if (!cartLink) return;
    const existing = cartLink.parentElement.querySelector('.cart-preview-container');
    if (existing) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'cart-preview-container';
    cartLink.parentNode.insertBefore(wrapper, cartLink);
    wrapper.appendChild(cartLink);

    const previewPopup = document.createElement('div');
    previewPopup.id = 'cart-preview';
    previewPopup.className = 'cart-preview-popup';
    previewPopup.innerHTML = `
        <div class="cart-preview-header">Cart preview</div>
        <div id="cart-preview-items" class="cart-preview-items"></div>
        <div class="cart-preview-empty">Your cart is empty</div>
    `;
    wrapper.appendChild(previewPopup);

    wrapper.addEventListener('mouseenter', updateCartPreview);
}

document.addEventListener('DOMContentLoaded', function() {
    initCartPreview();
});