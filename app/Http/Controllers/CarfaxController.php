<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\CarfaxLogin;
use Carbon\Carbon;
use App\Http\Controllers\helpers\CurlController;
use App\CarfaxProductToken;
use App\CarfaxPrivateKey;
use phpDocumentor\Reflection\Types\Object_;
use App\NhtsaList;

class CarfaxController extends Controller
{
    private $url = "https://api.carfax.com";
    private $username = "fadi@unitedigital.com";
    private $password = "Carfax2019";
    public function get_report()
    {
        $productTokenData = CarfaxProductToken::get()->first();
        if(null !== $productTokenData) {
            $now = Carbon::now()->timestamp;
            if($now < substr($productTokenData->expires, 0, -3)) {
                $productToken = $productTokenData->token;
                $carfax = $this->get_carfax($productToken);
                return $carfax;
            }
        }
//        get latest token from db and checking to be valid token
        $data = CarfaxLogin::get()->first();
        if(null !== $data) {
            $now = Carbon::now()->timestamp;
            if($now < substr($data->expires, 0, -3)) {
                $token = $data->token;
            } else {
                $token = $this->login();
            }
        } else {
            $token = $this->login();
        }
//        get private token
        $privateToken = CarfaxPrivateKey::get()->first();
        $productToken = $this->get_product_token($privateToken->privateKey);
        return $this->get_carfax($productToken);
    }

    private function login()
    {
        $url = "/auth/ak_one_account/tokens";
        CarfaxLogin::where("expires", "<", Carbon::now()->timestamp)->delete();
        $credentials = json_encode(
            array(
                "username" => $this->username,
                "password" => $this->password
            )
        );
        $carfax_data = CurlController::generate($url, false, "POST", $credentials);
        $data = new CarfaxLogin();
        $carfax_data = json_decode($carfax_data);
        if(isset($carfax_data->error)) return false;
        $data->token = $carfax_data->token;
        $data->expires = $carfax_data->expires;
        $data->identifiers = json_encode($carfax_data->identifiers);
        $data->save();
        return $carfax_data->token;
    }

    private function get_private_key($token)
    {
        $url = "/asymmetric/key/create";
        $credentials = json_encode(
            array(
                "accessIdentifier" => "SSA",
                "keyName" => "privateKey"
            )
        );
        $carfax_data = CurlController::generate($url, $token, false, $credentials);
        $carfax_data = json_decode($carfax_data);

        return $carfax_data->privateKey;
    }

    private function get_product_token($privateKey)
    {
        $url = "/auth/ak_authentication/tokens";
        $credentials = json_encode(
            array(
                "accessIdentifier" => "SSA",
                "privateKey" => $privateKey
            )
        );
        $carfax_data = CurlController::generate($url, false, "POST", $credentials);
        $carfax_data = json_decode($carfax_data);
        if(isset($carfax_data->error) || $carfax_data == null) return false;
        CarfaxProductToken::where("id", ">", 0)->delete();
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
                    "3C63RRKL2DG613020"
                ),
            )
        );
        $carfax_data = CurlController::generate($url, false, "POST", $credentials, $productToken);
        $carfax_data = json_decode($carfax_data);
        if(isset($carfax_data->recallInformation[0]->model) && null != $carfax_data->recallInformation[0]->model) {
            $result = array();
//            if there is recall for the car
            if(isset($carfax_data->recallInformation[0]->recalls[0])) {
                foreach ($carfax_data->recallInformation[0]->recalls as $rec) {
                    $data = NhtsaList::where("nhtsa_id", $rec->nhtsaNumber)->first();
                    if(null != $data) {
                        $result[] = $rec;
                    }
                }
                if(!empty($result)) {
                    return json_encode($result);
                } else {
//                    Has recall info, no one matches the ids
                    return -2;
                }
            } else {
//                no recall info
                return 0;
            }
        } else {
//            Wrong vin provided
            return -1;
        }
    }
}
