/*$(function(){
    var $mobile = $("mobiles");
    var $id = $("id");
    var $typeofdevice = $("typeofdevice");
    var $deviceid = $("deviceid");
    var $manufacturer = $("manufacturer");
    var $make = $("make");
    var $model = $("model");
    var $os = $("os");
    var $dateofpurchase = $("dateofpurchase");
    var $currentclient = $("currentclient");
    var $serialnumber =$("serialnumber");
    var $locationofhosting =$("locationofhosting");
    var $status =$("status");
    var $ipaddress = $("ipaddress");
    var $phonenumber = $("phonenumber");
    var $byod = $("byod");
}*/

function loadDataFromLocal() {
    debugger;
    $.ajax({
          type: 'get',
          url : 'http://localhost:8080/mobile/all',
          success: function(data){
      $("#tblData tbody").html("");

      let index = 1;
      $.each(data,function(i, element)
      {
        let dynamicTR = "<tr>";
       // dynamicTR = dynamicTR + "<td> " + index + "</td>";
        //dynamicTR = dynamicTR + "<td class='txtName'  data-id=" + element.id + ">" + element.name + "</td>";
        dynamicTR = dynamicTR + "<td class='txtDeviceId'>" + element.deviceId + "</td>";
        dynamicTR = dynamicTR + "<td class='txtType'>" + element.typeOfDevice + "</td>";
        dynamicTR = dynamicTR + "<td class='txtManufacturer'>" + element.manufacturer + "</td>";
        dynamicTR = dynamicTR + "<td class='txtMake'>" + element.make + "</td>";
        dynamicTR = dynamicTR + "<td class='txtModel'>" + element.model + "</td>";
        dynamicTR = dynamicTR + "<td class='txtOs'>" + element.os + "</td>";
        dynamicTR = dynamicTR + "<td class='txtDate'>" + element.dateOfPurchase + "</td>";
        dynamicTR = dynamicTR + "<td class='txtClient'>" + element.currentClient + "</td>";
        dynamicTR = dynamicTR + "<td class='txtSerial'>" + element.serialNumber + "</td>";
        dynamicTR = dynamicTR + "<td class='txtLocation'>" + element.hostingOfLocation + "</td>";

        dynamicTR = dynamicTR + "<td class='txtStatus'>" + element.status + "</td>";
        dynamicTR = dynamicTR + "    <td class='tdAction text-center'>";
        dynamicTR = dynamicTR + "        <button class='btn btn-sm btn-success btn-edit'> Edit</button>";
        dynamicTR = dynamicTR + "        <button class='btn btn-sm btn-danger btn-delete'> Delete</button>";
        dynamicTR = dynamicTR + "    </td>";
        dynamicTR = dynamicTR + " </tr>";
        $("#tblData tbody").append(dynamicTR);
        index++;
       
  });
}
} );     
addEmptyRow();
}
