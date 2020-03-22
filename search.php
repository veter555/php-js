<?php
$paramsArray = (array) json_decode($_POST['data']);
$valueRole = $_GET['size-field'];
$getParams = 'q=';
for ($i = 0; $i < count($paramsArray); $i++) {
    $operation =  ($paramsArray[$i]->operator == '=') ? '' : $paramsArray[$i]->operator;
    $getParams .=  $paramsArray[$i]->field . ':' . $operation . $paramsArray[$i]->valueField . '+';
}
$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_URL => 'https://api.github.com/search/repositories?' . substr($getParams, 0, -1),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    //CURLOPT_MAXREDIRS => 10,
    //CURLOPT_TIMEOUT => 30,
    CURLOPT_CUSTOMREQUEST => 'GET',
    CURLOPT_HTTPHEADER => array(
        //"content-type: application/json"
        "User-Agent: Awesome-Octocat-App",
    ),
));
$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);
if ($err) {
    echo 'error';
} else {
    echo  $response;
}
?>