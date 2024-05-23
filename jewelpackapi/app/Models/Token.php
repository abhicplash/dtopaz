<?php
namespace App\Models;
use App\Models\BaseModel;

class Token extends BaseModel
{
    protected $fillable = ['user_id', 'token', 'expires_at'];
}