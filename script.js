window.onload = function() {
    let all_product;
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            all_product = data;
            showProducts(all_product);
            console.log(all_product[0]);
        })


    fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>{
            showAllCategory(json)
            console.log(json)

        })
}

// set catagories

const showAllCategory = (categories) =>{
    let all_categories = categories.map((c, index) =>{
        return `
            <button id="${index}" onclick="singleCategory('${c}')" class="text-capitalize list-group-item list-group-item-action">${c}</button>
            `
        }
        )
    document.getElementById('all_categories').innerHTML = all_categories.join(' ')
}

const singleCategory = (cat) =>
{
    fetch(`https://fakestoreapi.com/products/category/${cat}`)
            .then(res=>res.json())
            .then(json=>{
                showProducts(json)
            })
}


// show all products
const showProducts = (products)=>{
    let all_products = products.map(product=>{
                return `<a href="./singleproduct.html?id=${product.id}">
                <div class="col">
                    <div class="card h-100">
                        <img src="${product.image}"  style='p-4 height:250px; margin:auto; aspect-ratio:1;' class=" card-img-top" alt="...">
                        <div class="card-body">
                        <p class="card-text justify-content-between d-flex"><span> Price: $${product.price}</span> <span>rating: ${product.rating.rate} </span></p>
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description.slice(0, 100) +'......'}</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-body-secondary">Category ${product.category}</small>
                        </div>
                    </div>
                </div>
                </a>`
    })

    document.getElementById('productsContainer').innerHTML = all_products.join(' ')

    
}

const showSingleProduct = () => {
    fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json())
    .then(json=>console.log(json))
}






