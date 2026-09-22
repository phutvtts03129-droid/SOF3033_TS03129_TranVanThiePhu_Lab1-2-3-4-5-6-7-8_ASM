// Vòng lặp cho các bảng từ 2 đến 9
for (let j = 2; j <= 9; j++) {
    console.log(`--- BẢNG CỬU CHƯƠNG ${j} ---`);
    
    // Vòng lặp nhân từ 1 đến 10
    for (let i = 1; i <= 10; i++) {
        console.log(`${j} x ${i} = ${j * i}`);
    }
    
    console.log(""); // Dòng trống giữa các bảng
}