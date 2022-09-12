// window.alert("Chào Mừng Bạn Đến Với Website SyKhangAnime của chúng tôi ! Chúc Bạn Mua Phim Vui Vẻ.");

// function muangay() {
//     confirm("Bạn có chắc muốn mua ?");
// }

function dangky() {
    let text = "Bạn Có Chắc Muốn Đăng Ký ?";
    var taikhoan = document.getElementById("tk_DangKy").value;
    if (confirm(text) == true) {
     text = document.getElementById("thongbao_dangky").innerHTML="Bạn đã đăng ký thành công tài khoản: "+ taikhoan.toString();
    } else {
      text = "Vui lòng đăng ký lại !";
    }
    document.getElementById("thongbao_dangky").innerHTML = text;
}

function anxemthem() {
  document.getElementById("anxemthem_id").style.display="none";
}

function anxemthem1() {
  document.getElementById("anxemthem_id1").style.display="none";
}

