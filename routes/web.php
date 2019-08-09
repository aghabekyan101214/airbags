<?php
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
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
Route::get('/register', '\App\Http\Controllers\Auth\LoginController@login');
Route::get('/get-spread-videos', 'SpreadTheWorldController@getVideos');
Route::get('/get-quick-facts', 'QuickFactsController@getFacts');
Route::get('/static', 'StaticDataController@index');
Route::get('/vehicles', 'VehiclesController@index');
Route::post('/unsubscribing', 'UnsubscribeController@store');
Route::get('/get-report', 'CarfaxController@get_report');
Route::get('/share', 'FbShareController@share');
//Route::post('/insert', 'InsertController@insert');
Route::group(['prefix' => '/control-panel',  'middleware' => 'auth'], function()
{
    Route::get('/', 'admin\AdminController@index');
    Route::resource('/spread-the-world', 'admin\SpreadTheWorldController');
    Route::resource('/quick-facts', 'admin\QuickFactsController');
    Route::resource('/vehicles', 'admin\VehiclesController');
    Route::resource('/statics', 'admin\StaticsController');
});

Route::get('/{vue_capture?}', function () {
    return view('home');
})->where('vue_capture', '[\/\w\.-]*');


