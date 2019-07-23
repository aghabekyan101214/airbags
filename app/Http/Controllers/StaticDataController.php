<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\StaticData;

class StaticDataController extends Controller
{
    public function index()
    {
        $data = StaticData::where("id", ">", 0)->get()->first();
        return $data;
    }
}
