   function showme() {
      let getshowme = `
        <div class="info-card">
          <h3 style="color: #002e62; margin-bottom: 8px;">Xin chào!</h3>
          <p>Đây là thông tin được hiển thị bằng hàm JavaScript <strong>showme()</strong>.</p>
          <p>Bạn có thể chèn thêm hình ảnh, văn bản hoặc bất kỳ thẻ HTML nào vào đây!</p>
        </div>
      `;
      document.getElementById("showme").innerHTML = getshowme;
    }

    function showme2() {
      let getshowme = `
        <div class="info-card-2">
      <h3>🚀 Dự Án & Kỹ Năng Nổi Bật</h3>
      <p>Dưới đây là danh sách các kỹ năng lập trình web cơ bản bạn đang thực hành:</p>
      
      <ul style="margin: 12px 0 16px 20px; line-height: 1.6;">
        <li><strong>HTML5:</strong> Xây dựng cấu trúc trang web.</li>
        <li><strong>CSS3:</strong> Trang trí giao diện, màu sắc, hiệu ứng mượt mà.</li>
        <li><strong>JavaScript:</strong> Xử lý sự kiện click nút bấm, thay đổi nội dung động.</li>
      </ul>

      <div style="text-align: center; margin-top: 15px;">
        <img src="https://picsum.photos/400/180" alt="Hình minh họa" style="width: 100%; max-width: 400px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
      </div>
    </div>
      `;
      document.getElementById("showme").innerHTML = getshowme;
    }

     function showme3() {
      let getshowme = `
        <div class="info-card-2">
      <h3>💻 Chuyên Ngành: Lập Trình Web (Front-End)</h3>
      <p>Ngành học tập trung vào việc thiết kế và phát triển giao diện người dùng hiện đại, tối ưu trải nghiệm trên mọi thiết bị.</p>
      
      <div style="background: #f0f4f8; padding: 12px; border-radius: 6px; margin: 12px 0;">
        <strong style="color: #002e62;">📚 Các môn học trọng tâm:</strong>
        <ul style="margin: 8px 0 0 20px; line-height: 1.6;">
          <li>Xây dựng trang Web với HTML5 & CSS3</li>
          <li>Thực hành JavaScript & Thiết kế Responsive (Mobile First)</li>
          <li>Dự án Mẫu & Dự án Tốt nghiệp Thực tế</li>
        </ul>
      </div>

      <div style="text-align: center; margin-top: 15px;">
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" alt="Lập trình Web" style="width: 100%; max-width: 450px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.12);">
      </div>
    </div>
      `;
      document.getElementById("showme").innerHTML = getshowme;
    }
    