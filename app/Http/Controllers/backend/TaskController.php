<?php

namespace App\Http\Controllers\backend;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class TaskController extends Controller
{
    //

    public function databaseConnection(Request $request){

        $request->validate([
            'db_host'=>'required|min:10',
            'db_database'=>'required',
            'db_username'=>'required',
            'db_password',
        ]);
        $databaseConfig = [
            'driver' => 'mysql',
            'host' => $request->db_host,
            'port' => '3306',
            'database' => $request->db_database,
            'username' => $request->db_username,
            'password' => $request->db_password,
            // Additional configuration options...
        ];

        // Set the database connection configuration
        config(['database.connections.custom_connection' => $databaseConfig]);

        // Use the 'custom_connection' for the following query  | your SQL query here
      
       $query=$request->db_query  ?? "";
   
        $results = DB::connection('custom_connection')->select((string)$query);

        // Optionally, revert to the default connection
        config(['database.connections.custom_connection' => null]);
      
      
        return $results;
      
    }
}
