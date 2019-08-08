<?php

namespace App\Http\Controllers\helpers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CurlController extends Controller
{
    private static $url = "https://api.carfax.com";
    public static function generate($url, $JWTtoken, $method = null, $data = null, $Btoken = null)
    {
        $curl = curl_init();
        if($JWTtoken) {
            $token = "Authorization: JWT $JWTtoken";
        } elseif(null !== $Btoken) {
            $token = "Authorization: Bearer $Btoken";
        } else {
            $token = "";
        }
        $headers = array('Content-Type: application/json', $token);
        curl_setopt($curl, CURLOPT_URL, self::$url . $url );
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_TIMEOUT, 10);
        if(null !== $method) {
            curl_setopt($curl, CURLOPT_POST, true);
        }
        if(null != $data) {
            curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        }
        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        $response = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);
        if ($err) {
            return $err;
        } else {
            return $response;
        }
    }
}
