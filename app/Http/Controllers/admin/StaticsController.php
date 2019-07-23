<?php

namespace App\Http\Controllers\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\StaticData;

class StaticsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    private $url = "/control-panel/statics";
    public function index()
    {
        $page_data = StaticData::all();
        $data = array(
            "page_data" => $page_data
        );
        return view("admin.statics.index", compact('data'));
    }

    public function store(Request $request)
    {
        $id = $request->id;
        $data = $id != null ? StaticData::find($id) : new StaticData();
        if(null != $request->home_video) {
            $path = Storage::putFile('public', $request->file('home_video'), 'public');
            $data->home_video = !empty($path) ? $path = explode("/", $path)[1] : "";
        }
        $data->save();
        return redirect($this->url);
    }

}
