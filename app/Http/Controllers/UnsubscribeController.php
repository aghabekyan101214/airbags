<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\UnsubscribedUser;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\UnsubscribedUsersExport;

class UnsubscribeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $r)
    {
        $data = new UnsubscribedUser();
        $data->first_name = $r->firstName;
        $data->last_name = $r->lastName;
        $data->email = $r->email;
        $data->vin = $r->vin;
        $image = str_replace('data:image/png;base64,', '', $r->signature);
        $image = str_replace(' ', '+', $image);
        $imageName = str_random(50).'.'.'png';
        $data->signature = $imageName;
        \File::put(public_path(). '/signatures/' . $imageName, base64_decode($image));
        $data->save();

    }

    public function exportUsers()
    {
        return Excel::download(new UnsubscribedUsersExport, 'users.xlsx');
    }
}
