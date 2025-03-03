let date1Input = prompt("Nhập ngày thứ nhất (YYYY-MM-DD):");
let date2Input = prompt("Nhập ngày thứ hai (YYYY-MM-DD):");

let datePattern = /^\d{4}-\d{2}-\d{2}$/;
if (!datePattern.test(date1Input) || !datePattern.test(date2Input)) {
    console.log("Định dạng ngày không hợp lệ. Vui lòng nhập theo định dạng YYYY-MM-DD.");
} else {
    let date1 = new Date(date1Input);
    let date2 = new Date(date2Input);

    let timeDiff = Math.abs(date2 - date1);

    let dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    console.log(`Độ lệch giữa hai ngày là ${dayDiff} ngày`);
}
