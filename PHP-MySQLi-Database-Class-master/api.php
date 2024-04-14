<?php
   
  // Tells the browser to allow code from any origin to access
  header('Access-Control-Allow-Origin: *');
  // Tells browsers whether to expose the response to the frontend JavaScript code when the request's credentials mode (Request.credentials) is include
  header("Access-Control-Allow-Credentials: true");
  // Specifies one or more methods allowed when accessing a resource in response to a preflight request
  header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE");
  // Used in response to a preflight request which includes the Access-Control-Request-Headers to indicate which HTTP headers can be used during the actual request
  header("Access-Control-Allow-Headers: Content-Type");
 
  require_once('./MysqliDb.php');

  
  class API
  {
      public function __construct()
      {
       $this->db = new MysqliDB('localhost', 'root', '', 'sampledbs');
        
      }

      public function httpGet($payload)
      {
        //select data
      
      }
      public function httpPOST($payload)
      {
        //convert json to array in php
        $datas = json_encode($payload);
        $arr = json_decode($datas, true);

        $data =  $arr['info'];
        $iNSERT = $this->db->insert('lists',  $data);
        if($iNSERT){
          $get = $this->db->get('lists');
          echo json_encode(array("Result"=>$get));
        }else{

          echo json_encode(array("error".error_get_last()));
        }
        return;



          }
       
    
      
      public function httpPut($payload)
      {
         
    }       
      public function httpDelete($payload)
      {
    
       
        
      }
  }
    $request_method = $_SERVER['REQUEST_METHOD'];
    $received_data = json_decode(file_get_contents('php://input'));
   

  $Api = new API;

  if ($request_method == 'GET') {
      $Api->httpGet($_GET);
  }
  if ($request_method == 'POST') {
      $Api->httpPost($received_data);
  }
  if ($request_method == 'PUT') {
      $Api->httpPut($received_data);
  }
  if ($request_method == 'DELETE') {
      $Api->httpDelete($received_data);
  }