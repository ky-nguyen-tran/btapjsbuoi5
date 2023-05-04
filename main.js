// input: nhập điểm 3 môn,chọn khu vực và đối tượng ưu tiên, điểm chuẩn, không có điểm 0 mới đậu
// tổng điểm 3 môn + điểm ưu tiên, so sánh với điểm chuẩn
// output: đậu rớt và tổng điểm đạt đc

function tinhDiem() {
  var khuVuc = document.getElementById("khuVuc").value;
  var diemuutienkhuvuc;
  switch (khuVuc) {
    case "A":
      diemuutienkhuvuc = 2;
      break;
    case "B":
      diemuutienkhuvuc = 1;
      break;
    case "C":
      diemuutienkhuvuc = 0.5;
      break;
    default:
      diemuutienkhuvuc = 0;
  }
  var doiTuong = document.getElementById("doiTuong").value;
  var diemuutiendoituong = Number(doiTuong)
  var diemMot = document.getElementById("diemMot").value;
  var diemHai = document.getElementById("diemHai").value;
  var diemBa = document.getElementById("diemBa").value;
  var diemChuan = document.getElementById("diemChuan").value;
  var tongDiem = Number(diemMot) + Number(diemHai) + Number(diemBa) + diemuutienkhuvuc + diemuutiendoituong;
  if (tongDiem >= diemChuan && (diemMot > 0 || diemHai > 0 || diemBa > 0)){ 
    document.getElementById("ketQua").innerHTML = "Đậu xanh rau má"

  }
  else{
    document.getElementById("ketQua").innerHTML = "Trượt patin"
  }
  console.log(tongDiem)
}
