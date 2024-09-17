let productList = [
    {
        img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/119/564/products/ao-khoac-nu-han-quoc-2819.jpg",
        name: "Quần jean nữ",
        newPrice: "269.000 vnd",
        oldPrice: "370.000 vnd",
        code: "KO0002"
    },
    {
        img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/119/564/products/ao-khoac-nu-han-quoc-2819.jpg",
        name: "Áo khoác nữ",
        newPrice: "249.000 vnd",
        oldPrice: "369.000 vnd",
        code: "VN0002"
    },
    {
        img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/119/564/products/ao-khoac-nu-han-quoc-2819.jpg",
        name: "Áo phông nữ",
        newPrice: "159.000 vnd",
        oldPrice: "390.000 vnd",
        code: "US0002"
    }
];

function sell() {
    var enteredName = document.getElementById('name').value;
    var enteredCode = document.getElementById('pcode').value;

    // Kiểm tra nếu nhập thiếu thông tin
    if (!enteredName || !enteredCode) {
        alert("Vui lòng nhập tên sản phẩm và mã sản phẩm");
        return;
    }

    // Tìm sản phẩm khớp với tên và mã sản phẩm
    let foundProduct = productList.find(product => product.name === enteredName && product.code === enteredCode);

    // Nếu tìm thấy sản phẩm
    if (foundProduct) {
        // Cập nhật thông tin trong thẻ card
        let cardHTML = `
            <div class="card" style="width:300px">
                <img class="card-img-top" src="${foundProduct.img}" alt="Card image" style="width:100%">
                <div class="card-body">
                    <h4 class="card-title">${foundProduct.name} - <span>${foundProduct.code}</span></h4>
                    <p class="card-text">${foundProduct.newPrice} <del>${foundProduct.oldPrice}</del></p>
                    <a href="#" class="btn btn-danger">Đặt mua</a>
                </div>
            </div>
        `;

        // Hiển thị sản phẩm trong div mt-3
        document.querySelector('.small-container').innerHTML = cardHTML;
    } else {
        alert("Không tìm thấy sản phẩm phù hợp");
    }
}