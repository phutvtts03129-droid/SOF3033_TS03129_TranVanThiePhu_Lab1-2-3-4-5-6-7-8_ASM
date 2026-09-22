
function isEven(n){
    return n % 2 === 0;
}

// Chạy thử kiểm tra kết quả:
console.log(isEven(4));  // Kết quả: true  (4 chia hết cho 2)
console.log(isEven(7));  // Kết quả: false (7 là số lẻ)
console.log(isEven(0));  // Kết quả: true  (0 là số chẵn)
console.log(isEven(-2)); // Kết quả: true  (-2 chia hết cho 2)