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
//            'app_id' => '1099976223439644',
            'app_secret' => '0f5c79dfe5ad65281d8a68976742552d',
//            'app_secret' => '9e0f42b8f67fda560ecbb2b5ae1f0f00',
            'default_graph_version' => 'v4.0',
        ]);
        $data = [
            'title' => 'My Foo Video',
            'description' => 'This video is full of foo and bar action.',
            'source' => $fb->videoToUpload(public_path("/site/videos/1.mp4")),
        ];

        try {
            $response = $fb->post('/me/videos', $data, 'EAAIg69sDuQsBAJZAGRWNkIOH2R9u7gkZAKlsTrZAH1YHc8zZB5zpAjsNS1T7J5YMXZCbQp1qphsUxvf5IhsaxJIgMKjrZCyFakVj3kztQwPv6gDch9IIX6HSVqhZCDOMsSNklE3KtO9bHhEJnik2T21Sq3eFZA3ZB5WHRUgneSiFbF9dBO3rdFbuOG03fGb1lODFH55ybWCoDBAZDZD');
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
