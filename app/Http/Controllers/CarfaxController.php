<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\CarfaxLogin;
use Carbon\Carbon;
use App\Http\Controllers\helpers\CurlController;
use App\CarfaxProductToken;
use phpDocumentor\Reflection\Types\Object_;

class CarfaxController extends Controller
{
    private $url = "https://api.carfax.com";
    private $username = "fadi@unitedigita.com";
    private $password = "Carfax2019";
    public function get_report()
    {
        $productTokenData = CarfaxProductToken::get()->first();
        if(null !== $productTokenData) {
            $now = Carbon::now()->timestamp;
            if($now > $productTokenData->expires) {
                $productToken = $productTokenData->token;
                $carfax = $this->get_carfax($productToken);
                return $carfax;
            }
        }
//        get latest token from db and checking to be valid token
        $data = CarfaxLogin::get()->first();
        if(null !== $data) {
            $now = Carbon::now()->timestamp;
            if($now > $data->expires) {
                $token = $data->token;
            } else {
                $token = $this->login();
            }
        } else {
            $token = $this->login();
        }
//        get private token
        $privateToken = $this->get_private_key($token);
        $productToken = $this->get_product_token($privateToken);
        return $this->get_carfax($productToken);
    }

    private function login()
    {
        $url = "/auth/ak_one_account/tokens";
//        CarfaxLogin::where("expires", "<", Carbon::now()->timestamp - 5)->delete();
        $credentials = json_encode(
            array(
                "username" => $this->username,
                "password" => $this->password
            )
        );
        $carfax_data = CurlController::generate($url, false, "POST", $credentials);
        $data = new CarfaxLogin();
        $data->token = $carfax_data->token;
        $data->expires = $carfax_data->expires;
        $data->identifiers = $carfax_data->identifiers;
        $data->save();
        var_dump($carfax_data);die;
        return $carfax_data->token;
    }

    private function get_private_key($token)
    {
        $url = "/asymmetric/key/create";
        $credentials = json_encode(
            array(
                "accessIdentifier" => "",
                "keyName" => ""
            )
        );
        $carfax_data = CurlController::generate($url, $token, "POST", $credentials);
        return $carfax_data->privateKey;
    }

    private function get_product_token($privateKey)
    {
        $url = "/auth/ak_authentication/tokens";
        $credentials = json_encode(
            array(
                "accessIdentifier" => "",
                "privateKey" => $privateKey
            )
        );
        $carfax_data = CurlController::generate($url, false, "POST", $credentials);
        $data = new CarfaxProductToken();
        $data->token = $carfax_data->token;
        $data->expires = $carfax_data->expires;
        $data->save();
        return $carfax_data->token;
    }

    private function get_carfax($productToken)
    {
        $url = "/open-recalls/batch";
        $credentials = json_encode(
            array(
                "vins" => array(
                    "5J8TB3H36EL015620"
                ),
            )
        );
        $carfax_data = CurlController::generate($url, false, "POST", $credentials, $productToken);
        return $carfax_data;
    }
}
