const joblist = [
    {
        id: "1",
        macv: "00011",
        tencv: "Thực hiện design navigation",
        status: 1,
        who: "HOTB",
        hinh: "assets/images/sanpham1.png"
    },
    {
        id: "2", 
        macv: "00012",
        tencv: "Thiết kế giao diện trang chủ",
        status: 0,
        who: "Nguyen Van A",
        hinh: "assets/images/sanpham1.png"
    },
    {
        id: "3",
        macv: "00013",
        tencv: "Kiểm tra chức năng đăng nhập",
        status: 1,
        who: "Tran Van B",
        hinh: "assets/images/sanpham1.png"
    },
    {
        id: "4",
        macv: "00014",
        tencv: "Tối ưu hóa hiệu năng ứng dụng",
        status: 0,
        who: "Le Thi C",
        hinh: "assets/images/sanpham1.png"
    },
    {
        id: "5",
        macv: "00015",
        tencv: "Xây dựng API cho danh mục sản phẩm",
        status: 1,
        who: "Pham Van D",
        hinh: "assets/images/sanpham1.png"
    },
    {
        id: "6",
        macv: "00016",
        tencv: "Viết tài liệu hướng dẫn sử dụng",
        status: 0,
        who: "Hoang Thi E",
        hinh: "assets/images/sanpham1.png"
    },
    {
        id: "7",
        macv: "00017",
        tencv: "Tích hợp cổng thanh toán VNPay",
        status: 0,
        who: "Nguyen Van F",
        hinh: "assets/images/sanpham1.png"
    },
    {
        id: "8",
        macv: "00018",
        tencv: "Cấu hình Server và CI/CD Pipeline",
        status: 1,
        who: "Dang Van G",
        hinh: "assets/images/sanpham1.png"
    },
    {
        id: "9",
        macv: "00019",
        tencv: "Thiết kế UI/UX trang giỏ hàng",
        status: 1,
        who: "HOTB",
        hinh: "assets/images/sanpham1.png"
    },
    {
        id: "10",
        macv: "00020",
        tencv: "Kiểm thử tải toàn hệ thống (Load Testing)",
        status: 0,
        who: "Tran Van B",
        hinh: "assets/images/sanpham1.png"
    },
    {
        id: "11",
        macv: "00021",
        tencv: "Xử lý thông báo đẩy (Push Notification)",
        status: 0,
        who: "Nguyen Van A",
        hinh: "assets/images/sanpham1.png"
    },
    {
        id: "12",
        macv: "00022",
        tencv: "Bảo mật và mã hóa dữ liệu người dùng",
        status: 1,
        who: "Le Thi C",
        hinh: "assets/images/sanpham1.png"
    },
    {
        id: "13",
        macv: "00023",
        tencv: "Nâng cấp phiên bản thư viện React",
        status: 1,
        who: "Pham Van D",
        hinh: "assets/images/sanpham1.png"
    },
    {
        id: "14",
        macv: "00024",
        tencv: "Sửa lỗi hiển thị trên thiết bị iOS",
        status: 0,
        who: "Hoang Thi E",
        hinh: "assets/images/sanpham1.png"
    },
    {
        id: "15",
        macv: "00025",
        tencv: "Họp tổng kết sprint và lên kế hoạch mới",
        status: 1,
        who: "HOTB",
        hinh: "assets/images/sanpham1.png"
    }
];

// Hiển thị danh sách công việc
function render() {
    let html = "";

    html += "<table>";
    html += "<tr>";
    html += "<th>ID</th>";
    html += "<th>Mã CV</th>";
    html += "<th>Tên công việc</th>";
    html += "<th>Trạng thái</th>";
    html += "<th>Người thực hiện</th>";
    html += "<th>Hình ảnh</th>";
    html += "<th>Thao tác</th>";
    html += "</tr>";

    for (let i = 0; i < joblist.length; i++) {
        html += "<tr>";

        html += "<td>" + joblist[i].id + "</td>";
        html += "<td>" + joblist[i].macv + "</td>";
        html += "<td>" + joblist[i].tencv + "</td>";
        html += "<td>" + joblist[i].status + "</td>";
        html += "<td>" + joblist[i].who + "</td>";

        html += "<td>";
        html += "<img class='task-img' src='" +
                joblist[i].hinh + "'>";
        html += "</td>";

        html += "<td>";
        html += "<button class='edit' onclick='editJob(" + i + ")'>Sửa</button>";
        html += "<button class='delete' onclick='deleteJob(" + i + ")'>Xóa</button>";
        html += "</td>";

        html += "</tr>";
    }

    html += "</table>";

    document.getElementById("container").innerHTML = html;
}

// Thêm công việc
function addJob() {
    let macv = document.getElementById("macv").value;
    let tencv = document.getElementById("tencv").value;
    let who = document.getElementById("who").value;

    if (macv == "" || tencv == "" || who == "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    let job = {
        id: String(joblist.length + 1),
        macv: macv,
        tencv: tencv,
        status: 0,
        who: who,
        hinh: "assets/images/sanpham1.png"
    };


    joblist.push(job);

    // Xóa nội dung đã nhập
    document.getElementById("macv").value = "";
    document.getElementById("tencv").value = "";
    document.getElementById("who").value = "";

    render();
}

// Sửa công việc
function editJob(index) {
    let job = joblist[index];
    let tencv = prompt("Nhập tên công việc mới:", job.tencv);
    if (tencv == null || tencv.trim() == "") {
        return;
    }

    let who = prompt("Nhập người thực hiện:", job.who);
    if (who == null || who.trim() == "") {
        return;
    }
    let status = prompt("Nhập trạng thái (0 hoặc 1):", job.status);
    if (status == null) {
        return;
    }
    if (status != "0" && status != "1") {
        alert("Trạng thái chỉ được nhập 0 hoặc 1!");
        return;
    }
    job.tencv = tencv;
    job.who = who;
    job.status = Number(status);
    render();
}

// Xóa công việc
function deleteJob(index) {
    if (confirm("Bạn có chắc muốn xóa công việc này không?")) {
        // Xóa 1 phần tử tại vị trí index
        joblist.splice(index, 1);

        render();
    }
}

// Hiển thị danh sách khi mở trang
render();