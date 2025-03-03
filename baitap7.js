let input = prompt("Nhập vào số tiền (VD: 1000000):");
let amount = Number(input);

if (isNaN(amount)) {
    console.log("Vui lòng nhập một số hợp lệ!");
} else {
    let currency = amount.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND"
    });

    console.log("Số tiền bạn nhập: " + currency);
}
