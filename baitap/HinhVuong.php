<?php
class HinhVuong{
        public function __construct($canh)
        {
            $this->canh = $canh;
        }
        public function setCanh() {
            $this->canh;
        }
        public function getCanh() : int{
            return $this->canh;
        }
        public function tinhChuVi() {
            return $this->canh + $this->canh + $this->canh + $this->canh;
        }
        public function tinhDienTich() {
            return $this->canh * $this->canh;
        }
    }   
?>
