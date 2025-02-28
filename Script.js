fetch('products.json')
    .then(response => response.json())
    .then(products => {
        let productList = document.getElementById('product-list');
        products.forEach(product => {
            let productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>Price: ₹${product.price}</p>
            `;
            productList.appendChild(productDiv);
        });
    })
    .catch(error => console.log("Error loading products: " + error));
