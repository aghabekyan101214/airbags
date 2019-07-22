<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    public function urls()
    {
        return $this->hasMany('App\VehicleUrl', 'vehicle_id', 'id');
    }

    public function makes()
    {
        return $this->hasMany('App\VehicleMake', 'vehicle_id', 'id');
    }
}
