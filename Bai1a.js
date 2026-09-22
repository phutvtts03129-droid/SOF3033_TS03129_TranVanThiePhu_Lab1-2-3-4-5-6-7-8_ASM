// 1. Khai báo nội dung cho các tab
let content1 = `
    <div class="card">
        <div class="section-title">
            <div class="title-line"></div>
            <div>
                <h2>Hồ Sơ Sinh Viên</h2>
                <p>Thông tin cá nhân và định hướng phát triển</p>
            </div>
        </div>
        <div class="profile-grid">
            <div class="profile-img-box">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85" alt="Ảnh sinh viên">
                <div class="profile-badge">🎓 Sinh viên FPT Polytechnic</div>
            </div>
            <div class="profile-details">
                <h3>Võ Thiên Phúc</h3>
                <ul class="info-list">
                    <li><strong>Mã sinh viên:</strong> PK03456</li>
                    <li><strong>Trạng thái:</strong> Đang học tập</li>
                    <li><strong>Chuyên ngành:</strong> Công nghệ thông tin</li>
                    <li><strong>Định hướng:</strong> Lập trình Web (Front-end & Back-end)</li>
                    <li><strong>Kỹ năng:</strong> HTML5, CSS3, JavaScript, Java, SQL</li>
                </ul>
                <p>Tôi là một sinh viên yêu thích công nghệ, luôn đam mê tìm hiểu các giải pháp lập trình mới và thiết kế giao diện tối ưu cho người dùng.</p>
            </div>
        </div>
    </div>
`;

let content2 = `
    <div class="card">
        <div class="section-title">
            <div class="title-line"></div>
            <div>
                <h2>Chuyên Ngành Đào Tạo</h2>
                <p>Các chương trình đào tạo trọng tâm chất lượng cao</p>
            </div>
        </div>
        <div class="major-grid">
            <article class="major-card">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=85" alt="Lập trình Web">
                <div class="major-body">
                    <span class="major-tag">Chuyên ngành 01</span>
                    <h3>Lập Trình Web</h3>
                    <p>Phát triển website toàn diện từ giao diện Front-end chuyên nghiệp đến hệ thống Back-end mạnh mẽ.</p>
                </div>
            </article>
            <article class="major-card">
                <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=700&q=85" alt="Thiết kế đồ họa">
                <div class="major-body">
                    <span class="major-tag">Chuyên ngành 02</span>
                    <h3>Thiết Kế Đồ Họa</h3>
                    <p>Sáng tạo thương hiệu, nhận diện hình ảnh, thiết kế giao diện UI/UX hiện đại và sản phẩm truyền thông.</p>
                </div>
            </article>
            <article class="major-card">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=85" alt="Digital Marketing">
                <div class="major-body">
                    <span class="major-tag">Chuyên ngành 03</span>
                    <h3>Digital Marketing</h3>
                    <p>Xây dựng chiến lược tiếp thị số, SEO, truyền thông mạng xã hội và tối ưu hóa hiệu quả kinh doanh.</p>
                </div>
            </article>
        </div>
    </div>
`;

let content3 = `
    <div class="card">
        <div class="section-title">
            <div class="title-line"></div>
            <div>
                <h2>Lộ Trình Đào Tạo</h2>
                <p>Hành trình 7 học kỳ rèn luyện thực chiến</p>
            </div>
        </div>
        <img class="process-banner" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85" alt="Sinh viên học tập">
        <div class="timeline">
            <div class="step-card">
                <div class="step-num">01</div>
                <h3>Nền Tảng</h3>
                <p>Trang bị kiến thức cơ sở ngành, kỹ năng mềm và phương pháp tư duy lập trình chuyên nghiệp.</p>
            </div>
            <div class="step-card">
                <div class="step-num">02</div>
                <h3>Thực Chiến</h3>
                <p>Xây dựng dự án thực tế, làm việc nhóm và trải nghiệm quy trình phát triển sản phẩm doanh nghiệp.</p>
            </div>
            <div class="step-card">
                <div class="step-num">03</div>
                <h3>Tốt Nghiệp</h3>
                <p>Thực tập tại doanh nghiệp, hoàn thành đồ án tốt nghiệp và sẵn sàng tham gia thị trường lao động.</p>
            </div>
        </div>
    </div>
`;

// 2. Các hàm hiển thị nội dung vào thẻ mong muốn (ví dụ: content-1, content-2, content-3)
function showme1() {
    document.getElementById("content-1").innerHTML = content1;
}

function showme2() {
    document.getElementById("content-2").innerHTML = content2;
}

function showme3() {
    document.getElementById("content-3").innerHTML = content3;
}


