/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Platform; });
/* harmony import */ var _updateManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _AuthManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _LoginManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _BannerAd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _RewardedVideoAd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);





class Platform {
    init() {
        wx.updateShareMenu({
            withShareTicket: true,
            success() { },
            fail() { }
        });
        wx.showShareMenu({
            withShareTicket: true,
            success() { },
            fail() { }
        });
    }
    getLaunchOptionsSync() {
        return wx.getLaunchOptionsSync();
    }
    login(params, cb) {
        _LoginManager__WEBPACK_IMPORTED_MODULE_2__["default"].login(params, cb);
    }
    auth(params) {
        _AuthManager__WEBPACK_IMPORTED_MODULE_1__["default"].auth(params);
    }
    isMiniGame() {
        return true;
    }
    getUserInfo(p) {
        wx.getUserInfo(p);
    }
    /**生命周期 */
    onShow(cb) {
        /**@warn 这里可能需要针对第一次进行过滤 */
        wx.onShow(cb);
    }
    offShow() {
        wx.offShow();
    }
    onHide(cb) {
        wx.onHide(cb);
    }
    offHide() {
        wx.offHide();
    }
    /**分享 */
    onShareAppMessage(listener) {
      wx.aldOnShareAppMessage(listener);
    }
    shareAppMessage(params) {
      wx.aldShareAppMessage(params);
    }
    getShareInfo(params) {
        wx.getShareInfo(params);
    }
    setKeepScreenOn() {
        wx.setKeepScreenOn({
            keepScreenOn: true,
            success() { },
            fail() { }
        });
    }
    getSystemInfoSync() {
        return wx.getSystemInfoSync();
    }
    getUpdateManager() {
        return new _updateManager__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    /**小程序跳转 */
    navigateToMiniProgram(params) {
        wx.navigateToMiniProgram(params);
    }
    exit(params) {
        wx.exitMiniProgram({});
    }
    /**声音 */
    onAudioInterruptionBegin(listener) {
        wx.onAudioInterruptionBegin(listener);
    }
    onAudioInterruptionEnd(listener) {
        wx.onAudioInterruptionEnd(listener);
    }
    /**network */
    onNetworkStatusChange(listener) {
        wx.onNetworkStatusChange(listener);
    }
    offNetworkStatusChange(listener) {
        wx.offNetworkStatusChange(listener);
    }
    getNetworkType(params) {
        wx.getNetworkType(params);
    }
    /**支付 */
    requestPayment(params) {
        wx.requestMidasPayment({
            mode: "game",
            env: 0,
            offerId: params.offerId,
            currencyType: "CNY",
            buyQuantity: params.buyQuantity,
            platform: 'android',
            zoneId: "1",
            success: function (res) {
                console.log(`PAY | suc | ${JSON.stringify(res)}`);
                params.success && params.success();
            },
            fail: function (res) {
                console.log(`PAY | fail | ${JSON.stringify(res)}`);
                var msg = res.errMsg;
                var code = res.errCode;
                switch (code) {
                    case -1:
                        break;
                    case -2:
                        break;
                    case -15001:
                        break;
                    case -15002:
                        break;
                    case -15003:
                        break;
                    case -15004:
                        break;
                    case -15005:
                        break;
                    case -15006:
                        break;
                    case -15007:
                        break;
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                    case 6:
                        break;
                    case 1000:
                        break;
                    case 1003:
                        break;
                }
                params.fail && params.fail(code);
            }
        });
    }
    /**Toast */
    showLoading(params) {
        wx.showLoading(params);
    }
    hideLoading(params) {
        wx.hideLoading();
    }
    showToast(params) {
        wx.showToast(params);
    }
    hideToast(params) {
        wx.hideToast();
    }
    showModal(params) {
        wx.showModal(params);
    }
    showActionSheet(params) {
        wx.showActionSheet(params);
    }
    /**广告 */
    createBannerAd(params) {
        return new _BannerAd__WEBPACK_IMPORTED_MODULE_3__["default"](params);
    }
    createRewardedVideoAd(params) {
        return new _RewardedVideoAd__WEBPACK_IMPORTED_MODULE_4__["default"](params);
    }
    /**微信特有方法 */
    setUserCloudStorage(params) {
        wx.setUserCloudStorage(params);
    }
    openCustomerServiceConversation() {
        wx.openCustomerServiceConversation();
    }
    previewImage(params) {
        wx.previewImage(params);
    }
    setClipboardData(params) {
        wx.setClipboardData(params);
    }
}
window['py'] = new Platform();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateManager; });
/* harmony import */ var _APIEnable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

