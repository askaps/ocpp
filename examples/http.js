const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const DB = require('../db/index.js');
var Storage = new DB(process.env.storage);

var CentralSystem = require('../entities/CentralSystem.js');
var CentralSystemServer = new CentralSystem('9220');

app.set('port', (process.env.PORT || 7000));

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// Process application/json
app.use(bodyParser.json());

app.get('/api/stations/list', function(req, res){
  
  Storage.findAll('station', function(err, stations){
    if(err){
      console.log('[http] Error: ' + err);
      res.send(err);
    }else{
        res.send(stations);
    }
  });
});

app.get('/api/stations/:id/reset/:type', function(req, res){
  //  Restart Station
  var pointId = req.params.id;
  var type = req.params.type;

  Storage.findById('station', pointId, function(err, station){
    if(err){
      console.log('[http] Error: ' + err);
      res.send(err);
    }else{
      //var endpoint = station.endpoint || "192.168.0.114:8081";
      console.log(`[OCPP Server] Restarting ${station.chargeBoxIdentity} on ${station.endpoint} ...`);

      // create client
      CentralSystemServer.createChargeBoxClient(station, function(){
        console.log(`[ChargeBox] Client Created for ${station.chargeBoxIdentity}`);
        CentralSystemServer.reset(station.chargeBoxIdentity, station.endpoint, {type: 'Hard'});
        res.send({
          message: 'Reset station ' + pointId
        });
      });
    }
  });
});

app.get('/api/stations/:id/unlockConnector', function(req, res){
  //  Restart Station
  var pointId = req.params.id;

  Storage.findById('station', pointId, function(err, station){
    if(err){
      console.log('[http] Error: ' + err);
      res.send(err);
    }else{
      //var endpoint = station.endpoint || "192.168.0.114:8081";
      console.log(`[OCPP Server] Restarting ${station.chargeBoxIdentity} on ${station.endpoint} ...`);

      // create client
      CentralSystemServer.createChargeBoxClient(station, function(){
        console.log(`[ChargeBox] Client Created for ${station.chargeBoxIdentity}`);
        CentralSystemServer.unlockConnector(station.chargeBoxIdentity, station.endpoint);
        res.send({
          message: 'Connector Unlocked at station ' + pointId
        });
      });
    }
  });
});


app.get('/api/stations/:id/restart', function(req, res){
  //  Restart Station
  var pointId = req.params.id;

  Storage.findById('station', pointId, function(err, station){
    if(err){
      console.log('[http] Error: ' + err);
      res.send(err);
    }else{
      //var endpoint = station.endpoint || "192.168.0.114:8081";
      console.log(`[OCPP Server] Restarting ${station.chargeBoxIdentity} on ${station.endpoint} ...`);

      // create client
      CentralSystemServer.createChargeBoxClient(station, function(){
        console.log(`[ChargeBox] Client Created for ${station.chargeBoxIdentity}`);
        CentralSystemServer.restartChargingPoint(station.chargeBoxIdentity, station.endpoint);
        res.send({
          message: 'Restart station ' + pointId
        });
      });
    }
  });
});


app.get('/api/stations/:id/clearCache', function(req, res){
  //  Restart Station
  var pointId = req.params.id;

  Storage.findById('station', pointId, function(err, station){
    if(err){
      console.log('[http] Error: ' + err);
      res.send(err);
    }else{
      if(station){
        console.log('station: ' + JSON.stringify(station));
        //var endpoint = station.endpoint || "192.168.0.114:8081";
        console.log(`[OCPP Server] Clear Cache ${station.chargeBoxIdentity} on ${station.endpoint} ...`);

        // create client
        CentralSystemServer.createChargeBoxClient(station, function(){
          console.log(`[ChargeBox] Client Created for ${station.chargeBoxIdentity}`);
          CentralSystemServer.clearCache(station.chargeBoxIdentity, station.endpoint);
          res.send({
            message: 'Clear Cache for station ' + pointId
          });
        });
      }else{
        res.send({
          error: 'station ' + pointId + ' is not found !'
        })
      }
    }
  });
});

app.get('/api/stations/:id/getDiagnostics', function(req, res){
  //  Restart Station
  var pointId = req.params.id;

  Storage.findById('station', pointId, function(err, station){
    if(err){
      console.log('[http] Error: ' + err);
      res.send(err);
    }else{
      if(station){
        console.log('station: ' + JSON.stringify(station));
        //var endpoint = station.endpoint || "192.168.0.114:8081";
        console.log(`[OCPP Server] Get Diagnostics ${station.chargeBoxIdentity} on ${station.endpoint} ...`);

        CentralSystemServer.createChargeBoxClient(station, function(){
          console.log(`[ChargeBox] Client Created for ${station.chargeBoxIdentity}`);
          CentralSystemServer.GetDiagnostics(station, function(data){
            console.log('[ChargeBox]'+ data);
            res.send({
              message: data
            });
          });
        });
        
      }else{
        res.send({
          error: 'station ' + pointId + ' is not found !'
        })
      }
    }
  });
});


var server = app.listen(app.get('port'), function(){
  console.log('Server is running on port ' + app.get('port'));
});
