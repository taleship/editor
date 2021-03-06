(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var generateId = __webpack_require__(12);
	var NOOP = __webpack_require__(13);
	
	module.exports = React.createClass({
	  displayName: 'exports',
	
	
	  getInitialState: function getInitialState() {
	    return {
	      keyChange: false
	    };
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onChange: NOOP,
	      options: {}
	    };
	  },
	
	  componentWillMount: function componentWillMount() {
	    var id = this.props.id;
	    if (id) {
	      this.id = id;
	    } else {
	      this.id = generateId();
	    }
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.createEditor();
	    this.addEvents();
	    this.addExtraKeys();
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (!this.state.keyChange && nextProps.value !== this.simplemde.value()) {
	      // Prevent a bad bug.
	      console.log("SimpleMDE: Value changed");
	      this.simplemde.value(nextProps.value);
	      this.simplemde.codemirror.focus();
	      this.simplemde.codemirror.setCursor(this.simplemde.codemirror.lineCount(), 0);
	    }
	
	    this.setState({
	      keyChange: false
	    });
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.removeEvents();
	  },
	
	  createEditor: function createEditor() {
	    var SimpleMDE = __webpack_require__(14);
	    var initialOptions = {
	      element: document.getElementById(this.id),
	      initialValue: this.props.value
	    };
	
	    var allOptions = Object.assign({}, initialOptions, this.props.options);
	    this.simplemde = new SimpleMDE(allOptions);
	  },
	
	  eventWrapper: function eventWrapper() {
	    this.setState({
	      keyChange: true
	    });
	    this.props.onChange(this.simplemde.value());
	  },
	
	  removeEvents: function removeEvents() {
	    this.editorEl.removeEventListener('keyup', this.eventWrapper);
	    this.editorToolbarEl && this.editorToolbarEl.removeEventListener('click', this.eventWrapper);
	  },
	
	  addEvents: function addEvents() {
	    var wrapperId = this.id + '-wrapper';
	    var wrapperEl = document.getElementById('' + wrapperId);
	
	    this.editorEl = wrapperEl.getElementsByClassName('CodeMirror')[0];
	    this.editorToolbarEl = wrapperEl.getElementsByClassName('editor-toolbar')[0];
	
	    this.editorEl.addEventListener('keyup', this.eventWrapper);
	    this.editorToolbarEl && this.editorToolbarEl.addEventListener('click', this.eventWrapper);
	  },
	
	  addExtraKeys: function addExtraKeys() {
	    // https://codemirror.net/doc/manual.html#option_extraKeys
	    if (this.props.extraKeys) {
	      this.simplemde.codemirror.setOption('extraKeys', this.props.extraKeys);
	    }
	  },
	
	  render: function render() {
	    var textarea = React.createElement('textarea', { id: this.id });
	    return React.createElement('div', { id: this.id + '-wrapper', className: this.props.className }, textarea);
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {(function (global, factory) {
		 true ? module.exports = factory(__webpack_require__(3), __webpack_require__(11)) :
		typeof define === 'function' && define.amd ? define(['prop-types', 'preact'], factory) :
		(global.preactCompat = factory(global.PropTypes,global.preact));
	}(this, (function (PropTypes,preact) {
	
	PropTypes = 'default' in PropTypes ? PropTypes['default'] : PropTypes;
	
	var version = '15.1.0'; // trick libraries to think we are react
	
	var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');
	
	var REACT_ELEMENT_TYPE = (typeof Symbol!=='undefined' && Symbol.for && Symbol.for('react.element')) || 0xeac7;
	
	var COMPONENT_WRAPPER_KEY = typeof Symbol!=='undefined' ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';
	
	// don't autobind these methods since they already have guaranteed context.
	var AUTOBIND_BLACKLIST = {
		constructor: 1,
		render: 1,
		shouldComponentUpdate: 1,
		componentWillReceiveProps: 1,
		componentWillUpdate: 1,
		componentDidUpdate: 1,
		componentWillMount: 1,
		componentDidMount: 1,
		componentWillUnmount: 1,
		componentDidUnmount: 1
	};
	
	
	var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vert|word|writing|x)[A-Z]/;
	
	
	var BYPASS_HOOK = {};
	
	/*global process*/
	var DEV = typeof process==='undefined' || !process.env || process.env.NODE_ENV!=='production';
	
	// a component that renders nothing. Used to replace components for unmountComponentAtNode.
	function EmptyComponent() { return null; }
	
	
	
	// make react think we're react.
	var VNode = preact.h('a', null).constructor;
	VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
	VNode.prototype.preactCompatUpgraded = false;
	VNode.prototype.preactCompatNormalized = false;
	
	Object.defineProperty(VNode.prototype, 'type', {
		get: function() { return this.nodeName; },
		set: function(v) { this.nodeName = v; },
		configurable:true
	});
	
	Object.defineProperty(VNode.prototype, 'props', {
		get: function() { return this.attributes; },
		set: function(v) { this.attributes = v; },
		configurable:true
	});
	
	
	
	var oldEventHook = preact.options.event;
	preact.options.event = function (e) {
		if (oldEventHook) { e = oldEventHook(e); }
		e.persist = Object;
		e.nativeEvent = e;
		return e;
	};
	
	
	var oldVnodeHook = preact.options.vnode;
	preact.options.vnode = function (vnode) {
		if (!vnode.preactCompatUpgraded) {
			vnode.preactCompatUpgraded = true;
	
			var tag = vnode.nodeName,
				attrs = vnode.attributes = extend({}, vnode.attributes);
	
			if (typeof tag==='function') {
				if (tag[COMPONENT_WRAPPER_KEY]===true || (tag.prototype && 'isReactComponent' in tag.prototype)) {
					if (vnode.children && String(vnode.children)==='') { vnode.children = undefined; }
					if (vnode.children) { attrs.children = vnode.children; }
	
					if (!vnode.preactCompatNormalized) {
						normalizeVNode(vnode);
					}
					handleComponentVNode(vnode);
				}
			}
			else {
				if (vnode.children && String(vnode.children)==='') { vnode.children = undefined; }
				if (vnode.children) { attrs.children = vnode.children; }
	
				if (attrs.defaultValue) {
					if (!attrs.value && attrs.value!==0) {
						attrs.value = attrs.defaultValue;
					}
					delete attrs.defaultValue;
				}
	
				handleElementVNode(vnode, attrs);
			}
		}
	
		if (oldVnodeHook) { oldVnodeHook(vnode); }
	};
	
	function handleComponentVNode(vnode) {
		var tag = vnode.nodeName,
			a = vnode.attributes;
	
		vnode.attributes = {};
		if (tag.defaultProps) { extend(vnode.attributes, tag.defaultProps); }
		if (a) { extend(vnode.attributes, a); }
	}
	
	function handleElementVNode(vnode, a) {
		var shouldSanitize, attrs, i;
		if (a) {
			for (i in a) { if ((shouldSanitize = CAMEL_PROPS.test(i))) { break; } }
			if (shouldSanitize) {
				attrs = vnode.attributes = {};
				for (i in a) {
					if (a.hasOwnProperty(i)) {
						attrs[ CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i ] = a[i];
					}
				}
			}
		}
	}
	
	
	
	// proxy render() since React returns a Component reference.
	function render$1(vnode, parent, callback) {
		var prev = parent && parent._preactCompatRendered && parent._preactCompatRendered.base;
	
		// ignore impossible previous renders
		if (prev && prev.parentNode!==parent) { prev = null; }
	
		// default to first Element child
		if (!prev) { prev = parent.children[0]; }
	
		// remove unaffected siblings
		for (var i=parent.childNodes.length; i--; ) {
			if (parent.childNodes[i]!==prev) {
				parent.removeChild(parent.childNodes[i]);
			}
		}
	
		var out = preact.render(vnode, parent, prev);
		if (parent) { parent._preactCompatRendered = out && (out._component || { base: out }); }
		if (typeof callback==='function') { callback(); }
		return out && out._component || out;
	}
	
	
	var ContextProvider = function () {};
	
	ContextProvider.prototype.getChildContext = function () {
		return this.props.context;
	};
	ContextProvider.prototype.render = function (props) {
		return props.children[0];
	};
	
	function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
		var wrap = preact.h(ContextProvider, { context: parentComponent.context }, vnode);
		var c = render$1(wrap, container);
		if (callback) { callback(c); }
		return c._component || c.base;
	}
	
	
	function unmountComponentAtNode(container) {
		var existing = container._preactCompatRendered && container._preactCompatRendered.base;
		if (existing && existing.parentNode===container) {
			preact.render(preact.h(EmptyComponent), container, existing);
			return true;
		}
		return false;
	}
	
	
	
	var ARR = [];
	
	// This API is completely unnecessary for Preact, so it's basically passthrough.
	var Children = {
		map: function(children, fn, ctx) {
			if (children == null) { return null; }
			children = Children.toArray(children);
			if (ctx && ctx!==children) { fn = fn.bind(ctx); }
			return children.map(fn);
		},
		forEach: function(children, fn, ctx) {
			if (children == null) { return null; }
			children = Children.toArray(children);
			if (ctx && ctx!==children) { fn = fn.bind(ctx); }
			children.forEach(fn);
		},
		count: function(children) {
			return children && children.length || 0;
		},
		only: function(children) {
			children = Children.toArray(children);
			if (children.length!==1) { throw new Error('Children.only() expects only one child.'); }
			return children[0];
		},
		toArray: function(children) {
			if (children == null) { return []; }
			return Array.isArray && Array.isArray(children) ? children : ARR.concat(children);
		}
	};
	
	
	/** Track current render() component for ref assignment */
	var currentComponent;
	
	
	function createFactory(type) {
		return createElement.bind(null, type);
	}
	
	
	var DOM = {};
	for (var i=ELEMENTS.length; i--; ) {
		DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
	}
	
	function upgradeToVNodes(arr, offset) {
		for (var i=offset || 0; i<arr.length; i++) {
			var obj = arr[i];
			if (Array.isArray(obj)) {
				upgradeToVNodes(obj);
			}
			else if (obj && typeof obj==='object' && !isValidElement(obj) && ((obj.props && obj.type) || (obj.attributes && obj.nodeName) || obj.children)) {
				arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
			}
		}
	}
	
	function isStatelessComponent(c) {
		return typeof c==='function' && !(c.prototype && c.prototype.render);
	}
	
	
	// wraps stateless functional components in a PropTypes validator
	function wrapStatelessComponent(WrappedComponent) {
		return createClass({
			displayName: WrappedComponent.displayName || WrappedComponent.name,
			render: function() {
				return WrappedComponent(this.props, this.context);
			}
		});
	}
	
	
	function statelessComponentHook(Ctor) {
		var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
		if (Wrapped) { return Wrapped===true ? Ctor : Wrapped; }
	
		Wrapped = wrapStatelessComponent(Ctor);
	
		Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable:true, value:true });
		Wrapped.displayName = Ctor.displayName;
		Wrapped.propTypes = Ctor.propTypes;
		Wrapped.defaultProps = Ctor.defaultProps;
	
		Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable:true, value:Wrapped });
	
		return Wrapped;
	}
	
	
	function createElement() {
		var args = [], len = arguments.length;
		while ( len-- ) args[ len ] = arguments[ len ];
	
		upgradeToVNodes(args, 2);
		return normalizeVNode(preact.h.apply(void 0, args));
	}
	
	
	function normalizeVNode(vnode) {
		vnode.preactCompatNormalized = true;
	
		applyClassName(vnode);
	
		if (isStatelessComponent(vnode.nodeName)) {
			vnode.nodeName = statelessComponentHook(vnode.nodeName);
		}
	
		var ref = vnode.attributes.ref,
			type = ref && typeof ref;
		if (currentComponent && (type==='string' || type==='number')) {
			vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
		}
	
		applyEventNormalization(vnode);
	
		return vnode;
	}
	
	
	function cloneElement$1(element, props) {
		var children = [], len = arguments.length - 2;
		while ( len-- > 0 ) children[ len ] = arguments[ len + 2 ];
	
		if (!isValidElement(element)) { return element; }
		var elementProps = element.attributes || element.props;
		var node = preact.h(
			element.nodeName || element.type,
			elementProps,
			element.children || elementProps && elementProps.children
		);
		// Only provide the 3rd argument if needed.
		// Arguments 3+ overwrite element.children in preactCloneElement
		var cloneArgs = [node, props];
		if (children && children.length) {
			cloneArgs.push(children);
		}
		else if (props && props.children) {
			cloneArgs.push(props.children);
		}
		return normalizeVNode(preact.cloneElement.apply(void 0, cloneArgs));
	}
	
	
	function isValidElement(element) {
		return element && ((element instanceof VNode) || element.$$typeof===REACT_ELEMENT_TYPE);
	}
	
	
	function createStringRefProxy(name, component) {
		return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
			if (component && component.refs) {
				component.refs[name] = resolved;
				if (resolved===null) {
					delete component._refProxies[name];
					component = null;
				}
			}
		});
	}
	
	
	function applyEventNormalization(ref) {
		var nodeName = ref.nodeName;
		var attributes = ref.attributes;
	
		if (!attributes || typeof nodeName!=='string') { return; }
		var props = {};
		for (var i in attributes) {
			props[i.toLowerCase()] = i;
		}
		if (props.ondoubleclick) {
			attributes.ondblclick = attributes[props.ondoubleclick];
			delete attributes[props.ondoubleclick];
		}
		// for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
		if (props.onchange && (nodeName==='textarea' || (nodeName.toLowerCase()==='input' && !/^fil|che|rad/i.test(attributes.type)))) {
			var normalized = props.oninput || 'oninput';
			if (!attributes[normalized]) {
				attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
				delete attributes[props.onchange];
			}
		}
	}
	
	
	function applyClassName(ref) {
		var attributes = ref.attributes;
	
		if (!attributes) { return; }
		var cl = attributes.className || attributes.class;
		if (cl) { attributes.className = cl; }
	}
	
	
	function extend(base, props) {
		for (var key in props) {
			if (props.hasOwnProperty(key)) {
				base[key] = props[key];
			}
		}
		return base;
	}
	
	
	function shallowDiffers(a, b) {
		for (var i in a) { if (!(i in b)) { return true; } }
		for (var i$1 in b) { if (a[i$1]!==b[i$1]) { return true; } }
		return false;
	}
	
	
	function findDOMNode(component) {
		return component && component.base || component;
	}
	
	
	function F(){}
	
	function createClass(obj) {
		function cl(props, context) {
			bindAll(this);
			Component$1.call(this, props, context, BYPASS_HOOK);
			newComponentHook.call(this, props, context);
		}
	
		obj = extend({ constructor: cl }, obj);
	
		// We need to apply mixins here so that getDefaultProps is correctly mixed
		if (obj.mixins) {
			applyMixins(obj, collateMixins(obj.mixins));
		}
		if (obj.statics) {
			extend(cl, obj.statics);
		}
		if (obj.propTypes) {
			cl.propTypes = obj.propTypes;
		}
		if (obj.defaultProps) {
			cl.defaultProps = obj.defaultProps;
		}
		if (obj.getDefaultProps) {
			cl.defaultProps = obj.getDefaultProps();
		}
	
		F.prototype = Component$1.prototype;
		cl.prototype = extend(new F(), obj);
	
		cl.displayName = obj.displayName || 'Component';
	
		return cl;
	}
	
	
	// Flatten an Array of mixins to a map of method name to mixin implementations
	function collateMixins(mixins) {
		var keyed = {};
		for (var i=0; i<mixins.length; i++) {
			var mixin = mixins[i];
			for (var key in mixin) {
				if (mixin.hasOwnProperty(key) && typeof mixin[key]==='function') {
					(keyed[key] || (keyed[key]=[])).push(mixin[key]);
				}
			}
		}
		return keyed;
	}
	
	
	// apply a mapping of Arrays of mixin methods to a component prototype
	function applyMixins(proto, mixins) {
		for (var key in mixins) { if (mixins.hasOwnProperty(key)) {
			proto[key] = multihook(
				mixins[key].concat(proto[key] || ARR),
				key==='getDefaultProps' || key==='getInitialState' || key==='getChildContext'
			);
		} }
	}
	
	
	function bindAll(ctx) {
		for (var i in ctx) {
			var v = ctx[i];
			if (typeof v==='function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
				(ctx[i] = v.bind(ctx)).__bound = true;
			}
		}
	}
	
	
	function callMethod(ctx, m, args) {
		if (typeof m==='string') {
			m = ctx.constructor.prototype[m];
		}
		if (typeof m==='function') {
			return m.apply(ctx, args);
		}
	}
	
	function multihook(hooks, skipDuplicates) {
		return function() {
			var arguments$1 = arguments;
			var this$1 = this;
	
			var ret;
			for (var i=0; i<hooks.length; i++) {
				var r = callMethod(this$1, hooks[i], arguments$1);
	
				if (skipDuplicates && r!=null) {
					if (!ret) { ret = {}; }
					for (var key in r) { if (r.hasOwnProperty(key)) {
						ret[key] = r[key];
					} }
				}
				else if (typeof r!=='undefined') { ret = r; }
			}
			return ret;
		};
	}
	
	
	function newComponentHook(props, context) {
		propsHook.call(this, props, context);
		this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
		this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
	}
	
	
	function propsHook(props, context) {
		if (!props) { return; }
	
		// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
		var c = props.children;
		if (c && Array.isArray(c) && c.length===1) {
			props.children = c[0];
	
			// but its totally still going to be an Array.
			if (props.children && typeof props.children==='object') {
				props.children.length = 1;
				props.children[0] = props.children;
			}
		}
	
		// add proptype checking
		if (DEV) {
			var ctor = typeof this==='function' ? this : this.constructor,
				propTypes = this.propTypes || ctor.propTypes;
			var displayName = this.displayName || ctor.name;
	
			if (propTypes) {
				PropTypes.checkPropTypes(propTypes, props, 'prop', displayName);
			}
		}
	}
	
	
	function beforeRender(props) {
		currentComponent = this;
	}
	
	function afterRender() {
		if (currentComponent===this) {
			currentComponent = null;
		}
	}
	
	
	
	function Component$1(props, context, opts) {
		preact.Component.call(this, props, context);
		this.state = this.getInitialState ? this.getInitialState() : {};
		this.refs = {};
		this._refProxies = {};
		if (opts!==BYPASS_HOOK) {
			newComponentHook.call(this, props, context);
		}
	}
	extend(Component$1.prototype = new preact.Component(), {
		constructor: Component$1,
	
		isReactComponent: {},
	
		replaceState: function(state, callback) {
			var this$1 = this;
	
			this.setState(state, callback);
			for (var i in this$1.state) {
				if (!(i in state)) {
					delete this$1.state[i];
				}
			}
		},
	
		getDOMNode: function() {
			return this.base;
		},
	
		isMounted: function() {
			return !!this.base;
		}
	});
	
	
	
	function PureComponent(props, context) {
		Component$1.call(this, props, context);
	}
	F.prototype = Component$1.prototype;
	PureComponent.prototype = new F();
	PureComponent.prototype.isPureReactComponent = true;
	PureComponent.prototype.shouldComponentUpdate = function(props, state) {
		return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
	};
	
	
	
	var index = {
		version: version,
		DOM: DOM,
		PropTypes: PropTypes,
		Children: Children,
		render: render$1,
		createClass: createClass,
		createFactory: createFactory,
		createElement: createElement,
		cloneElement: cloneElement$1,
		isValidElement: isValidElement,
		findDOMNode: findDOMNode,
		unmountComponentAtNode: unmountComponentAtNode,
		Component: Component$1,
		PureComponent: PureComponent,
		unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
	};
	
	return index;
	
	})));
	//# sourceMappingURL=preact-compat.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;
	
	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(4)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(10)();
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(5);
	var invariant = __webpack_require__(6);
	var warning = __webpack_require__(7);
	
	var ReactPropTypesSecret = __webpack_require__(8);
	var checkPropTypes = __webpack_require__(9);
	
	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */
	
	  var ANONYMOUS = '<<anonymous>>';
	
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };
	
	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/
	
	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	
	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	
	    return chainedCheckType;
	  }
	
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }
	
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	
	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }
	
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	
	        return true;
	      default:
	        return false;
	    }
	  }
	
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }
	
	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }
	
	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	
	    return false;
	  }
	
	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }
	
	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }
	
	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }
	
	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var validateFormat = function validateFormat(format) {};
	
	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(5);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };
	
	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }
	
	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }
	
	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }
	
	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}
	
	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(6);
	  var warning = __webpack_require__(7);
	  var ReactPropTypesSecret = __webpack_require__(8);
	  var loggedTypeFailures = {};
	}
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	
	          var stack = getStack ? getStack() : '';
	
	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}
	
	module.exports = checkPropTypes;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(5);
	var invariant = __webpack_require__(6);
	var ReactPropTypesSecret = __webpack_require__(8);
	
	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim
	  };
	
	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	!function() {
	    'use strict';
	    function VNode() {}
	    function h(nodeName, attributes) {
	        var lastSimple, child, simple, i, children = EMPTY_CHILDREN;
	        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
	        if (attributes && null != attributes.children) {
	            if (!stack.length) stack.push(attributes.children);
	            delete attributes.children;
	        }
	        while (stack.length) if ((child = stack.pop()) && void 0 !== child.pop) for (i = child.length; i--; ) stack.push(child[i]); else {
	            if ('boolean' == typeof child) child = null;
	            if (simple = 'function' != typeof nodeName) if (null == child) child = ''; else if ('number' == typeof child) child = String(child); else if ('string' != typeof child) simple = !1;
	            if (simple && lastSimple) children[children.length - 1] += child; else if (children === EMPTY_CHILDREN) children = [ child ]; else children.push(child);
	            lastSimple = simple;
	        }
	        var p = new VNode();
	        p.nodeName = nodeName;
	        p.children = children;
	        p.attributes = null == attributes ? void 0 : attributes;
	        p.key = null == attributes ? void 0 : attributes.key;
	        if (void 0 !== options.vnode) options.vnode(p);
	        return p;
	    }
	    function extend(obj, props) {
	        for (var i in props) obj[i] = props[i];
	        return obj;
	    }
	    function cloneElement(vnode, props) {
	        return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
	    }
	    function enqueueRender(component) {
	        if (!component.__d && (component.__d = !0) && 1 == items.push(component)) (options.debounceRendering || defer)(rerender);
	    }
	    function rerender() {
	        var p, list = items;
	        items = [];
	        while (p = list.pop()) if (p.__d) renderComponent(p);
	    }
	    function isSameNodeType(node, vnode, hydrating) {
	        if ('string' == typeof vnode || 'number' == typeof vnode) return void 0 !== node.splitText;
	        if ('string' == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName); else return hydrating || node._componentConstructor === vnode.nodeName;
	    }
	    function isNamedNode(node, nodeName) {
	        return node.__n === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
	    }
	    function getNodeProps(vnode) {
	        var props = extend({}, vnode.attributes);
	        props.children = vnode.children;
	        var defaultProps = vnode.nodeName.defaultProps;
	        if (void 0 !== defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
	        return props;
	    }
	    function createNode(nodeName, isSvg) {
	        var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	        node.__n = nodeName;
	        return node;
	    }
	    function removeNode(node) {
	        var parentNode = node.parentNode;
	        if (parentNode) parentNode.removeChild(node);
	    }
	    function setAccessor(node, name, old, value, isSvg) {
	        if ('className' === name) name = 'class';
	        if ('key' === name) ; else if ('ref' === name) {
	            if (old) old(null);
	            if (value) value(node);
	        } else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
	            if (!value || 'string' == typeof value || 'string' == typeof old) node.style.cssText = value || '';
	            if (value && 'object' == typeof value) {
	                if ('string' != typeof old) for (var i in old) if (!(i in value)) node.style[i] = '';
	                for (var i in value) node.style[i] = 'number' == typeof value[i] && !1 === IS_NON_DIMENSIONAL.test(i) ? value[i] + 'px' : value[i];
	            }
	        } else if ('dangerouslySetInnerHTML' === name) {
	            if (value) node.innerHTML = value.__html || '';
	        } else if ('o' == name[0] && 'n' == name[1]) {
	            var useCapture = name !== (name = name.replace(/Capture$/, ''));
	            name = name.toLowerCase().substring(2);
	            if (value) {
	                if (!old) node.addEventListener(name, eventProxy, useCapture);
	            } else node.removeEventListener(name, eventProxy, useCapture);
	            (node.__l || (node.__l = {}))[name] = value;
	        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
	            setProperty(node, name, null == value ? '' : value);
	            if (null == value || !1 === value) node.removeAttribute(name);
	        } else {
	            var ns = isSvg && name !== (name = name.replace(/^xlink\:?/, ''));
	            if (null == value || !1 === value) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase()); else node.removeAttribute(name); else if ('function' != typeof value) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value); else node.setAttribute(name, value);
	        }
	    }
	    function setProperty(node, name, value) {
	        try {
	            node[name] = value;
	        } catch (e) {}
	    }
	    function eventProxy(e) {
	        return this.__l[e.type](options.event && options.event(e) || e);
	    }
	    function flushMounts() {
	        var c;
	        while (c = mounts.pop()) {
	            if (options.afterMount) options.afterMount(c);
	            if (c.componentDidMount) c.componentDidMount();
	        }
	    }
	    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	        if (!diffLevel++) {
	            isSvgMode = null != parent && void 0 !== parent.ownerSVGElement;
	            hydrating = null != dom && !('__preactattr_' in dom);
	        }
	        var ret = idiff(dom, vnode, context, mountAll, componentRoot);
	        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
	        if (!--diffLevel) {
	            hydrating = !1;
	            if (!componentRoot) flushMounts();
	        }
	        return ret;
	    }
	    function idiff(dom, vnode, context, mountAll, componentRoot) {
	        var out = dom, prevSvgMode = isSvgMode;
	        if (null == vnode || 'boolean' == typeof vnode) vnode = '';
	        if ('string' == typeof vnode || 'number' == typeof vnode) {
	            if (dom && void 0 !== dom.splitText && dom.parentNode && (!dom._component || componentRoot)) {
	                if (dom.nodeValue != vnode) dom.nodeValue = vnode;
	            } else {
	                out = document.createTextNode(vnode);
	                if (dom) {
	                    if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
	                    recollectNodeTree(dom, !0);
	                }
	            }
	            out.__preactattr_ = !0;
	            return out;
	        }
	        var vnodeName = vnode.nodeName;
	        if ('function' == typeof vnodeName) return buildComponentFromVNode(dom, vnode, context, mountAll);
	        isSvgMode = 'svg' === vnodeName ? !0 : 'foreignObject' === vnodeName ? !1 : isSvgMode;
	        vnodeName = String(vnodeName);
	        if (!dom || !isNamedNode(dom, vnodeName)) {
	            out = createNode(vnodeName, isSvgMode);
	            if (dom) {
	                while (dom.firstChild) out.appendChild(dom.firstChild);
	                if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
	                recollectNodeTree(dom, !0);
	            }
	        }
	        var fc = out.firstChild, props = out.__preactattr_, vchildren = vnode.children;
	        if (null == props) {
	            props = out.__preactattr_ = {};
	            for (var a = out.attributes, i = a.length; i--; ) props[a[i].name] = a[i].value;
	        }
	        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && null != fc && void 0 !== fc.splitText && null == fc.nextSibling) {
	            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
	        } else if (vchildren && vchildren.length || null != fc) innerDiffNode(out, vchildren, context, mountAll, hydrating || null != props.dangerouslySetInnerHTML);
	        diffAttributes(out, vnode.attributes, props);
	        isSvgMode = prevSvgMode;
	        return out;
	    }
	    function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	        var j, c, f, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren ? vchildren.length : 0;
	        if (0 !== len) for (var i = 0; i < len; i++) {
	            var _child = originalChildren[i], props = _child.__preactattr_, key = vlen && props ? _child._component ? _child._component.__k : props.key : null;
	            if (null != key) {
	                keyedLen++;
	                keyed[key] = _child;
	            } else if (props || (void 0 !== _child.splitText ? isHydrating ? _child.nodeValue.trim() : !0 : isHydrating)) children[childrenLen++] = _child;
	        }
	        if (0 !== vlen) for (var i = 0; i < vlen; i++) {
	            vchild = vchildren[i];
	            child = null;
	            var key = vchild.key;
	            if (null != key) {
	                if (keyedLen && void 0 !== keyed[key]) {
	                    child = keyed[key];
	                    keyed[key] = void 0;
	                    keyedLen--;
	                }
	            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) if (void 0 !== children[j] && isSameNodeType(c = children[j], vchild, isHydrating)) {
	                child = c;
	                children[j] = void 0;
	                if (j === childrenLen - 1) childrenLen--;
	                if (j === min) min++;
	                break;
	            }
	            child = idiff(child, vchild, context, mountAll);
	            f = originalChildren[i];
	            if (child && child !== dom && child !== f) if (null == f) dom.appendChild(child); else if (child === f.nextSibling) removeNode(f); else dom.insertBefore(child, f);
	        }
	        if (keyedLen) for (var i in keyed) if (void 0 !== keyed[i]) recollectNodeTree(keyed[i], !1);
	        while (min <= childrenLen) if (void 0 !== (child = children[childrenLen--])) recollectNodeTree(child, !1);
	    }
	    function recollectNodeTree(node, unmountOnly) {
	        var component = node._component;
	        if (component) unmountComponent(component); else {
	            if (null != node.__preactattr_ && node.__preactattr_.ref) node.__preactattr_.ref(null);
	            if (!1 === unmountOnly || null == node.__preactattr_) removeNode(node);
	            removeChildren(node);
	        }
	    }
	    function removeChildren(node) {
	        node = node.lastChild;
	        while (node) {
	            var next = node.previousSibling;
	            recollectNodeTree(node, !0);
	            node = next;
	        }
	    }
	    function diffAttributes(dom, attrs, old) {
	        var name;
	        for (name in old) if ((!attrs || null == attrs[name]) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
	        for (name in attrs) if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
	    }
	    function collectComponent(component) {
	        var name = component.constructor.name;
	        (components[name] || (components[name] = [])).push(component);
	    }
	    function createComponent(Ctor, props, context) {
	        var inst, list = components[Ctor.name];
	        if (Ctor.prototype && Ctor.prototype.render) {
	            inst = new Ctor(props, context);
	            Component.call(inst, props, context);
	        } else {
	            inst = new Component(props, context);
	            inst.constructor = Ctor;
	            inst.render = doRender;
	        }
	        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
	            inst.__b = list[i].__b;
	            list.splice(i, 1);
	            break;
	        }
	        return inst;
	    }
	    function doRender(props, state, context) {
	        return this.constructor(props, context);
	    }
	    function setComponentProps(component, props, opts, context, mountAll) {
	        if (!component.__x) {
	            component.__x = !0;
	            if (component.__r = props.ref) delete props.ref;
	            if (component.__k = props.key) delete props.key;
	            if (!component.base || mountAll) {
	                if (component.componentWillMount) component.componentWillMount();
	            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
	            if (context && context !== component.context) {
	                if (!component.__c) component.__c = component.context;
	                component.context = context;
	            }
	            if (!component.__p) component.__p = component.props;
	            component.props = props;
	            component.__x = !1;
	            if (0 !== opts) if (1 === opts || !1 !== options.syncComponentUpdates || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
	            if (component.__r) component.__r(component);
	        }
	    }
	    function renderComponent(component, opts, mountAll, isChild) {
	        if (!component.__x) {
	            var rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.__p || props, previousState = component.__s || state, previousContext = component.__c || context, isUpdate = component.base, nextBase = component.__b, initialBase = isUpdate || nextBase, initialChildComponent = component._component, skip = !1;
	            if (isUpdate) {
	                component.props = previousProps;
	                component.state = previousState;
	                component.context = previousContext;
	                if (2 !== opts && component.shouldComponentUpdate && !1 === component.shouldComponentUpdate(props, state, context)) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
	                component.props = props;
	                component.state = state;
	                component.context = context;
	            }
	            component.__p = component.__s = component.__c = component.__b = null;
	            component.__d = !1;
	            if (!skip) {
	                rendered = component.render(props, state, context);
	                if (component.getChildContext) context = extend(extend({}, context), component.getChildContext());
	                var toUnmount, base, childComponent = rendered && rendered.nodeName;
	                if ('function' == typeof childComponent) {
	                    var childProps = getNodeProps(rendered);
	                    inst = initialChildComponent;
	                    if (inst && inst.constructor === childComponent && childProps.key == inst.__k) setComponentProps(inst, childProps, 1, context, !1); else {
	                        toUnmount = inst;
	                        component._component = inst = createComponent(childComponent, childProps, context);
	                        inst.__b = inst.__b || nextBase;
	                        inst.__u = component;
	                        setComponentProps(inst, childProps, 0, context, !1);
	                        renderComponent(inst, 1, mountAll, !0);
	                    }
	                    base = inst.base;
	                } else {
	                    cbase = initialBase;
	                    toUnmount = initialChildComponent;
	                    if (toUnmount) cbase = component._component = null;
	                    if (initialBase || 1 === opts) {
	                        if (cbase) cbase._component = null;
	                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
	                    }
	                }
	                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
	                    var baseParent = initialBase.parentNode;
	                    if (baseParent && base !== baseParent) {
	                        baseParent.replaceChild(base, initialBase);
	                        if (!toUnmount) {
	                            initialBase._component = null;
	                            recollectNodeTree(initialBase, !1);
	                        }
	                    }
	                }
	                if (toUnmount) unmountComponent(toUnmount);
	                component.base = base;
	                if (base && !isChild) {
	                    var componentRef = component, t = component;
	                    while (t = t.__u) (componentRef = t).base = base;
	                    base._component = componentRef;
	                    base._componentConstructor = componentRef.constructor;
	                }
	            }
	            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
	                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
	                if (options.afterUpdate) options.afterUpdate(component);
	            }
	            if (null != component.__h) while (component.__h.length) component.__h.pop().call(component);
	            if (!diffLevel && !isChild) flushMounts();
	        }
	    }
	    function buildComponentFromVNode(dom, vnode, context, mountAll) {
	        var c = dom && dom._component, originalComponent = c, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
	        while (c && !isOwner && (c = c.__u)) isOwner = c.constructor === vnode.nodeName;
	        if (c && isOwner && (!mountAll || c._component)) {
	            setComponentProps(c, props, 3, context, mountAll);
	            dom = c.base;
	        } else {
	            if (originalComponent && !isDirectOwner) {
	                unmountComponent(originalComponent);
	                dom = oldDom = null;
	            }
	            c = createComponent(vnode.nodeName, props, context);
	            if (dom && !c.__b) {
	                c.__b = dom;
	                oldDom = null;
	            }
	            setComponentProps(c, props, 1, context, mountAll);
	            dom = c.base;
	            if (oldDom && dom !== oldDom) {
	                oldDom._component = null;
	                recollectNodeTree(oldDom, !1);
	            }
	        }
	        return dom;
	    }
	    function unmountComponent(component) {
	        if (options.beforeUnmount) options.beforeUnmount(component);
	        var base = component.base;
	        component.__x = !0;
	        if (component.componentWillUnmount) component.componentWillUnmount();
	        component.base = null;
	        var inner = component._component;
	        if (inner) unmountComponent(inner); else if (base) {
	            if (base.__preactattr_ && base.__preactattr_.ref) base.__preactattr_.ref(null);
	            component.__b = base;
	            removeNode(base);
	            collectComponent(component);
	            removeChildren(base);
	        }
	        if (component.__r) component.__r(null);
	    }
	    function Component(props, context) {
	        this.__d = !0;
	        this.context = context;
	        this.props = props;
	        this.state = this.state || {};
	    }
	    function render(vnode, parent, merge) {
	        return diff(merge, vnode, {}, !1, parent, !1);
	    }
	    var options = {};
	    var stack = [];
	    var EMPTY_CHILDREN = [];
	    var defer = 'function' == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
	    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
	    var items = [];
	    var mounts = [];
	    var diffLevel = 0;
	    var isSvgMode = !1;
	    var hydrating = !1;
	    var components = {};
	    extend(Component.prototype, {
	        setState: function(state, callback) {
	            var s = this.state;
	            if (!this.__s) this.__s = extend({}, s);
	            extend(s, 'function' == typeof state ? state(s, this.props) : state);
	            if (callback) (this.__h = this.__h || []).push(callback);
	            enqueueRender(this);
	        },
	        forceUpdate: function(callback) {
	            if (callback) (this.__h = this.__h || []).push(callback);
	            renderComponent(this, 2);
	        },
	        render: function() {}
	    });
	    var preact = {
	        h: h,
	        createElement: h,
	        cloneElement: cloneElement,
	        Component: Component,
	        render: render,
	        rerender: rerender,
	        options: options
	    };
	    if (true) module.exports = preact; else self.preact = preact;
	}();
	//# sourceMappingURL=preact.js.map

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	var _id = 0;
	
	module.exports = function generateId() {
	  return "simplepostmd-editor-" + ++_id;
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function () {};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * simplemde v1.11.2
	 * Copyright Next Step Webs, Inc.
	 * @link https://github.com/NextStepWebs/simplemde-markdown-editor
	 * @license MIT
	 */
	!function (e) {
	  if ("object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
	    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).SimpleMDE = e();
	  }
	}(function () {
	  return function e(t, n, r) {
	    function i(a, l) {
	      if (!n[a]) {
	        if (!t[a]) {
	          var s = "function" == typeof require && require;if (!l && s) return require(a, !0);if (o) return o(a, !0);var u = new Error("Cannot find module '" + a + "'");throw u.code = "MODULE_NOT_FOUND", u;
	        }var c = n[a] = { exports: {} };t[a][0].call(c.exports, function (e) {
	          var n = t[a][1][e];return i(n || e);
	        }, c, c.exports, e, t, n, r);
	      }return n[a].exports;
	    }for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) {
	      i(r[a]);
	    }return i;
	  }({ 1: [function (e, t, n) {
	      "use strict";
	      function r(e) {
	        var t = e.length;if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0;
	      }function i(e) {
	        return a[e >> 18 & 63] + a[e >> 12 & 63] + a[e >> 6 & 63] + a[63 & e];
	      }function o(e, t, n) {
	        for (var r, o = [], a = t; a < n; a += 3) {
	          r = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2], o.push(i(r));
	        }return o.join("");
	      }n.byteLength = function (e) {
	        return 3 * e.length / 4 - r(e);
	      }, n.toByteArray = function (e) {
	        var t,
	            n,
	            i,
	            o,
	            a,
	            u = e.length;o = r(e), a = new s(3 * u / 4 - o), n = o > 0 ? u - 4 : u;var c = 0;for (t = 0; t < n; t += 4) {
	          i = l[e.charCodeAt(t)] << 18 | l[e.charCodeAt(t + 1)] << 12 | l[e.charCodeAt(t + 2)] << 6 | l[e.charCodeAt(t + 3)], a[c++] = i >> 16 & 255, a[c++] = i >> 8 & 255, a[c++] = 255 & i;
	        }return 2 === o ? (i = l[e.charCodeAt(t)] << 2 | l[e.charCodeAt(t + 1)] >> 4, a[c++] = 255 & i) : 1 === o && (i = l[e.charCodeAt(t)] << 10 | l[e.charCodeAt(t + 1)] << 4 | l[e.charCodeAt(t + 2)] >> 2, a[c++] = i >> 8 & 255, a[c++] = 255 & i), a;
	      }, n.fromByteArray = function (e) {
	        for (var t, n = e.length, r = n % 3, i = "", l = [], s = 0, u = n - r; s < u; s += 16383) {
	          l.push(o(e, s, s + 16383 > u ? u : s + 16383));
	        }return 1 === r ? (t = e[n - 1], i += a[t >> 2], i += a[t << 4 & 63], i += "==") : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], i += a[t >> 10], i += a[t >> 4 & 63], i += a[t << 2 & 63], i += "="), l.push(i), l.join("");
	      };for (var a = [], l = [], s = "undefined" != typeof Uint8Array ? Uint8Array : Array, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = 0, h = u.length; c < h; ++c) {
	        a[c] = u[c], l[u.charCodeAt(c)] = c;
	      }l["-".charCodeAt(0)] = 62, l["_".charCodeAt(0)] = 63;
	    }, {}], 2: [function (e, t, n) {}, {}], 3: [function (e, t, n) {
	      "use strict";
	      function r(e) {
	        if (e > X) throw new RangeError("Invalid typed array length");var t = new Uint8Array(e);return t.__proto__ = i.prototype, t;
	      }function i(e, t, n) {
	        if ("number" == typeof e) {
	          if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");return s(e);
	        }return o(e, t, n);
	      }function o(e, t, n) {
	        if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');return e instanceof ArrayBuffer ? h(e, t, n) : "string" == typeof e ? u(e, t) : f(e);
	      }function a(e) {
	        if ("number" != typeof e) throw new TypeError('"size" argument must be a number');if (e < 0) throw new RangeError('"size" argument must not be negative');
	      }function l(e, t, n) {
	        return a(e), e <= 0 ? r(e) : void 0 !== t ? "string" == typeof n ? r(e).fill(t, n) : r(e).fill(t) : r(e);
	      }function s(e) {
	        return a(e), r(e < 0 ? 0 : 0 | d(e));
	      }function u(e, t) {
	        if ("string" == typeof t && "" !== t || (t = "utf8"), !i.isEncoding(t)) throw new TypeError('"encoding" must be a valid string encoding');var n = 0 | p(e, t),
	            o = r(n),
	            a = o.write(e, t);return a !== n && (o = o.slice(0, a)), o;
	      }function c(e) {
	        for (var t = e.length < 0 ? 0 : 0 | d(e.length), n = r(t), i = 0; i < t; i += 1) {
	          n[i] = 255 & e[i];
	        }return n;
	      }function h(e, t, n) {
	        if (t < 0 || e.byteLength < t) throw new RangeError("'offset' is out of bounds");if (e.byteLength < t + (n || 0)) throw new RangeError("'length' is out of bounds");var r;return r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n), r.__proto__ = i.prototype, r;
	      }function f(e) {
	        if (i.isBuffer(e)) {
	          var t = 0 | d(e.length),
	              n = r(t);return 0 === n.length ? n : (e.copy(n, 0, 0, t), n);
	        }if (e) {
	          if (U(e) || "length" in e) return "number" != typeof e.length || G(e.length) ? r(0) : c(e);if ("Buffer" === e.type && Array.isArray(e.data)) return c(e.data);
	        }throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
	      }function d(e) {
	        if (e >= X) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + X.toString(16) + " bytes");return 0 | e;
	      }function p(e, t) {
	        if (i.isBuffer(e)) return e.length;if (U(e) || e instanceof ArrayBuffer) return e.byteLength;"string" != typeof e && (e = "" + e);var n = e.length;if (0 === n) return 0;for (var r = !1;;) {
	          switch (t) {case "ascii":case "latin1":case "binary":
	              return n;case "utf8":case "utf-8":case void 0:
	              return P(e).length;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
	              return 2 * n;case "hex":
	              return n >>> 1;case "base64":
	              return j(e).length;default:
	              if (r) return P(e).length;t = ("" + t).toLowerCase(), r = !0;}
	        }
	      }function m(e, t, n) {
	        var r = !1;if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";if (n >>>= 0, t >>>= 0, n <= t) return "";for (e || (e = "utf8");;) {
	          switch (e) {case "hex":
	              return E(this, t, n);case "utf8":case "utf-8":
	              return T(this, t, n);case "ascii":
	              return N(this, t, n);case "latin1":case "binary":
	              return A(this, t, n);case "base64":
	              return L(this, t, n);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
	              return O(this, t, n);default:
	              if (r) throw new TypeError("Unknown encoding: " + e);e = (e + "").toLowerCase(), r = !0;}
	        }
	      }function g(e, t, n) {
	        var r = e[t];e[t] = e[n], e[n] = r;
	      }function v(e, t, n, r, o) {
	        if (0 === e.length) return -1;if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, G(n) && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
	          if (o) return -1;n = e.length - 1;
	        } else if (n < 0) {
	          if (!o) return -1;n = 0;
	        }if ("string" == typeof t && (t = i.from(t, r)), i.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, n, r, o);if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : y(e, [t], n, r, o);throw new TypeError("val must be string, number or Buffer");
	      }function y(e, t, n, r, i) {
	        function o(e, t) {
	          return 1 === a ? e[t] : e.readUInt16BE(t * a);
	        }var a = 1,
	            l = e.length,
	            s = t.length;if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
	          if (e.length < 2 || t.length < 2) return -1;a = 2, l /= 2, s /= 2, n /= 2;
	        }var u;if (i) {
	          var c = -1;for (u = n; u < l; u++) {
	            if (o(e, u) === o(t, -1 === c ? 0 : u - c)) {
	              if (-1 === c && (c = u), u - c + 1 === s) return c * a;
	            } else -1 !== c && (u -= u - c), c = -1;
	          }
	        } else for (n + s > l && (n = l - s), u = n; u >= 0; u--) {
	          for (var h = !0, f = 0; f < s; f++) {
	            if (o(e, u + f) !== o(t, f)) {
	              h = !1;break;
	            }
	          }if (h) return u;
	        }return -1;
	      }function x(e, t, n, r) {
	        n = Number(n) || 0;var i = e.length - n;r ? (r = Number(r)) > i && (r = i) : r = i;var o = t.length;if (o % 2 != 0) throw new TypeError("Invalid hex string");r > o / 2 && (r = o / 2);for (var a = 0; a < r; ++a) {
	          var l = parseInt(t.substr(2 * a, 2), 16);if (G(l)) return a;e[n + a] = l;
	        }return a;
	      }function b(e, t, n, r) {
	        return q(P(t, e.length - n), e, n, r);
	      }function w(e, t, n, r) {
	        return q(z(t), e, n, r);
	      }function k(e, t, n, r) {
	        return w(e, t, n, r);
	      }function C(e, t, n, r) {
	        return q(j(t), e, n, r);
	      }function S(e, t, n, r) {
	        return q(_(t, e.length - n), e, n, r);
	      }function L(e, t, n) {
	        return 0 === t && n === e.length ? $.fromByteArray(e) : $.fromByteArray(e.slice(t, n));
	      }function T(e, t, n) {
	        n = Math.min(e.length, n);for (var r = [], i = t; i < n;) {
	          var o = e[i],
	              a = null,
	              l = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;if (i + l <= n) {
	            var s, u, c, h;switch (l) {case 1:
	                o < 128 && (a = o);break;case 2:
	                128 == (192 & (s = e[i + 1])) && (h = (31 & o) << 6 | 63 & s) > 127 && (a = h);break;case 3:
	                s = e[i + 1], u = e[i + 2], 128 == (192 & s) && 128 == (192 & u) && (h = (15 & o) << 12 | (63 & s) << 6 | 63 & u) > 2047 && (h < 55296 || h > 57343) && (a = h);break;case 4:
	                s = e[i + 1], u = e[i + 2], c = e[i + 3], 128 == (192 & s) && 128 == (192 & u) && 128 == (192 & c) && (h = (15 & o) << 18 | (63 & s) << 12 | (63 & u) << 6 | 63 & c) > 65535 && h < 1114112 && (a = h);}
	          }null === a ? (a = 65533, l = 1) : a > 65535 && (a -= 65536, r.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), r.push(a), i += l;
	        }return M(r);
	      }function M(e) {
	        var t = e.length;if (t <= K) return String.fromCharCode.apply(String, e);for (var n = "", r = 0; r < t;) {
	          n += String.fromCharCode.apply(String, e.slice(r, r += K));
	        }return n;
	      }function N(e, t, n) {
	        var r = "";n = Math.min(e.length, n);for (var i = t; i < n; ++i) {
	          r += String.fromCharCode(127 & e[i]);
	        }return r;
	      }function A(e, t, n) {
	        var r = "";n = Math.min(e.length, n);for (var i = t; i < n; ++i) {
	          r += String.fromCharCode(e[i]);
	        }return r;
	      }function E(e, t, n) {
	        var r = e.length;(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);for (var i = "", o = t; o < n; ++o) {
	          i += R(e[o]);
	        }return i;
	      }function O(e, t, n) {
	        for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) {
	          i += String.fromCharCode(r[o] + 256 * r[o + 1]);
	        }return i;
	      }function I(e, t, n) {
	        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
	      }function D(e, t, n, r, o, a) {
	        if (!i.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');if (t > o || t < a) throw new RangeError('"value" argument is out of bounds');if (n + r > e.length) throw new RangeError("Index out of range");
	      }function H(e, t, n, r, i, o) {
	        if (n + r > e.length) throw new RangeError("Index out of range");if (n < 0) throw new RangeError("Index out of range");
	      }function W(e, t, n, r, i) {
	        return t = +t, n >>>= 0, i || H(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), V.write(e, t, n, r, 23, 4), n + 4;
	      }function B(e, t, n, r, i) {
	        return t = +t, n >>>= 0, i || H(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), V.write(e, t, n, r, 52, 8), n + 8;
	      }function F(e) {
	        if ((e = e.trim().replace(Y, "")).length < 2) return "";for (; e.length % 4 != 0;) {
	          e += "=";
	        }return e;
	      }function R(e) {
	        return e < 16 ? "0" + e.toString(16) : e.toString(16);
	      }function P(e, t) {
	        t = t || 1 / 0;for (var n, r = e.length, i = null, o = [], a = 0; a < r; ++a) {
	          if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
	            if (!i) {
	              if (n > 56319) {
	                (t -= 3) > -1 && o.push(239, 191, 189);continue;
	              }if (a + 1 === r) {
	                (t -= 3) > -1 && o.push(239, 191, 189);continue;
	              }i = n;continue;
	            }if (n < 56320) {
	              (t -= 3) > -1 && o.push(239, 191, 189), i = n;continue;
	            }n = 65536 + (i - 55296 << 10 | n - 56320);
	          } else i && (t -= 3) > -1 && o.push(239, 191, 189);if (i = null, n < 128) {
	            if ((t -= 1) < 0) break;o.push(n);
	          } else if (n < 2048) {
	            if ((t -= 2) < 0) break;o.push(n >> 6 | 192, 63 & n | 128);
	          } else if (n < 65536) {
	            if ((t -= 3) < 0) break;o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
	          } else {
	            if (!(n < 1114112)) throw new Error("Invalid code point");if ((t -= 4) < 0) break;o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
	          }
	        }return o;
	      }function z(e) {
	        for (var t = [], n = 0; n < e.length; ++n) {
	          t.push(255 & e.charCodeAt(n));
	        }return t;
	      }function _(e, t) {
	        for (var n, r, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) {
	          r = (n = e.charCodeAt(a)) >> 8, i = n % 256, o.push(i), o.push(r);
	        }return o;
	      }function j(e) {
	        return $.toByteArray(F(e));
	      }function q(e, t, n, r) {
	        for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) {
	          t[i + n] = e[i];
	        }return i;
	      }function U(e) {
	        return "function" == typeof ArrayBuffer.isView && ArrayBuffer.isView(e);
	      }function G(e) {
	        return e !== e;
	      }var $ = e("base64-js"),
	          V = e("ieee754");n.Buffer = i, n.SlowBuffer = function (e) {
	        return +e != e && (e = 0), i.alloc(+e);
	      }, n.INSPECT_MAX_BYTES = 50;var X = 2147483647;n.kMaxLength = X, i.TYPED_ARRAY_SUPPORT = function () {
	        try {
	          var e = new Uint8Array(1);return e.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
	              return 42;
	            } }, 42 === e.foo();
	        } catch (e) {
	          return !1;
	        }
	      }(), i.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), "undefined" != typeof Symbol && Symbol.species && i[Symbol.species] === i && Object.defineProperty(i, Symbol.species, { value: null, configurable: !0, enumerable: !1, writable: !1 }), i.poolSize = 8192, i.from = function (e, t, n) {
	        return o(e, t, n);
	      }, i.prototype.__proto__ = Uint8Array.prototype, i.__proto__ = Uint8Array, i.alloc = function (e, t, n) {
	        return l(e, t, n);
	      }, i.allocUnsafe = function (e) {
	        return s(e);
	      }, i.allocUnsafeSlow = function (e) {
	        return s(e);
	      }, i.isBuffer = function (e) {
	        return null != e && !0 === e._isBuffer;
	      }, i.compare = function (e, t) {
	        if (!i.isBuffer(e) || !i.isBuffer(t)) throw new TypeError("Arguments must be Buffers");if (e === t) return 0;for (var n = e.length, r = t.length, o = 0, a = Math.min(n, r); o < a; ++o) {
	          if (e[o] !== t[o]) {
	            n = e[o], r = t[o];break;
	          }
	        }return n < r ? -1 : r < n ? 1 : 0;
	      }, i.isEncoding = function (e) {
	        switch (String(e).toLowerCase()) {case "hex":case "utf8":case "utf-8":case "ascii":case "latin1":case "binary":case "base64":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
	            return !0;default:
	            return !1;}
	      }, i.concat = function (e, t) {
	        if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');if (0 === e.length) return i.alloc(0);var n;if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) {
	          t += e[n].length;
	        }var r = i.allocUnsafe(t),
	            o = 0;for (n = 0; n < e.length; ++n) {
	          var a = e[n];if (!i.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');a.copy(r, o), o += a.length;
	        }return r;
	      }, i.byteLength = p, i.prototype._isBuffer = !0, i.prototype.swap16 = function () {
	        var e = this.length;if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");for (var t = 0; t < e; t += 2) {
	          g(this, t, t + 1);
	        }return this;
	      }, i.prototype.swap32 = function () {
	        var e = this.length;if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");for (var t = 0; t < e; t += 4) {
	          g(this, t, t + 3), g(this, t + 1, t + 2);
	        }return this;
	      }, i.prototype.swap64 = function () {
	        var e = this.length;if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");for (var t = 0; t < e; t += 8) {
	          g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
	        }return this;
	      }, i.prototype.toString = function () {
	        var e = this.length;return 0 === e ? "" : 0 === arguments.length ? T(this, 0, e) : m.apply(this, arguments);
	      }, i.prototype.equals = function (e) {
	        if (!i.isBuffer(e)) throw new TypeError("Argument must be a Buffer");return this === e || 0 === i.compare(this, e);
	      }, i.prototype.inspect = function () {
	        var e = "",
	            t = n.INSPECT_MAX_BYTES;return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">";
	      }, i.prototype.compare = function (e, t, n, r, o) {
	        if (!i.isBuffer(e)) throw new TypeError("Argument must be a Buffer");if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), t < 0 || n > e.length || r < 0 || o > this.length) throw new RangeError("out of range index");if (r >= o && t >= n) return 0;if (r >= o) return -1;if (t >= n) return 1;if (t >>>= 0, n >>>= 0, r >>>= 0, o >>>= 0, this === e) return 0;for (var a = o - r, l = n - t, s = Math.min(a, l), u = this.slice(r, o), c = e.slice(t, n), h = 0; h < s; ++h) {
	          if (u[h] !== c[h]) {
	            a = u[h], l = c[h];break;
	          }
	        }return a < l ? -1 : l < a ? 1 : 0;
	      }, i.prototype.includes = function (e, t, n) {
	        return -1 !== this.indexOf(e, t, n);
	      }, i.prototype.indexOf = function (e, t, n) {
	        return v(this, e, t, n, !0);
	      }, i.prototype.lastIndexOf = function (e, t, n) {
	        return v(this, e, t, n, !1);
	      }, i.prototype.write = function (e, t, n, r) {
	        if (void 0 === t) r = "utf8", n = this.length, t = 0;else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;else {
	          if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
	        }var i = this.length - t;if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");r || (r = "utf8");for (var o = !1;;) {
	          switch (r) {case "hex":
	              return x(this, e, t, n);case "utf8":case "utf-8":
	              return b(this, e, t, n);case "ascii":
	              return w(this, e, t, n);case "latin1":case "binary":
	              return k(this, e, t, n);case "base64":
	              return C(this, e, t, n);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
	              return S(this, e, t, n);default:
	              if (o) throw new TypeError("Unknown encoding: " + r);r = ("" + r).toLowerCase(), o = !0;}
	        }
	      }, i.prototype.toJSON = function () {
	        return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
	      };var K = 4096;i.prototype.slice = function (e, t) {
	        var n = this.length;e = ~~e, t = void 0 === t ? n : ~~t, e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);var r = this.subarray(e, t);return r.__proto__ = i.prototype, r;
	      }, i.prototype.readUIntLE = function (e, t, n) {
	        e >>>= 0, t >>>= 0, n || I(e, t, this.length);for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) {
	          r += this[e + o] * i;
	        }return r;
	      }, i.prototype.readUIntBE = function (e, t, n) {
	        e >>>= 0, t >>>= 0, n || I(e, t, this.length);for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) {
	          r += this[e + --t] * i;
	        }return r;
	      }, i.prototype.readUInt8 = function (e, t) {
	        return e >>>= 0, t || I(e, 1, this.length), this[e];
	      }, i.prototype.readUInt16LE = function (e, t) {
	        return e >>>= 0, t || I(e, 2, this.length), this[e] | this[e + 1] << 8;
	      }, i.prototype.readUInt16BE = function (e, t) {
	        return e >>>= 0, t || I(e, 2, this.length), this[e] << 8 | this[e + 1];
	      }, i.prototype.readUInt32LE = function (e, t) {
	        return e >>>= 0, t || I(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
	      }, i.prototype.readUInt32BE = function (e, t) {
	        return e >>>= 0, t || I(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	      }, i.prototype.readIntLE = function (e, t, n) {
	        e >>>= 0, t >>>= 0, n || I(e, t, this.length);for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) {
	          r += this[e + o] * i;
	        }return i *= 128, r >= i && (r -= Math.pow(2, 8 * t)), r;
	      }, i.prototype.readIntBE = function (e, t, n) {
	        e >>>= 0, t >>>= 0, n || I(e, t, this.length);for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256);) {
	          o += this[e + --r] * i;
	        }return i *= 128, o >= i && (o -= Math.pow(2, 8 * t)), o;
	      }, i.prototype.readInt8 = function (e, t) {
	        return e >>>= 0, t || I(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
	      }, i.prototype.readInt16LE = function (e, t) {
	        e >>>= 0, t || I(e, 2, this.length);var n = this[e] | this[e + 1] << 8;return 32768 & n ? 4294901760 | n : n;
	      }, i.prototype.readInt16BE = function (e, t) {
	        e >>>= 0, t || I(e, 2, this.length);var n = this[e + 1] | this[e] << 8;return 32768 & n ? 4294901760 | n : n;
	      }, i.prototype.readInt32LE = function (e, t) {
	        return e >>>= 0, t || I(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	      }, i.prototype.readInt32BE = function (e, t) {
	        return e >>>= 0, t || I(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	      }, i.prototype.readFloatLE = function (e, t) {
	        return e >>>= 0, t || I(e, 4, this.length), V.read(this, e, !0, 23, 4);
	      }, i.prototype.readFloatBE = function (e, t) {
	        return e >>>= 0, t || I(e, 4, this.length), V.read(this, e, !1, 23, 4);
	      }, i.prototype.readDoubleLE = function (e, t) {
	        return e >>>= 0, t || I(e, 8, this.length), V.read(this, e, !0, 52, 8);
	      }, i.prototype.readDoubleBE = function (e, t) {
	        return e >>>= 0, t || I(e, 8, this.length), V.read(this, e, !1, 52, 8);
	      }, i.prototype.writeUIntLE = function (e, t, n, r) {
	        e = +e, t >>>= 0, n >>>= 0, r || D(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);var i = 1,
	            o = 0;for (this[t] = 255 & e; ++o < n && (i *= 256);) {
	          this[t + o] = e / i & 255;
	        }return t + n;
	      }, i.prototype.writeUIntBE = function (e, t, n, r) {
	        e = +e, t >>>= 0, n >>>= 0, r || D(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);var i = n - 1,
	            o = 1;for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) {
	          this[t + i] = e / o & 255;
	        }return t + n;
	      }, i.prototype.writeUInt8 = function (e, t, n) {
	        return e = +e, t >>>= 0, n || D(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1;
	      }, i.prototype.writeUInt16LE = function (e, t, n) {
	        return e = +e, t >>>= 0, n || D(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
	      }, i.prototype.writeUInt16BE = function (e, t, n) {
	        return e = +e, t >>>= 0, n || D(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
	      }, i.prototype.writeUInt32LE = function (e, t, n) {
	        return e = +e, t >>>= 0, n || D(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4;
	      }, i.prototype.writeUInt32BE = function (e, t, n) {
	        return e = +e, t >>>= 0, n || D(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
	      }, i.prototype.writeIntLE = function (e, t, n, r) {
	        if (e = +e, t >>>= 0, !r) {
	          var i = Math.pow(2, 8 * n - 1);D(this, e, t, n, i - 1, -i);
	        }var o = 0,
	            a = 1,
	            l = 0;for (this[t] = 255 & e; ++o < n && (a *= 256);) {
	          e < 0 && 0 === l && 0 !== this[t + o - 1] && (l = 1), this[t + o] = (e / a >> 0) - l & 255;
	        }return t + n;
	      }, i.prototype.writeIntBE = function (e, t, n, r) {
	        if (e = +e, t >>>= 0, !r) {
	          var i = Math.pow(2, 8 * n - 1);D(this, e, t, n, i - 1, -i);
	        }var o = n - 1,
	            a = 1,
	            l = 0;for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) {
	          e < 0 && 0 === l && 0 !== this[t + o + 1] && (l = 1), this[t + o] = (e / a >> 0) - l & 255;
	        }return t + n;
	      }, i.prototype.writeInt8 = function (e, t, n) {
	        return e = +e, t >>>= 0, n || D(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
	      }, i.prototype.writeInt16LE = function (e, t, n) {
	        return e = +e, t >>>= 0, n || D(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
	      }, i.prototype.writeInt16BE = function (e, t, n) {
	        return e = +e, t >>>= 0, n || D(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
	      }, i.prototype.writeInt32LE = function (e, t, n) {
	        return e = +e, t >>>= 0, n || D(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	      }, i.prototype.writeInt32BE = function (e, t, n) {
	        return e = +e, t >>>= 0, n || D(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
	      }, i.prototype.writeFloatLE = function (e, t, n) {
	        return W(this, e, t, !0, n);
	      }, i.prototype.writeFloatBE = function (e, t, n) {
	        return W(this, e, t, !1, n);
	      }, i.prototype.writeDoubleLE = function (e, t, n) {
	        return B(this, e, t, !0, n);
	      }, i.prototype.writeDoubleBE = function (e, t, n) {
	        return B(this, e, t, !1, n);
	      }, i.prototype.copy = function (e, t, n, r) {
	        if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;if (0 === e.length || 0 === this.length) return 0;if (t < 0) throw new RangeError("targetStart out of bounds");if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");if (r < 0) throw new RangeError("sourceEnd out of bounds");r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);var i,
	            o = r - n;if (this === e && n < t && t < r) for (i = o - 1; i >= 0; --i) {
	          e[i + t] = this[i + n];
	        } else if (o < 1e3) for (i = 0; i < o; ++i) {
	          e[i + t] = this[i + n];
	        } else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);return o;
	      }, i.prototype.fill = function (e, t, n, r) {
	        if ("string" == typeof e) {
	          if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
	            var o = e.charCodeAt(0);o < 256 && (e = o);
	          }if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");if ("string" == typeof r && !i.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
	        } else "number" == typeof e && (e &= 255);if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");if (n <= t) return this;t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0);var a;if ("number" == typeof e) for (a = t; a < n; ++a) {
	          this[a] = e;
	        } else {
	          var l = i.isBuffer(e) ? e : new i(e, r),
	              s = l.length;for (a = 0; a < n - t; ++a) {
	            this[a + t] = l[a % s];
	          }
	        }return this;
	      };var Y = /[^+/0-9A-Za-z-_]/g;
	    }, { "base64-js": 1, ieee754: 15 }], 4: [function (e, t, n) {
	      "use strict";
	      function r(e) {
	        "function" == typeof (e = e || {}).codeMirrorInstance && "function" == typeof e.codeMirrorInstance.defineMode ? (String.prototype.includes || (String.prototype.includes = function () {
	          return -1 !== String.prototype.indexOf.apply(this, arguments);
	        }), e.codeMirrorInstance.defineMode("spell-checker", function (t) {
	          if (!r.aff_loading) {
	            r.aff_loading = !0;var n = new XMLHttpRequest();n.open("GET", "https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.aff", !0), n.onload = function () {
	              4 === n.readyState && 200 === n.status && (r.aff_data = n.responseText, r.num_loaded++, 2 == r.num_loaded && (r.typo = new i("en_US", r.aff_data, r.dic_data, { platform: "any" })));
	            }, n.send(null);
	          }if (!r.dic_loading) {
	            r.dic_loading = !0;var o = new XMLHttpRequest();o.open("GET", "https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.dic", !0), o.onload = function () {
	              4 === o.readyState && 200 === o.status && (r.dic_data = o.responseText, r.num_loaded++, 2 == r.num_loaded && (r.typo = new i("en_US", r.aff_data, r.dic_data, { platform: "any" })));
	            }, o.send(null);
	          }var a = '!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~ ',
	              l = { token: function token(e) {
	              var t = e.peek(),
	                  n = "";if (a.includes(t)) return e.next(), null;for (; null != (t = e.peek()) && !a.includes(t);) {
	                n += t, e.next();
	              }return r.typo && !r.typo.check(n) ? "spell-error" : null;
	            } },
	              s = e.codeMirrorInstance.getMode(t, t.backdrop || "text/plain");return e.codeMirrorInstance.overlayMode(s, l, !0);
	        })) : console.log("CodeMirror Spell Checker: You must provide an instance of CodeMirror via the option `codeMirrorInstance`");
	      }var i = e("typo-js");r.num_loaded = 0, r.aff_loading = !1, r.dic_loading = !1, r.aff_data = "", r.dic_data = "", r.typo, t.exports = r;
	    }, { "typo-js": 17 }], 5: [function (e, t, n) {
	      !function (r) {
	        r("object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? e("../../lib/codemirror") : CodeMirror);
	      }(function (e) {
	        "use strict";
	        function t(e) {
	          var t = e.getWrapperElement();e.state.fullScreenRestore = { scrollTop: window.pageYOffset, scrollLeft: window.pageXOffset, width: t.style.width, height: t.style.height }, t.style.width = "", t.style.height = "auto", t.className += " CodeMirror-fullscreen", document.documentElement.style.overflow = "hidden", e.refresh();
	        }function n(e) {
	          var t = e.getWrapperElement();t.className = t.className.replace(/\s*CodeMirror-fullscreen\b/, ""), document.documentElement.style.overflow = "";var n = e.state.fullScreenRestore;t.style.width = n.width, t.style.height = n.height, window.scrollTo(n.scrollLeft, n.scrollTop), e.refresh();
	        }e.defineOption("fullScreen", !1, function (r, i, o) {
	          o == e.Init && (o = !1), !o != !i && (i ? t(r) : n(r));
	        });
	      });
	    }, { "../../lib/codemirror": 10 }], 6: [function (e, t, n) {
	      !function (r) {
	        r("object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? e("../../lib/codemirror") : CodeMirror);
	      }(function (e) {
	        function t(e) {
	          e.state.placeholder && (e.state.placeholder.parentNode.removeChild(e.state.placeholder), e.state.placeholder = null);
	        }function n(e) {
	          t(e);var n = e.state.placeholder = document.createElement("pre");n.style.cssText = "height: 0; overflow: visible", n.className = "CodeMirror-placeholder";var r = e.getOption("placeholder");"string" == typeof r && (r = document.createTextNode(r)), n.appendChild(r), e.display.lineSpace.insertBefore(n, e.display.lineSpace.firstChild);
	        }function r(e) {
	          o(e) && n(e);
	        }function i(e) {
	          var r = e.getWrapperElement(),
	              i = o(e);r.className = r.className.replace(" CodeMirror-empty", "") + (i ? " CodeMirror-empty" : ""), i ? n(e) : t(e);
	        }function o(e) {
	          return 1 === e.lineCount() && "" === e.getLine(0);
	        }e.defineOption("placeholder", "", function (n, o, a) {
	          var l = a && a != e.Init;if (o && !l) n.on("blur", r), n.on("change", i), n.on("swapDoc", i), i(n);else if (!o && l) {
	            n.off("blur", r), n.off("change", i), n.off("swapDoc", i), t(n);var s = n.getWrapperElement();s.className = s.className.replace(" CodeMirror-empty", "");
	          }o && !n.hasFocus() && r(n);
	        });
	      });
	    }, { "../../lib/codemirror": 10 }], 7: [function (e, t, n) {
	      !function (r) {
	        r("object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? e("../../lib/codemirror") : CodeMirror);
	      }(function (e) {
	        "use strict";
	        var t = /^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/,
	            n = /^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,
	            r = /[*+-]\s/;e.commands.newlineAndIndentContinueMarkdownList = function (i) {
	          if (i.getOption("disableInput")) return e.Pass;for (var o = i.listSelections(), a = [], l = 0; l < o.length; l++) {
	            var s = o[l].head,
	                u = i.getStateAfter(s.line),
	                c = !1 !== u.list,
	                h = 0 !== u.quote,
	                f = i.getLine(s.line),
	                d = t.exec(f);if (!o[l].empty() || !c && !h || !d) return void i.execCommand("newlineAndIndent");if (n.test(f)) />\s*$/.test(f) || i.replaceRange("", { line: s.line, ch: 0 }, { line: s.line, ch: s.ch + 1 }), a[l] = "\n";else {
	              var p = d[1],
	                  m = d[5],
	                  g = r.test(d[2]) || d[2].indexOf(">") >= 0 ? d[2].replace("x", " ") : parseInt(d[3], 10) + 1 + d[4];a[l] = "\n" + p + g + m;
	            }
	          }i.replaceSelections(a);
	        };
	      });
	    }, { "../../lib/codemirror": 10 }], 8: [function (e, t, n) {
	      !function (r) {
	        r("object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? e("../../lib/codemirror") : CodeMirror);
	      }(function (e) {
	        "use strict";
	        e.overlayMode = function (t, n, r) {
	          return { startState: function startState() {
	              return { base: e.startState(t), overlay: e.startState(n), basePos: 0, baseCur: null, overlayPos: 0, overlayCur: null, streamSeen: null };
	            }, copyState: function copyState(r) {
	              return { base: e.copyState(t, r.base), overlay: e.copyState(n, r.overlay), basePos: r.basePos, baseCur: null, overlayPos: r.overlayPos, overlayCur: null };
	            }, token: function token(e, i) {
	              return (e != i.streamSeen || Math.min(i.basePos, i.overlayPos) < e.start) && (i.streamSeen = e, i.basePos = i.overlayPos = e.start), e.start == i.basePos && (i.baseCur = t.token(e, i.base), i.basePos = e.pos), e.start == i.overlayPos && (e.pos = e.start, i.overlayCur = n.token(e, i.overlay), i.overlayPos = e.pos), e.pos = Math.min(i.basePos, i.overlayPos), null == i.overlayCur ? i.baseCur : null != i.baseCur && i.overlay.combineTokens || r && null == i.overlay.combineTokens ? i.baseCur + " " + i.overlayCur : i.overlayCur;
	            }, indent: t.indent && function (e, n) {
	              return t.indent(e.base, n);
	            }, electricChars: t.electricChars, innerMode: function innerMode(e) {
	              return { state: e.base, mode: t };
	            }, blankLine: function blankLine(e) {
	              var i, o;return t.blankLine && (i = t.blankLine(e.base)), n.blankLine && (o = n.blankLine(e.overlay)), null == o ? i : r && null != i ? i + " " + o : o;
	            } };
	        };
	      });
	    }, { "../../lib/codemirror": 10 }], 9: [function (e, t, n) {
	      !function (r) {
	        r("object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? e("../../lib/codemirror") : CodeMirror);
	      }(function (e) {
	        "use strict";
	        function t(e) {
	          e.state.markedSelection && e.operation(function () {
	            a(e);
	          });
	        }function n(e) {
	          e.state.markedSelection && e.state.markedSelection.length && e.operation(function () {
	            i(e);
	          });
	        }function r(e, t, n, r) {
	          if (0 != u(t, n)) for (var i = e.state.markedSelection, o = e.state.markedSelectionStyle, a = t.line;;) {
	            var c = a == t.line ? t : s(a, 0),
	                h = a + l,
	                f = h >= n.line,
	                d = f ? n : s(h, 0),
	                p = e.markText(c, d, { className: o });if (null == r ? i.push(p) : i.splice(r++, 0, p), f) break;a = h;
	          }
	        }function i(e) {
	          for (var t = e.state.markedSelection, n = 0; n < t.length; ++n) {
	            t[n].clear();
	          }t.length = 0;
	        }function o(e) {
	          i(e);for (var t = e.listSelections(), n = 0; n < t.length; n++) {
	            r(e, t[n].from(), t[n].to());
	          }
	        }function a(e) {
	          if (!e.somethingSelected()) return i(e);if (e.listSelections().length > 1) return o(e);var t = e.getCursor("start"),
	              n = e.getCursor("end"),
	              a = e.state.markedSelection;if (!a.length) return r(e, t, n);var s = a[0].find(),
	              c = a[a.length - 1].find();if (!s || !c || n.line - t.line < l || u(t, c.to) >= 0 || u(n, s.from) <= 0) return o(e);for (; u(t, s.from) > 0;) {
	            a.shift().clear(), s = a[0].find();
	          }for (u(t, s.from) < 0 && (s.to.line - t.line < l ? (a.shift().clear(), r(e, t, s.to, 0)) : r(e, t, s.from, 0)); u(n, c.to) < 0;) {
	            a.pop().clear(), c = a[a.length - 1].find();
	          }u(n, c.to) > 0 && (n.line - c.from.line < l ? (a.pop().clear(), r(e, c.from, n)) : r(e, c.to, n));
	        }e.defineOption("styleSelectedText", !1, function (r, a, l) {
	          var s = l && l != e.Init;a && !s ? (r.state.markedSelection = [], r.state.markedSelectionStyle = "string" == typeof a ? a : "CodeMirror-selectedtext", o(r), r.on("cursorActivity", t), r.on("change", n)) : !a && s && (r.off("cursorActivity", t), r.off("change", n), i(r), r.state.markedSelection = r.state.markedSelectionStyle = null);
	        });var l = 8,
	            s = e.Pos,
	            u = e.cmpPos;
	      });
	    }, { "../../lib/codemirror": 10 }], 10: [function (e, t, n) {
	      !function (e, r) {
	        "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && void 0 !== t ? t.exports = r() : e.CodeMirror = r();
	      }(this, function () {
	        "use strict";
	        function e(e) {
	          return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
	        }function t(e) {
	          for (var t = e.childNodes.length; t > 0; --t) {
	            e.removeChild(e.firstChild);
	          }return e;
	        }function n(e, n) {
	          return t(e).appendChild(n);
	        }function r(e, t, n, r) {
	          var i = document.createElement(e);if (n && (i.className = n), r && (i.style.cssText = r), "string" == typeof t) i.appendChild(document.createTextNode(t));else if (t) for (var o = 0; o < t.length; ++o) {
	            i.appendChild(t[o]);
	          }return i;
	        }function i(e, t, n, i) {
	          var o = r(e, t, n, i);return o.setAttribute("role", "presentation"), o;
	        }function o(e, t) {
	          if (3 == t.nodeType && (t = t.parentNode), e.contains) return e.contains(t);do {
	            if (11 == t.nodeType && (t = t.host), t == e) return !0;
	          } while (t = t.parentNode);
	        }function a() {
	          var e;try {
	            e = document.activeElement;
	          } catch (t) {
	            e = document.body || null;
	          }for (; e && e.shadowRoot && e.shadowRoot.activeElement;) {
	            e = e.shadowRoot.activeElement;
	          }return e;
	        }function l(t, n) {
	          var r = t.className;e(n).test(r) || (t.className += (r ? " " : "") + n);
	        }function s(t, n) {
	          for (var r = t.split(" "), i = 0; i < r.length; i++) {
	            r[i] && !e(r[i]).test(n) && (n += " " + r[i]);
	          }return n;
	        }function u(e) {
	          var t = Array.prototype.slice.call(arguments, 1);return function () {
	            return e.apply(null, t);
	          };
	        }function c(e, t, n) {
	          t || (t = {});for (var r in e) {
	            !e.hasOwnProperty(r) || !1 === n && t.hasOwnProperty(r) || (t[r] = e[r]);
	          }return t;
	        }function h(e, t, n, r, i) {
	          null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);for (var o = r || 0, a = i || 0;;) {
	            var l = e.indexOf("\t", o);if (l < 0 || l >= t) return a + (t - o);a += l - o, a += n - a % n, o = l + 1;
	          }
	        }function f(e, t) {
	          for (var n = 0; n < e.length; ++n) {
	            if (e[n] == t) return n;
	          }return -1;
	        }function d(e, t, n) {
	          for (var r = 0, i = 0;;) {
	            var o = e.indexOf("\t", r);-1 == o && (o = e.length);var a = o - r;if (o == e.length || i + a >= t) return r + Math.min(a, t - i);if (i += o - r, i += n - i % n, r = o + 1, i >= t) return r;
	          }
	        }function p(e) {
	          for (; Ra.length <= e;) {
	            Ra.push(m(Ra) + " ");
	          }return Ra[e];
	        }function m(e) {
	          return e[e.length - 1];
	        }function g(e, t) {
	          for (var n = [], r = 0; r < e.length; r++) {
	            n[r] = t(e[r], r);
	          }return n;
	        }function v(e, t, n) {
	          for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i;) {
	            r++;
	          }e.splice(r, 0, t);
	        }function y() {}function x(e, t) {
	          var n;return Object.create ? n = Object.create(e) : (y.prototype = e, n = new y()), t && c(t, n), n;
	        }function b(e) {
	          return (/\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || Pa.test(e))
	          );
	        }function w(e, t) {
	          return t ? !!(t.source.indexOf("\\w") > -1 && b(e)) || t.test(e) : b(e);
	        }function k(e) {
	          for (var t in e) {
	            if (e.hasOwnProperty(t) && e[t]) return !1;
	          }return !0;
	        }function C(e) {
	          return e.charCodeAt(0) >= 768 && za.test(e);
	        }function S(e, t, n) {
	          for (; (n < 0 ? t > 0 : t < e.length) && C(e.charAt(t));) {
	            t += n;
	          }return t;
	        }function L(e, t, n) {
	          for (;;) {
	            if (Math.abs(t - n) <= 1) return e(t) ? t : n;var r = Math.floor((t + n) / 2);e(r) ? n = r : t = r;
	          }
	        }function T(e, t, n) {
	          var o = this;this.input = n, o.scrollbarFiller = r("div", null, "CodeMirror-scrollbar-filler"), o.scrollbarFiller.setAttribute("cm-not-content", "true"), o.gutterFiller = r("div", null, "CodeMirror-gutter-filler"), o.gutterFiller.setAttribute("cm-not-content", "true"), o.lineDiv = i("div", null, "CodeMirror-code"), o.selectionDiv = r("div", null, null, "position: relative; z-index: 1"), o.cursorDiv = r("div", null, "CodeMirror-cursors"), o.measure = r("div", null, "CodeMirror-measure"), o.lineMeasure = r("div", null, "CodeMirror-measure"), o.lineSpace = i("div", [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv], null, "position: relative; outline: none");var a = i("div", [o.lineSpace], "CodeMirror-lines");o.mover = r("div", [a], null, "position: relative"), o.sizer = r("div", [o.mover], "CodeMirror-sizer"), o.sizerWidth = null, o.heightForcer = r("div", null, null, "position: absolute; height: " + Da + "px; width: 1px;"), o.gutters = r("div", null, "CodeMirror-gutters"), o.lineGutter = null, o.scroller = r("div", [o.sizer, o.heightForcer, o.gutters], "CodeMirror-scroll"), o.scroller.setAttribute("tabIndex", "-1"), o.wrapper = r("div", [o.scrollbarFiller, o.gutterFiller, o.scroller], "CodeMirror"), ua && ca < 8 && (o.gutters.style.zIndex = -1, o.scroller.style.paddingRight = 0), ha || oa && ba || (o.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)), o.viewFrom = o.viewTo = t.first, o.reportedViewFrom = o.reportedViewTo = t.first, o.view = [], o.renderedView = null, o.externalMeasured = null, o.viewOffset = 0, o.lastWrapHeight = o.lastWrapWidth = 0, o.updateLineNumbers = null, o.nativeBarWidth = o.barHeight = o.barWidth = 0, o.scrollbarsClipped = !1, o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null, o.alignWidgets = !1, o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null, o.maxLine = null, o.maxLineLength = 0, o.maxLineChanged = !1, o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null, o.shift = !1, o.selForContextMenu = null, o.activeTouch = null, n.init(o);
	        }function M(e, t) {
	          if ((t -= e.first) < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");for (var n = e; !n.lines;) {
	            for (var r = 0;; ++r) {
	              var i = n.children[r],
	                  o = i.chunkSize();if (t < o) {
	                n = i;break;
	              }t -= o;
	            }
	          }return n.lines[t];
	        }function N(e, t, n) {
	          var r = [],
	              i = t.line;return e.iter(t.line, n.line + 1, function (e) {
	            var o = e.text;i == n.line && (o = o.slice(0, n.ch)), i == t.line && (o = o.slice(t.ch)), r.push(o), ++i;
	          }), r;
	        }function A(e, t, n) {
	          var r = [];return e.iter(t, n, function (e) {
	            r.push(e.text);
	          }), r;
	        }function E(e, t) {
	          var n = t - e.height;if (n) for (var r = e; r; r = r.parent) {
	            r.height += n;
	          }
	        }function O(e) {
	          if (null == e.parent) return null;for (var t = e.parent, n = f(t.lines, e), r = t.parent; r; t = r, r = r.parent) {
	            for (var i = 0; r.children[i] != t; ++i) {
	              n += r.children[i].chunkSize();
	            }
	          }return n + t.first;
	        }function I(e, t) {
	          var n = e.first;e: do {
	            for (var r = 0; r < e.children.length; ++r) {
	              var i = e.children[r],
	                  o = i.height;if (t < o) {
	                e = i;continue e;
	              }t -= o, n += i.chunkSize();
	            }return n;
	          } while (!e.lines);for (var a = 0; a < e.lines.length; ++a) {
	            var l = e.lines[a].height;if (t < l) break;t -= l;
	          }return n + a;
	        }function D(e, t) {
	          return t >= e.first && t < e.first + e.size;
	        }function H(e, t) {
	          return String(e.lineNumberFormatter(t + e.firstLineNumber));
	        }function W(e, t, n) {
	          if (void 0 === n && (n = null), !(this instanceof W)) return new W(e, t, n);this.line = e, this.ch = t, this.sticky = n;
	        }function B(e, t) {
	          return e.line - t.line || e.ch - t.ch;
	        }function F(e, t) {
	          return e.sticky == t.sticky && 0 == B(e, t);
	        }function R(e) {
	          return W(e.line, e.ch);
	        }function P(e, t) {
	          return B(e, t) < 0 ? t : e;
	        }function z(e, t) {
	          return B(e, t) < 0 ? e : t;
	        }function _(e, t) {
	          return Math.max(e.first, Math.min(t, e.first + e.size - 1));
	        }function j(e, t) {
	          if (t.line < e.first) return W(e.first, 0);var n = e.first + e.size - 1;return t.line > n ? W(n, M(e, n).text.length) : q(t, M(e, t.line).text.length);
	        }function q(e, t) {
	          var n = e.ch;return null == n || n > t ? W(e.line, t) : n < 0 ? W(e.line, 0) : e;
	        }function U(e, t) {
	          for (var n = [], r = 0; r < t.length; r++) {
	            n[r] = j(e, t[r]);
	          }return n;
	        }function G() {
	          _a = !0;
	        }function $() {
	          ja = !0;
	        }function V(e, t, n) {
	          this.marker = e, this.from = t, this.to = n;
	        }function X(e, t) {
	          if (e) for (var n = 0; n < e.length; ++n) {
	            var r = e[n];if (r.marker == t) return r;
	          }
	        }function K(e, t) {
	          for (var n, r = 0; r < e.length; ++r) {
	            e[r] != t && (n || (n = [])).push(e[r]);
	          }return n;
	        }function Y(e, t) {
	          e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], t.marker.attachLine(e);
	        }function Z(e, t, n) {
	          var r;if (e) for (var i = 0; i < e.length; ++i) {
	            var o = e[i],
	                a = o.marker;if (null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t) || o.from == t && "bookmark" == a.type && (!n || !o.marker.insertLeft)) {
	              var l = null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t);(r || (r = [])).push(new V(a, o.from, l ? null : o.to));
	            }
	          }return r;
	        }function J(e, t, n) {
	          var r;if (e) for (var i = 0; i < e.length; ++i) {
	            var o = e[i],
	                a = o.marker;if (null == o.to || (a.inclusiveRight ? o.to >= t : o.to > t) || o.from == t && "bookmark" == a.type && (!n || o.marker.insertLeft)) {
	              var l = null == o.from || (a.inclusiveLeft ? o.from <= t : o.from < t);(r || (r = [])).push(new V(a, l ? null : o.from - t, null == o.to ? null : o.to - t));
	            }
	          }return r;
	        }function Q(e, t) {
	          if (t.full) return null;var n = D(e, t.from.line) && M(e, t.from.line).markedSpans,
	              r = D(e, t.to.line) && M(e, t.to.line).markedSpans;if (!n && !r) return null;var i = t.from.ch,
	              o = t.to.ch,
	              a = 0 == B(t.from, t.to),
	              l = Z(n, i, a),
	              s = J(r, o, a),
	              u = 1 == t.text.length,
	              c = m(t.text).length + (u ? i : 0);if (l) for (var h = 0; h < l.length; ++h) {
	            var f = l[h];if (null == f.to) {
	              var d = X(s, f.marker);d ? u && (f.to = null == d.to ? null : d.to + c) : f.to = i;
	            }
	          }if (s) for (var p = 0; p < s.length; ++p) {
	            var g = s[p];null != g.to && (g.to += c), null == g.from ? X(l, g.marker) || (g.from = c, u && (l || (l = [])).push(g)) : (g.from += c, u && (l || (l = [])).push(g));
	          }l && (l = ee(l)), s && s != l && (s = ee(s));var v = [l];if (!u) {
	            var y,
	                x = t.text.length - 2;if (x > 0 && l) for (var b = 0; b < l.length; ++b) {
	              null == l[b].to && (y || (y = [])).push(new V(l[b].marker, null, null));
	            }for (var w = 0; w < x; ++w) {
	              v.push(y);
	            }v.push(s);
	          }return v;
	        }function ee(e) {
	          for (var t = 0; t < e.length; ++t) {
	            var n = e[t];null != n.from && n.from == n.to && !1 !== n.marker.clearWhenEmpty && e.splice(t--, 1);
	          }return e.length ? e : null;
	        }function te(e, t, n) {
	          var r = null;if (e.iter(t.line, n.line + 1, function (e) {
	            if (e.markedSpans) for (var t = 0; t < e.markedSpans.length; ++t) {
	              var n = e.markedSpans[t].marker;!n.readOnly || r && -1 != f(r, n) || (r || (r = [])).push(n);
	            }
	          }), !r) return null;for (var i = [{ from: t, to: n }], o = 0; o < r.length; ++o) {
	            for (var a = r[o], l = a.find(0), s = 0; s < i.length; ++s) {
	              var u = i[s];if (!(B(u.to, l.from) < 0 || B(u.from, l.to) > 0)) {
	                var c = [s, 1],
	                    h = B(u.from, l.from),
	                    d = B(u.to, l.to);(h < 0 || !a.inclusiveLeft && !h) && c.push({ from: u.from, to: l.from }), (d > 0 || !a.inclusiveRight && !d) && c.push({ from: l.to, to: u.to }), i.splice.apply(i, c), s += c.length - 3;
	              }
	            }
	          }return i;
	        }function ne(e) {
	          var t = e.markedSpans;if (t) {
	            for (var n = 0; n < t.length; ++n) {
	              t[n].marker.detachLine(e);
	            }e.markedSpans = null;
	          }
	        }function re(e, t) {
	          if (t) {
	            for (var n = 0; n < t.length; ++n) {
	              t[n].marker.attachLine(e);
	            }e.markedSpans = t;
	          }
	        }function ie(e) {
	          return e.inclusiveLeft ? -1 : 0;
	        }function oe(e) {
	          return e.inclusiveRight ? 1 : 0;
	        }function ae(e, t) {
	          var n = e.lines.length - t.lines.length;if (0 != n) return n;var r = e.find(),
	              i = t.find(),
	              o = B(r.from, i.from) || ie(e) - ie(t);if (o) return -o;var a = B(r.to, i.to) || oe(e) - oe(t);return a || t.id - e.id;
	        }function le(e, t) {
	          var n,
	              r = ja && e.markedSpans;if (r) for (var i = void 0, o = 0; o < r.length; ++o) {
	            (i = r[o]).marker.collapsed && null == (t ? i.from : i.to) && (!n || ae(n, i.marker) < 0) && (n = i.marker);
	          }return n;
	        }function se(e) {
	          return le(e, !0);
	        }function ue(e) {
	          return le(e, !1);
	        }function ce(e, t, n, r, i) {
	          var o = M(e, t),
	              a = ja && o.markedSpans;if (a) for (var l = 0; l < a.length; ++l) {
	            var s = a[l];if (s.marker.collapsed) {
	              var u = s.marker.find(0),
	                  c = B(u.from, n) || ie(s.marker) - ie(i),
	                  h = B(u.to, r) || oe(s.marker) - oe(i);if (!(c >= 0 && h <= 0 || c <= 0 && h >= 0) && (c <= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? B(u.to, n) >= 0 : B(u.to, n) > 0) || c >= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? B(u.from, r) <= 0 : B(u.from, r) < 0))) return !0;
	            }
	          }
	        }function he(e) {
	          for (var t; t = se(e);) {
	            e = t.find(-1, !0).line;
	          }return e;
	        }function fe(e) {
	          for (var t; t = ue(e);) {
	            e = t.find(1, !0).line;
	          }return e;
	        }function de(e) {
	          for (var t, n; t = ue(e);) {
	            e = t.find(1, !0).line, (n || (n = [])).push(e);
	          }return n;
	        }function pe(e, t) {
	          var n = M(e, t),
	              r = he(n);return n == r ? t : O(r);
	        }function me(e, t) {
	          if (t > e.lastLine()) return t;var n,
	              r = M(e, t);if (!ge(e, r)) return t;for (; n = ue(r);) {
	            r = n.find(1, !0).line;
	          }return O(r) + 1;
	        }function ge(e, t) {
	          var n = ja && t.markedSpans;if (n) for (var r = void 0, i = 0; i < n.length; ++i) {
	            if ((r = n[i]).marker.collapsed) {
	              if (null == r.from) return !0;if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && ve(e, t, r)) return !0;
	            }
	          }
	        }function ve(e, t, n) {
	          if (null == n.to) {
	            var r = n.marker.find(1, !0);return ve(e, r.line, X(r.line.markedSpans, n.marker));
	          }if (n.marker.inclusiveRight && n.to == t.text.length) return !0;for (var i = void 0, o = 0; o < t.markedSpans.length; ++o) {
	            if ((i = t.markedSpans[o]).marker.collapsed && !i.marker.widgetNode && i.from == n.to && (null == i.to || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && ve(e, t, i)) return !0;
	          }
	        }function ye(e) {
	          for (var t = 0, n = (e = he(e)).parent, r = 0; r < n.lines.length; ++r) {
	            var i = n.lines[r];if (i == e) break;t += i.height;
	          }for (var o = n.parent; o; n = o, o = n.parent) {
	            for (var a = 0; a < o.children.length; ++a) {
	              var l = o.children[a];if (l == n) break;t += l.height;
	            }
	          }return t;
	        }function xe(e) {
	          if (0 == e.height) return 0;for (var t, n = e.text.length, r = e; t = se(r);) {
	            var i = t.find(0, !0);r = i.from.line, n += i.from.ch - i.to.ch;
	          }for (r = e; t = ue(r);) {
	            var o = t.find(0, !0);n -= r.text.length - o.from.ch, n += (r = o.to.line).text.length - o.to.ch;
	          }return n;
	        }function be(e) {
	          var t = e.display,
	              n = e.doc;t.maxLine = M(n, n.first), t.maxLineLength = xe(t.maxLine), t.maxLineChanged = !0, n.iter(function (e) {
	            var n = xe(e);n > t.maxLineLength && (t.maxLineLength = n, t.maxLine = e);
	          });
	        }function we(e, t, n, r) {
	          if (!e) return r(t, n, "ltr");for (var i = !1, o = 0; o < e.length; ++o) {
	            var a = e[o];(a.from < n && a.to > t || t == n && a.to == t) && (r(Math.max(a.from, t), Math.min(a.to, n), 1 == a.level ? "rtl" : "ltr"), i = !0);
	          }i || r(t, n, "ltr");
	        }function ke(e, t, n) {
	          var r;qa = null;for (var i = 0; i < e.length; ++i) {
	            var o = e[i];if (o.from < t && o.to > t) return i;o.to == t && (o.from != o.to && "before" == n ? r = i : qa = i), o.from == t && (o.from != o.to && "before" != n ? r = i : qa = i);
	          }return null != r ? r : qa;
	        }function Ce(e, t) {
	          var n = e.order;return null == n && (n = e.order = Ua(e.text, t)), n;
	        }function Se(e, t, n) {
	          var r = S(e.text, t + n, n);return r < 0 || r > e.text.length ? null : r;
	        }function Le(e, t, n) {
	          var r = Se(e, t.ch, n);return null == r ? null : new W(t.line, r, n < 0 ? "after" : "before");
	        }function Te(e, t, n, r, i) {
	          if (e) {
	            var o = Ce(n, t.doc.direction);if (o) {
	              var a,
	                  l = i < 0 ? m(o) : o[0],
	                  s = i < 0 == (1 == l.level) ? "after" : "before";if (l.level > 0) {
	                var u = Yt(t, n);a = i < 0 ? n.text.length - 1 : 0;var c = Zt(t, u, a).top;a = L(function (e) {
	                  return Zt(t, u, e).top == c;
	                }, i < 0 == (1 == l.level) ? l.from : l.to - 1, a), "before" == s && (a = Se(n, a, 1));
	              } else a = i < 0 ? l.to : l.from;return new W(r, a, s);
	            }
	          }return new W(r, i < 0 ? n.text.length : 0, i < 0 ? "before" : "after");
	        }function Me(e, t, n, r) {
	          var i = Ce(t, e.doc.direction);if (!i) return Le(t, n, r);n.ch >= t.text.length ? (n.ch = t.text.length, n.sticky = "before") : n.ch <= 0 && (n.ch = 0, n.sticky = "after");var o = ke(i, n.ch, n.sticky),
	              a = i[o];if ("ltr" == e.doc.direction && a.level % 2 == 0 && (r > 0 ? a.to > n.ch : a.from < n.ch)) return Le(t, n, r);var l,
	              s = function s(e, n) {
	            return Se(t, e instanceof W ? e.ch : e, n);
	          },
	              u = function u(n) {
	            return e.options.lineWrapping ? (l = l || Yt(e, t), gn(e, t, l, n)) : { begin: 0, end: t.text.length };
	          },
	              c = u("before" == n.sticky ? s(n, -1) : n.ch);if ("rtl" == e.doc.direction || 1 == a.level) {
	            var h = 1 == a.level == r < 0,
	                f = s(n, h ? 1 : -1);if (null != f && (h ? f <= a.to && f <= c.end : f >= a.from && f >= c.begin)) {
	              var d = h ? "before" : "after";return new W(n.line, f, d);
	            }
	          }var p = function p(e, t, r) {
	            for (var o = function o(e, t) {
	              return t ? new W(n.line, s(e, 1), "before") : new W(n.line, e, "after");
	            }; e >= 0 && e < i.length; e += t) {
	              var a = i[e],
	                  l = t > 0 == (1 != a.level),
	                  u = l ? r.begin : s(r.end, -1);if (a.from <= u && u < a.to) return o(u, l);if (u = l ? a.from : s(a.to, -1), r.begin <= u && u < r.end) return o(u, l);
	            }
	          },
	              m = p(o + r, r, c);if (m) return m;var g = r > 0 ? c.end : s(c.begin, -1);return null == g || r > 0 && g == t.text.length || !(m = p(r > 0 ? 0 : i.length - 1, r, u(g))) ? null : m;
	        }function Ne(e, t) {
	          return e._handlers && e._handlers[t] || Ga;
	        }function Ae(e, t, n) {
	          if (e.removeEventListener) e.removeEventListener(t, n, !1);else if (e.detachEvent) e.detachEvent("on" + t, n);else {
	            var r = e._handlers,
	                i = r && r[t];if (i) {
	              var o = f(i, n);o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)));
	            }
	          }
	        }function Ee(e, t) {
	          var n = Ne(e, t);if (n.length) for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i) {
	            n[i].apply(null, r);
	          }
	        }function Oe(e, t, n) {
	          return "string" == typeof t && (t = { type: t, preventDefault: function preventDefault() {
	              this.defaultPrevented = !0;
	            } }), Ee(e, n || t.type, e, t), Fe(t) || t.codemirrorIgnore;
	        }function Ie(e) {
	          var t = e._handlers && e._handlers.cursorActivity;if (t) for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r) {
	            -1 == f(n, t[r]) && n.push(t[r]);
	          }
	        }function De(e, t) {
	          return Ne(e, t).length > 0;
	        }function He(e) {
	          e.prototype.on = function (e, t) {
	            $a(this, e, t);
	          }, e.prototype.off = function (e, t) {
	            Ae(this, e, t);
	          };
	        }function We(e) {
	          e.preventDefault ? e.preventDefault() : e.returnValue = !1;
	        }function Be(e) {
	          e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
	        }function Fe(e) {
	          return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue;
	        }function Re(e) {
	          We(e), Be(e);
	        }function Pe(e) {
	          return e.target || e.srcElement;
	        }function ze(e) {
	          var t = e.which;return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), wa && e.ctrlKey && 1 == t && (t = 3), t;
	        }function _e(e) {
	          if (null == Oa) {
	            var t = r("span", "​");n(e, r("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (Oa = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(ua && ca < 8));
	          }var i = Oa ? r("span", "​") : r("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");return i.setAttribute("cm-text", ""), i;
	        }function je(e) {
	          if (null != Ia) return Ia;var r = n(e, document.createTextNode("AخA")),
	              i = La(r, 0, 1).getBoundingClientRect(),
	              o = La(r, 1, 2).getBoundingClientRect();return t(e), !(!i || i.left == i.right) && (Ia = o.right - i.right < 3);
	        }function qe(e) {
	          if (null != Za) return Za;var t = n(e, r("span", "x")),
	              i = t.getBoundingClientRect(),
	              o = La(t, 0, 1).getBoundingClientRect();return Za = Math.abs(i.left - o.left) > 1;
	        }function Ue(e, t) {
	          arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), Ja[e] = t;
	        }function Ge(e) {
	          if ("string" == typeof e && Qa.hasOwnProperty(e)) e = Qa[e];else if (e && "string" == typeof e.name && Qa.hasOwnProperty(e.name)) {
	            var t = Qa[e.name];"string" == typeof t && (t = { name: t }), (e = x(t, e)).name = t.name;
	          } else {
	            if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return Ge("application/xml");if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return Ge("application/json");
	          }return "string" == typeof e ? { name: e } : e || { name: "null" };
	        }function $e(e, t) {
	          t = Ge(t);var n = Ja[t.name];if (!n) return $e(e, "text/plain");var r = n(e, t);if (el.hasOwnProperty(t.name)) {
	            var i = el[t.name];for (var o in i) {
	              i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r["_" + o] = r[o]), r[o] = i[o]);
	            }
	          }if (r.name = t.name, t.helperType && (r.helperType = t.helperType), t.modeProps) for (var a in t.modeProps) {
	            r[a] = t.modeProps[a];
	          }return r;
	        }function Ve(e, t) {
	          c(t, el.hasOwnProperty(e) ? el[e] : el[e] = {});
	        }function Xe(e, t) {
	          if (!0 === t) return t;if (e.copyState) return e.copyState(t);var n = {};for (var r in t) {
	            var i = t[r];i instanceof Array && (i = i.concat([])), n[r] = i;
	          }return n;
	        }function Ke(e, t) {
	          for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e;) {
	            t = n.state, e = n.mode;
	          }return n || { mode: e, state: t };
	        }function Ye(e, t, n) {
	          return !e.startState || e.startState(t, n);
	        }function Ze(e, t, n, r) {
	          var i = [e.state.modeGen],
	              o = {};ot(e, t.text, e.doc.mode, n, function (e, t) {
	            return i.push(e, t);
	          }, o, r);for (var a = n.state, l = 0; l < e.state.overlays.length; ++l) {
	            !function (r) {
	              var a = e.state.overlays[r],
	                  l = 1,
	                  s = 0;n.state = !0, ot(e, t.text, a.mode, n, function (e, t) {
	                for (var n = l; s < e;) {
	                  var r = i[l];r > e && i.splice(l, 1, e, i[l + 1], r), l += 2, s = Math.min(e, r);
	                }if (t) if (a.opaque) i.splice(n, l - n, e, "overlay " + t), l = n + 2;else for (; n < l; n += 2) {
	                  var o = i[n + 1];i[n + 1] = (o ? o + " " : "") + "overlay " + t;
	                }
	              }, o);
	            }(l);
	          }return n.state = a, { styles: i, classes: o.bgClass || o.textClass ? o : null };
	        }function Je(e, t, n) {
	          if (!t.styles || t.styles[0] != e.state.modeGen) {
	            var r = Qe(e, O(t)),
	                i = t.text.length > e.options.maxHighlightLength && Xe(e.doc.mode, r.state),
	                o = Ze(e, t, r);i && (r.state = i), t.stateAfter = r.save(!i), t.styles = o.styles, o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null), n === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier));
	          }return t.styles;
	        }function Qe(e, t, n) {
	          var r = e.doc,
	              i = e.display;if (!r.mode.startState) return new rl(r, !0, t);var o = at(e, t, n),
	              a = o > r.first && M(r, o - 1).stateAfter,
	              l = a ? rl.fromSaved(r, a, o) : new rl(r, Ye(r.mode), o);return r.iter(o, t, function (n) {
	            et(e, n.text, l);var r = l.line;n.stateAfter = r == t - 1 || r % 5 == 0 || r >= i.viewFrom && r < i.viewTo ? l.save() : null, l.nextLine();
	          }), n && (r.modeFrontier = l.line), l;
	        }function et(e, t, n, r) {
	          var i = e.doc.mode,
	              o = new tl(t, e.options.tabSize, n);for (o.start = o.pos = r || 0, "" == t && tt(i, n.state); !o.eol();) {
	            nt(i, o, n.state), o.start = o.pos;
	          }
	        }function tt(e, t) {
	          if (e.blankLine) return e.blankLine(t);if (e.innerMode) {
	            var n = Ke(e, t);return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0;
	          }
	        }function nt(e, t, n, r) {
	          for (var i = 0; i < 10; i++) {
	            r && (r[0] = Ke(e, n).mode);var o = e.token(t, n);if (t.pos > t.start) return o;
	          }throw new Error("Mode " + e.name + " failed to advance stream.");
	        }function rt(e, t, n, r) {
	          var i,
	              o,
	              a = e.doc,
	              l = a.mode,
	              s = M(a, (t = j(a, t)).line),
	              u = Qe(e, t.line, n),
	              c = new tl(s.text, e.options.tabSize, u);for (r && (o = []); (r || c.pos < t.ch) && !c.eol();) {
	            c.start = c.pos, i = nt(l, c, u.state), r && o.push(new il(c, i, Xe(a.mode, u.state)));
	          }return r ? o : new il(c, i, u.state);
	        }function it(e, t) {
	          if (e) for (;;) {
	            var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);if (!n) break;e = e.slice(0, n.index) + e.slice(n.index + n[0].length);var r = n[1] ? "bgClass" : "textClass";null == t[r] ? t[r] = n[2] : new RegExp("(?:^|s)" + n[2] + "(?:$|s)").test(t[r]) || (t[r] += " " + n[2]);
	          }return e;
	        }function ot(e, t, n, r, i, o, a) {
	          var l = n.flattenSpans;null == l && (l = e.options.flattenSpans);var s,
	              u = 0,
	              c = null,
	              h = new tl(t, e.options.tabSize, r),
	              f = e.options.addModeClass && [null];for ("" == t && it(tt(n, r.state), o); !h.eol();) {
	            if (h.pos > e.options.maxHighlightLength ? (l = !1, a && et(e, t, r, h.pos), h.pos = t.length, s = null) : s = it(nt(n, h, r.state, f), o), f) {
	              var d = f[0].name;d && (s = "m-" + (s ? d + " " + s : d));
	            }if (!l || c != s) {
	              for (; u < h.start;) {
	                i(u = Math.min(h.start, u + 5e3), c);
	              }c = s;
	            }h.start = h.pos;
	          }for (; u < h.pos;) {
	            var p = Math.min(h.pos, u + 5e3);i(p, c), u = p;
	          }
	        }function at(e, t, n) {
	          for (var r, i, o = e.doc, a = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), l = t; l > a; --l) {
	            if (l <= o.first) return o.first;var s = M(o, l - 1),
	                u = s.stateAfter;if (u && (!n || l + (u instanceof nl ? u.lookAhead : 0) <= o.modeFrontier)) return l;var c = h(s.text, null, e.options.tabSize);(null == i || r > c) && (i = l - 1, r = c);
	          }return i;
	        }function lt(e, t) {
	          if (e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) {
	            for (var n = e.first, r = t - 1; r > n; r--) {
	              var i = M(e, r).stateAfter;if (i && (!(i instanceof nl) || r + i.lookAhead < t)) {
	                n = r + 1;break;
	              }
	            }e.highlightFrontier = Math.min(e.highlightFrontier, n);
	          }
	        }function st(e, t, n, r) {
	          e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), ne(e), re(e, n);var i = r ? r(e) : 1;i != e.height && E(e, i);
	        }function ut(e) {
	          e.parent = null, ne(e);
	        }function ct(e, t) {
	          if (!e || /^\s*$/.test(e)) return null;var n = t.addModeClass ? sl : ll;return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"));
	        }function ht(e, t) {
	          var n = i("span", null, null, ha ? "padding-right: .1px" : null),
	              r = { pre: i("pre", [n], "CodeMirror-line"), content: n, col: 0, pos: 0, cm: e, trailingSpace: !1, splitSpaces: (ua || ha) && e.getOption("lineWrapping") };t.measure = {};for (var o = 0; o <= (t.rest ? t.rest.length : 0); o++) {
	            var a = o ? t.rest[o - 1] : t.line,
	                l = void 0;r.pos = 0, r.addToken = dt, je(e.display.measure) && (l = Ce(a, e.doc.direction)) && (r.addToken = mt(r.addToken, l)), r.map = [], vt(a, r, Je(e, a, t != e.display.externalMeasured && O(a))), a.styleClasses && (a.styleClasses.bgClass && (r.bgClass = s(a.styleClasses.bgClass, r.bgClass || "")), a.styleClasses.textClass && (r.textClass = s(a.styleClasses.textClass, r.textClass || ""))), 0 == r.map.length && r.map.push(0, 0, r.content.appendChild(_e(e.display.measure))), 0 == o ? (t.measure.map = r.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(r.map), (t.measure.caches || (t.measure.caches = [])).push({}));
	          }if (ha) {
	            var u = r.content.lastChild;(/\bcm-tab\b/.test(u.className) || u.querySelector && u.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack");
	          }return Ee(e, "renderLine", e, t.line, r.pre), r.pre.className && (r.textClass = s(r.pre.className, r.textClass || "")), r;
	        }function ft(e) {
	          var t = r("span", "•", "cm-invalidchar");return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t;
	        }function dt(e, t, n, i, o, a, l) {
	          if (t) {
	            var s,
	                u = e.splitSpaces ? pt(t, e.trailingSpace) : t,
	                c = e.cm.state.specialChars,
	                h = !1;if (c.test(t)) {
	              s = document.createDocumentFragment();for (var f = 0;;) {
	                c.lastIndex = f;var d = c.exec(t),
	                    m = d ? d.index - f : t.length - f;if (m) {
	                  var g = document.createTextNode(u.slice(f, f + m));ua && ca < 9 ? s.appendChild(r("span", [g])) : s.appendChild(g), e.map.push(e.pos, e.pos + m, g), e.col += m, e.pos += m;
	                }if (!d) break;f += m + 1;var v = void 0;if ("\t" == d[0]) {
	                  var y = e.cm.options.tabSize,
	                      x = y - e.col % y;(v = s.appendChild(r("span", p(x), "cm-tab"))).setAttribute("role", "presentation"), v.setAttribute("cm-text", "\t"), e.col += x;
	                } else "\r" == d[0] || "\n" == d[0] ? ((v = s.appendChild(r("span", "\r" == d[0] ? "␍" : "␤", "cm-invalidchar"))).setAttribute("cm-text", d[0]), e.col += 1) : ((v = e.cm.options.specialCharPlaceholder(d[0])).setAttribute("cm-text", d[0]), ua && ca < 9 ? s.appendChild(r("span", [v])) : s.appendChild(v), e.col += 1);e.map.push(e.pos, e.pos + 1, v), e.pos++;
	              }
	            } else e.col += t.length, s = document.createTextNode(u), e.map.push(e.pos, e.pos + t.length, s), ua && ca < 9 && (h = !0), e.pos += t.length;if (e.trailingSpace = 32 == u.charCodeAt(t.length - 1), n || i || o || h || l) {
	              var b = n || "";i && (b += i), o && (b += o);var w = r("span", [s], b, l);return a && (w.title = a), e.content.appendChild(w);
	            }e.content.appendChild(s);
	          }
	        }function pt(e, t) {
	          if (e.length > 1 && !/  /.test(e)) return e;for (var n = t, r = "", i = 0; i < e.length; i++) {
	            var o = e.charAt(i);" " != o || !n || i != e.length - 1 && 32 != e.charCodeAt(i + 1) || (o = " "), r += o, n = " " == o;
	          }return r;
	        }function mt(e, t) {
	          return function (n, r, i, o, a, l, s) {
	            i = i ? i + " cm-force-border" : "cm-force-border";for (var u = n.pos, c = u + r.length;;) {
	              for (var h = void 0, f = 0; f < t.length && !((h = t[f]).to > u && h.from <= u); f++) {}if (h.to >= c) return e(n, r, i, o, a, l, s);e(n, r.slice(0, h.to - u), i, o, null, l, s), o = null, r = r.slice(h.to - u), u = h.to;
	            }
	          };
	        }function gt(e, t, n, r) {
	          var i = !r && n.widgetNode;i && e.map.push(e.pos, e.pos + t, i), !r && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", n.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), e.pos += t, e.trailingSpace = !1;
	        }function vt(e, t, n) {
	          var r = e.markedSpans,
	              i = e.text,
	              o = 0;if (r) for (var a, l, s, u, c, h, f, d = i.length, p = 0, m = 1, g = "", v = 0;;) {
	            if (v == p) {
	              s = u = c = h = l = "", f = null, v = 1 / 0;for (var y = [], x = void 0, b = 0; b < r.length; ++b) {
	                var w = r[b],
	                    k = w.marker;"bookmark" == k.type && w.from == p && k.widgetNode ? y.push(k) : w.from <= p && (null == w.to || w.to > p || k.collapsed && w.to == p && w.from == p) ? (null != w.to && w.to != p && v > w.to && (v = w.to, u = ""), k.className && (s += " " + k.className), k.css && (l = (l ? l + ";" : "") + k.css), k.startStyle && w.from == p && (c += " " + k.startStyle), k.endStyle && w.to == v && (x || (x = [])).push(k.endStyle, w.to), k.title && !h && (h = k.title), k.collapsed && (!f || ae(f.marker, k) < 0) && (f = w)) : w.from > p && v > w.from && (v = w.from);
	              }if (x) for (var C = 0; C < x.length; C += 2) {
	                x[C + 1] == v && (u += " " + x[C]);
	              }if (!f || f.from == p) for (var S = 0; S < y.length; ++S) {
	                gt(t, 0, y[S]);
	              }if (f && (f.from || 0) == p) {
	                if (gt(t, (null == f.to ? d + 1 : f.to) - p, f.marker, null == f.from), null == f.to) return;f.to == p && (f = !1);
	              }
	            }if (p >= d) break;for (var L = Math.min(d, v);;) {
	              if (g) {
	                var T = p + g.length;if (!f) {
	                  var M = T > L ? g.slice(0, L - p) : g;t.addToken(t, M, a ? a + s : s, c, p + M.length == v ? u : "", h, l);
	                }if (T >= L) {
	                  g = g.slice(L - p), p = L;break;
	                }p = T, c = "";
	              }g = i.slice(o, o = n[m++]), a = ct(n[m++], t.cm.options);
	            }
	          } else for (var N = 1; N < n.length; N += 2) {
	            t.addToken(t, i.slice(o, o = n[N]), ct(n[N + 1], t.cm.options));
	          }
	        }function yt(e, t, n) {
	          this.line = t, this.rest = de(t), this.size = this.rest ? O(m(this.rest)) - n + 1 : 1, this.node = this.text = null, this.hidden = ge(e, t);
	        }function xt(e, t, n) {
	          for (var r, i = [], o = t; o < n; o = r) {
	            var a = new yt(e.doc, M(e.doc, o), o);r = o + a.size, i.push(a);
	          }return i;
	        }function bt(e) {
	          ul ? ul.ops.push(e) : e.ownsGroup = ul = { ops: [e], delayedCallbacks: [] };
	        }function wt(e) {
	          var t = e.delayedCallbacks,
	              n = 0;do {
	            for (; n < t.length; n++) {
	              t[n].call(null);
	            }for (var r = 0; r < e.ops.length; r++) {
	              var i = e.ops[r];if (i.cursorActivityHandlers) for (; i.cursorActivityCalled < i.cursorActivityHandlers.length;) {
	                i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm);
	              }
	            }
	          } while (n < t.length);
	        }function kt(e, t) {
	          var n = e.ownsGroup;if (n) try {
	            wt(n);
	          } finally {
	            ul = null, t(n);
	          }
	        }function Ct(e, t) {
	          var n = Ne(e, t);if (n.length) {
	            var r,
	                i = Array.prototype.slice.call(arguments, 2);ul ? r = ul.delayedCallbacks : cl ? r = cl : (r = cl = [], setTimeout(St, 0));for (var o = 0; o < n.length; ++o) {
	              !function (e) {
	                r.push(function () {
	                  return n[e].apply(null, i);
	                });
	              }(o);
	            }
	          }
	        }function St() {
	          var e = cl;cl = null;for (var t = 0; t < e.length; ++t) {
	            e[t]();
	          }
	        }function Lt(e, t, n, r) {
	          for (var i = 0; i < t.changes.length; i++) {
	            var o = t.changes[i];"text" == o ? At(e, t) : "gutter" == o ? Ot(e, t, n, r) : "class" == o ? Et(e, t) : "widget" == o && It(e, t, r);
	          }t.changes = null;
	        }function Tt(e) {
	          return e.node == e.text && (e.node = r("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), ua && ca < 8 && (e.node.style.zIndex = 2)), e.node;
	        }function Mt(e, t) {
	          var n = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;if (n && (n += " CodeMirror-linebackground"), t.background) n ? t.background.className = n : (t.background.parentNode.removeChild(t.background), t.background = null);else if (n) {
	            var i = Tt(t);t.background = i.insertBefore(r("div", null, n), i.firstChild), e.display.input.setUneditable(t.background);
	          }
	        }function Nt(e, t) {
	          var n = e.display.externalMeasured;return n && n.line == t.line ? (e.display.externalMeasured = null, t.measure = n.measure, n.built) : ht(e, t);
	        }function At(e, t) {
	          var n = t.text.className,
	              r = Nt(e, t);t.text == t.node && (t.node = r.pre), t.text.parentNode.replaceChild(r.pre, t.text), t.text = r.pre, r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass, t.textClass = r.textClass, Et(e, t)) : n && (t.text.className = n);
	        }function Et(e, t) {
	          Mt(e, t), t.line.wrapClass ? Tt(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");var n = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;t.text.className = n || "";
	        }function Ot(e, t, n, i) {
	          if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
	            var o = Tt(t);t.gutterBackground = r("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) + "px; width: " + i.gutterTotalWidth + "px"), e.display.input.setUneditable(t.gutterBackground), o.insertBefore(t.gutterBackground, t.text);
	          }var a = t.line.gutterMarkers;if (e.options.lineNumbers || a) {
	            var l = Tt(t),
	                s = t.gutter = r("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) + "px");if (e.display.input.setUneditable(s), l.insertBefore(s, t.text), t.line.gutterClass && (s.className += " " + t.line.gutterClass), !e.options.lineNumbers || a && a["CodeMirror-linenumbers"] || (t.lineNumber = s.appendChild(r("div", H(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + i.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), a) for (var u = 0; u < e.options.gutters.length; ++u) {
	              var c = e.options.gutters[u],
	                  h = a.hasOwnProperty(c) && a[c];h && s.appendChild(r("div", [h], "CodeMirror-gutter-elt", "left: " + i.gutterLeft[c] + "px; width: " + i.gutterWidth[c] + "px"));
	            }
	          }
	        }function It(e, t, n) {
	          t.alignable && (t.alignable = null);for (var r = t.node.firstChild, i = void 0; r; r = i) {
	            i = r.nextSibling, "CodeMirror-linewidget" == r.className && t.node.removeChild(r);
	          }Ht(e, t, n);
	        }function Dt(e, t, n, r) {
	          var i = Nt(e, t);return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), Et(e, t), Ot(e, t, n, r), Ht(e, t, r), t.node;
	        }function Ht(e, t, n) {
	          if (Wt(e, t.line, t, n, !0), t.rest) for (var r = 0; r < t.rest.length; r++) {
	            Wt(e, t.rest[r], t, n, !1);
	          }
	        }function Wt(e, t, n, i, o) {
	          if (t.widgets) for (var a = Tt(n), l = 0, s = t.widgets; l < s.length; ++l) {
	            var u = s[l],
	                c = r("div", [u.node], "CodeMirror-linewidget");u.handleMouseEvents || c.setAttribute("cm-ignore-events", "true"), Bt(u, c, n, i), e.display.input.setUneditable(c), o && u.above ? a.insertBefore(c, n.gutter || n.text) : a.appendChild(c), Ct(u, "redraw");
	          }
	        }function Bt(e, t, n, r) {
	          if (e.noHScroll) {
	            (n.alignable || (n.alignable = [])).push(t);var i = r.wrapperWidth;t.style.left = r.fixedPos + "px", e.coverGutter || (i -= r.gutterTotalWidth, t.style.paddingLeft = r.gutterTotalWidth + "px"), t.style.width = i + "px";
	          }e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"));
	        }function Ft(e) {
	          if (null != e.height) return e.height;var t = e.doc.cm;if (!t) return 0;if (!o(document.body, e.node)) {
	            var i = "position: relative;";e.coverGutter && (i += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (i += "width: " + t.display.wrapper.clientWidth + "px;"), n(t.display.measure, r("div", [e.node], null, i));
	          }return e.height = e.node.parentNode.offsetHeight;
	        }function Rt(e, t) {
	          for (var n = Pe(t); n != e.wrapper; n = n.parentNode) {
	            if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == e.sizer && n != e.mover) return !0;
	          }
	        }function Pt(e) {
	          return e.lineSpace.offsetTop;
	        }function zt(e) {
	          return e.mover.offsetHeight - e.lineSpace.offsetHeight;
	        }function _t(e) {
	          if (e.cachedPaddingH) return e.cachedPaddingH;var t = n(e.measure, r("pre", "x")),
	              i = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
	              o = { left: parseInt(i.paddingLeft), right: parseInt(i.paddingRight) };return isNaN(o.left) || isNaN(o.right) || (e.cachedPaddingH = o), o;
	        }function jt(e) {
	          return Da - e.display.nativeBarWidth;
	        }function qt(e) {
	          return e.display.scroller.clientWidth - jt(e) - e.display.barWidth;
	        }function Ut(e) {
	          return e.display.scroller.clientHeight - jt(e) - e.display.barHeight;
	        }function Gt(e, t, n) {
	          var r = e.options.lineWrapping,
	              i = r && qt(e);if (!t.measure.heights || r && t.measure.width != i) {
	            var o = t.measure.heights = [];if (r) {
	              t.measure.width = i;for (var a = t.text.firstChild.getClientRects(), l = 0; l < a.length - 1; l++) {
	                var s = a[l],
	                    u = a[l + 1];Math.abs(s.bottom - u.bottom) > 2 && o.push((s.bottom + u.top) / 2 - n.top);
	              }
	            }o.push(n.bottom - n.top);
	          }
	        }function $t(e, t, n) {
	          if (e.line == t) return { map: e.measure.map, cache: e.measure.cache };for (var r = 0; r < e.rest.length; r++) {
	            if (e.rest[r] == t) return { map: e.measure.maps[r], cache: e.measure.caches[r] };
	          }for (var i = 0; i < e.rest.length; i++) {
	            if (O(e.rest[i]) > n) return { map: e.measure.maps[i], cache: e.measure.caches[i], before: !0 };
	          }
	        }function Vt(e, t) {
	          var r = O(t = he(t)),
	              i = e.display.externalMeasured = new yt(e.doc, t, r);i.lineN = r;var o = i.built = ht(e, i);return i.text = o.pre, n(e.display.lineMeasure, o.pre), i;
	        }function Xt(e, t, n, r) {
	          return Zt(e, Yt(e, t), n, r);
	        }function Kt(e, t) {
	          if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[Ln(e, t)];var n = e.display.externalMeasured;return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0;
	        }function Yt(e, t) {
	          var n = O(t),
	              r = Kt(e, n);r && !r.text ? r = null : r && r.changes && (Lt(e, r, n, bn(e)), e.curOp.forceUpdate = !0), r || (r = Vt(e, t));var i = $t(r, t, n);return { line: t, view: r, rect: null, map: i.map, cache: i.cache, before: i.before, hasHeights: !1 };
	        }function Zt(e, t, n, r, i) {
	          t.before && (n = -1);var o,
	              a = n + (r || "");return t.cache.hasOwnProperty(a) ? o = t.cache[a] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (Gt(e, t.view, t.rect), t.hasHeights = !0), (o = en(e, t, n, r)).bogus || (t.cache[a] = o)), { left: o.left, right: o.right, top: i ? o.rtop : o.top, bottom: i ? o.rbottom : o.bottom };
	        }function Jt(e, t, n) {
	          for (var r, i, o, a, l, s, u = 0; u < e.length; u += 3) {
	            if (l = e[u], s = e[u + 1], t < l ? (i = 0, o = 1, a = "left") : t < s ? o = (i = t - l) + 1 : (u == e.length - 3 || t == s && e[u + 3] > t) && (i = (o = s - l) - 1, t >= s && (a = "right")), null != i) {
	              if (r = e[u + 2], l == s && n == (r.insertLeft ? "left" : "right") && (a = n), "left" == n && 0 == i) for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft;) {
	                r = e[2 + (u -= 3)], a = "left";
	              }if ("right" == n && i == s - l) for (; u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft;) {
	                r = e[(u += 3) + 2], a = "right";
	              }break;
	            }
	          }return { node: r, start: i, end: o, collapse: a, coverStart: l, coverEnd: s };
	        }function Qt(e, t) {
	          var n = hl;if ("left" == t) for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++) {} else for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--) {}return n;
	        }function en(e, t, n, r) {
	          var i,
	              o = Jt(t.map, n, r),
	              a = o.node,
	              l = o.start,
	              s = o.end,
	              u = o.collapse;if (3 == a.nodeType) {
	            for (var c = 0; c < 4; c++) {
	              for (; l && C(t.line.text.charAt(o.coverStart + l));) {
	                --l;
	              }for (; o.coverStart + s < o.coverEnd && C(t.line.text.charAt(o.coverStart + s));) {
	                ++s;
	              }if ((i = ua && ca < 9 && 0 == l && s == o.coverEnd - o.coverStart ? a.parentNode.getBoundingClientRect() : Qt(La(a, l, s).getClientRects(), r)).left || i.right || 0 == l) break;s = l, l -= 1, u = "right";
	            }ua && ca < 11 && (i = tn(e.display.measure, i));
	          } else {
	            l > 0 && (u = r = "right");var h;i = e.options.lineWrapping && (h = a.getClientRects()).length > 1 ? h["right" == r ? h.length - 1 : 0] : a.getBoundingClientRect();
	          }if (ua && ca < 9 && !l && (!i || !i.left && !i.right)) {
	            var f = a.parentNode.getClientRects()[0];i = f ? { left: f.left, right: f.left + xn(e.display), top: f.top, bottom: f.bottom } : hl;
	          }for (var d = i.top - t.rect.top, p = i.bottom - t.rect.top, m = (d + p) / 2, g = t.view.measure.heights, v = 0; v < g.length - 1 && !(m < g[v]); v++) {}var y = v ? g[v - 1] : 0,
	              x = g[v],
	              b = { left: ("right" == u ? i.right : i.left) - t.rect.left, right: ("left" == u ? i.left : i.right) - t.rect.left, top: y, bottom: x };return i.left || i.right || (b.bogus = !0), e.options.singleCursorHeightPerLine || (b.rtop = d, b.rbottom = p), b;
	        }function tn(e, t) {
	          if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !qe(e)) return t;var n = screen.logicalXDPI / screen.deviceXDPI,
	              r = screen.logicalYDPI / screen.deviceYDPI;return { left: t.left * n, right: t.right * n, top: t.top * r, bottom: t.bottom * r };
	        }function nn(e) {
	          if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest)) for (var t = 0; t < e.rest.length; t++) {
	            e.measure.caches[t] = {};
	          }
	        }function rn(e) {
	          e.display.externalMeasure = null, t(e.display.lineMeasure);for (var n = 0; n < e.display.view.length; n++) {
	            nn(e.display.view[n]);
	          }
	        }function on(e) {
	          rn(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null;
	        }function an() {
	          return da && xa ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft;
	        }function ln() {
	          return da && xa ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop;
	        }function sn(e, t, n, r, i) {
	          if (!i && t.widgets) for (var o = 0; o < t.widgets.length; ++o) {
	            if (t.widgets[o].above) {
	              var a = Ft(t.widgets[o]);n.top += a, n.bottom += a;
	            }
	          }if ("line" == r) return n;r || (r = "local");var l = ye(t);if ("local" == r ? l += Pt(e.display) : l -= e.display.viewOffset, "page" == r || "window" == r) {
	            var s = e.display.lineSpace.getBoundingClientRect();l += s.top + ("window" == r ? 0 : ln());var u = s.left + ("window" == r ? 0 : an());n.left += u, n.right += u;
	          }return n.top += l, n.bottom += l, n;
	        }function un(e, t, n) {
	          if ("div" == n) return t;var r = t.left,
	              i = t.top;if ("page" == n) r -= an(), i -= ln();else if ("local" == n || !n) {
	            var o = e.display.sizer.getBoundingClientRect();r += o.left, i += o.top;
	          }var a = e.display.lineSpace.getBoundingClientRect();return { left: r - a.left, top: i - a.top };
	        }function cn(e, t, n, r, i) {
	          return r || (r = M(e.doc, t.line)), sn(e, r, Xt(e, r, t.ch, i), n);
	        }function hn(e, t, n, r, i, o) {
	          function a(t, a) {
	            var l = Zt(e, i, t, a ? "right" : "left", o);return a ? l.left = l.right : l.right = l.left, sn(e, r, l, n);
	          }function l(e, t, n) {
	            var r = s[t].level % 2 != 0;return a(n ? e - 1 : e, r != n);
	          }r = r || M(e.doc, t.line), i || (i = Yt(e, r));var s = Ce(r, e.doc.direction),
	              u = t.ch,
	              c = t.sticky;if (u >= r.text.length ? (u = r.text.length, c = "before") : u <= 0 && (u = 0, c = "after"), !s) return a("before" == c ? u - 1 : u, "before" == c);var h = ke(s, u, c),
	              f = qa,
	              d = l(u, h, "before" == c);return null != f && (d.other = l(u, f, "before" != c)), d;
	        }function fn(e, t) {
	          var n = 0;t = j(e.doc, t), e.options.lineWrapping || (n = xn(e.display) * t.ch);var r = M(e.doc, t.line),
	              i = ye(r) + Pt(e.display);return { left: n, right: n, top: i, bottom: i + r.height };
	        }function dn(e, t, n, r, i) {
	          var o = W(e, t, n);return o.xRel = i, r && (o.outside = !0), o;
	        }function pn(e, t, n) {
	          var r = e.doc;if ((n += e.display.viewOffset) < 0) return dn(r.first, 0, null, !0, -1);var i = I(r, n),
	              o = r.first + r.size - 1;if (i > o) return dn(r.first + r.size - 1, M(r, o).text.length, null, !0, 1);t < 0 && (t = 0);for (var a = M(r, i);;) {
	            var l = vn(e, a, i, t, n),
	                s = ue(a),
	                u = s && s.find(0, !0);if (!s || !(l.ch > u.from.ch || l.ch == u.from.ch && l.xRel > 0)) return l;i = O(a = u.to.line);
	          }
	        }function mn(e, t, n, r) {
	          var i = function i(r) {
	            return sn(e, t, Zt(e, n, r), "line");
	          },
	              o = t.text.length,
	              a = L(function (e) {
	            return i(e - 1).bottom <= r;
	          }, o, 0);return o = L(function (e) {
	            return i(e).top > r;
	          }, a, o), { begin: a, end: o };
	        }function gn(e, t, n, r) {
	          return mn(e, t, n, sn(e, t, Zt(e, n, r), "line").top);
	        }function vn(e, t, n, r, i) {
	          i -= ye(t);var o,
	              a = 0,
	              l = t.text.length,
	              s = Yt(e, t);if (Ce(t, e.doc.direction)) {
	            if (e.options.lineWrapping) {
	              var u;a = (u = mn(e, t, s, i)).begin, l = u.end;
	            }o = new W(n, Math.floor(a + (l - a) / 2));var c,
	                h,
	                f = hn(e, o, "line", t, s).left,
	                d = f < r ? 1 : -1,
	                p = f - r,
	                m = Math.ceil((l - a) / 4);e: do {
	              c = p, h = o;for (var g = 0; g < m; ++g) {
	                var v = o;if (null == (o = Me(e, t, o, d)) || o.ch < a || l <= ("before" == o.sticky ? o.ch - 1 : o.ch)) {
	                  o = v;break e;
	                }
	              }if (p = hn(e, o, "line", t, s).left - r, m > 1) {
	                var y = Math.abs(p - c) / m;m = Math.min(m, Math.ceil(Math.abs(p) / y)), d = p < 0 ? 1 : -1;
	              }
	            } while (0 != p && (m > 1 || d < 0 != p < 0 && Math.abs(p) <= Math.abs(c)));if (Math.abs(p) > Math.abs(c)) {
	              if (p < 0 == c < 0) throw new Error("Broke out of infinite loop in coordsCharInner");o = h;
	            }
	          } else {
	            var x = L(function (n) {
	              var o = sn(e, t, Zt(e, s, n), "line");return o.top > i ? (l = Math.min(n, l), !0) : !(o.bottom <= i) && (o.left > r || !(o.right < r) && r - o.left < o.right - r);
	            }, a, l);o = new W(n, x = S(t.text, x, 1), x == l ? "before" : "after");
	          }var b = hn(e, o, "line", t, s);return (i < b.top || b.bottom < i) && (o.outside = !0), o.xRel = r < b.left ? -1 : r > b.right ? 1 : 0, o;
	        }function yn(e) {
	          if (null != e.cachedTextHeight) return e.cachedTextHeight;if (null == al) {
	            al = r("pre");for (var i = 0; i < 49; ++i) {
	              al.appendChild(document.createTextNode("x")), al.appendChild(r("br"));
	            }al.appendChild(document.createTextNode("x"));
	          }n(e.measure, al);var o = al.offsetHeight / 50;return o > 3 && (e.cachedTextHeight = o), t(e.measure), o || 1;
	        }function xn(e) {
	          if (null != e.cachedCharWidth) return e.cachedCharWidth;var t = r("span", "xxxxxxxxxx"),
	              i = r("pre", [t]);n(e.measure, i);var o = t.getBoundingClientRect(),
	              a = (o.right - o.left) / 10;return a > 2 && (e.cachedCharWidth = a), a || 10;
	        }function bn(e) {
	          for (var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, a = 0; o; o = o.nextSibling, ++a) {
	            n[e.options.gutters[a]] = o.offsetLeft + o.clientLeft + i, r[e.options.gutters[a]] = o.clientWidth;
	          }return { fixedPos: wn(t), gutterTotalWidth: t.gutters.offsetWidth, gutterLeft: n, gutterWidth: r, wrapperWidth: t.wrapper.clientWidth };
	        }function wn(e) {
	          return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
	        }function kn(e) {
	          var t = yn(e.display),
	              n = e.options.lineWrapping,
	              r = n && Math.max(5, e.display.scroller.clientWidth / xn(e.display) - 3);return function (i) {
	            if (ge(e.doc, i)) return 0;var o = 0;if (i.widgets) for (var a = 0; a < i.widgets.length; a++) {
	              i.widgets[a].height && (o += i.widgets[a].height);
	            }return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t;
	          };
	        }function Cn(e) {
	          var t = e.doc,
	              n = kn(e);t.iter(function (e) {
	            var t = n(e);t != e.height && E(e, t);
	          });
	        }function Sn(e, t, n, r) {
	          var i = e.display;if (!n && "true" == Pe(t).getAttribute("cm-not-content")) return null;var o,
	              a,
	              l = i.lineSpace.getBoundingClientRect();try {
	            o = t.clientX - l.left, a = t.clientY - l.top;
	          } catch (t) {
	            return null;
	          }var s,
	              u = pn(e, o, a);if (r && 1 == u.xRel && (s = M(e.doc, u.line).text).length == u.ch) {
	            var c = h(s, s.length, e.options.tabSize) - s.length;u = W(u.line, Math.max(0, Math.round((o - _t(e.display).left) / xn(e.display)) - c));
	          }return u;
	        }function Ln(e, t) {
	          if (t >= e.display.viewTo) return null;if ((t -= e.display.viewFrom) < 0) return null;for (var n = e.display.view, r = 0; r < n.length; r++) {
	            if ((t -= n[r].size) < 0) return r;
	          }
	        }function Tn(e) {
	          e.display.input.showSelection(e.display.input.prepareSelection());
	        }function Mn(e, t) {
	          for (var n = e.doc, r = {}, i = r.cursors = document.createDocumentFragment(), o = r.selection = document.createDocumentFragment(), a = 0; a < n.sel.ranges.length; a++) {
	            if (!1 !== t || a != n.sel.primIndex) {
	              var l = n.sel.ranges[a];if (!(l.from().line >= e.display.viewTo || l.to().line < e.display.viewFrom)) {
	                var s = l.empty();(s || e.options.showCursorWhenSelecting) && Nn(e, l.head, i), s || An(e, l, o);
	              }
	            }
	          }return r;
	        }function Nn(e, t, n) {
	          var i = hn(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
	              o = n.appendChild(r("div", " ", "CodeMirror-cursor"));if (o.style.left = i.left + "px", o.style.top = i.top + "px", o.style.height = Math.max(0, i.bottom - i.top) * e.options.cursorHeight + "px", i.other) {
	            var a = n.appendChild(r("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));a.style.display = "", a.style.left = i.other.left + "px", a.style.top = i.other.top + "px", a.style.height = .85 * (i.other.bottom - i.other.top) + "px";
	          }
	        }function An(e, t, n) {
	          function i(e, t, n, i) {
	            t < 0 && (t = 0), t = Math.round(t), i = Math.round(i), s.appendChild(r("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == n ? h - e : n) + "px;\n                             height: " + (i - t) + "px"));
	          }function o(t, n, r) {
	            function o(n, r) {
	              return cn(e, W(t, n), "div", u, r);
	            }var a,
	                s,
	                u = M(l, t),
	                f = u.text.length;return we(Ce(u, l.direction), n || 0, null == r ? f : r, function (e, t, l) {
	              var u,
	                  d,
	                  p,
	                  m = o(e, "left");if (e == t) u = m, d = p = m.left;else {
	                if (u = o(t - 1, "right"), "rtl" == l) {
	                  var g = m;m = u, u = g;
	                }d = m.left, p = u.right;
	              }null == n && 0 == e && (d = c), u.top - m.top > 3 && (i(d, m.top, null, m.bottom), d = c, m.bottom < u.top && i(d, m.bottom, null, u.top)), null == r && t == f && (p = h), (!a || m.top < a.top || m.top == a.top && m.left < a.left) && (a = m), (!s || u.bottom > s.bottom || u.bottom == s.bottom && u.right > s.right) && (s = u), d < c + 1 && (d = c), i(d, u.top, p - d, u.bottom);
	            }), { start: a, end: s };
	          }var a = e.display,
	              l = e.doc,
	              s = document.createDocumentFragment(),
	              u = _t(e.display),
	              c = u.left,
	              h = Math.max(a.sizerWidth, qt(e) - a.sizer.offsetLeft) - u.right,
	              f = t.from(),
	              d = t.to();if (f.line == d.line) o(f.line, f.ch, d.ch);else {
	            var p = M(l, f.line),
	                m = M(l, d.line),
	                g = he(p) == he(m),
	                v = o(f.line, f.ch, g ? p.text.length + 1 : null).end,
	                y = o(d.line, g ? 0 : null, d.ch).start;g && (v.top < y.top - 2 ? (i(v.right, v.top, null, v.bottom), i(c, y.top, y.left, y.bottom)) : i(v.right, v.top, y.left - v.right, v.bottom)), v.bottom < y.top && i(c, v.bottom, null, y.top);
	          }n.appendChild(s);
	        }function En(e) {
	          if (e.state.focused) {
	            var t = e.display;clearInterval(t.blinker);var n = !0;t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function () {
	              return t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden";
	            }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden");
	          }
	        }function On(e) {
	          e.state.focused || (e.display.input.focus(), Dn(e));
	        }function In(e) {
	          e.state.delayingBlurEvent = !0, setTimeout(function () {
	            e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, Hn(e));
	          }, 100);
	        }function Dn(e, t) {
	          e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1), "nocursor" != e.options.readOnly && (e.state.focused || (Ee(e, "focus", e, t), e.state.focused = !0, l(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(), ha && setTimeout(function () {
	            return e.display.input.reset(!0);
	          }, 20)), e.display.input.receivedFocus()), En(e));
	        }function Hn(e, t) {
	          e.state.delayingBlurEvent || (e.state.focused && (Ee(e, "blur", e, t), e.state.focused = !1, Na(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function () {
	            e.state.focused || (e.display.shift = !1);
	          }, 150));
	        }function Wn(e) {
	          for (var t = e.display, n = t.lineDiv.offsetTop, r = 0; r < t.view.length; r++) {
	            var i = t.view[r],
	                o = void 0;if (!i.hidden) {
	              if (ua && ca < 8) {
	                var a = i.node.offsetTop + i.node.offsetHeight;o = a - n, n = a;
	              } else {
	                var l = i.node.getBoundingClientRect();o = l.bottom - l.top;
	              }var s = i.line.height - o;if (o < 2 && (o = yn(t)), (s > .005 || s < -.005) && (E(i.line, o), Bn(i.line), i.rest)) for (var u = 0; u < i.rest.length; u++) {
	                Bn(i.rest[u]);
	              }
	            }
	          }
	        }function Bn(e) {
	          if (e.widgets) for (var t = 0; t < e.widgets.length; ++t) {
	            e.widgets[t].height = e.widgets[t].node.parentNode.offsetHeight;
	          }
	        }function Fn(e, t, n) {
	          var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;r = Math.floor(r - Pt(e));var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
	              o = I(t, r),
	              a = I(t, i);if (n && n.ensure) {
	            var l = n.ensure.from.line,
	                s = n.ensure.to.line;l < o ? (o = l, a = I(t, ye(M(t, l)) + e.wrapper.clientHeight)) : Math.min(s, t.lastLine()) >= a && (o = I(t, ye(M(t, s)) - e.wrapper.clientHeight), a = s);
	          }return { from: o, to: Math.max(a, o + 1) };
	        }function Rn(e) {
	          var t = e.display,
	              n = t.view;if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
	            for (var r = wn(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = r + "px", a = 0; a < n.length; a++) {
	              if (!n[a].hidden) {
	                e.options.fixedGutter && (n[a].gutter && (n[a].gutter.style.left = o), n[a].gutterBackground && (n[a].gutterBackground.style.left = o));var l = n[a].alignable;if (l) for (var s = 0; s < l.length; s++) {
	                  l[s].style.left = o;
	                }
	              }
	            }e.options.fixedGutter && (t.gutters.style.left = r + i + "px");
	          }
	        }function Pn(e) {
	          if (!e.options.lineNumbers) return !1;var t = e.doc,
	              n = H(e.options, t.first + t.size - 1),
	              i = e.display;if (n.length != i.lineNumChars) {
	            var o = i.measure.appendChild(r("div", [r("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
	                a = o.firstChild.offsetWidth,
	                l = o.offsetWidth - a;return i.lineGutter.style.width = "", i.lineNumInnerWidth = Math.max(a, i.lineGutter.offsetWidth - l) + 1, i.lineNumWidth = i.lineNumInnerWidth + l, i.lineNumChars = i.lineNumInnerWidth ? n.length : -1, i.lineGutter.style.width = i.lineNumWidth + "px", Er(e), !0;
	          }return !1;
	        }function zn(e, t) {
	          if (!Oe(e, "scrollCursorIntoView")) {
	            var n = e.display,
	                i = n.sizer.getBoundingClientRect(),
	                o = null;if (t.top + i.top < 0 ? o = !0 : t.bottom + i.top > (window.innerHeight || document.documentElement.clientHeight) && (o = !1), null != o && !va) {
	              var a = r("div", "​", null, "position: absolute;\n                         top: " + (t.top - n.viewOffset - Pt(e.display)) + "px;\n                         height: " + (t.bottom - t.top + jt(e) + n.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");e.display.lineSpace.appendChild(a), a.scrollIntoView(o), e.display.lineSpace.removeChild(a);
	            }
	          }
	        }function _n(e, t, n, r) {
	          null == r && (r = 0);var i;e.options.lineWrapping || t != n || (n = "before" == (t = t.ch ? W(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t).sticky ? W(t.line, t.ch + 1, "before") : t);for (var o = 0; o < 5; o++) {
	            var a = !1,
	                l = hn(e, t),
	                s = n && n != t ? hn(e, n) : l,
	                u = qn(e, i = { left: Math.min(l.left, s.left), top: Math.min(l.top, s.top) - r, right: Math.max(l.left, s.left), bottom: Math.max(l.bottom, s.bottom) + r }),
	                c = e.doc.scrollTop,
	                h = e.doc.scrollLeft;if (null != u.scrollTop && (Yn(e, u.scrollTop), Math.abs(e.doc.scrollTop - c) > 1 && (a = !0)), null != u.scrollLeft && (Jn(e, u.scrollLeft), Math.abs(e.doc.scrollLeft - h) > 1 && (a = !0)), !a) break;
	          }return i;
	        }function jn(e, t) {
	          var n = qn(e, t);null != n.scrollTop && Yn(e, n.scrollTop), null != n.scrollLeft && Jn(e, n.scrollLeft);
	        }function qn(e, t) {
	          var n = e.display,
	              r = yn(e.display);t.top < 0 && (t.top = 0);var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : n.scroller.scrollTop,
	              o = Ut(e),
	              a = {};t.bottom - t.top > o && (t.bottom = t.top + o);var l = e.doc.height + zt(n),
	              s = t.top < r,
	              u = t.bottom > l - r;if (t.top < i) a.scrollTop = s ? 0 : t.top;else if (t.bottom > i + o) {
	            var c = Math.min(t.top, (u ? l : t.bottom) - o);c != i && (a.scrollTop = c);
	          }var h = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : n.scroller.scrollLeft,
	              f = qt(e) - (e.options.fixedGutter ? n.gutters.offsetWidth : 0),
	              d = t.right - t.left > f;return d && (t.right = t.left + f), t.left < 10 ? a.scrollLeft = 0 : t.left < h ? a.scrollLeft = Math.max(0, t.left - (d ? 0 : 10)) : t.right > f + h - 3 && (a.scrollLeft = t.right + (d ? 0 : 10) - f), a;
	        }function Un(e, t) {
	          null != t && (Xn(e), e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t);
	        }function Gn(e) {
	          Xn(e);var t = e.getCursor();e.curOp.scrollToPos = { from: t, to: t, margin: e.options.cursorScrollMargin };
	        }function $n(e, t, n) {
	          null == t && null == n || Xn(e), null != t && (e.curOp.scrollLeft = t), null != n && (e.curOp.scrollTop = n);
	        }function Vn(e, t) {
	          Xn(e), e.curOp.scrollToPos = t;
	        }function Xn(e) {
	          var t = e.curOp.scrollToPos;t && (e.curOp.scrollToPos = null, Kn(e, fn(e, t.from), fn(e, t.to), t.margin));
	        }function Kn(e, t, n, r) {
	          var i = qn(e, { left: Math.min(t.left, n.left), top: Math.min(t.top, n.top) - r, right: Math.max(t.right, n.right), bottom: Math.max(t.bottom, n.bottom) + r });$n(e, i.scrollLeft, i.scrollTop);
	        }function Yn(e, t) {
	          Math.abs(e.doc.scrollTop - t) < 2 || (oa || Nr(e, { top: t }), Zn(e, t, !0), oa && Nr(e), wr(e, 100));
	        }function Zn(e, t, n) {
	          t = Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t), (e.display.scroller.scrollTop != t || n) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t));
	        }function Jn(e, t, n, r) {
	          t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r || (e.doc.scrollLeft = t, Rn(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t));
	        }function Qn(e) {
	          var t = e.display,
	              n = t.gutters.offsetWidth,
	              r = Math.round(e.doc.height + zt(e.display));return { clientHeight: t.scroller.clientHeight, viewHeight: t.wrapper.clientHeight, scrollWidth: t.scroller.scrollWidth, clientWidth: t.scroller.clientWidth, viewWidth: t.wrapper.clientWidth, barLeft: e.options.fixedGutter ? n : 0, docHeight: r, scrollHeight: r + jt(e) + t.barHeight, nativeBarWidth: t.nativeBarWidth, gutterWidth: n };
	        }function er(e, t) {
	          t || (t = Qn(e));var n = e.display.barWidth,
	              r = e.display.barHeight;tr(e, t);for (var i = 0; i < 4 && n != e.display.barWidth || r != e.display.barHeight; i++) {
	            n != e.display.barWidth && e.options.lineWrapping && Wn(e), tr(e, Qn(e)), n = e.display.barWidth, r = e.display.barHeight;
	          }
	        }function tr(e, t) {
	          var n = e.display,
	              r = n.scrollbars.update(t);n.sizer.style.paddingRight = (n.barWidth = r.right) + "px", n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px", n.heightForcer.style.borderBottom = r.bottom + "px solid transparent", r.right && r.bottom ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = r.bottom + "px", n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = r.bottom + "px", n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = "";
	        }function nr(e) {
	          e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && Na(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new pl[e.options.scrollbarStyle](function (t) {
	            e.display.wrapper.insertBefore(t, e.display.scrollbarFiller), $a(t, "mousedown", function () {
	              e.state.focused && setTimeout(function () {
	                return e.display.input.focus();
	              }, 0);
	            }), t.setAttribute("cm-not-content", "true");
	          }, function (t, n) {
	            "horizontal" == n ? Jn(e, t) : Yn(e, t);
	          }, e), e.display.scrollbars.addClass && l(e.display.wrapper, e.display.scrollbars.addClass);
	        }function rr(e) {
	          e.curOp = { cm: e, viewChanged: !1, startHeight: e.doc.height, forceUpdate: !1, updateInput: null, typing: !1, changeObjs: null, cursorActivityHandlers: null, cursorActivityCalled: 0, selectionChanged: !1, updateMaxLine: !1, scrollLeft: null, scrollTop: null, scrollToPos: null, focus: !1, id: ++ml }, bt(e.curOp);
	        }function ir(e) {
	          kt(e.curOp, function (e) {
	            for (var t = 0; t < e.ops.length; t++) {
	              e.ops[t].cm.curOp = null;
	            }or(e);
	          });
	        }function or(e) {
	          for (var t = e.ops, n = 0; n < t.length; n++) {
	            ar(t[n]);
	          }for (var r = 0; r < t.length; r++) {
	            lr(t[r]);
	          }for (var i = 0; i < t.length; i++) {
	            sr(t[i]);
	          }for (var o = 0; o < t.length; o++) {
	            ur(t[o]);
	          }for (var a = 0; a < t.length; a++) {
	            cr(t[a]);
	          }
	        }function ar(e) {
	          var t = e.cm,
	              n = t.display;Cr(t), e.updateMaxLine && be(t), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new gl(t, e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos }, e.forceUpdate);
	        }function lr(e) {
	          e.updatedDisplay = e.mustUpdate && Tr(e.cm, e.update);
	        }function sr(e) {
	          var t = e.cm,
	              n = t.display;e.updatedDisplay && Wn(t), e.barMeasure = Qn(t), n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Xt(t, n.maxLine, n.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + jt(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - qt(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection(e.focus));
	        }function ur(e) {
	          var t = e.cm;null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && Jn(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);var n = e.focus && e.focus == a() && (!document.hasFocus || document.hasFocus());e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n), (e.updatedDisplay || e.startHeight != t.doc.height) && er(t, e.barMeasure), e.updatedDisplay && Or(t, e.barMeasure), e.selectionChanged && En(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), n && On(e.cm);
	        }function cr(e) {
	          var t = e.cm,
	              n = t.display,
	              r = t.doc;e.updatedDisplay && Mr(t, e.update), null == n.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (n.wheelStartX = n.wheelStartY = null), null != e.scrollTop && Zn(t, e.scrollTop, e.forceScroll), null != e.scrollLeft && Jn(t, e.scrollLeft, !0, !0), e.scrollToPos && zn(t, _n(t, j(r, e.scrollToPos.from), j(r, e.scrollToPos.to), e.scrollToPos.margin));var i = e.maybeHiddenMarkers,
	              o = e.maybeUnhiddenMarkers;if (i) for (var a = 0; a < i.length; ++a) {
	            i[a].lines.length || Ee(i[a], "hide");
	          }if (o) for (var l = 0; l < o.length; ++l) {
	            o[l].lines.length && Ee(o[l], "unhide");
	          }n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop), e.changeObjs && Ee(t, "changes", t, e.changeObjs), e.update && e.update.finish();
	        }function hr(e, t) {
	          if (e.curOp) return t();rr(e);try {
	            return t();
	          } finally {
	            ir(e);
	          }
	        }function fr(e, t) {
	          return function () {
	            if (e.curOp) return t.apply(e, arguments);rr(e);try {
	              return t.apply(e, arguments);
	            } finally {
	              ir(e);
	            }
	          };
	        }function dr(e) {
	          return function () {
	            if (this.curOp) return e.apply(this, arguments);rr(this);try {
	              return e.apply(this, arguments);
	            } finally {
	              ir(this);
	            }
	          };
	        }function pr(e) {
	          return function () {
	            var t = this.cm;if (!t || t.curOp) return e.apply(this, arguments);rr(t);try {
	              return e.apply(this, arguments);
	            } finally {
	              ir(t);
	            }
	          };
	        }function mr(e, t, n, r) {
	          null == t && (t = e.doc.first), null == n && (n = e.doc.first + e.doc.size), r || (r = 0);var i = e.display;if (r && n < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo) ja && pe(e.doc, t) < i.viewTo && vr(e);else if (n <= i.viewFrom) ja && me(e.doc, n + r) > i.viewFrom ? vr(e) : (i.viewFrom += r, i.viewTo += r);else if (t <= i.viewFrom && n >= i.viewTo) vr(e);else if (t <= i.viewFrom) {
	            var o = yr(e, n, n + r, 1);o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += r) : vr(e);
	          } else if (n >= i.viewTo) {
	            var a = yr(e, t, t, -1);a ? (i.view = i.view.slice(0, a.index), i.viewTo = a.lineN) : vr(e);
	          } else {
	            var l = yr(e, t, t, -1),
	                s = yr(e, n, n + r, 1);l && s ? (i.view = i.view.slice(0, l.index).concat(xt(e, l.lineN, s.lineN)).concat(i.view.slice(s.index)), i.viewTo += r) : vr(e);
	          }var u = i.externalMeasured;u && (n < u.lineN ? u.lineN += r : t < u.lineN + u.size && (i.externalMeasured = null));
	        }function gr(e, t, n) {
	          e.curOp.viewChanged = !0;var r = e.display,
	              i = e.display.externalMeasured;if (i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null), !(t < r.viewFrom || t >= r.viewTo)) {
	            var o = r.view[Ln(e, t)];if (null != o.node) {
	              var a = o.changes || (o.changes = []);-1 == f(a, n) && a.push(n);
	            }
	          }
	        }function vr(e) {
	          e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0;
	        }function yr(e, t, n, r) {
	          var i,
	              o = Ln(e, t),
	              a = e.display.view;if (!ja || n == e.doc.first + e.doc.size) return { index: o, lineN: n };for (var l = e.display.viewFrom, s = 0; s < o; s++) {
	            l += a[s].size;
	          }if (l != t) {
	            if (r > 0) {
	              if (o == a.length - 1) return null;i = l + a[o].size - t, o++;
	            } else i = l - t;t += i, n += i;
	          }for (; pe(e.doc, n) != n;) {
	            if (o == (r < 0 ? 0 : a.length - 1)) return null;n += r * a[o - (r < 0 ? 1 : 0)].size, o += r;
	          }return { index: o, lineN: n };
	        }function xr(e, t, n) {
	          var r = e.display;0 == r.view.length || t >= r.viewTo || n <= r.viewFrom ? (r.view = xt(e, t, n), r.viewFrom = t) : (r.viewFrom > t ? r.view = xt(e, t, r.viewFrom).concat(r.view) : r.viewFrom < t && (r.view = r.view.slice(Ln(e, t))), r.viewFrom = t, r.viewTo < n ? r.view = r.view.concat(xt(e, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, Ln(e, n)))), r.viewTo = n;
	        }function br(e) {
	          for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
	            var i = t[r];i.hidden || i.node && !i.changes || ++n;
	          }return n;
	        }function wr(e, t) {
	          e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, u(kr, e));
	        }function kr(e) {
	          var t = e.doc;if (!(t.highlightFrontier >= e.display.viewTo)) {
	            var n = +new Date() + e.options.workTime,
	                r = Qe(e, t.highlightFrontier),
	                i = [];t.iter(r.line, Math.min(t.first + t.size, e.display.viewTo + 500), function (o) {
	              if (r.line >= e.display.viewFrom) {
	                var a = o.styles,
	                    l = o.text.length > e.options.maxHighlightLength ? Xe(t.mode, r.state) : null,
	                    s = Ze(e, o, r, !0);l && (r.state = l), o.styles = s.styles;var u = o.styleClasses,
	                    c = s.classes;c ? o.styleClasses = c : u && (o.styleClasses = null);for (var h = !a || a.length != o.styles.length || u != c && (!u || !c || u.bgClass != c.bgClass || u.textClass != c.textClass), f = 0; !h && f < a.length; ++f) {
	                  h = a[f] != o.styles[f];
	                }h && i.push(r.line), o.stateAfter = r.save(), r.nextLine();
	              } else o.text.length <= e.options.maxHighlightLength && et(e, o.text, r), o.stateAfter = r.line % 5 == 0 ? r.save() : null, r.nextLine();if (+new Date() > n) return wr(e, e.options.workDelay), !0;
	            }), t.highlightFrontier = r.line, t.modeFrontier = Math.max(t.modeFrontier, r.line), i.length && hr(e, function () {
	              for (var t = 0; t < i.length; t++) {
	                gr(e, i[t], "text");
	              }
	            });
	          }
	        }function Cr(e) {
	          var t = e.display;!t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = jt(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = jt(e) + "px", t.scrollbarsClipped = !0);
	        }function Sr(e) {
	          if (e.hasFocus()) return null;var t = a();if (!t || !o(e.display.lineDiv, t)) return null;var n = { activeElt: t };if (window.getSelection) {
	            var r = window.getSelection();r.anchorNode && r.extend && o(e.display.lineDiv, r.anchorNode) && (n.anchorNode = r.anchorNode, n.anchorOffset = r.anchorOffset, n.focusNode = r.focusNode, n.focusOffset = r.focusOffset);
	          }return n;
	        }function Lr(e) {
	          if (e && e.activeElt && e.activeElt != a() && (e.activeElt.focus(), e.anchorNode && o(document.body, e.anchorNode) && o(document.body, e.focusNode))) {
	            var t = window.getSelection(),
	                n = document.createRange();n.setEnd(e.anchorNode, e.anchorOffset), n.collapse(!1), t.removeAllRanges(), t.addRange(n), t.extend(e.focusNode, e.focusOffset);
	          }
	        }function Tr(e, n) {
	          var r = e.display,
	              i = e.doc;if (n.editorIsHidden) return vr(e), !1;if (!n.force && n.visible.from >= r.viewFrom && n.visible.to <= r.viewTo && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) && r.renderedView == r.view && 0 == br(e)) return !1;Pn(e) && (vr(e), n.dims = bn(e));var o = i.first + i.size,
	              a = Math.max(n.visible.from - e.options.viewportMargin, i.first),
	              l = Math.min(o, n.visible.to + e.options.viewportMargin);r.viewFrom < a && a - r.viewFrom < 20 && (a = Math.max(i.first, r.viewFrom)), r.viewTo > l && r.viewTo - l < 20 && (l = Math.min(o, r.viewTo)), ja && (a = pe(e.doc, a), l = me(e.doc, l));var s = a != r.viewFrom || l != r.viewTo || r.lastWrapHeight != n.wrapperHeight || r.lastWrapWidth != n.wrapperWidth;xr(e, a, l), r.viewOffset = ye(M(e.doc, r.viewFrom)), e.display.mover.style.top = r.viewOffset + "px";var u = br(e);if (!s && 0 == u && !n.force && r.renderedView == r.view && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo)) return !1;var c = Sr(e);return u > 4 && (r.lineDiv.style.display = "none"), Ar(e, r.updateLineNumbers, n.dims), u > 4 && (r.lineDiv.style.display = ""), r.renderedView = r.view, Lr(c), t(r.cursorDiv), t(r.selectionDiv), r.gutters.style.height = r.sizer.style.minHeight = 0, s && (r.lastWrapHeight = n.wrapperHeight, r.lastWrapWidth = n.wrapperWidth, wr(e, 400)), r.updateLineNumbers = null, !0;
	        }function Mr(e, t) {
	          for (var n = t.viewport, r = !0; (r && e.options.lineWrapping && t.oldDisplayWidth != qt(e) || (n && null != n.top && (n = { top: Math.min(e.doc.height + zt(e.display) - Ut(e), n.top) }), t.visible = Fn(e.display, e.doc, n), !(t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))) && Tr(e, t); r = !1) {
	            Wn(e);var i = Qn(e);Tn(e), er(e, i), Or(e, i), t.force = !1;
	          }t.signal(e, "update", e), e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo);
	        }function Nr(e, t) {
	          var n = new gl(e, t);if (Tr(e, n)) {
	            Wn(e), Mr(e, n);var r = Qn(e);Tn(e), er(e, r), Or(e, r), n.finish();
	          }
	        }function Ar(e, n, r) {
	          function i(t) {
	            var n = t.nextSibling;return ha && wa && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), n;
	          }for (var o = e.display, a = e.options.lineNumbers, l = o.lineDiv, s = l.firstChild, u = o.view, c = o.viewFrom, h = 0; h < u.length; h++) {
	            var d = u[h];if (d.hidden) ;else if (d.node && d.node.parentNode == l) {
	              for (; s != d.node;) {
	                s = i(s);
	              }var p = a && null != n && n <= c && d.lineNumber;d.changes && (f(d.changes, "gutter") > -1 && (p = !1), Lt(e, d, c, r)), p && (t(d.lineNumber), d.lineNumber.appendChild(document.createTextNode(H(e.options, c)))), s = d.node.nextSibling;
	            } else {
	              var m = Dt(e, d, c, r);l.insertBefore(m, s);
	            }c += d.size;
	          }for (; s;) {
	            s = i(s);
	          }
	        }function Er(e) {
	          var t = e.display.gutters.offsetWidth;e.display.sizer.style.marginLeft = t + "px";
	        }function Or(e, t) {
	          e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + jt(e) + "px";
	        }function Ir(e) {
	          var n = e.display.gutters,
	              i = e.options.gutters;t(n);for (var o = 0; o < i.length; ++o) {
	            var a = i[o],
	                l = n.appendChild(r("div", null, "CodeMirror-gutter " + a));"CodeMirror-linenumbers" == a && (e.display.lineGutter = l, l.style.width = (e.display.lineNumWidth || 1) + "px");
	          }n.style.display = o ? "" : "none", Er(e);
	        }function Dr(e) {
	          var t = f(e.gutters, "CodeMirror-linenumbers");-1 == t && e.lineNumbers ? e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]) : t > -1 && !e.lineNumbers && (e.gutters = e.gutters.slice(0), e.gutters.splice(t, 1));
	        }function Hr(e) {
	          var t = e.wheelDeltaX,
	              n = e.wheelDeltaY;return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == n && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : null == n && (n = e.wheelDelta), { x: t, y: n };
	        }function Wr(e) {
	          var t = Hr(e);return t.x *= yl, t.y *= yl, t;
	        }function Br(e, t) {
	          var n = Hr(t),
	              r = n.x,
	              i = n.y,
	              o = e.display,
	              a = o.scroller,
	              l = a.scrollWidth > a.clientWidth,
	              s = a.scrollHeight > a.clientHeight;if (r && l || i && s) {
	            if (i && wa && ha) e: for (var u = t.target, c = o.view; u != a; u = u.parentNode) {
	              for (var h = 0; h < c.length; h++) {
	                if (c[h].node == u) {
	                  e.display.currentWheelTarget = u;break e;
	                }
	              }
	            }if (r && !oa && !pa && null != yl) return i && s && Yn(e, Math.max(0, a.scrollTop + i * yl)), Jn(e, Math.max(0, a.scrollLeft + r * yl)), (!i || i && s) && We(t), void (o.wheelStartX = null);if (i && null != yl) {
	              var f = i * yl,
	                  d = e.doc.scrollTop,
	                  p = d + o.wrapper.clientHeight;f < 0 ? d = Math.max(0, d + f - 50) : p = Math.min(e.doc.height, p + f + 50), Nr(e, { top: d, bottom: p });
	            }vl < 20 && (null == o.wheelStartX ? (o.wheelStartX = a.scrollLeft, o.wheelStartY = a.scrollTop, o.wheelDX = r, o.wheelDY = i, setTimeout(function () {
	              if (null != o.wheelStartX) {
	                var e = a.scrollLeft - o.wheelStartX,
	                    t = a.scrollTop - o.wheelStartY,
	                    n = t && o.wheelDY && t / o.wheelDY || e && o.wheelDX && e / o.wheelDX;o.wheelStartX = o.wheelStartY = null, n && (yl = (yl * vl + n) / (vl + 1), ++vl);
	              }
	            }, 200)) : (o.wheelDX += r, o.wheelDY += i));
	          }
	        }function Fr(e, t) {
	          var n = e[t];e.sort(function (e, t) {
	            return B(e.from(), t.from());
	          }), t = f(e, n);for (var r = 1; r < e.length; r++) {
	            var i = e[r],
	                o = e[r - 1];if (B(o.to(), i.from()) >= 0) {
	              var a = z(o.from(), i.from()),
	                  l = P(o.to(), i.to()),
	                  s = o.empty() ? i.from() == i.head : o.from() == o.head;r <= t && --t, e.splice(--r, 2, new bl(s ? l : a, s ? a : l));
	            }
	          }return new xl(e, t);
	        }function Rr(e, t) {
	          return new xl([new bl(e, t || e)], 0);
	        }function Pr(e) {
	          return e.text ? W(e.from.line + e.text.length - 1, m(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to;
	        }function zr(e, t) {
	          if (B(e, t.from) < 0) return e;if (B(e, t.to) <= 0) return Pr(t);var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
	              r = e.ch;return e.line == t.to.line && (r += Pr(t).ch - t.to.ch), W(n, r);
	        }function _r(e, t) {
	          for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
	            var i = e.sel.ranges[r];n.push(new bl(zr(i.anchor, t), zr(i.head, t)));
	          }return Fr(n, e.sel.primIndex);
	        }function jr(e, t, n) {
	          return e.line == t.line ? W(n.line, e.ch - t.ch + n.ch) : W(n.line + (e.line - t.line), e.ch);
	        }function qr(e, t, n) {
	          for (var r = [], i = W(e.first, 0), o = i, a = 0; a < t.length; a++) {
	            var l = t[a],
	                s = jr(l.from, i, o),
	                u = jr(Pr(l), i, o);if (i = l.to, o = u, "around" == n) {
	              var c = e.sel.ranges[a],
	                  h = B(c.head, c.anchor) < 0;r[a] = new bl(h ? u : s, h ? s : u);
	            } else r[a] = new bl(s, s);
	          }return new xl(r, e.sel.primIndex);
	        }function Ur(e) {
	          e.doc.mode = $e(e.options, e.doc.modeOption), Gr(e);
	        }function Gr(e) {
	          e.doc.iter(function (e) {
	            e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
	          }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, wr(e, 100), e.state.modeGen++, e.curOp && mr(e);
	        }function $r(e, t) {
	          return 0 == t.from.ch && 0 == t.to.ch && "" == m(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore);
	        }function Vr(e, t, n, r) {
	          function i(e) {
	            return n ? n[e] : null;
	          }function o(e, n, i) {
	            st(e, n, i, r), Ct(e, "change", e, t);
	          }function a(e, t) {
	            for (var n = [], o = e; o < t; ++o) {
	              n.push(new ol(u[o], i(o), r));
	            }return n;
	          }var l = t.from,
	              s = t.to,
	              u = t.text,
	              c = M(e, l.line),
	              h = M(e, s.line),
	              f = m(u),
	              d = i(u.length - 1),
	              p = s.line - l.line;if (t.full) e.insert(0, a(0, u.length)), e.remove(u.length, e.size - u.length);else if ($r(e, t)) {
	            var g = a(0, u.length - 1);o(h, h.text, d), p && e.remove(l.line, p), g.length && e.insert(l.line, g);
	          } else if (c == h) {
	            if (1 == u.length) o(c, c.text.slice(0, l.ch) + f + c.text.slice(s.ch), d);else {
	              var v = a(1, u.length - 1);v.push(new ol(f + c.text.slice(s.ch), d, r)), o(c, c.text.slice(0, l.ch) + u[0], i(0)), e.insert(l.line + 1, v);
	            }
	          } else if (1 == u.length) o(c, c.text.slice(0, l.ch) + u[0] + h.text.slice(s.ch), i(0)), e.remove(l.line + 1, p);else {
	            o(c, c.text.slice(0, l.ch) + u[0], i(0)), o(h, f + h.text.slice(s.ch), d);var y = a(1, u.length - 1);p > 1 && e.remove(l.line + 1, p - 1), e.insert(l.line + 1, y);
	          }Ct(e, "change", e, t);
	        }function Xr(e, t, n) {
	          function r(e, i, o) {
	            if (e.linked) for (var a = 0; a < e.linked.length; ++a) {
	              var l = e.linked[a];if (l.doc != i) {
	                var s = o && l.sharedHist;n && !s || (t(l.doc, s), r(l.doc, e, s));
	              }
	            }
	          }r(e, null, !0);
	        }function Kr(e, t) {
	          if (t.cm) throw new Error("This document is already in use.");e.doc = t, t.cm = e, Cn(e), Ur(e), Yr(e), e.options.lineWrapping || be(e), e.options.mode = t.modeOption, mr(e);
	        }function Yr(e) {
	          ("rtl" == e.doc.direction ? l : Na)(e.display.lineDiv, "CodeMirror-rtl");
	        }function Zr(e) {
	          hr(e, function () {
	            Yr(e), mr(e);
	          });
	        }function Jr(e) {
	          this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e || 1;
	        }function Qr(e, t) {
	          var n = { from: R(t.from), to: Pr(t), text: N(e, t.from, t.to) };return ai(e, n, t.from.line, t.to.line + 1), Xr(e, function (e) {
	            return ai(e, n, t.from.line, t.to.line + 1);
	          }, !0), n;
	        }function ei(e) {
	          for (; e.length && m(e).ranges;) {
	            e.pop();
	          }
	        }function ti(e, t) {
	          return t ? (ei(e.done), m(e.done)) : e.done.length && !m(e.done).ranges ? m(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), m(e.done)) : void 0;
	        }function ni(e, t, n, r) {
	          var i = e.history;i.undone.length = 0;var o,
	              a,
	              l = +new Date();if ((i.lastOp == r || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && e.cm && i.lastModTime > l - e.cm.options.historyEventDelay || "*" == t.origin.charAt(0))) && (o = ti(i, i.lastOp == r))) a = m(o.changes), 0 == B(t.from, t.to) && 0 == B(t.from, a.to) ? a.to = Pr(t) : o.changes.push(Qr(e, t));else {
	            var s = m(i.done);for (s && s.ranges || oi(e.sel, i.done), o = { changes: [Qr(e, t)], generation: i.generation }, i.done.push(o); i.done.length > i.undoDepth;) {
	              i.done.shift(), i.done[0].ranges || i.done.shift();
	            }
	          }i.done.push(n), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = l, i.lastOp = i.lastSelOp = r, i.lastOrigin = i.lastSelOrigin = t.origin, a || Ee(e, "historyAdded");
	        }function ri(e, t, n, r) {
	          var i = t.charAt(0);return "*" == i || "+" == i && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500);
	        }function ii(e, t, n, r) {
	          var i = e.history,
	              o = r && r.origin;n == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || ri(e, o, m(i.done), t)) ? i.done[i.done.length - 1] = t : oi(t, i.done), i.lastSelTime = +new Date(), i.lastSelOrigin = o, i.lastSelOp = n, r && !1 !== r.clearRedo && ei(i.undone);
	        }function oi(e, t) {
	          var n = m(t);n && n.ranges && n.equals(e) || t.push(e);
	        }function ai(e, t, n, r) {
	          var i = t["spans_" + e.id],
	              o = 0;e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function (n) {
	            n.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = n.markedSpans), ++o;
	          });
	        }function li(e) {
	          if (!e) return null;for (var t, n = 0; n < e.length; ++n) {
	            e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
	          }return t ? t.length ? t : null : e;
	        }function si(e, t) {
	          var n = t["spans_" + e.id];if (!n) return null;for (var r = [], i = 0; i < t.text.length; ++i) {
	            r.push(li(n[i]));
	          }return r;
	        }function ui(e, t) {
	          var n = si(e, t),
	              r = Q(e, t);if (!n) return r;if (!r) return n;for (var i = 0; i < n.length; ++i) {
	            var o = n[i],
	                a = r[i];if (o && a) e: for (var l = 0; l < a.length; ++l) {
	              for (var s = a[l], u = 0; u < o.length; ++u) {
	                if (o[u].marker == s.marker) continue e;
	              }o.push(s);
	            } else a && (n[i] = a);
	          }return n;
	        }function ci(e, t, n) {
	          for (var r = [], i = 0; i < e.length; ++i) {
	            var o = e[i];if (o.ranges) r.push(n ? xl.prototype.deepCopy.call(o) : o);else {
	              var a = o.changes,
	                  l = [];r.push({ changes: l });for (var s = 0; s < a.length; ++s) {
	                var u = a[s],
	                    c = void 0;if (l.push({ from: u.from, to: u.to, text: u.text }), t) for (var h in u) {
	                  (c = h.match(/^spans_(\d+)$/)) && f(t, Number(c[1])) > -1 && (m(l)[h] = u[h], delete u[h]);
	                }
	              }
	            }
	          }return r;
	        }function hi(e, t, n, r) {
	          if (r) {
	            var i = e.anchor;if (n) {
	              var o = B(t, i) < 0;o != B(n, i) < 0 ? (i = t, t = n) : o != B(t, n) < 0 && (t = n);
	            }return new bl(i, t);
	          }return new bl(n || t, t);
	        }function fi(e, t, n, r, i) {
	          null == i && (i = e.cm && (e.cm.display.shift || e.extend)), yi(e, new xl([hi(e.sel.primary(), t, n, i)], 0), r);
	        }function di(e, t, n) {
	          for (var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++) {
	            r[o] = hi(e.sel.ranges[o], t[o], null, i);
	          }yi(e, Fr(r, e.sel.primIndex), n);
	        }function pi(e, t, n, r) {
	          var i = e.sel.ranges.slice(0);i[t] = n, yi(e, Fr(i, e.sel.primIndex), r);
	        }function mi(e, t, n, r) {
	          yi(e, Rr(t, n), r);
	        }function gi(e, t, n) {
	          var r = { ranges: t.ranges, update: function update(t) {
	              var n = this;this.ranges = [];for (var r = 0; r < t.length; r++) {
	                n.ranges[r] = new bl(j(e, t[r].anchor), j(e, t[r].head));
	              }
	            }, origin: n && n.origin };return Ee(e, "beforeSelectionChange", e, r), e.cm && Ee(e.cm, "beforeSelectionChange", e.cm, r), r.ranges != t.ranges ? Fr(r.ranges, r.ranges.length - 1) : t;
	        }function vi(e, t, n) {
	          var r = e.history.done,
	              i = m(r);i && i.ranges ? (r[r.length - 1] = t, xi(e, t, n)) : yi(e, t, n);
	        }function yi(e, t, n) {
	          xi(e, t, n), ii(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
	        }function xi(e, t, n) {
	          (De(e, "beforeSelectionChange") || e.cm && De(e.cm, "beforeSelectionChange")) && (t = gi(e, t, n)), bi(e, ki(e, t, n && n.bias || (B(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1), !0)), n && !1 === n.scroll || !e.cm || Gn(e.cm);
	        }function bi(e, t) {
	          t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0, Ie(e.cm)), Ct(e, "cursorActivity", e));
	        }function wi(e) {
	          bi(e, ki(e, e.sel, null, !1));
	        }function ki(e, t, n, r) {
	          for (var i, o = 0; o < t.ranges.length; o++) {
	            var a = t.ranges[o],
	                l = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
	                s = Si(e, a.anchor, l && l.anchor, n, r),
	                u = Si(e, a.head, l && l.head, n, r);(i || s != a.anchor || u != a.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new bl(s, u));
	          }return i ? Fr(i, t.primIndex) : t;
	        }function Ci(e, t, n, r, i) {
	          var o = M(e, t.line);if (o.markedSpans) for (var a = 0; a < o.markedSpans.length; ++a) {
	            var l = o.markedSpans[a],
	                s = l.marker;if ((null == l.from || (s.inclusiveLeft ? l.from <= t.ch : l.from < t.ch)) && (null == l.to || (s.inclusiveRight ? l.to >= t.ch : l.to > t.ch))) {
	              if (i && (Ee(s, "beforeCursorEnter"), s.explicitlyCleared)) {
	                if (o.markedSpans) {
	                  --a;continue;
	                }break;
	              }if (!s.atomic) continue;if (n) {
	                var u = s.find(r < 0 ? 1 : -1),
	                    c = void 0;if ((r < 0 ? s.inclusiveRight : s.inclusiveLeft) && (u = Li(e, u, -r, u && u.line == t.line ? o : null)), u && u.line == t.line && (c = B(u, n)) && (r < 0 ? c < 0 : c > 0)) return Ci(e, u, t, r, i);
	              }var h = s.find(r < 0 ? -1 : 1);return (r < 0 ? s.inclusiveLeft : s.inclusiveRight) && (h = Li(e, h, r, h.line == t.line ? o : null)), h ? Ci(e, h, t, r, i) : null;
	            }
	          }return t;
	        }function Si(e, t, n, r, i) {
	          var o = r || 1,
	              a = Ci(e, t, n, o, i) || !i && Ci(e, t, n, o, !0) || Ci(e, t, n, -o, i) || !i && Ci(e, t, n, -o, !0);return a || (e.cantEdit = !0, W(e.first, 0));
	        }function Li(e, t, n, r) {
	          return n < 0 && 0 == t.ch ? t.line > e.first ? j(e, W(t.line - 1)) : null : n > 0 && t.ch == (r || M(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? W(t.line + 1, 0) : null : new W(t.line, t.ch + n);
	        }function Ti(e) {
	          e.setSelection(W(e.firstLine(), 0), W(e.lastLine()), Wa);
	        }function Mi(e, t, n) {
	          var r = { canceled: !1, from: t.from, to: t.to, text: t.text, origin: t.origin, cancel: function cancel() {
	              return r.canceled = !0;
	            } };return n && (r.update = function (t, n, i, o) {
	            t && (r.from = j(e, t)), n && (r.to = j(e, n)), i && (r.text = i), void 0 !== o && (r.origin = o);
	          }), Ee(e, "beforeChange", e, r), e.cm && Ee(e.cm, "beforeChange", e.cm, r), r.canceled ? null : { from: r.from, to: r.to, text: r.text, origin: r.origin };
	        }function Ni(e, t, n) {
	          if (e.cm) {
	            if (!e.cm.curOp) return fr(e.cm, Ni)(e, t, n);if (e.cm.state.suppressEdits) return;
	          }if (!(De(e, "beforeChange") || e.cm && De(e.cm, "beforeChange")) || (t = Mi(e, t, !0))) {
	            var r = _a && !n && te(e, t.from, t.to);if (r) for (var i = r.length - 1; i >= 0; --i) {
	              Ai(e, { from: r[i].from, to: r[i].to, text: i ? [""] : t.text });
	            } else Ai(e, t);
	          }
	        }function Ai(e, t) {
	          if (1 != t.text.length || "" != t.text[0] || 0 != B(t.from, t.to)) {
	            var n = _r(e, t);ni(e, t, n, e.cm ? e.cm.curOp.id : NaN), Ii(e, t, n, Q(e, t));var r = [];Xr(e, function (e, n) {
	              n || -1 != f(r, e.history) || (Fi(e.history, t), r.push(e.history)), Ii(e, t, null, Q(e, t));
	            });
	          }
	        }function Ei(e, t, n) {
	          if (!e.cm || !e.cm.state.suppressEdits || n) {
	            for (var r, i = e.history, o = e.sel, a = "undo" == t ? i.done : i.undone, l = "undo" == t ? i.undone : i.done, s = 0; s < a.length && (r = a[s], n ? !r.ranges || r.equals(e.sel) : r.ranges); s++) {}if (s != a.length) {
	              for (i.lastOrigin = i.lastSelOrigin = null; (r = a.pop()).ranges;) {
	                if (oi(r, l), n && !r.equals(e.sel)) return void yi(e, r, { clearRedo: !1 });o = r;
	              }var u = [];oi(o, l), l.push({ changes: u, generation: i.generation }), i.generation = r.generation || ++i.maxGeneration;for (var c = De(e, "beforeChange") || e.cm && De(e.cm, "beforeChange"), h = r.changes.length - 1; h >= 0; --h) {
	                var d = function (n) {
	                  var i = r.changes[n];if (i.origin = t, c && !Mi(e, i, !1)) return a.length = 0, {};u.push(Qr(e, i));var o = n ? _r(e, i) : m(a);Ii(e, i, o, ui(e, i)), !n && e.cm && e.cm.scrollIntoView({ from: i.from, to: Pr(i) });var l = [];Xr(e, function (e, t) {
	                    t || -1 != f(l, e.history) || (Fi(e.history, i), l.push(e.history)), Ii(e, i, null, ui(e, i));
	                  });
	                }(h);if (d) return d.v;
	              }
	            }
	          }
	        }function Oi(e, t) {
	          if (0 != t && (e.first += t, e.sel = new xl(g(e.sel.ranges, function (e) {
	            return new bl(W(e.anchor.line + t, e.anchor.ch), W(e.head.line + t, e.head.ch));
	          }), e.sel.primIndex), e.cm)) {
	            mr(e.cm, e.first, e.first - t, t);for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++) {
	              gr(e.cm, r, "gutter");
	            }
	          }
	        }function Ii(e, t, n, r) {
	          if (e.cm && !e.cm.curOp) return fr(e.cm, Ii)(e, t, n, r);if (t.to.line < e.first) Oi(e, t.text.length - 1 - (t.to.line - t.from.line));else if (!(t.from.line > e.lastLine())) {
	            if (t.from.line < e.first) {
	              var i = t.text.length - 1 - (e.first - t.from.line);Oi(e, i), t = { from: W(e.first, 0), to: W(t.to.line + i, t.to.ch), text: [m(t.text)], origin: t.origin };
	            }var o = e.lastLine();t.to.line > o && (t = { from: t.from, to: W(o, M(e, o).text.length), text: [t.text[0]], origin: t.origin }), t.removed = N(e, t.from, t.to), n || (n = _r(e, t)), e.cm ? Di(e.cm, t, r) : Vr(e, t, r), xi(e, n, Wa);
	          }
	        }function Di(e, t, n) {
	          var r = e.doc,
	              i = e.display,
	              o = t.from,
	              a = t.to,
	              l = !1,
	              s = o.line;e.options.lineWrapping || (s = O(he(M(r, o.line))), r.iter(s, a.line + 1, function (e) {
	            if (e == i.maxLine) return l = !0, !0;
	          })), r.sel.contains(t.from, t.to) > -1 && Ie(e), Vr(r, t, n, kn(e)), e.options.lineWrapping || (r.iter(s, o.line + t.text.length, function (e) {
	            var t = xe(e);t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, l = !1);
	          }), l && (e.curOp.updateMaxLine = !0)), lt(r, o.line), wr(e, 400);var u = t.text.length - (a.line - o.line) - 1;t.full ? mr(e) : o.line != a.line || 1 != t.text.length || $r(e.doc, t) ? mr(e, o.line, a.line + 1, u) : gr(e, o.line, "text");var c = De(e, "changes"),
	              h = De(e, "change");if (h || c) {
	            var f = { from: o, to: a, text: t.text, removed: t.removed, origin: t.origin };h && Ct(e, "change", e, f), c && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(f);
	          }e.display.selForContextMenu = null;
	        }function Hi(e, t, n, r, i) {
	          if (r || (r = n), B(r, n) < 0) {
	            var o = r;r = n, n = o;
	          }"string" == typeof t && (t = e.splitLines(t)), Ni(e, { from: n, to: r, text: t, origin: i });
	        }function Wi(e, t, n, r) {
	          n < e.line ? e.line += r : t < e.line && (e.line = t, e.ch = 0);
	        }function Bi(e, t, n, r) {
	          for (var i = 0; i < e.length; ++i) {
	            var o = e[i],
	                a = !0;if (o.ranges) {
	              o.copied || ((o = e[i] = o.deepCopy()).copied = !0);for (var l = 0; l < o.ranges.length; l++) {
	                Wi(o.ranges[l].anchor, t, n, r), Wi(o.ranges[l].head, t, n, r);
	              }
	            } else {
	              for (var s = 0; s < o.changes.length; ++s) {
	                var u = o.changes[s];if (n < u.from.line) u.from = W(u.from.line + r, u.from.ch), u.to = W(u.to.line + r, u.to.ch);else if (t <= u.to.line) {
	                  a = !1;break;
	                }
	              }a || (e.splice(0, i + 1), i = 0);
	            }
	          }
	        }function Fi(e, t) {
	          var n = t.from.line,
	              r = t.to.line,
	              i = t.text.length - (r - n) - 1;Bi(e.done, n, r, i), Bi(e.undone, n, r, i);
	        }function Ri(e, t, n, r) {
	          var i = t,
	              o = t;return "number" == typeof t ? o = M(e, _(e, t)) : i = O(t), null == i ? null : (r(o, i) && e.cm && gr(e.cm, i, n), o);
	        }function Pi(e) {
	          var t = this;this.lines = e, this.parent = null;for (var n = 0, r = 0; r < e.length; ++r) {
	            e[r].parent = t, n += e[r].height;
	          }this.height = n;
	        }function zi(e) {
	          var t = this;this.children = e;for (var n = 0, r = 0, i = 0; i < e.length; ++i) {
	            var o = e[i];n += o.chunkSize(), r += o.height, o.parent = t;
	          }this.size = n, this.height = r, this.parent = null;
	        }function _i(e, t, n) {
	          ye(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && Un(e, n);
	        }function ji(e, t, n, r) {
	          var i = new wl(e, n, r),
	              o = e.cm;return o && i.noHScroll && (o.display.alignWidgets = !0), Ri(e, t, "widget", function (t) {
	            var n = t.widgets || (t.widgets = []);if (null == i.insertAt ? n.push(i) : n.splice(Math.min(n.length - 1, Math.max(0, i.insertAt)), 0, i), i.line = t, o && !ge(e, t)) {
	              var r = ye(t) < e.scrollTop;E(t, t.height + Ft(i)), r && Un(o, i.height), o.curOp.forceUpdate = !0;
	            }return !0;
	          }), Ct(o, "lineWidgetAdded", o, i, "number" == typeof t ? t : O(t)), i;
	        }function qi(e, t, n, r, o) {
	          if (r && r.shared) return Ui(e, t, n, r, o);if (e.cm && !e.cm.curOp) return fr(e.cm, qi)(e, t, n, r, o);var a = new Cl(e, o),
	              l = B(t, n);if (r && c(r, a, !1), l > 0 || 0 == l && !1 !== a.clearWhenEmpty) return a;if (a.replacedWith && (a.collapsed = !0, a.widgetNode = i("span", [a.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || a.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (a.widgetNode.insertLeft = !0)), a.collapsed) {
	            if (ce(e, t.line, t, n, a) || t.line != n.line && ce(e, n.line, t, n, a)) throw new Error("Inserting collapsed marker partially overlapping an existing one");$();
	          }a.addToHistory && ni(e, { from: t, to: n, origin: "markText" }, e.sel, NaN);var s,
	              u = t.line,
	              h = e.cm;if (e.iter(u, n.line + 1, function (e) {
	            h && a.collapsed && !h.options.lineWrapping && he(e) == h.display.maxLine && (s = !0), a.collapsed && u != t.line && E(e, 0), Y(e, new V(a, u == t.line ? t.ch : null, u == n.line ? n.ch : null)), ++u;
	          }), a.collapsed && e.iter(t.line, n.line + 1, function (t) {
	            ge(e, t) && E(t, 0);
	          }), a.clearOnEnter && $a(a, "beforeCursorEnter", function () {
	            return a.clear();
	          }), a.readOnly && (G(), (e.history.done.length || e.history.undone.length) && e.clearHistory()), a.collapsed && (a.id = ++kl, a.atomic = !0), h) {
	            if (s && (h.curOp.updateMaxLine = !0), a.collapsed) mr(h, t.line, n.line + 1);else if (a.className || a.title || a.startStyle || a.endStyle || a.css) for (var f = t.line; f <= n.line; f++) {
	              gr(h, f, "text");
	            }a.atomic && wi(h.doc), Ct(h, "markerAdded", h, a);
	          }return a;
	        }function Ui(e, t, n, r, i) {
	          (r = c(r)).shared = !1;var o = [qi(e, t, n, r, i)],
	              a = o[0],
	              l = r.widgetNode;return Xr(e, function (e) {
	            l && (r.widgetNode = l.cloneNode(!0)), o.push(qi(e, j(e, t), j(e, n), r, i));for (var s = 0; s < e.linked.length; ++s) {
	              if (e.linked[s].isParent) return;
	            }a = m(o);
	          }), new Sl(o, a);
	        }function Gi(e) {
	          return e.findMarks(W(e.first, 0), e.clipPos(W(e.lastLine())), function (e) {
	            return e.parent;
	          });
	        }function $i(e, t) {
	          for (var n = 0; n < t.length; n++) {
	            var r = t[n],
	                i = r.find(),
	                o = e.clipPos(i.from),
	                a = e.clipPos(i.to);if (B(o, a)) {
	              var l = qi(e, o, a, r.primary, r.primary.type);r.markers.push(l), l.parent = r;
	            }
	          }
	        }function Vi(e) {
	          for (var t = 0; t < e.length; t++) {
	            !function (t) {
	              var n = e[t],
	                  r = [n.primary.doc];Xr(n.primary.doc, function (e) {
	                return r.push(e);
	              });for (var i = 0; i < n.markers.length; i++) {
	                var o = n.markers[i];-1 == f(r, o.doc) && (o.parent = null, n.markers.splice(i--, 1));
	              }
	            }(t);
	          }
	        }function Xi(e) {
	          var t = this;if (Zi(t), !Oe(t, e) && !Rt(t.display, e)) {
	            We(e), ua && (Ml = +new Date());var n = Sn(t, e, !0),
	                r = e.dataTransfer.files;if (n && !t.isReadOnly()) if (r && r.length && window.FileReader && window.File) for (var i = r.length, o = Array(i), a = 0, l = 0; l < i; ++l) {
	              !function (e, r) {
	                if (!t.options.allowDropFileTypes || -1 != f(t.options.allowDropFileTypes, e.type)) {
	                  var l = new FileReader();l.onload = fr(t, function () {
	                    var e = l.result;if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""), o[r] = e, ++a == i) {
	                      var s = { from: n = j(t.doc, n), to: n, text: t.doc.splitLines(o.join(t.doc.lineSeparator())), origin: "paste" };Ni(t.doc, s), vi(t.doc, Rr(n, Pr(s)));
	                    }
	                  }), l.readAsText(e);
	                }
	              }(r[l], l);
	            } else {
	              if (t.state.draggingText && t.doc.sel.contains(n) > -1) return t.state.draggingText(e), void setTimeout(function () {
	                return t.display.input.focus();
	              }, 20);try {
	                var s = e.dataTransfer.getData("Text");if (s) {
	                  var u;if (t.state.draggingText && !t.state.draggingText.copy && (u = t.listSelections()), xi(t.doc, Rr(n, n)), u) for (var c = 0; c < u.length; ++c) {
	                    Hi(t.doc, "", u[c].anchor, u[c].head, "drag");
	                  }t.replaceSelection(s, "around", "paste"), t.display.input.focus();
	                }
	              } catch (e) {}
	            }
	          }
	        }function Ki(e, t) {
	          if (ua && (!e.state.draggingText || +new Date() - Ml < 100)) Re(t);else if (!Oe(e, t) && !Rt(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !ma)) {
	            var n = r("img", null, null, "position: fixed; left: 0; top: 0;");n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", pa && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop), t.dataTransfer.setDragImage(n, 0, 0), pa && n.parentNode.removeChild(n);
	          }
	        }function Yi(e, t) {
	          var i = Sn(e, t);if (i) {
	            var o = document.createDocumentFragment();Nn(e, i, o), e.display.dragCursor || (e.display.dragCursor = r("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), n(e.display.dragCursor, o);
	          }
	        }function Zi(e) {
	          e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null);
	        }function Ji(e) {
	          if (document.getElementsByClassName) for (var t = document.getElementsByClassName("CodeMirror"), n = 0; n < t.length; n++) {
	            var r = t[n].CodeMirror;r && e(r);
	          }
	        }function Qi() {
	          Nl || (eo(), Nl = !0);
	        }function eo() {
	          var e;$a(window, "resize", function () {
	            null == e && (e = setTimeout(function () {
	              e = null, Ji(to);
	            }, 100));
	          }), $a(window, "blur", function () {
	            return Ji(Hn);
	          });
	        }function to(e) {
	          var t = e.display;t.lastWrapHeight == t.wrapper.clientHeight && t.lastWrapWidth == t.wrapper.clientWidth || (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize());
	        }function no(e) {
	          var t = e.split(/-(?!$)/);e = t[t.length - 1];for (var n, r, i, o, a = 0; a < t.length - 1; a++) {
	            var l = t[a];if (/^(cmd|meta|m)$/i.test(l)) o = !0;else if (/^a(lt)?$/i.test(l)) n = !0;else if (/^(c|ctrl|control)$/i.test(l)) r = !0;else {
	              if (!/^s(hift)?$/i.test(l)) throw new Error("Unrecognized modifier name: " + l);i = !0;
	            }
	          }return n && (e = "Alt-" + e), r && (e = "Ctrl-" + e), o && (e = "Cmd-" + e), i && (e = "Shift-" + e), e;
	        }function ro(e) {
	          var t = {};for (var n in e) {
	            if (e.hasOwnProperty(n)) {
	              var r = e[n];if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;if ("..." == r) {
	                delete e[n];continue;
	              }for (var i = g(n.split(" "), no), o = 0; o < i.length; o++) {
	                var a = void 0,
	                    l = void 0;o == i.length - 1 ? (l = i.join(" "), a = r) : (l = i.slice(0, o + 1).join(" "), a = "...");var s = t[l];if (s) {
	                  if (s != a) throw new Error("Inconsistent bindings for " + l);
	                } else t[l] = a;
	              }delete e[n];
	            }
	          }for (var u in t) {
	            e[u] = t[u];
	          }return e;
	        }function io(e, t, n, r) {
	          var i = (t = so(t)).call ? t.call(e, r) : t[e];if (!1 === i) return "nothing";if ("..." === i) return "multi";if (null != i && n(i)) return "handled";if (t.fallthrough) {
	            if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return io(e, t.fallthrough, n, r);for (var o = 0; o < t.fallthrough.length; o++) {
	              var a = io(e, t.fallthrough[o], n, r);if (a) return a;
	            }
	          }
	        }function oo(e) {
	          var t = "string" == typeof e ? e : Al[e.keyCode];return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t;
	        }function ao(e, t, n) {
	          var r = e;return t.altKey && "Alt" != r && (e = "Alt-" + e), (Ta ? t.metaKey : t.ctrlKey) && "Ctrl" != r && (e = "Ctrl-" + e), (Ta ? t.ctrlKey : t.metaKey) && "Cmd" != r && (e = "Cmd-" + e), !n && t.shiftKey && "Shift" != r && (e = "Shift-" + e), e;
	        }function lo(e, t) {
	          if (pa && 34 == e.keyCode && e.char) return !1;var n = Al[e.keyCode];return null != n && !e.altGraphKey && ao(n, e, t);
	        }function so(e) {
	          return "string" == typeof e ? Dl[e] : e;
	        }function uo(e, t) {
	          for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
	            for (var o = t(n[i]); r.length && B(o.from, m(r).to) <= 0;) {
	              var a = r.pop();if (B(a.from, o.from) < 0) {
	                o.from = a.from;break;
	              }
	            }r.push(o);
	          }hr(e, function () {
	            for (var t = r.length - 1; t >= 0; t--) {
	              Hi(e.doc, "", r[t].from, r[t].to, "+delete");
	            }Gn(e);
	          });
	        }function co(e, t) {
	          var n = M(e.doc, t),
	              r = he(n);return r != n && (t = O(r)), Te(!0, e, r, t, 1);
	        }function ho(e, t) {
	          var n = M(e.doc, t),
	              r = fe(n);return r != n && (t = O(r)), Te(!0, e, n, t, -1);
	        }function fo(e, t) {
	          var n = co(e, t.line),
	              r = M(e.doc, n.line),
	              i = Ce(r, e.doc.direction);if (!i || 0 == i[0].level) {
	            var o = Math.max(0, r.text.search(/\S/)),
	                a = t.line == n.line && t.ch <= o && t.ch;return W(n.line, a ? 0 : o, n.sticky);
	          }return n;
	        }function po(e, t, n) {
	          if ("string" == typeof t && !(t = Hl[t])) return !1;e.display.input.ensurePolled();var r = e.display.shift,
	              i = !1;try {
	            e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), i = t(e) != Ha;
	          } finally {
	            e.display.shift = r, e.state.suppressEdits = !1;
	          }return i;
	        }function mo(e, t, n) {
	          for (var r = 0; r < e.state.keyMaps.length; r++) {
	            var i = io(t, e.state.keyMaps[r], n, e);if (i) return i;
	          }return e.options.extraKeys && io(t, e.options.extraKeys, n, e) || io(t, e.options.keyMap, n, e);
	        }function go(e, t, n, r) {
	          var i = e.state.keySeq;if (i) {
	            if (oo(t)) return "handled";Wl.set(50, function () {
	              e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset());
	            }), t = i + " " + t;
	          }var o = mo(e, t, r);return "multi" == o && (e.state.keySeq = t), "handled" == o && Ct(e, "keyHandled", e, t, n), "handled" != o && "multi" != o || (We(n), En(e)), i && !o && /\'$/.test(t) ? (We(n), !0) : !!o;
	        }function vo(e, t) {
	          var n = lo(t, !0);return !!n && (t.shiftKey && !e.state.keySeq ? go(e, "Shift-" + n, t, function (t) {
	            return po(e, t, !0);
	          }) || go(e, n, t, function (t) {
	            if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) return po(e, t);
	          }) : go(e, n, t, function (t) {
	            return po(e, t);
	          }));
	        }function yo(e, t, n) {
	          return go(e, "'" + n + "'", t, function (t) {
	            return po(e, t, !0);
	          });
	        }function xo(e) {
	          var t = this;if (t.curOp.focus = a(), !Oe(t, e)) {
	            ua && ca < 11 && 27 == e.keyCode && (e.returnValue = !1);var n = e.keyCode;t.display.shift = 16 == n || e.shiftKey;var r = vo(t, e);pa && (Bl = r ? n : null, !r && 88 == n && !Ya && (wa ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")), 18 != n || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || bo(t);
	          }
	        }function bo(e) {
	          function t(e) {
	            18 != e.keyCode && e.altKey || (Na(n, "CodeMirror-crosshair"), Ae(document, "keyup", t), Ae(document, "mouseover", t));
	          }var n = e.display.lineDiv;l(n, "CodeMirror-crosshair"), $a(document, "keyup", t), $a(document, "mouseover", t);
	        }function wo(e) {
	          16 == e.keyCode && (this.doc.sel.shift = !1), Oe(this, e);
	        }function ko(e) {
	          var t = this;if (!(Rt(t.display, e) || Oe(t, e) || e.ctrlKey && !e.altKey || wa && e.metaKey)) {
	            var n = e.keyCode,
	                r = e.charCode;if (pa && n == Bl) return Bl = null, void We(e);if (!pa || e.which && !(e.which < 10) || !vo(t, e)) {
	              var i = String.fromCharCode(null == r ? n : r);"\b" != i && (yo(t, e, i) || t.display.input.onKeyPress(e));
	            }
	          }
	        }function Co(e, t) {
	          var n = +new Date();return Pl && Pl.compare(n, e, t) ? (Rl = Pl = null, "triple") : Rl && Rl.compare(n, e, t) ? (Pl = new Fl(n, e, t), Rl = null, "double") : (Rl = new Fl(n, e, t), Pl = null, "single");
	        }function So(e) {
	          var t = this,
	              n = t.display;if (!(Oe(t, e) || n.activeTouch && n.input.supportsTouch())) if (n.input.ensurePolled(), n.shift = e.shiftKey, Rt(n, e)) ha || (n.scroller.draggable = !1, setTimeout(function () {
	            return n.scroller.draggable = !0;
	          }, 100));else if (!Io(t, e)) {
	            var r = Sn(t, e),
	                i = ze(e),
	                o = r ? Co(r, i) : "single";window.focus(), 1 == i && t.state.selectingText && t.state.selectingText(e), r && Lo(t, i, r, o, e) || (1 == i ? r ? Mo(t, r, o, e) : Pe(e) == n.scroller && We(e) : 2 == i ? (r && fi(t.doc, r), setTimeout(function () {
	              return n.input.focus();
	            }, 20)) : 3 == i && (Ma ? Do(t, e) : In(t)));
	          }
	        }function Lo(e, t, n, r, i) {
	          var o = "Click";return "double" == r ? o = "Double" + o : "triple" == r && (o = "Triple" + o), o = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + o, go(e, ao(o, i), i, function (t) {
	            if ("string" == typeof t && (t = Hl[t]), !t) return !1;var r = !1;try {
	              e.isReadOnly() && (e.state.suppressEdits = !0), r = t(e, n) != Ha;
	            } finally {
	              e.state.suppressEdits = !1;
	            }return r;
	          });
	        }function To(e, t, n) {
	          var r = e.getOption("configureMouse"),
	              i = r ? r(e, t, n) : {};if (null == i.unit) {
	            var o = ka ? n.shiftKey && n.metaKey : n.altKey;i.unit = o ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line";
	          }return (null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || n.shiftKey), null == i.addNew && (i.addNew = wa ? n.metaKey : n.ctrlKey), null == i.moveOnDrag && (i.moveOnDrag = !(wa ? n.altKey : n.ctrlKey)), i;
	        }function Mo(e, t, n, r) {
	          ua ? setTimeout(u(On, e), 0) : e.curOp.focus = a();var i,
	              o = To(e, n, r),
	              l = e.doc.sel;e.options.dragDrop && Va && !e.isReadOnly() && "single" == n && (i = l.contains(t)) > -1 && (B((i = l.ranges[i]).from(), t) < 0 || t.xRel > 0) && (B(i.to(), t) > 0 || t.xRel < 0) ? No(e, r, t, o) : Eo(e, r, t, o);
	        }function No(e, t, n, r) {
	          var i = e.display,
	              o = !1,
	              a = fr(e, function (t) {
	            ha && (i.scroller.draggable = !1), e.state.draggingText = !1, Ae(document, "mouseup", a), Ae(document, "mousemove", l), Ae(i.scroller, "dragstart", s), Ae(i.scroller, "drop", a), o || (We(t), r.addNew || fi(e.doc, n, null, null, r.extend), ha || ua && 9 == ca ? setTimeout(function () {
	              document.body.focus(), i.input.focus();
	            }, 20) : i.input.focus());
	          }),
	              l = function l(e) {
	            o = o || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10;
	          },
	              s = function s() {
	            return o = !0;
	          };ha && (i.scroller.draggable = !0), e.state.draggingText = a, a.copy = !r.moveOnDrag, i.scroller.dragDrop && i.scroller.dragDrop(), $a(document, "mouseup", a), $a(document, "mousemove", l), $a(i.scroller, "dragstart", s), $a(i.scroller, "drop", a), In(e), setTimeout(function () {
	            return i.input.focus();
	          }, 20);
	        }function Ao(e, t, n) {
	          if ("char" == n) return new bl(t, t);if ("word" == n) return e.findWordAt(t);if ("line" == n) return new bl(W(t.line, 0), j(e.doc, W(t.line + 1, 0)));var r = n(e, t);return new bl(r.from, r.to);
	        }function Eo(e, t, n, r) {
	          function i(t) {
	            if (0 != B(v, t)) if (v = t, "rectangle" == r.unit) {
	              for (var i = [], o = e.options.tabSize, a = h(M(u, n.line).text, n.ch, o), l = h(M(u, t.line).text, t.ch, o), s = Math.min(a, l), m = Math.max(a, l), g = Math.min(n.line, t.line), y = Math.min(e.lastLine(), Math.max(n.line, t.line)); g <= y; g++) {
	                var x = M(u, g).text,
	                    b = d(x, s, o);s == m ? i.push(new bl(W(g, b), W(g, b))) : x.length > b && i.push(new bl(W(g, b), W(g, d(x, m, o))));
	              }i.length || i.push(new bl(n, n)), yi(u, Fr(p.ranges.slice(0, f).concat(i), f), { origin: "*mouse", scroll: !1 }), e.scrollIntoView(t);
	            } else {
	              var w,
	                  k = c,
	                  C = Ao(e, t, r.unit),
	                  S = k.anchor;B(C.anchor, S) > 0 ? (w = C.head, S = z(k.from(), C.anchor)) : (w = C.anchor, S = P(k.to(), C.head));var L = p.ranges.slice(0);L[f] = new bl(j(u, S), w), yi(u, Fr(L, f), Ba);
	            }
	          }function o(t) {
	            var n = ++x,
	                l = Sn(e, t, !0, "rectangle" == r.unit);if (l) if (0 != B(l, v)) {
	              e.curOp.focus = a(), i(l);var c = Fn(s, u);(l.line >= c.to || l.line < c.from) && setTimeout(fr(e, function () {
	                x == n && o(t);
	              }), 150);
	            } else {
	              var h = t.clientY < y.top ? -20 : t.clientY > y.bottom ? 20 : 0;h && setTimeout(fr(e, function () {
	                x == n && (s.scroller.scrollTop += h, o(t));
	              }), 50);
	            }
	          }function l(t) {
	            e.state.selectingText = !1, x = 1 / 0, We(t), s.input.focus(), Ae(document, "mousemove", b), Ae(document, "mouseup", w), u.history.lastSelOrigin = null;
	          }var s = e.display,
	              u = e.doc;We(t);var c,
	              f,
	              p = u.sel,
	              m = p.ranges;if (r.addNew && !r.extend ? (f = u.sel.contains(n), c = f > -1 ? m[f] : new bl(n, n)) : (c = u.sel.primary(), f = u.sel.primIndex), "rectangle" == r.unit) r.addNew || (c = new bl(n, n)), n = Sn(e, t, !0, !0), f = -1;else {
	            var g = Ao(e, n, r.unit);c = r.extend ? hi(c, g.anchor, g.head, r.extend) : g;
	          }r.addNew ? -1 == f ? (f = m.length, yi(u, Fr(m.concat([c]), f), { scroll: !1, origin: "*mouse" })) : m.length > 1 && m[f].empty() && "char" == r.unit && !r.extend ? (yi(u, Fr(m.slice(0, f).concat(m.slice(f + 1)), 0), { scroll: !1, origin: "*mouse" }), p = u.sel) : pi(u, f, c, Ba) : (f = 0, yi(u, new xl([c], 0), Ba), p = u.sel);var v = n,
	              y = s.wrapper.getBoundingClientRect(),
	              x = 0,
	              b = fr(e, function (e) {
	            ze(e) ? o(e) : l(e);
	          }),
	              w = fr(e, l);e.state.selectingText = w, $a(document, "mousemove", b), $a(document, "mouseup", w);
	        }function Oo(e, t, n, r) {
	          var i, o;try {
	            i = t.clientX, o = t.clientY;
	          } catch (t) {
	            return !1;
	          }if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;r && We(t);var a = e.display,
	              l = a.lineDiv.getBoundingClientRect();if (o > l.bottom || !De(e, n)) return Fe(t);o -= l.top - a.viewOffset;for (var s = 0; s < e.options.gutters.length; ++s) {
	            var u = a.gutters.childNodes[s];if (u && u.getBoundingClientRect().right >= i) return Ee(e, n, e, I(e.doc, o), e.options.gutters[s], t), Fe(t);
	          }
	        }function Io(e, t) {
	          return Oo(e, t, "gutterClick", !0);
	        }function Do(e, t) {
	          Rt(e.display, t) || Ho(e, t) || Oe(e, t, "contextmenu") || e.display.input.onContextMenu(t);
	        }function Ho(e, t) {
	          return !!De(e, "gutterContextMenu") && Oo(e, t, "gutterContextMenu", !1);
	        }function Wo(e) {
	          e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), on(e);
	        }function Bo(e) {
	          Ir(e), mr(e), Rn(e);
	        }function Fo(e, t, n) {
	          if (!t != !(n && n != zl)) {
	            var r = e.display.dragFunctions,
	                i = t ? $a : Ae;i(e.display.scroller, "dragstart", r.start), i(e.display.scroller, "dragenter", r.enter), i(e.display.scroller, "dragover", r.over), i(e.display.scroller, "dragleave", r.leave), i(e.display.scroller, "drop", r.drop);
	          }
	        }function Ro(e) {
	          e.options.lineWrapping ? (l(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (Na(e.display.wrapper, "CodeMirror-wrap"), be(e)), Cn(e), mr(e), on(e), setTimeout(function () {
	            return er(e);
	          }, 100);
	        }function Po(e, t) {
	          var n = this;if (!(this instanceof Po)) return new Po(e, t);this.options = t = t ? c(t) : {}, c(_l, t, !1), Dr(t);var r = t.value;"string" == typeof r && (r = new Tl(r, t.mode, null, t.lineSeparator, t.direction)), this.doc = r;var i = new Po.inputStyles[t.inputStyle](this),
	              o = this.display = new T(e, r, i);o.wrapper.CodeMirror = this, Ir(this), Wo(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), nr(this), this.state = { keyMaps: [], overlays: [], modeGen: 0, overwrite: !1, delayingBlurEvent: !1, focused: !1, suppressEdits: !1, pasteIncoming: !1, cutIncoming: !1, selectingText: !1, draggingText: !1, highlight: new Ea(), keySeq: null, specialChars: null }, t.autofocus && !ba && o.input.focus(), ua && ca < 11 && setTimeout(function () {
	            return n.display.input.reset(!0);
	          }, 20), zo(this), Qi(), rr(this), this.curOp.forceUpdate = !0, Kr(this, r), t.autofocus && !ba || this.hasFocus() ? setTimeout(u(Dn, this), 20) : Hn(this);for (var a in jl) {
	            jl.hasOwnProperty(a) && jl[a](n, t[a], zl);
	          }Pn(this), t.finishInit && t.finishInit(this);for (var l = 0; l < ql.length; ++l) {
	            ql[l](n);
	          }ir(this), ha && t.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto");
	        }function zo(e) {
	          function t() {
	            i.activeTouch && (o = setTimeout(function () {
	              return i.activeTouch = null;
	            }, 1e3), (a = i.activeTouch).end = +new Date());
	          }function n(e) {
	            if (1 != e.touches.length) return !1;var t = e.touches[0];return t.radiusX <= 1 && t.radiusY <= 1;
	          }function r(e, t) {
	            if (null == t.left) return !0;var n = t.left - e.left,
	                r = t.top - e.top;return n * n + r * r > 400;
	          }var i = e.display;$a(i.scroller, "mousedown", fr(e, So)), ua && ca < 11 ? $a(i.scroller, "dblclick", fr(e, function (t) {
	            if (!Oe(e, t)) {
	              var n = Sn(e, t);if (n && !Io(e, t) && !Rt(e.display, t)) {
	                We(t);var r = e.findWordAt(n);fi(e.doc, r.anchor, r.head);
	              }
	            }
	          })) : $a(i.scroller, "dblclick", function (t) {
	            return Oe(e, t) || We(t);
	          }), Ma || $a(i.scroller, "contextmenu", function (t) {
	            return Do(e, t);
	          });var o,
	              a = { end: 0 };$a(i.scroller, "touchstart", function (t) {
	            if (!Oe(e, t) && !n(t)) {
	              i.input.ensurePolled(), clearTimeout(o);var r = +new Date();i.activeTouch = { start: r, moved: !1, prev: r - a.end <= 300 ? a : null }, 1 == t.touches.length && (i.activeTouch.left = t.touches[0].pageX, i.activeTouch.top = t.touches[0].pageY);
	            }
	          }), $a(i.scroller, "touchmove", function () {
	            i.activeTouch && (i.activeTouch.moved = !0);
	          }), $a(i.scroller, "touchend", function (n) {
	            var o = i.activeTouch;if (o && !Rt(i, n) && null != o.left && !o.moved && new Date() - o.start < 300) {
	              var a,
	                  l = e.coordsChar(i.activeTouch, "page");a = !o.prev || r(o, o.prev) ? new bl(l, l) : !o.prev.prev || r(o, o.prev.prev) ? e.findWordAt(l) : new bl(W(l.line, 0), j(e.doc, W(l.line + 1, 0))), e.setSelection(a.anchor, a.head), e.focus(), We(n);
	            }t();
	          }), $a(i.scroller, "touchcancel", t), $a(i.scroller, "scroll", function () {
	            i.scroller.clientHeight && (Yn(e, i.scroller.scrollTop), Jn(e, i.scroller.scrollLeft, !0), Ee(e, "scroll", e));
	          }), $a(i.scroller, "mousewheel", function (t) {
	            return Br(e, t);
	          }), $a(i.scroller, "DOMMouseScroll", function (t) {
	            return Br(e, t);
	          }), $a(i.wrapper, "scroll", function () {
	            return i.wrapper.scrollTop = i.wrapper.scrollLeft = 0;
	          }), i.dragFunctions = { enter: function enter(t) {
	              Oe(e, t) || Re(t);
	            }, over: function over(t) {
	              Oe(e, t) || (Yi(e, t), Re(t));
	            }, start: function start(t) {
	              return Ki(e, t);
	            }, drop: fr(e, Xi), leave: function leave(t) {
	              Oe(e, t) || Zi(e);
	            } };var l = i.input.getField();$a(l, "keyup", function (t) {
	            return wo.call(e, t);
	          }), $a(l, "keydown", fr(e, xo)), $a(l, "keypress", fr(e, ko)), $a(l, "focus", function (t) {
	            return Dn(e, t);
	          }), $a(l, "blur", function (t) {
	            return Hn(e, t);
	          });
	        }function _o(e, t, n, r) {
	          var i,
	              o = e.doc;null == n && (n = "add"), "smart" == n && (o.mode.indent ? i = Qe(e, t).state : n = "prev");var a = e.options.tabSize,
	              l = M(o, t),
	              s = h(l.text, null, a);l.stateAfter && (l.stateAfter = null);var u,
	              c = l.text.match(/^\s*/)[0];if (r || /\S/.test(l.text)) {
	            if ("smart" == n && ((u = o.mode.indent(i, l.text.slice(c.length), l.text)) == Ha || u > 150)) {
	              if (!r) return;n = "prev";
	            }
	          } else u = 0, n = "not";"prev" == n ? u = t > o.first ? h(M(o, t - 1).text, null, a) : 0 : "add" == n ? u = s + e.options.indentUnit : "subtract" == n ? u = s - e.options.indentUnit : "number" == typeof n && (u = s + n), u = Math.max(0, u);var f = "",
	              d = 0;if (e.options.indentWithTabs) for (var m = Math.floor(u / a); m; --m) {
	            d += a, f += "\t";
	          }if (d < u && (f += p(u - d)), f != c) return Hi(o, f, W(t, 0), W(t, c.length), "+input"), l.stateAfter = null, !0;for (var g = 0; g < o.sel.ranges.length; g++) {
	            var v = o.sel.ranges[g];if (v.head.line == t && v.head.ch < c.length) {
	              var y = W(t, c.length);pi(o, g, new bl(y, y));break;
	            }
	          }
	        }function jo(e) {
	          Ul = e;
	        }function qo(e, t, n, r, i) {
	          var o = e.doc;e.display.shift = !1, r || (r = o.sel);var a = e.state.pasteIncoming || "paste" == i,
	              l = Xa(t),
	              s = null;if (a && r.ranges.length > 1) if (Ul && Ul.text.join("\n") == t) {
	            if (r.ranges.length % Ul.text.length == 0) {
	              s = [];for (var u = 0; u < Ul.text.length; u++) {
	                s.push(o.splitLines(Ul.text[u]));
	              }
	            }
	          } else l.length == r.ranges.length && e.options.pasteLinesPerSelection && (s = g(l, function (e) {
	            return [e];
	          }));for (var c, h = r.ranges.length - 1; h >= 0; h--) {
	            var f = r.ranges[h],
	                d = f.from(),
	                p = f.to();f.empty() && (n && n > 0 ? d = W(d.line, d.ch - n) : e.state.overwrite && !a ? p = W(p.line, Math.min(M(o, p.line).text.length, p.ch + m(l).length)) : Ul && Ul.lineWise && Ul.text.join("\n") == t && (d = p = W(d.line, 0))), c = e.curOp.updateInput;var v = { from: d, to: p, text: s ? s[h % s.length] : l, origin: i || (a ? "paste" : e.state.cutIncoming ? "cut" : "+input") };Ni(e.doc, v), Ct(e, "inputRead", e, v);
	          }t && !a && Go(e, t), Gn(e), e.curOp.updateInput = c, e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = !1;
	        }function Uo(e, t) {
	          var n = e.clipboardData && e.clipboardData.getData("Text");if (n) return e.preventDefault(), t.isReadOnly() || t.options.disableInput || hr(t, function () {
	            return qo(t, n, 0, null, "paste");
	          }), !0;
	        }function Go(e, t) {
	          if (e.options.electricChars && e.options.smartIndent) for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
	            var i = n.ranges[r];if (!(i.head.ch > 100 || r && n.ranges[r - 1].head.line == i.head.line)) {
	              var o = e.getModeAt(i.head),
	                  a = !1;if (o.electricChars) {
	                for (var l = 0; l < o.electricChars.length; l++) {
	                  if (t.indexOf(o.electricChars.charAt(l)) > -1) {
	                    a = _o(e, i.head.line, "smart");break;
	                  }
	                }
	              } else o.electricInput && o.electricInput.test(M(e.doc, i.head.line).text.slice(0, i.head.ch)) && (a = _o(e, i.head.line, "smart"));a && Ct(e, "electricInput", e, i.head.line);
	            }
	          }
	        }function $o(e) {
	          for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
	            var i = e.doc.sel.ranges[r].head.line,
	                o = { anchor: W(i, 0), head: W(i + 1, 0) };n.push(o), t.push(e.getRange(o.anchor, o.head));
	          }return { text: t, ranges: n };
	        }function Vo(e, t) {
	          e.setAttribute("autocorrect", "off"), e.setAttribute("autocapitalize", "off"), e.setAttribute("spellcheck", !!t);
	        }function Xo() {
	          var e = r("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
	              t = r("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");return ha ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), ya && (e.style.border = "1px solid black"), Vo(e), t;
	        }function Ko(e, t, n, r, i) {
	          function o() {
	            var r = t.line + n;return !(r < e.first || r >= e.first + e.size) && (t = new W(r, t.ch, t.sticky), u = M(e, r));
	          }function a(r) {
	            var a;if (null == (a = i ? Me(e.cm, u, t, n) : Le(u, t, n))) {
	              if (r || !o()) return !1;t = Te(i, e.cm, u, t.line, n);
	            } else t = a;return !0;
	          }var l = t,
	              s = n,
	              u = M(e, t.line);if ("char" == r) a();else if ("column" == r) a(!0);else if ("word" == r || "group" == r) for (var c = null, h = "group" == r, f = e.cm && e.cm.getHelper(t, "wordChars"), d = !0; !(n < 0) || a(!d); d = !1) {
	            var p = u.text.charAt(t.ch) || "\n",
	                m = w(p, f) ? "w" : h && "\n" == p ? "n" : !h || /\s/.test(p) ? null : "p";if (!h || d || m || (m = "s"), c && c != m) {
	              n < 0 && (n = 1, a(), t.sticky = "after");break;
	            }if (m && (c = m), n > 0 && !a(!d)) break;
	          }var g = Si(e, t, l, s, !0);return F(l, g) && (g.hitSide = !0), g;
	        }function Yo(e, t, n, r) {
	          var i,
	              o = e.doc,
	              a = t.left;if ("page" == r) {
	            var l = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
	                s = Math.max(l - .5 * yn(e.display), 3);i = (n > 0 ? t.bottom : t.top) + n * s;
	          } else "line" == r && (i = n > 0 ? t.bottom + 3 : t.top - 3);for (var u; (u = pn(e, a, i)).outside;) {
	            if (n < 0 ? i <= 0 : i >= o.height) {
	              u.hitSide = !0;break;
	            }i += 5 * n;
	          }return u;
	        }function Zo(e, t) {
	          var n = Kt(e, t.line);if (!n || n.hidden) return null;var r = M(e.doc, t.line),
	              i = $t(n, r, t.line),
	              o = Ce(r, e.doc.direction),
	              a = "left";o && (a = ke(o, t.ch) % 2 ? "right" : "left");var l = Jt(i.map, t.ch, a);return l.offset = "right" == l.collapse ? l.end : l.start, l;
	        }function Jo(e) {
	          for (var t = e; t; t = t.parentNode) {
	            if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
	          }return !1;
	        }function Qo(e, t) {
	          return t && (e.bad = !0), e;
	        }function ea(e, t, n, r, i) {
	          function o(e) {
	            return function (t) {
	              return t.id == e;
	            };
	          }function a() {
	            c && (u += h, c = !1);
	          }function l(e) {
	            e && (a(), u += e);
	          }function s(t) {
	            if (1 == t.nodeType) {
	              var n = t.getAttribute("cm-text");if (null != n) return void l(n || t.textContent.replace(/\u200b/g, ""));var u,
	                  f = t.getAttribute("cm-marker");if (f) {
	                var d = e.findMarks(W(r, 0), W(i + 1, 0), o(+f));return void (d.length && (u = d[0].find()) && l(N(e.doc, u.from, u.to).join(h)));
	              }if ("false" == t.getAttribute("contenteditable")) return;var p = /^(pre|div|p)$/i.test(t.nodeName);p && a();for (var m = 0; m < t.childNodes.length; m++) {
	                s(t.childNodes[m]);
	              }p && (c = !0);
	            } else 3 == t.nodeType && l(t.nodeValue);
	          }for (var u = "", c = !1, h = e.doc.lineSeparator(); s(t), t != n;) {
	            t = t.nextSibling;
	          }return u;
	        }function ta(e, t, n) {
	          var r;if (t == e.display.lineDiv) {
	            if (!(r = e.display.lineDiv.childNodes[n])) return Qo(e.clipPos(W(e.display.viewTo - 1)), !0);t = null, n = 0;
	          } else for (r = t;; r = r.parentNode) {
	            if (!r || r == e.display.lineDiv) return null;if (r.parentNode && r.parentNode == e.display.lineDiv) break;
	          }for (var i = 0; i < e.display.view.length; i++) {
	            var o = e.display.view[i];if (o.node == r) return na(o, t, n);
	          }
	        }function na(e, t, n) {
	          function r(t, n, r) {
	            for (var i = -1; i < (h ? h.length : 0); i++) {
	              for (var o = i < 0 ? c.map : h[i], a = 0; a < o.length; a += 3) {
	                var l = o[a + 2];if (l == t || l == n) {
	                  var s = O(i < 0 ? e.line : e.rest[i]),
	                      u = o[a] + r;return (r < 0 || l != t) && (u = o[a + (r ? 1 : 0)]), W(s, u);
	                }
	              }
	            }
	          }var i = e.text.firstChild,
	              a = !1;if (!t || !o(i, t)) return Qo(W(O(e.line), 0), !0);if (t == i && (a = !0, t = i.childNodes[n], n = 0, !t)) {
	            var l = e.rest ? m(e.rest) : e.line;return Qo(W(O(l), l.text.length), a);
	          }var s = 3 == t.nodeType ? t : null,
	              u = t;for (s || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (s = t.firstChild, n && (n = s.nodeValue.length)); u.parentNode != i;) {
	            u = u.parentNode;
	          }var c = e.measure,
	              h = c.maps,
	              f = r(s, u, n);if (f) return Qo(f, a);for (var d = u.nextSibling, p = s ? s.nodeValue.length - n : 0; d; d = d.nextSibling) {
	            if (f = r(d, d.firstChild, 0)) return Qo(W(f.line, f.ch - p), a);p += d.textContent.length;
	          }for (var g = u.previousSibling, v = n; g; g = g.previousSibling) {
	            if (f = r(g, g.firstChild, -1)) return Qo(W(f.line, f.ch + v), a);v += g.textContent.length;
	          }
	        }var ra = navigator.userAgent,
	            ia = navigator.platform,
	            oa = /gecko\/\d/i.test(ra),
	            aa = /MSIE \d/.test(ra),
	            la = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ra),
	            sa = /Edge\/(\d+)/.exec(ra),
	            ua = aa || la || sa,
	            ca = ua && (aa ? document.documentMode || 6 : +(sa || la)[1]),
	            ha = !sa && /WebKit\//.test(ra),
	            fa = ha && /Qt\/\d+\.\d+/.test(ra),
	            da = !sa && /Chrome\//.test(ra),
	            pa = /Opera\//.test(ra),
	            ma = /Apple Computer/.test(navigator.vendor),
	            ga = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(ra),
	            va = /PhantomJS/.test(ra),
	            ya = !sa && /AppleWebKit/.test(ra) && /Mobile\/\w+/.test(ra),
	            xa = /Android/.test(ra),
	            ba = ya || xa || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(ra),
	            wa = ya || /Mac/.test(ia),
	            ka = /\bCrOS\b/.test(ra),
	            Ca = /win/i.test(ia),
	            Sa = pa && ra.match(/Version\/(\d*\.\d*)/);Sa && (Sa = Number(Sa[1])), Sa && Sa >= 15 && (pa = !1, ha = !0);var La,
	            Ta = wa && (fa || pa && (null == Sa || Sa < 12.11)),
	            Ma = oa || ua && ca >= 9,
	            Na = function Na(t, n) {
	          var r = t.className,
	              i = e(n).exec(r);if (i) {
	            var o = r.slice(i.index + i[0].length);t.className = r.slice(0, i.index) + (o ? i[1] + o : "");
	          }
	        };La = document.createRange ? function (e, t, n, r) {
	          var i = document.createRange();return i.setEnd(r || e, n), i.setStart(e, t), i;
	        } : function (e, t, n) {
	          var r = document.body.createTextRange();try {
	            r.moveToElementText(e.parentNode);
	          } catch (e) {
	            return r;
	          }return r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", t), r;
	        };var Aa = function Aa(e) {
	          e.select();
	        };ya ? Aa = function Aa(e) {
	          e.selectionStart = 0, e.selectionEnd = e.value.length;
	        } : ua && (Aa = function Aa(e) {
	          try {
	            e.select();
	          } catch (e) {}
	        });var Ea = function Ea() {
	          this.id = null;
	        };Ea.prototype.set = function (e, t) {
	          clearTimeout(this.id), this.id = setTimeout(t, e);
	        };var Oa,
	            Ia,
	            Da = 30,
	            Ha = { toString: function toString() {
	            return "CodeMirror.Pass";
	          } },
	            Wa = { scroll: !1 },
	            Ba = { origin: "*mouse" },
	            Fa = { origin: "+move" },
	            Ra = [""],
	            Pa = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
	            za = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/,
	            _a = !1,
	            ja = !1,
	            qa = null,
	            Ua = function () {
	          function e(e) {
	            return e <= 247 ? n.charAt(e) : 1424 <= e && e <= 1524 ? "R" : 1536 <= e && e <= 1785 ? r.charAt(e - 1536) : 1774 <= e && e <= 2220 ? "r" : 8192 <= e && e <= 8203 ? "w" : 8204 == e ? "b" : "L";
	          }function t(e, t, n) {
	            this.level = e, this.from = t, this.to = n;
	          }var n = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
	              r = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111",
	              i = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
	              o = /[stwN]/,
	              a = /[LRr]/,
	              l = /[Lb1n]/,
	              s = /[1n]/;return function (n, r) {
	            var u = "ltr" == r ? "L" : "R";if (0 == n.length || "ltr" == r && !i.test(n)) return !1;for (var c = n.length, h = [], f = 0; f < c; ++f) {
	              h.push(e(n.charCodeAt(f)));
	            }for (var d = 0, p = u; d < c; ++d) {
	              var g = h[d];"m" == g ? h[d] = p : p = g;
	            }for (var v = 0, y = u; v < c; ++v) {
	              var x = h[v];"1" == x && "r" == y ? h[v] = "n" : a.test(x) && (y = x, "r" == x && (h[v] = "R"));
	            }for (var b = 1, w = h[0]; b < c - 1; ++b) {
	              var k = h[b];"+" == k && "1" == w && "1" == h[b + 1] ? h[b] = "1" : "," != k || w != h[b + 1] || "1" != w && "n" != w || (h[b] = w), w = k;
	            }for (var C = 0; C < c; ++C) {
	              var S = h[C];if ("," == S) h[C] = "N";else if ("%" == S) {
	                var L = void 0;for (L = C + 1; L < c && "%" == h[L]; ++L) {}for (var T = C && "!" == h[C - 1] || L < c && "1" == h[L] ? "1" : "N", M = C; M < L; ++M) {
	                  h[M] = T;
	                }C = L - 1;
	              }
	            }for (var N = 0, A = u; N < c; ++N) {
	              var E = h[N];"L" == A && "1" == E ? h[N] = "L" : a.test(E) && (A = E);
	            }for (var O = 0; O < c; ++O) {
	              if (o.test(h[O])) {
	                var I = void 0;for (I = O + 1; I < c && o.test(h[I]); ++I) {}for (var D = "L" == (O ? h[O - 1] : u), H = D == ("L" == (I < c ? h[I] : u)) ? D ? "L" : "R" : u, W = O; W < I; ++W) {
	                  h[W] = H;
	                }O = I - 1;
	              }
	            }for (var B, F = [], R = 0; R < c;) {
	              if (l.test(h[R])) {
	                var P = R;for (++R; R < c && l.test(h[R]); ++R) {}F.push(new t(0, P, R));
	              } else {
	                var z = R,
	                    _ = F.length;for (++R; R < c && "L" != h[R]; ++R) {}for (var j = z; j < R;) {
	                  if (s.test(h[j])) {
	                    z < j && F.splice(_, 0, new t(1, z, j));var q = j;for (++j; j < R && s.test(h[j]); ++j) {}F.splice(_, 0, new t(2, q, j)), z = j;
	                  } else ++j;
	                }z < R && F.splice(_, 0, new t(1, z, R));
	              }
	            }return 1 == F[0].level && (B = n.match(/^\s+/)) && (F[0].from = B[0].length, F.unshift(new t(0, 0, B[0].length))), 1 == m(F).level && (B = n.match(/\s+$/)) && (m(F).to -= B[0].length, F.push(new t(0, c - B[0].length, c))), "rtl" == r ? F.reverse() : F;
	          };
	        }(),
	            Ga = [],
	            $a = function $a(e, t, n) {
	          if (e.addEventListener) e.addEventListener(t, n, !1);else if (e.attachEvent) e.attachEvent("on" + t, n);else {
	            var r = e._handlers || (e._handlers = {});r[t] = (r[t] || Ga).concat(n);
	          }
	        },
	            Va = function () {
	          if (ua && ca < 9) return !1;var e = r("div");return "draggable" in e || "dragDrop" in e;
	        }(),
	            Xa = 3 != "\n\nb".split(/\n/).length ? function (e) {
	          for (var t = 0, n = [], r = e.length; t <= r;) {
	            var i = e.indexOf("\n", t);-1 == i && (i = e.length);var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
	                a = o.indexOf("\r");-1 != a ? (n.push(o.slice(0, a)), t += a + 1) : (n.push(o), t = i + 1);
	          }return n;
	        } : function (e) {
	          return e.split(/\r\n?|\n/);
	        },
	            Ka = window.getSelection ? function (e) {
	          try {
	            return e.selectionStart != e.selectionEnd;
	          } catch (e) {
	            return !1;
	          }
	        } : function (e) {
	          var t;try {
	            t = e.ownerDocument.selection.createRange();
	          } catch (e) {}return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t);
	        },
	            Ya = function () {
	          var e = r("div");return "oncopy" in e || (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy);
	        }(),
	            Za = null,
	            Ja = {},
	            Qa = {},
	            el = {},
	            tl = function tl(e, t, n) {
	          this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = n;
	        };tl.prototype.eol = function () {
	          return this.pos >= this.string.length;
	        }, tl.prototype.sol = function () {
	          return this.pos == this.lineStart;
	        }, tl.prototype.peek = function () {
	          return this.string.charAt(this.pos) || void 0;
	        }, tl.prototype.next = function () {
	          if (this.pos < this.string.length) return this.string.charAt(this.pos++);
	        }, tl.prototype.eat = function (e) {
	          var t = this.string.charAt(this.pos);if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) return ++this.pos, t;
	        }, tl.prototype.eatWhile = function (e) {
	          for (var t = this.pos; this.eat(e);) {}return this.pos > t;
	        }, tl.prototype.eatSpace = function () {
	          for (var e = this, t = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos));) {
	            ++e.pos;
	          }return this.pos > t;
	        }, tl.prototype.skipToEnd = function () {
	          this.pos = this.string.length;
	        }, tl.prototype.skipTo = function (e) {
	          var t = this.string.indexOf(e, this.pos);if (t > -1) return this.pos = t, !0;
	        }, tl.prototype.backUp = function (e) {
	          this.pos -= e;
	        }, tl.prototype.column = function () {
	          return this.lastColumnPos < this.start && (this.lastColumnValue = h(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? h(this.string, this.lineStart, this.tabSize) : 0);
	        }, tl.prototype.indentation = function () {
	          return h(this.string, null, this.tabSize) - (this.lineStart ? h(this.string, this.lineStart, this.tabSize) : 0);
	        }, tl.prototype.match = function (e, t, n) {
	          if ("string" != typeof e) {
	            var r = this.string.slice(this.pos).match(e);return r && r.index > 0 ? null : (r && !1 !== t && (this.pos += r[0].length), r);
	          }var i = function i(e) {
	            return n ? e.toLowerCase() : e;
	          };if (i(this.string.substr(this.pos, e.length)) == i(e)) return !1 !== t && (this.pos += e.length), !0;
	        }, tl.prototype.current = function () {
	          return this.string.slice(this.start, this.pos);
	        }, tl.prototype.hideFirstChars = function (e, t) {
	          this.lineStart += e;try {
	            return t();
	          } finally {
	            this.lineStart -= e;
	          }
	        }, tl.prototype.lookAhead = function (e) {
	          var t = this.lineOracle;return t && t.lookAhead(e);
	        };var nl = function nl(e, t) {
	          this.state = e, this.lookAhead = t;
	        },
	            rl = function rl(e, t, n, r) {
	          this.state = t, this.doc = e, this.line = n, this.maxLookAhead = r || 0;
	        };rl.prototype.lookAhead = function (e) {
	          var t = this.doc.getLine(this.line + e);return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t;
	        }, rl.prototype.nextLine = function () {
	          this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
	        }, rl.fromSaved = function (e, t, n) {
	          return t instanceof nl ? new rl(e, Xe(e.mode, t.state), n, t.lookAhead) : new rl(e, Xe(e.mode, t), n);
	        }, rl.prototype.save = function (e) {
	          var t = !1 !== e ? Xe(this.doc.mode, this.state) : this.state;return this.maxLookAhead > 0 ? new nl(t, this.maxLookAhead) : t;
	        };var il = function il(e, t, n) {
	          this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = n;
	        },
	            ol = function ol(e, t, n) {
	          this.text = e, re(this, t), this.height = n ? n(this) : 1;
	        };ol.prototype.lineNo = function () {
	          return O(this);
	        }, He(ol);var al,
	            ll = {},
	            sl = {},
	            ul = null,
	            cl = null,
	            hl = { left: 0, right: 0, top: 0, bottom: 0 },
	            fl = function fl(e, t, n) {
	          this.cm = n;var i = this.vert = r("div", [r("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
	              o = this.horiz = r("div", [r("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");e(i), e(o), $a(i, "scroll", function () {
	            i.clientHeight && t(i.scrollTop, "vertical");
	          }), $a(o, "scroll", function () {
	            o.clientWidth && t(o.scrollLeft, "horizontal");
	          }), this.checkedZeroWidth = !1, ua && ca < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
	        };fl.prototype.update = function (e) {
	          var t = e.scrollWidth > e.clientWidth + 1,
	              n = e.scrollHeight > e.clientHeight + 1,
	              r = e.nativeBarWidth;if (n) {
	            this.vert.style.display = "block", this.vert.style.bottom = t ? r + "px" : "0";var i = e.viewHeight - (t ? r : 0);this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px";
	          } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";if (t) {
	            this.horiz.style.display = "block", this.horiz.style.right = n ? r + "px" : "0", this.horiz.style.left = e.barLeft + "px";var o = e.viewWidth - e.barLeft - (n ? r : 0);this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px";
	          } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == r && this.zeroWidthHack(), this.checkedZeroWidth = !0), { right: n ? r : 0, bottom: t ? r : 0 };
	        }, fl.prototype.setScrollLeft = function (e) {
	          this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
	        }, fl.prototype.setScrollTop = function (e) {
	          this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
	        }, fl.prototype.zeroWidthHack = function () {
	          var e = wa && !ga ? "12px" : "18px";this.horiz.style.height = this.vert.style.width = e, this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none", this.disableHoriz = new Ea(), this.disableVert = new Ea();
	        }, fl.prototype.enableZeroWidthBar = function (e, t, n) {
	          function r() {
	            var i = e.getBoundingClientRect();("vert" == n ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1)) != e ? e.style.pointerEvents = "none" : t.set(1e3, r);
	          }e.style.pointerEvents = "auto", t.set(1e3, r);
	        }, fl.prototype.clear = function () {
	          var e = this.horiz.parentNode;e.removeChild(this.horiz), e.removeChild(this.vert);
	        };var dl = function dl() {};dl.prototype.update = function () {
	          return { bottom: 0, right: 0 };
	        }, dl.prototype.setScrollLeft = function () {}, dl.prototype.setScrollTop = function () {}, dl.prototype.clear = function () {};var pl = { native: fl, null: dl },
	            ml = 0,
	            gl = function gl(e, t, n) {
	          var r = e.display;this.viewport = t, this.visible = Fn(r, e.doc, t), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = qt(e), this.force = n, this.dims = bn(e), this.events = [];
	        };gl.prototype.signal = function (e, t) {
	          De(e, t) && this.events.push(arguments);
	        }, gl.prototype.finish = function () {
	          for (var e = this, t = 0; t < this.events.length; t++) {
	            Ee.apply(null, e.events[t]);
	          }
	        };var vl = 0,
	            yl = null;ua ? yl = -.53 : oa ? yl = 15 : da ? yl = -.7 : ma && (yl = -1 / 3);var xl = function xl(e, t) {
	          this.ranges = e, this.primIndex = t;
	        };xl.prototype.primary = function () {
	          return this.ranges[this.primIndex];
	        }, xl.prototype.equals = function (e) {
	          var t = this;if (e == this) return !0;if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;for (var n = 0; n < this.ranges.length; n++) {
	            var r = t.ranges[n],
	                i = e.ranges[n];if (!F(r.anchor, i.anchor) || !F(r.head, i.head)) return !1;
	          }return !0;
	        }, xl.prototype.deepCopy = function () {
	          for (var e = this, t = [], n = 0; n < this.ranges.length; n++) {
	            t[n] = new bl(R(e.ranges[n].anchor), R(e.ranges[n].head));
	          }return new xl(t, this.primIndex);
	        }, xl.prototype.somethingSelected = function () {
	          for (var e = this, t = 0; t < this.ranges.length; t++) {
	            if (!e.ranges[t].empty()) return !0;
	          }return !1;
	        }, xl.prototype.contains = function (e, t) {
	          var n = this;t || (t = e);for (var r = 0; r < this.ranges.length; r++) {
	            var i = n.ranges[r];if (B(t, i.from()) >= 0 && B(e, i.to()) <= 0) return r;
	          }return -1;
	        };var bl = function bl(e, t) {
	          this.anchor = e, this.head = t;
	        };bl.prototype.from = function () {
	          return z(this.anchor, this.head);
	        }, bl.prototype.to = function () {
	          return P(this.anchor, this.head);
	        }, bl.prototype.empty = function () {
	          return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
	        }, Pi.prototype = { chunkSize: function chunkSize() {
	            return this.lines.length;
	          }, removeInner: function removeInner(e, t) {
	            for (var n = this, r = e, i = e + t; r < i; ++r) {
	              var o = n.lines[r];n.height -= o.height, ut(o), Ct(o, "delete");
	            }this.lines.splice(e, t);
	          }, collapse: function collapse(e) {
	            e.push.apply(e, this.lines);
	          }, insertInner: function insertInner(e, t, n) {
	            var r = this;this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));for (var i = 0; i < t.length; ++i) {
	              t[i].parent = r;
	            }
	          }, iterN: function iterN(e, t, n) {
	            for (var r = this, i = e + t; e < i; ++e) {
	              if (n(r.lines[e])) return !0;
	            }
	          } }, zi.prototype = { chunkSize: function chunkSize() {
	            return this.size;
	          }, removeInner: function removeInner(e, t) {
	            var n = this;this.size -= t;for (var r = 0; r < this.children.length; ++r) {
	              var i = n.children[r],
	                  o = i.chunkSize();if (e < o) {
	                var a = Math.min(t, o - e),
	                    l = i.height;if (i.removeInner(e, a), n.height -= l - i.height, o == a && (n.children.splice(r--, 1), i.parent = null), 0 == (t -= a)) break;e = 0;
	              } else e -= o;
	            }if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof Pi))) {
	              var s = [];this.collapse(s), this.children = [new Pi(s)], this.children[0].parent = this;
	            }
	          }, collapse: function collapse(e) {
	            for (var t = this, n = 0; n < this.children.length; ++n) {
	              t.children[n].collapse(e);
	            }
	          }, insertInner: function insertInner(e, t, n) {
	            var r = this;this.size += t.length, this.height += n;for (var i = 0; i < this.children.length; ++i) {
	              var o = r.children[i],
	                  a = o.chunkSize();if (e <= a) {
	                if (o.insertInner(e, t, n), o.lines && o.lines.length > 50) {
	                  for (var l = o.lines.length % 25 + 25, s = l; s < o.lines.length;) {
	                    var u = new Pi(o.lines.slice(s, s += 25));o.height -= u.height, r.children.splice(++i, 0, u), u.parent = r;
	                  }o.lines = o.lines.slice(0, l), r.maybeSpill();
	                }break;
	              }e -= a;
	            }
	          }, maybeSpill: function maybeSpill() {
	            if (!(this.children.length <= 10)) {
	              var e = this;do {
	                var t = new zi(e.children.splice(e.children.length - 5, 5));if (e.parent) {
	                  e.size -= t.size, e.height -= t.height;var n = f(e.parent.children, e);e.parent.children.splice(n + 1, 0, t);
	                } else {
	                  var r = new zi(e.children);r.parent = e, e.children = [r, t], e = r;
	                }t.parent = e.parent;
	              } while (e.children.length > 10);e.parent.maybeSpill();
	            }
	          }, iterN: function iterN(e, t, n) {
	            for (var r = this, i = 0; i < this.children.length; ++i) {
	              var o = r.children[i],
	                  a = o.chunkSize();if (e < a) {
	                var l = Math.min(t, a - e);if (o.iterN(e, l, n)) return !0;if (0 == (t -= l)) break;e = 0;
	              } else e -= a;
	            }
	          } };var wl = function wl(e, t, n) {
	          var r = this;if (n) for (var i in n) {
	            n.hasOwnProperty(i) && (r[i] = n[i]);
	          }this.doc = e, this.node = t;
	        };wl.prototype.clear = function () {
	          var e = this,
	              t = this.doc.cm,
	              n = this.line.widgets,
	              r = this.line,
	              i = O(r);if (null != i && n) {
	            for (var o = 0; o < n.length; ++o) {
	              n[o] == e && n.splice(o--, 1);
	            }n.length || (r.widgets = null);var a = Ft(this);E(r, Math.max(0, r.height - a)), t && (hr(t, function () {
	              _i(t, r, -a), gr(t, i, "widget");
	            }), Ct(t, "lineWidgetCleared", t, this, i));
	          }
	        }, wl.prototype.changed = function () {
	          var e = this,
	              t = this.height,
	              n = this.doc.cm,
	              r = this.line;this.height = null;var i = Ft(this) - t;i && (E(r, r.height + i), n && hr(n, function () {
	            n.curOp.forceUpdate = !0, _i(n, r, i), Ct(n, "lineWidgetChanged", n, e, O(r));
	          }));
	        }, He(wl);var kl = 0,
	            Cl = function Cl(e, t) {
	          this.lines = [], this.type = t, this.doc = e, this.id = ++kl;
	        };Cl.prototype.clear = function () {
	          var e = this;if (!this.explicitlyCleared) {
	            var t = this.doc.cm,
	                n = t && !t.curOp;if (n && rr(t), De(this, "clear")) {
	              var r = this.find();r && Ct(this, "clear", r.from, r.to);
	            }for (var i = null, o = null, a = 0; a < this.lines.length; ++a) {
	              var l = e.lines[a],
	                  s = X(l.markedSpans, e);t && !e.collapsed ? gr(t, O(l), "text") : t && (null != s.to && (o = O(l)), null != s.from && (i = O(l))), l.markedSpans = K(l.markedSpans, s), null == s.from && e.collapsed && !ge(e.doc, l) && t && E(l, yn(t.display));
	            }if (t && this.collapsed && !t.options.lineWrapping) for (var u = 0; u < this.lines.length; ++u) {
	              var c = he(e.lines[u]),
	                  h = xe(c);h > t.display.maxLineLength && (t.display.maxLine = c, t.display.maxLineLength = h, t.display.maxLineChanged = !0);
	            }null != i && t && this.collapsed && mr(t, i, o + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, t && wi(t.doc)), t && Ct(t, "markerCleared", t, this, i, o), n && ir(t), this.parent && this.parent.clear();
	          }
	        }, Cl.prototype.find = function (e, t) {
	          var n = this;null == e && "bookmark" == this.type && (e = 1);for (var r, i, o = 0; o < this.lines.length; ++o) {
	            var a = n.lines[o],
	                l = X(a.markedSpans, n);if (null != l.from && (r = W(t ? a : O(a), l.from), -1 == e)) return r;if (null != l.to && (i = W(t ? a : O(a), l.to), 1 == e)) return i;
	          }return r && { from: r, to: i };
	        }, Cl.prototype.changed = function () {
	          var e = this,
	              t = this.find(-1, !0),
	              n = this,
	              r = this.doc.cm;t && r && hr(r, function () {
	            var i = t.line,
	                o = O(t.line),
	                a = Kt(r, o);if (a && (nn(a), r.curOp.selectionChanged = r.curOp.forceUpdate = !0), r.curOp.updateMaxLine = !0, !ge(n.doc, i) && null != n.height) {
	              var l = n.height;n.height = null;var s = Ft(n) - l;s && E(i, i.height + s);
	            }Ct(r, "markerChanged", r, e);
	          });
	        }, Cl.prototype.attachLine = function (e) {
	          if (!this.lines.length && this.doc.cm) {
	            var t = this.doc.cm.curOp;t.maybeHiddenMarkers && -1 != f(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this);
	          }this.lines.push(e);
	        }, Cl.prototype.detachLine = function (e) {
	          if (this.lines.splice(f(this.lines, e), 1), !this.lines.length && this.doc.cm) {
	            var t = this.doc.cm.curOp;(t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
	          }
	        }, He(Cl);var Sl = function Sl(e, t) {
	          var n = this;this.markers = e, this.primary = t;for (var r = 0; r < e.length; ++r) {
	            e[r].parent = n;
	          }
	        };Sl.prototype.clear = function () {
	          var e = this;if (!this.explicitlyCleared) {
	            this.explicitlyCleared = !0;for (var t = 0; t < this.markers.length; ++t) {
	              e.markers[t].clear();
	            }Ct(this, "clear");
	          }
	        }, Sl.prototype.find = function (e, t) {
	          return this.primary.find(e, t);
	        }, He(Sl);var Ll = 0,
	            Tl = function Tl(e, t, n, r, i) {
	          if (!(this instanceof Tl)) return new Tl(e, t, n, r, i);null == n && (n = 0), zi.call(this, [new Pi([new ol("", null)])]), this.first = n, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = n;var o = W(n, 0);this.sel = Rr(o), this.history = new Jr(null), this.id = ++Ll, this.modeOption = t, this.lineSep = r, this.direction = "rtl" == i ? "rtl" : "ltr", this.extend = !1, "string" == typeof e && (e = this.splitLines(e)), Vr(this, { from: o, to: o, text: e }), yi(this, Rr(o), Wa);
	        };Tl.prototype = x(zi.prototype, { constructor: Tl, iter: function iter(e, t, n) {
	            n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e);
	          }, insert: function insert(e, t) {
	            for (var n = 0, r = 0; r < t.length; ++r) {
	              n += t[r].height;
	            }this.insertInner(e - this.first, t, n);
	          }, remove: function remove(e, t) {
	            this.removeInner(e - this.first, t);
	          }, getValue: function getValue(e) {
	            var t = A(this, this.first, this.first + this.size);return !1 === e ? t : t.join(e || this.lineSeparator());
	          }, setValue: pr(function (e) {
	            var t = W(this.first, 0),
	                n = this.first + this.size - 1;Ni(this, { from: t, to: W(n, M(this, n).text.length), text: this.splitLines(e), origin: "setValue", full: !0 }, !0), this.cm && $n(this.cm, 0, 0), yi(this, Rr(t), Wa);
	          }), replaceRange: function replaceRange(e, t, n, r) {
	            Hi(this, e, t = j(this, t), n = n ? j(this, n) : t, r);
	          }, getRange: function getRange(e, t, n) {
	            var r = N(this, j(this, e), j(this, t));return !1 === n ? r : r.join(n || this.lineSeparator());
	          }, getLine: function getLine(e) {
	            var t = this.getLineHandle(e);return t && t.text;
	          }, getLineHandle: function getLineHandle(e) {
	            if (D(this, e)) return M(this, e);
	          }, getLineNumber: function getLineNumber(e) {
	            return O(e);
	          }, getLineHandleVisualStart: function getLineHandleVisualStart(e) {
	            return "number" == typeof e && (e = M(this, e)), he(e);
	          }, lineCount: function lineCount() {
	            return this.size;
	          }, firstLine: function firstLine() {
	            return this.first;
	          }, lastLine: function lastLine() {
	            return this.first + this.size - 1;
	          }, clipPos: function clipPos(e) {
	            return j(this, e);
	          }, getCursor: function getCursor(e) {
	            var t = this.sel.primary();return null == e || "head" == e ? t.head : "anchor" == e ? t.anchor : "end" == e || "to" == e || !1 === e ? t.to() : t.from();
	          }, listSelections: function listSelections() {
	            return this.sel.ranges;
	          }, somethingSelected: function somethingSelected() {
	            return this.sel.somethingSelected();
	          }, setCursor: pr(function (e, t, n) {
	            mi(this, j(this, "number" == typeof e ? W(e, t || 0) : e), null, n);
	          }), setSelection: pr(function (e, t, n) {
	            mi(this, j(this, e), j(this, t || e), n);
	          }), extendSelection: pr(function (e, t, n) {
	            fi(this, j(this, e), t && j(this, t), n);
	          }), extendSelections: pr(function (e, t) {
	            di(this, U(this, e), t);
	          }), extendSelectionsBy: pr(function (e, t) {
	            di(this, U(this, g(this.sel.ranges, e)), t);
	          }), setSelections: pr(function (e, t, n) {
	            var r = this;if (e.length) {
	              for (var i = [], o = 0; o < e.length; o++) {
	                i[o] = new bl(j(r, e[o].anchor), j(r, e[o].head));
	              }null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), yi(this, Fr(i, t), n);
	            }
	          }), addSelection: pr(function (e, t, n) {
	            var r = this.sel.ranges.slice(0);r.push(new bl(j(this, e), j(this, t || e))), yi(this, Fr(r, r.length - 1), n);
	          }), getSelection: function getSelection(e) {
	            for (var t, n = this, r = this.sel.ranges, i = 0; i < r.length; i++) {
	              var o = N(n, r[i].from(), r[i].to());t = t ? t.concat(o) : o;
	            }return !1 === e ? t : t.join(e || this.lineSeparator());
	          }, getSelections: function getSelections(e) {
	            for (var t = this, n = [], r = this.sel.ranges, i = 0; i < r.length; i++) {
	              var o = N(t, r[i].from(), r[i].to());!1 !== e && (o = o.join(e || t.lineSeparator())), n[i] = o;
	            }return n;
	          }, replaceSelection: function replaceSelection(e, t, n) {
	            for (var r = [], i = 0; i < this.sel.ranges.length; i++) {
	              r[i] = e;
	            }this.replaceSelections(r, t, n || "+input");
	          }, replaceSelections: pr(function (e, t, n) {
	            for (var r = this, i = [], o = this.sel, a = 0; a < o.ranges.length; a++) {
	              var l = o.ranges[a];i[a] = { from: l.from(), to: l.to(), text: r.splitLines(e[a]), origin: n };
	            }for (var s = t && "end" != t && qr(this, i, t), u = i.length - 1; u >= 0; u--) {
	              Ni(r, i[u]);
	            }s ? vi(this, s) : this.cm && Gn(this.cm);
	          }), undo: pr(function () {
	            Ei(this, "undo");
	          }), redo: pr(function () {
	            Ei(this, "redo");
	          }), undoSelection: pr(function () {
	            Ei(this, "undo", !0);
	          }), redoSelection: pr(function () {
	            Ei(this, "redo", !0);
	          }), setExtending: function setExtending(e) {
	            this.extend = e;
	          }, getExtending: function getExtending() {
	            return this.extend;
	          }, historySize: function historySize() {
	            for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++) {
	              e.done[r].ranges || ++t;
	            }for (var i = 0; i < e.undone.length; i++) {
	              e.undone[i].ranges || ++n;
	            }return { undo: t, redo: n };
	          }, clearHistory: function clearHistory() {
	            this.history = new Jr(this.history.maxGeneration);
	          }, markClean: function markClean() {
	            this.cleanGeneration = this.changeGeneration(!0);
	          }, changeGeneration: function changeGeneration(e) {
	            return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation;
	          }, isClean: function isClean(e) {
	            return this.history.generation == (e || this.cleanGeneration);
	          }, getHistory: function getHistory() {
	            return { done: ci(this.history.done), undone: ci(this.history.undone) };
	          }, setHistory: function setHistory(e) {
	            var t = this.history = new Jr(this.history.maxGeneration);t.done = ci(e.done.slice(0), null, !0), t.undone = ci(e.undone.slice(0), null, !0);
	          }, setGutterMarker: pr(function (e, t, n) {
	            return Ri(this, e, "gutter", function (e) {
	              var r = e.gutterMarkers || (e.gutterMarkers = {});return r[t] = n, !n && k(r) && (e.gutterMarkers = null), !0;
	            });
	          }), clearGutter: pr(function (e) {
	            var t = this;this.iter(function (n) {
	              n.gutterMarkers && n.gutterMarkers[e] && Ri(t, n, "gutter", function () {
	                return n.gutterMarkers[e] = null, k(n.gutterMarkers) && (n.gutterMarkers = null), !0;
	              });
	            });
	          }), lineInfo: function lineInfo(e) {
	            var t;if ("number" == typeof e) {
	              if (!D(this, e)) return null;if (t = e, !(e = M(this, e))) return null;
	            } else if (null == (t = O(e))) return null;return { line: t, handle: e, text: e.text, gutterMarkers: e.gutterMarkers, textClass: e.textClass, bgClass: e.bgClass, wrapClass: e.wrapClass, widgets: e.widgets };
	          }, addLineClass: pr(function (t, n, r) {
	            return Ri(this, t, "gutter" == n ? "gutter" : "class", function (t) {
	              var i = "text" == n ? "textClass" : "background" == n ? "bgClass" : "gutter" == n ? "gutterClass" : "wrapClass";if (t[i]) {
	                if (e(r).test(t[i])) return !1;t[i] += " " + r;
	              } else t[i] = r;return !0;
	            });
	          }), removeLineClass: pr(function (t, n, r) {
	            return Ri(this, t, "gutter" == n ? "gutter" : "class", function (t) {
	              var i = "text" == n ? "textClass" : "background" == n ? "bgClass" : "gutter" == n ? "gutterClass" : "wrapClass",
	                  o = t[i];if (!o) return !1;if (null == r) t[i] = null;else {
	                var a = o.match(e(r));if (!a) return !1;var l = a.index + a[0].length;t[i] = o.slice(0, a.index) + (a.index && l != o.length ? " " : "") + o.slice(l) || null;
	              }return !0;
	            });
	          }), addLineWidget: pr(function (e, t, n) {
	            return ji(this, e, t, n);
	          }), removeLineWidget: function removeLineWidget(e) {
	            e.clear();
	          }, markText: function markText(e, t, n) {
	            return qi(this, j(this, e), j(this, t), n, n && n.type || "range");
	          }, setBookmark: function setBookmark(e, t) {
	            var n = { replacedWith: t && (null == t.nodeType ? t.widget : t), insertLeft: t && t.insertLeft, clearWhenEmpty: !1, shared: t && t.shared, handleMouseEvents: t && t.handleMouseEvents };return e = j(this, e), qi(this, e, e, n, "bookmark");
	          }, findMarksAt: function findMarksAt(e) {
	            var t = [],
	                n = M(this, (e = j(this, e)).line).markedSpans;if (n) for (var r = 0; r < n.length; ++r) {
	              var i = n[r];(null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker);
	            }return t;
	          }, findMarks: function findMarks(e, t, n) {
	            e = j(this, e), t = j(this, t);var r = [],
	                i = e.line;return this.iter(e.line, t.line + 1, function (o) {
	              var a = o.markedSpans;if (a) for (var l = 0; l < a.length; l++) {
	                var s = a[l];null != s.to && i == e.line && e.ch >= s.to || null == s.from && i != e.line || null != s.from && i == t.line && s.from >= t.ch || n && !n(s.marker) || r.push(s.marker.parent || s.marker);
	              }++i;
	            }), r;
	          }, getAllMarks: function getAllMarks() {
	            var e = [];return this.iter(function (t) {
	              var n = t.markedSpans;if (n) for (var r = 0; r < n.length; ++r) {
	                null != n[r].from && e.push(n[r].marker);
	              }
	            }), e;
	          }, posFromIndex: function posFromIndex(e) {
	            var t,
	                n = this.first,
	                r = this.lineSeparator().length;return this.iter(function (i) {
	              var o = i.text.length + r;if (o > e) return t = e, !0;e -= o, ++n;
	            }), j(this, W(n, t));
	          }, indexFromPos: function indexFromPos(e) {
	            var t = (e = j(this, e)).ch;if (e.line < this.first || e.ch < 0) return 0;var n = this.lineSeparator().length;return this.iter(this.first, e.line, function (e) {
	              t += e.text.length + n;
	            }), t;
	          }, copy: function copy(e) {
	            var t = new Tl(A(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t;
	          }, linkedDoc: function linkedDoc(e) {
	            e || (e = {});var t = this.first,
	                n = this.first + this.size;null != e.from && e.from > t && (t = e.from), null != e.to && e.to < n && (n = e.to);var r = new Tl(A(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction);return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({ doc: r, sharedHist: e.sharedHist }), r.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }], $i(r, Gi(this)), r;
	          }, unlinkDoc: function unlinkDoc(e) {
	            var t = this;if (e instanceof Po && (e = e.doc), this.linked) for (var n = 0; n < this.linked.length; ++n) {
	              if (t.linked[n].doc == e) {
	                t.linked.splice(n, 1), e.unlinkDoc(t), Vi(Gi(t));break;
	              }
	            }if (e.history == this.history) {
	              var r = [e.id];Xr(e, function (e) {
	                return r.push(e.id);
	              }, !0), e.history = new Jr(null), e.history.done = ci(this.history.done, r), e.history.undone = ci(this.history.undone, r);
	            }
	          }, iterLinkedDocs: function iterLinkedDocs(e) {
	            Xr(this, e);
	          }, getMode: function getMode() {
	            return this.mode;
	          }, getEditor: function getEditor() {
	            return this.cm;
	          }, splitLines: function splitLines(e) {
	            return this.lineSep ? e.split(this.lineSep) : Xa(e);
	          }, lineSeparator: function lineSeparator() {
	            return this.lineSep || "\n";
	          }, setDirection: pr(function (e) {
	            "rtl" != e && (e = "ltr"), e != this.direction && (this.direction = e, this.iter(function (e) {
	              return e.order = null;
	            }), this.cm && Zr(this.cm));
	          }) }), Tl.prototype.eachLine = Tl.prototype.iter;for (var Ml = 0, Nl = !1, Al = { 3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert", 46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod", 106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 127: "Delete", 173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete", 63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert" }, El = 0; El < 10; El++) {
	          Al[El + 48] = Al[El + 96] = String(El);
	        }for (var Ol = 65; Ol <= 90; Ol++) {
	          Al[Ol] = String.fromCharCode(Ol);
	        }for (var Il = 1; Il <= 12; Il++) {
	          Al[Il + 111] = Al[Il + 63235] = "F" + Il;
	        }var Dl = {};Dl.basic = { Left: "goCharLeft", Right: "goCharRight", Up: "goLineUp", Down: "goLineDown", End: "goLineEnd", Home: "goLineStartSmart", PageUp: "goPageUp", PageDown: "goPageDown", Delete: "delCharAfter", Backspace: "delCharBefore", "Shift-Backspace": "delCharBefore", Tab: "defaultTab", "Shift-Tab": "indentAuto", Enter: "newlineAndIndent", Insert: "toggleOverwrite", Esc: "singleSelection" }, Dl.pcDefault = { "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo", "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown", "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd", "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find", "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll", "Ctrl-[": "indentLess", "Ctrl-]": "indentMore", "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection", fallthrough: "basic" }, Dl.emacsy = { "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown", "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd", "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore", "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars", "Ctrl-O": "openLine" }, Dl.macDefault = { "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo", "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft", "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore", "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find", "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll", "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight", "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd", fallthrough: ["basic", "emacsy"] }, Dl.default = wa ? Dl.macDefault : Dl.pcDefault;var Hl = { selectAll: Ti, singleSelection: function singleSelection(e) {
	            return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), Wa);
	          }, killLine: function killLine(e) {
	            return uo(e, function (t) {
	              if (t.empty()) {
	                var n = M(e.doc, t.head.line).text.length;return t.head.ch == n && t.head.line < e.lastLine() ? { from: t.head, to: W(t.head.line + 1, 0) } : { from: t.head, to: W(t.head.line, n) };
	              }return { from: t.from(), to: t.to() };
	            });
	          }, deleteLine: function deleteLine(e) {
	            return uo(e, function (t) {
	              return { from: W(t.from().line, 0), to: j(e.doc, W(t.to().line + 1, 0)) };
	            });
	          }, delLineLeft: function delLineLeft(e) {
	            return uo(e, function (e) {
	              return { from: W(e.from().line, 0), to: e.from() };
	            });
	          }, delWrappedLineLeft: function delWrappedLineLeft(e) {
	            return uo(e, function (t) {
	              var n = e.charCoords(t.head, "div").top + 5;return { from: e.coordsChar({ left: 0, top: n }, "div"), to: t.from() };
	            });
	          }, delWrappedLineRight: function delWrappedLineRight(e) {
	            return uo(e, function (t) {
	              var n = e.charCoords(t.head, "div").top + 5,
	                  r = e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, "div");return { from: t.from(), to: r };
	            });
	          }, undo: function undo(e) {
	            return e.undo();
	          }, redo: function redo(e) {
	            return e.redo();
	          }, undoSelection: function undoSelection(e) {
	            return e.undoSelection();
	          }, redoSelection: function redoSelection(e) {
	            return e.redoSelection();
	          }, goDocStart: function goDocStart(e) {
	            return e.extendSelection(W(e.firstLine(), 0));
	          }, goDocEnd: function goDocEnd(e) {
	            return e.extendSelection(W(e.lastLine()));
	          }, goLineStart: function goLineStart(e) {
	            return e.extendSelectionsBy(function (t) {
	              return co(e, t.head.line);
	            }, { origin: "+move", bias: 1 });
	          }, goLineStartSmart: function goLineStartSmart(e) {
	            return e.extendSelectionsBy(function (t) {
	              return fo(e, t.head);
	            }, { origin: "+move", bias: 1 });
	          }, goLineEnd: function goLineEnd(e) {
	            return e.extendSelectionsBy(function (t) {
	              return ho(e, t.head.line);
	            }, { origin: "+move", bias: -1 });
	          }, goLineRight: function goLineRight(e) {
	            return e.extendSelectionsBy(function (t) {
	              var n = e.charCoords(t.head, "div").top + 5;return e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, "div");
	            }, Fa);
	          }, goLineLeft: function goLineLeft(e) {
	            return e.extendSelectionsBy(function (t) {
	              var n = e.charCoords(t.head, "div").top + 5;return e.coordsChar({ left: 0, top: n }, "div");
	            }, Fa);
	          }, goLineLeftSmart: function goLineLeftSmart(e) {
	            return e.extendSelectionsBy(function (t) {
	              var n = e.charCoords(t.head, "div").top + 5,
	                  r = e.coordsChar({ left: 0, top: n }, "div");return r.ch < e.getLine(r.line).search(/\S/) ? fo(e, t.head) : r;
	            }, Fa);
	          }, goLineUp: function goLineUp(e) {
	            return e.moveV(-1, "line");
	          }, goLineDown: function goLineDown(e) {
	            return e.moveV(1, "line");
	          }, goPageUp: function goPageUp(e) {
	            return e.moveV(-1, "page");
	          }, goPageDown: function goPageDown(e) {
	            return e.moveV(1, "page");
	          }, goCharLeft: function goCharLeft(e) {
	            return e.moveH(-1, "char");
	          }, goCharRight: function goCharRight(e) {
	            return e.moveH(1, "char");
	          }, goColumnLeft: function goColumnLeft(e) {
	            return e.moveH(-1, "column");
	          }, goColumnRight: function goColumnRight(e) {
	            return e.moveH(1, "column");
	          }, goWordLeft: function goWordLeft(e) {
	            return e.moveH(-1, "word");
	          }, goGroupRight: function goGroupRight(e) {
	            return e.moveH(1, "group");
	          }, goGroupLeft: function goGroupLeft(e) {
	            return e.moveH(-1, "group");
	          }, goWordRight: function goWordRight(e) {
	            return e.moveH(1, "word");
	          }, delCharBefore: function delCharBefore(e) {
	            return e.deleteH(-1, "char");
	          }, delCharAfter: function delCharAfter(e) {
	            return e.deleteH(1, "char");
	          }, delWordBefore: function delWordBefore(e) {
	            return e.deleteH(-1, "word");
	          }, delWordAfter: function delWordAfter(e) {
	            return e.deleteH(1, "word");
	          }, delGroupBefore: function delGroupBefore(e) {
	            return e.deleteH(-1, "group");
	          }, delGroupAfter: function delGroupAfter(e) {
	            return e.deleteH(1, "group");
	          }, indentAuto: function indentAuto(e) {
	            return e.indentSelection("smart");
	          }, indentMore: function indentMore(e) {
	            return e.indentSelection("add");
	          }, indentLess: function indentLess(e) {
	            return e.indentSelection("subtract");
	          }, insertTab: function insertTab(e) {
	            return e.replaceSelection("\t");
	          }, insertSoftTab: function insertSoftTab(e) {
	            for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
	              var o = n[i].from(),
	                  a = h(e.getLine(o.line), o.ch, r);t.push(p(r - a % r));
	            }e.replaceSelections(t);
	          }, defaultTab: function defaultTab(e) {
	            e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab");
	          }, transposeChars: function transposeChars(e) {
	            return hr(e, function () {
	              for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++) {
	                if (t[r].empty()) {
	                  var i = t[r].head,
	                      o = M(e.doc, i.line).text;if (o) if (i.ch == o.length && (i = new W(i.line, i.ch - 1)), i.ch > 0) i = new W(i.line, i.ch + 1), e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), W(i.line, i.ch - 2), i, "+transpose");else if (i.line > e.doc.first) {
	                    var a = M(e.doc, i.line - 1).text;a && (i = new W(i.line, 1), e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + a.charAt(a.length - 1), W(i.line - 1, a.length - 1), i, "+transpose"));
	                  }n.push(new bl(i, i));
	                }
	              }e.setSelections(n);
	            });
	          }, newlineAndIndent: function newlineAndIndent(e) {
	            return hr(e, function () {
	              for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--) {
	                e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, "+input");
	              }t = e.listSelections();for (var r = 0; r < t.length; r++) {
	                e.indentLine(t[r].from().line, null, !0);
	              }Gn(e);
	            });
	          }, openLine: function openLine(e) {
	            return e.replaceSelection("\n", "start");
	          }, toggleOverwrite: function toggleOverwrite(e) {
	            return e.toggleOverwrite();
	          } },
	            Wl = new Ea(),
	            Bl = null,
	            Fl = function Fl(e, t, n) {
	          this.time = e, this.pos = t, this.button = n;
	        };Fl.prototype.compare = function (e, t, n) {
	          return this.time + 400 > e && 0 == B(t, this.pos) && n == this.button;
	        };var Rl,
	            Pl,
	            zl = { toString: function toString() {
	            return "CodeMirror.Init";
	          } },
	            _l = {},
	            jl = {};Po.defaults = _l, Po.optionHandlers = jl;var ql = [];Po.defineInitHook = function (e) {
	          return ql.push(e);
	        };var Ul = null,
	            Gl = function Gl(e) {
	          this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new Ea(), this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null;
	        };Gl.prototype.init = function (e) {
	          function t(e) {
	            if (!Oe(i, e)) {
	              if (i.somethingSelected()) jo({ lineWise: !1, text: i.getSelections() }), "cut" == e.type && i.replaceSelection("", null, "cut");else {
	                if (!i.options.lineWiseCopyCut) return;var t = $o(i);jo({ lineWise: !0, text: t.text }), "cut" == e.type && i.operation(function () {
	                  i.setSelections(t.ranges, 0, Wa), i.replaceSelection("", null, "cut");
	                });
	              }if (e.clipboardData) {
	                e.clipboardData.clearData();var n = Ul.text.join("\n");if (e.clipboardData.setData("Text", n), e.clipboardData.getData("Text") == n) return void e.preventDefault();
	              }var a = Xo(),
	                  l = a.firstChild;i.display.lineSpace.insertBefore(a, i.display.lineSpace.firstChild), l.value = Ul.text.join("\n");var s = document.activeElement;Aa(l), setTimeout(function () {
	                i.display.lineSpace.removeChild(a), s.focus(), s == o && r.showPrimarySelection();
	              }, 50);
	            }
	          }var n = this,
	              r = this,
	              i = r.cm,
	              o = r.div = e.lineDiv;Vo(o, i.options.spellcheck), $a(o, "paste", function (e) {
	            Oe(i, e) || Uo(e, i) || ca <= 11 && setTimeout(fr(i, function () {
	              return n.updateFromDOM();
	            }), 20);
	          }), $a(o, "compositionstart", function (e) {
	            n.composing = { data: e.data, done: !1 };
	          }), $a(o, "compositionupdate", function (e) {
	            n.composing || (n.composing = { data: e.data, done: !1 });
	          }), $a(o, "compositionend", function (e) {
	            n.composing && (e.data != n.composing.data && n.readFromDOMSoon(), n.composing.done = !0);
	          }), $a(o, "touchstart", function () {
	            return r.forceCompositionEnd();
	          }), $a(o, "input", function () {
	            n.composing || n.readFromDOMSoon();
	          }), $a(o, "copy", t), $a(o, "cut", t);
	        }, Gl.prototype.prepareSelection = function () {
	          var e = Mn(this.cm, !1);return e.focus = this.cm.state.focused, e;
	        }, Gl.prototype.showSelection = function (e, t) {
	          e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e));
	        }, Gl.prototype.showPrimarySelection = function () {
	          var e = window.getSelection(),
	              t = this.cm,
	              n = t.doc.sel.primary(),
	              r = n.from(),
	              i = n.to();if (t.display.viewTo == t.display.viewFrom || r.line >= t.display.viewTo || i.line < t.display.viewFrom) e.removeAllRanges();else {
	            var o = ta(t, e.anchorNode, e.anchorOffset),
	                a = ta(t, e.focusNode, e.focusOffset);if (!o || o.bad || !a || a.bad || 0 != B(z(o, a), r) || 0 != B(P(o, a), i)) {
	              var l = t.display.view,
	                  s = r.line >= t.display.viewFrom && Zo(t, r) || { node: l[0].measure.map[2], offset: 0 },
	                  u = i.line < t.display.viewTo && Zo(t, i);if (!u) {
	                var c = l[l.length - 1].measure,
	                    h = c.maps ? c.maps[c.maps.length - 1] : c.map;u = { node: h[h.length - 1], offset: h[h.length - 2] - h[h.length - 3] };
	              }if (s && u) {
	                var f,
	                    d = e.rangeCount && e.getRangeAt(0);try {
	                  f = La(s.node, s.offset, u.offset, u.node);
	                } catch (e) {}f && (!oa && t.state.focused ? (e.collapse(s.node, s.offset), f.collapsed || (e.removeAllRanges(), e.addRange(f))) : (e.removeAllRanges(), e.addRange(f)), d && null == e.anchorNode ? e.addRange(d) : oa && this.startGracePeriod()), this.rememberSelection();
	              } else e.removeAllRanges();
	            }
	          }
	        }, Gl.prototype.startGracePeriod = function () {
	          var e = this;clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function () {
	            e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function () {
	              return e.cm.curOp.selectionChanged = !0;
	            });
	          }, 20);
	        }, Gl.prototype.showMultipleSelections = function (e) {
	          n(this.cm.display.cursorDiv, e.cursors), n(this.cm.display.selectionDiv, e.selection);
	        }, Gl.prototype.rememberSelection = function () {
	          var e = window.getSelection();this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset;
	        }, Gl.prototype.selectionInEditor = function () {
	          var e = window.getSelection();if (!e.rangeCount) return !1;var t = e.getRangeAt(0).commonAncestorContainer;return o(this.div, t);
	        }, Gl.prototype.focus = function () {
	          "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() || this.showSelection(this.prepareSelection(), !0), this.div.focus());
	        }, Gl.prototype.blur = function () {
	          this.div.blur();
	        }, Gl.prototype.getField = function () {
	          return this.div;
	        }, Gl.prototype.supportsTouch = function () {
	          return !0;
	        }, Gl.prototype.receivedFocus = function () {
	          function e() {
	            t.cm.state.focused && (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, e));
	          }var t = this;this.selectionInEditor() ? this.pollSelection() : hr(this.cm, function () {
	            return t.cm.curOp.selectionChanged = !0;
	          }), this.polling.set(this.cm.options.pollInterval, e);
	        }, Gl.prototype.selectionChanged = function () {
	          var e = window.getSelection();return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset;
	        }, Gl.prototype.pollSelection = function () {
	          if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
	            var e = window.getSelection(),
	                t = this.cm;if (xa && da && this.cm.options.gutters.length && Jo(e.anchorNode)) return this.cm.triggerOnKeyDown({ type: "keydown", keyCode: 8, preventDefault: Math.abs }), this.blur(), void this.focus();if (!this.composing) {
	              this.rememberSelection();var n = ta(t, e.anchorNode, e.anchorOffset),
	                  r = ta(t, e.focusNode, e.focusOffset);n && r && hr(t, function () {
	                yi(t.doc, Rr(n, r), Wa), (n.bad || r.bad) && (t.curOp.selectionChanged = !0);
	              });
	            }
	          }
	        }, Gl.prototype.pollContent = function () {
	          null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);var e = this.cm,
	              t = e.display,
	              n = e.doc.sel.primary(),
	              r = n.from(),
	              i = n.to();if (0 == r.ch && r.line > e.firstLine() && (r = W(r.line - 1, M(e.doc, r.line - 1).length)), i.ch == M(e.doc, i.line).text.length && i.line < e.lastLine() && (i = W(i.line + 1, 0)), r.line < t.viewFrom || i.line > t.viewTo - 1) return !1;var o, a, l;r.line == t.viewFrom || 0 == (o = Ln(e, r.line)) ? (a = O(t.view[0].line), l = t.view[0].node) : (a = O(t.view[o].line), l = t.view[o - 1].node.nextSibling);var s,
	              u,
	              c = Ln(e, i.line);if (c == t.view.length - 1 ? (s = t.viewTo - 1, u = t.lineDiv.lastChild) : (s = O(t.view[c + 1].line) - 1, u = t.view[c + 1].node.previousSibling), !l) return !1;for (var h = e.doc.splitLines(ea(e, l, u, a, s)), f = N(e.doc, W(a, 0), W(s, M(e.doc, s).text.length)); h.length > 1 && f.length > 1;) {
	            if (m(h) == m(f)) h.pop(), f.pop(), s--;else {
	              if (h[0] != f[0]) break;h.shift(), f.shift(), a++;
	            }
	          }for (var d = 0, p = 0, g = h[0], v = f[0], y = Math.min(g.length, v.length); d < y && g.charCodeAt(d) == v.charCodeAt(d);) {
	            ++d;
	          }for (var x = m(h), b = m(f), w = Math.min(x.length - (1 == h.length ? d : 0), b.length - (1 == f.length ? d : 0)); p < w && x.charCodeAt(x.length - p - 1) == b.charCodeAt(b.length - p - 1);) {
	            ++p;
	          }if (1 == h.length && 1 == f.length && a == r.line) for (; d && d > r.ch && x.charCodeAt(x.length - p - 1) == b.charCodeAt(b.length - p - 1);) {
	            d--, p++;
	          }h[h.length - 1] = x.slice(0, x.length - p).replace(/^\u200b+/, ""), h[0] = h[0].slice(d).replace(/\u200b+$/, "");var k = W(a, d),
	              C = W(s, f.length ? m(f).length - p : 0);return h.length > 1 || h[0] || B(k, C) ? (Hi(e.doc, h, k, C, "+input"), !0) : void 0;
	        }, Gl.prototype.ensurePolled = function () {
	          this.forceCompositionEnd();
	        }, Gl.prototype.reset = function () {
	          this.forceCompositionEnd();
	        }, Gl.prototype.forceCompositionEnd = function () {
	          this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus());
	        }, Gl.prototype.readFromDOMSoon = function () {
	          var e = this;null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function () {
	            if (e.readDOMTimeout = null, e.composing) {
	              if (!e.composing.done) return;e.composing = null;
	            }e.updateFromDOM();
	          }, 80));
	        }, Gl.prototype.updateFromDOM = function () {
	          var e = this;!this.cm.isReadOnly() && this.pollContent() || hr(this.cm, function () {
	            return mr(e.cm);
	          });
	        }, Gl.prototype.setUneditable = function (e) {
	          e.contentEditable = "false";
	        }, Gl.prototype.onKeyPress = function (e) {
	          0 != e.charCode && (e.preventDefault(), this.cm.isReadOnly() || fr(this.cm, qo)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0));
	        }, Gl.prototype.readOnlyChanged = function (e) {
	          this.div.contentEditable = String("nocursor" != e);
	        }, Gl.prototype.onContextMenu = function () {}, Gl.prototype.resetPosition = function () {}, Gl.prototype.needsContentAttribute = !0;var $l = function $l(e) {
	          this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new Ea(), this.inaccurateSelection = !1, this.hasSelection = !1, this.composing = null;
	        };$l.prototype.init = function (e) {
	          function t(e) {
	            if (!Oe(i, e)) {
	              if (i.somethingSelected()) jo({ lineWise: !1, text: i.getSelections() }), r.inaccurateSelection && (r.prevInput = "", r.inaccurateSelection = !1, a.value = Ul.text.join("\n"), Aa(a));else {
	                if (!i.options.lineWiseCopyCut) return;var t = $o(i);jo({ lineWise: !0, text: t.text }), "cut" == e.type ? i.setSelections(t.ranges, null, Wa) : (r.prevInput = "", a.value = t.text.join("\n"), Aa(a));
	              }"cut" == e.type && (i.state.cutIncoming = !0);
	            }
	          }var n = this,
	              r = this,
	              i = this.cm,
	              o = this.wrapper = Xo(),
	              a = this.textarea = o.firstChild;e.wrapper.insertBefore(o, e.wrapper.firstChild), ya && (a.style.width = "0px"), $a(a, "input", function () {
	            ua && ca >= 9 && n.hasSelection && (n.hasSelection = null), r.poll();
	          }), $a(a, "paste", function (e) {
	            Oe(i, e) || Uo(e, i) || (i.state.pasteIncoming = !0, r.fastPoll());
	          }), $a(a, "cut", t), $a(a, "copy", t), $a(e.scroller, "paste", function (t) {
	            Rt(e, t) || Oe(i, t) || (i.state.pasteIncoming = !0, r.focus());
	          }), $a(e.lineSpace, "selectstart", function (t) {
	            Rt(e, t) || We(t);
	          }), $a(a, "compositionstart", function () {
	            var e = i.getCursor("from");r.composing && r.composing.range.clear(), r.composing = { start: e, range: i.markText(e, i.getCursor("to"), { className: "CodeMirror-composing" }) };
	          }), $a(a, "compositionend", function () {
	            r.composing && (r.poll(), r.composing.range.clear(), r.composing = null);
	          });
	        }, $l.prototype.prepareSelection = function () {
	          var e = this.cm,
	              t = e.display,
	              n = e.doc,
	              r = Mn(e);if (e.options.moveInputWithCursor) {
	            var i = hn(e, n.sel.primary().head, "div"),
	                o = t.wrapper.getBoundingClientRect(),
	                a = t.lineDiv.getBoundingClientRect();r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + a.top - o.top)), r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + a.left - o.left));
	          }return r;
	        }, $l.prototype.showSelection = function (e) {
	          var t = this.cm.display;n(t.cursorDiv, e.cursors), n(t.selectionDiv, e.selection), null != e.teTop && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px");
	        }, $l.prototype.reset = function (e) {
	          if (!this.contextMenuPending && !this.composing) {
	            var t,
	                n,
	                r = this.cm,
	                i = r.doc;if (r.somethingSelected()) {
	              this.prevInput = "";var o = i.sel.primary(),
	                  a = (t = Ya && (o.to().line - o.from().line > 100 || (n = r.getSelection()).length > 1e3)) ? "-" : n || r.getSelection();this.textarea.value = a, r.state.focused && Aa(this.textarea), ua && ca >= 9 && (this.hasSelection = a);
	            } else e || (this.prevInput = this.textarea.value = "", ua && ca >= 9 && (this.hasSelection = null));this.inaccurateSelection = t;
	          }
	        }, $l.prototype.getField = function () {
	          return this.textarea;
	        }, $l.prototype.supportsTouch = function () {
	          return !1;
	        }, $l.prototype.focus = function () {
	          if ("nocursor" != this.cm.options.readOnly && (!ba || a() != this.textarea)) try {
	            this.textarea.focus();
	          } catch (e) {}
	        }, $l.prototype.blur = function () {
	          this.textarea.blur();
	        }, $l.prototype.resetPosition = function () {
	          this.wrapper.style.top = this.wrapper.style.left = 0;
	        }, $l.prototype.receivedFocus = function () {
	          this.slowPoll();
	        }, $l.prototype.slowPoll = function () {
	          var e = this;this.pollingFast || this.polling.set(this.cm.options.pollInterval, function () {
	            e.poll(), e.cm.state.focused && e.slowPoll();
	          });
	        }, $l.prototype.fastPoll = function () {
	          function e() {
	            n.poll() || t ? (n.pollingFast = !1, n.slowPoll()) : (t = !0, n.polling.set(60, e));
	          }var t = !1,
	              n = this;n.pollingFast = !0, n.polling.set(20, e);
	        }, $l.prototype.poll = function () {
	          var e = this,
	              t = this.cm,
	              n = this.textarea,
	              r = this.prevInput;if (this.contextMenuPending || !t.state.focused || Ka(n) && !r && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1;var i = n.value;if (i == r && !t.somethingSelected()) return !1;if (ua && ca >= 9 && this.hasSelection === i || wa && /[\uf700-\uf7ff]/.test(i)) return t.display.input.reset(), !1;if (t.doc.sel == t.display.selForContextMenu) {
	            var o = i.charCodeAt(0);if (8203 != o || r || (r = "​"), 8666 == o) return this.reset(), this.cm.execCommand("undo");
	          }for (var a = 0, l = Math.min(r.length, i.length); a < l && r.charCodeAt(a) == i.charCodeAt(a);) {
	            ++a;
	          }return hr(t, function () {
	            qo(t, i.slice(a), r.length - a, null, e.composing ? "*compose" : null), i.length > 1e3 || i.indexOf("\n") > -1 ? n.value = e.prevInput = "" : e.prevInput = i, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(e.composing.start, t.getCursor("to"), { className: "CodeMirror-composing" }));
	          }), !0;
	        }, $l.prototype.ensurePolled = function () {
	          this.pollingFast && this.poll() && (this.pollingFast = !1);
	        }, $l.prototype.onKeyPress = function () {
	          ua && ca >= 9 && (this.hasSelection = null), this.fastPoll();
	        }, $l.prototype.onContextMenu = function (e) {
	          function t() {
	            if (null != a.selectionStart) {
	              var e = i.somethingSelected(),
	                  t = "​" + (e ? a.value : "");a.value = "⇚", a.value = t, r.prevInput = e ? "" : "​", a.selectionStart = 1, a.selectionEnd = t.length, o.selForContextMenu = i.doc.sel;
	            }
	          }function n() {
	            if (r.contextMenuPending = !1, r.wrapper.style.cssText = c, a.style.cssText = u, ua && ca < 9 && o.scrollbars.setScrollTop(o.scroller.scrollTop = s), null != a.selectionStart) {
	              (!ua || ua && ca < 9) && t();var e = 0,
	                  n = function n() {
	                o.selForContextMenu == i.doc.sel && 0 == a.selectionStart && a.selectionEnd > 0 && "​" == r.prevInput ? fr(i, Ti)(i) : e++ < 10 ? o.detectingSelectAll = setTimeout(n, 500) : (o.selForContextMenu = null, o.input.reset());
	              };o.detectingSelectAll = setTimeout(n, 200);
	            }
	          }var r = this,
	              i = r.cm,
	              o = i.display,
	              a = r.textarea,
	              l = Sn(i, e),
	              s = o.scroller.scrollTop;if (l && !pa) {
	            i.options.resetSelectionOnContextMenu && -1 == i.doc.sel.contains(l) && fr(i, yi)(i.doc, Rr(l), Wa);var u = a.style.cssText,
	                c = r.wrapper.style.cssText;r.wrapper.style.cssText = "position: absolute";var h = r.wrapper.getBoundingClientRect();a.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - h.top - 5) + "px; left: " + (e.clientX - h.left - 5) + "px;\n      z-index: 1000; background: " + (ua ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";var f;if (ha && (f = window.scrollY), o.input.focus(), ha && window.scrollTo(null, f), o.input.reset(), i.somethingSelected() || (a.value = r.prevInput = " "), r.contextMenuPending = !0, o.selForContextMenu = i.doc.sel, clearTimeout(o.detectingSelectAll), ua && ca >= 9 && t(), Ma) {
	              Re(e);var d = function d() {
	                Ae(window, "mouseup", d), setTimeout(n, 20);
	              };$a(window, "mouseup", d);
	            } else setTimeout(n, 50);
	          }
	        }, $l.prototype.readOnlyChanged = function (e) {
	          e || this.reset(), this.textarea.disabled = "nocursor" == e;
	        }, $l.prototype.setUneditable = function () {}, $l.prototype.needsContentAttribute = !1, function (e) {
	          function t(t, r, i, o) {
	            e.defaults[t] = r, i && (n[t] = o ? function (e, t, n) {
	              n != zl && i(e, t, n);
	            } : i);
	          }var n = e.optionHandlers;e.defineOption = t, e.Init = zl, t("value", "", function (e, t) {
	            return e.setValue(t);
	          }, !0), t("mode", null, function (e, t) {
	            e.doc.modeOption = t, Ur(e);
	          }, !0), t("indentUnit", 2, Ur, !0), t("indentWithTabs", !1), t("smartIndent", !0), t("tabSize", 4, function (e) {
	            Gr(e), on(e), mr(e);
	          }, !0), t("lineSeparator", null, function (e, t) {
	            if (e.doc.lineSep = t, t) {
	              var n = [],
	                  r = e.doc.first;e.doc.iter(function (e) {
	                for (var i = 0;;) {
	                  var o = e.text.indexOf(t, i);if (-1 == o) break;i = o + t.length, n.push(W(r, o));
	                }r++;
	              });for (var i = n.length - 1; i >= 0; i--) {
	                Hi(e.doc, t, n[i], W(n[i].line, n[i].ch + t.length));
	              }
	            }
	          }), t("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, function (e, t, n) {
	            e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g"), n != zl && e.refresh();
	          }), t("specialCharPlaceholder", ft, function (e) {
	            return e.refresh();
	          }, !0), t("electricChars", !0), t("inputStyle", ba ? "contenteditable" : "textarea", function () {
	            throw new Error("inputStyle can not (yet) be changed in a running editor");
	          }, !0), t("spellcheck", !1, function (e, t) {
	            return e.getInputField().spellcheck = t;
	          }, !0), t("rtlMoveVisually", !Ca), t("wholeLineUpdateBefore", !0), t("theme", "default", function (e) {
	            Wo(e), Bo(e);
	          }, !0), t("keyMap", "default", function (e, t, n) {
	            var r = so(t),
	                i = n != zl && so(n);i && i.detach && i.detach(e, r), r.attach && r.attach(e, i || null);
	          }), t("extraKeys", null), t("configureMouse", null), t("lineWrapping", !1, Ro, !0), t("gutters", [], function (e) {
	            Dr(e.options), Bo(e);
	          }, !0), t("fixedGutter", !0, function (e, t) {
	            e.display.gutters.style.left = t ? wn(e.display) + "px" : "0", e.refresh();
	          }, !0), t("coverGutterNextToScrollbar", !1, function (e) {
	            return er(e);
	          }, !0), t("scrollbarStyle", "native", function (e) {
	            nr(e), er(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
	          }, !0), t("lineNumbers", !1, function (e) {
	            Dr(e.options), Bo(e);
	          }, !0), t("firstLineNumber", 1, Bo, !0), t("lineNumberFormatter", function (e) {
	            return e;
	          }, Bo, !0), t("showCursorWhenSelecting", !1, Tn, !0), t("resetSelectionOnContextMenu", !0), t("lineWiseCopyCut", !0), t("pasteLinesPerSelection", !0), t("readOnly", !1, function (e, t) {
	            "nocursor" == t && (Hn(e), e.display.input.blur()), e.display.input.readOnlyChanged(t);
	          }), t("disableInput", !1, function (e, t) {
	            t || e.display.input.reset();
	          }, !0), t("dragDrop", !0, Fo), t("allowDropFileTypes", null), t("cursorBlinkRate", 530), t("cursorScrollMargin", 0), t("cursorHeight", 1, Tn, !0), t("singleCursorHeightPerLine", !0, Tn, !0), t("workTime", 100), t("workDelay", 100), t("flattenSpans", !0, Gr, !0), t("addModeClass", !1, Gr, !0), t("pollInterval", 100), t("undoDepth", 200, function (e, t) {
	            return e.doc.history.undoDepth = t;
	          }), t("historyEventDelay", 1250), t("viewportMargin", 10, function (e) {
	            return e.refresh();
	          }, !0), t("maxHighlightLength", 1e4, Gr, !0), t("moveInputWithCursor", !0, function (e, t) {
	            t || e.display.input.resetPosition();
	          }), t("tabindex", null, function (e, t) {
	            return e.display.input.getField().tabIndex = t || "";
	          }), t("autofocus", null), t("direction", "ltr", function (e, t) {
	            return e.doc.setDirection(t);
	          }, !0);
	        }(Po), function (e) {
	          var t = e.optionHandlers,
	              n = e.helpers = {};e.prototype = { constructor: e, focus: function focus() {
	              window.focus(), this.display.input.focus();
	            }, setOption: function setOption(e, n) {
	              var r = this.options,
	                  i = r[e];r[e] == n && "mode" != e || (r[e] = n, t.hasOwnProperty(e) && fr(this, t[e])(this, n, i), Ee(this, "optionChange", this, e));
	            }, getOption: function getOption(e) {
	              return this.options[e];
	            }, getDoc: function getDoc() {
	              return this.doc;
	            }, addKeyMap: function addKeyMap(e, t) {
	              this.state.keyMaps[t ? "push" : "unshift"](so(e));
	            }, removeKeyMap: function removeKeyMap(e) {
	              for (var t = this.state.keyMaps, n = 0; n < t.length; ++n) {
	                if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0;
	              }
	            }, addOverlay: dr(function (t, n) {
	              var r = t.token ? t : e.getMode(this.options, t);if (r.startState) throw new Error("Overlays may not be stateful.");v(this.state.overlays, { mode: r, modeSpec: t, opaque: n && n.opaque, priority: n && n.priority || 0 }, function (e) {
	                return e.priority;
	              }), this.state.modeGen++, mr(this);
	            }), removeOverlay: dr(function (e) {
	              for (var t = this, n = this.state.overlays, r = 0; r < n.length; ++r) {
	                var i = n[r].modeSpec;if (i == e || "string" == typeof e && i.name == e) return n.splice(r, 1), t.state.modeGen++, void mr(t);
	              }
	            }), indentLine: dr(function (e, t, n) {
	              "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), D(this.doc, e) && _o(this, e, t, n);
	            }), indentSelection: dr(function (e) {
	              for (var t = this, n = this.doc.sel.ranges, r = -1, i = 0; i < n.length; i++) {
	                var o = n[i];if (o.empty()) o.head.line > r && (_o(t, o.head.line, e, !0), r = o.head.line, i == t.doc.sel.primIndex && Gn(t));else {
	                  var a = o.from(),
	                      l = o.to(),
	                      s = Math.max(r, a.line);r = Math.min(t.lastLine(), l.line - (l.ch ? 0 : 1)) + 1;for (var u = s; u < r; ++u) {
	                    _o(t, u, e);
	                  }var c = t.doc.sel.ranges;0 == a.ch && n.length == c.length && c[i].from().ch > 0 && pi(t.doc, i, new bl(a, c[i].to()), Wa);
	                }
	              }
	            }), getTokenAt: function getTokenAt(e, t) {
	              return rt(this, e, t);
	            }, getLineTokens: function getLineTokens(e, t) {
	              return rt(this, W(e), t, !0);
	            }, getTokenTypeAt: function getTokenTypeAt(e) {
	              e = j(this.doc, e);var t,
	                  n = Je(this, M(this.doc, e.line)),
	                  r = 0,
	                  i = (n.length - 1) / 2,
	                  o = e.ch;if (0 == o) t = n[2];else for (;;) {
	                var a = r + i >> 1;if ((a ? n[2 * a - 1] : 0) >= o) i = a;else {
	                  if (!(n[2 * a + 1] < o)) {
	                    t = n[2 * a + 2];break;
	                  }r = a + 1;
	                }
	              }var l = t ? t.indexOf("overlay ") : -1;return l < 0 ? t : 0 == l ? null : t.slice(0, l - 1);
	            }, getModeAt: function getModeAt(t) {
	              var n = this.doc.mode;return n.innerMode ? e.innerMode(n, this.getTokenAt(t).state).mode : n;
	            }, getHelper: function getHelper(e, t) {
	              return this.getHelpers(e, t)[0];
	            }, getHelpers: function getHelpers(e, t) {
	              var r = this,
	                  i = [];if (!n.hasOwnProperty(t)) return i;var o = n[t],
	                  a = this.getModeAt(e);if ("string" == typeof a[t]) o[a[t]] && i.push(o[a[t]]);else if (a[t]) for (var l = 0; l < a[t].length; l++) {
	                var s = o[a[t][l]];s && i.push(s);
	              } else a.helperType && o[a.helperType] ? i.push(o[a.helperType]) : o[a.name] && i.push(o[a.name]);for (var u = 0; u < o._global.length; u++) {
	                var c = o._global[u];c.pred(a, r) && -1 == f(i, c.val) && i.push(c.val);
	              }return i;
	            }, getStateAfter: function getStateAfter(e, t) {
	              var n = this.doc;return e = _(n, null == e ? n.first + n.size - 1 : e), Qe(this, e + 1, t).state;
	            }, cursorCoords: function cursorCoords(e, t) {
	              var n,
	                  r = this.doc.sel.primary();return n = null == e ? r.head : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? j(this.doc, e) : e ? r.from() : r.to(), hn(this, n, t || "page");
	            }, charCoords: function charCoords(e, t) {
	              return cn(this, j(this.doc, e), t || "page");
	            }, coordsChar: function coordsChar(e, t) {
	              return e = un(this, e, t || "page"), pn(this, e.left, e.top);
	            }, lineAtHeight: function lineAtHeight(e, t) {
	              return e = un(this, { top: e, left: 0 }, t || "page").top, I(this.doc, e + this.display.viewOffset);
	            }, heightAtLine: function heightAtLine(e, t, n) {
	              var r,
	                  i = !1;if ("number" == typeof e) {
	                var o = this.doc.first + this.doc.size - 1;e < this.doc.first ? e = this.doc.first : e > o && (e = o, i = !0), r = M(this.doc, e);
	              } else r = e;return sn(this, r, { top: 0, left: 0 }, t || "page", n || i).top + (i ? this.doc.height - ye(r) : 0);
	            }, defaultTextHeight: function defaultTextHeight() {
	              return yn(this.display);
	            }, defaultCharWidth: function defaultCharWidth() {
	              return xn(this.display);
	            }, getViewport: function getViewport() {
	              return { from: this.display.viewFrom, to: this.display.viewTo };
	            }, addWidget: function addWidget(e, t, n, r, i) {
	              var o = this.display,
	                  a = (e = hn(this, j(this.doc, e))).bottom,
	                  l = e.left;if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), o.sizer.appendChild(t), "over" == r) a = e.top;else if ("above" == r || "near" == r) {
	                var s = Math.max(o.wrapper.clientHeight, this.doc.height),
	                    u = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);("above" == r || e.bottom + t.offsetHeight > s) && e.top > t.offsetHeight ? a = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= s && (a = e.bottom), l + t.offsetWidth > u && (l = u - t.offsetWidth);
	              }t.style.top = a + "px", t.style.left = t.style.right = "", "right" == i ? (l = o.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? l = 0 : "middle" == i && (l = (o.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = l + "px"), n && jn(this, { left: l, top: a, right: l + t.offsetWidth, bottom: a + t.offsetHeight });
	            }, triggerOnKeyDown: dr(xo), triggerOnKeyPress: dr(ko), triggerOnKeyUp: wo, triggerOnMouseDown: dr(So), execCommand: function execCommand(e) {
	              if (Hl.hasOwnProperty(e)) return Hl[e].call(null, this);
	            }, triggerElectric: dr(function (e) {
	              Go(this, e);
	            }), findPosH: function findPosH(e, t, n, r) {
	              var i = this,
	                  o = 1;t < 0 && (o = -1, t = -t);for (var a = j(this.doc, e), l = 0; l < t && !(a = Ko(i.doc, a, o, n, r)).hitSide; ++l) {}return a;
	            }, moveH: dr(function (e, t) {
	              var n = this;this.extendSelectionsBy(function (r) {
	                return n.display.shift || n.doc.extend || r.empty() ? Ko(n.doc, r.head, e, t, n.options.rtlMoveVisually) : e < 0 ? r.from() : r.to();
	              }, Fa);
	            }), deleteH: dr(function (e, t) {
	              var n = this.doc.sel,
	                  r = this.doc;n.somethingSelected() ? r.replaceSelection("", null, "+delete") : uo(this, function (n) {
	                var i = Ko(r, n.head, e, t, !1);return e < 0 ? { from: i, to: n.head } : { from: n.head, to: i };
	              });
	            }), findPosV: function findPosV(e, t, n, r) {
	              var i = this,
	                  o = 1,
	                  a = r;t < 0 && (o = -1, t = -t);for (var l = j(this.doc, e), s = 0; s < t; ++s) {
	                var u = hn(i, l, "div");if (null == a ? a = u.left : u.left = a, (l = Yo(i, u, o, n)).hitSide) break;
	              }return l;
	            }, moveV: dr(function (e, t) {
	              var n = this,
	                  r = this.doc,
	                  i = [],
	                  o = !this.display.shift && !r.extend && r.sel.somethingSelected();if (r.extendSelectionsBy(function (a) {
	                if (o) return e < 0 ? a.from() : a.to();var l = hn(n, a.head, "div");null != a.goalColumn && (l.left = a.goalColumn), i.push(l.left);var s = Yo(n, l, e, t);return "page" == t && a == r.sel.primary() && Un(n, cn(n, s, "div").top - l.top), s;
	              }, Fa), i.length) for (var a = 0; a < r.sel.ranges.length; a++) {
	                r.sel.ranges[a].goalColumn = i[a];
	              }
	            }), findWordAt: function findWordAt(e) {
	              var t = M(this.doc, e.line).text,
	                  n = e.ch,
	                  r = e.ch;if (t) {
	                var i = this.getHelper(e, "wordChars");"before" != e.sticky && r != t.length || !n ? ++r : --n;for (var o = t.charAt(n), a = w(o, i) ? function (e) {
	                  return w(e, i);
	                } : /\s/.test(o) ? function (e) {
	                  return (/\s/.test(e)
	                  );
	                } : function (e) {
	                  return !/\s/.test(e) && !w(e);
	                }; n > 0 && a(t.charAt(n - 1));) {
	                  --n;
	                }for (; r < t.length && a(t.charAt(r));) {
	                  ++r;
	                }
	              }return new bl(W(e.line, n), W(e.line, r));
	            }, toggleOverwrite: function toggleOverwrite(e) {
	              null != e && e == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? l(this.display.cursorDiv, "CodeMirror-overwrite") : Na(this.display.cursorDiv, "CodeMirror-overwrite"), Ee(this, "overwriteToggle", this, this.state.overwrite));
	            }, hasFocus: function hasFocus() {
	              return this.display.input.getField() == a();
	            }, isReadOnly: function isReadOnly() {
	              return !(!this.options.readOnly && !this.doc.cantEdit);
	            }, scrollTo: dr(function (e, t) {
	              $n(this, e, t);
	            }), getScrollInfo: function getScrollInfo() {
	              var e = this.display.scroller;return { left: e.scrollLeft, top: e.scrollTop, height: e.scrollHeight - jt(this) - this.display.barHeight, width: e.scrollWidth - jt(this) - this.display.barWidth, clientHeight: Ut(this), clientWidth: qt(this) };
	            }, scrollIntoView: dr(function (e, t) {
	              null == e ? (e = { from: this.doc.sel.primary().head, to: null }, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = { from: W(e, 0), to: null } : null == e.from && (e = { from: e, to: null }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line ? Vn(this, e) : Kn(this, e.from, e.to, e.margin);
	            }), setSize: dr(function (e, t) {
	              var n = this,
	                  r = function r(e) {
	                return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e;
	              };null != e && (this.display.wrapper.style.width = r(e)), null != t && (this.display.wrapper.style.height = r(t)), this.options.lineWrapping && rn(this);var i = this.display.viewFrom;this.doc.iter(i, this.display.viewTo, function (e) {
	                if (e.widgets) for (var t = 0; t < e.widgets.length; t++) {
	                  if (e.widgets[t].noHScroll) {
	                    gr(n, i, "widget");break;
	                  }
	                }++i;
	              }), this.curOp.forceUpdate = !0, Ee(this, "refresh", this);
	            }), operation: function operation(e) {
	              return hr(this, e);
	            }, refresh: dr(function () {
	              var e = this.display.cachedTextHeight;mr(this), this.curOp.forceUpdate = !0, on(this), $n(this, this.doc.scrollLeft, this.doc.scrollTop), Er(this), (null == e || Math.abs(e - yn(this.display)) > .5) && Cn(this), Ee(this, "refresh", this);
	            }), swapDoc: dr(function (e) {
	              var t = this.doc;return t.cm = null, Kr(this, e), on(this), this.display.input.reset(), $n(this, e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, Ct(this, "swapDoc", this, t), t;
	            }), getInputField: function getInputField() {
	              return this.display.input.getField();
	            }, getWrapperElement: function getWrapperElement() {
	              return this.display.wrapper;
	            }, getScrollerElement: function getScrollerElement() {
	              return this.display.scroller;
	            }, getGutterElement: function getGutterElement() {
	              return this.display.gutters;
	            } }, He(e), e.registerHelper = function (t, r, i) {
	            n.hasOwnProperty(t) || (n[t] = e[t] = { _global: [] }), n[t][r] = i;
	          }, e.registerGlobalHelper = function (t, r, i, o) {
	            e.registerHelper(t, r, o), n[t]._global.push({ pred: i, val: o });
	          };
	        }(Po);var Vl = "iter insert remove copy getEditor constructor".split(" ");for (var Xl in Tl.prototype) {
	          Tl.prototype.hasOwnProperty(Xl) && f(Vl, Xl) < 0 && (Po.prototype[Xl] = function (e) {
	            return function () {
	              return e.apply(this.doc, arguments);
	            };
	          }(Tl.prototype[Xl]));
	        }return He(Tl), Po.inputStyles = { textarea: $l, contenteditable: Gl }, Po.defineMode = function (e) {
	          Po.defaults.mode || "null" == e || (Po.defaults.mode = e), Ue.apply(this, arguments);
	        }, Po.defineMIME = function (e, t) {
	          Qa[e] = t;
	        }, Po.defineMode("null", function () {
	          return { token: function token(e) {
	              return e.skipToEnd();
	            } };
	        }), Po.defineMIME("text/plain", "null"), Po.defineExtension = function (e, t) {
	          Po.prototype[e] = t;
	        }, Po.defineDocExtension = function (e, t) {
	          Tl.prototype[e] = t;
	        }, Po.fromTextArea = function (e, t) {
	          function n() {
	            e.value = s.getValue();
	          }if (t = t ? c(t) : {}, t.value = e.value, !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), null == t.autofocus) {
	            var r = a();t.autofocus = r == e || null != e.getAttribute("autofocus") && r == document.body;
	          }var i;if (e.form && ($a(e.form, "submit", n), !t.leaveSubmitMethodAlone)) {
	            var o = e.form;i = o.submit;try {
	              var l = o.submit = function () {
	                n(), o.submit = i, o.submit(), o.submit = l;
	              };
	            } catch (e) {}
	          }t.finishInit = function (t) {
	            t.save = n, t.getTextArea = function () {
	              return e;
	            }, t.toTextArea = function () {
	              t.toTextArea = isNaN, n(), e.parentNode.removeChild(t.getWrapperElement()), e.style.display = "", e.form && (Ae(e.form, "submit", n), "function" == typeof e.form.submit && (e.form.submit = i));
	            };
	          }, e.style.display = "none";var s = Po(function (t) {
	            return e.parentNode.insertBefore(t, e.nextSibling);
	          }, t);return s;
	        }, function (e) {
	          e.off = Ae, e.on = $a, e.wheelEventPixels = Wr, e.Doc = Tl, e.splitLines = Xa, e.countColumn = h, e.findColumn = d, e.isWordChar = b, e.Pass = Ha, e.signal = Ee, e.Line = ol, e.changeEnd = Pr, e.scrollbarModel = pl, e.Pos = W, e.cmpPos = B, e.modes = Ja, e.mimeModes = Qa, e.resolveMode = Ge, e.getMode = $e, e.modeExtensions = el, e.extendMode = Ve, e.copyState = Xe, e.startState = Ye, e.innerMode = Ke, e.commands = Hl, e.keyMap = Dl, e.keyName = lo, e.isModifierKey = oo, e.lookupKey = io, e.normalizeKeyMap = ro, e.StringStream = tl, e.SharedTextMarker = Sl, e.TextMarker = Cl, e.LineWidget = wl, e.e_preventDefault = We, e.e_stopPropagation = Be, e.e_stop = Re, e.addClass = l, e.contains = o, e.rmClass = Na, e.keyNames = Al;
	        }(Po), Po.version = "5.27.4", Po;
	      });
	    }, {}], 11: [function (e, t, n) {
	      !function (r) {
	        "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? r(e("../../lib/codemirror"), e("../markdown/markdown"), e("../../addon/mode/overlay")) : r(CodeMirror);
	      }(function (e) {
	        "use strict";
	        var t = /^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i;e.defineMode("gfm", function (n, r) {
	          var i = 0,
	              o = { startState: function startState() {
	              return { code: !1, codeBlock: !1, ateSpace: !1 };
	            }, copyState: function copyState(e) {
	              return { code: e.code, codeBlock: e.codeBlock, ateSpace: e.ateSpace };
	            }, token: function token(e, n) {
	              if (n.combineTokens = null, n.codeBlock) return e.match(/^```+/) ? (n.codeBlock = !1, null) : (e.skipToEnd(), null);if (e.sol() && (n.code = !1), e.sol() && e.match(/^```+/)) return e.skipToEnd(), n.codeBlock = !0, null;if ("`" === e.peek()) {
	                e.next();var o = e.pos;e.eatWhile("`");var a = 1 + e.pos - o;return n.code ? a === i && (n.code = !1) : (i = a, n.code = !0), null;
	              }if (n.code) return e.next(), null;if (e.eatSpace()) return n.ateSpace = !0, null;if ((e.sol() || n.ateSpace) && (n.ateSpace = !1, !1 !== r.gitHubSpice)) {
	                if (e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?:[a-f0-9]{7,40}\b)/)) return n.combineTokens = !0, "link";if (e.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/)) return n.combineTokens = !0, "link";
	              }return e.match(t) && "](" != e.string.slice(e.start - 2, e.start) && (0 == e.start || /\W/.test(e.string.charAt(e.start - 1))) ? (n.combineTokens = !0, "link") : (e.next(), null);
	            }, blankLine: function blankLine(e) {
	              return e.code = !1, null;
	            } },
	              a = { taskLists: !0, fencedCodeBlocks: "```", strikethrough: !0 };for (var l in r) {
	            a[l] = r[l];
	          }return a.name = "markdown", e.overlayMode(e.getMode(n, a), o);
	        }, "markdown"), e.defineMIME("text/x-gfm", "gfm");
	      });
	    }, { "../../addon/mode/overlay": 8, "../../lib/codemirror": 10, "../markdown/markdown": 12 }], 12: [function (e, t, n) {
	      !function (r) {
	        "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? r(e("../../lib/codemirror"), e("../xml/xml"), e("../meta")) : r(CodeMirror);
	      }(function (e) {
	        "use strict";
	        e.defineMode("markdown", function (t, n) {
	          function r(n) {
	            if (e.findModeByName) {
	              var r = e.findModeByName(n);r && (n = r.mime || r.mimes[0]);
	            }var i = e.getMode(t, n);return "null" == i.name ? null : i;
	          }function i(e, t, n) {
	            return t.f = t.inline = n, n(e, t);
	          }function o(e, t, n) {
	            return t.f = t.block = n, n(e, t);
	          }function a(e) {
	            return !e || !/\S/.test(e.string);
	          }function l(e) {
	            return e.linkTitle = !1, e.em = !1, e.strong = !1, e.strikethrough = !1, e.quote = 0, e.indentedCode = !1, e.f == u && (e.f = d, e.block = s), e.trailingSpace = 0, e.trailingSpaceNewLine = !1, e.prevLine = e.thisLine, e.thisLine = null, null;
	          }function s(t, o) {
	            var l = t.sol(),
	                s = !1 !== o.list,
	                u = o.indentedCode;o.indentedCode = !1, s && (o.indentationDiff >= 0 ? (o.indentationDiff < 4 && (o.indentation -= o.indentationDiff), o.list = null) : o.indentation > 0 ? o.list = null : o.list = !1);var f = null;if (o.indentationDiff >= 4 && (u || a(o.prevLine))) return t.skipToEnd(), o.indentation -= 4, o.indentedCode = !0, k.code;if (t.eatSpace()) return null;if ((f = t.match(M)) && f[1].length <= 6) return o.header = f[1].length, n.highlightFormatting && (o.formatting = "header"), o.f = o.inline, h(o);if (!(a(o.prevLine) || o.quote || s || u) && (f = t.match(N))) return o.header = "=" == f[0].charAt(0) ? 1 : 2, n.highlightFormatting && (o.formatting = "header"), o.f = o.inline, h(o);if (t.eat(">")) return o.quote = l ? 1 : o.quote + 1, n.highlightFormatting && (o.formatting = "quote"), t.eatSpace(), h(o);if ("[" === t.peek()) return i(t, o, v);if (t.match(S, !0)) return o.hr = !0, k.hr;if (f = t.match(L)) {
	              var d = f[1] ? "ol" : "ul";for (o.indentation = t.column() + t.current().length, o.list = !0; o.listStack && t.column() < o.listStack[o.listStack.length - 1];) {
	                o.listStack.pop();
	              }return o.listStack.push(o.indentation), n.taskLists && t.match(T, !1) && (o.taskList = !0), o.f = o.inline, n.highlightFormatting && (o.formatting = ["list", "list-" + d]), h(o);
	            }return n.fencedCodeBlocks && (f = t.match(E, !0)) ? (o.fencedChars = f[1], o.localMode = r(f[2]), o.localMode && (o.localState = e.startState(o.localMode)), o.f = o.block = c, n.highlightFormatting && (o.formatting = "code-block"), o.code = -1, h(o)) : i(t, o, o.inline);
	          }function u(t, n) {
	            var r = b.token(t, n.htmlState);if (!w) {
	              var i = e.innerMode(b, n.htmlState);("xml" == i.mode.name && null === i.state.tagStart && !i.state.context && i.state.tokenize.isInText || n.md_inside && t.current().indexOf(">") > -1) && (n.f = d, n.block = s, n.htmlState = null);
	            }return r;
	          }function c(e, t) {
	            if (t.fencedChars && e.match(t.fencedChars)) {
	              n.highlightFormatting && (t.formatting = "code-block");var r = h(t);return t.localMode = t.localState = null, t.block = s, t.f = d, t.fencedChars = null, t.code = 0, r;
	            }return t.fencedChars && e.skipTo(t.fencedChars) ? "comment" : t.localMode ? t.localMode.token(e, t.localState) : (e.skipToEnd(), k.code);
	          }function h(e) {
	            var t = [];if (e.formatting) {
	              t.push(k.formatting), "string" == typeof e.formatting && (e.formatting = [e.formatting]);for (var r = 0; r < e.formatting.length; r++) {
	                t.push(k.formatting + "-" + e.formatting[r]), "header" === e.formatting[r] && t.push(k.formatting + "-" + e.formatting[r] + "-" + e.header), "quote" === e.formatting[r] && (!n.maxBlockquoteDepth || n.maxBlockquoteDepth >= e.quote ? t.push(k.formatting + "-" + e.formatting[r] + "-" + e.quote) : t.push("error"));
	              }
	            }if (e.taskOpen) return t.push("meta"), t.length ? t.join(" ") : null;if (e.taskClosed) return t.push("property"), t.length ? t.join(" ") : null;if (e.linkHref ? t.push(k.linkHref, "url") : (e.strong && t.push(k.strong), e.em && t.push(k.em), e.strikethrough && t.push(k.strikethrough), e.linkText && t.push(k.linkText), e.code && t.push(k.code), e.image && t.push(k.image), e.imageAltText && t.push(k.imageAltText, "link"), e.imageMarker && t.push(k.imageMarker)), e.header && t.push(k.header, k.header + "-" + e.header), e.quote && (t.push(k.quote), !n.maxBlockquoteDepth || n.maxBlockquoteDepth >= e.quote ? t.push(k.quote + "-" + e.quote) : t.push(k.quote + "-" + n.maxBlockquoteDepth)), !1 !== e.list) {
	              var i = (e.listStack.length - 1) % 3;i ? 1 === i ? t.push(k.list2) : t.push(k.list3) : t.push(k.list1);
	            }return e.trailingSpaceNewLine ? t.push("trailing-space-new-line") : e.trailingSpace && t.push("trailing-space-" + (e.trailingSpace % 2 ? "a" : "b")), t.length ? t.join(" ") : null;
	          }function f(e, t) {
	            if (e.match(A, !0)) return h(t);
	          }function d(t, r) {
	            var i = r.text(t, r);if (void 0 !== i) return i;if (r.list) return r.list = null, h(r);if (r.taskList) return "x" !== t.match(T, !0)[1] ? r.taskOpen = !0 : r.taskClosed = !0, n.highlightFormatting && (r.formatting = "task"), r.taskList = !1, h(r);if (r.taskOpen = !1, r.taskClosed = !1, r.header && t.match(/^#+$/, !0)) return n.highlightFormatting && (r.formatting = "header"), h(r);var a = t.next();if (r.linkTitle) {
	              r.linkTitle = !1;var l = a;"(" === a && (l = ")");var s = "^\\s*(?:[^" + (l = (l + "").replace(/([.?*+^\[\]\\(){}|-])/g, "\\$1")) + "\\\\]+|\\\\\\\\|\\\\.)" + l;if (t.match(new RegExp(s), !0)) return k.linkHref;
	            }if ("`" === a) {
	              var c = r.formatting;n.highlightFormatting && (r.formatting = "code"), t.eatWhile("`");var f = t.current().length;if (0 == r.code) return r.code = f, h(r);if (f == r.code) {
	                E = h(r);return r.code = 0, E;
	              }return r.formatting = c, h(r);
	            }if (r.code) return h(r);if ("\\" === a && (t.next(), n.highlightFormatting)) {
	              var g = h(r),
	                  v = k.formatting + "-escape";return g ? g + " " + v : v;
	            }if ("!" === a && t.match(/\[[^\]]*\] ?(?:\(|\[)/, !1)) return r.imageMarker = !0, r.image = !0, n.highlightFormatting && (r.formatting = "image"), h(r);if ("[" === a && r.imageMarker && t.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, !1)) return r.imageMarker = !1, r.imageAltText = !0, n.highlightFormatting && (r.formatting = "image"), h(r);if ("]" === a && r.imageAltText) {
	              n.highlightFormatting && (r.formatting = "image");g = h(r);return r.imageAltText = !1, r.image = !1, r.inline = r.f = m, g;
	            }if ("[" === a && !r.image) return r.linkText = !0, n.highlightFormatting && (r.formatting = "link"), h(r);if ("]" === a && r.linkText) {
	              n.highlightFormatting && (r.formatting = "link");g = h(r);return r.linkText = !1, r.inline = r.f = t.match(/\(.*?\)| ?\[.*?\]/, !1) ? m : d, g;
	            }if ("<" === a && t.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !1)) return r.f = r.inline = p, n.highlightFormatting && (r.formatting = "link"), (g = h(r)) ? g += " " : g = "", g + k.linkInline;if ("<" === a && t.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1)) return r.f = r.inline = p, n.highlightFormatting && (r.formatting = "link"), (g = h(r)) ? g += " " : g = "", g + k.linkEmail;if ("<" === a && t.match(/^(!--|[a-z]+(?:\s+[a-z_:.\-]+(?:\s*=\s*[^ >]+)?)*\s*>)/i, !1)) {
	              var y = t.string.indexOf(">", t.pos);if (-1 != y) {
	                var x = t.string.substring(t.start, y);/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(x) && (r.md_inside = !0);
	              }return t.backUp(1), r.htmlState = e.startState(b), o(t, r, u);
	            }if ("<" === a && t.match(/^\/\w*?>/)) return r.md_inside = !1, "tag";if ("*" === a || "_" === a) {
	              for (var w = 1, C = 1 == t.pos ? " " : t.string.charAt(t.pos - 2); w < 3 && t.eat(a);) {
	                w++;
	              }var S = t.peek() || " ",
	                  L = !/\s/.test(S) && (!O.test(S) || /\s/.test(C) || O.test(C)),
	                  M = !/\s/.test(C) && (!O.test(C) || /\s/.test(S) || O.test(S)),
	                  N = null,
	                  A = null;if (w % 2 && (r.em || !L || "*" !== a && M && !O.test(C) ? r.em != a || !M || "*" !== a && L && !O.test(S) || (N = !1) : N = !0), w > 1 && (r.strong || !L || "*" !== a && M && !O.test(C) ? r.strong != a || !M || "*" !== a && L && !O.test(S) || (A = !1) : A = !0), null != A || null != N) {
	                n.highlightFormatting && (r.formatting = null == N ? "strong" : null == A ? "em" : "strong em"), !0 === N && (r.em = a), !0 === A && (r.strong = a);E = h(r);return !1 === N && (r.em = !1), !1 === A && (r.strong = !1), E;
	              }
	            } else if (" " === a && (t.eat("*") || t.eat("_"))) {
	              if (" " === t.peek()) return h(r);t.backUp(1);
	            }if (n.strikethrough) if ("~" === a && t.eatWhile(a)) {
	              if (r.strikethrough) {
	                n.highlightFormatting && (r.formatting = "strikethrough");var E = h(r);return r.strikethrough = !1, E;
	              }if (t.match(/^[^\s]/, !1)) return r.strikethrough = !0, n.highlightFormatting && (r.formatting = "strikethrough"), h(r);
	            } else if (" " === a && t.match(/^~~/, !0)) {
	              if (" " === t.peek()) return h(r);t.backUp(2);
	            }return " " === a && (t.match(/ +$/, !1) ? r.trailingSpace++ : r.trailingSpace && (r.trailingSpaceNewLine = !0)), h(r);
	          }function p(e, t) {
	            if (">" === e.next()) {
	              t.f = t.inline = d, n.highlightFormatting && (t.formatting = "link");var r = h(t);return r ? r += " " : r = "", r + k.linkInline;
	            }return e.match(/^[^>]+/, !0), k.linkInline;
	          }function m(e, t) {
	            if (e.eatSpace()) return null;var r = e.next();return "(" === r || "[" === r ? (t.f = t.inline = g("(" === r ? ")" : "]"), n.highlightFormatting && (t.formatting = "link-string"), t.linkHref = !0, h(t)) : "error";
	          }function g(e) {
	            return function (t, r) {
	              if (t.next() === e) {
	                r.f = r.inline = d, n.highlightFormatting && (r.formatting = "link-string");var i = h(r);return r.linkHref = !1, i;
	              }return t.match(I[e]), r.linkHref = !0, h(r);
	            };
	          }function v(e, t) {
	            return e.match(/^([^\]\\]|\\.)*\]:/, !1) ? (t.f = y, e.next(), n.highlightFormatting && (t.formatting = "link"), t.linkText = !0, h(t)) : i(e, t, d);
	          }function y(e, t) {
	            if (e.match(/^\]:/, !0)) {
	              t.f = t.inline = x, n.highlightFormatting && (t.formatting = "link");var r = h(t);return t.linkText = !1, r;
	            }return e.match(/^([^\]\\]|\\.)+/, !0), k.linkText;
	          }function x(e, t) {
	            return e.eatSpace() ? null : (e.match(/^[^\s]+/, !0), void 0 === e.peek() ? t.linkTitle = !0 : e.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/, !0), t.f = t.inline = d, k.linkHref + " url");
	          }var b = e.getMode(t, "text/html"),
	              w = "null" == b.name;void 0 === n.highlightFormatting && (n.highlightFormatting = !1), void 0 === n.maxBlockquoteDepth && (n.maxBlockquoteDepth = 0), void 0 === n.taskLists && (n.taskLists = !1), void 0 === n.strikethrough && (n.strikethrough = !1), void 0 === n.tokenTypeOverrides && (n.tokenTypeOverrides = {});var k = { header: "header", code: "comment", quote: "quote", list1: "variable-2", list2: "variable-3", list3: "keyword", hr: "hr", image: "image", imageAltText: "image-alt-text", imageMarker: "image-marker", formatting: "formatting", linkInline: "link", linkEmail: "link", linkText: "link", linkHref: "string", em: "em", strong: "strong", strikethrough: "strikethrough" };for (var C in k) {
	            k.hasOwnProperty(C) && n.tokenTypeOverrides[C] && (k[C] = n.tokenTypeOverrides[C]);
	          }var S = /^([*\-_])(?:\s*\1){2,}\s*$/,
	              L = /^(?:[*\-+]|^[0-9]+([.)]))\s+/,
	              T = /^\[(x| )\](?=\s)/,
	              M = n.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/,
	              N = /^ *(?:\={1,}|-{1,})\s*$/,
	              A = /^[^#!\[\]*_\\<>` "'(~]+/,
	              E = new RegExp("^(" + (!0 === n.fencedCodeBlocks ? "~~~+|```+" : n.fencedCodeBlocks) + ")[ \\t]*([\\w+#-]*)"),
	              O = /[!\"#$%&\'()*+,\-\.\/:;<=>?@\[\\\]^_`{|}~—]/,
	              I = { ")": /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/, "]": /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/ },
	              D = { startState: function startState() {
	              return { f: s, prevLine: null, thisLine: null, block: s, htmlState: null, indentation: 0, inline: d, text: f, formatting: !1, linkText: !1, linkHref: !1, linkTitle: !1, code: 0, em: !1, strong: !1, header: 0, hr: !1, taskList: !1, list: !1, listStack: [], quote: 0, trailingSpace: 0, trailingSpaceNewLine: !1, strikethrough: !1, fencedChars: null };
	            }, copyState: function copyState(t) {
	              return { f: t.f, prevLine: t.prevLine, thisLine: t.thisLine, block: t.block, htmlState: t.htmlState && e.copyState(b, t.htmlState), indentation: t.indentation, localMode: t.localMode, localState: t.localMode ? e.copyState(t.localMode, t.localState) : null, inline: t.inline, text: t.text, formatting: !1, linkText: t.linkText, linkTitle: t.linkTitle, code: t.code, em: t.em, strong: t.strong, strikethrough: t.strikethrough, header: t.header, hr: t.hr, taskList: t.taskList, list: t.list, listStack: t.listStack.slice(0), quote: t.quote, indentedCode: t.indentedCode, trailingSpace: t.trailingSpace, trailingSpaceNewLine: t.trailingSpaceNewLine, md_inside: t.md_inside, fencedChars: t.fencedChars };
	            }, token: function token(e, t) {
	              if (t.formatting = !1, e != t.thisLine) {
	                var n = t.header || t.hr;if (t.header = 0, t.hr = !1, e.match(/^\s*$/, !0) || n) {
	                  if (l(t), !n) return null;t.prevLine = null;
	                }if (t.prevLine = t.thisLine, t.thisLine = e, t.taskList = !1, t.trailingSpace = 0, t.trailingSpaceNewLine = !1, t.f = t.block, t.f != u) {
	                  var r = e.match(/^\s*/, !0)[0].replace(/\t/g, "    ").length;if (t.indentationDiff = Math.min(r - t.indentation, 4), t.indentation = t.indentation + t.indentationDiff, r > 0) return null;
	                }
	              }return t.f(e, t);
	            }, innerMode: function innerMode(e) {
	              return e.block == u ? { state: e.htmlState, mode: b } : e.localState ? { state: e.localState, mode: e.localMode } : { state: e, mode: D };
	            }, indent: function indent(t, n, r) {
	              return t.block == u ? b.indent(t.htmlState, n, r) : t.localState ? t.localMode.indent(t.localState, n, r) : e.Pass;
	            }, blankLine: l, getType: h, closeBrackets: "()[]{}''\"\"``", fold: "markdown" };return D;
	        }, "xml"), e.defineMIME("text/x-markdown", "markdown");
	      });
	    }, { "../../lib/codemirror": 10, "../meta": 13, "../xml/xml": 14 }], 13: [function (e, t, n) {
	      !function (r) {
	        r("object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? e("../lib/codemirror") : CodeMirror);
	      }(function (e) {
	        "use strict";
	        e.modeInfo = [{ name: "APL", mime: "text/apl", mode: "apl", ext: ["dyalog", "apl"] }, { name: "PGP", mimes: ["application/pgp", "application/pgp-keys", "application/pgp-signature"], mode: "asciiarmor", ext: ["pgp"] }, { name: "ASN.1", mime: "text/x-ttcn-asn", mode: "asn.1", ext: ["asn", "asn1"] }, { name: "Asterisk", mime: "text/x-asterisk", mode: "asterisk", file: /^extensions\.conf$/i }, { name: "Brainfuck", mime: "text/x-brainfuck", mode: "brainfuck", ext: ["b", "bf"] }, { name: "C", mime: "text/x-csrc", mode: "clike", ext: ["c", "h"] }, { name: "C++", mime: "text/x-c++src", mode: "clike", ext: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"], alias: ["cpp"] }, { name: "Cobol", mime: "text/x-cobol", mode: "cobol", ext: ["cob", "cpy"] }, { name: "C#", mime: "text/x-csharp", mode: "clike", ext: ["cs"], alias: ["csharp"] }, { name: "Clojure", mime: "text/x-clojure", mode: "clojure", ext: ["clj", "cljc", "cljx"] }, { name: "ClojureScript", mime: "text/x-clojurescript", mode: "clojure", ext: ["cljs"] }, { name: "Closure Stylesheets (GSS)", mime: "text/x-gss", mode: "css", ext: ["gss"] }, { name: "CMake", mime: "text/x-cmake", mode: "cmake", ext: ["cmake", "cmake.in"], file: /^CMakeLists.txt$/ }, { name: "CoffeeScript", mime: "text/x-coffeescript", mode: "coffeescript", ext: ["coffee"], alias: ["coffee", "coffee-script"] }, { name: "Common Lisp", mime: "text/x-common-lisp", mode: "commonlisp", ext: ["cl", "lisp", "el"], alias: ["lisp"] }, { name: "Cypher", mime: "application/x-cypher-query", mode: "cypher", ext: ["cyp", "cypher"] }, { name: "Cython", mime: "text/x-cython", mode: "python", ext: ["pyx", "pxd", "pxi"] }, { name: "Crystal", mime: "text/x-crystal", mode: "crystal", ext: ["cr"] }, { name: "CSS", mime: "text/css", mode: "css", ext: ["css"] }, { name: "CQL", mime: "text/x-cassandra", mode: "sql", ext: ["cql"] }, { name: "D", mime: "text/x-d", mode: "d", ext: ["d"] }, { name: "Dart", mimes: ["application/dart", "text/x-dart"], mode: "dart", ext: ["dart"] }, { name: "diff", mime: "text/x-diff", mode: "diff", ext: ["diff", "patch"] }, { name: "Django", mime: "text/x-django", mode: "django" }, { name: "Dockerfile", mime: "text/x-dockerfile", mode: "dockerfile", file: /^Dockerfile$/ }, { name: "DTD", mime: "application/xml-dtd", mode: "dtd", ext: ["dtd"] }, { name: "Dylan", mime: "text/x-dylan", mode: "dylan", ext: ["dylan", "dyl", "intr"] }, { name: "EBNF", mime: "text/x-ebnf", mode: "ebnf" }, { name: "ECL", mime: "text/x-ecl", mode: "ecl", ext: ["ecl"] }, { name: "edn", mime: "application/edn", mode: "clojure", ext: ["edn"] }, { name: "Eiffel", mime: "text/x-eiffel", mode: "eiffel", ext: ["e"] }, { name: "Elm", mime: "text/x-elm", mode: "elm", ext: ["elm"] }, { name: "Embedded Javascript", mime: "application/x-ejs", mode: "htmlembedded", ext: ["ejs"] }, { name: "Embedded Ruby", mime: "application/x-erb", mode: "htmlembedded", ext: ["erb"] }, { name: "Erlang", mime: "text/x-erlang", mode: "erlang", ext: ["erl"] }, { name: "Factor", mime: "text/x-factor", mode: "factor", ext: ["factor"] }, { name: "FCL", mime: "text/x-fcl", mode: "fcl" }, { name: "Forth", mime: "text/x-forth", mode: "forth", ext: ["forth", "fth", "4th"] }, { name: "Fortran", mime: "text/x-fortran", mode: "fortran", ext: ["f", "for", "f77", "f90"] }, { name: "F#", mime: "text/x-fsharp", mode: "mllike", ext: ["fs"], alias: ["fsharp"] }, { name: "Gas", mime: "text/x-gas", mode: "gas", ext: ["s"] }, { name: "Gherkin", mime: "text/x-feature", mode: "gherkin", ext: ["feature"] }, { name: "GitHub Flavored Markdown", mime: "text/x-gfm", mode: "gfm", file: /^(readme|contributing|history).md$/i }, { name: "Go", mime: "text/x-go", mode: "go", ext: ["go"] }, { name: "Groovy", mime: "text/x-groovy", mode: "groovy", ext: ["groovy", "gradle"], file: /^Jenkinsfile$/ }, { name: "HAML", mime: "text/x-haml", mode: "haml", ext: ["haml"] }, { name: "Haskell", mime: "text/x-haskell", mode: "haskell", ext: ["hs"] }, { name: "Haskell (Literate)", mime: "text/x-literate-haskell", mode: "haskell-literate", ext: ["lhs"] }, { name: "Haxe", mime: "text/x-haxe", mode: "haxe", ext: ["hx"] }, { name: "HXML", mime: "text/x-hxml", mode: "haxe", ext: ["hxml"] }, { name: "ASP.NET", mime: "application/x-aspx", mode: "htmlembedded", ext: ["aspx"], alias: ["asp", "aspx"] }, { name: "HTML", mime: "text/html", mode: "htmlmixed", ext: ["html", "htm"], alias: ["xhtml"] }, { name: "HTTP", mime: "message/http", mode: "http" }, { name: "IDL", mime: "text/x-idl", mode: "idl", ext: ["pro"] }, { name: "Pug", mime: "text/x-pug", mode: "pug", ext: ["jade", "pug"], alias: ["jade"] }, { name: "Java", mime: "text/x-java", mode: "clike", ext: ["java"] }, { name: "Java Server Pages", mime: "application/x-jsp", mode: "htmlembedded", ext: ["jsp"], alias: ["jsp"] }, { name: "JavaScript", mimes: ["text/javascript", "text/ecmascript", "application/javascript", "application/x-javascript", "application/ecmascript"], mode: "javascript", ext: ["js"], alias: ["ecmascript", "js", "node"] }, { name: "JSON", mimes: ["application/json", "application/x-json"], mode: "javascript", ext: ["json", "map"], alias: ["json5"] }, { name: "JSON-LD", mime: "application/ld+json", mode: "javascript", ext: ["jsonld"], alias: ["jsonld"] }, { name: "JSX", mime: "text/jsx", mode: "jsx", ext: ["jsx"] }, { name: "Jinja2", mime: "null", mode: "jinja2" }, { name: "Julia", mime: "text/x-julia", mode: "julia", ext: ["jl"] }, { name: "Kotlin", mime: "text/x-kotlin", mode: "clike", ext: ["kt"] }, { name: "LESS", mime: "text/x-less", mode: "css", ext: ["less"] }, { name: "LiveScript", mime: "text/x-livescript", mode: "livescript", ext: ["ls"], alias: ["ls"] }, { name: "Lua", mime: "text/x-lua", mode: "lua", ext: ["lua"] }, { name: "Markdown", mime: "text/x-markdown", mode: "markdown", ext: ["markdown", "md", "mkd"] }, { name: "mIRC", mime: "text/mirc", mode: "mirc" }, { name: "MariaDB SQL", mime: "text/x-mariadb", mode: "sql" }, { name: "Mathematica", mime: "text/x-mathematica", mode: "mathematica", ext: ["m", "nb"] }, { name: "Modelica", mime: "text/x-modelica", mode: "modelica", ext: ["mo"] }, { name: "MUMPS", mime: "text/x-mumps", mode: "mumps", ext: ["mps"] }, { name: "MS SQL", mime: "text/x-mssql", mode: "sql" }, { name: "mbox", mime: "application/mbox", mode: "mbox", ext: ["mbox"] }, { name: "MySQL", mime: "text/x-mysql", mode: "sql" }, { name: "Nginx", mime: "text/x-nginx-conf", mode: "nginx", file: /nginx.*\.conf$/i }, { name: "NSIS", mime: "text/x-nsis", mode: "nsis", ext: ["nsh", "nsi"] }, { name: "NTriples", mime: "text/n-triples", mode: "ntriples", ext: ["nt"] }, { name: "Objective C", mime: "text/x-objectivec", mode: "clike", ext: ["m", "mm"], alias: ["objective-c", "objc"] }, { name: "OCaml", mime: "text/x-ocaml", mode: "mllike", ext: ["ml", "mli", "mll", "mly"] }, { name: "Octave", mime: "text/x-octave", mode: "octave", ext: ["m"] }, { name: "Oz", mime: "text/x-oz", mode: "oz", ext: ["oz"] }, { name: "Pascal", mime: "text/x-pascal", mode: "pascal", ext: ["p", "pas"] }, { name: "PEG.js", mime: "null", mode: "pegjs", ext: ["jsonld"] }, { name: "Perl", mime: "text/x-perl", mode: "perl", ext: ["pl", "pm"] }, { name: "PHP", mime: "application/x-httpd-php", mode: "php", ext: ["php", "php3", "php4", "php5", "phtml"] }, { name: "Pig", mime: "text/x-pig", mode: "pig", ext: ["pig"] }, { name: "Plain Text", mime: "text/plain", mode: "null", ext: ["txt", "text", "conf", "def", "list", "log"] }, { name: "PLSQL", mime: "text/x-plsql", mode: "sql", ext: ["pls"] }, { name: "PowerShell", mime: "application/x-powershell", mode: "powershell", ext: ["ps1", "psd1", "psm1"] }, { name: "Properties files", mime: "text/x-properties", mode: "properties", ext: ["properties", "ini", "in"], alias: ["ini", "properties"] }, { name: "ProtoBuf", mime: "text/x-protobuf", mode: "protobuf", ext: ["proto"] }, { name: "Python", mime: "text/x-python", mode: "python", ext: ["BUILD", "bzl", "py", "pyw"], file: /^(BUCK|BUILD)$/ }, { name: "Puppet", mime: "text/x-puppet", mode: "puppet", ext: ["pp"] }, { name: "Q", mime: "text/x-q", mode: "q", ext: ["q"] }, { name: "R", mime: "text/x-rsrc", mode: "r", ext: ["r", "R"], alias: ["rscript"] }, { name: "reStructuredText", mime: "text/x-rst", mode: "rst", ext: ["rst"], alias: ["rst"] }, { name: "RPM Changes", mime: "text/x-rpm-changes", mode: "rpm" }, { name: "RPM Spec", mime: "text/x-rpm-spec", mode: "rpm", ext: ["spec"] }, { name: "Ruby", mime: "text/x-ruby", mode: "ruby", ext: ["rb"], alias: ["jruby", "macruby", "rake", "rb", "rbx"] }, { name: "Rust", mime: "text/x-rustsrc", mode: "rust", ext: ["rs"] }, { name: "SAS", mime: "text/x-sas", mode: "sas", ext: ["sas"] }, { name: "Sass", mime: "text/x-sass", mode: "sass", ext: ["sass"] }, { name: "Scala", mime: "text/x-scala", mode: "clike", ext: ["scala"] }, { name: "Scheme", mime: "text/x-scheme", mode: "scheme", ext: ["scm", "ss"] }, { name: "SCSS", mime: "text/x-scss", mode: "css", ext: ["scss"] }, { name: "Shell", mime: "text/x-sh", mode: "shell", ext: ["sh", "ksh", "bash"], alias: ["bash", "sh", "zsh"], file: /^PKGBUILD$/ }, { name: "Sieve", mime: "application/sieve", mode: "sieve", ext: ["siv", "sieve"] }, { name: "Slim", mimes: ["text/x-slim", "application/x-slim"], mode: "slim", ext: ["slim"] }, { name: "Smalltalk", mime: "text/x-stsrc", mode: "smalltalk", ext: ["st"] }, { name: "Smarty", mime: "text/x-smarty", mode: "smarty", ext: ["tpl"] }, { name: "Solr", mime: "text/x-solr", mode: "solr" }, { name: "Soy", mime: "text/x-soy", mode: "soy", ext: ["soy"], alias: ["closure template"] }, { name: "SPARQL", mime: "application/sparql-query", mode: "sparql", ext: ["rq", "sparql"], alias: ["sparul"] }, { name: "Spreadsheet", mime: "text/x-spreadsheet", mode: "spreadsheet", alias: ["excel", "formula"] }, { name: "SQL", mime: "text/x-sql", mode: "sql", ext: ["sql"] }, { name: "SQLite", mime: "text/x-sqlite", mode: "sql" }, { name: "Squirrel", mime: "text/x-squirrel", mode: "clike", ext: ["nut"] }, { name: "Stylus", mime: "text/x-styl", mode: "stylus", ext: ["styl"] }, { name: "Swift", mime: "text/x-swift", mode: "swift", ext: ["swift"] }, { name: "sTeX", mime: "text/x-stex", mode: "stex" }, { name: "LaTeX", mime: "text/x-latex", mode: "stex", ext: ["text", "ltx"], alias: ["tex"] }, { name: "SystemVerilog", mime: "text/x-systemverilog", mode: "verilog", ext: ["v"] }, { name: "Tcl", mime: "text/x-tcl", mode: "tcl", ext: ["tcl"] }, { name: "Textile", mime: "text/x-textile", mode: "textile", ext: ["textile"] }, { name: "TiddlyWiki ", mime: "text/x-tiddlywiki", mode: "tiddlywiki" }, { name: "Tiki wiki", mime: "text/tiki", mode: "tiki" }, { name: "TOML", mime: "text/x-toml", mode: "toml", ext: ["toml"] }, { name: "Tornado", mime: "text/x-tornado", mode: "tornado" }, { name: "troff", mime: "text/troff", mode: "troff", ext: ["1", "2", "3", "4", "5", "6", "7", "8", "9"] }, { name: "TTCN", mime: "text/x-ttcn", mode: "ttcn", ext: ["ttcn", "ttcn3", "ttcnpp"] }, { name: "TTCN_CFG", mime: "text/x-ttcn-cfg", mode: "ttcn-cfg", ext: ["cfg"] }, { name: "Turtle", mime: "text/turtle", mode: "turtle", ext: ["ttl"] }, { name: "TypeScript", mime: "application/typescript", mode: "javascript", ext: ["ts"], alias: ["ts"] }, { name: "TypeScript-JSX", mime: "text/typescript-jsx", mode: "jsx", ext: ["tsx"], alias: ["tsx"] }, { name: "Twig", mime: "text/x-twig", mode: "twig" }, { name: "Web IDL", mime: "text/x-webidl", mode: "webidl", ext: ["webidl"] }, { name: "VB.NET", mime: "text/x-vb", mode: "vb", ext: ["vb"] }, { name: "VBScript", mime: "text/vbscript", mode: "vbscript", ext: ["vbs"] }, { name: "Velocity", mime: "text/velocity", mode: "velocity", ext: ["vtl"] }, { name: "Verilog", mime: "text/x-verilog", mode: "verilog", ext: ["v"] }, { name: "VHDL", mime: "text/x-vhdl", mode: "vhdl", ext: ["vhd", "vhdl"] }, { name: "Vue.js Component", mimes: ["script/x-vue", "text/x-vue"], mode: "vue", ext: ["vue"] }, { name: "XML", mimes: ["application/xml", "text/xml"], mode: "xml", ext: ["xml", "xsl", "xsd", "svg"], alias: ["rss", "wsdl", "xsd"] }, { name: "XQuery", mime: "application/xquery", mode: "xquery", ext: ["xy", "xquery"] }, { name: "Yacas", mime: "text/x-yacas", mode: "yacas", ext: ["ys"] }, { name: "YAML", mimes: ["text/x-yaml", "text/yaml"], mode: "yaml", ext: ["yaml", "yml"], alias: ["yml"] }, { name: "Z80", mime: "text/x-z80", mode: "z80", ext: ["z80"] }, { name: "mscgen", mime: "text/x-mscgen", mode: "mscgen", ext: ["mscgen", "mscin", "msc"] }, { name: "xu", mime: "text/x-xu", mode: "mscgen", ext: ["xu"] }, { name: "msgenny", mime: "text/x-msgenny", mode: "mscgen", ext: ["msgenny"] }];for (var t = 0; t < e.modeInfo.length; t++) {
	          var n = e.modeInfo[t];n.mimes && (n.mime = n.mimes[0]);
	        }e.findModeByMIME = function (t) {
	          t = t.toLowerCase();for (var n = 0; n < e.modeInfo.length; n++) {
	            var r = e.modeInfo[n];if (r.mime == t) return r;if (r.mimes) for (var i = 0; i < r.mimes.length; i++) {
	              if (r.mimes[i] == t) return r;
	            }
	          }return (/\+xml$/.test(t) ? e.findModeByMIME("application/xml") : /\+json$/.test(t) ? e.findModeByMIME("application/json") : void 0
	          );
	        }, e.findModeByExtension = function (t) {
	          for (var n = 0; n < e.modeInfo.length; n++) {
	            var r = e.modeInfo[n];if (r.ext) for (var i = 0; i < r.ext.length; i++) {
	              if (r.ext[i] == t) return r;
	            }
	          }
	        }, e.findModeByFileName = function (t) {
	          for (var n = 0; n < e.modeInfo.length; n++) {
	            var r = e.modeInfo[n];if (r.file && r.file.test(t)) return r;
	          }var i = t.lastIndexOf("."),
	              o = i > -1 && t.substring(i + 1, t.length);if (o) return e.findModeByExtension(o);
	        }, e.findModeByName = function (t) {
	          t = t.toLowerCase();for (var n = 0; n < e.modeInfo.length; n++) {
	            var r = e.modeInfo[n];if (r.name.toLowerCase() == t) return r;if (r.alias) for (var i = 0; i < r.alias.length; i++) {
	              if (r.alias[i].toLowerCase() == t) return r;
	            }
	          }
	        };
	      });
	    }, { "../lib/codemirror": 10 }], 14: [function (e, t, n) {
	      !function (r) {
	        r("object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? e("../../lib/codemirror") : CodeMirror);
	      }(function (e) {
	        "use strict";
	        var t = { autoSelfClosers: { area: !0, base: !0, br: !0, col: !0, command: !0, embed: !0, frame: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0, menuitem: !0 }, implicitlyClosed: { dd: !0, li: !0, optgroup: !0, option: !0, p: !0, rp: !0, rt: !0, tbody: !0, td: !0, tfoot: !0, th: !0, tr: !0 }, contextGrabbers: { dd: { dd: !0, dt: !0 }, dt: { dd: !0, dt: !0 }, li: { li: !0 }, option: { option: !0, optgroup: !0 }, optgroup: { optgroup: !0 }, p: { address: !0, article: !0, aside: !0, blockquote: !0, dir: !0, div: !0, dl: !0, fieldset: !0, footer: !0, form: !0, h1: !0, h2: !0, h3: !0, h4: !0, h5: !0, h6: !0, header: !0, hgroup: !0, hr: !0, menu: !0, nav: !0, ol: !0, p: !0, pre: !0, section: !0, table: !0, ul: !0 }, rp: { rp: !0, rt: !0 }, rt: { rp: !0, rt: !0 }, tbody: { tbody: !0, tfoot: !0 }, td: { td: !0, th: !0 }, tfoot: { tbody: !0 }, th: { td: !0, th: !0 }, thead: { tbody: !0, tfoot: !0 }, tr: { tr: !0 } }, doNotIndent: { pre: !0 }, allowUnquoted: !0, allowMissing: !0, caseFold: !0 },
	            n = { autoSelfClosers: {}, implicitlyClosed: {}, contextGrabbers: {}, doNotIndent: {}, allowUnquoted: !1, allowMissing: !1, caseFold: !1 };e.defineMode("xml", function (r, i) {
	          function o(e, t) {
	            function n(n) {
	              return t.tokenize = n, n(e, t);
	            }var r = e.next();if ("<" == r) return e.eat("!") ? e.eat("[") ? e.match("CDATA[") ? n(s("atom", "]]>")) : null : e.match("--") ? n(s("comment", "--\x3e")) : e.match("DOCTYPE", !0, !0) ? (e.eatWhile(/[\w\._\-]/), n(u(1))) : null : e.eat("?") ? (e.eatWhile(/[\w\._\-]/), t.tokenize = s("meta", "?>"), "meta") : (T = e.eat("/") ? "closeTag" : "openTag", t.tokenize = a, "tag bracket");if ("&" == r) {
	              return (e.eat("#") ? e.eat("x") ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";") : e.eatWhile(/[\d]/) && e.eat(";") : e.eatWhile(/[\w\.\-:]/) && e.eat(";")) ? "atom" : "error";
	            }return e.eatWhile(/[^&<]/), null;
	          }function a(e, t) {
	            var n = e.next();if (">" == n || "/" == n && e.eat(">")) return t.tokenize = o, T = ">" == n ? "endTag" : "selfcloseTag", "tag bracket";if ("=" == n) return T = "equals", null;if ("<" == n) {
	              t.tokenize = o, t.state = d, t.tagName = t.tagStart = null;var r = t.tokenize(e, t);return r ? r + " tag error" : "tag error";
	            }return (/[\'\"]/.test(n) ? (t.tokenize = l(n), t.stringStartCol = e.column(), t.tokenize(e, t)) : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word")
	            );
	          }function l(e) {
	            var t = function t(_t2, n) {
	              for (; !_t2.eol();) {
	                if (_t2.next() == e) {
	                  n.tokenize = a;break;
	                }
	              }return "string";
	            };return t.isInAttribute = !0, t;
	          }function s(e, t) {
	            return function (n, r) {
	              for (; !n.eol();) {
	                if (n.match(t)) {
	                  r.tokenize = o;break;
	                }n.next();
	              }return e;
	            };
	          }function u(e) {
	            return function (t, n) {
	              for (var r; null != (r = t.next());) {
	                if ("<" == r) return n.tokenize = u(e + 1), n.tokenize(t, n);if (">" == r) {
	                  if (1 == e) {
	                    n.tokenize = o;break;
	                  }return n.tokenize = u(e - 1), n.tokenize(t, n);
	                }
	              }return "meta";
	            };
	          }function c(e, t, n) {
	            this.prev = e.context, this.tagName = t, this.indent = e.indented, this.startOfLine = n, (C.doNotIndent.hasOwnProperty(t) || e.context && e.context.noIndent) && (this.noIndent = !0);
	          }function h(e) {
	            e.context && (e.context = e.context.prev);
	          }function f(e, t) {
	            for (var n;;) {
	              if (!e.context) return;if (n = e.context.tagName, !C.contextGrabbers.hasOwnProperty(n) || !C.contextGrabbers[n].hasOwnProperty(t)) return;h(e);
	            }
	          }function d(e, t, n) {
	            return "openTag" == e ? (n.tagStart = t.column(), p) : "closeTag" == e ? m : d;
	          }function p(e, t, n) {
	            return "word" == e ? (n.tagName = t.current(), M = "tag", y) : (M = "error", p);
	          }function m(e, t, n) {
	            if ("word" == e) {
	              var r = t.current();return n.context && n.context.tagName != r && C.implicitlyClosed.hasOwnProperty(n.context.tagName) && h(n), n.context && n.context.tagName == r || !1 === C.matchClosing ? (M = "tag", g) : (M = "tag error", v);
	            }return M = "error", v;
	          }function g(e, t, n) {
	            return "endTag" != e ? (M = "error", g) : (h(n), d);
	          }function v(e, t, n) {
	            return M = "error", g(e, t, n);
	          }function y(e, t, n) {
	            if ("word" == e) return M = "attribute", x;if ("endTag" == e || "selfcloseTag" == e) {
	              var r = n.tagName,
	                  i = n.tagStart;return n.tagName = n.tagStart = null, "selfcloseTag" == e || C.autoSelfClosers.hasOwnProperty(r) ? f(n, r) : (f(n, r), n.context = new c(n, r, i == n.indented)), d;
	            }return M = "error", y;
	          }function x(e, t, n) {
	            return "equals" == e ? b : (C.allowMissing || (M = "error"), y(e, t, n));
	          }function b(e, t, n) {
	            return "string" == e ? w : "word" == e && C.allowUnquoted ? (M = "string", y) : (M = "error", y(e, t, n));
	          }function w(e, t, n) {
	            return "string" == e ? w : y(e, t, n);
	          }var k = r.indentUnit,
	              C = {},
	              S = i.htmlMode ? t : n;for (var L in S) {
	            C[L] = S[L];
	          }for (var L in i) {
	            C[L] = i[L];
	          }var T, M;return o.isInText = !0, { startState: function startState(e) {
	              var t = { tokenize: o, state: d, indented: e || 0, tagName: null, tagStart: null, context: null };return null != e && (t.baseIndent = e), t;
	            }, token: function token(e, t) {
	              if (!t.tagName && e.sol() && (t.indented = e.indentation()), e.eatSpace()) return null;T = null;var n = t.tokenize(e, t);return (n || T) && "comment" != n && (M = null, t.state = t.state(T || n, e, t), M && (n = "error" == M ? n + " error" : M)), n;
	            }, indent: function indent(t, n, r) {
	              var i = t.context;if (t.tokenize.isInAttribute) return t.tagStart == t.indented ? t.stringStartCol + 1 : t.indented + k;if (i && i.noIndent) return e.Pass;if (t.tokenize != a && t.tokenize != o) return r ? r.match(/^(\s*)/)[0].length : 0;if (t.tagName) return !1 !== C.multilineTagIndentPastTag ? t.tagStart + t.tagName.length + 2 : t.tagStart + k * (C.multilineTagIndentFactor || 1);if (C.alignCDATA && /<!\[CDATA\[/.test(n)) return 0;var l = n && /^<(\/)?([\w_:\.-]*)/.exec(n);if (l && l[1]) for (; i;) {
	                if (i.tagName == l[2]) {
	                  i = i.prev;break;
	                }if (!C.implicitlyClosed.hasOwnProperty(i.tagName)) break;i = i.prev;
	              } else if (l) for (; i;) {
	                var s = C.contextGrabbers[i.tagName];if (!s || !s.hasOwnProperty(l[2])) break;i = i.prev;
	              }for (; i && i.prev && !i.startOfLine;) {
	                i = i.prev;
	              }return i ? i.indent + k : t.baseIndent || 0;
	            }, electricInput: /<\/[\s\w:]+>$/, blockCommentStart: "\x3c!--", blockCommentEnd: "--\x3e", configuration: C.htmlMode ? "html" : "xml", helperType: C.htmlMode ? "html" : "xml", skipAttribute: function skipAttribute(e) {
	              e.state == b && (e.state = y);
	            } };
	        }), e.defineMIME("text/xml", "xml"), e.defineMIME("application/xml", "xml"), e.mimeModes.hasOwnProperty("text/html") || e.defineMIME("text/html", { name: "xml", htmlMode: !0 });
	      });
	    }, { "../../lib/codemirror": 10 }], 15: [function (e, t, n) {
	      n.read = function (e, t, n, r, i) {
	        var o,
	            a,
	            l = 8 * i - r - 1,
	            s = (1 << l) - 1,
	            u = s >> 1,
	            c = -7,
	            h = n ? i - 1 : 0,
	            f = n ? -1 : 1,
	            d = e[t + h];for (h += f, o = d & (1 << -c) - 1, d >>= -c, c += l; c > 0; o = 256 * o + e[t + h], h += f, c -= 8) {}for (a = o & (1 << -c) - 1, o >>= -c, c += r; c > 0; a = 256 * a + e[t + h], h += f, c -= 8) {}if (0 === o) o = 1 - u;else {
	          if (o === s) return a ? NaN : 1 / 0 * (d ? -1 : 1);a += Math.pow(2, r), o -= u;
	        }return (d ? -1 : 1) * a * Math.pow(2, o - r);
	      }, n.write = function (e, t, n, r, i, o) {
	        var a,
	            l,
	            s,
	            u = 8 * o - i - 1,
	            c = (1 << u) - 1,
	            h = c >> 1,
	            f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
	            d = r ? 0 : o - 1,
	            p = r ? 1 : -1,
	            m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (l = isNaN(t) ? 1 : 0, a = c) : (a = Math.floor(Math.log(t) / Math.LN2), t * (s = Math.pow(2, -a)) < 1 && (a--, s *= 2), (t += a + h >= 1 ? f / s : f * Math.pow(2, 1 - h)) * s >= 2 && (a++, s /= 2), a + h >= c ? (l = 0, a = c) : a + h >= 1 ? (l = (t * s - 1) * Math.pow(2, i), a += h) : (l = t * Math.pow(2, h - 1) * Math.pow(2, i), a = 0)); i >= 8; e[n + d] = 255 & l, d += p, l /= 256, i -= 8) {}for (a = a << i | l, u += i; u > 0; e[n + d] = 255 & a, d += p, a /= 256, u -= 8) {}e[n + d - p] |= 128 * m;
	      };
	    }, {}], 16: [function (e, t, n) {
	      (function (e) {
	        (function () {
	          function e(e) {
	            this.tokens = [], this.tokens.links = {}, this.options = e || h.defaults, this.rules = f.normal, this.options.gfm && (this.options.tables ? this.rules = f.tables : this.rules = f.gfm);
	          }function r(e, t) {
	            if (this.options = t || h.defaults, this.links = e, this.rules = d.normal, this.renderer = this.options.renderer || new i(), this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");this.options.gfm ? this.options.breaks ? this.rules = d.breaks : this.rules = d.gfm : this.options.pedantic && (this.rules = d.pedantic);
	          }function i(e) {
	            this.options = e || {};
	          }function o(e) {
	            this.tokens = [], this.token = null, this.options = e || h.defaults, this.options.renderer = this.options.renderer || new i(), this.renderer = this.options.renderer, this.renderer.options = this.options;
	          }function a(e, t) {
	            return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
	          }function l(e) {
	            return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function (e, t) {
	              return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "";
	            });
	          }function s(e, t) {
	            return e = e.source, t = t || "", function n(r, i) {
	              return r ? (i = i.source || i, i = i.replace(/(^|[^\[])\^/g, "$1"), e = e.replace(r, i), n) : new RegExp(e, t);
	            };
	          }function u() {}function c(e) {
	            for (var t, n, r = 1; r < arguments.length; r++) {
	              t = arguments[r];for (n in t) {
	                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	              }
	            }return e;
	          }function h(t, n, r) {
	            if (r || "function" == typeof n) {
	              r || (r = n, n = null);var i,
	                  l,
	                  s = (n = c({}, h.defaults, n || {})).highlight,
	                  u = 0;try {
	                i = e.lex(t, n);
	              } catch (e) {
	                return r(e);
	              }l = i.length;var f = function f(e) {
	                if (e) return n.highlight = s, r(e);var t;try {
	                  t = o.parse(i, n);
	                } catch (t) {
	                  e = t;
	                }return n.highlight = s, e ? r(e) : r(null, t);
	              };if (!s || s.length < 3) return f();if (delete n.highlight, !l) return f();for (; u < i.length; u++) {
	                !function (e) {
	                  "code" !== e.type ? --l || f() : s(e.text, e.lang, function (t, n) {
	                    return t ? f(t) : null == n || n === e.text ? --l || f() : (e.text = n, e.escaped = !0, void (--l || f()));
	                  });
	                }(i[u]);
	              }
	            } else try {
	              return n && (n = c({}, h.defaults, n)), o.parse(e.lex(t, n), n);
	            } catch (e) {
	              if (e.message += "\nPlease report this to https://github.com/chjj/marked.", (n || h.defaults).silent) return "<p>An error occured:</p><pre>" + a(e.message + "", !0) + "</pre>";throw e;
	            }
	          }var f = { newline: /^\n+/, code: /^( {4}[^\n]+\n*)+/, fences: u, hr: /^( *[-*_]){3,} *(?:\n+|$)/, heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/, nptable: u, lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/, blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/, list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/, html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/, def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/, table: u, paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/, text: /^[^\n]+/ };f.bullet = /(?:[*+-]|\d+\.)/, f.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, f.item = s(f.item, "gm")(/bull/g, f.bullet)(), f.list = s(f.list)(/bull/g, f.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + f.def.source + ")")(), f.blockquote = s(f.blockquote)("def", f.def)(), f._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b", f.html = s(f.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, f._tag)(), f.paragraph = s(f.paragraph)("hr", f.hr)("heading", f.heading)("lheading", f.lheading)("blockquote", f.blockquote)("tag", "<" + f._tag)("def", f.def)(), f.normal = c({}, f), f.gfm = c({}, f.normal, { fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/, paragraph: /^/, heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/ }), f.gfm.paragraph = s(f.paragraph)("(?!", "(?!" + f.gfm.fences.source.replace("\\1", "\\2") + "|" + f.list.source.replace("\\1", "\\3") + "|")(), f.tables = c({}, f.gfm, { nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/, table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/ }), e.rules = f, e.lex = function (t, n) {
	            return new e(n).lex(t);
	          }, e.prototype.lex = function (e) {
	            return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(e, !0);
	          }, e.prototype.token = function (e, t, n) {
	            for (var r, i, o, a, l, s, u, c, h, e = e.replace(/^ +$/gm, ""); e;) {
	              if ((o = this.rules.newline.exec(e)) && (e = e.substring(o[0].length), o[0].length > 1 && this.tokens.push({ type: "space" })), o = this.rules.code.exec(e)) e = e.substring(o[0].length), o = o[0].replace(/^ {4}/gm, ""), this.tokens.push({ type: "code", text: this.options.pedantic ? o : o.replace(/\n+$/, "") });else if (o = this.rules.fences.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: "code", lang: o[2], text: o[3] || "" });else if (o = this.rules.heading.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: "heading", depth: o[1].length, text: o[2] });else if (t && (o = this.rules.nptable.exec(e))) {
	                for (e = e.substring(o[0].length), s = { type: "table", header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */), align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */), cells: o[3].replace(/\n$/, "").split("\n") }, c = 0; c < s.align.length; c++) {
	                  /^ *-+: *$/.test(s.align[c]) ? s.align[c] = "right" : /^ *:-+: *$/.test(s.align[c]) ? s.align[c] = "center" : /^ *:-+ *$/.test(s.align[c]) ? s.align[c] = "left" : s.align[c] = null;
	                }for (c = 0; c < s.cells.length; c++) {
	                  s.cells[c] = s.cells[c].split(/ *\| */);
	                }this.tokens.push(s);
	              } else if (o = this.rules.lheading.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: "heading", depth: "=" === o[2] ? 1 : 2, text: o[1] });else if (o = this.rules.hr.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: "hr" });else if (o = this.rules.blockquote.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: "blockquote_start" }), o = o[0].replace(/^ *> ?/gm, ""), this.token(o, t, !0), this.tokens.push({ type: "blockquote_end" });else if (o = this.rules.list.exec(e)) {
	                for (e = e.substring(o[0].length), a = o[2], this.tokens.push({ type: "list_start", ordered: a.length > 1 }), r = !1, h = (o = o[0].match(this.rules.item)).length, c = 0; c < h; c++) {
	                  u = (s = o[c]).length, ~(s = s.replace(/^ *([*+-]|\d+\.) +/, "")).indexOf("\n ") && (u -= s.length, s = this.options.pedantic ? s.replace(/^ {1,4}/gm, "") : s.replace(new RegExp("^ {1," + u + "}", "gm"), "")), this.options.smartLists && c !== h - 1 && (a === (l = f.bullet.exec(o[c + 1])[0]) || a.length > 1 && l.length > 1 || (e = o.slice(c + 1).join("\n") + e, c = h - 1)), i = r || /\n\n(?!\s*$)/.test(s), c !== h - 1 && (r = "\n" === s.charAt(s.length - 1), i || (i = r)), this.tokens.push({ type: i ? "loose_item_start" : "list_item_start" }), this.token(s, !1, n), this.tokens.push({ type: "list_item_end" });
	                }this.tokens.push({ type: "list_end" });
	              } else if (o = this.rules.html.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: this.options.sanitize ? "paragraph" : "html", pre: !this.options.sanitizer && ("pre" === o[1] || "script" === o[1] || "style" === o[1]), text: o[0] });else if (!n && t && (o = this.rules.def.exec(e))) e = e.substring(o[0].length), this.tokens.links[o[1].toLowerCase()] = { href: o[2], title: o[3] };else if (t && (o = this.rules.table.exec(e))) {
	                for (e = e.substring(o[0].length), s = { type: "table", header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */), align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */), cells: o[3].replace(/(?: *\| *)?\n$/, "").split("\n") }, c = 0; c < s.align.length; c++) {
	                  /^ *-+: *$/.test(s.align[c]) ? s.align[c] = "right" : /^ *:-+: *$/.test(s.align[c]) ? s.align[c] = "center" : /^ *:-+ *$/.test(s.align[c]) ? s.align[c] = "left" : s.align[c] = null;
	                }for (c = 0; c < s.cells.length; c++) {
	                  s.cells[c] = s.cells[c].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
	                }this.tokens.push(s);
	              } else if (t && (o = this.rules.paragraph.exec(e))) e = e.substring(o[0].length), this.tokens.push({ type: "paragraph", text: "\n" === o[1].charAt(o[1].length - 1) ? o[1].slice(0, -1) : o[1] });else if (o = this.rules.text.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: "text", text: o[0] });else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
	            }return this.tokens;
	          };var d = { escape: /^\\([\\`*{}\[\]()#+\-.!_>])/, autolink: /^<([^ >]+(@|:\/)[^ >]+)>/, url: u, tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/, link: /^!?\[(inside)\]\(href\)/, reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/, nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/, strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/, em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/, code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/, br: /^ {2,}\n(?!\s*$)/, del: u, text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/ };d._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/, d._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, d.link = s(d.link)("inside", d._inside)("href", d._href)(), d.reflink = s(d.reflink)("inside", d._inside)(), d.normal = c({}, d), d.pedantic = c({}, d.normal, { strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/ }), d.gfm = c({}, d.normal, { escape: s(d.escape)("])", "~|])")(), url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, del: /^~~(?=\S)([\s\S]*?\S)~~/, text: s(d.text)("]|", "~]|")("|", "|https?://|")() }), d.breaks = c({}, d.gfm, { br: s(d.br)("{2,}", "*")(), text: s(d.gfm.text)("{2,}", "*")() }), r.rules = d, r.output = function (e, t, n) {
	            return new r(t, n).output(e);
	          }, r.prototype.output = function (e) {
	            for (var t, n, r, i, o = ""; e;) {
	              if (i = this.rules.escape.exec(e)) e = e.substring(i[0].length), o += i[1];else if (i = this.rules.autolink.exec(e)) e = e.substring(i[0].length), "@" === i[2] ? (n = ":" === i[1].charAt(6) ? this.mangle(i[1].substring(7)) : this.mangle(i[1]), r = this.mangle("mailto:") + n) : r = n = a(i[1]), o += this.renderer.link(r, null, n);else if (this.inLink || !(i = this.rules.url.exec(e))) {
	                if (i = this.rules.tag.exec(e)) !this.inLink && /^<a /i.test(i[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(i[0]) && (this.inLink = !1), e = e.substring(i[0].length), o += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : a(i[0]) : i[0];else if (i = this.rules.link.exec(e)) e = e.substring(i[0].length), this.inLink = !0, o += this.outputLink(i, { href: i[2], title: i[3] }), this.inLink = !1;else if ((i = this.rules.reflink.exec(e)) || (i = this.rules.nolink.exec(e))) {
	                  if (e = e.substring(i[0].length), t = (i[2] || i[1]).replace(/\s+/g, " "), !(t = this.links[t.toLowerCase()]) || !t.href) {
	                    o += i[0].charAt(0), e = i[0].substring(1) + e;continue;
	                  }this.inLink = !0, o += this.outputLink(i, t), this.inLink = !1;
	                } else if (i = this.rules.strong.exec(e)) e = e.substring(i[0].length), o += this.renderer.strong(this.output(i[2] || i[1]));else if (i = this.rules.em.exec(e)) e = e.substring(i[0].length), o += this.renderer.em(this.output(i[2] || i[1]));else if (i = this.rules.code.exec(e)) e = e.substring(i[0].length), o += this.renderer.codespan(a(i[2], !0));else if (i = this.rules.br.exec(e)) e = e.substring(i[0].length), o += this.renderer.br();else if (i = this.rules.del.exec(e)) e = e.substring(i[0].length), o += this.renderer.del(this.output(i[1]));else if (i = this.rules.text.exec(e)) e = e.substring(i[0].length), o += this.renderer.text(a(this.smartypants(i[0])));else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
	              } else e = e.substring(i[0].length), r = n = a(i[1]), o += this.renderer.link(r, null, n);
	            }return o;
	          }, r.prototype.outputLink = function (e, t) {
	            var n = a(t.href),
	                r = t.title ? a(t.title) : null;return "!" !== e[0].charAt(0) ? this.renderer.link(n, r, this.output(e[1])) : this.renderer.image(n, r, a(e[1]));
	          }, r.prototype.smartypants = function (e) {
	            return this.options.smartypants ? e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : e;
	          }, r.prototype.mangle = function (e) {
	            if (!this.options.mangle) return e;for (var t, n = "", r = e.length, i = 0; i < r; i++) {
	              t = e.charCodeAt(i), Math.random() > .5 && (t = "x" + t.toString(16)), n += "&#" + t + ";";
	            }return n;
	          }, i.prototype.code = function (e, t, n) {
	            if (this.options.highlight) {
	              var r = this.options.highlight(e, t);null != r && r !== e && (n = !0, e = r);
	            }return t ? '<pre><code class="' + this.options.langPrefix + a(t, !0) + '">' + (n ? e : a(e, !0)) + "\n</code></pre>\n" : "<pre><code>" + (n ? e : a(e, !0)) + "\n</code></pre>";
	          }, i.prototype.blockquote = function (e) {
	            return "<blockquote>\n" + e + "</blockquote>\n";
	          }, i.prototype.html = function (e) {
	            return e;
	          }, i.prototype.heading = function (e, t, n) {
	            return "<h" + t + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-") + '">' + e + "</h" + t + ">\n";
	          }, i.prototype.hr = function () {
	            return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
	          }, i.prototype.list = function (e, t) {
	            var n = t ? "ol" : "ul";return "<" + n + ">\n" + e + "</" + n + ">\n";
	          }, i.prototype.listitem = function (e) {
	            return "<li>" + e + "</li>\n";
	          }, i.prototype.paragraph = function (e) {
	            return "<p>" + e + "</p>\n";
	          }, i.prototype.table = function (e, t) {
	            return "<table>\n<thead>\n" + e + "</thead>\n<tbody>\n" + t + "</tbody>\n</table>\n";
	          }, i.prototype.tablerow = function (e) {
	            return "<tr>\n" + e + "</tr>\n";
	          }, i.prototype.tablecell = function (e, t) {
	            var n = t.header ? "th" : "td";return (t.align ? "<" + n + ' style="text-align:' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n";
	          }, i.prototype.strong = function (e) {
	            return "<strong>" + e + "</strong>";
	          }, i.prototype.em = function (e) {
	            return "<em>" + e + "</em>";
	          }, i.prototype.codespan = function (e) {
	            return "<code>" + e + "</code>";
	          }, i.prototype.br = function () {
	            return this.options.xhtml ? "<br/>" : "<br>";
	          }, i.prototype.del = function (e) {
	            return "<del>" + e + "</del>";
	          }, i.prototype.link = function (e, t, n) {
	            if (this.options.sanitize) {
	              try {
	                var r = decodeURIComponent(l(e)).replace(/[^\w:]/g, "").toLowerCase();
	              } catch (e) {
	                return "";
	              }if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:")) return "";
	            }var i = '<a href="' + e + '"';return t && (i += ' title="' + t + '"'), i += ">" + n + "</a>";
	          }, i.prototype.image = function (e, t, n) {
	            var r = '<img src="' + e + '" alt="' + n + '"';return t && (r += ' title="' + t + '"'), r += this.options.xhtml ? "/>" : ">";
	          }, i.prototype.text = function (e) {
	            return e;
	          }, o.parse = function (e, t, n) {
	            return new o(t, n).parse(e);
	          }, o.prototype.parse = function (e) {
	            this.inline = new r(e.links, this.options, this.renderer), this.tokens = e.reverse();for (var t = ""; this.next();) {
	              t += this.tok();
	            }return t;
	          }, o.prototype.next = function () {
	            return this.token = this.tokens.pop();
	          }, o.prototype.peek = function () {
	            return this.tokens[this.tokens.length - 1] || 0;
	          }, o.prototype.parseText = function () {
	            for (var e = this.token.text; "text" === this.peek().type;) {
	              e += "\n" + this.next().text;
	            }return this.inline.output(e);
	          }, o.prototype.tok = function () {
	            switch (this.token.type) {case "space":
	                return "";case "hr":
	                return this.renderer.hr();case "heading":
	                return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);case "code":
	                return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);case "table":
	                var e,
	                    t,
	                    n,
	                    r,
	                    i = "",
	                    o = "";for (n = "", e = 0; e < this.token.header.length; e++) {
	                  ({ header: !0, align: this.token.align[e] }), n += this.renderer.tablecell(this.inline.output(this.token.header[e]), { header: !0, align: this.token.align[e] });
	                }for (i += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
	                  for (t = this.token.cells[e], n = "", r = 0; r < t.length; r++) {
	                    n += this.renderer.tablecell(this.inline.output(t[r]), { header: !1, align: this.token.align[r] });
	                  }o += this.renderer.tablerow(n);
	                }return this.renderer.table(i, o);case "blockquote_start":
	                for (o = ""; "blockquote_end" !== this.next().type;) {
	                  o += this.tok();
	                }return this.renderer.blockquote(o);case "list_start":
	                for (var o = "", a = this.token.ordered; "list_end" !== this.next().type;) {
	                  o += this.tok();
	                }return this.renderer.list(o, a);case "list_item_start":
	                for (o = ""; "list_item_end" !== this.next().type;) {
	                  o += "text" === this.token.type ? this.parseText() : this.tok();
	                }return this.renderer.listitem(o);case "loose_item_start":
	                for (o = ""; "list_item_end" !== this.next().type;) {
	                  o += this.tok();
	                }return this.renderer.listitem(o);case "html":
	                var l = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);return this.renderer.html(l);case "paragraph":
	                return this.renderer.paragraph(this.inline.output(this.token.text));case "text":
	                return this.renderer.paragraph(this.parseText());}
	          }, u.exec = u, h.options = h.setOptions = function (e) {
	            return c(h.defaults, e), h;
	          }, h.defaults = { gfm: !0, tables: !0, breaks: !1, pedantic: !1, sanitize: !1, sanitizer: null, mangle: !0, smartLists: !1, silent: !1, highlight: null, langPrefix: "lang-", smartypants: !1, headerPrefix: "", renderer: new i(), xhtml: !1 }, h.Parser = o, h.parser = o.parse, h.Renderer = i, h.Lexer = e, h.lexer = e.lex, h.InlineLexer = r, h.inlineLexer = r.output, h.parse = h, void 0 !== t && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? t.exports = h : this.marked = h;
	        }).call(function () {
	          return this || ("undefined" != typeof window ? window : e);
	        }());
	      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
	    }, {}], 17: [function (e, t, n) {
	      (function (n, r) {
	        var i;!function () {
	          "use strict";
	          (i = function i(e, t, n, _i2) {
	            function o(e, t) {
	              var n = p._readFile(e, null, _i2.asyncLoad);_i2.asyncLoad ? n.then(function (e) {
	                t(e);
	              }) : t(n);
	            }function a(e) {
	              t = e, n && s();
	            }function l(e) {
	              n = e, t && s();
	            }function s() {
	              for (p.rules = p._parseAFF(t), p.compoundRuleCodes = {}, c = 0, f = p.compoundRules.length; c < f; c++) {
	                var e = p.compoundRules[c];for (h = 0, d = e.length; h < d; h++) {
	                  p.compoundRuleCodes[e[h]] = [];
	                }
	              }"ONLYINCOMPOUND" in p.flags && (p.compoundRuleCodes[p.flags.ONLYINCOMPOUND] = []), p.dictionaryTable = p._parseDIC(n);for (c in p.compoundRuleCodes) {
	                0 === p.compoundRuleCodes[c].length && delete p.compoundRuleCodes[c];
	              }for (c = 0, f = p.compoundRules.length; c < f; c++) {
	                var r = p.compoundRules[c],
	                    o = "";for (h = 0, d = r.length; h < d; h++) {
	                  var a = r[h];a in p.compoundRuleCodes ? o += "(" + p.compoundRuleCodes[a].join("|") + ")" : o += a;
	                }p.compoundRules[c] = new RegExp(o, "i");
	              }p.loaded = !0, _i2.asyncLoad && _i2.loadedCallback && _i2.loadedCallback(p);
	            }_i2 = _i2 || {}, this.dictionary = null, this.rules = {}, this.dictionaryTable = {}, this.compoundRules = [], this.compoundRuleCodes = {}, this.replacementTable = [], this.flags = _i2.flags || {}, this.memoized = {}, this.loaded = !1;var u,
	                c,
	                h,
	                f,
	                d,
	                p = this;return e && (p.dictionary = e, t && n ? s() : "undefined" != typeof window && "chrome" in window && "extension" in window.chrome && "getURL" in window.chrome.extension ? (u = _i2.dictionaryPath ? _i2.dictionaryPath : "typo/dictionaries", t || o(chrome.extension.getURL(u + "/" + e + "/" + e + ".aff"), a), n || o(chrome.extension.getURL(u + "/" + e + "/" + e + ".dic"), l)) : (u = _i2.dictionaryPath ? _i2.dictionaryPath : void 0 !== r ? r + "/dictionaries" : "./dictionaries", t || o(u + "/" + e + "/" + e + ".aff", a), n || o(u + "/" + e + "/" + e + ".dic", l))), this;
	          }).prototype = { load: function load(e) {
	              for (var t in e) {
	                e.hasOwnProperty(t) && (this[t] = e[t]);
	              }return this;
	            }, _readFile: function _readFile(t, r, i) {
	              if (r = r || "utf8", "undefined" != typeof XMLHttpRequest) {
	                var o,
	                    a = new XMLHttpRequest();return a.open("GET", t, i), i && (o = new Promise(function (e, t) {
	                  a.onload = function () {
	                    200 === a.status ? e(a.responseText) : t(a.statusText);
	                  }, a.onerror = function () {
	                    t(a.statusText);
	                  };
	                })), a.overrideMimeType && a.overrideMimeType("text/plain; charset=" + r), a.send(null), i ? o : a.responseText;
	              }if (void 0 !== e) {
	                var l = e("fs");try {
	                  if (l.existsSync(t)) {
	                    var s = l.statSync(t),
	                        u = l.openSync(t, "r"),
	                        c = new n(s.size);return l.readSync(u, c, 0, c.length, null), c.toString(r, 0, c.length);
	                  }console.log("Path " + t + " does not exist.");
	                } catch (e) {
	                  return console.log(e), "";
	                }
	              }
	            }, _parseAFF: function _parseAFF(e) {
	              var t,
	                  n,
	                  r,
	                  i,
	                  o,
	                  a,
	                  l,
	                  s,
	                  u = {},
	                  c = (e = this._removeAffixComments(e)).split("\n");for (o = 0, l = c.length; o < l; o++) {
	                var h = (t = c[o]).split(/\s+/),
	                    f = h[0];if ("PFX" == f || "SFX" == f) {
	                  var d = h[1],
	                      p = h[2],
	                      m = [];for (a = o + 1, s = o + 1 + (r = parseInt(h[3], 10)); a < s; a++) {
	                    var g = (i = (n = c[a]).split(/\s+/))[2],
	                        v = i[3].split("/"),
	                        y = v[0];"0" === y && (y = "");var x = this.parseRuleCodes(v[1]),
	                        b = i[4],
	                        w = {};w.add = y, x.length > 0 && (w.continuationClasses = x), "." !== b && (w.match = "SFX" === f ? new RegExp(b + "$") : new RegExp("^" + b)), "0" != g && (w.remove = "SFX" === f ? new RegExp(g + "$") : g), m.push(w);
	                  }u[d] = { type: f, combineable: "Y" == p, entries: m }, o += r;
	                } else if ("COMPOUNDRULE" === f) {
	                  for (a = o + 1, s = o + 1 + (r = parseInt(h[1], 10)); a < s; a++) {
	                    i = (t = c[a]).split(/\s+/), this.compoundRules.push(i[1]);
	                  }o += r;
	                } else "REP" === f ? 3 === (i = t.split(/\s+/)).length && this.replacementTable.push([i[1], i[2]]) : this.flags[f] = h[1];
	              }return u;
	            }, _removeAffixComments: function _removeAffixComments(e) {
	              return e = e.replace(/^\s*#.*$/gm, ""), e = e.replace(/^\s\s*/m, "").replace(/\s\s*$/m, ""), e = e.replace(/\n{2,}/g, "\n"), e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
	            }, _parseDIC: function _parseDIC(e) {
	              function t(e, t) {
	                r.hasOwnProperty(e) || (r[e] = null), t.length > 0 && (null === r[e] && (r[e] = []), r[e].push(t));
	              }for (var n = (e = this._removeDicComments(e)).split("\n"), r = {}, i = 1, o = n.length; i < o; i++) {
	                var a = n[i].split("/", 2),
	                    l = a[0];if (a.length > 1) {
	                  var s = this.parseRuleCodes(a[1]);"NEEDAFFIX" in this.flags && -1 != s.indexOf(this.flags.NEEDAFFIX) || t(l, s);for (var u = 0, c = s.length; u < c; u++) {
	                    var h = s[u],
	                        f = this.rules[h];if (f) for (var d = this._applyRule(l, f), p = 0, m = d.length; p < m; p++) {
	                      var g = d[p];if (t(g, []), f.combineable) for (var v = u + 1; v < c; v++) {
	                        var y = s[v],
	                            x = this.rules[y];if (x && x.combineable && f.type != x.type) for (var b = this._applyRule(g, x), w = 0, k = b.length; w < k; w++) {
	                          t(b[w], []);
	                        }
	                      }
	                    }h in this.compoundRuleCodes && this.compoundRuleCodes[h].push(l);
	                  }
	                } else t(l.trim(), []);
	              }return r;
	            }, _removeDicComments: function _removeDicComments(e) {
	              return e = e.replace(/^\t.*$/gm, "");
	            }, parseRuleCodes: function parseRuleCodes(e) {
	              if (!e) return [];if (!("FLAG" in this.flags)) return e.split("");if ("long" === this.flags.FLAG) {
	                for (var t = [], n = 0, r = e.length; n < r; n += 2) {
	                  t.push(e.substr(n, 2));
	                }return t;
	              }return "num" === this.flags.FLAG ? e.split(",") : void 0;
	            }, _applyRule: function _applyRule(e, t) {
	              for (var n = t.entries, r = [], i = 0, o = n.length; i < o; i++) {
	                var a = n[i];if (!a.match || e.match(a.match)) {
	                  var l = e;if (a.remove && (l = l.replace(a.remove, "")), "SFX" === t.type ? l += a.add : l = a.add + l, r.push(l), "continuationClasses" in a) for (var s = 0, u = a.continuationClasses.length; s < u; s++) {
	                    var c = this.rules[a.continuationClasses[s]];c && (r = r.concat(this._applyRule(l, c)));
	                  }
	                }
	              }return r;
	            }, check: function check(e) {
	              if (!this.loaded) throw "Dictionary not loaded.";var t = e.replace(/^\s\s*/, "").replace(/\s\s*$/, "");if (this.checkExact(t)) return !0;if (t.toUpperCase() === t) {
	                var n = t[0] + t.substring(1).toLowerCase();if (this.hasFlag(n, "KEEPCASE")) return !1;if (this.checkExact(n)) return !0;
	              }var r = t.toLowerCase();if (r !== t) {
	                if (this.hasFlag(r, "KEEPCASE")) return !1;if (this.checkExact(r)) return !0;
	              }return !1;
	            }, checkExact: function checkExact(e) {
	              if (!this.loaded) throw "Dictionary not loaded.";var t,
	                  n,
	                  r = this.dictionaryTable[e];if (void 0 === r) {
	                if ("COMPOUNDMIN" in this.flags && e.length >= this.flags.COMPOUNDMIN) for (t = 0, n = this.compoundRules.length; t < n; t++) {
	                  if (e.match(this.compoundRules[t])) return !0;
	                }
	              } else {
	                if (null === r) return !0;if ("object" == (typeof r === "undefined" ? "undefined" : _typeof(r))) for (t = 0, n = r.length; t < n; t++) {
	                  if (!this.hasFlag(e, "ONLYINCOMPOUND", r[t])) return !0;
	                }
	              }return !1;
	            }, hasFlag: function hasFlag(e, t, n) {
	              if (!this.loaded) throw "Dictionary not loaded.";return !!(t in this.flags && (void 0 === n && (n = Array.prototype.concat.apply([], this.dictionaryTable[e])), n && -1 !== n.indexOf(this.flags[t])));
	            }, alphabet: "", suggest: function suggest(e, t) {
	              function n(e) {
	                var t,
	                    n,
	                    r,
	                    i,
	                    o,
	                    a,
	                    l = [];for (t = 0, i = e.length; t < i; t++) {
	                  var s = e[t];for (n = 0, o = s.length + 1; n < o; n++) {
	                    var c = [s.substring(0, n), s.substring(n)];if (c[1] && l.push(c[0] + c[1].substring(1)), c[1].length > 1 && c[1][1] !== c[1][0] && l.push(c[0] + c[1][1] + c[1][0] + c[1].substring(2)), c[1]) for (r = 0, a = u.alphabet.length; r < a; r++) {
	                      u.alphabet[r] != c[1].substring(0, 1) && l.push(c[0] + u.alphabet[r] + c[1].substring(1));
	                    }if (c[1]) for (r = 0, a = u.alphabet.length; r < a; r++) {
	                      l.push(c[0] + u.alphabet[r] + c[1]);
	                    }
	                  }
	                }return l;
	              }function r(e) {
	                for (var t = [], n = 0, r = e.length; n < r; n++) {
	                  u.check(e[n]) && t.push(e[n]);
	                }return t;
	              }if (!this.loaded) throw "Dictionary not loaded.";if (t = t || 5, this.memoized.hasOwnProperty(e)) {
	                var i = this.memoized[e].limit;if (t <= i || this.memoized[e].suggestions.length < i) return this.memoized[e].suggestions.slice(0, t);
	              }if (this.check(e)) return [];for (var o = 0, a = this.replacementTable.length; o < a; o++) {
	                var l = this.replacementTable[o];if (-1 !== e.indexOf(l[0])) {
	                  var s = e.replace(l[0], l[1]);if (this.check(s)) return [s];
	                }
	              }var u = this;return u.alphabet = "abcdefghijklmnopqrstuvwxyz", this.memoized[e] = { suggestions: function (e) {
	                  var i,
	                      o,
	                      a = n([e]),
	                      l = n(a),
	                      s = r(a.concat(l)),
	                      c = {};for (i = 0, o = s.length; i < o; i++) {
	                    s[i] in c ? c[s[i]] += 1 : c[s[i]] = 1;
	                  }var h = [];for (i in c) {
	                    c.hasOwnProperty(i) && h.push([i, c[i]]);
	                  }h.sort(function (e, t) {
	                    return e[1] < t[1] ? -1 : 1;
	                  }).reverse();var f = [],
	                      d = "lowercase";for (e.toUpperCase() === e ? d = "uppercase" : e.substr(0, 1).toUpperCase() + e.substr(1).toLowerCase() === e && (d = "capitalized"), i = 0, o = Math.min(t, h.length); i < o; i++) {
	                    "uppercase" === d ? h[i][0] = h[i][0].toUpperCase() : "capitalized" === d && (h[i][0] = h[i][0].substr(0, 1).toUpperCase() + h[i][0].substr(1)), u.hasFlag(h[i][0], "NOSUGGEST") || f.push(h[i][0]);
	                  }return f;
	                }(e), limit: t }, this.memoized[e].suggestions;
	            } };
	        }(), void 0 !== t && (t.exports = i);
	      }).call(this, e("buffer").Buffer, "/node_modules/typo-js");
	    }, { buffer: 3, fs: 2 }], 18: [function (e, t, n) {
	      var r = e("codemirror");r.commands.tabAndIndentMarkdownList = function (e) {
	        var t = e.listSelections()[0].head;if (!1 !== e.getStateAfter(t.line).list) e.execCommand("indentMore");else if (e.options.indentWithTabs) e.execCommand("insertTab");else {
	          var n = Array(e.options.tabSize + 1).join(" ");e.replaceSelection(n);
	        }
	      }, r.commands.shiftTabAndUnindentMarkdownList = function (e) {
	        var t = e.listSelections()[0].head;if (!1 !== e.getStateAfter(t.line).list) e.execCommand("indentLess");else if (e.options.indentWithTabs) e.execCommand("insertTab");else {
	          var n = Array(e.options.tabSize + 1).join(" ");e.replaceSelection(n);
	        }
	      };
	    }, { codemirror: 10 }], 19: [function (e, t, n) {
	      "use strict";
	      function r(e) {
	        return e = q ? e.replace("Ctrl", "Cmd") : e.replace("Cmd", "Ctrl");
	      }function i(e, t, n) {
	        e = e || {};var r = document.createElement("a");return t = void 0 == t || t, e.title && t && (r.title = a(e.title, e.action, n), q && (r.title = r.title.replace("Ctrl", "⌘"), r.title = r.title.replace("Alt", "⌥"))), r.tabIndex = -1, r.className = e.className, r;
	      }function o() {
	        var e = document.createElement("i");return e.className = "separator", e.innerHTML = "|", e;
	      }function a(e, t, n) {
	        var i,
	            o = e;return t && n[i = $(t)] && (o += " (" + r(n[i]) + ")"), o;
	      }function l(e, t) {
	        t = t || e.getCursor("start");var n = e.getTokenAt(t);if (!n.type) return {};for (var r, i, o = n.type.split(" "), a = {}, l = 0; l < o.length; l++) {
	          "strong" === (r = o[l]) ? a.bold = !0 : "variable-2" === r ? (i = e.getLine(t.line), /^\s*\d+\.\s/.test(i) ? a["ordered-list"] = !0 : a["unordered-list"] = !0) : "atom" === r ? a.quote = !0 : "em" === r ? a.italic = !0 : "quote" === r ? a.quote = !0 : "strikethrough" === r ? a.strikethrough = !0 : "comment" === r ? a.code = !0 : "link" === r ? a.link = !0 : "tag" === r ? a.image = !0 : r.match(/^header(\-[1-6])?$/) && (a[r.replace("header", "heading")] = !0);
	        }return a;
	      }function s(e) {
	        var t = e.codemirror;t.setOption("fullScreen", !t.getOption("fullScreen")), t.getOption("fullScreen") ? (X = document.body.style.overflow, document.body.style.overflow = "hidden") : document.body.style.overflow = X;var n = t.getWrapperElement();/fullscreen/.test(n.previousSibling.className) ? n.previousSibling.className = n.previousSibling.className.replace(/\s*fullscreen\b/, "") : n.previousSibling.className += " fullscreen";var r = e.toolbarElements.fullscreen;/active/.test(r.className) ? r.className = r.className.replace(/\s*active\s*/g, "") : r.className += " active";var i = t.getWrapperElement().nextSibling;/editor-preview-active-side/.test(i.className) && N(e);
	      }function u(e) {
	        D(e, "bold", e.options.blockStyles.bold);
	      }function c(e) {
	        D(e, "italic", e.options.blockStyles.italic);
	      }function h(e) {
	        D(e, "strikethrough", "~~");
	      }function f(e) {
	        function t(e) {
	          if ("object" != (typeof e === "undefined" ? "undefined" : _typeof(e))) throw "fencing_line() takes a 'line' object (not a line number, or line text).  Got: " + (typeof e === "undefined" ? "undefined" : _typeof(e)) + ": " + e;return e.styles && e.styles[2] && -1 !== e.styles[2].indexOf("formatting-code-block");
	        }function n(e) {
	          return e.state.base.base || e.state.base;
	        }function r(e, r, i, o, a) {
	          i = i || e.getLineHandle(r), o = o || e.getTokenAt({ line: r, ch: 1 }), a = a || !!i.text && e.getTokenAt({ line: r, ch: i.text.length - 1 });var l = o.type ? o.type.split(" ") : [];return a && n(a).indentedCode ? "indented" : -1 !== l.indexOf("comment") && (n(o).fencedChars || n(a).fencedChars || t(i) ? "fenced" : "single");
	        }var i,
	            o,
	            a,
	            l = e.options.blockStyles.code,
	            s = e.codemirror,
	            u = s.getCursor("start"),
	            c = s.getCursor("end"),
	            h = s.getTokenAt({ line: u.line, ch: u.ch || 1 }),
	            f = s.getLineHandle(u.line),
	            d = r(s, u.line, f, h);if ("single" === d) {
	          var p = f.text.slice(0, u.ch).replace("`", ""),
	              m = f.text.slice(u.ch).replace("`", "");s.replaceRange(p + m, { line: u.line, ch: 0 }, { line: u.line, ch: 99999999999999 }), u.ch--, u !== c && c.ch--, s.setSelection(u, c), s.focus();
	        } else if ("fenced" === d) {
	          if (u.line !== c.line || u.ch !== c.ch) {
	            for (i = u.line; i >= 0 && (f = s.getLineHandle(i), !t(f)); i--) {}var g,
	                v,
	                y,
	                x,
	                b = n(s.getTokenAt({ line: i, ch: 1 })).fencedChars;t(s.getLineHandle(u.line)) ? (g = "", v = u.line) : t(s.getLineHandle(u.line - 1)) ? (g = "", v = u.line - 1) : (g = b + "\n", v = u.line), t(s.getLineHandle(c.line)) ? (y = "", x = c.line, 0 === c.ch && (x += 1)) : 0 !== c.ch && t(s.getLineHandle(c.line + 1)) ? (y = "", x = c.line + 1) : (y = b + "\n", x = c.line + 1), 0 === c.ch && (x -= 1), s.operation(function () {
	              s.replaceRange(y, { line: x, ch: 0 }, { line: x + (y ? 0 : 1), ch: 0 }), s.replaceRange(g, { line: v, ch: 0 }, { line: v + (g ? 0 : 1), ch: 0 });
	            }), s.setSelection({ line: v + (g ? 1 : 0), ch: 0 }, { line: x + (g ? 1 : -1), ch: 0 }), s.focus();
	          } else {
	            var w = u.line;if (t(s.getLineHandle(u.line)) && ("fenced" === r(s, u.line + 1) ? (i = u.line, w = u.line + 1) : (o = u.line, w = u.line - 1)), void 0 === i) for (i = w; i >= 0 && (f = s.getLineHandle(i), !t(f)); i--) {}if (void 0 === o) for (a = s.lineCount(), o = w; o < a && (f = s.getLineHandle(o), !t(f)); o++) {}s.operation(function () {
	              s.replaceRange("", { line: i, ch: 0 }, { line: i + 1, ch: 0 }), s.replaceRange("", { line: o - 1, ch: 0 }, { line: o, ch: 0 });
	            }), s.focus();
	          }
	        } else if ("indented" === d) {
	          if (u.line !== c.line || u.ch !== c.ch) i = u.line, o = c.line, 0 === c.ch && o--;else {
	            for (i = u.line; i >= 0; i--) {
	              if (!(f = s.getLineHandle(i)).text.match(/^\s*$/) && "indented" !== r(s, i, f)) {
	                i += 1;break;
	              }
	            }for (a = s.lineCount(), o = u.line; o < a; o++) {
	              if (!(f = s.getLineHandle(o)).text.match(/^\s*$/) && "indented" !== r(s, o, f)) {
	                o -= 1;break;
	              }
	            }
	          }var k = s.getLineHandle(o + 1),
	              C = k && s.getTokenAt({ line: o + 1, ch: k.text.length - 1 });C && n(C).indentedCode && s.replaceRange("\n", { line: o + 1, ch: 0 });for (var S = i; S <= o; S++) {
	            s.indentLine(S, "subtract");
	          }s.focus();
	        } else {
	          var L = u.line === c.line && u.ch === c.ch && 0 === u.ch,
	              T = u.line !== c.line;L || T ? function (e, t, n, r) {
	            var i = t.line + 1,
	                o = n.line + 1,
	                a = t.line !== n.line,
	                l = r + "\n",
	                s = "\n" + r;a && o++, a && 0 === n.ch && (s = r + "\n", o--), E(e, !1, [l, s]), e.setSelection({ line: i, ch: 0 }, { line: o, ch: 0 });
	          }(s, u, c, l) : E(s, !1, ["`", "`"]);
	        }
	      }function d(e) {
	        I(e.codemirror, "quote");
	      }function p(e) {
	        O(e.codemirror, "smaller");
	      }function m(e) {
	        O(e.codemirror, "bigger");
	      }function g(e) {
	        O(e.codemirror, void 0, 1);
	      }function v(e) {
	        O(e.codemirror, void 0, 2);
	      }function y(e) {
	        O(e.codemirror, void 0, 3);
	      }function x(e) {
	        I(e.codemirror, "unordered-list");
	      }function b(e) {
	        I(e.codemirror, "ordered-list");
	      }function w(e) {
	        H(e.codemirror);
	      }function k(e) {
	        var t = e.codemirror,
	            n = l(t),
	            r = e.options,
	            i = "http://";if (r.promptURLs && !(i = prompt(r.promptTexts.link))) return !1;E(t, n.link, r.insertTexts.link, i);
	      }function C(e) {
	        var t = e.codemirror,
	            n = l(t),
	            r = e.options,
	            i = "http://";if (r.promptURLs && !(i = prompt(r.promptTexts.image))) return !1;E(t, n.image, r.insertTexts.image, i);
	      }function S(e) {
	        var t = e.codemirror,
	            n = l(t),
	            r = e.options;E(t, n.table, r.insertTexts.table);
	      }function L(e) {
	        var t = e.codemirror,
	            n = l(t),
	            r = e.options;E(t, n.image, r.insertTexts.horizontalRule);
	      }function T(e) {
	        var t = e.codemirror;t.undo(), t.focus();
	      }function M(e) {
	        var t = e.codemirror;t.redo(), t.focus();
	      }function N(e) {
	        var t = e.codemirror,
	            n = t.getWrapperElement(),
	            r = n.nextSibling,
	            i = e.toolbarElements["side-by-side"],
	            o = !1;/editor-preview-active-side/.test(r.className) ? (r.className = r.className.replace(/\s*editor-preview-active-side\s*/g, ""), i.className = i.className.replace(/\s*active\s*/g, ""), n.className = n.className.replace(/\s*CodeMirror-sided\s*/g, " ")) : (setTimeout(function () {
	          t.getOption("fullScreen") || s(e), r.className += " editor-preview-active-side";
	        }, 1), i.className += " active", n.className += " CodeMirror-sided", o = !0);var a = n.lastChild;if (/editor-preview-active/.test(a.className)) {
	          a.className = a.className.replace(/\s*editor-preview-active\s*/g, "");var l = e.toolbarElements.preview,
	              u = n.previousSibling;l.className = l.className.replace(/\s*active\s*/g, ""), u.className = u.className.replace(/\s*disabled-for-preview*/g, "");
	        }t.sideBySideRenderingFunction || (t.sideBySideRenderingFunction = function () {
	          r.innerHTML = e.options.previewRender(e.value(), r);
	        }), o ? (r.innerHTML = e.options.previewRender(e.value(), r), t.on("update", t.sideBySideRenderingFunction)) : t.off("update", t.sideBySideRenderingFunction), t.refresh();
	      }function A(e) {
	        var t = e.codemirror,
	            n = t.getWrapperElement(),
	            r = n.previousSibling,
	            i = !!e.options.toolbar && e.toolbarElements.preview,
	            o = n.lastChild;o && /editor-preview/.test(o.className) || ((o = document.createElement("div")).className = "editor-preview", n.appendChild(o)), /editor-preview-active/.test(o.className) ? (o.className = o.className.replace(/\s*editor-preview-active\s*/g, ""), i && (i.className = i.className.replace(/\s*active\s*/g, ""), r.className = r.className.replace(/\s*disabled-for-preview*/g, ""))) : (setTimeout(function () {
	          o.className += " editor-preview-active";
	        }, 1), i && (i.className += " active", r.className += " disabled-for-preview")), o.innerHTML = e.options.previewRender(e.value(), o);var a = t.getWrapperElement().nextSibling;/editor-preview-active-side/.test(a.className) && N(e);
	      }function E(e, t, n, r) {
	        if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) {
	          var i,
	              o = n[0],
	              a = n[1],
	              l = e.getCursor("start"),
	              s = e.getCursor("end");r && (a = a.replace("#url#", r)), t ? (o = (i = e.getLine(l.line)).slice(0, l.ch), a = i.slice(l.ch), e.replaceRange(o + a, { line: l.line, ch: 0 })) : (i = e.getSelection(), e.replaceSelection(o + i + a), l.ch += o.length, l !== s && (s.ch += o.length)), e.setSelection(l, s), e.focus();
	        }
	      }function O(e, t, n) {
	        if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) {
	          for (var r = e.getCursor("start"), i = e.getCursor("end"), o = r.line; o <= i.line; o++) {
	            !function (r) {
	              var i = e.getLine(r),
	                  o = i.search(/[^#]/);i = void 0 !== t ? o <= 0 ? "bigger" == t ? "###### " + i : "# " + i : 6 == o && "smaller" == t ? i.substr(7) : 1 == o && "bigger" == t ? i.substr(2) : "bigger" == t ? i.substr(1) : "#" + i : 1 == n ? o <= 0 ? "# " + i : o == n ? i.substr(o + 1) : "# " + i.substr(o + 1) : 2 == n ? o <= 0 ? "## " + i : o == n ? i.substr(o + 1) : "## " + i.substr(o + 1) : o <= 0 ? "### " + i : o == n ? i.substr(o + 1) : "### " + i.substr(o + 1), e.replaceRange(i, { line: r, ch: 0 }, { line: r, ch: 99999999999999 });
	            }(o);
	          }e.focus();
	        }
	      }function I(e, t) {
	        if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) {
	          for (var n = l(e), r = e.getCursor("start"), i = e.getCursor("end"), o = { quote: /^(\s*)\>\s+/, "unordered-list": /^(\s*)(\*|\-|\+)\s+/, "ordered-list": /^(\s*)\d+\.\s+/ }, a = { quote: "> ", "unordered-list": "* ", "ordered-list": "1. " }, s = r.line; s <= i.line; s++) {
	            !function (r) {
	              var i = e.getLine(r);i = n[t] ? i.replace(o[t], "$1") : a[t] + i, e.replaceRange(i, { line: r, ch: 0 }, { line: r, ch: 99999999999999 });
	            }(s);
	          }e.focus();
	        }
	      }function D(e, t, n, r) {
	        if (!/editor-preview-active/.test(e.codemirror.getWrapperElement().lastChild.className)) {
	          r = void 0 === r ? n : r;var i,
	              o = e.codemirror,
	              a = l(o),
	              s = n,
	              u = r,
	              c = o.getCursor("start"),
	              h = o.getCursor("end");a[t] ? (s = (i = o.getLine(c.line)).slice(0, c.ch), u = i.slice(c.ch), "bold" == t ? (s = s.replace(/(\*\*|__)(?![\s\S]*(\*\*|__))/, ""), u = u.replace(/(\*\*|__)/, "")) : "italic" == t ? (s = s.replace(/(\*|_)(?![\s\S]*(\*|_))/, ""), u = u.replace(/(\*|_)/, "")) : "strikethrough" == t && (s = s.replace(/(\*\*|~~)(?![\s\S]*(\*\*|~~))/, ""), u = u.replace(/(\*\*|~~)/, "")), o.replaceRange(s + u, { line: c.line, ch: 0 }, { line: c.line, ch: 99999999999999 }), "bold" == t || "strikethrough" == t ? (c.ch -= 2, c !== h && (h.ch -= 2)) : "italic" == t && (c.ch -= 1, c !== h && (h.ch -= 1))) : (i = o.getSelection(), "bold" == t ? i = (i = i.split("**").join("")).split("__").join("") : "italic" == t ? i = (i = i.split("*").join("")).split("_").join("") : "strikethrough" == t && (i = i.split("~~").join("")), o.replaceSelection(s + i + u), c.ch += n.length, h.ch = c.ch + i.length), o.setSelection(c, h), o.focus();
	        }
	      }function H(e) {
	        if (!/editor-preview-active/.test(e.getWrapperElement().lastChild.className)) for (var t, n = e.getCursor("start"), r = e.getCursor("end"), i = n.line; i <= r.line; i++) {
	          t = (t = e.getLine(i)).replace(/^[ ]*([# ]+|\*|\-|[> ]+|[0-9]+(.|\)))[ ]*/, ""), e.replaceRange(t, { line: i, ch: 0 }, { line: i, ch: 99999999999999 });
	        }
	      }function W(e, t) {
	        for (var n in t) {
	          t.hasOwnProperty(n) && (t[n] instanceof Array ? e[n] = t[n].concat(e[n] instanceof Array ? e[n] : []) : null !== t[n] && "object" == _typeof(t[n]) && t[n].constructor === Object ? e[n] = W(e[n] || {}, t[n]) : e[n] = t[n]);
	        }return e;
	      }function B(e) {
	        for (var t = 1; t < arguments.length; t++) {
	          e = W(e, arguments[t]);
	        }return e;
	      }function F(e) {
	        var t = /[a-zA-Z0-9_\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g,
	            n = e.match(t),
	            r = 0;if (null === n) return r;for (var i = 0; i < n.length; i++) {
	          n[i].charCodeAt(0) >= 19968 ? r += n[i].length : r += 1;
	        }return r;
	      }function R(e) {
	        (e = e || {}).parent = this;var t = !0;if (!1 === e.autoDownloadFontAwesome && (t = !1), !0 !== e.autoDownloadFontAwesome) for (var n = document.styleSheets, r = 0; r < n.length; r++) {
	          n[r].href && n[r].href.indexOf("//maxcdn.bootstrapcdn.com/font-awesome/") > -1 && (t = !1);
	        }if (t) {
	          var i = document.createElement("link");i.rel = "stylesheet", i.href = "https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css", document.getElementsByTagName("head")[0].appendChild(i);
	        }if (e.element) this.element = e.element;else if (null === e.element) return void console.log("SimpleMDE: Error. No element was found.");if (void 0 === e.toolbar) {
	          e.toolbar = [];for (var o in K) {
	            K.hasOwnProperty(o) && (-1 != o.indexOf("separator-") && e.toolbar.push("|"), (!0 === K[o].default || e.showIcons && e.showIcons.constructor === Array && -1 != e.showIcons.indexOf(o)) && e.toolbar.push(o));
	          }
	        }e.hasOwnProperty("status") || (e.status = ["autosave", "lines", "words", "cursor"]), e.previewRender || (e.previewRender = function (e) {
	          return this.parent.markdown(e);
	        }), e.parsingConfig = B({ highlightFormatting: !0 }, e.parsingConfig || {}), e.insertTexts = B({}, Y, e.insertTexts || {}), e.promptTexts = Z, e.blockStyles = B({}, J, e.blockStyles || {}), e.shortcuts = B({}, G, e.shortcuts || {}), void 0 != e.autosave && void 0 != e.autosave.unique_id && "" != e.autosave.unique_id && (e.autosave.uniqueId = e.autosave.unique_id), this.options = e, this.render(), !e.initialValue || this.options.autosave && !0 === this.options.autosave.foundSavedValue || this.value(e.initialValue);
	      }function P() {
	        if ("object" != (typeof localStorage === "undefined" ? "undefined" : _typeof(localStorage))) return !1;try {
	          localStorage.setItem("smde_localStorage", 1), localStorage.removeItem("smde_localStorage");
	        } catch (e) {
	          return !1;
	        }return !0;
	      }var z = e("codemirror");e("codemirror/addon/edit/continuelist.js"), e("./codemirror/tablist"), e("codemirror/addon/display/fullscreen.js"), e("codemirror/mode/markdown/markdown.js"), e("codemirror/addon/mode/overlay.js"), e("codemirror/addon/display/placeholder.js"), e("codemirror/addon/selection/mark-selection.js"), e("codemirror/mode/gfm/gfm.js"), e("codemirror/mode/xml/xml.js");var _ = e("codemirror-spell-checker"),
	          j = e("marked"),
	          q = /Mac/.test(navigator.platform),
	          U = { toggleBold: u, toggleItalic: c, drawLink: k, toggleHeadingSmaller: p, toggleHeadingBigger: m, drawImage: C, toggleBlockquote: d, toggleOrderedList: b, toggleUnorderedList: x, toggleCodeBlock: f, togglePreview: A, toggleStrikethrough: h, toggleHeading1: g, toggleHeading2: v, toggleHeading3: y, cleanBlock: w, drawTable: S, drawHorizontalRule: L, undo: T, redo: M, toggleSideBySide: N, toggleFullScreen: s },
	          G = { toggleBold: "Cmd-B", toggleItalic: "Cmd-I", drawLink: "Cmd-K", toggleHeadingSmaller: "Cmd-H", toggleHeadingBigger: "Shift-Cmd-H", cleanBlock: "Cmd-E", drawImage: "Cmd-Alt-I", toggleBlockquote: "Cmd-'", toggleOrderedList: "Cmd-Alt-L", toggleUnorderedList: "Cmd-L", toggleCodeBlock: "Cmd-Alt-C", togglePreview: "Cmd-P", toggleSideBySide: "F9", toggleFullScreen: "F11" },
	          $ = function $(e) {
	        for (var t in U) {
	          if (U[t] === e) return t;
	        }return null;
	      },
	          V = function V() {
	        var e = !1;return function (t) {
	          (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0);
	        }(navigator.userAgent || navigator.vendor || window.opera), e;
	      },
	          X = "",
	          K = { bold: { name: "bold", action: u, className: "fa fa-bold", title: "Bold", default: !0 }, italic: { name: "italic", action: c, className: "fa fa-italic", title: "Italic", default: !0 }, strikethrough: { name: "strikethrough", action: h, className: "fa fa-strikethrough", title: "Strikethrough" }, heading: { name: "heading", action: p, className: "fa fa-header", title: "Heading", default: !0 }, "heading-smaller": { name: "heading-smaller", action: p, className: "fa fa-header fa-header-x fa-header-smaller", title: "Smaller Heading" }, "heading-bigger": { name: "heading-bigger", action: m, className: "fa fa-header fa-header-x fa-header-bigger", title: "Bigger Heading" }, "heading-1": { name: "heading-1", action: g, className: "fa fa-header fa-header-x fa-header-1", title: "Big Heading" }, "heading-2": { name: "heading-2", action: v, className: "fa fa-header fa-header-x fa-header-2", title: "Medium Heading" }, "heading-3": { name: "heading-3", action: y, className: "fa fa-header fa-header-x fa-header-3", title: "Small Heading" }, "separator-1": { name: "separator-1" }, code: { name: "code", action: f, className: "fa fa-code", title: "Code" }, quote: { name: "quote", action: d, className: "fa fa-quote-left", title: "Quote", default: !0 }, "unordered-list": { name: "unordered-list", action: x, className: "fa fa-list-ul", title: "Generic List", default: !0 }, "ordered-list": { name: "ordered-list", action: b, className: "fa fa-list-ol", title: "Numbered List", default: !0 }, "clean-block": { name: "clean-block", action: w, className: "fa fa-eraser fa-clean-block", title: "Clean block" }, "separator-2": { name: "separator-2" }, link: { name: "link", action: k, className: "fa fa-link", title: "Create Link", default: !0 }, image: { name: "image", action: C, className: "fa fa-picture-o", title: "Insert Image", default: !0 }, table: { name: "table", action: S, className: "fa fa-table", title: "Insert Table" }, "horizontal-rule": { name: "horizontal-rule", action: L, className: "fa fa-minus", title: "Insert Horizontal Line" }, "separator-3": { name: "separator-3" }, preview: { name: "preview", action: A, className: "fa fa-eye no-disable", title: "Toggle Preview", default: !0 }, "side-by-side": { name: "side-by-side", action: N, className: "fa fa-columns no-disable no-mobile", title: "Toggle Side by Side", default: !0 }, fullscreen: { name: "fullscreen", action: s, className: "fa fa-arrows-alt no-disable no-mobile", title: "Toggle Fullscreen", default: !0 }, "separator-4": { name: "separator-4" }, guide: { name: "guide", action: "https://simplemde.com/markdown-guide", className: "fa fa-question-circle", title: "Markdown Guide", default: !0 }, "separator-5": { name: "separator-5" }, undo: { name: "undo", action: T, className: "fa fa-undo no-disable", title: "Undo" }, redo: { name: "redo", action: M, className: "fa fa-repeat no-disable", title: "Redo" } },
	          Y = { link: ["[", "](#url#)"], image: ["![](", "#url#)"], table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text     | Text     |\n\n"], horizontalRule: ["", "\n\n-----\n\n"] },
	          Z = { link: "URL for the link:", image: "URL of the image:" },
	          J = { bold: "**", code: "```", italic: "*" };R.prototype.markdown = function (e) {
	        if (j) {
	          var t = {};return this.options && this.options.renderingConfig && !1 === this.options.renderingConfig.singleLineBreaks ? t.breaks = !1 : t.breaks = !0, this.options && this.options.renderingConfig && !0 === this.options.renderingConfig.codeSyntaxHighlighting && window.hljs && (t.highlight = function (e) {
	            return window.hljs.highlightAuto(e).value;
	          }), j.setOptions(t), j(e);
	        }
	      }, R.prototype.render = function (e) {
	        if (e || (e = this.element || document.getElementsByTagName("textarea")[0]), !this._rendered || this._rendered !== e) {
	          this.element = e;var t = this.options,
	              n = this,
	              i = {};for (var o in t.shortcuts) {
	            null !== t.shortcuts[o] && null !== U[o] && function (e) {
	              i[r(t.shortcuts[e])] = function () {
	                U[e](n);
	              };
	            }(o);
	          }i.Enter = "newlineAndIndentContinueMarkdownList", i.Tab = "tabAndIndentMarkdownList", i["Shift-Tab"] = "shiftTabAndUnindentMarkdownList", i.Esc = function (e) {
	            e.getOption("fullScreen") && s(n);
	          }, document.addEventListener("keydown", function (e) {
	            27 == (e = e || window.event).keyCode && n.codemirror.getOption("fullScreen") && s(n);
	          }, !1);var a, l;if (!1 !== t.spellChecker ? (a = "spell-checker", (l = t.parsingConfig).name = "gfm", l.gitHubSpice = !1, _({ codeMirrorInstance: z })) : ((a = t.parsingConfig).name = "gfm", a.gitHubSpice = !1), this.codemirror = z.fromTextArea(e, { mode: a, backdrop: l, theme: "paper", tabSize: void 0 != t.tabSize ? t.tabSize : 2, indentUnit: void 0 != t.tabSize ? t.tabSize : 2, indentWithTabs: !1 !== t.indentWithTabs, lineNumbers: !1, autofocus: !0 === t.autofocus, extraKeys: i, lineWrapping: !1 !== t.lineWrapping, allowDropFileTypes: ["text/plain"], placeholder: t.placeholder || e.getAttribute("placeholder") || "", styleSelectedText: void 0 == t.styleSelectedText || t.styleSelectedText }), !0 === t.forceSync) {
	            var u = this.codemirror;u.on("change", function () {
	              u.save();
	            });
	          }this.gui = {}, !1 !== t.toolbar && (this.gui.toolbar = this.createToolbar()), !1 !== t.status && (this.gui.statusbar = this.createStatusbar()), void 0 != t.autosave && !0 === t.autosave.enabled && this.autosave(), this.gui.sideBySide = this.createSideBySide(), this._rendered = this.element;var c = this.codemirror;setTimeout(function () {
	            c.refresh();
	          }.bind(c), 0);
	        }
	      }, R.prototype.autosave = function () {
	        if (P()) {
	          var e = this;if (void 0 == this.options.autosave.uniqueId || "" == this.options.autosave.uniqueId) return void console.log("SimpleMDE: You must set a uniqueId to use the autosave feature");null != e.element.form && void 0 != e.element.form && e.element.form.addEventListener("submit", function () {
	            localStorage.removeItem("smde_" + e.options.autosave.uniqueId);
	          }), !0 !== this.options.autosave.loaded && ("string" == typeof localStorage.getItem("smde_" + this.options.autosave.uniqueId) && "" != localStorage.getItem("smde_" + this.options.autosave.uniqueId) && (this.codemirror.setValue(localStorage.getItem("smde_" + this.options.autosave.uniqueId)), this.options.autosave.foundSavedValue = !0), this.options.autosave.loaded = !0), localStorage.setItem("smde_" + this.options.autosave.uniqueId, e.value());var t = document.getElementById("autosaved");if (null != t && void 0 != t && "" != t) {
	            var n = new Date(),
	                r = n.getHours(),
	                i = n.getMinutes(),
	                o = "am",
	                a = r;a >= 12 && (a = r - 12, o = "pm"), 0 == a && (a = 12), i = i < 10 ? "0" + i : i, t.innerHTML = "Autosaved: " + a + ":" + i + " " + o;
	          }this.autosaveTimeoutId = setTimeout(function () {
	            e.autosave();
	          }, this.options.autosave.delay || 1e4);
	        } else console.log("SimpleMDE: localStorage not available, cannot autosave");
	      }, R.prototype.clearAutosavedValue = function () {
	        if (P()) {
	          if (void 0 == this.options.autosave || void 0 == this.options.autosave.uniqueId || "" == this.options.autosave.uniqueId) return void console.log("SimpleMDE: You must set a uniqueId to clear the autosave value");localStorage.removeItem("smde_" + this.options.autosave.uniqueId);
	        } else console.log("SimpleMDE: localStorage not available, cannot autosave");
	      }, R.prototype.createSideBySide = function () {
	        var e = this.codemirror,
	            t = e.getWrapperElement(),
	            n = t.nextSibling;n && /editor-preview-side/.test(n.className) || ((n = document.createElement("div")).className = "editor-preview-side", t.parentNode.insertBefore(n, t.nextSibling));var r = !1,
	            i = !1;return e.on("scroll", function (e) {
	          if (r) r = !1;else {
	            i = !0;var t = e.getScrollInfo().height - e.getScrollInfo().clientHeight,
	                o = parseFloat(e.getScrollInfo().top) / t,
	                a = (n.scrollHeight - n.clientHeight) * o;n.scrollTop = a;
	          }
	        }), n.onscroll = function () {
	          if (i) i = !1;else {
	            r = !0;var t = n.scrollHeight - n.clientHeight,
	                o = parseFloat(n.scrollTop) / t,
	                a = (e.getScrollInfo().height - e.getScrollInfo().clientHeight) * o;e.scrollTo(0, a);
	          }
	        }, n;
	      }, R.prototype.createToolbar = function (e) {
	        if ((e = e || this.options.toolbar) && 0 !== e.length) {
	          var t;for (t = 0; t < e.length; t++) {
	            void 0 != K[e[t]] && (e[t] = K[e[t]]);
	          }var n = document.createElement("div");n.className = "editor-toolbar";var r = this,
	              a = {};for (r.toolbar = e, t = 0; t < e.length; t++) {
	            if (("guide" != e[t].name || !1 !== r.options.toolbarGuideIcon) && !(r.options.hideIcons && -1 != r.options.hideIcons.indexOf(e[t].name) || ("fullscreen" == e[t].name || "side-by-side" == e[t].name) && V())) {
	              if ("|" === e[t]) {
	                for (var s = !1, u = t + 1; u < e.length; u++) {
	                  "|" === e[u] || r.options.hideIcons && -1 != r.options.hideIcons.indexOf(e[u].name) || (s = !0);
	                }if (!s) continue;
	              }!function (e) {
	                var t;t = "|" === e ? o() : i(e, r.options.toolbarTips, r.options.shortcuts), e.action && ("function" == typeof e.action ? t.onclick = function (t) {
	                  t.preventDefault(), e.action(r);
	                } : "string" == typeof e.action && (t.href = e.action, t.target = "_blank")), a[e.name || e] = t, n.appendChild(t);
	              }(e[t]);
	            }
	          }r.toolbarElements = a;var c = this.codemirror;c.on("cursorActivity", function () {
	            var e = l(c);for (var t in a) {
	              !function (t) {
	                var n = a[t];e[t] ? n.className += " active" : "fullscreen" != t && "side-by-side" != t && (n.className = n.className.replace(/\s*active\s*/g, ""));
	              }(t);
	            }
	          });var h = c.getWrapperElement();return h.parentNode.insertBefore(n, h), n;
	        }
	      }, R.prototype.createStatusbar = function (e) {
	        e = e || this.options.status;var t = this.options,
	            n = this.codemirror;if (e && 0 !== e.length) {
	          var r,
	              i,
	              o,
	              a = [];for (r = 0; r < e.length; r++) {
	            if (i = void 0, o = void 0, "object" == _typeof(e[r])) a.push({ className: e[r].className, defaultValue: e[r].defaultValue, onUpdate: e[r].onUpdate });else {
	              var l = e[r];"words" === l ? (o = function o(e) {
	                e.innerHTML = F(n.getValue());
	              }, i = function i(e) {
	                e.innerHTML = F(n.getValue());
	              }) : "lines" === l ? (o = function o(e) {
	                e.innerHTML = n.lineCount();
	              }, i = function i(e) {
	                e.innerHTML = n.lineCount();
	              }) : "cursor" === l ? (o = function o(e) {
	                e.innerHTML = "0:0";
	              }, i = function i(e) {
	                var t = n.getCursor();e.innerHTML = t.line + ":" + t.ch;
	              }) : "autosave" === l && (o = function o(e) {
	                void 0 != t.autosave && !0 === t.autosave.enabled && e.setAttribute("id", "autosaved");
	              }), a.push({ className: l, defaultValue: o, onUpdate: i });
	            }
	          }var s = document.createElement("div");for (s.className = "editor-statusbar", r = 0; r < a.length; r++) {
	            var u = a[r],
	                c = document.createElement("span");c.className = u.className, "function" == typeof u.defaultValue && u.defaultValue(c), "function" == typeof u.onUpdate && this.codemirror.on("update", function (e, t) {
	              return function () {
	                t.onUpdate(e);
	              };
	            }(c, u)), s.appendChild(c);
	          }var h = this.codemirror.getWrapperElement();return h.parentNode.insertBefore(s, h.nextSibling), s;
	        }
	      }, R.prototype.value = function (e) {
	        return void 0 === e ? this.codemirror.getValue() : (this.codemirror.getDoc().setValue(e), this);
	      }, R.toggleBold = u, R.toggleItalic = c, R.toggleStrikethrough = h, R.toggleBlockquote = d, R.toggleHeadingSmaller = p, R.toggleHeadingBigger = m, R.toggleHeading1 = g, R.toggleHeading2 = v, R.toggleHeading3 = y, R.toggleCodeBlock = f, R.toggleUnorderedList = x, R.toggleOrderedList = b, R.cleanBlock = w, R.drawLink = k, R.drawImage = C, R.drawTable = S, R.drawHorizontalRule = L, R.undo = T, R.redo = M, R.togglePreview = A, R.toggleSideBySide = N, R.toggleFullScreen = s, R.prototype.toggleBold = function () {
	        u(this);
	      }, R.prototype.toggleItalic = function () {
	        c(this);
	      }, R.prototype.toggleStrikethrough = function () {
	        h(this);
	      }, R.prototype.toggleBlockquote = function () {
	        d(this);
	      }, R.prototype.toggleHeadingSmaller = function () {
	        p(this);
	      }, R.prototype.toggleHeadingBigger = function () {
	        m(this);
	      }, R.prototype.toggleHeading1 = function () {
	        g(this);
	      }, R.prototype.toggleHeading2 = function () {
	        v(this);
	      }, R.prototype.toggleHeading3 = function () {
	        y(this);
	      }, R.prototype.toggleCodeBlock = function () {
	        f(this);
	      }, R.prototype.toggleUnorderedList = function () {
	        x(this);
	      }, R.prototype.toggleOrderedList = function () {
	        b(this);
	      }, R.prototype.cleanBlock = function () {
	        w(this);
	      }, R.prototype.drawLink = function () {
	        k(this);
	      }, R.prototype.drawImage = function () {
	        C(this);
	      }, R.prototype.drawTable = function () {
	        S(this);
	      }, R.prototype.drawHorizontalRule = function () {
	        L(this);
	      }, R.prototype.undo = function () {
	        T(this);
	      }, R.prototype.redo = function () {
	        M(this);
	      }, R.prototype.togglePreview = function () {
	        A(this);
	      }, R.prototype.toggleSideBySide = function () {
	        N(this);
	      }, R.prototype.toggleFullScreen = function () {
	        s(this);
	      }, R.prototype.isPreviewActive = function () {
	        var e = this.codemirror.getWrapperElement().lastChild;return (/editor-preview-active/.test(e.className)
	        );
	      }, R.prototype.isSideBySideActive = function () {
	        var e = this.codemirror.getWrapperElement().nextSibling;return (/editor-preview-active-side/.test(e.className)
	        );
	      }, R.prototype.isFullscreenActive = function () {
	        return this.codemirror.getOption("fullScreen");
	      }, R.prototype.getState = function () {
	        return l(this.codemirror);
	      }, R.prototype.toTextArea = function () {
	        var e = this.codemirror,
	            t = e.getWrapperElement();t.parentNode && (this.gui.toolbar && t.parentNode.removeChild(this.gui.toolbar), this.gui.statusbar && t.parentNode.removeChild(this.gui.statusbar), this.gui.sideBySide && t.parentNode.removeChild(this.gui.sideBySide)), e.toTextArea(), this.autosaveTimeoutId && (clearTimeout(this.autosaveTimeoutId), this.autosaveTimeoutId = void 0, this.clearAutosavedValue());
	      }, t.exports = R;
	    }, { "./codemirror/tablist": 18, codemirror: 10, "codemirror-spell-checker": 4, "codemirror/addon/display/fullscreen.js": 5, "codemirror/addon/display/placeholder.js": 6, "codemirror/addon/edit/continuelist.js": 7, "codemirror/addon/mode/overlay.js": 8, "codemirror/addon/selection/mark-selection.js": 9, "codemirror/mode/gfm/gfm.js": 11, "codemirror/mode/markdown/markdown.js": 12, "codemirror/mode/xml/xml.js": 14, marked: 16 }] }, {}, [19])(19);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-simplemde-editor.js.map