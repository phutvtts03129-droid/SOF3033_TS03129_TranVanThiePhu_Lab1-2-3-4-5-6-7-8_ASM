function tinhLuong(chucVu, ngayCong) {
    const luongCoBan = 5000000;
    const ngayCongQuyDinh = 24;
    let heSo = 0;
    if (chucVu === "intern") {
        heSo = 1.0;
    } else if (chucVu === "staff") {
        heSo = 1.5;
    } else if (chucVu === "senior") {
        heSo = 2.0;
    } else if (chucVu === "manager") {
        heSo = 3.0;
    } else {
        return "Chức vụ không hợp lệ!";
    }

    let luong = heSo * ngayCong * (luongCoBan / ngayCongQuyDinh);
    return luong;
}
console.log("Lương Intern (24 ngày):", tinhLuong("intern", 24));   // Output: 5000000
console.log("Lương Staff (24 ngày):", tinhLuong("staff", 24));     // Output: 7500000
console.log("Lương Senior (20 ngày):", tinhLuong("senior", 20));   // Output: 8333333.333333334
console.log("Lương Manager (22 ngày):", tinhLuong("manager", 22)); // Output: 13750000