const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log('Received ID:', id);
fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(json=>setProduct(json))

const setProduct = (product)=>{
let p = `<div class="row">
            <!-- Product Image -->
            <div class="col-md-6" id="${id}">
            <img src="${product.image}" style='max-height:400px; '  class="img-fluid product-image" alt="Product Image">
            </div>

            <!-- Product Details -->
            <div class="col-md-6">
            <h2 class="mb-3">${product.title}</h2>
            <p class="lead">${product.description}</p>
            <p class="text-muted">Price: $${product.price}</p>
            <p class="text-muted">Category: ${product.category}</p>
            <button class="btn btn-primary">Add to Cart</button>
            </div>
            </div>`
document.getElementById('productContainer').innerHTML = p
}