class UpdateManager {
    constructor() {
        if (!Object(_APIEnable__WEBPACK_IMPORTED_MODULE_0__["default"])('getUpdateManager'))
            return this;
        let update = wx.getUpdateManager();
        this.updateManager = update;
    }
    onCheckForUpdate(cb) {
        if (!this.updateManager)
            return;
        this.updateManager.onCheckForUpdate(cb);
    }
    onUpdateReady(cb) {
        if (!this.updateManager)
            return;
        this.updateManager.onUpdateReady(cb);
    }
    onUpdateFailed(cb) {
        if (!this.updateManager)
            return;
        this.updateManager.onUpdateFailed(cb);
    }
    applyUpdate() {
        if (!this.updateManager)
            return;
        this.updateManager.applyUpdate();
    }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function APIEnable(method) {
    if (typeof wx == 'undefined') {
        return false;
    }
    if (method)
        return wx[method];
    return true;
}
/* harmony default export */ __webpack_exports__["default"] = (APIEnable);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthManager; });
class AuthManager {
    /**
     *
     * @param scope 想要获取授权的标识，可以使用上面已经列举出来的权限
     * @param suc   授权成功回调
     * @param fail  授权失败回调
     * @param alert 当需要打开用户设置界面时，用于可以修改弹窗内容，方便用户确认操作
     */
    static auth(params) {
        let okHandler = function () {
            wx.openSetting({
                success(res) {
                    let result = res.authSetting[params.scope];
                    if (result) {
                        params.success && params.success();
                    }
                    else {
                        params.alert && params.alert(okHandler);
                    }
                },
                fail() {
                    params.fail && params.fail();
                }
            });
        };
        wx.getSetting({
            success(res) {
                let result = res.authSetting[params.scope];
                if (result == undefined) { //没有获取过权限
                    /**如果请求用户权限失败，则直接return */
                    if (params.scope == AuthManager.scope.userInfo) {
                        params.fail && params.fail();
                        return;
                    }
                    wx.authorize({
                        scope: params.scope,
                        success(res) {
                            params.success && params.success();
                        },
                        fail() {
                            params.alert && params.alert(okHandler);
                        },
                        complete() { }
                    });
                }
                else if (!result) { //当前权限为否
                    params.alert && params.alert(okHandler);
                }
                else {
                    params.success && params.success();
                }
            }
        });
    }
}
AuthManager.scope = {
    userInfo: "scope.userInfo",
    userLocation: "scope.userLocation",
    address: "scope.address",
    invoiceTitle: "scope.invoiceTitle",
    werun: "scope.werun",
    record: "scope.record",
    writePhotosAlbum: "scope.writePhotosAlbum",
    camera: "scope.camera"
};


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginManager; });
/* harmony import */ var _AuthManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _AuthUserInfoDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);


