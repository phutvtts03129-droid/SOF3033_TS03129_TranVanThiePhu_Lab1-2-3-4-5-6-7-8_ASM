function tinhTienDien(kw) {
    let Tong = 0;

    if (kw <= 50) {
       
        Tong = kw * 1800;
    } else if (kw <= 100) {
        
        Tong = (50 * 1800) + ((kw - 50) * 2300);
    } else {
       
        Tong = (50 * 1800) + (50 * 2300) + ((kw - 100) * 3000);
    }

    return Tong;
}

// Chạy thử kiểm tra kết quả:
console.log(tinhTienDien(45));  // Output: 81000
console.log(tinhTienDien(86));  // Output: 172800
console.log(tinhTienDien(150)); // Output: 355000