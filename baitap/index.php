<?php
require_once 'HinhVuong.php';
require_once 'HinhChuNhat.php';
$hinhChuNhat = new HinhChuNhat(6, 4);
        echo "Chieu Dai, Chieu Rong:";
        echo "&emsp; chieuDai: &emsp", $hinhChuNhat->getChieuDai()";
        echo "&emsp; chieuRong: &emsp;", $hinhChuNhat->getChieuRong(),<br>";
        echo "&emsp; chuVi: &emsp;", $chuVi -> tinhChuVi,<br>";
        echo "&emsp; dienTich: &emsp;", $chuVi -> tinhDienTich,<br>";
}
$hinhVuong = HinhVuong();
$hinhVuong->setChieuDdai(9)
        echo "Canh hinh vuong: <br">;
        echo "&emsp;&emsp; Canh: &emsp;&emsp;". $hinhVuong->getCanh(),<br>";
        echo "&emsp;&emsp; ChuVi: &emsp;&emsp;". $chuVi->tinhChuVi,<br>";
        echo "&emsp;&emsp; DienTich: &emsp;&emsp;". $dienTich->tinhDienTich,<br>";
?>