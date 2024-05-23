<?php

namespace App\Models;

class GoldRate extends BaseModel
{

    protected $table = 'gold_rate';
    protected $guarded = ['id'];
    protected $fillable = ['karat', 'rate'];


}
