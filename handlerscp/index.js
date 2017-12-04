const ClearCache = require('./clearCache');
const GetDiagnostics = require('./getDiagnostics');
const ChangeAvailability = require('./changeAvailability');
const ChangeConguration = require('./changeConguration');
const DataTransfer = require('./dataTransfer');
const GetConguration = require('./getConguration');
const RemoteStartTransaction = require('./remoteStartTransaction');
const RemoteStopTransaction = require('./remoteStopTransaction');
const Reset = require('./reset');
const UnlockConnector = require('./unlockConnector');
const UpdateFirmware = require('./updateFirmware');

module.exports = {
    clearCache: ClearCache,
    GetDiagnostics: GetDiagnostics,
    ChangeAvailability: ChangeAvailability,
    ChangeConguration: ChangeConguration,
    DataTransfer: DataTransfer,
    GetConguration: GetConguration,
    RemoteStartTransaction: RemoteStartTransaction,
    RemoteStopTransaction: RemoteStopTransaction,
    Reset: Reset,
    UnlockConnector: UnlockConnector,
    UpdateFirmware: UpdateFirmware
}
