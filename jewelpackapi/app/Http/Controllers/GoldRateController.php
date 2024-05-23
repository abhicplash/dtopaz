<?php

namespace App\Http\Controllers;
use App\DTO\GoldRateDTO;
use Illuminate\Http\Request;
use App\Services\Contracts\GoldRateService;

class GoldRateController extends Controller
{
    protected $goldRateService;
    public function __construct(GoldRateService $goldRateService)
    {
        $this->middleware('verify_token');
        $this->goldRateService = $goldRateService;        
    }
   

    public function updateGoldRate(Request $request, GoldRateService $goldRateService){

        $this->validate($request, [
            'goldRates' => 'required|array',
            'goldRates.*.karat' => 'required|string',
            'goldRates.*.rate' => 'required|numeric'
        ]);

        $goldRates = $request->input('goldRates'); 

        foreach ($goldRates as $goldRate) {

            $goldRateDTO = new GoldRateDTO(
                $goldRate['karat'],
                $goldRate['rate']
            );

            $goldRateService->updateGoldRate($goldRateDTO);
        }
        return response()->json(['message' => 'Gold rate updates successfully']);

    }
}
