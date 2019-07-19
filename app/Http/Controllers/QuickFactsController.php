<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\QuickFact;

class QuickFactsController extends Controller
{
    public function getFacts()
    {
        $data = QuickFact::all();
        return $data;
    }
}
