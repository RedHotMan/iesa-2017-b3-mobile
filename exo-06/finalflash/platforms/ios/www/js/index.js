/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
},
    
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
onDeviceReady: function() {
    this.receivedEvent('deviceready');
    
    
    
    function checkConnection() {
        var networkState = navigator.connection.type;
        
        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';
        
        alert('Connection type: ' + states[networkState]);
    }
    
    checkConnection();
    
    /*function useStorage(){
     var oldConn = window.getItem("old");
     document.getElementById('oldDate').innerHTML = oldConn;
     
     navigator.app.exitApp();
     
     window.setItem
     
     
     }*/
    var myContact = navigator.contacts.create({"displayName": "Bejita LOL"});
    myContact.save;
    
    function onSuccess(contacts) {
        alert('Found ' + contacts.length + ' contacts.');
        var contactDiv = document.getElementById('contactList');
        var listContact = "";
        for(var i=0; i< contacts.length; i++){
            listContact += "<li>"+contacts[i].name.givenName+"</li>";
        }
        contactDiv.innerHTML = "<ul>"+listContact+"</ul>";
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    var options      = new ContactFindOptions();
    options.multiple = true;
    var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
    navigator.contacts.find(fields, onSuccess, onError, options);
  
    
    

},
    
    // Update DOM on a Received Event
receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');
    
    /*var deviceVesion = document.getElementById('device');
    deviceVesion.innerHTML = '<ul data-role="listview" id="list"'+
    '<li data-icon="arrow-l">Name:' + device.manufacturer + '</li>'+
    '<li data-icon="arrow-r">Model:' + device.model + '</li>'+
    '<li data-icon="arrow-r">Cordova:' + device.cordova + '</li>'+
    '<li data-icon="arrow-l">Platform:' + device.platform + '</li>'+
    '<li data-icon="arrow-r">Uuid:' + device.uuid + '</li>'+
    '<li data-icon="arrow-l">Version:' + device.version + '</li>'+
    '</ul>';*/
    
    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');
    
    console.log('Received Event: ' + id);
}
};

app.initialize();
