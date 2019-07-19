<?php
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();
Route::get('/logout', '\App\Http\Controllers\Auth\LoginController@logout');
Route::get('/get-spread-videos', 'SpreadTheWorldController@getVideos');
Route::group(['prefix' => 'control-panel',  'middleware' => 'auth'], function()
{
    Route::get('/', 'admin\AdminController@index');
    Route::resource('/spread-the-world', 'admin\SpreadTheWorldController');
});

Route::get('/{vue_capture?}', function () {
    return view('home');
})->where('vue_capture', '[\/\w\.-]*');


