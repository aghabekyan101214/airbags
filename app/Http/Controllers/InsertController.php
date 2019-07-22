<?php
//
//namespace App\Http\Controllers;
//
//use Illuminate\Http\Request;
//use App\VehicleMake;
//use App\VehicleUrl;
//use App\Vehicle;
//use Illuminate\Support\Facades\DB;
//use Illuminate\Support\Facades\Storage;
//
//class InsertController extends Controller
//{
//    public function insert(Request $r)
//    {
//        foreach ($r->data as $d) {
//            $data = new Vehicle();
//            $data->img = $d['img'];
//            $data->name = $d['name'];
//            $data->phone = $d['phone'];
//            $data->text = $d['text'];
//            DB::beginTransaction();
//            $data->save();
//
//            foreach ($d['url'] as $u) {
//                $url = new VehicleUrl();
//                $url->url = $u;
//                $url->vehicle_id = $data->id;
//                $url->save();
//            }
//            foreach ($d['makes'] as $m) {
//                $make = new VehicleMake();
//                $make->make = $m;
//                $make->vehicle_id = $data->id;
//                $make->save();
//            }
//            DB::commit();
//        }
//    }
//}
