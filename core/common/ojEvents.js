var _0x3c82 = [
    'ojet',
    'jquery',
    'all',
    'then',
    'log',
    'initializeFinish',
    'Finish\x20loading\x20Services',
    'catch',
    'Error',
    'START\x20UPDATING\x20COMBO',
    'data',
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
    'Update\x20Combo\x20',
    'Error\x20Updating\x20Combo\x20',
    'no\x20results\x20returned',
    'START\x20UPDATING\x20TABLE',
    'removeAll',
    'disabled',
    'callService',
    'dataSource',
    'Success',
    'Update\x20Table\x20(',
    '\x20items\x20loaded)',
    'No\x20results\x20returned\x20(please\x20check\x20response\x20message)',
    'GETTING\x20SERVICE\x20DATA',
    'Error\x20getting\x20data:\x20no\x20data\x20attribute\x20present\x20in\x20response'
];
var _0xa087 = function (_0x400567, _0x5ab017) {
    _0x400567 = _0x400567 - 0x0;
    var _0x1d5245 = _0x3c82[_0x400567];
    return _0x1d5245;
};
define([
    _0xa087('0x0'),
    _0xa087('0x1')
], function (_0x291ebd, _0x2d0e6a) {
    return {
        'loadServices': function (_0x6e77c2, _0x230109, _0x4c9db8, _0x439300) {
            return new Promise((_0x1a9870, _0x16d43f) => {
                Promise[_0xa087('0x2')](_0x6e77c2)[_0xa087('0x3')](function (_0x3db635) {
                    console[_0xa087('0x4')](_0x3db635);
                    _0x230109(!![]);
                    _0x291ebd[_0xa087('0x5')](_0x439300);
                    _0x1a9870(_0xa087('0x6'));
                })[_0xa087('0x7')](function (_0x1dcb08) {
                    console['log'](_0x1dcb08);
                    _0x230109(!![]);
                    _0x4c9db8(!![]);
                    _0x291ebd[_0xa087('0x5')]();
                    _0x16d43f({
                        'status': _0xa087('0x8'),
                        'message': _0x1dcb08,
                        'count': 0x0
                    });
                });
            });
        },
        'updateCombo': function (_0x460981, _0x22320e, _0x49baf4, _0x312b72, _0x481979, _0x328583, _0x3cdd53, _0x513741, _0x1b9e94, _0x3fb675) {
            return new Promise((_0x21370f, _0x1c3ee5) => {
                console[_0xa087('0x4')](_0xa087('0x9'));
                let _0x229887 = _0x3cdd53();
                _0x3cdd53(0x0);
                _0x328583[_0xa087('0xa')]['removeAll']();
                _0x291ebd['callService'](_0x22320e, _0x49baf4, _0x312b72, _0x481979)[_0xa087('0x3')](function (_0x118a74) {
                    let _0xce64f3 = 0x0;
                    if (_0x118a74['data'][_0xa087('0xb')]['data']) {
                        const _0x44fb19 = _0x291ebd[_0xa087('0xc')](_0x513741, _0x118a74[_0xa087('0xa')]);
                        if (_0x44fb19 && _0x44fb19[_0xa087('0xd')] > 0x0) {
                            _0xce64f3 = _0x44fb19[_0xa087('0xd')];
                            let _0x147230 = ![];
                            let _0x58a612;
                            _0x2d0e6a[_0xa087('0xe')](_0x44fb19, function (_0x42d7e4) {
                                let _0x45b9d6 = _0x44fb19[_0x42d7e4][_0xa087('0xf')];
                                _0x44fb19[_0x42d7e4][_0xa087('0xf')] = eval(_0xa087('0x10') + _0x42d7e4 + '].' + _0x1b9e94[_0xa087('0xf')], _0x44fb19);
                                if (_0x42d7e4 == 0x0) {
                                    if (_0x1b9e94[_0xa087('0x11')] == _0xa087('0xf')) {
                                        _0x44fb19[_0x42d7e4][_0xa087('0x11')] = _0x1b9e94[_0xa087('0x12')] + _0x45b9d6;
                                    } else {
                                        _0x44fb19[_0x42d7e4][_0xa087('0x11')] = _0x1b9e94[_0xa087('0x12')] + eval(_0xa087('0x10') + _0x42d7e4 + '].' + _0x1b9e94[_0xa087('0x11')], _0x44fb19);
                                    }
                                    _0x58a612 = _0x44fb19[_0x42d7e4][_0xa087('0xf')];
                                } else {
                                    if (_0x1b9e94[_0xa087('0x11')] == _0xa087('0xf')) {
                                        _0x44fb19[_0x42d7e4][_0xa087('0x11')] = _0x45b9d6;
                                    } else {
                                        _0x44fb19[_0x42d7e4][_0xa087('0x11')] = eval(_0xa087('0x10') + _0x42d7e4 + '].' + _0x1b9e94[_0xa087('0x11')], _0x44fb19);
                                    }
                                }
                                _0x328583[_0xa087('0xa')][_0xa087('0x13')](_0x44fb19[_0x42d7e4]);
                                if (_0x44fb19[_0x42d7e4][_0xa087('0x14')] == _0x229887) {
                                    _0x147230 = !![];
                                }
                            });
                            if (_0x147230 && !_0x3fb675) {
                                _0x3cdd53(_0x229887);
                            } else {
                                _0x3cdd53(_0x58a612);
                            }
                            if (_0x460981) {
                                _0x460981[_0xa087('0x15')]();
                            }
                            _0x21370f(_0xa087('0x16') + _0x1b9e94[_0xa087('0x12')] + _0xce64f3 + '\x20items\x20loaded');
                        } else {
                            _0x1c3ee5(_0xa087('0x17') + _0x1b9e94[_0xa087('0x12')] + 'no\x20results\x20returned');
                        }
                    } else {
                        _0x1c3ee5(_0xa087('0x17') + _0x1b9e94[_0xa087('0x12')] + _0xa087('0x18'));
                    }
                })[_0xa087('0x7')](function (_0x317da4) {
                    _0x1c3ee5({
                        'status': _0xa087('0x8'),
                        'message': _0x317da4,
                        'count': 0x0
                    });
                });
            });
        },
        'updateTable': function (_0x1824b7, _0x407cb4, _0x436104, _0x7f2377, _0x395404, _0x3ba6cd, _0x26ad93, _0x537898, _0x4fedac) {
            return new Promise((_0x4fb5e0, _0xc93a04) => {
                console[_0xa087('0x4')](_0xa087('0x19'));
                if (_0x4fedac) {
                    _0x4fedac({});
                }
                _0x26ad93['dataSource'][_0xa087('0xa')][_0xa087('0x1a')]();
                if (_0x1824b7) {
                    _0x1824b7[_0xa087('0x1b')] = !![];
                }
                _0x291ebd[_0xa087('0x1c')](_0x436104, _0x7f2377, _0x395404, _0x3ba6cd)[_0xa087('0x3')](function (_0x20d946) {
                    let _0x2a0e8b = 0x0;
                    if (_0x20d946[_0xa087('0xa')][_0xa087('0xb')][_0xa087('0xa')]) {
                        const _0xfc3595 = _0x291ebd[_0xa087('0xc')](_0x537898, _0x20d946[_0xa087('0xa')]);
                        if (_0xfc3595) {
                            _0x2a0e8b = _0xfc3595[_0xa087('0xd')];
                            _0x2d0e6a['each'](_0xfc3595, function (_0x221624) {
                                if (_0x26ad93['data']) {
                                    _0x26ad93[_0xa087('0xa')]['push'](_0xfc3595[_0x221624]);
                                } else {
                                    _0x26ad93[_0xa087('0x1d')][_0xa087('0xa')][_0xa087('0x13')](_0xfc3595[_0x221624]);
                                }
                            });
                            if (_0x407cb4) {
                                _0x407cb4[_0xa087('0x15')]();
                            }
                            if (_0x1824b7) {
                                _0x1824b7['disabled'] = ![];
                            }
                            _0x4fb5e0({
                                'status': _0xa087('0x1e'),
                                'message': _0xa087('0x1f') + _0x2a0e8b + '\x20items\x20loaded)',
                                'count': _0x2a0e8b
                            });
                        } else {
                            if (_0x407cb4) {
                                _0x407cb4[_0xa087('0x15')]();
                            }
                            if (_0x1824b7) {
                                _0x1824b7[_0xa087('0x1b')] = ![];
                            }
                            _0x4fb5e0({
                                'status': _0xa087('0x1e'),
                                'message': _0xa087('0x1f') + _0x2a0e8b + _0xa087('0x20'),
                                'count': _0x2a0e8b
                            });
                        }
                    } else {
                        if (_0x1824b7) {
                            _0x1824b7[_0xa087('0x1b')] = ![];
                        }
                        _0xc93a04({
                            'status': _0xa087('0x8'),
                            'message': _0xa087('0x21'),
                            'count': 0x0
                        });
                    }
                })[_0xa087('0x7')](function (_0x1da9c9) {
                    if (_0x1824b7) {
                        _0x1824b7[_0xa087('0x1b')] = ![];
                    }
                    _0xc93a04({
                        'status': _0xa087('0x8'),
                        'message': _0x1da9c9,
                        'count': 0x0
                    });
                });
            });
        },
        'getServiceData': function (_0xfb2c5e, _0x9de708, _0x188cbd, _0x10202c, _0x3c8d7d) {
            return new Promise((_0x56943c, _0x2b5352) => {
                console[_0xa087('0x4')](_0xa087('0x22'));
                _0x291ebd[_0xa087('0x1c')](_0xfb2c5e, _0x9de708, _0x188cbd, _0x10202c)['then'](function (_0x111762) {
                    if (_0x111762['data']['message'][_0xa087('0xa')]) {
                        _0x56943c(_0x291ebd[_0xa087('0xc')](_0x3c8d7d, _0x111762[_0xa087('0xa')]));
                    } else {
                        _0x2b5352(_0xa087('0x23'));
                    }
                })[_0xa087('0x7')](function (_0x29d11a) {
                    _0x2b5352({
                        'status': 'Error',
                        'message': _0x29d11a,
                        'count': 0x0
                    });
                });
            });
        }
    };
});