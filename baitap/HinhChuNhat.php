<?php
class HinhChuNhat extends HinhVuong{
    public function __construct($chieuDai, $chieuRong)
    {
        parent::__construct($chieuDai, $chieuRong);
    }
    public function setCanh($chieuDai, $chieuRong){
        parent::setCanh($chieuDai);
        parent::setCanh($chieuRong);
    }
}
?>