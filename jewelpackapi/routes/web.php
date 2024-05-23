<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/',function () {
    return "Jewelpack";
});


$router->group(['prefix' => 'api/'], function ($router) {
    $router->get('login/','UsersController@createToken');
    $router->get('logout/','UsersController@invalidateToken');
    $router->get('/products', 'ProductController@index');
    $router->get('/product/{id}', 'ProductController@show');
    $router->post('/update/goldrate', 'GoldRateController@updateGoldRate');
    $router->get('/healthcheck',function(){
        return "App is running!";
    });
   
});