<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Hash;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

use App\Users;
use App\Models\Token;
use Carbon\Carbon;
class UsersController extends Controller

{

  public function __construct()

   {

     //  $this->middleware('auth:api');

   }

   /**

    * Display a listing of the resource.

    *

    * @return \Illuminate\Http\Response

    */

   public function createToken(Request $request)

   {

       $this->validate($request, [

       'email' => 'required',

       'password' => 'required'

        ]);

      $user = Users::where('email', $request->input('email'))->first();

     if(Hash::check($request->input('password'), $user->password)){

          $apikey = base64_encode(Str::random(40));

          $expiresAt = Carbon::now()->addMinutes(10);

          // Save the token to the tokens table
          Token::create([
              'user_id' => $user->id,
              'token' => $apikey,
              'expires_at' => $expiresAt,
          ]);

          return response()->json(['token' => $apikey, 'expires_at' => $expiresAt]);
      }else{

          return response()->json(['status' => 'fail'],401);

      }

   }

   public function invalidateToken(Request $request)
   {

    $temp = $request->input('test');
    return response()->json(['status' => 'fail'],401);

   }

}    

?>