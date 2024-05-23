<?php
namespace App\Services;

use App\DTO\GoldRateDTO;
use App\Models\GoldRate;
use App\Services\Contracts\GoldRateService;
use Carbon\Carbon;

class GoldRateServiceImpl implements GoldRateService
{
    public function updateGoldRate(GoldRateDTO $goldRateDTO)
    {
        $conditions = ['karat' => $goldRateDTO->karat];

        $data = ['rate' => $goldRateDTO->rate];

        // Perform the upsert

        GoldRate::where($conditions)->update($data);
    }
}
