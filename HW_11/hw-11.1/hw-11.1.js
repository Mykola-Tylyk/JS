fetch('https://dummyjson.com/carts')
    .then((response) => response.json())
    .then((infoCarts) => {
        console.log(infoCarts.carts)

        for (const infoCart of infoCarts.carts) {
            let div = document.createElement('div');
            div.style.margin = '10px';
            div.style.padding = '10px';
            div.style.border = '1px solid #ccc';
            div.style.borderRadius = '15px';

            let p = document.createElement('p');
            p.innerText = `discountedTotal: ${infoCart.discountedTotal}
                            id: ${infoCart.id}
                            total: ${infoCart.total}
                            totalProducts: ${infoCart.totalProducts}
                            totalQuantity: ${infoCart.totalQuantity}
                            userId: ${infoCart.userId}
                            `
            let span = document.createElement('span');
            span.innerText = `Products:`;
            div.appendChild(p);
            div.appendChild(span);
            document.body.appendChild(div);

            for (const infoProducts of infoCart.products) {
                let divProducts = document.createElement('div');
                divProducts.style.margin = '10px';
                divProducts.style.padding = '10px';
                divProducts.style.border = '1px solid #ccc';
                divProducts.style.borderRadius = '15px';

                let p1 = document.createElement('p');
                p1.innerText = `discountPercentage: ${infoProducts.discountPercentage}
                                discountedTotal: ${infoProducts.discountedTotal}
                                id: ${infoProducts.id}
                                price: ${infoProducts.price}
                                quantity: ${infoProducts.quantity}
                                title: ${infoProducts.title}
                                total: ${infoProducts.total}
                                 `
                let img = document.createElement('img');
                img.src = infoProducts.thumbnail;
                divProducts.appendChild(img);

                divProducts.appendChild(p1);
                div.appendChild(divProducts);
            }
        }
    });





















