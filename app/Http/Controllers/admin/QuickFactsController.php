<?php

namespace App\Http\Controllers\admin;

use App\SpreadTheWorld;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;

class QuickFactsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    private $url = "/control-panel/quick-facts";
    public function index()
    {
        $page_data = SpreadTheWorld::all();
        $data = array(
            "page_data" => $page_data
        );
        return view("admin.spread.index", compact('data'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view("admin.spread.create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = new SpreadTheWorld();
        $path = Storage::putFile('public', $request->file, 'public');
        $data->video = !empty($path) ? $path = explode("/", $path)[1] : "";
        $data->save();
        return redirect($this->url);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\odel  $odel
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\odel  $odel
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $page_data = SpreadTheWorld::findOrFail($id);
        $data = array(
            "page_data" => $page_data
        );
        return view("admin.spread.edit", compact('data'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\odel  $odel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if(!empty($request->file)) {
            $data = SpreadTheWorld::findOrFail($id);
            $path = Storage::putFile('public', $request->file, 'public');
            $data->video = !empty($path) ? $path = explode("/", $path)[1] : "";
            $data->save();
        }
        return redirect($this->url);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\odel  $odel
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        SpreadTheWorld::findOrFail($id)->delete();
        return redirect($this->url);
    }
}
