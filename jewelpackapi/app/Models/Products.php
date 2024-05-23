<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Concerns\HasTimestamps;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{

    use HasTimestamps;
    protected $primaryKey = 'product_id';
    protected $table = 'products';
    protected $fillable = ['name', 'description'];


}