class LoginManager {
    static login(params, cb) {
        //获取微信code，这是必须操作
        this.getCode(res => {
            let code = res.code;
            //获取授权信息，必须经过用户授权才可以获取到用户个人信息
            this.auth({
                success() {
                    //获取用户信息，用于显示头像和昵称
                    if (params.requestUserInfo) {
                        LoginManager.getUserInfo(userInfo => {
                            cb({
                                type: 5,
                                platform: 5,
                                js_code: code,
                                device_info: wx.getSystemInfoSync(),
                                encrypted_data: userInfo.encryptedData,
                                iv: userInfo.iv,
                            });
                        });
                    }
                    else {
                        cb({
                            type: 5,
                            platform: 5,
                            js_code: code,
                            device_info: wx.getSystemInfoSync(),
                        });
                    }
                },
                fail() {
                    Laya.Dialog.manager = null;
                    UIConfig.closeDialogOnSide = false;
                    let alert = new _AuthUserInfoDialog__WEBPACK_IMPORTED_MODULE_1__["default"]();
                    alert.onReceiveUserInfo = function (userInfo) {
                        cb({
                            type: 5,
                            platform: 5,
                            js_code: code,
                            device_info: wx.getSystemInfoSync(),
                            encrypted_data: userInfo.encryptedData,
                            iv: userInfo.iv,
                        });
                    };
                    alert.popup(true, false);
                }
            });
        });
    }
    /**
    * 调用微信登录
    */
    static getCode(cb) {
        wx.login({
            success(res) {
                cb && cb(res);
            },
            fail() { }
        });
    }
    static auth(p) {
        let _this = this;
        _AuthManager__WEBPACK_IMPORTED_MODULE_0__["default"].auth({
            scope: _AuthManager__WEBPACK_IMPORTED_MODULE_0__["default"].scope.userInfo,
            success() {
                p.success && p.success();
            },
            fail() {
                // _this.showModal('授权失败', '请重新授权')
                p.fail && p.fail();
            },
            alert(alertCb) {
                _this.showModal('提示', '需要您的授权才能正常使用', '去设置', () => {
                    alertCb();
                });
            }
        });
    }
    static checkSession(o) {
        wx.checkSession({
            success() {
                o.success && o.success();
            },
            fail() {
                o.fail && o.fail();
            }
        });
    }
    /**调用微信获取用户信息接口 */
    static getUserInfo(cb) {
        wx.getUserInfo({
            withCredentials: true,
            lang: "zh_CN",
            success(res) {
                cb && cb(res);
            },
            fail() { }
        });
    }
    static getUserInfoWithoutCredentials(cb) {
        wx.getUserInfo({
            lang: "zh_CN",
            withCredentials: false,
            success(res) {
                cb && cb(res);
            },
            fail() { }
        });
    }
    static showModal(title = '提示', content = '', confirmText = '知道了', confirmCallback = null, cancelText = "", cancelCallback = null) {
        var params = {
            title: title,
            content: content,
            showCancel: cancelText ? true : false,
            cancelColor: '#000000',
            confirmColor: '#3cc51f',
            cancelText: cancelText,
            confirmText: confirmText,
            success: function (res) {
                if (res.confirm) {
                    confirmCallback && confirmCallback();
                }
                if (res.cancel) {
                    cancelCallback && cancelCallback();
                }
            },
            fail() { }
        };
        wx.showModal(params);
    }
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthUserInfoDialog; });
class AuthUserInfoDialog extends Laya.Dialog {
    constructor() {
        super();
        this.size(636, 508);
        let image = new Laya.Image('local/auth/bg.png');
        image.x=30;
        image.y=50;
        this.addChild(image);
    }
    onOpened() {
        let frame = {
            x: 26,
            y: 400,
            width: 588,
            height: 85
        };
        let pos = this.localToGlobal(new Laya.Point(frame.x, frame.y));
        this.showUserInfoButton({
            x: pos.x,
            y: pos.y,
            width: frame.width,
            height: frame.height
        }, (userInfo) => {
            this.onReceiveUserInfo && this.onReceiveUserInfo(userInfo);
            this.close();
        });
    }
    showUserInfoButton(rect, cb) {
        var stage = Laya.stage;
        var screenWidth = Laya.Browser.width;
        var screenHeight = Laya.Browser.height;
        var width = stage.designWidth;
        var height = stage.designHeight;
        var scaleX = screenWidth / width;
        let scale = scaleX / Laya.Browser.pixelRatio;
        let style = {
            top:0,
            left: 0,
            width: 750,
            height: 1334,
            backgroundColor: '#ffffff',
            borderColor: '#ffffff',
            borderRadius: 10,
            borderWidth: 0,
            textAlign: 'center',
            fontSize: 24,
            lineHeight: 10
        };
        let button = wx.createUserInfoButton({
            type: 'image',
            image: 'local/auth/button.png',
            style: style,
            withCredentials: true,
            lang: 'zh_CN'
        });
        button.onTap((res) => {
            if (res.userInfo) {
                cb(res);
                button.destroy();
            }
        });
    }
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BannerAd; });
/* harmony import */ var _APIEnable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

