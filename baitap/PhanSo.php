<?php
class PhanSo
{
    protected $tuSo, $mauSo;
    public function __construct($tuSo, $mauSo)
        {
            $this->tuSo = $tuSo;
            $this->mauSo = $mauSo;
        }
    public function Cong(Phanso obj1, Phanso obj2)
    {
        Phanso obj3;
        obj3.tuSo = obj1.tuSo * obj2.mauSo + obj1.mauSo * obj2.tuSo;
        obj3.Mauso = obj1.Mauso * obj2.Mauso;
        return obj3;
    }
    public function Tru(Phanso obj1, Phanso obj2)
    {
        Phanso obj3;
        obj3.tuso = obj1.tuso * obj2.mauso - obj1.mauso * obj2.tuso;
        obj3.mauso = obj1.mauso * obj2.mauso;
        return obj3;
    }
    public function Nhan(Phanso obj1, Phanso obj2)
    {
        Phanso obj3;
        obj3.tuso = obj1.tuso * obj2.tuso;
        obj3.mauso = obj1.mauso * obj2.mauso;
        return obj3;
    }
    public function Chia(Phanso obj1, Phanso obj2)
    {
        Phanso obj3;
        obj3.tuso = obj1.tuso * obj2.mauso;
        obj3.mauso = obj1.mauso * obj2.tuso;
        return obj3;
    }
    $hinhChuNhat = new HinhChuNhat(6, 4);
        echo "TuSo, MauSo:";
        echo "&emsp; TuSo: &emsp", $PhanSo->getTuSo()";
        echo "&emsp; MauSo: &emsp;", $PhanSo->getMauSo(),<br>";
        echo "&emsp; Tong: &emsp;", $Tong -> Tong,<br>";
        echo "&emsp; Tru: &emsp;", $Tru -> Tru,<br>";
        echo "&emsp; Nhan: &emsp;", $Nhan -> Nhan,<br>";
        echo "&emsp; Thuong: &emsp;", $Thuong -> Thuong,<br>";
    }
}
?>