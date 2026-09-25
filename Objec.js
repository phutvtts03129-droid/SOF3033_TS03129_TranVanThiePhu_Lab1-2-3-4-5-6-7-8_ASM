const dssv = [
    {
        mssv: "TS0495",
        ten: "Thien Phu",
        monhoc: [
            { ma: "WEB10329", tenmon: "Lập trình Web", diem: 9 },
            { ma: "WEB10330", tenmon: "JavaScript", diem: 8 },
            { ma: "WEB10331", tenmon: "HTML CSS", diem: 9 },
            { ma: "WEB10332", tenmon: "Cơ sở dữ liệu", diem: 8.5 }
        ]
    },
    {
        mssv: "TS0496",
        ten: "Nguyen Van A",
        monhoc: [
            { ma: "WEB10329", tenmon: "Lập trình Web", diem: 8 },
            { ma: "WEB10330", tenmon: "JavaScript", diem: 7 },
            { ma: "WEB10331", tenmon: "HTML CSS", diem: 8.5 },
            { ma: "WEB10332", tenmon: "Cơ sở dữ liệu", diem: 9 }
        ]
    },
    {
        mssv: "TS0497",
        ten: "Tran Minh Tuan",
        monhoc: [
            { ma: "WEB10329", tenmon: "Lập trình Web", diem: 7.5 },
            { ma: "WEB10330", tenmon: "JavaScript", diem: 8 },
            { ma: "WEB10331", tenmon: "HTML CSS", diem: 7 },
            { ma: "WEB10332", tenmon: "Cơ sở dữ liệu", diem: 8 }
        ]
    },
    {
        mssv: "TS0498",
        ten: "Le Hoang Nam",
        monhoc: [
            { ma: "WEB10329", tenmon: "Lập trình Web", diem: 9.5 },
            { ma: "WEB10330", tenmon: "JavaScript", diem: 9 },
            { ma: "WEB10331", tenmon: "HTML CSS", diem: 8.5 },
            { ma: "WEB10332", tenmon: "Cơ sở dữ liệu", diem: 9 }
        ]
    },
    {
        mssv: "TS0499",
        ten: "Pham Ngoc Mai",
        monhoc: [
            { ma: "WEB10329", tenmon: "Lập trình Web", diem: 8.5 },
            { ma: "WEB10330", tenmon: "JavaScript", diem: 9 },
            { ma: "WEB10331", tenmon: "HTML CSS", diem: 9.5 },
            { ma: "WEB10332", tenmon: "Cơ sở dữ liệu", diem: 8 }
        ]
    },
    {
        mssv: "TS0500",
        ten: "Vo Thanh Dat",
        monhoc: [
            { ma: "WEB10329", tenmon: "Lập trình Web", diem: 6.5 },
            { ma: "WEB10330", tenmon: "JavaScript", diem: 7 },
            { ma: "WEB10331", tenmon: "HTML CSS", diem: 7.5 },
            { ma: "WEB10332", tenmon: "Cơ sở dữ liệu", diem: 6 }
        ]
    },
    {
        mssv: "TS0501",
        ten: "Nguyen Thi Lan",
        monhoc: [
            { ma: "WEB10329", tenmon: "Lập trình Web", diem: 9 },
            { ma: "WEB10330", tenmon: "JavaScript", diem: 8.5 },
            { ma: "WEB10331", tenmon: "HTML CSS", diem: 9 },
            { ma: "WEB10332", tenmon: "Cơ sở dữ liệu", diem: 9.5 }
        ]
    },
    {
        mssv: "TS0502",
        ten: "Bui Quoc Bao",
        monhoc: [
            { ma: "WEB10329", tenmon: "Lập trình Web", diem: 7 },
            { ma: "WEB10330", tenmon: "JavaScript", diem: 6.5 },
            { ma: "WEB10331", tenmon: "HTML CSS", diem: 8 },
            { ma: "WEB10332", tenmon: "Cơ sở dữ liệu", diem: 7.5 }
        ]
    },
    {
        mssv: "TS0503",
        ten: "Do Minh Khang",
        monhoc: [
            { ma: "WEB10329", tenmon: "Lập trình Web", diem: 8 },
            { ma: "WEB10330", tenmon: "JavaScript", diem: 8.5 },
            { ma: "WEB10331", tenmon: "HTML CSS", diem: 7.5 },
            { ma: "WEB10332", tenmon: "Cơ sở dữ liệu", diem: 8 }
        ]
    },
    {
        mssv: "TS0504",
        ten: "Huynh Gia Han",
        monhoc: [
            { ma: "WEB10329", tenmon: "Lập trình Web", diem: 9.5 },
            { ma: "WEB10330", tenmon: "JavaScript", diem: 9.5 },
            { ma: "WEB10331", tenmon: "HTML CSS", diem: 9 },
            { ma: "WEB10332", tenmon: "Cơ sở dữ liệu", diem: 10 }
        ]
    }
];

let html = "";
html += "<table>";
html += "<tr>";
html += "<th>MSSV</th>";
html += "<th>Họ tên</th>";

for (let j = 0; j < dssv[0].monhoc.length; j++) {
    html += "<th>" + dssv[0].monhoc[j].tenmon + "</th>";
}

html += "</tr>";

for (let i = 0; i < dssv.length; i++) {
    html += "<tr>";

    html += "<td>" + dssv[i].mssv + "</td>";
    html += "<td>" + dssv[i].ten + "</td>";

    for (let j = 0; j < dssv[i].monhoc.length; j++) {
        html += "<td class='diem'>";
        html += dssv[i].monhoc[j].diem;
        html += "</td>";
    }
    html += "</tr>";
}

html += "</table>";

document.getElementById("container").innerHTML = html;