<?php

namespace App\Providers;

use App\Users;
use App\Models\Token;
use Illuminate\Support\ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Boot the authentication services for the application.
     *
     * @return void
     */
    public function boot()
    {
        $this->app['auth']->viaRequest('api', function ($request) {
        if ($request->header('Authorization')) {
            $key = explode(' ',$request->header('Authorization'));
            $token = Token::find($key[1]);
            if($token->expires_at )
            $user = Users::where('user_id', $token->user_id)->first();
            if(!empty($user)){
                $request->request->add(['userid' => $user->id]);
            }
            return $user;
        }
        });
    }
}
