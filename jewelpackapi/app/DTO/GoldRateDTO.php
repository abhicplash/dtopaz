<?php

namespace App\DTO;

class GoldRateDTO
{
    public $id;
    public $karat;
    public $rate;

    public function __construct($karat=null, $rate=null)
    {
        $this->karat = $karat;
        $this->rate = $rate;
    }


}
