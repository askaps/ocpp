module.exports = { /* Services */

  CentralSystemService: { /* Ports */

    CentralSystemServiceSoap12: { /* Methods */

      Authorize: function(args, callback, headers, req) {
        /*
          args = {
                 idTag of type IdToken|s:string|maxLength
                 targetNSAlias of type tns
                 targetNamespace of type urn://Ocpp/Cs/2012/06/
          }
        */
        //
        // Your code
        //
        /* return {
                 idTagInfo of type  {
                         status of type AuthorizationStatus|s:string|Accepted,Blocked,Expired,Invalid,ConcurrentTx
                         expiryDate of type s:dateTime
                         parentIdTag of type IdToken|s:string|maxLength
                         targetNSAlias of type tns
                         targetNamespace of type urn://Ocpp/Cs/2012/06/
                   }
                 targetNSAlias of type tns
                 targetNamespace of type urn://Ocpp/Cs/2012/06/

        }; */
      },
      StartTransaction: function(args, callback, headers, req) {
        /*
          args = {
                 connectorId of type s:int
                 idTag of type IdToken|s:string|maxLength
                 timestamp of type s:dateTime
                 meterStart of type s:int
                 reservationId of type s:int
                 targetNSAlias of type tns
                 targetNamespace of type urn://Ocpp/Cs/2012/06/
          }
        */
        //
        // Your code
        //
        /* return {
                 transactionId of type s:int
                 idTagInfo of type  {
                         status of type AuthorizationStatus|s:string|Accepted,Blocked,Expired,Invalid,ConcurrentTx
                         expiryDate of type s:dateTime
                         parentIdTag of type IdToken|s:string|maxLength
                         targetNSAlias of type tns
                         targetNamespace of type urn://Ocpp/Cs/2012/06/
                   }
                 targetNSAlias of type tns
                 targetNamespace of type urn://Ocpp/Cs/2012/06/

        }; */
      },
      StopTransaction: function(args, callback, headers, req) {
        /*
          args = {
                 transactionId of type s:int
                 idTag of type IdToken|s:string|maxLength
                 timestamp of type s:dateTime
                 meterStop of type s:int
                 transactionData[] of type  {
                         values[] of type  {
                                 timestamp of type s:dateTime
                                 value[] of type s:string
                                 targetNSAlias of type tns
                                 targetNamespace of type urn://Ocpp/Cs/2012/06/
                           }
                         targetNSAlias of type tns
                         targetNamespace of type urn://Ocpp/Cs/2012/06/
                   }
                 targetNSAlias of type tns
                 targetNamespace of type urn://Ocpp/Cs/2012/06/
          }
        */
        //
        // Your code
        //
        /* return {
                 idTagInfo of type  {
                         status of type AuthorizationStatus|s:string|Accepted,Blocked,Expired,Invalid,ConcurrentTx
                         expiryDate of type s:dateTime
                         parentIdTag of type IdToken|s:string|maxLength
                         targetNSAlias of type tns
                         targetNamespace of type urn://Ocpp/Cs/2012/06/
                   }
                 targetNSAlias of type tns
                 targetNamespace of type urn://Ocpp/Cs/2012/06/

        }; */
      },
      Heartbeat: function(args, callback, headers, req) {
        /*
          args = {
                 targetNSAlias of type tns
                 targetNamespace of type urn://Ocpp/Cs/2012/06/
          }
        */
        //
        // Your code
        //
        /* return {
                 currentTime of type s:dateTime
                 targetNSAlias of type tns
                 targetNamespace of type urn://Ocpp/Cs/2012/06/

        }; */
      },
      MeterValues: function(args, callback, headers, req) {
        /*
          args = {
                 connectorId of type s:int
                 transactionId of type s:int
                 values[] of type  {
                         timestamp of type s:dateTime
                         value[] of type s:string
                         targetNSAlias of type tns
                         targetNamespace of type urn://Ocpp/Cs/2012/06/
                   }
                 targetNSAlias of type tns
                 targetNamespace of type urn://Ocpp/Cs/2012/06/
          }
        */
        //
        // Your code
        //
        /* return {
                 targetNSAlias of type tns
                 targetNamespace of type urn://Ocpp/Cs/2012/06/

        }; */
      },
      BootNotification: function(args, callback, headers, req) {
        // Log
        console.log("BootNotification OCPP V 1.5\n");

        // Handle
        global.centralSystem.handleBootNotification(args, headers, req).then(function(response) {
          callback(response);
        });

        /*
          args = {
                 chargePointVendor of type ChargePointVendor|s:string|maxLength
                 chargePointModel of type ChargePointModel|s:string|maxLength
                 chargePointSerialNumber of type ChargePointSerialNumber|s:string|maxLength
                 chargeBoxSerialNumber of type ChargeBoxSerialNumber|s:string|maxLength
                 firmwareVersion of type FirmwareVersion|s:string|maxLength
                 iccid of type IccidString|s:string|maxLength
                 imsi of type ImsiString|s:string|maxLength
                 meterType of type MeterType|s:string|maxLength
                 meterSerialNumber of type MeterSerialNumber|s:string|maxLength
                 targetNSAlias of type tns
                 targetNamespace of type urn://Ocpp/Cs/2012/06/
          }
        */

        /* return {
                 status of type RegistrationStatus|s:string|Accepted,Rejected
                 currentTime of type s:dateTime
                 heartbeatInterval of type s:int
                 targetNSAlias of type tns
                 targetNamespace of type urn://Ocpp/Cs/2012/06/

        }; */
      },
      StatusNotification: function(args, callback, headers, req) {
        /*
          args = {
                 connectorId of type s:int
                 status of type ChargePointStatus|s:string|Available,Occupied,Faulted,Unavailable,Reserved
                 errorCode of type ChargePointErrorCode|s:string|ConnectorLockFailure,HighTemperature,Mode3Error,NoError,PowerMeterFailure,PowerSwitchFailure,ReaderFailure,ResetFailure,GroundFailure,OverCurrentFailure,UnderVoltage,WeakSignal,OtherError
                 info of type s:string
                 timestamp of type s:dateTime
                 vendorId of type s:string
                 vendorErrorCode of type s:string
                 targetNSAlias of type tns
                 targetNamespace of type urn://Ocpp/Cs/2012/06/
          }
        */
        //
        // Your code
        //
        /* return {
                 targetNSAlias of type tns
                 targetNamespace of type urn://Ocpp/Cs/2012/06/

        }; */
      },
      FirmwareStatusNotification: function(args, callback, headers, req) {
        /*
          args = {
                 status of type FirmwareStatus|s:string|Downloaded,DownloadFailed,InstallationFailed,Installed
                 targetNSAlias of type tns
                 targetNamespace of type urn://Ocpp/Cs/2012/06/
          }
        */
        //
        // Your code
        //
        /* return {
                 targetNSAlias of type tns
                 targetNamespace of type urn://Ocpp/Cs/2012/06/

        }; */
      },
      DiagnosticsStatusNotification: function(args, callback, headers, req) {
        /*
          args = {
                 status of type DiagnosticsStatus|s:string|Uploaded,UploadFailed
                 targetNSAlias of type tns
                 targetNamespace of type urn://Ocpp/Cs/2012/06/
          }
        */
        //
        // Your code
        //
        /* return {
                 targetNSAlias of type tns
                 targetNamespace of type urn://Ocpp/Cs/2012/06/

        }; */
      },
      DataTransfer: function(args, callback, headers, req) {
        /*
          args = {
                 vendorId of type s:string
                 messageId of type s:string
                 data of type s:string
                 targetNSAlias of type tns
                 targetNamespace of type urn://Ocpp/Cs/2012/06/
          }
        */
        //
        // Your code
        //
        /* return {
                 status of type DataTransferStatus|s:string|Accepted,Rejected,UnknownMessageId,UnknownVendorId
                 data of type s:string
                 targetNSAlias of type tns
                 targetNamespace of type urn://Ocpp/Cs/2012/06/

        }; */
      }

    }
  }
};