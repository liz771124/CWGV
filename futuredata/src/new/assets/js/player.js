var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])(
          (mod = {
            exports: {},
          }).exports,
          mod,
        ),
      mod.exports
    );
  };
var require_main = __commonJS({
  "assets/js/main.js"(exports, module) {
    (function polyfill() {
      const relList = document.createElement("link").relList;
      if (relList && relList.supports && relList.supports("modulepreload")) {
        return;
      }
      for (const link of document.querySelectorAll(
        'link[rel="modulepreload"]',
      )) {
        processPreload(link);
      }
      new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type !== "childList") {
            continue;
          }
          for (const node of mutation.addedNodes) {
            if (node.tagName === "LINK" && node.rel === "modulepreload")
              processPreload(node);
          }
        }
      }).observe(document, {
        childList: true,
        subtree: true,
      });

      function getFetchOpts(link) {
        const fetchOpts = {};
        if (link.integrity) fetchOpts.integrity = link.integrity;
        if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
        if (link.crossOrigin === "use-credentials")
          fetchOpts.credentials = "include";
        else if (link.crossOrigin === "anonymous")
          fetchOpts.credentials = "omit";
        else fetchOpts.credentials = "same-origin";
        return fetchOpts;
      }

      function processPreload(link) {
        if (link.ep) return;
        link.ep = true;
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
      }
    })();
    const global$1 = "";

    function makeMap(str, expectsLowerCase) {
      const map = /* @__PURE__ */ Object.create(null);
      const list = str.split(",");
      for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
      }
      return expectsLowerCase
        ? (val) => !!map[val.toLowerCase()]
        : (val) => !!map[val];
    }
    const EMPTY_OBJ = {};
    const EMPTY_ARR = [];
    const NOOP = () => {};
    const NO = () => false;
    const onRE = /^on[^a-z]/;
    const isOn = (key) => onRE.test(key);
    const isModelListener = (key) => key.startsWith("onUpdate:");
    const extend$1 = Object.assign;
    const remove = (arr, el) => {
      const i = arr.indexOf(el);
      if (i > -1) {
        arr.splice(i, 1);
      }
    };
    const hasOwnProperty$2 = Object.prototype.hasOwnProperty;
    const hasOwn = (val, key) => hasOwnProperty$2.call(val, key);
    const isArray$1 = Array.isArray;
    const isMap = (val) => toTypeString(val) === "[object Map]";
    const isSet = (val) => toTypeString(val) === "[object Set]";
    const isDate$1 = (val) => toTypeString(val) === "[object Date]";
    const isRegExp$1 = (val) => toTypeString(val) === "[object RegExp]";
    const isFunction$1 = (val) => typeof val === "function";
    const isString$2 = (val) => typeof val === "string";
    const isSymbol = (val) => typeof val === "symbol";
    const isObject$1 = (val) => val !== null && typeof val === "object";
    const isPromise = (val) => {
      return (
        isObject$1(val) && isFunction$1(val.then) && isFunction$1(val.catch)
      );
    };
    const objectToString = Object.prototype.toString;
    const toTypeString = (value) => objectToString.call(value);
    const toRawType = (value) => {
      return toTypeString(value).slice(8, -1);
    };
    const isPlainObject$1 = (val) => toTypeString(val) === "[object Object]";
    const isIntegerKey = (key) =>
      isString$2(key) &&
      key !== "NaN" &&
      key[0] !== "-" &&
      "" + parseInt(key, 10) === key;
    const isReservedProp = /* @__PURE__ */ makeMap(
      // the leading comma is intentional so empty string "" is also included
      ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
    );
    const isBuiltInDirective = /* @__PURE__ */ makeMap(
      "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo",
    );
    const cacheStringFunction = (fn) => {
      const cache = /* @__PURE__ */ Object.create(null);
      return (str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
      };
    };
    const camelizeRE = /-(\w)/g;
    const camelize = cacheStringFunction((str) => {
      return str.replace(camelizeRE, (_, c2) => (c2 ? c2.toUpperCase() : ""));
    });
    const hyphenateRE = /\B([A-Z])/g;
    const hyphenate = cacheStringFunction((str) =>
      str.replace(hyphenateRE, "-$1").toLowerCase(),
    );
    const capitalize = cacheStringFunction(
      (str) => str.charAt(0).toUpperCase() + str.slice(1),
    );
    const toHandlerKey = cacheStringFunction((str) =>
      str ? `on${capitalize(str)}` : ``,
    );
    const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
    const invokeArrayFns = (fns, arg) => {
      for (let i = 0; i < fns.length; i++) {
        fns[i](arg);
      }
    };
    const def = (obj, key, value) => {
      Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value,
      });
    };
    const looseToNumber = (val) => {
      const n = parseFloat(val);
      return isNaN(n) ? val : n;
    };
    const toNumber = (val) => {
      const n = isString$2(val) ? Number(val) : NaN;
      return isNaN(n) ? val : n;
    };
    let _globalThis;
    const getGlobalThis = () => {
      return (
        _globalThis ||
        (_globalThis =
          typeof globalThis !== "undefined"
            ? globalThis
            : typeof self !== "undefined"
              ? self
              : typeof window !== "undefined"
                ? window
                : typeof global !== "undefined"
                  ? global
                  : {})
      );
    };
    const GLOBALS_WHITE_LISTED =
      "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console";
    const isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);

    function normalizeStyle(value) {
      if (isArray$1(value)) {
        const res = {};
        for (let i = 0; i < value.length; i++) {
          const item = value[i];
          const normalized = isString$2(item)
            ? parseStringStyle(item)
            : normalizeStyle(item);
          if (normalized) {
            for (const key in normalized) {
              res[key] = normalized[key];
            }
          }
        }
        return res;
      } else if (isString$2(value)) {
        return value;
      } else if (isObject$1(value)) {
        return value;
      }
    }
    const listDelimiterRE = /;(?![^(]*\))/g;
    const propertyDelimiterRE = /:([^]+)/;
    const styleCommentRE = /\/\*[^]*?\*\//g;

    function parseStringStyle(cssText) {
      const ret = {};
      cssText
        .replace(styleCommentRE, "")
        .split(listDelimiterRE)
        .forEach((item) => {
          if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
          }
        });
      return ret;
    }

    function normalizeClass(value) {
      let res = "";
      if (isString$2(value)) {
        res = value;
      } else if (isArray$1(value)) {
        for (let i = 0; i < value.length; i++) {
          const normalized = normalizeClass(value[i]);
          if (normalized) {
            res += normalized + " ";
          }
        }
      } else if (isObject$1(value)) {
        for (const name in value) {
          if (value[name]) {
            res += name + " ";
          }
        }
      }
      return res.trim();
    }

    function normalizeProps(props) {
      if (!props) return null;
      let { class: klass, style } = props;
      if (klass && !isString$2(klass)) {
        props.class = normalizeClass(klass);
      }
      if (style) {
        props.style = normalizeStyle(style);
      }
      return props;
    }
    const HTML_TAGS =
      "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
    const SVG_TAGS =
      "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
    const VOID_TAGS =
      "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
    const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
    const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
    const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
    const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
    const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);

    function includeBooleanAttr(value) {
      return !!value || value === "";
    }

    function looseCompareArrays(a, b) {
      if (a.length !== b.length) return false;
      let equal = true;
      for (let i = 0; equal && i < a.length; i++) {
        equal = looseEqual(a[i], b[i]);
      }
      return equal;
    }

    function looseEqual(a, b) {
      if (a === b) return true;
      let aValidType = isDate$1(a);
      let bValidType = isDate$1(b);
      if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b.getTime() : false;
      }
      aValidType = isSymbol(a);
      bValidType = isSymbol(b);
      if (aValidType || bValidType) {
        return a === b;
      }
      aValidType = isArray$1(a);
      bValidType = isArray$1(b);
      if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b) : false;
      }
      aValidType = isObject$1(a);
      bValidType = isObject$1(b);
      if (aValidType || bValidType) {
        if (!aValidType || !bValidType) {
          return false;
        }
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) {
          return false;
        }
        for (const key in a) {
          const aHasKey = a.hasOwnProperty(key);
          const bHasKey = b.hasOwnProperty(key);
          if (
            (aHasKey && !bHasKey) ||
            (!aHasKey && bHasKey) ||
            !looseEqual(a[key], b[key])
          ) {
            return false;
          }
        }
      }
      return String(a) === String(b);
    }

    function looseIndexOf(arr, val) {
      return arr.findIndex((item) => looseEqual(item, val));
    }
    const toDisplayString = (val) => {
      return isString$2(val)
        ? val
        : val == null
          ? ""
          : isArray$1(val) ||
              (isObject$1(val) &&
                (val.toString === objectToString ||
                  !isFunction$1(val.toString)))
            ? JSON.stringify(val, replacer, 2)
            : String(val);
    };
    const replacer = (_key, val) => {
      if (val && val.__v_isRef) {
        return replacer(_key, val.value);
      } else if (isMap(val)) {
        return {
          [`Map(${val.size})`]: [...val.entries()].reduce(
            (entries, [key, val2]) => {
              entries[`${key} =>`] = val2;
              return entries;
            },
            {},
          ),
        };
      } else if (isSet(val)) {
        return {
          [`Set(${val.size})`]: [...val.values()],
        };
      } else if (isObject$1(val) && !isArray$1(val) && !isPlainObject$1(val)) {
        return String(val);
      }
      return val;
    };
    let activeEffectScope;
    class EffectScope {
      constructor(detached = false) {
        this.detached = detached;
        this._active = true;
        this.effects = [];
        this.cleanups = [];
        this.parent = activeEffectScope;
        if (!detached && activeEffectScope) {
          this.index =
            (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
              this,
            ) - 1;
        }
      }
      get active() {
        return this._active;
      }
      run(fn) {
        if (this._active) {
          const currentEffectScope = activeEffectScope;
          try {
            activeEffectScope = this;
            return fn();
          } finally {
            activeEffectScope = currentEffectScope;
          }
        }
      }
      /**
       * This should only be called on non-detached scopes
       * @internal
       */
      on() {
        activeEffectScope = this;
      }
      /**
       * This should only be called on non-detached scopes
       * @internal
       */
      off() {
        activeEffectScope = this.parent;
      }
      stop(fromParent) {
        if (this._active) {
          let i, l;
          for (i = 0, l = this.effects.length; i < l; i++) {
            this.effects[i].stop();
          }
          for (i = 0, l = this.cleanups.length; i < l; i++) {
            this.cleanups[i]();
          }
          if (this.scopes) {
            for (i = 0, l = this.scopes.length; i < l; i++) {
              this.scopes[i].stop(true);
            }
          }
          if (!this.detached && this.parent && !fromParent) {
            const last2 = this.parent.scopes.pop();
            if (last2 && last2 !== this) {
              this.parent.scopes[this.index] = last2;
              last2.index = this.index;
            }
          }
          this.parent = void 0;
          this._active = false;
        }
      }
    }

    function effectScope(detached) {
      return new EffectScope(detached);
    }

    function recordEffectScope(effect2, scope = activeEffectScope) {
      if (scope && scope.active) {
        scope.effects.push(effect2);
      }
    }

    function getCurrentScope() {
      return activeEffectScope;
    }

    function onScopeDispose(fn) {
      if (activeEffectScope) {
        activeEffectScope.cleanups.push(fn);
      }
    }
    const createDep = (effects) => {
      const dep = new Set(effects);
      dep.w = 0;
      dep.n = 0;
      return dep;
    };
    const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
    const newTracked = (dep) => (dep.n & trackOpBit) > 0;
    const initDepMarkers = ({ deps }) => {
      if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
          deps[i].w |= trackOpBit;
        }
      }
    };
    const finalizeDepMarkers = (effect2) => {
      const { deps } = effect2;
      if (deps.length) {
        let ptr = 0;
        for (let i = 0; i < deps.length; i++) {
          const dep = deps[i];
          if (wasTracked(dep) && !newTracked(dep)) {
            dep.delete(effect2);
          } else {
            deps[ptr++] = dep;
          }
          dep.w &= ~trackOpBit;
          dep.n &= ~trackOpBit;
        }
        deps.length = ptr;
      }
    };
    const targetMap = /* @__PURE__ */ new WeakMap();
    let effectTrackDepth = 0;
    let trackOpBit = 1;
    const maxMarkerBits = 30;
    let activeEffect;
    const ITERATE_KEY = Symbol("");
    const MAP_KEY_ITERATE_KEY = Symbol("");
    class ReactiveEffect {
      constructor(fn, scheduler = null, scope) {
        this.fn = fn;
        this.scheduler = scheduler;
        this.active = true;
        this.deps = [];
        this.parent = void 0;
        recordEffectScope(this, scope);
      }
      run() {
        if (!this.active) {
          return this.fn();
        }
        let parent = activeEffect;
        let lastShouldTrack = shouldTrack;
        while (parent) {
          if (parent === this) {
            return;
          }
          parent = parent.parent;
        }
        try {
          this.parent = activeEffect;
          activeEffect = this;
          shouldTrack = true;
          trackOpBit = 1 << ++effectTrackDepth;
          if (effectTrackDepth <= maxMarkerBits) {
            initDepMarkers(this);
          } else {
            cleanupEffect(this);
          }
          return this.fn();
        } finally {
          if (effectTrackDepth <= maxMarkerBits) {
            finalizeDepMarkers(this);
          }
          trackOpBit = 1 << --effectTrackDepth;
          activeEffect = this.parent;
          shouldTrack = lastShouldTrack;
          this.parent = void 0;
          if (this.deferStop) {
            this.stop();
          }
        }
      }
      stop() {
        if (activeEffect === this) {
          this.deferStop = true;
        } else if (this.active) {
          cleanupEffect(this);
          if (this.onStop) {
            this.onStop();
          }
          this.active = false;
        }
      }
    }

    function cleanupEffect(effect2) {
      const { deps } = effect2;
      if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
          deps[i].delete(effect2);
        }
        deps.length = 0;
      }
    }

    function effect(fn, options) {
      if (fn.effect) {
        fn = fn.effect.fn;
      }
      const _effect = new ReactiveEffect(fn);
      if (options) {
        extend$1(_effect, options);
        if (options.scope) recordEffectScope(_effect, options.scope);
      }
      if (!options || !options.lazy) {
        _effect.run();
      }
      const runner = _effect.run.bind(_effect);
      runner.effect = _effect;
      return runner;
    }

    function stop(runner) {
      runner.effect.stop();
    }
    let shouldTrack = true;
    const trackStack = [];

    function pauseTracking() {
      trackStack.push(shouldTrack);
      shouldTrack = false;
    }

    function resetTracking() {
      const last2 = trackStack.pop();
      shouldTrack = last2 === void 0 ? true : last2;
    }

    function track(target, type, key) {
      if (shouldTrack && activeEffect) {
        let depsMap = targetMap.get(target);
        if (!depsMap) {
          targetMap.set(target, (depsMap = /* @__PURE__ */ new Map()));
        }
        let dep = depsMap.get(key);
        if (!dep) {
          depsMap.set(key, (dep = createDep()));
        }
        trackEffects(dep);
      }
    }

    function trackEffects(dep, debuggerEventExtraInfo) {
      let shouldTrack2 = false;
      if (effectTrackDepth <= maxMarkerBits) {
        if (!newTracked(dep)) {
          dep.n |= trackOpBit;
          shouldTrack2 = !wasTracked(dep);
        }
      } else {
        shouldTrack2 = !dep.has(activeEffect);
      }
      if (shouldTrack2) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
      }
    }

    function trigger(target, type, key, newValue, oldValue, oldTarget) {
      const depsMap = targetMap.get(target);
      if (!depsMap) {
        return;
      }
      let deps = [];
      if (type === "clear") {
        deps = [...depsMap.values()];
      } else if (key === "length" && isArray$1(target)) {
        const newLength = Number(newValue);
        depsMap.forEach((dep, key2) => {
          if (key2 === "length" || key2 >= newLength) {
            deps.push(dep);
          }
        });
      } else {
        if (key !== void 0) {
          deps.push(depsMap.get(key));
        }
        switch (type) {
          case "add":
            if (!isArray$1(target)) {
              deps.push(depsMap.get(ITERATE_KEY));
              if (isMap(target)) {
                deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
              }
            } else if (isIntegerKey(key)) {
              deps.push(depsMap.get("length"));
            }
            break;
          case "delete":
            if (!isArray$1(target)) {
              deps.push(depsMap.get(ITERATE_KEY));
              if (isMap(target)) {
                deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
              }
            }
            break;
          case "set":
            if (isMap(target)) {
              deps.push(depsMap.get(ITERATE_KEY));
            }
            break;
        }
      }
      if (deps.length === 1) {
        if (deps[0]) {
          {
            triggerEffects(deps[0]);
          }
        }
      } else {
        const effects = [];
        for (const dep of deps) {
          if (dep) {
            effects.push(...dep);
          }
        }
        {
          triggerEffects(createDep(effects));
        }
      }
    }

    function triggerEffects(dep, debuggerEventExtraInfo) {
      const effects = isArray$1(dep) ? dep : [...dep];
      for (const effect2 of effects) {
        if (effect2.computed) {
          triggerEffect(effect2);
        }
      }
      for (const effect2 of effects) {
        if (!effect2.computed) {
          triggerEffect(effect2);
        }
      }
    }

    function triggerEffect(effect2, debuggerEventExtraInfo) {
      if (effect2 !== activeEffect || effect2.allowRecurse) {
        if (effect2.scheduler) {
          effect2.scheduler();
        } else {
          effect2.run();
        }
      }
    }

    function getDepFromReactive(object, key) {
      var _a2;
      return (_a2 = targetMap.get(object)) == null ? void 0 : _a2.get(key);
    }
    const isNonTrackableKeys = /* @__PURE__ */ makeMap(
      `__proto__,__v_isRef,__isVue`,
    );
    const builtInSymbols = new Set(
      /* @__PURE__ */
      Object.getOwnPropertyNames(Symbol)
        .filter((key) => key !== "arguments" && key !== "caller")
        .map((key) => Symbol[key])
        .filter(isSymbol),
    );
    const get$1 = /* @__PURE__ */ createGetter();
    const shallowGet = /* @__PURE__ */ createGetter(false, true);
    const readonlyGet = /* @__PURE__ */ createGetter(true);
    const shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
    const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();

    function createArrayInstrumentations() {
      const instrumentations = {};
      ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
        instrumentations[key] = function (...args) {
          const arr = toRaw(this);
          for (let i = 0, l = this.length; i < l; i++) {
            track(arr, "get", i + "");
          }
          const res = arr[key](...args);
          if (res === -1 || res === false) {
            return arr[key](...args.map(toRaw));
          } else {
            return res;
          }
        };
      });
      ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
        instrumentations[key] = function (...args) {
          pauseTracking();
          const res = toRaw(this)[key].apply(this, args);
          resetTracking();
          return res;
        };
      });
      return instrumentations;
    }

    function hasOwnProperty$1(key) {
      const obj = toRaw(this);
      track(obj, "has", key);
      return obj.hasOwnProperty(key);
    }

    function createGetter(isReadonly2 = false, shallow = false) {
      return function get2(target, key, receiver) {
        if (key === "__v_isReactive") {
          return !isReadonly2;
        } else if (key === "__v_isReadonly") {
          return isReadonly2;
        } else if (key === "__v_isShallow") {
          return shallow;
        } else if (
          key === "__v_raw" &&
          receiver ===
            (isReadonly2
              ? shallow
                ? shallowReadonlyMap
                : readonlyMap
              : shallow
                ? shallowReactiveMap
                : reactiveMap
            ).get(target)
        ) {
          return target;
        }
        const targetIsArray = isArray$1(target);
        if (!isReadonly2) {
          if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
            return Reflect.get(arrayInstrumentations, key, receiver);
          }
          if (key === "hasOwnProperty") {
            return hasOwnProperty$1;
          }
        }
        const res = Reflect.get(target, key, receiver);
        if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
          return res;
        }
        if (!isReadonly2) {
          track(target, "get", key);
        }
        if (shallow) {
          return res;
        }
        if (isRef(res)) {
          return targetIsArray && isIntegerKey(key) ? res : res.value;
        }
        if (isObject$1(res)) {
          return isReadonly2 ? readonly(res) : reactive(res);
        }
        return res;
      };
    }
    const set$1 = /* @__PURE__ */ createSetter();
    const shallowSet = /* @__PURE__ */ createSetter(true);

    function createSetter(shallow = false) {
      return function set2(target, key, value, receiver) {
        let oldValue = target[key];
        if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
          return false;
        }
        if (!shallow) {
          if (!isShallow(value) && !isReadonly(value)) {
            oldValue = toRaw(oldValue);
            value = toRaw(value);
          }
          if (!isArray$1(target) && isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
          }
        }
        const hadKey =
          isArray$1(target) && isIntegerKey(key)
            ? Number(key) < target.length
            : hasOwn(target, key);
        const result = Reflect.set(target, key, value, receiver);
        if (target === toRaw(receiver)) {
          if (!hadKey) {
            trigger(target, "add", key, value);
          } else if (hasChanged(value, oldValue)) {
            trigger(target, "set", key, value);
          }
        }
        return result;
      };
    }

    function deleteProperty(target, key) {
      const hadKey = hasOwn(target, key);
      target[key];
      const result = Reflect.deleteProperty(target, key);
      if (result && hadKey) {
        trigger(target, "delete", key, void 0);
      }
      return result;
    }

    function has$1(target, key) {
      const result = Reflect.has(target, key);
      if (!isSymbol(key) || !builtInSymbols.has(key)) {
        track(target, "has", key);
      }
      return result;
    }

    function ownKeys(target) {
      track(target, "iterate", isArray$1(target) ? "length" : ITERATE_KEY);
      return Reflect.ownKeys(target);
    }
    const mutableHandlers = {
      get: get$1,
      set: set$1,
      deleteProperty,
      has: has$1,
      ownKeys,
    };
    const readonlyHandlers = {
      get: readonlyGet,
      set(target, key) {
        return true;
      },
      deleteProperty(target, key) {
        return true;
      },
    };
    const shallowReactiveHandlers = /* @__PURE__ */ extend$1(
      {},
      mutableHandlers,
      {
        get: shallowGet,
        set: shallowSet,
      },
    );
    const shallowReadonlyHandlers = /* @__PURE__ */ extend$1(
      {},
      readonlyHandlers,
      {
        get: shallowReadonlyGet,
      },
    );
    const toShallow = (value) => value;
    const getProto = (v) => Reflect.getPrototypeOf(v);

    function get(target, key, isReadonly2 = false, isShallow2 = false) {
      target = target["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (!isReadonly2) {
        if (key !== rawKey) {
          track(rawTarget, "get", key);
        }
        track(rawTarget, "get", rawKey);
      }
      const { has: has2 } = getProto(rawTarget);
      const wrap = isShallow2
        ? toShallow
        : isReadonly2
          ? toReadonly
          : toReactive;
      if (has2.call(rawTarget, key)) {
        return wrap(target.get(key));
      } else if (has2.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
      } else if (target !== rawTarget) {
        target.get(key);
      }
    }

    function has(key, isReadonly2 = false) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key);
      if (!isReadonly2) {
        if (key !== rawKey) {
          track(rawTarget, "has", key);
        }
        track(rawTarget, "has", rawKey);
      }
      return key === rawKey
        ? target.has(key)
        : target.has(key) || target.has(rawKey);
    }

    function size(target, isReadonly2 = false) {
      target = target["__v_raw"];
      !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
      return Reflect.get(target, "size", target);
    }

    function add(value) {
      value = toRaw(value);
      const target = toRaw(this);
      const proto = getProto(target);
      const hadKey = proto.has.call(target, value);
      if (!hadKey) {
        target.add(value);
        trigger(target, "add", value, value);
      }
      return this;
    }

    function set(key, value) {
      value = toRaw(value);
      const target = toRaw(this);
      const { has: has2, get: get2 } = getProto(target);
      let hadKey = has2.call(target, key);
      if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
      }
      const oldValue = get2.call(target, key);
      target.set(key, value);
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value);
      }
      return this;
    }

    function deleteEntry(key) {
      const target = toRaw(this);
      const { has: has2, get: get2 } = getProto(target);
      let hadKey = has2.call(target, key);
      if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
      }
      get2 ? get2.call(target, key) : void 0;
      const result = target.delete(key);
      if (hadKey) {
        trigger(target, "delete", key, void 0);
      }
      return result;
    }

    function clear() {
      const target = toRaw(this);
      const hadItems = target.size !== 0;
      const result = target.clear();
      if (hadItems) {
        trigger(target, "clear", void 0, void 0);
      }
      return result;
    }

    function createForEach(isReadonly2, isShallow2) {
      return function forEach2(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw"];
        const rawTarget = toRaw(target);
        const wrap = isShallow2
          ? toShallow
          : isReadonly2
            ? toReadonly
            : toReactive;
        !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
        return target.forEach((value, key) => {
          return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
      };
    }

    function createIterableMethod(method, isReadonly2, isShallow2) {
      return function (...args) {
        const target = this["__v_raw"];
        const rawTarget = toRaw(target);
        const targetIsMap = isMap(rawTarget);
        const isPair =
          method === "entries" || (method === Symbol.iterator && targetIsMap);
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow2
          ? toShallow
          : isReadonly2
            ? toReadonly
            : toReactive;
        !isReadonly2 &&
          track(
            rawTarget,
            "iterate",
            isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY,
          );
        return {
          // iterator protocol
          next() {
            const { value, done } = innerIterator.next();
            return done
              ? {
                  value,
                  done,
                }
              : {
                  value: isPair
                    ? [wrap(value[0]), wrap(value[1])]
                    : wrap(value),
                  done,
                };
          },
          // iterable protocol
          [Symbol.iterator]() {
            return this;
          },
        };
      };
    }

    function createReadonlyMethod(type) {
      return function (...args) {
        return type === "delete" ? false : this;
      };
    }

    function createInstrumentations() {
      const mutableInstrumentations2 = {
        get(key) {
          return get(this, key);
        },
        get size() {
          return size(this);
        },
        has,
        add,
        set,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false),
      };
      const shallowInstrumentations2 = {
        get(key) {
          return get(this, key, false, true);
        },
        get size() {
          return size(this);
        },
        has,
        add,
        set,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true),
      };
      const readonlyInstrumentations2 = {
        get(key) {
          return get(this, key, true);
        },
        get size() {
          return size(this, true);
        },
        has(key) {
          return has.call(this, key, true);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(true, false),
      };
      const shallowReadonlyInstrumentations2 = {
        get(key) {
          return get(this, key, true, true);
        },
        get size() {
          return size(this, true);
        },
        has(key) {
          return has.call(this, key, true);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(true, true),
      };
      const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
      iteratorMethods.forEach((method) => {
        mutableInstrumentations2[method] = createIterableMethod(
          method,
          false,
          false,
        );
        readonlyInstrumentations2[method] = createIterableMethod(
          method,
          true,
          false,
        );
        shallowInstrumentations2[method] = createIterableMethod(
          method,
          false,
          true,
        );
        shallowReadonlyInstrumentations2[method] = createIterableMethod(
          method,
          true,
          true,
        );
      });
      return [
        mutableInstrumentations2,
        readonlyInstrumentations2,
        shallowInstrumentations2,
        shallowReadonlyInstrumentations2,
      ];
    }
    const [
      mutableInstrumentations,
      readonlyInstrumentations,
      shallowInstrumentations,
      shallowReadonlyInstrumentations,
    ] = /* @__PURE__ */ createInstrumentations();

    function createInstrumentationGetter(isReadonly2, shallow) {
      const instrumentations = shallow
        ? isReadonly2
          ? shallowReadonlyInstrumentations
          : shallowInstrumentations
        : isReadonly2
          ? readonlyInstrumentations
          : mutableInstrumentations;
      return (target, key, receiver) => {
        if (key === "__v_isReactive") {
          return !isReadonly2;
        } else if (key === "__v_isReadonly") {
          return isReadonly2;
        } else if (key === "__v_raw") {
          return target;
        }
        return Reflect.get(
          hasOwn(instrumentations, key) && key in target
            ? instrumentations
            : target,
          key,
          receiver,
        );
      };
    }
    const mutableCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(false, false),
    };
    const shallowCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(false, true),
    };
    const readonlyCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(true, false),
    };
    const shallowReadonlyCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(true, true),
    };
    const reactiveMap = /* @__PURE__ */ new WeakMap();
    const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
    const readonlyMap = /* @__PURE__ */ new WeakMap();
    const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();

    function targetTypeMap(rawType) {
      switch (rawType) {
        case "Object":
        case "Array":
          return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
          return 2;
        default:
          return 0;
      }
    }

    function getTargetType(value) {
      return value["__v_skip"] || !Object.isExtensible(value)
        ? 0
        : targetTypeMap(toRawType(value));
    }

    function reactive(target) {
      if (isReadonly(target)) {
        return target;
      }
      return createReactiveObject(
        target,
        false,
        mutableHandlers,
        mutableCollectionHandlers,
        reactiveMap,
      );
    }

    function shallowReactive(target) {
      return createReactiveObject(
        target,
        false,
        shallowReactiveHandlers,
        shallowCollectionHandlers,
        shallowReactiveMap,
      );
    }

    function readonly(target) {
      return createReactiveObject(
        target,
        true,
        readonlyHandlers,
        readonlyCollectionHandlers,
        readonlyMap,
      );
    }

    function shallowReadonly(target) {
      return createReactiveObject(
        target,
        true,
        shallowReadonlyHandlers,
        shallowReadonlyCollectionHandlers,
        shallowReadonlyMap,
      );
    }

    function createReactiveObject(
      target,
      isReadonly2,
      baseHandlers,
      collectionHandlers,
      proxyMap,
    ) {
      if (!isObject$1(target)) {
        return target;
      }
      if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
        return target;
      }
      const existingProxy = proxyMap.get(target);
      if (existingProxy) {
        return existingProxy;
      }
      const targetType = getTargetType(target);
      if (targetType === 0) {
        return target;
      }
      const proxy = new Proxy(
        target,
        targetType === 2 ? collectionHandlers : baseHandlers,
      );
      proxyMap.set(target, proxy);
      return proxy;
    }

    function isReactive(value) {
      if (isReadonly(value)) {
        return isReactive(value["__v_raw"]);
      }
      return !!(value && value["__v_isReactive"]);
    }

    function isReadonly(value) {
      return !!(value && value["__v_isReadonly"]);
    }

    function isShallow(value) {
      return !!(value && value["__v_isShallow"]);
    }

    function isProxy(value) {
      return isReactive(value) || isReadonly(value);
    }

    function toRaw(observed) {
      const raw = observed && observed["__v_raw"];
      return raw ? toRaw(raw) : observed;
    }

    function markRaw(value) {
      def(value, "__v_skip", true);
      return value;
    }
    const toReactive = (value) => (isObject$1(value) ? reactive(value) : value);
    const toReadonly = (value) => (isObject$1(value) ? readonly(value) : value);

    function trackRefValue(ref2) {
      if (shouldTrack && activeEffect) {
        ref2 = toRaw(ref2);
        {
          trackEffects(ref2.dep || (ref2.dep = createDep()));
        }
      }
    }

    function triggerRefValue(ref2, newVal) {
      ref2 = toRaw(ref2);
      const dep = ref2.dep;
      if (dep) {
        {
          triggerEffects(dep);
        }
      }
    }

    function isRef(r) {
      return !!(r && r.__v_isRef === true);
    }

    function ref(value) {
      return createRef(value, false);
    }

    function shallowRef(value) {
      return createRef(value, true);
    }

    function createRef(rawValue, shallow) {
      if (isRef(rawValue)) {
        return rawValue;
      }
      return new RefImpl(rawValue, shallow);
    }
    class RefImpl {
      constructor(value, __v_isShallow) {
        this.__v_isShallow = __v_isShallow;
        this.dep = void 0;
        this.__v_isRef = true;
        this._rawValue = __v_isShallow ? value : toRaw(value);
        this._value = __v_isShallow ? value : toReactive(value);
      }
      get value() {
        trackRefValue(this);
        return this._value;
      }
      set value(newVal) {
        const useDirectValue =
          this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
        newVal = useDirectValue ? newVal : toRaw(newVal);
        if (hasChanged(newVal, this._rawValue)) {
          this._rawValue = newVal;
          this._value = useDirectValue ? newVal : toReactive(newVal);
          triggerRefValue(this);
        }
      }
    }

    function triggerRef(ref2) {
      triggerRefValue(ref2);
    }

    function unref(ref2) {
      return isRef(ref2) ? ref2.value : ref2;
    }

    function toValue(source) {
      return isFunction$1(source) ? source() : unref(source);
    }
    const shallowUnwrapHandlers = {
      get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
      set: (target, key, value, receiver) => {
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        } else {
          return Reflect.set(target, key, value, receiver);
        }
      },
    };

    function proxyRefs(objectWithRefs) {
      return isReactive(objectWithRefs)
        ? objectWithRefs
        : new Proxy(objectWithRefs, shallowUnwrapHandlers);
    }
    class CustomRefImpl {
      constructor(factory) {
        this.dep = void 0;
        this.__v_isRef = true;
        const { get: get2, set: set2 } = factory(
          () => trackRefValue(this),
          () => triggerRefValue(this),
        );
        this._get = get2;
        this._set = set2;
      }
      get value() {
        return this._get();
      }
      set value(newVal) {
        this._set(newVal);
      }
    }

    function customRef(factory) {
      return new CustomRefImpl(factory);
    }

    function toRefs(object) {
      const ret = isArray$1(object) ? new Array(object.length) : {};
      for (const key in object) {
        ret[key] = propertyToRef(object, key);
      }
      return ret;
    }
    class ObjectRefImpl {
      constructor(_object, _key, _defaultValue) {
        this._object = _object;
        this._key = _key;
        this._defaultValue = _defaultValue;
        this.__v_isRef = true;
      }
      get value() {
        const val = this._object[this._key];
        return val === void 0 ? this._defaultValue : val;
      }
      set value(newVal) {
        this._object[this._key] = newVal;
      }
      get dep() {
        return getDepFromReactive(toRaw(this._object), this._key);
      }
    }
    class GetterRefImpl {
      constructor(_getter) {
        this._getter = _getter;
        this.__v_isRef = true;
        this.__v_isReadonly = true;
      }
      get value() {
        return this._getter();
      }
    }

    function toRef(source, key, defaultValue) {
      if (isRef(source)) {
        return source;
      } else if (isFunction$1(source)) {
        return new GetterRefImpl(source);
      } else if (isObject$1(source) && arguments.length > 1) {
        return propertyToRef(source, key, defaultValue);
      } else {
        return ref(source);
      }
    }

    function propertyToRef(source, key, defaultValue) {
      const val = source[key];
      return isRef(val) ? val : new ObjectRefImpl(source, key, defaultValue);
    }
    class ComputedRefImpl {
      constructor(getter, _setter, isReadonly2, isSSR) {
        this._setter = _setter;
        this.dep = void 0;
        this.__v_isRef = true;
        this["__v_isReadonly"] = false;
        this._dirty = true;
        this.effect = new ReactiveEffect(getter, () => {
          if (!this._dirty) {
            this._dirty = true;
            triggerRefValue(this);
          }
        });
        this.effect.computed = this;
        this.effect.active = this._cacheable = !isSSR;
        this["__v_isReadonly"] = isReadonly2;
      }
      get value() {
        const self2 = toRaw(this);
        trackRefValue(self2);
        if (self2._dirty || !self2._cacheable) {
          self2._dirty = false;
          self2._value = self2.effect.run();
        }
        return self2._value;
      }
      set value(newValue) {
        this._setter(newValue);
      }
    }

    function computed$1(getterOrOptions, debugOptions, isSSR = false) {
      let getter;
      let setter;
      const onlyGetter = isFunction$1(getterOrOptions);
      if (onlyGetter) {
        getter = getterOrOptions;
        setter = NOOP;
      } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
      }
      const cRef = new ComputedRefImpl(
        getter,
        setter,
        onlyGetter || !setter,
        isSSR,
      );
      return cRef;
    }

    function warn(msg, ...args) {
      return;
    }

    function assertNumber(val, type) {
      return;
    }

    function callWithErrorHandling(fn, instance, type, args) {
      let res;
      try {
        res = args ? fn(...args) : fn();
      } catch (err) {
        handleError(err, instance, type);
      }
      return res;
    }

    function callWithAsyncErrorHandling(fn, instance, type, args) {
      if (isFunction$1(fn)) {
        const res = callWithErrorHandling(fn, instance, type, args);
        if (res && isPromise(res)) {
          res.catch((err) => {
            handleError(err, instance, type);
          });
        }
        return res;
      }
      const values = [];
      for (let i = 0; i < fn.length; i++) {
        values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
      }
      return values;
    }

    function handleError(err, instance, type, throwInDev = true) {
      const contextVNode = instance ? instance.vnode : null;
      if (instance) {
        let cur = instance.parent;
        const exposedInstance = instance.proxy;
        const errorInfo = type;
        while (cur) {
          const errorCapturedHooks = cur.ec;
          if (errorCapturedHooks) {
            for (let i = 0; i < errorCapturedHooks.length; i++) {
              if (
                errorCapturedHooks[i](err, exposedInstance, errorInfo) === false
              ) {
                return;
              }
            }
          }
          cur = cur.parent;
        }
        const appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) {
          callWithErrorHandling(appErrorHandler, null, 10, [
            err,
            exposedInstance,
            errorInfo,
          ]);
          return;
        }
      }
      logError(err, type, contextVNode, throwInDev);
    }

    function logError(err, type, contextVNode, throwInDev = true) {
      {
        console.error(err);
      }
    }
    let isFlushing = false;
    let isFlushPending = false;
    const queue = [];
    let flushIndex = 0;
    const pendingPostFlushCbs = [];
    let activePostFlushCbs = null;
    let postFlushIndex = 0;
    const resolvedPromise = /* @__PURE__ */ Promise.resolve();
    let currentFlushPromise = null;

    function nextTick(fn) {
      const p2 = currentFlushPromise || resolvedPromise;
      return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
    }

    function findInsertionIndex(id) {
      let start = flushIndex + 1;
      let end = queue.length;
      while (start < end) {
        const middle = (start + end) >>> 1;
        const middleJobId = getId(queue[middle]);
        middleJobId < id ? (start = middle + 1) : (end = middle);
      }
      return start;
    }

    function queueJob(job) {
      if (
        !queue.length ||
        !queue.includes(
          job,
          isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex,
        )
      ) {
        if (job.id == null) {
          queue.push(job);
        } else {
          queue.splice(findInsertionIndex(job.id), 0, job);
        }
        queueFlush();
      }
    }

    function queueFlush() {
      if (!isFlushing && !isFlushPending) {
        isFlushPending = true;
        currentFlushPromise = resolvedPromise.then(flushJobs);
      }
    }

    function invalidateJob(job) {
      const i = queue.indexOf(job);
      if (i > flushIndex) {
        queue.splice(i, 1);
      }
    }

    function queuePostFlushCb(cb) {
      if (!isArray$1(cb)) {
        if (
          !activePostFlushCbs ||
          !activePostFlushCbs.includes(
            cb,
            cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex,
          )
        ) {
          pendingPostFlushCbs.push(cb);
        }
      } else {
        pendingPostFlushCbs.push(...cb);
      }
      queueFlush();
    }

    function flushPreFlushCbs(seen2, i = isFlushing ? flushIndex + 1 : 0) {
      for (; i < queue.length; i++) {
        const cb = queue[i];
        if (cb && cb.pre) {
          queue.splice(i, 1);
          i--;
          cb();
        }
      }
    }

    function flushPostFlushCbs(seen2) {
      if (pendingPostFlushCbs.length) {
        const deduped = [...new Set(pendingPostFlushCbs)];
        pendingPostFlushCbs.length = 0;
        if (activePostFlushCbs) {
          activePostFlushCbs.push(...deduped);
          return;
        }
        activePostFlushCbs = deduped;
        activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
        for (
          postFlushIndex = 0;
          postFlushIndex < activePostFlushCbs.length;
          postFlushIndex++
        ) {
          activePostFlushCbs[postFlushIndex]();
        }
        activePostFlushCbs = null;
        postFlushIndex = 0;
      }
    }
    const getId = (job) => (job.id == null ? Infinity : job.id);
    const comparator = (a, b) => {
      const diff = getId(a) - getId(b);
      if (diff === 0) {
        if (a.pre && !b.pre) return -1;
        if (b.pre && !a.pre) return 1;
      }
      return diff;
    };

    function flushJobs(seen2) {
      isFlushPending = false;
      isFlushing = true;
      queue.sort(comparator);
      const check = NOOP;
      try {
        for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
          const job = queue[flushIndex];
          if (job && job.active !== false) {
            if (false);
            callWithErrorHandling(job, null, 14);
          }
        }
      } finally {
        flushIndex = 0;
        queue.length = 0;
        flushPostFlushCbs();
        isFlushing = false;
        currentFlushPromise = null;
        if (queue.length || pendingPostFlushCbs.length) {
          flushJobs();
        }
      }
    }
    let devtools;
    let buffer = [];

    function setDevtoolsHook(hook, target) {
      var _a2, _b;
      devtools = hook;
      if (devtools) {
        devtools.enabled = true;
        buffer.forEach(({ event, args }) => devtools.emit(event, ...args));
        buffer = [];
      } else if (
        // handle late devtools injection - only do this if we are in an actual
        // browser environment to avoid the timer handle stalling test runner exit
        // (#4815)
        typeof window !== "undefined" && // some envs mock window but not fully
        window.HTMLElement && // also exclude jsdom
        !((_b = (_a2 = window.navigator) == null ? void 0 : _a2.userAgent) ==
        null
          ? void 0
          : _b.includes("jsdom"))
      ) {
        const replay = (target.__VUE_DEVTOOLS_HOOK_REPLAY__ =
          target.__VUE_DEVTOOLS_HOOK_REPLAY__ || []);
        replay.push((newHook) => {
          setDevtoolsHook(newHook, target);
        });
        setTimeout(() => {
          if (!devtools) {
            target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
            buffer = [];
          }
        }, 3e3);
      } else {
        buffer = [];
      }
    }

    function emit(instance, event, ...rawArgs) {
      if (instance.isUnmounted) return;
      const props = instance.vnode.props || EMPTY_OBJ;
      let args = rawArgs;
      const isModelListener2 = event.startsWith("update:");
      const modelArg = isModelListener2 && event.slice(7);
      if (modelArg && modelArg in props) {
        const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
        const { number, trim: trim2 } = props[modifiersKey] || EMPTY_OBJ;
        if (trim2) {
          args = rawArgs.map((a) => (isString$2(a) ? a.trim() : a));
        }
        if (number) {
          args = rawArgs.map(looseToNumber);
        }
      }
      let handlerName;
      let handler =
        props[(handlerName = toHandlerKey(event))] || // also try camelCase event handler (#2249)
        props[(handlerName = toHandlerKey(camelize(event)))];
      if (!handler && isModelListener2) {
        handler = props[(handlerName = toHandlerKey(hyphenate(event)))];
      }
      if (handler) {
        callWithAsyncErrorHandling(handler, instance, 6, args);
      }
      const onceHandler = props[handlerName + `Once`];
      if (onceHandler) {
        if (!instance.emitted) {
          instance.emitted = {};
        } else if (instance.emitted[handlerName]) {
          return;
        }
        instance.emitted[handlerName] = true;
        callWithAsyncErrorHandling(onceHandler, instance, 6, args);
      }
    }

    function normalizeEmitsOptions(comp, appContext, asMixin = false) {
      const cache = appContext.emitsCache;
      const cached = cache.get(comp);
      if (cached !== void 0) {
        return cached;
      }
      const raw = comp.emits;
      let normalized = {};
      let hasExtends = false;
      if (!isFunction$1(comp)) {
        const extendEmits = (raw2) => {
          const normalizedFromExtend = normalizeEmitsOptions(
            raw2,
            appContext,
            true,
          );
          if (normalizedFromExtend) {
            hasExtends = true;
            extend$1(normalized, normalizedFromExtend);
          }
        };
        if (!asMixin && appContext.mixins.length) {
          appContext.mixins.forEach(extendEmits);
        }
        if (comp.extends) {
          extendEmits(comp.extends);
        }
        if (comp.mixins) {
          comp.mixins.forEach(extendEmits);
        }
      }
      if (!raw && !hasExtends) {
        if (isObject$1(comp)) {
          cache.set(comp, null);
        }
        return null;
      }
      if (isArray$1(raw)) {
        raw.forEach((key) => (normalized[key] = null));
      } else {
        extend$1(normalized, raw);
      }
      if (isObject$1(comp)) {
        cache.set(comp, normalized);
      }
      return normalized;
    }

    function isEmitListener(options, key) {
      if (!options || !isOn(key)) {
        return false;
      }
      key = key.slice(2).replace(/Once$/, "");
      return (
        hasOwn(options, key[0].toLowerCase() + key.slice(1)) ||
        hasOwn(options, hyphenate(key)) ||
        hasOwn(options, key)
      );
    }
    let currentRenderingInstance = null;
    let currentScopeId = null;

    function setCurrentRenderingInstance(instance) {
      const prev = currentRenderingInstance;
      currentRenderingInstance = instance;
      currentScopeId = (instance && instance.type.__scopeId) || null;
      return prev;
    }

    function pushScopeId(id) {
      currentScopeId = id;
    }

    function popScopeId() {
      currentScopeId = null;
    }
    const withScopeId = (_id) => withCtx;

    function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
      if (!ctx) return fn;
      if (fn._n) {
        return fn;
      }
      const renderFnWithContext = (...args) => {
        if (renderFnWithContext._d) {
          setBlockTracking(-1);
        }
        const prevInstance = setCurrentRenderingInstance(ctx);
        let res;
        try {
          res = fn(...args);
        } finally {
          setCurrentRenderingInstance(prevInstance);
          if (renderFnWithContext._d) {
            setBlockTracking(1);
          }
        }
        return res;
      };
      renderFnWithContext._n = true;
      renderFnWithContext._c = true;
      renderFnWithContext._d = true;
      return renderFnWithContext;
    }

    function markAttrsAccessed() {}

    function renderComponentRoot(instance) {
      const {
        type: Component,
        vnode,
        proxy,
        withProxy,
        props,
        propsOptions: [propsOptions],
        slots,
        attrs,
        emit: emit2,
        render: render2,
        renderCache,
        data,
        setupState,
        ctx,
        inheritAttrs,
      } = instance;
      let result;
      let fallthroughAttrs;
      const prev = setCurrentRenderingInstance(instance);
      try {
        if (vnode.shapeFlag & 4) {
          const proxyToUse = withProxy || proxy;
          result = normalizeVNode(
            render2.call(
              proxyToUse,
              proxyToUse,
              renderCache,
              props,
              setupState,
              data,
              ctx,
            ),
          );
          fallthroughAttrs = attrs;
        } else {
          const render22 = Component;
          if (false);
          result = normalizeVNode(
            render22.length > 1
              ? render22(
                  props,
                  false
                    ? {
                        get attrs() {
                          markAttrsAccessed();
                          return attrs;
                        },
                        slots,
                        emit: emit2,
                      }
                    : {
                        attrs,
                        slots,
                        emit: emit2,
                      },
                )
              : render22(
                  props,
                  null,
                  /* we know it doesn't need it */
                ),
          );
          fallthroughAttrs = Component.props
            ? attrs
            : getFunctionalFallthrough(attrs);
        }
      } catch (err) {
        blockStack.length = 0;
        handleError(err, instance, 1);
        result = createVNode(Comment);
      }
      let root = result;
      if (fallthroughAttrs && inheritAttrs !== false) {
        const keys = Object.keys(fallthroughAttrs);
        const { shapeFlag } = root;
        if (keys.length) {
          if (shapeFlag & (1 | 6)) {
            if (propsOptions && keys.some(isModelListener)) {
              fallthroughAttrs = filterModelListeners(
                fallthroughAttrs,
                propsOptions,
              );
            }
            root = cloneVNode(root, fallthroughAttrs);
          }
        }
      }
      if (vnode.dirs) {
        root = cloneVNode(root);
        root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
      }
      if (vnode.transition) {
        root.transition = vnode.transition;
      }
      {
        result = root;
      }
      setCurrentRenderingInstance(prev);
      return result;
    }

    function filterSingleRoot(children) {
      let singleRoot;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (isVNode(child)) {
          if (child.type !== Comment || child.children === "v-if") {
            if (singleRoot) {
              return;
            } else {
              singleRoot = child;
            }
          }
        } else {
          return;
        }
      }
      return singleRoot;
    }
    const getFunctionalFallthrough = (attrs) => {
      let res;
      for (const key in attrs) {
        if (key === "class" || key === "style" || isOn(key)) {
          (res || (res = {}))[key] = attrs[key];
        }
      }
      return res;
    };
    const filterModelListeners = (attrs, props) => {
      const res = {};
      for (const key in attrs) {
        if (!isModelListener(key) || !(key.slice(9) in props)) {
          res[key] = attrs[key];
        }
      }
      return res;
    };

    function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
      const { props: prevProps, children: prevChildren, component } = prevVNode;
      const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
      const emits = component.emitsOptions;
      if (nextVNode.dirs || nextVNode.transition) {
        return true;
      }
      if (optimized && patchFlag >= 0) {
        if (patchFlag & 1024) {
          return true;
        }
        if (patchFlag & 16) {
          if (!prevProps) {
            return !!nextProps;
          }
          return hasPropsChanged(prevProps, nextProps, emits);
        } else if (patchFlag & 8) {
          const dynamicProps = nextVNode.dynamicProps;
          for (let i = 0; i < dynamicProps.length; i++) {
            const key = dynamicProps[i];
            if (
              nextProps[key] !== prevProps[key] &&
              !isEmitListener(emits, key)
            ) {
              return true;
            }
          }
        }
      } else {
        if (prevChildren || nextChildren) {
          if (!nextChildren || !nextChildren.$stable) {
            return true;
          }
        }
        if (prevProps === nextProps) {
          return false;
        }
        if (!prevProps) {
          return !!nextProps;
        }
        if (!nextProps) {
          return true;
        }
        return hasPropsChanged(prevProps, nextProps, emits);
      }
      return false;
    }

    function hasPropsChanged(prevProps, nextProps, emitsOptions) {
      const nextKeys = Object.keys(nextProps);
      if (nextKeys.length !== Object.keys(prevProps).length) {
        return true;
      }
      for (let i = 0; i < nextKeys.length; i++) {
        const key = nextKeys[i];
        if (
          nextProps[key] !== prevProps[key] &&
          !isEmitListener(emitsOptions, key)
        ) {
          return true;
        }
      }
      return false;
    }

    function updateHOCHostEl({ vnode, parent }, el) {
      while (parent && parent.subTree === vnode) {
        (vnode = parent.vnode).el = el;
        parent = parent.parent;
      }
    }
    const isSuspense = (type) => type.__isSuspense;
    const SuspenseImpl = {
      name: "Suspense",
      // In order to make Suspense tree-shakable, we need to avoid importing it
      // directly in the renderer. The renderer checks for the __isSuspense flag
      // on a vnode's type and calls the `process` method, passing in renderer
      // internals.
      __isSuspense: true,
      process(
        n1,
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized,
        rendererInternals,
      ) {
        if (n1 == null) {
          mountSuspense(
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized,
            rendererInternals,
          );
        } else {
          patchSuspense(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            isSVG,
            slotScopeIds,
            optimized,
            rendererInternals,
          );
        }
      },
      hydrate: hydrateSuspense,
      create: createSuspenseBoundary,
      normalize: normalizeSuspenseChildren,
    };
    const Suspense = SuspenseImpl;

    function triggerEvent(vnode, name) {
      const eventListener = vnode.props && vnode.props[name];
      if (isFunction$1(eventListener)) {
        eventListener();
      }
    }

    function mountSuspense(
      vnode,
      container,
      anchor,
      parentComponent,
      parentSuspense,
      isSVG,
      slotScopeIds,
      optimized,
      rendererInternals,
    ) {
      const {
        p: patch,
        o: { createElement },
      } = rendererInternals;
      const hiddenContainer = createElement("div");
      const suspense = (vnode.suspense = createSuspenseBoundary(
        vnode,
        parentSuspense,
        parentComponent,
        container,
        hiddenContainer,
        anchor,
        isSVG,
        slotScopeIds,
        optimized,
        rendererInternals,
      ));
      patch(
        null,
        (suspense.pendingBranch = vnode.ssContent),
        hiddenContainer,
        null,
        parentComponent,
        suspense,
        isSVG,
        slotScopeIds,
      );
      if (suspense.deps > 0) {
        triggerEvent(vnode, "onPending");
        triggerEvent(vnode, "onFallback");
        patch(
          null,
          vnode.ssFallback,
          container,
          anchor,
          parentComponent,
          null,
          // fallback tree will not have suspense context
          isSVG,
          slotScopeIds,
        );
        setActiveBranch(suspense, vnode.ssFallback);
      } else {
        suspense.resolve(false, true);
      }
    }

    function patchSuspense(
      n1,
      n2,
      container,
      anchor,
      parentComponent,
      isSVG,
      slotScopeIds,
      optimized,
      { p: patch, um: unmount, o: { createElement } },
    ) {
      const suspense = (n2.suspense = n1.suspense);
      suspense.vnode = n2;
      n2.el = n1.el;
      const newBranch = n2.ssContent;
      const newFallback = n2.ssFallback;
      const { activeBranch, pendingBranch, isInFallback, isHydrating } =
        suspense;
      if (pendingBranch) {
        suspense.pendingBranch = newBranch;
        if (isSameVNodeType(newBranch, pendingBranch)) {
          patch(
            pendingBranch,
            newBranch,
            suspense.hiddenContainer,
            null,
            parentComponent,
            suspense,
            isSVG,
            slotScopeIds,
            optimized,
          );
          if (suspense.deps <= 0) {
            suspense.resolve();
          } else if (isInFallback) {
            patch(
              activeBranch,
              newFallback,
              container,
              anchor,
              parentComponent,
              null,
              // fallback tree will not have suspense context
              isSVG,
              slotScopeIds,
              optimized,
            );
            setActiveBranch(suspense, newFallback);
          }
        } else {
          suspense.pendingId++;
          if (isHydrating) {
            suspense.isHydrating = false;
            suspense.activeBranch = pendingBranch;
          } else {
            unmount(pendingBranch, parentComponent, suspense);
          }
          suspense.deps = 0;
          suspense.effects.length = 0;
          suspense.hiddenContainer = createElement("div");
          if (isInFallback) {
            patch(
              null,
              newBranch,
              suspense.hiddenContainer,
              null,
              parentComponent,
              suspense,
              isSVG,
              slotScopeIds,
              optimized,
            );
            if (suspense.deps <= 0) {
              suspense.resolve();
            } else {
              patch(
                activeBranch,
                newFallback,
                container,
                anchor,
                parentComponent,
                null,
                // fallback tree will not have suspense context
                isSVG,
                slotScopeIds,
                optimized,
              );
              setActiveBranch(suspense, newFallback);
            }
          } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
            patch(
              activeBranch,
              newBranch,
              container,
              anchor,
              parentComponent,
              suspense,
              isSVG,
              slotScopeIds,
              optimized,
            );
            suspense.resolve(true);
          } else {
            patch(
              null,
              newBranch,
              suspense.hiddenContainer,
              null,
              parentComponent,
              suspense,
              isSVG,
              slotScopeIds,
              optimized,
            );
            if (suspense.deps <= 0) {
              suspense.resolve();
            }
          }
        }
      } else {
        if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
          patch(
            activeBranch,
            newBranch,
            container,
            anchor,
            parentComponent,
            suspense,
            isSVG,
            slotScopeIds,
            optimized,
          );
          setActiveBranch(suspense, newBranch);
        } else {
          triggerEvent(n2, "onPending");
          suspense.pendingBranch = newBranch;
          suspense.pendingId++;
          patch(
            null,
            newBranch,
            suspense.hiddenContainer,
            null,
            parentComponent,
            suspense,
            isSVG,
            slotScopeIds,
            optimized,
          );
          if (suspense.deps <= 0) {
            suspense.resolve();
          } else {
            const { timeout, pendingId } = suspense;
            if (timeout > 0) {
              setTimeout(() => {
                if (suspense.pendingId === pendingId) {
                  suspense.fallback(newFallback);
                }
              }, timeout);
            } else if (timeout === 0) {
              suspense.fallback(newFallback);
            }
          }
        }
      }
    }

    function createSuspenseBoundary(
      vnode,
      parentSuspense,
      parentComponent,
      container,
      hiddenContainer,
      anchor,
      isSVG,
      slotScopeIds,
      optimized,
      rendererInternals,
      isHydrating = false,
    ) {
      const {
        p: patch,
        m: move,
        um: unmount,
        n: next,
        o: { parentNode, remove: remove2 },
      } = rendererInternals;
      let parentSuspenseId;
      const isSuspensible = isVNodeSuspensible(vnode);
      if (isSuspensible) {
        if (parentSuspense == null ? void 0 : parentSuspense.pendingBranch) {
          parentSuspenseId = parentSuspense.pendingId;
          parentSuspense.deps++;
        }
      }
      const timeout = vnode.props ? toNumber(vnode.props.timeout) : void 0;
      const suspense = {
        vnode,
        parent: parentSuspense,
        parentComponent,
        isSVG,
        container,
        hiddenContainer,
        anchor,
        deps: 0,
        pendingId: 0,
        timeout: typeof timeout === "number" ? timeout : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: true,
        isHydrating,
        isUnmounted: false,
        effects: [],
        resolve(resume = false, sync = false) {
          const {
            vnode: vnode2,
            activeBranch,
            pendingBranch,
            pendingId,
            effects,
            parentComponent: parentComponent2,
            container: container2,
          } = suspense;
          if (suspense.isHydrating) {
            suspense.isHydrating = false;
          } else if (!resume) {
            const delayEnter =
              activeBranch &&
              pendingBranch.transition &&
              pendingBranch.transition.mode === "out-in";
            if (delayEnter) {
              activeBranch.transition.afterLeave = () => {
                if (pendingId === suspense.pendingId) {
                  move(pendingBranch, container2, anchor2, 0);
                }
              };
            }
            let { anchor: anchor2 } = suspense;
            if (activeBranch) {
              anchor2 = next(activeBranch);
              unmount(activeBranch, parentComponent2, suspense, true);
            }
            if (!delayEnter) {
              move(pendingBranch, container2, anchor2, 0);
            }
          }
          setActiveBranch(suspense, pendingBranch);
          suspense.pendingBranch = null;
          suspense.isInFallback = false;
          let parent = suspense.parent;
          let hasUnresolvedAncestor = false;
          while (parent) {
            if (parent.pendingBranch) {
              parent.effects.push(...effects);
              hasUnresolvedAncestor = true;
              break;
            }
            parent = parent.parent;
          }
          if (!hasUnresolvedAncestor) {
            queuePostFlushCb(effects);
          }
          suspense.effects = [];
          if (isSuspensible) {
            if (
              parentSuspense &&
              parentSuspense.pendingBranch &&
              parentSuspenseId === parentSuspense.pendingId
            ) {
              parentSuspense.deps--;
              if (parentSuspense.deps === 0 && !sync) {
                parentSuspense.resolve();
              }
            }
          }
          triggerEvent(vnode2, "onResolve");
        },
        fallback(fallbackVNode) {
          if (!suspense.pendingBranch) {
            return;
          }
          const {
            vnode: vnode2,
            activeBranch,
            parentComponent: parentComponent2,
            container: container2,
            isSVG: isSVG2,
          } = suspense;
          triggerEvent(vnode2, "onFallback");
          const anchor2 = next(activeBranch);
          const mountFallback = () => {
            if (!suspense.isInFallback) {
              return;
            }
            patch(
              null,
              fallbackVNode,
              container2,
              anchor2,
              parentComponent2,
              null,
              // fallback tree will not have suspense context
              isSVG2,
              slotScopeIds,
              optimized,
            );
            setActiveBranch(suspense, fallbackVNode);
          };
          const delayEnter =
            fallbackVNode.transition &&
            fallbackVNode.transition.mode === "out-in";
          if (delayEnter) {
            activeBranch.transition.afterLeave = mountFallback;
          }
          suspense.isInFallback = true;
          unmount(
            activeBranch,
            parentComponent2,
            null,
            // no suspense so unmount hooks fire now
            true,
            // shouldRemove
          );
          if (!delayEnter) {
            mountFallback();
          }
        },
        move(container2, anchor2, type) {
          suspense.activeBranch &&
            move(suspense.activeBranch, container2, anchor2, type);
          suspense.container = container2;
        },
        next() {
          return suspense.activeBranch && next(suspense.activeBranch);
        },
        registerDep(instance, setupRenderEffect) {
          const isInPendingSuspense = !!suspense.pendingBranch;
          if (isInPendingSuspense) {
            suspense.deps++;
          }
          const hydratedEl = instance.vnode.el;
          instance.asyncDep
            .catch((err) => {
              handleError(err, instance, 0);
            })
            .then((asyncSetupResult) => {
              if (
                instance.isUnmounted ||
                suspense.isUnmounted ||
                suspense.pendingId !== instance.suspenseId
              ) {
                return;
              }
              instance.asyncResolved = true;
              const { vnode: vnode2 } = instance;
              handleSetupResult(instance, asyncSetupResult, false);
              if (hydratedEl) {
                vnode2.el = hydratedEl;
              }
              const placeholder = !hydratedEl && instance.subTree.el;
              setupRenderEffect(
                instance,
                vnode2,
                // component may have been moved before resolve.
                // if this is not a hydration, instance.subTree will be the comment
                // placeholder.
                parentNode(hydratedEl || instance.subTree.el),
                // anchor will not be used if this is hydration, so only need to
                // consider the comment placeholder case.
                hydratedEl ? null : next(instance.subTree),
                suspense,
                isSVG,
                optimized,
              );
              if (placeholder) {
                remove2(placeholder);
              }
              updateHOCHostEl(instance, vnode2.el);
              if (isInPendingSuspense && --suspense.deps === 0) {
                suspense.resolve();
              }
            });
        },
        unmount(parentSuspense2, doRemove) {
          suspense.isUnmounted = true;
          if (suspense.activeBranch) {
            unmount(
              suspense.activeBranch,
              parentComponent,
              parentSuspense2,
              doRemove,
            );
          }
          if (suspense.pendingBranch) {
            unmount(
              suspense.pendingBranch,
              parentComponent,
              parentSuspense2,
              doRemove,
            );
          }
        },
      };
      return suspense;
    }

    function hydrateSuspense(
      node,
      vnode,
      parentComponent,
      parentSuspense,
      isSVG,
      slotScopeIds,
      optimized,
      rendererInternals,
      hydrateNode,
    ) {
      const suspense = (vnode.suspense = createSuspenseBoundary(
        vnode,
        parentSuspense,
        parentComponent,
        node.parentNode,
        document.createElement("div"),
        null,
        isSVG,
        slotScopeIds,
        optimized,
        rendererInternals,
        true,
        /* hydrating */
      ));
      const result = hydrateNode(
        node,
        (suspense.pendingBranch = vnode.ssContent),
        parentComponent,
        suspense,
        slotScopeIds,
        optimized,
      );
      if (suspense.deps === 0) {
        suspense.resolve(false, true);
      }
      return result;
    }

    function normalizeSuspenseChildren(vnode) {
      const { shapeFlag, children } = vnode;
      const isSlotChildren = shapeFlag & 32;
      vnode.ssContent = normalizeSuspenseSlot(
        isSlotChildren ? children.default : children,
      );
      vnode.ssFallback = isSlotChildren
        ? normalizeSuspenseSlot(children.fallback)
        : createVNode(Comment);
    }

    function normalizeSuspenseSlot(s) {
      let block;
      if (isFunction$1(s)) {
        const trackBlock = isBlockTreeEnabled && s._c;
        if (trackBlock) {
          s._d = false;
          openBlock();
        }
        s = s();
        if (trackBlock) {
          s._d = true;
          block = currentBlock;
          closeBlock();
        }
      }
      if (isArray$1(s)) {
        const singleChild = filterSingleRoot(s);
        s = singleChild;
      }
      s = normalizeVNode(s);
      if (block && !s.dynamicChildren) {
        s.dynamicChildren = block.filter((c2) => c2 !== s);
      }
      return s;
    }

    function queueEffectWithSuspense(fn, suspense) {
      if (suspense && suspense.pendingBranch) {
        if (isArray$1(fn)) {
          suspense.effects.push(...fn);
        } else {
          suspense.effects.push(fn);
        }
      } else {
        queuePostFlushCb(fn);
      }
    }

    function setActiveBranch(suspense, branch) {
      suspense.activeBranch = branch;
      const { vnode, parentComponent } = suspense;
      const el = (vnode.el = branch.el);
      if (parentComponent && parentComponent.subTree === vnode) {
        parentComponent.vnode.el = el;
        updateHOCHostEl(parentComponent, el);
      }
    }

    function isVNodeSuspensible(vnode) {
      var _a2;
      return (
        ((_a2 = vnode.props) == null ? void 0 : _a2.suspensible) != null &&
        vnode.props.suspensible !== false
      );
    }

    function watchEffect(effect2, options) {
      return doWatch(effect2, null, options);
    }

    function watchPostEffect(effect2, options) {
      return doWatch(effect2, null, {
        flush: "post",
      });
    }

    function watchSyncEffect(effect2, options) {
      return doWatch(effect2, null, {
        flush: "sync",
      });
    }
    const INITIAL_WATCHER_VALUE = {};

    function watch(source, cb, options) {
      return doWatch(source, cb, options);
    }

    function doWatch(
      source,
      cb,
      { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ,
    ) {
      var _a2;
      const instance =
        getCurrentScope() ===
        ((_a2 = currentInstance) == null ? void 0 : _a2.scope)
          ? currentInstance
          : null;
      let getter;
      let forceTrigger = false;
      let isMultiSource = false;
      if (isRef(source)) {
        getter = () => source.value;
        forceTrigger = isShallow(source);
      } else if (isReactive(source)) {
        getter = () => source;
        deep = true;
      } else if (isArray$1(source)) {
        isMultiSource = true;
        forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
        getter = () =>
          source.map((s) => {
            if (isRef(s)) {
              return s.value;
            } else if (isReactive(s)) {
              return traverse(s);
            } else if (isFunction$1(s)) {
              return callWithErrorHandling(s, instance, 2);
            } else;
          });
      } else if (isFunction$1(source)) {
        if (cb) {
          getter = () => callWithErrorHandling(source, instance, 2);
        } else {
          getter = () => {
            if (instance && instance.isUnmounted) {
              return;
            }
            if (cleanup) {
              cleanup();
            }
            return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
          };
        }
      } else {
        getter = NOOP;
      }
      if (cb && deep) {
        const baseGetter = getter;
        getter = () => traverse(baseGetter());
      }
      let cleanup;
      let onCleanup = (fn) => {
        cleanup = effect2.onStop = () => {
          callWithErrorHandling(fn, instance, 4);
        };
      };
      let ssrCleanup;
      if (isInSSRComponentSetup) {
        onCleanup = NOOP;
        if (!cb) {
          getter();
        } else if (immediate) {
          callWithAsyncErrorHandling(cb, instance, 3, [
            getter(),
            isMultiSource ? [] : void 0,
            onCleanup,
          ]);
        }
        if (flush === "sync") {
          const ctx = useSSRContext();
          ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
        } else {
          return NOOP;
        }
      }
      let oldValue = isMultiSource
        ? new Array(source.length).fill(INITIAL_WATCHER_VALUE)
        : INITIAL_WATCHER_VALUE;
      const job = () => {
        if (!effect2.active) {
          return;
        }
        if (cb) {
          const newValue = effect2.run();
          if (
            deep ||
            forceTrigger ||
            (isMultiSource
              ? newValue.some((v, i) => hasChanged(v, oldValue[i]))
              : hasChanged(newValue, oldValue)) ||
            false
          ) {
            if (cleanup) {
              cleanup();
            }
            callWithAsyncErrorHandling(cb, instance, 3, [
              newValue,
              // pass undefined as the old value when it's changed for the first time
              oldValue === INITIAL_WATCHER_VALUE
                ? void 0
                : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE
                  ? []
                  : oldValue,
              onCleanup,
            ]);
            oldValue = newValue;
          }
        } else {
          effect2.run();
        }
      };
      job.allowRecurse = !!cb;
      let scheduler;
      if (flush === "sync") {
        scheduler = job;
      } else if (flush === "post") {
        scheduler = () =>
          queuePostRenderEffect(job, instance && instance.suspense);
      } else {
        job.pre = true;
        if (instance) job.id = instance.uid;
        scheduler = () => queueJob(job);
      }
      const effect2 = new ReactiveEffect(getter, scheduler);
      if (cb) {
        if (immediate) {
          job();
        } else {
          oldValue = effect2.run();
        }
      } else if (flush === "post") {
        queuePostRenderEffect(
          effect2.run.bind(effect2),
          instance && instance.suspense,
        );
      } else {
        effect2.run();
      }
      const unwatch = () => {
        effect2.stop();
        if (instance && instance.scope) {
          remove(instance.scope.effects, effect2);
        }
      };
      if (ssrCleanup) ssrCleanup.push(unwatch);
      return unwatch;
    }

    function instanceWatch(source, value, options) {
      const publicThis = this.proxy;
      const getter = isString$2(source)
        ? source.includes(".")
          ? createPathGetter(publicThis, source)
          : () => publicThis[source]
        : source.bind(publicThis, publicThis);
      let cb;
      if (isFunction$1(value)) {
        cb = value;
      } else {
        cb = value.handler;
        options = value;
      }
      const cur = currentInstance;
      setCurrentInstance(this);
      const res = doWatch(getter, cb.bind(publicThis), options);
      if (cur) {
        setCurrentInstance(cur);
      } else {
        unsetCurrentInstance();
      }
      return res;
    }

    function createPathGetter(ctx, path) {
      const segments = path.split(".");
      return () => {
        let cur = ctx;
        for (let i = 0; i < segments.length && cur; i++) {
          cur = cur[segments[i]];
        }
        return cur;
      };
    }

    function traverse(value, seen2) {
      if (!isObject$1(value) || value["__v_skip"]) {
        return value;
      }
      seen2 = seen2 || /* @__PURE__ */ new Set();
      if (seen2.has(value)) {
        return value;
      }
      seen2.add(value);
      if (isRef(value)) {
        traverse(value.value, seen2);
      } else if (isArray$1(value)) {
        for (let i = 0; i < value.length; i++) {
          traverse(value[i], seen2);
        }
      } else if (isSet(value) || isMap(value)) {
        value.forEach((v) => {
          traverse(v, seen2);
        });
      } else if (isPlainObject$1(value)) {
        for (const key in value) {
          traverse(value[key], seen2);
        }
      }
      return value;
    }

    function withDirectives(vnode, directives) {
      const internalInstance = currentRenderingInstance;
      if (internalInstance === null) {
        return vnode;
      }
      const instance =
        getExposeProxy(internalInstance) || internalInstance.proxy;
      const bindings = vnode.dirs || (vnode.dirs = []);
      for (let i = 0; i < directives.length; i++) {
        let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
        if (dir) {
          if (isFunction$1(dir)) {
            dir = {
              mounted: dir,
              updated: dir,
            };
          }
          if (dir.deep) {
            traverse(value);
          }
          bindings.push({
            dir,
            instance,
            value,
            oldValue: void 0,
            arg,
            modifiers,
          });
        }
      }
      return vnode;
    }

    function invokeDirectiveHook(vnode, prevVNode, instance, name) {
      const bindings = vnode.dirs;
      const oldBindings = prevVNode && prevVNode.dirs;
      for (let i = 0; i < bindings.length; i++) {
        const binding = bindings[i];
        if (oldBindings) {
          binding.oldValue = oldBindings[i].value;
        }
        let hook = binding.dir[name];
        if (hook) {
          pauseTracking();
          callWithAsyncErrorHandling(hook, instance, 8, [
            vnode.el,
            binding,
            vnode,
            prevVNode,
          ]);
          resetTracking();
        }
      }
    }

    function useTransitionState() {
      const state = {
        isMounted: false,
        isLeaving: false,
        isUnmounting: false,
        leavingVNodes: /* @__PURE__ */ new Map(),
      };
      onMounted(() => {
        state.isMounted = true;
      });
      onBeforeUnmount(() => {
        state.isUnmounting = true;
      });
      return state;
    }
    const TransitionHookValidator = [Function, Array];
    const BaseTransitionPropsValidators = {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      // enter
      onBeforeEnter: TransitionHookValidator,
      onEnter: TransitionHookValidator,
      onAfterEnter: TransitionHookValidator,
      onEnterCancelled: TransitionHookValidator,
      // leave
      onBeforeLeave: TransitionHookValidator,
      onLeave: TransitionHookValidator,
      onAfterLeave: TransitionHookValidator,
      onLeaveCancelled: TransitionHookValidator,
      // appear
      onBeforeAppear: TransitionHookValidator,
      onAppear: TransitionHookValidator,
      onAfterAppear: TransitionHookValidator,
      onAppearCancelled: TransitionHookValidator,
    };
    const BaseTransitionImpl = {
      name: `BaseTransition`,
      props: BaseTransitionPropsValidators,
      setup(props, { slots }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevTransitionKey;
        return () => {
          const children =
            slots.default && getTransitionRawChildren(slots.default(), true);
          if (!children || !children.length) {
            return;
          }
          let child = children[0];
          if (children.length > 1) {
            for (const c2 of children) {
              if (c2.type !== Comment) {
                child = c2;
                break;
              }
            }
          }
          const rawProps = toRaw(props);
          const { mode } = rawProps;
          if (state.isLeaving) {
            return emptyPlaceholder(child);
          }
          const innerChild = getKeepAliveChild(child);
          if (!innerChild) {
            return emptyPlaceholder(child);
          }
          const enterHooks = resolveTransitionHooks(
            innerChild,
            rawProps,
            state,
            instance,
          );
          setTransitionHooks(innerChild, enterHooks);
          const oldChild = instance.subTree;
          const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
          let transitionKeyChanged = false;
          const { getTransitionKey } = innerChild.type;
          if (getTransitionKey) {
            const key = getTransitionKey();
            if (prevTransitionKey === void 0) {
              prevTransitionKey = key;
            } else if (key !== prevTransitionKey) {
              prevTransitionKey = key;
              transitionKeyChanged = true;
            }
          }
          if (
            oldInnerChild &&
            oldInnerChild.type !== Comment &&
            (!isSameVNodeType(innerChild, oldInnerChild) ||
              transitionKeyChanged)
          ) {
            const leavingHooks = resolveTransitionHooks(
              oldInnerChild,
              rawProps,
              state,
              instance,
            );
            setTransitionHooks(oldInnerChild, leavingHooks);
            if (mode === "out-in") {
              state.isLeaving = true;
              leavingHooks.afterLeave = () => {
                state.isLeaving = false;
                if (instance.update.active !== false) {
                  instance.update();
                }
              };
              return emptyPlaceholder(child);
            } else if (mode === "in-out" && innerChild.type !== Comment) {
              leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
                const leavingVNodesCache = getLeavingNodesForType(
                  state,
                  oldInnerChild,
                );
                leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                el._leaveCb = () => {
                  earlyRemove();
                  el._leaveCb = void 0;
                  delete enterHooks.delayedLeave;
                };
                enterHooks.delayedLeave = delayedLeave;
              };
            }
          }
          return child;
        };
      },
    };
    const BaseTransition = BaseTransitionImpl;

    function getLeavingNodesForType(state, vnode) {
      const { leavingVNodes } = state;
      let leavingVNodesCache = leavingVNodes.get(vnode.type);
      if (!leavingVNodesCache) {
        leavingVNodesCache = /* @__PURE__ */ Object.create(null);
        leavingVNodes.set(vnode.type, leavingVNodesCache);
      }
      return leavingVNodesCache;
    }

    function resolveTransitionHooks(vnode, props, state, instance) {
      const {
        appear,
        mode,
        persisted = false,
        onBeforeEnter,
        onEnter,
        onAfterEnter,
        onEnterCancelled,
        onBeforeLeave,
        onLeave,
        onAfterLeave,
        onLeaveCancelled,
        onBeforeAppear,
        onAppear,
        onAfterAppear,
        onAppearCancelled,
      } = props;
      const key = String(vnode.key);
      const leavingVNodesCache = getLeavingNodesForType(state, vnode);
      const callHook2 = (hook, args) => {
        hook && callWithAsyncErrorHandling(hook, instance, 9, args);
      };
      const callAsyncHook = (hook, args) => {
        const done = args[1];
        callHook2(hook, args);
        if (isArray$1(hook)) {
          if (hook.every((hook2) => hook2.length <= 1)) done();
        } else if (hook.length <= 1) {
          done();
        }
      };
      const hooks = {
        mode,
        persisted,
        beforeEnter(el) {
          let hook = onBeforeEnter;
          if (!state.isMounted) {
            if (appear) {
              hook = onBeforeAppear || onBeforeEnter;
            } else {
              return;
            }
          }
          if (el._leaveCb) {
            el._leaveCb(
              true,
              /* cancelled */
            );
          }
          const leavingVNode = leavingVNodesCache[key];
          if (
            leavingVNode &&
            isSameVNodeType(vnode, leavingVNode) &&
            leavingVNode.el._leaveCb
          ) {
            leavingVNode.el._leaveCb();
          }
          callHook2(hook, [el]);
        },
        enter(el) {
          let hook = onEnter;
          let afterHook = onAfterEnter;
          let cancelHook = onEnterCancelled;
          if (!state.isMounted) {
            if (appear) {
              hook = onAppear || onEnter;
              afterHook = onAfterAppear || onAfterEnter;
              cancelHook = onAppearCancelled || onEnterCancelled;
            } else {
              return;
            }
          }
          let called = false;
          const done = (el._enterCb = (cancelled) => {
            if (called) return;
            called = true;
            if (cancelled) {
              callHook2(cancelHook, [el]);
            } else {
              callHook2(afterHook, [el]);
            }
            if (hooks.delayedLeave) {
              hooks.delayedLeave();
            }
            el._enterCb = void 0;
          });
          if (hook) {
            callAsyncHook(hook, [el, done]);
          } else {
            done();
          }
        },
        leave(el, remove2) {
          const key2 = String(vnode.key);
          if (el._enterCb) {
            el._enterCb(
              true,
              /* cancelled */
            );
          }
          if (state.isUnmounting) {
            return remove2();
          }
          callHook2(onBeforeLeave, [el]);
          let called = false;
          const done = (el._leaveCb = (cancelled) => {
            if (called) return;
            called = true;
            remove2();
            if (cancelled) {
              callHook2(onLeaveCancelled, [el]);
            } else {
              callHook2(onAfterLeave, [el]);
            }
            el._leaveCb = void 0;
            if (leavingVNodesCache[key2] === vnode) {
              delete leavingVNodesCache[key2];
            }
          });
          leavingVNodesCache[key2] = vnode;
          if (onLeave) {
            callAsyncHook(onLeave, [el, done]);
          } else {
            done();
          }
        },
        clone(vnode2) {
          return resolveTransitionHooks(vnode2, props, state, instance);
        },
      };
      return hooks;
    }

    function emptyPlaceholder(vnode) {
      if (isKeepAlive(vnode)) {
        vnode = cloneVNode(vnode);
        vnode.children = null;
        return vnode;
      }
    }

    function getKeepAliveChild(vnode) {
      return isKeepAlive(vnode)
        ? vnode.children
          ? vnode.children[0]
          : void 0
        : vnode;
    }

    function setTransitionHooks(vnode, hooks) {
      if (vnode.shapeFlag & 6 && vnode.component) {
        setTransitionHooks(vnode.component.subTree, hooks);
      } else if (vnode.shapeFlag & 128) {
        vnode.ssContent.transition = hooks.clone(vnode.ssContent);
        vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
      } else {
        vnode.transition = hooks;
      }
    }

    function getTransitionRawChildren(
      children,
      keepComment = false,
      parentKey,
    ) {
      let ret = [];
      let keyedFragmentCount = 0;
      for (let i = 0; i < children.length; i++) {
        let child = children[i];
        const key =
          parentKey == null
            ? child.key
            : String(parentKey) + String(child.key != null ? child.key : i);
        if (child.type === Fragment) {
          if (child.patchFlag & 128) keyedFragmentCount++;
          ret = ret.concat(
            getTransitionRawChildren(child.children, keepComment, key),
          );
        } else if (keepComment || child.type !== Comment) {
          ret.push(
            key != null
              ? cloneVNode(child, {
                  key,
                })
              : child,
          );
        }
      }
      if (keyedFragmentCount > 1) {
        for (let i = 0; i < ret.length; i++) {
          ret[i].patchFlag = -2;
        }
      }
      return ret;
    }

    function defineComponent(options, extraOptions) {
      return isFunction$1(options)
        ? // #8326: extend call and options.name access are considered side-effects
          // by Rollup, so we have to wrap it in a pure-annotated IIFE.
          /* @__PURE__ */
          (() =>
            extend$1(
              {
                name: options.name,
              },
              extraOptions,
              {
                setup: options,
              },
            ))()
        : options;
    }
    const isAsyncWrapper = (i) => !!i.type.__asyncLoader;

    function defineAsyncComponent(source) {
      if (isFunction$1(source)) {
        source = {
          loader: source,
        };
      }
      const {
        loader,
        loadingComponent,
        errorComponent,
        delay = 200,
        timeout,
        // undefined = never times out
        suspensible = true,
        onError: userOnError,
      } = source;
      let pendingRequest = null;
      let resolvedComp;
      let retries = 0;
      const retry = () => {
        retries++;
        pendingRequest = null;
        return load();
      };
      const load = () => {
        let thisRequest;
        return (
          pendingRequest ||
          (thisRequest = pendingRequest =
            loader()
              .catch((err) => {
                err = err instanceof Error ? err : new Error(String(err));
                if (userOnError) {
                  return new Promise((resolve2, reject) => {
                    const userRetry = () => resolve2(retry());
                    const userFail = () => reject(err);
                    userOnError(err, userRetry, userFail, retries + 1);
                  });
                } else {
                  throw err;
                }
              })
              .then((comp) => {
                if (thisRequest !== pendingRequest && pendingRequest) {
                  return pendingRequest;
                }
                if (
                  comp &&
                  (comp.__esModule || comp[Symbol.toStringTag] === "Module")
                ) {
                  comp = comp.default;
                }
                resolvedComp = comp;
                return comp;
              }))
        );
      };
      return defineComponent({
        name: "AsyncComponentWrapper",
        __asyncLoader: load,
        get __asyncResolved() {
          return resolvedComp;
        },
        setup() {
          const instance = currentInstance;
          if (resolvedComp) {
            return () => createInnerComp(resolvedComp, instance);
          }
          const onError = (err) => {
            pendingRequest = null;
            handleError(
              err,
              instance,
              13,
              !errorComponent,
              /* do not throw in dev if user provided error component */
            );
          };
          if ((suspensible && instance.suspense) || isInSSRComponentSetup) {
            return load()
              .then((comp) => {
                return () => createInnerComp(comp, instance);
              })
              .catch((err) => {
                onError(err);
                return () =>
                  errorComponent
                    ? createVNode(errorComponent, {
                        error: err,
                      })
                    : null;
              });
          }
          const loaded = ref(false);
          const error = ref();
          const delayed = ref(!!delay);
          if (delay) {
            setTimeout(() => {
              delayed.value = false;
            }, delay);
          }
          if (timeout != null) {
            setTimeout(() => {
              if (!loaded.value && !error.value) {
                const err = new Error(
                  `Async component timed out after ${timeout}ms.`,
                );
                onError(err);
                error.value = err;
              }
            }, timeout);
          }
          load()
            .then(() => {
              loaded.value = true;
              if (instance.parent && isKeepAlive(instance.parent.vnode)) {
                queueJob(instance.parent.update);
              }
            })
            .catch((err) => {
              onError(err);
              error.value = err;
            });
          return () => {
            if (loaded.value && resolvedComp) {
              return createInnerComp(resolvedComp, instance);
            } else if (error.value && errorComponent) {
              return createVNode(errorComponent, {
                error: error.value,
              });
            } else if (loadingComponent && !delayed.value) {
              return createVNode(loadingComponent);
            }
          };
        },
      });
    }

    function createInnerComp(comp, parent) {
      const { ref: ref2, props, children, ce } = parent.vnode;
      const vnode = createVNode(comp, props, children);
      vnode.ref = ref2;
      vnode.ce = ce;
      delete parent.vnode.ce;
      return vnode;
    }
    const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
    const KeepAliveImpl = {
      name: `KeepAlive`,
      // Marker for special handling inside the renderer. We are not using a ===
      // check directly on KeepAlive in the renderer, because importing it directly
      // would prevent it from being tree-shaken.
      __isKeepAlive: true,
      props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number],
      },
      setup(props, { slots }) {
        const instance = getCurrentInstance();
        const sharedContext = instance.ctx;
        if (!sharedContext.renderer) {
          return () => {
            const children = slots.default && slots.default();
            return children && children.length === 1 ? children[0] : children;
          };
        }
        const cache = /* @__PURE__ */ new Map();
        const keys = /* @__PURE__ */ new Set();
        let current = null;
        const parentSuspense = instance.suspense;
        const {
          renderer: {
            p: patch,
            m: move,
            um: _unmount,
            o: { createElement },
          },
        } = sharedContext;
        const storageContainer = createElement("div");
        sharedContext.activate = (
          vnode,
          container,
          anchor,
          isSVG,
          optimized,
        ) => {
          const instance2 = vnode.component;
          move(vnode, container, anchor, 0, parentSuspense);
          patch(
            instance2.vnode,
            vnode,
            container,
            anchor,
            instance2,
            parentSuspense,
            isSVG,
            vnode.slotScopeIds,
            optimized,
          );
          queuePostRenderEffect(() => {
            instance2.isDeactivated = false;
            if (instance2.a) {
              invokeArrayFns(instance2.a);
            }
            const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
            if (vnodeHook) {
              invokeVNodeHook(vnodeHook, instance2.parent, vnode);
            }
          }, parentSuspense);
        };
        sharedContext.deactivate = (vnode) => {
          const instance2 = vnode.component;
          move(vnode, storageContainer, null, 1, parentSuspense);
          queuePostRenderEffect(() => {
            if (instance2.da) {
              invokeArrayFns(instance2.da);
            }
            const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
            if (vnodeHook) {
              invokeVNodeHook(vnodeHook, instance2.parent, vnode);
            }
            instance2.isDeactivated = true;
          }, parentSuspense);
        };

        function unmount(vnode) {
          resetShapeFlag(vnode);
          _unmount(vnode, instance, parentSuspense, true);
        }

        function pruneCache(filter) {
          cache.forEach((vnode, key) => {
            const name = getComponentName(vnode.type);
            if (name && (!filter || !filter(name))) {
              pruneCacheEntry(key);
            }
          });
        }

        function pruneCacheEntry(key) {
          const cached = cache.get(key);
          if (!current || !isSameVNodeType(cached, current)) {
            unmount(cached);
          } else if (current) {
            resetShapeFlag(current);
          }
          cache.delete(key);
          keys.delete(key);
        }
        watch(
          () => [props.include, props.exclude],
          ([include, exclude]) => {
            include && pruneCache((name) => matches(include, name));
            exclude && pruneCache((name) => !matches(exclude, name));
          },
          // prune post-render after `current` has been updated
          {
            flush: "post",
            deep: true,
          },
        );
        let pendingCacheKey = null;
        const cacheSubtree = () => {
          if (pendingCacheKey != null) {
            cache.set(pendingCacheKey, getInnerChild(instance.subTree));
          }
        };
        onMounted(cacheSubtree);
        onUpdated(cacheSubtree);
        onBeforeUnmount(() => {
          cache.forEach((cached) => {
            const { subTree, suspense } = instance;
            const vnode = getInnerChild(subTree);
            if (cached.type === vnode.type && cached.key === vnode.key) {
              resetShapeFlag(vnode);
              const da = vnode.component.da;
              da && queuePostRenderEffect(da, suspense);
              return;
            }
            unmount(cached);
          });
        });
        return () => {
          pendingCacheKey = null;
          if (!slots.default) {
            return null;
          }
          const children = slots.default();
          const rawVNode = children[0];
          if (children.length > 1) {
            current = null;
            return children;
          } else if (
            !isVNode(rawVNode) ||
            (!(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128))
          ) {
            current = null;
            return rawVNode;
          }
          let vnode = getInnerChild(rawVNode);
          const comp = vnode.type;
          const name = getComponentName(
            isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp,
          );
          const { include, exclude, max } = props;
          if (
            (include && (!name || !matches(include, name))) ||
            (exclude && name && matches(exclude, name))
          ) {
            current = vnode;
            return rawVNode;
          }
          const key = vnode.key == null ? comp : vnode.key;
          const cachedVNode = cache.get(key);
          if (vnode.el) {
            vnode = cloneVNode(vnode);
            if (rawVNode.shapeFlag & 128) {
              rawVNode.ssContent = vnode;
            }
          }
          pendingCacheKey = key;
          if (cachedVNode) {
            vnode.el = cachedVNode.el;
            vnode.component = cachedVNode.component;
            if (vnode.transition) {
              setTransitionHooks(vnode, vnode.transition);
            }
            vnode.shapeFlag |= 512;
            keys.delete(key);
            keys.add(key);
          } else {
            keys.add(key);
            if (max && keys.size > parseInt(max, 10)) {
              pruneCacheEntry(keys.values().next().value);
            }
          }
          vnode.shapeFlag |= 256;
          current = vnode;
          return isSuspense(rawVNode.type) ? rawVNode : vnode;
        };
      },
    };
    const KeepAlive = KeepAliveImpl;

    function matches(pattern, name) {
      if (isArray$1(pattern)) {
        return pattern.some((p2) => matches(p2, name));
      } else if (isString$2(pattern)) {
        return pattern.split(",").includes(name);
      } else if (isRegExp$1(pattern)) {
        return pattern.test(name);
      }
      return false;
    }

    function onActivated(hook, target) {
      registerKeepAliveHook(hook, "a", target);
    }

    function onDeactivated(hook, target) {
      registerKeepAliveHook(hook, "da", target);
    }

    function registerKeepAliveHook(hook, type, target = currentInstance) {
      const wrappedHook =
        hook.__wdc ||
        (hook.__wdc = () => {
          let current = target;
          while (current) {
            if (current.isDeactivated) {
              return;
            }
            current = current.parent;
          }
          return hook();
        });
      injectHook(type, wrappedHook, target);
      if (target) {
        let current = target.parent;
        while (current && current.parent) {
          if (isKeepAlive(current.parent.vnode)) {
            injectToKeepAliveRoot(wrappedHook, type, target, current);
          }
          current = current.parent;
        }
      }
    }

    function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
      const injected = injectHook(
        type,
        hook,
        keepAliveRoot,
        true,
        /* prepend */
      );
      onUnmounted(() => {
        remove(keepAliveRoot[type], injected);
      }, target);
    }

    function resetShapeFlag(vnode) {
      vnode.shapeFlag &= ~256;
      vnode.shapeFlag &= ~512;
    }

    function getInnerChild(vnode) {
      return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
    }

    function injectHook(type, hook, target = currentInstance, prepend = false) {
      if (target) {
        const hooks = target[type] || (target[type] = []);
        const wrappedHook =
          hook.__weh ||
          (hook.__weh = (...args) => {
            if (target.isUnmounted) {
              return;
            }
            pauseTracking();
            setCurrentInstance(target);
            const res = callWithAsyncErrorHandling(hook, target, type, args);
            unsetCurrentInstance();
            resetTracking();
            return res;
          });
        if (prepend) {
          hooks.unshift(wrappedHook);
        } else {
          hooks.push(wrappedHook);
        }
        return wrappedHook;
      }
    }
    const createHook =
      (lifecycle) =>
      (hook, target = currentInstance) =>
        // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
        (!isInSSRComponentSetup || lifecycle === "sp") &&
        injectHook(lifecycle, (...args) => hook(...args), target);
    const onBeforeMount = createHook("bm");
    const onMounted = createHook("m");
    const onBeforeUpdate = createHook("bu");
    const onUpdated = createHook("u");
    const onBeforeUnmount = createHook("bum");
    const onUnmounted = createHook("um");
    const onServerPrefetch = createHook("sp");
    const onRenderTriggered = createHook("rtg");
    const onRenderTracked = createHook("rtc");

    function onErrorCaptured(hook, target = currentInstance) {
      injectHook("ec", hook, target);
    }
    const COMPONENTS = "components";
    const DIRECTIVES = "directives";

    function resolveComponent(name, maybeSelfReference) {
      return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
    }
    const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");

    function resolveDynamicComponent(component) {
      if (isString$2(component)) {
        return resolveAsset(COMPONENTS, component, false) || component;
      } else {
        return component || NULL_DYNAMIC_COMPONENT;
      }
    }

    function resolveDirective(name) {
      return resolveAsset(DIRECTIVES, name);
    }

    function resolveAsset(
      type,
      name,
      warnMissing = true,
      maybeSelfReference = false,
    ) {
      const instance = currentRenderingInstance || currentInstance;
      if (instance) {
        const Component = instance.type;
        if (type === COMPONENTS) {
          const selfName = getComponentName(
            Component,
            false,
            /* do not include inferred name to avoid breaking existing code */
          );
          if (
            selfName &&
            (selfName === name ||
              selfName === camelize(name) ||
              selfName === capitalize(camelize(name)))
          ) {
            return Component;
          }
        }
        const res =
          // local registration
          // check instance[type] first which is resolved for options API
          resolve(instance[type] || Component[type], name) || // global registration
          resolve(instance.appContext[type], name);
        if (!res && maybeSelfReference) {
          return Component;
        }
        return res;
      }
    }

    function resolve(registry, name) {
      return (
        registry &&
        (registry[name] ||
          registry[camelize(name)] ||
          registry[capitalize(camelize(name))])
      );
    }

    function renderList(source, renderItem, cache, index) {
      let ret;
      const cached = cache && cache[index];
      if (isArray$1(source) || isString$2(source)) {
        ret = new Array(source.length);
        for (let i = 0, l = source.length; i < l; i++) {
          ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
        }
      } else if (typeof source === "number") {
        ret = new Array(source);
        for (let i = 0; i < source; i++) {
          ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
        }
      } else if (isObject$1(source)) {
        if (source[Symbol.iterator]) {
          ret = Array.from(source, (item, i) =>
            renderItem(item, i, void 0, cached && cached[i]),
          );
        } else {
          const keys = Object.keys(source);
          ret = new Array(keys.length);
          for (let i = 0, l = keys.length; i < l; i++) {
            const key = keys[i];
            ret[i] = renderItem(source[key], key, i, cached && cached[i]);
          }
        }
      } else {
        ret = [];
      }
      if (cache) {
        cache[index] = ret;
      }
      return ret;
    }

    function createSlots(slots, dynamicSlots) {
      for (let i = 0; i < dynamicSlots.length; i++) {
        const slot = dynamicSlots[i];
        if (isArray$1(slot)) {
          for (let j = 0; j < slot.length; j++) {
            slots[slot[j].name] = slot[j].fn;
          }
        } else if (slot) {
          slots[slot.name] = slot.key
            ? (...args) => {
                const res = slot.fn(...args);
                if (res) res.key = slot.key;
                return res;
              }
            : slot.fn;
        }
      }
      return slots;
    }

    function renderSlot(slots, name, props = {}, fallback, noSlotted) {
      if (
        currentRenderingInstance.isCE ||
        (currentRenderingInstance.parent &&
          isAsyncWrapper(currentRenderingInstance.parent) &&
          currentRenderingInstance.parent.isCE)
      ) {
        if (name !== "default") props.name = name;
        return createVNode("slot", props, fallback && fallback());
      }
      let slot = slots[name];
      if (slot && slot._c) {
        slot._d = false;
      }
      openBlock();
      const validSlotContent = slot && ensureValidVNode(slot(props));
      const rendered = createBlock(
        Fragment,
        {
          key:
            props.key || // slot content array of a dynamic conditional slot may have a branch
            // key attached in the `createSlots` helper, respect that
            (validSlotContent && validSlotContent.key) ||
            `_${name}`,
        },
        validSlotContent || (fallback ? fallback() : []),
        validSlotContent && slots._ === 1 ? 64 : -2,
      );
      if (!noSlotted && rendered.scopeId) {
        rendered.slotScopeIds = [rendered.scopeId + "-s"];
      }
      if (slot && slot._c) {
        slot._d = true;
      }
      return rendered;
    }

    function ensureValidVNode(vnodes) {
      return vnodes.some((child) => {
        if (!isVNode(child)) return true;
        if (child.type === Comment) return false;
        if (child.type === Fragment && !ensureValidVNode(child.children))
          return false;
        return true;
      })
        ? vnodes
        : null;
    }

    function toHandlers(obj, preserveCaseIfNecessary) {
      const ret = {};
      for (const key in obj) {
        ret[
          preserveCaseIfNecessary && /[A-Z]/.test(key)
            ? `on:${key}`
            : toHandlerKey(key)
        ] = obj[key];
      }
      return ret;
    }
    const getPublicInstance = (i) => {
      if (!i) return null;
      if (isStatefulComponent(i)) return getExposeProxy(i) || i.proxy;
      return getPublicInstance(i.parent);
    };
    const publicPropertiesMap =
      // Move PURE marker to new line to workaround compiler discarding it
      // due to type annotation
      /* @__PURE__ */
      extend$1(/* @__PURE__ */ Object.create(null), {
        $: (i) => i,
        $el: (i) => i.vnode.el,
        $data: (i) => i.data,
        $props: (i) => i.props,
        $attrs: (i) => i.attrs,
        $slots: (i) => i.slots,
        $refs: (i) => i.refs,
        $parent: (i) => getPublicInstance(i.parent),
        $root: (i) => getPublicInstance(i.root),
        $emit: (i) => i.emit,
        $options: (i) => resolveMergedOptions(i),
        $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
        $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
        $watch: (i) => instanceWatch.bind(i),
      });
    const hasSetupBinding = (state, key) =>
      state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
    const PublicInstanceProxyHandlers = {
      get({ _: instance }, key) {
        const { ctx, setupState, data, props, accessCache, type, appContext } =
          instance;
        let normalizedProps;
        if (key[0] !== "$") {
          const n = accessCache[key];
          if (n !== void 0) {
            switch (n) {
              case 1:
                return setupState[key];
              case 2:
                return data[key];
              case 4:
                return ctx[key];
              case 3:
                return props[key];
            }
          } else if (hasSetupBinding(setupState, key)) {
            accessCache[key] = 1;
            return setupState[key];
          } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
            accessCache[key] = 2;
            return data[key];
          } else if (
            // only cache other properties when instance has declared (thus stable)
            // props
            (normalizedProps = instance.propsOptions[0]) &&
            hasOwn(normalizedProps, key)
          ) {
            accessCache[key] = 3;
            return props[key];
          } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
            accessCache[key] = 4;
            return ctx[key];
          } else if (shouldCacheAccess) {
            accessCache[key] = 0;
          }
        }
        const publicGetter = publicPropertiesMap[key];
        let cssModule, globalProperties;
        if (publicGetter) {
          if (key === "$attrs") {
            track(instance, "get", key);
          }
          return publicGetter(instance);
        } else if (
          // css module (injected by vue-loader)
          (cssModule = type.__cssModules) &&
          (cssModule = cssModule[key])
        ) {
          return cssModule;
        } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
          accessCache[key] = 4;
          return ctx[key];
        } else if (
          // global properties
          ((globalProperties = appContext.config.globalProperties),
          hasOwn(globalProperties, key))
        ) {
          {
            return globalProperties[key];
          }
        } else;
      },
      set({ _: instance }, key, value) {
        const { data, setupState, ctx } = instance;
        if (hasSetupBinding(setupState, key)) {
          setupState[key] = value;
          return true;
        } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
          data[key] = value;
          return true;
        } else if (hasOwn(instance.props, key)) {
          return false;
        }
        if (key[0] === "$" && key.slice(1) in instance) {
          return false;
        } else {
          {
            ctx[key] = value;
          }
        }
        return true;
      },
      has(
        { _: { data, setupState, accessCache, ctx, appContext, propsOptions } },
        key,
      ) {
        let normalizedProps;
        return (
          !!accessCache[key] ||
          (data !== EMPTY_OBJ && hasOwn(data, key)) ||
          hasSetupBinding(setupState, key) ||
          ((normalizedProps = propsOptions[0]) &&
            hasOwn(normalizedProps, key)) ||
          hasOwn(ctx, key) ||
          hasOwn(publicPropertiesMap, key) ||
          hasOwn(appContext.config.globalProperties, key)
        );
      },
      defineProperty(target, key, descriptor) {
        if (descriptor.get != null) {
          target._.accessCache[key] = 0;
        } else if (hasOwn(descriptor, "value")) {
          this.set(target, key, descriptor.value, null);
        }
        return Reflect.defineProperty(target, key, descriptor);
      },
    };
    const RuntimeCompiledPublicInstanceProxyHandlers = /* @__PURE__ */ extend$1(
      {},
      PublicInstanceProxyHandlers,
      {
        get(target, key) {
          if (key === Symbol.unscopables) {
            return;
          }
          return PublicInstanceProxyHandlers.get(target, key, target);
        },
        has(_, key) {
          const has2 = key[0] !== "_" && !isGloballyWhitelisted(key);
          return has2;
        },
      },
    );

    function defineProps() {
      return null;
    }

    function defineEmits() {
      return null;
    }

    function defineExpose(exposed) {}

    function defineOptions(options) {}

    function defineSlots() {
      return null;
    }

    function defineModel() {}

    function withDefaults(props, defaults2) {
      return null;
    }

    function useSlots() {
      return getContext().slots;
    }

    function useAttrs() {
      return getContext().attrs;
    }

    function useModel(props, name, options) {
      const i = getCurrentInstance();
      if (options && options.local) {
        const proxy = ref(props[name]);
        watch(
          () => props[name],
          (v) => (proxy.value = v),
        );
        watch(proxy, (value) => {
          if (value !== props[name]) {
            i.emit(`update:${name}`, value);
          }
        });
        return proxy;
      } else {
        return {
          __v_isRef: true,
          get value() {
            return props[name];
          },
          set value(value) {
            i.emit(`update:${name}`, value);
          },
        };
      }
    }

    function getContext() {
      const i = getCurrentInstance();
      return i.setupContext || (i.setupContext = createSetupContext(i));
    }

    function normalizePropsOrEmits(props) {
      return isArray$1(props)
        ? props.reduce(
            (normalized, p2) => ((normalized[p2] = null), normalized),
            {},
          )
        : props;
    }

    function mergeDefaults(raw, defaults2) {
      const props = normalizePropsOrEmits(raw);
      for (const key in defaults2) {
        if (key.startsWith("__skip")) continue;
        let opt = props[key];
        if (opt) {
          if (isArray$1(opt) || isFunction$1(opt)) {
            opt = props[key] = {
              type: opt,
              default: defaults2[key],
            };
          } else {
            opt.default = defaults2[key];
          }
        } else if (opt === null) {
          opt = props[key] = {
            default: defaults2[key],
          };
        } else;
        if (opt && defaults2[`__skip_${key}`]) {
          opt.skipFactory = true;
        }
      }
      return props;
    }

    function mergeModels(a, b) {
      if (!a || !b) return a || b;
      if (isArray$1(a) && isArray$1(b)) return a.concat(b);
      return extend$1({}, normalizePropsOrEmits(a), normalizePropsOrEmits(b));
    }

    function createPropsRestProxy(props, excludedKeys) {
      const ret = {};
      for (const key in props) {
        if (!excludedKeys.includes(key)) {
          Object.defineProperty(ret, key, {
            enumerable: true,
            get: () => props[key],
          });
        }
      }
      return ret;
    }

    function withAsyncContext(getAwaitable) {
      const ctx = getCurrentInstance();
      let awaitable = getAwaitable();
      unsetCurrentInstance();
      if (isPromise(awaitable)) {
        awaitable = awaitable.catch((e) => {
          setCurrentInstance(ctx);
          throw e;
        });
      }
      return [awaitable, () => setCurrentInstance(ctx)];
    }
    let shouldCacheAccess = true;

    function applyOptions(instance) {
      const options = resolveMergedOptions(instance);
      const publicThis = instance.proxy;
      const ctx = instance.ctx;
      shouldCacheAccess = false;
      if (options.beforeCreate) {
        callHook$1(options.beforeCreate, instance, "bc");
      }
      const {
        // state
        data: dataOptions,
        computed: computedOptions,
        methods,
        watch: watchOptions,
        provide: provideOptions,
        inject: injectOptions,
        // lifecycle
        created,
        beforeMount,
        mounted,
        beforeUpdate,
        updated,
        activated,
        deactivated,
        beforeDestroy,
        beforeUnmount,
        destroyed,
        unmounted,
        render: render2,
        renderTracked,
        renderTriggered,
        errorCaptured,
        serverPrefetch,
        // public API
        expose,
        inheritAttrs,
        // assets
        components,
        directives,
        filters,
      } = options;
      const checkDuplicateProperties = null;
      if (injectOptions) {
        resolveInjections(injectOptions, ctx, checkDuplicateProperties);
      }
      if (methods) {
        for (const key in methods) {
          const methodHandler = methods[key];
          if (isFunction$1(methodHandler)) {
            {
              ctx[key] = methodHandler.bind(publicThis);
            }
          }
        }
      }
      if (dataOptions) {
        const data = dataOptions.call(publicThis, publicThis);
        if (!isObject$1(data));
        else {
          instance.data = reactive(data);
        }
      }
      shouldCacheAccess = true;
      if (computedOptions) {
        for (const key in computedOptions) {
          const opt = computedOptions[key];
          const get2 = isFunction$1(opt)
            ? opt.bind(publicThis, publicThis)
            : isFunction$1(opt.get)
              ? opt.get.bind(publicThis, publicThis)
              : NOOP;
          const set2 =
            !isFunction$1(opt) && isFunction$1(opt.set)
              ? opt.set.bind(publicThis)
              : NOOP;
          const c2 = computed({
            get: get2,
            set: set2,
          });
          Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: () => c2.value,
            set: (v) => (c2.value = v),
          });
        }
      }
      if (watchOptions) {
        for (const key in watchOptions) {
          createWatcher(watchOptions[key], ctx, publicThis, key);
        }
      }
      if (provideOptions) {
        const provides = isFunction$1(provideOptions)
          ? provideOptions.call(publicThis)
          : provideOptions;
        Reflect.ownKeys(provides).forEach((key) => {
          provide(key, provides[key]);
        });
      }
      if (created) {
        callHook$1(created, instance, "c");
      }

      function registerLifecycleHook(register, hook) {
        if (isArray$1(hook)) {
          hook.forEach((_hook) => register(_hook.bind(publicThis)));
        } else if (hook) {
          register(hook.bind(publicThis));
        }
      }
      registerLifecycleHook(onBeforeMount, beforeMount);
      registerLifecycleHook(onMounted, mounted);
      registerLifecycleHook(onBeforeUpdate, beforeUpdate);
      registerLifecycleHook(onUpdated, updated);
      registerLifecycleHook(onActivated, activated);
      registerLifecycleHook(onDeactivated, deactivated);
      registerLifecycleHook(onErrorCaptured, errorCaptured);
      registerLifecycleHook(onRenderTracked, renderTracked);
      registerLifecycleHook(onRenderTriggered, renderTriggered);
      registerLifecycleHook(onBeforeUnmount, beforeUnmount);
      registerLifecycleHook(onUnmounted, unmounted);
      registerLifecycleHook(onServerPrefetch, serverPrefetch);
      if (isArray$1(expose)) {
        if (expose.length) {
          const exposed = instance.exposed || (instance.exposed = {});
          expose.forEach((key) => {
            Object.defineProperty(exposed, key, {
              get: () => publicThis[key],
              set: (val) => (publicThis[key] = val),
            });
          });
        } else if (!instance.exposed) {
          instance.exposed = {};
        }
      }
      if (render2 && instance.render === NOOP) {
        instance.render = render2;
      }
      if (inheritAttrs != null) {
        instance.inheritAttrs = inheritAttrs;
      }
      if (components) instance.components = components;
      if (directives) instance.directives = directives;
    }

    function resolveInjections(
      injectOptions,
      ctx,
      checkDuplicateProperties = NOOP,
    ) {
      if (isArray$1(injectOptions)) {
        injectOptions = normalizeInject(injectOptions);
      }
      for (const key in injectOptions) {
        const opt = injectOptions[key];
        let injected;
        if (isObject$1(opt)) {
          if ("default" in opt) {
            injected = inject(
              opt.from || key,
              opt.default,
              true,
              /* treat default function as factory */
            );
          } else {
            injected = inject(opt.from || key);
          }
        } else {
          injected = inject(opt);
        }
        if (isRef(injected)) {
          Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: () => injected.value,
            set: (v) => (injected.value = v),
          });
        } else {
          ctx[key] = injected;
        }
      }
    }

    function callHook$1(hook, instance, type) {
      callWithAsyncErrorHandling(
        isArray$1(hook)
          ? hook.map((h2) => h2.bind(instance.proxy))
          : hook.bind(instance.proxy),
        instance,
        type,
      );
    }

    function createWatcher(raw, ctx, publicThis, key) {
      const getter = key.includes(".")
        ? createPathGetter(publicThis, key)
        : () => publicThis[key];
      if (isString$2(raw)) {
        const handler = ctx[raw];
        if (isFunction$1(handler)) {
          watch(getter, handler);
        }
      } else if (isFunction$1(raw)) {
        watch(getter, raw.bind(publicThis));
      } else if (isObject$1(raw)) {
        if (isArray$1(raw)) {
          raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
        } else {
          const handler = isFunction$1(raw.handler)
            ? raw.handler.bind(publicThis)
            : ctx[raw.handler];
          if (isFunction$1(handler)) {
            watch(getter, handler, raw);
          }
        }
      } else;
    }

    function resolveMergedOptions(instance) {
      const base = instance.type;
      const { mixins, extends: extendsOptions } = base;
      const {
        mixins: globalMixins,
        optionsCache: cache,
        config: { optionMergeStrategies },
      } = instance.appContext;
      const cached = cache.get(base);
      let resolved;
      if (cached) {
        resolved = cached;
      } else if (!globalMixins.length && !mixins && !extendsOptions) {
        {
          resolved = base;
        }
      } else {
        resolved = {};
        if (globalMixins.length) {
          globalMixins.forEach((m) =>
            mergeOptions(resolved, m, optionMergeStrategies, true),
          );
        }
        mergeOptions(resolved, base, optionMergeStrategies);
      }
      if (isObject$1(base)) {
        cache.set(base, resolved);
      }
      return resolved;
    }

    function mergeOptions(to, from, strats, asMixin = false) {
      const { mixins, extends: extendsOptions } = from;
      if (extendsOptions) {
        mergeOptions(to, extendsOptions, strats, true);
      }
      if (mixins) {
        mixins.forEach((m) => mergeOptions(to, m, strats, true));
      }
      for (const key in from) {
        if (asMixin && key === "expose");
        else {
          const strat =
            internalOptionMergeStrats[key] || (strats && strats[key]);
          to[key] = strat ? strat(to[key], from[key]) : from[key];
        }
      }
      return to;
    }
    const internalOptionMergeStrats = {
      data: mergeDataFn,
      props: mergeEmitsOrPropsOptions,
      emits: mergeEmitsOrPropsOptions,
      // objects
      methods: mergeObjectOptions,
      computed: mergeObjectOptions,
      // lifecycle
      beforeCreate: mergeAsArray$1,
      created: mergeAsArray$1,
      beforeMount: mergeAsArray$1,
      mounted: mergeAsArray$1,
      beforeUpdate: mergeAsArray$1,
      updated: mergeAsArray$1,
      beforeDestroy: mergeAsArray$1,
      beforeUnmount: mergeAsArray$1,
      destroyed: mergeAsArray$1,
      unmounted: mergeAsArray$1,
      activated: mergeAsArray$1,
      deactivated: mergeAsArray$1,
      errorCaptured: mergeAsArray$1,
      serverPrefetch: mergeAsArray$1,
      // assets
      components: mergeObjectOptions,
      directives: mergeObjectOptions,
      // watch
      watch: mergeWatchOptions,
      // provide / inject
      provide: mergeDataFn,
      inject: mergeInject,
    };

    function mergeDataFn(to, from) {
      if (!from) {
        return to;
      }
      if (!to) {
        return from;
      }
      return function mergedDataFn() {
        return extend$1(
          isFunction$1(to) ? to.call(this, this) : to,
          isFunction$1(from) ? from.call(this, this) : from,
        );
      };
    }

    function mergeInject(to, from) {
      return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
    }

    function normalizeInject(raw) {
      if (isArray$1(raw)) {
        const res = {};
        for (let i = 0; i < raw.length; i++) {
          res[raw[i]] = raw[i];
        }
        return res;
      }
      return raw;
    }

    function mergeAsArray$1(to, from) {
      return to ? [...new Set([].concat(to, from))] : from;
    }

    function mergeObjectOptions(to, from) {
      return to
        ? extend$1(/* @__PURE__ */ Object.create(null), to, from)
        : from;
    }

    function mergeEmitsOrPropsOptions(to, from) {
      if (to) {
        if (isArray$1(to) && isArray$1(from)) {
          return [.../* @__PURE__ */ new Set([...to, ...from])];
        }
        return extend$1(
          /* @__PURE__ */
          Object.create(null),
          normalizePropsOrEmits(to),
          normalizePropsOrEmits(from != null ? from : {}),
        );
      } else {
        return from;
      }
    }

    function mergeWatchOptions(to, from) {
      if (!to) return from;
      if (!from) return to;
      const merged = extend$1(/* @__PURE__ */ Object.create(null), to);
      for (const key in from) {
        merged[key] = mergeAsArray$1(to[key], from[key]);
      }
      return merged;
    }

    function createAppContext() {
      return {
        app: null,
        config: {
          isNativeTag: NO,
          performance: false,
          globalProperties: {},
          optionMergeStrategies: {},
          errorHandler: void 0,
          warnHandler: void 0,
          compilerOptions: {},
        },
        mixins: [],
        components: {},
        directives: {},
        provides: /* @__PURE__ */ Object.create(null),
        optionsCache: /* @__PURE__ */ new WeakMap(),
        propsCache: /* @__PURE__ */ new WeakMap(),
        emitsCache: /* @__PURE__ */ new WeakMap(),
      };
    }
    let uid$1 = 0;

    function createAppAPI(render2, hydrate2) {
      return function createApp2(rootComponent, rootProps = null) {
        if (!isFunction$1(rootComponent)) {
          rootComponent = extend$1({}, rootComponent);
        }
        if (rootProps != null && !isObject$1(rootProps)) {
          rootProps = null;
        }
        const context = createAppContext();
        const installedPlugins = /* @__PURE__ */ new Set();
        let isMounted = false;
        const app = (context.app = {
          _uid: uid$1++,
          _component: rootComponent,
          _props: rootProps,
          _container: null,
          _context: context,
          _instance: null,
          version,
          get config() {
            return context.config;
          },
          set config(v) {},
          use(plugin2, ...options) {
            if (installedPlugins.has(plugin2));
            else if (plugin2 && isFunction$1(plugin2.install)) {
              installedPlugins.add(plugin2);
              plugin2.install(app, ...options);
            } else if (isFunction$1(plugin2)) {
              installedPlugins.add(plugin2);
              plugin2(app, ...options);
            } else;
            return app;
          },
          mixin(mixin) {
            {
              if (!context.mixins.includes(mixin)) {
                context.mixins.push(mixin);
              }
            }
            return app;
          },
          component(name, component) {
            if (!component) {
              return context.components[name];
            }
            context.components[name] = component;
            return app;
          },
          directive(name, directive) {
            if (!directive) {
              return context.directives[name];
            }
            context.directives[name] = directive;
            return app;
          },
          mount(rootContainer, isHydrate, isSVG) {
            if (!isMounted) {
              const vnode = createVNode(rootComponent, rootProps);
              vnode.appContext = context;
              if (isHydrate && hydrate2) {
                hydrate2(vnode, rootContainer);
              } else {
                render2(vnode, rootContainer, isSVG);
              }
              isMounted = true;
              app._container = rootContainer;
              rootContainer.__vue_app__ = app;
              return getExposeProxy(vnode.component) || vnode.component.proxy;
            }
          },
          unmount() {
            if (isMounted) {
              render2(null, app._container);
              delete app._container.__vue_app__;
            }
          },
          provide(key, value) {
            context.provides[key] = value;
            return app;
          },
          runWithContext(fn) {
            currentApp = app;
            try {
              return fn();
            } finally {
              currentApp = null;
            }
          },
        });
        return app;
      };
    }
    let currentApp = null;

    function provide(key, value) {
      if (!currentInstance);
      else {
        let provides = currentInstance.provides;
        const parentProvides =
          currentInstance.parent && currentInstance.parent.provides;
        if (parentProvides === provides) {
          provides = currentInstance.provides = Object.create(parentProvides);
        }
        provides[key] = value;
      }
    }

    function inject(key, defaultValue, treatDefaultAsFactory = false) {
      const instance = currentInstance || currentRenderingInstance;
      if (instance || currentApp) {
        const provides = instance
          ? instance.parent == null
            ? instance.vnode.appContext && instance.vnode.appContext.provides
            : instance.parent.provides
          : currentApp._context.provides;
        if (provides && key in provides) {
          return provides[key];
        } else if (arguments.length > 1) {
          return treatDefaultAsFactory && isFunction$1(defaultValue)
            ? defaultValue.call(instance && instance.proxy)
            : defaultValue;
        } else;
      }
    }

    function hasInjectionContext() {
      return !!(currentInstance || currentRenderingInstance || currentApp);
    }

    function initProps(instance, rawProps, isStateful, isSSR = false) {
      const props = {};
      const attrs = {};
      def(attrs, InternalObjectKey, 1);
      instance.propsDefaults = /* @__PURE__ */ Object.create(null);
      setFullProps(instance, rawProps, props, attrs);
      for (const key in instance.propsOptions[0]) {
        if (!(key in props)) {
          props[key] = void 0;
        }
      }
      if (isStateful) {
        instance.props = isSSR ? props : shallowReactive(props);
      } else {
        if (!instance.type.props) {
          instance.props = attrs;
        } else {
          instance.props = props;
        }
      }
      instance.attrs = attrs;
    }

    function updateProps(instance, rawProps, rawPrevProps, optimized) {
      const {
        props,
        attrs,
        vnode: { patchFlag },
      } = instance;
      const rawCurrentProps = toRaw(props);
      const [options] = instance.propsOptions;
      let hasAttrsChanged = false;
      if (
        // always force full diff in dev
        // - #1942 if hmr is enabled with sfc component
        // - vite#872 non-sfc component used by sfc component
        (optimized || patchFlag > 0) &&
        !(patchFlag & 16)
      ) {
        if (patchFlag & 8) {
          const propsToUpdate = instance.vnode.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            let key = propsToUpdate[i];
            if (isEmitListener(instance.emitsOptions, key)) {
              continue;
            }
            const value = rawProps[key];
            if (options) {
              if (hasOwn(attrs, key)) {
                if (value !== attrs[key]) {
                  attrs[key] = value;
                  hasAttrsChanged = true;
                }
              } else {
                const camelizedKey = camelize(key);
                props[camelizedKey] = resolvePropValue(
                  options,
                  rawCurrentProps,
                  camelizedKey,
                  value,
                  instance,
                  false,
                  /* isAbsent */
                );
              }
            } else {
              if (value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
              }
            }
          }
        }
      } else {
        if (setFullProps(instance, rawProps, props, attrs)) {
          hasAttrsChanged = true;
        }
        let kebabKey;
        for (const key in rawCurrentProps) {
          if (
            !rawProps || // for camelCase
            (!hasOwn(rawProps, key) && // it's possible the original props was passed in as kebab-case
              // and converted to camelCase (#955)
              ((kebabKey = hyphenate(key)) === key ||
                !hasOwn(rawProps, kebabKey)))
          ) {
            if (options) {
              if (
                rawPrevProps && // for camelCase
                (rawPrevProps[key] !== void 0 || // for kebab-case
                  rawPrevProps[kebabKey] !== void 0)
              ) {
                props[key] = resolvePropValue(
                  options,
                  rawCurrentProps,
                  key,
                  void 0,
                  instance,
                  true,
                  /* isAbsent */
                );
              }
            } else {
              delete props[key];
            }
          }
        }
        if (attrs !== rawCurrentProps) {
          for (const key in attrs) {
            if (!rawProps || (!hasOwn(rawProps, key) && true)) {
              delete attrs[key];
              hasAttrsChanged = true;
            }
          }
        }
      }
      if (hasAttrsChanged) {
        trigger(instance, "set", "$attrs");
      }
    }

    function setFullProps(instance, rawProps, props, attrs) {
      const [options, needCastKeys] = instance.propsOptions;
      let hasAttrsChanged = false;
      let rawCastValues;
      if (rawProps) {
        for (let key in rawProps) {
          if (isReservedProp(key)) {
            continue;
          }
          const value = rawProps[key];
          let camelKey;
          if (options && hasOwn(options, (camelKey = camelize(key)))) {
            if (!needCastKeys || !needCastKeys.includes(camelKey)) {
              props[camelKey] = value;
            } else {
              (rawCastValues || (rawCastValues = {}))[camelKey] = value;
            }
          } else if (!isEmitListener(instance.emitsOptions, key)) {
            if (!(key in attrs) || value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          }
        }
      }
      if (needCastKeys) {
        const rawCurrentProps = toRaw(props);
        const castValues = rawCastValues || EMPTY_OBJ;
        for (let i = 0; i < needCastKeys.length; i++) {
          const key = needCastKeys[i];
          props[key] = resolvePropValue(
            options,
            rawCurrentProps,
            key,
            castValues[key],
            instance,
            !hasOwn(castValues, key),
          );
        }
      }
      return hasAttrsChanged;
    }

    function resolvePropValue(options, props, key, value, instance, isAbsent) {
      const opt = options[key];
      if (opt != null) {
        const hasDefault = hasOwn(opt, "default");
        if (hasDefault && value === void 0) {
          const defaultValue = opt.default;
          if (
            opt.type !== Function &&
            !opt.skipFactory &&
            isFunction$1(defaultValue)
          ) {
            const { propsDefaults } = instance;
            if (key in propsDefaults) {
              value = propsDefaults[key];
            } else {
              setCurrentInstance(instance);
              value = propsDefaults[key] = defaultValue.call(null, props);
              unsetCurrentInstance();
            }
          } else {
            value = defaultValue;
          }
        }
        if (
          opt[0]
          /* shouldCast */
        ) {
          if (isAbsent && !hasDefault) {
            value = false;
          } else if (
            opt[1] &&
            /* shouldCastTrue */
            (value === "" || value === hyphenate(key))
          ) {
            value = true;
          }
        }
      }
      return value;
    }

    function normalizePropsOptions(comp, appContext, asMixin = false) {
      const cache = appContext.propsCache;
      const cached = cache.get(comp);
      if (cached) {
        return cached;
      }
      const raw = comp.props;
      const normalized = {};
      const needCastKeys = [];
      let hasExtends = false;
      if (!isFunction$1(comp)) {
        const extendProps = (raw2) => {
          hasExtends = true;
          const [props, keys] = normalizePropsOptions(raw2, appContext, true);
          extend$1(normalized, props);
          if (keys) needCastKeys.push(...keys);
        };
        if (!asMixin && appContext.mixins.length) {
          appContext.mixins.forEach(extendProps);
        }
        if (comp.extends) {
          extendProps(comp.extends);
        }
        if (comp.mixins) {
          comp.mixins.forEach(extendProps);
        }
      }
      if (!raw && !hasExtends) {
        if (isObject$1(comp)) {
          cache.set(comp, EMPTY_ARR);
        }
        return EMPTY_ARR;
      }
      if (isArray$1(raw)) {
        for (let i = 0; i < raw.length; i++) {
          const normalizedKey = camelize(raw[i]);
          if (validatePropName(normalizedKey)) {
            normalized[normalizedKey] = EMPTY_OBJ;
          }
        }
      } else if (raw) {
        for (const key in raw) {
          const normalizedKey = camelize(key);
          if (validatePropName(normalizedKey)) {
            const opt = raw[key];
            const prop = (normalized[normalizedKey] =
              isArray$1(opt) || isFunction$1(opt)
                ? {
                    type: opt,
                  }
                : extend$1({}, opt));
            if (prop) {
              const booleanIndex = getTypeIndex(Boolean, prop.type);
              const stringIndex = getTypeIndex(String, prop.type);
              prop[0] = booleanIndex > -1;
              /* shouldCast */
              prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
              /* shouldCastTrue */
              if (booleanIndex > -1 || hasOwn(prop, "default")) {
                needCastKeys.push(normalizedKey);
              }
            }
          }
        }
      }
      const res = [normalized, needCastKeys];
      if (isObject$1(comp)) {
        cache.set(comp, res);
      }
      return res;
    }

    function validatePropName(key) {
      if (key[0] !== "$") {
        return true;
      }
      return false;
    }

    function getType(ctor) {
      const match = ctor && ctor.toString().match(/^\s*(function|class) (\w+)/);
      return match ? match[2] : ctor === null ? "null" : "";
    }

    function isSameType(a, b) {
      return getType(a) === getType(b);
    }

    function getTypeIndex(type, expectedTypes) {
      if (isArray$1(expectedTypes)) {
        return expectedTypes.findIndex((t) => isSameType(t, type));
      } else if (isFunction$1(expectedTypes)) {
        return isSameType(expectedTypes, type) ? 0 : -1;
      }
      return -1;
    }
    const isInternalKey = (key) => key[0] === "_" || key === "$stable";
    const normalizeSlotValue = (value) =>
      isArray$1(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
    const normalizeSlot = (key, rawSlot, ctx) => {
      if (rawSlot._n) {
        return rawSlot;
      }
      const normalized = withCtx((...args) => {
        if (false);
        return normalizeSlotValue(rawSlot(...args));
      }, ctx);
      normalized._c = false;
      return normalized;
    };
    const normalizeObjectSlots = (rawSlots, slots, instance) => {
      const ctx = rawSlots._ctx;
      for (const key in rawSlots) {
        if (isInternalKey(key)) continue;
        const value = rawSlots[key];
        if (isFunction$1(value)) {
          slots[key] = normalizeSlot(key, value, ctx);
        } else if (value != null) {
          const normalized = normalizeSlotValue(value);
          slots[key] = () => normalized;
        }
      }
    };
    const normalizeVNodeSlots = (instance, children) => {
      const normalized = normalizeSlotValue(children);
      instance.slots.default = () => normalized;
    };
    const initSlots = (instance, children) => {
      if (instance.vnode.shapeFlag & 32) {
        const type = children._;
        if (type) {
          instance.slots = toRaw(children);
          def(children, "_", type);
        } else {
          normalizeObjectSlots(children, (instance.slots = {}));
        }
      } else {
        instance.slots = {};
        if (children) {
          normalizeVNodeSlots(instance, children);
        }
      }
      def(instance.slots, InternalObjectKey, 1);
    };
    const updateSlots = (instance, children, optimized) => {
      const { vnode, slots } = instance;
      let needDeletionCheck = true;
      let deletionComparisonTarget = EMPTY_OBJ;
      if (vnode.shapeFlag & 32) {
        const type = children._;
        if (type) {
          if (optimized && type === 1) {
            needDeletionCheck = false;
          } else {
            extend$1(slots, children);
            if (!optimized && type === 1) {
              delete slots._;
            }
          }
        } else {
          needDeletionCheck = !children.$stable;
          normalizeObjectSlots(children, slots);
        }
        deletionComparisonTarget = children;
      } else if (children) {
        normalizeVNodeSlots(instance, children);
        deletionComparisonTarget = {
          default: 1,
        };
      }
      if (needDeletionCheck) {
        for (const key in slots) {
          if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
            delete slots[key];
          }
        }
      }
    };

    function setRef(
      rawRef,
      oldRawRef,
      parentSuspense,
      vnode,
      isUnmount = false,
    ) {
      if (isArray$1(rawRef)) {
        rawRef.forEach((r, i) =>
          setRef(
            r,
            oldRawRef && (isArray$1(oldRawRef) ? oldRawRef[i] : oldRawRef),
            parentSuspense,
            vnode,
            isUnmount,
          ),
        );
        return;
      }
      if (isAsyncWrapper(vnode) && !isUnmount) {
        return;
      }
      const refValue =
        vnode.shapeFlag & 4
          ? getExposeProxy(vnode.component) || vnode.component.proxy
          : vnode.el;
      const value = isUnmount ? null : refValue;
      const { i: owner, r: ref2 } = rawRef;
      const oldRef = oldRawRef && oldRawRef.r;
      const refs = owner.refs === EMPTY_OBJ ? (owner.refs = {}) : owner.refs;
      const setupState = owner.setupState;
      if (oldRef != null && oldRef !== ref2) {
        if (isString$2(oldRef)) {
          refs[oldRef] = null;
          if (hasOwn(setupState, oldRef)) {
            setupState[oldRef] = null;
          }
        } else if (isRef(oldRef)) {
          oldRef.value = null;
        }
      }
      if (isFunction$1(ref2)) {
        callWithErrorHandling(ref2, owner, 12, [value, refs]);
      } else {
        const _isString = isString$2(ref2);
        const _isRef = isRef(ref2);
        if (_isString || _isRef) {
          const doSet = () => {
            if (rawRef.f) {
              const existing = _isString
                ? hasOwn(setupState, ref2)
                  ? setupState[ref2]
                  : refs[ref2]
                : ref2.value;
              if (isUnmount) {
                isArray$1(existing) && remove(existing, refValue);
              } else {
                if (!isArray$1(existing)) {
                  if (_isString) {
                    refs[ref2] = [refValue];
                    if (hasOwn(setupState, ref2)) {
                      setupState[ref2] = refs[ref2];
                    }
                  } else {
                    ref2.value = [refValue];
                    if (rawRef.k) refs[rawRef.k] = ref2.value;
                  }
                } else if (!existing.includes(refValue)) {
                  existing.push(refValue);
                }
              }
            } else if (_isString) {
              refs[ref2] = value;
              if (hasOwn(setupState, ref2)) {
                setupState[ref2] = value;
              }
            } else if (_isRef) {
              ref2.value = value;
              if (rawRef.k) refs[rawRef.k] = value;
            } else;
          };
          if (value) {
            doSet.id = -1;
            queuePostRenderEffect(doSet, parentSuspense);
          } else {
            doSet();
          }
        }
      }
    }
    let hasMismatch = false;
    const isSVGContainer = (container) =>
      /svg/.test(container.namespaceURI) &&
      container.tagName !== "foreignObject";
    const isComment = (node) => node.nodeType === 8;

    function createHydrationFunctions(rendererInternals) {
      const {
        mt: mountComponent,
        p: patch,
        o: {
          patchProp: patchProp2,
          createText,
          nextSibling,
          parentNode,
          remove: remove2,
          insert,
          createComment,
        },
      } = rendererInternals;
      const hydrate2 = (vnode, container) => {
        if (!container.hasChildNodes()) {
          patch(null, vnode, container);
          flushPostFlushCbs();
          container._vnode = vnode;
          return;
        }
        hasMismatch = false;
        hydrateNode(container.firstChild, vnode, null, null, null);
        flushPostFlushCbs();
        container._vnode = vnode;
        if (hasMismatch && true) {
          console.error(`Hydration completed but contains mismatches.`);
        }
      };
      const hydrateNode = (
        node,
        vnode,
        parentComponent,
        parentSuspense,
        slotScopeIds,
        optimized = false,
      ) => {
        const isFragmentStart = isComment(node) && node.data === "[";
        const onMismatch = () =>
          handleMismatch(
            node,
            vnode,
            parentComponent,
            parentSuspense,
            slotScopeIds,
            isFragmentStart,
          );
        const { type, ref: ref2, shapeFlag, patchFlag } = vnode;
        let domType = node.nodeType;
        vnode.el = node;
        if (patchFlag === -2) {
          optimized = false;
          vnode.dynamicChildren = null;
        }
        let nextNode = null;
        switch (type) {
          case Text:
            if (domType !== 3) {
              if (vnode.children === "") {
                insert((vnode.el = createText("")), parentNode(node), node);
                nextNode = node;
              } else {
                nextNode = onMismatch();
              }
            } else {
              if (node.data !== vnode.children) {
                hasMismatch = true;
                node.data = vnode.children;
              }
              nextNode = nextSibling(node);
            }
            break;
          case Comment:
            if (domType !== 8 || isFragmentStart) {
              nextNode = onMismatch();
            } else {
              nextNode = nextSibling(node);
            }
            break;
          case Static:
            if (isFragmentStart) {
              node = nextSibling(node);
              domType = node.nodeType;
            }
            if (domType === 1 || domType === 3) {
              nextNode = node;
              const needToAdoptContent = !vnode.children.length;
              for (let i = 0; i < vnode.staticCount; i++) {
                if (needToAdoptContent)
                  vnode.children +=
                    nextNode.nodeType === 1
                      ? nextNode.outerHTML
                      : nextNode.data;
                if (i === vnode.staticCount - 1) {
                  vnode.anchor = nextNode;
                }
                nextNode = nextSibling(nextNode);
              }
              return isFragmentStart ? nextSibling(nextNode) : nextNode;
            } else {
              onMismatch();
            }
            break;
          case Fragment:
            if (!isFragmentStart) {
              nextNode = onMismatch();
            } else {
              nextNode = hydrateFragment(
                node,
                vnode,
                parentComponent,
                parentSuspense,
                slotScopeIds,
                optimized,
              );
            }
            break;
          default:
            if (shapeFlag & 1) {
              if (
                domType !== 1 ||
                vnode.type.toLowerCase() !== node.tagName.toLowerCase()
              ) {
                nextNode = onMismatch();
              } else {
                nextNode = hydrateElement(
                  node,
                  vnode,
                  parentComponent,
                  parentSuspense,
                  slotScopeIds,
                  optimized,
                );
              }
            } else if (shapeFlag & 6) {
              vnode.slotScopeIds = slotScopeIds;
              const container = parentNode(node);
              mountComponent(
                vnode,
                container,
                null,
                parentComponent,
                parentSuspense,
                isSVGContainer(container),
                optimized,
              );
              nextNode = isFragmentStart
                ? locateClosingAsyncAnchor(node)
                : nextSibling(node);
              if (
                nextNode &&
                isComment(nextNode) &&
                nextNode.data === "teleport end"
              ) {
                nextNode = nextSibling(nextNode);
              }
              if (isAsyncWrapper(vnode)) {
                let subTree;
                if (isFragmentStart) {
                  subTree = createVNode(Fragment);
                  subTree.anchor = nextNode
                    ? nextNode.previousSibling
                    : container.lastChild;
                } else {
                  subTree =
                    node.nodeType === 3
                      ? createTextVNode("")
                      : createVNode("div");
                }
                subTree.el = node;
                vnode.component.subTree = subTree;
              }
            } else if (shapeFlag & 64) {
              if (domType !== 8) {
                nextNode = onMismatch();
              } else {
                nextNode = vnode.type.hydrate(
                  node,
                  vnode,
                  parentComponent,
                  parentSuspense,
                  slotScopeIds,
                  optimized,
                  rendererInternals,
                  hydrateChildren,
                );
              }
            } else if (shapeFlag & 128) {
              nextNode = vnode.type.hydrate(
                node,
                vnode,
                parentComponent,
                parentSuspense,
                isSVGContainer(parentNode(node)),
                slotScopeIds,
                optimized,
                rendererInternals,
                hydrateNode,
              );
            } else;
        }
        if (ref2 != null) {
          setRef(ref2, null, parentSuspense, vnode);
        }
        return nextNode;
      };
      const hydrateElement = (
        el,
        vnode,
        parentComponent,
        parentSuspense,
        slotScopeIds,
        optimized,
      ) => {
        optimized = optimized || !!vnode.dynamicChildren;
        const { type, props, patchFlag, shapeFlag, dirs } = vnode;
        const forcePatchValue = (type === "input" && dirs) || type === "option";
        if (forcePatchValue || patchFlag !== -1) {
          if (dirs) {
            invokeDirectiveHook(vnode, null, parentComponent, "created");
          }
          if (props) {
            if (forcePatchValue || !optimized || patchFlag & (16 | 32)) {
              for (const key in props) {
                if (
                  (forcePatchValue && key.endsWith("value")) ||
                  (isOn(key) && !isReservedProp(key))
                ) {
                  patchProp2(
                    el,
                    key,
                    null,
                    props[key],
                    false,
                    void 0,
                    parentComponent,
                  );
                }
              }
            } else if (props.onClick) {
              patchProp2(
                el,
                "onClick",
                null,
                props.onClick,
                false,
                void 0,
                parentComponent,
              );
            }
          }
          let vnodeHooks;
          if ((vnodeHooks = props && props.onVnodeBeforeMount)) {
            invokeVNodeHook(vnodeHooks, parentComponent, vnode);
          }
          if (dirs) {
            invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
          }
          if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
            queueEffectWithSuspense(() => {
              vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
              dirs &&
                invokeDirectiveHook(vnode, null, parentComponent, "mounted");
            }, parentSuspense);
          }
          if (
            shapeFlag & 16 && // skip if element has innerHTML / textContent
            !(props && (props.innerHTML || props.textContent))
          ) {
            let next = hydrateChildren(
              el.firstChild,
              vnode,
              el,
              parentComponent,
              parentSuspense,
              slotScopeIds,
              optimized,
            );
            while (next) {
              hasMismatch = true;
              const cur = next;
              next = next.nextSibling;
              remove2(cur);
            }
          } else if (shapeFlag & 8) {
            if (el.textContent !== vnode.children) {
              hasMismatch = true;
              el.textContent = vnode.children;
            }
          }
        }
        return el.nextSibling;
      };
      const hydrateChildren = (
        node,
        parentVNode,
        container,
        parentComponent,
        parentSuspense,
        slotScopeIds,
        optimized,
      ) => {
        optimized = optimized || !!parentVNode.dynamicChildren;
        const children = parentVNode.children;
        const l = children.length;
        for (let i = 0; i < l; i++) {
          const vnode = optimized
            ? children[i]
            : (children[i] = normalizeVNode(children[i]));
          if (node) {
            node = hydrateNode(
              node,
              vnode,
              parentComponent,
              parentSuspense,
              slotScopeIds,
              optimized,
            );
          } else if (vnode.type === Text && !vnode.children) {
            continue;
          } else {
            hasMismatch = true;
            patch(
              null,
              vnode,
              container,
              null,
              parentComponent,
              parentSuspense,
              isSVGContainer(container),
              slotScopeIds,
            );
          }
        }
        return node;
      };
      const hydrateFragment = (
        node,
        vnode,
        parentComponent,
        parentSuspense,
        slotScopeIds,
        optimized,
      ) => {
        const { slotScopeIds: fragmentSlotScopeIds } = vnode;
        if (fragmentSlotScopeIds) {
          slotScopeIds = slotScopeIds
            ? slotScopeIds.concat(fragmentSlotScopeIds)
            : fragmentSlotScopeIds;
        }
        const container = parentNode(node);
        const next = hydrateChildren(
          nextSibling(node),
          vnode,
          container,
          parentComponent,
          parentSuspense,
          slotScopeIds,
          optimized,
        );
        if (next && isComment(next) && next.data === "]") {
          return nextSibling((vnode.anchor = next));
        } else {
          hasMismatch = true;
          insert((vnode.anchor = createComment(`]`)), container, next);
          return next;
        }
      };
      const handleMismatch = (
        node,
        vnode,
        parentComponent,
        parentSuspense,
        slotScopeIds,
        isFragment,
      ) => {
        hasMismatch = true;
        vnode.el = null;
        if (isFragment) {
          const end = locateClosingAsyncAnchor(node);
          while (true) {
            const next2 = nextSibling(node);
            if (next2 && next2 !== end) {
              remove2(next2);
            } else {
              break;
            }
          }
        }
        const next = nextSibling(node);
        const container = parentNode(node);
        remove2(node);
        patch(
          null,
          vnode,
          container,
          next,
          parentComponent,
          parentSuspense,
          isSVGContainer(container),
          slotScopeIds,
        );
        return next;
      };
      const locateClosingAsyncAnchor = (node) => {
        let match = 0;
        while (node) {
          node = nextSibling(node);
          if (node && isComment(node)) {
            if (node.data === "[") match++;
            if (node.data === "]") {
              if (match === 0) {
                return nextSibling(node);
              } else {
                match--;
              }
            }
          }
        }
        return node;
      };
      return [hydrate2, hydrateNode];
    }
    const queuePostRenderEffect = queueEffectWithSuspense;

    function createRenderer(options) {
      return baseCreateRenderer(options);
    }

    function createHydrationRenderer(options) {
      return baseCreateRenderer(options, createHydrationFunctions);
    }

    function baseCreateRenderer(options, createHydrationFns) {
      const target = getGlobalThis();
      target.__VUE__ = true;
      const {
        insert: hostInsert,
        remove: hostRemove,
        patchProp: hostPatchProp,
        createElement: hostCreateElement,
        createText: hostCreateText,
        createComment: hostCreateComment,
        setText: hostSetText,
        setElementText: hostSetElementText,
        parentNode: hostParentNode,
        nextSibling: hostNextSibling,
        setScopeId: hostSetScopeId = NOOP,
        insertStaticContent: hostInsertStaticContent,
      } = options;
      const patch = (
        n1,
        n2,
        container,
        anchor = null,
        parentComponent = null,
        parentSuspense = null,
        isSVG = false,
        slotScopeIds = null,
        optimized = !!n2.dynamicChildren,
      ) => {
        if (n1 === n2) {
          return;
        }
        if (n1 && !isSameVNodeType(n1, n2)) {
          anchor = getNextHostNode(n1);
          unmount(n1, parentComponent, parentSuspense, true);
          n1 = null;
        }
        if (n2.patchFlag === -2) {
          optimized = false;
          n2.dynamicChildren = null;
        }
        const { type, ref: ref2, shapeFlag } = n2;
        switch (type) {
          case Text:
            processText(n1, n2, container, anchor);
            break;
          case Comment:
            processCommentNode(n1, n2, container, anchor);
            break;
          case Static:
            if (n1 == null) {
              mountStaticNode(n2, container, anchor, isSVG);
            }
            break;
          case Fragment:
            processFragment(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              isSVG,
              slotScopeIds,
              optimized,
            );
            break;
          default:
            if (shapeFlag & 1) {
              processElement(
                n1,
                n2,
                container,
                anchor,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized,
              );
            } else if (shapeFlag & 6) {
              processComponent(
                n1,
                n2,
                container,
                anchor,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized,
              );
            } else if (shapeFlag & 64) {
              type.process(
                n1,
                n2,
                container,
                anchor,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized,
                internals,
              );
            } else if (shapeFlag & 128) {
              type.process(
                n1,
                n2,
                container,
                anchor,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized,
                internals,
              );
            } else;
        }
        if (ref2 != null && parentComponent) {
          setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
        }
      };
      const processText = (n1, n2, container, anchor) => {
        if (n1 == null) {
          hostInsert((n2.el = hostCreateText(n2.children)), container, anchor);
        } else {
          const el = (n2.el = n1.el);
          if (n2.children !== n1.children) {
            hostSetText(el, n2.children);
          }
        }
      };
      const processCommentNode = (n1, n2, container, anchor) => {
        if (n1 == null) {
          hostInsert(
            (n2.el = hostCreateComment(n2.children || "")),
            container,
            anchor,
          );
        } else {
          n2.el = n1.el;
        }
      };
      const mountStaticNode = (n2, container, anchor, isSVG) => {
        [n2.el, n2.anchor] = hostInsertStaticContent(
          n2.children,
          container,
          anchor,
          isSVG,
          n2.el,
          n2.anchor,
        );
      };
      const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
        let next;
        while (el && el !== anchor) {
          next = hostNextSibling(el);
          hostInsert(el, container, nextSibling);
          el = next;
        }
        hostInsert(anchor, container, nextSibling);
      };
      const removeStaticNode = ({ el, anchor }) => {
        let next;
        while (el && el !== anchor) {
          next = hostNextSibling(el);
          hostRemove(el);
          el = next;
        }
        hostRemove(anchor);
      };
      const processElement = (
        n1,
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized,
      ) => {
        isSVG = isSVG || n2.type === "svg";
        if (n1 == null) {
          mountElement(
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized,
          );
        } else {
          patchElement(
            n1,
            n2,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized,
          );
        }
      };
      const mountElement = (
        vnode,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized,
      ) => {
        let el;
        let vnodeHook;
        const { type, props, shapeFlag, transition, dirs } = vnode;
        el = vnode.el = hostCreateElement(
          vnode.type,
          isSVG,
          props && props.is,
          props,
        );
        if (shapeFlag & 8) {
          hostSetElementText(el, vnode.children);
        } else if (shapeFlag & 16) {
          mountChildren(
            vnode.children,
            el,
            null,
            parentComponent,
            parentSuspense,
            isSVG && type !== "foreignObject",
            slotScopeIds,
            optimized,
          );
        }
        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "created");
        }
        setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
        if (props) {
          for (const key in props) {
            if (key !== "value" && !isReservedProp(key)) {
              hostPatchProp(
                el,
                key,
                null,
                props[key],
                isSVG,
                vnode.children,
                parentComponent,
                parentSuspense,
                unmountChildren,
              );
            }
          }
          if ("value" in props) {
            hostPatchProp(el, "value", null, props.value);
          }
          if ((vnodeHook = props.onVnodeBeforeMount)) {
            invokeVNodeHook(vnodeHook, parentComponent, vnode);
          }
        }
        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
        }
        const needCallTransitionHooks =
          (!parentSuspense ||
            (parentSuspense && !parentSuspense.pendingBranch)) &&
          transition &&
          !transition.persisted;
        if (needCallTransitionHooks) {
          transition.beforeEnter(el);
        }
        hostInsert(el, container, anchor);
        if (
          (vnodeHook = props && props.onVnodeMounted) ||
          needCallTransitionHooks ||
          dirs
        ) {
          queuePostRenderEffect(() => {
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            needCallTransitionHooks && transition.enter(el);
            dirs &&
              invokeDirectiveHook(vnode, null, parentComponent, "mounted");
          }, parentSuspense);
        }
      };
      const setScopeId = (
        el,
        vnode,
        scopeId,
        slotScopeIds,
        parentComponent,
      ) => {
        if (scopeId) {
          hostSetScopeId(el, scopeId);
        }
        if (slotScopeIds) {
          for (let i = 0; i < slotScopeIds.length; i++) {
            hostSetScopeId(el, slotScopeIds[i]);
          }
        }
        if (parentComponent) {
          let subTree = parentComponent.subTree;
          if (vnode === subTree) {
            const parentVNode = parentComponent.vnode;
            setScopeId(
              el,
              parentVNode,
              parentVNode.scopeId,
              parentVNode.slotScopeIds,
              parentComponent.parent,
            );
          }
        }
      };
      const mountChildren = (
        children,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized,
        start = 0,
      ) => {
        for (let i = start; i < children.length; i++) {
          const child = (children[i] = optimized
            ? cloneIfMounted(children[i])
            : normalizeVNode(children[i]));
          patch(
            null,
            child,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized,
          );
        }
      };
      const patchElement = (
        n1,
        n2,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized,
      ) => {
        const el = (n2.el = n1.el);
        let { patchFlag, dynamicChildren, dirs } = n2;
        patchFlag |= n1.patchFlag & 16;
        const oldProps = n1.props || EMPTY_OBJ;
        const newProps = n2.props || EMPTY_OBJ;
        let vnodeHook;
        parentComponent && toggleRecurse(parentComponent, false);
        if ((vnodeHook = newProps.onVnodeBeforeUpdate)) {
          invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        }
        if (dirs) {
          invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
        }
        parentComponent && toggleRecurse(parentComponent, true);
        const areChildrenSVG = isSVG && n2.type !== "foreignObject";
        if (dynamicChildren) {
          patchBlockChildren(
            n1.dynamicChildren,
            dynamicChildren,
            el,
            parentComponent,
            parentSuspense,
            areChildrenSVG,
            slotScopeIds,
          );
        } else if (!optimized) {
          patchChildren(
            n1,
            n2,
            el,
            null,
            parentComponent,
            parentSuspense,
            areChildrenSVG,
            slotScopeIds,
            false,
          );
        }
        if (patchFlag > 0) {
          if (patchFlag & 16) {
            patchProps(
              el,
              n2,
              oldProps,
              newProps,
              parentComponent,
              parentSuspense,
              isSVG,
            );
          } else {
            if (patchFlag & 2) {
              if (oldProps.class !== newProps.class) {
                hostPatchProp(el, "class", null, newProps.class, isSVG);
              }
            }
            if (patchFlag & 4) {
              hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
            }
            if (patchFlag & 8) {
              const propsToUpdate = n2.dynamicProps;
              for (let i = 0; i < propsToUpdate.length; i++) {
                const key = propsToUpdate[i];
                const prev = oldProps[key];
                const next = newProps[key];
                if (next !== prev || key === "value") {
                  hostPatchProp(
                    el,
                    key,
                    prev,
                    next,
                    isSVG,
                    n1.children,
                    parentComponent,
                    parentSuspense,
                    unmountChildren,
                  );
                }
              }
            }
          }
          if (patchFlag & 1) {
            if (n1.children !== n2.children) {
              hostSetElementText(el, n2.children);
            }
          }
        } else if (!optimized && dynamicChildren == null) {
          patchProps(
            el,
            n2,
            oldProps,
            newProps,
            parentComponent,
            parentSuspense,
            isSVG,
          );
        }
        if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
          queuePostRenderEffect(() => {
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
            dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
          }, parentSuspense);
        }
      };
      const patchBlockChildren = (
        oldChildren,
        newChildren,
        fallbackContainer,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
      ) => {
        for (let i = 0; i < newChildren.length; i++) {
          const oldVNode = oldChildren[i];
          const newVNode = newChildren[i];
          const container =
            // oldVNode may be an errored async setup() component inside Suspense
            // which will not have a mounted element
            oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
            // of the Fragment itself so it can move its children.
            (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
              // which also requires the correct parent container
              !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
              oldVNode.shapeFlag & (6 | 64))
              ? hostParentNode(oldVNode.el)
              : // In other cases, the parent container is not actually used so we
                // just pass the block element here to avoid a DOM parentNode call.
                fallbackContainer;
          patch(
            oldVNode,
            newVNode,
            container,
            null,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            true,
          );
        }
      };
      const patchProps = (
        el,
        vnode,
        oldProps,
        newProps,
        parentComponent,
        parentSuspense,
        isSVG,
      ) => {
        if (oldProps !== newProps) {
          if (oldProps !== EMPTY_OBJ) {
            for (const key in oldProps) {
              if (!isReservedProp(key) && !(key in newProps)) {
                hostPatchProp(
                  el,
                  key,
                  oldProps[key],
                  null,
                  isSVG,
                  vnode.children,
                  parentComponent,
                  parentSuspense,
                  unmountChildren,
                );
              }
            }
          }
          for (const key in newProps) {
            if (isReservedProp(key)) continue;
            const next = newProps[key];
            const prev = oldProps[key];
            if (next !== prev && key !== "value") {
              hostPatchProp(
                el,
                key,
                prev,
                next,
                isSVG,
                vnode.children,
                parentComponent,
                parentSuspense,
                unmountChildren,
              );
            }
          }
          if ("value" in newProps) {
            hostPatchProp(el, "value", oldProps.value, newProps.value);
          }
        }
      };
      const processFragment = (
        n1,
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized,
      ) => {
        const fragmentStartAnchor = (n2.el = n1 ? n1.el : hostCreateText(""));
        const fragmentEndAnchor = (n2.anchor = n1
          ? n1.anchor
          : hostCreateText(""));
        let {
          patchFlag,
          dynamicChildren,
          slotScopeIds: fragmentSlotScopeIds,
        } = n2;
        if (fragmentSlotScopeIds) {
          slotScopeIds = slotScopeIds
            ? slotScopeIds.concat(fragmentSlotScopeIds)
            : fragmentSlotScopeIds;
        }
        if (n1 == null) {
          hostInsert(fragmentStartAnchor, container, anchor);
          hostInsert(fragmentEndAnchor, container, anchor);
          mountChildren(
            n2.children,
            container,
            fragmentEndAnchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized,
          );
        } else {
          if (
            patchFlag > 0 &&
            patchFlag & 64 &&
            dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
            // of renderSlot() with no valid children
            n1.dynamicChildren
          ) {
            patchBlockChildren(
              n1.dynamicChildren,
              dynamicChildren,
              container,
              parentComponent,
              parentSuspense,
              isSVG,
              slotScopeIds,
            );
            if (
              // #2080 if the stable fragment has a key, it's a <template v-for> that may
              //  get moved around. Make sure all root level vnodes inherit el.
              // #2134 or if it's a component root, it may also get moved around
              // as the component is being moved.
              n2.key != null ||
              (parentComponent && n2 === parentComponent.subTree)
            ) {
              traverseStaticChildren(
                n1,
                n2,
                true,
                /* shallow */
              );
            }
          } else {
            patchChildren(
              n1,
              n2,
              container,
              fragmentEndAnchor,
              parentComponent,
              parentSuspense,
              isSVG,
              slotScopeIds,
              optimized,
            );
          }
        }
      };
      const processComponent = (
        n1,
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized,
      ) => {
        n2.slotScopeIds = slotScopeIds;
        if (n1 == null) {
          if (n2.shapeFlag & 512) {
            parentComponent.ctx.activate(
              n2,
              container,
              anchor,
              isSVG,
              optimized,
            );
          } else {
            mountComponent(
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              isSVG,
              optimized,
            );
          }
        } else {
          updateComponent(n1, n2, optimized);
        }
      };
      const mountComponent = (
        initialVNode,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        optimized,
      ) => {
        const instance = (initialVNode.component = createComponentInstance(
          initialVNode,
          parentComponent,
          parentSuspense,
        ));
        if (isKeepAlive(initialVNode)) {
          instance.ctx.renderer = internals;
        }
        {
          setupComponent(instance);
        }
        if (instance.asyncDep) {
          parentSuspense &&
            parentSuspense.registerDep(instance, setupRenderEffect);
          if (!initialVNode.el) {
            const placeholder = (instance.subTree = createVNode(Comment));
            processCommentNode(null, placeholder, container, anchor);
          }
          return;
        }
        setupRenderEffect(
          instance,
          initialVNode,
          container,
          anchor,
          parentSuspense,
          isSVG,
          optimized,
        );
      };
      const updateComponent = (n1, n2, optimized) => {
        const instance = (n2.component = n1.component);
        if (shouldUpdateComponent(n1, n2, optimized)) {
          if (instance.asyncDep && !instance.asyncResolved) {
            updateComponentPreRender(instance, n2, optimized);
            return;
          } else {
            instance.next = n2;
            invalidateJob(instance.update);
            instance.update();
          }
        } else {
          n2.el = n1.el;
          instance.vnode = n2;
        }
      };
      const setupRenderEffect = (
        instance,
        initialVNode,
        container,
        anchor,
        parentSuspense,
        isSVG,
        optimized,
      ) => {
        const componentUpdateFn = () => {
          if (!instance.isMounted) {
            let vnodeHook;
            const { el, props } = initialVNode;
            const { bm, m, parent } = instance;
            const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
            toggleRecurse(instance, false);
            if (bm) {
              invokeArrayFns(bm);
            }
            if (
              !isAsyncWrapperVNode &&
              (vnodeHook = props && props.onVnodeBeforeMount)
            ) {
              invokeVNodeHook(vnodeHook, parent, initialVNode);
            }
            toggleRecurse(instance, true);
            if (el && hydrateNode) {
              const hydrateSubTree = () => {
                instance.subTree = renderComponentRoot(instance);
                hydrateNode(
                  el,
                  instance.subTree,
                  instance,
                  parentSuspense,
                  null,
                );
              };
              if (isAsyncWrapperVNode) {
                initialVNode.type.__asyncLoader().then(
                  // note: we are moving the render call into an async callback,
                  // which means it won't track dependencies - but it's ok because
                  // a server-rendered async wrapper is already in resolved state
                  // and it will never need to change.
                  () => !instance.isUnmounted && hydrateSubTree(),
                );
              } else {
                hydrateSubTree();
              }
            } else {
              const subTree = (instance.subTree =
                renderComponentRoot(instance));
              patch(
                null,
                subTree,
                container,
                anchor,
                instance,
                parentSuspense,
                isSVG,
              );
              initialVNode.el = subTree.el;
            }
            if (m) {
              queuePostRenderEffect(m, parentSuspense);
            }
            if (
              !isAsyncWrapperVNode &&
              (vnodeHook = props && props.onVnodeMounted)
            ) {
              const scopedInitialVNode = initialVNode;
              queuePostRenderEffect(
                () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
                parentSuspense,
              );
            }
            if (
              initialVNode.shapeFlag & 256 ||
              (parent &&
                isAsyncWrapper(parent.vnode) &&
                parent.vnode.shapeFlag & 256)
            ) {
              instance.a && queuePostRenderEffect(instance.a, parentSuspense);
            }
            instance.isMounted = true;
            initialVNode = container = anchor = null;
          } else {
            let { next, bu, u, parent, vnode } = instance;
            let originNext = next;
            let vnodeHook;
            toggleRecurse(instance, false);
            if (next) {
              next.el = vnode.el;
              updateComponentPreRender(instance, next, optimized);
            } else {
              next = vnode;
            }
            if (bu) {
              invokeArrayFns(bu);
            }
            if ((vnodeHook = next.props && next.props.onVnodeBeforeUpdate)) {
              invokeVNodeHook(vnodeHook, parent, next, vnode);
            }
            toggleRecurse(instance, true);
            const nextTree = renderComponentRoot(instance);
            const prevTree = instance.subTree;
            instance.subTree = nextTree;
            patch(
              prevTree,
              nextTree,
              // parent may have changed if it's in a teleport
              hostParentNode(prevTree.el),
              // anchor may have changed if it's in a fragment
              getNextHostNode(prevTree),
              instance,
              parentSuspense,
              isSVG,
            );
            next.el = nextTree.el;
            if (originNext === null) {
              updateHOCHostEl(instance, nextTree.el);
            }
            if (u) {
              queuePostRenderEffect(u, parentSuspense);
            }
            if ((vnodeHook = next.props && next.props.onVnodeUpdated)) {
              queuePostRenderEffect(
                () => invokeVNodeHook(vnodeHook, parent, next, vnode),
                parentSuspense,
              );
            }
          }
        };
        const effect2 = (instance.effect = new ReactiveEffect(
          componentUpdateFn,
          () => queueJob(update),
          instance.scope,
          // track it in component's effect scope
        ));
        const update = (instance.update = () => effect2.run());
        update.id = instance.uid;
        toggleRecurse(instance, true);
        update();
      };
      const updateComponentPreRender = (instance, nextVNode, optimized) => {
        nextVNode.component = instance;
        const prevProps = instance.vnode.props;
        instance.vnode = nextVNode;
        instance.next = null;
        updateProps(instance, nextVNode.props, prevProps, optimized);
        updateSlots(instance, nextVNode.children, optimized);
        pauseTracking();
        flushPreFlushCbs();
        resetTracking();
      };
      const patchChildren = (
        n1,
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized = false,
      ) => {
        const c1 = n1 && n1.children;
        const prevShapeFlag = n1 ? n1.shapeFlag : 0;
        const c2 = n2.children;
        const { patchFlag, shapeFlag } = n2;
        if (patchFlag > 0) {
          if (patchFlag & 128) {
            patchKeyedChildren(
              c1,
              c2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              isSVG,
              slotScopeIds,
              optimized,
            );
            return;
          } else if (patchFlag & 256) {
            patchUnkeyedChildren(
              c1,
              c2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              isSVG,
              slotScopeIds,
              optimized,
            );
            return;
          }
        }
        if (shapeFlag & 8) {
          if (prevShapeFlag & 16) {
            unmountChildren(c1, parentComponent, parentSuspense);
          }
          if (c2 !== c1) {
            hostSetElementText(container, c2);
          }
        } else {
          if (prevShapeFlag & 16) {
            if (shapeFlag & 16) {
              patchKeyedChildren(
                c1,
                c2,
                container,
                anchor,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized,
              );
            } else {
              unmountChildren(c1, parentComponent, parentSuspense, true);
            }
          } else {
            if (prevShapeFlag & 8) {
              hostSetElementText(container, "");
            }
            if (shapeFlag & 16) {
              mountChildren(
                c2,
                container,
                anchor,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized,
              );
            }
          }
        }
      };
      const patchUnkeyedChildren = (
        c1,
        c2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized,
      ) => {
        c1 = c1 || EMPTY_ARR;
        c2 = c2 || EMPTY_ARR;
        const oldLength = c1.length;
        const newLength = c2.length;
        const commonLength = Math.min(oldLength, newLength);
        let i;
        for (i = 0; i < commonLength; i++) {
          const nextChild = (c2[i] = optimized
            ? cloneIfMounted(c2[i])
            : normalizeVNode(c2[i]));
          patch(
            c1[i],
            nextChild,
            container,
            null,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized,
          );
        }
        if (oldLength > newLength) {
          unmountChildren(
            c1,
            parentComponent,
            parentSuspense,
            true,
            false,
            commonLength,
          );
        } else {
          mountChildren(
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized,
            commonLength,
          );
        }
      };
      const patchKeyedChildren = (
        c1,
        c2,
        container,
        parentAnchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized,
      ) => {
        let i = 0;
        const l2 = c2.length;
        let e1 = c1.length - 1;
        let e2 = l2 - 1;
        while (i <= e1 && i <= e2) {
          const n1 = c1[i];
          const n2 = (c2[i] = optimized
            ? cloneIfMounted(c2[i])
            : normalizeVNode(c2[i]));
          if (isSameVNodeType(n1, n2)) {
            patch(
              n1,
              n2,
              container,
              null,
              parentComponent,
              parentSuspense,
              isSVG,
              slotScopeIds,
              optimized,
            );
          } else {
            break;
          }
          i++;
        }
        while (i <= e1 && i <= e2) {
          const n1 = c1[e1];
          const n2 = (c2[e2] = optimized
            ? cloneIfMounted(c2[e2])
            : normalizeVNode(c2[e2]));
          if (isSameVNodeType(n1, n2)) {
            patch(
              n1,
              n2,
              container,
              null,
              parentComponent,
              parentSuspense,
              isSVG,
              slotScopeIds,
              optimized,
            );
          } else {
            break;
          }
          e1--;
          e2--;
        }
        if (i > e1) {
          if (i <= e2) {
            const nextPos = e2 + 1;
            const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
            while (i <= e2) {
              patch(
                null,
                (c2[i] = optimized
                  ? cloneIfMounted(c2[i])
                  : normalizeVNode(c2[i])),
                container,
                anchor,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized,
              );
              i++;
            }
          }
        } else if (i > e2) {
          while (i <= e1) {
            unmount(c1[i], parentComponent, parentSuspense, true);
            i++;
          }
        } else {
          const s1 = i;
          const s2 = i;
          const keyToNewIndexMap = /* @__PURE__ */ new Map();
          for (i = s2; i <= e2; i++) {
            const nextChild = (c2[i] = optimized
              ? cloneIfMounted(c2[i])
              : normalizeVNode(c2[i]));
            if (nextChild.key != null) {
              keyToNewIndexMap.set(nextChild.key, i);
            }
          }
          let j;
          let patched = 0;
          const toBePatched = e2 - s2 + 1;
          let moved = false;
          let maxNewIndexSoFar = 0;
          const newIndexToOldIndexMap = new Array(toBePatched);
          for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
          for (i = s1; i <= e1; i++) {
            const prevChild = c1[i];
            if (patched >= toBePatched) {
              unmount(prevChild, parentComponent, parentSuspense, true);
              continue;
            }
            let newIndex;
            if (prevChild.key != null) {
              newIndex = keyToNewIndexMap.get(prevChild.key);
            } else {
              for (j = s2; j <= e2; j++) {
                if (
                  newIndexToOldIndexMap[j - s2] === 0 &&
                  isSameVNodeType(prevChild, c2[j])
                ) {
                  newIndex = j;
                  break;
                }
              }
            }
            if (newIndex === void 0) {
              unmount(prevChild, parentComponent, parentSuspense, true);
            } else {
              newIndexToOldIndexMap[newIndex - s2] = i + 1;
              if (newIndex >= maxNewIndexSoFar) {
                maxNewIndexSoFar = newIndex;
              } else {
                moved = true;
              }
              patch(
                prevChild,
                c2[newIndex],
                container,
                null,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized,
              );
              patched++;
            }
          }
          const increasingNewIndexSequence = moved
            ? getSequence(newIndexToOldIndexMap)
            : EMPTY_ARR;
          j = increasingNewIndexSequence.length - 1;
          for (i = toBePatched - 1; i >= 0; i--) {
            const nextIndex = s2 + i;
            const nextChild = c2[nextIndex];
            const anchor =
              nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
            if (newIndexToOldIndexMap[i] === 0) {
              patch(
                null,
                nextChild,
                container,
                anchor,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized,
              );
            } else if (moved) {
              if (j < 0 || i !== increasingNewIndexSequence[j]) {
                move(nextChild, container, anchor, 2);
              } else {
                j--;
              }
            }
          }
        }
      };
      const move = (
        vnode,
        container,
        anchor,
        moveType,
        parentSuspense = null,
      ) => {
        const { el, type, transition, children, shapeFlag } = vnode;
        if (shapeFlag & 6) {
          move(vnode.component.subTree, container, anchor, moveType);
          return;
        }
        if (shapeFlag & 128) {
          vnode.suspense.move(container, anchor, moveType);
          return;
        }
        if (shapeFlag & 64) {
          type.move(vnode, container, anchor, internals);
          return;
        }
        if (type === Fragment) {
          hostInsert(el, container, anchor);
          for (let i = 0; i < children.length; i++) {
            move(children[i], container, anchor, moveType);
          }
          hostInsert(vnode.anchor, container, anchor);
          return;
        }
        if (type === Static) {
          moveStaticNode(vnode, container, anchor);
          return;
        }
        const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
        if (needTransition) {
          if (moveType === 0) {
            transition.beforeEnter(el);
            hostInsert(el, container, anchor);
            queuePostRenderEffect(() => transition.enter(el), parentSuspense);
          } else {
            const { leave, delayLeave, afterLeave } = transition;
            const remove22 = () => hostInsert(el, container, anchor);
            const performLeave = () => {
              leave(el, () => {
                remove22();
                afterLeave && afterLeave();
              });
            };
            if (delayLeave) {
              delayLeave(el, remove22, performLeave);
            } else {
              performLeave();
            }
          }
        } else {
          hostInsert(el, container, anchor);
        }
      };
      const unmount = (
        vnode,
        parentComponent,
        parentSuspense,
        doRemove = false,
        optimized = false,
      ) => {
        const {
          type,
          props,
          ref: ref2,
          children,
          dynamicChildren,
          shapeFlag,
          patchFlag,
          dirs,
        } = vnode;
        if (ref2 != null) {
          setRef(ref2, null, parentSuspense, vnode, true);
        }
        if (shapeFlag & 256) {
          parentComponent.ctx.deactivate(vnode);
          return;
        }
        const shouldInvokeDirs = shapeFlag & 1 && dirs;
        const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
        let vnodeHook;
        if (
          shouldInvokeVnodeHook &&
          (vnodeHook = props && props.onVnodeBeforeUnmount)
        ) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
        if (shapeFlag & 6) {
          unmountComponent(vnode.component, parentSuspense, doRemove);
        } else {
          if (shapeFlag & 128) {
            vnode.suspense.unmount(parentSuspense, doRemove);
            return;
          }
          if (shouldInvokeDirs) {
            invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
          }
          if (shapeFlag & 64) {
            vnode.type.remove(
              vnode,
              parentComponent,
              parentSuspense,
              optimized,
              internals,
              doRemove,
            );
          } else if (
            dynamicChildren && // #1153: fast path should not be taken for non-stable (v-for) fragments
            (type !== Fragment || (patchFlag > 0 && patchFlag & 64))
          ) {
            unmountChildren(
              dynamicChildren,
              parentComponent,
              parentSuspense,
              false,
              true,
            );
          } else if (
            (type === Fragment && patchFlag & (128 | 256)) ||
            (!optimized && shapeFlag & 16)
          ) {
            unmountChildren(children, parentComponent, parentSuspense);
          }
          if (doRemove) {
            remove2(vnode);
          }
        }
        if (
          (shouldInvokeVnodeHook &&
            (vnodeHook = props && props.onVnodeUnmounted)) ||
          shouldInvokeDirs
        ) {
          queuePostRenderEffect(() => {
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            shouldInvokeDirs &&
              invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
          }, parentSuspense);
        }
      };
      const remove2 = (vnode) => {
        const { type, el, anchor, transition } = vnode;
        if (type === Fragment) {
          {
            removeFragment(el, anchor);
          }
          return;
        }
        if (type === Static) {
          removeStaticNode(vnode);
          return;
        }
        const performRemove = () => {
          hostRemove(el);
          if (transition && !transition.persisted && transition.afterLeave) {
            transition.afterLeave();
          }
        };
        if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
          const { leave, delayLeave } = transition;
          const performLeave = () => leave(el, performRemove);
          if (delayLeave) {
            delayLeave(vnode.el, performRemove, performLeave);
          } else {
            performLeave();
          }
        } else {
          performRemove();
        }
      };
      const removeFragment = (cur, end) => {
        let next;
        while (cur !== end) {
          next = hostNextSibling(cur);
          hostRemove(cur);
          cur = next;
        }
        hostRemove(end);
      };
      const unmountComponent = (instance, parentSuspense, doRemove) => {
        const { bum, scope, update, subTree, um } = instance;
        if (bum) {
          invokeArrayFns(bum);
        }
        scope.stop();
        if (update) {
          update.active = false;
          unmount(subTree, instance, parentSuspense, doRemove);
        }
        if (um) {
          queuePostRenderEffect(um, parentSuspense);
        }
        queuePostRenderEffect(() => {
          instance.isUnmounted = true;
        }, parentSuspense);
        if (
          parentSuspense &&
          parentSuspense.pendingBranch &&
          !parentSuspense.isUnmounted &&
          instance.asyncDep &&
          !instance.asyncResolved &&
          instance.suspenseId === parentSuspense.pendingId
        ) {
          parentSuspense.deps--;
          if (parentSuspense.deps === 0) {
            parentSuspense.resolve();
          }
        }
      };
      const unmountChildren = (
        children,
        parentComponent,
        parentSuspense,
        doRemove = false,
        optimized = false,
        start = 0,
      ) => {
        for (let i = start; i < children.length; i++) {
          unmount(
            children[i],
            parentComponent,
            parentSuspense,
            doRemove,
            optimized,
          );
        }
      };
      const getNextHostNode = (vnode) => {
        if (vnode.shapeFlag & 6) {
          return getNextHostNode(vnode.component.subTree);
        }
        if (vnode.shapeFlag & 128) {
          return vnode.suspense.next();
        }
        return hostNextSibling(vnode.anchor || vnode.el);
      };
      const render2 = (vnode, container, isSVG) => {
        if (vnode == null) {
          if (container._vnode) {
            unmount(container._vnode, null, null, true);
          }
        } else {
          patch(
            container._vnode || null,
            vnode,
            container,
            null,
            null,
            null,
            isSVG,
          );
        }
        flushPreFlushCbs();
        flushPostFlushCbs();
        container._vnode = vnode;
      };
      const internals = {
        p: patch,
        um: unmount,
        m: move,
        r: remove2,
        mt: mountComponent,
        mc: mountChildren,
        pc: patchChildren,
        pbc: patchBlockChildren,
        n: getNextHostNode,
        o: options,
      };
      let hydrate2;
      let hydrateNode;
      if (createHydrationFns) {
        [hydrate2, hydrateNode] = createHydrationFns(internals);
      }
      return {
        render: render2,
        hydrate: hydrate2,
        createApp: createAppAPI(render2, hydrate2),
      };
    }

    function toggleRecurse({ effect: effect2, update }, allowed) {
      effect2.allowRecurse = update.allowRecurse = allowed;
    }

    function traverseStaticChildren(n1, n2, shallow = false) {
      const ch1 = n1.children;
      const ch2 = n2.children;
      if (isArray$1(ch1) && isArray$1(ch2)) {
        for (let i = 0; i < ch1.length; i++) {
          const c1 = ch1[i];
          let c2 = ch2[i];
          if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
            if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
              c2 = ch2[i] = cloneIfMounted(ch2[i]);
              c2.el = c1.el;
            }
            if (!shallow) traverseStaticChildren(c1, c2);
          }
          if (c2.type === Text) {
            c2.el = c1.el;
          }
        }
      }
    }

    function getSequence(arr) {
      const p2 = arr.slice();
      const result = [0];
      let i, j, u, v, c2;
      const len = arr.length;
      for (i = 0; i < len; i++) {
        const arrI = arr[i];
        if (arrI !== 0) {
          j = result[result.length - 1];
          if (arr[j] < arrI) {
            p2[i] = j;
            result.push(i);
            continue;
          }
          u = 0;
          v = result.length - 1;
          while (u < v) {
            c2 = (u + v) >> 1;
            if (arr[result[c2]] < arrI) {
              u = c2 + 1;
            } else {
              v = c2;
            }
          }
          if (arrI < arr[result[u]]) {
            if (u > 0) {
              p2[i] = result[u - 1];
            }
            result[u] = i;
          }
        }
      }
      u = result.length;
      v = result[u - 1];
      while (u-- > 0) {
        result[u] = v;
        v = p2[v];
      }
      return result;
    }
    const isTeleport = (type) => type.__isTeleport;
    const isTeleportDisabled = (props) =>
      props && (props.disabled || props.disabled === "");
    const isTargetSVG = (target) =>
      typeof SVGElement !== "undefined" && target instanceof SVGElement;
    const resolveTarget = (props, select) => {
      const targetSelector = props && props.to;
      if (isString$2(targetSelector)) {
        if (!select) {
          return null;
        } else {
          const target = select(targetSelector);
          return target;
        }
      } else {
        return targetSelector;
      }
    };
    const TeleportImpl = {
      __isTeleport: true,
      process(
        n1,
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        isSVG,
        slotScopeIds,
        optimized,
        internals,
      ) {
        const {
          mc: mountChildren,
          pc: patchChildren,
          pbc: patchBlockChildren,
          o: { insert, querySelector, createText, createComment },
        } = internals;
        const disabled = isTeleportDisabled(n2.props);
        let { shapeFlag, children, dynamicChildren } = n2;
        if (n1 == null) {
          const placeholder = (n2.el = createText(""));
          const mainAnchor = (n2.anchor = createText(""));
          insert(placeholder, container, anchor);
          insert(mainAnchor, container, anchor);
          const target = (n2.target = resolveTarget(n2.props, querySelector));
          const targetAnchor = (n2.targetAnchor = createText(""));
          if (target) {
            insert(targetAnchor, target);
            isSVG = isSVG || isTargetSVG(target);
          }
          const mount = (container2, anchor2) => {
            if (shapeFlag & 16) {
              mountChildren(
                children,
                container2,
                anchor2,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized,
              );
            }
          };
          if (disabled) {
            mount(container, mainAnchor);
          } else if (target) {
            mount(target, targetAnchor);
          }
        } else {
          n2.el = n1.el;
          const mainAnchor = (n2.anchor = n1.anchor);
          const target = (n2.target = n1.target);
          const targetAnchor = (n2.targetAnchor = n1.targetAnchor);
          const wasDisabled = isTeleportDisabled(n1.props);
          const currentContainer = wasDisabled ? container : target;
          const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
          isSVG = isSVG || isTargetSVG(target);
          if (dynamicChildren) {
            patchBlockChildren(
              n1.dynamicChildren,
              dynamicChildren,
              currentContainer,
              parentComponent,
              parentSuspense,
              isSVG,
              slotScopeIds,
            );
            traverseStaticChildren(n1, n2, true);
          } else if (!optimized) {
            patchChildren(
              n1,
              n2,
              currentContainer,
              currentAnchor,
              parentComponent,
              parentSuspense,
              isSVG,
              slotScopeIds,
              false,
            );
          }
          if (disabled) {
            if (!wasDisabled) {
              moveTeleport(n2, container, mainAnchor, internals, 1);
            }
          } else {
            if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
              const nextTarget = (n2.target = resolveTarget(
                n2.props,
                querySelector,
              ));
              if (nextTarget) {
                moveTeleport(n2, nextTarget, null, internals, 0);
              }
            } else if (wasDisabled) {
              moveTeleport(n2, target, targetAnchor, internals, 1);
            }
          }
        }
        updateCssVars(n2);
      },
      remove(
        vnode,
        parentComponent,
        parentSuspense,
        optimized,
        { um: unmount, o: { remove: hostRemove } },
        doRemove,
      ) {
        const { shapeFlag, children, anchor, targetAnchor, target, props } =
          vnode;
        if (target) {
          hostRemove(targetAnchor);
        }
        if (doRemove || !isTeleportDisabled(props)) {
          hostRemove(anchor);
          if (shapeFlag & 16) {
            for (let i = 0; i < children.length; i++) {
              const child = children[i];
              unmount(
                child,
                parentComponent,
                parentSuspense,
                true,
                !!child.dynamicChildren,
              );
            }
          }
        }
      },
      move: moveTeleport,
      hydrate: hydrateTeleport,
    };

    function moveTeleport(
      vnode,
      container,
      parentAnchor,
      { o: { insert }, m: move },
      moveType = 2,
    ) {
      if (moveType === 0) {
        insert(vnode.targetAnchor, container, parentAnchor);
      }
      const { el, anchor, shapeFlag, children, props } = vnode;
      const isReorder = moveType === 2;
      if (isReorder) {
        insert(el, container, parentAnchor);
      }
      if (!isReorder || isTeleportDisabled(props)) {
        if (shapeFlag & 16) {
          for (let i = 0; i < children.length; i++) {
            move(children[i], container, parentAnchor, 2);
          }
        }
      }
      if (isReorder) {
        insert(anchor, container, parentAnchor);
      }
    }

    function hydrateTeleport(
      node,
      vnode,
      parentComponent,
      parentSuspense,
      slotScopeIds,
      optimized,
      { o: { nextSibling, parentNode, querySelector } },
      hydrateChildren,
    ) {
      const target = (vnode.target = resolveTarget(vnode.props, querySelector));
      if (target) {
        const targetNode = target._lpa || target.firstChild;
        if (vnode.shapeFlag & 16) {
          if (isTeleportDisabled(vnode.props)) {
            vnode.anchor = hydrateChildren(
              nextSibling(node),
              vnode,
              parentNode(node),
              parentComponent,
              parentSuspense,
              slotScopeIds,
              optimized,
            );
            vnode.targetAnchor = targetNode;
          } else {
            vnode.anchor = nextSibling(node);
            let targetAnchor = targetNode;
            while (targetAnchor) {
              targetAnchor = nextSibling(targetAnchor);
              if (
                targetAnchor &&
                targetAnchor.nodeType === 8 &&
                targetAnchor.data === "teleport anchor"
              ) {
                vnode.targetAnchor = targetAnchor;
                target._lpa =
                  vnode.targetAnchor && nextSibling(vnode.targetAnchor);
                break;
              }
            }
            hydrateChildren(
              targetNode,
              vnode,
              target,
              parentComponent,
              parentSuspense,
              slotScopeIds,
              optimized,
            );
          }
        }
        updateCssVars(vnode);
      }
      return vnode.anchor && nextSibling(vnode.anchor);
    }
    const Teleport = TeleportImpl;

    function updateCssVars(vnode) {
      const ctx = vnode.ctx;
      if (ctx && ctx.ut) {
        let node = vnode.children[0].el;
        while (node !== vnode.targetAnchor) {
          if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx.uid);
          node = node.nextSibling;
        }
        ctx.ut();
      }
    }
    const Fragment = Symbol.for("v-fgt");
    const Text = Symbol.for("v-txt");
    const Comment = Symbol.for("v-cmt");
    const Static = Symbol.for("v-stc");
    const blockStack = [];
    let currentBlock = null;

    function openBlock(disableTracking = false) {
      blockStack.push((currentBlock = disableTracking ? null : []));
    }

    function closeBlock() {
      blockStack.pop();
      currentBlock = blockStack[blockStack.length - 1] || null;
    }
    let isBlockTreeEnabled = 1;

    function setBlockTracking(value) {
      isBlockTreeEnabled += value;
    }

    function setupBlock(vnode) {
      vnode.dynamicChildren =
        isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
      closeBlock();
      if (isBlockTreeEnabled > 0 && currentBlock) {
        currentBlock.push(vnode);
      }
      return vnode;
    }

    function createElementBlock(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
    ) {
      return setupBlock(
        createBaseVNode(
          type,
          props,
          children,
          patchFlag,
          dynamicProps,
          shapeFlag,
          true,
          /* isBlock */
        ),
      );
    }

    function createBlock(type, props, children, patchFlag, dynamicProps) {
      return setupBlock(
        createVNode(
          type,
          props,
          children,
          patchFlag,
          dynamicProps,
          true,
          /* isBlock: prevent a block from tracking itself */
        ),
      );
    }

    function isVNode(value) {
      return value ? value.__v_isVNode === true : false;
    }

    function isSameVNodeType(n1, n2) {
      return n1.type === n2.type && n1.key === n2.key;
    }

    function transformVNodeArgs(transformer) {}
    const InternalObjectKey = `__vInternal`;
    const normalizeKey = ({ key }) => (key != null ? key : null);
    const normalizeRef = ({ ref: ref2, ref_key, ref_for }) => {
      if (typeof ref2 === "number") {
        ref2 = "" + ref2;
      }
      return ref2 != null
        ? isString$2(ref2) || isRef(ref2) || isFunction$1(ref2)
          ? {
              i: currentRenderingInstance,
              r: ref2,
              k: ref_key,
              f: !!ref_for,
            }
          : ref2
        : null;
    };

    function createBaseVNode(
      type,
      props = null,
      children = null,
      patchFlag = 0,
      dynamicProps = null,
      shapeFlag = type === Fragment ? 0 : 1,
      isBlockNode = false,
      needFullChildrenNormalization = false,
    ) {
      const vnode = {
        __v_isVNode: true,
        __v_skip: true,
        type,
        props,
        key: props && normalizeKey(props),
        ref: props && normalizeRef(props),
        scopeId: currentScopeId,
        slotScopeIds: null,
        children,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag,
        patchFlag,
        dynamicProps,
        dynamicChildren: null,
        appContext: null,
        ctx: currentRenderingInstance,
      };
      if (needFullChildrenNormalization) {
        normalizeChildren(vnode, children);
        if (shapeFlag & 128) {
          type.normalize(vnode);
        }
      } else if (children) {
        vnode.shapeFlag |= isString$2(children) ? 8 : 16;
      }
      if (
        isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
        !isBlockNode && // has current parent block
        currentBlock && // presence of a patch flag indicates this node needs patching on updates.
        // component nodes also should always be patched, because even if the
        // component doesn't need to update, it needs to persist the instance on to
        // the next vnode so that it can be properly unmounted later.
        (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
        // vnode should not be considered dynamic due to handler caching.
        vnode.patchFlag !== 32
      ) {
        currentBlock.push(vnode);
      }
      return vnode;
    }
    const createVNode = _createVNode;

    function _createVNode(
      type,
      props = null,
      children = null,
      patchFlag = 0,
      dynamicProps = null,
      isBlockNode = false,
    ) {
      if (!type || type === NULL_DYNAMIC_COMPONENT) {
        type = Comment;
      }
      if (isVNode(type)) {
        const cloned = cloneVNode(
          type,
          props,
          true,
          /* mergeRef: true */
        );
        if (children) {
          normalizeChildren(cloned, children);
        }
        if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
          if (cloned.shapeFlag & 6) {
            currentBlock[currentBlock.indexOf(type)] = cloned;
          } else {
            currentBlock.push(cloned);
          }
        }
        cloned.patchFlag |= -2;
        return cloned;
      }
      if (isClassComponent(type)) {
        type = type.__vccOpts;
      }
      if (props) {
        props = guardReactiveProps(props);
        let { class: klass, style } = props;
        if (klass && !isString$2(klass)) {
          props.class = normalizeClass(klass);
        }
        if (isObject$1(style)) {
          if (isProxy(style) && !isArray$1(style)) {
            style = extend$1({}, style);
          }
          props.style = normalizeStyle(style);
        }
      }
      const shapeFlag = isString$2(type)
        ? 1
        : isSuspense(type)
          ? 128
          : isTeleport(type)
            ? 64
            : isObject$1(type)
              ? 4
              : isFunction$1(type)
                ? 2
                : 0;
      return createBaseVNode(
        type,
        props,
        children,
        patchFlag,
        dynamicProps,
        shapeFlag,
        isBlockNode,
        true,
      );
    }

    function guardReactiveProps(props) {
      if (!props) return null;
      return isProxy(props) || InternalObjectKey in props
        ? extend$1({}, props)
        : props;
    }

    function cloneVNode(vnode, extraProps, mergeRef = false) {
      const { props, ref: ref2, patchFlag, children } = vnode;
      const mergedProps = extraProps
        ? mergeProps(props || {}, extraProps)
        : props;
      const cloned = {
        __v_isVNode: true,
        __v_skip: true,
        type: vnode.type,
        props: mergedProps,
        key: mergedProps && normalizeKey(mergedProps),
        ref:
          extraProps && extraProps.ref
            ? // #2078 in the case of <component :is="vnode" ref="extra"/>
              // if the vnode itself already has a ref, cloneVNode will need to merge
              // the refs so the single vnode can be set on multiple refs
              mergeRef && ref2
              ? isArray$1(ref2)
                ? ref2.concat(normalizeRef(extraProps))
                : [ref2, normalizeRef(extraProps)]
              : normalizeRef(extraProps)
            : ref2,
        scopeId: vnode.scopeId,
        slotScopeIds: vnode.slotScopeIds,
        children,
        target: vnode.target,
        targetAnchor: vnode.targetAnchor,
        staticCount: vnode.staticCount,
        shapeFlag: vnode.shapeFlag,
        // if the vnode is cloned with extra props, we can no longer assume its
        // existing patch flag to be reliable and need to add the FULL_PROPS flag.
        // note: preserve flag for fragments since they use the flag for children
        // fast paths only.
        patchFlag:
          extraProps && vnode.type !== Fragment
            ? patchFlag === -1
              ? 16
              : patchFlag | 16
            : patchFlag,
        dynamicProps: vnode.dynamicProps,
        dynamicChildren: vnode.dynamicChildren,
        appContext: vnode.appContext,
        dirs: vnode.dirs,
        transition: vnode.transition,
        // These should technically only be non-null on mounted VNodes. However,
        // they *should* be copied for kept-alive vnodes. So we just always copy
        // them since them being non-null during a mount doesn't affect the logic as
        // they will simply be overwritten.
        component: vnode.component,
        suspense: vnode.suspense,
        ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
        ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
        el: vnode.el,
        anchor: vnode.anchor,
        ctx: vnode.ctx,
        ce: vnode.ce,
      };
      return cloned;
    }

    function createTextVNode(text = " ", flag = 0) {
      return createVNode(Text, null, text, flag);
    }

    function createStaticVNode(content, numberOfNodes) {
      const vnode = createVNode(Static, null, content);
      vnode.staticCount = numberOfNodes;
      return vnode;
    }

    function createCommentVNode(text = "", asBlock = false) {
      return asBlock
        ? (openBlock(), createBlock(Comment, null, text))
        : createVNode(Comment, null, text);
    }

    function normalizeVNode(child) {
      if (child == null || typeof child === "boolean") {
        return createVNode(Comment);
      } else if (isArray$1(child)) {
        return createVNode(
          Fragment,
          null,
          // #3666, avoid reference pollution when reusing vnode
          child.slice(),
        );
      } else if (typeof child === "object") {
        return cloneIfMounted(child);
      } else {
        return createVNode(Text, null, String(child));
      }
    }

    function cloneIfMounted(child) {
      return (child.el === null && child.patchFlag !== -1) || child.memo
        ? child
        : cloneVNode(child);
    }

    function normalizeChildren(vnode, children) {
      let type = 0;
      const { shapeFlag } = vnode;
      if (children == null) {
        children = null;
      } else if (isArray$1(children)) {
        type = 16;
      } else if (typeof children === "object") {
        if (shapeFlag & (1 | 64)) {
          const slot = children.default;
          if (slot) {
            slot._c && (slot._d = false);
            normalizeChildren(vnode, slot());
            slot._c && (slot._d = true);
          }
          return;
        } else {
          type = 32;
          const slotFlag = children._;
          if (!slotFlag && !(InternalObjectKey in children)) {
            children._ctx = currentRenderingInstance;
          } else if (slotFlag === 3 && currentRenderingInstance) {
            if (currentRenderingInstance.slots._ === 1) {
              children._ = 1;
            } else {
              children._ = 2;
              vnode.patchFlag |= 1024;
            }
          }
        }
      } else if (isFunction$1(children)) {
        children = {
          default: children,
          _ctx: currentRenderingInstance,
        };
        type = 32;
      } else {
        children = String(children);
        if (shapeFlag & 64) {
          type = 16;
          children = [createTextVNode(children)];
        } else {
          type = 8;
        }
      }
      vnode.children = children;
      vnode.shapeFlag |= type;
    }

    function mergeProps(...args) {
      const ret = {};
      for (let i = 0; i < args.length; i++) {
        const toMerge = args[i];
        for (const key in toMerge) {
          if (key === "class") {
            if (ret.class !== toMerge.class) {
              ret.class = normalizeClass([ret.class, toMerge.class]);
            }
          } else if (key === "style") {
            ret.style = normalizeStyle([ret.style, toMerge.style]);
          } else if (isOn(key)) {
            const existing = ret[key];
            const incoming = toMerge[key];
            if (
              incoming &&
              existing !== incoming &&
              !(isArray$1(existing) && existing.includes(incoming))
            ) {
              ret[key] = existing ? [].concat(existing, incoming) : incoming;
            }
          } else if (key !== "") {
            ret[key] = toMerge[key];
          }
        }
      }
      return ret;
    }

    function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
      callWithAsyncErrorHandling(hook, instance, 7, [vnode, prevVNode]);
    }
    const emptyAppContext = createAppContext();
    let uid = 0;

    function createComponentInstance(vnode, parent, suspense) {
      const type = vnode.type;
      const appContext =
        (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
      const instance = {
        uid: uid++,
        vnode,
        type,
        parent,
        appContext,
        root: null,
        // to be immediately set
        next: null,
        subTree: null,
        // will be set synchronously right after creation
        effect: null,
        update: null,
        // will be set synchronously right after creation
        scope: new EffectScope(
          true,
          /* detached */
        ),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: parent ? parent.provides : Object.create(appContext.provides),
        accessCache: null,
        renderCache: [],
        // local resolved assets
        components: null,
        directives: null,
        // resolved props and emits options
        propsOptions: normalizePropsOptions(type, appContext),
        emitsOptions: normalizeEmitsOptions(type, appContext),
        // emit
        emit: null,
        // to be set immediately
        emitted: null,
        // props default value
        propsDefaults: EMPTY_OBJ,
        // inheritAttrs
        inheritAttrs: type.inheritAttrs,
        // state
        ctx: EMPTY_OBJ,
        data: EMPTY_OBJ,
        props: EMPTY_OBJ,
        attrs: EMPTY_OBJ,
        slots: EMPTY_OBJ,
        refs: EMPTY_OBJ,
        setupState: EMPTY_OBJ,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        // suspense related
        suspense,
        suspenseId: suspense ? suspense.pendingId : 0,
        asyncDep: null,
        asyncResolved: false,
        // lifecycle hooks
        // not using enums here because it results in computed properties
        isMounted: false,
        isUnmounted: false,
        isDeactivated: false,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null,
      };
      {
        instance.ctx = {
          _: instance,
        };
      }
      instance.root = parent ? parent.root : instance;
      instance.emit = emit.bind(null, instance);
      if (vnode.ce) {
        vnode.ce(instance);
      }
      return instance;
    }
    let currentInstance = null;
    const getCurrentInstance = () =>
      currentInstance || currentRenderingInstance;
    let internalSetCurrentInstance;
    let globalCurrentInstanceSetters;
    let settersKey = "__VUE_INSTANCE_SETTERS__";
    {
      if (!(globalCurrentInstanceSetters = getGlobalThis()[settersKey])) {
        globalCurrentInstanceSetters = getGlobalThis()[settersKey] = [];
      }
      globalCurrentInstanceSetters.push((i) => (currentInstance = i));
      internalSetCurrentInstance = (instance) => {
        if (globalCurrentInstanceSetters.length > 1) {
          globalCurrentInstanceSetters.forEach((s) => s(instance));
        } else {
          globalCurrentInstanceSetters[0](instance);
        }
      };
    }
    const setCurrentInstance = (instance) => {
      internalSetCurrentInstance(instance);
      instance.scope.on();
    };
    const unsetCurrentInstance = () => {
      currentInstance && currentInstance.scope.off();
      internalSetCurrentInstance(null);
    };

    function isStatefulComponent(instance) {
      return instance.vnode.shapeFlag & 4;
    }
    let isInSSRComponentSetup = false;

    function setupComponent(instance, isSSR = false) {
      isInSSRComponentSetup = isSSR;
      const { props, children } = instance.vnode;
      const isStateful = isStatefulComponent(instance);
      initProps(instance, props, isStateful, isSSR);
      initSlots(instance, children);
      const setupResult = isStateful
        ? setupStatefulComponent(instance, isSSR)
        : void 0;
      isInSSRComponentSetup = false;
      return setupResult;
    }

    function setupStatefulComponent(instance, isSSR) {
      const Component = instance.type;
      instance.accessCache = /* @__PURE__ */ Object.create(null);
      instance.proxy = markRaw(
        new Proxy(instance.ctx, PublicInstanceProxyHandlers),
      );
      const { setup } = Component;
      if (setup) {
        const setupContext = (instance.setupContext =
          setup.length > 1 ? createSetupContext(instance) : null);
        setCurrentInstance(instance);
        pauseTracking();
        const setupResult = callWithErrorHandling(setup, instance, 0, [
          instance.props,
          setupContext,
        ]);
        resetTracking();
        unsetCurrentInstance();
        if (isPromise(setupResult)) {
          setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
          if (isSSR) {
            return setupResult
              .then((resolvedResult) => {
                handleSetupResult(instance, resolvedResult, isSSR);
              })
              .catch((e) => {
                handleError(e, instance, 0);
              });
          } else {
            instance.asyncDep = setupResult;
          }
        } else {
          handleSetupResult(instance, setupResult, isSSR);
        }
      } else {
        finishComponentSetup(instance, isSSR);
      }
    }

    function handleSetupResult(instance, setupResult, isSSR) {
      if (isFunction$1(setupResult)) {
        if (instance.type.__ssrInlineRender) {
          instance.ssrRender = setupResult;
        } else {
          instance.render = setupResult;
        }
      } else if (isObject$1(setupResult)) {
        instance.setupState = proxyRefs(setupResult);
      } else;
      finishComponentSetup(instance, isSSR);
    }
    let compile$2;
    let installWithProxy;

    function registerRuntimeCompiler(_compile) {
      compile$2 = _compile;
      installWithProxy = (i) => {
        if (i.render._rc) {
          i.withProxy = new Proxy(
            i.ctx,
            RuntimeCompiledPublicInstanceProxyHandlers,
          );
        }
      };
    }
    const isRuntimeOnly = () => !compile$2;

    function finishComponentSetup(instance, isSSR, skipOptions) {
      const Component = instance.type;
      if (!instance.render) {
        if (!isSSR && compile$2 && !Component.render) {
          const template =
            Component.template || resolveMergedOptions(instance).template;
          if (template) {
            const { isCustomElement, compilerOptions } =
              instance.appContext.config;
            const { delimiters, compilerOptions: componentCompilerOptions } =
              Component;
            const finalCompilerOptions = extend$1(
              extend$1(
                {
                  isCustomElement,
                  delimiters,
                },
                compilerOptions,
              ),
              componentCompilerOptions,
            );
            Component.render = compile$2(template, finalCompilerOptions);
          }
        }
        instance.render = Component.render || NOOP;
        if (installWithProxy) {
          installWithProxy(instance);
        }
      }
      {
        setCurrentInstance(instance);
        pauseTracking();
        applyOptions(instance);
        resetTracking();
        unsetCurrentInstance();
      }
    }

    function getAttrsProxy(instance) {
      return (
        instance.attrsProxy ||
        (instance.attrsProxy = new Proxy(instance.attrs, {
          get(target, key) {
            track(instance, "get", "$attrs");
            return target[key];
          },
        }))
      );
    }

    function createSetupContext(instance) {
      const expose = (exposed) => {
        instance.exposed = exposed || {};
      };
      {
        return {
          get attrs() {
            return getAttrsProxy(instance);
          },
          slots: instance.slots,
          emit: instance.emit,
          expose,
        };
      }
    }

    function getExposeProxy(instance) {
      if (instance.exposed) {
        return (
          instance.exposeProxy ||
          (instance.exposeProxy = new Proxy(
            proxyRefs(markRaw(instance.exposed)),
            {
              get(target, key) {
                if (key in target) {
                  return target[key];
                } else if (key in publicPropertiesMap) {
                  return publicPropertiesMap[key](instance);
                }
              },
              has(target, key) {
                return key in target || key in publicPropertiesMap;
              },
            },
          ))
        );
      }
    }

    function getComponentName(Component, includeInferred = true) {
      return isFunction$1(Component)
        ? Component.displayName || Component.name
        : Component.name || (includeInferred && Component.__name);
    }

    function isClassComponent(value) {
      return isFunction$1(value) && "__vccOpts" in value;
    }
    const computed = (getterOrOptions, debugOptions) => {
      return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
    };

    function h$1(type, propsOrChildren, children) {
      const l = arguments.length;
      if (l === 2) {
        if (isObject$1(propsOrChildren) && !isArray$1(propsOrChildren)) {
          if (isVNode(propsOrChildren)) {
            return createVNode(type, null, [propsOrChildren]);
          }
          return createVNode(type, propsOrChildren);
        } else {
          return createVNode(type, null, propsOrChildren);
        }
      } else {
        if (l > 3) {
          children = Array.prototype.slice.call(arguments, 2);
        } else if (l === 3 && isVNode(children)) {
          children = [children];
        }
        return createVNode(type, propsOrChildren, children);
      }
    }
    const ssrContextKey = Symbol.for("v-scx");
    const useSSRContext = () => {
      {
        const ctx = inject(ssrContextKey);
        return ctx;
      }
    };

    function initCustomFormatter() {
      {
        return;
      }
    }

    function withMemo(memo, render2, cache, index) {
      const cached = cache[index];
      if (cached && isMemoSame(cached, memo)) {
        return cached;
      }
      const ret = render2();
      ret.memo = memo.slice();
      return (cache[index] = ret);
    }

    function isMemoSame(cached, memo) {
      const prev = cached.memo;
      if (prev.length != memo.length) {
        return false;
      }
      for (let i = 0; i < prev.length; i++) {
        if (hasChanged(prev[i], memo[i])) {
          return false;
        }
      }
      if (isBlockTreeEnabled > 0 && currentBlock) {
        currentBlock.push(cached);
      }
      return true;
    }
    const version = "3.3.4";
    const _ssrUtils = {
      createComponentInstance,
      setupComponent,
      renderComponentRoot,
      setCurrentRenderingInstance,
      isVNode,
      normalizeVNode,
    };
    const ssrUtils = _ssrUtils;
    const resolveFilter = null;
    const compatUtils = null;
    const svgNS = "http://www.w3.org/2000/svg";
    const doc = typeof document !== "undefined" ? document : null;
    const templateContainer =
      doc && /* @__PURE__ */ doc.createElement("template");
    const nodeOps = {
      insert: (child, parent, anchor) => {
        parent.insertBefore(child, anchor || null);
      },
      remove: (child) => {
        const parent = child.parentNode;
        if (parent) {
          parent.removeChild(child);
        }
      },
      createElement: (tag, isSVG, is, props) => {
        const el = isSVG
          ? doc.createElementNS(svgNS, tag)
          : doc.createElement(
              tag,
              is
                ? {
                    is,
                  }
                : void 0,
            );
        if (tag === "select" && props && props.multiple != null) {
          el.setAttribute("multiple", props.multiple);
        }
        return el;
      },
      createText: (text) => doc.createTextNode(text),
      createComment: (text) => doc.createComment(text),
      setText: (node, text) => {
        node.nodeValue = text;
      },
      setElementText: (el, text) => {
        el.textContent = text;
      },
      parentNode: (node) => node.parentNode,
      nextSibling: (node) => node.nextSibling,
      querySelector: (selector) => doc.querySelector(selector),
      setScopeId(el, id) {
        el.setAttribute(id, "");
      },
      // __UNSAFE__
      // Reason: innerHTML.
      // Static content here can only come from compiled templates.
      // As long as the user only uses trusted templates, this is safe.
      insertStaticContent(content, parent, anchor, isSVG, start, end) {
        const before = anchor ? anchor.previousSibling : parent.lastChild;
        if (start && (start === end || start.nextSibling)) {
          while (true) {
            parent.insertBefore(start.cloneNode(true), anchor);
            if (start === end || !(start = start.nextSibling)) break;
          }
        } else {
          templateContainer.innerHTML = isSVG
            ? `<svg>${content}</svg>`
            : content;
          const template = templateContainer.content;
          if (isSVG) {
            const wrapper = template.firstChild;
            while (wrapper.firstChild) {
              template.appendChild(wrapper.firstChild);
            }
            template.removeChild(wrapper);
          }
          parent.insertBefore(template, anchor);
        }
        return [
          // first
          before ? before.nextSibling : parent.firstChild,
          // last
          anchor ? anchor.previousSibling : parent.lastChild,
        ];
      },
    };

    function patchClass(el, value, isSVG) {
      const transitionClasses = el._vtc;
      if (transitionClasses) {
        value = (
          value ? [value, ...transitionClasses] : [...transitionClasses]
        ).join(" ");
      }
      if (value == null) {
        el.removeAttribute("class");
      } else if (isSVG) {
        el.setAttribute("class", value);
      } else {
        el.className = value;
      }
    }

    function patchStyle(el, prev, next) {
      const style = el.style;
      const isCssString = isString$2(next);
      if (next && !isCssString) {
        if (prev && !isString$2(prev)) {
          for (const key in prev) {
            if (next[key] == null) {
              setStyle(style, key, "");
            }
          }
        }
        for (const key in next) {
          setStyle(style, key, next[key]);
        }
      } else {
        const currentDisplay = style.display;
        if (isCssString) {
          if (prev !== next) {
            style.cssText = next;
          }
        } else if (prev) {
          el.removeAttribute("style");
        }
        if ("_vod" in el) {
          style.display = currentDisplay;
        }
      }
    }
    const importantRE = /\s*!important$/;

    function setStyle(style, name, val) {
      if (isArray$1(val)) {
        val.forEach((v) => setStyle(style, name, v));
      } else {
        if (val == null) val = "";
        if (name.startsWith("--")) {
          style.setProperty(name, val);
        } else {
          const prefixed = autoPrefix(style, name);
          if (importantRE.test(val)) {
            style.setProperty(
              hyphenate(prefixed),
              val.replace(importantRE, ""),
              "important",
            );
          } else {
            style[prefixed] = val;
          }
        }
      }
    }
    const prefixes = ["Webkit", "Moz", "ms"];
    const prefixCache = {};

    function autoPrefix(style, rawName) {
      const cached = prefixCache[rawName];
      if (cached) {
        return cached;
      }
      let name = camelize(rawName);
      if (name !== "filter" && name in style) {
        return (prefixCache[rawName] = name);
      }
      name = capitalize(name);
      for (let i = 0; i < prefixes.length; i++) {
        const prefixed = prefixes[i] + name;
        if (prefixed in style) {
          return (prefixCache[rawName] = prefixed);
        }
      }
      return rawName;
    }
    const xlinkNS = "http://www.w3.org/1999/xlink";

    function patchAttr(el, key, value, isSVG, instance) {
      if (isSVG && key.startsWith("xlink:")) {
        if (value == null) {
          el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
        } else {
          el.setAttributeNS(xlinkNS, key, value);
        }
      } else {
        const isBoolean2 = isSpecialBooleanAttr(key);
        if (value == null || (isBoolean2 && !includeBooleanAttr(value))) {
          el.removeAttribute(key);
        } else {
          el.setAttribute(key, isBoolean2 ? "" : value);
        }
      }
    }

    function patchDOMProp(
      el,
      key,
      value,
      prevChildren,
      parentComponent,
      parentSuspense,
      unmountChildren,
    ) {
      if (key === "innerHTML" || key === "textContent") {
        if (prevChildren) {
          unmountChildren(prevChildren, parentComponent, parentSuspense);
        }
        el[key] = value == null ? "" : value;
        return;
      }
      const tag = el.tagName;
      if (
        key === "value" &&
        tag !== "PROGRESS" && // custom elements may use _value internally
        !tag.includes("-")
      ) {
        el._value = value;
        const oldValue = tag === "OPTION" ? el.getAttribute("value") : el.value;
        const newValue = value == null ? "" : value;
        if (oldValue !== newValue) {
          el.value = newValue;
        }
        if (value == null) {
          el.removeAttribute(key);
        }
        return;
      }
      let needRemove = false;
      if (value === "" || value == null) {
        const type = typeof el[key];
        if (type === "boolean") {
          value = includeBooleanAttr(value);
        } else if (value == null && type === "string") {
          value = "";
          needRemove = true;
        } else if (type === "number") {
          value = 0;
          needRemove = true;
        }
      }
      try {
        el[key] = value;
      } catch (e) {}
      needRemove && el.removeAttribute(key);
    }

    function addEventListener(el, event, handler, options) {
      el.addEventListener(event, handler, options);
    }

    function removeEventListener(el, event, handler, options) {
      el.removeEventListener(event, handler, options);
    }

    function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
      const invokers = el._vei || (el._vei = {});
      const existingInvoker = invokers[rawName];
      if (nextValue && existingInvoker) {
        existingInvoker.value = nextValue;
      } else {
        const [name, options] = parseName(rawName);
        if (nextValue) {
          const invoker = (invokers[rawName] = createInvoker(
            nextValue,
            instance,
          ));
          addEventListener(el, name, invoker, options);
        } else if (existingInvoker) {
          removeEventListener(el, name, existingInvoker, options);
          invokers[rawName] = void 0;
        }
      }
    }
    const optionsModifierRE = /(?:Once|Passive|Capture)$/;

    function parseName(name) {
      let options;
      if (optionsModifierRE.test(name)) {
        options = {};
        let m;
        while ((m = name.match(optionsModifierRE))) {
          name = name.slice(0, name.length - m[0].length);
          options[m[0].toLowerCase()] = true;
        }
      }
      const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
      return [event, options];
    }
    let cachedNow = 0;
    const p = /* @__PURE__ */ Promise.resolve();
    const getNow = () =>
      cachedNow || (p.then(() => (cachedNow = 0)), (cachedNow = Date.now()));

    function createInvoker(initialValue, instance) {
      const invoker = (e) => {
        if (!e._vts) {
          e._vts = Date.now();
        } else if (e._vts <= invoker.attached) {
          return;
        }
        callWithAsyncErrorHandling(
          patchStopImmediatePropagation(e, invoker.value),
          instance,
          5,
          [e],
        );
      };
      invoker.value = initialValue;
      invoker.attached = getNow();
      return invoker;
    }

    function patchStopImmediatePropagation(e, value) {
      if (isArray$1(value)) {
        const originalStop = e.stopImmediatePropagation;
        e.stopImmediatePropagation = () => {
          originalStop.call(e);
          e._stopped = true;
        };
        return value.map((fn) => (e2) => !e2._stopped && fn && fn(e2));
      } else {
        return value;
      }
    }
    const nativeOnRE = /^on[a-z]/;
    const patchProp = (
      el,
      key,
      prevValue,
      nextValue,
      isSVG = false,
      prevChildren,
      parentComponent,
      parentSuspense,
      unmountChildren,
    ) => {
      if (key === "class") {
        patchClass(el, nextValue, isSVG);
      } else if (key === "style") {
        patchStyle(el, prevValue, nextValue);
      } else if (isOn(key)) {
        if (!isModelListener(key)) {
          patchEvent(el, key, prevValue, nextValue, parentComponent);
        }
      } else if (
        key[0] === "."
          ? ((key = key.slice(1)), true)
          : key[0] === "^"
            ? ((key = key.slice(1)), false)
            : shouldSetAsProp(el, key, nextValue, isSVG)
      ) {
        patchDOMProp(
          el,
          key,
          nextValue,
          prevChildren,
          parentComponent,
          parentSuspense,
          unmountChildren,
        );
      } else {
        if (key === "true-value") {
          el._trueValue = nextValue;
        } else if (key === "false-value") {
          el._falseValue = nextValue;
        }
        patchAttr(el, key, nextValue, isSVG);
      }
    };

    function shouldSetAsProp(el, key, value, isSVG) {
      if (isSVG) {
        if (key === "innerHTML" || key === "textContent") {
          return true;
        }
        if (key in el && nativeOnRE.test(key) && isFunction$1(value)) {
          return true;
        }
        return false;
      }
      if (key === "spellcheck" || key === "draggable" || key === "translate") {
        return false;
      }
      if (key === "form") {
        return false;
      }
      if (key === "list" && el.tagName === "INPUT") {
        return false;
      }
      if (key === "type" && el.tagName === "TEXTAREA") {
        return false;
      }
      if (nativeOnRE.test(key) && isString$2(value)) {
        return false;
      }
      return key in el;
    }

    function defineCustomElement(options, hydrate2) {
      const Comp = defineComponent(options);
      class VueCustomElement extends VueElement {
        constructor(initialProps) {
          super(Comp, initialProps, hydrate2);
        }
      }
      VueCustomElement.def = Comp;
      return VueCustomElement;
    }
    const defineSSRCustomElement = (options) => {
      return defineCustomElement(options, hydrate);
    };
    const BaseClass =
      typeof HTMLElement !== "undefined" ? HTMLElement : class {};
    class VueElement extends BaseClass {
      constructor(_def, _props = {}, hydrate2) {
        super();
        this._def = _def;
        this._props = _props;
        this._instance = null;
        this._connected = false;
        this._resolved = false;
        this._numberProps = null;
        if (this.shadowRoot && hydrate2) {
          hydrate2(this._createVNode(), this.shadowRoot);
        } else {
          this.attachShadow({
            mode: "open",
          });
          if (!this._def.__asyncLoader) {
            this._resolveProps(this._def);
          }
        }
      }
      connectedCallback() {
        this._connected = true;
        if (!this._instance) {
          if (this._resolved) {
            this._update();
          } else {
            this._resolveDef();
          }
        }
      }
      disconnectedCallback() {
        this._connected = false;
        nextTick(() => {
          if (!this._connected) {
            render(null, this.shadowRoot);
            this._instance = null;
          }
        });
      }
      /**
       * resolve inner component definition (handle possible async component)
       */
      _resolveDef() {
        this._resolved = true;
        for (let i = 0; i < this.attributes.length; i++) {
          this._setAttr(this.attributes[i].name);
        }
        new MutationObserver((mutations) => {
          for (const m of mutations) {
            this._setAttr(m.attributeName);
          }
        }).observe(this, {
          attributes: true,
        });
        const resolve2 = (def2, isAsync = false) => {
          const { props, styles } = def2;
          let numberProps;
          if (props && !isArray$1(props)) {
            for (const key in props) {
              const opt = props[key];
              if (opt === Number || (opt && opt.type === Number)) {
                if (key in this._props) {
                  this._props[key] = toNumber(this._props[key]);
                }
                (numberProps ||
                  (numberProps = /* @__PURE__ */ Object.create(null)))[
                  camelize(key)
                ] = true;
              }
            }
          }
          this._numberProps = numberProps;
          if (isAsync) {
            this._resolveProps(def2);
          }
          this._applyStyles(styles);
          this._update();
        };
        const asyncDef = this._def.__asyncLoader;
        if (asyncDef) {
          asyncDef().then((def2) => resolve2(def2, true));
        } else {
          resolve2(this._def);
        }
      }
      _resolveProps(def2) {
        const { props } = def2;
        const declaredPropKeys = isArray$1(props)
          ? props
          : Object.keys(props || {});
        for (const key of Object.keys(this)) {
          if (key[0] !== "_" && declaredPropKeys.includes(key)) {
            this._setProp(key, this[key], true, false);
          }
        }
        for (const key of declaredPropKeys.map(camelize)) {
          Object.defineProperty(this, key, {
            get() {
              return this._getProp(key);
            },
            set(val) {
              this._setProp(key, val);
            },
          });
        }
      }
      _setAttr(key) {
        let value = this.getAttribute(key);
        const camelKey = camelize(key);
        if (this._numberProps && this._numberProps[camelKey]) {
          value = toNumber(value);
        }
        this._setProp(camelKey, value, false);
      }
      /**
       * @internal
       */
      _getProp(key) {
        return this._props[key];
      }
      /**
       * @internal
       */
      _setProp(key, val, shouldReflect = true, shouldUpdate = true) {
        if (val !== this._props[key]) {
          this._props[key] = val;
          if (shouldUpdate && this._instance) {
            this._update();
          }
          if (shouldReflect) {
            if (val === true) {
              this.setAttribute(hyphenate(key), "");
            } else if (typeof val === "string" || typeof val === "number") {
              this.setAttribute(hyphenate(key), val + "");
            } else if (!val) {
              this.removeAttribute(hyphenate(key));
            }
          }
        }
      }
      _update() {
        render(this._createVNode(), this.shadowRoot);
      }
      _createVNode() {
        const vnode = createVNode(this._def, extend$1({}, this._props));
        if (!this._instance) {
          vnode.ce = (instance) => {
            this._instance = instance;
            instance.isCE = true;
            const dispatch = (event, args) => {
              this.dispatchEvent(
                new CustomEvent(event, {
                  detail: args,
                }),
              );
            };
            instance.emit = (event, ...args) => {
              dispatch(event, args);
              if (hyphenate(event) !== event) {
                dispatch(hyphenate(event), args);
              }
            };
            let parent = this;
            while ((parent = parent && (parent.parentNode || parent.host))) {
              if (parent instanceof VueElement) {
                instance.parent = parent._instance;
                instance.provides = parent._instance.provides;
                break;
              }
            }
          };
        }
        return vnode;
      }
      _applyStyles(styles) {
        if (styles) {
          styles.forEach((css) => {
            const s = document.createElement("style");
            s.textContent = css;
            this.shadowRoot.appendChild(s);
          });
        }
      }
    }

    function useCssModule(name = "$style") {
      {
        const instance = getCurrentInstance();
        if (!instance) {
          return EMPTY_OBJ;
        }
        const modules = instance.type.__cssModules;
        if (!modules) {
          return EMPTY_OBJ;
        }
        const mod = modules[name];
        if (!mod) {
          return EMPTY_OBJ;
        }
        return mod;
      }
    }

    function useCssVars(getter) {
      const instance = getCurrentInstance();
      if (!instance) {
        return;
      }
      const updateTeleports = (instance.ut = (
        vars = getter(instance.proxy),
      ) => {
        Array.from(
          document.querySelectorAll(`[data-v-owner="${instance.uid}"]`),
        ).forEach((node) => setVarsOnNode(node, vars));
      });
      const setVars = () => {
        const vars = getter(instance.proxy);
        setVarsOnVNode(instance.subTree, vars);
        updateTeleports(vars);
      };
      watchPostEffect(setVars);
      onMounted(() => {
        const ob = new MutationObserver(setVars);
        ob.observe(instance.subTree.el.parentNode, {
          childList: true,
        });
        onUnmounted(() => ob.disconnect());
      });
    }

    function setVarsOnVNode(vnode, vars) {
      if (vnode.shapeFlag & 128) {
        const suspense = vnode.suspense;
        vnode = suspense.activeBranch;
        if (suspense.pendingBranch && !suspense.isHydrating) {
          suspense.effects.push(() => {
            setVarsOnVNode(suspense.activeBranch, vars);
          });
        }
      }
      while (vnode.component) {
        vnode = vnode.component.subTree;
      }
      if (vnode.shapeFlag & 1 && vnode.el) {
        setVarsOnNode(vnode.el, vars);
      } else if (vnode.type === Fragment) {
        vnode.children.forEach((c2) => setVarsOnVNode(c2, vars));
      } else if (vnode.type === Static) {
        let { el, anchor } = vnode;
        while (el) {
          setVarsOnNode(el, vars);
          if (el === anchor) break;
          el = el.nextSibling;
        }
      }
    }

    function setVarsOnNode(el, vars) {
      if (el.nodeType === 1) {
        const style = el.style;
        for (const key in vars) {
          style.setProperty(`--${key}`, vars[key]);
        }
      }
    }
    const TRANSITION$1 = "transition";
    const ANIMATION = "animation";
    const Transition = (props, { slots }) =>
      h$1(BaseTransition, resolveTransitionProps(props), slots);
    Transition.displayName = "Transition";
    const DOMTransitionPropsValidators = {
      name: String,
      type: String,
      css: {
        type: Boolean,
        default: true,
      },
      duration: [String, Number, Object],
      enterFromClass: String,
      enterActiveClass: String,
      enterToClass: String,
      appearFromClass: String,
      appearActiveClass: String,
      appearToClass: String,
      leaveFromClass: String,
      leaveActiveClass: String,
      leaveToClass: String,
    };
    const TransitionPropsValidators = (Transition.props =
      /* @__PURE__ */ extend$1(
        {},
        BaseTransitionPropsValidators,
        DOMTransitionPropsValidators,
      ));
    const callHook = (hook, args = []) => {
      if (isArray$1(hook)) {
        hook.forEach((h2) => h2(...args));
      } else if (hook) {
        hook(...args);
      }
    };
    const hasExplicitCallback = (hook) => {
      return hook
        ? isArray$1(hook)
          ? hook.some((h2) => h2.length > 1)
          : hook.length > 1
        : false;
    };

    function resolveTransitionProps(rawProps) {
      const baseProps = {};
      for (const key in rawProps) {
        if (!(key in DOMTransitionPropsValidators)) {
          baseProps[key] = rawProps[key];
        }
      }
      if (rawProps.css === false) {
        return baseProps;
      }
      const {
        name = "v",
        type,
        duration,
        enterFromClass = `${name}-enter-from`,
        enterActiveClass = `${name}-enter-active`,
        enterToClass = `${name}-enter-to`,
        appearFromClass = enterFromClass,
        appearActiveClass = enterActiveClass,
        appearToClass = enterToClass,
        leaveFromClass = `${name}-leave-from`,
        leaveActiveClass = `${name}-leave-active`,
        leaveToClass = `${name}-leave-to`,
      } = rawProps;
      const durations = normalizeDuration(duration);
      const enterDuration = durations && durations[0];
      const leaveDuration = durations && durations[1];
      const {
        onBeforeEnter,
        onEnter,
        onEnterCancelled,
        onLeave,
        onLeaveCancelled,
        onBeforeAppear = onBeforeEnter,
        onAppear = onEnter,
        onAppearCancelled = onEnterCancelled,
      } = baseProps;
      const finishEnter = (el, isAppear, done) => {
        removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
        removeTransitionClass(
          el,
          isAppear ? appearActiveClass : enterActiveClass,
        );
        done && done();
      };
      const finishLeave = (el, done) => {
        el._isLeaving = false;
        removeTransitionClass(el, leaveFromClass);
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
        done && done();
      };
      const makeEnterHook = (isAppear) => {
        return (el, done) => {
          const hook = isAppear ? onAppear : onEnter;
          const resolve2 = () => finishEnter(el, isAppear, done);
          callHook(hook, [el, resolve2]);
          nextFrame(() => {
            removeTransitionClass(
              el,
              isAppear ? appearFromClass : enterFromClass,
            );
            addTransitionClass(el, isAppear ? appearToClass : enterToClass);
            if (!hasExplicitCallback(hook)) {
              whenTransitionEnds(el, type, enterDuration, resolve2);
            }
          });
        };
      };
      return extend$1(baseProps, {
        onBeforeEnter(el) {
          callHook(onBeforeEnter, [el]);
          addTransitionClass(el, enterFromClass);
          addTransitionClass(el, enterActiveClass);
        },
        onBeforeAppear(el) {
          callHook(onBeforeAppear, [el]);
          addTransitionClass(el, appearFromClass);
          addTransitionClass(el, appearActiveClass);
        },
        onEnter: makeEnterHook(false),
        onAppear: makeEnterHook(true),
        onLeave(el, done) {
          el._isLeaving = true;
          const resolve2 = () => finishLeave(el, done);
          addTransitionClass(el, leaveFromClass);
          forceReflow();
          addTransitionClass(el, leaveActiveClass);
          nextFrame(() => {
            if (!el._isLeaving) {
              return;
            }
            removeTransitionClass(el, leaveFromClass);
            addTransitionClass(el, leaveToClass);
            if (!hasExplicitCallback(onLeave)) {
              whenTransitionEnds(el, type, leaveDuration, resolve2);
            }
          });
          callHook(onLeave, [el, resolve2]);
        },
        onEnterCancelled(el) {
          finishEnter(el, false);
          callHook(onEnterCancelled, [el]);
        },
        onAppearCancelled(el) {
          finishEnter(el, true);
          callHook(onAppearCancelled, [el]);
        },
        onLeaveCancelled(el) {
          finishLeave(el);
          callHook(onLeaveCancelled, [el]);
        },
      });
    }

    function normalizeDuration(duration) {
      if (duration == null) {
        return null;
      } else if (isObject$1(duration)) {
        return [NumberOf(duration.enter), NumberOf(duration.leave)];
      } else {
        const n = NumberOf(duration);
        return [n, n];
      }
    }

    function NumberOf(val) {
      const res = toNumber(val);
      return res;
    }

    function addTransitionClass(el, cls) {
      cls.split(/\s+/).forEach((c2) => c2 && el.classList.add(c2));
      (el._vtc || (el._vtc = /* @__PURE__ */ new Set())).add(cls);
    }

    function removeTransitionClass(el, cls) {
      cls.split(/\s+/).forEach((c2) => c2 && el.classList.remove(c2));
      const { _vtc } = el;
      if (_vtc) {
        _vtc.delete(cls);
        if (!_vtc.size) {
          el._vtc = void 0;
        }
      }
    }

    function nextFrame(cb) {
      requestAnimationFrame(() => {
        requestAnimationFrame(cb);
      });
    }
    let endId = 0;

    function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
      const id = (el._endId = ++endId);
      const resolveIfNotStale = () => {
        if (id === el._endId) {
          resolve2();
        }
      };
      if (explicitTimeout) {
        return setTimeout(resolveIfNotStale, explicitTimeout);
      }
      const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
      if (!type) {
        return resolve2();
      }
      const endEvent = type + "end";
      let ended = 0;
      const end = () => {
        el.removeEventListener(endEvent, onEnd);
        resolveIfNotStale();
      };
      const onEnd = (e) => {
        if (e.target === el && ++ended >= propCount) {
          end();
        }
      };
      setTimeout(() => {
        if (ended < propCount) {
          end();
        }
      }, timeout + 1);
      el.addEventListener(endEvent, onEnd);
    }

    function getTransitionInfo(el, expectedType) {
      const styles = window.getComputedStyle(el);
      const getStyleProperties = (key) => (styles[key] || "").split(", ");
      const transitionDelays = getStyleProperties(`${TRANSITION$1}Delay`);
      const transitionDurations = getStyleProperties(`${TRANSITION$1}Duration`);
      const transitionTimeout = getTimeout(
        transitionDelays,
        transitionDurations,
      );
      const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
      const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
      const animationTimeout = getTimeout(animationDelays, animationDurations);
      let type = null;
      let timeout = 0;
      let propCount = 0;
      if (expectedType === TRANSITION$1) {
        if (transitionTimeout > 0) {
          type = TRANSITION$1;
          timeout = transitionTimeout;
          propCount = transitionDurations.length;
        }
      } else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
          type = ANIMATION;
          timeout = animationTimeout;
          propCount = animationDurations.length;
        }
      } else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type =
          timeout > 0
            ? transitionTimeout > animationTimeout
              ? TRANSITION$1
              : ANIMATION
            : null;
        propCount = type
          ? type === TRANSITION$1
            ? transitionDurations.length
            : animationDurations.length
          : 0;
      }
      const hasTransform =
        type === TRANSITION$1 &&
        /\b(transform|all)(,|$)/.test(
          getStyleProperties(`${TRANSITION$1}Property`).toString(),
        );
      return {
        type,
        timeout,
        propCount,
        hasTransform,
      };
    }

    function getTimeout(delays, durations) {
      while (delays.length < durations.length) {
        delays = delays.concat(delays);
      }
      return Math.max(...durations.map((d2, i) => toMs(d2) + toMs(delays[i])));
    }

    function toMs(s) {
      return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
    }

    function forceReflow() {
      return document.body.offsetHeight;
    }
    const positionMap = /* @__PURE__ */ new WeakMap();
    const newPositionMap = /* @__PURE__ */ new WeakMap();
    const TransitionGroupImpl = {
      name: "TransitionGroup",
      props: /* @__PURE__ */ extend$1({}, TransitionPropsValidators, {
        tag: String,
        moveClass: String,
      }),
      setup(props, { slots }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevChildren;
        let children;
        onUpdated(() => {
          if (!prevChildren.length) {
            return;
          }
          const moveClass = props.moveClass || `${props.name || "v"}-move`;
          if (
            !hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)
          ) {
            return;
          }
          prevChildren.forEach(callPendingCbs);
          prevChildren.forEach(recordPosition);
          const movedChildren = prevChildren.filter(applyTranslation);
          forceReflow();
          movedChildren.forEach((c2) => {
            const el = c2.el;
            const style = el.style;
            addTransitionClass(el, moveClass);
            style.transform =
              style.webkitTransform =
              style.transitionDuration =
                "";
            const cb = (el._moveCb = (e) => {
              if (e && e.target !== el) {
                return;
              }
              if (!e || /transform$/.test(e.propertyName)) {
                el.removeEventListener("transitionend", cb);
                el._moveCb = null;
                removeTransitionClass(el, moveClass);
              }
            });
            el.addEventListener("transitionend", cb);
          });
        });
        return () => {
          const rawProps = toRaw(props);
          const cssTransitionProps = resolveTransitionProps(rawProps);
          let tag = rawProps.tag || Fragment;
          prevChildren = children;
          children = slots.default
            ? getTransitionRawChildren(slots.default())
            : [];
          for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (child.key != null) {
              setTransitionHooks(
                child,
                resolveTransitionHooks(
                  child,
                  cssTransitionProps,
                  state,
                  instance,
                ),
              );
            }
          }
          if (prevChildren) {
            for (let i = 0; i < prevChildren.length; i++) {
              const child = prevChildren[i];
              setTransitionHooks(
                child,
                resolveTransitionHooks(
                  child,
                  cssTransitionProps,
                  state,
                  instance,
                ),
              );
              positionMap.set(child, child.el.getBoundingClientRect());
            }
          }
          return createVNode(tag, null, children);
        };
      },
    };
    const removeMode = (props) => delete props.mode;
    /* @__PURE__ */
    removeMode(TransitionGroupImpl.props);
    const TransitionGroup = TransitionGroupImpl;

    function callPendingCbs(c2) {
      const el = c2.el;
      if (el._moveCb) {
        el._moveCb();
      }
      if (el._enterCb) {
        el._enterCb();
      }
    }

    function recordPosition(c2) {
      newPositionMap.set(c2, c2.el.getBoundingClientRect());
    }

    function applyTranslation(c2) {
      const oldPos = positionMap.get(c2);
      const newPos = newPositionMap.get(c2);
      const dx = oldPos.left - newPos.left;
      const dy = oldPos.top - newPos.top;
      if (dx || dy) {
        const s = c2.el.style;
        s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
        s.transitionDuration = "0s";
        return c2;
      }
    }

    function hasCSSTransform(el, root, moveClass) {
      const clone = el.cloneNode();
      if (el._vtc) {
        el._vtc.forEach((cls) => {
          cls.split(/\s+/).forEach((c2) => c2 && clone.classList.remove(c2));
        });
      }
      moveClass.split(/\s+/).forEach((c2) => c2 && clone.classList.add(c2));
      clone.style.display = "none";
      const container = root.nodeType === 1 ? root : root.parentNode;
      container.appendChild(clone);
      const { hasTransform } = getTransitionInfo(clone);
      container.removeChild(clone);
      return hasTransform;
    }
    const getModelAssigner = (vnode) => {
      const fn = vnode.props["onUpdate:modelValue"] || false;
      return isArray$1(fn) ? (value) => invokeArrayFns(fn, value) : fn;
    };

    function onCompositionStart(e) {
      e.target.composing = true;
    }

    function onCompositionEnd(e) {
      const target = e.target;
      if (target.composing) {
        target.composing = false;
        target.dispatchEvent(new Event("input"));
      }
    }
    const vModelText = {
      created(el, { modifiers: { lazy, trim: trim2, number } }, vnode) {
        el._assign = getModelAssigner(vnode);
        const castToNumber =
          number || (vnode.props && vnode.props.type === "number");
        addEventListener(el, lazy ? "change" : "input", (e) => {
          if (e.target.composing) return;
          let domValue = el.value;
          if (trim2) {
            domValue = domValue.trim();
          }
          if (castToNumber) {
            domValue = looseToNumber(domValue);
          }
          el._assign(domValue);
        });
        if (trim2) {
          addEventListener(el, "change", () => {
            el.value = el.value.trim();
          });
        }
        if (!lazy) {
          addEventListener(el, "compositionstart", onCompositionStart);
          addEventListener(el, "compositionend", onCompositionEnd);
          addEventListener(el, "change", onCompositionEnd);
        }
      },
      // set value on mounted so it's after min/max for type="range"
      mounted(el, { value }) {
        el.value = value == null ? "" : value;
      },
      beforeUpdate(
        el,
        { value, modifiers: { lazy, trim: trim2, number } },
        vnode,
      ) {
        el._assign = getModelAssigner(vnode);
        if (el.composing) return;
        if (document.activeElement === el && el.type !== "range") {
          if (lazy) {
            return;
          }
          if (trim2 && el.value.trim() === value) {
            return;
          }
          if (
            (number || el.type === "number") &&
            looseToNumber(el.value) === value
          ) {
            return;
          }
        }
        const newValue = value == null ? "" : value;
        if (el.value !== newValue) {
          el.value = newValue;
        }
      },
    };
    const vModelCheckbox = {
      // #4096 array checkboxes need to be deep traversed
      deep: true,
      created(el, _, vnode) {
        el._assign = getModelAssigner(vnode);
        addEventListener(el, "change", () => {
          const modelValue = el._modelValue;
          const elementValue = getValue(el);
          const checked = el.checked;
          const assign = el._assign;
          if (isArray$1(modelValue)) {
            const index = looseIndexOf(modelValue, elementValue);
            const found = index !== -1;
            if (checked && !found) {
              assign(modelValue.concat(elementValue));
            } else if (!checked && found) {
              const filtered = [...modelValue];
              filtered.splice(index, 1);
              assign(filtered);
            }
          } else if (isSet(modelValue)) {
            const cloned = new Set(modelValue);
            if (checked) {
              cloned.add(elementValue);
            } else {
              cloned.delete(elementValue);
            }
            assign(cloned);
          } else {
            assign(getCheckboxValue(el, checked));
          }
        });
      },
      // set initial checked on mount to wait for true-value/false-value
      mounted: setChecked,
      beforeUpdate(el, binding, vnode) {
        el._assign = getModelAssigner(vnode);
        setChecked(el, binding, vnode);
      },
    };

    function setChecked(el, { value, oldValue }, vnode) {
      el._modelValue = value;
      if (isArray$1(value)) {
        el.checked = looseIndexOf(value, vnode.props.value) > -1;
      } else if (isSet(value)) {
        el.checked = value.has(vnode.props.value);
      } else if (value !== oldValue) {
        el.checked = looseEqual(value, getCheckboxValue(el, true));
      }
    }
    const vModelRadio = {
      created(el, { value }, vnode) {
        el.checked = looseEqual(value, vnode.props.value);
        el._assign = getModelAssigner(vnode);
        addEventListener(el, "change", () => {
          el._assign(getValue(el));
        });
      },
      beforeUpdate(el, { value, oldValue }, vnode) {
        el._assign = getModelAssigner(vnode);
        if (value !== oldValue) {
          el.checked = looseEqual(value, vnode.props.value);
        }
      },
    };
    const vModelSelect = {
      // <select multiple> value need to be deep traversed
      deep: true,
      created(el, { value, modifiers: { number } }, vnode) {
        const isSetModel = isSet(value);
        addEventListener(el, "change", () => {
          const selectedVal = Array.prototype.filter
            .call(el.options, (o) => o.selected)
            .map((o) => (number ? looseToNumber(getValue(o)) : getValue(o)));
          el._assign(
            el.multiple
              ? isSetModel
                ? new Set(selectedVal)
                : selectedVal
              : selectedVal[0],
          );
        });
        el._assign = getModelAssigner(vnode);
      },
      // set value in mounted & updated because <select> relies on its children
      // <option>s.
      mounted(el, { value }) {
        setSelected(el, value);
      },
      beforeUpdate(el, _binding, vnode) {
        el._assign = getModelAssigner(vnode);
      },
      updated(el, { value }) {
        setSelected(el, value);
      },
    };

    function setSelected(el, value) {
      const isMultiple = el.multiple;
      if (isMultiple && !isArray$1(value) && !isSet(value)) {
        return;
      }
      for (let i = 0, l = el.options.length; i < l; i++) {
        const option = el.options[i];
        const optionValue = getValue(option);
        if (isMultiple) {
          if (isArray$1(value)) {
            option.selected = looseIndexOf(value, optionValue) > -1;
          } else {
            option.selected = value.has(optionValue);
          }
        } else {
          if (looseEqual(getValue(option), value)) {
            if (el.selectedIndex !== i) el.selectedIndex = i;
            return;
          }
        }
      }
      if (!isMultiple && el.selectedIndex !== -1) {
        el.selectedIndex = -1;
      }
    }

    function getValue(el) {
      return "_value" in el ? el._value : el.value;
    }

    function getCheckboxValue(el, checked) {
      const key = checked ? "_trueValue" : "_falseValue";
      return key in el ? el[key] : checked;
    }
    const vModelDynamic = {
      created(el, binding, vnode) {
        callModelHook(el, binding, vnode, null, "created");
      },
      mounted(el, binding, vnode) {
        callModelHook(el, binding, vnode, null, "mounted");
      },
      beforeUpdate(el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
      },
      updated(el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, "updated");
      },
    };

    function resolveDynamicModel(tagName, type) {
      switch (tagName) {
        case "SELECT":
          return vModelSelect;
        case "TEXTAREA":
          return vModelText;
        default:
          switch (type) {
            case "checkbox":
              return vModelCheckbox;
            case "radio":
              return vModelRadio;
            default:
              return vModelText;
          }
      }
    }

    function callModelHook(el, binding, vnode, prevVNode, hook) {
      const modelToUse = resolveDynamicModel(
        el.tagName,
        vnode.props && vnode.props.type,
      );
      const fn = modelToUse[hook];
      fn && fn(el, binding, vnode, prevVNode);
    }

    function initVModelForSSR() {
      vModelText.getSSRProps = ({ value }) => ({
        value,
      });
      vModelRadio.getSSRProps = ({ value }, vnode) => {
        if (vnode.props && looseEqual(vnode.props.value, value)) {
          return {
            checked: true,
          };
        }
      };
      vModelCheckbox.getSSRProps = ({ value }, vnode) => {
        if (isArray$1(value)) {
          if (vnode.props && looseIndexOf(value, vnode.props.value) > -1) {
            return {
              checked: true,
            };
          }
        } else if (isSet(value)) {
          if (vnode.props && value.has(vnode.props.value)) {
            return {
              checked: true,
            };
          }
        } else if (value) {
          return {
            checked: true,
          };
        }
      };
      vModelDynamic.getSSRProps = (binding, vnode) => {
        if (typeof vnode.type !== "string") {
          return;
        }
        const modelToUse = resolveDynamicModel(
          // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
          vnode.type.toUpperCase(),
          vnode.props && vnode.props.type,
        );
        if (modelToUse.getSSRProps) {
          return modelToUse.getSSRProps(binding, vnode);
        }
      };
    }
    const systemModifiers = ["ctrl", "shift", "alt", "meta"];
    const modifierGuards = {
      stop: (e) => e.stopPropagation(),
      prevent: (e) => e.preventDefault(),
      self: (e) => e.target !== e.currentTarget,
      ctrl: (e) => !e.ctrlKey,
      shift: (e) => !e.shiftKey,
      alt: (e) => !e.altKey,
      meta: (e) => !e.metaKey,
      left: (e) => "button" in e && e.button !== 0,
      middle: (e) => "button" in e && e.button !== 1,
      right: (e) => "button" in e && e.button !== 2,
      exact: (e, modifiers) =>
        systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m)),
    };
    const withModifiers = (fn, modifiers) => {
      return (event, ...args) => {
        for (let i = 0; i < modifiers.length; i++) {
          const guard = modifierGuards[modifiers[i]];
          if (guard && guard(event, modifiers)) return;
        }
        return fn(event, ...args);
      };
    };
    const keyNames = {
      esc: "escape",
      space: " ",
      up: "arrow-up",
      left: "arrow-left",
      right: "arrow-right",
      down: "arrow-down",
      delete: "backspace",
    };
    const withKeys = (fn, modifiers) => {
      return (event) => {
        if (!("key" in event)) {
          return;
        }
        const eventKey = hyphenate(event.key);
        if (modifiers.some((k) => k === eventKey || keyNames[k] === eventKey)) {
          return fn(event);
        }
      };
    };
    const vShow = {
      beforeMount(el, { value }, { transition }) {
        el._vod = el.style.display === "none" ? "" : el.style.display;
        if (transition && value) {
          transition.beforeEnter(el);
        } else {
          setDisplay(el, value);
        }
      },
      mounted(el, { value }, { transition }) {
        if (transition && value) {
          transition.enter(el);
        }
      },
      updated(el, { value, oldValue }, { transition }) {
        if (!value === !oldValue) return;
        if (transition) {
          if (value) {
            transition.beforeEnter(el);
            setDisplay(el, true);
            transition.enter(el);
          } else {
            transition.leave(el, () => {
              setDisplay(el, false);
            });
          }
        } else {
          setDisplay(el, value);
        }
      },
      beforeUnmount(el, { value }) {
        setDisplay(el, value);
      },
    };

    function setDisplay(el, value) {
      el.style.display = value ? el._vod : "none";
    }

    function initVShowForSSR() {
      vShow.getSSRProps = ({ value }) => {
        if (!value) {
          return {
            style: {
              display: "none",
            },
          };
        }
      };
    }
    const rendererOptions = /* @__PURE__ */ extend$1(
      {
        patchProp,
      },
      nodeOps,
    );
    let renderer;
    let enabledHydration = false;

    function ensureRenderer() {
      return renderer || (renderer = createRenderer(rendererOptions));
    }

    function ensureHydrationRenderer() {
      renderer = enabledHydration
        ? renderer
        : createHydrationRenderer(rendererOptions);
      enabledHydration = true;
      return renderer;
    }
    const render = (...args) => {
      ensureRenderer().render(...args);
    };
    const hydrate = (...args) => {
      ensureHydrationRenderer().hydrate(...args);
    };
    const createApp = (...args) => {
      const app = ensureRenderer().createApp(...args);
      const { mount } = app;
      app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (!container) return;
        const component = app._component;
        if (
          !isFunction$1(component) &&
          !component.render &&
          !component.template
        ) {
          component.template = container.innerHTML;
        }
        container.innerHTML = "";
        const proxy = mount(container, false, container instanceof SVGElement);
        if (container instanceof Element) {
          container.removeAttribute("v-cloak");
          container.setAttribute("data-v-app", "");
        }
        return proxy;
      };
      return app;
    };
    const createSSRApp = (...args) => {
      const app = ensureHydrationRenderer().createApp(...args);
      const { mount } = app;
      app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (container) {
          return mount(container, true, container instanceof SVGElement);
        }
      };
      return app;
    };

    function normalizeContainer(container) {
      if (isString$2(container)) {
        const res = document.querySelector(container);
        return res;
      }
      return container;
    }
    let ssrDirectiveInitialized = false;
    const initDirectivesForSSR = () => {
      if (!ssrDirectiveInitialized) {
        ssrDirectiveInitialized = true;
        initVModelForSSR();
        initVShowForSSR();
      }
    };
    const runtimeDom = /* @__PURE__ */ Object.freeze(
      /* @__PURE__ */ Object.defineProperty(
        {
          __proto__: null,
          BaseTransition,
          BaseTransitionPropsValidators,
          Comment,
          EffectScope,
          Fragment,
          KeepAlive,
          ReactiveEffect,
          Static,
          Suspense,
          Teleport,
          Text,
          Transition,
          TransitionGroup,
          VueElement,
          assertNumber,
          callWithAsyncErrorHandling,
          callWithErrorHandling,
          camelize,
          capitalize,
          cloneVNode,
          compatUtils,
          computed,
          createApp,
          createBlock,
          createCommentVNode,
          createElementBlock,
          createElementVNode: createBaseVNode,
          createHydrationRenderer,
          createPropsRestProxy,
          createRenderer,
          createSSRApp,
          createSlots,
          createStaticVNode,
          createTextVNode,
          createVNode,
          customRef,
          defineAsyncComponent,
          defineComponent,
          defineCustomElement,
          defineEmits,
          defineExpose,
          defineModel,
          defineOptions,
          defineProps,
          defineSSRCustomElement,
          defineSlots,
          get devtools() {
            return devtools;
          },
          effect,
          effectScope,
          getCurrentInstance,
          getCurrentScope,
          getTransitionRawChildren,
          guardReactiveProps,
          h: h$1,
          handleError,
          hasInjectionContext,
          hydrate,
          initCustomFormatter,
          initDirectivesForSSR,
          inject,
          isMemoSame,
          isProxy,
          isReactive,
          isReadonly,
          isRef,
          isRuntimeOnly,
          isShallow,
          isVNode,
          markRaw,
          mergeDefaults,
          mergeModels,
          mergeProps,
          nextTick,
          normalizeClass,
          normalizeProps,
          normalizeStyle,
          onActivated,
          onBeforeMount,
          onBeforeUnmount,
          onBeforeUpdate,
          onDeactivated,
          onErrorCaptured,
          onMounted,
          onRenderTracked,
          onRenderTriggered,
          onScopeDispose,
          onServerPrefetch,
          onUnmounted,
          onUpdated,
          openBlock,
          popScopeId,
          provide,
          proxyRefs,
          pushScopeId,
          queuePostFlushCb,
          reactive,
          readonly,
          ref,
          registerRuntimeCompiler,
          render,
          renderList,
          renderSlot,
          resolveComponent,
          resolveDirective,
          resolveDynamicComponent,
          resolveFilter,
          resolveTransitionHooks,
          setBlockTracking,
          setDevtoolsHook,
          setTransitionHooks,
          shallowReactive,
          shallowReadonly,
          shallowRef,
          ssrContextKey,
          ssrUtils,
          stop,
          toDisplayString,
          toHandlerKey,
          toHandlers,
          toRaw,
          toRef,
          toRefs,
          toValue,
          transformVNodeArgs,
          triggerRef,
          unref,
          useAttrs,
          useCssModule,
          useCssVars,
          useModel,
          useSSRContext,
          useSlots,
          useTransitionState,
          vModelCheckbox,
          vModelDynamic,
          vModelRadio,
          vModelSelect,
          vModelText,
          vShow,
          version,
          warn,
          watch,
          watchEffect,
          watchPostEffect,
          watchSyncEffect,
          withAsyncContext,
          withCtx,
          withDefaults,
          withDirectives,
          withKeys,
          withMemo,
          withModifiers,
          withScopeId,
        },
        Symbol.toStringTag,
        {
          value: "Module",
        },
      ),
    );

    function defaultOnError(error) {
      throw error;
    }

    function defaultOnWarn(msg) {}

    function createCompilerError(code, loc, messages, additionalMessage) {
      const msg = code;
      const error = new SyntaxError(String(msg));
      error.code = code;
      error.loc = loc;
      return error;
    }
    const FRAGMENT = Symbol(``);
    const TELEPORT = Symbol(``);
    const SUSPENSE = Symbol(``);
    const KEEP_ALIVE = Symbol(``);
    const BASE_TRANSITION = Symbol(``);
    const OPEN_BLOCK = Symbol(``);
    const CREATE_BLOCK = Symbol(``);
    const CREATE_ELEMENT_BLOCK = Symbol(``);
    const CREATE_VNODE = Symbol(``);
    const CREATE_ELEMENT_VNODE = Symbol(``);
    const CREATE_COMMENT = Symbol(``);
    const CREATE_TEXT = Symbol(``);
    const CREATE_STATIC = Symbol(``);
    const RESOLVE_COMPONENT = Symbol(``);
    const RESOLVE_DYNAMIC_COMPONENT = Symbol(``);
    const RESOLVE_DIRECTIVE = Symbol(``);
    const RESOLVE_FILTER = Symbol(``);
    const WITH_DIRECTIVES = Symbol(``);
    const RENDER_LIST = Symbol(``);
    const RENDER_SLOT = Symbol(``);
    const CREATE_SLOTS = Symbol(``);
    const TO_DISPLAY_STRING = Symbol(``);
    const MERGE_PROPS = Symbol(``);
    const NORMALIZE_CLASS = Symbol(``);
    const NORMALIZE_STYLE = Symbol(``);
    const NORMALIZE_PROPS = Symbol(``);
    const GUARD_REACTIVE_PROPS = Symbol(``);
    const TO_HANDLERS = Symbol(``);
    const CAMELIZE = Symbol(``);
    const CAPITALIZE = Symbol(``);
    const TO_HANDLER_KEY = Symbol(``);
    const SET_BLOCK_TRACKING = Symbol(``);
    const PUSH_SCOPE_ID = Symbol(``);
    const POP_SCOPE_ID = Symbol(``);
    const WITH_CTX = Symbol(``);
    const UNREF = Symbol(``);
    const IS_REF = Symbol(``);
    const WITH_MEMO = Symbol(``);
    const IS_MEMO_SAME = Symbol(``);
    const helperNameMap = {
      [FRAGMENT]: `Fragment`,
      [TELEPORT]: `Teleport`,
      [SUSPENSE]: `Suspense`,
      [KEEP_ALIVE]: `KeepAlive`,
      [BASE_TRANSITION]: `BaseTransition`,
      [OPEN_BLOCK]: `openBlock`,
      [CREATE_BLOCK]: `createBlock`,
      [CREATE_ELEMENT_BLOCK]: `createElementBlock`,
      [CREATE_VNODE]: `createVNode`,
      [CREATE_ELEMENT_VNODE]: `createElementVNode`,
      [CREATE_COMMENT]: `createCommentVNode`,
      [CREATE_TEXT]: `createTextVNode`,
      [CREATE_STATIC]: `createStaticVNode`,
      [RESOLVE_COMPONENT]: `resolveComponent`,
      [RESOLVE_DYNAMIC_COMPONENT]: `resolveDynamicComponent`,
      [RESOLVE_DIRECTIVE]: `resolveDirective`,
      [RESOLVE_FILTER]: `resolveFilter`,
      [WITH_DIRECTIVES]: `withDirectives`,
      [RENDER_LIST]: `renderList`,
      [RENDER_SLOT]: `renderSlot`,
      [CREATE_SLOTS]: `createSlots`,
      [TO_DISPLAY_STRING]: `toDisplayString`,
      [MERGE_PROPS]: `mergeProps`,
      [NORMALIZE_CLASS]: `normalizeClass`,
      [NORMALIZE_STYLE]: `normalizeStyle`,
      [NORMALIZE_PROPS]: `normalizeProps`,
      [GUARD_REACTIVE_PROPS]: `guardReactiveProps`,
      [TO_HANDLERS]: `toHandlers`,
      [CAMELIZE]: `camelize`,
      [CAPITALIZE]: `capitalize`,
      [TO_HANDLER_KEY]: `toHandlerKey`,
      [SET_BLOCK_TRACKING]: `setBlockTracking`,
      [PUSH_SCOPE_ID]: `pushScopeId`,
      [POP_SCOPE_ID]: `popScopeId`,
      [WITH_CTX]: `withCtx`,
      [UNREF]: `unref`,
      [IS_REF]: `isRef`,
      [WITH_MEMO]: `withMemo`,
      [IS_MEMO_SAME]: `isMemoSame`,
    };

    function registerRuntimeHelpers(helpers) {
      Object.getOwnPropertySymbols(helpers).forEach((s) => {
        helperNameMap[s] = helpers[s];
      });
    }
    const locStub = {
      source: "",
      start: {
        line: 1,
        column: 1,
        offset: 0,
      },
      end: {
        line: 1,
        column: 1,
        offset: 0,
      },
    };

    function createRoot(children, loc = locStub) {
      return {
        type: 0,
        children,
        helpers: /* @__PURE__ */ new Set(),
        components: [],
        directives: [],
        hoists: [],
        imports: [],
        cached: 0,
        temps: 0,
        codegenNode: void 0,
        loc,
      };
    }

    function createVNodeCall(
      context,
      tag,
      props,
      children,
      patchFlag,
      dynamicProps,
      directives,
      isBlock = false,
      disableTracking = false,
      isComponent2 = false,
      loc = locStub,
    ) {
      if (context) {
        if (isBlock) {
          context.helper(OPEN_BLOCK);
          context.helper(getVNodeBlockHelper(context.inSSR, isComponent2));
        } else {
          context.helper(getVNodeHelper(context.inSSR, isComponent2));
        }
        if (directives) {
          context.helper(WITH_DIRECTIVES);
        }
      }
      return {
        type: 13,
        tag,
        props,
        children,
        patchFlag,
        dynamicProps,
        directives,
        isBlock,
        disableTracking,
        isComponent: isComponent2,
        loc,
      };
    }

    function createArrayExpression(elements, loc = locStub) {
      return {
        type: 17,
        loc,
        elements,
      };
    }

    function createObjectExpression(properties, loc = locStub) {
      return {
        type: 15,
        loc,
        properties,
      };
    }

    function createObjectProperty(key, value) {
      return {
        type: 16,
        loc: locStub,
        key: isString$2(key) ? createSimpleExpression(key, true) : key,
        value,
      };
    }

    function createSimpleExpression(
      content,
      isStatic = false,
      loc = locStub,
      constType = 0,
    ) {
      return {
        type: 4,
        loc,
        content,
        isStatic,
        constType: isStatic ? 3 : constType,
      };
    }

    function createCompoundExpression(children, loc = locStub) {
      return {
        type: 8,
        loc,
        children,
      };
    }

    function createCallExpression(callee, args = [], loc = locStub) {
      return {
        type: 14,
        loc,
        callee,
        arguments: args,
      };
    }

    function createFunctionExpression(
      params,
      returns = void 0,
      newline = false,
      isSlot = false,
      loc = locStub,
    ) {
      return {
        type: 18,
        params,
        returns,
        newline,
        isSlot,
        loc,
      };
    }

    function createConditionalExpression(
      test,
      consequent,
      alternate,
      newline = true,
    ) {
      return {
        type: 19,
        test,
        consequent,
        alternate,
        newline,
        loc: locStub,
      };
    }

    function createCacheExpression(index, value, isVNode2 = false) {
      return {
        type: 20,
        index,
        value,
        isVNode: isVNode2,
        loc: locStub,
      };
    }

    function createBlockStatement(body) {
      return {
        type: 21,
        body,
        loc: locStub,
      };
    }

    function getVNodeHelper(ssr, isComponent2) {
      return ssr || isComponent2 ? CREATE_VNODE : CREATE_ELEMENT_VNODE;
    }

    function getVNodeBlockHelper(ssr, isComponent2) {
      return ssr || isComponent2 ? CREATE_BLOCK : CREATE_ELEMENT_BLOCK;
    }

    function convertToBlock(node, { helper, removeHelper, inSSR }) {
      if (!node.isBlock) {
        node.isBlock = true;
        removeHelper(getVNodeHelper(inSSR, node.isComponent));
        helper(OPEN_BLOCK);
        helper(getVNodeBlockHelper(inSSR, node.isComponent));
      }
    }
    const isStaticExp = (p2) => p2.type === 4 && p2.isStatic;
    const isBuiltInType = (tag, expected) =>
      tag === expected || tag === hyphenate(expected);

    function isCoreComponent(tag) {
      if (isBuiltInType(tag, "Teleport")) {
        return TELEPORT;
      } else if (isBuiltInType(tag, "Suspense")) {
        return SUSPENSE;
      } else if (isBuiltInType(tag, "KeepAlive")) {
        return KEEP_ALIVE;
      } else if (isBuiltInType(tag, "BaseTransition")) {
        return BASE_TRANSITION;
      }
    }
    const nonIdentifierRE = /^\d|[^\$\w]/;
    const isSimpleIdentifier = (name) => !nonIdentifierRE.test(name);
    const validFirstIdentCharRE = /[A-Za-z_$\xA0-\uFFFF]/;
    const validIdentCharRE = /[\.\?\w$\xA0-\uFFFF]/;
    const whitespaceRE = /\s+[.[]\s*|\s*[.[]\s+/g;
    const isMemberExpressionBrowser = (path) => {
      path = path.trim().replace(whitespaceRE, (s) => s.trim());
      let state = 0;
      let stateStack = [];
      let currentOpenBracketCount = 0;
      let currentOpenParensCount = 0;
      let currentStringType = null;
      for (let i = 0; i < path.length; i++) {
        const char = path.charAt(i);
        switch (state) {
          case 0:
            if (char === "[") {
              stateStack.push(state);
              state = 1;
              currentOpenBracketCount++;
            } else if (char === "(") {
              stateStack.push(state);
              state = 2;
              currentOpenParensCount++;
            } else if (
              !(i === 0 ? validFirstIdentCharRE : validIdentCharRE).test(char)
            ) {
              return false;
            }
            break;
          case 1:
            if (char === `'` || char === `"` || char === "`") {
              stateStack.push(state);
              state = 3;
              currentStringType = char;
            } else if (char === `[`) {
              currentOpenBracketCount++;
            } else if (char === `]`) {
              if (!--currentOpenBracketCount) {
                state = stateStack.pop();
              }
            }
            break;
          case 2:
            if (char === `'` || char === `"` || char === "`") {
              stateStack.push(state);
              state = 3;
              currentStringType = char;
            } else if (char === `(`) {
              currentOpenParensCount++;
            } else if (char === `)`) {
              if (i === path.length - 1) {
                return false;
              }
              if (!--currentOpenParensCount) {
                state = stateStack.pop();
              }
            }
            break;
          case 3:
            if (char === currentStringType) {
              state = stateStack.pop();
              currentStringType = null;
            }
            break;
        }
      }
      return !currentOpenBracketCount && !currentOpenParensCount;
    };
    const isMemberExpression = isMemberExpressionBrowser;

    function getInnerRange(loc, offset, length) {
      const source = loc.source.slice(offset, offset + length);
      const newLoc = {
        source,
        start: advancePositionWithClone(loc.start, loc.source, offset),
        end: loc.end,
      };
      if (length != null) {
        newLoc.end = advancePositionWithClone(
          loc.start,
          loc.source,
          offset + length,
        );
      }
      return newLoc;
    }

    function advancePositionWithClone(
      pos,
      source,
      numberOfCharacters = source.length,
    ) {
      return advancePositionWithMutation(
        extend$1({}, pos),
        source,
        numberOfCharacters,
      );
    }

    function advancePositionWithMutation(
      pos,
      source,
      numberOfCharacters = source.length,
    ) {
      let linesCount = 0;
      let lastNewLinePos = -1;
      for (let i = 0; i < numberOfCharacters; i++) {
        if (source.charCodeAt(i) === 10) {
          linesCount++;
          lastNewLinePos = i;
        }
      }
      pos.offset += numberOfCharacters;
      pos.line += linesCount;
      pos.column =
        lastNewLinePos === -1
          ? pos.column + numberOfCharacters
          : numberOfCharacters - lastNewLinePos;
      return pos;
    }

    function findDir(node, name, allowEmpty = false) {
      for (let i = 0; i < node.props.length; i++) {
        const p2 = node.props[i];
        if (
          p2.type === 7 &&
          (allowEmpty || p2.exp) &&
          (isString$2(name) ? p2.name === name : name.test(p2.name))
        ) {
          return p2;
        }
      }
    }

    function findProp(node, name, dynamicOnly = false, allowEmpty = false) {
      for (let i = 0; i < node.props.length; i++) {
        const p2 = node.props[i];
        if (p2.type === 6) {
          if (dynamicOnly) continue;
          if (p2.name === name && (p2.value || allowEmpty)) {
            return p2;
          }
        } else if (
          p2.name === "bind" &&
          (p2.exp || allowEmpty) &&
          isStaticArgOf(p2.arg, name)
        ) {
          return p2;
        }
      }
    }

    function isStaticArgOf(arg, name) {
      return !!(arg && isStaticExp(arg) && arg.content === name);
    }

    function hasDynamicKeyVBind(node) {
      return node.props.some(
        (p2) =>
          p2.type === 7 &&
          p2.name === "bind" &&
          (!p2.arg || // v-bind="obj"
            p2.arg.type !== 4 || // v-bind:[_ctx.foo]
            !p2.arg.isStatic),
        // v-bind:[foo]
      );
    }

    function isText$1(node) {
      return node.type === 5 || node.type === 2;
    }

    function isVSlot(p2) {
      return p2.type === 7 && p2.name === "slot";
    }

    function isTemplateNode(node) {
      return node.type === 1 && node.tagType === 3;
    }

    function isSlotOutlet(node) {
      return node.type === 1 && node.tagType === 2;
    }
    const propsHelperSet = /* @__PURE__ */ new Set([
      NORMALIZE_PROPS,
      GUARD_REACTIVE_PROPS,
    ]);

    function getUnnormalizedProps(props, callPath = []) {
      if (props && !isString$2(props) && props.type === 14) {
        const callee = props.callee;
        if (!isString$2(callee) && propsHelperSet.has(callee)) {
          return getUnnormalizedProps(
            props.arguments[0],
            callPath.concat(props),
          );
        }
      }
      return [props, callPath];
    }

    function injectProp(node, prop, context) {
      let propsWithInjection;
      let props = node.type === 13 ? node.props : node.arguments[2];
      let callPath = [];
      let parentCall;
      if (props && !isString$2(props) && props.type === 14) {
        const ret = getUnnormalizedProps(props);
        props = ret[0];
        callPath = ret[1];
        parentCall = callPath[callPath.length - 1];
      }
      if (props == null || isString$2(props)) {
        propsWithInjection = createObjectExpression([prop]);
      } else if (props.type === 14) {
        const first = props.arguments[0];
        if (!isString$2(first) && first.type === 15) {
          if (!hasProp(prop, first)) {
            first.properties.unshift(prop);
          }
        } else {
          if (props.callee === TO_HANDLERS) {
            propsWithInjection = createCallExpression(
              context.helper(MERGE_PROPS),
              [createObjectExpression([prop]), props],
            );
          } else {
            props.arguments.unshift(createObjectExpression([prop]));
          }
        }
        !propsWithInjection && (propsWithInjection = props);
      } else if (props.type === 15) {
        if (!hasProp(prop, props)) {
          props.properties.unshift(prop);
        }
        propsWithInjection = props;
      } else {
        propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
          createObjectExpression([prop]),
          props,
        ]);
        if (parentCall && parentCall.callee === GUARD_REACTIVE_PROPS) {
          parentCall = callPath[callPath.length - 2];
        }
      }
      if (node.type === 13) {
        if (parentCall) {
          parentCall.arguments[0] = propsWithInjection;
        } else {
          node.props = propsWithInjection;
        }
      } else {
        if (parentCall) {
          parentCall.arguments[0] = propsWithInjection;
        } else {
          node.arguments[2] = propsWithInjection;
        }
      }
    }

    function hasProp(prop, props) {
      let result = false;
      if (prop.key.type === 4) {
        const propKeyName = prop.key.content;
        result = props.properties.some(
          (p2) => p2.key.type === 4 && p2.key.content === propKeyName,
        );
      }
      return result;
    }

    function toValidAssetId(name, type) {
      return `_${type}_${name.replace(/[^\w]/g, (searchValue, replaceValue) => {
        return searchValue === "-"
          ? "_"
          : name.charCodeAt(replaceValue).toString();
      })}`;
    }

    function getMemoedVNodeCall(node) {
      if (node.type === 14 && node.callee === WITH_MEMO) {
        return node.arguments[1].returns;
      } else {
        return node;
      }
    }

    function getCompatValue(key, context) {
      const config = context.options
        ? context.options.compatConfig
        : context.compatConfig;
      const value = config && config[key];
      if (key === "MODE") {
        return value || 3;
      } else {
        return value;
      }
    }

    function isCompatEnabled(key, context) {
      const mode = getCompatValue("MODE", context);
      const value = getCompatValue(key, context);
      return mode === 3 ? value === true : value !== false;
    }

    function checkCompatEnabled(key, context, loc, ...args) {
      const enabled = isCompatEnabled(key, context);
      return enabled;
    }
    const decodeRE = /&(gt|lt|amp|apos|quot);/g;
    const decodeMap = {
      gt: ">",
      lt: "<",
      amp: "&",
      apos: "'",
      quot: '"',
    };
    const defaultParserOptions = {
      delimiters: [`{{`, `}}`],
      getNamespace: () => 0,
      getTextMode: () => 0,
      isVoidTag: NO,
      isPreTag: NO,
      isCustomElement: NO,
      decodeEntities: (rawText) =>
        rawText.replace(decodeRE, (_, p1) => decodeMap[p1]),
      onError: defaultOnError,
      onWarn: defaultOnWarn,
      comments: false,
    };

    function baseParse(content, options = {}) {
      const context = createParserContext(content, options);
      const start = getCursor(context);
      return createRoot(
        parseChildren(context, 0, []),
        getSelection(context, start),
      );
    }

    function createParserContext(content, rawOptions) {
      const options = extend$1({}, defaultParserOptions);
      let key;
      for (key in rawOptions) {
        options[key] =
          rawOptions[key] === void 0
            ? defaultParserOptions[key]
            : rawOptions[key];
      }
      return {
        options,
        column: 1,
        line: 1,
        offset: 0,
        originalSource: content,
        source: content,
        inPre: false,
        inVPre: false,
        onWarn: options.onWarn,
      };
    }

    function parseChildren(context, mode, ancestors) {
      const parent = last(ancestors);
      const ns = parent ? parent.ns : 0;
      const nodes = [];
      while (!isEnd(context, mode, ancestors)) {
        const s = context.source;
        let node = void 0;
        if (mode === 0 || mode === 1) {
          if (!context.inVPre && startsWith(s, context.options.delimiters[0])) {
            node = parseInterpolation(context, mode);
          } else if (mode === 0 && s[0] === "<") {
            if (s.length === 1) {
              emitError(context, 5, 1);
            } else if (s[1] === "!") {
              if (startsWith(s, "<!--")) {
                node = parseComment(context);
              } else if (startsWith(s, "<!DOCTYPE")) {
                node = parseBogusComment(context);
              } else if (startsWith(s, "<![CDATA[")) {
                if (ns !== 0) {
                  node = parseCDATA(context, ancestors);
                } else {
                  emitError(context, 1);
                  node = parseBogusComment(context);
                }
              } else {
                emitError(context, 11);
                node = parseBogusComment(context);
              }
            } else if (s[1] === "/") {
              if (s.length === 2) {
                emitError(context, 5, 2);
              } else if (s[2] === ">") {
                emitError(context, 14, 2);
                advanceBy(context, 3);
                continue;
              } else if (/[a-z]/i.test(s[2])) {
                emitError(context, 23);
                parseTag(context, TagType.End, parent);
                continue;
              } else {
                emitError(context, 12, 2);
                node = parseBogusComment(context);
              }
            } else if (/[a-z]/i.test(s[1])) {
              node = parseElement(context, ancestors);
              if (
                isCompatEnabled("COMPILER_NATIVE_TEMPLATE", context) &&
                node &&
                node.tag === "template" &&
                !node.props.some(
                  (p2) => p2.type === 7 && isSpecialTemplateDirective(p2.name),
                )
              ) {
                node = node.children;
              }
            } else if (s[1] === "?") {
              emitError(context, 21, 1);
              node = parseBogusComment(context);
            } else {
              emitError(context, 12, 1);
            }
          }
        }
        if (!node) {
          node = parseText(context, mode);
        }
        if (isArray$1(node)) {
          for (let i = 0; i < node.length; i++) {
            pushNode(nodes, node[i]);
          }
        } else {
          pushNode(nodes, node);
        }
      }
      let removedWhitespace = false;
      if (mode !== 2 && mode !== 1) {
        const shouldCondense = context.options.whitespace !== "preserve";
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          if (node.type === 2) {
            if (!context.inPre) {
              if (!/[^\t\r\n\f ]/.test(node.content)) {
                const prev = nodes[i - 1];
                const next = nodes[i + 1];
                if (
                  !prev ||
                  !next ||
                  (shouldCondense &&
                    ((prev.type === 3 && next.type === 3) ||
                      (prev.type === 3 && next.type === 1) ||
                      (prev.type === 1 && next.type === 3) ||
                      (prev.type === 1 &&
                        next.type === 1 &&
                        /[\r\n]/.test(node.content))))
                ) {
                  removedWhitespace = true;
                  nodes[i] = null;
                } else {
                  node.content = " ";
                }
              } else if (shouldCondense) {
                node.content = node.content.replace(/[\t\r\n\f ]+/g, " ");
              }
            } else {
              node.content = node.content.replace(/\r\n/g, "\n");
            }
          } else if (node.type === 3 && !context.options.comments) {
            removedWhitespace = true;
            nodes[i] = null;
          }
        }
        if (context.inPre && parent && context.options.isPreTag(parent.tag)) {
          const first = nodes[0];
          if (first && first.type === 2) {
            first.content = first.content.replace(/^\r?\n/, "");
          }
        }
      }
      return removedWhitespace ? nodes.filter(Boolean) : nodes;
    }

    function pushNode(nodes, node) {
      if (node.type === 2) {
        const prev = last(nodes);
        if (
          prev &&
          prev.type === 2 &&
          prev.loc.end.offset === node.loc.start.offset
        ) {
          prev.content += node.content;
          prev.loc.end = node.loc.end;
          prev.loc.source += node.loc.source;
          return;
        }
      }
      nodes.push(node);
    }

    function parseCDATA(context, ancestors) {
      advanceBy(context, 9);
      const nodes = parseChildren(context, 3, ancestors);
      if (context.source.length === 0) {
        emitError(context, 6);
      } else {
        advanceBy(context, 3);
      }
      return nodes;
    }

    function parseComment(context) {
      const start = getCursor(context);
      let content;
      const match = /--(\!)?>/.exec(context.source);
      if (!match) {
        content = context.source.slice(4);
        advanceBy(context, context.source.length);
        emitError(context, 7);
      } else {
        if (match.index <= 3) {
          emitError(context, 0);
        }
        if (match[1]) {
          emitError(context, 10);
        }
        content = context.source.slice(4, match.index);
        const s = context.source.slice(0, match.index);
        let prevIndex = 1,
          nestedIndex = 0;
        while ((nestedIndex = s.indexOf("<!--", prevIndex)) !== -1) {
          advanceBy(context, nestedIndex - prevIndex + 1);
          if (nestedIndex + 4 < s.length) {
            emitError(context, 16);
          }
          prevIndex = nestedIndex + 1;
        }
        advanceBy(context, match.index + match[0].length - prevIndex + 1);
      }
      return {
        type: 3,
        content,
        loc: getSelection(context, start),
      };
    }

    function parseBogusComment(context) {
      const start = getCursor(context);
      const contentStart = context.source[1] === "?" ? 1 : 2;
      let content;
      const closeIndex = context.source.indexOf(">");
      if (closeIndex === -1) {
        content = context.source.slice(contentStart);
        advanceBy(context, context.source.length);
      } else {
        content = context.source.slice(contentStart, closeIndex);
        advanceBy(context, closeIndex + 1);
      }
      return {
        type: 3,
        content,
        loc: getSelection(context, start),
      };
    }

    function parseElement(context, ancestors) {
      const wasInPre = context.inPre;
      const wasInVPre = context.inVPre;
      const parent = last(ancestors);
      const element = parseTag(context, TagType.Start, parent);
      const isPreBoundary = context.inPre && !wasInPre;
      const isVPreBoundary = context.inVPre && !wasInVPre;
      if (element.isSelfClosing || context.options.isVoidTag(element.tag)) {
        if (isPreBoundary) {
          context.inPre = false;
        }
        if (isVPreBoundary) {
          context.inVPre = false;
        }
        return element;
      }
      ancestors.push(element);
      const mode = context.options.getTextMode(element, parent);
      const children = parseChildren(context, mode, ancestors);
      ancestors.pop();
      {
        const inlineTemplateProp = element.props.find(
          (p2) => p2.type === 6 && p2.name === "inline-template",
        );
        if (
          inlineTemplateProp &&
          checkCompatEnabled(
            "COMPILER_INLINE_TEMPLATE",
            context,
            inlineTemplateProp.loc,
          )
        ) {
          const loc = getSelection(context, element.loc.end);
          inlineTemplateProp.value = {
            type: 2,
            content: loc.source,
            loc,
          };
        }
      }
      element.children = children;
      if (startsWithEndTagOpen(context.source, element.tag)) {
        parseTag(context, TagType.End, parent);
      } else {
        emitError(context, 24, 0, element.loc.start);
        if (
          context.source.length === 0 &&
          element.tag.toLowerCase() === "script"
        ) {
          const first = children[0];
          if (first && startsWith(first.loc.source, "<!--")) {
            emitError(context, 8);
          }
        }
      }
      element.loc = getSelection(context, element.loc.start);
      if (isPreBoundary) {
        context.inPre = false;
      }
      if (isVPreBoundary) {
        context.inVPre = false;
      }
      return element;
    }
    var TagType = /* @__PURE__ */ ((TagType2) => {
      TagType2[(TagType2["Start"] = 0)] = "Start";
      TagType2[(TagType2["End"] = 1)] = "End";
      return TagType2;
    })(TagType || {});
    const isSpecialTemplateDirective = /* @__PURE__ */ makeMap(
      `if,else,else-if,for,slot`,
    );

    function parseTag(context, type, parent) {
      const start = getCursor(context);
      const match = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(context.source);
      const tag = match[1];
      const ns = context.options.getNamespace(tag, parent);
      advanceBy(context, match[0].length);
      advanceSpaces(context);
      const cursor = getCursor(context);
      const currentSource = context.source;
      if (context.options.isPreTag(tag)) {
        context.inPre = true;
      }
      let props = parseAttributes(context, type);
      if (
        type === 0 &&
        !context.inVPre &&
        props.some((p2) => p2.type === 7 && p2.name === "pre")
      ) {
        context.inVPre = true;
        extend$1(context, cursor);
        context.source = currentSource;
        props = parseAttributes(context, type).filter(
          (p2) => p2.name !== "v-pre",
        );
      }
      let isSelfClosing = false;
      if (context.source.length === 0) {
        emitError(context, 9);
      } else {
        isSelfClosing = startsWith(context.source, "/>");
        if (type === 1 && isSelfClosing) {
          emitError(context, 4);
        }
        advanceBy(context, isSelfClosing ? 2 : 1);
      }
      if (type === 1) {
        return;
      }
      let tagType = 0;
      if (!context.inVPre) {
        if (tag === "slot") {
          tagType = 2;
        } else if (tag === "template") {
          if (
            props.some(
              (p2) => p2.type === 7 && isSpecialTemplateDirective(p2.name),
            )
          ) {
            tagType = 3;
          }
        } else if (isComponent(tag, props, context)) {
          tagType = 1;
        }
      }
      return {
        type: 1,
        ns,
        tag,
        tagType,
        props,
        isSelfClosing,
        children: [],
        loc: getSelection(context, start),
        codegenNode: void 0,
        // to be created during transform phase
      };
    }

    function isComponent(tag, props, context) {
      const options = context.options;
      if (options.isCustomElement(tag)) {
        return false;
      }
      if (
        tag === "component" ||
        /^[A-Z]/.test(tag) ||
        isCoreComponent(tag) ||
        (options.isBuiltInComponent && options.isBuiltInComponent(tag)) ||
        (options.isNativeTag && !options.isNativeTag(tag))
      ) {
        return true;
      }
      for (let i = 0; i < props.length; i++) {
        const p2 = props[i];
        if (p2.type === 6) {
          if (p2.name === "is" && p2.value) {
            if (p2.value.content.startsWith("vue:")) {
              return true;
            } else if (
              checkCompatEnabled("COMPILER_IS_ON_ELEMENT", context, p2.loc)
            ) {
              return true;
            }
          }
        } else {
          if (p2.name === "is") {
            return true;
          } else if (
            // :is on plain element - only treat as component in compat mode
            p2.name === "bind" &&
            isStaticArgOf(p2.arg, "is") &&
            true &&
            checkCompatEnabled("COMPILER_IS_ON_ELEMENT", context, p2.loc)
          ) {
            return true;
          }
        }
      }
    }

    function parseAttributes(context, type) {
      const props = [];
      const attributeNames = /* @__PURE__ */ new Set();
      while (
        context.source.length > 0 &&
        !startsWith(context.source, ">") &&
        !startsWith(context.source, "/>")
      ) {
        if (startsWith(context.source, "/")) {
          emitError(context, 22);
          advanceBy(context, 1);
          advanceSpaces(context);
          continue;
        }
        if (type === 1) {
          emitError(context, 3);
        }
        const attr = parseAttribute(context, attributeNames);
        if (attr.type === 6 && attr.value && attr.name === "class") {
          attr.value.content = attr.value.content.replace(/\s+/g, " ").trim();
        }
        if (type === 0) {
          props.push(attr);
        }
        if (/^[^\t\r\n\f />]/.test(context.source)) {
          emitError(context, 15);
        }
        advanceSpaces(context);
      }
      return props;
    }

    function parseAttribute(context, nameSet) {
      var _a2;
      const start = getCursor(context);
      const match = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(context.source);
      const name = match[0];
      if (nameSet.has(name)) {
        emitError(context, 2);
      }
      nameSet.add(name);
      if (name[0] === "=") {
        emitError(context, 19);
      }
      {
        const pattern = /["'<]/g;
        let m;
        while ((m = pattern.exec(name))) {
          emitError(context, 17, m.index);
        }
      }
      advanceBy(context, name.length);
      let value = void 0;
      if (/^[\t\r\n\f ]*=/.test(context.source)) {
        advanceSpaces(context);
        advanceBy(context, 1);
        advanceSpaces(context);
        value = parseAttributeValue(context);
        if (!value) {
          emitError(context, 13);
        }
      }
      const loc = getSelection(context, start);
      if (!context.inVPre && /^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(name)) {
        const match2 =
          /(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(
            name,
          );
        let isPropShorthand = startsWith(name, ".");
        let dirName =
          match2[1] ||
          (isPropShorthand || startsWith(name, ":")
            ? "bind"
            : startsWith(name, "@")
              ? "on"
              : "slot");
        let arg;
        if (match2[2]) {
          const isSlot = dirName === "slot";
          const startOffset = name.lastIndexOf(
            match2[2],
            name.length -
              (((_a2 = match2[3]) == null ? void 0 : _a2.length) || 0),
          );
          const loc2 = getSelection(
            context,
            getNewPosition(context, start, startOffset),
            getNewPosition(
              context,
              start,
              startOffset +
                match2[2].length +
                ((isSlot && match2[3]) || "").length,
            ),
          );
          let content = match2[2];
          let isStatic = true;
          if (content.startsWith("[")) {
            isStatic = false;
            if (!content.endsWith("]")) {
              emitError(context, 27);
              content = content.slice(1);
            } else {
              content = content.slice(1, content.length - 1);
            }
          } else if (isSlot) {
            content += match2[3] || "";
          }
          arg = {
            type: 4,
            content,
            isStatic,
            constType: isStatic ? 3 : 0,
            loc: loc2,
          };
        }
        if (value && value.isQuoted) {
          const valueLoc = value.loc;
          valueLoc.start.offset++;
          valueLoc.start.column++;
          valueLoc.end = advancePositionWithClone(
            valueLoc.start,
            value.content,
          );
          valueLoc.source = valueLoc.source.slice(1, -1);
        }
        const modifiers = match2[3] ? match2[3].slice(1).split(".") : [];
        if (isPropShorthand) modifiers.push("prop");
        if (dirName === "bind" && arg) {
          if (
            modifiers.includes("sync") &&
            checkCompatEnabled(
              "COMPILER_V_BIND_SYNC",
              context,
              loc,
              arg.loc.source,
            )
          ) {
            dirName = "model";
            modifiers.splice(modifiers.indexOf("sync"), 1);
          }
        }
        return {
          type: 7,
          name: dirName,
          exp: value && {
            type: 4,
            content: value.content,
            isStatic: false,
            // Treat as non-constant by default. This can be potentially set to
            // other values by `transformExpression` to make it eligible for hoisting.
            constType: 0,
            loc: value.loc,
          },
          arg,
          modifiers,
          loc,
        };
      }
      if (!context.inVPre && startsWith(name, "v-")) {
        emitError(context, 26);
      }
      return {
        type: 6,
        name,
        value: value && {
          type: 2,
          content: value.content,
          loc: value.loc,
        },
        loc,
      };
    }

    function parseAttributeValue(context) {
      const start = getCursor(context);
      let content;
      const quote = context.source[0];
      const isQuoted = quote === `"` || quote === `'`;
      if (isQuoted) {
        advanceBy(context, 1);
        const endIndex = context.source.indexOf(quote);
        if (endIndex === -1) {
          content = parseTextData(context, context.source.length, 4);
        } else {
          content = parseTextData(context, endIndex, 4);
          advanceBy(context, 1);
        }
      } else {
        const match = /^[^\t\r\n\f >]+/.exec(context.source);
        if (!match) {
          return void 0;
        }
        const unexpectedChars = /["'<=`]/g;
        let m;
        while ((m = unexpectedChars.exec(match[0]))) {
          emitError(context, 18, m.index);
        }
        content = parseTextData(context, match[0].length, 4);
      }
      return {
        content,
        isQuoted,
        loc: getSelection(context, start),
      };
    }

    function parseInterpolation(context, mode) {
      const [open, close] = context.options.delimiters;
      const closeIndex = context.source.indexOf(close, open.length);
      if (closeIndex === -1) {
        emitError(context, 25);
        return void 0;
      }
      const start = getCursor(context);
      advanceBy(context, open.length);
      const innerStart = getCursor(context);
      const innerEnd = getCursor(context);
      const rawContentLength = closeIndex - open.length;
      const rawContent = context.source.slice(0, rawContentLength);
      const preTrimContent = parseTextData(context, rawContentLength, mode);
      const content = preTrimContent.trim();
      const startOffset = preTrimContent.indexOf(content);
      if (startOffset > 0) {
        advancePositionWithMutation(innerStart, rawContent, startOffset);
      }
      const endOffset =
        rawContentLength -
        (preTrimContent.length - content.length - startOffset);
      advancePositionWithMutation(innerEnd, rawContent, endOffset);
      advanceBy(context, close.length);
      return {
        type: 5,
        content: {
          type: 4,
          isStatic: false,
          // Set `isConstant` to false by default and will decide in transformExpression
          constType: 0,
          content,
          loc: getSelection(context, innerStart, innerEnd),
        },
        loc: getSelection(context, start),
      };
    }

    function parseText(context, mode) {
      const endTokens =
        mode === 3 ? ["]]>"] : ["<", context.options.delimiters[0]];
      let endIndex = context.source.length;
      for (let i = 0; i < endTokens.length; i++) {
        const index = context.source.indexOf(endTokens[i], 1);
        if (index !== -1 && endIndex > index) {
          endIndex = index;
        }
      }
      const start = getCursor(context);
      const content = parseTextData(context, endIndex, mode);
      return {
        type: 2,
        content,
        loc: getSelection(context, start),
      };
    }

    function parseTextData(context, length, mode) {
      const rawText = context.source.slice(0, length);
      advanceBy(context, length);
      if (mode === 2 || mode === 3 || !rawText.includes("&")) {
        return rawText;
      } else {
        return context.options.decodeEntities(rawText, mode === 4);
      }
    }

    function getCursor(context) {
      const { column, line, offset } = context;
      return {
        column,
        line,
        offset,
      };
    }

    function getSelection(context, start, end) {
      end = end || getCursor(context);
      return {
        start,
        end,
        source: context.originalSource.slice(start.offset, end.offset),
      };
    }

    function last(xs) {
      return xs[xs.length - 1];
    }

    function startsWith(source, searchString) {
      return source.startsWith(searchString);
    }

    function advanceBy(context, numberOfCharacters) {
      const { source } = context;
      advancePositionWithMutation(context, source, numberOfCharacters);
      context.source = source.slice(numberOfCharacters);
    }

    function advanceSpaces(context) {
      const match = /^[\t\r\n\f ]+/.exec(context.source);
      if (match) {
        advanceBy(context, match[0].length);
      }
    }

    function getNewPosition(context, start, numberOfCharacters) {
      return advancePositionWithClone(
        start,
        context.originalSource.slice(start.offset, numberOfCharacters),
        numberOfCharacters,
      );
    }

    function emitError(context, code, offset, loc = getCursor(context)) {
      if (offset) {
        loc.offset += offset;
        loc.column += offset;
      }
      context.options.onError(
        createCompilerError(code, {
          start: loc,
          end: loc,
          source: "",
        }),
      );
    }

    function isEnd(context, mode, ancestors) {
      const s = context.source;
      switch (mode) {
        case 0:
          if (startsWith(s, "</")) {
            for (let i = ancestors.length - 1; i >= 0; --i) {
              if (startsWithEndTagOpen(s, ancestors[i].tag)) {
                return true;
              }
            }
          }
          break;
        case 1:
        case 2: {
          const parent = last(ancestors);
          if (parent && startsWithEndTagOpen(s, parent.tag)) {
            return true;
          }
          break;
        }
        case 3:
          if (startsWith(s, "]]>")) {
            return true;
          }
          break;
      }
      return !s;
    }

    function startsWithEndTagOpen(source, tag) {
      return (
        startsWith(source, "</") &&
        source.slice(2, 2 + tag.length).toLowerCase() === tag.toLowerCase() &&
        /[\t\r\n\f />]/.test(source[2 + tag.length] || ">")
      );
    }

    function hoistStatic(root, context) {
      walk(
        root,
        context,
        // Root node is unfortunately non-hoistable due to potential parent
        // fallthrough attributes.
        isSingleElementRoot(root, root.children[0]),
      );
    }

    function isSingleElementRoot(root, child) {
      const { children } = root;
      return children.length === 1 && child.type === 1 && !isSlotOutlet(child);
    }

    function walk(node, context, doNotHoistNode = false) {
      const { children } = node;
      const originalCount = children.length;
      let hoistedCount = 0;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.type === 1 && child.tagType === 0) {
          const constantType = doNotHoistNode
            ? 0
            : getConstantType(child, context);
          if (constantType > 0) {
            if (constantType >= 2) {
              child.codegenNode.patchFlag = `-1`;
              child.codegenNode = context.hoist(child.codegenNode);
              hoistedCount++;
              continue;
            }
          } else {
            const codegenNode = child.codegenNode;
            if (codegenNode.type === 13) {
              const flag = getPatchFlag(codegenNode);
              if (
                (!flag || flag === 512 || flag === 1) &&
                getGeneratedPropsConstantType(child, context) >= 2
              ) {
                const props = getNodeProps(child);
                if (props) {
                  codegenNode.props = context.hoist(props);
                }
              }
              if (codegenNode.dynamicProps) {
                codegenNode.dynamicProps = context.hoist(
                  codegenNode.dynamicProps,
                );
              }
            }
          }
        }
        if (child.type === 1) {
          const isComponent2 = child.tagType === 1;
          if (isComponent2) {
            context.scopes.vSlot++;
          }
          walk(child, context);
          if (isComponent2) {
            context.scopes.vSlot--;
          }
        } else if (child.type === 11) {
          walk(child, context, child.children.length === 1);
        } else if (child.type === 9) {
          for (let i2 = 0; i2 < child.branches.length; i2++) {
            walk(
              child.branches[i2],
              context,
              child.branches[i2].children.length === 1,
            );
          }
        }
      }
      if (hoistedCount && context.transformHoist) {
        context.transformHoist(children, context, node);
      }
      if (
        hoistedCount &&
        hoistedCount === originalCount &&
        node.type === 1 &&
        node.tagType === 0 &&
        node.codegenNode &&
        node.codegenNode.type === 13 &&
        isArray$1(node.codegenNode.children)
      ) {
        node.codegenNode.children = context.hoist(
          createArrayExpression(node.codegenNode.children),
        );
      }
    }

    function getConstantType(node, context) {
      const { constantCache } = context;
      switch (node.type) {
        case 1:
          if (node.tagType !== 0) {
            return 0;
          }
          const cached = constantCache.get(node);
          if (cached !== void 0) {
            return cached;
          }
          const codegenNode = node.codegenNode;
          if (codegenNode.type !== 13) {
            return 0;
          }
          if (
            codegenNode.isBlock &&
            node.tag !== "svg" &&
            node.tag !== "foreignObject"
          ) {
            return 0;
          }
          const flag = getPatchFlag(codegenNode);
          if (!flag) {
            let returnType2 = 3;
            const generatedPropsType = getGeneratedPropsConstantType(
              node,
              context,
            );
            if (generatedPropsType === 0) {
              constantCache.set(node, 0);
              return 0;
            }
            if (generatedPropsType < returnType2) {
              returnType2 = generatedPropsType;
            }
            for (let i = 0; i < node.children.length; i++) {
              const childType = getConstantType(node.children[i], context);
              if (childType === 0) {
                constantCache.set(node, 0);
                return 0;
              }
              if (childType < returnType2) {
                returnType2 = childType;
              }
            }
            if (returnType2 > 1) {
              for (let i = 0; i < node.props.length; i++) {
                const p2 = node.props[i];
                if (p2.type === 7 && p2.name === "bind" && p2.exp) {
                  const expType = getConstantType(p2.exp, context);
                  if (expType === 0) {
                    constantCache.set(node, 0);
                    return 0;
                  }
                  if (expType < returnType2) {
                    returnType2 = expType;
                  }
                }
              }
            }
            if (codegenNode.isBlock) {
              for (let i = 0; i < node.props.length; i++) {
                const p2 = node.props[i];
                if (p2.type === 7) {
                  constantCache.set(node, 0);
                  return 0;
                }
              }
              context.removeHelper(OPEN_BLOCK);
              context.removeHelper(
                getVNodeBlockHelper(context.inSSR, codegenNode.isComponent),
              );
              codegenNode.isBlock = false;
              context.helper(
                getVNodeHelper(context.inSSR, codegenNode.isComponent),
              );
            }
            constantCache.set(node, returnType2);
            return returnType2;
          } else {
            constantCache.set(node, 0);
            return 0;
          }
        case 2:
        case 3:
          return 3;
        case 9:
        case 11:
        case 10:
          return 0;
        case 5:
        case 12:
          return getConstantType(node.content, context);
        case 4:
          return node.constType;
        case 8:
          let returnType = 3;
          for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            if (isString$2(child) || isSymbol(child)) {
              continue;
            }
            const childType = getConstantType(child, context);
            if (childType === 0) {
              return 0;
            } else if (childType < returnType) {
              returnType = childType;
            }
          }
          return returnType;
        default:
          return 0;
      }
    }
    const allowHoistedHelperSet = /* @__PURE__ */ new Set([
      NORMALIZE_CLASS,
      NORMALIZE_STYLE,
      NORMALIZE_PROPS,
      GUARD_REACTIVE_PROPS,
    ]);

    function getConstantTypeOfHelperCall(value, context) {
      if (
        value.type === 14 &&
        !isString$2(value.callee) &&
        allowHoistedHelperSet.has(value.callee)
      ) {
        const arg = value.arguments[0];
        if (arg.type === 4) {
          return getConstantType(arg, context);
        } else if (arg.type === 14) {
          return getConstantTypeOfHelperCall(arg, context);
        }
      }
      return 0;
    }

    function getGeneratedPropsConstantType(node, context) {
      let returnType = 3;
      const props = getNodeProps(node);
      if (props && props.type === 15) {
        const { properties } = props;
        for (let i = 0; i < properties.length; i++) {
          const { key, value } = properties[i];
          const keyType = getConstantType(key, context);
          if (keyType === 0) {
            return keyType;
          }
          if (keyType < returnType) {
            returnType = keyType;
          }
          let valueType;
          if (value.type === 4) {
            valueType = getConstantType(value, context);
          } else if (value.type === 14) {
            valueType = getConstantTypeOfHelperCall(value, context);
          } else {
            valueType = 0;
          }
          if (valueType === 0) {
            return valueType;
          }
          if (valueType < returnType) {
            returnType = valueType;
          }
        }
      }
      return returnType;
    }

    function getNodeProps(node) {
      const codegenNode = node.codegenNode;
      if (codegenNode.type === 13) {
        return codegenNode.props;
      }
    }

    function getPatchFlag(node) {
      const flag = node.patchFlag;
      return flag ? parseInt(flag, 10) : void 0;
    }

    function createTransformContext(
      root,
      {
        filename = "",
        prefixIdentifiers = false,
        hoistStatic: hoistStatic2 = false,
        cacheHandlers = false,
        nodeTransforms = [],
        directiveTransforms = {},
        transformHoist = null,
        isBuiltInComponent = NOOP,
        isCustomElement = NOOP,
        expressionPlugins = [],
        scopeId = null,
        slotted = true,
        ssr = false,
        inSSR = false,
        ssrCssVars = ``,
        bindingMetadata = EMPTY_OBJ,
        inline = false,
        isTS = false,
        onError = defaultOnError,
        onWarn = defaultOnWarn,
        compatConfig,
      },
    ) {
      const nameMatch = filename.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/);
      const context = {
        // options
        selfName: nameMatch && capitalize(camelize(nameMatch[1])),
        prefixIdentifiers,
        hoistStatic: hoistStatic2,
        cacheHandlers,
        nodeTransforms,
        directiveTransforms,
        transformHoist,
        isBuiltInComponent,
        isCustomElement,
        expressionPlugins,
        scopeId,
        slotted,
        ssr,
        inSSR,
        ssrCssVars,
        bindingMetadata,
        inline,
        isTS,
        onError,
        onWarn,
        compatConfig,
        // state
        root,
        helpers: /* @__PURE__ */ new Map(),
        components: /* @__PURE__ */ new Set(),
        directives: /* @__PURE__ */ new Set(),
        hoists: [],
        imports: [],
        constantCache: /* @__PURE__ */ new Map(),
        temps: 0,
        cached: 0,
        identifiers: /* @__PURE__ */ Object.create(null),
        scopes: {
          vFor: 0,
          vSlot: 0,
          vPre: 0,
          vOnce: 0,
        },
        parent: null,
        currentNode: root,
        childIndex: 0,
        inVOnce: false,
        // methods
        helper(name) {
          const count = context.helpers.get(name) || 0;
          context.helpers.set(name, count + 1);
          return name;
        },
        removeHelper(name) {
          const count = context.helpers.get(name);
          if (count) {
            const currentCount = count - 1;
            if (!currentCount) {
              context.helpers.delete(name);
            } else {
              context.helpers.set(name, currentCount);
            }
          }
        },
        helperString(name) {
          return `_${helperNameMap[context.helper(name)]}`;
        },
        replaceNode(node) {
          context.parent.children[context.childIndex] = context.currentNode =
            node;
        },
        removeNode(node) {
          const list = context.parent.children;
          const removalIndex = node
            ? list.indexOf(node)
            : context.currentNode
              ? context.childIndex
              : -1;
          if (!node || node === context.currentNode) {
            context.currentNode = null;
            context.onNodeRemoved();
          } else {
            if (context.childIndex > removalIndex) {
              context.childIndex--;
              context.onNodeRemoved();
            }
          }
          context.parent.children.splice(removalIndex, 1);
        },
        onNodeRemoved: () => {},
        addIdentifiers(exp) {},
        removeIdentifiers(exp) {},
        hoist(exp) {
          if (isString$2(exp)) exp = createSimpleExpression(exp);
          context.hoists.push(exp);
          const identifier = createSimpleExpression(
            `_hoisted_${context.hoists.length}`,
            false,
            exp.loc,
            2,
          );
          identifier.hoisted = exp;
          return identifier;
        },
        cache(exp, isVNode2 = false) {
          return createCacheExpression(context.cached++, exp, isVNode2);
        },
      };
      {
        context.filters = /* @__PURE__ */ new Set();
      }
      return context;
    }

    function transform(root, options) {
      const context = createTransformContext(root, options);
      traverseNode(root, context);
      if (options.hoistStatic) {
        hoistStatic(root, context);
      }
      if (!options.ssr) {
        createRootCodegen(root, context);
      }
      root.helpers = /* @__PURE__ */ new Set([...context.helpers.keys()]);
      root.components = [...context.components];
      root.directives = [...context.directives];
      root.imports = context.imports;
      root.hoists = context.hoists;
      root.temps = context.temps;
      root.cached = context.cached;
      {
        root.filters = [...context.filters];
      }
    }

    function createRootCodegen(root, context) {
      const { helper } = context;
      const { children } = root;
      if (children.length === 1) {
        const child = children[0];
        if (isSingleElementRoot(root, child) && child.codegenNode) {
          const codegenNode = child.codegenNode;
          if (codegenNode.type === 13) {
            convertToBlock(codegenNode, context);
          }
          root.codegenNode = codegenNode;
        } else {
          root.codegenNode = child;
        }
      } else if (children.length > 1) {
        let patchFlag = 64;
        root.codegenNode = createVNodeCall(
          context,
          helper(FRAGMENT),
          void 0,
          root.children,
          patchFlag + ``,
          void 0,
          void 0,
          true,
          void 0,
          false,
          /* isComponent */
        );
      } else;
    }

    function traverseChildren(parent, context) {
      let i = 0;
      const nodeRemoved = () => {
        i--;
      };
      for (; i < parent.children.length; i++) {
        const child = parent.children[i];
        if (isString$2(child)) continue;
        context.parent = parent;
        context.childIndex = i;
        context.onNodeRemoved = nodeRemoved;
        traverseNode(child, context);
      }
    }

    function traverseNode(node, context) {
      context.currentNode = node;
      const { nodeTransforms } = context;
      const exitFns = [];
      for (let i2 = 0; i2 < nodeTransforms.length; i2++) {
        const onExit = nodeTransforms[i2](node, context);
        if (onExit) {
          if (isArray$1(onExit)) {
            exitFns.push(...onExit);
          } else {
            exitFns.push(onExit);
          }
        }
        if (!context.currentNode) {
          return;
        } else {
          node = context.currentNode;
        }
      }
      switch (node.type) {
        case 3:
          if (!context.ssr) {
            context.helper(CREATE_COMMENT);
          }
          break;
        case 5:
          if (!context.ssr) {
            context.helper(TO_DISPLAY_STRING);
          }
          break;
        case 9:
          for (let i2 = 0; i2 < node.branches.length; i2++) {
            traverseNode(node.branches[i2], context);
          }
          break;
        case 10:
        case 11:
        case 1:
        case 0:
          traverseChildren(node, context);
          break;
      }
      context.currentNode = node;
      let i = exitFns.length;
      while (i--) {
        exitFns[i]();
      }
    }

    function createStructuralDirectiveTransform(name, fn) {
      const matches2 = isString$2(name)
        ? (n) => n === name
        : (n) => name.test(n);
      return (node, context) => {
        if (node.type === 1) {
          const { props } = node;
          if (node.tagType === 3 && props.some(isVSlot)) {
            return;
          }
          const exitFns = [];
          for (let i = 0; i < props.length; i++) {
            const prop = props[i];
            if (prop.type === 7 && matches2(prop.name)) {
              props.splice(i, 1);
              i--;
              const onExit = fn(node, prop, context);
              if (onExit) exitFns.push(onExit);
            }
          }
          return exitFns;
        }
      };
    }
    const PURE_ANNOTATION = `/*#__PURE__*/`;
    const aliasHelper = (s) => `${helperNameMap[s]}: _${helperNameMap[s]}`;

    function createCodegenContext(
      ast,
      {
        mode = "function",
        prefixIdentifiers = mode === "module",
        sourceMap = false,
        filename = `template.vue.html`,
        scopeId = null,
        optimizeImports = false,
        runtimeGlobalName = `Vue`,
        runtimeModuleName = `vue`,
        ssrRuntimeModuleName = "vue/server-renderer",
        ssr = false,
        isTS = false,
        inSSR = false,
      },
    ) {
      const context = {
        mode,
        prefixIdentifiers,
        sourceMap,
        filename,
        scopeId,
        optimizeImports,
        runtimeGlobalName,
        runtimeModuleName,
        ssrRuntimeModuleName,
        ssr,
        isTS,
        inSSR,
        source: ast.loc.source,
        code: ``,
        column: 1,
        line: 1,
        offset: 0,
        indentLevel: 0,
        pure: false,
        map: void 0,
        helper(key) {
          return `_${helperNameMap[key]}`;
        },
        push(code, node) {
          context.code += code;
        },
        indent() {
          newline(++context.indentLevel);
        },
        deindent(withoutNewLine = false) {
          if (withoutNewLine) {
            --context.indentLevel;
          } else {
            newline(--context.indentLevel);
          }
        },
        newline() {
          newline(context.indentLevel);
        },
      };

      function newline(n) {
        context.push("\n" + `  `.repeat(n));
      }
      return context;
    }

    function generate(ast, options = {}) {
      const context = createCodegenContext(ast, options);
      if (options.onContextCreated) options.onContextCreated(context);
      const {
        mode,
        push,
        prefixIdentifiers,
        indent,
        deindent,
        newline,
        scopeId,
        ssr,
      } = context;
      const helpers = Array.from(ast.helpers);
      const hasHelpers = helpers.length > 0;
      const useWithBlock = !prefixIdentifiers && mode !== "module";
      const isSetupInlined = false;
      const preambleContext = isSetupInlined
        ? createCodegenContext(ast, options)
        : context;
      {
        genFunctionPreamble(ast, preambleContext);
      }
      const functionName = ssr ? `ssrRender` : `render`;
      const args = ssr
        ? ["_ctx", "_push", "_parent", "_attrs"]
        : ["_ctx", "_cache"];
      const signature = args.join(", ");
      {
        push(`function ${functionName}(${signature}) {`);
      }
      indent();
      if (useWithBlock) {
        push(`with (_ctx) {`);
        indent();
        if (hasHelpers) {
          push(`const { ${helpers.map(aliasHelper).join(", ")} } = _Vue`);
          push(`
`);
          newline();
        }
      }
      if (ast.components.length) {
        genAssets(ast.components, "component", context);
        if (ast.directives.length || ast.temps > 0) {
          newline();
        }
      }
      if (ast.directives.length) {
        genAssets(ast.directives, "directive", context);
        if (ast.temps > 0) {
          newline();
        }
      }
      if (ast.filters && ast.filters.length) {
        newline();
        genAssets(ast.filters, "filter", context);
        newline();
      }
      if (ast.temps > 0) {
        push(`let `);
        for (let i = 0; i < ast.temps; i++) {
          push(`${i > 0 ? `, ` : ``}_temp${i}`);
        }
      }
      if (ast.components.length || ast.directives.length || ast.temps) {
        push(`
`);
        newline();
      }
      if (!ssr) {
        push(`return `);
      }
      if (ast.codegenNode) {
        genNode(ast.codegenNode, context);
      } else {
        push(`null`);
      }
      if (useWithBlock) {
        deindent();
        push(`}`);
      }
      deindent();
      push(`}`);
      return {
        ast,
        code: context.code,
        preamble: isSetupInlined ? preambleContext.code : ``,
        // SourceMapGenerator does have toJSON() method but it's not in the types
        map: context.map ? context.map.toJSON() : void 0,
      };
    }

    function genFunctionPreamble(ast, context) {
      const {
        ssr,
        prefixIdentifiers,
        push,
        newline,
        runtimeModuleName,
        runtimeGlobalName,
        ssrRuntimeModuleName,
      } = context;
      const VueBinding = runtimeGlobalName;
      const helpers = Array.from(ast.helpers);
      if (helpers.length > 0) {
        {
          push(`const _Vue = ${VueBinding}
`);
          if (ast.hoists.length) {
            const staticHelpers = [
              CREATE_VNODE,
              CREATE_ELEMENT_VNODE,
              CREATE_COMMENT,
              CREATE_TEXT,
              CREATE_STATIC,
            ]
              .filter((helper) => helpers.includes(helper))
              .map(aliasHelper)
              .join(", ");
            push(`const { ${staticHelpers} } = _Vue
`);
          }
        }
      }
      genHoists(ast.hoists, context);
      newline();
      push(`return `);
    }

    function genAssets(assets, type, { helper, push, newline, isTS }) {
      const resolver = helper(
        type === "filter"
          ? RESOLVE_FILTER
          : type === "component"
            ? RESOLVE_COMPONENT
            : RESOLVE_DIRECTIVE,
      );
      for (let i = 0; i < assets.length; i++) {
        let id = assets[i];
        const maybeSelfReference = id.endsWith("__self");
        if (maybeSelfReference) {
          id = id.slice(0, -6);
        }
        push(
          `const ${toValidAssetId(id, type)} = ${resolver}(${JSON.stringify(id)}${maybeSelfReference ? `, true` : ``})${isTS ? `!` : ``}`,
        );
        if (i < assets.length - 1) {
          newline();
        }
      }
    }

    function genHoists(hoists, context) {
      if (!hoists.length) {
        return;
      }
      context.pure = true;
      const { push, newline, helper, scopeId, mode } = context;
      newline();
      for (let i = 0; i < hoists.length; i++) {
        const exp = hoists[i];
        if (exp) {
          push(`const _hoisted_${i + 1} = ${``}`);
          genNode(exp, context);
          newline();
        }
      }
      context.pure = false;
    }

    function genNodeListAsArray(nodes, context) {
      const multilines = nodes.length > 3 || false;
      context.push(`[`);
      multilines && context.indent();
      genNodeList(nodes, context, multilines);
      multilines && context.deindent();
      context.push(`]`);
    }

    function genNodeList(nodes, context, multilines = false, comma = true) {
      const { push, newline } = context;
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (isString$2(node)) {
          push(node);
        } else if (isArray$1(node)) {
          genNodeListAsArray(node, context);
        } else {
          genNode(node, context);
        }
        if (i < nodes.length - 1) {
          if (multilines) {
            comma && push(",");
            newline();
          } else {
            comma && push(", ");
          }
        }
      }
    }

    function genNode(node, context) {
      if (isString$2(node)) {
        context.push(node);
        return;
      }
      if (isSymbol(node)) {
        context.push(context.helper(node));
        return;
      }
      switch (node.type) {
        case 1:
        case 9:
        case 11:
          genNode(node.codegenNode, context);
          break;
        case 2:
          genText(node, context);
          break;
        case 4:
          genExpression(node, context);
          break;
        case 5:
          genInterpolation(node, context);
          break;
        case 12:
          genNode(node.codegenNode, context);
          break;
        case 8:
          genCompoundExpression(node, context);
          break;
        case 3:
          genComment(node, context);
          break;
        case 13:
          genVNodeCall(node, context);
          break;
        case 14:
          genCallExpression(node, context);
          break;
        case 15:
          genObjectExpression(node, context);
          break;
        case 17:
          genArrayExpression(node, context);
          break;
        case 18:
          genFunctionExpression(node, context);
          break;
        case 19:
          genConditionalExpression(node, context);
          break;
        case 20:
          genCacheExpression(node, context);
          break;
        case 21:
          genNodeList(node.body, context, true, false);
          break;
      }
    }

    function genText(node, context) {
      context.push(JSON.stringify(node.content), node);
    }

    function genExpression(node, context) {
      const { content, isStatic } = node;
      context.push(isStatic ? JSON.stringify(content) : content, node);
    }

    function genInterpolation(node, context) {
      const { push, helper, pure } = context;
      if (pure) push(PURE_ANNOTATION);
      push(`${helper(TO_DISPLAY_STRING)}(`);
      genNode(node.content, context);
      push(`)`);
    }

    function genCompoundExpression(node, context) {
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (isString$2(child)) {
          context.push(child);
        } else {
          genNode(child, context);
        }
      }
    }

    function genExpressionAsPropertyKey(node, context) {
      const { push } = context;
      if (node.type === 8) {
        push(`[`);
        genCompoundExpression(node, context);
        push(`]`);
      } else if (node.isStatic) {
        const text = isSimpleIdentifier(node.content)
          ? node.content
          : JSON.stringify(node.content);
        push(text, node);
      } else {
        push(`[${node.content}]`, node);
      }
    }

    function genComment(node, context) {
      const { push, helper, pure } = context;
      if (pure) {
        push(PURE_ANNOTATION);
      }
      push(`${helper(CREATE_COMMENT)}(${JSON.stringify(node.content)})`, node);
    }

    function genVNodeCall(node, context) {
      const { push, helper, pure } = context;
      const {
        tag,
        props,
        children,
        patchFlag,
        dynamicProps,
        directives,
        isBlock,
        disableTracking,
        isComponent: isComponent2,
      } = node;
      if (directives) {
        push(helper(WITH_DIRECTIVES) + `(`);
      }
      if (isBlock) {
        push(`(${helper(OPEN_BLOCK)}(${disableTracking ? `true` : ``}), `);
      }
      if (pure) {
        push(PURE_ANNOTATION);
      }
      const callHelper = isBlock
        ? getVNodeBlockHelper(context.inSSR, isComponent2)
        : getVNodeHelper(context.inSSR, isComponent2);
      push(helper(callHelper) + `(`, node);
      genNodeList(
        genNullableArgs([tag, props, children, patchFlag, dynamicProps]),
        context,
      );
      push(`)`);
      if (isBlock) {
        push(`)`);
      }
      if (directives) {
        push(`, `);
        genNode(directives, context);
        push(`)`);
      }
    }

    function genNullableArgs(args) {
      let i = args.length;
      while (i--) {
        if (args[i] != null) break;
      }
      return args.slice(0, i + 1).map((arg) => arg || `null`);
    }

    function genCallExpression(node, context) {
      const { push, helper, pure } = context;
      const callee = isString$2(node.callee)
        ? node.callee
        : helper(node.callee);
      if (pure) {
        push(PURE_ANNOTATION);
      }
      push(callee + `(`, node);
      genNodeList(node.arguments, context);
      push(`)`);
    }

    function genObjectExpression(node, context) {
      const { push, indent, deindent, newline } = context;
      const { properties } = node;
      if (!properties.length) {
        push(`{}`, node);
        return;
      }
      const multilines = properties.length > 1 || false;
      push(multilines ? `{` : `{ `);
      multilines && indent();
      for (let i = 0; i < properties.length; i++) {
        const { key, value } = properties[i];
        genExpressionAsPropertyKey(key, context);
        push(`: `);
        genNode(value, context);
        if (i < properties.length - 1) {
          push(`,`);
          newline();
        }
      }
      multilines && deindent();
      push(multilines ? `}` : ` }`);
    }

    function genArrayExpression(node, context) {
      genNodeListAsArray(node.elements, context);
    }

    function genFunctionExpression(node, context) {
      const { push, indent, deindent } = context;
      const { params, returns, body, newline, isSlot } = node;
      if (isSlot) {
        push(`_${helperNameMap[WITH_CTX]}(`);
      }
      push(`(`, node);
      if (isArray$1(params)) {
        genNodeList(params, context);
      } else if (params) {
        genNode(params, context);
      }
      push(`) => `);
      if (newline || body) {
        push(`{`);
        indent();
      }
      if (returns) {
        if (newline) {
          push(`return `);
        }
        if (isArray$1(returns)) {
          genNodeListAsArray(returns, context);
        } else {
          genNode(returns, context);
        }
      } else if (body) {
        genNode(body, context);
      }
      if (newline || body) {
        deindent();
        push(`}`);
      }
      if (isSlot) {
        if (node.isNonScopedSlot) {
          push(`, undefined, true`);
        }
        push(`)`);
      }
    }

    function genConditionalExpression(node, context) {
      const { test, consequent, alternate, newline: needNewline } = node;
      const { push, indent, deindent, newline } = context;
      if (test.type === 4) {
        const needsParens = !isSimpleIdentifier(test.content);
        needsParens && push(`(`);
        genExpression(test, context);
        needsParens && push(`)`);
      } else {
        push(`(`);
        genNode(test, context);
        push(`)`);
      }
      needNewline && indent();
      context.indentLevel++;
      needNewline || push(` `);
      push(`? `);
      genNode(consequent, context);
      context.indentLevel--;
      needNewline && newline();
      needNewline || push(` `);
      push(`: `);
      const isNested = alternate.type === 19;
      if (!isNested) {
        context.indentLevel++;
      }
      genNode(alternate, context);
      if (!isNested) {
        context.indentLevel--;
      }
      needNewline &&
        deindent(
          true,
          /* without newline */
        );
    }

    function genCacheExpression(node, context) {
      const { push, helper, indent, deindent, newline } = context;
      push(`_cache[${node.index}] || (`);
      if (node.isVNode) {
        indent();
        push(`${helper(SET_BLOCK_TRACKING)}(-1),`);
        newline();
      }
      push(`_cache[${node.index}] = `);
      genNode(node.value, context);
      if (node.isVNode) {
        push(`,`);
        newline();
        push(`${helper(SET_BLOCK_TRACKING)}(1),`);
        newline();
        push(`_cache[${node.index}]`);
        deindent();
      }
      push(`)`);
    }
    new RegExp(
      "\\b" +
        "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield"
          .split(",")
          .join("\\b|\\b") +
        "\\b",
    );
    const transformIf = createStructuralDirectiveTransform(
      /^(if|else|else-if)$/,
      (node, dir, context) => {
        return processIf(node, dir, context, (ifNode, branch, isRoot) => {
          const siblings = context.parent.children;
          let i = siblings.indexOf(ifNode);
          let key = 0;
          while (i-- >= 0) {
            const sibling = siblings[i];
            if (sibling && sibling.type === 9) {
              key += sibling.branches.length;
            }
          }
          return () => {
            if (isRoot) {
              ifNode.codegenNode = createCodegenNodeForBranch(
                branch,
                key,
                context,
              );
            } else {
              const parentCondition = getParentCondition(ifNode.codegenNode);
              parentCondition.alternate = createCodegenNodeForBranch(
                branch,
                key + ifNode.branches.length - 1,
                context,
              );
            }
          };
        });
      },
    );

    function processIf(node, dir, context, processCodegen) {
      if (dir.name !== "else" && (!dir.exp || !dir.exp.content.trim())) {
        const loc = dir.exp ? dir.exp.loc : node.loc;
        context.onError(createCompilerError(28, dir.loc));
        dir.exp = createSimpleExpression(`true`, false, loc);
      }
      if (dir.name === "if") {
        const branch = createIfBranch(node, dir);
        const ifNode = {
          type: 9,
          loc: node.loc,
          branches: [branch],
        };
        context.replaceNode(ifNode);
        if (processCodegen) {
          return processCodegen(ifNode, branch, true);
        }
      } else {
        const siblings = context.parent.children;
        let i = siblings.indexOf(node);
        while (i-- >= -1) {
          const sibling = siblings[i];
          if (sibling && sibling.type === 3) {
            context.removeNode(sibling);
            continue;
          }
          if (sibling && sibling.type === 2 && !sibling.content.trim().length) {
            context.removeNode(sibling);
            continue;
          }
          if (sibling && sibling.type === 9) {
            if (
              dir.name === "else-if" &&
              sibling.branches[sibling.branches.length - 1].condition === void 0
            ) {
              context.onError(createCompilerError(30, node.loc));
            }
            context.removeNode();
            const branch = createIfBranch(node, dir);
            sibling.branches.push(branch);
            const onExit =
              processCodegen && processCodegen(sibling, branch, false);
            traverseNode(branch, context);
            if (onExit) onExit();
            context.currentNode = null;
          } else {
            context.onError(createCompilerError(30, node.loc));
          }
          break;
        }
      }
    }

    function createIfBranch(node, dir) {
      const isTemplateIf = node.tagType === 3;
      return {
        type: 10,
        loc: node.loc,
        condition: dir.name === "else" ? void 0 : dir.exp,
        children:
          isTemplateIf && !findDir(node, "for") ? node.children : [node],
        userKey: findProp(node, `key`),
        isTemplateIf,
      };
    }

    function createCodegenNodeForBranch(branch, keyIndex, context) {
      if (branch.condition) {
        return createConditionalExpression(
          branch.condition,
          createChildrenCodegenNode(branch, keyIndex, context),
          // make sure to pass in asBlock: true so that the comment node call
          // closes the current block.
          createCallExpression(context.helper(CREATE_COMMENT), ['""', "true"]),
        );
      } else {
        return createChildrenCodegenNode(branch, keyIndex, context);
      }
    }

    function createChildrenCodegenNode(branch, keyIndex, context) {
      const { helper } = context;
      const keyProperty = createObjectProperty(
        `key`,
        createSimpleExpression(`${keyIndex}`, false, locStub, 2),
      );
      const { children } = branch;
      const firstChild = children[0];
      const needFragmentWrapper =
        children.length !== 1 || firstChild.type !== 1;
      if (needFragmentWrapper) {
        if (children.length === 1 && firstChild.type === 11) {
          const vnodeCall = firstChild.codegenNode;
          injectProp(vnodeCall, keyProperty, context);
          return vnodeCall;
        } else {
          let patchFlag = 64;
          return createVNodeCall(
            context,
            helper(FRAGMENT),
            createObjectExpression([keyProperty]),
            children,
            patchFlag + ``,
            void 0,
            void 0,
            true,
            false,
            false,
            branch.loc,
          );
        }
      } else {
        const ret = firstChild.codegenNode;
        const vnodeCall = getMemoedVNodeCall(ret);
        if (vnodeCall.type === 13) {
          convertToBlock(vnodeCall, context);
        }
        injectProp(vnodeCall, keyProperty, context);
        return ret;
      }
    }

    function getParentCondition(node) {
      while (true) {
        if (node.type === 19) {
          if (node.alternate.type === 19) {
            node = node.alternate;
          } else {
            return node;
          }
        } else if (node.type === 20) {
          node = node.value;
        }
      }
    }
    const transformFor = createStructuralDirectiveTransform(
      "for",
      (node, dir, context) => {
        const { helper, removeHelper } = context;
        return processFor(node, dir, context, (forNode) => {
          const renderExp = createCallExpression(helper(RENDER_LIST), [
            forNode.source,
          ]);
          const isTemplate = isTemplateNode(node);
          const memo = findDir(node, "memo");
          const keyProp = findProp(node, `key`);
          const keyExp =
            keyProp &&
            (keyProp.type === 6
              ? createSimpleExpression(keyProp.value.content, true)
              : keyProp.exp);
          const keyProperty = keyProp
            ? createObjectProperty(`key`, keyExp)
            : null;
          const isStableFragment =
            forNode.source.type === 4 && forNode.source.constType > 0;
          const fragmentFlag = isStableFragment ? 64 : keyProp ? 128 : 256;
          forNode.codegenNode = createVNodeCall(
            context,
            helper(FRAGMENT),
            void 0,
            renderExp,
            fragmentFlag + ``,
            void 0,
            void 0,
            true,
            !isStableFragment,
            false,
            node.loc,
          );
          return () => {
            let childBlock;
            const { children } = forNode;
            const needFragmentWrapper =
              children.length !== 1 || children[0].type !== 1;
            const slotOutlet = isSlotOutlet(node)
              ? node
              : isTemplate &&
                  node.children.length === 1 &&
                  isSlotOutlet(node.children[0])
                ? node.children[0]
                : null;
            if (slotOutlet) {
              childBlock = slotOutlet.codegenNode;
              if (isTemplate && keyProperty) {
                injectProp(childBlock, keyProperty, context);
              }
            } else if (needFragmentWrapper) {
              childBlock = createVNodeCall(
                context,
                helper(FRAGMENT),
                keyProperty ? createObjectExpression([keyProperty]) : void 0,
                node.children,
                `64`,
                void 0,
                void 0,
                true,
                void 0,
                false,
                /* isComponent */
              );
            } else {
              childBlock = children[0].codegenNode;
              if (isTemplate && keyProperty) {
                injectProp(childBlock, keyProperty, context);
              }
              if (childBlock.isBlock !== !isStableFragment) {
                if (childBlock.isBlock) {
                  removeHelper(OPEN_BLOCK);
                  removeHelper(
                    getVNodeBlockHelper(context.inSSR, childBlock.isComponent),
                  );
                } else {
                  removeHelper(
                    getVNodeHelper(context.inSSR, childBlock.isComponent),
                  );
                }
              }
              childBlock.isBlock = !isStableFragment;
              if (childBlock.isBlock) {
                helper(OPEN_BLOCK);
                helper(
                  getVNodeBlockHelper(context.inSSR, childBlock.isComponent),
                );
              } else {
                helper(getVNodeHelper(context.inSSR, childBlock.isComponent));
              }
            }
            if (memo) {
              const loop = createFunctionExpression(
                createForLoopParams(forNode.parseResult, [
                  createSimpleExpression(`_cached`),
                ]),
              );
              loop.body = createBlockStatement([
                createCompoundExpression([`const _memo = (`, memo.exp, `)`]),
                createCompoundExpression([
                  `if (_cached`,
                  ...(keyExp ? [` && _cached.key === `, keyExp] : []),
                  ` && ${context.helperString(
                    IS_MEMO_SAME,
                  )}(_cached, _memo)) return _cached`,
                ]),
                createCompoundExpression([`const _item = `, childBlock]),
                createSimpleExpression(`_item.memo = _memo`),
                createSimpleExpression(`return _item`),
              ]);
              renderExp.arguments.push(
                loop,
                createSimpleExpression(`_cache`),
                createSimpleExpression(String(context.cached++)),
              );
            } else {
              renderExp.arguments.push(
                createFunctionExpression(
                  createForLoopParams(forNode.parseResult),
                  childBlock,
                  true,
                  /* force newline */
                ),
              );
            }
          };
        });
      },
    );

    function processFor(node, dir, context, processCodegen) {
      if (!dir.exp) {
        context.onError(createCompilerError(31, dir.loc));
        return;
      }
      const parseResult = parseForExpression(
        // can only be simple expression because vFor transform is applied
        // before expression transform.
        dir.exp,
      );
      if (!parseResult) {
        context.onError(createCompilerError(32, dir.loc));
        return;
      }
      const { addIdentifiers, removeIdentifiers, scopes } = context;
      const { source, value, key, index } = parseResult;
      const forNode = {
        type: 11,
        loc: dir.loc,
        source,
        valueAlias: value,
        keyAlias: key,
        objectIndexAlias: index,
        parseResult,
        children: isTemplateNode(node) ? node.children : [node],
      };
      context.replaceNode(forNode);
      scopes.vFor++;
      const onExit = processCodegen && processCodegen(forNode);
      return () => {
        scopes.vFor--;
        if (onExit) onExit();
      };
    }
    const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    const forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    const stripParensRE = /^\(|\)$/g;

    function parseForExpression(input, context) {
      const loc = input.loc;
      const exp = input.content;
      const inMatch = exp.match(forAliasRE);
      if (!inMatch) return;
      const [, LHS, RHS] = inMatch;
      const result = {
        source: createAliasExpression(
          loc,
          RHS.trim(),
          exp.indexOf(RHS, LHS.length),
        ),
        value: void 0,
        key: void 0,
        index: void 0,
      };
      let valueContent = LHS.trim().replace(stripParensRE, "").trim();
      const trimmedOffset = LHS.indexOf(valueContent);
      const iteratorMatch = valueContent.match(forIteratorRE);
      if (iteratorMatch) {
        valueContent = valueContent.replace(forIteratorRE, "").trim();
        const keyContent = iteratorMatch[1].trim();
        let keyOffset;
        if (keyContent) {
          keyOffset = exp.indexOf(
            keyContent,
            trimmedOffset + valueContent.length,
          );
          result.key = createAliasExpression(loc, keyContent, keyOffset);
        }
        if (iteratorMatch[2]) {
          const indexContent = iteratorMatch[2].trim();
          if (indexContent) {
            result.index = createAliasExpression(
              loc,
              indexContent,
              exp.indexOf(
                indexContent,
                result.key
                  ? keyOffset + keyContent.length
                  : trimmedOffset + valueContent.length,
              ),
            );
          }
        }
      }
      if (valueContent) {
        result.value = createAliasExpression(loc, valueContent, trimmedOffset);
      }
      return result;
    }

    function createAliasExpression(range, content, offset) {
      return createSimpleExpression(
        content,
        false,
        getInnerRange(range, offset, content.length),
      );
    }

    function createForLoopParams({ value, key, index }, memoArgs = []) {
      return createParamsList([value, key, index, ...memoArgs]);
    }

    function createParamsList(args) {
      let i = args.length;
      while (i--) {
        if (args[i]) break;
      }
      return args
        .slice(0, i + 1)
        .map(
          (arg, i2) => arg || createSimpleExpression(`_`.repeat(i2 + 1), false),
        );
    }
    const defaultFallback = createSimpleExpression(`undefined`, false);
    const trackSlotScopes = (node, context) => {
      if (node.type === 1 && (node.tagType === 1 || node.tagType === 3)) {
        const vSlot = findDir(node, "slot");
        if (vSlot) {
          vSlot.exp;
          context.scopes.vSlot++;
          return () => {
            context.scopes.vSlot--;
          };
        }
      }
    };
    const buildClientSlotFn = (props, children, loc) =>
      createFunctionExpression(
        props,
        children,
        false,
        true,
        children.length ? children[0].loc : loc,
      );

    function buildSlots(node, context, buildSlotFn = buildClientSlotFn) {
      context.helper(WITH_CTX);
      const { children, loc } = node;
      const slotsProperties = [];
      const dynamicSlots = [];
      let hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0;
      const onComponentSlot = findDir(node, "slot", true);
      if (onComponentSlot) {
        const { arg, exp } = onComponentSlot;
        if (arg && !isStaticExp(arg)) {
          hasDynamicSlots = true;
        }
        slotsProperties.push(
          createObjectProperty(
            arg || createSimpleExpression("default", true),
            buildSlotFn(exp, children, loc),
          ),
        );
      }
      let hasTemplateSlots = false;
      let hasNamedDefaultSlot = false;
      const implicitDefaultChildren = [];
      const seenSlotNames = /* @__PURE__ */ new Set();
      let conditionalBranchIndex = 0;
      for (let i = 0; i < children.length; i++) {
        const slotElement = children[i];
        let slotDir;
        if (
          !isTemplateNode(slotElement) ||
          !(slotDir = findDir(slotElement, "slot", true))
        ) {
          if (slotElement.type !== 3) {
            implicitDefaultChildren.push(slotElement);
          }
          continue;
        }
        if (onComponentSlot) {
          context.onError(createCompilerError(37, slotDir.loc));
          break;
        }
        hasTemplateSlots = true;
        const { children: slotChildren, loc: slotLoc } = slotElement;
        const {
          arg: slotName = createSimpleExpression(`default`, true),
          exp: slotProps,
          loc: dirLoc,
        } = slotDir;
        let staticSlotName;
        if (isStaticExp(slotName)) {
          staticSlotName = slotName ? slotName.content : `default`;
        } else {
          hasDynamicSlots = true;
        }
        const slotFunction = buildSlotFn(slotProps, slotChildren, slotLoc);
        let vIf;
        let vElse;
        let vFor;
        if ((vIf = findDir(slotElement, "if"))) {
          hasDynamicSlots = true;
          dynamicSlots.push(
            createConditionalExpression(
              vIf.exp,
              buildDynamicSlot(
                slotName,
                slotFunction,
                conditionalBranchIndex++,
              ),
              defaultFallback,
            ),
          );
        } else if (
          (vElse = findDir(
            slotElement,
            /^else(-if)?$/,
            true,
            /* allowEmpty */
          ))
        ) {
          let j = i;
          let prev;
          while (j--) {
            prev = children[j];
            if (prev.type !== 3) {
              break;
            }
          }
          if (prev && isTemplateNode(prev) && findDir(prev, "if")) {
            children.splice(i, 1);
            i--;
            let conditional = dynamicSlots[dynamicSlots.length - 1];
            while (conditional.alternate.type === 19) {
              conditional = conditional.alternate;
            }
            conditional.alternate = vElse.exp
              ? createConditionalExpression(
                  vElse.exp,
                  buildDynamicSlot(
                    slotName,
                    slotFunction,
                    conditionalBranchIndex++,
                  ),
                  defaultFallback,
                )
              : buildDynamicSlot(
                  slotName,
                  slotFunction,
                  conditionalBranchIndex++,
                );
          } else {
            context.onError(createCompilerError(30, vElse.loc));
          }
        } else if ((vFor = findDir(slotElement, "for"))) {
          hasDynamicSlots = true;
          const parseResult = vFor.parseResult || parseForExpression(vFor.exp);
          if (parseResult) {
            dynamicSlots.push(
              createCallExpression(context.helper(RENDER_LIST), [
                parseResult.source,
                createFunctionExpression(
                  createForLoopParams(parseResult),
                  buildDynamicSlot(slotName, slotFunction),
                  true,
                  /* force newline */
                ),
              ]),
            );
          } else {
            context.onError(createCompilerError(32, vFor.loc));
          }
        } else {
          if (staticSlotName) {
            if (seenSlotNames.has(staticSlotName)) {
              context.onError(createCompilerError(38, dirLoc));
              continue;
            }
            seenSlotNames.add(staticSlotName);
            if (staticSlotName === "default") {
              hasNamedDefaultSlot = true;
            }
          }
          slotsProperties.push(createObjectProperty(slotName, slotFunction));
        }
      }
      if (!onComponentSlot) {
        const buildDefaultSlotProperty = (props, children2) => {
          const fn = buildSlotFn(props, children2, loc);
          if (context.compatConfig) {
            fn.isNonScopedSlot = true;
          }
          return createObjectProperty(`default`, fn);
        };
        if (!hasTemplateSlots) {
          slotsProperties.push(buildDefaultSlotProperty(void 0, children));
        } else if (
          implicitDefaultChildren.length && // #3766
          // with whitespace: 'preserve', whitespaces between slots will end up in
          // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
          implicitDefaultChildren.some((node2) => isNonWhitespaceContent(node2))
        ) {
          if (hasNamedDefaultSlot) {
            context.onError(
              createCompilerError(39, implicitDefaultChildren[0].loc),
            );
          } else {
            slotsProperties.push(
              buildDefaultSlotProperty(void 0, implicitDefaultChildren),
            );
          }
        }
      }
      const slotFlag = hasDynamicSlots
        ? 2
        : hasForwardedSlots(node.children)
          ? 3
          : 1;
      let slots = createObjectExpression(
        slotsProperties.concat(
          createObjectProperty(
            `_`,
            // 2 = compiled but dynamic = can skip normalization, but must run diff
            // 1 = compiled and static = can skip normalization AND diff as optimized
            createSimpleExpression(slotFlag + ``, false),
          ),
        ),
        loc,
      );
      if (dynamicSlots.length) {
        slots = createCallExpression(context.helper(CREATE_SLOTS), [
          slots,
          createArrayExpression(dynamicSlots),
        ]);
      }
      return {
        slots,
        hasDynamicSlots,
      };
    }

    function buildDynamicSlot(name, fn, index) {
      const props = [
        createObjectProperty(`name`, name),
        createObjectProperty(`fn`, fn),
      ];
      if (index != null) {
        props.push(
          createObjectProperty(
            `key`,
            createSimpleExpression(String(index), true),
          ),
        );
      }
      return createObjectExpression(props);
    }

    function hasForwardedSlots(children) {
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        switch (child.type) {
          case 1:
            if (child.tagType === 2 || hasForwardedSlots(child.children)) {
              return true;
            }
            break;
          case 9:
            if (hasForwardedSlots(child.branches)) return true;
            break;
          case 10:
          case 11:
            if (hasForwardedSlots(child.children)) return true;
            break;
        }
      }
      return false;
    }

    function isNonWhitespaceContent(node) {
      if (node.type !== 2 && node.type !== 12) return true;
      return node.type === 2
        ? !!node.content.trim()
        : isNonWhitespaceContent(node.content);
    }
    const directiveImportMap = /* @__PURE__ */ new WeakMap();
    const transformElement = (node, context) => {
      return function postTransformElement() {
        node = context.currentNode;
        if (!(node.type === 1 && (node.tagType === 0 || node.tagType === 1))) {
          return;
        }
        const { tag, props } = node;
        const isComponent2 = node.tagType === 1;
        let vnodeTag = isComponent2
          ? resolveComponentType(node, context)
          : `"${tag}"`;
        const isDynamicComponent =
          isObject$1(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
        let vnodeProps;
        let vnodeChildren;
        let vnodePatchFlag;
        let patchFlag = 0;
        let vnodeDynamicProps;
        let dynamicPropNames;
        let vnodeDirectives;
        let shouldUseBlock =
          // dynamic component may resolve to plain elements
          isDynamicComponent ||
          vnodeTag === TELEPORT ||
          vnodeTag === SUSPENSE ||
          (!isComponent2 && // <svg> and <foreignObject> must be forced into blocks so that block
            // updates inside get proper isSVG flag at runtime. (#639, #643)
            // This is technically web-specific, but splitting the logic out of core
            // leads to too much unnecessary complexity.
            (tag === "svg" || tag === "foreignObject"));
        if (props.length > 0) {
          const propsBuildResult = buildProps(
            node,
            context,
            void 0,
            isComponent2,
            isDynamicComponent,
          );
          vnodeProps = propsBuildResult.props;
          patchFlag = propsBuildResult.patchFlag;
          dynamicPropNames = propsBuildResult.dynamicPropNames;
          const directives = propsBuildResult.directives;
          vnodeDirectives =
            directives && directives.length
              ? createArrayExpression(
                  directives.map((dir) => buildDirectiveArgs(dir, context)),
                )
              : void 0;
          if (propsBuildResult.shouldUseBlock) {
            shouldUseBlock = true;
          }
        }
        if (node.children.length > 0) {
          if (vnodeTag === KEEP_ALIVE) {
            shouldUseBlock = true;
            patchFlag |= 1024;
          }
          const shouldBuildAsSlots =
            isComponent2 && // Teleport is not a real component and has dedicated runtime handling
            vnodeTag !== TELEPORT && // explained above.
            vnodeTag !== KEEP_ALIVE;
          if (shouldBuildAsSlots) {
            const { slots, hasDynamicSlots } = buildSlots(node, context);
            vnodeChildren = slots;
            if (hasDynamicSlots) {
              patchFlag |= 1024;
            }
          } else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
            const child = node.children[0];
            const type = child.type;
            const hasDynamicTextChild = type === 5 || type === 8;
            if (hasDynamicTextChild && getConstantType(child, context) === 0) {
              patchFlag |= 1;
            }
            if (hasDynamicTextChild || type === 2) {
              vnodeChildren = child;
            } else {
              vnodeChildren = node.children;
            }
          } else {
            vnodeChildren = node.children;
          }
        }
        if (patchFlag !== 0) {
          {
            vnodePatchFlag = String(patchFlag);
          }
          if (dynamicPropNames && dynamicPropNames.length) {
            vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
          }
        }
        node.codegenNode = createVNodeCall(
          context,
          vnodeTag,
          vnodeProps,
          vnodeChildren,
          vnodePatchFlag,
          vnodeDynamicProps,
          vnodeDirectives,
          !!shouldUseBlock,
          false,
          isComponent2,
          node.loc,
        );
      };
    };

    function resolveComponentType(node, context, ssr = false) {
      let { tag } = node;
      const isExplicitDynamic = isComponentTag(tag);
      const isProp = findProp(node, "is");
      if (isProp) {
        if (
          isExplicitDynamic ||
          isCompatEnabled("COMPILER_IS_ON_ELEMENT", context)
        ) {
          const exp =
            isProp.type === 6
              ? isProp.value &&
                createSimpleExpression(isProp.value.content, true)
              : isProp.exp;
          if (exp) {
            return createCallExpression(
              context.helper(RESOLVE_DYNAMIC_COMPONENT),
              [exp],
            );
          }
        } else if (
          isProp.type === 6 &&
          isProp.value.content.startsWith("vue:")
        ) {
          tag = isProp.value.content.slice(4);
        }
      }
      const isDir = !isExplicitDynamic && findDir(node, "is");
      if (isDir && isDir.exp) {
        return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [
          isDir.exp,
        ]);
      }
      const builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);
      if (builtIn) {
        if (!ssr) context.helper(builtIn);
        return builtIn;
      }
      context.helper(RESOLVE_COMPONENT);
      context.components.add(tag);
      return toValidAssetId(tag, `component`);
    }

    function buildProps(
      node,
      context,
      props = node.props,
      isComponent2,
      isDynamicComponent,
      ssr = false,
    ) {
      const { tag, loc: elementLoc, children } = node;
      let properties = [];
      const mergeArgs = [];
      const runtimeDirectives = [];
      const hasChildren = children.length > 0;
      let shouldUseBlock = false;
      let patchFlag = 0;
      let hasRef = false;
      let hasClassBinding = false;
      let hasStyleBinding = false;
      let hasHydrationEventBinding = false;
      let hasDynamicKeys = false;
      let hasVnodeHook = false;
      const dynamicPropNames = [];
      const pushMergeArg = (arg) => {
        if (properties.length) {
          mergeArgs.push(
            createObjectExpression(dedupeProperties(properties), elementLoc),
          );
          properties = [];
        }
        if (arg) mergeArgs.push(arg);
      };
      const analyzePatchFlag = ({ key, value }) => {
        if (isStaticExp(key)) {
          const name = key.content;
          const isEventHandler = isOn(name);
          if (
            isEventHandler &&
            (!isComponent2 || isDynamicComponent) && // omit the flag for click handlers because hydration gives click
            // dedicated fast path.
            name.toLowerCase() !== "onclick" && // omit v-model handlers
            name !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
            !isReservedProp(name)
          ) {
            hasHydrationEventBinding = true;
          }
          if (isEventHandler && isReservedProp(name)) {
            hasVnodeHook = true;
          }
          if (
            value.type === 20 ||
            ((value.type === 4 || value.type === 8) &&
              getConstantType(value, context) > 0)
          ) {
            return;
          }
          if (name === "ref") {
            hasRef = true;
          } else if (name === "class") {
            hasClassBinding = true;
          } else if (name === "style") {
            hasStyleBinding = true;
          } else if (name !== "key" && !dynamicPropNames.includes(name)) {
            dynamicPropNames.push(name);
          }
          if (
            isComponent2 &&
            (name === "class" || name === "style") &&
            !dynamicPropNames.includes(name)
          ) {
            dynamicPropNames.push(name);
          }
        } else {
          hasDynamicKeys = true;
        }
      };
      for (let i = 0; i < props.length; i++) {
        const prop = props[i];
        if (prop.type === 6) {
          const { loc, name, value } = prop;
          let isStatic = true;
          if (name === "ref") {
            hasRef = true;
            if (context.scopes.vFor > 0) {
              properties.push(
                createObjectProperty(
                  createSimpleExpression("ref_for", true),
                  createSimpleExpression("true"),
                ),
              );
            }
          }
          if (
            name === "is" &&
            (isComponentTag(tag) ||
              (value && value.content.startsWith("vue:")) ||
              isCompatEnabled("COMPILER_IS_ON_ELEMENT", context))
          ) {
            continue;
          }
          properties.push(
            createObjectProperty(
              createSimpleExpression(
                name,
                true,
                getInnerRange(loc, 0, name.length),
              ),
              createSimpleExpression(
                value ? value.content : "",
                isStatic,
                value ? value.loc : loc,
              ),
            ),
          );
        } else {
          const { name, arg, exp, loc } = prop;
          const isVBind = name === "bind";
          const isVOn = name === "on";
          if (name === "slot") {
            if (!isComponent2) {
              context.onError(createCompilerError(40, loc));
            }
            continue;
          }
          if (name === "once" || name === "memo") {
            continue;
          }
          if (
            name === "is" ||
            (isVBind &&
              isStaticArgOf(arg, "is") &&
              (isComponentTag(tag) ||
                isCompatEnabled("COMPILER_IS_ON_ELEMENT", context)))
          ) {
            continue;
          }
          if (isVOn && ssr) {
            continue;
          }
          if (
            // #938: elements with dynamic keys should be forced into blocks
            (isVBind && isStaticArgOf(arg, "key")) || // inline before-update hooks need to force block so that it is invoked
            // before children
            (isVOn && hasChildren && isStaticArgOf(arg, "vue:before-update"))
          ) {
            shouldUseBlock = true;
          }
          if (isVBind && isStaticArgOf(arg, "ref") && context.scopes.vFor > 0) {
            properties.push(
              createObjectProperty(
                createSimpleExpression("ref_for", true),
                createSimpleExpression("true"),
              ),
            );
          }
          if (!arg && (isVBind || isVOn)) {
            hasDynamicKeys = true;
            if (exp) {
              if (isVBind) {
                pushMergeArg();
                {
                  if (
                    isCompatEnabled("COMPILER_V_BIND_OBJECT_ORDER", context)
                  ) {
                    mergeArgs.unshift(exp);
                    continue;
                  }
                }
                mergeArgs.push(exp);
              } else {
                pushMergeArg({
                  type: 14,
                  loc,
                  callee: context.helper(TO_HANDLERS),
                  arguments: isComponent2 ? [exp] : [exp, `true`],
                });
              }
            } else {
              context.onError(createCompilerError(isVBind ? 34 : 35, loc));
            }
            continue;
          }
          const directiveTransform = context.directiveTransforms[name];
          if (directiveTransform) {
            const { props: props2, needRuntime } = directiveTransform(
              prop,
              node,
              context,
            );
            !ssr && props2.forEach(analyzePatchFlag);
            if (isVOn && arg && !isStaticExp(arg)) {
              pushMergeArg(createObjectExpression(props2, elementLoc));
            } else {
              properties.push(...props2);
            }
            if (needRuntime) {
              runtimeDirectives.push(prop);
              if (isSymbol(needRuntime)) {
                directiveImportMap.set(prop, needRuntime);
              }
            }
          } else if (!isBuiltInDirective(name)) {
            runtimeDirectives.push(prop);
            if (hasChildren) {
              shouldUseBlock = true;
            }
          }
        }
      }
      let propsExpression = void 0;
      if (mergeArgs.length) {
        pushMergeArg();
        if (mergeArgs.length > 1) {
          propsExpression = createCallExpression(
            context.helper(MERGE_PROPS),
            mergeArgs,
            elementLoc,
          );
        } else {
          propsExpression = mergeArgs[0];
        }
      } else if (properties.length) {
        propsExpression = createObjectExpression(
          dedupeProperties(properties),
          elementLoc,
        );
      }
      if (hasDynamicKeys) {
        patchFlag |= 16;
      } else {
        if (hasClassBinding && !isComponent2) {
          patchFlag |= 2;
        }
        if (hasStyleBinding && !isComponent2) {
          patchFlag |= 4;
        }
        if (dynamicPropNames.length) {
          patchFlag |= 8;
        }
        if (hasHydrationEventBinding) {
          patchFlag |= 32;
        }
      }
      if (
        !shouldUseBlock &&
        (patchFlag === 0 || patchFlag === 32) &&
        (hasRef || hasVnodeHook || runtimeDirectives.length > 0)
      ) {
        patchFlag |= 512;
      }
      if (!context.inSSR && propsExpression) {
        switch (propsExpression.type) {
          case 15:
            let classKeyIndex = -1;
            let styleKeyIndex = -1;
            let hasDynamicKey = false;
            for (let i = 0; i < propsExpression.properties.length; i++) {
              const key = propsExpression.properties[i].key;
              if (isStaticExp(key)) {
                if (key.content === "class") {
                  classKeyIndex = i;
                } else if (key.content === "style") {
                  styleKeyIndex = i;
                }
              } else if (!key.isHandlerKey) {
                hasDynamicKey = true;
              }
            }
            const classProp = propsExpression.properties[classKeyIndex];
            const styleProp = propsExpression.properties[styleKeyIndex];
            if (!hasDynamicKey) {
              if (classProp && !isStaticExp(classProp.value)) {
                classProp.value = createCallExpression(
                  context.helper(NORMALIZE_CLASS),
                  [classProp.value],
                );
              }
              if (
                styleProp && // the static style is compiled into an object,
                // so use `hasStyleBinding` to ensure that it is a dynamic style binding
                (hasStyleBinding ||
                  (styleProp.value.type === 4 &&
                    styleProp.value.content.trim()[0] === `[`) || // v-bind:style and style both exist,
                  // v-bind:style with static literal object
                  styleProp.value.type === 17)
              ) {
                styleProp.value = createCallExpression(
                  context.helper(NORMALIZE_STYLE),
                  [styleProp.value],
                );
              }
            } else {
              propsExpression = createCallExpression(
                context.helper(NORMALIZE_PROPS),
                [propsExpression],
              );
            }
            break;
          case 14:
            break;
          default:
            propsExpression = createCallExpression(
              context.helper(NORMALIZE_PROPS),
              [
                createCallExpression(context.helper(GUARD_REACTIVE_PROPS), [
                  propsExpression,
                ]),
              ],
            );
            break;
        }
      }
      return {
        props: propsExpression,
        directives: runtimeDirectives,
        patchFlag,
        dynamicPropNames,
        shouldUseBlock,
      };
    }

    function dedupeProperties(properties) {
      const knownProps = /* @__PURE__ */ new Map();
      const deduped = [];
      for (let i = 0; i < properties.length; i++) {
        const prop = properties[i];
        if (prop.key.type === 8 || !prop.key.isStatic) {
          deduped.push(prop);
          continue;
        }
        const name = prop.key.content;
        const existing = knownProps.get(name);
        if (existing) {
          if (name === "style" || name === "class" || isOn(name)) {
            mergeAsArray(existing, prop);
          }
        } else {
          knownProps.set(name, prop);
          deduped.push(prop);
        }
      }
      return deduped;
    }

    function mergeAsArray(existing, incoming) {
      if (existing.value.type === 17) {
        existing.value.elements.push(incoming.value);
      } else {
        existing.value = createArrayExpression(
          [existing.value, incoming.value],
          existing.loc,
        );
      }
    }

    function buildDirectiveArgs(dir, context) {
      const dirArgs = [];
      const runtime = directiveImportMap.get(dir);
      if (runtime) {
        dirArgs.push(context.helperString(runtime));
      } else {
        {
          context.helper(RESOLVE_DIRECTIVE);
          context.directives.add(dir.name);
          dirArgs.push(toValidAssetId(dir.name, `directive`));
        }
      }
      const { loc } = dir;
      if (dir.exp) dirArgs.push(dir.exp);
      if (dir.arg) {
        if (!dir.exp) {
          dirArgs.push(`void 0`);
        }
        dirArgs.push(dir.arg);
      }
      if (Object.keys(dir.modifiers).length) {
        if (!dir.arg) {
          if (!dir.exp) {
            dirArgs.push(`void 0`);
          }
          dirArgs.push(`void 0`);
        }
        const trueExpression = createSimpleExpression(`true`, false, loc);
        dirArgs.push(
          createObjectExpression(
            dir.modifiers.map((modifier) =>
              createObjectProperty(modifier, trueExpression),
            ),
            loc,
          ),
        );
      }
      return createArrayExpression(dirArgs, dir.loc);
    }

    function stringifyDynamicPropNames(props) {
      let propsNamesString = `[`;
      for (let i = 0, l = props.length; i < l; i++) {
        propsNamesString += JSON.stringify(props[i]);
        if (i < l - 1) propsNamesString += ", ";
      }
      return propsNamesString + `]`;
    }

    function isComponentTag(tag) {
      return tag === "component" || tag === "Component";
    }
    const transformSlotOutlet = (node, context) => {
      if (isSlotOutlet(node)) {
        const { children, loc } = node;
        const { slotName, slotProps } = processSlotOutlet(node, context);
        const slotArgs = [
          context.prefixIdentifiers ? `_ctx.$slots` : `$slots`,
          slotName,
          "{}",
          "undefined",
          "true",
        ];
        let expectedLen = 2;
        if (slotProps) {
          slotArgs[2] = slotProps;
          expectedLen = 3;
        }
        if (children.length) {
          slotArgs[3] = createFunctionExpression(
            [],
            children,
            false,
            false,
            loc,
          );
          expectedLen = 4;
        }
        if (context.scopeId && !context.slotted) {
          expectedLen = 5;
        }
        slotArgs.splice(expectedLen);
        node.codegenNode = createCallExpression(
          context.helper(RENDER_SLOT),
          slotArgs,
          loc,
        );
      }
    };

    function processSlotOutlet(node, context) {
      let slotName = `"default"`;
      let slotProps = void 0;
      const nonNameProps = [];
      for (let i = 0; i < node.props.length; i++) {
        const p2 = node.props[i];
        if (p2.type === 6) {
          if (p2.value) {
            if (p2.name === "name") {
              slotName = JSON.stringify(p2.value.content);
            } else {
              p2.name = camelize(p2.name);
              nonNameProps.push(p2);
            }
          }
        } else {
          if (p2.name === "bind" && isStaticArgOf(p2.arg, "name")) {
            if (p2.exp) slotName = p2.exp;
          } else {
            if (p2.name === "bind" && p2.arg && isStaticExp(p2.arg)) {
              p2.arg.content = camelize(p2.arg.content);
            }
            nonNameProps.push(p2);
          }
        }
      }
      if (nonNameProps.length > 0) {
        const { props, directives } = buildProps(
          node,
          context,
          nonNameProps,
          false,
          false,
        );
        slotProps = props;
        if (directives.length) {
          context.onError(createCompilerError(36, directives[0].loc));
        }
      }
      return {
        slotName,
        slotProps,
      };
    }
    const fnExpRE =
      /^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/;
    const transformOn$1 = (dir, node, context, augmentor) => {
      const { loc, modifiers, arg } = dir;
      if (!dir.exp && !modifiers.length) {
        context.onError(createCompilerError(35, loc));
      }
      let eventName;
      if (arg.type === 4) {
        if (arg.isStatic) {
          let rawName = arg.content;
          if (rawName.startsWith("vue:")) {
            rawName = `vnode-${rawName.slice(4)}`;
          }
          const eventString =
            node.tagType !== 0 ||
            rawName.startsWith("vnode") ||
            !/[A-Z]/.test(rawName)
              ? // for non-element and vnode lifecycle event listeners, auto convert
                // it to camelCase. See issue #2249
                toHandlerKey(camelize(rawName))
              : // preserve case for plain element listeners that have uppercase
                // letters, as these may be custom elements' custom events
                `on:${rawName}`;
          eventName = createSimpleExpression(eventString, true, arg.loc);
        } else {
          eventName = createCompoundExpression([
            `${context.helperString(TO_HANDLER_KEY)}(`,
            arg,
            `)`,
          ]);
        }
      } else {
        eventName = arg;
        eventName.children.unshift(`${context.helperString(TO_HANDLER_KEY)}(`);
        eventName.children.push(`)`);
      }
      let exp = dir.exp;
      if (exp && !exp.content.trim()) {
        exp = void 0;
      }
      let shouldCache = context.cacheHandlers && !exp && !context.inVOnce;
      if (exp) {
        const isMemberExp = isMemberExpression(exp.content);
        const isInlineStatement = !(isMemberExp || fnExpRE.test(exp.content));
        const hasMultipleStatements = exp.content.includes(`;`);
        if (isInlineStatement || (shouldCache && isMemberExp)) {
          exp = createCompoundExpression([
            `${isInlineStatement ? `$event` : `${``}(...args)`} => ${hasMultipleStatements ? `{` : `(`}`,
            exp,
            hasMultipleStatements ? `}` : `)`,
          ]);
        }
      }
      let ret = {
        props: [
          createObjectProperty(
            eventName,
            exp || createSimpleExpression(`() => {}`, false, loc),
          ),
        ],
      };
      if (augmentor) {
        ret = augmentor(ret);
      }
      if (shouldCache) {
        ret.props[0].value = context.cache(ret.props[0].value);
      }
      ret.props.forEach((p2) => (p2.key.isHandlerKey = true));
      return ret;
    };
    const transformBind = (dir, _node, context) => {
      const { exp, modifiers, loc } = dir;
      const arg = dir.arg;
      if (arg.type !== 4) {
        arg.children.unshift(`(`);
        arg.children.push(`) || ""`);
      } else if (!arg.isStatic) {
        arg.content = `${arg.content} || ""`;
      }
      if (modifiers.includes("camel")) {
        if (arg.type === 4) {
          if (arg.isStatic) {
            arg.content = camelize(arg.content);
          } else {
            arg.content = `${context.helperString(CAMELIZE)}(${arg.content})`;
          }
        } else {
          arg.children.unshift(`${context.helperString(CAMELIZE)}(`);
          arg.children.push(`)`);
        }
      }
      if (!context.inSSR) {
        if (modifiers.includes("prop")) {
          injectPrefix(arg, ".");
        }
        if (modifiers.includes("attr")) {
          injectPrefix(arg, "^");
        }
      }
      if (!exp || (exp.type === 4 && !exp.content.trim())) {
        context.onError(createCompilerError(34, loc));
        return {
          props: [
            createObjectProperty(arg, createSimpleExpression("", true, loc)),
          ],
        };
      }
      return {
        props: [createObjectProperty(arg, exp)],
      };
    };
    const injectPrefix = (arg, prefix) => {
      if (arg.type === 4) {
        if (arg.isStatic) {
          arg.content = prefix + arg.content;
        } else {
          arg.content = `\`${prefix}\${${arg.content}}\``;
        }
      } else {
        arg.children.unshift(`'${prefix}' + (`);
        arg.children.push(`)`);
      }
    };
    const transformText = (node, context) => {
      if (
        node.type === 0 ||
        node.type === 1 ||
        node.type === 11 ||
        node.type === 10
      ) {
        return () => {
          const children = node.children;
          let currentContainer = void 0;
          let hasText = false;
          for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (isText$1(child)) {
              hasText = true;
              for (let j = i + 1; j < children.length; j++) {
                const next = children[j];
                if (isText$1(next)) {
                  if (!currentContainer) {
                    currentContainer = children[i] = createCompoundExpression(
                      [child],
                      child.loc,
                    );
                  }
                  currentContainer.children.push(` + `, next);
                  children.splice(j, 1);
                  j--;
                } else {
                  currentContainer = void 0;
                  break;
                }
              }
            }
          }
          if (
            !hasText || // if this is a plain element with a single text child, leave it
            // as-is since the runtime has dedicated fast path for this by directly
            // setting textContent of the element.
            // for component root it's always normalized anyway.
            (children.length === 1 &&
              (node.type === 0 ||
                (node.type === 1 &&
                  node.tagType === 0 && // #3756
                  // custom directives can potentially add DOM elements arbitrarily,
                  // we need to avoid setting textContent of the element at runtime
                  // to avoid accidentally overwriting the DOM elements added
                  // by the user through custom directives.
                  !node.props.find(
                    (p2) =>
                      p2.type === 7 && !context.directiveTransforms[p2.name],
                  ) && // in compat mode, <template> tags with no special directives
                  // will be rendered as a fragment so its children must be
                  // converted into vnodes.
                  !(node.tag === "template"))))
          ) {
            return;
          }
          for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (isText$1(child) || child.type === 8) {
              const callArgs = [];
              if (child.type !== 2 || child.content !== " ") {
                callArgs.push(child);
              }
              if (!context.ssr && getConstantType(child, context) === 0) {
                callArgs.push(`1`);
              }
              children[i] = {
                type: 12,
                content: child,
                loc: child.loc,
                codegenNode: createCallExpression(
                  context.helper(CREATE_TEXT),
                  callArgs,
                ),
              };
            }
          }
        };
      }
    };
    const seen$1 = /* @__PURE__ */ new WeakSet();
    const transformOnce = (node, context) => {
      if (node.type === 1 && findDir(node, "once", true)) {
        if (seen$1.has(node) || context.inVOnce || context.inSSR) {
          return;
        }
        seen$1.add(node);
        context.inVOnce = true;
        context.helper(SET_BLOCK_TRACKING);
        return () => {
          context.inVOnce = false;
          const cur = context.currentNode;
          if (cur.codegenNode) {
            cur.codegenNode = context.cache(
              cur.codegenNode,
              true,
              /* isVNode */
            );
          }
        };
      }
    };
    const transformModel$1 = (dir, node, context) => {
      const { exp, arg } = dir;
      if (!exp) {
        context.onError(createCompilerError(41, dir.loc));
        return createTransformProps();
      }
      const rawExp = exp.loc.source;
      const expString = exp.type === 4 ? exp.content : rawExp;
      const bindingType = context.bindingMetadata[rawExp];
      if (bindingType === "props" || bindingType === "props-aliased") {
        context.onError(createCompilerError(44, exp.loc));
        return createTransformProps();
      }
      const maybeRef = false;
      if (!expString.trim() || (!isMemberExpression(expString) && !maybeRef)) {
        context.onError(createCompilerError(42, exp.loc));
        return createTransformProps();
      }
      const propName = arg ? arg : createSimpleExpression("modelValue", true);
      const eventName = arg
        ? isStaticExp(arg)
          ? `onUpdate:${camelize(arg.content)}`
          : createCompoundExpression(['"onUpdate:" + ', arg])
        : `onUpdate:modelValue`;
      let assignmentExp;
      const eventArg = context.isTS ? `($event: any)` : `$event`;
      {
        assignmentExp = createCompoundExpression([
          `${eventArg} => ((`,
          exp,
          `) = $event)`,
        ]);
      }
      const props = [
        // modelValue: foo
        createObjectProperty(propName, dir.exp),
        // "onUpdate:modelValue": $event => (foo = $event)
        createObjectProperty(eventName, assignmentExp),
      ];
      if (dir.modifiers.length && node.tagType === 1) {
        const modifiers = dir.modifiers
          .map(
            (m) => (isSimpleIdentifier(m) ? m : JSON.stringify(m)) + `: true`,
          )
          .join(`, `);
        const modifiersKey = arg
          ? isStaticExp(arg)
            ? `${arg.content}Modifiers`
            : createCompoundExpression([arg, ' + "Modifiers"'])
          : `modelModifiers`;
        props.push(
          createObjectProperty(
            modifiersKey,
            createSimpleExpression(`{ ${modifiers} }`, false, dir.loc, 2),
          ),
        );
      }
      return createTransformProps(props);
    };

    function createTransformProps(props = []) {
      return {
        props,
      };
    }
    const validDivisionCharRE = /[\w).+\-_$\]]/;
    const transformFilter = (node, context) => {
      if (!isCompatEnabled("COMPILER_FILTER", context)) {
        return;
      }
      if (node.type === 5) {
        rewriteFilter(node.content, context);
      }
      if (node.type === 1) {
        node.props.forEach((prop) => {
          if (prop.type === 7 && prop.name !== "for" && prop.exp) {
            rewriteFilter(prop.exp, context);
          }
        });
      }
    };

    function rewriteFilter(node, context) {
      if (node.type === 4) {
        parseFilter(node, context);
      } else {
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          if (typeof child !== "object") continue;
          if (child.type === 4) {
            parseFilter(child, context);
          } else if (child.type === 8) {
            rewriteFilter(node, context);
          } else if (child.type === 5) {
            rewriteFilter(child.content, context);
          }
        }
      }
    }

    function parseFilter(node, context) {
      const exp = node.content;
      let inSingle = false;
      let inDouble = false;
      let inTemplateString = false;
      let inRegex = false;
      let curly = 0;
      let square = 0;
      let paren = 0;
      let lastFilterIndex = 0;
      let c2,
        prev,
        i,
        expression,
        filters = [];
      for (i = 0; i < exp.length; i++) {
        prev = c2;
        c2 = exp.charCodeAt(i);
        if (inSingle) {
          if (c2 === 39 && prev !== 92) inSingle = false;
        } else if (inDouble) {
          if (c2 === 34 && prev !== 92) inDouble = false;
        } else if (inTemplateString) {
          if (c2 === 96 && prev !== 92) inTemplateString = false;
        } else if (inRegex) {
          if (c2 === 47 && prev !== 92) inRegex = false;
        } else if (
          c2 === 124 && // pipe
          exp.charCodeAt(i + 1) !== 124 &&
          exp.charCodeAt(i - 1) !== 124 &&
          !curly &&
          !square &&
          !paren
        ) {
          if (expression === void 0) {
            lastFilterIndex = i + 1;
            expression = exp.slice(0, i).trim();
          } else {
            pushFilter();
          }
        } else {
          switch (c2) {
            case 34:
              inDouble = true;
              break;
            case 39:
              inSingle = true;
              break;
            case 96:
              inTemplateString = true;
              break;
            case 40:
              paren++;
              break;
            case 41:
              paren--;
              break;
            case 91:
              square++;
              break;
            case 93:
              square--;
              break;
            case 123:
              curly++;
              break;
            case 125:
              curly--;
              break;
          }
          if (c2 === 47) {
            let j = i - 1;
            let p2;
            for (; j >= 0; j--) {
              p2 = exp.charAt(j);
              if (p2 !== " ") break;
            }
            if (!p2 || !validDivisionCharRE.test(p2)) {
              inRegex = true;
            }
          }
        }
      }
      if (expression === void 0) {
        expression = exp.slice(0, i).trim();
      } else if (lastFilterIndex !== 0) {
        pushFilter();
      }

      function pushFilter() {
        filters.push(exp.slice(lastFilterIndex, i).trim());
        lastFilterIndex = i + 1;
      }
      if (filters.length) {
        for (i = 0; i < filters.length; i++) {
          expression = wrapFilter(expression, filters[i], context);
        }
        node.content = expression;
      }
    }

    function wrapFilter(exp, filter, context) {
      context.helper(RESOLVE_FILTER);
      const i = filter.indexOf("(");
      if (i < 0) {
        context.filters.add(filter);
        return `${toValidAssetId(filter, "filter")}(${exp})`;
      } else {
        const name = filter.slice(0, i);
        const args = filter.slice(i + 1);
        context.filters.add(name);
        return `${toValidAssetId(name, "filter")}(${exp}${args !== ")" ? "," + args : args}`;
      }
    }
    const seen = /* @__PURE__ */ new WeakSet();
    const transformMemo = (node, context) => {
      if (node.type === 1) {
        const dir = findDir(node, "memo");
        if (!dir || seen.has(node)) {
          return;
        }
        seen.add(node);
        return () => {
          const codegenNode =
            node.codegenNode || context.currentNode.codegenNode;
          if (codegenNode && codegenNode.type === 13) {
            if (node.tagType !== 1) {
              convertToBlock(codegenNode, context);
            }
            node.codegenNode = createCallExpression(context.helper(WITH_MEMO), [
              dir.exp,
              createFunctionExpression(void 0, codegenNode),
              `_cache`,
              String(context.cached++),
            ]);
          }
        };
      }
    };

    function getBaseTransformPreset(prefixIdentifiers) {
      return [
        [
          transformOnce,
          transformIf,
          transformMemo,
          transformFor,
          ...[transformFilter],
          ...[],
          transformSlotOutlet,
          transformElement,
          trackSlotScopes,
          transformText,
        ],
        {
          on: transformOn$1,
          bind: transformBind,
          model: transformModel$1,
        },
      ];
    }

    function baseCompile(template, options = {}) {
      const onError = options.onError || defaultOnError;
      const isModuleMode = options.mode === "module";
      {
        if (options.prefixIdentifiers === true) {
          onError(createCompilerError(47));
        } else if (isModuleMode) {
          onError(createCompilerError(48));
        }
      }
      const prefixIdentifiers = false;
      if (options.cacheHandlers) {
        onError(createCompilerError(49));
      }
      if (options.scopeId && !isModuleMode) {
        onError(createCompilerError(50));
      }
      const ast = isString$2(template)
        ? baseParse(template, options)
        : template;
      const [nodeTransforms, directiveTransforms] = getBaseTransformPreset();
      transform(
        ast,
        extend$1({}, options, {
          prefixIdentifiers,
          nodeTransforms: [
            ...nodeTransforms,
            ...(options.nodeTransforms || []),
            // user transforms
          ],
          directiveTransforms: extend$1(
            {},
            directiveTransforms,
            options.directiveTransforms || {},
            // user transforms
          ),
        }),
      );
      return generate(
        ast,
        extend$1({}, options, {
          prefixIdentifiers,
        }),
      );
    }
    const noopDirectiveTransform = () => ({
      props: [],
    });
    const V_MODEL_RADIO = Symbol(``);
    const V_MODEL_CHECKBOX = Symbol(``);
    const V_MODEL_TEXT = Symbol(``);
    const V_MODEL_SELECT = Symbol(``);
    const V_MODEL_DYNAMIC = Symbol(``);
    const V_ON_WITH_MODIFIERS = Symbol(``);
    const V_ON_WITH_KEYS = Symbol(``);
    const V_SHOW = Symbol(``);
    const TRANSITION = Symbol(``);
    const TRANSITION_GROUP = Symbol(``);
    registerRuntimeHelpers({
      [V_MODEL_RADIO]: `vModelRadio`,
      [V_MODEL_CHECKBOX]: `vModelCheckbox`,
      [V_MODEL_TEXT]: `vModelText`,
      [V_MODEL_SELECT]: `vModelSelect`,
      [V_MODEL_DYNAMIC]: `vModelDynamic`,
      [V_ON_WITH_MODIFIERS]: `withModifiers`,
      [V_ON_WITH_KEYS]: `withKeys`,
      [V_SHOW]: `vShow`,
      [TRANSITION]: `Transition`,
      [TRANSITION_GROUP]: `TransitionGroup`,
    });
    let decoder;

    function decodeHtmlBrowser(raw, asAttr = false) {
      if (!decoder) {
        decoder = document.createElement("div");
      }
      if (asAttr) {
        decoder.innerHTML = `<div foo="${raw.replace(/"/g, "&quot;")}">`;
        return decoder.children[0].getAttribute("foo");
      } else {
        decoder.innerHTML = raw;
        return decoder.textContent;
      }
    }
    const isRawTextContainer = /* @__PURE__ */ makeMap(
      "style,iframe,script,noscript",
      true,
    );
    const parserOptions = {
      isVoidTag,
      isNativeTag: (tag) => isHTMLTag(tag) || isSVGTag(tag),
      isPreTag: (tag) => tag === "pre",
      decodeEntities: decodeHtmlBrowser,
      isBuiltInComponent: (tag) => {
        if (isBuiltInType(tag, `Transition`)) {
          return TRANSITION;
        } else if (isBuiltInType(tag, `TransitionGroup`)) {
          return TRANSITION_GROUP;
        }
      },
      // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
      getNamespace(tag, parent) {
        let ns = parent ? parent.ns : 0;
        if (parent && ns === 2) {
          if (parent.tag === "annotation-xml") {
            if (tag === "svg") {
              return 1;
            }
            if (
              parent.props.some(
                (a) =>
                  a.type === 6 &&
                  a.name === "encoding" &&
                  a.value != null &&
                  (a.value.content === "text/html" ||
                    a.value.content === "application/xhtml+xml"),
              )
            ) {
              ns = 0;
            }
          } else if (
            /^m(?:[ions]|text)$/.test(parent.tag) &&
            tag !== "mglyph" &&
            tag !== "malignmark"
          ) {
            ns = 0;
          }
        } else if (parent && ns === 1) {
          if (
            parent.tag === "foreignObject" ||
            parent.tag === "desc" ||
            parent.tag === "title"
          ) {
            ns = 0;
          }
        }
        if (ns === 0) {
          if (tag === "svg") {
            return 1;
          }
          if (tag === "math") {
            return 2;
          }
        }
        return ns;
      },
      // https://html.spec.whatwg.org/multipage/parsing.html#parsing-html-fragments
      getTextMode({ tag, ns }) {
        if (ns === 0) {
          if (tag === "textarea" || tag === "title") {
            return 1;
          }
          if (isRawTextContainer(tag)) {
            return 2;
          }
        }
        return 0;
      },
    };
    const transformStyle = (node) => {
      if (node.type === 1) {
        node.props.forEach((p2, i) => {
          if (p2.type === 6 && p2.name === "style" && p2.value) {
            node.props[i] = {
              type: 7,
              name: `bind`,
              arg: createSimpleExpression(`style`, true, p2.loc),
              exp: parseInlineCSS(p2.value.content, p2.loc),
              modifiers: [],
              loc: p2.loc,
            };
          }
        });
      }
    };
    const parseInlineCSS = (cssText, loc) => {
      const normalized = parseStringStyle(cssText);
      return createSimpleExpression(JSON.stringify(normalized), false, loc, 3);
    };

    function createDOMCompilerError(code, loc) {
      return createCompilerError(code, loc);
    }
    const transformVHtml = (dir, node, context) => {
      const { exp, loc } = dir;
      if (!exp) {
        context.onError(createDOMCompilerError(53, loc));
      }
      if (node.children.length) {
        context.onError(createDOMCompilerError(54, loc));
        node.children.length = 0;
      }
      return {
        props: [
          createObjectProperty(
            createSimpleExpression(`innerHTML`, true, loc),
            exp || createSimpleExpression("", true),
          ),
        ],
      };
    };
    const transformVText = (dir, node, context) => {
      const { exp, loc } = dir;
      if (!exp) {
        context.onError(createDOMCompilerError(55, loc));
      }
      if (node.children.length) {
        context.onError(createDOMCompilerError(56, loc));
        node.children.length = 0;
      }
      return {
        props: [
          createObjectProperty(
            createSimpleExpression(`textContent`, true),
            exp
              ? getConstantType(exp, context) > 0
                ? exp
                : createCallExpression(
                    context.helperString(TO_DISPLAY_STRING),
                    [exp],
                    loc,
                  )
              : createSimpleExpression("", true),
          ),
        ],
      };
    };
    const transformModel = (dir, node, context) => {
      const baseResult = transformModel$1(dir, node, context);
      if (!baseResult.props.length || node.tagType === 1) {
        return baseResult;
      }
      if (dir.arg) {
        context.onError(createDOMCompilerError(58, dir.arg.loc));
      }
      const { tag } = node;
      const isCustomElement = context.isCustomElement(tag);
      if (
        tag === "input" ||
        tag === "textarea" ||
        tag === "select" ||
        isCustomElement
      ) {
        let directiveToUse = V_MODEL_TEXT;
        let isInvalidType = false;
        if (tag === "input" || isCustomElement) {
          const type = findProp(node, `type`);
          if (type) {
            if (type.type === 7) {
              directiveToUse = V_MODEL_DYNAMIC;
            } else if (type.value) {
              switch (type.value.content) {
                case "radio":
                  directiveToUse = V_MODEL_RADIO;
                  break;
                case "checkbox":
                  directiveToUse = V_MODEL_CHECKBOX;
                  break;
                case "file":
                  isInvalidType = true;
                  context.onError(createDOMCompilerError(59, dir.loc));
                  break;
              }
            }
          } else if (hasDynamicKeyVBind(node)) {
            directiveToUse = V_MODEL_DYNAMIC;
          } else;
        } else if (tag === "select") {
          directiveToUse = V_MODEL_SELECT;
        } else;
        if (!isInvalidType) {
          baseResult.needRuntime = context.helper(directiveToUse);
        }
      } else {
        context.onError(createDOMCompilerError(57, dir.loc));
      }
      baseResult.props = baseResult.props.filter(
        (p2) => !(p2.key.type === 4 && p2.key.content === "modelValue"),
      );
      return baseResult;
    };
    const isEventOptionModifier =
      /* @__PURE__ */ makeMap(`passive,once,capture`);
    const isNonKeyModifier = /* @__PURE__ */ makeMap(
      // event propagation management
      `stop,prevent,self,ctrl,shift,alt,meta,exact,middle`,
    );
    const maybeKeyModifier = /* @__PURE__ */ makeMap("left,right");
    const isKeyboardEvent = /* @__PURE__ */ makeMap(
      `onkeyup,onkeydown,onkeypress`,
      true,
    );
    const resolveModifiers = (key, modifiers, context, loc) => {
      const keyModifiers = [];
      const nonKeyModifiers = [];
      const eventOptionModifiers = [];
      for (let i = 0; i < modifiers.length; i++) {
        const modifier = modifiers[i];
        if (
          modifier === "native" &&
          checkCompatEnabled("COMPILER_V_ON_NATIVE", context)
        ) {
          eventOptionModifiers.push(modifier);
        } else if (isEventOptionModifier(modifier)) {
          eventOptionModifiers.push(modifier);
        } else {
          if (maybeKeyModifier(modifier)) {
            if (isStaticExp(key)) {
              if (isKeyboardEvent(key.content)) {
                keyModifiers.push(modifier);
              } else {
                nonKeyModifiers.push(modifier);
              }
            } else {
              keyModifiers.push(modifier);
              nonKeyModifiers.push(modifier);
            }
          } else {
            if (isNonKeyModifier(modifier)) {
              nonKeyModifiers.push(modifier);
            } else {
              keyModifiers.push(modifier);
            }
          }
        }
      }
      return {
        keyModifiers,
        nonKeyModifiers,
        eventOptionModifiers,
      };
    };
    const transformClick = (key, event) => {
      const isStaticClick =
        isStaticExp(key) && key.content.toLowerCase() === "onclick";
      return isStaticClick
        ? createSimpleExpression(event, true)
        : key.type !== 4
          ? createCompoundExpression([
              `(`,
              key,
              `) === "onClick" ? "${event}" : (`,
              key,
              `)`,
            ])
          : key;
    };
    const transformOn = (dir, node, context) => {
      return transformOn$1(dir, node, context, (baseResult) => {
        const { modifiers } = dir;
        if (!modifiers.length) return baseResult;
        let { key, value: handlerExp } = baseResult.props[0];
        const { keyModifiers, nonKeyModifiers, eventOptionModifiers } =
          resolveModifiers(key, modifiers, context, dir.loc);
        if (nonKeyModifiers.includes("right")) {
          key = transformClick(key, `onContextmenu`);
        }
        if (nonKeyModifiers.includes("middle")) {
          key = transformClick(key, `onMouseup`);
        }
        if (nonKeyModifiers.length) {
          handlerExp = createCallExpression(
            context.helper(V_ON_WITH_MODIFIERS),
            [handlerExp, JSON.stringify(nonKeyModifiers)],
          );
        }
        if (
          keyModifiers.length && // if event name is dynamic, always wrap with keys guard
          (!isStaticExp(key) || isKeyboardEvent(key.content))
        ) {
          handlerExp = createCallExpression(context.helper(V_ON_WITH_KEYS), [
            handlerExp,
            JSON.stringify(keyModifiers),
          ]);
        }
        if (eventOptionModifiers.length) {
          const modifierPostfix = eventOptionModifiers.map(capitalize).join("");
          key = isStaticExp(key)
            ? createSimpleExpression(`${key.content}${modifierPostfix}`, true)
            : createCompoundExpression([`(`, key, `) + "${modifierPostfix}"`]);
        }
        return {
          props: [createObjectProperty(key, handlerExp)],
        };
      });
    };
    const transformShow = (dir, node, context) => {
      const { exp, loc } = dir;
      if (!exp) {
        context.onError(createDOMCompilerError(61, loc));
      }
      return {
        props: [],
        needRuntime: context.helper(V_SHOW),
      };
    };
    const ignoreSideEffectTags = (node, context) => {
      if (
        node.type === 1 &&
        node.tagType === 0 &&
        (node.tag === "script" || node.tag === "style")
      ) {
        context.removeNode();
      }
    };
    const DOMNodeTransforms = [transformStyle, ...[]];
    const DOMDirectiveTransforms = {
      cloak: noopDirectiveTransform,
      html: transformVHtml,
      text: transformVText,
      model: transformModel,
      // override compiler-core
      on: transformOn,
      // override compiler-core
      show: transformShow,
    };

    function compile$1(template, options = {}) {
      return baseCompile(
        template,
        extend$1({}, parserOptions, options, {
          nodeTransforms: [
            // ignore <script> and <tag>
            // this is not put inside DOMNodeTransforms because that list is used
            // by compiler-ssr to generate vnode fallback branches
            ignoreSideEffectTags,
            ...DOMNodeTransforms,
            ...(options.nodeTransforms || []),
          ],
          directiveTransforms: extend$1(
            {},
            DOMDirectiveTransforms,
            options.directiveTransforms || {},
          ),
          transformHoist: null,
        }),
      );
    }
    const compileCache = /* @__PURE__ */ Object.create(null);

    function compileToFunction(template, options) {
      if (!isString$2(template)) {
        if (template.nodeType) {
          template = template.innerHTML;
        } else {
          return NOOP;
        }
      }
      const key = template;
      const cached = compileCache[key];
      if (cached) {
        return cached;
      }
      if (template[0] === "#") {
        const el = document.querySelector(template);
        template = el ? el.innerHTML : ``;
      }
      const opts = extend$1(
        {
          hoistStatic: true,
          onError: void 0,
          onWarn: NOOP,
        },
        options,
      );
      if (!opts.isCustomElement && typeof customElements !== "undefined") {
        opts.isCustomElement = (tag) => !!customElements.get(tag);
      }
      const { code } = compile$1(template, opts);
      const render2 = new Function("Vue", code)(runtimeDom);
      render2._rc = true;
      return (compileCache[key] = render2);
    }
    registerRuntimeCompiler(compileToFunction);
    const compile = () => {};
    const vue_runtime_esmBundler = /* @__PURE__ */ Object.freeze(
      /* @__PURE__ */ Object.defineProperty(
        {
          __proto__: null,
          BaseTransition,
          BaseTransitionPropsValidators,
          Comment,
          EffectScope,
          Fragment,
          KeepAlive,
          ReactiveEffect,
          Static,
          Suspense,
          Teleport,
          Text,
          Transition,
          TransitionGroup,
          VueElement,
          assertNumber,
          callWithAsyncErrorHandling,
          callWithErrorHandling,
          camelize,
          capitalize,
          cloneVNode,
          compatUtils,
          compile,
          computed,
          createApp,
          createBlock,
          createCommentVNode,
          createElementBlock,
          createElementVNode: createBaseVNode,
          createHydrationRenderer,
          createPropsRestProxy,
          createRenderer,
          createSSRApp,
          createSlots,
          createStaticVNode,
          createTextVNode,
          createVNode,
          customRef,
          defineAsyncComponent,
          defineComponent,
          defineCustomElement,
          defineEmits,
          defineExpose,
          defineModel,
          defineOptions,
          defineProps,
          defineSSRCustomElement,
          defineSlots,
          get devtools() {
            return devtools;
          },
          effect,
          effectScope,
          getCurrentInstance,
          getCurrentScope,
          getTransitionRawChildren,
          guardReactiveProps,
          h: h$1,
          handleError,
          hasInjectionContext,
          hydrate,
          initCustomFormatter,
          initDirectivesForSSR,
          inject,
          isMemoSame,
          isProxy,
          isReactive,
          isReadonly,
          isRef,
          isRuntimeOnly,
          isShallow,
          isVNode,
          markRaw,
          mergeDefaults,
          mergeModels,
          mergeProps,
          nextTick,
          normalizeClass,
          normalizeProps,
          normalizeStyle,
          onActivated,
          onBeforeMount,
          onBeforeUnmount,
          onBeforeUpdate,
          onDeactivated,
          onErrorCaptured,
          onMounted,
          onRenderTracked,
          onRenderTriggered,
          onScopeDispose,
          onServerPrefetch,
          onUnmounted,
          onUpdated,
          openBlock,
          popScopeId,
          provide,
          proxyRefs,
          pushScopeId,
          queuePostFlushCb,
          reactive,
          readonly,
          ref,
          registerRuntimeCompiler,
          render,
          renderList,
          renderSlot,
          resolveComponent,
          resolveDirective,
          resolveDynamicComponent,
          resolveFilter,
          resolveTransitionHooks,
          setBlockTracking,
          setDevtoolsHook,
          setTransitionHooks,
          shallowReactive,
          shallowReadonly,
          shallowRef,
          ssrContextKey,
          ssrUtils,
          stop,
          toDisplayString,
          toHandlerKey,
          toHandlers,
          toRaw,
          toRef,
          toRefs,
          toValue,
          transformVNodeArgs,
          triggerRef,
          unref,
          useAttrs,
          useCssModule,
          useCssVars,
          useModel,
          useSSRContext,
          useSlots,
          useTransitionState,
          vModelCheckbox,
          vModelDynamic,
          vModelRadio,
          vModelSelect,
          vModelText,
          vShow,
          version,
          warn,
          watch,
          watchEffect,
          watchPostEffect,
          watchSyncEffect,
          withAsyncContext,
          withCtx,
          withDefaults,
          withDirectives,
          withKeys,
          withMemo,
          withModifiers,
          withScopeId,
        },
        Symbol.toStringTag,
        {
          value: "Module",
        },
      ),
    );
    var _a;
    const isClient = typeof window !== "undefined";
    const isString$1 = (val) => typeof val === "string";
    const noop$1 = () => {};
    isClient &&
      ((_a = window == null ? void 0 : window.navigator) == null
        ? void 0
        : _a.userAgent) &&
      /iP(ad|hone|od)/.test(window.navigator.userAgent);

    function resolveUnref(r) {
      return typeof r === "function" ? r() : unref(r);
    }

    function identity(arg) {
      return arg;
    }

    function increaseWithUnit(target, delta) {
      var _a2;
      if (typeof target === "number") return target + delta;
      const value =
        ((_a2 = target.match(/^-?[0-9]+\.?[0-9]*/)) == null
          ? void 0
          : _a2[0]) || "";
      const unit = target.slice(value.length);
      const result = parseFloat(value) + delta;
      if (Number.isNaN(result)) return target;
      return result + unit;
    }

    function tryOnScopeDispose(fn) {
      if (getCurrentScope()) {
        onScopeDispose(fn);
        return true;
      }
      return false;
    }

    function resolveRef(r) {
      return typeof r === "function" ? computed(r) : ref(r);
    }

    function tryOnMounted(fn, sync = true) {
      if (getCurrentInstance()) onMounted(fn);
      else if (sync) fn();
      else nextTick(fn);
    }

    function unrefElement(elRef) {
      var _a2;
      const plain = resolveUnref(elRef);
      return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
    }
    const defaultWindow = isClient ? window : void 0;

    function useEventListener(...args) {
      let target;
      let events;
      let listeners;
      let options;
      if (isString$1(args[0]) || Array.isArray(args[0])) {
        [events, listeners, options] = args;
        target = defaultWindow;
      } else {
        [target, events, listeners, options] = args;
      }
      if (!target) return noop$1;
      if (!Array.isArray(events)) events = [events];
      if (!Array.isArray(listeners)) listeners = [listeners];
      const cleanups = [];
      const cleanup = () => {
        cleanups.forEach((fn) => fn());
        cleanups.length = 0;
      };
      const register = (el, event, listener, options2) => {
        el.addEventListener(event, listener, options2);
        return () => el.removeEventListener(event, listener, options2);
      };
      const stopWatch = watch(
        () => [unrefElement(target), resolveUnref(options)],
        ([el, options2]) => {
          cleanup();
          if (!el) return;
          cleanups.push(
            ...events.flatMap((event) => {
              return listeners.map((listener) =>
                register(el, event, listener, options2),
              );
            }),
          );
        },
        {
          immediate: true,
          flush: "post",
        },
      );
      const stop2 = () => {
        stopWatch();
        cleanup();
      };
      tryOnScopeDispose(stop2);
      return stop2;
    }

    function useSupported(callback, sync = false) {
      const isSupported = ref();
      const update = () => (isSupported.value = Boolean(callback()));
      update();
      tryOnMounted(update, sync);
      return isSupported;
    }

    function useMediaQuery(query, options = {}) {
      const { window: window2 = defaultWindow } = options;
      const isSupported = useSupported(
        () =>
          window2 &&
          "matchMedia" in window2 &&
          typeof window2.matchMedia === "function",
      );
      let mediaQuery;
      const matches2 = ref(false);
      const cleanup = () => {
        if (!mediaQuery) return;
        if ("removeEventListener" in mediaQuery)
          mediaQuery.removeEventListener("change", update);
        else mediaQuery.removeListener(update);
      };
      const update = () => {
        if (!isSupported.value) return;
        cleanup();
        mediaQuery = window2.matchMedia(resolveRef(query).value);
        matches2.value = mediaQuery.matches;
        if ("addEventListener" in mediaQuery)
          mediaQuery.addEventListener("change", update);
        else mediaQuery.addListener(update);
      };
      watchEffect(update);
      tryOnScopeDispose(() => cleanup());
      return matches2;
    }
    const breakpointsTailwind = {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    };
    var __defProp$m = Object.defineProperty;
    var __getOwnPropSymbols$o = Object.getOwnPropertySymbols;
    var __hasOwnProp$o = Object.prototype.hasOwnProperty;
    var __propIsEnum$o = Object.prototype.propertyIsEnumerable;
    var __defNormalProp$m = (obj, key, value) =>
      key in obj
        ? __defProp$m(obj, key, {
            enumerable: true,
            configurable: true,
            writable: true,
            value,
          })
        : (obj[key] = value);
    var __spreadValues$m = (a, b) => {
      for (var prop in b || (b = {}))
        if (__hasOwnProp$o.call(b, prop)) __defNormalProp$m(a, prop, b[prop]);
      if (__getOwnPropSymbols$o)
        for (var prop of __getOwnPropSymbols$o(b)) {
          if (__propIsEnum$o.call(b, prop)) __defNormalProp$m(a, prop, b[prop]);
        }
      return a;
    };

    function useBreakpoints(breakpoints, options = {}) {
      function getValue2(k, delta) {
        let v = breakpoints[k];
        if (delta != null) v = increaseWithUnit(v, delta);
        if (typeof v === "number") v = `${v}px`;
        return v;
      }
      const { window: window2 = defaultWindow } = options;

      function match(query) {
        if (!window2) return false;
        return window2.matchMedia(query).matches;
      }
      const greaterOrEqual = (k) => {
        return useMediaQuery(`(min-width: ${getValue2(k)})`, options);
      };
      const shortcutMethods = Object.keys(breakpoints).reduce(
        (shortcuts, k) => {
          Object.defineProperty(shortcuts, k, {
            get: () => greaterOrEqual(k),
            enumerable: true,
            configurable: true,
          });
          return shortcuts;
        },
        {},
      );
      return __spreadValues$m(
        {
          greater(k) {
            return useMediaQuery(`(min-width: ${getValue2(k, 0.1)})`, options);
          },
          greaterOrEqual,
          smaller(k) {
            return useMediaQuery(`(max-width: ${getValue2(k, -0.1)})`, options);
          },
          smallerOrEqual(k) {
            return useMediaQuery(`(max-width: ${getValue2(k)})`, options);
          },
          between(a, b) {
            return useMediaQuery(
              `(min-width: ${getValue2(a)}) and (max-width: ${getValue2(b, -0.1)})`,
              options,
            );
          },
          isGreater(k) {
            return match(`(min-width: ${getValue2(k, 0.1)})`);
          },
          isGreaterOrEqual(k) {
            return match(`(min-width: ${getValue2(k)})`);
          },
          isSmaller(k) {
            return match(`(max-width: ${getValue2(k, -0.1)})`);
          },
          isSmallerOrEqual(k) {
            return match(`(max-width: ${getValue2(k)})`);
          },
          isInBetween(a, b) {
            return match(
              `(min-width: ${getValue2(a)}) and (max-width: ${getValue2(b, -0.1)})`,
            );
          },
        },
        shortcutMethods,
      );
    }
    const _global$1 =
      typeof globalThis !== "undefined"
        ? globalThis
        : typeof window !== "undefined"
          ? window
          : typeof global !== "undefined"
            ? global
            : typeof self !== "undefined"
              ? self
              : {};
    const globalKey = "__vueuse_ssr_handlers__";
    _global$1[globalKey] = _global$1[globalKey] || {};

    function useMouse(options = {}) {
      const {
        type = "page",
        touch = true,
        resetOnTouchEnds = false,
        initialValue = {
          x: 0,
          y: 0,
        },
        window: window2 = defaultWindow,
        eventFilter,
      } = options;
      const x = ref(initialValue.x);
      const y2 = ref(initialValue.y);
      const sourceType = ref(null);
      const mouseHandler = (event) => {
        if (type === "page") {
          x.value = event.pageX;
          y2.value = event.pageY;
        } else if (type === "client") {
          x.value = event.clientX;
          y2.value = event.clientY;
        } else if (type === "movement") {
          x.value = event.movementX;
          y2.value = event.movementY;
        }
        sourceType.value = "mouse";
      };
      const reset = () => {
        x.value = initialValue.x;
        y2.value = initialValue.y;
      };
      const touchHandler = (event) => {
        if (event.touches.length > 0) {
          const touch2 = event.touches[0];
          if (type === "page") {
            x.value = touch2.pageX;
            y2.value = touch2.pageY;
          } else if (type === "client") {
            x.value = touch2.clientX;
            y2.value = touch2.clientY;
          }
          sourceType.value = "touch";
        }
      };
      const mouseHandlerWrapper = (event) => {
        return eventFilter === void 0
          ? mouseHandler(event)
          : eventFilter(() => mouseHandler(event), {});
      };
      const touchHandlerWrapper = (event) => {
        return eventFilter === void 0
          ? touchHandler(event)
          : eventFilter(() => touchHandler(event), {});
      };
      if (window2) {
        useEventListener(window2, "mousemove", mouseHandlerWrapper, {
          passive: true,
        });
        useEventListener(window2, "dragover", mouseHandlerWrapper, {
          passive: true,
        });
        if (touch && type !== "movement") {
          useEventListener(window2, "touchstart", touchHandlerWrapper, {
            passive: true,
          });
          useEventListener(window2, "touchmove", touchHandlerWrapper, {
            passive: true,
          });
          if (resetOnTouchEnds)
            useEventListener(window2, "touchend", reset, {
              passive: true,
            });
        }
      }
      return {
        x,
        y: y2,
        sourceType,
      };
    }

    function useMouseInElement(target, options = {}) {
      const { handleOutside = true, window: window2 = defaultWindow } = options;
      const { x, y: y2, sourceType } = useMouse(options);
      const targetRef = ref(
        target != null
          ? target
          : window2 == null
            ? void 0
            : window2.document.body,
      );
      const elementX = ref(0);
      const elementY = ref(0);
      const elementPositionX = ref(0);
      const elementPositionY = ref(0);
      const elementHeight = ref(0);
      const elementWidth = ref(0);
      const isOutside = ref(true);
      let stop2 = () => {};
      if (window2) {
        stop2 = watch(
          [targetRef, x, y2],
          () => {
            const el = unrefElement(targetRef);
            if (!el) return;
            const { left, top, width, height } = el.getBoundingClientRect();
            elementPositionX.value = left + window2.pageXOffset;
            elementPositionY.value = top + window2.pageYOffset;
            elementHeight.value = height;
            elementWidth.value = width;
            const elX = x.value - elementPositionX.value;
            const elY = y2.value - elementPositionY.value;
            isOutside.value =
              width === 0 ||
              height === 0 ||
              elX < 0 ||
              elY < 0 ||
              elX > width ||
              elY > height;
            if (handleOutside || !isOutside.value) {
              elementX.value = elX;
              elementY.value = elY;
            }
          },
          {
            immediate: true,
          },
        );
        useEventListener(document, "mouseleave", () => {
          isOutside.value = true;
        });
      }
      return {
        x,
        y: y2,
        sourceType,
        elementX,
        elementY,
        elementPositionX,
        elementPositionY,
        elementHeight,
        elementWidth,
        isOutside,
        stop: stop2,
      };
    }
    var SwipeDirection;
    (function (SwipeDirection2) {
      SwipeDirection2["UP"] = "UP";
      SwipeDirection2["RIGHT"] = "RIGHT";
      SwipeDirection2["DOWN"] = "DOWN";
      SwipeDirection2["LEFT"] = "LEFT";
      SwipeDirection2["NONE"] = "NONE";
    })(SwipeDirection || (SwipeDirection = {}));
    var __defProp = Object.defineProperty;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) =>
      key in obj
        ? __defProp(obj, key, {
            enumerable: true,
            configurable: true,
            writable: true,
            value,
          })
        : (obj[key] = value);
    var __spreadValues = (a, b) => {
      for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
      if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
          if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
        }
      return a;
    };
    const _TransitionPresets = {
      easeInSine: [0.12, 0, 0.39, 0],
      easeOutSine: [0.61, 1, 0.88, 1],
      easeInOutSine: [0.37, 0, 0.63, 1],
      easeInQuad: [0.11, 0, 0.5, 0],
      easeOutQuad: [0.5, 1, 0.89, 1],
      easeInOutQuad: [0.45, 0, 0.55, 1],
      easeInCubic: [0.32, 0, 0.67, 0],
      easeOutCubic: [0.33, 1, 0.68, 1],
      easeInOutCubic: [0.65, 0, 0.35, 1],
      easeInQuart: [0.5, 0, 0.75, 0],
      easeOutQuart: [0.25, 1, 0.5, 1],
      easeInOutQuart: [0.76, 0, 0.24, 1],
      easeInQuint: [0.64, 0, 0.78, 0],
      easeOutQuint: [0.22, 1, 0.36, 1],
      easeInOutQuint: [0.83, 0, 0.17, 1],
      easeInExpo: [0.7, 0, 0.84, 0],
      easeOutExpo: [0.16, 1, 0.3, 1],
      easeInOutExpo: [0.87, 0, 0.13, 1],
      easeInCirc: [0.55, 0, 1, 0.45],
      easeOutCirc: [0, 0.55, 0.45, 1],
      easeInOutCirc: [0.85, 0, 0.15, 1],
      easeInBack: [0.36, 0, 0.66, -0.56],
      easeOutBack: [0.34, 1.56, 0.64, 1],
      easeInOutBack: [0.68, -0.6, 0.32, 1.6],
    };
    __spreadValues(
      {
        linear: identity,
      },
      _TransitionPresets,
    );

    function bind(fn, thisArg) {
      return function wrap() {
        return fn.apply(thisArg, arguments);
      };
    }
    const { toString } = Object.prototype;
    const { getPrototypeOf } = Object;
    const kindOf = ((cache) => (thing) => {
      const str = toString.call(thing);
      return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(/* @__PURE__ */ Object.create(null));
    const kindOfTest = (type) => {
      type = type.toLowerCase();
      return (thing) => kindOf(thing) === type;
    };
    const typeOfTest = (type) => (thing) => typeof thing === type;
    const { isArray } = Array;
    const isUndefined = typeOfTest("undefined");

    function isBuffer(val) {
      return (
        val !== null &&
        !isUndefined(val) &&
        val.constructor !== null &&
        !isUndefined(val.constructor) &&
        isFunction(val.constructor.isBuffer) &&
        val.constructor.isBuffer(val)
      );
    }
    const isArrayBuffer = kindOfTest("ArrayBuffer");

    function isArrayBufferView(val) {
      let result;
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
      } else {
        result = val && val.buffer && isArrayBuffer(val.buffer);
      }
      return result;
    }
    const isString = typeOfTest("string");
    const isFunction = typeOfTest("function");
    const isNumber = typeOfTest("number");
    const isObject = (thing) => thing !== null && typeof thing === "object";
    const isBoolean = (thing) => thing === true || thing === false;
    const isPlainObject = (val) => {
      if (kindOf(val) !== "object") {
        return false;
      }
      const prototype2 = getPrototypeOf(val);
      return (
        (prototype2 === null ||
          prototype2 === Object.prototype ||
          Object.getPrototypeOf(prototype2) === null) &&
        !(Symbol.toStringTag in val) &&
        !(Symbol.iterator in val)
      );
    };
    const isDate = kindOfTest("Date");
    const isFile = kindOfTest("File");
    const isBlob = kindOfTest("Blob");
    const isFileList = kindOfTest("FileList");
    const isStream = (val) => isObject(val) && isFunction(val.pipe);
    const isFormData = (thing) => {
      let kind;
      return (
        thing &&
        ((typeof FormData === "function" && thing instanceof FormData) ||
          (isFunction(thing.append) &&
            ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
              (kind === "object" &&
                isFunction(thing.toString) &&
                thing.toString() === "[object FormData]"))))
      );
    };
    const isURLSearchParams = kindOfTest("URLSearchParams");
    const trim = (str) =>
      str.trim
        ? str.trim()
        : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

    function forEach(obj, fn, { allOwnKeys = false } = {}) {
      if (obj === null || typeof obj === "undefined") {
        return;
      }
      let i;
      let l;
      if (typeof obj !== "object") {
        obj = [obj];
      }
      if (isArray(obj)) {
        for (i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        const keys = allOwnKeys
          ? Object.getOwnPropertyNames(obj)
          : Object.keys(obj);
        const len = keys.length;
        let key;
        for (i = 0; i < len; i++) {
          key = keys[i];
          fn.call(null, obj[key], key, obj);
        }
      }
    }

    function findKey(obj, key) {
      key = key.toLowerCase();
      const keys = Object.keys(obj);
      let i = keys.length;
      let _key;
      while (i-- > 0) {
        _key = keys[i];
        if (key === _key.toLowerCase()) {
          return _key;
        }
      }
      return null;
    }
    const _global = (() => {
      if (typeof globalThis !== "undefined") return globalThis;
      return typeof self !== "undefined"
        ? self
        : typeof window !== "undefined"
          ? window
          : global;
    })();
    const isContextDefined = (context) =>
      !isUndefined(context) && context !== _global;

    function merge() {
      const { caseless } = (isContextDefined(this) && this) || {};
      const result = {};
      const assignValue = (val, key) => {
        const targetKey = (caseless && findKey(result, key)) || key;
        if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
          result[targetKey] = merge(result[targetKey], val);
        } else if (isPlainObject(val)) {
          result[targetKey] = merge({}, val);
        } else if (isArray(val)) {
          result[targetKey] = val.slice();
        } else {
          result[targetKey] = val;
        }
      };
      for (let i = 0, l = arguments.length; i < l; i++) {
        arguments[i] && forEach(arguments[i], assignValue);
      }
      return result;
    }
    const extend = (a, b, thisArg, { allOwnKeys } = {}) => {
      forEach(
        b,
        (val, key) => {
          if (thisArg && isFunction(val)) {
            a[key] = bind(val, thisArg);
          } else {
            a[key] = val;
          }
        },
        {
          allOwnKeys,
        },
      );
      return a;
    };
    const stripBOM = (content) => {
      if (content.charCodeAt(0) === 65279) {
        content = content.slice(1);
      }
      return content;
    };
    const inherits = (constructor, superConstructor, props, descriptors2) => {
      constructor.prototype = Object.create(
        superConstructor.prototype,
        descriptors2,
      );
      constructor.prototype.constructor = constructor;
      Object.defineProperty(constructor, "super", {
        value: superConstructor.prototype,
      });
      props && Object.assign(constructor.prototype, props);
    };
    const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
      let props;
      let i;
      let prop;
      const merged = {};
      destObj = destObj || {};
      if (sourceObj == null) return destObj;
      do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while (i-- > 0) {
          prop = props[i];
          if (
            (!propFilter || propFilter(prop, sourceObj, destObj)) &&
            !merged[prop]
          ) {
            destObj[prop] = sourceObj[prop];
            merged[prop] = true;
          }
        }
        sourceObj = filter !== false && getPrototypeOf(sourceObj);
      } while (
        sourceObj &&
        (!filter || filter(sourceObj, destObj)) &&
        sourceObj !== Object.prototype
      );
      return destObj;
    };
    const endsWith = (str, searchString, position) => {
      str = String(str);
      if (position === void 0 || position > str.length) {
        position = str.length;
      }
      position -= searchString.length;
      const lastIndex = str.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
    };
    const toArray = (thing) => {
      if (!thing) return null;
      if (isArray(thing)) return thing;
      let i = thing.length;
      if (!isNumber(i)) return null;
      const arr = new Array(i);
      while (i-- > 0) {
        arr[i] = thing[i];
      }
      return arr;
    };
    const isTypedArray = ((TypedArray) => {
      return (thing) => {
        return TypedArray && thing instanceof TypedArray;
      };
    })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
    const forEachEntry = (obj, fn) => {
      const generator = obj && obj[Symbol.iterator];
      const iterator = generator.call(obj);
      let result;
      while ((result = iterator.next()) && !result.done) {
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
      }
    };
    const matchAll = (regExp, str) => {
      let matches2;
      const arr = [];
      while ((matches2 = regExp.exec(str)) !== null) {
        arr.push(matches2);
      }
      return arr;
    };
    const isHTMLForm = kindOfTest("HTMLFormElement");
    const toCamelCase = (str) => {
      return str
        .toLowerCase()
        .replace(/[-_\s]([a-z\d])(\w*)/g, function replacer2(m, p1, p2) {
          return p1.toUpperCase() + p2;
        });
    };
    const hasOwnProperty = (
      ({ hasOwnProperty: hasOwnProperty2 }) =>
      (obj, prop) =>
        hasOwnProperty2.call(obj, prop)
    )(Object.prototype);
    const isRegExp = kindOfTest("RegExp");
    const reduceDescriptors = (obj, reducer) => {
      const descriptors2 = Object.getOwnPropertyDescriptors(obj);
      const reducedDescriptors = {};
      forEach(descriptors2, (descriptor, name) => {
        let ret;
        if ((ret = reducer(descriptor, name, obj)) !== false) {
          reducedDescriptors[name] = ret || descriptor;
        }
      });
      Object.defineProperties(obj, reducedDescriptors);
    };
    const freezeMethods = (obj) => {
      reduceDescriptors(obj, (descriptor, name) => {
        if (
          isFunction(obj) &&
          ["arguments", "caller", "callee"].indexOf(name) !== -1
        ) {
          return false;
        }
        const value = obj[name];
        if (!isFunction(value)) return;
        descriptor.enumerable = false;
        if ("writable" in descriptor) {
          descriptor.writable = false;
          return;
        }
        if (!descriptor.set) {
          descriptor.set = () => {
            throw Error("Can not rewrite read-only method '" + name + "'");
          };
        }
      });
    };
    const toObjectSet = (arrayOrString, delimiter) => {
      const obj = {};
      const define2 = (arr) => {
        arr.forEach((value) => {
          obj[value] = true;
        });
      };
      isArray(arrayOrString)
        ? define2(arrayOrString)
        : define2(String(arrayOrString).split(delimiter));
      return obj;
    };
    const noop = () => {};
    const toFiniteNumber = (value, defaultValue) => {
      value = +value;
      return Number.isFinite(value) ? value : defaultValue;
    };
    const ALPHA = "abcdefghijklmnopqrstuvwxyz";
    const DIGIT = "0123456789";
    const ALPHABET = {
      DIGIT,
      ALPHA,
      ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT,
    };
    const generateString = (size2 = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
      let str = "";
      const { length } = alphabet;
      while (size2--) {
        str += alphabet[(Math.random() * length) | 0];
      }
      return str;
    };

    function isSpecCompliantForm(thing) {
      return !!(
        thing &&
        isFunction(thing.append) &&
        thing[Symbol.toStringTag] === "FormData" &&
        thing[Symbol.iterator]
      );
    }
    const toJSONObject = (obj) => {
      const stack = new Array(10);
      const visit = (source, i) => {
        if (isObject(source)) {
          if (stack.indexOf(source) >= 0) {
            return;
          }
          if (!("toJSON" in source)) {
            stack[i] = source;
            const target = isArray(source) ? [] : {};
            forEach(source, (value, key) => {
              const reducedValue = visit(value, i + 1);
              !isUndefined(reducedValue) && (target[key] = reducedValue);
            });
            stack[i] = void 0;
            return target;
          }
        }
        return source;
      };
      return visit(obj, 0);
    };
    const isAsyncFn = kindOfTest("AsyncFunction");
    const isThenable = (thing) =>
      thing &&
      (isObject(thing) || isFunction(thing)) &&
      isFunction(thing.then) &&
      isFunction(thing.catch);
    const utils = {
      isArray,
      isArrayBuffer,
      isBuffer,
      isFormData,
      isArrayBufferView,
      isString,
      isNumber,
      isBoolean,
      isObject,
      isPlainObject,
      isUndefined,
      isDate,
      isFile,
      isBlob,
      isRegExp,
      isFunction,
      isStream,
      isURLSearchParams,
      isTypedArray,
      isFileList,
      forEach,
      merge,
      extend,
      trim,
      stripBOM,
      inherits,
      toFlatObject,
      kindOf,
      kindOfTest,
      endsWith,
      toArray,
      forEachEntry,
      matchAll,
      isHTMLForm,
      hasOwnProperty,
      hasOwnProp: hasOwnProperty,
      // an alias to avoid ESLint no-prototype-builtins detection
      reduceDescriptors,
      freezeMethods,
      toObjectSet,
      toCamelCase,
      noop,
      toFiniteNumber,
      findKey,
      global: _global,
      isContextDefined,
      ALPHABET,
      generateString,
      isSpecCompliantForm,
      toJSONObject,
      isAsyncFn,
      isThenable,
    };

    function AxiosError(message, code, config, request, response) {
      Error.call(this);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      } else {
        this.stack = new Error().stack;
      }
      this.message = message;
      this.name = "AxiosError";
      code && (this.code = code);
      config && (this.config = config);
      request && (this.request = request);
      response && (this.response = response);
    }
    utils.inherits(AxiosError, Error, {
      toJSON: function toJSON() {
        return {
          // Standard
          message: this.message,
          name: this.name,
          // Microsoft
          description: this.description,
          number: this.number,
          // Mozilla
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          // Axios
          config: utils.toJSONObject(this.config),
          code: this.code,
          status:
            this.response && this.response.status ? this.response.status : null,
        };
      },
    });
    const prototype$1 = AxiosError.prototype;
    const descriptors = {};
    [
      "ERR_BAD_OPTION_VALUE",
      "ERR_BAD_OPTION",
      "ECONNABORTED",
      "ETIMEDOUT",
      "ERR_NETWORK",
      "ERR_FR_TOO_MANY_REDIRECTS",
      "ERR_DEPRECATED",
      "ERR_BAD_RESPONSE",
      "ERR_BAD_REQUEST",
      "ERR_CANCELED",
      "ERR_NOT_SUPPORT",
      "ERR_INVALID_URL",
      // eslint-disable-next-line func-names
    ].forEach((code) => {
      descriptors[code] = {
        value: code,
      };
    });
    Object.defineProperties(AxiosError, descriptors);
    Object.defineProperty(prototype$1, "isAxiosError", {
      value: true,
    });
    AxiosError.from = (error, code, config, request, response, customProps) => {
      const axiosError = Object.create(prototype$1);
      utils.toFlatObject(
        error,
        axiosError,
        function filter(obj) {
          return obj !== Error.prototype;
        },
        (prop) => {
          return prop !== "isAxiosError";
        },
      );
      AxiosError.call(
        axiosError,
        error.message,
        code,
        config,
        request,
        response,
      );
      axiosError.cause = error;
      axiosError.name = error.name;
      customProps && Object.assign(axiosError, customProps);
      return axiosError;
    };
    const httpAdapter = null;

    function isVisitable(thing) {
      return utils.isPlainObject(thing) || utils.isArray(thing);
    }

    function removeBrackets(key) {
      return utils.endsWith(key, "[]") ? key.slice(0, -2) : key;
    }

    function renderKey(path, key, dots) {
      if (!path) return key;
      return path
        .concat(key)
        .map(function each(token, i) {
          token = removeBrackets(token);
          return !dots && i ? "[" + token + "]" : token;
        })
        .join(dots ? "." : "");
    }

    function isFlatArray(arr) {
      return utils.isArray(arr) && !arr.some(isVisitable);
    }
    const predicates = utils.toFlatObject(
      utils,
      {},
      null,
      function filter(prop) {
        return /^is[A-Z]/.test(prop);
      },
    );

    function toFormData(obj, formData, options) {
      if (!utils.isObject(obj)) {
        throw new TypeError("target must be an object");
      }
      formData = formData || new FormData();
      options = utils.toFlatObject(
        options,
        {
          metaTokens: true,
          dots: false,
          indexes: false,
        },
        false,
        function defined(option, source) {
          return !utils.isUndefined(source[option]);
        },
      );
      const metaTokens = options.metaTokens;
      const visitor = options.visitor || defaultVisitor;
      const dots = options.dots;
      const indexes = options.indexes;
      const _Blob = options.Blob || (typeof Blob !== "undefined" && Blob);
      const useBlob = _Blob && utils.isSpecCompliantForm(formData);
      if (!utils.isFunction(visitor)) {
        throw new TypeError("visitor must be a function");
      }

      function convertValue(value) {
        if (value === null) return "";
        if (utils.isDate(value)) {
          return value.toISOString();
        }
        if (!useBlob && utils.isBlob(value)) {
          throw new AxiosError("Blob is not supported. Use a Buffer instead.");
        }
        if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
          return useBlob && typeof Blob === "function"
            ? new Blob([value])
            : Buffer.from(value);
        }
        return value;
      }

      function defaultVisitor(value, key, path) {
        let arr = value;
        if (value && !path && typeof value === "object") {
          if (utils.endsWith(key, "{}")) {
            key = metaTokens ? key : key.slice(0, -2);
            value = JSON.stringify(value);
          } else if (
            (utils.isArray(value) && isFlatArray(value)) ||
            ((utils.isFileList(value) || utils.endsWith(key, "[]")) &&
              (arr = utils.toArray(value)))
          ) {
            key = removeBrackets(key);
            arr.forEach(function each(el, index) {
              !(utils.isUndefined(el) || el === null) &&
                formData.append(
                  // eslint-disable-next-line no-nested-ternary
                  indexes === true
                    ? renderKey([key], index, dots)
                    : indexes === null
                      ? key
                      : key + "[]",
                  convertValue(el),
                );
            });
            return false;
          }
        }
        if (isVisitable(value)) {
          return true;
        }
        formData.append(renderKey(path, key, dots), convertValue(value));
        return false;
      }
      const stack = [];
      const exposedHelpers = Object.assign(predicates, {
        defaultVisitor,
        convertValue,
        isVisitable,
      });

      function build(value, path) {
        if (utils.isUndefined(value)) return;
        if (stack.indexOf(value) !== -1) {
          throw Error("Circular reference detected in " + path.join("."));
        }
        stack.push(value);
        utils.forEach(value, function each(el, key) {
          const result =
            !(utils.isUndefined(el) || el === null) &&
            visitor.call(
              formData,
              el,
              utils.isString(key) ? key.trim() : key,
              path,
              exposedHelpers,
            );
          if (result === true) {
            build(el, path ? path.concat(key) : [key]);
          }
        });
        stack.pop();
      }
      if (!utils.isObject(obj)) {
        throw new TypeError("data must be an object");
      }
      build(obj);
      return formData;
    }

    function encode$1(str) {
      const charMap = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0",
      };
      return encodeURIComponent(str).replace(
        /[!'()~]|%20|%00/g,
        function replacer2(match) {
          return charMap[match];
        },
      );
    }

    function AxiosURLSearchParams(params, options) {
      this._pairs = [];
      params && toFormData(params, this, options);
    }
    const prototype = AxiosURLSearchParams.prototype;
    prototype.append = function append(name, value) {
      this._pairs.push([name, value]);
    };
    prototype.toString = function toString2(encoder) {
      const _encode = encoder
        ? function (value) {
            return encoder.call(this, value, encode$1);
          }
        : encode$1;
      return this._pairs
        .map(function each(pair) {
          return _encode(pair[0]) + "=" + _encode(pair[1]);
        }, "")
        .join("&");
    };

    function encode(val) {
      return encodeURIComponent(val)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
    }

    function buildURL(url, params, options) {
      if (!params) {
        return url;
      }
      const _encode = (options && options.encode) || encode;
      const serializeFn = options && options.serialize;
      let serializedParams;
      if (serializeFn) {
        serializedParams = serializeFn(params, options);
      } else {
        serializedParams = utils.isURLSearchParams(params)
          ? params.toString()
          : new AxiosURLSearchParams(params, options).toString(_encode);
      }
      if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
      }
      return url;
    }
    class InterceptorManager {
      constructor() {
        this.handlers = [];
      }
      /**
       * Add a new interceptor to the stack
       *
       * @param {Function} fulfilled The function to handle `then` for a `Promise`
       * @param {Function} rejected The function to handle `reject` for a `Promise`
       *
       * @return {Number} An ID used to remove interceptor later
       */
      use(fulfilled, rejected, options) {
        this.handlers.push({
          fulfilled,
          rejected,
          synchronous: options ? options.synchronous : false,
          runWhen: options ? options.runWhen : null,
        });
        return this.handlers.length - 1;
      }
      /**
       * Remove an interceptor from the stack
       *
       * @param {Number} id The ID that was returned by `use`
       *
       * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
       */
      eject(id) {
        if (this.handlers[id]) {
          this.handlers[id] = null;
        }
      }
      /**
       * Clear all interceptors from the stack
       *
       * @returns {void}
       */
      clear() {
        if (this.handlers) {
          this.handlers = [];
        }
      }
      /**
       * Iterate over all the registered interceptors
       *
       * This method is particularly useful for skipping over any
       * interceptors that may have become `null` calling `eject`.
       *
       * @param {Function} fn The function to call for each interceptor
       *
       * @returns {void}
       */
      forEach(fn) {
        utils.forEach(this.handlers, function forEachHandler(h2) {
          if (h2 !== null) {
            fn(h2);
          }
        });
      }
    }
    const InterceptorManager$1 = InterceptorManager;
    const transitionalDefaults = {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false,
    };
    const URLSearchParams$1 =
      typeof URLSearchParams !== "undefined"
        ? URLSearchParams
        : AxiosURLSearchParams;
    const FormData$1 = typeof FormData !== "undefined" ? FormData : null;
    const Blob$1 = typeof Blob !== "undefined" ? Blob : null;
    const isStandardBrowserEnv = (() => {
      let product;
      if (
        typeof navigator !== "undefined" &&
        ((product = navigator.product) === "ReactNative" ||
          product === "NativeScript" ||
          product === "NS")
      ) {
        return false;
      }
      return typeof window !== "undefined" && typeof document !== "undefined";
    })();
    const isStandardBrowserWebWorkerEnv = (() => {
      return (
        typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
        self instanceof WorkerGlobalScope &&
        typeof self.importScripts === "function"
      );
    })();
    const platform = {
      isBrowser: true,
      classes: {
        URLSearchParams: URLSearchParams$1,
        FormData: FormData$1,
        Blob: Blob$1,
      },
      isStandardBrowserEnv,
      isStandardBrowserWebWorkerEnv,
      protocols: ["http", "https", "file", "blob", "url", "data"],
    };

    function toURLEncodedForm(data, options) {
      return toFormData(
        data,
        new platform.classes.URLSearchParams(),
        Object.assign(
          {
            visitor: function (value, key, path, helpers) {
              if (platform.isNode && utils.isBuffer(value)) {
                this.append(key, value.toString("base64"));
                return false;
              }
              return helpers.defaultVisitor.apply(this, arguments);
            },
          },
          options,
        ),
      );
    }

    function parsePropPath(name) {
      return utils.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
        return match[0] === "[]" ? "" : match[1] || match[0];
      });
    }

    function arrayToObject(arr) {
      const obj = {};
      const keys = Object.keys(arr);
      let i;
      const len = keys.length;
      let key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        obj[key] = arr[key];
      }
      return obj;
    }

    function formDataToJSON(formData) {
      function buildPath(path, value, target, index) {
        let name = path[index++];
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && utils.isArray(target) ? target.length : name;
        if (isLast) {
          if (utils.hasOwnProp(target, name)) {
            target[name] = [target[name], value];
          } else {
            target[name] = value;
          }
          return !isNumericKey;
        }
        if (!target[name] || !utils.isObject(target[name])) {
          target[name] = [];
        }
        const result = buildPath(path, value, target[name], index);
        if (result && utils.isArray(target[name])) {
          target[name] = arrayToObject(target[name]);
        }
        return !isNumericKey;
      }
      if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
        const obj = {};
        utils.forEachEntry(formData, (name, value) => {
          buildPath(parsePropPath(name), value, obj, 0);
        });
        return obj;
      }
      return null;
    }

    function stringifySafely(rawValue, parser, encoder) {
      if (utils.isString(rawValue)) {
        try {
          (parser || JSON.parse)(rawValue);
          return utils.trim(rawValue);
        } catch (e) {
          if (e.name !== "SyntaxError") {
            throw e;
          }
        }
      }
      return (encoder || JSON.stringify)(rawValue);
    }
    const defaults = {
      transitional: transitionalDefaults,
      adapter: ["xhr", "http"],
      transformRequest: [
        function transformRequest(data, headers) {
          const contentType = headers.getContentType() || "";
          const hasJSONContentType =
            contentType.indexOf("application/json") > -1;
          const isObjectPayload = utils.isObject(data);
          if (isObjectPayload && utils.isHTMLForm(data)) {
            data = new FormData(data);
          }
          const isFormData2 = utils.isFormData(data);
          if (isFormData2) {
            if (!hasJSONContentType) {
              return data;
            }
            return hasJSONContentType
              ? JSON.stringify(formDataToJSON(data))
              : data;
          }
          if (
            utils.isArrayBuffer(data) ||
            utils.isBuffer(data) ||
            utils.isStream(data) ||
            utils.isFile(data) ||
            utils.isBlob(data)
          ) {
            return data;
          }
          if (utils.isArrayBufferView(data)) {
            return data.buffer;
          }
          if (utils.isURLSearchParams(data)) {
            headers.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              false,
            );
            return data.toString();
          }
          let isFileList2;
          if (isObjectPayload) {
            if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
              return toURLEncodedForm(data, this.formSerializer).toString();
            }
            if (
              (isFileList2 = utils.isFileList(data)) ||
              contentType.indexOf("multipart/form-data") > -1
            ) {
              const _FormData = this.env && this.env.FormData;
              return toFormData(
                isFileList2
                  ? {
                      "files[]": data,
                    }
                  : data,
                _FormData && new _FormData(),
                this.formSerializer,
              );
            }
          }
          if (isObjectPayload || hasJSONContentType) {
            headers.setContentType("application/json", false);
            return stringifySafely(data);
          }
          return data;
        },
      ],
      transformResponse: [
        function transformResponse(data) {
          const transitional = this.transitional || defaults.transitional;
          const forcedJSONParsing =
            transitional && transitional.forcedJSONParsing;
          const JSONRequested = this.responseType === "json";
          if (
            data &&
            utils.isString(data) &&
            ((forcedJSONParsing && !this.responseType) || JSONRequested)
          ) {
            const silentJSONParsing =
              transitional && transitional.silentJSONParsing;
            const strictJSONParsing = !silentJSONParsing && JSONRequested;
            try {
              return JSON.parse(data);
            } catch (e) {
              if (strictJSONParsing) {
                if (e.name === "SyntaxError") {
                  throw AxiosError.from(
                    e,
                    AxiosError.ERR_BAD_RESPONSE,
                    this,
                    null,
                    this.response,
                  );
                }
                throw e;
              }
            }
          }
          return data;
        },
      ],
      /**
       * A timeout in milliseconds to abort a request. If set to 0 (default) a
       * timeout is not created.
       */
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      env: {
        FormData: platform.classes.FormData,
        Blob: platform.classes.Blob,
      },
      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      },
      headers: {
        common: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": void 0,
        },
      },
    };
    utils.forEach(
      ["delete", "get", "head", "post", "put", "patch"],
      (method) => {
        defaults.headers[method] = {};
      },
    );
    const defaults$1 = defaults;
    const ignoreDuplicateOf = utils.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]);
    const parseHeaders = (rawHeaders) => {
      const parsed = {};
      let key;
      let val;
      let i;
      rawHeaders &&
        rawHeaders.split("\n").forEach(function parser(line) {
          i = line.indexOf(":");
          key = line.substring(0, i).trim().toLowerCase();
          val = line.substring(i + 1).trim();
          if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
            return;
          }
          if (key === "set-cookie") {
            if (parsed[key]) {
              parsed[key].push(val);
            } else {
              parsed[key] = [val];
            }
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        });
      return parsed;
    };
    const $internals = Symbol("internals");

    function normalizeHeader(header) {
      return header && String(header).trim().toLowerCase();
    }

    function normalizeValue(value) {
      if (value === false || value == null) {
        return value;
      }
      return utils.isArray(value) ? value.map(normalizeValue) : String(value);
    }

    function parseTokens(str) {
      const tokens = /* @__PURE__ */ Object.create(null);
      const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
      let match;
      while ((match = tokensRE.exec(str))) {
        tokens[match[1]] = match[2];
      }
      return tokens;
    }
    const isValidHeaderName = (str) =>
      /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

    function matchHeaderValue(
      context,
      value,
      header,
      filter,
      isHeaderNameFilter,
    ) {
      if (utils.isFunction(filter)) {
        return filter.call(this, value, header);
      }
      if (isHeaderNameFilter) {
        value = header;
      }
      if (!utils.isString(value)) return;
      if (utils.isString(filter)) {
        return value.indexOf(filter) !== -1;
      }
      if (utils.isRegExp(filter)) {
        return filter.test(value);
      }
    }

    function formatHeader(header) {
      return header
        .trim()
        .toLowerCase()
        .replace(/([a-z\d])(\w*)/g, (w, char, str) => {
          return char.toUpperCase() + str;
        });
    }

    function buildAccessors(obj, header) {
      const accessorName = utils.toCamelCase(" " + header);
      ["get", "set", "has"].forEach((methodName) => {
        Object.defineProperty(obj, methodName + accessorName, {
          value: function (arg1, arg2, arg3) {
            return this[methodName].call(this, header, arg1, arg2, arg3);
          },
          configurable: true,
        });
      });
    }
    class AxiosHeaders {
      constructor(headers) {
        headers && this.set(headers);
      }
      set(header, valueOrRewrite, rewrite) {
        const self2 = this;

        function setHeader(_value, _header, _rewrite) {
          const lHeader = normalizeHeader(_header);
          if (!lHeader) {
            throw new Error("header name must be a non-empty string");
          }
          const key = utils.findKey(self2, lHeader);
          if (
            !key ||
            self2[key] === void 0 ||
            _rewrite === true ||
            (_rewrite === void 0 && self2[key] !== false)
          ) {
            self2[key || _header] = normalizeValue(_value);
          }
        }
        const setHeaders = (headers, _rewrite) =>
          utils.forEach(headers, (_value, _header) =>
            setHeader(_value, _header, _rewrite),
          );
        if (utils.isPlainObject(header) || header instanceof this.constructor) {
          setHeaders(header, valueOrRewrite);
        } else if (
          utils.isString(header) &&
          (header = header.trim()) &&
          !isValidHeaderName(header)
        ) {
          setHeaders(parseHeaders(header), valueOrRewrite);
        } else {
          header != null && setHeader(valueOrRewrite, header, rewrite);
        }
        return this;
      }
      get(header, parser) {
        header = normalizeHeader(header);
        if (header) {
          const key = utils.findKey(this, header);
          if (key) {
            const value = this[key];
            if (!parser) {
              return value;
            }
            if (parser === true) {
              return parseTokens(value);
            }
            if (utils.isFunction(parser)) {
              return parser.call(this, value, key);
            }
            if (utils.isRegExp(parser)) {
              return parser.exec(value);
            }
            throw new TypeError("parser must be boolean|regexp|function");
          }
        }
      }
      has(header, matcher) {
        header = normalizeHeader(header);
        if (header) {
          const key = utils.findKey(this, header);
          return !!(
            key &&
            this[key] !== void 0 &&
            (!matcher || matchHeaderValue(this, this[key], key, matcher))
          );
        }
        return false;
      }
      delete(header, matcher) {
        const self2 = this;
        let deleted = false;

        function deleteHeader(_header) {
          _header = normalizeHeader(_header);
          if (_header) {
            const key = utils.findKey(self2, _header);
            if (
              key &&
              (!matcher || matchHeaderValue(self2, self2[key], key, matcher))
            ) {
              delete self2[key];
              deleted = true;
            }
          }
        }
        if (utils.isArray(header)) {
          header.forEach(deleteHeader);
        } else {
          deleteHeader(header);
        }
        return deleted;
      }
      clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;
        while (i--) {
          const key = keys[i];
          if (
            !matcher ||
            matchHeaderValue(this, this[key], key, matcher, true)
          ) {
            delete this[key];
            deleted = true;
          }
        }
        return deleted;
      }
      normalize(format) {
        const self2 = this;
        const headers = {};
        utils.forEach(this, (value, header) => {
          const key = utils.findKey(headers, header);
          if (key) {
            self2[key] = normalizeValue(value);
            delete self2[header];
            return;
          }
          const normalized = format
            ? formatHeader(header)
            : String(header).trim();
          if (normalized !== header) {
            delete self2[header];
          }
          self2[normalized] = normalizeValue(value);
          headers[normalized] = true;
        });
        return this;
      }
      concat(...targets) {
        return this.constructor.concat(this, ...targets);
      }
      toJSON(asStrings) {
        const obj = /* @__PURE__ */ Object.create(null);
        utils.forEach(this, (value, header) => {
          value != null &&
            value !== false &&
            (obj[header] =
              asStrings && utils.isArray(value) ? value.join(", ") : value);
        });
        return obj;
      }
      [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
      }
      toString() {
        return Object.entries(this.toJSON())
          .map(([header, value]) => header + ": " + value)
          .join("\n");
      }
      get [Symbol.toStringTag]() {
        return "AxiosHeaders";
      }
      static from(thing) {
        return thing instanceof this ? thing : new this(thing);
      }
      static concat(first, ...targets) {
        const computed2 = new this(first);
        targets.forEach((target) => computed2.set(target));
        return computed2;
      }
      static accessor(header) {
        const internals =
          (this[$internals] =
          this[$internals] =
            {
              accessors: {},
            });
        const accessors = internals.accessors;
        const prototype2 = this.prototype;

        function defineAccessor(_header) {
          const lHeader = normalizeHeader(_header);
          if (!accessors[lHeader]) {
            buildAccessors(prototype2, _header);
            accessors[lHeader] = true;
          }
        }
        utils.isArray(header)
          ? header.forEach(defineAccessor)
          : defineAccessor(header);
        return this;
      }
    }
    AxiosHeaders.accessor([
      "Content-Type",
      "Content-Length",
      "Accept",
      "Accept-Encoding",
      "User-Agent",
      "Authorization",
    ]);
    utils.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
      let mapped = key[0].toUpperCase() + key.slice(1);
      return {
        get: () => value,
        set(headerValue) {
          this[mapped] = headerValue;
        },
      };
    });
    utils.freezeMethods(AxiosHeaders);
    const AxiosHeaders$1 = AxiosHeaders;

    function transformData(fns, response) {
      const config = this || defaults$1;
      const context = response || config;
      const headers = AxiosHeaders$1.from(context.headers);
      let data = context.data;
      utils.forEach(fns, function transform2(fn) {
        data = fn.call(
          config,
          data,
          headers.normalize(),
          response ? response.status : void 0,
        );
      });
      headers.normalize();
      return data;
    }

    function isCancel(value) {
      return !!(value && value.__CANCEL__);
    }

    function CanceledError(message, config, request) {
      AxiosError.call(
        this,
        message == null ? "canceled" : message,
        AxiosError.ERR_CANCELED,
        config,
        request,
      );
      this.name = "CanceledError";
    }
    utils.inherits(CanceledError, AxiosError, {
      __CANCEL__: true,
    });

    function settle(resolve2, reject, response) {
      const validateStatus = response.config.validateStatus;
      if (
        !response.status ||
        !validateStatus ||
        validateStatus(response.status)
      ) {
        resolve2(response);
      } else {
        reject(
          new AxiosError(
            "Request failed with status code " + response.status,
            [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][
              Math.floor(response.status / 100) - 4
            ],
            response.config,
            response.request,
            response,
          ),
        );
      }
    }
    const cookies = platform.isStandardBrowserEnv
      ? // Standard browser envs support document.cookie
        (function standardBrowserEnv() {
          return {
            write: function write(name, value, expires, path, domain, secure) {
              const cookie = [];
              cookie.push(name + "=" + encodeURIComponent(value));
              if (utils.isNumber(expires)) {
                cookie.push("expires=" + new Date(expires).toGMTString());
              }
              if (utils.isString(path)) {
                cookie.push("path=" + path);
              }
              if (utils.isString(domain)) {
                cookie.push("domain=" + domain);
              }
              if (secure === true) {
                cookie.push("secure");
              }
              document.cookie = cookie.join("; ");
            },
            read: function read(name) {
              const match = document.cookie.match(
                new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"),
              );
              return match ? decodeURIComponent(match[3]) : null;
            },
            remove: function remove2(name) {
              this.write(name, "", Date.now() - 864e5);
            },
          };
        })()
      : // Non standard browser env (web workers, react-native) lack needed support.
        (function nonStandardBrowserEnv() {
          return {
            write: function write() {},
            read: function read() {
              return null;
            },
            remove: function remove2() {},
          };
        })();

    function isAbsoluteURL(url) {
      return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
    }

    function combineURLs(baseURL, relativeURL) {
      return relativeURL
        ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "")
        : baseURL;
    }

    function buildFullPath(baseURL, requestedURL) {
      if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
      }
      return requestedURL;
    }
    const isURLSameOrigin = platform.isStandardBrowserEnv
      ? // Standard browser envs have full support of the APIs needed to test
        // whether the request URL is of the same origin as current location.
        (function standardBrowserEnv() {
          const msie = /(msie|trident)/i.test(navigator.userAgent);
          const urlParsingNode = document.createElement("a");
          let originURL;

          function resolveURL(url) {
            let href = url;
            if (msie) {
              urlParsingNode.setAttribute("href", href);
              href = urlParsingNode.href;
            }
            urlParsingNode.setAttribute("href", href);
            return {
              href: urlParsingNode.href,
              protocol: urlParsingNode.protocol
                ? urlParsingNode.protocol.replace(/:$/, "")
                : "",
              host: urlParsingNode.host,
              search: urlParsingNode.search
                ? urlParsingNode.search.replace(/^\?/, "")
                : "",
              hash: urlParsingNode.hash
                ? urlParsingNode.hash.replace(/^#/, "")
                : "",
              hostname: urlParsingNode.hostname,
              port: urlParsingNode.port,
              pathname:
                urlParsingNode.pathname.charAt(0) === "/"
                  ? urlParsingNode.pathname
                  : "/" + urlParsingNode.pathname,
            };
          }
          originURL = resolveURL(window.location.href);
          return function isURLSameOrigin2(requestURL) {
            const parsed = utils.isString(requestURL)
              ? resolveURL(requestURL)
              : requestURL;
            return (
              parsed.protocol === originURL.protocol &&
              parsed.host === originURL.host
            );
          };
        })()
      : // Non standard browser envs (web workers, react-native) lack needed support.
        (function nonStandardBrowserEnv() {
          return function isURLSameOrigin2() {
            return true;
          };
        })();

    function parseProtocol(url) {
      const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
      return (match && match[1]) || "";
    }

    function speedometer(samplesCount, min) {
      samplesCount = samplesCount || 10;
      const bytes = new Array(samplesCount);
      const timestamps = new Array(samplesCount);
      let head = 0;
      let tail = 0;
      let firstSampleTS;
      min = min !== void 0 ? min : 1e3;
      return function push(chunkLength) {
        const now = Date.now();
        const startedAt = timestamps[tail];
        if (!firstSampleTS) {
          firstSampleTS = now;
        }
        bytes[head] = chunkLength;
        timestamps[head] = now;
        let i = tail;
        let bytesCount = 0;
        while (i !== head) {
          bytesCount += bytes[i++];
          i = i % samplesCount;
        }
        head = (head + 1) % samplesCount;
        if (head === tail) {
          tail = (tail + 1) % samplesCount;
        }
        if (now - firstSampleTS < min) {
          return;
        }
        const passed = startedAt && now - startedAt;
        return passed ? Math.round((bytesCount * 1e3) / passed) : void 0;
      };
    }

    function progressEventReducer(listener, isDownloadStream) {
      let bytesNotified = 0;
      const _speedometer = speedometer(50, 250);
      return (e) => {
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : void 0;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;
        bytesNotified = loaded;
        const data = {
          loaded,
          total,
          progress: total ? loaded / total : void 0,
          bytes: progressBytes,
          rate: rate ? rate : void 0,
          estimated:
            rate && total && inRange ? (total - loaded) / rate : void 0,
          event: e,
        };
        data[isDownloadStream ? "download" : "upload"] = true;
        listener(data);
      };
    }
    const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
    const xhrAdapter =
      isXHRAdapterSupported &&
      function (config) {
        return new Promise(function dispatchXhrRequest(resolve2, reject) {
          let requestData = config.data;
          const requestHeaders = AxiosHeaders$1.from(
            config.headers,
          ).normalize();
          const responseType = config.responseType;
          let onCanceled;

          function done() {
            if (config.cancelToken) {
              config.cancelToken.unsubscribe(onCanceled);
            }
            if (config.signal) {
              config.signal.removeEventListener("abort", onCanceled);
            }
          }
          let contentType;
          if (utils.isFormData(requestData)) {
            if (
              platform.isStandardBrowserEnv ||
              platform.isStandardBrowserWebWorkerEnv
            ) {
              requestHeaders.setContentType(false);
            } else if (
              !requestHeaders.getContentType(/^\s*multipart\/form-data/)
            ) {
              requestHeaders.setContentType("multipart/form-data");
            } else if (
              utils.isString((contentType = requestHeaders.getContentType()))
            ) {
              requestHeaders.setContentType(
                contentType.replace(/^\s*(multipart\/form-data);+/, "$1"),
              );
            }
          }
          let request = new XMLHttpRequest();
          if (config.auth) {
            const username = config.auth.username || "";
            const password = config.auth.password
              ? unescape(encodeURIComponent(config.auth.password))
              : "";
            requestHeaders.set(
              "Authorization",
              "Basic " + btoa(username + ":" + password),
            );
          }
          const fullPath = buildFullPath(config.baseURL, config.url);
          request.open(
            config.method.toUpperCase(),
            buildURL(fullPath, config.params, config.paramsSerializer),
            true,
          );
          request.timeout = config.timeout;

          function onloadend() {
            if (!request) {
              return;
            }
            const responseHeaders = AxiosHeaders$1.from(
              "getAllResponseHeaders" in request &&
                request.getAllResponseHeaders(),
            );
            const responseData =
              !responseType ||
              responseType === "text" ||
              responseType === "json"
                ? request.responseText
                : request.response;
            const response = {
              data: responseData,
              status: request.status,
              statusText: request.statusText,
              headers: responseHeaders,
              config,
              request,
            };
            settle(
              function _resolve(value) {
                resolve2(value);
                done();
              },
              function _reject(err) {
                reject(err);
                done();
              },
              response,
            );
            request = null;
          }
          if ("onloadend" in request) {
            request.onloadend = onloadend;
          } else {
            request.onreadystatechange = function handleLoad() {
              if (!request || request.readyState !== 4) {
                return;
              }
              if (
                request.status === 0 &&
                !(
                  request.responseURL &&
                  request.responseURL.indexOf("file:") === 0
                )
              ) {
                return;
              }
              setTimeout(onloadend);
            };
          }
          request.onabort = function handleAbort() {
            if (!request) {
              return;
            }
            reject(
              new AxiosError(
                "Request aborted",
                AxiosError.ECONNABORTED,
                config,
                request,
              ),
            );
            request = null;
          };
          request.onerror = function handleError2() {
            reject(
              new AxiosError(
                "Network Error",
                AxiosError.ERR_NETWORK,
                config,
                request,
              ),
            );
            request = null;
          };
          request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = config.timeout
              ? "timeout of " + config.timeout + "ms exceeded"
              : "timeout exceeded";
            const transitional = config.transitional || transitionalDefaults;
            if (config.timeoutErrorMessage) {
              timeoutErrorMessage = config.timeoutErrorMessage;
            }
            reject(
              new AxiosError(
                timeoutErrorMessage,
                transitional.clarifyTimeoutError
                  ? AxiosError.ETIMEDOUT
                  : AxiosError.ECONNABORTED,
                config,
                request,
              ),
            );
            request = null;
          };
          if (platform.isStandardBrowserEnv) {
            const xsrfValue =
              (config.withCredentials || isURLSameOrigin(fullPath)) &&
              config.xsrfCookieName &&
              cookies.read(config.xsrfCookieName);
            if (xsrfValue) {
              requestHeaders.set(config.xsrfHeaderName, xsrfValue);
            }
          }
          requestData === void 0 && requestHeaders.setContentType(null);
          if ("setRequestHeader" in request) {
            utils.forEach(
              requestHeaders.toJSON(),
              function setRequestHeader(val, key) {
                request.setRequestHeader(key, val);
              },
            );
          }
          if (!utils.isUndefined(config.withCredentials)) {
            request.withCredentials = !!config.withCredentials;
          }
          if (responseType && responseType !== "json") {
            request.responseType = config.responseType;
          }
          if (typeof config.onDownloadProgress === "function") {
            request.addEventListener(
              "progress",
              progressEventReducer(config.onDownloadProgress, true),
            );
          }
          if (typeof config.onUploadProgress === "function" && request.upload) {
            request.upload.addEventListener(
              "progress",
              progressEventReducer(config.onUploadProgress),
            );
          }
          if (config.cancelToken || config.signal) {
            onCanceled = (cancel) => {
              if (!request) {
                return;
              }
              reject(
                !cancel || cancel.type
                  ? new CanceledError(null, config, request)
                  : cancel,
              );
              request.abort();
              request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) {
              config.signal.aborted
                ? onCanceled()
                : config.signal.addEventListener("abort", onCanceled);
            }
          }
          const protocol = parseProtocol(fullPath);
          if (protocol && platform.protocols.indexOf(protocol) === -1) {
            reject(
              new AxiosError(
                "Unsupported protocol " + protocol + ":",
                AxiosError.ERR_BAD_REQUEST,
                config,
              ),
            );
            return;
          }
          request.send(requestData || null);
        });
      };
    const knownAdapters = {
      http: httpAdapter,
      xhr: xhrAdapter,
    };
    utils.forEach(knownAdapters, (fn, value) => {
      if (fn) {
        try {
          Object.defineProperty(fn, "name", {
            value,
          });
        } catch (e) {}
        Object.defineProperty(fn, "adapterName", {
          value,
        });
      }
    });
    const renderReason = (reason) => `- ${reason}`;
    const isResolvedHandle = (adapter) =>
      utils.isFunction(adapter) || adapter === null || adapter === false;
    const adapters = {
      getAdapter: (adapters2) => {
        adapters2 = utils.isArray(adapters2) ? adapters2 : [adapters2];
        const { length } = adapters2;
        let nameOrAdapter;
        let adapter;
        const rejectedReasons = {};
        for (let i = 0; i < length; i++) {
          nameOrAdapter = adapters2[i];
          let id;
          adapter = nameOrAdapter;
          if (!isResolvedHandle(nameOrAdapter)) {
            adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
            if (adapter === void 0) {
              throw new AxiosError(`Unknown adapter '${id}'`);
            }
          }
          if (adapter) {
            break;
          }
          rejectedReasons[id || "#" + i] = adapter;
        }
        if (!adapter) {
          const reasons = Object.entries(rejectedReasons).map(
            ([id, state]) =>
              `adapter ${id} ` +
              (state === false
                ? "is not supported by the environment"
                : "is not available in the build"),
          );
          let s = length
            ? reasons.length > 1
              ? "since :\n" + reasons.map(renderReason).join("\n")
              : " " + renderReason(reasons[0])
            : "as no adapter specified";
          throw new AxiosError(
            `There is no suitable adapter to dispatch the request ` + s,
            "ERR_NOT_SUPPORT",
          );
        }
        return adapter;
      },
      adapters: knownAdapters,
    };

    function throwIfCancellationRequested(config) {
      if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
      }
      if (config.signal && config.signal.aborted) {
        throw new CanceledError(null, config);
      }
    }

    function dispatchRequest(config) {
      throwIfCancellationRequested(config);
      config.headers = AxiosHeaders$1.from(config.headers);
      config.data = transformData.call(config, config.transformRequest);
      if (["post", "put", "patch"].indexOf(config.method) !== -1) {
        config.headers.setContentType(
          "application/x-www-form-urlencoded",
          false,
        );
      }
      const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);
      return adapter(config).then(
        function onAdapterResolution(response) {
          throwIfCancellationRequested(config);
          response.data = transformData.call(
            config,
            config.transformResponse,
            response,
          );
          response.headers = AxiosHeaders$1.from(response.headers);
          return response;
        },
        function onAdapterRejection(reason) {
          if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            if (reason && reason.response) {
              reason.response.data = transformData.call(
                config,
                config.transformResponse,
                reason.response,
              );
              reason.response.headers = AxiosHeaders$1.from(
                reason.response.headers,
              );
            }
          }
          return Promise.reject(reason);
        },
      );
    }
    const headersToObject = (thing) =>
      thing instanceof AxiosHeaders$1 ? thing.toJSON() : thing;

    function mergeConfig(config1, config2) {
      config2 = config2 || {};
      const config = {};

      function getMergedValue(target, source, caseless) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
          return utils.merge.call(
            {
              caseless,
            },
            target,
            source,
          );
        } else if (utils.isPlainObject(source)) {
          return utils.merge({}, source);
        } else if (utils.isArray(source)) {
          return source.slice();
        }
        return source;
      }

      function mergeDeepProperties(a, b, caseless) {
        if (!utils.isUndefined(b)) {
          return getMergedValue(a, b, caseless);
        } else if (!utils.isUndefined(a)) {
          return getMergedValue(void 0, a, caseless);
        }
      }

      function valueFromConfig2(a, b) {
        if (!utils.isUndefined(b)) {
          return getMergedValue(void 0, b);
        }
      }

      function defaultToConfig2(a, b) {
        if (!utils.isUndefined(b)) {
          return getMergedValue(void 0, b);
        } else if (!utils.isUndefined(a)) {
          return getMergedValue(void 0, a);
        }
      }

      function mergeDirectKeys(a, b, prop) {
        if (prop in config2) {
          return getMergedValue(a, b);
        } else if (prop in config1) {
          return getMergedValue(void 0, a);
        }
      }
      const mergeMap = {
        url: valueFromConfig2,
        method: valueFromConfig2,
        data: valueFromConfig2,
        baseURL: defaultToConfig2,
        transformRequest: defaultToConfig2,
        transformResponse: defaultToConfig2,
        paramsSerializer: defaultToConfig2,
        timeout: defaultToConfig2,
        timeoutMessage: defaultToConfig2,
        withCredentials: defaultToConfig2,
        adapter: defaultToConfig2,
        responseType: defaultToConfig2,
        xsrfCookieName: defaultToConfig2,
        xsrfHeaderName: defaultToConfig2,
        onUploadProgress: defaultToConfig2,
        onDownloadProgress: defaultToConfig2,
        decompress: defaultToConfig2,
        maxContentLength: defaultToConfig2,
        maxBodyLength: defaultToConfig2,
        beforeRedirect: defaultToConfig2,
        transport: defaultToConfig2,
        httpAgent: defaultToConfig2,
        httpsAgent: defaultToConfig2,
        cancelToken: defaultToConfig2,
        socketPath: defaultToConfig2,
        responseEncoding: defaultToConfig2,
        validateStatus: mergeDirectKeys,
        headers: (a, b) =>
          mergeDeepProperties(headersToObject(a), headersToObject(b), true),
      };
      utils.forEach(
        Object.keys(Object.assign({}, config1, config2)),
        function computeConfigValue(prop) {
          const merge2 = mergeMap[prop] || mergeDeepProperties;
          const configValue = merge2(config1[prop], config2[prop], prop);
          (utils.isUndefined(configValue) && merge2 !== mergeDirectKeys) ||
            (config[prop] = configValue);
        },
      );
      return config;
    }
    const VERSION = "1.5.1";
    const validators$1 = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(
      (type, i) => {
        validators$1[type] = function validator2(thing) {
          return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
        };
      },
    );
    const deprecatedWarnings = {};
    validators$1.transitional = function transitional(
      validator2,
      version2,
      message,
    ) {
      function formatMessage(opt, desc) {
        return (
          "[Axios v" +
          VERSION +
          "] Transitional option '" +
          opt +
          "'" +
          desc +
          (message ? ". " + message : "")
        );
      }
      return (value, opt, opts) => {
        if (validator2 === false) {
          throw new AxiosError(
            formatMessage(
              opt,
              " has been removed" + (version2 ? " in " + version2 : ""),
            ),
            AxiosError.ERR_DEPRECATED,
          );
        }
        if (version2 && !deprecatedWarnings[opt]) {
          deprecatedWarnings[opt] = true;
          console.warn(
            formatMessage(
              opt,
              " has been deprecated since v" +
                version2 +
                " and will be removed in the near future",
            ),
          );
        }
        return validator2 ? validator2(value, opt, opts) : true;
      };
    };

    function assertOptions(options, schema, allowUnknown) {
      if (typeof options !== "object") {
        throw new AxiosError(
          "options must be an object",
          AxiosError.ERR_BAD_OPTION_VALUE,
        );
      }
      const keys = Object.keys(options);
      let i = keys.length;
      while (i-- > 0) {
        const opt = keys[i];
        const validator2 = schema[opt];
        if (validator2) {
          const value = options[opt];
          const result = value === void 0 || validator2(value, opt, options);
          if (result !== true) {
            throw new AxiosError(
              "option " + opt + " must be " + result,
              AxiosError.ERR_BAD_OPTION_VALUE,
            );
          }
          continue;
        }
        if (allowUnknown !== true) {
          throw new AxiosError(
            "Unknown option " + opt,
            AxiosError.ERR_BAD_OPTION,
          );
        }
      }
    }
    const validator = {
      assertOptions,
      validators: validators$1,
    };
    const validators = validator.validators;
    class Axios {
      constructor(instanceConfig) {
        this.defaults = instanceConfig;
        this.interceptors = {
          request: new InterceptorManager$1(),
          response: new InterceptorManager$1(),
        };
      }
      /**
       * Dispatch a request
       *
       * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
       * @param {?Object} config
       *
       * @returns {Promise} The Promise to be fulfilled
       */
      request(configOrUrl, config) {
        if (typeof configOrUrl === "string") {
          config = config || {};
          config.url = configOrUrl;
        } else {
          config = configOrUrl || {};
        }
        config = mergeConfig(this.defaults, config);
        const { transitional, paramsSerializer, headers } = config;
        if (transitional !== void 0) {
          validator.assertOptions(
            transitional,
            {
              silentJSONParsing: validators.transitional(validators.boolean),
              forcedJSONParsing: validators.transitional(validators.boolean),
              clarifyTimeoutError: validators.transitional(validators.boolean),
            },
            false,
          );
        }
        if (paramsSerializer != null) {
          if (utils.isFunction(paramsSerializer)) {
            config.paramsSerializer = {
              serialize: paramsSerializer,
            };
          } else {
            validator.assertOptions(
              paramsSerializer,
              {
                encode: validators.function,
                serialize: validators.function,
              },
              true,
            );
          }
        }
        config.method = (
          config.method ||
          this.defaults.method ||
          "get"
        ).toLowerCase();
        let contextHeaders =
          headers && utils.merge(headers.common, headers[config.method]);
        headers &&
          utils.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            (method) => {
              delete headers[method];
            },
          );
        config.headers = AxiosHeaders$1.concat(contextHeaders, headers);
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(
          function unshiftRequestInterceptors(interceptor) {
            if (
              typeof interceptor.runWhen === "function" &&
              interceptor.runWhen(config) === false
            ) {
              return;
            }
            synchronousRequestInterceptors =
              synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(
              interceptor.fulfilled,
              interceptor.rejected,
            );
          },
        );
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(
          function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(
              interceptor.fulfilled,
              interceptor.rejected,
            );
          },
        );
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
          const chain = [dispatchRequest.bind(this), void 0];
          chain.unshift.apply(chain, requestInterceptorChain);
          chain.push.apply(chain, responseInterceptorChain);
          len = chain.length;
          promise = Promise.resolve(config);
          while (i < len) {
            promise = promise.then(chain[i++], chain[i++]);
          }
          return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config;
        i = 0;
        while (i < len) {
          const onFulfilled = requestInterceptorChain[i++];
          const onRejected = requestInterceptorChain[i++];
          try {
            newConfig = onFulfilled(newConfig);
          } catch (error) {
            onRejected.call(this, error);
            break;
          }
        }
        try {
          promise = dispatchRequest.call(this, newConfig);
        } catch (error) {
          return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while (i < len) {
          promise = promise.then(
            responseInterceptorChain[i++],
            responseInterceptorChain[i++],
          );
        }
        return promise;
      }
      getUri(config) {
        config = mergeConfig(this.defaults, config);
        const fullPath = buildFullPath(config.baseURL, config.url);
        return buildURL(fullPath, config.params, config.paramsSerializer);
      }
    }
    utils.forEach(
      ["delete", "get", "head", "options"],
      function forEachMethodNoData(method) {
        Axios.prototype[method] = function (url, config) {
          return this.request(
            mergeConfig(config || {}, {
              method,
              url,
              data: (config || {}).data,
            }),
          );
        };
      },
    );
    utils.forEach(
      ["post", "put", "patch"],
      function forEachMethodWithData(method) {
        function generateHTTPMethod(isForm) {
          return function httpMethod(url, data, config) {
            return this.request(
              mergeConfig(config || {}, {
                method,
                headers: isForm
                  ? {
                      "Content-Type": "multipart/form-data",
                    }
                  : {},
                url,
                data,
              }),
            );
          };
        }
        Axios.prototype[method] = generateHTTPMethod();
        Axios.prototype[method + "Form"] = generateHTTPMethod(true);
      },
    );
    const Axios$1 = Axios;
    class CancelToken {
      constructor(executor) {
        if (typeof executor !== "function") {
          throw new TypeError("executor must be a function.");
        }
        let resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve2) {
          resolvePromise = resolve2;
        });
        const token = this;
        this.promise.then((cancel) => {
          if (!token._listeners) return;
          let i = token._listeners.length;
          while (i-- > 0) {
            token._listeners[i](cancel);
          }
          token._listeners = null;
        });
        this.promise.then = (onfulfilled) => {
          let _resolve;
          const promise = new Promise((resolve2) => {
            token.subscribe(resolve2);
            _resolve = resolve2;
          }).then(onfulfilled);
          promise.cancel = function reject() {
            token.unsubscribe(_resolve);
          };
          return promise;
        };
        executor(function cancel(message, config, request) {
          if (token.reason) {
            return;
          }
          token.reason = new CanceledError(message, config, request);
          resolvePromise(token.reason);
        });
      }
      /**
       * Throws a `CanceledError` if cancellation has been requested.
       */
      throwIfRequested() {
        if (this.reason) {
          throw this.reason;
        }
      }
      /**
       * Subscribe to the cancel signal
       */
      subscribe(listener) {
        if (this.reason) {
          listener(this.reason);
          return;
        }
        if (this._listeners) {
          this._listeners.push(listener);
        } else {
          this._listeners = [listener];
        }
      }
      /**
       * Unsubscribe from the cancel signal
       */
      unsubscribe(listener) {
        if (!this._listeners) {
          return;
        }
        const index = this._listeners.indexOf(listener);
        if (index !== -1) {
          this._listeners.splice(index, 1);
        }
      }
      /**
       * Returns an object that contains a new `CancelToken` and a function that, when called,
       * cancels the `CancelToken`.
       */
      static source() {
        let cancel;
        const token = new CancelToken(function executor(c2) {
          cancel = c2;
        });
        return {
          token,
          cancel,
        };
      }
    }
    const CancelToken$1 = CancelToken;

    function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    }

    function isAxiosError(payload) {
      return utils.isObject(payload) && payload.isAxiosError === true;
    }
    const HttpStatusCode = {
      Continue: 100,
      SwitchingProtocols: 101,
      Processing: 102,
      EarlyHints: 103,
      Ok: 200,
      Created: 201,
      Accepted: 202,
      NonAuthoritativeInformation: 203,
      NoContent: 204,
      ResetContent: 205,
      PartialContent: 206,
      MultiStatus: 207,
      AlreadyReported: 208,
      ImUsed: 226,
      MultipleChoices: 300,
      MovedPermanently: 301,
      Found: 302,
      SeeOther: 303,
      NotModified: 304,
      UseProxy: 305,
      Unused: 306,
      TemporaryRedirect: 307,
      PermanentRedirect: 308,
      BadRequest: 400,
      Unauthorized: 401,
      PaymentRequired: 402,
      Forbidden: 403,
      NotFound: 404,
      MethodNotAllowed: 405,
      NotAcceptable: 406,
      ProxyAuthenticationRequired: 407,
      RequestTimeout: 408,
      Conflict: 409,
      Gone: 410,
      LengthRequired: 411,
      PreconditionFailed: 412,
      PayloadTooLarge: 413,
      UriTooLong: 414,
      UnsupportedMediaType: 415,
      RangeNotSatisfiable: 416,
      ExpectationFailed: 417,
      ImATeapot: 418,
      MisdirectedRequest: 421,
      UnprocessableEntity: 422,
      Locked: 423,
      FailedDependency: 424,
      TooEarly: 425,
      UpgradeRequired: 426,
      PreconditionRequired: 428,
      TooManyRequests: 429,
      RequestHeaderFieldsTooLarge: 431,
      UnavailableForLegalReasons: 451,
      InternalServerError: 500,
      NotImplemented: 501,
      BadGateway: 502,
      ServiceUnavailable: 503,
      GatewayTimeout: 504,
      HttpVersionNotSupported: 505,
      VariantAlsoNegotiates: 506,
      InsufficientStorage: 507,
      LoopDetected: 508,
      NotExtended: 510,
      NetworkAuthenticationRequired: 511,
    };
    Object.entries(HttpStatusCode).forEach(([key, value]) => {
      HttpStatusCode[value] = key;
    });
    const HttpStatusCode$1 = HttpStatusCode;

    function createInstance(defaultConfig) {
      const context = new Axios$1(defaultConfig);
      const instance = bind(Axios$1.prototype.request, context);
      utils.extend(instance, Axios$1.prototype, context, {
        allOwnKeys: true,
      });
      utils.extend(instance, context, null, {
        allOwnKeys: true,
      });
      instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig, instanceConfig));
      };
      return instance;
    }
    const axios = createInstance(defaults$1);
    axios.Axios = Axios$1;
    axios.CanceledError = CanceledError;
    axios.CancelToken = CancelToken$1;
    axios.isCancel = isCancel;
    axios.VERSION = VERSION;
    axios.toFormData = toFormData;
    axios.AxiosError = AxiosError;
    axios.Cancel = axios.CanceledError;
    axios.all = function all(promises) {
      return Promise.all(promises);
    };
    axios.spread = spread;
    axios.isAxiosError = isAxiosError;
    axios.mergeConfig = mergeConfig;
    axios.AxiosHeaders = AxiosHeaders$1;
    axios.formToJSON = (thing) =>
      formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);
    axios.getAdapter = adapters.getAdapter;
    axios.HttpStatusCode = HttpStatusCode$1;
    axios.default = axios;
    const axios$1 = axios;

    function _typeof(e) {
      return (
        (_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e2) {
                return typeof e2;
              }
            : function (e2) {
                return e2 &&
                  "function" == typeof Symbol &&
                  e2.constructor === Symbol &&
                  e2 !== Symbol.prototype
                  ? "symbol"
                  : typeof e2;
              }),
        _typeof(e)
      );
    }

    function plugin(e, n) {
      if (!e.vueAxiosInstalled) {
        var o = isAxiosLike(n) ? migrateToMultipleInstances(n) : n;
        if (isValidConfig(o)) {
          var t = getVueVersion(e);
          if (t) {
            var i = t < 3 ? registerOnVue2 : registerOnVue3;
            Object.keys(o).forEach(function (n2) {
              i(e, n2, o[n2]);
            }),
              (e.vueAxiosInstalled = true);
          } else console.error("[vue-axios] unknown Vue version");
        } else
          console.error(
            "[vue-axios] configuration is invalid, expected options are either <axios_instance> or { <registration_key>: <axios_instance> }",
          );
      }
    }

    function registerOnVue2(e, n, o) {
      Object.defineProperty(e.prototype, n, {
        get: function () {
          return o;
        },
      }),
        (e[n] = o);
    }

    function registerOnVue3(e, n, o) {
      (e.config.globalProperties[n] = o), (e[n] = o);
    }

    function isAxiosLike(e) {
      return e && "function" == typeof e.get && "function" == typeof e.post;
    }

    function migrateToMultipleInstances(e) {
      return {
        axios: e,
        $http: e,
      };
    }

    function isValidConfig(e) {
      return (
        "object" === _typeof(e) &&
        Object.keys(e).every(function (n) {
          return isAxiosLike(e[n]);
        })
      );
    }

    function getVueVersion(e) {
      return e && e.version && Number(e.version.split(".")[0]);
    }
    "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports))
      ? (module.exports = plugin)
      : "function" == typeof define && define.amd
        ? define([], function () {
            return plugin;
          })
        : window.Vue &&
          window.axios &&
          window.Vue.use &&
          Vue.use(plugin, window.axios);
    var commonjsGlobal =
      typeof globalThis !== "undefined"
        ? globalThis
        : typeof window !== "undefined"
          ? window
          : typeof global !== "undefined"
            ? global
            : typeof self !== "undefined"
              ? self
              : {};

    function getDefaultExportFromCjs(x) {
      return x &&
        x.__esModule &&
        Object.prototype.hasOwnProperty.call(x, "default")
        ? x["default"]
        : x;
    }

    function getAugmentedNamespace(n) {
      if (n.__esModule) return n;
      var f = n.default;
      if (typeof f == "function") {
        var a = function a2() {
          if (this instanceof a2) {
            return Reflect.construct(f, arguments, this.constructor);
          }
          return f.apply(this, arguments);
        };
        a.prototype = f.prototype;
      } else a = {};
      Object.defineProperty(a, "__esModule", {
        value: true,
      });
      Object.keys(n).forEach(function (k) {
        var d2 = Object.getOwnPropertyDescriptor(n, k);
        Object.defineProperty(
          a,
          k,
          d2.get
            ? d2
            : {
                enumerable: true,
                get: function () {
                  return n[k];
                },
              },
        );
      });
      return a;
    }
    var vueSliderComponent_umd_min = {
      exports: {},
    };
    const require$$0 = /* @__PURE__ */ getAugmentedNamespace(
      vue_runtime_esmBundler,
    );
    (function (module2, exports2) {
      (function (t, e) {
        module2.exports = e(require$$0);
      })("undefined" !== typeof self ? self : commonjsGlobal, function (t) {
        return (function () {
          var e = {
              388: function (t2, e2) {
                var r2, n2, i2;
                (function (o, a) {
                  (n2 = []),
                    (r2 = a),
                    (i2 = "function" === typeof r2 ? r2.apply(e2, n2) : r2),
                    void 0 === i2 || (t2.exports = i2);
                })("undefined" !== typeof self && self, function () {
                  function t3() {
                    var e3 = Object.getOwnPropertyDescriptor(
                      document,
                      "currentScript",
                    );
                    if (
                      !e3 &&
                      "currentScript" in document &&
                      document.currentScript
                    )
                      return document.currentScript;
                    if (e3 && e3.get !== t3 && document.currentScript)
                      return document.currentScript;
                    try {
                      throw new Error();
                    } catch (f) {
                      var r3,
                        n3,
                        i3,
                        o = /.*at [^(]*\((.*):(.+):(.+)\)$/gi,
                        a = /@([^@]*):(\d+):(\d+)\s*$/gi,
                        s = o.exec(f.stack) || a.exec(f.stack),
                        l = (s && s[1]) || false,
                        u = (s && s[2]) || false,
                        c2 = document.location.href.replace(
                          document.location.hash,
                          "",
                        ),
                        d2 = document.getElementsByTagName("script");
                      l === c2 &&
                        ((r3 = document.documentElement.outerHTML),
                        (n3 = new RegExp(
                          "(?:[^\\n]+?\\n){0," +
                            (u - 2) +
                            "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*",
                          "i",
                        )),
                        (i3 = r3.replace(n3, "$1").trim()));
                      for (var h2 = 0; h2 < d2.length; h2++) {
                        if ("interactive" === d2[h2].readyState) return d2[h2];
                        if (d2[h2].src === l) return d2[h2];
                        if (
                          l === c2 &&
                          d2[h2].innerHTML &&
                          d2[h2].innerHTML.trim() === i3
                        )
                          return d2[h2];
                      }
                      return null;
                    }
                  }
                  return t3;
                });
              },
              905: function (t2, e2, r2) {
                r2.r(e2);
                var n2 = r2(117),
                  i2 = r2.n(n2),
                  o = r2(488),
                  a = r2.n(o),
                  s = a()(i2());
                s.push([
                  t2.id,
                  ".vue-slider-dot{position:absolute;-webkit-transition:all 0s;transition:all 0s;z-index:5}.vue-slider-dot:focus{outline:none}.vue-slider-dot-tooltip{position:absolute;visibility:hidden}.vue-slider-dot-hover:hover .vue-slider-dot-tooltip,.vue-slider-dot-tooltip-show{visibility:visible}.vue-slider-dot-tooltip-top{top:-10px;left:50%;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.vue-slider-dot-tooltip-bottom{bottom:-10px;left:50%;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}.vue-slider-dot-tooltip-left{left:-10px;top:50%;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.vue-slider-dot-tooltip-right{right:-10px;top:50%;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}",
                  "",
                ]),
                  (e2["default"] = s);
              },
              121: function (t2, e2, r2) {
                r2.r(e2);
                var n2 = r2(117),
                  i2 = r2.n(n2),
                  o = r2(488),
                  a = r2.n(o),
                  s = a()(i2());
                s.push([
                  t2.id,
                  ".vue-slider-marks{position:relative;width:100%;height:100%}.vue-slider-mark{position:absolute;z-index:1}.vue-slider-ltr .vue-slider-mark,.vue-slider-rtl .vue-slider-mark{width:0;height:100%;top:50%}.vue-slider-ltr .vue-slider-mark-step,.vue-slider-rtl .vue-slider-mark-step{top:0}.vue-slider-ltr .vue-slider-mark-label,.vue-slider-rtl .vue-slider-mark-label{top:100%;margin-top:10px}.vue-slider-ltr .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ltr .vue-slider-mark-step{left:0}.vue-slider-ltr .vue-slider-mark-label{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.vue-slider-rtl .vue-slider-mark{-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}.vue-slider-rtl .vue-slider-mark-step{right:0}.vue-slider-rtl .vue-slider-mark-label{right:50%;-webkit-transform:translateX(50%);transform:translateX(50%)}.vue-slider-btt .vue-slider-mark,.vue-slider-ttb .vue-slider-mark{width:100%;height:0;left:50%}.vue-slider-btt .vue-slider-mark-step,.vue-slider-ttb .vue-slider-mark-step{left:0}.vue-slider-btt .vue-slider-mark-label,.vue-slider-ttb .vue-slider-mark-label{left:100%;margin-left:10px}.vue-slider-btt .vue-slider-mark{-webkit-transform:translate(-50%,50%);transform:translate(-50%,50%)}.vue-slider-btt .vue-slider-mark-step{top:0}.vue-slider-btt .vue-slider-mark-label{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-slider-ttb .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ttb .vue-slider-mark-step{bottom:0}.vue-slider-ttb .vue-slider-mark-label{bottom:50%;-webkit-transform:translateY(50%);transform:translateY(50%)}.vue-slider-mark-label,.vue-slider-mark-step{position:absolute}",
                  "",
                ]),
                  (e2["default"] = s);
              },
              207: function (t2, e2, r2) {
                r2.r(e2);
                var n2 = r2(117),
                  i2 = r2.n(n2),
                  o = r2(488),
                  a = r2.n(o),
                  s = a()(i2());
                s.push([
                  t2.id,
                  ".vue-slider{position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;-webkit-tap-highlight-color:rgba(0,0,0,0)}.vue-slider-rail{position:relative;width:100%;height:100%;-webkit-transition-property:width,height,left,right,top,bottom;transition-property:width,height,left,right,top,bottom}.vue-slider-process{position:absolute;z-index:1}",
                  "",
                ]),
                  (e2["default"] = s);
              },
              488: function (t2) {
                t2.exports = function (t3) {
                  var e2 = [];
                  return (
                    (e2.toString = function () {
                      return this.map(function (e3) {
                        var r2 = "",
                          n2 = "undefined" !== typeof e3[5];
                        return (
                          e3[4] && (r2 += "@supports (".concat(e3[4], ") {")),
                          e3[2] && (r2 += "@media ".concat(e3[2], " {")),
                          n2 &&
                            (r2 += "@layer".concat(
                              e3[5].length > 0 ? " ".concat(e3[5]) : "",
                              " {",
                            )),
                          (r2 += t3(e3)),
                          n2 && (r2 += "}"),
                          e3[2] && (r2 += "}"),
                          e3[4] && (r2 += "}"),
                          r2
                        );
                      }).join("");
                    }),
                    (e2.i = function (t4, r2, n2, i2, o) {
                      "string" === typeof t4 && (t4 = [[null, t4, void 0]]);
                      var a = {};
                      if (n2)
                        for (var s = 0; s < this.length; s++) {
                          var l = this[s][0];
                          null != l && (a[l] = true);
                        }
                      for (var u = 0; u < t4.length; u++) {
                        var c2 = [].concat(t4[u]);
                        (n2 && a[c2[0]]) ||
                          ("undefined" !== typeof o &&
                            ("undefined" === typeof c2[5] ||
                              (c2[1] = "@layer"
                                .concat(
                                  c2[5].length > 0 ? " ".concat(c2[5]) : "",
                                  " {",
                                )
                                .concat(c2[1], "}")),
                            (c2[5] = o)),
                          r2 &&
                            (c2[2]
                              ? ((c2[1] = "@media "
                                  .concat(c2[2], " {")
                                  .concat(c2[1], "}")),
                                (c2[2] = r2))
                              : (c2[2] = r2)),
                          i2 &&
                            (c2[4]
                              ? ((c2[1] = "@supports ("
                                  .concat(c2[4], ") {")
                                  .concat(c2[1], "}")),
                                (c2[4] = i2))
                              : (c2[4] = "".concat(i2))),
                          e2.push(c2));
                      }
                    }),
                    e2
                  );
                };
              },
              117: function (t2) {
                t2.exports = function (t3) {
                  return t3[1];
                };
              },
              831: function (t2, e2) {
                e2.Z = (t3, e3) => {
                  const r2 = t3.__vccOpts || t3;
                  for (const [n2, i2] of e3) r2[n2] = i2;
                  return r2;
                };
              },
              466: function (t2, e2, r2) {
                var n2 = r2(905);
                n2.__esModule && (n2 = n2.default),
                  "string" === typeof n2 && (n2 = [[t2.id, n2, ""]]),
                  n2.locals && (t2.exports = n2.locals);
                var i2 = r2(959).Z;
                i2("50bc1720", n2, true, {
                  sourceMap: false,
                  shadowMode: false,
                });
              },
              18: function (t2, e2, r2) {
                var n2 = r2(121);
                n2.__esModule && (n2 = n2.default),
                  "string" === typeof n2 && (n2 = [[t2.id, n2, ""]]),
                  n2.locals && (t2.exports = n2.locals);
                var i2 = r2(959).Z;
                i2("10aa5f36", n2, true, {
                  sourceMap: false,
                  shadowMode: false,
                });
              },
              631: function (t2, e2, r2) {
                var n2 = r2(207);
                n2.__esModule && (n2 = n2.default),
                  "string" === typeof n2 && (n2 = [[t2.id, n2, ""]]),
                  n2.locals && (t2.exports = n2.locals);
                var i2 = r2(959).Z;
                i2("1772934e", n2, true, {
                  sourceMap: false,
                  shadowMode: false,
                });
              },
              959: function (t2, e2, r2) {
                function n2(t3, e3) {
                  for (var r3 = [], n3 = {}, i3 = 0; i3 < e3.length; i3++) {
                    var o2 = e3[i3],
                      a2 = o2[0],
                      s2 = o2[1],
                      l2 = o2[2],
                      u2 = o2[3],
                      c3 = {
                        id: t3 + ":" + i3,
                        css: s2,
                        media: l2,
                        sourceMap: u2,
                      };
                    n3[a2]
                      ? n3[a2].parts.push(c3)
                      : r3.push(
                          (n3[a2] = {
                            id: a2,
                            parts: [c3],
                          }),
                        );
                  }
                  return r3;
                }
                r2.d(e2, {
                  Z: function () {
                    return p2;
                  },
                });
                var i2 = "undefined" !== typeof document;
                if ("undefined" !== typeof DEBUG && DEBUG && !i2)
                  throw new Error(
                    "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
                  );
                var o = {},
                  a =
                    i2 &&
                    (document.head || document.getElementsByTagName("head")[0]),
                  s = null,
                  l = 0,
                  u = false,
                  c2 = function () {},
                  d2 = null,
                  h2 = "data-vue-ssr-id",
                  f =
                    "undefined" !== typeof navigator &&
                    /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

                function p2(t3, e3, r3, i3) {
                  (u = r3), (d2 = i3 || {});
                  var a2 = n2(t3, e3);
                  return (
                    m(a2),
                    function (e4) {
                      for (var r4 = [], i4 = 0; i4 < a2.length; i4++) {
                        var s2 = a2[i4],
                          l2 = o[s2.id];
                        l2.refs--, r4.push(l2);
                      }
                      e4 ? ((a2 = n2(t3, e4)), m(a2)) : (a2 = []);
                      for (i4 = 0; i4 < r4.length; i4++) {
                        l2 = r4[i4];
                        if (0 === l2.refs) {
                          for (var u2 = 0; u2 < l2.parts.length; u2++)
                            l2.parts[u2]();
                          delete o[l2.id];
                        }
                      }
                    }
                  );
                }

                function m(t3) {
                  for (var e3 = 0; e3 < t3.length; e3++) {
                    var r3 = t3[e3],
                      n3 = o[r3.id];
                    if (n3) {
                      n3.refs++;
                      for (var i3 = 0; i3 < n3.parts.length; i3++)
                        n3.parts[i3](r3.parts[i3]);
                      for (; i3 < r3.parts.length; i3++)
                        n3.parts.push(y2(r3.parts[i3]));
                      n3.parts.length > r3.parts.length &&
                        (n3.parts.length = r3.parts.length);
                    } else {
                      var a2 = [];
                      for (i3 = 0; i3 < r3.parts.length; i3++)
                        a2.push(y2(r3.parts[i3]));
                      o[r3.id] = {
                        id: r3.id,
                        refs: 1,
                        parts: a2,
                      };
                    }
                  }
                }

                function v() {
                  var t3 = document.createElement("style");
                  return (t3.type = "text/css"), a.appendChild(t3), t3;
                }

                function y2(t3) {
                  var e3,
                    r3,
                    n3 = document.querySelector(
                      "style[" + h2 + '~="' + t3.id + '"]',
                    );
                  if (n3) {
                    if (u) return c2;
                    n3.parentNode.removeChild(n3);
                  }
                  if (f) {
                    var i3 = l++;
                    (n3 = s || (s = v())),
                      (e3 = g.bind(null, n3, i3, false)),
                      (r3 = g.bind(null, n3, i3, true));
                  } else
                    (n3 = v()),
                      (e3 = k.bind(null, n3)),
                      (r3 = function () {
                        n3.parentNode.removeChild(n3);
                      });
                  return (
                    e3(t3),
                    function (n4) {
                      if (n4) {
                        if (
                          n4.css === t3.css &&
                          n4.media === t3.media &&
                          n4.sourceMap === t3.sourceMap
                        )
                          return;
                        e3((t3 = n4));
                      } else r3();
                    }
                  );
                }
                var b = (function () {
                  var t3 = [];
                  return function (e3, r3) {
                    return (t3[e3] = r3), t3.filter(Boolean).join("\n");
                  };
                })();

                function g(t3, e3, r3, n3) {
                  var i3 = r3 ? "" : n3.css;
                  if (t3.styleSheet) t3.styleSheet.cssText = b(e3, i3);
                  else {
                    var o2 = document.createTextNode(i3),
                      a2 = t3.childNodes;
                    a2[e3] && t3.removeChild(a2[e3]),
                      a2.length
                        ? t3.insertBefore(o2, a2[e3])
                        : t3.appendChild(o2);
                  }
                }

                function k(t3, e3) {
                  var r3 = e3.css,
                    n3 = e3.media,
                    i3 = e3.sourceMap;
                  if (
                    (n3 && t3.setAttribute("media", n3),
                    d2.ssrId && t3.setAttribute(h2, e3.id),
                    i3 &&
                      ((r3 += "\n/*# sourceURL=" + i3.sources[0] + " */"),
                      (r3 +=
                        "\n/*# sourceMappingURL=data:application/json;base64," +
                        btoa(unescape(encodeURIComponent(JSON.stringify(i3)))) +
                        " */")),
                    t3.styleSheet)
                  )
                    t3.styleSheet.cssText = r3;
                  else {
                    while (t3.firstChild) t3.removeChild(t3.firstChild);
                    t3.appendChild(document.createTextNode(r3));
                  }
                }
              },
              927: function (e2) {
                e2.exports = t;
              },
            },
            r = {};

          function n(t2) {
            var i2 = r[t2];
            if (void 0 !== i2) return i2.exports;
            var o = (r[t2] = {
              id: t2,
              exports: {},
            });
            return e[t2].call(o.exports, o, o.exports, n), o.exports;
          }
          !(function () {
            n.n = function (t2) {
              var e2 =
                t2 && t2.__esModule
                  ? function () {
                      return t2["default"];
                    }
                  : function () {
                      return t2;
                    };
              return (
                n.d(e2, {
                  a: e2,
                }),
                e2
              );
            };
          })(),
            (function () {
              n.d = function (t2, e2) {
                for (var r2 in e2)
                  n.o(e2, r2) &&
                    !n.o(t2, r2) &&
                    Object.defineProperty(t2, r2, {
                      enumerable: true,
                      get: e2[r2],
                    });
              };
            })(),
            (function () {
              n.o = function (t2, e2) {
                return Object.prototype.hasOwnProperty.call(t2, e2);
              };
            })(),
            (function () {
              n.r = function (t2) {
                "undefined" !== typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(t2, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(t2, "__esModule", {
                    value: true,
                  });
              };
            })(),
            (function () {
              n.p = "";
            })();
          var i = {};
          return (
            (function () {
              if (
                (n.d(i, {
                  default: function () {
                    return St;
                  },
                }),
                "undefined" !== typeof window)
              ) {
                var t2 = window.document.currentScript,
                  e2 = n(388);
                (t2 = e2()),
                  "currentScript" in document ||
                    Object.defineProperty(document, "currentScript", {
                      get: e2,
                    });
                var r2 = t2 && t2.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
                r2 && (n.p = r2[1]);
              }
              var o = n(927);

              function a(t3, e3, r3) {
                return (
                  e3 in t3
                    ? Object.defineProperty(t3, e3, {
                        value: r3,
                        enumerable: true,
                        configurable: true,
                        writable: true,
                      })
                    : (t3[e3] = r3),
                  t3
                );
              }
              var s = {
                key: 0,
                class: "vue-slider-marks",
              };

              function l(t3, e3, r3, n2, i2, l2) {
                var u2 = (0, o.resolveComponent)("vue-slider-mark"),
                  c3 = (0, o.resolveComponent)("vue-slider-dot");
                return (
                  (0, o.openBlock)(),
                  (0, o.createElementBlock)(
                    "div",
                    (0, o.mergeProps)(
                      {
                        ref: "container",
                        class: t3.containerClasses,
                        style: t3.containerStyles,
                        onClick:
                          e3[2] ||
                          (e3[2] = function () {
                            return (
                              t3.clickHandle &&
                              t3.clickHandle.apply(t3, arguments)
                            );
                          }),
                        onTouchstartPassive:
                          e3[3] ||
                          (e3[3] = function () {
                            return (
                              t3.dragStartOnProcess &&
                              t3.dragStartOnProcess.apply(t3, arguments)
                            );
                          }),
                        onMousedownPassive:
                          e3[4] ||
                          (e3[4] = function () {
                            return (
                              t3.dragStartOnProcess &&
                              t3.dragStartOnProcess.apply(t3, arguments)
                            );
                          }),
                      },
                      t3.$attrs,
                    ),
                    [
                      (0, o.createElementVNode)(
                        "div",
                        {
                          class: "vue-slider-rail",
                          style: (0, o.normalizeStyle)(t3.railStyle),
                        },
                        [
                          ((0, o.openBlock)(true),
                          (0, o.createElementBlock)(
                            o.Fragment,
                            null,
                            (0, o.renderList)(
                              t3.processArray,
                              function (e4, r4) {
                                return (0, o.renderSlot)(
                                  t3.$slots,
                                  "process",
                                  (0, o.normalizeProps)(
                                    (0, o.guardReactiveProps)(e4),
                                  ),
                                  function () {
                                    return [
                                      ((0, o.openBlock)(),
                                      (0, o.createElementBlock)(
                                        "div",
                                        {
                                          class: "vue-slider-process",
                                          key: "process-".concat(r4),
                                          style: (0, o.normalizeStyle)(
                                            e4.style,
                                          ),
                                        },
                                        null,
                                        4,
                                      )),
                                    ];
                                  },
                                );
                              },
                            ),
                            256,
                          )),
                          t3.sliderMarks && t3.control
                            ? ((0, o.openBlock)(),
                              (0, o.createElementBlock)("div", s, [
                                ((0, o.openBlock)(true),
                                (0, o.createElementBlock)(
                                  o.Fragment,
                                  null,
                                  (0, o.renderList)(
                                    t3.control.markList,
                                    function (r4, n3) {
                                      return (0, o.renderSlot)(
                                        t3.$slots,
                                        "mark",
                                        (0, o.normalizeProps)(
                                          (0, o.guardReactiveProps)(r4),
                                        ),
                                        function () {
                                          var i3;
                                          return [
                                            ((0, o.openBlock)(),
                                            (0, o.createBlock)(
                                              u2,
                                              {
                                                key: "mark-".concat(n3),
                                                mark: r4,
                                                hideLabel: t3.hideLabel,
                                                style: (0, o.normalizeStyle)(
                                                  ((i3 = {}),
                                                  a(
                                                    i3,
                                                    t3.isHorizontal
                                                      ? "height"
                                                      : "width",
                                                    "100%",
                                                  ),
                                                  a(
                                                    i3,
                                                    t3.isHorizontal
                                                      ? "width"
                                                      : "height",
                                                    t3.tailSize,
                                                  ),
                                                  a(
                                                    i3,
                                                    t3.mainDirection,
                                                    "".concat(r4.pos, "%"),
                                                  ),
                                                  i3),
                                                ),
                                                stepStyle: t3.stepStyle,
                                                stepActiveStyle:
                                                  t3.stepActiveStyle,
                                                labelStyle: t3.labelStyle,
                                                labelActiveStyle:
                                                  t3.labelActiveStyle,
                                                onPressLabel:
                                                  e3[0] ||
                                                  (e3[0] = function (e4) {
                                                    return (
                                                      t3.clickable &&
                                                      t3.setValueByPos(e4)
                                                    );
                                                  }),
                                              },
                                              {
                                                step: (0, o.withCtx)(
                                                  function () {
                                                    return [
                                                      (0, o.renderSlot)(
                                                        t3.$slots,
                                                        "step",
                                                        (0, o.normalizeProps)(
                                                          (0,
                                                          o.guardReactiveProps)(
                                                            r4,
                                                          ),
                                                        ),
                                                      ),
                                                    ];
                                                  },
                                                ),
                                                label: (0, o.withCtx)(
                                                  function () {
                                                    return [
                                                      (0, o.renderSlot)(
                                                        t3.$slots,
                                                        "label",
                                                        (0, o.normalizeProps)(
                                                          (0,
                                                          o.guardReactiveProps)(
                                                            r4,
                                                          ),
                                                        ),
                                                      ),
                                                    ];
                                                  },
                                                ),
                                                _: 2,
                                              },
                                              1032,
                                              [
                                                "mark",
                                                "hideLabel",
                                                "style",
                                                "stepStyle",
                                                "stepActiveStyle",
                                                "labelStyle",
                                                "labelActiveStyle",
                                              ],
                                            )),
                                          ];
                                        },
                                      );
                                    },
                                  ),
                                  256,
                                )),
                              ]))
                            : (0, o.createCommentVNode)("", true),
                          ((0, o.openBlock)(true),
                          (0, o.createElementBlock)(
                            o.Fragment,
                            null,
                            (0, o.renderList)(t3.dots, function (r4, n3) {
                              var i3;
                              return (
                                (0, o.openBlock)(),
                                (0, o.createBlock)(
                                  c3,
                                  (0, o.mergeProps)(
                                    {
                                      ref_for: true,
                                      ref: "dot-".concat(n3),
                                      key: "dot-".concat(n3),
                                      value: r4.value,
                                      disabled: r4.disabled,
                                      focus: r4.focus,
                                      "dot-style": [
                                        r4.style,
                                        r4.disabled ? r4.disabledStyle : null,
                                        r4.focus ? r4.focusStyle : null,
                                      ],
                                      tooltip: r4.tooltip || t3.tooltip,
                                      "tooltip-style": [
                                        t3.tooltipStyle,
                                        r4.tooltipStyle,
                                        r4.disabled
                                          ? r4.tooltipDisabledStyle
                                          : null,
                                        r4.focus ? r4.tooltipFocusStyle : null,
                                      ],
                                      "tooltip-formatter": Array.isArray(
                                        t3.sliderTooltipFormatter,
                                      )
                                        ? t3.sliderTooltipFormatter[n3]
                                        : t3.sliderTooltipFormatter,
                                      "tooltip-placement":
                                        t3.tooltipDirections[n3],
                                      style: [
                                        t3.dotBaseStyle,
                                        ((i3 = {}),
                                        a(
                                          i3,
                                          t3.mainDirection,
                                          "".concat(r4.pos, "%"),
                                        ),
                                        a(
                                          i3,
                                          "transition",
                                          ""
                                            .concat(t3.mainDirection, " ")
                                            .concat(t3.animateTime, "s"),
                                        ),
                                        i3),
                                      ],
                                      onDragStart: function () {
                                        return t3.dragStart(n3);
                                      },
                                      role: "slider",
                                      "aria-valuenow": r4.value,
                                      "aria-valuemin": t3.min,
                                      "aria-valuemax": t3.max,
                                      "aria-orientation": t3.isHorizontal
                                        ? "horizontal"
                                        : "vertical",
                                      tabindex: "0",
                                      onFocus: function () {
                                        return t3.focus(r4, n3);
                                      },
                                      onBlur:
                                        e3[1] ||
                                        (e3[1] = function () {
                                          return t3.blur();
                                        }),
                                    },
                                    t3.dotAttrs,
                                  ),
                                  {
                                    dot: (0, o.withCtx)(function () {
                                      return [
                                        (0, o.renderSlot)(
                                          t3.$slots,
                                          "dot",
                                          (0, o.normalizeProps)(
                                            (0, o.guardReactiveProps)(r4),
                                          ),
                                        ),
                                      ];
                                    }),
                                    tooltip: (0, o.withCtx)(function () {
                                      return [
                                        (0, o.renderSlot)(
                                          t3.$slots,
                                          "tooltip",
                                          (0, o.normalizeProps)(
                                            (0, o.guardReactiveProps)(r4),
                                          ),
                                        ),
                                      ];
                                    }),
                                    _: 2,
                                  },
                                  1040,
                                  [
                                    "value",
                                    "disabled",
                                    "focus",
                                    "dot-style",
                                    "tooltip",
                                    "tooltip-style",
                                    "tooltip-formatter",
                                    "tooltip-placement",
                                    "style",
                                    "onDragStart",
                                    "aria-valuenow",
                                    "aria-valuemin",
                                    "aria-valuemax",
                                    "aria-orientation",
                                    "onFocus",
                                  ],
                                )
                              );
                            }),
                            128,
                          )),
                        ],
                        4,
                      ),
                      (0, o.renderSlot)(t3.$slots, "default", {
                        value: t3.getValue(),
                      }),
                    ],
                    16,
                  )
                );
              }
              var u = ["aria-valuetext"],
                c2 = {
                  class: "vue-slider-dot-tooltip-text",
                };

              function d2(t3, e3, r3, n2, i2, a2) {
                var s2;
                return (
                  (0, o.openBlock)(),
                  (0, o.createElementBlock)(
                    "div",
                    {
                      ref: "dot",
                      class: (0, o.normalizeClass)(t3.dotClasses),
                      "aria-valuetext":
                        null === (s2 = t3.tooltipValue) || void 0 === s2
                          ? void 0
                          : s2.toString(),
                      onMousedownPassive:
                        e3[0] ||
                        (e3[0] = function () {
                          return (
                            t3.dragStart && t3.dragStart.apply(t3, arguments)
                          );
                        }),
                      onTouchstartPassive:
                        e3[1] ||
                        (e3[1] = function () {
                          return (
                            t3.dragStart && t3.dragStart.apply(t3, arguments)
                          );
                        }),
                    },
                    [
                      (0, o.renderSlot)(t3.$slots, "dot", {}, function () {
                        return [
                          (0, o.createElementVNode)(
                            "div",
                            {
                              class: (0, o.normalizeClass)(t3.handleClasses),
                              style: (0, o.normalizeStyle)(t3.dotStyle),
                            },
                            null,
                            6,
                          ),
                        ];
                      }),
                      "none" !== t3.tooltip
                        ? ((0, o.openBlock)(),
                          (0, o.createElementBlock)(
                            "div",
                            {
                              key: 0,
                              class: (0, o.normalizeClass)(t3.tooltipClasses),
                            },
                            [
                              (0, o.renderSlot)(
                                t3.$slots,
                                "tooltip",
                                {},
                                function () {
                                  return [
                                    (0, o.createElementVNode)(
                                      "div",
                                      {
                                        class: (0, o.normalizeClass)(
                                          t3.tooltipInnerClasses,
                                        ),
                                        style: (0, o.normalizeStyle)(
                                          t3.tooltipStyle,
                                        ),
                                      },
                                      [
                                        (0, o.createElementVNode)(
                                          "span",
                                          c2,
                                          (0, o.toDisplayString)(
                                            t3.tooltipValue,
                                          ),
                                          1,
                                        ),
                                      ],
                                      6,
                                    ),
                                  ];
                                },
                              ),
                            ],
                            2,
                          ))
                        : (0, o.createCommentVNode)("", true),
                    ],
                    42,
                    u,
                  )
                );
              }
              n(466);
              var h2 = (0, o.defineComponent)({
                  name: "VueSliderDot",
                  emits: ["drag-start"],
                  props: {
                    value: {
                      type: [String, Number],
                      default: 0,
                    },
                    tooltip: {
                      type: String,
                      required: true,
                    },
                    tooltipPlacement: {
                      type: String,
                      validator: function (t3) {
                        return (
                          ["top", "right", "bottom", "left"].indexOf(t3) > -1
                        );
                      },
                      required: true,
                    },
                    tooltipFormatter: {
                      type: [String, Function],
                    },
                    focus: {
                      type: Boolean,
                      default: false,
                    },
                    disabled: {
                      type: Boolean,
                      default: false,
                    },
                    dotStyle: {
                      type: Object,
                    },
                    tooltipStyle: {
                      type: Object,
                    },
                  },
                  computed: {
                    dotClasses: function () {
                      return [
                        "vue-slider-dot",
                        {
                          "vue-slider-dot-hover":
                            "hover" === this.tooltip ||
                            "active" === this.tooltip,
                          "vue-slider-dot-disabled": this.disabled,
                          "vue-slider-dot-focus": this.focus,
                        },
                      ];
                    },
                    handleClasses: function () {
                      return [
                        "vue-slider-dot-handle",
                        {
                          "vue-slider-dot-handle-disabled": this.disabled,
                          "vue-slider-dot-handle-focus": this.focus,
                        },
                      ];
                    },
                    tooltipClasses: function () {
                      return [
                        "vue-slider-dot-tooltip",
                        [
                          "vue-slider-dot-tooltip-".concat(
                            this.tooltipPlacement,
                          ),
                        ],
                        {
                          "vue-slider-dot-tooltip-show": this.showTooltip,
                        },
                      ];
                    },
                    tooltipInnerClasses: function () {
                      return [
                        "vue-slider-dot-tooltip-inner",
                        [
                          "vue-slider-dot-tooltip-inner-".concat(
                            this.tooltipPlacement,
                          ),
                        ],
                        {
                          "vue-slider-dot-tooltip-inner-disabled":
                            this.disabled,
                          "vue-slider-dot-tooltip-inner-focus": this.focus,
                        },
                      ];
                    },
                    showTooltip: function () {
                      switch (this.tooltip) {
                        case "always":
                          return true;
                        case "none":
                          return false;
                        case "focus":
                        case "active":
                          return !!this.focus;
                        default:
                          return false;
                      }
                    },
                    tooltipValue: function () {
                      return this.tooltipFormatter
                        ? "string" === typeof this.tooltipFormatter
                          ? this.tooltipFormatter.replace(
                              /\{value\}/,
                              String(this.value),
                            )
                          : this.tooltipFormatter(this.value)
                        : this.value;
                    },
                  },
                  methods: {
                    dragStart: function () {
                      if (this.disabled) return false;
                      this.$emit("drag-start");
                    },
                  },
                }),
                f = n(831);
              const p2 = (0, f.Z)(h2, [["render", d2]]);
              var m = p2;

              function v(t3, e3, r3, n2, i2, a2) {
                return (
                  (0, o.openBlock)(),
                  (0, o.createElementBlock)(
                    "div",
                    {
                      class: (0, o.normalizeClass)(t3.marksClasses),
                    },
                    [
                      (0, o.renderSlot)(t3.$slots, "step", {}, function () {
                        return [
                          (0, o.createElementVNode)(
                            "div",
                            {
                              class: (0, o.normalizeClass)(t3.stepClasses),
                              style: (0, o.normalizeStyle)([
                                t3.stepStyle,
                                t3.mark.style || {},
                                t3.mark.active && t3.stepActiveStyle
                                  ? t3.stepActiveStyle
                                  : {},
                                t3.mark.active && t3.mark.activeStyle
                                  ? t3.mark.activeStyle
                                  : {},
                              ]),
                            },
                            null,
                            6,
                          ),
                        ];
                      }),
                      t3.hideLabel
                        ? (0, o.createCommentVNode)("", true)
                        : (0, o.renderSlot)(
                            t3.$slots,
                            "label",
                            {
                              key: 0,
                            },
                            function () {
                              return [
                                (0, o.createElementVNode)(
                                  "div",
                                  {
                                    class: (0, o.normalizeClass)(
                                      t3.labelClasses,
                                    ),
                                    style: (0, o.normalizeStyle)([
                                      t3.labelStyle,
                                      t3.mark.labelStyle || {},
                                      t3.mark.active && t3.labelActiveStyle
                                        ? t3.labelActiveStyle
                                        : {},
                                      t3.mark.active && t3.mark.labelActiveStyle
                                        ? t3.mark.labelActiveStyle
                                        : {},
                                    ]),
                                    onClick:
                                      e3[0] ||
                                      (e3[0] = function () {
                                        return (
                                          t3.labelClickHandle &&
                                          t3.labelClickHandle.apply(
                                            t3,
                                            arguments,
                                          )
                                        );
                                      }),
                                  },
                                  (0, o.toDisplayString)(t3.mark.label),
                                  7,
                                ),
                              ];
                            },
                          ),
                    ],
                    2,
                  )
                );
              }
              n(18);
              var y2 = (0, o.defineComponent)({
                name: "VueSliderMark",
                emits: ["press-label"],
                props: {
                  mark: {
                    type: Object,
                    required: true,
                  },
                  hideLabel: {
                    type: Boolean,
                  },
                  stepStyle: {
                    type: Object,
                    default: function () {
                      return {};
                    },
                  },
                  stepActiveStyle: {
                    type: Object,
                    default: function () {
                      return {};
                    },
                  },
                  labelStyle: {
                    type: Object,
                    default: function () {
                      return {};
                    },
                  },
                  labelActiveStyle: {
                    type: Object,
                    default: function () {
                      return {};
                    },
                  },
                },
                computed: {
                  marksClasses: function () {
                    return [
                      "vue-slider-mark",
                      {
                        "vue-slider-mark-active": this.mark.active,
                      },
                    ];
                  },
                  stepClasses: function () {
                    return [
                      "vue-slider-mark-step",
                      {
                        "vue-slider-mark-step-active": this.mark.active,
                      },
                    ];
                  },
                  labelClasses: function () {
                    return [
                      "vue-slider-mark-label",
                      {
                        "vue-slider-mark-label-active": this.mark.active,
                      },
                    ];
                  },
                },
                methods: {
                  labelClickHandle: function (t3) {
                    t3.stopPropagation(),
                      this.$emit("press-label", this.mark.pos);
                  },
                },
              });
              const b = (0, f.Z)(y2, [["render", v]]);
              var g,
                k = b,
                S = function (t3) {
                  return "number" === typeof t3 ? "".concat(t3, "px") : t3;
                },
                x = function (t3) {
                  var e3 = document.documentElement,
                    r3 = document.body,
                    n2 = t3.getBoundingClientRect(),
                    i2 = {
                      y:
                        n2.top +
                        (window.pageYOffset || e3.scrollTop) -
                        (e3.clientTop || r3.clientTop || 0),
                      x:
                        n2.left +
                        (window.pageXOffset || e3.scrollLeft) -
                        (e3.clientLeft || r3.clientLeft || 0),
                    };
                  return i2;
                },
                P = function (t3, e3, r3) {
                  var n2 =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : 1,
                    i2 = "targetTouches" in t3 ? t3.targetTouches[0] : t3,
                    o2 = x(e3),
                    a2 = {
                      x: i2.pageX - o2.x,
                      y: i2.pageY - o2.y,
                    };
                  return {
                    x: r3 ? e3.offsetWidth * n2 - a2.x : a2.x,
                    y: r3 ? e3.offsetHeight * n2 - a2.y : a2.y,
                  };
                };
              (function (t3) {
                (t3[(t3["PAGE_UP"] = 33)] = "PAGE_UP"),
                  (t3[(t3["PAGE_DOWN"] = 34)] = "PAGE_DOWN"),
                  (t3[(t3["END"] = 35)] = "END"),
                  (t3[(t3["HOME"] = 36)] = "HOME"),
                  (t3[(t3["LEFT"] = 37)] = "LEFT"),
                  (t3[(t3["UP"] = 38)] = "UP"),
                  (t3[(t3["RIGHT"] = 39)] = "RIGHT"),
                  (t3[(t3["DOWN"] = 40)] = "DOWN");
              })(g || (g = {}));
              var w = function (t3, e3) {
                if (e3.hook) {
                  var r3 = e3.hook(t3);
                  if ("function" === typeof r3) return r3;
                  if (!r3) return null;
                }
                switch (t3.keyCode) {
                  case g.UP:
                    return function (t4) {
                      return "ttb" === e3.direction ? t4 - 1 : t4 + 1;
                    };
                  case g.RIGHT:
                    return function (t4) {
                      return "rtl" === e3.direction ? t4 - 1 : t4 + 1;
                    };
                  case g.DOWN:
                    return function (t4) {
                      return "ttb" === e3.direction ? t4 + 1 : t4 - 1;
                    };
                  case g.LEFT:
                    return function (t4) {
                      return "rtl" === e3.direction ? t4 + 1 : t4 - 1;
                    };
                  case g.END:
                    return function () {
                      return e3.max;
                    };
                  case g.HOME:
                    return function () {
                      return e3.min;
                    };
                  case g.PAGE_UP:
                    return function (t4) {
                      return t4 + 10;
                    };
                  case g.PAGE_DOWN:
                    return function (t4) {
                      return t4 - 10;
                    };
                  default:
                    return null;
                }
              };

              function O(t3, e3) {
                if (!(t3 instanceof e3))
                  throw new TypeError("Cannot call a class as a function");
              }

              function D2(t3, e3) {
                for (var r3 = 0; r3 < e3.length; r3++) {
                  var n2 = e3[r3];
                  (n2.enumerable = n2.enumerable || false),
                    (n2.configurable = true),
                    "value" in n2 && (n2.writable = true),
                    Object.defineProperty(t3, n2.key, n2);
                }
              }

              function E(t3, e3, r3) {
                return (
                  e3 && D2(t3.prototype, e3),
                  r3 && D2(t3, r3),
                  Object.defineProperty(t3, "prototype", {
                    writable: false,
                  }),
                  t3
                );
              }

              function R(t3, e3, r3) {
                return (
                  e3 in t3
                    ? Object.defineProperty(t3, e3, {
                        value: r3,
                        enumerable: true,
                        configurable: true,
                        writable: true,
                      })
                    : (t3[e3] = r3),
                  t3
                );
              }
              var A,
                V,
                j = (function () {
                  function t3(e3) {
                    O(this, t3), R(this, "num", void 0), (this.num = e3);
                  }
                  return (
                    E(t3, [
                      {
                        key: "decimal",
                        value: function (t4, e3) {
                          var r3 = this.num,
                            n2 = this.getDecimalLen(r3),
                            i2 = this.getDecimalLen(t4),
                            o2 = 0;
                          switch (e3) {
                            case "+":
                              (o2 = this.getExponent(n2, i2)),
                                (this.num =
                                  (this.safeRoundUp(r3, o2) +
                                    this.safeRoundUp(t4, o2)) /
                                  o2);
                              break;
                            case "-":
                              (o2 = this.getExponent(n2, i2)),
                                (this.num =
                                  (this.safeRoundUp(r3, o2) -
                                    this.safeRoundUp(t4, o2)) /
                                  o2);
                              break;
                            case "*":
                              this.num =
                                this.safeRoundUp(
                                  this.safeRoundUp(r3, this.getExponent(n2)),
                                  this.safeRoundUp(t4, this.getExponent(i2)),
                                ) / this.getExponent(n2 + i2);
                              break;
                            case "/":
                              (o2 = this.getExponent(n2, i2)),
                                (this.num =
                                  this.safeRoundUp(r3, o2) /
                                  this.safeRoundUp(t4, o2));
                              break;
                            case "%":
                              (o2 = this.getExponent(n2, i2)),
                                (this.num =
                                  (this.safeRoundUp(r3, o2) %
                                    this.safeRoundUp(t4, o2)) /
                                  o2);
                              break;
                          }
                          return this;
                        },
                      },
                      {
                        key: "plus",
                        value: function (t4) {
                          return this.decimal(t4, "+");
                        },
                      },
                      {
                        key: "minus",
                        value: function (t4) {
                          return this.decimal(t4, "-");
                        },
                      },
                      {
                        key: "multiply",
                        value: function (t4) {
                          return this.decimal(t4, "*");
                        },
                      },
                      {
                        key: "divide",
                        value: function (t4) {
                          return this.decimal(t4, "/");
                        },
                      },
                      {
                        key: "remainder",
                        value: function (t4) {
                          return this.decimal(t4, "%");
                        },
                      },
                      {
                        key: "toNumber",
                        value: function () {
                          return this.num;
                        },
                      },
                      {
                        key: "getDecimalLen",
                        value: function (t4) {
                          var e3 = "".concat(t4).split("e");
                          return (
                            ("".concat(e3[0]).split(".")[1] || "").length -
                            (e3[1] ? +e3[1] : 0)
                          );
                        },
                      },
                      {
                        key: "getExponent",
                        value: function (t4, e3) {
                          return Math.pow(
                            10,
                            void 0 !== e3 ? Math.max(t4, e3) : t4,
                          );
                        },
                      },
                      {
                        key: "safeRoundUp",
                        value: function (t4, e3) {
                          return Math.round(t4 * e3);
                        },
                      },
                    ]),
                    t3
                  );
                })();

              function C(t3, e3) {
                return L(t3) || M(t3, e3) || H(t3, e3) || B();
              }

              function B() {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
              }

              function M(t3, e3) {
                var r3 =
                  null == t3
                    ? null
                    : ("undefined" !== typeof Symbol && t3[Symbol.iterator]) ||
                      t3["@@iterator"];
                if (null != r3) {
                  var n2,
                    i2,
                    o2 = [],
                    a2 = true,
                    s2 = false;
                  try {
                    for (
                      r3 = r3.call(t3);
                      !(a2 = (n2 = r3.next()).done);
                      a2 = true
                    )
                      if ((o2.push(n2.value), e3 && o2.length === e3)) break;
                  } catch (l2) {
                    (s2 = true), (i2 = l2);
                  } finally {
                    try {
                      a2 || null == r3["return"] || r3["return"]();
                    } finally {
                      if (s2) throw i2;
                    }
                  }
                  return o2;
                }
              }

              function L(t3) {
                if (Array.isArray(t3)) return t3;
              }

              function N(t3, e3) {
                var r3 = Object.keys(t3);
                if (Object.getOwnPropertySymbols) {
                  var n2 = Object.getOwnPropertySymbols(t3);
                  e3 &&
                    (n2 = n2.filter(function (e4) {
                      return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
                    })),
                    r3.push.apply(r3, n2);
                }
                return r3;
              }

              function z(t3) {
                for (var e3 = 1; e3 < arguments.length; e3++) {
                  var r3 = null != arguments[e3] ? arguments[e3] : {};
                  e3 % 2
                    ? N(Object(r3), true).forEach(function (e4) {
                        X(t3, e4, r3[e4]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          t3,
                          Object.getOwnPropertyDescriptors(r3),
                        )
                      : N(Object(r3)).forEach(function (e4) {
                          Object.defineProperty(
                            t3,
                            e4,
                            Object.getOwnPropertyDescriptor(r3, e4),
                          );
                        });
                }
                return t3;
              }

              function I(t3) {
                return $2(t3) || F2(t3) || H(t3) || T();
              }

              function T() {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
              }

              function H(t3, e3) {
                if (t3) {
                  if ("string" === typeof t3) return U(t3, e3);
                  var r3 = Object.prototype.toString.call(t3).slice(8, -1);
                  return (
                    "Object" === r3 &&
                      t3.constructor &&
                      (r3 = t3.constructor.name),
                    "Map" === r3 || "Set" === r3
                      ? Array.from(t3)
                      : "Arguments" === r3 ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3)
                        ? U(t3, e3)
                        : void 0
                  );
                }
              }

              function F2(t3) {
                if (
                  ("undefined" !== typeof Symbol &&
                    null != t3[Symbol.iterator]) ||
                  null != t3["@@iterator"]
                )
                  return Array.from(t3);
              }

              function $2(t3) {
                if (Array.isArray(t3)) return U(t3);
              }

              function U(t3, e3) {
                (null == e3 || e3 > t3.length) && (e3 = t3.length);
                for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
                  n2[r3] = t3[r3];
                return n2;
              }

              function _(t3, e3) {
                if (!(t3 instanceof e3))
                  throw new TypeError("Cannot call a class as a function");
              }

              function W(t3, e3) {
                for (var r3 = 0; r3 < e3.length; r3++) {
                  var n2 = e3[r3];
                  (n2.enumerable = n2.enumerable || false),
                    (n2.configurable = true),
                    "value" in n2 && (n2.writable = true),
                    Object.defineProperty(t3, n2.key, n2);
                }
              }

              function G(t3, e3, r3) {
                return (
                  e3 && W(t3.prototype, e3),
                  r3 && W(t3, r3),
                  Object.defineProperty(t3, "prototype", {
                    writable: false,
                  }),
                  t3
                );
              }

              function X(t3, e3, r3) {
                return (
                  e3 in t3
                    ? Object.defineProperty(t3, e3, {
                        value: r3,
                        enumerable: true,
                        configurable: true,
                        writable: true,
                      })
                    : (t3[e3] = r3),
                  t3
                );
              }
              (function (t3) {
                (t3[(t3["VALUE"] = 1)] = "VALUE"),
                  (t3[(t3["INTERVAL"] = 2)] = "INTERVAL"),
                  (t3[(t3["MIN"] = 3)] = "MIN"),
                  (t3[(t3["MAX"] = 4)] = "MAX"),
                  (t3[(t3["ORDER"] = 5)] = "ORDER");
              })(V || (V = {}));
              var q =
                  ((A = {}),
                  X(A, V.VALUE, 'The type of the "value" is illegal'),
                  X(
                    A,
                    V.INTERVAL,
                    'The prop "interval" is invalid, "(max - min)" must be divisible by "interval"',
                  ),
                  X(
                    A,
                    V.MIN,
                    'The "value" must be greater than or equal to the "min".',
                  ),
                  X(
                    A,
                    V.MAX,
                    'The "value" must be less than or equal to the "max".',
                  ),
                  X(
                    A,
                    V.ORDER,
                    'When "order" is false, the parameters "minRange", "maxRange", "fixed", "enabled" are invalid.',
                  ),
                  A),
                Z = (function () {
                  function t3(e3) {
                    _(this, t3),
                      X(this, "dotsPos", []),
                      X(this, "dotsValue", []),
                      X(this, "data", void 0),
                      X(this, "enableCross", void 0),
                      X(this, "fixed", void 0),
                      X(this, "max", void 0),
                      X(this, "min", void 0),
                      X(this, "interval", void 0),
                      X(this, "minRange", void 0),
                      X(this, "maxRange", void 0),
                      X(this, "order", void 0),
                      X(this, "marks", void 0),
                      X(this, "included", void 0),
                      X(this, "process", void 0),
                      X(this, "adsorb", void 0),
                      X(this, "dotOptions", void 0),
                      X(this, "onError", void 0),
                      X(this, "cacheRangeDir", {}),
                      (this.data = e3.data),
                      (this.max = e3.max),
                      (this.min = e3.min),
                      (this.interval = e3.interval),
                      (this.order = e3.order),
                      (this.marks = e3.marks),
                      (this.included = e3.included),
                      (this.process = e3.process),
                      (this.adsorb = e3.adsorb),
                      (this.dotOptions = e3.dotOptions),
                      (this.onError = e3.onError),
                      this.order
                        ? ((this.minRange = e3.minRange || 0),
                          (this.maxRange = e3.maxRange || 0),
                          (this.enableCross = e3.enableCross),
                          (this.fixed = e3.fixed))
                        : ((e3.minRange ||
                            e3.maxRange ||
                            !e3.enableCross ||
                            e3.fixed) &&
                            this.emitError(V.ORDER),
                          (this.minRange = 0),
                          (this.maxRange = 0),
                          (this.enableCross = true),
                          (this.fixed = false)),
                      this.setValue(e3.value);
                  }
                  return (
                    G(t3, [
                      {
                        key: "setValue",
                        value: function (t4) {
                          this.setDotsValue(
                            Array.isArray(t4) ? I(t4) : [t4],
                            true,
                          );
                        },
                      },
                      {
                        key: "setDotsValue",
                        value: function (t4, e3) {
                          (this.dotsValue = t4), e3 && this.syncDotsPos();
                        },
                      },
                      {
                        key: "setDotsPos",
                        value: function (t4) {
                          var e3 = this,
                            r3 = this.order
                              ? I(t4).sort(function (t5, e4) {
                                  return t5 - e4;
                                })
                              : t4;
                          (this.dotsPos = r3),
                            this.setDotsValue(
                              r3.map(function (t5) {
                                return e3.getValueByPos(t5);
                              }),
                              this.adsorb,
                            );
                        },
                      },
                      {
                        key: "getValueByPos",
                        value: function (t4) {
                          var e3 = this.parsePos(t4);
                          if (this.included) {
                            var r3 = 100;
                            this.markList.forEach(function (n2) {
                              var i2 = Math.abs(n2.pos - t4);
                              i2 < r3 && ((r3 = i2), (e3 = n2.value));
                            });
                          }
                          return e3;
                        },
                      },
                      {
                        key: "syncDotsPos",
                        value: function () {
                          var t4 = this;
                          this.dotsPos = this.dotsValue.map(function (e3) {
                            return t4.parseValue(e3);
                          });
                        },
                      },
                      {
                        key: "markList",
                        get: function () {
                          var t4 = this;
                          if (!this.marks) return [];
                          var e3 = function (e4, r3) {
                            var n2 = t4.parseValue(e4);
                            return z(
                              {
                                pos: n2,
                                value: e4,
                                label: e4,
                                active: t4.isActiveByPos(n2),
                              },
                              r3,
                            );
                          };
                          return true === this.marks
                            ? this.getValues().map(function (t5) {
                                return e3(t5);
                              })
                            : "[object Object]" ===
                                Object.prototype.toString.call(this.marks)
                              ? Object.keys(this.marks)
                                  .sort(function (t5, e4) {
                                    return +t5 - +e4;
                                  })
                                  .map(function (r3) {
                                    var n2 = t4.marks[r3];
                                    return e3(
                                      r3,
                                      "string" !== typeof n2
                                        ? n2
                                        : {
                                            label: n2,
                                          },
                                    );
                                  })
                              : Array.isArray(this.marks)
                                ? this.marks.map(function (t5) {
                                    return e3(t5);
                                  })
                                : "function" === typeof this.marks
                                  ? this.getValues()
                                      .map(function (e4) {
                                        return {
                                          value: e4,
                                          result: t4.marks(e4),
                                        };
                                      })
                                      .filter(function (t5) {
                                        var e4 = t5.result;
                                        return !!e4;
                                      })
                                      .map(function (t5) {
                                        var r3 = t5.value,
                                          n2 = t5.result;
                                        return e3(r3, n2);
                                      })
                                  : [];
                        },
                      },
                      {
                        key: "getRecentDot",
                        value: function (t4) {
                          var e3 = this.dotsPos.map(function (e4) {
                            return Math.abs(e4 - t4);
                          });
                          return e3.indexOf(Math.min.apply(Math, I(e3)));
                        },
                      },
                      {
                        key: "getIndexByValue",
                        value: function (t4) {
                          return this.data
                            ? this.data.indexOf(t4)
                            : new j(+t4)
                                .minus(this.min)
                                .divide(this.interval)
                                .toNumber();
                        },
                      },
                      {
                        key: "getValueByIndex",
                        value: function (t4) {
                          return (
                            t4 < 0
                              ? (t4 = 0)
                              : t4 > this.total && (t4 = this.total),
                            this.data
                              ? this.data[t4]
                              : new j(t4)
                                  .multiply(this.interval)
                                  .plus(this.min)
                                  .toNumber()
                          );
                        },
                      },
                      {
                        key: "setDotPos",
                        value: function (t4, e3) {
                          t4 = this.getValidPos(t4, e3).pos;
                          var r3 = t4 - this.dotsPos[e3];
                          if (r3) {
                            var n2 = new Array(this.dotsPos.length);
                            this.fixed
                              ? (n2 = this.getFixedChangePosArr(r3, e3))
                              : this.minRange || this.maxRange
                                ? (n2 = this.getLimitRangeChangePosArr(
                                    t4,
                                    r3,
                                    e3,
                                  ))
                                : (n2[e3] = r3),
                              this.setDotsPos(
                                this.dotsPos.map(function (t5, e4) {
                                  return t5 + (n2[e4] || 0);
                                }),
                              );
                          }
                        },
                      },
                      {
                        key: "getFixedChangePosArr",
                        value: function (t4, e3) {
                          var r3 = this;
                          return (
                            this.dotsPos.forEach(function (n2, i2) {
                              if (i2 !== e3) {
                                var o2 = r3.getValidPos(n2 + t4, i2),
                                  a2 = o2.pos,
                                  s2 = o2.inRange;
                                s2 ||
                                  (t4 =
                                    Math.min(Math.abs(a2 - n2), Math.abs(t4)) *
                                    (t4 < 0 ? -1 : 1));
                              }
                            }),
                            this.dotsPos.map(function (e4) {
                              return t4;
                            })
                          );
                        },
                      },
                      {
                        key: "getLimitRangeChangePosArr",
                        value: function (t4, e3, r3) {
                          var n2 = this,
                            i2 = [
                              {
                                index: r3,
                                changePos: e3,
                              },
                            ],
                            o2 = e3;
                          return (
                            [this.minRange, this.maxRange].forEach(
                              function (a2, s2) {
                                if (!a2) return false;
                                var l2 = 0 === s2,
                                  u2 = e3 > 0,
                                  c3 = 0;
                                c3 = l2 ? (u2 ? 1 : -1) : u2 ? -1 : 1;
                                var d3 = function (t5, e4) {
                                    var r4 = Math.abs(t5 - e4);
                                    return l2
                                      ? r4 < n2.minRangeDir
                                      : r4 > n2.maxRangeDir;
                                  },
                                  h3 = r3 + c3,
                                  f2 = n2.dotsPos[h3],
                                  p3 = t4;
                                while (n2.isPos(f2) && d3(f2, p3)) {
                                  var m2 = n2.getValidPos(f2 + o2, h3),
                                    v2 = m2.pos;
                                  i2.push({
                                    index: h3,
                                    changePos: v2 - f2,
                                  }),
                                    (h3 += c3),
                                    (p3 = v2),
                                    (f2 = n2.dotsPos[h3]);
                                }
                              },
                            ),
                            this.dotsPos.map(function (t5, e4) {
                              var r4 = i2.filter(function (t6) {
                                return t6.index === e4;
                              });
                              return r4.length ? r4[0].changePos : 0;
                            })
                          );
                        },
                      },
                      {
                        key: "isPos",
                        value: function (t4) {
                          return "number" === typeof t4;
                        },
                      },
                      {
                        key: "getValidPos",
                        value: function (t4, e3) {
                          var r3 = this.valuePosRange[e3],
                            n2 = true;
                          return (
                            t4 < r3[0]
                              ? ((t4 = r3[0]), (n2 = false))
                              : t4 > r3[1] && ((t4 = r3[1]), (n2 = false)),
                            {
                              pos: t4,
                              inRange: n2,
                            }
                          );
                        },
                      },
                      {
                        key: "parseValue",
                        value: function (t4) {
                          if (this.data) t4 = this.data.indexOf(t4);
                          else if (
                            "number" === typeof t4 ||
                            "string" === typeof t4
                          ) {
                            if (((t4 = +t4), t4 < this.min))
                              return this.emitError(V.MIN), 0;
                            if (t4 > this.max) return this.emitError(V.MAX), 0;
                            if ("number" !== typeof t4 || t4 !== t4)
                              return this.emitError(V.VALUE), 0;
                            t4 = new j(t4)
                              .minus(this.min)
                              .divide(this.interval)
                              .toNumber();
                          }
                          var e3 = new j(t4).multiply(this.gap).toNumber();
                          return e3 < 0 ? 0 : e3 > 100 ? 100 : e3;
                        },
                      },
                      {
                        key: "parsePos",
                        value: function (t4) {
                          var e3 = Math.round(t4 / this.gap);
                          return this.getValueByIndex(e3);
                        },
                      },
                      {
                        key: "isActiveByPos",
                        value: function (t4) {
                          return this.processArray.some(function (e3) {
                            var r3 = C(e3, 2),
                              n2 = r3[0],
                              i2 = r3[1];
                            return t4 >= n2 && t4 <= i2;
                          });
                        },
                      },
                      {
                        key: "getValues",
                        value: function () {
                          if (this.data) return this.data;
                          for (var t4 = [], e3 = 0; e3 <= this.total; e3++)
                            t4.push(
                              new j(e3)
                                .multiply(this.interval)
                                .plus(this.min)
                                .toNumber(),
                            );
                          return t4;
                        },
                      },
                      {
                        key: "getRangeDir",
                        value: function (t4) {
                          return t4
                            ? new j(t4)
                                .divide(
                                  new j(
                                    this.data ? this.data.length - 1 : this.max,
                                  )
                                    .minus(this.data ? 0 : this.min)
                                    .toNumber(),
                                )
                                .multiply(100)
                                .toNumber()
                            : 100;
                        },
                      },
                      {
                        key: "emitError",
                        value: function (t4) {
                          this.onError && this.onError(t4, q[t4]);
                        },
                      },
                      {
                        key: "processArray",
                        get: function () {
                          if (this.process) {
                            if ("function" === typeof this.process)
                              return this.process(this.dotsPos);
                            if (1 === this.dotsPos.length)
                              return [[0, this.dotsPos[0]]];
                            if (this.dotsPos.length > 1)
                              return [
                                [
                                  Math.min.apply(Math, I(this.dotsPos)),
                                  Math.max.apply(Math, I(this.dotsPos)),
                                ],
                              ];
                          }
                          return [];
                        },
                      },
                      {
                        key: "total",
                        get: function () {
                          var t4 = 0;
                          return (
                            (t4 = this.data
                              ? this.data.length - 1
                              : new j(this.max)
                                  .minus(this.min)
                                  .divide(this.interval)
                                  .toNumber()),
                            t4 - Math.floor(t4) !== 0
                              ? (this.emitError(V.INTERVAL), 0)
                              : t4
                          );
                        },
                      },
                      {
                        key: "gap",
                        get: function () {
                          return 100 / this.total;
                        },
                      },
                      {
                        key: "minRangeDir",
                        get: function () {
                          return this.cacheRangeDir[this.minRange]
                            ? this.cacheRangeDir[this.minRange]
                            : (this.cacheRangeDir[this.minRange] =
                                this.getRangeDir(this.minRange));
                        },
                      },
                      {
                        key: "maxRangeDir",
                        get: function () {
                          return this.cacheRangeDir[this.maxRange]
                            ? this.cacheRangeDir[this.maxRange]
                            : (this.cacheRangeDir[this.maxRange] =
                                this.getRangeDir(this.maxRange));
                        },
                      },
                      {
                        key: "getDotRange",
                        value: function (t4, e3, r3) {
                          if (!this.dotOptions) return r3;
                          var n2 = Array.isArray(this.dotOptions)
                            ? this.dotOptions[t4]
                            : this.dotOptions;
                          return n2 && void 0 !== n2[e3]
                            ? this.parseValue(n2[e3])
                            : r3;
                        },
                      },
                      {
                        key: "valuePosRange",
                        get: function () {
                          var t4 = this,
                            e3 = this.dotsPos,
                            r3 = [];
                          return (
                            e3.forEach(function (n2, i2) {
                              r3.push([
                                Math.max(
                                  t4.minRange ? t4.minRangeDir * i2 : 0,
                                  t4.enableCross ? 0 : e3[i2 - 1] || 0,
                                  t4.getDotRange(i2, "min", 0),
                                ),
                                Math.min(
                                  t4.minRange
                                    ? 100 -
                                        t4.minRangeDir * (e3.length - 1 - i2)
                                    : 100,
                                  t4.enableCross ? 100 : e3[i2 + 1] || 100,
                                  t4.getDotRange(i2, "max", 100),
                                ),
                              ]);
                            }),
                            r3
                          );
                        },
                      },
                      {
                        key: "dotsIndex",
                        get: function () {
                          var t4 = this;
                          return this.dotsValue.map(function (e3) {
                            return t4.getIndexByValue(e3);
                          });
                        },
                      },
                    ]),
                    t3
                  );
                })();

              function Y(t3, e3) {
                if (!(t3 instanceof e3))
                  throw new TypeError("Cannot call a class as a function");
              }

              function K(t3, e3) {
                for (var r3 = 0; r3 < e3.length; r3++) {
                  var n2 = e3[r3];
                  (n2.enumerable = n2.enumerable || false),
                    (n2.configurable = true),
                    "value" in n2 && (n2.writable = true),
                    Object.defineProperty(t3, n2.key, n2);
                }
              }

              function J(t3, e3, r3) {
                return (
                  e3 && K(t3.prototype, e3),
                  r3 && K(t3, r3),
                  Object.defineProperty(t3, "prototype", {
                    writable: false,
                  }),
                  t3
                );
              }

              function Q(t3, e3, r3) {
                return (
                  e3 in t3
                    ? Object.defineProperty(t3, e3, {
                        value: r3,
                        enumerable: true,
                        configurable: true,
                        writable: true,
                      })
                    : (t3[e3] = r3),
                  t3
                );
              }
              var tt = (function () {
                function t3(e3) {
                  Y(this, t3),
                    Q(this, "map", void 0),
                    Q(this, "states", 0),
                    (this.map = e3);
                }
                return (
                  J(t3, [
                    {
                      key: "add",
                      value: function (t4) {
                        this.states |= t4;
                      },
                    },
                    {
                      key: "delete",
                      value: function (t4) {
                        this.states &= ~t4;
                      },
                    },
                    {
                      key: "toggle",
                      value: function (t4) {
                        this.has(t4) ? this.delete(t4) : this.add(t4);
                      },
                    },
                    {
                      key: "has",
                      value: function (t4) {
                        return !!(this.states & t4);
                      },
                    },
                  ]),
                  t3
                );
              })();
              n(631);

              function et(t3) {
                return it(t3) || nt(t3) || dt(t3) || rt2();
              }

              function rt2() {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
              }

              function nt(t3) {
                if (
                  ("undefined" !== typeof Symbol &&
                    null != t3[Symbol.iterator]) ||
                  null != t3["@@iterator"]
                )
                  return Array.from(t3);
              }

              function it(t3) {
                if (Array.isArray(t3)) return ht(t3);
              }

              function ot(t3) {
                return (
                  (ot =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (t4) {
                          return typeof t4;
                        }
                      : function (t4) {
                          return t4 &&
                            "function" == typeof Symbol &&
                            t4.constructor === Symbol &&
                            t4 !== Symbol.prototype
                            ? "symbol"
                            : typeof t4;
                        }),
                  ot(t3)
                );
              }

              function at(t3, e3) {
                var r3 = Object.keys(t3);
                if (Object.getOwnPropertySymbols) {
                  var n2 = Object.getOwnPropertySymbols(t3);
                  e3 &&
                    (n2 = n2.filter(function (e4) {
                      return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
                    })),
                    r3.push.apply(r3, n2);
                }
                return r3;
              }

              function st(t3) {
                for (var e3 = 1; e3 < arguments.length; e3++) {
                  var r3 = null != arguments[e3] ? arguments[e3] : {};
                  e3 % 2
                    ? at(Object(r3), true).forEach(function (e4) {
                        lt(t3, e4, r3[e4]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          t3,
                          Object.getOwnPropertyDescriptors(r3),
                        )
                      : at(Object(r3)).forEach(function (e4) {
                          Object.defineProperty(
                            t3,
                            e4,
                            Object.getOwnPropertyDescriptor(r3, e4),
                          );
                        });
                }
                return t3;
              }

              function lt(t3, e3, r3) {
                return (
                  e3 in t3
                    ? Object.defineProperty(t3, e3, {
                        value: r3,
                        enumerable: true,
                        configurable: true,
                        writable: true,
                      })
                    : (t3[e3] = r3),
                  t3
                );
              }

              function ut(t3, e3) {
                return pt(t3) || ft(t3, e3) || dt(t3, e3) || ct();
              }

              function ct() {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
              }

              function dt(t3, e3) {
                if (t3) {
                  if ("string" === typeof t3) return ht(t3, e3);
                  var r3 = Object.prototype.toString.call(t3).slice(8, -1);
                  return (
                    "Object" === r3 &&
                      t3.constructor &&
                      (r3 = t3.constructor.name),
                    "Map" === r3 || "Set" === r3
                      ? Array.from(t3)
                      : "Arguments" === r3 ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3)
                        ? ht(t3, e3)
                        : void 0
                  );
                }
              }

              function ht(t3, e3) {
                (null == e3 || e3 > t3.length) && (e3 = t3.length);
                for (var r3 = 0, n2 = new Array(e3); r3 < e3; r3++)
                  n2[r3] = t3[r3];
                return n2;
              }

              function ft(t3, e3) {
                var r3 =
                  null == t3
                    ? null
                    : ("undefined" !== typeof Symbol && t3[Symbol.iterator]) ||
                      t3["@@iterator"];
                if (null != r3) {
                  var n2,
                    i2,
                    o2 = [],
                    a2 = true,
                    s2 = false;
                  try {
                    for (
                      r3 = r3.call(t3);
                      !(a2 = (n2 = r3.next()).done);
                      a2 = true
                    )
                      if ((o2.push(n2.value), e3 && o2.length === e3)) break;
                  } catch (l2) {
                    (s2 = true), (i2 = l2);
                  } finally {
                    try {
                      a2 || null == r3["return"] || r3["return"]();
                    } finally {
                      if (s2) throw i2;
                    }
                  }
                  return o2;
                }
              }

              function pt(t3) {
                if (Array.isArray(t3)) return t3;
              }
              var mt = {
                  None: 0,
                  Drag: 2,
                  Focus: 4,
                },
                vt = 4,
                yt = (0, o.defineComponent)({
                  name: "VueSlider",
                  components: {
                    VueSliderDot: m,
                    VueSliderMark: k,
                  },
                  emits: [
                    "change",
                    "drag-start",
                    "dragging",
                    "drag-end",
                    "error",
                    "update:modelValue",
                  ],
                  data: function () {
                    return {
                      control: null,
                      states: new tt(mt),
                      scale: 1,
                      focusDotIndex: 0,
                    };
                  },
                  props: {
                    modelValue: {
                      type: [Number, String, Array],
                      default: 0,
                    },
                    silent: {
                      type: Boolean,
                      default: false,
                    },
                    direction: {
                      type: String,
                      default: "ltr",
                      validator: function (t3) {
                        return ["ltr", "rtl", "ttb", "btt"].indexOf(t3) > -1;
                      },
                    },
                    width: {
                      type: [Number, String],
                    },
                    height: {
                      type: [Number, String],
                    },
                    dotSize: {
                      type: [Number, Array],
                      default: 14,
                    },
                    contained: {
                      type: Boolean,
                      default: false,
                    },
                    min: {
                      type: Number,
                      default: 0,
                    },
                    max: {
                      type: Number,
                      default: 100,
                    },
                    interval: {
                      type: Number,
                      default: 1,
                    },
                    disabled: {
                      type: Boolean,
                      default: false,
                    },
                    clickable: {
                      type: Boolean,
                      default: true,
                    },
                    dragOnClick: {
                      type: Boolean,
                      default: false,
                    },
                    duration: {
                      type: Number,
                      default: 0.5,
                    },
                    data: {
                      type: [Object, Array],
                    },
                    dataValue: {
                      type: String,
                      default: "value",
                    },
                    dataLabel: {
                      type: String,
                      default: "label",
                    },
                    lazy: {
                      type: Boolean,
                      default: false,
                    },
                    tooltip: {
                      type: String,
                      default: "active",
                      validator: function (t3) {
                        return (
                          [
                            "none",
                            "always",
                            "focus",
                            "hover",
                            "active",
                          ].indexOf(t3) > -1
                        );
                      },
                    },
                    tooltipPlacement: {
                      type: [String, Array],
                      validator: function (t3) {
                        return (Array.isArray(t3) ? t3 : [t3]).every(
                          function (t4) {
                            return (
                              ["top", "right", "bottom", "left"].indexOf(t4) >
                              -1
                            );
                          },
                        );
                      },
                    },
                    tooltipFormatter: {
                      type: [String, Array, Function],
                    },
                    useKeyboard: {
                      type: Boolean,
                      default: true,
                    },
                    keydownHook: {
                      type: Function,
                    },
                    enableCross: {
                      type: Boolean,
                      default: true,
                    },
                    fixed: {
                      type: Boolean,
                      default: false,
                    },
                    order: {
                      type: Boolean,
                      default: true,
                    },
                    minRange: {
                      type: Number,
                    },
                    maxRange: {
                      type: Number,
                    },
                    marks: {
                      type: [Boolean, Object, Array, Function],
                      default: false,
                    },
                    process: {
                      type: [Boolean, Function],
                      default: true,
                    },
                    zoom: {
                      type: Number,
                    },
                    included: {
                      type: Boolean,
                    },
                    adsorb: {
                      type: Boolean,
                    },
                    hideLabel: {
                      type: Boolean,
                    },
                    dotOptions: {
                      type: [Object, Array],
                    },
                    dotAttrs: {
                      type: Object,
                    },
                    railStyle: {
                      type: Object,
                    },
                    processStyle: {
                      type: Object,
                    },
                    dotStyle: {
                      type: Object,
                    },
                    tooltipStyle: {
                      type: Object,
                    },
                    stepStyle: {
                      type: Object,
                    },
                    stepActiveStyle: {
                      type: Object,
                    },
                    labelStyle: {
                      type: Object,
                    },
                    labelActiveStyle: {
                      type: Object,
                    },
                  },
                  computed: {
                    isHorizontal: function () {
                      return (
                        "ltr" === this.direction || "rtl" === this.direction
                      );
                    },
                    isReverse: function () {
                      return (
                        "rtl" === this.direction || "btt" === this.direction
                      );
                    },
                    tailSize: function () {
                      return S(
                        (this.isHorizontal ? this.height : this.width) || vt,
                      );
                    },
                    containerClasses: function () {
                      return [
                        "vue-slider",
                        ["vue-slider-".concat(this.direction)],
                        {
                          "vue-slider-disabled": this.disabled,
                        },
                      ];
                    },
                    containerStyles: function () {
                      var t3 = Array.isArray(this.dotSize)
                          ? this.dotSize
                          : [this.dotSize, this.dotSize],
                        e3 = ut(t3, 2),
                        r3 = e3[0],
                        n2 = e3[1],
                        i2 = this.width
                          ? S(this.width)
                          : this.isHorizontal
                            ? "auto"
                            : S(vt),
                        o2 = this.height
                          ? S(this.height)
                          : this.isHorizontal
                            ? S(vt)
                            : "auto";
                      return {
                        padding: this.contained
                          ? "".concat(n2 / 2, "px ").concat(r3 / 2, "px")
                          : this.isHorizontal
                            ? "".concat(n2 / 2, "px 0")
                            : "0 ".concat(r3 / 2, "px"),
                        width: i2,
                        height: o2,
                      };
                    },
                    processArray: function () {
                      var t3 = this;
                      return this.control.processArray.map(function (e3, r3) {
                        var n2,
                          i2 = ut(e3, 3),
                          o2 = i2[0],
                          a2 = i2[1],
                          s2 = i2[2];
                        if (o2 > a2) {
                          var l2 = [a2, o2];
                          (o2 = l2[0]), (a2 = l2[1]);
                        }
                        var u2 = t3.isHorizontal ? "width" : "height";
                        return {
                          start: o2,
                          end: a2,
                          index: r3,
                          style: st(
                            st(
                              ((n2 = {}),
                              lt(
                                n2,
                                t3.isHorizontal ? "height" : "width",
                                "100%",
                              ),
                              lt(n2, t3.isHorizontal ? "top" : "left", 0),
                              lt(n2, t3.mainDirection, "".concat(o2, "%")),
                              lt(n2, u2, "".concat(a2 - o2, "%")),
                              lt(
                                n2,
                                "transitionProperty",
                                "".concat(u2, ",").concat(t3.mainDirection),
                              ),
                              lt(
                                n2,
                                "transitionDuration",
                                "".concat(t3.animateTime, "s"),
                              ),
                              n2),
                              t3.processStyle,
                            ),
                            s2,
                          ),
                        };
                      });
                    },
                    dotBaseStyle: function () {
                      var t3,
                        e3 = Array.isArray(this.dotSize)
                          ? this.dotSize
                          : [this.dotSize, this.dotSize],
                        r3 = ut(e3, 2),
                        n2 = r3[0],
                        i2 = r3[1];
                      return (
                        (t3 = this.isHorizontal
                          ? lt(
                              {
                                transform: "translate(".concat(
                                  this.isReverse ? "50%" : "-50%",
                                  ", -50%)",
                                ),
                                WebkitTransform: "translate(".concat(
                                  this.isReverse ? "50%" : "-50%",
                                  ", -50%)",
                                ),
                                top: "50%",
                              },
                              "ltr" === this.direction ? "left" : "right",
                              "0",
                            )
                          : lt(
                              {
                                transform: "translate(-50%, ".concat(
                                  this.isReverse ? "50%" : "-50%",
                                  ")",
                                ),
                                WebkitTransform: "translate(-50%, ".concat(
                                  this.isReverse ? "50%" : "-50%",
                                  ")",
                                ),
                                left: "50%",
                              },
                              "btt" === this.direction ? "bottom" : "top",
                              "0",
                            )),
                        st(
                          {
                            width: "".concat(n2, "px"),
                            height: "".concat(i2, "px"),
                          },
                          t3,
                        )
                      );
                    },
                    mainDirection: function () {
                      switch (this.direction) {
                        case "ltr":
                          return "left";
                        case "rtl":
                          return "right";
                        case "btt":
                          return "bottom";
                        case "ttb":
                          return "top";
                        default:
                          return "left";
                      }
                    },
                    tooltipDirections: function () {
                      var t3 =
                        this.tooltipPlacement ||
                        (this.isHorizontal ? "top" : "left");
                      return Array.isArray(t3)
                        ? t3
                        : this.dots.map(function () {
                            return t3;
                          });
                    },
                    dots: function () {
                      var t3 = this;
                      return this.control.dotsPos.map(function (e3, r3) {
                        return st(
                          {
                            pos: e3,
                            index: r3,
                            value: t3.control.dotsValue[r3],
                            focus:
                              t3.states.has(mt.Focus) &&
                              t3.focusDotIndex === r3,
                            disabled: t3.disabled,
                            style: t3.dotStyle,
                          },
                          (Array.isArray(t3.dotOptions)
                            ? t3.dotOptions[r3]
                            : t3.dotOptions) || {},
                        );
                      });
                    },
                    animateTime: function () {
                      return this.states.has(mt.Drag) ? 0 : this.duration;
                    },
                    canSort: function () {
                      return (
                        this.order &&
                        !this.minRange &&
                        !this.maxRange &&
                        !this.fixed &&
                        this.enableCross
                      );
                    },
                    sliderData: function () {
                      var t3 = this;
                      return this.isObjectArrayData(this.data)
                        ? this.data.map(function (e3) {
                            return e3[t3.dataValue];
                          })
                        : this.isObjectData(this.data)
                          ? Object.keys(this.data)
                          : this.data;
                    },
                    sliderMarks: function () {
                      var t3 = this;
                      return this.marks
                        ? this.marks
                        : this.isObjectArrayData(this.data)
                          ? function (e3) {
                              var r3 = {
                                label: e3,
                              };
                              return (
                                t3.data.some(function (n2) {
                                  return (
                                    n2[t3.dataValue] === e3 &&
                                    ((r3.label = n2[t3.dataLabel]), true)
                                  );
                                }),
                                r3
                              );
                            }
                          : this.isObjectData(this.data)
                            ? this.data
                            : void 0;
                    },
                    sliderTooltipFormatter: function () {
                      var t3 = this;
                      if (this.tooltipFormatter) return this.tooltipFormatter;
                      if (this.isObjectArrayData(this.data))
                        return function (e4) {
                          var r3 = "" + e4;
                          return (
                            t3.data.some(function (n2) {
                              return (
                                n2[t3.dataValue] === e4 &&
                                ((r3 = n2[t3.dataLabel]), true)
                              );
                            }),
                            r3
                          );
                        };
                      if (this.isObjectData(this.data)) {
                        var e3 = this.data;
                        return function (t4) {
                          return e3[t4];
                        };
                      }
                    },
                    isNotSync: function () {
                      var t3 = this.control.dotsValue;
                      return Array.isArray(this.modelValue)
                        ? this.modelValue.length !== t3.length ||
                            this.modelValue.some(function (e3, r3) {
                              return e3 !== t3[r3];
                            })
                        : this.modelValue !== t3[0];
                    },
                    dragRange: function () {
                      var t3 = this.dots[this.focusDotIndex - 1],
                        e3 = this.dots[this.focusDotIndex + 1];
                      return [t3 ? t3.pos : -1 / 0, e3 ? e3.pos : 1 / 0];
                    },
                  },
                  watch: {
                    modelValue: function () {
                      this.control &&
                        !this.states.has(mt.Drag) &&
                        this.isNotSync &&
                        this.control.setValue(this.modelValue);
                    },
                  },
                  methods: {
                    isObjectData: function (t3) {
                      return (
                        !!t3 &&
                        "[object Object]" === Object.prototype.toString.call(t3)
                      );
                    },
                    isObjectArrayData: function (t3) {
                      return (
                        !!t3 &&
                        Array.isArray(t3) &&
                        t3.length > 0 &&
                        "object" === ot(t3[0])
                      );
                    },
                    bindEvent: function () {
                      document.addEventListener("touchmove", this.dragMove, {
                        passive: false,
                      }),
                        document.addEventListener("touchend", this.dragEnd, {
                          passive: false,
                        }),
                        document.addEventListener("mousedown", this.blurHandle),
                        document.addEventListener("mousemove", this.dragMove),
                        document.addEventListener("mouseup", this.dragEnd),
                        document.addEventListener("mouseleave", this.dragEnd),
                        document.addEventListener(
                          "keydown",
                          this.keydownHandle,
                        );
                    },
                    unbindEvent: function () {
                      document.removeEventListener("touchmove", this.dragMove),
                        document.removeEventListener("touchend", this.dragEnd),
                        document.removeEventListener(
                          "mousedown",
                          this.blurHandle,
                        ),
                        document.removeEventListener(
                          "mousemove",
                          this.dragMove,
                        ),
                        document.removeEventListener("mouseup", this.dragEnd),
                        document.removeEventListener(
                          "mouseleave",
                          this.dragEnd,
                        ),
                        document.removeEventListener(
                          "keydown",
                          this.keydownHandle,
                        );
                    },
                    setScale: function () {
                      this.scale = new j(
                        Math.floor(
                          this.isHorizontal
                            ? this.$el.offsetWidth
                            : this.$el.offsetHeight,
                        ),
                      )
                        .multiply(this.zoom || 1)
                        .divide(100)
                        .toNumber();
                    },
                    initControl: function () {
                      var t3 = this;
                      (this.control = new Z({
                        value: this.modelValue,
                        data: this.sliderData,
                        enableCross: this.enableCross,
                        fixed: this.fixed,
                        max: this.max,
                        min: this.min,
                        interval: this.interval,
                        minRange: this.minRange,
                        maxRange: this.maxRange,
                        order: this.order,
                        marks: this.sliderMarks,
                        included: this.included,
                        process: this.process,
                        adsorb: this.adsorb,
                        dotOptions: this.dotOptions,
                        onError: this.emitError,
                      })),
                        [
                          "data",
                          "enableCross",
                          "fixed",
                          "max",
                          "min",
                          "interval",
                          "minRange",
                          "maxRange",
                          "order",
                          "marks",
                          "process",
                          "adsorb",
                          "included",
                          "dotOptions",
                        ].forEach(function (e3) {
                          t3.$watch(e3, function (r3) {
                            if (
                              "data" === e3 &&
                              Array.isArray(t3.control.data) &&
                              Array.isArray(r3) &&
                              t3.control.data.length === r3.length &&
                              r3.every(function (e4, r4) {
                                return e4 === t3.control.data[r4];
                              })
                            )
                              return false;
                            switch (e3) {
                              case "data":
                              case "dataLabel":
                              case "dataValue":
                                t3.control.data = t3.sliderData;
                                break;
                              case "mark":
                                t3.control.marks = t3.sliderMarks;
                                break;
                              default:
                                t3.control[e3] = r3;
                            }
                            ["data", "max", "min", "interval"].indexOf(e3) >
                              -1 && t3.control.syncDotsPos();
                          });
                        });
                    },
                    syncValueByPos: function () {
                      var t3 = this.control.dotsValue;
                      if (
                        this.isDiff(
                          t3,
                          Array.isArray(this.modelValue)
                            ? this.modelValue
                            : [this.modelValue],
                        )
                      ) {
                        var e3 = 1 === t3.length ? t3[0] : et(t3);
                        this.$emit("change", e3, this.focusDotIndex),
                          this.$emit("update:modelValue", e3);
                      }
                    },
                    isDiff: function (t3, e3) {
                      return (
                        t3.length !== e3.length ||
                        t3.some(function (t4, r3) {
                          return t4 !== e3[r3];
                        })
                      );
                    },
                    emitError: function (t3, e3) {
                      this.silent ||
                        console.error("[VueSlider error]: ".concat(e3)),
                        this.$emit("error", t3, e3);
                    },
                    dragStartOnProcess: function (t3) {
                      if (this.dragOnClick) {
                        this.setScale();
                        var e3 = this.getPosByEvent(t3),
                          r3 = this.control.getRecentDot(e3);
                        if (this.dots[r3].disabled) return;
                        this.dragStart(r3),
                          this.control.setDotPos(e3, this.focusDotIndex),
                          this.lazy || this.syncValueByPos();
                      }
                    },
                    dragStart: function (t3) {
                      (this.focusDotIndex = t3),
                        this.setScale(),
                        this.states.add(mt.Drag),
                        this.states.add(mt.Focus),
                        this.$emit("drag-start", this.focusDotIndex);
                    },
                    dragMove: function (t3) {
                      if (!this.states.has(mt.Drag)) return false;
                      t3.preventDefault();
                      var e3 = this.getPosByEvent(t3);
                      this.isCrossDot(e3),
                        this.control.setDotPos(e3, this.focusDotIndex),
                        this.lazy || this.syncValueByPos();
                      var r3 = this.control.dotsValue;
                      this.$emit(
                        "dragging",
                        1 === r3.length ? r3[0] : et(r3),
                        this.focusDotIndex,
                      );
                    },
                    isCrossDot: function (t3) {
                      if (this.canSort) {
                        var e3 = this.focusDotIndex,
                          r3 = t3;
                        if (
                          (r3 > this.dragRange[1]
                            ? ((r3 = this.dragRange[1]), this.focusDotIndex++)
                            : r3 < this.dragRange[0] &&
                              ((r3 = this.dragRange[0]), this.focusDotIndex--),
                          e3 !== this.focusDotIndex)
                        ) {
                          var n2 =
                            this.$refs["dot-".concat(this.focusDotIndex)];
                          n2 && n2.$el && n2.$el.focus(),
                            this.control.setDotPos(r3, e3);
                        }
                      }
                    },
                    dragEnd: function (t3) {
                      var e3 = this;
                      if (!this.states.has(mt.Drag)) return false;
                      setTimeout(function () {
                        e3.lazy && e3.syncValueByPos(),
                          e3.included && e3.isNotSync
                            ? e3.control.setValue(e3.modelValue)
                            : e3.control.syncDotsPos(),
                          e3.states.delete(mt.Drag),
                          (e3.useKeyboard && !("targetTouches" in t3)) ||
                            e3.states.delete(mt.Focus),
                          e3.$emit("drag-end", e3.focusDotIndex);
                      });
                    },
                    blurHandle: function (t3) {
                      if (
                        !this.states.has(mt.Focus) ||
                        !this.$refs.container ||
                        this.$refs.container.contains(t3.target)
                      )
                        return false;
                      this.states.delete(mt.Focus);
                    },
                    clickHandle: function (t3) {
                      if (!this.clickable || this.disabled) return false;
                      if (!this.states.has(mt.Drag)) {
                        this.setScale();
                        var e3 = this.getPosByEvent(t3);
                        this.setValueByPos(e3);
                      }
                    },
                    focus: function (t3) {
                      var e3 =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0;
                      t3.disabled ||
                        (this.states.add(mt.Focus), (this.focusDotIndex = e3));
                    },
                    blur: function () {
                      this.states.delete(mt.Focus);
                    },
                    getValue: function () {
                      var t3 = this.control.dotsValue;
                      return 1 === t3.length ? t3[0] : t3;
                    },
                    getIndex: function () {
                      var t3 = this.control.dotsIndex;
                      return 1 === t3.length ? t3[0] : t3;
                    },
                    setValue: function (t3) {
                      this.control.setValue(Array.isArray(t3) ? et(t3) : [t3]),
                        this.syncValueByPos();
                    },
                    setIndex: function (t3) {
                      var e3 = this,
                        r3 = Array.isArray(t3)
                          ? t3.map(function (t4) {
                              return e3.control.getValueByIndex(t4);
                            })
                          : this.control.getValueByIndex(t3);
                      this.setValue(r3);
                    },
                    setValueByPos: function (t3) {
                      var e3 = this,
                        r3 = this.control.getRecentDot(t3);
                      if (this.disabled || this.dots[r3].disabled) return false;
                      (this.focusDotIndex = r3),
                        this.control.setDotPos(t3, r3),
                        this.syncValueByPos(),
                        this.useKeyboard && this.states.add(mt.Focus),
                        setTimeout(function () {
                          e3.included && e3.isNotSync
                            ? e3.control.setValue(e3.modelValue)
                            : e3.control.syncDotsPos();
                        });
                    },
                    keydownHandle: function (t3) {
                      var e3 = this;
                      if (!this.useKeyboard || !this.states.has(mt.Focus))
                        return false;
                      var r3 = this.included && this.marks,
                        n2 = w(t3, {
                          direction: this.direction,
                          max: r3
                            ? this.control.markList.length - 1
                            : this.control.total,
                          min: 0,
                          hook: this.keydownHook,
                        });
                      if (n2) {
                        t3.preventDefault();
                        var i2 = -1,
                          o2 = 0;
                        r3
                          ? (this.control.markList.some(function (t4, r4) {
                              return (
                                t4.value ===
                                  e3.control.dotsValue[e3.focusDotIndex] &&
                                ((i2 = n2(r4)), true)
                              );
                            }),
                            i2 < 0
                              ? (i2 = 0)
                              : i2 > this.control.markList.length - 1 &&
                                (i2 = this.control.markList.length - 1),
                            (o2 = this.control.markList[i2].pos))
                          : ((i2 = n2(
                              this.control.getIndexByValue(
                                this.control.dotsValue[this.focusDotIndex],
                              ),
                            )),
                            (o2 = this.control.parseValue(
                              this.control.getValueByIndex(i2),
                            ))),
                          this.isCrossDot(o2),
                          this.control.setDotPos(o2, this.focusDotIndex),
                          this.syncValueByPos();
                      }
                    },
                    getPosByEvent: function (t3) {
                      return (
                        P(t3, this.$el, this.isReverse, this.zoom)[
                          this.isHorizontal ? "x" : "y"
                        ] / this.scale
                      );
                    },
                    renderSlot: function (t3, e3, r3) {
                      var n2 = this.$slots[t3];
                      return n2 ? n2(e3) : r3;
                    },
                  },
                  created: function () {
                    this.initControl();
                  },
                  mounted: function () {
                    this.bindEvent();
                  },
                  beforeUnmount: function () {
                    this.unbindEvent();
                  },
                });
              const bt = (0, f.Z)(yt, [["render", l]]);
              var gt2 = bt;
              (gt2.VueSliderMark = k), (gt2.VueSliderDot = m);
              var kt = gt2,
                St = kt;
            })(),
            (i = i["default"]),
            i
          );
        })();
      });
    })(vueSliderComponent_umd_min);
    var vueSliderComponent_umd_minExports = vueSliderComponent_umd_min.exports;
    const VueSlider = /* @__PURE__ */ getDefaultExportFromCjs(
      vueSliderComponent_umd_minExports,
    );
    const Tn = (() => {
        const s = {};
        let t = 1;
        return {
          set(e, i, n) {
            typeof e[i] > "u" &&
              ((e[i] = {
                key: i,
                id: t,
              }),
              t++),
              (s[e[i].id] = n);
          },
          get(e, i) {
            if (!e || typeof e[i] > "u") return null;
            const n = e[i];
            return n.key === i ? s[n.id] : null;
          },
          delete(e, i) {
            if (typeof e[i] > "u") return;
            const n = e[i];
            n.key === i && (delete s[n.id], delete e[i]);
          },
        };
      })(),
      y = {
        setData(s, t, e) {
          Tn.set(s, t, e);
        },
        getData(s, t) {
          return Tn.get(s, t);
        },
        removeData(s, t) {
          Tn.delete(s, t);
        },
      },
      Wh = 1e6,
      Fh = 1e3,
      xo = "transitionend",
      Yh = (s) =>
        s == null
          ? `${s}`
          : {}.toString
              .call(s)
              .match(/\s([a-z]+)/i)[1]
              .toLowerCase(),
      rt = (s) => {
        do s += Math.floor(Math.random() * Wh);
        while (document.getElementById(s));
        return s;
      },
      Ul = (s) => {
        let t = s.getAttribute("data-te-target");
        if (!t || t === "#") {
          let e = s.getAttribute("href");
          if (!e || (!e.includes("#") && !e.startsWith("."))) return null;
          e.includes("#") && !e.startsWith("#") && (e = `#${e.split("#")[1]}`),
            (t = e && e !== "#" ? e.trim() : null);
        }
        return t;
      },
      qo = (s) => {
        const t = Ul(s);
        return t && document.querySelector(t) ? t : null;
      },
      Jt = (s) => {
        const t = Ul(s);
        return t ? document.querySelector(t) : null;
      },
      jh = (s) => {
        if (!s) return 0;
        let { transitionDuration: t, transitionDelay: e } =
          window.getComputedStyle(s);
        const i = Number.parseFloat(t),
          n = Number.parseFloat(e);
        return !i && !n
          ? 0
          : ((t = t.split(",")[0]),
            (e = e.split(",")[0]),
            (Number.parseFloat(t) + Number.parseFloat(e)) * Fh);
      },
      Xl = (s) => {
        s.dispatchEvent(new Event(xo));
      },
      je = (s) =>
        !s || typeof s != "object"
          ? false
          : (typeof s.jquery < "u" && (s = s[0]), typeof s.nodeType < "u"),
      te = (s) =>
        je(s)
          ? s.jquery
            ? s[0]
            : s
          : typeof s == "string" && s.length > 0
            ? document.querySelector(s)
            : null,
      D = (s, t, e) => {
        Object.keys(e).forEach((i) => {
          const n = e[i],
            o = t[i],
            r = o && je(o) ? "element" : Yh(o);
          if (!new RegExp(n).test(r))
            throw new Error(
              `${s.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${n}".`,
            );
        });
      },
      Nt = (s) => {
        if (!s || s.getClientRects().length === 0) return false;
        if (s.style && s.parentNode && s.parentNode.style) {
          const t = getComputedStyle(s),
            e = getComputedStyle(s.parentNode);
          return (
            getComputedStyle(s).getPropertyValue("visibility") === "visible" ||
            (t.display !== "none" &&
              e.display !== "none" &&
              t.visibility !== "hidden")
          );
        }
        return false;
      },
      ge = (s) =>
        !s ||
        s.nodeType !== Node.ELEMENT_NODE ||
        s.classList.contains("disabled")
          ? true
          : typeof s.disabled < "u"
            ? s.disabled
            : s.hasAttribute("disabled") &&
              s.getAttribute("disabled") !== "false",
      Je = (s) => {
        s.offsetHeight;
      },
      ql = () => {
        const { jQuery: s } = window;
        return s && !document.body.hasAttribute("data-te-no-jquery") ? s : null;
      },
      En = [],
      Zl = (s) => {
        document.readyState === "loading"
          ? (En.length ||
              document.addEventListener("DOMContentLoaded", () => {
                En.forEach((t) => t());
              }),
            En.push(s))
          : s();
      },
      F = () => document.documentElement.dir === "rtl",
      $ = (s) => document.createElement(s),
      me = (s) => {
        typeof s == "function" && s();
      },
      Ql = (s, t, e = true) => {
        if (!e) {
          me(s);
          return;
        }
        const i = 5,
          n = jh(t) + i;
        let o = false;
        const r = ({ target: a }) => {
          a === t && ((o = true), t.removeEventListener(xo, r), me(s));
        };
        t.addEventListener(xo, r),
          setTimeout(() => {
            o || Xl(t);
          }, n);
      },
      zh = /[^.]*(?=\..*)\.|.*/,
      Uh = /\..*/,
      Xh = /::\d+$/,
      Cn = {};
    let xr = 1;
    const Gh = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
      },
      qh = /^(mouseenter|mouseleave)/i,
      tc = /* @__PURE__ */ new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll",
      ]);

    function ec(s, t) {
      return (t && `${t}::${xr++}`) || s.uidEvent || xr++;
    }

    function ic(s) {
      const t = ec(s);
      return (s.uidEvent = t), (Cn[t] = Cn[t] || {}), Cn[t];
    }

    function Zh(s, t) {
      return function e(i) {
        return (
          (i.delegateTarget = s),
          e.oneOff && c.off(s, i.type, t),
          t.apply(s, [i])
        );
      };
    }

    function Qh(s, t, e) {
      return function i(n) {
        const o = s.querySelectorAll(t);
        for (let { target: r } = n; r && r !== this; r = r.parentNode)
          for (let a = o.length; a--; "")
            if (o[a] === r)
              return (
                (n.delegateTarget = r),
                i.oneOff && c.off(s, n.type, e),
                e.apply(r, [n])
              );
        return null;
      };
    }

    function sc(s, t, e = null) {
      const i = Object.keys(s);
      for (let n = 0, o = i.length; n < o; n++) {
        const r = s[i[n]];
        if (r.originalHandler === t && r.delegationSelector === e) return r;
      }
      return null;
    }

    function nc(s, t, e) {
      const i = typeof t == "string",
        n = i ? e : t;
      let o = oc(s);
      return tc.has(o) || (o = s), [i, n, o];
    }

    function Or(s, t, e, i, n) {
      if (typeof t != "string" || !s) return;
      if ((e || ((e = i), (i = null)), qh.test(t))) {
        const g = (m) =>
          function (b) {
            if (
              !b.relatedTarget ||
              (b.relatedTarget !== b.delegateTarget &&
                !b.delegateTarget.contains(b.relatedTarget))
            )
              return m.call(this, b);
          };
        i ? (i = g(i)) : (e = g(e));
      }
      const [o, r, a] = nc(t, e, i),
        l = ic(s),
        p2 = l[a] || (l[a] = {}),
        u = sc(p2, r, o ? e : null);
      if (u) {
        u.oneOff = u.oneOff && n;
        return;
      }
      const _ = ec(r, t.replace(zh, "")),
        f = o ? Qh(s, e, i) : Zh(s, e);
      (f.delegationSelector = o ? e : null),
        (f.originalHandler = r),
        (f.oneOff = n),
        (f.uidEvent = _),
        (p2[_] = f),
        s.addEventListener(a, f, o);
    }

    function Oo(s, t, e, i, n) {
      const o = sc(t[e], i, n);
      o && (s.removeEventListener(e, o, !!n), delete t[e][o.uidEvent]);
    }

    function Jh(s, t, e, i) {
      const n = t[e] || {};
      Object.keys(n).forEach((o) => {
        if (o.includes(i)) {
          const r = n[o];
          Oo(s, t, e, r.originalHandler, r.delegationSelector);
        }
      });
    }

    function oc(s) {
      return (s = s.replace(Uh, "")), Gh[s] || s;
    }
    const c = {
        on(s, t, e, i) {
          Or(s, t, e, i, false);
        },
        one(s, t, e, i) {
          Or(s, t, e, i, true);
        },
        off(s, t, e, i) {
          if (typeof t != "string" || !s) return;
          const [n, o, r] = nc(t, e, i),
            a = r !== t,
            l = ic(s),
            p2 = t.startsWith(".");
          if (typeof o < "u") {
            if (!l || !l[r]) return;
            Oo(s, l, r, o, n ? e : null);
            return;
          }
          p2 &&
            Object.keys(l).forEach((_) => {
              Jh(s, l, _, t.slice(1));
            });
          const u = l[r] || {};
          Object.keys(u).forEach((_) => {
            const f = _.replace(Xh, "");
            if (!a || t.includes(f)) {
              const g = u[_];
              Oo(s, l, r, g.originalHandler, g.delegationSelector);
            }
          });
        },
        trigger(s, t, e) {
          if (typeof t != "string" || !s) return null;
          const i = ql(),
            n = oc(t),
            o = t !== n,
            r = tc.has(n);
          let a,
            l = true,
            p2 = true,
            u = false,
            _ = null;
          return (
            o &&
              i &&
              ((a = i.Event(t, e)),
              i(s).trigger(a),
              (l = !a.isPropagationStopped()),
              (p2 = !a.isImmediatePropagationStopped()),
              (u = a.isDefaultPrevented())),
            r
              ? ((_ = document.createEvent("HTMLEvents")),
                _.initEvent(n, l, true))
              : (_ = new CustomEvent(t, {
                  bubbles: l,
                  cancelable: true,
                })),
            typeof e < "u" &&
              Object.keys(e).forEach((f) => {
                Object.defineProperty(_, f, {
                  get() {
                    return e[f];
                  },
                });
              }),
            u && _.preventDefault(),
            p2 && s.dispatchEvent(_),
            _.defaultPrevented && typeof a < "u" && a.preventDefault(),
            _
          );
        },
      },
      td = "5.1.3";
    class gt {
      constructor(t) {
        (t = te(t)),
          t &&
            ((this._element = t),
            y.setData(this._element, this.constructor.DATA_KEY, this));
      }
      dispose() {
        y.removeData(this._element, this.constructor.DATA_KEY),
          c.off(this._element, this.constructor.EVENT_KEY),
          Object.getOwnPropertyNames(this).forEach((t) => {
            this[t] = null;
          });
      }
      _queueCallback(t, e, i = true) {
        Ql(t, e, i);
      }
      /** Static */
      static getInstance(t) {
        return y.getData(te(t), this.DATA_KEY);
      }
      static getOrCreateInstance(t, e = {}) {
        return (
          this.getInstance(t) || new this(t, typeof e == "object" ? e : null)
        );
      }
      static get VERSION() {
        return td;
      }
      static get NAME() {
        throw new Error(
          'You have to implement the static method "NAME", for each component!',
        );
      }
      static get DATA_KEY() {
        return `te.${this.NAME}`;
      }
      static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
      }
    }

    function An(s) {
      return s === "true"
        ? true
        : s === "false"
          ? false
          : s === Number(s).toString()
            ? Number(s)
            : s === "" || s === "null"
              ? null
              : s;
    }

    function yn(s) {
      return s.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
    }
    const h = {
      setDataAttribute(s, t, e) {
        s.setAttribute(`data-te-${yn(t)}`, e);
      },
      removeDataAttribute(s, t) {
        s.removeAttribute(`data-te-${yn(t)}`);
      },
      getDataAttributes(s) {
        if (!s) return {};
        const t = {};
        return (
          Object.keys(s.dataset)
            .filter((e) => e.startsWith("te"))
            .forEach((e) => {
              if (e.startsWith("teClass")) return;
              let i = e.replace(/^te/, "");
              (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
                (t[i] = An(s.dataset[e]));
            }),
          t
        );
      },
      getDataClassAttributes(s) {
        if (!s) return {};
        const t = {
          ...s.dataset,
        };
        return (
          Object.keys(t)
            .filter((e) => e.startsWith("teClass"))
            .forEach((e) => {
              let i = e.replace(/^teClass/, "");
              (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
                (t[i] = An(t[e]));
            }),
          t
        );
      },
      getDataAttribute(s, t) {
        return An(s.getAttribute(`data-te-${yn(t)}`));
      },
      offset(s) {
        const t = s.getBoundingClientRect();
        return {
          top: t.top + document.body.scrollTop,
          left: t.left + document.body.scrollLeft,
        };
      },
      position(s) {
        return {
          top: s.offsetTop,
          left: s.offsetLeft,
        };
      },
      style(s, t) {
        Object.assign(s.style, t);
      },
      toggleClass(s, t) {
        s &&
          wn(t).forEach((e) => {
            s.classList.contains(e)
              ? s.classList.remove(e)
              : s.classList.add(e);
          });
      },
      addClass(s, t) {
        wn(t).forEach((e) => !s.classList.contains(e) && s.classList.add(e));
      },
      addStyle(s, t) {
        Object.keys(t).forEach((e) => {
          s.style[e] = t[e];
        });
      },
      removeClass(s, t) {
        wn(t).forEach((e) => s.classList.contains(e) && s.classList.remove(e));
      },
      hasClass(s, t) {
        return s.classList.contains(t);
      },
      maxOffset(s) {
        const t = s.getBoundingClientRect();
        return {
          top:
            t.top +
            Math.max(
              document.body.scrollTop,
              document.documentElement.scrollTop,
              window.scrollY,
            ),
          left:
            t.left +
            Math.max(
              document.body.scrollLeft,
              document.documentElement.scrollLeft,
              window.scrollX,
            ),
        };
      },
    };

    function wn(s) {
      return typeof s == "string" ? s.split(" ") : Array.isArray(s) ? s : false;
    }
    const Ud = 3,
      d = {
        closest(s, t) {
          return s.closest(t);
        },
        matches(s, t) {
          return s.matches(t);
        },
        find(s, t = document.documentElement) {
          return [].concat(...Element.prototype.querySelectorAll.call(t, s));
        },
        findOne(s, t = document.documentElement) {
          return Element.prototype.querySelector.call(t, s);
        },
        children(s, t) {
          return [].concat(...s.children).filter((i) => i.matches(t));
        },
        parents(s, t) {
          const e = [];
          let i = s.parentNode;
          for (; i && i.nodeType === Node.ELEMENT_NODE && i.nodeType !== Ud; )
            this.matches(i, t) && e.push(i), (i = i.parentNode);
          return e;
        },
        prev(s, t) {
          let e = s.previousElementSibling;
          for (; e; ) {
            if (e.matches(t)) return [e];
            e = e.previousElementSibling;
          }
          return [];
        },
        next(s, t) {
          let e = s.nextElementSibling;
          for (; e; ) {
            if (this.matches(e, t)) return [e];
            e = e.nextElementSibling;
          }
          return [];
        },
        focusableChildren(s) {
          const t = [
            "a",
            "button",
            "input",
            "textarea",
            "select",
            "details",
            "[tabindex]",
            '[contenteditable="true"]',
          ]
            .map((e) => `${e}:not([tabindex^="-"])`)
            .join(", ");
          return this.find(t, s).filter((e) => !ge(e) && Nt(e));
        },
      };
    F() ? "top-end" : "top-start";
    F() ? "top-start" : "top-end";
    F() ? "bottom-end" : "bottom-start";
    F() ? "bottom-start" : "bottom-end";
    F() ? "left-start" : "right-start";
    F() ? "right-start" : "left-start";
    const On = "collapse",
      Dc = "te.collapse",
      ln = `.${Dc}`,
      Fr = {
        toggle: true,
        parent: null,
      },
      vu = {
        toggle: "boolean",
        parent: "(null|element)",
      },
      Tu = `show${ln}`,
      Eu = `shown${ln}`,
      Cu = `hide${ln}`,
      Au = `hidden${ln}`,
      Sn = "data-te-collapse-show",
      Yr = "data-te-collapse-collapsed",
      ss = "data-te-collapse-collapsing",
      yu = "data-te-collapse-horizontal",
      Me = "data-te-collapse-item",
      jr = `:scope [${Me}] [${Me}]`,
      wu = "width",
      ku = "height",
      xu =
        "[data-te-collapse-item][data-te-collapse-show], [data-te-collapse-item][data-te-collapse-collapsing]",
      Kr = "[data-te-collapse-init]",
      Ou = {
        visible: "!visible",
        hidden: "hidden",
        baseTransition:
          "overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
        collapsing:
          "h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
        collapsingHorizontal:
          "w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
      },
      Su = {
        visible: "string",
        hidden: "string",
        baseTransition: "string",
        collapsing: "string",
        collapsingHorizontal: "string",
      };
    class Zt extends gt {
      constructor(t, e, i) {
        super(t),
          (this._isTransitioning = false),
          (this._config = this._getConfig(e)),
          (this._classes = this._getClasses(i)),
          (this._triggerArray = []);
        const n = d.find(Kr);
        for (let o = 0, r = n.length; o < r; o++) {
          const a = n[o],
            l = qo(a),
            p2 = d.find(l).filter((u) => u === this._element);
          l !== null &&
            p2.length &&
            ((this._selector = l), this._triggerArray.push(a));
        }
        this._initializeChildren(),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
          this._config.toggle && this.toggle();
      }
      // Getters
      static get Default() {
        return Fr;
      }
      static get NAME() {
        return On;
      }
      // Public
      toggle() {
        this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._isShown()) return;
        let t = [],
          e;
        if (this._config.parent) {
          const u = d.find(jr, this._config.parent);
          t = d.find(xu, this._config.parent).filter((_) => !u.includes(_));
        }
        const i = d.findOne(this._selector);
        if (t.length) {
          const u = t.find((_) => i !== _);
          if (((e = u ? Zt.getInstance(u) : null), e && e._isTransitioning))
            return;
        }
        if (c.trigger(this._element, Tu).defaultPrevented) return;
        t.forEach((u) => {
          i !== u &&
            Zt.getOrCreateInstance(u, {
              toggle: false,
            }).hide(),
            e || y.setData(u, Dc, null);
        });
        const o = this._getDimension(),
          r =
            o === "height"
              ? this._classes.collapsing
              : this._classes.collapsingHorizontal;
        h.removeClass(this._element, this._classes.visible),
          h.removeClass(this._element, this._classes.hidden),
          h.addClass(this._element, r),
          this._element.removeAttribute(Me),
          this._element.setAttribute(ss, ""),
          (this._element.style[o] = 0),
          this._addAriaAndCollapsedClass(this._triggerArray, true),
          (this._isTransitioning = true);
        const a = () => {
            (this._isTransitioning = false),
              h.removeClass(this._element, this._classes.hidden),
              h.removeClass(this._element, r),
              h.addClass(this._element, this._classes.visible),
              this._element.removeAttribute(ss),
              this._element.setAttribute(Me, ""),
              this._element.setAttribute(Sn, ""),
              (this._element.style[o] = ""),
              c.trigger(this._element, Eu);
          },
          p2 = `scroll${o[0].toUpperCase() + o.slice(1)}`;
        this._queueCallback(a, this._element, true),
          (this._element.style[o] = `${this._element[p2]}px`);
      }
      hide() {
        if (
          this._isTransitioning ||
          !this._isShown() ||
          c.trigger(this._element, Cu).defaultPrevented
        )
          return;
        const e = this._getDimension(),
          i =
            e === "height"
              ? this._classes.collapsing
              : this._classes.collapsingHorizontal;
        (this._element.style[e] =
          `${this._element.getBoundingClientRect()[e]}px`),
          Je(this._element),
          h.addClass(this._element, i),
          h.removeClass(this._element, this._classes.visible),
          h.removeClass(this._element, this._classes.hidden),
          this._element.setAttribute(ss, ""),
          this._element.removeAttribute(Me),
          this._element.removeAttribute(Sn);
        const n = this._triggerArray.length;
        for (let r = 0; r < n; r++) {
          const a = this._triggerArray[r],
            l = Jt(a);
          l && !this._isShown(l) && this._addAriaAndCollapsedClass([a], false);
        }
        this._isTransitioning = true;
        const o = () => {
          (this._isTransitioning = false),
            h.removeClass(this._element, i),
            h.addClass(this._element, this._classes.visible),
            h.addClass(this._element, this._classes.hidden),
            this._element.removeAttribute(ss),
            this._element.setAttribute(Me, ""),
            c.trigger(this._element, Au);
        };
        (this._element.style[e] = ""),
          this._queueCallback(o, this._element, true);
      }
      _isShown(t = this._element) {
        return t.hasAttribute(Sn);
      }
      // Private
      _getConfig(t) {
        return (
          (t = {
            ...Fr,
            ...h.getDataAttributes(this._element),
            ...t,
          }),
          (t.toggle = !!t.toggle),
          (t.parent = te(t.parent)),
          D(On, t, vu),
          t
        );
      }
      _getClasses(t) {
        const e = h.getDataClassAttributes(this._element);
        return (
          (t = {
            ...Ou,
            ...e,
            ...t,
          }),
          D(On, t, Su),
          t
        );
      }
      _getDimension() {
        return this._element.hasAttribute(yu) ? wu : ku;
      }
      _initializeChildren() {
        if (!this._config.parent) return;
        const t = d.find(jr, this._config.parent);
        d.find(Kr, this._config.parent)
          .filter((e) => !t.includes(e))
          .forEach((e) => {
            const i = Jt(e);
            i && this._addAriaAndCollapsedClass([e], this._isShown(i));
          });
      }
      _addAriaAndCollapsedClass(t, e) {
        t.length &&
          t.forEach((i) => {
            e ? i.removeAttribute(Yr) : i.setAttribute(`${Yr}`, ""),
              i.setAttribute("aria-expanded", e);
          });
      }
      // Static
      static jQueryInterface(t) {
        return this.each(function () {
          const e = {};
          typeof t == "string" && /show|hide/.test(t) && (e.toggle = false);
          const i = Zt.getOrCreateInstance(this, e);
          if (typeof t == "string") {
            if (typeof i[t] > "u")
              throw new TypeError(`No method named "${t}"`);
            i[t]();
          }
        });
      }
    }
    const zr = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      Ur = ".sticky-top";
    class qe {
      constructor() {
        this._element = document.body;
      }
      getWidth() {
        const t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t);
      }
      hide() {
        const t = this.getWidth();
        this._disableOverFlow(),
          this._setElementAttributes(
            this._element,
            "paddingRight",
            (e) => e + t,
          ),
          this._setElementAttributes(zr, "paddingRight", (e) => e + t),
          this._setElementAttributes(Ur, "marginRight", (e) => e - t);
      }
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"),
          (this._element.style.overflow = "hidden");
      }
      _setElementAttributes(t, e, i) {
        const n = this.getWidth(),
          o = (r) => {
            if (r !== this._element && window.innerWidth > r.clientWidth + n)
              return;
            this._saveInitialAttribute(r, e);
            const a = window.getComputedStyle(r)[e];
            r.style[e] = `${i(Number.parseFloat(a))}px`;
          };
        this._applyManipulationCallback(t, o);
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"),
          this._resetElementAttributes(this._element, "paddingRight"),
          this._resetElementAttributes(zr, "paddingRight"),
          this._resetElementAttributes(Ur, "marginRight");
      }
      _saveInitialAttribute(t, e) {
        const i = t.style[e];
        i && h.setDataAttribute(t, e, i);
      }
      _resetElementAttributes(t, e) {
        const i = (n) => {
          const o = h.getDataAttribute(n, e);
          typeof o > "u"
            ? n.style.removeProperty(e)
            : (h.removeDataAttribute(n, e), (n.style[e] = o));
        };
        this._applyManipulationCallback(t, i);
      }
      _applyManipulationCallback(t, e) {
        je(t) ? e(t) : d.find(t, this._element).forEach(e);
      }
      isOverflowing() {
        return this.getWidth() > 0;
      }
    }
    const Iu = {
        isVisible: true,
        // if false, we use the backdrop helper without adding any element to the dom
        isAnimated: false,
        rootElement: "body",
        // give the choice to place backdrop under different elements
        clickCallback: null,
        backdropClasses: null,
      },
      Du = {
        isVisible: "boolean",
        isAnimated: "boolean",
        rootElement: "(element|string)",
        clickCallback: "(function|null)",
        backdropClasses: "(array|null)",
      },
      $c = "backdrop",
      Xr = `mousedown.te.${$c}`;
    class hr {
      constructor(t) {
        (this._config = this._getConfig(t)),
          (this._isAppended = false),
          (this._element = null);
      }
      show(t) {
        if (!this._config.isVisible) {
          me(t);
          return;
        }
        this._append(), this._config.isAnimated && Je(this._getElement());
        const e = this._config.backdropClasses || [
          "opacity-50",
          "transition-all",
          "duration-300",
          "ease-in-out",
          "fixed",
          "top-0",
          "left-0",
          "z-[1040]",
          "bg-black",
          "w-screen",
          "h-screen",
        ];
        h.removeClass(this._getElement(), "opacity-0"),
          h.addClass(this._getElement(), e),
          this._element.setAttribute("data-te-backdrop-show", ""),
          this._emulateAnimation(() => {
            me(t);
          });
      }
      hide(t) {
        if (!this._config.isVisible) {
          me(t);
          return;
        }
        this._element.removeAttribute("data-te-backdrop-show"),
          this._getElement().classList.add("opacity-0"),
          this._getElement().classList.remove("opacity-50"),
          this._emulateAnimation(() => {
            this.dispose(), me(t);
          });
      }
      // Private
      _getElement() {
        if (!this._element) {
          const t = document.createElement("div");
          (t.className = this._config.className),
            this._config.isAnimated && t.classList.add("opacity-50"),
            (this._element = t);
        }
        return this._element;
      }
      _getConfig(t) {
        return (
          (t = {
            ...Iu,
            ...(typeof t == "object" ? t : {}),
          }),
          (t.rootElement = te(t.rootElement)),
          D($c, t, Du),
          t
        );
      }
      _append() {
        this._isAppended ||
          (this._config.rootElement.append(this._getElement()),
          c.on(this._getElement(), Xr, () => {
            me(this._config.clickCallback);
          }),
          (this._isAppended = true));
      }
      dispose() {
        this._isAppended &&
          (c.off(this._element, Xr),
          this._element.remove(),
          (this._isAppended = false));
      }
      _emulateAnimation(t) {
        Ql(t, this._getElement(), this._config.isAnimated);
      }
    }
    class Wi {
      constructor(t, e = {}, i) {
        (this._element = t),
          (this._toggler = i),
          (this._event = e.event || "blur"),
          (this._condition = e.condition || (() => true)),
          (this._selector =
            e.selector ||
            'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'),
          (this._onlyVisible = e.onlyVisible || false),
          (this._focusableElements = []),
          (this._firstElement = null),
          (this._lastElement = null),
          (this.handler = (n) => {
            this._condition(n) && !n.shiftKey && n.target === this._lastElement
              ? (n.preventDefault(), this._firstElement.focus())
              : this._condition(n) &&
                n.shiftKey &&
                n.target === this._firstElement &&
                (n.preventDefault(), this._lastElement.focus());
          });
      }
      trap() {
        this._setElements(), this._init(), this._setFocusTrap();
      }
      disable() {
        this._focusableElements.forEach((t) => {
          t.removeEventListener(this._event, this.handler);
        }),
          this._toggler && this._toggler.focus();
      }
      update() {
        this._setElements(), this._setFocusTrap();
      }
      _init() {
        const t = (e) => {
          !this._firstElement ||
            e.key !== "Tab" ||
            this._focusableElements.includes(e.target) ||
            (e.preventDefault(),
            this._firstElement.focus(),
            window.removeEventListener("keydown", t));
        };
        window.addEventListener("keydown", t);
      }
      _filterVisible(t) {
        return t.filter((e) => {
          if (!Nt(e)) return false;
          const i = d.parents(e, "*");
          for (let n = 0; n < i.length; n++) {
            const o = window.getComputedStyle(i[n]);
            if (o && (o.display === "none" || o.visibility === "hidden"))
              return false;
          }
          return true;
        });
      }
      _setElements() {
        (this._focusableElements = d.focusableChildren(this._element)),
          this._onlyVisible &&
            (this._focusableElements = this._filterVisible(
              this._focusableElements,
            )),
          (this._firstElement = this._focusableElements[0]),
          (this._lastElement =
            this._focusableElements[this._focusableElements.length - 1]);
      }
      _setFocusTrap() {
        this._focusableElements.forEach((t, e) => {
          e === this._focusableElements.length - 1 || e === 0
            ? t.addEventListener(this._event, this.handler)
            : t.removeEventListener(this._event, this.handler);
        });
      }
    }
    let Gr = [];
    const cn = (s, t = "hide") => {
      const e = `click.dismiss${s.EVENT_KEY}`,
        i = s.NAME;
      Gr.includes(i) ||
        (Gr.push(i),
        c.on(document, e, `[data-te-${i}-dismiss]`, function (n) {
          if (
            (["A", "AREA"].includes(this.tagName) && n.preventDefault(),
            ge(this))
          )
            return;
          const o =
            Jt(this) ||
            this.closest(`.${i}`) ||
            this.closest(`[data-te-${i}-init]`);
          if (!o) return;
          s.getOrCreateInstance(o)[t]();
        }));
    };
    const Nn = "modal",
      Op = "te.modal",
      At = `.${Op}`,
      ia = "Escape",
      sa = {
        backdrop: true,
        keyboard: true,
        focus: true,
        modalNonInvasive: false,
      },
      Sp = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        modalNonInvasive: "boolean",
      },
      Ip = {
        show: "transform-none",
        static: "scale-[1.02]",
        staticProperties: "transition-scale duration-300 ease-in-out",
      },
      Dp = {
        show: "string",
        static: "string",
        staticProperties: "string",
      },
      $p = `hide${At}`,
      Lp = `hidePrevented${At}`,
      Np = `hidden${At}`,
      Mp = `show${At}`,
      Rp = `shown${At}`,
      na = `resize${At}`,
      oa = `click.dismiss${At}`,
      ra = `keydown.dismiss${At}`,
      Pp = `mouseup.dismiss${At}`,
      aa = `mousedown.dismiss${At}`,
      la = "data-te-modal-open",
      ca = "data-te-open",
      li = "[data-te-modal-dialog-ref]",
      Bp = "[data-te-modal-body-ref]";
    class No extends gt {
      constructor(t, e, i) {
        super(t),
          (this._config = this._getConfig(e)),
          (this._classes = this._getClasses(i)),
          (this._dialog = d.findOne(li, this._element)),
          (this._backdrop = this._config.modalNonInvasive
            ? null
            : this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          (this._isShown = false),
          (this._ignoreBackdropClick = false),
          (this._isTransitioning = false),
          (this._scrollBar = new qe()),
          (this._didInit = false),
          this._init();
      }
      // Getters
      static get Default() {
        return sa;
      }
      static get NAME() {
        return Nn;
      }
      // Public
      toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
      show(t) {
        this._isShown ||
          this._isTransitioning ||
          c.trigger(this._element, Mp, {
            relatedTarget: t,
          }).defaultPrevented ||
          ((this._isShown = true),
          this._isAnimated() && (this._isTransitioning = true),
          !this._config.modalNonInvasive && this._scrollBar.hide(),
          document.body.setAttribute(la, "true"),
          this._adjustDialog(),
          this._setEscapeEvent(),
          this._setResizeEvent(),
          c.on(this._dialog, aa, () => {
            c.one(this._element, Pp, (i) => {
              i.target === this._element && (this._ignoreBackdropClick = true);
            });
          }),
          this._showElement(t),
          !this._config.modalNonInvasive && this._showBackdrop());
      }
      hide() {
        if (
          !this._isShown ||
          this._isTransitioning ||
          c.trigger(this._element, $p).defaultPrevented
        )
          return;
        this._isShown = false;
        const e = this._isAnimated();
        e && (this._isTransitioning = true),
          this._setEscapeEvent(),
          this._setResizeEvent(),
          this._focustrap.disable(),
          d.findOne(li, this._element).classList.remove(this._classes.show),
          c.off(this._element, oa),
          c.off(this._dialog, aa),
          this._queueCallback(() => this._hideModal(), this._element, e),
          this._element.removeAttribute(ca);
      }
      dispose() {
        [window, this._dialog].forEach((t) => c.off(t, At)),
          this._backdrop && this._backdrop.dispose(),
          this._focustrap.disable(),
          super.dispose();
      }
      handleUpdate() {
        this._adjustDialog();
      }
      // Private
      _init() {
        this._didInit || (cn(No), (this._didInit = true));
      }
      _initializeBackDrop() {
        return new hr({
          isVisible: !!this._config.backdrop,
          // 'static' option will be translated to true, and booleans will keep their value
          isAnimated: this._isAnimated(),
        });
      }
      _initializeFocusTrap() {
        return new Wi(this._element, {
          event: "keydown",
          condition: (t) => t.key === "Tab",
        });
      }
      _getConfig(t) {
        return (
          (t = {
            ...sa,
            ...h.getDataAttributes(this._element),
            ...(typeof t == "object" ? t : {}),
          }),
          D(Nn, t, Sp),
          t
        );
      }
      _getClasses(t) {
        const e = h.getDataClassAttributes(this._element);
        return (
          (t = {
            ...Ip,
            ...e,
            ...t,
          }),
          D(Nn, t, Dp),
          t
        );
      }
      _showElement(t) {
        const e = this._isAnimated(),
          i = d.findOne(Bp, this._dialog);
        (!this._element.parentNode ||
          this._element.parentNode.nodeType !== Node.ELEMENT_NODE) &&
          document.body.append(this._element),
          (this._element.style.display = "block"),
          this._element.classList.remove("hidden"),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", true),
          this._element.setAttribute("role", "dialog"),
          this._element.setAttribute(`${ca}`, "true"),
          (this._element.scrollTop = 0);
        const n = d.findOne(li, this._element);
        n.classList.add(this._classes.show),
          n.classList.remove("opacity-0"),
          n.classList.add("opacity-100"),
          i && (i.scrollTop = 0),
          e && Je(this._element);
        const o = () => {
          this._config.focus && this._focustrap.trap(),
            (this._isTransitioning = false),
            c.trigger(this._element, Rp, {
              relatedTarget: t,
            });
        };
        this._queueCallback(o, this._dialog, e);
      }
      _setEscapeEvent() {
        this._isShown
          ? c.on(document, ra, (t) => {
              this._config.keyboard && t.key === ia
                ? (t.preventDefault(), this.hide())
                : !this._config.keyboard &&
                  t.key === ia &&
                  this._triggerBackdropTransition();
            })
          : c.off(this._element, ra);
      }
      _setResizeEvent() {
        this._isShown
          ? c.on(window, na, () => this._adjustDialog())
          : c.off(window, na);
      }
      _hideModal() {
        const t = d.findOne(li, this._element);
        t.classList.remove(this._classes.show),
          t.classList.remove("opacity-100"),
          t.classList.add("opacity-0"),
          setTimeout(() => {
            this._element.style.display = "none";
          }, 300),
          this._element.setAttribute("aria-hidden", true),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          (this._isTransitioning = false),
          this._backdrop &&
            this._backdrop.hide(() => {
              document.body.removeAttribute(la),
                this._resetAdjustments(),
                !this._config.modalNonInvasive && this._scrollBar.reset(),
                c.trigger(this._element, Np);
            });
      }
      _showBackdrop(t) {
        c.on(this._element, oa, (e) => {
          if (this._ignoreBackdropClick) {
            this._ignoreBackdropClick = false;
            return;
          }
          e.target === e.currentTarget &&
            (this._config.backdrop === true
              ? this.hide()
              : this._config.backdrop === "static" &&
                this._triggerBackdropTransition());
        }),
          this._backdrop && this._backdrop.show(t);
      }
      _isAnimated() {
        return !!d.findOne(li, this._element);
      }
      _triggerBackdropTransition() {
        if (c.trigger(this._element, Lp).defaultPrevented) return;
        const { classList: e, scrollHeight: i, style: n } = this._element,
          o = i > document.documentElement.clientHeight;
        (!o && n.overflowY === "hidden") ||
          e.contains(this._classes.static) ||
          (o || (n.overflowY = "hidden"),
          e.add(...this._classes.static.split(" ")),
          e.add(...this._classes.staticProperties.split(" ")),
          this._queueCallback(() => {
            e.remove(this._classes.static),
              setTimeout(() => {
                e.remove(...this._classes.staticProperties.split(" "));
              }, 300),
              o ||
                this._queueCallback(() => {
                  n.overflowY = "";
                }, this._dialog);
          }, this._dialog),
          this._element.focus());
      }
      // ----------------------------------------------------------------------
      // the following methods are used to handle overflowing modals
      // ----------------------------------------------------------------------
      _adjustDialog() {
        const t =
            this._element.scrollHeight > document.documentElement.clientHeight,
          e = this._scrollBar.getWidth(),
          i = e > 0;
        ((!i && t && !F()) || (i && !t && F())) &&
          (this._element.style.paddingLeft = `${e}px`),
          ((i && !t && !F()) || (!i && t && F())) &&
            (this._element.style.paddingRight = `${e}px`);
      }
      _resetAdjustments() {
        (this._element.style.paddingLeft = ""),
          (this._element.style.paddingRight = "");
      }
      // Static
      static jQueryInterface(t, e) {
        return this.each(function () {
          const i = No.getOrCreateInstance(this, t);
          if (typeof t == "string") {
            if (typeof i[t] > "u")
              throw new TypeError(`No method named "${t}"`);
            i[t](e);
          }
        });
      }
    }
    ({
      AUTO: "auto",
      TOP: "top",
      RIGHT: F() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: F() ? "right" : "left",
    });
    (() => {
      var s = {
          454: (i, n, o) => {
            o.d(n, {
              Z: () => l,
            });
            var r = o(645),
              a = o.n(r)()(function (p2) {
                return p2[1];
              });
            a.push([
              i.id,
              "INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}",
              "",
            ]);
            const l = a;
          },
          645: (i) => {
            i.exports = function (n) {
              var o = [];
              return (
                (o.toString = function () {
                  return this.map(function (r) {
                    var a = n(r);
                    return r[2]
                      ? "@media ".concat(r[2], " {").concat(a, "}")
                      : a;
                  }).join("");
                }),
                (o.i = function (r, a, l) {
                  typeof r == "string" && (r = [[null, r, ""]]);
                  var p2 = {};
                  if (l)
                    for (var u = 0; u < this.length; u++) {
                      var _ = this[u][0];
                      _ != null && (p2[_] = true);
                    }
                  for (var f = 0; f < r.length; f++) {
                    var g = [].concat(r[f]);
                    (l && p2[g[0]]) ||
                      (a &&
                        (g[2]
                          ? (g[2] = "".concat(a, " and ").concat(g[2]))
                          : (g[2] = a)),
                      o.push(g));
                  }
                }),
                o
              );
            };
          },
          810: () => {
            (function () {
              if (typeof window < "u")
                try {
                  var i = new window.CustomEvent("test", {
                    cancelable: true,
                  });
                  if ((i.preventDefault(), i.defaultPrevented !== true))
                    throw new Error("Could not prevent default");
                } catch {
                  var n = function (r, a) {
                    var l, p2;
                    return (
                      ((a = a || {}).bubbles = !!a.bubbles),
                      (a.cancelable = !!a.cancelable),
                      (l = document.createEvent("CustomEvent")).initCustomEvent(
                        r,
                        a.bubbles,
                        a.cancelable,
                        a.detail,
                      ),
                      (p2 = l.preventDefault),
                      (l.preventDefault = function () {
                        p2.call(this);
                        try {
                          Object.defineProperty(this, "defaultPrevented", {
                            get: function () {
                              return true;
                            },
                          });
                        } catch {
                          this.defaultPrevented = true;
                        }
                      }),
                      l
                    );
                  };
                  (n.prototype = window.Event.prototype),
                    (window.CustomEvent = n);
                }
            })();
          },
          379: (i, n, o) => {
            var r,
              a = (function () {
                var E = {};
                return function (T) {
                  if (E[T] === void 0) {
                    var A = document.querySelector(T);
                    if (
                      window.HTMLIFrameElement &&
                      A instanceof window.HTMLIFrameElement
                    )
                      try {
                        A = A.contentDocument.head;
                      } catch {
                        A = null;
                      }
                    E[T] = A;
                  }
                  return E[T];
                };
              })(),
              l = [];

            function p2(E) {
              for (var T = -1, A = 0; A < l.length; A++)
                if (l[A].identifier === E) {
                  T = A;
                  break;
                }
              return T;
            }

            function u(E, T) {
              for (var A = {}, k = [], I = 0; I < E.length; I++) {
                var O = E[I],
                  x = T.base ? O[0] + T.base : O[0],
                  L = A[x] || 0,
                  S = "".concat(x, " ").concat(L);
                A[x] = L + 1;
                var N = p2(S),
                  P = {
                    css: O[1],
                    media: O[2],
                    sourceMap: O[3],
                  };
                N !== -1
                  ? (l[N].references++, l[N].updater(P))
                  : l.push({
                      identifier: S,
                      updater: w(P, T),
                      references: 1,
                    }),
                  k.push(S);
              }
              return k;
            }

            function _(E) {
              var T = document.createElement("style"),
                A = E.attributes || {};
              if (A.nonce === void 0) {
                var k = o.nc;
                k && (A.nonce = k);
              }
              if (
                (Object.keys(A).forEach(function (O) {
                  T.setAttribute(O, A[O]);
                }),
                typeof E.insert == "function")
              )
                E.insert(T);
              else {
                var I = a(E.insert || "head");
                if (!I)
                  throw new Error(
                    "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
                  );
                I.appendChild(T);
              }
              return T;
            }
            var f,
              g =
                ((f = []),
                function (E, T) {
                  return (
                    (f[E] = T),
                    f.filter(Boolean).join(`
`)
                  );
                });

            function m(E, T, A, k) {
              var I = A
                ? ""
                : k.media
                  ? "@media ".concat(k.media, " {").concat(k.css, "}")
                  : k.css;
              if (E.styleSheet) E.styleSheet.cssText = g(T, I);
              else {
                var O = document.createTextNode(I),
                  x = E.childNodes;
                x[T] && E.removeChild(x[T]),
                  x.length ? E.insertBefore(O, x[T]) : E.appendChild(O);
              }
            }

            function b(E, T, A) {
              var k = A.css,
                I = A.media,
                O = A.sourceMap;
              if (
                (I ? E.setAttribute("media", I) : E.removeAttribute("media"),
                O &&
                  typeof btoa < "u" &&
                  (k += `
/*# sourceMappingURL=data:application/json;base64,`.concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(O)))),
                    " */",
                  )),
                E.styleSheet)
              )
                E.styleSheet.cssText = k;
              else {
                for (; E.firstChild; ) E.removeChild(E.firstChild);
                E.appendChild(document.createTextNode(k));
              }
            }
            var v = null,
              C = 0;

            function w(E, T) {
              var A, k, I;
              if (T.singleton) {
                var O = C++;
                (A = v || (v = _(T))),
                  (k = m.bind(null, A, O, false)),
                  (I = m.bind(null, A, O, true));
              } else
                (A = _(T)),
                  (k = b.bind(null, A, T)),
                  (I = function () {
                    (function (x) {
                      if (x.parentNode === null) return false;
                      x.parentNode.removeChild(x);
                    })(A);
                  });
              return (
                k(E),
                function (x) {
                  if (x) {
                    if (
                      x.css === E.css &&
                      x.media === E.media &&
                      x.sourceMap === E.sourceMap
                    )
                      return;
                    k((E = x));
                  } else I();
                }
              );
            }
            i.exports = function (E, T) {
              (T = T || {}).singleton ||
                typeof T.singleton == "boolean" ||
                (T.singleton =
                  (r === void 0 &&
                    (r = !!(
                      window &&
                      document &&
                      document.all &&
                      !window.atob
                    )),
                  r));
              var A = u((E = E || []), T);
              return function (k) {
                if (
                  ((k = k || []),
                  Object.prototype.toString.call(k) === "[object Array]")
                ) {
                  for (var I = 0; I < A.length; I++) {
                    var O = p2(A[I]);
                    l[O].references--;
                  }
                  for (var x = u(k, T), L = 0; L < A.length; L++) {
                    var S = p2(A[L]);
                    l[S].references === 0 && (l[S].updater(), l.splice(S, 1));
                  }
                  A = x;
                }
              };
            };
          },
        },
        t = {};

      function e(i) {
        var n = t[i];
        if (n !== void 0) return n.exports;
        var o = (t[i] = {
          id: i,
          exports: {},
        });
        return s[i](o, o.exports, e), o.exports;
      }
      (e.n = (i) => {
        var n = i && i.__esModule ? () => i.default : () => i;
        return (
          e.d(n, {
            a: n,
          }),
          n
        );
      }),
        (e.d = (i, n) => {
          for (var o in n)
            e.o(n, o) &&
              !e.o(i, o) &&
              Object.defineProperty(i, o, {
                enumerable: true,
                get: n[o],
              });
        }),
        (e.o = (i, n) => Object.prototype.hasOwnProperty.call(i, n)),
        (() => {
          var i = e(379),
            n = e.n(i),
            o = e(454);

          function r(l) {
            if (!l.hasAttribute("autocompleted")) {
              l.setAttribute("autocompleted", "");
              var p2 = new window.CustomEvent("onautocomplete", {
                bubbles: true,
                cancelable: true,
                detail: null,
              });
              l.dispatchEvent(p2) || (l.value = "");
            }
          }

          function a(l) {
            l.hasAttribute("autocompleted") &&
              (l.removeAttribute("autocompleted"),
              l.dispatchEvent(
                new window.CustomEvent("onautocomplete", {
                  bubbles: true,
                  cancelable: false,
                  detail: null,
                }),
              ));
          }
          n()(o.Z, {
            insert: "head",
            singleton: false,
          }),
            o.Z.locals,
            e(810),
            document.addEventListener(
              "animationstart",
              function (l) {
                l.animationName === "onautofillstart"
                  ? r(l.target)
                  : a(l.target);
              },
              true,
            ),
            document.addEventListener(
              "input",
              function (l) {
                l.inputType !== "insertReplacementText" && "data" in l
                  ? a(l.target)
                  : r(l.target);
              },
              true,
            );
        })();
    })();
    F() ? 100 : -100;
    F() ? -100 : 100;
    ({
      inputID: rt("chips-input-"),
      parentSelector: "",
      initialValues: [
        {
          tag: "init1",
        },
        {
          tag: "init2",
        },
      ],
      editable: false,
      labelText: "Example label",
      inputClasses: {},
      inputOptions: {},
    });
    const zt = {
        plugins: {
          legend: {
            labels: {
              color: "rgb(102,102,102)",
            },
          },
        },
      },
      Ti = {
        line: {
          options: {
            ...zt,
            elements: {
              line: {
                backgroundColor: "rgba(59, 112, 202, 0.0)",
                borderColor: "rgb(59, 112, 202)",
                borderWidth: 2,
                tension: 0,
              },
              point: {
                borderColor: "rgb(59, 112, 202)",
                backgroundColor: "rgb(59, 112, 202)",
              },
            },
            responsive: true,
            legend: {
              display: true,
            },
            tooltips: {
              intersect: false,
              mode: "index",
            },
            datasets: {
              borderColor: "red",
            },
            scales: {
              x: {
                stacked: true,
                grid: {
                  display: false,
                },
                ticks: {
                  fontColor: "rgba(0,0,0, 0.5)",
                },
              },
              y: {
                stacked: false,
                grid: {
                  borderDash: [2],
                  drawBorder: false,
                  zeroLineColor: "rgba(0,0,0,0)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
                ticks: {
                  fontColor: "rgba(0,0,0, 0.5)",
                },
              },
            },
          },
        },
        bar: {
          options: {
            ...zt,
            backgroundColor: "rgb(59, 112, 202)",
            borderWidth: 0,
            responsive: true,
            legend: {
              display: true,
            },
            tooltips: {
              intersect: false,
              mode: "index",
            },
            scales: {
              x: {
                stacked: true,
                grid: {
                  display: false,
                },
                ticks: {
                  fontColor: "rgba(0,0,0, 0.5)",
                },
              },
              y: {
                stacked: true,
                grid: {
                  borderDash: [2],
                  drawBorder: false,
                  zeroLineColor: "rgba(0,0,0,0)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
                ticks: {
                  fontColor: "rgba(0,0,0, 0.5)",
                },
              },
            },
          },
        },
        pie: {
          options: {
            ...zt,
            elements: {
              arc: {
                backgroundColor: "rgb(59, 112, 202)",
              },
            },
            responsive: true,
            legend: {
              display: true,
            },
          },
        },
        doughnut: {
          options: {
            ...zt,
            elements: {
              arc: {
                backgroundColor: "rgb(59, 112, 202)",
              },
            },
            responsive: true,
            legend: {
              display: true,
            },
          },
        },
        polarArea: {
          options: {
            ...zt,
            elements: {
              arc: {
                backgroundColor: "rgba(59, 112, 202, 0.5)",
              },
            },
            responsive: true,
            legend: {
              display: true,
            },
          },
        },
        radar: {
          options: {
            ...zt,
            elements: {
              line: {
                backgroundColor: "rgba(59, 112, 202, 0.5)",
                borderColor: "rgb(59, 112, 202)",
                borderWidth: 2,
              },
              point: {
                borderColor: "rgb(59, 112, 202)",
                backgroundColor: "rgb(59, 112, 202)",
              },
            },
            responsive: true,
            legend: {
              display: true,
            },
          },
        },
        scatter: {
          options: {
            ...zt,
            elements: {
              line: {
                backgroundColor: "rgba(59, 112, 202, 0.5)",
                borderColor: "rgb(59, 112, 202)",
                borderWidth: 2,
                tension: 0,
              },
              point: {
                borderColor: "rgb(59, 112, 202)",
                backgroundColor: "rgba(59, 112, 202, 0.5)",
              },
            },
            responsive: true,
            legend: {
              display: true,
            },
            tooltips: {
              intersect: false,
              mode: "index",
            },
            datasets: {
              borderColor: "red",
            },
            scales: {
              x: {
                stacked: true,
                grid: {
                  display: false,
                },
                ticks: {
                  fontColor: "rgba(0,0,0, 0.5)",
                },
              },
              y: {
                stacked: false,
                grid: {
                  borderDash: [2],
                  drawBorder: false,
                  zeroLineColor: "rgba(0,0,0,0)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
                ticks: {
                  fontColor: "rgba(0,0,0, 0.5)",
                },
              },
            },
          },
        },
        bubble: {
          options: {
            ...zt,
            elements: {
              point: {
                borderColor: "rgb(59, 112, 202)",
                backgroundColor: "rgba(59, 112, 202, 0.5)",
              },
            },
            responsive: true,
            legend: {
              display: true,
            },
            scales: {
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  fontColor: "rgba(0,0,0, 0.5)",
                },
              },
              y: {
                grid: {
                  borderDash: [2],
                  drawBorder: false,
                  zeroLineColor: "rgba(0,0,0,0)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
                ticks: {
                  fontColor: "rgba(0,0,0, 0.5)",
                },
              },
            },
          },
        },
      };
    var zi = function (t) {
        (this.element = t), (this.handlers = {});
      },
      fh = {
        isEmpty: {
          configurable: true,
        },
      };
    zi.prototype.bind = function (t, e) {
      typeof this.handlers[t] > "u" && (this.handlers[t] = []),
        this.handlers[t].push(e),
        this.element.addEventListener(t, e, false);
    };
    zi.prototype.unbind = function (t, e) {
      var i = this;
      this.handlers[t] = this.handlers[t].filter(function (n) {
        return e && n !== e
          ? true
          : (i.element.removeEventListener(t, n, false), false);
      });
    };
    zi.prototype.unbindAll = function () {
      for (var t in this.handlers) this.unbind(t);
    };
    fh.isEmpty.get = function () {
      var s = this;
      return Object.keys(this.handlers).every(function (t) {
        return s.handlers[t].length === 0;
      });
    };
    Object.defineProperties(zi.prototype, fh);
    ({
      isWebKit:
        typeof document < "u" &&
        "WebkitAppearance" in document.documentElement.style,
      supportsTouch:
        typeof window < "u" &&
        ("ontouchstart" in window ||
          ("maxTouchPoints" in window.navigator &&
            window.navigator.maxTouchPoints > 0) ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
      supportsIePointer: typeof navigator < "u" && navigator.msMaxTouchPoints,
      isChrome:
        typeof navigator < "u" &&
        /Chrome/i.test(navigator && navigator.userAgent),
    });
    $("div");
    const OC = (s) => {
        Zl(() => {
          const t = ql();
          if (t) {
            const e = s.NAME,
              i = t.fn[e];
            (t.fn[e] = s.jQueryInterface),
              (t.fn[e].Constructor = s),
              (t.fn[e].noConflict = () => ((t.fn[e] = i), s.jQueryInterface));
          }
        });
      },
      SC = (s, t) => {
        c.on(document, `click.te.${s.NAME}`, t, function (e) {
          e.preventDefault(), s.getOrCreateInstance(this).toggle();
        });
      },
      IC = (s, t) => {
        c.on(document, `click.te.${s.NAME}.data-api`, t, function (e) {
          if (
            (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
            ge(this))
          )
            return;
          s.getOrCreateInstance(this).show();
        });
      },
      DC = (s, t) => {
        c.on(document, `click.te.${s.NAME}.data-api`, t, function (e) {
          const i = Jt(this);
          if (
            (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
            ge(this))
          )
            return;
          c.one(i, s.EVENT_HIDDEN, () => {
            Nt(this) && this.focus();
          });
          const n = d.findOne(s.OPEN_SELECTOR);
          n && n !== i && s.getInstance(n).hide(),
            s.getOrCreateInstance(i).toggle(this);
        });
      },
      $C = (s, t) => {
        c.on(document, `click.te.${s.NAME}`, t, (e) => {
          e.preventDefault();
          const i = e.target.closest(t);
          s.getOrCreateInstance(i).toggle();
        });
      },
      LC = (s, t) => {
        c.on(document, `click.te.${s.NAME}`, t, function (e) {
          const i = Jt(this);
          ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
            c.one(i, s.EVENT_SHOW, (r) => {
              r.defaultPrevented ||
                c.one(i, s.EVENT_HIDDEN, () => {
                  Nt(this) && this.focus();
                });
            });
          const n = d.findOne(`[${s.OPEN_SELECTOR}="true"]`);
          n && s.getInstance(n).hide(), s.getOrCreateInstance(i).toggle(this);
        });
      },
      NC = (s, t) => {
        c.one(document, "mousedown", t, s.autoInitial(new s()));
      },
      MC = (s, t) => {
        c.on(document, `click.te.${s.NAME}.data-api`, t, function (e) {
          (e.target.tagName === "A" ||
            (e.delegateTarget && e.delegateTarget.tagName === "A")) &&
            e.preventDefault();
          const i = qo(this);
          d.find(i).forEach((o) => {
            s.getOrCreateInstance(o, {
              toggle: false,
            }).toggle();
          });
        });
      },
      RC = (s, t) => {
        [].slice.call(document.querySelectorAll(t)).map(function (i) {
          return new s(i);
        });
      },
      PC = (s, t) => {
        [].slice.call(document.querySelectorAll(t)).map(function (i) {
          return new s(i);
        });
      },
      BC = (s, t) => {
        d.find(t).forEach((e) => {
          new s(e);
        }),
          c.on(
            document,
            `click.te.${s.NAME}.data-api`,
            `${t} img:not([data-te-lightbox-disabled])`,
            s.toggle(),
          );
      },
      HC = (s, t) => {
        const e = (o) =>
            (o[0] === "{" && o[o.length - 1] === "}") ||
            (o[0] === "[" && o[o.length - 1] === "]"),
          i = (o) =>
            typeof o != "string"
              ? o
              : e(o)
                ? JSON.parse(o.replace(/'/g, '"'))
                : o,
          n = (o) => {
            const r = {};
            return (
              Object.keys(o).forEach((a) => {
                if (a.match(/dataset.*/)) {
                  const l = a.slice(7, 8).toLowerCase().concat(a.slice(8));
                  r[l] = i(o[a]);
                }
              }),
              r
            );
          };
        d.find(t).forEach((o) => {
          if (
            h.getDataAttribute(o, "chart") !== "bubble" &&
            h.getDataAttribute(o, "chart") !== "scatter"
          ) {
            const r = h.getDataAttributes(o),
              a = {
                data: {
                  datasets: [n(r)],
                },
              };
            return (
              r.chart && (a.type = r.chart),
              r.labels &&
                (a.data.labels = JSON.parse(r.labels.replace(/'/g, '"'))),
              new s(o, {
                ...a,
                ...Ti[a.type],
              })
            );
          }
          return null;
        });
      };
    class VC {
      constructor() {
        this.inits = [];
      }
      get initialized() {
        return this.inits;
      }
      isInited(t) {
        return this.inits.includes(t);
      }
      add(t) {
        this.isInited(t) || this.inits.push(t);
      }
    }
    const Go = new VC(),
      Oi = {
        alert: {
          name: "Alert",
          selector: "[data-te-alert-init]",
          isToggler: false,
        },
        animation: {
          name: "Animate",
          selector: "[data-te-animation-init]",
          isToggler: false,
        },
        carousel: {
          name: "Carousel",
          selector: "[data-te-carousel-init]",
          isToggler: false,
        },
        chips: {
          name: "ChipsInput",
          selector: "[data-te-chips-input-init]",
          isToggler: false,
        },
        chip: {
          name: "Chip",
          selector: "[data-te-chip-init]",
          isToggler: false,
          onInit: "init",
        },
        datepicker: {
          name: "Datepicker",
          selector: "[data-te-datepicker-init]",
          isToggler: false,
        },
        datetimepicker: {
          name: "Datetimepicker",
          selector: "[data-te-date-timepicker-init]",
          isToggler: false,
        },
        input: {
          name: "Input",
          selector: "[data-te-input-wrapper-init]",
          isToggler: false,
        },
        perfectScrollbar: {
          name: "PerfectScrollbar",
          selector: "[data-te-perfect-scrollbar-init]",
          isToggler: false,
        },
        rating: {
          name: "Rating",
          selector: "[data-te-rating-init]",
          isToggler: false,
        },
        scrollspy: {
          name: "ScrollSpy",
          selector: "[data-te-spy='scroll']",
          isToggler: false,
        },
        select: {
          name: "Select",
          selector: "[data-te-select-init]",
          isToggler: false,
        },
        sidenav: {
          name: "Sidenav",
          selector: "[data-te-sidenav-init]",
          isToggler: false,
        },
        stepper: {
          name: "Stepper",
          selector: "[data-te-stepper-init]",
          isToggler: false,
        },
        timepicker: {
          name: "Timepicker",
          selector: "[data-te-timepicker-init]",
          isToggler: false,
        },
        toast: {
          name: "Toast",
          selector: "[data-te-toast-init]",
          isToggler: false,
        },
        datatable: {
          name: "Datatable",
          selector: "[data-te-datatable-init]",
        },
        popconfirm: {
          name: "Popconfirm",
          selector: "[data-te-toggle='popconfirm']",
        },
        validation: {
          name: "Validation",
          selector: "[data-te-validation-init]",
        },
        smoothScroll: {
          name: "SmoothScroll",
          selector: "a[data-te-smooth-scroll-init]",
        },
        lazyLoad: {
          name: "LazyLoad",
          selector: "[data-te-lazy-load-init]",
        },
        clipboard: {
          name: "Clipboard",
          selector: "[data-te-clipboard-init]",
        },
        infiniteScroll: {
          name: "InfiniteScroll",
          selector: "[data-te-infinite-scroll-init]",
        },
        loadingManagement: {
          name: "LoadingManagement",
          selector: "[data-te-loading-management-init]",
        },
        sticky: {
          name: "Sticky",
          selector: "[data-te-sticky-init]",
        },
        // advancedInits
        chart: {
          name: "Chart",
          selector: "[data-te-chart]",
          isToggler: false,
          advanced: HC,
        },
        // togglers
        button: {
          name: "Button",
          selector: "[data-te-toggle='button']",
          isToggler: true,
          callback: $C,
        },
        collapse: {
          name: "Collapse",
          selector: "[data-te-collapse-init]",
          isToggler: true,
          callback: MC,
        },
        dropdown: {
          name: "Dropdown",
          selector: "[data-te-dropdown-toggle-ref]",
          isToggler: true,
          callback: SC,
        },
        modal: {
          name: "Modal",
          selector: "[data-te-toggle='modal']",
          isToggler: true,
          callback: LC,
        },
        ripple: {
          name: "Ripple",
          selector: "[data-te-ripple-init]",
          isToggler: true,
          callback: NC,
        },
        offcanvas: {
          name: "Offcanvas",
          selector: "[data-te-offcanvas-toggle]",
          isToggler: true,
          callback: DC,
        },
        tab: {
          name: "Tab",
          selector:
            "[data-te-toggle='tab'], [data-te-toggle='pill'], [data-te-toggle='list']",
          isToggler: true,
          callback: IC,
        },
        tooltip: {
          name: "Tooltip",
          selector: "[data-te-toggle='tooltip']",
          isToggler: false,
          callback: RC,
        },
        popover: {
          name: "Popover",
          selector: "[data-te-toggle='popover']",
          isToggler: true,
          callback: PC,
        },
        lightbox: {
          name: "Lightbox",
          selector: "[data-te-lightbox-init]",
          isToggler: true,
          callback: BC,
        },
        touch: {
          name: "Touch",
          selector: "[data-te-touch-init]",
        },
      },
      WC = (s) => Oi[s.NAME] || null,
      FC = (s, t) => {
        if (!s || (!t.allowReinits && Go.isInited(s.NAME))) return;
        Go.add(s.NAME);
        const e = WC(s),
          i = (e == null ? void 0 : e.isToggler) || false;
        if ((OC(s), e != null && e.advanced)) {
          e == null || e.advanced(s, e == null ? void 0 : e.selector);
          return;
        }
        if (i) {
          e == null || e.callback(s, e == null ? void 0 : e.selector);
          return;
        }
        d.find(e == null ? void 0 : e.selector).forEach((n) => {
          let o = s.getInstance(n);
          o || ((o = new s(n)), e != null && e.onInit && o[e.onInit]());
        });
      },
      YC = (s, t) => {
        s.forEach((e) => FC(e, t));
      },
      jC = {
        allowReinits: false,
        checkOtherImports: false,
      },
      ZC = (s, t = {}) => {
        t = {
          ...jC,
          ...t,
        };
        const e = Object.keys(Oi).map((i) => {
          if (!!document.querySelector(Oi[i].selector)) {
            const o = s[Oi[i].name];
            return (
              !o &&
                !Go.isInited(i) &&
                t.checkOtherImports &&
                console.warn(
                  `Please import ${Oi[i].name} from "tw-elements" package and add it to a object parameter inside "initTE" function`,
                ),
              o
            );
          }
        });
        YC(e, t);
      };
    ZC(
      {
        Modal: No,
        Collapse: Zt,
      },
      true,
    );
    const formatTime = (secs) => {
      var minutes = String(Math.floor(secs / 60)).padStart(2, "0") || "00";
      var seconds = String(secs % 60).padStart(2, "0") || "00";
      return minutes + ":" + seconds;
    };
    const mapNumber = (value, inMin, inMax, outMin, outMax) => {
      return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    };
    const PodcastPlayerApp = {
      components: {
        VueSlider,
      },
      setup() {
        const breakpoints = useBreakpoints(breakpointsTailwind);
        const isMobile = breakpoints.smaller("md");
        const isTablet = breakpoints.between("md", "lg");
        const isDesktop = breakpoints.greaterOrEqual("lg");
        const isReady = ref(false);
        const isUserInput = ref(false);
        const CONTROLLING = ref(false);
        const CONTROL_EPISODE = ref(null);
        const CONTROL_SEEK = ref(0);
        const CONTROL_VOLUME = ref(0.5);
        const CONTROL_SPEED_OPEN = ref(false);
        const CONTROL_SPEED = ref(1);
        const CONTROL_PLAYING = ref(false);
        const CONTROL_USER_DURATION = ref(0.17);
        const STATUS_TIMER = ref("00:00/0:00");
        const STATUS_SEEK = ref("00:00");
        const STATUS_DURATION = ref("00:00");
        const AUDIO_LIST = ref(false);
        const COUNTDOWN = ref(5);
        const COUNTDOWN_TIMER = ref(null);
        const PLAY_NEXT_AUDIO = ref(true);
        const meta = reactive({
          data: null,
          list: null,
        });
        const audio = ref(null);
        const processbar = ref(null);
        const img = ref(null);
        const playAudio = (episode, chapterUrl) => {
          CONTROL_EPISODE.value.id == episode ? togglePlay() : null;
          CONTROL_EPISODE.value = getEpisodeDataById(episode);
          isUserInput.value = true;
          document.querySelector("#magIframe").src = chapterUrl;
        };
        let clickTimer = 0;
        let click = false;
        watch(CONTROL_EPISODE, (data) => {
          audio.value.currentTime = 0;
          CONTROL_SEEK.value =
            (audio.value.currentTime / audio.value.duration) * 100;
          if (!audio.value.paused) {
            let playPromise = audio.value.play();
            if (playPromise !== undefined) {
              playPromise
                .then((_) => {
                  audio.value.pause();
                })
                .catch((error) => {});
            }
          }
          clearTimeout(clickTimer);
          clickTimer = setTimeout(() => {
            // console.log(data)
            audio.value.src = data.audio;
            if (click) {
              // audio.value.play();
              let playPromise = audio.value.play();
              if (playPromise !== undefined) {
                playPromise
                  .then((_) => {
                    audio.value.autoplay = true;
                  })
                  .catch((error) => {});
              }
            } else {
              click = true;
            }
            img.value = data.image;
            navigator.mediaSession.metadata = new MediaMetadata({
              title: data.title,
              // artwork: [{
              //   src: data.thumbnail,
              //   sizes: "96x96",
              //   type: "image/jpg"
              // }]
            });
          }, 1e3);
        });
        const playlistPrevTenSec = () => {
          audio.value.currentTime -= 10;
          CONTROL_SEEK.value =
            (audio.value.currentTime / audio.value.duration) * 100;
          STATUS_SEEK.value = formatTime(
            Math.round((CONTROL_SEEK.value / 100) * audio.value.duration),
          );
        };
        const playlistNextTenSec = () => {
          audio.value.currentTime += 10;
          CONTROL_SEEK.value =
            (audio.value.currentTime / audio.value.duration) * 100;
          STATUS_SEEK.value = formatTime(
            Math.round((CONTROL_SEEK.value / 100) * audio.value.duration),
          );
        };
        const playlistPrev = () => {
          let prev = "";
          meta.list.forEach((item, index) => {
            if (item.id == CONTROL_EPISODE.value.id) {
              if (meta.list[index - 1]) {
                prev = meta.list[index - 1];
              }
            }
          });
          prev != "" ? playAudio(prev.id, prev.chapterUrl) : null;
        };
        const playlistNext = () => {
          let next = "";
          meta.list.forEach((item, index) => {
            if (item.id == CONTROL_EPISODE.value.id) {
              if (meta.list[index + 1]) {
                next = meta.list[index + 1].id;
              }
            }
          });
          next != "" ? playAudio(next) : null;
          console.log(next);
        };
        const buttonVolume = ref(null);
        const { elementX, elementWidth } = useMouseInElement(buttonVolume);
        const buttonSpeed = ref(null);
        const { isOutside } = useMouseInElement(buttonSpeed);
        const changeVolume = () => {
          let pX = (elementX.value / elementWidth.value) * 100;
          pX < 30 ? (pX = 30) : null;
          pX > 70 ? (pX = 70) : null;
          CONTROL_VOLUME.value = mapNumber(pX, 30, 70, 0, 100) / 100;
        };
        const togglePlay = () => {
          // console.log(audio.value.paused);
          if (audio.value.paused) {
            audio.value.play();
          } else {
            audio.value.pause();
          }
        };
        let pausedStatus = false;
        const processSliderDragStart = () => {
          pausedStatus = audio.value.paused;

          let playPromise = audio.value.play();
          if (playPromise !== undefined) {
            playPromise
              .then((_) => {
                audio.value.pause();
              })
              .catch((error) => {});
          }
        };
        const processSliderDragging = () => {
          audio.value.currentTime =
            (CONTROL_SEEK.value / 100) * audio.value.duration;
        };
        const processSliderDragEnd = () => {
          audio.value.currentTime =
            (CONTROL_SEEK.value / 100) * audio.value.duration;
          if (!pausedStatus) {
            setTimeout(() => {
              let playPromise = audio.value.play();
              if (playPromise !== undefined) {
                playPromise
                  .then((_) => {
                    audio.value.play();
                  })
                  .catch((error) => {});
              }
            }, 555);
          }
        };
        const processSliderClick = (e) => {
          const mouseX = e.clientX;
          const railRect = document
            .querySelector(".vue-slider-rail")
            .getBoundingClientRect();
          const relativeX = mouseX - railRect.left;
          const railWidth =
            document.querySelector(".vue-slider-rail").clientWidth;
          audio.value.currentTime =
            (relativeX / railWidth) * audio.value.duration;
          CONTROL_SEEK.value =
            (audio.value.currentTime / audio.value.duration) * 100;
        };
        const getPlaylist = (data) => {
          let list = [];
          for (let i = 0; i < data.length; i++) {
            let chapter = data[i];
            if (chapter.audio) {
              list.push(chapter);
            }
            if (chapter.episodes) {
              for (let j = 0; j < chapter.episodes.length; j++) {
                let episode = chapter.episodes[j];
                list.push(episode);
              }
            }
          }
          return list;
        };
        const getEpisodeDataById = (id) => {
          for (let i = 0; i < meta.list.length; i++) {
            if (meta.list[i].id == id) {
              return meta.list[i];
            }
          }
        };
        const pauseAudio = () => {
          // audio.value.pause();
          // console.log(audio.value.paused)
          clearInterval(COUNTDOWN_TIMER.value);
        };
        onMounted(async () => {
          window.ResizeObserver = ResizeObserver;
          document.addEventListener("click", (e) => {
            isOutside.value ? (CONTROL_SPEED_OPEN.value = false) : null;
          });
          axios$1
            .get("../playlist.json")
            .then((response) => {
              meta.data = response.data;
              meta.list = getPlaylist(meta.data);
              nextTick(() => {
                CONTROL_EPISODE.value = meta.list[0];
                isReady.value = true;
              });
            })
            .catch((error) => {
              console.log(error);
            });
          let timer = 0;
          const step = () => {
            timer++;
            if (!audio.value.paused) {
              audio.value.volume = CONTROL_VOLUME.value;
              audio.value.playbackRate = CONTROL_SPEED.value;
              CONTROL_PLAYING.value = true;
              CONTROL_SEEK.value =
                (audio.value.currentTime / audio.value.duration) * 100;
              // if (timer % 600 == 0) {
              //   axios$1.post("./tracking.json", {
              //     id: CONTROL_EPISODE.value.id,
              //     time: Math.round(audio.value.currentTime)
              //   }).then((response) => {}).catch((error) => {
              //     console.log(error);
              //   });
              // }
            } else {
              CONTROL_PLAYING.value = false;
            }
            STATUS_SEEK.value = formatTime(
              Math.round((CONTROL_SEEK.value / 100) * audio.value.duration),
            );
            STATUS_DURATION.value = formatTime(
              Math.round(audio.value.duration),
            );
          };
          setInterval(step, 33);

          const { Modal, initTWE } = twe;
          initTWE({ Modal });
          const modalElement = document.getElementById("tweModal");
          const modalInstance = new Modal(modalElement);

          audio.value.addEventListener("ended", (event) => {
            console.log("ended");
            if (
              meta.data[meta.data.length - 1].id !== CONTROL_EPISODE.value.id
            ) {
              modalInstance.show();
              if (COUNTDOWN_TIMER.value) {
                clearInterval(COUNTDOWN_TIMER.value);
              }
              COUNTDOWN_TIMER.value = setInterval(() => {
                COUNTDOWN.value--;
                console.log(COUNTDOWN.value);
                if (COUNTDOWN.value <= 0) {
                  playlistNext();
                  clearInterval(COUNTDOWN_TIMER.value);
                  modalInstance.hide();
                  COUNTDOWN.value = 5;
                }
              }, 1000);
            }
          });
        });
        // onUnmounted(() => {});
        return {
          audio,
          img,
          processbar,
          isMobile,
          isTablet,
          isDesktop,
          meta,
          processSliderDragStart,
          processSliderDragging,
          processSliderDragEnd,
          processSliderClick,
          playAudio,
          togglePlay,
          playlistPrev,
          playlistNext,
          playlistPrevTenSec,
          playlistNextTenSec,
          changeVolume,
          isReady,
          isUserInput,
          buttonVolume,
          buttonSpeed,
          pauseAudio,
          CONTROLLING,
          CONTROL_EPISODE,
          CONTROL_SEEK,
          STATUS_TIMER,
          STATUS_SEEK,
          STATUS_DURATION,
          CONTROL_VOLUME,
          CONTROL_SPEED_OPEN,
          CONTROL_SPEED,
          CONTROL_PLAYING,
          CONTROL_USER_DURATION,
          AUDIO_LIST,
          COUNTDOWN,
          PLAY_NEXT_AUDIO,
        };
      },
    };
    createApp(PodcastPlayerApp).use(plugin, axios$1).mount("#PodcastPlayerApp");
  },
});
export default require_main();
