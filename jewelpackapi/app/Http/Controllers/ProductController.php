<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller;

class ProductController extends Controller
{

    public function __construct()
    {
        //$this->middleware('auth');
    }
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 12);
        $query = Products::query();
        if ($request->has('product_code')) {
            $searchTerm = '%' . $request->input('product_code') . '%';
            $query->where('product_code', 'LIKE', $searchTerm);
        }
        if ($request->has('article')) {
            $searchTerm = $request->input('article');
            $query->where('article', 'LIKE', $searchTerm);
        }
        if ($request->has('karat')) {
            $searchTerm = $request->input('karat');
            $query->where('karat', '=', $searchTerm);
        }
        if ($request->has('stone')) {
            $searchTerm = $request->input('stone');
            $query->whereRaw("JSON_SEARCH(LOWER(stone_data), 'one', LOWER(?)) IS NOT NULL", [$searchTerm]);
        }

        $results = $query->paginate($perPage);

        return response()->json($results);
    }

    public function show($id)
    {
        return Products::findOrFail($id);
    }
}
