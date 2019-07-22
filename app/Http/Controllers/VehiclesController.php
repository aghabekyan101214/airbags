<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Vehicle;

class VehiclesController extends Controller
{
    public function index(Request $r)
    {
        $data = Vehicle::with(['urls', "makes"])->get()->toArray();
        return $data;
    }
}
