<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Facebook\Facebook;

class FbShareController extends Controller
{
    public function share()
    {

        $fb = new Facebook([
            'app_id' => '599147317278987',
            'app_secret' => '0f5c79dfe5ad65281d8a68976742552d',
            'default_graph_version' => 'v2.10',
        ]);
        $data = [
            'title' => 'Airbag recall',
            'description' => 'Takata airbag recall',
            'source' => $fb->videoToUpload(asset('/storage/y9NVQQRcdp2oU00bVCGu051JPVpdWzHJBL7SA6aN.mp4')),
        ];

        try {
            $response = $fb->post('/me/videos', $data, 'user-access-token');
        } catch(Facebook\Exceptions\FacebookResponseException $e) {
            // When Graph returns an error
            echo 'Graph returned an error: ' . $e->getMessage();
            exit;
        } catch(Facebook\Exceptions\FacebookSDKException $e) {
            // When validation fails or other local issues
            echo 'Facebook SDK returned an error: ' . $e->getMessage();
            exit;
        }

        $graphNode = $response->getGraphNode();
        var_dump($graphNode);

        echo 'Video ID: ' . $graphNode['id'];
    }
}
