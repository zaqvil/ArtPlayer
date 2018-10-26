(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.artplayer = {})));
}(this, (function (exports) { 'use strict';

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var setPrototypeOf = createCommonjsModule(function (module) {
	function _setPrototypeOf(o, p) {
	  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	module.exports = _setPrototypeOf;
	});

	var construct = createCommonjsModule(function (module) {
	function isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;

	  try {
	    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function _construct(Parent, args, Class) {
	  if (isNativeReflectConstruct()) {
	    module.exports = _construct = Reflect.construct;
	  } else {
	    module.exports = _construct = function _construct(Parent, args, Class) {
	      var a = [null];
	      a.push.apply(a, args);
	      var Constructor = Function.bind.apply(Parent, a);
	      var instance = new Constructor();
	      if (Class) setPrototypeOf(instance, Class.prototype);
	      return instance;
	    };
	  }

	  return _construct.apply(null, arguments);
	}

	module.exports = _construct;
	});

	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  }
	}

	var arrayWithoutHoles = _arrayWithoutHoles;

	function _iterableToArray(iter) {
	  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
	}

	var iterableToArray = _iterableToArray;

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance");
	}

	var nonIterableSpread = _nonIterableSpread;

	function _toConsumableArray(arr) {
	  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
	}

	var toConsumableArray = _toConsumableArray;

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var classCallCheck = _classCallCheck;

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	var createClass = _createClass;

	var _typeof_1 = createCommonjsModule(function (module) {
	function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

	function _typeof(obj) {
	  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
	    module.exports = _typeof = function _typeof(obj) {
	      return _typeof2(obj);
	    };
	  } else {
	    module.exports = _typeof = function _typeof(obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
	    };
	  }

	  return _typeof(obj);
	}

	module.exports = _typeof;
	});

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	var assertThisInitialized = _assertThisInitialized;

	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
	    return call;
	  }

	  return assertThisInitialized(self);
	}

	var possibleConstructorReturn = _possibleConstructorReturn;

	var getPrototypeOf = createCommonjsModule(function (module) {
	function _getPrototypeOf(o) {
	  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	module.exports = _getPrototypeOf;
	});

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) setPrototypeOf(subClass, superClass);
	}

	var inherits = _inherits;

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	var defineProperty = _defineProperty;

	function _objectSpread(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};
	    var ownKeys = Object.keys(source);

	    if (typeof Object.getOwnPropertySymbols === 'function') {
	      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
	      }));
	    }

	    ownKeys.forEach(function (key) {
	      defineProperty(target, key, source[key]);
	    });
	  }

	  return target;
	}

	var objectSpread = _objectSpread;

	function _isNativeFunction(fn) {
	  return Function.toString.call(fn).indexOf("[native code]") !== -1;
	}

	var isNativeFunction = _isNativeFunction;

	var wrapNativeSuper = createCommonjsModule(function (module) {
	function _wrapNativeSuper(Class) {
	  var _cache = typeof Map === "function" ? new Map() : undefined;

	  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
	    if (Class === null || !isNativeFunction(Class)) return Class;

	    if (typeof Class !== "function") {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    if (typeof _cache !== "undefined") {
	      if (_cache.has(Class)) return _cache.get(Class);

	      _cache.set(Class, Wrapper);
	    }

	    function Wrapper() {
	      return construct(Class, arguments, getPrototypeOf(this).constructor);
	    }

	    Wrapper.prototype = Object.create(Class.prototype, {
	      constructor: {
	        value: Wrapper,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    return setPrototypeOf(Wrapper, Class);
	  };

	  return _wrapNativeSuper(Class);
	}

	module.exports = _wrapNativeSuper;
	});

	var ArtPlayerError =
	/*#__PURE__*/
	function (_Error) {
	  inherits(ArtPlayerError, _Error);

	  function ArtPlayerError(message, context) {
	    var _this;

	    classCallCheck(this, ArtPlayerError);

	    _this = possibleConstructorReturn(this, getPrototypeOf(ArtPlayerError).call(this, message));

	    if (typeof Error.captureStackTrace === 'function') {
	      Error.captureStackTrace(assertThisInitialized(assertThisInitialized(_this)), context || _this.constructor);
	    }

	    _this.name = 'ArtPlayerError';
	    return _this;
	  }

	  return ArtPlayerError;
	}(wrapNativeSuper(Error));
	function errorHandle(condition, msg) {
	  var isFun = typeof condition === 'function';

	  if (isFun ? !isFun() : !condition) {
	    throw new ArtPlayerError(msg);
	  }
	}
	function clamp(num, a, b) {
	  return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
	}
	function getExt(url) {
	  if (url.includes('?')) {
	    return getExt(url.split('?')[0]);
	  }

	  if (url.includes('#')) {
	    return getExt(url.split('#')[0]);
	  }

	  return url.trim().toLowerCase().split('.').pop();
	}
	function append(parent, child) {
	  if (child instanceof Element) {
	    parent.appendChild(child);
	  } else {
	    parent.insertAdjacentHTML('beforeend', child);
	  }

	  return parent.lastElementChild;
	}
	function setStyle(element, styles) {
	  Object.keys(styles).forEach(function (key) {
	    element.style[key] = styles[key];
	  });
	  return element;
	}
	function secondToTime(second) {
	  var add0 = function add0(num) {
	    return num < 10 ? "0".concat(num) : String(num);
	  };

	  var hour = Math.floor(second / 3600);
	  var min = Math.floor((second - hour * 3600) / 60);
	  var sec = Math.floor(second - hour * 3600 - min * 60);
	  return (hour > 0 ? [hour, min, sec] : [min, sec]).map(add0).join(':');
	}
	function deepMerge() {
	  var isObject = function isObject(value) {
	    return value !== null && _typeof_1(value) === 'object';
	  };

	  var returnValue = {};

	  for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
	    sources[_key] = arguments[_key];
	  }

	  for (var _i = 0; _i < sources.length; _i++) {
	    var source = sources[_i];

	    if (Array.isArray(source)) {
	      if (!Array.isArray(returnValue)) {
	        returnValue = [];
	      }

	      returnValue = toConsumableArray(returnValue).concat(toConsumableArray(source));
	    } else if (isObject(source)) {
	      if (source instanceof Element) {
	        return source;
	      }

	      for (var key in source) {
	        if (source.hasOwnProperty(key)) {
	          var value = source[key];

	          if (isObject(value) && key in returnValue) {
	            value = deepMerge(returnValue[key], value);
	          }

	          returnValue = objectSpread({}, returnValue, defineProperty({}, key, value));
	        }
	      }
	    }
	  }

	  return returnValue;
	}
	function getStorage(key) {
	  var storage = JSON.parse(localStorage.getItem('artplayer_settings')) || {};
	  return key ? storage[key] : storage;
	}
	function setStorage(key, value) {
	  var storage = Object.assign({}, getStorage(), defineProperty({}, key, value));
	  localStorage.setItem('artplayer_settings', JSON.stringify(storage));
	}
	function getType(val) {
	  var toString = Object.prototype.toString;
	  var type = toString.call(val).slice(8, -1).toLowerCase().replace(/\s/g, '');
	  return type;
	}
	function tooltip(target, msg) {
	  var pos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'up';
	  target.setAttribute('data-balloon', msg);
	  target.setAttribute('data-balloon-pos', pos);
	}
	function sleep() {
	  var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	  return new Promise(function (resolve) {
	    return setTimeout(resolve, ms);
	  });
	}

	var validElement = function validElement(key, value, type, path) {
	  var handle = false;
	  var msg = "".concat(path.join('.'), ".").concat(key, " require 'string' or 'Element' type, but got '").concat(type, "'");

	  if (type === 'string') {
	    if (value.trim() === '') {
	      handle = false;
	      msg = "".concat(path.join('.'), ".").concat(key, " can not be empty'");
	    } else {
	      handle = true;
	    }
	  }

	  if (value instanceof Element) {
	    handle = true;
	  }

	  return {
	    handle: handle,
	    msg: msg
	  };
	};

	var scheme = {
	  container: {
	    validator: validElement
	  },
	  url: {
	    type: 'string',
	    required: true
	  },
	  poster: {
	    type: 'string'
	  },
	  volume: {
	    type: 'number'
	  },
	  thumbnails: {
	    type: 'object',
	    child: {
	      url: {
	        type: 'string'
	      },
	      number: {
	        type: 'number'
	      },
	      width: {
	        type: 'number'
	      },
	      height: {
	        type: 'number'
	      },
	      column: {
	        type: 'number'
	      }
	    }
	  },
	  screenshot: {
	    type: 'boolean'
	  },
	  autoplay: {
	    type: 'boolean'
	  },
	  loop: {
	    type: 'boolean'
	  },
	  type: {
	    type: 'string'
	  },
	  mimeCodec: {
	    type: 'string'
	  },
	  layers: {
	    type: 'array',
	    child: {
	      name: {
	        type: 'string'
	      },
	      index: {
	        type: 'number'
	      },
	      html: {
	        validator: validElement
	      },
	      style: {
	        type: 'object'
	      }
	    }
	  },
	  contextmenu: {
	    type: 'array',
	    child: {
	      name: {
	        type: 'string'
	      },
	      html: {
	        validator: validElement
	      },
	      click: {
	        type: 'function'
	      }
	    }
	  },
	  loading: {
	    type: 'string'
	  },
	  theme: {
	    type: 'string'
	  },
	  hotkey: {
	    type: 'boolean'
	  },
	  subtitle: {
	    type: 'object',
	    child: {
	      url: {
	        type: 'string'
	      },
	      style: {
	        type: 'object'
	      }
	    }
	  },
	  controls: {
	    type: 'array',
	    child: {
	      option: {
	        disable: {
	          type: 'boolean'
	        },
	        position: {
	          type: 'string'
	        },
	        index: {
	          type: 'number'
	        }
	      }
	    }
	  },
	  highlight: {
	    type: 'array',
	    child: {
	      time: {
	        type: 'number'
	      },
	      text: {
	        type: 'string'
	      }
	    }
	  },
	  moreVideoAttr: {
	    type: 'object'
	  },
	  lang: {
	    type: 'string'
	  }
	};

	function validOption(option) {
	  var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scheme;
	  var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['option'];
	  Object.keys(option).some(function (key) {
	    var paramObj = param[key];

	    if (!paramObj) {
	      return true;
	    }

	    var value = option[key];
	    var type = getType(value);
	    var paramType = paramObj.type;
	    var paramRequired = paramObj.required;
	    var paramChild = paramObj.child;
	    var paramValidator = paramObj.validator;

	    if (type === 'object' && paramChild) {
	      validOption(value, paramChild, path.concat(key));
	    }

	    if (type === 'array' && paramChild) {
	      value.forEach(function (item, index) {
	        validOption(item, paramChild, path.concat("".concat(key, "[").concat(index, "]")));
	      });
	    }

	    if (paramValidator) {
	      var result = paramValidator(key, value, type, path);
	      errorHandle(result.handle, result.msg);
	    } else {
	      errorHandle(!paramRequired || value, "'".concat(path.join('.'), ".").concat(key, "' is required"));
	      errorHandle(paramType === type, "'".concat(path.join('.'), ".").concat(key, "' require '").concat(paramType, "' type, but got '").concat(type, "'"));
	    }

	    return false;
	  });
	}

	var mimeCodec = {
	  mp4: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
	  webm: 'video/webm; codecs="vorbis, vp8"',
	  ts: 'video/mp2t; codecs="avc1.42E01E, mp4a.40.2"'
	};

	var mse = {
	  mediaSource: {
	    propertys: ['activeSourceBuffers', 'duration', 'readyState', 'sourceBuffers'],
	    methods: ['addSourceBuffer', 'endOfStream', 'removeSourceBuffer', 'clearLiveSeekableRange', 'setLiveSeekableRange'],
	    events: ['sourceclose', 'sourceended', 'sourceopen']
	  },
	  sourceBuffer: {
	    propertys: ['mode', 'updating', 'buffered', 'timestampOffset', 'audioTracks', 'videoTracks', 'textTracks', 'appendWindowStart', 'appendWindowEnd', 'trackDefaults'],
	    methods: ['appendBuffer', 'appendStream', 'abort', 'remove'],
	    events: ['abort', 'error', 'update', 'updateend', 'updatestart']
	  },
	  sourceBufferList: {
	    propertys: ['length'],
	    events: ['addsourcebuffer', 'removesourcebuffer']
	  }
	};

	var video = {
	  propertys: ['audioTracks', 'autoplay', 'buffered', 'controller', 'controls', 'crossOrigin', 'currentSrc', 'currentTime', 'defaultMuted', 'defaultPlaybackRate', 'duration', 'ended', 'error', 'loop', 'mediaGroup', 'muted', 'networkState', 'paused', 'playbackRate', 'played', 'preload', 'readyState', 'seekable', 'seeking', 'src', 'startDate', 'textTracks', 'videoTracks', 'volume'],
	  methods: ['addTextTrack', 'canPlayType', 'load', 'play', 'pause'],
	  events: ['abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'ended', 'error', 'loadeddata', 'loadedmetadata', 'loadstart', 'pause', 'play', 'playing', 'progress', 'ratechange', 'seeked', 'seeking', 'stalled', 'suspend', 'timeupdate', 'volumechange', 'waiting']
	};

	var config = {
	  mimeCodec: mimeCodec,
	  mse: mse,
	  video: video
	};

	function E () {
	  // Keep this empty so it's easier to inherit from
	  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
	}

	E.prototype = {
	  on: function (name, callback, ctx) {
	    var e = this.e || (this.e = {});

	    (e[name] || (e[name] = [])).push({
	      fn: callback,
	      ctx: ctx
	    });

	    return this;
	  },

	  once: function (name, callback, ctx) {
	    var self = this;
	    function listener () {
	      self.off(name, listener);
	      callback.apply(ctx, arguments);
	    }
	    listener._ = callback;
	    return this.on(name, listener, ctx);
	  },

	  emit: function (name) {
	    var data = [].slice.call(arguments, 1);
	    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
	    var i = 0;
	    var len = evtArr.length;

	    for (i; i < len; i++) {
	      evtArr[i].fn.apply(evtArr[i].ctx, data);
	    }

	    return this;
	  },

	  off: function (name, callback) {
	    var e = this.e || (this.e = {});
	    var evts = e[name];
	    var liveEvents = [];

	    if (evts && callback) {
	      for (var i = 0, len = evts.length; i < len; i++) {
	        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
	          liveEvents.push(evts[i]);
	      }
	    }

	    // Remove event from queue to prevent memory leak
	    // Suggested by https://github.com/lazd
	    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

	    (liveEvents.length)
	      ? e[name] = liveEvents
	      : delete e[name];

	    return this;
	  }
	};

	var tinyEmitter = E;

	var Template =
	/*#__PURE__*/
	function () {
	  function Template(art) {
	    classCallCheck(this, Template);

	    this.art = art;
	    this.init();
	  }

	  createClass(Template, [{
	    key: "init",
	    value: function init() {
	      var refs = this.art.refs;
	      refs.$container.innerHTML = "\n        <div class=\"artplayer-video-player\">\n          <video class=\"artplayer-video\"></video>\n          <div class=\"artplayer-subtitle\"></div>\n          <div class=\"artplayer-layers\"></div>\n          <div class=\"artplayer-mask\"></div>\n          <div class=\"artplayer-bottom\">\n            <div class=\"artplayer-progress\"></div>\n            <div class=\"artplayer-controls\">\n              <div class=\"artplayer-controls-left\"></div>\n              <div class=\"artplayer-controls-right\"></div>\n            </div>\n          </div>\n          <div class=\"artplayer-loading\"></div>\n          <div class=\"artplayer-notice\"></div>\n          <div class=\"artplayer-info\">\n            <div class=\"artplayer-info-panel\"></div>\n            <div class=\"artplayer-info-close\">[x]</div>\n          </div>\n        </div>\n      ";
	      refs.$player = refs.$container.querySelector('.artplayer-video-player');
	      refs.$video = refs.$container.querySelector('.artplayer-video');
	      refs.$subtitle = refs.$container.querySelector('.artplayer-subtitle');
	      refs.$bottom = refs.$container.querySelector('.artplayer-bottom');
	      refs.$progress = refs.$container.querySelector('.artplayer-progress');
	      refs.$controls = refs.$container.querySelector('.artplayer-controls');
	      refs.$controlsLeft = refs.$container.querySelector('.artplayer-controls-left');
	      refs.$controlsRight = refs.$container.querySelector('.artplayer-controls-right');
	      refs.$layers = refs.$container.querySelector('.artplayer-layers');
	      refs.$loading = refs.$container.querySelector('.artplayer-loading');
	      refs.$notice = refs.$container.querySelector('.artplayer-notice');
	      refs.$mask = refs.$container.querySelector('.artplayer-mask');
	      refs.$info = refs.$container.querySelector('.artplayer-info');
	      refs.$infoPanel = refs.$container.querySelector('.artplayer-info-panel');
	      refs.$infoClose = refs.$container.querySelector('.artplayer-info-close');
	    }
	  }]);

	  return Template;
	}();

	var i18nMap = {
	  'zh-cn': {
	    'About author': '关于作者',
	    'Video info': '视频统计信息',
	    'Close': '关闭',
	    'Video load failed': '视频加载失败',
	    'Volume': '音量',
	    'Play': '播放',
	    'Pause': '暂停',
	    'Rate': '速度',
	    'Mute': '静音',
	    'Reconnect': '重新连接',
	    'Hide subtitle': '隐藏字幕',
	    'Show subtitle': '显示字幕',
	    'Screenshot': '截图'
	  },
	  'zh-tw': {
	    'About author': '關於作者',
	    'Video info': '影片統計訊息',
	    'Close': '關閉',
	    'Video load failed': '影片載入失敗',
	    'Volume': '音量',
	    'Play': '播放',
	    'Pause': '暫停',
	    'Rate': '速度',
	    'Mute': '靜音',
	    'Reconnect': '重新連接',
	    'Hide subtitle': '隱藏字幕',
	    'Show subtitle': '顯示字幕',
	    'Screenshot': '截圖'
	  }
	};

	var I18n =
	/*#__PURE__*/
	function () {
	  function I18n(_ref) {
	    var option = _ref.option;

	    classCallCheck(this, I18n);

	    this.option = option;
	    this.init();
	  }

	  createClass(I18n, [{
	    key: "init",
	    value: function init() {
	      this.language = i18nMap[this.option.lang.toLowerCase()] || {};
	    }
	  }, {
	    key: "get",
	    value: function get(key) {
	      return this.language[key] || key;
	    }
	  }, {
	    key: "update",
	    value: function update(callback) {
	      i18nMap = callback(i18nMap);
	      this.init();
	    }
	  }]);

	  return I18n;
	}();

	var Player =
	/*#__PURE__*/
	function () {
	  function Player(art) {
	    classCallCheck(this, Player);

	    this.art = art;
	    this.init();
	    this.eventBind();
	    this.firstLoad = false;
	    this.reconnectTime = 0;
	    this.maxReconnectTime = 5;
	  }

	  createClass(Player, [{
	    key: "init",
	    value: function init() {
	      var _this$art = this.art,
	          option = _this$art.option,
	          $video = _this$art.refs.$video;
	      Object.keys(option.moreVideoAttr).forEach(function (key) {
	        var value = option.moreVideoAttr[key];
	        $video[key] = value;
	      });
	      $video.volume = clamp(option.volume, 0, 1);
	      $video.poster = option.poster;
	      $video.autoplay = option.autoplay; // TODO

	      $video.src = option.url;
	    }
	  }, {
	    key: "eventBind",
	    value: function eventBind() {
	      var _this = this;

	      var _this$art2 = this.art,
	          option = _this$art2.option,
	          proxy = _this$art2.events.proxy,
	          _this$art2$refs = _this$art2.refs,
	          $player = _this$art2$refs.$player,
	          $video = _this$art2$refs.$video,
	          i18n = _this$art2.i18n,
	          notice = _this$art2.notice;
	      config.video.events.forEach(function (eventName) {
	        proxy($video, eventName, function (event) {
	          _this.art.emit("video:".concat(event.type), event);
	        });
	      });
	      this.art.on('video:loadstart', function () {
	        _this.art.loading.show();
	      });
	      this.art.on('video:loadeddata', function () {
	        _this.art.loading.hide();
	      });
	      this.art.on('video:waiting', function () {
	        _this.art.loading.show();
	      });
	      this.art.on('video:seeking', function () {
	        _this.art.loading.show();
	      });
	      this.art.on('video:canplay', function () {
	        if (!_this.firstLoad) {
	          _this.firstLoad = true;

	          _this.art.emit('video:firstload');
	        }

	        _this.art.controls.show();

	        _this.art.mask.show();

	        _this.art.loading.hide();

	        if (option.autoplay) {
	          var promise = _this.play();

	          if (promise !== undefined) {
	            promise.then().catch(function (err) {
	              console.warn(err);
	            });
	          }
	        }
	      });
	      this.art.on('video:playing', function () {
	        _this.art.isPlaying = true;

	        _this.art.controls.hide();

	        _this.art.mask.hide();
	      });
	      this.art.on('video:pause', function () {
	        _this.art.isPlaying = false;

	        _this.art.controls.show();

	        _this.art.mask.show();
	      });
	      this.art.on('video:ended', function () {
	        _this.art.isPlaying = false;

	        _this.art.controls.show();

	        _this.art.mask.show();

	        if (option.loop) {
	          _this.seek(0);

	          _this.play();
	        }
	      });
	      this.art.on('video:error', function () {
	        if (_this.reconnectTime < _this.maxReconnectTime) {
	          sleep(100).then(function () {
	            _this.reconnectTime++;
	            $video.src = option.url;
	            notice.show("".concat(i18n.get('Reconnect'), ": ").concat(_this.reconnectTime));
	          });
	        } else {
	          _this.art.isError = true;
	          _this.art.isPlaying = false;

	          _this.art.loading.hide();

	          _this.art.controls.hide();

	          $player.classList.add('artplayer-error');
	          notice.show(i18n.get('Video load failed'), false);

	          _this.art.destroy();
	        }
	      });
	    }
	  }, {
	    key: "play",
	    value: function play() {
	      var _this$art3 = this.art,
	          $video = _this$art3.refs.$video,
	          i18n = _this$art3.i18n,
	          notice = _this$art3.notice;
	      var promise = $video.play();
	      notice.show(i18n.get('Play'));
	      this.art.emit('play', $video);
	      return promise;
	    }
	  }, {
	    key: "pause",
	    value: function pause() {
	      var _this$art4 = this.art,
	          $video = _this$art4.refs.$video,
	          i18n = _this$art4.i18n,
	          notice = _this$art4.notice;
	      $video.pause();
	      notice.show(i18n.get('Pause'));
	      this.art.emit('pause', $video);
	    }
	  }, {
	    key: "toggle",
	    value: function toggle() {
	      if (this.art.isPlaying) {
	        this.pause();
	      } else {
	        this.play();
	      }
	    }
	  }, {
	    key: "seek",
	    value: function seek(time) {
	      var _this$art5 = this.art,
	          $video = _this$art5.refs.$video,
	          notice = _this$art5.notice;
	      var newTime = Math.max(time, 0);

	      if ($video.duration) {
	        newTime = Math.min(newTime, $video.duration);
	      }

	      $video.currentTime = newTime;
	      notice.show("".concat(secondToTime(newTime), " / ").concat(secondToTime($video.duration)));
	      this.art.emit('seek', newTime);
	    }
	  }, {
	    key: "volume",
	    value: function volume(percentage) {
	      var _this$art6 = this.art,
	          $video = _this$art6.refs.$video,
	          i18n = _this$art6.i18n,
	          notice = _this$art6.notice;

	      if (percentage !== undefined) {
	        $video.volume = clamp(percentage, 0, 1);
	        notice.show("".concat(i18n.get('Volume'), ": ").concat(parseInt($video.volume * 100)));

	        if ($video.volume !== 0) {
	          setStorage('volume', $video.volume);
	        }

	        this.art.emit('volume', $video.volume);
	      }

	      return $video.volume || 0;
	    }
	  }, {
	    key: "currentTime",
	    value: function currentTime() {
	      return this.art.refs.$video.currentTime || 0;
	    }
	  }, {
	    key: "duration",
	    value: function duration() {
	      return this.art.refs.$video.duration || 0;
	    }
	  }, {
	    key: "playbackRate",
	    value: function playbackRate(rate) {
	      var _this$art7 = this.art,
	          $video = _this$art7.refs.$video,
	          i18n = _this$art7.i18n,
	          notice = _this$art7.notice;
	      var newRate = clamp(rate, 0.1, 10);
	      $video.playbackRate = newRate;
	      notice.show("".concat(i18n.get('Rate'), ": ").concat(newRate, "x"));
	      this.art.emit('playbackRate', newRate);
	    }
	  }]);

	  return Player;
	}();

	var Danmu =
	/*#__PURE__*/
	function () {
	  function Danmu(option) {
	    classCallCheck(this, Danmu);

	    this.option = option;
	  }

	  createClass(Danmu, [{
	    key: "apply",
	    value: function apply(art) {
	      this.art = art;
	    }
	  }]);

	  return Danmu;
	}();

	var Fullscreen =
	/*#__PURE__*/
	function () {
	  function Fullscreen(option) {
	    classCallCheck(this, Fullscreen);

	    this.option = option;
	  }

	  createClass(Fullscreen, [{
	    key: "apply",
	    value: function apply(art) {
	      this.art = art;
	    }
	  }]);

	  return Fullscreen;
	}();

	var Pip =
	/*#__PURE__*/
	function () {
	  function Pip(option) {
	    classCallCheck(this, Pip);

	    this.option = option;
	  }

	  createClass(Pip, [{
	    key: "apply",
	    value: function apply(art) {
	      this.art = art;
	    }
	  }]);

	  return Pip;
	}();

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	var arrayWithHoles = _arrayWithHoles;

	function _iterableToArrayLimit(arr, i) {
	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _e = undefined;

	  try {
	    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	var iterableToArrayLimit = _iterableToArrayLimit;

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance");
	}

	var nonIterableRest = _nonIterableRest;

	function _slicedToArray(arr, i) {
	  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
	}

	var slicedToArray = _slicedToArray;

	var loading = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50px\" height=\"50px\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-default\">\n  <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"/>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(0 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-1s\" repeatCount=\"indefinite\"/>\n  </rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(30 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.9166666666666666s\" repeatCount=\"indefinite\"/>\n  </rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(60 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.8333333333333334s\" repeatCount=\"indefinite\"/>\n  </rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(90 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.75s\" repeatCount=\"indefinite\"/></rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(120 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.6666666666666666s\" repeatCount=\"indefinite\"/>\n  </rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(150 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.5833333333333334s\" repeatCount=\"indefinite\"/>\n  </rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(180 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.5s\" repeatCount=\"indefinite\"/></rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(210 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.4166666666666667s\" repeatCount=\"indefinite\"/>\n  </rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(240 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.3333333333333333s\" repeatCount=\"indefinite\"/>\n  </rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(270 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.25s\" repeatCount=\"indefinite\"/></rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(300 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.16666666666666666s\" repeatCount=\"indefinite\"/>\n  </rect>\n  <rect x=\"47\" y=\"40\" width=\"6\" height=\"20\" rx=\"5\" ry=\"5\" fill=\"#ffffff\" transform=\"rotate(330 50 50) translate(0 -30)\">\n    <animate attributeName=\"opacity\" from=\"1\" to=\"0\" dur=\"1s\" begin=\"-0.08333333333333333s\" repeatCount=\"indefinite\"/>\n  </rect>\n</svg>";

	var playBig = "<svg style=\"width: 60px; height: 60px; filter: drop-shadow(0px 1px 1px black);\" version=\"1.1\" viewBox=\"0 0 24 24\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g id=\"info\"/>\n    <g id=\"icons\">\n        <path d=\"M20,2H4C1.8,2,0,3.8,0,6v12c0,2.2,1.8,4,4,4h16c2.2,0,4-1.8,4-4V6C24,3.8,22.2,2,20,2z M15.6,12.8L10.5,16   C9.9,16.5,9,16,9,15.2V8.8C9,8,9.9,7.5,10.5,8l5.1,3.2C16.3,11.5,16.3,12.5,15.6,12.8z\" id=\"video\"/>\n    </g>\n</svg>";

	var play = "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; height: 100%\" viewBox=\"0 0 22 22\">\n  <path d=\"M17.982 9.275L8.06 3.27A2.013 2.013 0 0 0 5 4.994v12.011a2.017 2.017 0 0 0 3.06 1.725l9.922-6.005a2.017 2.017 0 0 0 0-3.45z\"></path>\n</svg>";

	var pause = "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; height: 100%\" viewBox=\"0 0 22 22\">\n    <path d=\"M7 3a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2zM15 3a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2z\"></path>\n</svg>";

	var volume = "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; height: 100%\" viewBox=\"0 0 22 22\">\n    <path d=\"M10.188 4.65L6 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39V5.04a.498.498 0 0 0-.812-.39zM14.446 3.778a1 1 0 0 0-.862 1.804 6.002 6.002 0 0 1-.007 10.838 1 1 0 0 0 .86 1.806A8.001 8.001 0 0 0 19 11a8.001 8.001 0 0 0-4.554-7.222z\"></path><path d=\"M15 11a3.998 3.998 0 0 0-2-3.465v6.93A3.998 3.998 0 0 0 15 11z\"></path>\n</svg>";

	var volumeClose = "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; height: 100%\" viewBox=\"0 0 22 22\">\n    <path d=\"M15 11a3.998 3.998 0 0 0-2-3.465v2.636l1.865 1.865A4.02 4.02 0 0 0 15 11z\"></path>\n    <path d=\"M13.583 5.583A5.998 5.998 0 0 1 17 11a6 6 0 0 1-.585 2.587l1.477 1.477a8.001 8.001 0 0 0-3.446-11.286 1 1 0 0 0-.863 1.805zM18.778 18.778l-2.121-2.121-1.414-1.414-1.415-1.415L13 13l-2-2-3.889-3.889-3.889-3.889a.999.999 0 1 0-1.414 1.414L5.172 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39v-3.131l2.587 2.587-.01.005a1 1 0 0 0 .86 1.806c.215-.102.424-.214.627-.333l2.3 2.3a1.001 1.001 0 0 0 1.414-1.416zM11 5.04a.5.5 0 0 0-.813-.39L8.682 5.854 11 8.172V5.04z\"></path>\n</svg>";

	var subtitle = "<svg style=\"width: 100%; height: 100%\" viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M0 0h48v48H0z\" fill=\"none\"/>\n    <path d=\"M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM8 24h8v4H8v-4zm20 12H8v-4h20v4zm12 0h-8v-4h8v4zm0-8H20v-4h20v4z\"/>\n</svg>";

	var subtitleClose = "<svg style=\"width: 100%; height: 100%; opacity: .5\" viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"M0 0h48v48H0z\" fill=\"none\"/>\n    <path d=\"M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM8 24h8v4H8v-4zm20 12H8v-4h20v4zm12 0h-8v-4h8v4zm0-8H20v-4h20v4z\"/>\n</svg>";

	var screenshot = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\" style=\"width: 100%; height: 100%\">\n\t<g id=\"surface1\">\n\t\t<path d=\"M 19.402344 6 C 17.019531 6 14.96875 7.679688 14.5 10.011719 L 14.097656 12 L 9 12 C 6.238281 12 4 14.238281 4 17 L 4 38 C 4 40.761719 6.238281 43 9 43 L 41 43 C 43.761719 43 46 40.761719 46 38 L 46 17 C 46 14.238281 43.761719 12 41 12 L 35.902344 12 L 35.5 10.011719 C 35.03125 7.679688 32.980469 6 30.597656 6 Z M 25 17 C 30.519531 17 35 21.480469 35 27 C 35 32.519531 30.519531 37 25 37 C 19.480469 37 15 32.519531 15 27 C 15 21.480469 19.480469 17 25 17 Z M 25 19 C 20.589844 19 17 22.589844 17 27 C 17 31.410156 20.589844 35 25 35 C 29.410156 35 33 31.410156 33 27 C 33 22.589844 29.410156 19 25 19 Z \"/>\n\t</g>\n</svg>\n";

	var icons = {
	  loading: loading,
	  playBig: playBig,
	  play: play,
	  pause: pause,
	  volume: volume,
	  volumeClose: volumeClose,
	  subtitle: subtitle,
	  subtitleClose: subtitleClose,
	  screenshot: screenshot
	};

	function creatDomFromSvg(map) {
	  var result = {};
	  Object.keys(map).forEach(function (name) {
	    var tmp = document.createElement('div');
	    tmp.innerHTML = "<i class=\"art-icon art-icon-".concat(name, "\">").concat(map[name], "</i>");

	    var _tmp$childNodes = slicedToArray(tmp.childNodes, 1);

	    result[name] = _tmp$childNodes[0];
	  });
	  return result;
	}

	var icons$1 = creatDomFromSvg(icons);

	var PlayAndPause =
	/*#__PURE__*/
	function () {
	  function PlayAndPause(option) {
	    classCallCheck(this, PlayAndPause);

	    this.option = option;
	  }

	  createClass(PlayAndPause, [{
	    key: "apply",
	    value: function apply(art) {
	      var _this = this;

	      var proxy = art.events.proxy,
	          player = art.player,
	          i18n = art.i18n;
	      this.$play = append(this.option.$control, icons$1.play);
	      this.$pause = append(this.option.$control, icons$1.pause);
	      tooltip(this.$play, i18n.get('Play'));
	      tooltip(this.$pause, i18n.get('Pause'));
	      this.$pause.style.display = 'none';
	      proxy(this.$play, 'click', function () {
	        player.play();
	      });
	      proxy(this.$pause, 'click', function () {
	        player.pause();
	      });
	      art.on('video:playing', function () {
	        _this.$play.style.display = 'none';
	        _this.$pause.style.display = 'block';
	      });
	      art.on('video:pause', function () {
	        _this.$play.style.display = 'block';
	        _this.$pause.style.display = 'none';
	      });
	    }
	  }]);

	  return PlayAndPause;
	}();

	var Progress =
	/*#__PURE__*/
	function () {
	  function Progress(option) {
	    classCallCheck(this, Progress);

	    this.option = option;
	    this.isDroging = false;
	    this.getLoaded = this.getLoaded.bind(this);
	    this.getPlayed = this.getPlayed.bind(this);
	    this.set = this.set.bind(this);
	  }

	  createClass(Progress, [{
	    key: "apply",
	    value: function apply(art) {
	      this.art = art;
	      this.init();
	    }
	  }, {
	    key: "init",
	    value: function init() {
	      var _this = this;

	      var _this$art = this.art,
	          _this$art$option = _this$art.option,
	          highlight = _this$art$option.highlight,
	          theme = _this$art$option.theme,
	          proxy = _this$art.events.proxy,
	          $video = _this$art.refs.$video,
	          player = _this$art.player;
	      append(this.option.$control, "\n        <div class=\"art-control-progress-inner\">\n          <div class=\"art-progress-loaded\"></div>\n          <div class=\"art-progress-played\" style=\"background: ".concat(theme, "\"></div>\n          <div class=\"art-progress-highlight\"></div>\n          <div class=\"art-progress-indicator\" style=\"background: ").concat(theme, "\"></div>\n          <div class=\"art-progress-tip art-tip\"></div>\n        </div>\n      "));
	      this.$loaded = this.option.$control.querySelector('.art-progress-loaded');
	      this.$played = this.option.$control.querySelector('.art-progress-played');
	      this.$highlight = this.option.$control.querySelector('.art-progress-highlight');
	      this.$indicator = this.option.$control.querySelector('.art-progress-indicator');
	      this.$tip = this.option.$control.querySelector('.art-progress-tip');
	      this.set('loaded', this.getLoaded());
	      highlight.forEach(function (item) {
	        var left = Number(item.time) / $video.duration;
	        append(_this.$highlight, "\n        <span data-text=\"".concat(item.text, "\" data-time=\"").concat(item.time, "\" style=\"left: ").concat(left * 100, "%\"></span>\n      "));
	      });
	      this.art.on('video:progress', function () {
	        _this.set('loaded', _this.getLoaded());
	      });
	      this.art.on('video:timeupdate', function () {
	        _this.set('played', _this.getPlayed());
	      });
	      this.art.on('video:ended', function () {
	        _this.set('played', 1);
	      });
	      proxy(this.option.$control, 'mousemove', function (event) {
	        _this.$tip.style.display = 'block';

	        if (event.path.indexOf(_this.$highlight) > -1) {
	          _this.showHighlight(event);
	        } else {
	          _this.showTime(event);
	        }
	      });
	      proxy(this.option.$control, 'mouseout', function () {
	        _this.$tip.style.display = 'none';
	      });
	      proxy(this.option.$control, 'click', function (event) {
	        if (event.target !== _this.$indicator) {
	          var _this$getPosFromEvent = _this.getPosFromEvent(event),
	              second = _this$getPosFromEvent.second,
	              percentage = _this$getPosFromEvent.percentage;

	          _this.set('played', percentage);

	          player.seek(second);
	        }
	      });
	      proxy(this.$indicator, 'mousedown', function () {
	        _this.isDroging = true;
	      });
	      proxy(document, 'mousemove', function (event) {
	        if (_this.isDroging) {
	          var _this$getPosFromEvent2 = _this.getPosFromEvent(event),
	              second = _this$getPosFromEvent2.second,
	              percentage = _this$getPosFromEvent2.percentage;

	          _this.$indicator.classList.add('show-indicator');

	          _this.set('played', percentage);

	          player.seek(second);
	        }
	      });
	      proxy(document, 'mouseup', function () {
	        if (_this.isDroging) {
	          _this.isDroging = false;

	          _this.$indicator.classList.remove('show-indicator');
	        }
	      });
	    }
	  }, {
	    key: "showHighlight",
	    value: function showHighlight(event) {
	      var $video = this.art.refs.$video;
	      var _event$target$dataset = event.target.dataset,
	          text = _event$target$dataset.text,
	          time = _event$target$dataset.time;
	      this.$tip.innerHTML = text;
	      var left = Number(time) / $video.duration * this.option.$control.clientWidth + event.target.clientWidth / 2 - this.$tip.clientWidth / 2;
	      this.$tip.style.left = "".concat(left, "px");
	    }
	  }, {
	    key: "showTime",
	    value: function showTime(event) {
	      var _this$getPosFromEvent3 = this.getPosFromEvent(event),
	          width = _this$getPosFromEvent3.width,
	          time = _this$getPosFromEvent3.time;

	      var tipWidth = this.$tip.clientWidth;
	      this.$tip.innerHTML = time;

	      if (width <= tipWidth / 2) {
	        this.$tip.style.left = 0;
	      } else if (width > this.option.$control.clientWidth - tipWidth / 2) {
	        this.$tip.style.left = "".concat(this.option.$control.clientWidth - tipWidth, "px");
	      } else {
	        this.$tip.style.left = "".concat(width - tipWidth / 2, "px");
	      }
	    }
	  }, {
	    key: "getPlayed",
	    value: function getPlayed() {
	      var $video = this.art.refs.$video;
	      return $video.currentTime / $video.duration;
	    }
	  }, {
	    key: "getLoaded",
	    value: function getLoaded() {
	      var $video = this.art.refs.$video;
	      return $video.buffered.length ? $video.buffered.end($video.buffered.length - 1) / $video.duration : 0;
	    }
	  }, {
	    key: "getPosFromEvent",
	    value: function getPosFromEvent(event) {
	      var _this$art$refs = this.art.refs,
	          $video = _this$art$refs.$video,
	          $progress = _this$art$refs.$progress;

	      var _$progress$getBoundin = $progress.getBoundingClientRect(),
	          left = _$progress$getBoundin.left;

	      var width = clamp(event.x - left, 0, $progress.clientWidth);
	      var second = width / $progress.clientWidth * $video.duration;
	      var time = secondToTime(second);
	      var percentage = clamp(width / $progress.clientWidth, 0, 1);
	      return {
	        second: second,
	        time: time,
	        width: width,
	        percentage: percentage
	      };
	    }
	  }, {
	    key: "set",
	    value: function set(type, percentage) {
	      this["$".concat(type)].style.width = "".concat(percentage * 100, "%");

	      if (type === 'played') {
	        this.$indicator.style.left = "calc(".concat(percentage * 100, "% - 6.5px)");
	      }
	    }
	  }]);

	  return Progress;
	}();

	var Subtitle =
	/*#__PURE__*/
	function () {
	  function Subtitle(option) {
	    classCallCheck(this, Subtitle);

	    this.option = option;
	  }

	  createClass(Subtitle, [{
	    key: "apply",
	    value: function apply(art) {
	      var _this = this;

	      var proxy = art.events.proxy,
	          subtitle = art.subtitle,
	          i18n = art.i18n;
	      this.$subtitle = append(this.option.$control, icons$1.subtitle);
	      this.$subtitleClose = append(this.option.$control, icons$1.subtitleClose);
	      tooltip(this.$subtitle, i18n.get('Hide subtitle'));
	      tooltip(this.$subtitleClose, i18n.get('Show subtitle'));
	      this.$subtitleClose.style.display = 'none';
	      proxy(this.$subtitle, 'click', function () {
	        subtitle.hide();
	        _this.$subtitle.style.display = 'none';
	        _this.$subtitleClose.style.display = 'block';
	      });
	      proxy(this.$subtitleClose, 'click', function () {
	        subtitle.show();
	        _this.$subtitle.style.display = 'block';
	        _this.$subtitleClose.style.display = 'none';
	      });
	    }
	  }]);

	  return Subtitle;
	}();

	var Time =
	/*#__PURE__*/
	function () {
	  function Time(option) {
	    classCallCheck(this, Time);

	    this.option = option;
	  }

	  createClass(Time, [{
	    key: "apply",
	    value: function apply(art) {
	      this.art = art;
	      this.init();
	    }
	  }, {
	    key: "init",
	    value: function init() {
	      var _this = this;

	      this.option.$control.innerHTML = '00:00 / 00:00';
	      this.art.on('video:canplay', function () {
	        _this.option.$control.innerHTML = _this.getTime();
	      });
	      this.art.on('video:timeupdate', function () {
	        _this.option.$control.innerHTML = _this.getTime();
	      });
	      this.art.on('video:seeking', function () {
	        _this.option.$control.innerHTML = _this.getTime();
	      });
	    }
	  }, {
	    key: "getTime",
	    value: function getTime() {
	      var player = this.art.player;
	      return "".concat(secondToTime(player.currentTime()), " / ").concat(secondToTime(player.duration()));
	    }
	  }]);

	  return Time;
	}();

	var Volume =
	/*#__PURE__*/
	function () {
	  function Volume(option) {
	    classCallCheck(this, Volume);

	    this.option = option;
	    this.isDroging = false;
	  }

	  createClass(Volume, [{
	    key: "apply",
	    value: function apply(art) {
	      this.art = art;
	      this.init();
	    }
	  }, {
	    key: "init",
	    value: function init() {
	      var _this = this;

	      var _this$art = this.art,
	          proxy = _this$art.events.proxy,
	          player = _this$art.player,
	          i18n = _this$art.i18n;
	      this.$volume = append(this.option.$control, icons$1.volume);
	      this.$volumeClose = append(this.option.$control, icons$1.volumeClose);
	      this.$volumePanel = append(this.option.$control, '<div class="art-volume-panel"></div>');
	      this.$volumeHandle = append(this.$volumePanel, '<div class="art-volume-slider-handle"></div>');
	      tooltip(this.$volume, i18n.get('Mute'));
	      this.$volumeClose.style.display = 'none';
	      var volume = getStorage('volume');
	      this.setVolumeHandle(volume);
	      player.volume(volume);
	      proxy(this.$volume, 'click', function () {
	        _this.$volume.style.display = 'none';
	        _this.$volumeClose.style.display = 'block';
	        player.volume(0);
	      });
	      proxy(this.$volumeClose, 'click', function () {
	        _this.$volume.style.display = 'block';
	        _this.$volumeClose.style.display = 'none';
	        player.volume(getStorage('volume'));
	      });
	      proxy(this.option.$control, 'mouseenter', function () {
	        _this.$volumePanel.classList.add('art-volume-panel-hover'); // TODO


	        setTimeout(function () {
	          _this.setVolumeHandle(player.volume());
	        }, 200);
	      });
	      proxy(this.option.$control, 'mouseleave', function () {
	        _this.$volumePanel.classList.remove('art-volume-panel-hover');
	      });
	      proxy(this.$volumePanel, 'click', function (event) {
	        _this.volumeChangeFromEvent(event);
	      });
	      proxy(this.$volumeHandle, 'mousedown', function () {
	        _this.isDroging = true;
	      });
	      proxy(this.$volumeHandle, 'mousemove', function (event) {
	        if (_this.isDroging) {
	          _this.volumeChangeFromEvent(event);
	        }
	      });
	      proxy(document, 'mouseup', function () {
	        if (_this.isDroging) {
	          _this.isDroging = false;
	        }
	      });
	      this.art.on('video:volumechange', function () {
	        var percentage = player.volume();

	        _this.setVolumeHandle(percentage);

	        if (percentage === 0) {
	          _this.$volume.style.display = 'none';
	          _this.$volumeClose.style.display = 'block';
	        } else {
	          _this.$volume.style.display = 'block';
	          _this.$volumeClose.style.display = 'none';
	        }
	      });
	    }
	  }, {
	    key: "volumeChangeFromEvent",
	    value: function volumeChangeFromEvent(event) {
	      var player = this.art.player;

	      var _this$$volumePanel$ge = this.$volumePanel.getBoundingClientRect(),
	          panelLeft = _this$$volumePanel$ge.left,
	          panelWidth = _this$$volumePanel$ge.width;

	      var _this$$volumeHandle$g = this.$volumeHandle.getBoundingClientRect(),
	          handleWidth = _this$$volumeHandle$g.width;

	      var percentage = clamp(event.x - panelLeft - handleWidth / 2, 0, panelWidth - handleWidth / 2) / (panelWidth - handleWidth);
	      player.volume(percentage);
	    }
	  }, {
	    key: "setVolumeHandle",
	    value: function setVolumeHandle() {
	      var percentage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.7;

	      var _this$$volumePanel$ge2 = this.$volumePanel.getBoundingClientRect(),
	          panelWidth = _this$$volumePanel$ge2.width;

	      var _this$$volumeHandle$g2 = this.$volumeHandle.getBoundingClientRect(),
	          handleWidth = _this$$volumeHandle$g2.width;

	      var width = handleWidth / 2 + (panelWidth - handleWidth) * percentage - handleWidth / 2;
	      this.$volumeHandle.style.left = "".concat(width, "px");
	    }
	  }]);

	  return Volume;
	}();

	var Setting =
	/*#__PURE__*/
	function () {
	  function Setting(option) {
	    classCallCheck(this, Setting);

	    this.option = option;
	  }

	  createClass(Setting, [{
	    key: "apply",
	    value: function apply(art) {
	      this.art = art;
	    }
	  }]);

	  return Setting;
	}();

	var Thumbnails =
	/*#__PURE__*/
	function () {
	  function Thumbnails(option) {
	    classCallCheck(this, Thumbnails);

	    this.option = option;
	    this.loading = false;
	    this.isLoad = false;
	  }

	  createClass(Thumbnails, [{
	    key: "apply",
	    value: function apply(art) {
	      this.art = art;
	      this.init();
	    }
	  }, {
	    key: "init",
	    value: function init() {
	      var _this = this;

	      var _this$art = this.art,
	          $progress = _this$art.refs.$progress,
	          proxy = _this$art.events.proxy;
	      proxy($progress, 'mousemove', function (event) {
	        if (!_this.loading) {
	          _this.loading = true;

	          _this.load(_this.art.option.thumbnails.url).then(function () {
	            _this.isLoad = true;
	          });
	        }

	        if (_this.isLoad) {
	          _this.option.$control.style.display = 'block';

	          _this.showThumbnails(event);
	        }
	      });
	      proxy($progress, 'mouseout', function () {
	        _this.option.$control.style.display = 'none';
	      });
	    }
	  }, {
	    key: "load",
	    value: function load(url) {
	      var proxy = this.art.events.proxy;
	      return new Promise(function (resolve, reject) {
	        var image = new Image();
	        image.src = url;

	        if (image.complete) {
	          return resolve(image);
	        }

	        proxy(image, 'load', function () {
	          return resolve(image);
	        });
	        proxy(image, 'error', function () {
	          return reject(image);
	        });
	      });
	    }
	  }, {
	    key: "showThumbnails",
	    value: function showThumbnails(event) {
	      var _this$art2 = this.art,
	          $progress = _this$art2.refs.$progress,
	          controls = _this$art2.controls;

	      var _controls$progress$ge = controls.progress.getPosFromEvent(event),
	          posWidth = _controls$progress$ge.width;

	      var _this$art$option$thum = this.art.option.thumbnails,
	          url = _this$art$option$thum.url,
	          height = _this$art$option$thum.height,
	          width = _this$art$option$thum.width,
	          number = _this$art$option$thum.number,
	          column = _this$art$option$thum.column;
	      var perWidth = $progress.clientWidth / number;
	      var perIndex = Math.ceil(posWidth / perWidth);
	      var yIndex = Math.ceil(perIndex / column);
	      var xIndex = perIndex % column || column;
	      this.option.$control.style.backgroundImage = "url(".concat(url, ")");
	      this.option.$control.style.height = "".concat(height, "px");
	      this.option.$control.style.width = "".concat(width, "px");
	      this.option.$control.style.backgroundPosition = "-".concat(--xIndex * width, "px -").concat(--yIndex * height, "px");

	      if (posWidth <= width / 2) {
	        this.option.$control.style.left = 0;
	      } else if (posWidth > $progress.clientWidth - width / 2) {
	        this.option.$control.style.left = "".concat($progress.clientWidth - width, "px");
	      } else {
	        this.option.$control.style.left = "".concat(posWidth - width / 2, "px");
	      }
	    }
	  }]);

	  return Thumbnails;
	}();

	var Screenshot =
	/*#__PURE__*/
	function () {
	  function Screenshot(option) {
	    classCallCheck(this, Screenshot);

	    this.option = option;
	  }

	  createClass(Screenshot, [{
	    key: "apply",
	    value: function apply(art) {
	      var _this = this;

	      this.art = art;
	      var _this$art = this.art,
	          proxy = _this$art.events.proxy,
	          i18n = _this$art.i18n,
	          notice = _this$art.notice;
	      this.$screenshot = append(this.option.$control, icons$1.screenshot);
	      tooltip(this.$screenshot, i18n.get('Screenshot'));
	      proxy(this.$screenshot, 'click', function () {
	        try {
	          _this.captureFrame();
	        } catch (error) {
	          notice.show(error);
	        }
	      });
	    }
	  }, {
	    key: "captureFrame",
	    value: function captureFrame() {
	      var $video = this.art.refs.$video;
	      var canvas = document.createElement('canvas');
	      canvas.width = $video.videoWidth;
	      canvas.height = $video.videoHeight;
	      canvas.getContext('2d').drawImage($video, 0, 0);
	      var dataUri = canvas.toDataURL('image/png');
	      var elink = document.createElement('a');
	      elink.style.display = 'none';
	      elink.href = dataUri;
	      elink.download = "".concat(secondToTime($video.currentTime), ".png");
	      document.body.appendChild(elink);
	      elink.click();
	      document.body.removeChild(elink);
	    }
	  }]);

	  return Screenshot;
	}();

	var id = 0;

	var Controls =
	/*#__PURE__*/
	function () {
	  function Controls(art) {
	    var _this = this;

	    classCallCheck(this, Controls);

	    this.art = art;
	    this.$map = {};
	    this.art.on('video:firstload', function () {
	      _this.init();

	      _this.mount();
	    });
	  }

	  createClass(Controls, [{
	    key: "init",
	    value: function init() {
	      var _this2 = this;

	      this.add(new Progress({
	        disable: false,
	        position: 'top',
	        index: 10
	      }));
	      this.add(new Thumbnails({
	        disable: !this.art.option.thumbnails.url,
	        position: 'top',
	        index: 20
	      }));
	      this.add(new PlayAndPause({
	        disable: false,
	        position: 'left',
	        index: 10
	      }));
	      this.add(new Volume({
	        disable: false,
	        position: 'left',
	        index: 20
	      }));
	      this.add(new Time({
	        disable: false,
	        position: 'left',
	        index: 30
	      }));
	      this.add(new Danmu({
	        disable: false,
	        position: 'right',
	        index: 10
	      }));
	      this.add(new Screenshot({
	        disable: !this.art.option.screenshot,
	        position: 'right',
	        index: 20
	      }));
	      this.add(new Subtitle({
	        disable: !this.art.option.subtitle.url,
	        position: 'right',
	        index: 30
	      }));
	      this.add(new Setting({
	        disable: false,
	        position: 'right',
	        index: 40
	      }));
	      this.add(new Pip({
	        disable: false,
	        position: 'right',
	        index: 50
	      }));
	      this.add(new Fullscreen({
	        disable: false,
	        position: 'right',
	        index: 60
	      }));
	      this.art.option.controls.forEach(function (item) {
	        _this2.add(item);
	      });
	    }
	  }, {
	    key: "add",
	    value: function add(control) {
	      var option = control.option;

	      if (option && !option.disable) {
	        id++;
	        var name = control.constructor.name.toLowerCase() || "control".concat(id);
	        var $control = document.createElement('div');
	        $control.setAttribute('class', "art-control art-control-".concat(name));
	        $control.setAttribute('data-control-index', String(option.index) || id);
	        option.$control = $control;
	        this.commonMethod(control);
	        (this.$map[option.position] || (this.$map[option.position] = [])).push($control);
	        control.apply && control.apply(this.art);
	        this[name] = control;
	      }
	    }
	  }, {
	    key: "mount",
	    value: function mount() {
	      var _this3 = this;

	      var _this$art$refs = this.art.refs,
	          $progress = _this$art$refs.$progress,
	          $controlsLeft = _this$art$refs.$controlsLeft,
	          $controlsRight = _this$art$refs.$controlsRight;
	      Object.keys(this.$map).forEach(function (key) {
	        _this3.$map[key].sort(function (a, b) {
	          return Number(a.dataset.controlIndex) - Number(b.dataset.controlIndex);
	        }).forEach(function ($control) {
	          switch (key) {
	            case 'top':
	              $progress.appendChild($control);
	              break;

	            case 'left':
	              $controlsLeft.appendChild($control);
	              break;

	            case 'right':
	              $controlsRight.appendChild($control);
	              break;

	            default:
	              break;
	          }
	        });
	      });
	    }
	  }, {
	    key: "commonMethod",
	    value: function commonMethod(control) {
	      var _this4 = this;

	      Object.defineProperty(control, 'hide', {
	        value: function value() {
	          control.option.$control.style.display = 'none';

	          _this4.art.emit('control:hide', control.option.$control);
	        }
	      });
	      Object.defineProperty(control, 'show', {
	        value: function value() {
	          control.option.$control.style.display = 'block';

	          _this4.art.emit('control:show', control.option.$control);
	        }
	      });
	    }
	  }, {
	    key: "show",
	    value: function show() {
	      var $player = this.art.refs.$player;
	      $player.classList.add('controls-show');
	    }
	  }, {
	    key: "hide",
	    value: function hide() {
	      var $player = this.art.refs.$player;
	      $player.classList.remove('controls-show');
	    }
	  }]);

	  return Controls;
	}();

	var id$1 = 0;

	var Contextmenu =
	/*#__PURE__*/
	function () {
	  function Contextmenu(art) {
	    classCallCheck(this, Contextmenu);

	    this.art = art;
	    this.init();
	  }

	  createClass(Contextmenu, [{
	    key: "init",
	    value: function init() {
	      var _this = this;

	      var _this$art = this.art,
	          option = _this$art.option,
	          i18n = _this$art.i18n,
	          refs = _this$art.refs,
	          proxy = _this$art.events.proxy;
	      option.contextmenu.push({
	        name: 'info',
	        html: i18n.get('Video info'),
	        click: function click() {
	          _this.art.info.show();
	        }
	      }, {
	        name: 'version',
	        html: '<a href="https://github.com/zhw2590582/artplayer" target="_blank">ArtPlayer 1.0.0</a>'
	      }, {
	        name: 'close',
	        html: i18n.get('Close'),
	        click: function click() {
	          _this.hide();
	        }
	      });
	      proxy(refs.$player, 'contextmenu', function (event) {
	        event.preventDefault();
	        _this.art.isFocus = true;

	        if (!refs.$contextmenu) {
	          _this.creatMenu();
	        }

	        _this.show();

	        _this.setPos(event);
	      });
	      proxy(refs.$player, 'click', function (event) {
	        if (refs.$contextmenu && !event.path.includes(refs.$contextmenu)) {
	          _this.hide();
	        }
	      });
	    }
	  }, {
	    key: "creatMenu",
	    value: function creatMenu() {
	      var _this2 = this;

	      var _this$art2 = this.art,
	          option = _this$art2.option,
	          refs = _this$art2.refs,
	          proxy = _this$art2.events.proxy;
	      refs.$contextmenu = document.createElement('div');
	      refs.$contextmenu.classList.add('artplayer-contextmenu');
	      option.contextmenu.forEach(function (item) {
	        id$1++;
	        var $menu = document.createElement('div');
	        $menu.setAttribute('data-art-menu-id', id$1);
	        $menu.setAttribute('class', "art-menu art-menu-".concat(item.name || id$1));
	        append($menu, item.html);
	        setStyle($menu, item.style || {});

	        if (item.click) {
	          proxy($menu, 'click', function (event) {
	            event.preventDefault();
	            item.click(_this2.art, event);

	            _this2.hide();

	            _this2.art.emit('contextmenu:click', $menu);
	          });
	        }

	        append(refs.$contextmenu, $menu);
	      });
	      append(refs.$player, refs.$contextmenu);
	    }
	  }, {
	    key: "setPos",
	    value: function setPos(event) {
	      var refs = this.art.refs;
	      var mouseX = event.clientX;
	      var mouseY = event.clientY;

	      var _refs$$player$getBoun = refs.$player.getBoundingClientRect(),
	          cHeight = _refs$$player$getBoun.height,
	          cWidth = _refs$$player$getBoun.width,
	          cLeft = _refs$$player$getBoun.left,
	          cTop = _refs$$player$getBoun.top;

	      var _refs$$contextmenu$ge = refs.$contextmenu.getBoundingClientRect(),
	          mHeight = _refs$$contextmenu$ge.height,
	          mWidth = _refs$$contextmenu$ge.width;

	      var menuLeft = mouseX - cLeft;
	      var menuTop = mouseY - cTop;

	      if (mouseX + mWidth > cLeft + cWidth) {
	        menuLeft = cWidth - mWidth;
	      }

	      if (mouseY + mHeight > cTop + cHeight) {
	        menuTop = cHeight - mHeight;
	      }

	      refs.$contextmenu.style.left = "".concat(menuLeft, "px");
	      refs.$contextmenu.style.top = "".concat(menuTop, "px");
	    }
	  }, {
	    key: "hide",
	    value: function hide() {
	      var $contextmenu = this.art.refs.$contextmenu;

	      if ($contextmenu) {
	        $contextmenu.style.display = 'none';
	        this.art.emit('contextmenu:hide', $contextmenu);
	      }
	    }
	  }, {
	    key: "show",
	    value: function show() {
	      var $contextmenu = this.art.refs.$contextmenu;

	      if ($contextmenu) {
	        $contextmenu.style.display = 'block';
	        this.art.emit('contextmenu:show', $contextmenu);
	      }
	    }
	  }]);

	  return Contextmenu;
	}();

	var Danmu$1 = function Danmu(art) {
	  classCallCheck(this, Danmu);

	  this.art = art;
	};

	var Info =
	/*#__PURE__*/
	function () {
	  function Info(art) {
	    classCallCheck(this, Info);

	    this.art = art;
	    this.init();
	  }

	  createClass(Info, [{
	    key: "init",
	    value: function init() {
	      var _this = this;

	      var _this$art = this.art,
	          $infoClose = _this$art.refs.$infoClose,
	          proxy = _this$art.events.proxy;
	      proxy($infoClose, 'click', function () {
	        _this.hide();
	      });
	    }
	  }, {
	    key: "show",
	    value: function show() {
	      var _this$art$refs = this.art.refs,
	          $info = _this$art$refs.$info,
	          $infoPanel = _this$art$refs.$infoPanel;
	      $info.style.display = 'block';

	      if (!$infoPanel.innerHTML) {
	        append($infoPanel, this.creatInfo());
	        this.getHeader();
	      }

	      clearTimeout(this.timer);
	      this.loop();
	      this.art.emit('info:show', $info);
	    }
	  }, {
	    key: "creatInfo",
	    value: function creatInfo() {
	      var infoHtml = [];
	      infoHtml.push("\n      <div class=\"art-info-item \">\n        <div class=\"art-info-title\">Player version:</div>\n        <div class=\"art-info-content\">1.0.0</div>\n      </div>\n    ");
	      infoHtml.push("\n      <div class=\"art-info-item\">\n        <div class=\"art-info-title\">Video url:</div>\n        <div class=\"art-info-content\" data-video=\"currentSrc\"></div>\n      </div>\n    ");
	      infoHtml.push("\n      <div class=\"art-info-item\">\n        <div class=\"art-info-title\">Video type:</div>\n        <div class=\"art-info-content\" data-head=\"Content-Type\">loading...</div>\n      </div>\n    ");
	      infoHtml.push("\n      <div class=\"art-info-item\">\n        <div class=\"art-info-title\">Video size:</div>\n        <div class=\"art-info-content\" data-head=\"Content-length\">loading...</div>\n      </div>\n    ");
	      infoHtml.push("\n      <div class=\"art-info-item\">\n        <div class=\"art-info-title\">Video volume:</div>\n        <div class=\"art-info-content\" data-video=\"volume\"></div>\n      </div>\n    ");
	      infoHtml.push("\n      <div class=\"art-info-item\">\n        <div class=\"art-info-title\">Video time:</div>\n        <div class=\"art-info-content\" data-video=\"currentTime\"></div>\n      </div>\n    ");
	      infoHtml.push("\n      <div class=\"art-info-item\">\n        <div class=\"art-info-title\">Video duration:</div>\n        <div class=\"art-info-content\" data-video=\"duration\"></div>\n      </div>\n    ");
	      infoHtml.push("\n      <div class=\"art-info-item\">\n        <div class=\"art-info-title\">Video resolution:</div>\n        <div class=\"art-info-content\">\n          <span data-video=\"videoWidth\"></span> x <span data-video=\"videoHeight\"></span>\n        </div>\n      </div>\n    ");
	      return infoHtml.join('');
	    }
	  }, {
	    key: "getHeader",
	    value: function getHeader() {
	      var _this$art2 = this.art,
	          url = _this$art2.option.url,
	          $infoPanel = _this$art2.refs.$infoPanel;
	      var types = Array.from($infoPanel.querySelectorAll('[data-head]'));
	      fetch(url, {
	        method: 'HEAD'
	      }).then(function (data) {
	        types.forEach(function (item) {
	          var value = data.headers.get(item.dataset.head);
	          item.innerHTML = value !== undefined ? value : 'unknown';
	        });
	      }).catch(function () {
	        types.forEach(function (item) {
	          item.innerHTML = 'unknown';
	        });
	      });
	    }
	  }, {
	    key: "loop",
	    value: function loop() {
	      var _this2 = this;

	      var _this$art$refs2 = this.art.refs,
	          $infoPanel = _this$art$refs2.$infoPanel,
	          $video = _this$art$refs2.$video;
	      this.timer = setTimeout(function () {
	        var types = Array.from($infoPanel.querySelectorAll('[data-video]'));
	        types.forEach(function (item) {
	          var value = $video[item.dataset.video];
	          item.innerHTML = value !== undefined ? value : 'unknown';
	        });

	        _this2.loop();
	      }, 1000);
	    }
	  }, {
	    key: "hide",
	    value: function hide() {
	      var $info = this.art.refs.$info;
	      $info.style.display = 'none';
	      clearTimeout(this.timer);
	      this.art.emit('info:hide', $info);
	    }
	  }]);

	  return Info;
	}();

	var Subtitle$1 =
	/*#__PURE__*/
	function () {
	  function Subtitle(art) {
	    classCallCheck(this, Subtitle);

	    this.art = art;
	    var url = this.art.option.subtitle.url;

	    if (url) {
	      this.checkExt(url);
	      this.init();
	    }
	  }

	  createClass(Subtitle, [{
	    key: "init",
	    value: function init() {
	      var _this = this;

	      var _this$art = this.art,
	          proxy = _this$art.events.proxy,
	          subtitle = _this$art.option.subtitle,
	          _this$art$refs = _this$art.refs,
	          $video = _this$art$refs.$video,
	          $subtitle = _this$art$refs.$subtitle;
	      setStyle($subtitle, subtitle.style || {});
	      var $track = document.createElement('track');
	      $track.default = true;
	      $track.kind = 'metadata';
	      this.load(subtitle.url).then(function (data) {
	        $track.src = data;
	        $video.appendChild($track);
	        _this.art.refs.$track = $track;

	        if ($video.textTracks && $video.textTracks[0]) {
	          var _$video$textTracks = slicedToArray($video.textTracks, 1),
	              track = _$video$textTracks[0];

	          proxy(track, 'cuechange', function () {
	            var _track$activeCues = slicedToArray(track.activeCues, 1),
	                cue = _track$activeCues[0];

	            $subtitle.innerHTML = '';

	            if (cue) {
	              var template = document.createElement('div');
	              template.appendChild(cue.getCueAsHTML());
	              $subtitle.innerHTML = template.innerHTML.split(/\r?\n/).map(function (item) {
	                return "<p>".concat(item, "</p>");
	              }).join('');
	            }

	            _this.art.emit('subtitle:update', $subtitle);
	          });
	        }
	      });
	    }
	  }, {
	    key: "load",
	    value: function load(url) {
	      var _this2 = this;

	      var type;
	      return fetch(url).then(function (response) {
	        type = response.headers.get('Content-Type');
	        return response.text();
	      }).then(function (text) {
	        if (/x-subrip/gi.test(type)) {
	          return _this2.srtToVtt(text);
	        }

	        return url;
	      }).catch(function (err) {
	        throw err;
	      });
	    }
	  }, {
	    key: "srtToVtt",
	    value: function srtToVtt(text) {
	      var vttText = 'WEBVTT \r\n\r\n'.concat(text.replace(/\{\\([ibu])\}/g, '</$1>').replace(/\{\\([ibu])1\}/g, '<$1>').replace(/\{([ibu])\}/g, '<$1>').replace(/\{\/([ibu])\}/g, '</$1>').replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, '$1.$2').concat('\r\n\r\n'));
	      return URL.createObjectURL(new Blob([vttText], {
	        type: 'text/vtt'
	      }));
	    }
	  }, {
	    key: "checkExt",
	    value: function checkExt(url) {
	      var ext = getExt(url);
	      errorHandle(ext === 'vtt' || ext === 'srt', "'subtitle.url' option require 'vtt' or 'srt' format, but got '".concat(ext, "'."));
	    }
	  }, {
	    key: "show",
	    value: function show() {
	      var $subtitle = this.art.refs.$subtitle;
	      $subtitle.style.display = 'block';
	      this.art.emit('subtitle:show', $subtitle);
	    }
	  }, {
	    key: "hide",
	    value: function hide() {
	      var $subtitle = this.art.refs.$subtitle;
	      $subtitle.style.display = 'none';
	      this.art.emit('subtitle:hide', $subtitle);
	    }
	  }, {
	    key: "switch",
	    value: function _switch(url) {
	      var _this3 = this;

	      var $track = this.art.refs.$track;
	      this.checkExt(url);
	      errorHandle($track, 'You need to initialize the subtitle option first.');
	      this.load(url).then(function (data) {
	        if (url !== data) {
	          $track.src = data;

	          _this3.art.emit('subtitle:switch', url);
	        }
	      });
	    }
	  }]);

	  return Subtitle;
	}();

	var Events =
	/*#__PURE__*/
	function () {
	  function Events(art) {
	    classCallCheck(this, Events);

	    this.art = art;
	    this.destroyEvents = [];
	    this.proxy = this.proxy.bind(this);
	  }

	  createClass(Events, [{
	    key: "proxy",
	    value: function proxy(target, name, callback) {
	      var _this = this;

	      var option = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	      if (Array.isArray(name)) {
	        name.forEach(function (item) {
	          return _this.proxy(target, item, callback, option);
	        });
	      }

	      target.addEventListener(name, callback, option);
	      this.destroyEvents.push(function () {
	        target.removeEventListener(name, callback, option);
	      });
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      this.destroyEvents.forEach(function (event) {
	        return event();
	      });
	    }
	  }]);

	  return Events;
	}();

	var Hotkey =
	/*#__PURE__*/
	function () {
	  function Hotkey(art) {
	    classCallCheck(this, Hotkey);

	    this.art = art;

	    if (this.art.option.hotkey) {
	      this.init();
	    }
	  }

	  createClass(Hotkey, [{
	    key: "init",
	    value: function init() {
	      var _this = this;

	      var _this$art = this.art,
	          player = _this$art.player,
	          $player = _this$art.refs.$player,
	          proxy = _this$art.events.proxy;
	      proxy(document, 'click', function (event) {
	        _this.art.isFocus = event.path.indexOf($player) > -1;
	      });
	      proxy(window, 'keydown', function (event) {
	        if (_this.art.isFocus) {
	          var tag = document.activeElement.tagName.toUpperCase();
	          var editable = document.activeElement.getAttribute('contenteditable');

	          if (tag !== 'INPUT' && tag !== 'TEXTAREA' && editable !== '' && editable !== 'true') {
	            switch (event.keyCode) {
	              case 39:
	                event.preventDefault();
	                player.seek(player.currentTime() + 10);
	                break;

	              case 37:
	                event.preventDefault();
	                player.seek(player.currentTime() - 10);
	                break;

	              case 38:
	                event.preventDefault();
	                player.volume(player.volume() + 0.05);
	                break;

	              case 40:
	                event.preventDefault();
	                player.volume(player.volume() - 0.05);
	                break;

	              case 32:
	                event.preventDefault();
	                player.toggle();
	                break;

	              default:
	                break;
	            }
	          }
	        }
	      });
	    }
	  }]);

	  return Hotkey;
	}();

	var id$2 = 0;

	var Layers =
	/*#__PURE__*/
	function () {
	  function Layers(art) {
	    classCallCheck(this, Layers);

	    this.art = art;
	    this.add = this.add.bind(this);
	    this.art.option.layers.filter(function (item) {
	      return item.disable === false;
	    }).forEach(this.add);
	    this.init();
	  }

	  createClass(Layers, [{
	    key: "init",
	    value: function init() {
	      var _this$art = this.art,
	          refs = _this$art.refs,
	          player = _this$art.player,
	          proxy = _this$art.events.proxy;
	      proxy(refs.$layers, 'click', function (event) {
	        if (event.path[0] === refs.$layers) {
	          player.pause();
	        }
	      });
	    }
	  }, {
	    key: "add",
	    value: function add(option, callback) {
	      var refs = this.art.refs;
	      id$2++;
	      var $layer = document.createElement('div');
	      $layer.setAttribute('data-art-layer-id', id$2);
	      $layer.setAttribute('class', "art-layer art-layer-".concat(option.name || id$2));
	      $layer.style.zIndex = option.index || id$2;
	      append($layer, option.html);
	      setStyle($layer, option.style || {});
	      refs.$layers.appendChild($layer);
	      this.art.emit('layers:add', $layer);
	      callback && callback($layer);
	    }
	  }, {
	    key: "show",
	    value: function show() {
	      var $layers = this.art.refs.$layers;
	      $layers.style.display = 'block';
	      this.art.emit('layers:show', $layers);
	    }
	  }, {
	    key: "hide",
	    value: function hide() {
	      var $layers = this.art.refs.$layers;
	      $layers.style.display = 'none';
	      this.art.emit('layers:hide', $layers);
	    }
	  }]);

	  return Layers;
	}();

	var Loading =
	/*#__PURE__*/
	function () {
	  function Loading(art) {
	    classCallCheck(this, Loading);

	    this.art = art;
	    this.init();
	  }

	  createClass(Loading, [{
	    key: "init",
	    value: function init() {
	      var _this$art = this.art,
	          option = _this$art.option,
	          $loading = _this$art.refs.$loading;
	      append($loading, option.loading || icons$1.loading);
	    }
	  }, {
	    key: "hide",
	    value: function hide() {
	      var $loading = this.art.refs.$loading;
	      $loading.style.display = 'none';
	      this.art.emit('loading:hide', $loading);
	    }
	  }, {
	    key: "show",
	    value: function show() {
	      var $loading = this.art.refs.$loading;
	      $loading.style.display = 'flex';
	      this.art.emit('loading:show', $loading);
	    }
	  }]);

	  return Loading;
	}();

	var Notice =
	/*#__PURE__*/
	function () {
	  function Notice(art) {
	    classCallCheck(this, Notice);

	    this.art = art;
	    this.timer = null;
	  }

	  createClass(Notice, [{
	    key: "show",
	    value: function show(msg) {
	      var _this = this;

	      var autoHide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	      var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
	      var $notice = this.art.refs.$notice;
	      $notice.style.display = 'block';
	      $notice.innerHTML = msg instanceof Error ? msg.message.trim() : msg;

	      if (autoHide) {
	        clearTimeout(this.timer);
	        this.timer = setTimeout(function () {
	          _this.hide();
	        }, time);
	      }

	      this.art.emit('notice:show', $notice);
	    }
	  }, {
	    key: "hide",
	    value: function hide() {
	      var $notice = this.art.refs.$notice;
	      $notice.style.display = 'none';
	      this.art.emit('notice:hide', $notice);
	    }
	  }]);

	  return Notice;
	}();

	var Mask =
	/*#__PURE__*/
	function () {
	  function Mask(art) {
	    classCallCheck(this, Mask);

	    this.art = art;
	    this.init();
	  }

	  createClass(Mask, [{
	    key: "init",
	    value: function init() {
	      var _this = this;

	      var _this$art = this.art,
	          player = _this$art.player,
	          refs = _this$art.refs,
	          proxy = _this$art.events.proxy;
	      append(refs.$mask, icons$1.playBig);
	      proxy(refs.$mask, 'click', function () {
	        player.play();

	        _this.hide();
	      });
	    }
	  }, {
	    key: "show",
	    value: function show() {
	      var $mask = this.art.refs.$mask;
	      $mask.style.display = 'block';
	      this.art.emit('mask:show', $mask);
	    }
	  }, {
	    key: "hide",
	    value: function hide() {
	      var $mask = this.art.refs.$mask;
	      $mask.style.display = 'none';
	      this.art.emit('mask:show', $mask);
	    }
	  }]);

	  return Mask;
	}();

	var id$3 = 0;
	var instances = [];

	var Artplayer =
	/*#__PURE__*/
	function (_Emitter) {
	  inherits(Artplayer, _Emitter);

	  function Artplayer(option) {
	    var _this;

	    classCallCheck(this, Artplayer);

	    _this = possibleConstructorReturn(this, getPrototypeOf(Artplayer).call(this));

	    _this.emit('init:start');

	    _this.option = deepMerge({}, Artplayer.DEFAULTS, option);
	    validOption(_this.option);

	    _this.init();

	    _this.emit('init:end');

	    return _this;
	  }

	  createClass(Artplayer, [{
	    key: "init",
	    value: function init() {
	      this.isError = false;
	      this.isFocus = false;
	      this.isPlaying = false;
	      this.refs = {};

	      if (this.option.container instanceof Element) {
	        this.refs.$container = this.option.container;
	      } else {
	        this.refs.$container = document.querySelector(this.option.container);
	      }

	      this.template = new Template(this);
	      this.i18n = new I18n(this);
	      this.notice = new Notice(this);
	      this.events = new Events(this);
	      this.player = new Player(this);
	      this.layers = new Layers(this);
	      this.controls = new Controls(this);
	      this.contextmenu = new Contextmenu(this);
	      this.danmu = new Danmu$1(this);
	      this.subtitle = new Subtitle$1(this);
	      this.info = new Info(this);
	      this.loading = new Loading(this);
	      this.hotkey = new Hotkey(this);
	      this.mask = new Mask(this);
	      this.id = id$3++;
	      instances.push(this);
	      return this;
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      var removeHtml = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	      this.events.destroy();
	      instances.splice(instances.indexOf(this), 1);

	      if (removeHtml) {
	        this.refs.$container.innerHTML = '';
	      }

	      this.emit('destroy');
	    }
	  }], [{
	    key: "use",
	    value: function use(Plugin) {
	      var name = Plugin.name.toLowerCase();
	      var installedPlugins = this.plugins || (this.plugins = {});

	      if (!installedPlugins[name]) {
	        var args = Array.from(arguments).slice(1);
	        args.unshift(this);
	        installedPlugins[name] = construct(Plugin, toConsumableArray(args));
	        this.prototype.emit('use', Plugin);
	      }

	      return this;
	    }
	  }, {
	    key: "version",
	    get: function get() {
	      return '1.0.0';
	    }
	  }, {
	    key: "config",
	    get: function get() {
	      return config;
	    }
	  }, {
	    key: "DEFAULTS",
	    get: function get() {
	      return {
	        container: '.artplayer',
	        url: '',
	        poster: '',
	        volume: 0.7,
	        thumbnails: {
	          url: '',
	          number: 60,
	          width: 160,
	          height: 90,
	          column: 10
	        },
	        screenshot: true,
	        autoplay: false,
	        loop: false,
	        type: '',
	        mimeCodec: '',
	        layers: [],
	        contextmenu: [],
	        loading: '',
	        theme: '#f00',
	        hotkey: true,
	        subtitle: {
	          url: '',
	          style: {}
	        },
	        controls: [],
	        highlight: [],
	        moreVideoAttr: {
	          'controls': false,
	          'preload': 'auto',
	          'webkit-playsinline': true,
	          'playsinline': true
	        },
	        lang: navigator.language.toLowerCase()
	      };
	    }
	  }]);

	  return Artplayer;
	}(tinyEmitter);

	window.Artplayer = Artplayer;

	exports.instances = instances;
	exports.default = Artplayer;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=artplayer.js.map
