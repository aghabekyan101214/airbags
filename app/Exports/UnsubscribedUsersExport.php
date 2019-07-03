<?php

namespace App\Exports;

use App\UnsubscribedUser;
use Maatwebsite\Excel\Concerns\FromCollection;

class UnsubscribedUsersExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return UnsubscribedUser::all();
    }
}
