<?php

// app/Http/Middleware/VerifyToken.php

namespace App\Http\Middleware;

use App\Models\Token;
use Carbon\Carbon;
use Closure;

class VerifyToken
{
    public function handle($request, Closure $next)
    {
        
        if(!$request->header('Authorization')){
            return response()->json(['error' => 'Provide Authorization key'], 401);
        }
        $token = explode(' ',$request->header('Authorization'));
        $tokenModel = Token::where('token', $token[1])->first();

        if (!$tokenModel || Carbon::now() > $tokenModel->expires_at) {
            return response()->json(['error' => 'Invalid or expired token'], 401);
        }

        // update token expiry on successfull access
        Token::where('token', $token[1])->update(['expires_at'=> Carbon::now()->addMinutes(10)]);

        return $next($request);
    }
}
