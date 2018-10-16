var _0x5bce = [
    'ojet',
    'all',
    'then',
    'log',
    'initializeFinish',
    'Finish\x20loading\x20Services',
    'catch',
    'Error',
    'START\x20UPDATING\x20COMBO',
    'data',
    'removeAll',
    'callService',
    'message',
    'getProperty',
    'length',
    'each',
    'value',
    'results[',
    'label',
    'cmbPrefix',
    'push',
    'masterprodid',
    'refresh',
    '\x20items\x20loaded',
    'Error\x20Updating\x20Combo\x20',
    'no\x20results\x20returned',
    'START\x20UPDATING\x20TABLE',
    'dataSource',
    'disabled',
    'Update\x20Table\x20(',
    '\x20items\x20loaded)',
    'No\x20results\x20returned\x20(please\x20check\x20response\x20message)',
    'Error\x20getting\x20data:\x20no\x20data\x20attribute\x20present\x20in\x20response'
];
var _0x14c9 = function (_0x857db9, _0x154c8a) {
    _0x857db9 = _0x857db9 - 0x0;
    var _0x50bb2d = _0x5bce[_0x857db9];
    return _0x50bb2d;
};
define([_0x14c9('0x0')], function (_0x4241ab) {
    return {
        'loadServices': function (_0x184980, _0x46dc73, _0x8b552a, _0x166c1d) {
            return new Promise((_0x128cbb, _0x483355) => {
                Promise[_0x14c9('0x1')](_0x184980)[_0x14c9('0x2')](function (_0x16a6ef) {
                    console[_0x14c9('0x3')](_0x16a6ef);
                    _0x46dc73(!![]);
                    _0x4241ab[_0x14c9('0x4')](_0x166c1d);
                    _0x128cbb(_0x14c9('0x5'));
                })[_0x14c9('0x6')](function (_0x1dc797) {
                    console[_0x14c9('0x3')](_0x1dc797);
                    _0x46dc73(!![]);
                    _0x8b552a(!![]);
                    _0x4241ab['initializeFinish']();
                    _0x483355({
                        'status': _0x14c9('0x7'),
                        'message': _0x1dc797,
                        'count': 0x0
                    });
                });
            });
        },
        'updateCombo': function (_0x11c26d, _0xfcf49f, _0x4426fe, _0x11109e, _0x52bf99, _0x21a03e, _0x1d2dd3, _0x5f42ee, _0x494b40, _0x477f50) {
            return new Promise((_0x46932f, _0x131537) => {
                console[_0x14c9('0x3')](_0x14c9('0x8'));
                let _0x1ff362 = _0x1d2dd3();
                _0x1d2dd3(0x0);
                _0x21a03e[_0x14c9('0x9')][_0x14c9('0xa')]();
                _0x4241ab[_0x14c9('0xb')](_0xfcf49f, _0x4426fe, _0x11109e, _0x52bf99)[_0x14c9('0x2')](function (_0x1f62af) {
                    let _0x57015f = 0x0;
                    if (_0x1f62af[_0x14c9('0x9')][_0x14c9('0xc')]['data']) {
                        const _0x41beda = _0x4241ab[_0x14c9('0xd')](_0x5f42ee, _0x1f62af[_0x14c9('0x9')]);
                        if (_0x41beda && _0x41beda[_0x14c9('0xe')] > 0x0) {
                            _0x57015f = _0x41beda[_0x14c9('0xe')];
                            let _0x559fb1 = ![];
                            let _0x49fadc;
                            $[_0x14c9('0xf')](_0x41beda, function (_0x15e87c) {
                                let _0x350d61 = _0x41beda[_0x15e87c][_0x14c9('0x10')];
                                _0x41beda[_0x15e87c][_0x14c9('0x10')] = eval(_0x14c9('0x11') + _0x15e87c + '].' + _0x494b40[_0x14c9('0x10')], _0x41beda);
                                if (_0x15e87c == 0x0) {
                                    if (_0x494b40[_0x14c9('0x12')] == _0x14c9('0x10')) {
                                        _0x41beda[_0x15e87c][_0x14c9('0x12')] = _0x494b40['cmbPrefix'] + _0x350d61;
                                    } else {
                                        _0x41beda[_0x15e87c][_0x14c9('0x12')] = _0x494b40[_0x14c9('0x13')] + eval(_0x14c9('0x11') + _0x15e87c + '].' + _0x494b40[_0x14c9('0x12')], _0x41beda);
                                    }
                                    _0x49fadc = _0x41beda[_0x15e87c][_0x14c9('0x10')];
                                } else {
                                    if (_0x494b40[_0x14c9('0x12')] == _0x14c9('0x10')) {
                                        _0x41beda[_0x15e87c][_0x14c9('0x12')] = _0x350d61;
                                    } else {
                                        _0x41beda[_0x15e87c][_0x14c9('0x12')] = eval('results[' + _0x15e87c + '].' + _0x494b40['label'], _0x41beda);
                                    }
                                }
                                _0x21a03e[_0x14c9('0x9')][_0x14c9('0x14')](_0x41beda[_0x15e87c]);
                                if (_0x41beda[_0x15e87c][_0x14c9('0x15')] == _0x1ff362) {
                                    _0x559fb1 = !![];
                                }
                            });
                            if (_0x559fb1 && !_0x477f50) {
                                _0x1d2dd3(_0x1ff362);
                            } else {
                                _0x1d2dd3(_0x49fadc);
                            }
                            if (_0x11c26d) {
                                _0x11c26d[_0x14c9('0x16')]();
                            }
                            _0x46932f('Update\x20Combo\x20' + _0x494b40[_0x14c9('0x13')] + _0x57015f + _0x14c9('0x17'));
                        } else {
                            _0x131537(_0x14c9('0x18') + _0x494b40[_0x14c9('0x13')] + _0x14c9('0x19'));
                        }
                    } else {
                        _0x131537('Error\x20Updating\x20Combo\x20' + _0x494b40[_0x14c9('0x13')] + _0x14c9('0x19'));
                    }
                })[_0x14c9('0x6')](function (_0x125be2) {
                    _0x131537({
                        'status': _0x14c9('0x7'),
                        'message': _0x125be2,
                        'count': 0x0
                    });
                });
            });
        },
        'updateTable': function (_0x21704c, _0x796ec1, _0x5c6614, _0x256202, _0x4f6516, _0x5725f0, _0x52a9ca, _0x4d923c, _0xec8cd2) {
            return new Promise((_0x29b5cd, _0x3be281) => {
                console[_0x14c9('0x3')](_0x14c9('0x1a'));
                if (_0xec8cd2) {
                    _0xec8cd2({});
                }
                _0x52a9ca[_0x14c9('0x1b')]['data'][_0x14c9('0xa')]();
                if (_0x21704c) {
                    _0x21704c[_0x14c9('0x1c')] = !![];
                }
                _0x4241ab[_0x14c9('0xb')](_0x5c6614, _0x256202, _0x4f6516, _0x5725f0)[_0x14c9('0x2')](function (_0x483aee) {
                    let _0x2e0691 = 0x0;
                    if (_0x483aee[_0x14c9('0x9')][_0x14c9('0xc')][_0x14c9('0x9')]) {
                        const _0xbe5ece = _0x4241ab[_0x14c9('0xd')](_0x4d923c, _0x483aee[_0x14c9('0x9')]);
                        if (_0xbe5ece) {
                            _0x2e0691 = _0xbe5ece[_0x14c9('0xe')];
                            $[_0x14c9('0xf')](_0xbe5ece, function (_0x493cab) {
                                if (_0x52a9ca[_0x14c9('0x9')]) {
                                    _0x52a9ca['data']['push'](_0xbe5ece[_0x493cab]);
                                } else {
                                    _0x52a9ca[_0x14c9('0x1b')][_0x14c9('0x9')][_0x14c9('0x14')](_0xbe5ece[_0x493cab]);
                                }
                            });
                            if (_0x796ec1) {
                                _0x796ec1[_0x14c9('0x16')]();
                            }
                            if (_0x21704c) {
                                _0x21704c[_0x14c9('0x1c')] = ![];
                            }
                            _0x29b5cd({
                                'status': 'Success',
                                'message': _0x14c9('0x1d') + _0x2e0691 + _0x14c9('0x1e'),
                                'count': _0x2e0691
                            });
                        } else {
                            if (_0x796ec1) {
                                _0x796ec1[_0x14c9('0x16')]();
                            }
                            if (_0x21704c) {
                                _0x21704c['disabled'] = ![];
                            }
                            _0x29b5cd({
                                'status': 'Success',
                                'message': _0x14c9('0x1d') + _0x2e0691 + _0x14c9('0x1e'),
                                'count': _0x2e0691
                            });
                        }
                    } else {
                        if (_0x21704c) {
                            _0x21704c['disabled'] = ![];
                        }
                        _0x3be281({
                            'status': 'Error',
                            'message': _0x14c9('0x1f'),
                            'count': 0x0
                        });
                    }
                })[_0x14c9('0x6')](function (_0xc884a) {
                    if (_0x21704c) {
                        _0x21704c[_0x14c9('0x1c')] = ![];
                    }
                    _0x3be281({
                        'status': _0x14c9('0x7'),
                        'message': _0xc884a,
                        'count': 0x0
                    });
                });
            });
        },
        'getServiceData': function (_0xd39848, _0x101711, _0xae31b7, _0x46e0c8, _0x451c29) {
            return new Promise((_0x502a02, _0x1ab5eb) => {
                console[_0x14c9('0x3')]('GETTING\x20SERVICE\x20DATA');
                _0x4241ab[_0x14c9('0xb')](_0xd39848, _0x101711, _0xae31b7, _0x46e0c8)[_0x14c9('0x2')](function (_0x5962e6) {
                    if (_0x5962e6[_0x14c9('0x9')][_0x14c9('0xc')][_0x14c9('0x9')]) {
                        _0x502a02(_0x4241ab[_0x14c9('0xd')](_0x451c29, _0x5962e6[_0x14c9('0x9')]));
                    } else {
                        _0x1ab5eb(_0x14c9('0x20'));
                    }
                })[_0x14c9('0x6')](function (_0x5cc419) {
                    _0x1ab5eb({
                        'status': _0x14c9('0x7'),
                        'message': _0x5cc419,
                        'count': 0x0
                    });
                });
            });
        }
    };
});