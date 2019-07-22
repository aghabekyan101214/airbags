<?php

namespace App\Http\Controllers\admin;

use App\Vehicle;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use App\VehicleMake;
use App\VehicleUrl;

class VehiclesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    private $url = "/control-panel/vehicles";
    public function index()
    {
        $page_data = Vehicle::with(['urls', 'makes'])->get();
        $data = array(
            "page_data" => $page_data
        );
        return view("admin.vehicles.index", compact('data'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view("admin.vehicles.create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = new Vehicle();
        $path = Storage::putFile('public', $request->img, 'public');
        $data->img = !empty($path) ? $path = explode("/", $path)[1] : "";
        $data->name = $request->name;
        $data->phone = $request->phone;
        $data->text = $request->text;
        DB::beginTransaction();
        $data->save();

        foreach ($request->url as $u) {
            $url = new VehicleUrl();
            $url->url = $u;
            $url->vehicle_id = $data->id;
            $url->save();
        }
        foreach ($request->make as $m) {
            $make = new VehicleMake();
            $make->make = $m;
            $make->vehicle_id = $data->id;
            $make->save();
        }
        DB::commit();

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
        $page_data = Vehicle::with(['urls', 'makes'])->findOrFail($id);
        $data = array(
            "page_data" => $page_data
        );
        return view("admin.vehicles.edit", compact('data'));
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
        $data = Vehicle::findOrFail($id);
        if(null != $request->img) {
            $path = Storage::putFile('public', $request->img, 'public');
            $data->img = !empty($path) ? $path = explode("/", $path)[1] : "";
        }
        $data->name = $request->name;
        $data->phone = $request->phone;
        $data->text = $request->text;
        DB::beginTransaction();
        $data->save();
        VehicleUrl::where(array("vehicle_id" => $id))->delete();
        foreach ($request->url as $u) {
            $url = new VehicleUrl();
            $url->url = $u;
            $url->vehicle_id = $id;
            $url->save();
        }
        VehicleMake::where(array("vehicle_id" => $id))->delete();
        foreach ($request->make as $m) {
            $make = new VehicleMake();
            $make->make = $m;
            $make->vehicle_id = $id;
            $make->save();
        }
        DB::commit();

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
        Vehicle::findOrFail($id)->delete();
        return redirect($this->url);
    }

}