class BannerAd {
    constructor(params) {
        if (!Object(_APIEnable__WEBPACK_IMPORTED_MODULE_0__["default"])('createBannerAd'))
            return this;
        params.style.top = params.style.top || params.style.y;
        params.style.left = params.style.left || params.style.x;
        let bannerAd = wx.createBannerAd(params);
        this.bannerAd = bannerAd;
    }
    /**显示 banner 广告 */
    show() {
        if (!this.bannerAd) {
            console.error('当前版本不支持广告');
            return;
        }
        return this.bannerAd.show();
    }
    /**隐藏 banner 广告 */
    hide() {
        if (!this.bannerAd) {
            console.error('当前版本不支持广告');
            return;
        }
        return this.bannerAd.hide();
    }
    /**销毁 banner 广告 */
    destroy() {
        if (!this.bannerAd)
            return;
        this.bannerAd.destroy();
    }
    /**监听 banner 广告尺寸变化事件 */
    onResize(listener) {
        if (!this.bannerAd)
            return;
        this.bannerAd.onResize(listener);
    }
    /**取消监听 banner 广告尺寸变化事件 */
    offResize(listener) {
        if (!this.bannerAd)
            return;
        this.bannerAd.offResize(listener);
    }
    /**监听 banner 广告加载事件 */
    onLoad(listener) {
        if (!this.bannerAd)
            return;
        this.bannerAd.onLoad(listener);
    }
    /**取消监听 banner 广告加载事件 */
    offLoad(listener) {
        if (!this.bannerAd)
            return;
        this.bannerAd.offLoad(listener);
    }
    /**监听 banner 广告错误事件 */
    onError(listener) {
        if (!this.bannerAd)
            return;
        this.bannerAd.onError(listener);
    }
    /**取消监听 banner 广告错误事件 */
    offError(listener) {
        if (!this.bannerAd)
            return;
        this.bannerAd.offError(listener);
    }
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RewardedVideoAd; });
/* harmony import */ var _APIEnable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

class RewardedVideoAd {
    constructor(params) {
        if (!Object(_APIEnable__WEBPACK_IMPORTED_MODULE_0__["default"])('createRewardedVideoAd'))
            return this;
        let videoAd = wx.createRewardedVideoAd(params);
        this.videoAd = videoAd;
    }
    /**隐藏激励视频广告 */
    load() {
        if (!this.videoAd) {
            console.error('当前版本不支持广告');
            return;
        }
        return this.videoAd.load();
    }
    /**显示激励视频广告。激励视频广告将从屏幕下方推入 */
    show() {
        if (!this.videoAd) {
            console.error('当前版本不支持广告');
            return;
        }
        return this.videoAd.show();
    }
    /**监听激励视频广告加载事件 */
    onLoad(listener) {
        if (!this.videoAd)
            return;
        this.videoAd.onLoad(listener);
    }
    /**取消监听激励视频广告加载事件 */
    offLoad(listener) {
        if (!this.videoAd)
            return;
        this.videoAd.offLoad(listener);
    }
    /**监听激励视频错误事件 */
    onError(listener) {
        if (!this.videoAd)
            return;
        this.videoAd.onError(listener);
    }
    /**取消监听激励视频错误事件 */
    offError(listener) {
        if (!this.videoAd)
            return;
        this.videoAd.offError(listener);
    }
    /**监听用户点击 关闭广告 按钮的事件 */
    onClose(listener) {
        if (!this.videoAd)
            return;
        this.videoAd.onClose(listener);
    }
    /**取消监听用户点击 关闭广告 按钮的事件 */
    offClose(listener) {
        if (!this.videoAd)
            return;
        this.videoAd.offClose(listener);
    }
}


/***/ })
/******/ ]);