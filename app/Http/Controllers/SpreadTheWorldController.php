<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SpreadTheWorld;

class SpreadTheWorldController extends Controller
{
    public function getVideos()
    {
        $data = SpreadTheWorld::all();
        return $data;
    }
}
