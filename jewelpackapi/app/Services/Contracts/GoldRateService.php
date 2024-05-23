<?php

namespace App\Services\Contracts;
use App\DTO\GoldRateDTO;

interface GoldRateService
{
    public function updateGoldRate(GoldRateDTO $goldRateDTO);
}
