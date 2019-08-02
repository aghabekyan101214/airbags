<?php

namespace App\Http\Controllers\admin;

use App\QuickFact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;

class QuickFactsController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\Response
     */
    private $url = "/control-panel/quick-facts";

    public function index()
    {
        $page_data = QuickFact::all();
        $data = array(
            "page_data" => $page_data
        );
        return view("admin.facts.index", compact('data'));
    }

    /**
     * Show the form for creating a new resource.
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view("admin.facts.create");
    }

    /**
     * Store a newly created resource in storage.
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = new QuickFact();
        $data->url = $request->url;
        $data->text_en = $request->text_en;
        $data->text_es = $request->text_es;
        $data->save();
        return redirect($this->url);
    }

    /**
     * Display the specified resource.
     * @param \App\odel $odel
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     * @param \App\odel $odel
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $page_data = QuickFact::findOrFail($id);
        $data = array(
            "page_data" => $page_data
        );
        return view("admin.facts.edit", compact('data'));
    }

    /**
     * Update the specified resource in storage.
     * @param \Illuminate\Http\Request $request
     * @param \App\odel                $odel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = QuickFact::findOrFail($id);
        $data->url = $request->url;
        $data->text_en = $request->text_en;
        $data->text_es = $request->text_es;
        $data->save();

        return redirect($this->url);
    }

    /**
     * Remove the specified resource from storage.
     * @param \App\odel $odel
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        QuickFact::findOrFail($id)->delete();
        return redirect($this->url);
    }
}
