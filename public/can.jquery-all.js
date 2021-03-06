module = { _orig: window.module, _define: window.define };
module['jquery'] = jQuery;
module['jquery/jquery.js'] = jQuery;
define = function(id, deps, value) {
	module[id] = value();
};
define.amd = { jQuery: true };
// ## can/util/can.js

module['can/util/can.js'] = (function(){
/**
 @attribute can.VERSION
 @parent can.util

 `can.VERSION` is a String representing the CanJS version number. A version of `@EDGE` 
 denotes the bleeding edge CanJS version.
 */

/**
 @function can.isDeferred
 @parent can.util

 `can.isDeferred` returns if an object is an instance of [can.Deferred].

 ## Example
 Convert any value to a Deferred:

 function convertDeferred(dfd) {
 return can.isDeferred(dfd) ? dfd : can.Deferred(dfd);
 }

 @param {String} str the string to trim
 @return {String} the value of the string
 */

/**
@function can.trim
@parent can.util

`can.trim(string)` removes leading and trailing whitespace from a string.  It will also
remove all newlines, spaces including non-breaking, and tabs.  If these occur in the middle
of the string, then they will be persisted.

    can.trim( " foo " ) // -> "foo"

@param {String} str the string to trim
@return {String} the value of the string
 */
//
/**
@function can.makeArray
@parent can.util

`can.makeArray(object)` convert an array-like object into a array.

    can.makeArray({0 : "zero", 1: "one", length: 2})
       // -> ["zero","one"]

@param {Object} object to transform into array
@return {Array} converted array
 */
//
/**
@function can.isArray
@parent can.util

`can.array(object)` returns if the object is an Array.

    can.isArray([]) //-> true
    can.isArray(false)

@param {Array} arr any JS object
@return {Boolean} true if an array
*/
//
/**
@function can.each
@parent can.util

`can.each(object, function)` iterates through an array or object like
like [http://api.jquery.com/jQuery.each/ jQuery.each].

    can.each([{prop: "val1"}, {prop: "val2"}], 
		function( value, index ) {
      // function called with
      //  index=0 value={prop: "val1"}
      //  index=1 value={prop: "val2"}
    })

@param {Object} arr any JS object or array
@return {Object} the function passed to can.each
*/
//
/**
@function can.extend
@parent can.util

`can.extend(target, objectN)` merges the contents of two or more objects together into the first object
similarly to [http://api.jquery.com/jQuery.extend/ jQuery.extend].

    var first = {},
        second = {a: "b"},
        thrid = {c: "d"};

    can.extend(first, second, third); //-> first

    first  //-> {a: "b",c : "d"}
    second //-> {a: "b"}
    thrid  //-> {c: "d"}

@param {Object} target The target object to extend
@param {Object} [object1] An object containing properties to merge
@param {Object} [objectN] Additional objects containing properties to merge
@return {Object} The target object
*/
//
/**
@function can.param
@parent can.util
Parameterizes an object into a query string
like [http://api.jquery.com/jQuery.param/ jQuery.param].

    can.param({a: "b", c: "d"}) //-> "a=b&c=d"

@param {Object} obj An array or object to serialize
@return {String} The serialized object
*/
//
/**
@function can.isEmptyObject
@parent can.util
`can.isEmptyObject(object)` returns if an object has no properties similar to
[http://api.jquery.com/jQuery.isEmptyObject/ jQuery.isEmptyObject].

    can.isEmptyObject({})      //-> true
    can.isEmptyObject({a:"b"}) //-> false

@param {Object} object to evaluate if empty or not
@param {Boolean} Whether the object is empty
*/
//
/**
@function can.proxy
@parent can.util
`can.proxy(function)` accepts a function and returns a 
new one that will always the context from which it was 
called.  This works similar to [http://api.jquery.com/jQuery.proxy/ jQuery.proxy].

     var func = can.proxy(function(one){
       return this.a + one
     }, {a: "b"}); 
     func("two") //-> "btwo" 

@param {Function} function to return in the same context
@param {Object} context The context for the new function
@return {Function} The new function
*/
//
/**
@function can.isFunction
@parent can.util
`can.isFunction(object)` returns if an object is a function similar to
[http://api.jquery.com/jQuery.isFunction/ jQuery.isFunction].

     can.isFunction({})           //-> false
     can.isFunction(function(){}) //-> true

@param {Object} object to evaluate if is function
@return {Boolean} Whether the object is a function
*/
//
/**
@function can.bind
@parent can.util

`can.bind(eventName, handler)` binds a callback handler
on an object for a given event.  It works on:

  - HTML elements and the window
  - Objects
  - Objects with bind / unbind methods
  
The idea is that bind can be used on anything that produces events
and it will figure out the appropriate way to 
bind to it.  Typically, `can.bind` is only used internally to
CanJS; however, if you are making libraries or extensions, use
`can.bind` to listen to events independent of the underlying library.


__Binding to an object__

    var obj = {};
    can.bind.call(obj,"something", function(ev, arg1, arg){
      arg1 // 1
      arg2 // 2
    })
    can.trigger(obj,"something",[1,2])

__Binding to an HTMLElement__

    var el = document.getElementById('foo')
    can.bind.call(el, "click", function(ev){
      this // el
    })

@param {String} eventName The type of event to bind to
@param {Function} handler The handler for the event
@return {Object} this
*/
//
/**
@function can.unbind
@parent can.util

`can.unbind(eventName, handler)` unbinds a callback handler
from an object for a given event.  It works on:

  - HTML elements and the window
  - Objects
  - Objects with bind / unbind methods
  
The idea is that unbind can be used on anything that produces events
and it will figure out the appropriate way to 
unbind to it.  Typically, `can.unbind` is only used internally to
CanJS; however, if you are making libraries or extensions, use
`can.bind` to listen to events independent of the underlying library.


__Binding/unbinding to an object__

    var obj = {},
      handler = function(ev, arg1, arg){
        arg1 // 1
        arg2 // 2
      };
    can.bind.call(obj,"something", handler)
    can.trigger(obj,"something",[1,2])
    can.unbind.call(obj,"something", handler)

__Binding/unbinding to an HTMLElement__

    var el = document.getElementById('foo'),
      handler = function(ev){
        this // el
      };
    can.bind.call(el, "click", handler)
    can.unbind.call(el, "click", handler)

@param {String} eventName The type of event to unbind from
@param {Function} handler The handler for the event
@return {Object} this
*/
//
/**
@function can.delegate
@parent can.util

`can.delegate(selector, eventName, handler)` binds a delegate handler
on an object for a given event.  It works on:

  - HTML elements and the window
  
The idea is that delegate can be used on anything that produces delegate events
and it will figure out the appropriate way to 
bind to it.  Typically, `can.delegate` is only used internally to
CanJS; however, if you are making libraries or extensions, use
`can.delegate` to listen to events independent of the underlying library.

__Delegate binding to an HTMLElement__

    var el = document.getElementById('foo')
    can.delegate.call(el, ".selector", "click", function(ev){
      this // el
    })

@param {String} selector The selector to delegate
@param {String} eventName The type of event to bind to
@param {Function} handler The handler for the event
@return {Object} this
*/
//
/**
@function can.undelegate
@parent can.util

`can.undelegate(selector, eventName, handler)` unbinds a delegate handler
on an object for a given event.  It works on:

  - HTML elements and the window
  
The idea is that undelegate can be used on anything that produces delegate events
and it will figure out the appropriate way to 
bind to it.  Typically, `can.undelegate` is only used internally to
CanJS; however, if you are making libraries or extensions, use
`can.undelegate` to listen to events independent of the underlying library.

__Delegate/undelegate binding to an HTMLElement__

    var el = document.getElementById('foo'),
      handler = function(ev){
        this // el
      };
    can.delegate.call(el, ".selector", "click", handler)
    can.undelegate.call(el, ".selector", "click", handler)

@param {String} selector The selector to undelegate
@param {String} eventName The type of event to unbind from
@param {Function} handler The handler for the event
@return {Object} this
*/
//
/**
@function can.trigger
@parent can.util

Trigger an event on an element or object.

@param {can.$|Object} obj The object to trigger the event on
@param {String} event The event to trigger
@param {Array} [args] The event data
 */
//
/**
@function can.ajax
@parent can.util

`can.ajax( settings )` is used to make an asynchronous HTTP (Ajax) request 
similar to [http://api.jquery.com/jQuery.ajax/ jQuery.ajax].

	can.ajax({
		url: 'ajax/farm/animals',
		success: function(animals) {
			can.$('.farm').html(animals);
		}
	});

@param {Object} options Ajax request configuration options
@return {Deferred}
*/
//
/**
@function can.$
@parent can.util

`can.$(selector|element|elements)` returns the the underlying
library's NodeList.  It can be passed
a css selector, a HTMLElement or an array of HTMLElements.

The following lists how the NodeList is created by each library:

 - __jQuery__ `jQuery( HTMLElement )`
 - __Zepto__ `Zepto( HTMLElement )`
 - __Dojo__ `new dojo.NodeList( HTMLElement )`
 - __Mootools__ `$$( HTMLElement )`
 - __YUI__ `Y.all(selector)` or `Y.NodeList`

@param {String|Element|NodeList} selector The selector to pass to the underlying library
@return {NodeList}
*/
//
/**
@function can.buildFragment
@parent can.util

`can.buildFragment(html, node)` returns a document fragment for the HTML passed.

@param {String} html HTML strings
@param {Array} node element used for accessing the ownerDocument
@return {DocumentFragment}
*/
//
/**
@function can.append
@parent can.util

`can.append( wrappedNodeList, html )` inserts content to the end of each wrapped node list item(s) passed.

	// Before
	<div id="demo" />
	
	can.append( can.$('#demo'), 'Demos are fun!' );
	
	// After
	<div id="demo">Demos are fun!</div>

@param {Object} wrappedNodeList
@param {String} html string to append
*/
//
/**
@function can.remove
@parent can.util

`can.remove( wrappedNodeList )` removes the set of matched element(s) from the DOM.

	<div id="wrap"/>
	can.remove(can.$('#wrap')) //-> removes 'wrap'
	
@param {Object} wrappedNodeList of elements to remove from dom.
*/
//
/**
@function can.data
@parent can.util

`can.data` enables the associatation of arbitrary data with DOM nodes and JavaScript objects.

### Setting Data

	can.data( can.$('#elm'), key, value )
	
- __wrappedNodeList__ node list to associate data to.
- __key__ string name of the association.
- __value__ tdata value; it can be any Javascript type including Array or Object.

### Accessing Data

	can.data( can.$('#elm'), key )
	
- __wrappedNodeList__ node list to retrieve association data from.
- __key__ string name of the association.

Due to the way browsers security restrictions with plugins and external code, 
the _data_ method cannot be used on `object` (unless it's a Flash plugin), `applet` or `embed` elements.

@param {NodeList} wrapped The wrapped node list to associate data with
@param {String} key The data property to access
@param {Object} [value] The data value to store
@return {Object} The value for the given key
*/
//
/**
@function can.addClass
@parent can.util

`can.addClass( nodelist, className )` adds the specified class(es) to
nodelist's HTMLElements.  It does NOT replace any existing class(es)
already defined.

	// Before
	<div id="foo" class="monkey" />
	
    can.addClass(can.$("#foo"),"bar")

	// After
	<div id="foo" class="monkey bar" />
	
You can also pass multiple class(es) and it will add them to the existing
set also.

	// Before
	<div id="foo" class="monkey" />

	can.addClass(can.$("#foo"),"bar man")

	// After
	<div id="foo" class="monkey bar man" />
	
This works similarly to [http://api.jquery.com/addClass/ jQuery.fn.addClass].

@param {String} class name to add to the wrapped node list
*/
//
/**
@function can.when
@parent can.util

`can.when(args)` provides the ability to execute callback function(s) 
typically based on a Deferred or AJAX object.

	can.when( can.ajax('api/farm/animals') ).then(function(animals){ 
     	alert(animals); //-> alerts the ajax response
	});
	
You can also use this for regular JavaScript objects.

	$.when( { animals: [ 'cat' ] } ).done(function(animals){ 
		alert(animals[0]); //-> alerts 'cat' 
	});

@param {Object} deferreds ajax or JavaScript objects
*/
//
/**
@class can.Deferred
@parent can.util

`can.Deferred` is a object that allows users to assign and chain callback 
function(s) for the success or failure state of both asynchronous and synchronous function(s).

*/
//
/*
 * @prototype
 */
//
/**
@function pipe
`deferred.pipe(done, fail)` is a utility to filter Deferred(s).

	var def = can.Deferred(),
		filtered = def.pipe(function(val) {
			return val + " is awesome!";
		});

	def.resolve('Can');

	filtered.done(function(value) {
		alert(value); // Alerts: 'Can is awesome!'
	});

@param {Object} doneCallbacks A function called when the Deferred is resolved.
@param {Object} failCallbacks A function called when the Deferred is rejected.
*/
//
/**
@function resolveWith
`deferred.resolveWith(context, doneCallbacks)` resolves a Deferred and calls the `doneCallbacks` give the arguments.

	var def = can.Deferred();
	def.resolveWith(this, { animals: [ 'cows', 'monkey', 'panda' ] })
	
@param {Object} context Context passed to the `doneCallbacks` as the `this` object.
@param {Object} args Optional array of args that are passed to the `doneCallbacks`.
*/
//
/**
@function rejectWith
`deferred.rejectWith(context, failCallbacks)` rejects a Deferred and calls the `failCallbacks` give the arguments.

	var def = can.Deferred();
	def.rejectWith(this, { error: "Animals are gone." })
	
@param {Object} context Context passed to the `doneCallbacks` as the `this` object.
@param {Object} args Optional array of args that are passed to the `failCallbacks`.
*/
//
/**
@function done
`deferred.done(successCallbacks)` adds handler(s) to be called when the Deferred object is resolved.

	var def = can.Deferred();
	def.done(function(){
		//- Deferred is done.
	});

@param {Object} successCallbacks function that is called when the Deferred is resolved.
 */
/**
 * @function fail

`deferred.fail(successCallbacks)` adds handler(s) to be called when the Deferred object is rejected.

 var def = can.Deferred();
 def.fail(function(){
 //- Deferred got rejected.
 });
 */
//
/**
@function always
`deferred.always( alwaysCallbacks )` adds handler(s) to be called when the Deferred object is either resolved or rejected.

	var def = can.Deferred();
	def.always( function(){
		//- Called whether the handler fails or is success.
	});

@param {Object} alwaysCallbacks A function called when the Deferred is resolved or rejected.
*/
//
/**
@function then
`deferred.then( doneCallbacks, failCallbacks )` adds handler(s) to be called when the Deferred object to be called after its resolved.

	var def = can.Deferred();
	def.then(function(){
		//- Called when the deferred is resolved.
	}, function(){
		//- Called when the deferred fails.
	})

@param {Object} doneCallbacks A function called when the Deferred is resolved.
@param {Object} failCallbacks A function called when the Deferred is rejected.
*/
//
/**
@function isResolved
`deferred.isResolved()` returns whether a Deferred object has been resolved.

	var def = can.Deferred();
	var resolved = def.isResolved(); 
	
*/
/**
@function isRejected
`deferred.isRejected()` returns whether a Deferred object has been rejected.

	var def = can.Deferred();
	var rejected = def.isRejected()

*/
//
/**
@function reject
`deferred.reject( args )` rejects the Deferred object and calls the fail callbacks with the given arguments.

	var def = can.Deferred();
	def.reject({ error: 'Thats not an animal.' })

@param {Object} arguments Optional arguments that are passed to the fail callbacks.
*/
//
/**
@function resolve
`deferred.resolve( args )` resolves a Deferred object and calls the done callbacks with the given arguments.

	var def = can.Deferred();
	def.resolve({ animals: [ 'pig', 'cow' ] })

@param {Object} arguments Optional arguments that are passed to the done callbacks.
*/

	var can = window.can || {};
	if(typeof GLOBALCAN === 'undefined' || GLOBALCAN !== false) {
		window.can = can;
	}

	can.isDeferred = function( obj ) {
		var isFunction = this.isFunction;
		// Returns `true` if something looks like a deferred.
		return obj && isFunction(obj.then) && isFunction(obj.pipe);
	};
	
	var cid = 0;
	can.cid = function(object, name){
		if(object._cid){
			return object._cid
		} else{
			return object._cid = (name ||"" ) + (++cid)
		}
	}
	can.VERSION = '@EDGE';
	return can;
})();// ## can/util/array/each.js

module['can/util/array/each.js'] = (function (can) {
	can.each = function (elements, callback, context) {
		var i = 0, key;
		if (elements) {
			if (typeof elements.length === 'number' && elements.pop) {
				if ( elements.attr ) {
					elements.attr('length');
				}
				for (key = elements.length; i < key; i++) {
					if (callback.call(context || elements[i], elements[i], i, elements) === false) {
						break;
					}
				}
			} else if(elements.hasOwnProperty) {
				for (key in elements) {
					if(elements.hasOwnProperty(key)) {
						if (callback.call(context || elements[key], elements[key], key, elements) === false) {
							break;
						}
					}
				}
			}
		}
		return elements;
	};

	return can;
})(module["can/util/can.js"]);// ## can/util/jquery/jquery.js

module['can/util/jquery/jquery.js'] = (function($, can) {
	// _jQuery node list._
	$.extend( can, $, {
		trigger: function( obj, event, args ) {
			if ( obj.trigger ) {
				obj.trigger( event, args );
			} else {
				$.event.trigger( event, args, obj, true );
			}
		},
		addEvent: function(ev, cb){
			$([this]).bind(ev, cb);
			return this;
		},
		removeEvent: function(ev, cb){
			$([this]).unbind(ev, cb);
			return this;
		},
		// jquery caches fragments, we always needs a new one
		buildFragment : function(elems, context){
			var oldFragment = $.buildFragment,
				ret;

			elems = [elems];
			// Set context per 1.8 logic
			context = context || document;
			context = !context.nodeType && context[0] || context;
			context = context.ownerDocument || context;

			ret = oldFragment.call( jQuery, elems, context);

			return ret.cacheable ? $.clone(ret.fragment) : ret.fragment || ret;
		},
		$: $,
		each: can.each
	});

	// Wrap binding functions.
	$.each(['bind','unbind','undelegate','delegate'],function(i,func){
		can[func] = function(){
			var t = this[func] ? this : $([this]);
			t[func].apply(t, arguments);
			return this;
		};
	});

	// Wrap modifier functions.
	$.each(["append","filter","addClass","remove","data","get"], function(i,name){
		can[name] = function(wrapped){
			return wrapped[name].apply(wrapped, can.makeArray(arguments).slice(1));
		};
	});

	// Memory safe destruction.
	var oldClean = $.cleanData;

	$.cleanData = function( elems ) {
		$.each( elems, function( i, elem ) {
			if ( elem ) {
				can.trigger(elem,"destroyed",[],false);
			}
		});
		oldClean(elems);
	};

	return can;
})(module["jquery/jquery.js"], module["can/util/can.js"], module["can/util/array/each.js"]);// ## can/util/string/string.js

module['can/util/string/string.js'] = (function(can) {
	// ##string.js
	// _Miscellaneous string utility functions._  
	
	// Several of the methods in this plugin use code adapated from Prototype
	// Prototype JavaScript framework, version 1.6.0.1.
	// © 2005-2007 Sam Stephenson
	var strUndHash     = /_|-/,
		strColons      = /\=\=/,
		strWords       = /([A-Z]+)([A-Z][a-z])/g,
		strLowUp       = /([a-z\d])([A-Z])/g,
		strDash        = /([a-z\d])([A-Z])/g,
		strReplacer    = /\{([^\}]+)\}/g,
		strQuote       = /"/g,
		strSingleQuote = /'/g,

		// Returns the `prop` property from `obj`.
		// If `add` is true and `prop` doesn't exist in `obj`, create it as an 
		// empty object.
    getNext = function( obj, prop, add ) {
      var result = obj[prop];

      if(result === undefined && add === true) { result = obj[prop] = {} }
      return result
    },

		// Returns `true` if the object can have properties (no `null`s).
		isContainer = function( current ) {
			return (/^f|^o/).test( typeof current );
		};

		can.extend(can, {
			// Escapes strings for HTML.
			/**
			 * @function can.esc
			 * @parent can.util
			 *
			 * `can.esc(string)` escapes a string for insertion into html.
			 * 
			 *     can.esc( "<foo>&<bar>" ) //-> "&lt;foo&lt;&amp;&lt;bar&lt;"
			 */
			esc : function( content ) {
				// Convert bad values into empty strings
				var isInvalid = content === null || content === undefined || (isNaN(content) && ("" + content === 'NaN'));
				return ( "" + ( isInvalid ? '' : content ) )
					.replace(/&/g, '&amp;')
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;')
					.replace(strQuote, '&#34;')
					.replace(strSingleQuote, "&#39;");
			},
			
			/**
			 * @function can.getObject
			 * @parent can.util
			 * Gets an object from a string.  It can also modify objects on the
			 * 'object path' by removing or adding properties.
			 * 
			 *     Foo = {Bar: {Zar: {"Ted"}}}
			 *     can.getObject("Foo.Bar.Zar") //-> "Ted"
			 * 
			 * @param {String} name the name of the object to look for
			 * @param {Array} [roots] an array of root objects to look for the 
			 *   name.  If roots is not provided, the window is used.
			 * @param {Boolean} [add] true to add missing objects to 
			 *  the path. false to remove found properties. undefined to 
			 *  not modify the root object
			 * @return {Object} The object.
			 */
			getObject : function( name, roots, add ) {
			
				// The parts of the name we are looking up  
				// `['App','Models','Recipe']`
				var	parts = name ? name.split('.') : [],
					length =  parts.length,
					current,
					r = 0,
					ret, i;

				// Make sure roots is an `array`.
				roots = can.isArray(roots) ? roots : [roots || window];
				
				if ( ! length ) {
					return roots[0];
				}

				// For each root, mark it as current.
				while ( roots[r] ) {
					current = roots[r];

					// Walk current to the 2nd to last object or until there 
					// is not a container.
					for (i =0; i < length - 1 && isContainer( current ); i++ ) {
						current = getNext( current, parts[i], add );
					}

					// If we can get a property from the 2nd to last object...
					if( isContainer(current) ) {
						
						// Get (and possibly set) the property.
						ret = getNext(current, parts[i], add); 
						
						// If there is a value, we exit.
						if ( ret !== undefined ) {
							// If `add` is `false`, delete the property
							if ( add === false ) {
								delete current[parts[i]];
							}
							return ret;
							
						}
					}
					r++;
				}
			},
			// Capitalizes a string.
			/**
			 * @function can.capitalize
			 * @parent can.util
			 * `can.capitalize(string)` capitalizes the first letter of the string passed.
			 *
			 *		can.capitalize('candy is fun!'); //-> Returns: 'Candy is fun!'
			 *
			 * @param {String} s the string.
			 * @return {String} a string with the first character capitalized.
			 */
			capitalize: function( s, cache ) {
				// Used to make newId.
				return s.charAt(0).toUpperCase() + s.slice(1);
			},
			
			// Underscores a string.
			/**
			 * @function can.underscore
			 * @parent can.util
			 * 
			 * Underscores a string.
			 * 
			 *     can.underscore("OneTwo") //-> "one_two"
			 * 
			 * @param {String} s
			 * @return {String} the underscored string
			 */
			underscore: function( s ) {
				return s
					.replace(strColons, '/')
					.replace(strWords, '$1_$2')
					.replace(strLowUp, '$1_$2')
					.replace(strDash, '_')
					.toLowerCase();
			},
			// Micro-templating.
			/**
			 * @function can.sub
			 * @parent can.util
			 * 
			 * Returns a string with {param} replaced values from data.
			 * 
			 *     can.sub("foo {bar}",{bar: "far"})
			 *     //-> "foo far"
			 *     
			 * @param {String} s The string to replace
			 * @param {Object} data The data to be used to look for properties.  If it's an array, multiple
			 * objects can be used.
			 * @param {Boolean} [remove] if a match is found, remove the property from the object
			 * @return {String} The converted string or `null` if any data to render are `undefined`
			 */
			sub: function( str, data, remove ) {
				var obs = [];
				
				str = str || '';

				obs.push( str.replace( strReplacer, function( whole, inside ) {

					// Convert inside to type.
          var ob = can.getObject( inside, data, remove === true ? false : undefined );

					if(ob === undefined) {
						obs = null;
						return "";
					}

					// If a container, push into objs (which will return objects found).
					if ( isContainer( ob ) && obs ) {
						obs.push( ob );
						return "";
					}

					return "" + ob;
				}));
				
				return obs === null ? obs : (obs.length <= 1 ? obs[0] : obs);
			},

			// These regex's are used throughout the rest of can, so let's make
			// them available.
			replacer : strReplacer,
			undHash : strUndHash
		});
	return can;
})(module["can/util/jquery/jquery.js"]);// ## can/construct/construct.js

module['can/construct/construct.js'] = (function(can) {

	// ## construct.js
	// `can.Construct`  
	// _This is a modified version of
	// [John Resig's class](http://ejohn.org/blog/simple-javascript-inheritance/).  
	// It provides class level inheritance and callbacks._
	
	// A private flag used to initialize a new class instance without
	// initializing it's bindings.
	var initializing = 0;

	/** 
	 * @add can.Construct 
	 */
	can.Construct = function() {
		if (arguments.length) {
			return can.Construct.extend.apply(can.Construct, arguments);
		}
	};

	/**
	 * @static
	 */
	can.extend(can.Construct, {
		/**
		 * @function newInstance
		 * Creates a new instance of the constructor function.  This method is useful for creating new instances
		 * with arbitrary parameters.  Typically you want to simply use the __new__ operator instead.
		 * 
		 * ## Example
		 * 
		 * The following creates a `Person` Construct and then creates a new instance of person, but
		 * by using `apply` on newInstance to pass arbitrary parameters.
		 * 
		 *     var Person = can.Construct({
		 *       init : function(first, middle, last) {
		 *         this.first = first;
		 *         this.middle = middle;
		 *         this.last = last;
		 *       }
		 *     });
		 * 
		 *     var args = ["Justin","Barry","Meyer"],
		 *         justin = new Person.newInstance.apply(null, args);
		 * 
		 * @param {Object} [args] arguments that get passed to [can.Construct::setup] and [can.Construct::init]. Note
		 * that if [can.Construct::setup] returns an array, those arguments will be passed to [can.Construct::init]
		 * instead.
		 * @return {class} instance of the class
		 */
		newInstance: function() {
			// Get a raw instance object (`init` is not called).
			var inst = this.instance(),
				arg = arguments,
				args;
				
			// Call `setup` if there is a `setup`
			if ( inst.setup ) {
				args = inst.setup.apply(inst, arguments);
			}

			// Call `init` if there is an `init`  
			// If `setup` returned `args`, use those as the arguments
			if ( inst.init ) {
				inst.init.apply(inst, args || arguments);
			}

			return inst;
		},
		// Overwrites an object with methods. Used in the `super` plugin.
		// `newProps` - New properties to add.  
		// `oldProps` - Where the old properties might be (used with `super`).  
		// `addTo` - What we are adding to.
		_inherit: function( newProps, oldProps, addTo ) {
			can.extend(addTo || newProps, newProps || {})
		},
		// used for overwriting a single property.
		// this should be used for patching other objects
		// the super plugin overwrites this
		_overwrite : function(what, oldProps, propName, val){
			what[propName] = val;
		},
		// Set `defaults` as the merger of the parent `defaults` and this 
		// object's `defaults`. If you overwrite this method, make sure to
		// include option merging logic.
		/**
		 * Setup is called immediately after a constructor function is created and 
		 * set to inherit from its base constructor.  It is called with a base constructor and
		 * the params used to extend the base constructor. It is useful for setting up additional inheritance work.
		 * 
		 * ## Example
		 * 
		 * The following creates a `Base` class that when extended, adds a reference to the base
		 * class.
		 * 
		 * 
		 *     Base = can.Construct({
		 *       setup : function(base, fullName, staticProps, protoProps){
		 * 	       this.base = base;
		 *         // call base functionality
		 *         can.Construct.setup.apply(this, arguments)
		 *       }
		 *     },{});
		 * 
		 *     Base.base //-> can.Construct
		 *     
		 *     Inherting = Base({});
		 * 
		 *     Inheriting.base //-> Base
		 * 
		 * ## Base Functionality
		 * 
		 * Setup deeply extends the static `defaults` property of the base constructor with 
		 * properties of the inheriting constructor.  For example:
		 * 
		 *     MyBase = can.Construct({
		 *       defaults : {
		 *         foo: 'bar'
		 *       }
		 *     },{})
		 * 
		 *     Inheriting = MyBase({
		 *       defaults : {
		 *         newProp : 'newVal'
		 *       }
		 *     },{}
		 *     
		 *     Inheriting.defaults // -> {foo: 'bar', 'newProp': 'newVal'}
		 * 
		 * @param {Object} base the base constructor that is being inherited from
		 * @param {String} [fullName] the name of the new constructor
		 * @param {Object} [staticProps] the static properties of the new constructor
		 * @param {Object} [protoProps] the prototype properties of the new constructor
		 */
		setup: function( base, fullName ) {
			this.defaults = can.extend(true,{}, base.defaults, this.defaults);
		},
		// Create's a new `class` instance without initializing by setting the
		// `initializing` flag.
		instance: function() {

			// Prevents running `init`.
			initializing = 1;

			var inst = new this();

			// Allow running `init`.
			initializing = 0;

			return inst;
		},
		// Extends classes.
		/**
		 * @hide
		 * Extends a class with new static and prototype functions.  There are a variety of ways
		 * to use extend:
		 * 
		 *     // with className, static and prototype functions
		 *     can.Construct('Task',{ STATIC },{ PROTOTYPE })
		 *     // with just classname and prototype functions
		 *     can.Construct('Task',{ PROTOTYPE })
		 *     // with just a className
		 *     can.Construct('Task')
		 * 
		 * You no longer have to use <code>.extend</code>.  Instead, you can pass those options directly to
		 * can.Construct (and any inheriting classes):
		 * 
		 *     // with className, static and prototype functions
		 *     can.Construct('Task',{ STATIC },{ PROTOTYPE })
		 *     // with just classname and prototype functions
		 *     can.Construct('Task',{ PROTOTYPE })
		 *     // with just a className
		 *     can.Construct('Task')
		 * 
		 * @param {String} [fullName]  the classes name (used for classes w/ introspection)
		 * @param {Object} [klass]  the new classes static/class functions
		 * @param {Object} [proto]  the new classes prototype functions
		 * 
		 * @return {can.Construct} returns the new class
		 */
		extend: function( fullName, klass, proto ) {
			// Figure out what was passed and normalize it.
			if ( typeof fullName != 'string' ) {
				proto = klass;
				klass = fullName;
				fullName = null;
			}

			if ( ! proto ) {
				proto = klass;
				klass = null;
			}
			proto = proto || {};

			var _super_class = this,
				_super = this.prototype,
				name, shortName, namespace, prototype;

			// Instantiate a base class (but only create the instance,
			// don't run the init constructor).
			prototype = this.instance();
			
			// Copy the properties over onto the new prototype.
			can.Construct._inherit(proto, _super, prototype);

			// The dummy class constructor.
			function Constructor() {
				// All construction is actually done in the init method.
				if ( ! initializing ) {
					return this.constructor !== Constructor && arguments.length ?
						// We are being called without `new` or we are extending.
						arguments.callee.extend.apply(arguments.callee, arguments) :
						// We are being called with `new`.
						this.constructor.newInstance.apply(this.constructor, arguments);
				}
			}

			// Copy old stuff onto class (can probably be merged w/ inherit)
			for ( name in _super_class ) {
				if ( _super_class.hasOwnProperty(name) ) {
					Constructor[name] = _super_class[name];
				}
			}

			// Copy new static properties on class.
			can.Construct._inherit(klass, _super_class, Constructor);

			// Setup namespaces.
			if ( fullName ) {

				var parts = fullName.split('.'),
					shortName = parts.pop(),
					current = can.getObject(parts.join('.'), window, true),
					namespace = current,
					_fullName = can.underscore(fullName.replace(/\./g, "_")),
					_shortName = can.underscore(shortName);

				
				
				current[shortName] = Constructor;
			}

			// Set things that shouldn't be overwritten.
			can.extend(Constructor, {
				constructor: Constructor,
				prototype: prototype,
				/**
				 * @attribute namespace 
				 * The namespace keyword is used to declare a scope. This enables you to organize
				 * code and provides a way to create globally unique types.
				 * 
				 *     can.Construct("MyOrg.MyConstructor",{},{})
				 *     MyOrg.MyConstructor.namespace //-> MyOrg
				 * 
				 */
				namespace: namespace,
				/**
				 * @attribute shortName
				 * If you pass a name when creating a Construct, the `shortName` property will be set to the
				 * actual name without the namespace:
				 * 
				 *     can.Construct("MyOrg.MyConstructor",{},{})
				 *     MyOrg.MyConstructor.shortName //-> 'MyConstructor'
				 *     MyOrg.MyConstructor.fullName //->  'MyOrg.MyConstructor'
				 * 
				 */
				shortName: shortName,
				_shortName : _shortName,
				/**
				 * @attribute fullName 
				 * If you pass a name when creating a Construct, the `fullName` property will be set to
				 * the actual name including the full namespace:
				 * 
				 *     can.Construct("MyOrg.MyConstructor",{},{})
				 *     MyOrg.MyConstructor.shortName //-> 'MyConstructor'
				 *     MyOrg.MyConstructor.fullName //->  'MyOrg.MyConstructor'
				 * 
				 */
				fullName: fullName,
				_fullName: _fullName
			});

			// Make sure our prototype looks nice.
			Constructor.prototype.constructor = Constructor;

			
			// Call the class `setup` and `init`
			var t = [_super_class].concat(can.makeArray(arguments)),
				args = Constructor.setup.apply(Constructor, t );
			
			if ( Constructor.init ) {
				Constructor.init.apply(Constructor, args || t );
			}

			/**
			 * @prototype
			 */
			return Constructor;
			/** 
			 * @function setup
			 * 
			 * If a prototype `setup` method is provided, it is called when a new 
			 * instance is created.  It is passed the same arguments that
			 * were passed to the Constructor constructor 
			 * function (`new Constructor( arguments ... )`).  If `setup` returns an
			 * array, those arguments are passed to [can.Construct::init] instead
			 * of the original arguments.
			 * 
			 * Typically, you should only provide [can.Construct::init] methods to 
			 * handle initilization code. Use `setup` for:
			 * 
			 *   - initialization code that you want to run before inheriting constructor's 
			 *     init method is called.
			 *   - initialization code that should run without inheriting constructors having to 
			 *     call base methods (ex: `MyBase.prototype.init.call(this, arg1)`).
			 *   - passing modified/normalized arguments to `init`.
			 * 
			 * ## Examples
			 * 
			 * The following is similar to code in [can.Control]'s setup method that
			 * converts the first argument to a jQuery collection and extends the 
			 * second argument with the constructor's [can.Construct.defaults defaults]:
			 * 
			 *     can.Construct("can.Control",{
			 *       setup: function( htmlElement, rawOptions ) {
			 *         // set this.element
			 *         this.element = $(htmlElement);
			 * 
			 *         // set this.options
			 *         this.options = can.extend( {}, 
			 * 	                               this.constructor.defaults, 
			 * 	                               rawOptions );
			 * 
			 *         // pass the wrapped element and extended options
			 *         return [this.element, this.options] 
			 *       }
			 *     })
			 * 
			 * ## Base Functionality
			 * 
			 * Setup is not defined on can.Construct itself, so calling super in inherting classes
			 * will break.  Don't do the following:
			 * 
			 *     Thing = can.Construct({
			 *       setup : function(){
			 *         this._super(); // breaks!
			 *       }
			 *     })
			 * 
			 * @return {Array|undefined} If an array is return, [can.Construct.prototype.init] is 
			 * called with those arguments; otherwise, the original arguments are used.
			 */
			//  
			/** 
			 * @function init
			 * 
			 * If a prototype `init` method is provided, it gets called after [can.Construct::setup] when a new instance
			 * is created. The `init` method is where your constructor code should go. Typically,
			 * you will find it saving the arguments passed to the constructor function for later use. 
			 * 
			 * ## Examples
			 * 
			 * The following creates a Person constructor with a first and last name property:
			 * 
			 *     var Person = can.Construct({
			 *       init : function(first, last){
			 *         this.first = first;
			 *         this.last = last;
			 *       }
			 *     })
			 * 
			 *     var justin = new Person("Justin","Meyer");
			 *     justin.first //-> "Justin"
			 *     justin.last  //-> "Meyer"
			 * 
			 * The following extends person to create a Programmer constructor
			 * 
			 *     var Programmer = Person({
			 *       init : function(first, last, lang){
			 *         // call base functionality
			 *         Person.prototype.init.call(this, first, last);
			 * 
			 *         // save the lang
			 *         this.lang = lang
			 *       },
			 *       greet : function(){
			 *         return "I am " + this.first + " " + this.last + ". " +
			 *                "I write " + this.lang + ".";
			 *       }
			 *     })
			 * 
			 *     var brian = new Programmer("Brian","Moschel","ECMAScript")
			 *     brian.greet() //-> "I am Brian Moschel.\
			 *                   //    I write ECMAScript."
			 * 
			 * ## Notes
			 * 
			 * [can.Construct::setup] is able to modify the arguments passed to init.
			 * 
			 * It doesn't matter what init returns because the `new` keyword always
			 * returns the new object.
			 */
			//  
			/**
			 * @attribute constructor
			 * 
			 * A reference to the constructor function that created the instance. It allows you to access
			 * the constructor function's static properties from an instance.
			 * 
			 * ## Example
			 * 
			 * Incrementing a static counter, that counts how many instances have been created:
			 * 
			 *     Counter = can.Construct({
			 * 	     count : 0
			 *     },{
			 *       init : function(){
			 *         this.constructor.count++;
			 *       }
			 *     })
			 * 
			 *     new Counter();
			 *     Counter.count //-> 1; 
			 * 
			 */
		}

	});
	return can.Construct;
})(module["can/util/string/string.js"]);// ## can/construct/proxy/proxy.js

module['can/construct/proxy/proxy.js'] = (function(can, Construct){
var isFunction = can.isFunction,
	isArray = can.isArray,
	makeArray = can.makeArray,

proxy = function( funcs ) {

			//args that should be curried
			var args = makeArray(arguments),
				self;

			// get the functions to callback
			funcs = args.shift();

			// if there is only one function, make funcs into an array
			if (!isArray(funcs) ) {
				funcs = [funcs];
			}
			
			// keep a reference to us in self
			self = this;
			
			
			return function class_cb() {
				// add the arguments after the curried args
				var cur = args.concat(makeArray(arguments)),
					isString, 
					length = funcs.length,
					f = 0,
					func;
				
				// go through each function to call back
				for (; f < length; f++ ) {
					func = funcs[f];
					if (!func ) {
						continue;
					}
					
					// set called with the name of the function on self (this is how this.view works)
					isString = typeof func == "string";
					
					// call the function
					cur = (isString ? self[func] : func).apply(self, cur || []);
					
					// pass the result to the next function (if there is a next function)
					if ( f < length - 1 ) {
						cur = !isArray(cur) || cur._use_call ? [cur] : cur
					}
				}
				return cur;
			}
		}
	can.Construct.proxy = can.Construct.prototype.proxy = proxy;
	// this corrects the case where can/control loads after can/construct/proxy, so static props don't have proxy
	var correctedClasses = [can.Observe, can.Control, can.Model],
		i = 0;
	for (; i < correctedClasses.length; i++ ) {
		if(correctedClasses[i]){
			correctedClasses[i].proxy = proxy;
		}
	}
	return can;
})(module["can/util/jquery/jquery.js"], module["can/construct/construct.js"]);// ## can/construct/super/super.js

module['can/construct/super/super.js'] = (function(can, Construct){

// tests if we can get super in .toString()
	var isFunction = can.isFunction,
		
		fnTest = /xyz/.test(function() {
			xyz;
		}) ? /\b_super\b/ : /.*/;
		
		// overwrites a single property so it can still call super
		can.Construct._overwrite = function(addTo, base, name, val){
			// Check if we're overwriting an existing function
			addTo[name] = isFunction(val) && 
							  isFunction(base[name]) && 
							  fnTest.test(val) ? (function( name, fn ) {
					return function() {
						var tmp = this._super,
							ret;

						// Add a new ._super() method that is the same method
						// but on the super-class
						this._super = base[name];

						// The method only need to be bound temporarily, so we
						// remove it when we're done executing
						ret = fn.apply(this, arguments);
						this._super = tmp;
						return ret;
					};
				})(name, val) : val;
		}
		// overwrites an object with methods, sets up _super
		//   newProps - new properties
		//   oldProps - where the old properties might be
		//   addTo - what we are adding to
		can.Construct._inherit = function( newProps, oldProps, addTo ) {
			addTo = addTo || newProps
			for ( var name in newProps ) {
				can.Construct._overwrite(addTo, oldProps, name, newProps[name]);
			}
		}

	return can;
})(module["can/util/jquery/jquery.js"], module["can/construct/construct.js"]);// ## can/control/control.js

module['can/control/control.js'] = (function( can ) {
	// ## control.js
	// `can.Control`  
	// _Controller_
	
	// Binds an element, returns a function that unbinds.
	var bind = function( el, ev, callback ) {

			can.bind.call( el, ev, callback );

			return function() {
				can.unbind.call(el, ev, callback);
			};
		},
		isFunction = can.isFunction,
		extend = can.extend,
		each = can.each,
		slice = [].slice,
		paramReplacer = /\{([^\}]+)\}/g,
		special = can.getObject("$.event.special", [can]) || {},

		// Binds an element, returns a function that unbinds.
		delegate = function( el, selector, ev, callback ) {
			can.delegate.call(el, selector, ev, callback);
			return function() {
				can.undelegate.call(el, selector, ev, callback);
			};
		},
		
		// Calls bind or unbind depending if there is a selector.
		binder = function( el, ev, callback, selector ) {
			return selector ?
				delegate( el, can.trim( selector ), ev, callback ) : 
				bind( el, ev, callback );
		},
		
		basicProcessor;
	
	/**
	 * @add can.Control
	 */
	var Control = can.Control = can.Construct(
	/** 
	 * @Static
	 */
	{
		// Setup pre-processes which methods are event listeners.
		/**
		 * @hide
		 * 
		 * Setup pre-process which methods are event listeners.
		 * 
		 */
		setup: function() {

			// Allow contollers to inherit "defaults" from super-classes as it 
			// done in `can.Construct`
			can.Construct.setup.apply( this, arguments );

			// If you didn't provide a name, or are `control`, don't do anything.
			if ( can.Control ) {

				// Cache the underscored names.
				var control = this,
					funcName;

				// Calculate and cache actions.
				control.actions = {};
				for ( funcName in control.prototype ) {
					if ( control._isAction(funcName) ) {
						control.actions[funcName] = control._action(funcName);
					}
				}
			}
		},

		// Moves `this` to the first argument, wraps it with `jQuery` if it's an element
		_shifter : function( context, name ) {

			var method = typeof name == "string" ? context[name] : name;

			if ( ! isFunction( method )) {
				method = context[ method ];
			}
			
			return function() {
				context.called = name;
				return method.apply(context, [this.nodeName ? can.$(this) : this].concat( slice.call(arguments, 0)));
			};
		},

		// Return `true` if is an action.
		/**
		 * @hide
		 * @param {String} methodName a prototype function
		 * @return {Boolean} truthy if an action or not
		 */
		_isAction: function( methodName ) {
			
			var val = this.prototype[methodName],
				type = typeof val;
			// if not the constructor
			return (methodName !== 'constructor') &&
				// and is a function or links to a function
				( type == "function" || (type == "string" &&  isFunction(this.prototype[val] ) ) ) &&
				// and is in special, a processor, or has a funny character
				!! ( special[methodName] || processors[methodName] || /[^\w]/.test(methodName) );
		},
		// Takes a method name and the options passed to a control
		// and tries to return the data necessary to pass to a processor
		// (something that binds things).
		/**
		 * @hide
		 * Takes a method name and the options passed to a control
		 * and tries to return the data necessary to pass to a processor
		 * (something that binds things).
		 * 
		 * For performance reasons, this called twice.  First, it is called when 
		 * the Control class is created.  If the methodName is templated
		 * like: "{window} foo", it returns null.  If it is not templated
		 * it returns event binding data.
		 * 
		 * The resulting data is added to this.actions.
		 * 
		 * When a control instance is created, _action is called again, but only
		 * on templated actions.  
		 * 
		 * @param {Object} methodName the method that will be bound
		 * @param {Object} [options] first param merged with class default options
		 * @return {Object} null or the processor and pre-split parts.  
		 * The processor is what does the binding/subscribing.
		 */
		_action: function( methodName, options ) {
			
			// If we don't have options (a `control` instance), we'll run this 
			// later.  
			paramReplacer.lastIndex = 0;
			if ( options || ! paramReplacer.test( methodName )) {
				// If we have options, run sub to replace templates `{}` with a
				// value from the options or the window
				var convertedName = options ? can.sub(methodName, [options, window]) : methodName;
				if(!convertedName) {
					return null;
				}
				// If a `{}` template resolves to an object, `convertedName` will be
				// an array
				var arr = can.isArray(convertedName),

					// Get the name
					name = arr ? convertedName[1] : convertedName,

					// Grab the event off the end
					parts = name.split(/\s+/g),
					event = parts.pop();

				return {
					processor: processors[event] || basicProcessor,
					parts: [name, parts.join(" "), event],
					delegate : arr ? convertedName[0] : undefined
				};
			}
		},
		// An object of `{eventName : function}` pairs that Control uses to 
		// hook up events auto-magically.
		/**
		 * @attribute processors
		 * An object of `{eventName : function}` pairs that Control uses to hook up events
		 * auto-magically.  A processor function looks like:
		 * 
		 *     can.Control.processors.
		 *       myprocessor = function( el, event, selector, cb, control ) {
		 *          //el - the control's element
		 *          //event - the event (myprocessor)
		 *          //selector - the left of the selector
		 *          //cb - the function to call
		 *          //control - the binding control
		 *       };
		 * 
		 * This would bind anything like: "foo~3242 myprocessor".
		 * 
		 * The processor must return a function that when called, 
		 * unbinds the event handler.
		 * 
		 * Control already has processors for the following events:
		 * 
		 *   - change 
		 *   - click 
		 *   - contextmenu 
		 *   - dblclick 
		 *   - focusin
		 *   - focusout
		 *   - keydown 
		 *   - keyup 
		 *   - keypress 
		 *   - mousedown 
		 *   - mouseenter
		 *   - mouseleave
		 *   - mousemove 
		 *   - mouseout 
		 *   - mouseover 
		 *   - mouseup 
		 *   - reset 
		 *   - resize 
		 *   - scroll 
		 *   - select 
		 *   - submit  
		 * 
		 * Listen to events on the document or window 
		 * with templated event handlers:
		 * 
		 *     Sized = can.Control({
		 *       "{window} resize": function(){
		 *         this.element.width( this.element.parent().width() / 2 );
		 *       }
		 *     });
		 *     
		 *     new Sized( $( '#foo' ) );
		 */
		processors: {},
		// A object of name-value pairs that act as default values for a 
		// control instance
		/**
		 * @attribute defaults
		 * A object of name-value pairs that act as default values for a control's 
		 * [can.Control::options this.options].
		 * 
		 *     Message = can.Control({
		 *       defaults: {
		 *         message: "Hello World"
		 *       }
		 *     }, {
		 *       init: function(){
		 *         this.element.text( this.options.message );
		 *       }
		 *     });
		 *     
		 *     new Message( "#el1" ); //writes "Hello World"
		 *     new Message( "#el12", { message: "hi" } ); //writes hi
		 *     
		 * In [can.Control::setup] the options passed to the control
		 * are merged with defaults.  This is not a deep merge.
		 */
		defaults: {}
	},
	/** 
	 * @Prototype
	 */
	{
		// Sets `this.element`, saves the control in `data, binds event
		// handlers.
		/**
		 * Setup is where most of control's magic happens.  It does the following:
		 * 
		 * ### Sets this.element
		 * 
		 * The first parameter passed to new Control( el, options ) is expected to be 
		 * an element.  This gets converted to a Wrapped NodeList element and set as
		 * [can.Control.prototype.element this.element].
		 * 
		 * ### Adds the control's name to the element's className.
		 * 
		 * Control adds it's plugin name to the element's className for easier 
		 * debugging.  For example, if your Control is named "Foo.Bar", it adds
		 * "foo_bar" to the className.
		 * 
		 * ### Saves the control in $.data
		 * 
		 * A reference to the control instance is saved in $.data.  You can find 
		 * instances of "Foo.Bar" like: 
		 * 
		 *     $( '#el' ).data( 'controls' )[ 'foo_bar' ]
		 *
		 * ### Merges Options
		 * Merges the default options with optional user-supplied ones.
		 * Additionally, default values are exposed in the static [can.Control.static.defaults defaults] 
		 * so that users can change them.
		 * 
		 * ### Binds event handlers
		 * 
		 * Setup does the event binding described in [can.control.listening Listening To Events].
		 * 
		 * @param {HTMLElement} element the element this instance operates on.
		 * @param {Object} [options] option values for the control.  These get added to
		 * this.options and merged with [can.Control.static.defaults defaults].
		 * @return {Array} return an array if you wan to change what init is called with. By
		 * default it is called with the element and options passed to the control.
		 */
		setup: function( element, options ) {

			var cls = this.constructor,
				pluginname = cls.pluginName || cls._fullName,
				arr;

			// Want the raw element here.
			this.element = can.$(element)

			if ( pluginname && pluginname !== 'can_control') {
				// Set element and `className` on element.
				this.element.addClass(pluginname);
			}
			
			(arr = can.data(this.element,"controls")) || can.data(this.element,"controls",arr = []);
			arr.push(this);
			
			// Option merging.
			/**
			 * @attribute options
			 * 
			 * Options are used to configure an control.  They are
			 * the 2nd argument
			 * passed to a control (or the first argument passed to the 
			 * [can.Control.plugin control's jQuery plugin]).
			 * 
			 * For example:
			 * 
			 *     can.Control('Hello')
			 *     
			 *     var h1 = new Hello( $( '#content1' ), { message: 'World' } );
			 *     equal( h1.options.message , "World" );
			 *     
			 *     var h2 = $( '#content2' ).hello({ message: 'There' })
			 *                              .control();
			 *     equal( h2.options.message , "There" );
			 * 
			 * Options are merged with [can.Control.static.defaults defaults] in
			 * [can.Control.prototype.setup setup].
			 * 
			 * For example:
			 * 
			 *     Tabs = can.Control({
			 *        defaults: {
			 *          activeClass: "ui-active-state"
			 *        }
			 *     }, {
			 *        init: function(){
			 *          this.element.addClass( this.options.activeClass );
			 *        }
			 *     });
			 *     
			 *     new Tabs( $( "#tabs1" ) ); // adds 'ui-active-state'
			 *     new Tabs( $( "#tabs2" ), { activeClass : 'active' } ); // adds 'active'
			 *     
			 * Options are typically updated by calling 
			 * [can.Control.prototype.update update];
			 *
			 */
			this.options = extend({}, cls.defaults, options);

			// Bind all event handlers.
			this.on();

			// Get's passed into `init`.
			/**
			 * @attribute element
			 * 
			 * The control instance's HTMLElement (or window) wrapped by the 
			 * util library for ease of use. It is set by the first
			 * parameter to `new can.Construct( element, options )` 
			 * in [can.Control::setup].  Control listens on `this.element`
			 * for events.
			 * 
			 * ### Quick Example
			 * 
			 * The following `HelloWorld` control sets the control`s text to "Hello World":
			 * 
			 *     HelloWorld = can.Control({
			 *       init: function(){
			 * 	       this.element.text( 'Hello World' );
			 *       }
			 *     });
			 *     
			 *     // create the controller on the element
			 *     new HelloWorld( document.getElementById( '#helloworld' ) );
			 * 
			 * ## Wrapped NodeList
			 * 
			 * `this.element` is a wrapped NodeList of one HTMLELement (or window).  This
			 * is for convience in libraries like jQuery where all methods operate only on a
			 * NodeList.  To get the raw HTMLElement, write:
			 * 
			 *     this.element[0] //-> HTMLElement
			 * 
			 * The following details the NodeList used by each library with 
			 * an example of updating it's text:
			 * 
			 * __jQuery__ `jQuery( HTMLElement )`
			 * 
			 *     this.element.text("Hello World")
			 * 
			 * __Zepto__ `Zepto( HTMLElement )`
			 * 
			 *     this.element.text("Hello World")
			 * 
			 * __Dojo__ `new dojo.NodeList( HTMLElement )`
			 * 
			 *     // TODO
			 * 
			 * __Mootools__ `$$( HTMLElement )`
			 * 
			 *    this.element.empty().appendText("Hello World")
			 * 
			 * __YUI__ 
			 * 
			 *    // TODO
			 * 
			 * 
			 * ## Changing `this.element`
			 * 
			 * Sometimes you don't want what's passed to `new can.Control`
			 * to be this.element.  You can change this by overwriting
			 * setup or by unbinding, setting this.element, and rebinding.
			 * 
			 * ### Overwriting Setup
			 * 
			 * The following Combobox overwrites setup to wrap a
			 * select element with a div.  That div is used 
			 * as `this.element`. Notice how `destroy` sets back the
			 * original element.
			 * 
			 *     Combobox = can.Control({
			 *       setup: function( el, options ) {
			 *          this.oldElement = $( el );
			 *          var newEl = $( '<div/>' );
			 *          this.oldElement.wrap( newEl );
			 *          can.Controll.prototype.setup.call( this, newEl, options );
			 *       },
			 *       init: function() {
			 *          this.element //-> the div
			 *       },
			 *       ".option click": function() {
			 *         // event handler bound on the div
			 *       },
			 *       destroy: function() {
			 *          var div = this.element; //save reference
			 *          can.Control.prototype.destroy.call( this );
			 *          div.replaceWith( this.oldElement );
			 *       }
			 *     });
			 * 
			 * ### unbining, setting, and rebinding.
			 * 
			 * You could also change this.element by calling
			 * [can.Control::off], setting this.element, and 
			 * then calling [can.Control::on] like:
			 * 
			 *     move: function( newElement ) {
			 *        this.off();
			 *        this.element = $( newElement );
			 *        this.on();
			 *     }
			 */
			return [this.element, this.options];
		},
		/**
		 * `this.on( [element, selector, eventName, handler] )` is used to rebind 
		 * all event handlers when [can.Control::options this.options] has changed.  It
		 * can also be used to bind or delegate from other elements or objects.
		 * 
		 * ## Rebinding
		 * 
		 * By using templated event handlers, a control can listen to objects outside
		 * `this.element`.  This is extremely common in MVC programming.  For example,
		 * the following control might listen to a task model's `completed` property and
		 * toggle a strike className like:
		 * 
		 *     TaskStriker = can.Control({
		 *       "{task} completed": function(){
		 * 	       this.update();
		 *       },
		 *       update: function(){
		 *         if ( this.options.task.completed ) {
		 * 	         this.element.addClass( 'strike' );
		 * 	       } else {
		 *           this.element.removeClass( 'strike' );
		 *         }
		 *       }
		 *     });
		 * 
		 *     var taskstriker = new TaskStriker({ 
		 *       task: new Task({ completed: 'true' }) 
		 *     });
		 * 
		 * To update the taskstriker's task, add a task method that updates
		 * this.options and calls rebind like:
		 * 
		 *     TaskStriker = can.Control({
		 *       "{task} completed": function(){
		 * 	       this.update();
		 *       },
		 *       update: function() {
		 *         if ( this.options.task.completed ) {
		 * 	         this.element.addClass( 'strike' );
		 * 	       } else {
		 *           this.element.removeClass( 'strike' );
		 *         }
		 *       },
		 *       task: function( newTask ) {
		 *         this.options.task = newTask;
		 *         this.on();
		 *         this.update();
		 *       }
		 *     });
		 * 
		 *     var taskstriker = new TaskStriker({ 
		 *       task: new Task({ completed: true }) 
		 *     });
		 *     taskstriker.task( new TaskStriker({ 
		 *       task: new Task({ completed: false }) 
		 *     }));
		 * 
		 * ## Adding new events
		 * 
		 * If events need to be bound to outside of the control and templated event handlers
		 * are not sufficent, you can call this.on to bind or delegate programatically:
		 * 
		 *     init: function() {
		 *        // calls somethingClicked( el, ev )
		 *        this.on( 'click', 'somethingClicked' ); 
		 *     
		 *        // calls function when the window is clicked
		 *        this.on( window, 'click', function( ev ) {
		 *          //do something
		 *        });
		 *     },
		 *     somethingClicked: function( el, ev ) {
		 *       
		 *     }
		 * 
		 * @param {HTMLElement|jQuery.fn|Object} [el=this.element]
		 * The element to be bound.  If an eventName is provided,
		 * the control's element is used instead.
		 * @param {String} [selector] A css selector for event delegation.
		 * @param {String} [eventName] The event to listen for.
		 * @param {Function|String} [func] A callback function or the String name of a control function.  If a control
		 * function name is given, the control function is called back with the bound element and event as the first
		 * and second parameter.  Otherwise the function is called back like a normal bind.
		 * @return {Integer} The id of the binding in this._bindings
		 */
		on: function( el, selector, eventName, func ) {
			if ( ! el ) {

				// Adds bindings.
				this.off();

				// Go through the cached list of actions and use the processor 
				// to bind
				var cls = this.constructor,
					bindings = this._bindings,
					actions = cls.actions,
					element = this.element,
					destroyCB = can.Control._shifter(this,"destroy"),
					funcName, ready;
					
				for ( funcName in actions ) {
					// Only push if we have the action and no option is `undefined`
					if ( actions.hasOwnProperty( funcName ) &&
						(ready = actions[funcName] || cls._action(funcName, this.options))) {
						bindings.push(ready.processor(ready.delegate || element,
							ready.parts[2], ready.parts[1], funcName, this));
					}
				}
	
	
				// Setup to be destroyed...  
				// don't bind because we don't want to remove it.
				can.bind.call(element,"destroyed", destroyCB);
				bindings.push(function( el ) {
					can.unbind.call(el,"destroyed", destroyCB);
				});
				return bindings.length;
			}

			if ( typeof el == 'string' ) {
				func = eventName;
				eventName = selector;
				selector = el;
				el = this.element;
			}

			if(func === undefined) {
				func = eventName;
				eventName = selector;
				selector = null;
			}

			if ( typeof func == 'string' ) {
				func = can.Control._shifter(this,func);
			}

			this._bindings.push( binder( el, eventName, func, selector ));

			return this._bindings.length;
		},
		// Unbinds all event handlers on the controller.
		/**
		 * @hide
		 * Unbinds all event handlers on the controller. You should never
		 * be calling this unless in use with [can.Control::on].
		 */
		off : function(){
			var el = this.element[0]
			each(this._bindings || [], function( value ) {
				value(el);
			});
			// Adds bindings.
			this._bindings = [];
		},
		// Prepares a `control` for garbage collection
		/**
		 * @function destroy
		 * `destroy` prepares a control for garbage collection and is a place to
		 * reset any changes the control has made.  
		 * 
		 * ## Allowing Garbage Collection
		 * 
		 * Destroy is called whenever a control's element is removed from the page using 
		 * the library's standard HTML modifier methods.  This means that you
		 * don't have to call destroy yourself and it 
		 * will be called automatically when appropriate.  
		 * 
		 * The following `Clicker` widget listens on the window for clicks and updates
		 * its element's innerHTML.  If we remove the element, the window's event handler
		 * is removed auto-magically:
		 *  
		 * 
		 *      Clickr = can.Control({
		 *       "{window} click": function() {
		 * 	       this.element.html( this.count ? 
		 * 	                          this.count++ : this.count = 0 );
		 *       }  
		 *     });
		 *     
		 *     // create a clicker on an element
		 *     new Clicker( "#clickme" );
		 * 
		 *     // remove the element
		 *     $( '#clickme' ).remove();
		 * 
		 * 
		 * The methods you can use that will destroy controls automatically by library:
		 * 
		 * __jQuery and Zepto__
		 * 
		 *   - $.fn.remove
		 *   - $.fn.html
		 *   - $.fn.replaceWith
		 *   - $.fn.empty
		 * 
		 * __Dojo__
		 * 
		 *   - dojo.destroy
		 *   - dojo.empty
		 *   - dojo.place (with the replace option)
		 * 
		 * __Mootools__
		 * 
		 *   - Element.prototype.destroy
		 * 
		 * __YUI__
		 * 
		 *   - TODO!
		 * 
		 * 
		 * ## Teardown in Destroy
		 * 
		 * Sometimes, you want to reset a controlled element back to its
		 * original state when the control is destroyed.  Overwriting destroy
		 * lets you write teardown code of this manner.  __When overwriting
		 * destroy, make sure you call Control's base functionality__.
		 * 
		 * The following example changes an element's text when the control is
		 * created and sets it back when the control is removed:
		 * 
		 *     Changer = can.Control({
		 *       init: function() {
		 *         this.oldText = this.element.text();
		 *         this.element.text( "Changed!!!" );
		 *       },
		 *       destroy: function() {
		 *         this.element.text( this.oldText );
		 *         can.Control.prototype.destroy.call( this );
		 *       }
		 *     });
		 *     
		 *     // create a changer which changes #myel's text
		 *     var changer = new Changer( '#myel' );
		 * 
		 *     // destroy changer which will reset it
		 *     changer.destroy();
		 * 
		 * ## Base Functionality
		 * 
		 * Control prepares the control for garbage collection by:
		 * 
		 *   - unbinding all event handlers
		 *   - clearing references to this.element and this.options
		 *   - clearing the element's reference to the control
		 *   - removing it's [can.Control.pluginName] from the element's className
		 * 
		 */
		destroy: function() {
			//Control already destroyed
			if(this.element === null) {
				
				return;
			}
			var Class = this.constructor,
				pluginName = Class.pluginName || Class._fullName,
				controls;
			
			// Unbind bindings.
			this.off();
			
			if(pluginName && pluginName !== 'can_control'){
				// Remove the `className`.
				this.element.removeClass(pluginName);
			}
			
			// Remove from `data`.
			controls = can.data(this.element,"controls");
			controls.splice(can.inArray(this, controls),1);
			
			can.trigger( this, "destroyed"); // In case we want to know if the `control` is removed.
			
			this.element = null;
		}
	});

	var processors = can.Control.processors,
	// Processors do the binding.
	// They return a function that unbinds when called.  
	//
	// The basic processor that binds events.
	basicProcessor = function( el, event, selector, methodName, control ) {
		return binder( el, event, can.Control._shifter(control, methodName), selector);
	};




	// Set common events to be processed as a `basicProcessor`
	each(["change", "click", "contextmenu", "dblclick", "keydown", "keyup",
		"keypress", "mousedown", "mousemove", "mouseout", "mouseover",
		"mouseup", "reset", "resize", "scroll", "select", "submit", "focusin",
		"focusout", "mouseenter", "mouseleave",
		// #104 - Add touch events as default processors
		// TOOD feature detect?
		"touchstart", "touchmove", "touchcancel", "touchend", "touchleave"
	], function( v ) {
		processors[v] = basicProcessor;
	});

	return Control;
})(module["can/util/jquery/jquery.js"], module["can/construct/construct.js"]);// ## can/control/plugin/plugin.js

module['can/control/plugin/plugin.js'] = (function($, can) {
//used to determine if a control instance is one of controllers
//controllers can be strings or classes
var i, 
	isAControllerOf = function( instance, controllers ) {
		for ( i = 0; i < controllers.length; i++ ) {
			if ( typeof controllers[i] == 'string' ? instance.constructor._shortName == controllers[i] : instance instanceof controllers[i] ) {
				return true;
			}
		}
		return false;
	},
	makeArray = can.makeArray,
	old = can.Control.setup;

/*
 * static
 */
can.Control.setup = function() {
	// if you didn't provide a name, or are control, don't do anything
	if ( this !== can.Control ) {

		/**
		 * @attribute can.Control.plugin.static.pluginName
		 * @parent can.Control.plugin
		 *
		 * Setting the static `pluginName` property allows you to override the default name
		 * with your own.
		 *
		 *		var Filler = can.Control({
		 *		  pluginName: 'fillWith'
		 *		},{});
		 * 
		 *		$("#foo").fillWith();
		 *
		 * If you don't provide a `pluginName`, the control falls back to the
		 * [can.Construct.fullName fullName] attribute:
		 *
		 *		can.Control('Ui.Layout.FillWith', {}, {});
		 *		$("#foo").ui_layout_fill_with();
		 *
		 */
		var pluginName = this.pluginName || this._fullName;
			
		// create jQuery plugin
		if(pluginName !== 'can_control'){
			this.plugin(pluginName);
		}
			
		old.apply(this, arguments);
	}
};

/*
 * prototype
 */
$.fn.extend({

	/**
	 * @function jQuery.fn.controls
	 * @parent can.Control.plugin
	 * 
	 * When the widget is initialized, the plugin control creates an array 
	 * of control instance(s) with the DOM element it was initialized on using 
	 * [can.data] method.
	 *
	 * The `controls` method allows you to get the control instance(s) for any element.  
	 *
	 *		//- Inits the widgets
	 *		$('.widgets:eq(0)').my_box();
	 *		$('.widgets:eq(1)').my_clock();
	 *
	 *		<div class="widgets my_box" />
	 *		<div class="widgets my_clock" />
	 *
	 *		$('.widgets').controls() //-> [ MyBox, MyClock ]
	 *
	 * Additionally, you can invoke it passing the name of a control
	 * to fetch a specific instance(s).
	 *
	 *		//- Inits the widgets
	 *		$('.widgets:eq(0)').my_box();
	 *		$('.widgets:eq(1)').my_clock();
	 *
	 *		<div class="widgets my_box" />
	 *		<div class="widgets my_clock" />
	 *
	 *		$('.widgets').controls('MyBox') //-> [ MyBox ]
	 *
	 * @param {Object} control (optional) if exists the control instance(s) with that constructor function or type will be returned.
	 * @return {Array} an array of control instance(s).
	 */
	controls: function() {
		var controllerNames = makeArray(arguments),
			instances = [],
			controls, c, cname;
		//check if arguments
		this.each(function() {

			controls = can.$(this).data("controls");
			if(!controls){
				return;
			}
			for(var i=0; i<controls.length; i++){
				c = controls[i];
				if (!controllerNames.length || isAControllerOf(c, controllerNames) ) {
					instances.push(c);
				}
			}
		});
		return instances;
	},
	
	/**
	 * @function jQuery.fn.control
	 * @parent can.Control.plugin
	 * 
	 * The `control` does the same as [jQuery.fn.controls controls] execept it only 
	 * returns the first instance found.
	 *
	 *		//- Init MyBox widget
	 *		$('.widgets').my_box();
	 *
	 *		<div class="widgets my_box" />
	 *
	 *		$('.widgets').controls() //-> MyBox
	 *
	 * @param {Object} control (optional) if exists the first control instance with that constructor function or type will be returned.
	 * @return {can.Control} the first control.
	 */
	control: function( control ) {
		return this.controls.apply(this, arguments)[0];
	}
});

can.Control.plugin = function(pluginname){
	var control = this;

	if (!$.fn[pluginname]) {
		$.fn[pluginname] = function(options){
		
			var args = makeArray(arguments),   //if the arg is a method on this control
			isMethod = typeof options == "string" && $.isFunction(control.prototype[options]), meth = args[0],
			returns;
			this.each(function(){
				//check if created
				var plugin = can.$(this).control(control);
				
				if (plugin) {
					if (isMethod) {
						// call a method on the control with the remaining args
						returns = plugin[meth].apply(plugin, args.slice(1));
					}
					else {
						// call the plugin's update method
						plugin.update.apply(plugin, args);
					}
				}
				else {
					//create a new control instance
					control.newInstance.apply(control, [this].concat(args));
				}
			});
			return returns !== undefined ? returns : this;
		};
	}
}

/**
 * @function can.Control.prototype.update
 * @parent can.Control.plugin
 * 
 * Update extends [can.Control.prototype.options options] 
 * with the `options` argument and rebinds all events.  It 
 * re-configures the control.
 * 
 * For example, the following control wraps a recipe form. When the form
 * is submitted, it creates the recipe on the server.  When the recipe
 * is `created`, it resets the form with a new instance.
 * 
 *		var Creator = can.Control({
 *		  "{recipe} created" : function(){
 *		    this.update({recipe : new Recipe()});
 *		    this.element[0].reset();
 *		    this.element.find("[type=submit]").val("Create Recipe")
 *		  },
 *		  "submit" : function(el, ev){
 *		    ev.preventDefault();
 *		    var recipe = this.options.recipe;
 *			recipe.attrs( this.element.formParams() );
 *			this.element.find("[type=submit]").val("Saving...")
 *			recipe.save();
 *		  }
 *		});
 *
 *		$('#createRecipes').creator({ recipe : new Recipe() })
 * 
 * *Update* is called if a control's plugin helper is called with the plugin options on an element
 * that already has a control instance of the same type. If you want to implement your
 * own update method make sure to call the old one either using the [can.Construct.super super] plugin or
 * by calling `can.Control.prototype.update.apply(this, arguments);`.
 * For example, you can change the content of the control element every time the options change:
 * 
 *		var Plugin = can.Control({
 *		    pluginName: 'myPlugin'
 *		  }, {
 *		    init : function(el, options) {
 *			  this.updateCount = 0;
 *			  this.update({
 *			    text : 'Initialized'
 *			  });
 *			},
 *			update : function(options) {
 *			  // Call the can.Control update first.
 *			  // Use this._super when using can/construct/super
 *			  can.Control.prototype.update.call(this, options);
 *			  this.element.html(this.options.text + ' ' +
 *			    (++this.updateCount) + ' times');
 *			}
 *		});
 *
 *		$('#control').myPlugin();
 *		$('#control').html();
 *		// Initialized. Updated 1 times
 *
 *		$('#control').myPlugin({ text : 'Calling update. Updated' });
 *		$('#control').html();
 *		// Calling update. Updated 2 times
 *
 * @demo can/control/plugin/demo-update.html
 * 
 * @param {Object} options A list of options to merge with 
 * [can.Control.prototype.options this.options].  Often this method
 * is called by the [can.Control.plugin jQuery helper function].
 */
can.Control.prototype.update = function( options ) {
		can.extend(this.options, options);
		this.on();
};

return can;
})(module["jquery/jquery.js"], module["can/util/jquery/jquery.js"], module["can/control/control.js"]);// ## can/view/view.js

module['can/view/view.js'] = (function( can ) {
	// ## view.js
	// `can.view`  
	// _Templating abstraction._

	var isFunction = can.isFunction,
		makeArray = can.makeArray,
		// Used for hookup `id`s.
		hookupId = 1,
	/**
	 * @add can.view
	 */
	$view = can.view = can.template = function(view, data, helpers, callback){
		// If helpers is a `function`, it is actually a callback.
		if ( isFunction( helpers )) {
			callback = helpers;
			helpers = undefined;
		}

		var pipe = function(result){
				return $view.frag(result);
			},
			// In case we got a callback, we need to convert the can.view.render
			// result to a document fragment
			wrapCallback = isFunction(callback) ? function(frag) {
				callback(pipe(frag));
			} : null,
			// Get the result.
			result = $view.render(view, data, helpers, wrapCallback),
			deferred = can.Deferred();

		if(isFunction(result))  {
			return result;
		}

		if(can.isDeferred(result)){
			result.then(function(result, data) {
				deferred.resolve.call(deferred, pipe(result), data);
			}, function() {
				deferred.fail.apply(deferred, arguments);
			});
			return deferred;
		}
		
		// Convert it into a dom frag.
		return pipe(result);
	};

	can.extend( $view, {
		// creates a frag and hooks it up all at once
		frag: function(result, parentNode ){
			return $view.hookup( $view.fragment(result), parentNode );
		},

		// simply creates a frag
		// this is used internally to create a frag
		// insert it
		// then hook it up
		fragment: function(result){
			var frag = can.buildFragment(result,document.body);
			// If we have an empty frag...
			if(!frag.childNodes.length) { 
				frag.appendChild(document.createTextNode(''));
			}
			return frag;
		},

		// Convert a path like string into something that's ok for an `element` ID.
		toId : function( src ) {
			return can.map(src.toString().split(/\/|\./g), function( part ) {
				// Dont include empty strings in toId functions
				if ( part ) {
					return part;
				}
			}).join("_");
		},
		
		hookup: function(fragment, parentNode ){
			var hookupEls = [],
				id, 
				func;
			
			// Get all `childNodes`.
			can.each(fragment.childNodes ? can.makeArray(fragment.childNodes) : fragment, function(node){
				if(node.nodeType === 1){
					hookupEls.push(node);
					hookupEls.push.apply(hookupEls, can.makeArray( node.getElementsByTagName('*')));
				}
			});


			// Filter by `data-view-id` attribute.
			can.each( hookupEls, function( el ) {
				if ( el.getAttribute && (id = el.getAttribute('data-view-id')) && (func = $view.hookups[id]) ) {
					func(el, parentNode, id);
					delete $view.hookups[id];
					el.removeAttribute('data-view-id');
				}
			});

			return fragment;
		},

		/**
		 * @function ejs
		 *
		 * `can.view.ejs([id,] template)` registers an EJS template string 
		 * for a given id programatically. The following
		 * registers `myViewEJS` and renders it into a documentFragment.
		 *
		 *      can.view.ejs('myViewEJS', '<h2><%= message %></h2>');
		 * 
		 *      var frag = can.view('myViewEJS', {
		 *          message : 'Hello there!'
		 *      });
		 * 
		 *      frag // -> <h2>Hello there!</h2>
		 *
		 * To convert the template into a render function, just pass 
		 * the template. Call the render function with the data
		 * you want to pass to the template and it returns the 
		 * documentFragment.
		 *
		 *      var renderer = can.view.ejs('<div><%= message %></div>');
		 *      renderer({
		 *          message : 'EJS'
		 *      }); // -> <div>EJS</div>
		 *
		 * @param {String} [id] The template id 
		 * @param {String} template The EJS template string
		 */
		//
		/**
		 * @function mustache
		 *
		 * `can.view.mustache([id,] template)` registers an Mustache template string 
		 * for a given id programatically. The following
		 * registers `myStache` and renders it into a documentFragment.
		 *
		 *      can.view.ejs('myStache', '<h2>{{message}}</h2>');
		 * 
		 *      var frag = can.view('myStache', {
		 *          message : 'Hello there!'
		 *      });
		 * 
		 *      frag // -> <h2>Hello there!</h2>
		 *
		 * To convert the template into a render function, just pass 
		 * the template. Call the render function with the data
		 * you want to pass to the template and it returns the 
		 * documentFragment.
		 *
		 *      var renderer = can.view.mustache('<div>{{message}}</div>');
		 *      renderer({
		 *          message : 'Mustache'
		 *      }); // -> <div>Mustache</div>
		 *
		 * @param {String} [id] The template id 
		 * @param {String} template The Mustache template string
		 */
		//
		/**
		 * @attribute hookups
		 * @hide
		 * A list of pending 'hookups'
		 */
		hookups: {},

		/**
		 * @function hook
		 * Registers a hookup function that can be called back after the html is 
		 * put on the page.  Typically this is handled by the template engine.  Currently
		 * only EJS supports this functionality.
		 * 
		 *     var id = can.View.hookup(function(el){
		 *            //do something with el
		 *         }),
		 *         html = "<div data-view-id='"+id+"'>"
		 *     $('.foo').html(html);
		 * 
		 * 
		 * @param {Function} cb a callback function to be called with the element
		 * @param {Number} the hookup number
		 */
		hook: function( cb ) {
			$view.hookups[++hookupId] = cb;
			return " data-view-id='"+hookupId+"'";
		},

		/**
		 * @attribute cached
		 * @hide
		 * Cached are put in this object
		 */
		cached: {},

		cachedRenderers: {},

		/**
		 * @attribute cache
		 * By default, views are cached on the client.  If you'd like the
		 * the views to reload from the server, you can set the `cache` attribute to `false`.
		 *
		 * 		//- Forces loads from server
		 * 		can.view.cache = false; 
		 *
		 */
		cache: true,

		/**
		 * @function register
		 * Registers a template engine to be used with 
		 * view helpers and compression.  
		 * 
		 * ## Example
		 * 
		 * @codestart
		 * can.View.register({
		 * 	suffix : "tmpl",
		 *  plugin : "jquery/view/tmpl",
		 * 	renderer: function( id, text ) {
		 * 		return function(data){
		 * 			return jQuery.render( text, data );
		 * 		}
		 * 	},
		 * 	script: function( id, text ) {
		 * 		var tmpl = can.tmpl(text).toString();
		 * 		return "function(data){return ("+
		 * 		  	tmpl+
		 * 			").call(jQuery, jQuery, data); }";
		 * 	}
		 * })
		 * @codeend
		 * Here's what each property does:
		 * 
		 *    * plugin - the location of the plugin
		 *    * suffix - files that use this suffix will be processed by this template engine
		 *    * renderer - returns a function that will render the template provided by text
		 *    * script - returns a string form of the processed template function.
		 * 
		 * @param {Object} info a object of method and properties 
		 * 
		 * that enable template integration:
		 * <ul>
		 *   <li>plugin - the location of the plugin.  EX: 'jquery/view/ejs'</li>
		 *   <li>suffix - the view extension.  EX: 'ejs'</li>
		 *   <li>script(id, src) - a function that returns a string that when evaluated returns a function that can be 
		 *    used as the render (i.e. have func.call(data, data, helpers) called on it).</li>
		 *   <li>renderer(id, text) - a function that takes the id of the template and the text of the template and
		 *    returns a render function.</li>
		 * </ul>
		 */
		register: function( info ) {
			this.types["." + info.suffix] = info;
		},

		types: {},

		/**
		 * @attribute ext
		 * The default suffix to use if none is provided in the view's url.  
		 * This is set to `.ejs` by default.
		 *
		 * 		// Changes view ext to 'txt'
		 * 		can.view.ext = 'txt';
		 *
		 */
		ext: ".ejs",

		/**
		 * Returns the text that 
		 * @hide 
		 * @param {Object} type
		 * @param {Object} id
		 * @param {Object} src
		 */
		registerScript: function() {},

		/**
		 * @hide
		 * Called by a production script to pre-load a renderer function
		 * into the view cache.
		 * @param {String} id
		 * @param {Function} renderer
		 */
		preload: function( ) {},

		/**
		 * @function render
		 * `can.view.render(view, [data], [helpers], callback)` returns the rendered markup produced by the corresponding template
		 * engine as String. If you pass a deferred object in as data, render returns
		 * a deferred resolving to the rendered markup.
		 * 
		 * `can.view.render` is commonly used for sub-templates.
		 * 
		 * ## Example
		 * 
		 * _welcome.ejs_ looks like:
		 * 
		 *     <h1>Hello <%= hello %></h1>
		 * 
		 * Render it to a string like:
		 * 
		 *     can.view.render("welcome.ejs",{hello: "world"})
		 *       //-> <h1>Hello world</h1>
		 * 
		 * ## Use as a Subtemplate
		 * 
		 * If you have a template like:
		 * 
		 *     <ul>
		 *       <% list(items, function(item){ %>
		 *         <%== can.view.render("item.ejs",item) %>
		 *       <% }) %>
		 *     </ul>
		 *
		 * ## Using renderer functions
		 *
		 * If you only pass the view path, `can.view will return a renderer function that can be called with
		 * the data to render:
		 *
		 *     var renderer = can.view.render("welcome.ejs");
		 *     // Do some more things
		 *     renderer({hello: "world"}) // -> Document Fragment
		 * 
		 * @param {String|Object} view the path of the view template or a view object
		 * @param {Object} [data] the object passed to a template
		 * @param {Object} [helpers] additional helper methods to be passed to the view template
		 * @param {Function} [callback] function executed after template has been processed
		 * @param {String|Object|Function} returns a string of processed text or a deferred
		 * that resolves to the processed text or a renderer function when no data are passed.
		 * 
		 */
		render: function( view, data, helpers, callback ) {
			// If helpers is a `function`, it is actually a callback.
			if ( isFunction( helpers )) {
				callback = helpers;
				helpers = undefined;
			}

			// See if we got passed any deferreds.
			var deferreds = getDeferreds(data);

			if ( deferreds.length ) { // Does data contain any deferreds?
				// The deferred that resolves into the rendered content...
				var deferred = new can.Deferred(),
					dataCopy = can.extend({}, data);
	
				// Add the view request to the list of deferreds.
				deferreds.push(get(view, true))
	
				// Wait for the view and all deferreds to finish...
				can.when.apply(can, deferreds).then(function( resolved ) {
					// Get all the resolved deferreds.
					var objs = makeArray(arguments),
						// Renderer is the last index of the data.
						renderer = objs.pop(),
						// The result of the template rendering with data.
						result; 
	
					// Make data look like the resolved deferreds.
					if ( can.isDeferred(data) ) {
						dataCopy = usefulPart(resolved);
					}
					else {
						// Go through each prop in data again and
						// replace the defferreds with what they resolved to.
						for ( var prop in data ) {
							if ( can.isDeferred(data[prop]) ) {
								dataCopy[prop] = usefulPart(objs.shift());
							}
						}
					}

					// Get the rendered result.
					result = renderer(dataCopy, helpers);
	
					// Resolve with the rendered view.
					deferred.resolve(result, dataCopy);

					// If there's a `callback`, call it back with the result.
					callback && callback(result, dataCopy);
				}, function() {
					deferred.reject.apply(deferred, arguments)
				});
				// Return the deferred...
				return deferred;
			}
			else {
				// No deferreds! Render this bad boy.
				var response, 
					// If there's a `callback` function
					async = isFunction( callback ),
					// Get the `view` type
					deferred = get(view, async);

				// If we are `async`...
				if ( async ) {
					// Return the deferred
					response = deferred;
					// And fire callback with the rendered result.
					deferred.then(function( renderer ) {
						callback(data ? renderer(data, helpers) : renderer);
					})
				} else {
					// if the deferred is resolved, call the cached renderer instead
					// this is because it's possible, with recursive deferreds to
					// need to render a view while its deferred is _resolving_.  A _resolving_ deferred
					// is a deferred that was just resolved and is calling back it's success callbacks.
					// If a new success handler is called while resoliving, it does not get fired by
					// jQuery's deferred system.  So instead of adding a new callback
					// we use the cached renderer.
					// We also add __view_id on the deferred so we can look up it's cached renderer.
					// In the future, we might simply store either a deferred or the cached result.
					if(deferred.state() === "resolved" && deferred.__view_id  ){
						var currentRenderer = $view.cachedRenderers[ deferred.__view_id ];
						return data ? currentRenderer(data, helpers) : currentRenderer;
					} else {
						// Otherwise, the deferred is complete, so
						// set response to the result of the rendering.
						deferred.then(function( renderer ) {
							response = data ? renderer(data, helpers) : renderer;
						});
					}
				}

				return response;
			}
		},

		/**
		 * @hide
		 * Registers a view with `cached` object.  This is used
		 * internally by this class and Mustache to hookup views.
		 * @param  {String} id
		 * @param  {String} text
		 * @param  {String} type
		 * @param  {can.Deferred} def
		 */
		registerView: function( id, text, type, def ) {
			// Get the renderer function.
			var func = (type || $view.types[$view.ext]).renderer(id, text);
			def = def || new can.Deferred();
			
			// Cache if we are caching.
			if ( $view.cache ) {
				$view.cached[id] = def;
				def.__view_id = id;
				$view.cachedRenderers[id] = func;
			}

			// Return the objects for the response's `dataTypes`
			// (in this case view).
			return def.resolve(func);
		}
	});

	// Makes sure there's a template, if not, have `steal` provide a warning.
	var	checkText = function( text, url ) {
			if ( ! text.length ) {
				
				throw "can.view: No template or empty template:" + url;
			}
		},
		// `Returns a `view` renderer deferred.  
		// `url` - The url to the template.  
		// `async` - If the ajax request should be asynchronous.  
		// Returns a deferred.
		get = function( url, async ) {
			var suffix = url.match(/\.[\w\d]+$/),
			type, 
			// If we are reading a script element for the content of the template,
			// `el` will be set to that script element.
			el, 
			// A unique identifier for the view (used for caching).
			// This is typically derived from the element id or
			// the url for the template.
			id, 
			// The ajax request used to retrieve the template content.
			jqXHR;

			//If the url has a #, we assume we want to use an inline template
			//from a script element and not current page's HTML
			if( url.match(/^#/) ) {
				url = url.substr(1);
			}
			// If we have an inline template, derive the suffix from the `text/???` part.
			// This only supports `<script>` tags.
			if ( el = document.getElementById(url) ) {
				suffix = "."+el.type.match(/\/(x\-)?(.+)/)[2];
			}
	
			// If there is no suffix, add one.
			if (!suffix && !$view.cached[url] ) {
				url += ( suffix = $view.ext );
			}

			if ( can.isArray( suffix )) {
				suffix = suffix[0]
			}
	
			// Convert to a unique and valid id.
			id = $view.toId(url);
	
			// If an absolute path, use `steal` to get it.
			// You should only be using `//` if you are using `steal`.
			if ( url.match(/^\/\//) ) {
				var sub = url.substr(2);
				url = ! window.steal ? 
					sub :
					steal.config().root.mapJoin(sub);
			}
	
			// Set the template engine type.
			type = $view.types[suffix];
	
			// If it is cached, 
			if ( $view.cached[id] ) {
				// Return the cached deferred renderer.
				return $view.cached[id];
			
			// Otherwise if we are getting this from a `<script>` element.
			} else if ( el ) {
				// Resolve immediately with the element's `innerHTML`.
				return $view.registerView(id, el.innerHTML, type);
			} else {
				// Make an ajax request for text.
				var d = new can.Deferred();
				can.ajax({
					async: async,
					url: url,
					dataType: "text",
					error: function(jqXHR) {
						checkText("", url);
						d.reject(jqXHR);
					},
					success: function( text ) {
						// Make sure we got some text back.
						checkText(text, url);
						$view.registerView(id, text, type, d)
					}
				});
				return d;
			}
		},
		// Gets an `array` of deferreds from an `object`.
		// This only goes one level deep.
		getDeferreds = function( data ) {
			var deferreds = [];

			// pull out deferreds
			if ( can.isDeferred(data) ) {
				return [data]
			} else {
				for ( var prop in data ) {
					if ( can.isDeferred(data[prop]) ) {
						deferreds.push(data[prop]);
					}
				}
			}
			return deferreds;
		},
		// Gets the useful part of a resolved deferred.
		// This is for `model`s and `can.ajax` that resolve to an `array`.
		usefulPart = function( resolved ) {
			return can.isArray(resolved) && resolved[1] === 'success' ? resolved[0] : resolved
		};

	

	can.extend($view, {
		register: function( info ) {
			this.types["." + info.suffix] = info;

			
			
			$view[info.suffix] = function(id, text){
				if(!text) {
					// Return a nameless renderer
					var renderer = function() {
						return $view.frag(renderer.render.apply(this, arguments));
					}
					renderer.render = function() {
						var renderer = info.renderer(null, id);
						return renderer.apply(renderer, arguments);
					}
					return renderer;
				}

				$view.preload(id, info.renderer(id, text));
				return can.view(id);
			}
		},
		registerScript: function( type, id, src ) {
			return "can.view.preload('" + id + "'," + $view.types["." + type].script(id, src) + ");";
		},
		preload: function( id, renderer ) {
			$view.cached[id] = new can.Deferred().resolve(function( data, helpers ) {
				return renderer.call(data, data, helpers);
			});
			function frag(){
				return $view.frag(renderer.apply(this,arguments));
			}
			// expose the renderer for mustache
			frag.render = renderer;
			return frag;
		}

	});

	return can;
})(module["can/util/jquery/jquery.js"]);// ## can/view/elements.js

module['can/view/elements.js'] = (function(){
	/**
	 * @typedef {{}} can/view/elements.js
	 * 
	 * Provides helper methods for and information about the behavior
	 * of DOM elements.
	 */
	var elements = {
		tagToContentPropMap: {
			option: "textContent" in document.createElement("option") ? "textContent" : "innerText",
			textarea: "value"
		},
		/**
		 * @property {Object.<String,(String|Boolean)>} attrMap a mapping of
		 * special attributes to their JS property. For example:
		 * 
		 *     "class" : "className"
		 * 
		 * means call element.className. And: 
		 * 
		 *      "checked" : true
		 * 
		 * means call `element.checked = true`
		 *     
		 */
		attrMap: {
			"class" : "className",
			"value": "value",
			"innerText" : "innerText",
			"textContent" : "textContent",
			"checked": true,
			"disabled": true,
			"readonly": true,
			"required": true
		},
		// elements whos default value we should set
		defaultValue : ["input","textarea"],
		// a map of parent element to child elements
		tagMap : {
			"": "span", 
			table: "tbody", 
			tr: "td",
			ol: "li", 
			ul: "li", 
			tbody: "tr",
			thead: "tr",
			tfoot: "tr",
			select: "option",
			optgroup: "option"
		},
		// a tag's parent element
		reverseTagMap: {
			tr:"tbody",
			option:"select",
			td:"tr",
			th:"tr",
			li: "ul"
		},
		
		getParentNode: function(el, defaultParentNode){
			return defaultParentNode && el.parentNode.nodeType === 11 ? defaultParentNode : el.parentNode;
		},
		// set an attribute on an element
		setAttr: function (el, attrName, val) {
			var tagName = el.nodeName.toString().toLowerCase(),
				prop = elements.attrMap[attrName];
			// if this is a special property
			if(prop === true) {
				el[attrName]  = true;
			} else if (prop) {
				// set the value as true / false
				el[prop] = val;
				if( prop === "value" && can.inArray(tagName, elements.defaultValue) >= 0 ) {
					el.defaultValue = val;
				}
			} else {
				el.setAttribute(attrName, val);
			}
		},
		// gets the value of an attribute
		getAttr: function(el, attrName){
			// Default to a blank string for IE7/8
			return (elements.attrMap[attrName] && el[elements.attrMap[attrName]] ?
				el[elements.attrMap[attrName]]:
				el.getAttribute(attrName)) || '';
		},
		// removes the attribute
		removeAttr: function(el, attrName){
			if( elements.attrMap[attrName] === true ) {
				el[attrName] = false;
			} else{
				el.removeAttribute(attrName);
			}
		},
		contentText: function(text){
			if ( typeof text == 'string' ) {
				return text;
			}
			// If has no value, return an empty string.
			if ( !text && text !== 0 ) {
				return '';
			}
			return "" + text;
		}
	};
	
	return elements;
})();// ## can/view/scanner.js

module['can/view/scanner.js'] = (function(can, elements){

/**
 * Helper(s)
 */
var newLine = /(\r|\n)+/g,
	// Escapes characters starting with `\`.
	clean = function( content ) {
		return content
			.split('\\').join("\\\\")
			.split("\n").join("\\n")
			.split('"').join('\\"')
			.split("\t").join("\\t");
	},
	// Returns a tagName to use as a temporary placeholder for live content
	// looks forward ... could be slow, but we only do it when necessary
	getTag = function(tagName, tokens, i){
		// if a tagName is provided, use that
		if(tagName){
			return tagName;  
		} else {
			// otherwise go searching for the next two tokens like "<",TAG
			while(i < tokens.length){
				if(tokens[i] == "<" && elements.reverseTagMap[tokens[i+1]]){
					return elements.reverseTagMap[tokens[i+1]];
				}
				i++;
			}
		}
		return '';
	},
	bracketNum = function(content){
		return (--content.split("{").length) - (--content.split("}").length);
	},
	 myEval = function( script ) {
		eval(script);
	},
	attrReg = /([^\s]+)[\s]*=[\s]*$/,
	// Commands for caching.
	startTxt = 'var ___v1ew = [];',
	finishTxt = "return ___v1ew.join('')",
	put_cmd = "___v1ew.push(",
	insert_cmd = put_cmd,
	// Global controls (used by other functions to know where we are).
	// Are we inside a tag?
	htmlTag = null,
	// Are we within a quote within a tag?
	quote = null,
	// What was the text before the current quote? (used to get the `attr` name)
	beforeQuote = null,
	// Whether a rescan is in progress
	rescan = null,
	// Used to mark where the element is.
	status = function(){
		// `t` - `1`.
		// `h` - `0`.
		// `q` - String `beforeQuote`.
		return quote ? "'"+beforeQuote.match(attrReg)[1]+"'" : (htmlTag ? 1 : 0);
	};

can.view.Scanner = Scanner = function( options ) {
  // Set options on self
  can.extend(this, {
		text: {},
  	tokens: []
  }, options);
	
	// Cache a token lookup
	this.tokenReg = [];
	this.tokenSimple = { "<": "<", ">": ">", '"': '"', "'": "'" };
	this.tokenComplex = [];
	this.tokenMap = {};
	for (var i = 0, token; token = this.tokens[i]; i++) {
		/**
		 * Token data structure (complex token and rescan function are optional):
		 * [
		 *	"token name",
		 *	"simple token or abbreviation",
		 *	/complex token regexp/,
		 *	function(content) {
		 *		// Rescan Function
		 *		return {
		 *			before: '\n',
		 *			content: content.trim(),
		 *			after: '\n'
		 *		}
		 * ]
		 */
		
		// Save complex mappings (custom regexp)
		if (token[2]) {
			this.tokenReg.push(token[2]);
			this.tokenComplex.push({ abbr: token[1], re: new RegExp(token[2]), rescan: token[3] });
		}
		// Save simple mappings (string only, no regexp)
		else {
			this.tokenReg.push(token[1]);
			this.tokenSimple[token[1]] = token[0];
		}
		this.tokenMap[token[0]] = token[1];
	}
	
	// Cache the token registry.
	this.tokenReg = new RegExp("(" + this.tokenReg.slice(0).concat(["<", ">", '"', "'"]).join("|") + ")","g");
};

/**
 * Extend can.View to add scanner support.
 */
Scanner.prototype = {

	helpers: [
		/**
		 * Check if its a func like `()->`.
		 * @param {String} content
		 */
		{
			name:/\s*\(([\$\w]+)\)\s*->([^\n]*)/,
			fn: function(content){
				var quickFunc = /\s*\(([\$\w]+)\)\s*->([^\n]*)/,
					parts = content.match(quickFunc);

				return "function(__){var " + parts[1] + "=can.$(__);" + parts[2] + "}";
			}
		}
	],

	scan: function(source, name){
		var tokens = [],
			last = 0,
			simple = this.tokenSimple,
			complex = this.tokenComplex;
		
		source = source.replace(newLine, "\n");
		source.replace(this.tokenReg, function(whole, part){
			// offset is the second to last argument
			var offset = arguments[arguments.length-2];
			
			// if the next token starts after the last token ends
			// push what's in between
			if(offset > last){
				tokens.push( source.substring(last, offset) );
			}
			
			// push the simple token (if there is one)
			if (simple[whole]) {
				tokens.push(whole);
			}
			// otherwise lookup complex tokens
			else {
				for (var i = 0, token; token = complex[i]; i++) {
					if (token.re.test(whole)) {
						tokens.push(token.abbr);
						// Push a rescan function if one exists
						if (token.rescan) {
							tokens.push(token.rescan(part));
						}
						break;
					}
				}
			}

			// update the position of the last part of the last token
			last = offset+part.length;
		});

		// if there's something at the end, add it
		if(last < source.length){
			tokens.push(source.substr(last));
		}
		
		var content = '',
			buff = [startTxt + (this.text.start || '')],
			// Helper `function` for putting stuff in the view concat.
			put = function( content, bonus ) {
				buff.push(put_cmd, '"', clean(content), '"'+(bonus||'')+');');
			},
			// A stack used to keep track of how we should end a bracket
			// `}`.  
			// Once we have a `<%= %>` with a `leftBracket`,
			// we store how the file should end here (either `))` or `;`).
			endStack =[],
			// The last token, used to remember which tag we are in.
			lastToken,
			// The corresponding magic tag.
			startTag = null,
			// Was there a magic tag inside an html tag?
			magicInTag = false,
			// The current tag name.
			tagName = '',
			// stack of tagNames
			tagNames = [],
			// Pop from tagNames?
			popTagName = false,
			// Declared here.
			bracketCount,
			i = 0,
			token,
			tmap = this.tokenMap;

		// Reinitialize the tag state goodness.
		htmlTag = quote = beforeQuote = null;

		for (; (token = tokens[i++]) !== undefined;) {
			if ( startTag === null ) {
				switch ( token ) {
				case tmap.left:
				case tmap.escapeLeft:
				case tmap.returnLeft:
					magicInTag = htmlTag && 1;
				case tmap.commentLeft:
					// A new line -- just add whatever content within a clean.  
					// Reset everything.
					startTag = token;
					if ( content.length ) {
						put(content);
					}
					content = '';
					break;
				case tmap.escapeFull:
					// This is a full line escape (a line that contains only whitespace and escaped logic)
					// Break it up into escape left and right
					magicInTag = htmlTag && 1;
					rescan = 1;
					startTag = tmap.escapeLeft;
					if ( content.length ) {
						put(content);
					}
					rescan = tokens[i++];
					content = rescan.content || rescan;
					if ( rescan.before ) {
						put(rescan.before);
					}
					tokens.splice(i, 0, tmap.right);
					break;
				case tmap.commentFull:
					// Ignore full line comments.
					break;
				case tmap.templateLeft:
					content += tmap.left;
					break;
				case '<':
					// Make sure we are not in a comment.
					if(tokens[i].indexOf("!--") !== 0) {
						htmlTag = 1;
						magicInTag = 0;
					}
					content += token;
					break;
				case '>':
					htmlTag = 0;
					// content.substr(-1) doesn't work in IE7/8
					var emptyElement = content.substr(content.length-1) == "/" || content.substr(content.length-2) == "--";
					// if there was a magic tag
					// or it's an element that has text content between its tags, 
					// but content is not other tags add a hookup
					// TODO: we should only add `can.EJS.pending()` if there's a magic tag 
					// within the html tags.
					if(magicInTag || !popTagName && elements.tagToContentPropMap[ tagNames[tagNames.length -1] ]){
						// make sure / of /> is on the left of pending
						if(emptyElement){
							put(content.substr(0,content.length-1), ",can.view.pending(),\"/>\"");
						} else {
							put(content, ",can.view.pending(),\">\"");
						}
						content = '';
						magicInTag = 0;
					} else {
						content += token;
					}
					// if it's a tag like <input/>
					if(emptyElement || popTagName){
						// remove the current tag in the stack
						tagNames.pop();
						// set the current tag to the previous parent
						tagName = tagNames[tagNames.length-1];
						// Don't pop next time
						popTagName = false;
					}
					break;
				case "'":
				case '"':
					// If we are in an html tag, finding matching quotes.
					if(htmlTag){
						// We have a quote and it matches.
						if(quote && quote === token){
							// We are exiting the quote.
							quote = null;
							// Otherwise we are creating a quote.
							// TODO: does this handle `\`?
						} else if(quote === null){
							quote = token;
							beforeQuote = lastToken;
						}
					}
				default:
					// Track the current tag
					if(lastToken === '<'){
						tagName = token.split(/\s/)[0];
						if( tagName.indexOf("/") === 0 && tagNames[tagNames.length-1] === tagName.substr(1) ) {
							// set tagName to the last tagName
							// if there are no more tagNames, we'll rely on getTag.
							tagName = tagNames[tagNames.length-1];
							popTagName = true;
						} else {
							tagNames.push(tagName);
						}
					}
					content += token;
					break;
				}
			} else {
				// We have a start tag.
				switch ( token ) {
				case tmap.right:
				case tmap.returnRight:
					switch ( startTag ) {
					case tmap.left:
						// Get the number of `{ minus }`
						bracketCount = bracketNum(content);
						
						// We are ending a block.
						if (bracketCount == 1) {

							// We are starting on.
							buff.push(insert_cmd, "can.view.txt(0,'"+getTag(tagName,tokens, i)+"'," + status() + ",this,function(){", startTxt, content);

							endStack.push({
								before: "",
								after: finishTxt+"}));\n"
							});
						}
						else {
							
							// How are we ending this statement?
							last = // If the stack has value and we are ending a block...
								endStack.length && bracketCount == -1 ? // Use the last item in the block stack.
								endStack.pop() : // Or use the default ending.
							{
								after: ";"
							};
							
							// If we are ending a returning block, 
							// add the finish text which returns the result of the
							// block.
							if (last.before) {
								buff.push(last.before);
							}
							// Add the remaining content.
							buff.push(content, ";",last.after);
						}
						break;
					case tmap.escapeLeft:
					case tmap.returnLeft:
						// We have an extra `{` -> `block`.
						// Get the number of `{ minus }`.
						bracketCount = bracketNum(content);
						// If we have more `{`, it means there is a block.
						if( bracketCount ){
							// When we return to the same # of `{` vs `}` end with a `doubleParent`.
							endStack.push({
								before : finishTxt,
								after: "}));"
							});
						} 

						var escaped = startTag === tmap.escapeLeft ? 1 : 0,
							commands = { insert: insert_cmd, tagName: getTag(tagName, tokens, i), status: status() };

						for(var ii = 0; ii < this.helpers.length;ii++){
							// Match the helper based on helper
							// regex name value
							var helper = this.helpers[ii];
							if(helper.name.test(content)){
								content = helper.fn(content, commands);

								// dont escape partials
								if(helper.name.source == /^>[\s]*\w*/.source){
									escaped = 0;
								}	
								break;
							}
						}
						
						// Handle special cases
						if (typeof content == 'object') {
							if (content.raw) {
								buff.push(content.raw);
							}
						} else {
							// If we have `<%== a(function(){ %>` then we want
							// `can.EJS.text(0,this, function(){ return a(function(){ var _v1ew = [];`.
							buff.push(insert_cmd, "can.view.txt(" + escaped + ",'"+tagName+"'," + status() +",this,function(){ " + (this.text.escape || '') + "return ", content, 
								// If we have a block.
								bracketCount ? 
								// Start with startTxt `"var _v1ew = [];"`.
								startTxt : 
								// If not, add `doubleParent` to close push and text.
								"}));"
								);
						}
						
						if (rescan && rescan.after && rescan.after.length) {
							put(rescan.after.length);
							rescan = null;
						}
						break;
					}
					startTag = null;
					content = '';
					break;
				case tmap.templateLeft:
					content += tmap.left;
					break;
				default:
					content += token;
					break;
				}
			}
			lastToken = token;
		}
		
		// Put it together...
		if ( content.length ) {
			// Should be `content.dump` in Ruby.
			put(content);
		}
		buff.push(";");
		
		var template = buff.join(''),
			out = {
				out: 'with(_VIEW) { with (_CONTEXT) {' + template + " "+finishTxt+"}}"
			};
		// Use `eval` instead of creating a function, because it is easier to debug.
		myEval.call(out, 'this.fn = (function(_CONTEXT,_VIEW){' + out.out + '});\r\n//@ sourceURL=' + name + ".js");

		return out;
	}
};

return Scanner;
})(module["can/view/view.js"], module["can/view/elements.js"]);// ## can/util/bind/bind.js

module['can/util/bind/bind.js'] = (function(can){
	
	/**
	 * @typedef {{bind:function():*,unbind:function():*}} can/util/bind
	 * 
	 * Provides mixin-able bind and unbind methods. `bind()` calls `this._bindsetup`
	 * when the first bind happens and.  `unbind()` calls `this._bindteardown` when there
	 * are no more event handlers.
	 * 
	 */
	// ## Bind helpers
	can.bindAndSetup = function() {
		// Add the event to this object
		can.addEvent.apply(this, arguments);
		// If not initializing, and the first binding
		// call bindsetup if the function exists.
		if(!this._init){
			if(!this._bindings ){
				this._bindings = 1;
				// setup live-binding
				this._bindsetup && this._bindsetup();
				
			} else {
				this._bindings++;
			}
			
		}
		
		return this;
	};

	can.unbindAndTeardown = function(ev, handler) {
		// Remove the event handler
		can.removeEvent.apply(this, arguments);

		this._bindings--;
		// If there are no longer any bindings and
		// there is a bindteardown method, call it.
		if(!this._bindings){
			this._bindteardown && this._bindteardown();
		}
		return this;
	}

	return can;

})(module["can/util/jquery/jquery.js"]);// ## can/observe/compute/compute.js

module['can/observe/compute/compute.js'] = (function(can, bind) {
	
	// returns the
    // - observes and attr methods are called by func
	// - the value returned by func
	// ex: `{value: 100, observed: [{obs: o, attr: "completed"}]}`
	var getValueAndObserved = function(func, self){
		
		var oldReading;
		if (can.Observe) {
			// Set a callback on can.Observe to know
			// when an attr is read.
			// Keep a reference to the old reader
			// if there is one.  This is used
			// for nested live binding.
			oldReading = can.Observe.__reading;
			can.Observe.__reading = function(obj, attr){
				// Add the observe and attr that was read
				// to `observed`
				observed.push({
					obj: obj,
					attr: attr+""
				});
			};
		}
		
		var observed = [],
			// Call the "wrapping" function to get the value. `observed`
			// will have the observe/attribute pairs that were read.
			value = func.call(self);

		// Set back so we are no longer reading.
		if(can.Observe){
			can.Observe.__reading = oldReading;
		}
		return {
			value : value,
			observed : observed
		};
	},
		// Calls `callback(newVal, oldVal)` everytime an observed property
		// called within `getterSetter` is changed and creates a new result of `getterSetter`.
		// Also returns an object that can teardown all event handlers.
		computeBinder = function(getterSetter, context, callback, computeState){
			// track what we are observing
			var observing = {},
				// a flag indicating if this observe/attr pair is already bound
				matched = true,
				// the data to return 
				data = {
					// we will maintain the value while live-binding is taking place
					value : undefined,
					// a teardown method that stops listening
					teardown: function(){
						for ( var name in observing ) {
							var ob = observing[name];
							ob.observe.obj.unbind(ob.observe.attr, onchanged);
							delete observing[name];
						}
					}
				},
				batchNum;
			
			// when a property value is changed
			var onchanged = function(ev){
				// If the compute is no longer bound (because the same change event led to an unbind)
				// then do not call getValueAndBind, or we will leak bindings.
				if ( computeState && !computeState.bound ) {
					return;
				}
				if(ev.batchNum === undefined || ev.batchNum !== batchNum) {
					// store the old value
					var oldValue = data.value,
						// get the new value
						newvalue = getValueAndBind();

					// update the value reference (in case someone reads)
					data.value = newvalue;
					// if a change happened
					if ( newvalue !== oldValue ) {
						callback(newvalue, oldValue);
					}
					batchNum = batchNum = ev.batchNum;
				}
				
				
			};
			
			// gets the value returned by `getterSetter` and also binds to any attributes
			// read by the call
			var getValueAndBind = function(){
				var info = getValueAndObserved( getterSetter, context ),
					newObserveSet = info.observed;
				
				var value = info.value;
				matched = !matched;
				
				// go through every attribute read by this observe
				can.each(newObserveSet, function(ob){
					// if the observe/attribute pair is being observed
					if(observing[ob.obj._cid+"|"+ob.attr]){
						// mark at as observed
						observing[ob.obj._cid+"|"+ob.attr].matched = matched;
					} else {
						// otherwise, set the observe/attribute on oldObserved, marking it as being observed
						observing[ob.obj._cid+"|"+ob.attr] = {
							matched: matched,
							observe: ob
						};
						ob.obj.bind(ob.attr, onchanged);
					}
				});
				
				// Iterate through oldObserved, looking for observe/attributes
				// that are no longer being bound and unbind them
				for ( var name in observing ) {
					var ob = observing[name];
					if(ob.matched !== matched){
						ob.observe.obj.unbind(ob.observe.attr, onchanged);
						delete observing[name];
					}
				}
				return value;
			};
			// set the initial value
			data.value = getValueAndBind();

			data.isListening = ! can.isEmptyObject(observing);
			return data;
		}
	
	// if no one is listening ... we can not calculate every time
	/**
	 * @class can.compute
	 * @parent can.util
	 * 
	 * `can.compute( getterSetter, [context] ) -> compute` returns a computed method that represents 
	 * some value.  A `compute` can can be:
	 * 
	 *  - __read__ - by calling the method like `compute()`
	 *  - __updated__ - by passing a new value like `compute( "new value" )`
	 *  - __listened__ to for changes - like `compute.bind( "change", handler )`
	 * 
	 * The value maintained by a `compute` can represent:
	 * 
	 *  - A __static__ JavaScript object or value like `{foo : 'bar'}` or `true`.
	 *  - A __composite__ value of one or more [can.Observe] property values.
	 *  - A __converted value__ derived from another value.
	 * 
	 * Computes are an abstraction for some value that can be changed. [can.Control]s that 
	 * accept computes (or convert params to computes) can be easily hooked up to 
	 * any data source and be live widgets (widgets that update themselves when data changes).
	 * 
	 * ## Static values
	 * 
	 * `can.compute([value])` creates a `computed` with some value.  For example:
	 * 
	 *     // create a compute
	 *     var age = can.compute(29);
	 * 
	 *     // read the value
	 *     console.log("my age is currently", age());
	 * 
	 *     // listen to changes in age
	 *     age.bind("change", function(ev, newVal, oldVal){
	 *       console.log("my age changed from",oldVal,"to",newVal)
	 *     })
	 *     // update the age
	 *     age(30);
	 * 
	 * Notice that you can __read__, __update__, 
	 * and __listen__ to changes in any single value.
	 * 
	 * _NOTE: [can.Observe] is similar to compute, but used for objects with multiple properties._
	 * 
	 * ## Composite values
	 * 
	 * Computes can represent a composite value of one 
	 * or more `can.Observe` properties.  The following
	 * creates a fullName compute that is the `person`
	 * observe's first and last name:
	 * 
	 *     var person = new can.Observe({
	 *       first : "Justin",
	 *       last : "Meyer"
	 *     });
	 *     var fullName = can.compute(function(){
	 *       return person.attr("first") +" "+ person.attr("last")
	 *     })
	 * 
	 * Read from fullName like:
	 * 
	 *     fullName() //-> "Justin Meyer"
	 * 
	 * Listen to changes in fullName like:
	 * 
	 *     fullName.bind("change", function(ev, newVal, oldVal){
	 *     
	 *     })
	 * 
	 * When an event handler is bound to fullName it starts
	 * caching the computes value so additional reads are faster!
	 * 
	 * ### Computes with prototype functions
	 * 
	 * To make a compute of an object's prototype method,
	 * pass the method and the context the function should be called with
	 * to `can.compute`:
	 * 
	 *     var Person = can.Construct({
	 *       fullName: function(){
	 *         return this.attr('first')+' '+this.attr('last')
	 *       }
	 *     });
	 * 
	 * 	var josh = new Person({ first: "Josh",  last: "Dean" }),
	 * 	
	 * 		fullName = can.compute(josh.fullName, josh);
	 * 
	 * ## Converted values
	 * 
	 * `can.compute( getterSetter( [newVal] ) )` can be used to convert one observe's value into
	 * another value.  For example, a `PercentDone` widget might accept
	 * a compute that needs to have values from `0` to `100`, but your project's
	 * progress is given between `0` and `1`. Pass that widget a compute!
	 * 
	 *     var project = new can.Observe({
	 *       progress :  0.5
	 *     });
	 *     var percentage = can.compute(function(newVal){
	 *       // are we setting?
	 *       if(newVal !=== undefined){
	 *         project.attr("progress", newVal / 100)  
	 *       } else {
	 *         return project.attr("progress") * 100;  
	 *       }
	 *     })
	 * 
	 *     // We can read from percentage.
	 *     percentage() //-> 50
	 * 
	 *     // Write to percentage,
	 *     percentage(75)
	 *     // but it updates project!
	 *     project.attr('progress') //-> 0.75
	 * 
	 *     // pass it to PercentDone
	 *     new PercentDone({
	 *       val : percentage
	 *     })
	 * 
	 * 
	 * ## Using computes in building controls.
	 * 
	 * The following sudo-code slider cross binds to the 
	 * percent compute. When the drag ends, it updates the
	 * percent compute.  If the compute changes, it updates
	 * the slider's position:  
	 * 
	 *     // A sudo-slider
	 *     var Slider = can.Control({
	 *       ".slider dragend": function(){
	 * 	    var percent = this.calculatePercent();
	 * 	    this.options.percent(percent)
	 * 	  },
	 * 	  "{percent} change": function(value, ev, newVal){
	 * 	    // update position of slider to newVal
	 * 	  },
	 * 	  calculatePercent: function(){
	 * 	    // check .slider's position and return a percent
	 * 	  }
	 * 	});
	 * 	
	 * 	new Slider("#slider", {percent: percent});
	 * 
	 * Widgets that listen to data changes and automatically update 
	 * themselves kick ass. It's what the V in MVC is all about.  
	 * 
	 * However, some enironments don't have observeable data. In an ideal
	 * world, you'd like to make your widgets still useful to them.
	 * 
	 * `can.compute` lets you have your cake and eat it too. Simply convert
	 * all options to compute.  Provide methods to update the compute
	 * values and listen to changes in computes.  Lets see how that
	 * looks with `PercentDone`:
	 * 
	 *     var PercentDone = can.Control({
	 *       init : function(){
	 *         this.options.val = can.compute(this.options.val)
	 *         // rebind event handlers
	 *         this.on();
	 *         this.updateContent();
	 *       },
	 *       val: function(value){
	 * 	       return this.options.val(value)
	 *       },
	 *       "{val} change" : "updateContent",
	 *       updateContent : function(){
	 *         this.element.html(this.options.val())
	 *       }
	 *     })
	 * 
	 * 
	 */
	can.compute = function(getterSetter, context, eventName){
		if(getterSetter && getterSetter.isComputed){
			return getterSetter;
		}
		// stores the result of computeBinder
		var computedData,
			// how many listeners to this this compute
			bindings = 0,
			// the computed object
			computed,
			// an object that keeps track if the computed is bound
			// onchanged needs to know this. It's possible a change happens and results in
			// something that unbinds the compute, it needs to not to try to recalculate who it
			// is listening to
			computeState = { 
				bound: false,
				// true if this compute is calculated from other computes and observes
				hasDependencies: false
			},
			// The following functions are overwritten depending on how compute() is called
			// a method to setup listening
			on = function(){},
			// a method to teardown listening
			off = function(){},
			// the current cached value (only valid if bound = true)
			value,
			// how to read the value
			get = function(){
				return value
			},
			// sets the value
			set = function(newVal){
				value = newVal;
			},
			// this compute can be a dependency of other computes
			// 
			canReadForChangeEvent = true;

		computed = function(newVal){
			// setting ...
			if(arguments.length){
				// save a reference to the old value
				var old = value;

				// setter may return a value if 
				// setter is for a value maintained exclusively by this compute
				var setVal = set.call(context,newVal, old);

				// if this has dependencies return the current value
				if(computed.hasDependencies){
					return get.call(context);
				}

				if(setVal === undefined) {
					// it's possible, like with the DOM, setting does not
					// fire a change event, so we must read
					value = get.call(context);
				} else {
					value = setVal;
				}
				// fire the change
				if( old !== value){
					can.Observe.triggerBatch(computed, "change",[value, old] );
				}
				return value;
			} else {
				// Let others know to listen to changes in this compute
				if( can.Observe.__reading && canReadForChangeEvent) {
					can.Observe.__reading(computed,'change');
				}
				// if we are bound, use the cached value
				if( computeState.bound ) {
					return value;
				} else {
					return get.call(context);
				}
			}
		}
		if(typeof getterSetter === "function"){
			set = getterSetter;
			get = getterSetter;
			canReadForChangeEvent = eventName === false ? false : true;
			computed.hasDependencies = false;
			on = function(update){
				computedData = computeBinder(getterSetter, context || this, update, computeState);
				computed.hasDependencies = computedData.isListening
				value = computedData.value;
			}
			off = function(){
				computedData.teardown();
			}
		} else if(context) {
			
			if(typeof context == "string"){
				// `can.compute(obj, "propertyName", [eventName])`
				
				var propertyName = context,
					isObserve = getterSetter instanceof can.Observe;
				if(isObserve){
					computed.hasDependencies = true;
				}
				get = function(){
					if(isObserve){
						return getterSetter.attr(propertyName);
					} else {
						return getterSetter[propertyName];
					}
				}
				set = function(newValue){
					if(isObserve){
						getterSetter.attr(propertyName, newValue)
					} else {
						getterSetter[propertyName] = newValue;
					}
				}
				var handler;
				on = function(update){
					handler = function(){
						update(get(), value)
					};
					can.bind.call(getterSetter, eventName || propertyName,handler)
					
					// use getValueAndObserved because
					// we should not be indicating that some parent
					// reads this property if it happens to be binding on it
					value = getValueAndObserved(get).value
				}
				off = function(){
					can.unbind.call(getterSetter, eventName || propertyName,handler)
				}

			} else {
				// `can.compute(initialValue, setter)`
				if(typeof context === "function"){
					value = getterSetter;
					set = context;
				} else {
					// `can.compute(initialValue,{get:, set:, on:, off:})`
					value = getterSetter;
					var options = context;
					get = options.get || get;
					set = options.set ||set;
					on = options.on || on;
					off = options.off || off;
				}

			}


			

		} else {
			// `can.compute(5)`
			value = getterSetter;
		}
		/**
		 * @attribute isComputed
		 * 
		 */
		computed.isComputed = true;
		
		can.cid(computed,"compute")
		var updater= function(newValue, oldValue){
			value = newValue;
			// might need a way to look up new and oldVal
			can.Observe.triggerBatch(computed, "change",[newValue, oldValue])
		}

		return can.extend(computed,{
			_bindsetup: function(){
				computeState.bound = true;
				// setup live-binding
				on.call(this, updater)
			},
			_bindteardown: function(){
				off.call(this,updater)
				computeState.bound = false;
			},
			/**
			 * @function bind
			 * `compute.bind("change", handler(event, newVal, oldVal))`
			 */
			bind: can.bindAndSetup,
			/**
			 * @function unbind
			 * `compute.unbind("change", handler(event, newVal, oldVal))`
			 */
			unbind: can.unbindAndTeardown
		});
	};
	can.compute.binder = computeBinder;
	return can.compute;
})(module["can/util/jquery/jquery.js"], module["can/util/bind/bind.js"]);// ## can/view/node_lists.js

module['can/view/node_lists.js'] = (function(can){


	// text node expando test
	var canExpando = true;
	try {
		document.createTextNode('')._ = 0;
	} catch (ex) {
		canExpando = false;
	}


	// a mapping of element ids to nodeList ids
	var nodeMap = {},
	// a mapping of ids to text nodes
	textNodeMap = {},
	// a mapping of nodeList ids to nodeList
	nodeListMap = {},
	expando = "ejs_"+Math.random(),
	_id=0,
	id = function(node){
		if(canExpando || node.nodeType !== 3) {
			if(node[expando]) {
				return node[expando];
			}
			else {
				return node[expando] = (node.nodeName ? "element_" : "obj_")+(++_id);
			}
		}
		else {
			for(var textNodeID in textNodeMap) {
				if(textNodeMap[textNodeID] === node) {
					return textNodeID;
				}
			}

			textNodeMap["text_" + (++_id)] = node;
			return "text_" + _id;
		}
	},
	// removes a nodeListId from a node's nodeListIds
	removeNodeListId= function(node, nodeListId){
		var nodeListIds = nodeMap[id(node)];
		if( nodeListIds ) {
			var index = can.inArray(nodeListId, nodeListIds);
		
			if ( index >= 0 ) {
				nodeListIds.splice( index ,  1 );
			}
			if(!nodeListIds.length){
				delete nodeMap[id(node)];
			}
		}
	},
	addNodeListId = function(node, nodeListId){
		var nodeListIds = nodeMap[id(node)];
			if(!nodeListIds){
				nodeListIds = nodeMap[id(node)] = [];
			}
			nodeListIds.push(nodeListId);
	};


	var nodeLists = {
		id: id,
		// replaces the contents of one node list with the nodes in another list
		replace: function(oldNodeList, newNodes){
			// for each node in the node list
			oldNodeList = can.makeArray( oldNodeList );
			
			// try every set
			//can.each( oldNodeList, function(node){
			var node = oldNodeList[0]
				// for each nodeList the node is in
				can.each( can.makeArray( nodeMap[id(node)] ), function( nodeListId ){
					
					// if startNode to endNode is 
					// within list, replace that list
					// 
					// I think the problem is not the WHOLE part is being 
					// matched
					var nodeList = nodeListMap[nodeListId],
						startIndex = can.inArray( node, nodeList ),
						endIndex = can.inArray( oldNodeList[oldNodeList.length - 1], nodeList);
					

					// remove this nodeListId from each node
					if(startIndex >=0 && endIndex >= 0){
						for( var i = startIndex; i <= endIndex; i++){
							var n = nodeList[i];
							removeNodeListId(n, nodeListId);
						}
						// swap in new nodes into the nodeLIst
						nodeList.splice.apply(nodeList, [startIndex,endIndex-startIndex+1 ].concat(newNodes));

						// tell these new nodes they belong to the nodeList
						can.each(newNodes, function( node ) {
							addNodeListId(node, nodeListId);
						});
					} else {
						nodeLists.unregister( nodeList );
					}
				});
			//});
		},
		// registers a list of nodes
		register: function(nodeList){
			var nLId = id(nodeList);
			nodeListMap[nLId] = nodeList;
			
			can.each(nodeList, function(node){
				addNodeListId(node, nLId);
			});
				
		},
		// removes mappings
		unregister: function(nodeList){
			var nLId = id(nodeList);
			can.each(nodeList, function(node){
				removeNodeListId(node, nLId);
			});
			delete nodeListMap[nLId];
		},
		nodeMap: nodeMap,
		nodeListMap: nodeListMap
	}
	var ids = function(nodeList){
		return nodeList.map(function(n){
			return id(n)+":"+(n.innerHTML  || n.nodeValue)  
		})
	}
	return nodeLists;


})(module["can/util/jquery/jquery.js"]);// ## can/view/live.js

module['can/view/live.js'] = (function(can, elements,view,nodeLists){
	// ## live.js
	// 
	// The live module provides live binding for computes
	// and can.Observe.List.
	// 
	// Currently, it's API is designed for `can/view/render`, but
	// it could easily be used for other purposes.


	// ### Helper methods
	// 
	// #### setup
	// 
	// `setup(HTMLElement, bind(data), unbind(data)) -> data`
	// 
	// Calls bind right away, but will call unbind
	// if the element is "destroyed" (removed from the DOM).
	var setup = function(el, bind, unbind){
		var teardown = function(){
			unbind(data)
			can.unbind.call(el,'destroyed', teardown);
		},
			data = {
				teardownCheck: function(parent){
					if(!parent){
						teardown();
					}
				}
			}

		can.bind.call(el,'destroyed', teardown);
		bind(data)
		return data;
	},
		// #### listen
		// Calls setup, but presets bind and unbind to 
		// operate on a compute
		listen = function(el, compute, change){
			return setup(el, function(){
				compute.bind("change", change);
			},function(data){
				compute.unbind("change", change);
				if(data.nodeList){
					nodeLists.unregister( data.nodeList );
				}
			});
		},
		// #### getAttributeParts
		// Breaks up a string like foo='bar' into ["foo","'bar'""]
		getAttributeParts = function(newVal){
			return (newVal|| "").replace(/['"]/g, '').split('=')
		}
		// #### insertElementsAfter
		// Appends elements after the last item in oldElements.
		insertElementsAfter = function(oldElements, newFrag){
			var last = oldElements[oldElements.length - 1];
					
			// Insert it in the `document` or `documentFragment`
			if( last.nextSibling ){
				last.parentNode.insertBefore(newFrag, last.nextSibling);
			} else {
				last.parentNode.appendChild(newFrag);
			}
		};


	var live = {
		nodeLists : nodeLists,
		list: function(el, list, func, context, parentNode){
			// A mapping of the index to an array
			// of elements that represent the item.
			// Each array is registered so child or parent
			// live structures can update the elements
			var nodesMap = [],

				add = function(ev, items, index){

					// Collect new html and mappings
					var frag = document.createDocumentFragment(),
						newMappings = [];
					can.each(items, function(item){
						var itemHTML = func.call(context,item),
							itemFrag = can.view.frag(itemHTML, parentNode);

						newMappings.push(can.makeArray(itemFrag.childNodes));
						frag.appendChild(itemFrag);
					})

					// Inserting at the end of the list
					if(!nodesMap[index]){
						insertElementsAfter(
							index == 0 ?
								[text] :
								nodesMap[index-1], frag)
					} else {
						var el = nodesMap[index][0];
						el.parentNode.insertBefore(frag, el)
					}
					// register each item
					can.each(newMappings,function(nodeList){
						nodeLists.register(nodeList)
					});
					[].splice.apply(nodesMap, [index, 0].concat(newMappings));
				},
				remove = function(ev, items, index){
					var removedMappings = nodesMap.splice(index, items.length),
						itemsToRemove = [];

					can.each(removedMappings,function(nodeList){
						// add items that we will remove all at once
						[].push.apply(itemsToRemove, nodeList)
						// Update any parent lists to remove these items
						nodeLists.replace(nodeList,[]);
						// unregister the list
						nodeLists.unregister(nodeList);

					});
					can.remove( can.$(itemsToRemove) );
				},
				parentNode = elements.getParentNode(el, parentNode),
				text = document.createTextNode("");

			// Setup binding and teardown to add and remove events
			setup(parentNode, function(){
				list.bind("add", add).bind("remove", remove)
			},function(){
				list.unbind("add", add).unbind("remove", remove);
				can.each(nodesMap, function(nodeList){
					nodeLists.unregister( nodeList );
				})
			})

			insertElementsAfter([el],text);
			can.remove( can.$(el) );
			add({}, list, 0);
/*
			list.each(function(item, i){
				
				var itemFrag = func.call(context,item),
					newNodes = can.makeArray(itemFrag.childNodes);

				frag.appendChild(itemFrag);

				nodesMap[i] = newNodes;
				nodeLists.register(newNodes);
			})
			replaceElements([el], frag);*/
		},
		html: function(el, compute, parentNode){
			var parentNode = elements.getParentNode(el, parentNode),

				data = listen(parentNode, compute, function(ev, newVal, oldVal){
				var attached = nodes[0].parentNode;
				// update the nodes in the DOM with the new rendered value
				if( attached ) {
					makeAndPut(newVal);
				}
				data.teardownCheck(nodes[0].parentNode);
			});

			var nodes,
				makeAndPut = function(val){
					// create the fragment, but don't hook it up
					// we need to insert it into the document first
					var frag = can.view.frag(val, parentNode),
						// keep a reference to each node
						newNodes = can.makeArray(frag.childNodes);
					// Insert it in the `document` or `documentFragment`
					insertElementsAfter(nodes || [el], frag)
					// nodes hasn't been set yet
					if( !nodes ) {
						can.remove( can.$(el) );
						nodes = newNodes;
						// set the teardown nodeList
						data.nodeList = nodes;
						nodeLists.register(nodes);
					} else {
						// Update node Array's to point to new nodes
						// and then remove the old nodes.
						// It has to be in this order for Mootools
						// and IE because somehow, after an element
						// is removed from the DOM, it loses its
						// expando values.
						var nodesToRemove = can.makeArray(nodes);
						nodeLists.replace(nodes,newNodes);
						can.remove( can.$(nodesToRemove) );
					}
				};
				makeAndPut(compute(), [el]);

		},
		text: function(el, compute, parentNode){
			var parent = elements.getParentNode(el, parentNode);

			// setup listening right away so we don't have to re-calculate value
			var data  = listen( el.parentNode !== parent ? el.parentNode : parent, compute, function(ev, newVal, oldVal){
				// Sometimes this is 'unknown' in IE and will throw an exception if it is
				if ( typeof node.nodeValue != 'unknown' ) {
					node.nodeValue = ""+newVal;
				}
				data.teardownCheck(node.parentNode);
			});

			var node = document.createTextNode(compute());

			if ( el.parentNode !== parent ) {
				parent = el.parentNode;
				parent.insertBefore(node, el);
				parent.removeChild(el);
			} else {
				parent.insertBefore(node, el);
				parent.removeChild(el);
			}
		},
		attributes: function(el, compute, currentValue){
			var setAttrs = function(newVal){
				var parts = getAttributeParts(newVal),
					newAttrName = parts.shift();
				
				// Remove if we have a change and used to have an `attrName`.
				if((newAttrName != attrName) && attrName){
					elements.removeAttr(el,attrName);
				}
				// Set if we have a new `attrName`.
				if(newAttrName){
					elements.setAttr(el, newAttrName, parts.join('='));
					attrName = newAttrName;
				}
			}

			listen(el, compute, function(ev, newVal){
				setAttrs(newVal)
			})
			// current value has been set
			if(arguments.length >= 3) {
				var attrName = getAttributeParts(currentValue)[0]
			} else {
				setAttrs(compute())
			}
		},
		attributePlaceholder: '__!!__',
		attributeReplace: /__!!__/g,
		attribute: function(el, attributeName, compute){
			listen(el, compute, function(ev, newVal){
				elements.setAttr( el, attributeName, hook.render() );
			})

			var wrapped = can.$(el),
				hooks;
			
			// Get the list of hookups or create one for this element.
			// Hooks is a map of attribute names to hookup `data`s.
			// Each hookup data has:
			// `render` - A `function` to render the value of the attribute.
			// `funcs` - A list of hookup `function`s on that attribute.
			// `batchNum` - The last event `batchNum`, used for performance.
			hooks = can.data(wrapped,'hooks');
			if ( ! hooks ) {
				can.data(wrapped, 'hooks', hooks = {});
			}
			
			// Get the attribute value.
			var attr = elements.getAttr(el, attributeName ),
				// Split the attribute value by the template.
				// Only split out the first __!!__ so if we have multiple hookups in the same attribute, 
				// they will be put in the right spot on first render
				parts = attr.split(live.attributePlaceholder),
				goodParts = [],
				hook;
				goodParts.push(parts.shift(), 
							   parts.join(live.attributePlaceholder));

			// If we already had a hookup for this attribute...
			if(hooks[attributeName]) {
				// Just add to that attribute's list of `function`s.
				hooks[attributeName].computes.push(compute);
			} else {
				// Create the hookup data.
				hooks[attributeName] = {
					render: function() {
						var i =0,
							// attr doesn't have a value in IE
							newAttr = attr
								? attr.replace(live.attributeReplace, function() {
										return elements.contentText( hook.computes[i++]() );
									})
								: elements.contentText( hook.computes[i++]() );
						return newAttr;
					},
					computes: [compute],
					batchNum : undefined
				};
			}

			// Save the hook for slightly faster performance.
			hook = hooks[attributeName];

			// Insert the value in parts.
			goodParts.splice(1,0,compute());

			// Set the attribute.
			elements.setAttr(el, attributeName, goodParts.join("") );




		}
	}
	return live;

})(module["can/util/jquery/jquery.js"], module["can/view/elements.js"], module["can/view/view.js"], module["can/view/node_lists.js"]);// ## can/view/render.js

module['can/view/render.js'] = (function(can, elements, live){

/**
 * Helper(s)
 */
var pendingHookups = [],
	tagChildren = function(tagName) {
		var newTag = elements.tagMap[tagName] || "span";
		if(newTag === "span") {
			//innerHTML in IE doesn't honor leading whitespace after empty elements
			return "@@!!@@";
		}	
		return "<" + newTag + ">" + tagChildren(newTag) + "</" + newTag + ">";
	},
	contentText = function( input, tag ) {	
		
		// If it's a string, return.
		if ( typeof input == 'string' ) {
			return input;
		}
		// If has no value, return an empty string.
		if ( !input && input !== 0 ) {
			return '';
		}

		// If it's an object, and it has a hookup method.
		var hook = (input.hookup &&

		// Make a function call the hookup method.
		function( el, id ) {
			input.hookup.call(input, el, id);
		}) ||

		// Or if it's a `function`, just use the input.
		(typeof input == 'function' && input);

		// Finally, if there is a `function` to hookup on some dom,
		// add it to pending hookups.
		if ( hook ) {
			if(tag){
				return "<"+tag+" "+can.view.hook(hook)+"></"+tag+">"
			} else {
				pendingHookups.push(hook);
			}
			
			return '';
		}

		// Finally, if all else is `false`, `toString()` it.
		return "" + input;
	},
	// Returns escaped/sanatized content for anything other than a live-binding
	contentEscape = function( txt ) {
		return (typeof txt == 'string' || typeof txt == 'number') ?
			can.esc( txt ) :
			contentText(txt);
	};


var current;

can.extend(can.view, {
	live: live,
	setupLists: function(){

		var old = can.view.lists,
			data;

		can.view.lists = function(list, renderer){
			data = {
				list: list,
				renderer: renderer
			}
		}
		return function(){
			can.view.lists = old;
			return data;
		}
	},
	pending: function() {
		// TODO, make this only run for the right tagName
		var hooks = pendingHookups.slice(0);
		lastHookups = hooks;
		pendingHookups = [];
		return can.view.hook(function(el){
			can.each(hooks, function(fn){
				fn(el);
			});
		});
	},

	/**
	 * @hide
	 * called to setup unescaped text
	 * Called to return the content within a magic tag like `<%= %>`.
	 *
	 * - escape - if the content returned should be escaped
	 * - tagName - the tag name the magic tag is within or the one that proceeds the magic tag
	 * - status - where the tag is in.  The status can be:
	 *   - _STRING_ - The name of the attribute the magic tag is within
	 *    - `1` - The magic tag is within a tag like `<div <%= %>>`
	 *    - `0` - The magic tag is outside (or between) tags like `<div><%= %></div>`
	 * - self - the `this` the template was called with
	 * - func - the "wrapping" function.  For example:  `<%= task.attr('name') %>` becomes
	 *   `(function(){return task.attr('name')})
	 *
	 * @param {Number|String} status
	 *   - "string" - the name of the attribute  <div string="HERE">
	 *   - 1 - in an html tag <div HERE></div>
	 *   - 0 - in the content of a tag <div>HERE</div>
	 * @param {Object} self
	 * @param {Object} func
	 */
	txt: function(escape, tagName, status, self, func){
		var listTeardown = can.view.setupLists(),
			emptyHandler = function(){},
			unbind = function(){
				compute.unbind("change",emptyHandler)
			};

		var compute = can.compute(func, self, false);
		// bind to get and temporarily cache the value
		compute.bind("change",emptyHandler);
		// call the "wrapping" function and get the binding information
		var tag = (elements.tagMap[tagName] || "span"),
			listData = listTeardown(),
			value = compute();
		

		if(listData){
			return "<" +tag+can.view.hook(function(el, parentNode){
				live.list(el, listData.list, listData.renderer, self, parentNode);
			})+"></" +tag+">";
		}

		// If we had no observes just return the value returned by func.
		if(!compute.hasDependencies){
			unbind();
			return (escape || status !== 0? contentEscape : contentText)(value, status === 0 && tag);
		}


		// the property (instead of innerHTML elements) to adjust. For
		// example options should use textContent
		var contentProp = elements.tagToContentPropMap[tagName];
		

		// The magic tag is outside or between tags.
		if ( status === 0 && !contentProp ) {
			// Return an element tag with a hookup in place of the content
			return "<" +tag+can.view.hook(
			escape ? 
				// If we are escaping, replace the parentNode with 
				// a text node who's value is `func`'s return value.
				function(el, parentNode){
					live.text(el, compute, parentNode);
					unbind();
				} 
				:
				// If we are not escaping, replace the parentNode with a
				// documentFragment created as with `func`'s return value.
				function( el, parentNode ) {
					live.html(el, compute, parentNode);
					unbind();
				//children have to be properly nested HTML for buildFragment to work properly
				}) + ">"+tagChildren(tag)+"</" +tag+">";
		// In a tag, but not in an attribute
		} else if( status === 1 ) { 
			// remember the old attr name
			pendingHookups.push(function(el) {
				live.attributes(el, compute, compute());
				unbind();
			});
			return compute();
		} else { // In an attribute...
			var attributeName = status === 0 ? contentProp : status;
			// if the magic tag is inside the element, like `<option><% TAG %></option>`,
			// we add this hookup to the last element (ex: `option`'s) hookups.
			// Otherwise, the magic tag is in an attribute, just add to the current element's
			// hookups.
			(status === 0  ? lastHookups : pendingHookups ).push(function(el){
				live.attribute(el, attributeName, compute);
				unbind();
			});
			return live.attributePlaceholder;
		}
	}
});

return can;
})(module["can/view/view.js"], module["can/view/elements.js"], module["can/view/live.js"], module["can/util/string/string.js"]);// ## can/view/mustache/mustache.js

module['can/view/mustache/mustache.js'] = (function( can ){
	
	// # mustache.js
	// `can.Mustache`: The Mustache templating engine.
	// 
	// See the [Transformation](#section-29) section within *Scanning Helpers* for a detailed explanation 
	// of the runtime render code design. The majority of the Mustache engine implementation 
	// occurs within the *Transformation* scanning helper.

	// ## Initialization
	//
	// Define the view extension.
	can.view.ext = ".mustache";

	// ### Setup internal helper variables and functions.
	//
	// An alias for the context variable used for tracking a stack of contexts.
	// This is also used for passing to helper functions to maintain proper context.
	var CONTEXT = '___c0nt3xt',
		// An alias for the variable used for the hash object that can be passed
		// to helpers via `options.hash`.
		HASH = '___h4sh',
		// An alias for the function that adds a new context to the context stack.
		STACK = '___st4ck',
		STACKED = '___st4ck3d',
		// An alias for the most used context stacking call.
		CONTEXT_STACK = STACK + '(' + CONTEXT + ',this)',
		CONTEXT_OBJ = '{context:' + CONTEXT_STACK + ',options:options}',
		
		/**
		 * Checks whether an object is a can.Observe.
		 * @param  {[can.Observe]}  observable
		 * @return {Boolean} returns if the object is an observable.
		 */
		isObserve = function(obj) {
			return obj !== null && can.isFunction(obj.attr) && obj.constructor && !!obj.constructor.canMakeObserve;
		},
		
		/**
		 * Tries to determine if the object passed is an array.
		 * @param  {Array}  obj The object to check.
		 * @return {Boolean} returns if the object is an array.
		 */
		isArrayLike = function(obj) {
			return obj && obj.splice && typeof obj.length == 'number';
		},
		
		// ## Mustache
		/**
		 * The Mustache templating engine.
		 * @param {Object} options	Configuration options
		 */
		Mustache = function(options, helpers) {
			// Support calling Mustache without the constructor.
			// This returns a function that renders the template.
			if ( this.constructor != Mustache ) {
				var mustache = new Mustache(options);
				return function(data,options) {
					 return mustache.render(data,options);
				};
			}

			// If we get a `function` directly, it probably is coming from
			// a `steal`-packaged view.
			if ( typeof options == "function" ) {
				this.template = {
					fn: options
				};
				return;
			}

			// Set options on self.
			can.extend(this, options);
			this.template = this.scanner.scan(this.text, this.name);
		};

	/**
	 * @add can.Mustache
	 */
	// Put Mustache on the `can` object.
	can.Mustache = window.Mustache = Mustache;

	/** 
	 * @Prototype
	 */
	Mustache.prototype.
	/**
	 * @function render
	 * 
	 * Renders an object with view helpers attached to the view.
	 * 
	 *		 new Mustache({text: "<%= message %>"}).render({
	 *			 message: "foo"
	 *		 })
	 *		 
	 * @param {Object} object data to be rendered
	 * @return {String} returns the result of the string
	 */
	render = function( object, options ) {
		object = object || {};
		options = options || {};
		if(!options.helpers && !options.partials){
			options.helpers = options;
		}
		return this.template.fn.call(object, object, {
			_data: object,
			options: options
		});
	};

	can.extend(Mustache.prototype, {
		// Share a singleton scanner for parsing templates.
		scanner: new can.view.Scanner({
			// A hash of strings for the scanner to inject at certain points.
			text: {
				// This is the logic to inject at the beginning of a rendered template. 
				// This includes initializing the `context` stack.
				start: 'var ' + CONTEXT + ' = this && this.' + STACKED + ' ? this : [];' + CONTEXT + '.' + STACKED + ' = true;' +
					'var ' + STACK + ' = function(context, self) {' +
						'var s;' +
						'if (arguments.length == 1 && context) {' +
							's = !context.' + STACKED + ' ? [context] : context;' +
						// Handle helpers with custom contexts (#228)
						'} else if (!context.' + STACKED + ') {' +
							's = [self, context];' +
						'} else if (context && context === self && context.' + STACKED + ') {' +
							's = context.slice(0);' +
						'} else {' +
							's = context && context.' + STACKED + ' ? context.concat([self]) : ' + STACK + '(context).concat([self]);' +
						'}' +
						'return (s.' + STACKED + ' = true) && s;' +
					'};'
			},
			
			// An ordered token registry for the scanner.
			// This needs to be ordered by priority to prevent token parsing errors.
			// Each token follows the following structure:
			//
			//		[
			//			// Which key in the token map to match.
			//			"tokenMapName",
			//
			//			// A simple token to match, like "{{".
			//			"token",
			//
			//			// Optional. A complex (regexp) token to match that 
			//			// overrides the simple token.
			//			"[\\s\\t]*{{",
			//
			//			// Optional. A function that executes advanced 
			//			// manipulation of the matched content. This is 
			//			// rarely used.
			//			function(content){   
			//				return content;
			//			}
			//		]
			tokens: [
				// Return unescaped
				["returnLeft", "{{{", "{{[{&]"],
				// Full line comments
				["commentFull", "{{!}}", "^[\\s\\t]*{{!.+?}}\\n"],
				// Inline comments
				["commentLeft", "{{!", "(\\n[\\s\\t]*{{!|{{!)"],
				// Full line escapes
				// This is used for detecting lines with only whitespace and an escaped tag
				["escapeFull", "{{}}", "(^[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}\\n|\\n[\\s\\t]*{{[#/^][^}]+?}}$)", function(content) {
					return {
						before: /^\n.+?\n$/.test(content) ? '\n' : '',
						content: content.match(/\{\{(.+?)\}\}/)[1] || ''
					};
				}],
				// Return escaped
				["escapeLeft", "{{"],
				// Close return unescaped
				["returnRight", "}}}"],
				// Close tag
				["right", "}}"]
			],
			
			// ## Scanning Helpers
			//
			// This is an array of helpers that transform content that is within escaped tags like `{{token}}`. These helpers are solely for the scanning phase; they are unrelated to Mustache/Handlebars helpers which execute at render time. Each helper has a definition like the following:
			//
			//		{
			//			// The content pattern to match in order to execute.
			//			// Only the first matching helper is executed.
			//			name: /pattern to match/,
			//
			//			// The function to transform the content with.
			//			// @param {String} content   The content to transform.
			//			// @param {Object} cmd       Scanner helper data.
			//			//                           {
			//			//                             insert: "insert command",
			//			//                             tagName: "div",
			//			//                             status: 0
			//			//                           }
			//			fn: function(content, cmd) {
			//				return 'for text injection' || 
			//					{ raw: 'to bypass text injection' };
			//			}
			//		}
			helpers: [
				// ### Partials
				//
				// Partials begin with a greater than sign, like {{> box}}.
				// 
				// Partials are rendered at runtime (as opposed to compile time), 
				// so recursive partials are possible. Just avoid infinite loops.
				// 
				// For example, this template and partial:
				// 
				// 		base.mustache:
				// 			<h2>Names</h2>
				// 			{{#names}}
				// 				{{> user}}
				// 			{{/names}}
				// 			
				// 		user.mustache:
				// 			<strong>{{name}}</strong>
				{
					name: /^>[\s]*\w*/,
					fn:function(content, cmd){
						// Get the template name and call back into the render method,
						// passing the name and the current context.
						var templateName = can.trim(content.replace(/^>\s?/, '')).replace(/["|']/g, "");
						return "options.partials && options.partials['"+templateName+"'] ? can.Mustache.renderPartial(options.partials['"+templateName+"']," + 
							CONTEXT_STACK + ".pop(),options) : can.Mustache.render('" + templateName + "', " + CONTEXT_STACK + ")";
					}
				},

				// ### Data Hookup
				// 
				// This will attach the data property of `this` to the element
				// its found on using the first argument as the data attribute
				// key.
				// 
				// For example:
				// 	
				//		<li id="nameli" {{ data 'name' }}></li>
				// 
				// then later you can access it like:
				// 
				//		can.$('#nameli').data('name');
				{
					name: /^\s*data\s/,
					fn: function(content, cmd){
						var attr = content.match(/["|'](.*)["|']/)[1];
						// return a function which calls `can.data` on the element
						// with the attribute name with the current context.
						return "can.proxy(function(__){" +
							// "var context = this[this.length-1];" +
							// "context = context." + STACKED + " ? context[context.length-2] : context; console.warn(this, context);" +
							"can.data(can.$(__),'" + attr + "', this.pop()); }, " + CONTEXT_STACK + ")";
					}
				},
				
				// ### Transformation (default)
				//
				// This transforms all content to its interpolated equivalent,
				// including calls to the corresponding helpers as applicable. 
				// This outputs the render code for almost all cases.
				//
				// #### Definitions
				// 
				// * `context` - This is the object that the current rendering context operates within. 
				//		Each nested template adds a new `context` to the context stack.
				// * `stack` - Mustache supports nested sections, 
				//		each of which add their own context to a stack of contexts.
				//		Whenever a token gets interpolated, it will check for a match against the 
				//		last context in the stack, then iterate through the rest of the stack checking for matches.
				//		The first match is the one that gets returned.
				// * `Mustache.txt` - This serializes a collection of logic, optionally contained within a section.
				//		If this is a simple interpolation, only the interpolation lookup will be passed.
				//		If this is a section, then an `options` object populated by the truthy (`options.fn`) and 
				//		falsey (`options.inverse`) encapsulated functions will also be passed. This section handling 
				//		exists to support the runtime context nesting that Mustache supports.
				// * `Mustache.get` - This resolves an interpolation reference given a stack of contexts.
				// * `options` - An object containing methods for executing the inner contents of sections or helpers.  
				//		`options.fn` - Contains the inner template logic for a truthy section.  
				//		`options.inverse` - Contains the inner template logic for a falsey section.  
				//		`options.hash` - Contains the merged hash object argument for custom helpers.
				//
				// #### Design
				//
				// This covers the design of the render code that the transformation helper generates.
				//
				// ##### Pseudocode
				// 
				// A detailed explanation is provided in the following sections, but here is some brief pseudocode
				// that gives a high level overview of what the generated render code does (with a template similar to  
				// `"{{#a}}{{b.c.d.e.name}}{{/a}}" == "Phil"`).
				//
				// *Initialize the render code.*
				// 
				// 		view = []
				// 		context = []
				// 		stack = fn { context.concat([this]) }
				// 		
				// *Render the root section.*
				//
				// 		view.push( "string" )
				// 		view.push( can.view.txt(
				//
				// *Render the nested section with `can.Mustache.txt`.*
				//
				// 			txt( 
				//
				// *Add the current context to the stack.*
				//
				// 				stack(), 
				//
				// *Flag this for truthy section mode.*
				//
				// 				"#",
				//
				// *Interpolate and check the `a` variable for truthyness using the stack with `can.Mustache.get`.*
				// 
				// 				get( "a", stack() ),
				//
				// *Include the nested section's inner logic.
				// The stack argument is usually the parent section's copy of the stack, 
				// but it can be an override context that was passed by a custom helper.
				// Sections can nest `0..n` times -- **NESTCEPTION**.*
				//
				// 				{ fn: fn(stack) {
				//
				// *Render the nested section (everything between the `{{#a}}` and `{{/a}}` tokens).*
				//
				// 					view = []
				// 					view.push( "string" )
				// 					view.push(
				//
				// *Add the current context to the stack.*
				//
				// 						stack(),
				//
				// *Flag this as interpolation-only mode.*
				//
				// 						null,
				//
				// *Interpolate the `b.c.d.e.name` variable using the stack.*
				//
				// 						get( "b.c.d.e.name", stack() ),
				// 					)
				// 					view.push( "string" )
				//
				// *Return the result for the nested section.*
				//
				// 					return view.join()
				// 				}}
				// 			)
				// 		))
				// 		view.push( "string" )
				//
				// *Return the result for the root section, which includes all nested sections.*
				//
				// 		return view.join()
				//
				// ##### Initialization
				//
				// Each rendered template is started with the following initialization code:
				//
				// 		var ___v1ew = [];
				// 		var ___c0nt3xt = [];
				// 		___c0nt3xt.___st4ck = true;
				// 		var ___st4ck = function(context, self) {
				// 			var s;
				// 			if (arguments.length == 1 && context) {
				// 				s = !context.___st4ck ? [context] : context;
				// 			} else {
				// 				s = context && context.___st4ck 
				//					? context.concat([self]) 
				//					: ___st4ck(context).concat([self]);
				// 			}
				// 			return (s.___st4ck = true) && s;
				// 		};
				//
				// The `___v1ew` is the the array used to serialize the view.
				// The `___c0nt3xt` is a stacking array of contexts that slices and expands with each nested section.
				// The `___st4ck` function is used to more easily update the context stack in certain situations.
				// Usually, the stack function simply adds a new context (`self`/`this`) to a context stack. 
				// However, custom helpers will occasionally pass override contexts that need their own context stack.
				//
				// ##### Sections
				//
				// Each section, `{{#section}} content {{/section}}`, within a Mustache template generates a section 
				// context in the resulting render code. The template itself is treated like a root section, with the 
				// same execution logic as any others. Each section can have `0..n` nested sections within it.
				//
				// Here's an example of a template without any descendent sections.  
				// Given the template: `"{{a.b.c.d.e.name}}" == "Phil"`  
				// Would output the following render code:
				//
				//		___v1ew.push("\"");
				//		___v1ew.push(can.view.txt(1, '', 0, this, function() {
				// 			return can.Mustache.txt(___st4ck(___c0nt3xt, this), null, 
				//				can.Mustache.get("a.b.c.d.e.name", 
				//					___st4ck(___c0nt3xt, this))
				//			);
				//		}));
				//		___v1ew.push("\" == \"Phil\"");
				//
				// The simple strings will get appended to the view. Any interpolated references (like `{{a.b.c.d.e.name}}`) 
				// will be pushed onto the view via `can.view.txt` in order to support live binding.
				// The function passed to `can.view.txt` will call `can.Mustache.txt`, which serializes the object data by doing 
				// a context lookup with `can.Mustache.get`.
				//
				// `can.Mustache.txt`'s first argument is a copy of the context stack with the local context `this` added to it.
				// This stack will grow larger as sections nest.
				//
				// The second argument is for the section type. This will be `"#"` for truthy sections, `"^"` for falsey, 
				// or `null` if it is an interpolation instead of a section.
				//
				// The third argument is the interpolated value retrieved with `can.Mustache.get`, which will perform the 
				// context lookup and return the approriate string or object.
				//
				// Any additional arguments, if they exist, are used for passing arguments to custom helpers.
				//
				// For nested sections, the last argument is an `options` object that contains the nested section's logic.
				//
				// Here's an example of a template with a single nested section.  
				// Given the template: `"{{#a}}{{b.c.d.e.name}}{{/a}}" == "Phil"`  
				// Would output the following render code:
				//
				//		___v1ew.push("\"");
				// 		___v1ew.push(can.view.txt(0, '', 0, this, function() {
				// 			return can.Mustache.txt(___st4ck(___c0nt3xt, this), "#", 
				//				can.Mustache.get("a", ___st4ck(___c0nt3xt, this)), 
				//					[{
				// 					_: function() {
				// 						return ___v1ew.join("");
				// 					}
				// 				}, {
				// 					fn: function(___c0nt3xt) {
				// 						var ___v1ew = [];
				// 						___v1ew.push(can.view.txt(1, '', 0, this, 
				//								function() {
				//  								return can.Mustache.txt(
				// 									___st4ck(___c0nt3xt, this), 
				// 									null, 
				// 									can.Mustache.get("b.c.d.e.name", 
				// 										___st4ck(___c0nt3xt, this))
				// 								);
				// 							}
				// 						));
				// 						return ___v1ew.join("");
				// 					}
				// 				}]
				//			)
				// 		}));
				//		___v1ew.push("\" == \"Phil\"");
				//
				// This is specified as a truthy section via the `"#"` argument. The last argument includes an array of helper methods used with `options`.
				// These act similarly to custom helpers: `options.fn` will be called for truthy sections, `options.inverse` will be called for falsey sections.
				// The `options._` function only exists as a dummy function to make generating the section nesting easier (a section may have a `fn`, `inverse`,
				// or both, but there isn't any way to determine that at compilation time).
				// 
				// Within the `fn` function is the section's render context, which in this case will render anything between the `{{#a}}` and `{{/a}}` tokens.
				// This function has `___c0nt3xt` as an argument because custom helpers can pass their own override contexts. For any case where custom helpers
				// aren't used, `___c0nt3xt` will be equivalent to the `___st4ck(___c0nt3xt, this)` stack created by its parent section. The `inverse` function
				// works similarly, except that it is added when `{{^a}}` and `{{else}}` are used. `var ___v1ew = []` is specified in `fn` and `inverse` to 
				// ensure that live binding in nested sections works properly.
				//
				// All of these nested sections will combine to return a compiled string that functions similar to EJS in its uses of `can.view.txt`.
				//
				// #### Implementation
				{
					name: /^.*$/,
					fn: function(content, cmd) {
						var mode = false,
							result = [];

						// Trim the content so we don't have any trailing whitespace.
						content = can.trim(content);

						// Determine what the active mode is.
						// 
						// * `#` - Truthy section
						// * `^` - Falsey section
						// * `/` - Close the prior section
						// * `else` - Inverted section (only exists within a truthy/falsey section)
						if (content.length && (mode = content.match(/^([#^/]|else$)/))) {
							mode = mode[0];
							switch (mode) {
								// Open a new section.
								case '#':
								case '^':
									result.push(cmd.insert + 'can.view.txt(0,\'' + cmd.tagName + '\',' + cmd.status + ',this,function(){ return ');
									break;
								// Close the prior section.
								case '/':
									return { raw: 'return ___v1ew.join("");}}])}));' };
									break;
							}
							
							// Trim the mode off of the content.
							content = content.substring(1);
						}
						
						// `else` helpers are special and should be skipped since they don't 
						// have any logic aside from kicking off an `inverse` function.
						if (mode != 'else') {
							var args = [],
								i = 0,
								hashing = false,
								arg, split, m;
							
							// Parse the helper arguments.
							// This needs uses this method instead of a split(/\s/) so that 
							// strings with spaces can be correctly parsed.
							(can.trim(content)+' ').replace(/((([^\s]+?=)?('.*?'|".*?"))|.*?)\s/g, function(whole, part) {
								args.push(part);
							});

							// Start the content render block.
							result.push('can.Mustache.txt('+CONTEXT_OBJ+',' + (mode ? '"'+mode+'"' : 'null') + ',');
						
							// Iterate through the helper arguments, if there are any.
							for (; arg = args[i]; i++) {
								i && result.push(',');
								
								// Check for special helper arguments (string/number/boolean/hashes).
								if (i && (m = arg.match(/^(('.*?'|".*?"|[0-9.]+|true|false)|((.+?)=(('.*?'|".*?"|[0-9.]+|true|false)|(.+))))$/))) {
									// Found a native type like string/number/boolean.
									if (m[2]) {
										result.push(m[0]);
									}
									// Found a hash object.
									else {
										// Open the hash object.
										if (!hashing) {
											hashing = true;
											result.push('{' + HASH + ':{');
										}
										
										// Add the key/value.
										result.push(m[4], ':', m[6] ? m[6] : 'can.Mustache.get("' + m[5].replace(/"/g,'\\"') + '",' + CONTEXT_OBJ + ')');
										
										// Close the hash if this was the last argument.
										if (i == args.length - 1) {
											result.push('}}');
										}
									}
								}
								// Otherwise output a normal interpolation reference.
								else {
									result.push('can.Mustache.get("' + 
										// Include the reference name.
										arg.replace(/"/g,'\\"') + '",' +
										// Then the stack of context.
										CONTEXT_OBJ +
										// Flag as a helper method to aid performance, 
										// if it is a known helper (anything with > 0 arguments).
										(i == 0 && args.length > 1 ? ',true' : ',false') +
										(i > 0 ? ',true' : ',false') +
										')');
								}
							}
						}
						
						// Create an option object for sections of code.
						mode && mode != 'else' && result.push(',[{_:function(){');
						switch (mode) {
							// Truthy section
							case '#':
								result.push('return ___v1ew.join("");}},{fn:function(' + CONTEXT + '){var ___v1ew = [];');
								break;
							// If/else section
							// Falsey section
							case 'else':
							case '^':
								result.push('return ___v1ew.join("");}},{inverse:function(' + CONTEXT + '){var ___v1ew = [];');
								break;
							// Not a section
							default:
								result.push(');');
								break;
						}
						
						// Return a raw result if there was a section, otherwise return the default string.
						result = result.join('');
						return mode ? { raw: result } : result;
					}
				}
			]
		})
	});

	// Add in default scanner helpers first.
	// We could probably do this differently if we didn't 'break' on every match.
	var helpers = can.view.Scanner.prototype.helpers;
	for (var i = 0; i < helpers.length; i++) {
		Mustache.prototype.scanner.helpers.unshift(helpers[i]);
	};

	/**
	 * @hide
	 * Evaluates the resulting string based on the context/name.
	 *
	 * @param {Object|Array} context	The context stack to be used with evaluation.
	 * @param {String} mode		The mode to evaluate the section with: # for truthy, ^ for falsey
	 * @param {String|Object} name	The string (or sometimes object) to pass to the given helper method.
	 */
	Mustache.txt = function(context, mode, name) {
		// Grab the extra arguments to pass to helpers.
		var args = Array.prototype.slice.call(arguments, 3),
			// Create a default `options` object to pass to the helper.
			options = can.extend.apply(can, [{
					fn: function() {},
					inverse: function() {}
			}].concat(mode ? args.pop() : []));
			
			
		var extra = {};
		if(context.context) {
			extra = context.options;
			context = context.context;
		}

		// Check for a registered helper or a helper-like function.
		if (helper = (Mustache.getHelper(name,extra) || (can.isFunction(name) && !name.isComputed && { fn: name }))) {
			// Use the most recent context as `this` for the helper.
			var stack = context[STACKED] && context,
				context = (stack && context[context.length - 1]) || context,
				// Update the options with a function/inverse (the inner templates of a section).
				opts = {
					fn: can.proxy(options.fn, context),
					inverse: can.proxy(options.inverse, context)
				}, 
				lastArg = args[args.length-1];
			
			// Store the context stack in the options if one exists
			if (stack) {
				opts.contexts = stack;
			}
			// Add the hash to `options` if one exists
			if (lastArg && lastArg[HASH]) {
				opts.hash = args.pop()[HASH];
			}
			args.push(opts);

			// Call the helper.
			return helper.fn.apply(context, args) || '';
		}

		// if a compute, get the value
		if( can.isFunction(name) && name.isComputed ){
			name = name();
		}

		// An array of arguments to check for truthyness when evaluating sections.
		var validArgs = args.length ? args : [name],
			// Whether the arguments meet the condition of the section.
			valid = true,
			result = [],
			i, helper, argIsObserve, arg;
		// Validate the arguments based on the section mode.
		if (mode) {
			for (i = 0; i < validArgs.length; i++) {
				arg          = validArgs[i];
				argIsObserve = typeof arg !== 'undefined' && isObserve(arg);
				// Array-like objects are falsey if their length = 0.
				if (isArrayLike(arg)) {
					// Use .attr to trigger binding on empty lists returned from function
					if(mode == '#'){
						valid = valid && !!(argIsObserve ? arg.attr('length') : arg.length);
					} else if(mode == '^'){
						valid = valid && !(argIsObserve ? arg.attr('length') : arg.length);
					}
				}
				// Otherwise just check if it is truthy or not.
				else {
					valid = mode == '#' ? valid && !!arg
						: mode == '^' ? valid && !arg
						: valid;
				}
			}
		}
		
		// Otherwise interpolate like normal.
		if (valid) {
			switch (mode) {
				// Truthy section.
				case '#':
					// Iterate over arrays
					if (isArrayLike(name)) {
						var isObserveList = isObserve(name);
						
						// Add the reference to the list in the contexts.
						for (i = 0; i < name.length; i++) {
							result.push(options.fn.call(name[i], context) || '');
							
							// Ensure that live update works on observable lists
							isObserveList && name.attr(''+i);
						}
						return result.join('');
					}
					// Normal case.
					else {
						return options.fn.call(name || {}, context) || '';
					}
					break;
				// Falsey section.
				case '^':
					return options.inverse.call(name || {}, context) || '';
					break;
				default:
					// Add + '' to convert things like numbers to strings.
					// This can cause issues if you are trying to
					// eval on the length but this is the more
					// common case.
					return '' + (name !== undefined ? name : '');
					break;
			}
		}
		
		return '';
	};
	
	/**
	 * @hide
	 *
	 * Resolves a reference for a given object (and then a context if that fails).
	 *	obj = this
	 *	context = { a: true }
	 *	ref = 'a.b.c'
	 *		=> obj.a.b.c || context.a.b.c || ''
	 *
	 * This implements the following Mustache specs:
	 * 	Deeply Nested Contexts
	 *	All elements on the context stack should be accessible.
	 *		{{#bool}}B {{#bool}}C{{/bool}} D{{/bool}}
	 *		{ bool: true }
	 *		=> "B C D"
	 * 	Basic Context Miss Interpolation
	 * 	Failed context lookups should default to empty strings.
	 *  	{{cannot}}
	 *		=> ""
	 * 	Dotted Names - Broken Chains
	 * 	Any falsey value prior to the last part of the name should yield ''.
	 *		{{a.b.c}}
	 *		{ a: { d: 1 } }
	 *		=> ""
	 *
	 * @param {String} ref      The reference to check for on the obj/context.
	 * @param {Object} obj  		The object to use for checking for a reference.
	 * @param {Object} context  The context to use for checking for a reference if it doesn't exist in the object.
	 * @param {Boolean} [isHelper]  Whether the reference is a helper.
	 */
	Mustache.get = function(ref, contexts, isHelper, isArgument) {
		var options = contexts.options || {};
		contexts = contexts.context || contexts;
		// Assume the local object is the last context in the stack.
		var obj = contexts[contexts.length - 1],
			// Assume the parent context is the second to last context in the stack.
			context = contexts[contexts.length - 2],
			// Split the reference (like `a.b.c`) into an array of key names.
			names = ref.split('.'),
			namesLength = names.length,
			value, lastValue, name, i, j,
			// if we walk up and don't find a property, we default
			// to listening on an undefined property of the first
			// context that is an observe
			defaultObserve,
			defaultObserveName;

		// Handle `this` references for list iteration: {{.}} or {{this}}
		if (/^\.|this$/.test(ref)) {
			// If context isn't an object, then it was a value passed by a helper so use it as an override.
			if (!/^object|undefined$/.test(typeof context)) {
				return context || '';
			}
			// Otherwise just return the closest object.
			else {
				while (value = contexts.pop()) {
					if (typeof value !== 'undefined') {
						return value;
					} 
				}
				return '';
			}
		} 
		// Handle object resolution (like `a.b.c`).
		else if (!isHelper) {
			// Reverse iterate through the contexts (last in, first out).
			for (i = contexts.length - 1; i >= 0; i--) {
				// Check the context for the reference
				value = contexts[i];
			
				// Is the value a compute?
				if(can.isFunction(value) && value.isComputed) {
					value = value();
				}
			
				// Make sure the context isn't a failed object before diving into it.
				if (typeof value !== 'undefined' && value !== null) {
					var isHelper = Mustache.getHelper(ref, options);
					for (j = 0; j < namesLength; j++) {
						// Keep running up the tree while there are matches.
						if (typeof value[names[j]] !== 'undefined' && value[names[j]] !== null) {
							lastValue = value;
							value = value[name = names[j]];
						}
						// if there's a name conflict between property and helper
						// property wins
						else if(isHelper) {
							return ref;
						}
						// If it's undefined, still match if the parent is an Observe.
						else if ( isObserve(value) ) {
							defaultObserve = value;
							defaultObserveName = names[j];
							lastValue = value = undefined;
							break;
						}
						else {
							lastValue = value = undefined;
							break;
						}
					}
				}
			
				// Found a matched reference.
				if (value !== undefined ) {
					return Mustache.resolve(value, lastValue, name, isArgument);
				}
			}
		}

		if( defaultObserve && 
			// if there's not a helper by this name and no attribute with this name
			!(Mustache.getHelper(ref) &&
				can.inArray(defaultObserveName, can.Observe.keys(defaultObserve)) === -1) ) {
			return defaultObserve.compute(defaultObserveName);
		}
		// Support helpers without arguments, but only if there wasn't a matching data reference.
		// Helpers have priority over local function, see https://github.com/bitovi/canjs/issues/258
		if (value = Mustache.getHelper(ref,options)) {
			return ref;
		} else if (typeof obj !== 'undefined' && obj !== null && can.isFunction(obj[ref])) {
			// Support helper-like functions as anonymous helpers
			return obj[ref];
		}

		return '';
	};
	
	/**
	 * @hide
	 *
	 * Resolves an object to its truthy equivalent.
	 *
	 * @param {Object} value    The object to resolve.
	 * @param {Object} [lastValue]  	Only used with Mustache.get.
	 * @param {Object} [name]  				Only used with Mustache.get.
	 * @param {Boolean} [isArgument]  Only used with Mustache.get.
	 * @return {Object} The resolved object.
	 */
	Mustache.resolve = function(value, lastValue, name, isArgument) {
		if(lastValue && can.isFunction(lastValue[name]) && isArgument) {
			if(lastValue[name].isComputed){
				return lastValue[name];
			}
			// Don't execute functions if they are parameters for a helper and are not a can.compute
			// Need to bind it to the original context so that that information doesn't get lost by the helper
			return function() { 
				return lastValue[name].apply(lastValue, arguments); 
			};
		} else if (lastValue && can.isFunction(lastValue[name])) {
			// Support functions stored in objects.
			return lastValue[name]();
		} 
		// Invoke the length to ensure that Observe.List events fire.
		else if (isObserve(value) && isArrayLike(value) && value.attr('length')){
			return value;
		}
		// Add support for observes
		else if (lastValue && isObserve(lastValue)) {
			return lastValue.compute(name);
		} 
		else if (can.isFunction(value)) {
			return value();
		}
		else {
			return value;
		}
	};
	
	/**
	 * @static
	 */
	// ## Helpers
	//
	// Helpers are functions that can be called from within a template.
	// These helpers differ from the scanner helpers in that they execute
	// at runtime instead of during compilation.
	//
	// Custom helpers can be added via `can.Mustache.registerHelper`,
	// but there are also some built-in helpers included by default.
	// Most of the built-in helpers are little more than aliases to actions 
	// that the base version of Mustache simply implies based on the 
	// passed in object.
	// 
	// Built-in helpers:
	// 
	// * `data` - `data` is a special helper that is implemented via scanning helpers. 
	//		It hooks up the active element to the active data object: `<div {{data "key"}} />`
	// * `if` - Renders a truthy section: `{{#if var}} render {{/if}}`
	// * `unless` - Renders a falsey section: `{{#unless var}} render {{/unless}}`
	// * `each` - Renders an array: `{{#each array}} render {{this}} {{/each}}`
	// * `with` - Opens a context section: `{{#with var}} render {{/with}}`
	Mustache._helpers = {};
	/**
	 * @function registerHelper
	 * 
	 * Registers a helper with the Mustache system.
	 * Pass the name of the helper followed by the
	 * function to which Mustache should invoke.
	 * These are ran at runtime.
	 * 
	 * @param  {[String]} name name of helper
	 * @param  {Function} fn function to call
	 */
	Mustache.registerHelper = function(name, fn){
		this._helpers[name]={ name: name, fn: fn };
	};
	
	/**
	 * @function getHelper
	 * 
	 * Returns a helper given the name.
	 * 
	 * @param  {[type]} name of the helper
	 * @return {[type]} helper object
	 */
	Mustache.getHelper = function(name,options) {
		return options && options.helpers && options.helpers[name] && {
			fn: options.helpers[name]
		} || this._helpers[name]
		for (var i = 0, helper; helper = [i]; i++) {
			// Find the correct helper
			if (helper.name == name) {
				return helper;
			}
		}
		return null;
	};

	/**
	 * `Mustache.render` is a helper method that calls
	 * into `can.view.render` passing the partial 
	 * and the context object.  
	 * 
	 * Its purpose is to determine if the partial object 
	 * being passed represents a template like:
	 *
	 * 		partial === "movember.mustache"
	 *
	 * or if the partial is a variable name that represents
	 * a partial on the context object such as:
	 *
	 * 		context[partial] === "movember.mustache"
	 * 
	 * @param  {Object} partial
	 * @param  {Object} context
	 */
	Mustache.render = function(partial, context){
		// Make sure the partial being passed in
		// isn't a variable like { partial: "foo.mustache" }
		if(!can.view.cached[partial] && context[partial]){
			partial = context[partial];
		}

		// Call into `can.view.render` passing the
		// partial and context.
		return can.view.render(partial, context);
	};

	Mustache.renderPartial = function(partial,context,options) {
		return partial.render ? partial.render(context,options) :
			partial(context,options);
	};

	// The built-in Mustache helpers.
	can.each({
		// Implements the `if` built-in helper.
		/**
		 * @parent can.Mustache.Helpers
		 * @function if
	 	 * 
		 * Explicit if conditions.
		 * 
		 * 		{{#if expr}}
		 *   		// if
		 *      {{else}}
		 *      	// else
		 *      {{/if}}
		 */
		'if': function(expr, options){
			if (!!Mustache.resolve(expr)) {
				return options.fn(options.contexts || this);
			}
			else {
				return options.inverse(options.contexts || this);
			}
		},
		// Implements the `unless` built-in helper.
		/**
		 * @parent can.Mustache.Helpers
		 * @function unless
	 	 * 
		 * The `unless` helper evaluates the inverse of the value
		 * of the key and renders the block between the helper and the slash.
		 * 
		 * 		{{#unless expr}}
		 *   		// unless
		 *      {{/unless}}
		 */
		'unless': function(expr, options){
			if (!Mustache.resolve(expr)) {
				return options.fn(options.contexts || this);
			}
		},
		
		// Implements the `each` built-in helper.
		/**
		 * @parent can.Mustache.Helpers
		 * @function each
	 	 * 
		 * You can use the `each` helper to itterate over a array 
		 * of items and render the block between the helper and the slash.
		 * 
		 * 		{{#each arr}}
		 *   		// each
		 *      {{/each}}
		 */
		'each': function(expr, options) {
      expr = Mustache.resolve(expr);
			if (!!expr && isArrayLike(expr)) {
				if (isObserve(expr) && expr.attr('length')) {
					return can.view.lists && can.view.lists(expr, function(item) {
						return options.fn(item);
					});
				}
				else {
					var result = [];
					for (var i = 0; i < expr.length; i++) {
						result.push(options.fn(expr[i]));
					}
					return result.join('');
				}
			}
		},
		// Implements the `with` built-in helper.
		/**
		 * @parent can.Mustache.Helpers
		 * @function with
	 	 * 
		 * Mustache typically applies the context passed in the section 
		 * at compiled time.  However, if you want to override this 
		 * context you can use the `with` helper.
		 * 
		 * 		{{#with arr}}
		 *   		// with
		 *      {{/with}}
		 */
		'with': function(expr, options){
      var ctx = expr;
      expr = Mustache.resolve(expr);
			if (!!expr) {
				return options.fn(ctx);
			}
		}
		
	}, function(fn, name){
		Mustache.registerHelper(name, fn);
	});
	
	// ## Registration
	//
	// Registers Mustache with can.view.
	can.view.register({
		suffix: "mustache",

		contentType: "x-mustache-template",

		// Returns a `function` that renders the view.
		script: function( id, src ) {
			return "can.Mustache(function(_CONTEXT,_VIEW) { " + new Mustache({
				text: src,
				name: id
			}).template.out + " })";
		},

		renderer: function( id, text ) {
			return Mustache({
				text: text,
				name: id
			});
		}
	});

	return can;
})(module["can/util/jquery/jquery.js"], module["can/view/view.js"], module["can/view/scanner.js"], module["can/observe/compute/compute.js"], module["can/view/render.js"]);// ## can/view/modifiers/modifiers.js

module['can/view/modifiers/modifiers.js'] = (function($, can) {
	//---- ADD jQUERY HELPERS -----
	//converts jquery functions to use views	
	var convert, modify, isTemplate, isHTML, isDOM, getCallback,
		// text and val cannot produce an element, so don't run hookups on them
		noHookup = {'val':true,'text':true};

	convert = function( func_name ) {
		// save the old jQuery helper
		var old = $.fn[func_name];

		// replace it with our new helper
		$.fn[func_name] = function() {
			
			var args = can.makeArray(arguments),
				callbackNum, 
				callback, 
				self = this,
				result;
			
			// if the first arg is a deferred
			// wait until it finishes, and call
			// modify with the result
			if ( can.isDeferred(args[0]) ) {
				args[0].done(function( res ) {
					modify.call(self, [res], old);
				})
				return this;
			}
			//check if a template
			else if ( isTemplate(args) ) {

				// if we should operate async
				if ((callbackNum = getCallback(args))) {
					callback = args[callbackNum];
					args[callbackNum] = function( result ) {
						modify.call(self, [result], old);
						callback.call(self, result);
					};
					can.view.apply(can.view, args);
					return this;
				}
				// call view with args (there might be deferreds)
				result = can.view.apply(can.view, args);
				
				// if we got a string back
				if (!can.isDeferred(result) ) {
					// we are going to call the old method with that string
					args = [result];
				} else {
					// if there is a deferred, wait until it is done before calling modify
					result.done(function( res ) {
						modify.call(self, [res], old);
					})
					return this;
				}
			}
			return noHookup[func_name] ? old.apply(this,args) : 
				modify.call(this, args, old);
		};
	};

	// modifies the content of the element
	// but also will run any hookup
	modify = function( args, old ) {
		var res, stub, hooks;

		//check if there are new hookups
		for ( var hasHookups in can.view.hookups ) {
			break;
		}

		//if there are hookups, turn into a frag
		// and insert that
		// by using a frag, the element can be recursively hooked up
		// before insterion
		if ( hasHookups && args[0] && isHTML(args[0]) ) {
			args[0] = can.view.frag(args[0]).childNodes;
		}
	
		//then insert into DOM
		res = old.apply(this, args);

		return res;
	};

	// returns true or false if the args indicate a template is being used
	// $('#foo').html('/path/to/template.ejs',{data})
	// in general, we want to make sure the first arg is a string
	// and the second arg is data
	isTemplate = function( args ) {
		// save the second arg type
		var secArgType = typeof args[1];
		
		// the first arg is a string
		return typeof args[0] == "string" && 
				// the second arg is an object or function
		       (secArgType == 'object' || secArgType == 'function') && 
			   // but it is not a dom element
			   !isDOM(args[1]);
	};
	// returns true if the arg is a jQuery object or HTMLElement
	isDOM = function(arg){
		return arg.nodeType || (arg[0] && arg[0].nodeType)
	};
	// returns whether the argument is some sort of HTML data
	isHTML = function( arg ) {
		if ( isDOM(arg) ) {
			// if jQuery object or DOM node we're good
			return true;
		} else if ( typeof arg === "string" ) {
			// if string, do a quick sanity check that we're HTML
			arg = can.trim(arg);
			return arg.substr(0, 1) === "<" && arg.substr(arg.length - 1, 1) === ">" && arg.length >= 3;
		} else {
			// don't know what you are
			return false;
		}
	};

	//returns the callback arg number if there is one (for async view use)
	getCallback = function( args ) {
		return typeof args[3] === 'function' ? 3 : typeof args[2] === 'function' && 2;
	};

	/**
	 *  @add jQuery.fn
	 *  @parent can.View
	 *  Called on a jQuery collection that was rendered with can.View with pending hookups.  can.View can render a 
	 *  template with hookups, but not actually perform the hookup, because it returns a string without actual DOM 
	 *  elements to hook up to.  So hookup performs the hookup and clears the pending hookups, preventing errors in 
	 *  future templates.
	 *  
	 * @codestart
	 * $(can.View('//views/recipes.ejs',recipeData)).hookup()
	 * @codeend
	 */
	$.fn.hookup = function() {
		can.view.frag(this);
		return this;
	};

	/**
	 *  @add jQuery.fn
	 */
	can.each([
	/**
	 *  @function jQuery.fn.prepend
	 *  @parent can.view.modifiers
	 *  
	 *  Extending the original [http://api.jquery.com/prepend/ jQuery().prepend()]
	 *  to render [can.view] templates inserted at the beginning of each element in the set of matched elements.
	 *  
	 *  	$('#test').prepend('path/to/template.ejs', { name : 'canjs' });
	 *  
	 *  @param {String|Object|Function} content A template filename or the id of a view script tag 
	 *  or a DOM element, array of elements, HTML string, or can object.
	 *  @param {Object} [data] The data to render the view with.
	 *  If rendering a view template this parameter always has to be present
	 *  (use the empty object initializer {} for no data).
	 *  @param {Function} [callback] A success callback to load the view asynchronously
	 *
	 *  @return {jQuery|can.Deferred} The jQuery object or a [can.Deferred] if a deferred has
	 *  been passed in data.
	 */
	"prepend",
	/**
	 *  @function jQuery.fn.append
	 *  @parent can.view.modifiers
	 *  
	 *  Extending the original [http://api.jquery.com/append/ jQuery().append()]
	 *  to render [can.view] templates inserted at the end of each element in the set of matched elements.
	 *  
	 *  	$('#test').append('path/to/template.ejs', { name : 'canjs' });
	 *  
	 *  @param {String|Object|Function} content A template filename or the id of a view script tag 
	 *  or a DOM element, array of elements, HTML string, or can object.
	 *  @param {Object} [data] The data to render the view with.
	 *  If rendering a view template this parameter always has to be present
	 *  (use the empty object initializer {} for no data).
	 *  @param {Function} [callback] A success callback to load the view asynchronously
	 *
	 *  @return {jQuery|can.Deferred} The jQuery object or a [can.Deferred] if a deferred has
	 *  been passed in data.
	 */
	"append",
	/**
	 *  @function jQuery.fn.after
	 *  @parent can.view.modifiers
	 *  
	 *  Extending the original [http://api.jquery.com/after/ jQuery().after()]
	 *  to render [can.view] templates inserted after each element in the set of matched elements.
	 *  
	 *  	$('#test').after('path/to/template.ejs', { name : 'canjs' });
	 *  
	 *  @param {String|Object|Function} content A template filename or the id of a view script tag 
	 *  or a DOM element, array of elements, HTML string, or can object.
	 *  @param {Object} [data] The data to render the view with.
	 *  If rendering a view template this parameter always has to be present
	 *  (use the empty object initializer {} for no data).
	 *  @param {Function} [callback] A success callback to load the view asynchronously
	 *
	 *  @return {jQuery|can.Deferred} The jQuery object or a [can.Deferred] if a deferred has
	 *  been passed in data.
	 */
	"after",
	/**
	 *  @function jQuery.fn.before
	 *  @parent can.view.modifiers
	 *  
	 *  Extending the original [http://api.jquery.com/before/ jQuery().before()]
	 *  to render [can.view] templates inserted before each element in the set of matched elements.
	 *  
	 *  	$('#test').before('path/to/template.ejs', { name : 'canjs' });
	 *  
	 *  @param {String|Object|Function} content A template filename or the id of a view script tag 
	 *  or a DOM element, array of elements, HTML string, or can object.
	 *  @param {Object} [data] The data to render the view with.
	 *  If rendering a view template this parameter always has to be present
	 *  (use the empty object initializer {} for no data).
	 *  @param {Function} [callback] A success callback to load the view asynchronously
	 *
	 *  @return {jQuery|can.Deferred} The jQuery object or a [can.Deferred] if a deferred has
	 *  been passed in data.
	 */
	"before",
	/**
	 *  @function jQuery.fn.text
	 *  @parent can.view.modifiers
	 *  
	 *  Extending the original [http://api.jquery.com/text/ jQuery().text()]
	 *  to render [can.View] templates as the content of each matched element.
	 *  Unlike [jQuery.fn.html] jQuery.fn.text also works with XML, escaping the provided
	 *  string as necessary.
	 *  
	 *  	$('#test').text('path/to/template.ejs', { name : 'canjs' });
	 *  
	 *  @param {String|Object|Function} content A template filename or the id of a view script tag 
	 *  or a DOM element, array of elements, HTML string, or can object.
	 *  @param {Object} [data] The data to render the view with.
	 *  If rendering a view template this parameter always has to be present
	 *  (use the empty object initializer {} for no data).
	 *  @param {Function} [callback] A success callback to load the view asynchronously
	 *
	 *  @return {jQuery|can.Deferred} The jQuery object or a [can.Deferred] if a deferred has
	 *  been passed in data.
	 */
	"text",
	/**
	 *  @function jQuery.fn.html
	 *  @parent can.view.modifiers
	 *  
	 *  Extending the original [http://api.jquery.com/html/ jQuery().html()]
	 *  to render [can.view] templates as the content of each matched element.
	 *  
	 *  	$('#test').html('path/to/template.ejs', { name : 'canjs' });
	 *  
	 *  @param {String|Object|Function} content A template filename or the id of a view script tag 
	 *  or a DOM element, array of elements, HTML string, or can object.
	 *  @param {Object} [data] The data to render the view with.
	 *  If rendering a view template this parameter always has to be present
	 *  (use the empty object initializer {} for no data).
	 *  @param {Function} [callback] A success callback to load the view asynchronously
	 *
	 *  @return {jQuery|can.Deferred} The jQuery object or a [can.Deferred] if a deferred has
	 *  been passed in data.
	 */
	"html",
	/**
	 *  @function jQuery.fn.replaceWith
	 *  @parent can.view.modifiers
	 *  
	 *  Extending the original [http://api.jquery.com/replaceWith/ jQuery().replaceWith()]
	 *  to render [can.view] templates replacing each element in the set of matched elements.
	 *  
	 *  	$('#test').replaceWith('path/to/template.ejs', { name : 'canjs' });
	 *  
	 *  @param {String|Object|Function} content A template filename or the id of a view script tag 
	 *  or a DOM element, array of elements, HTML string, or can object.
	 *  @param {Object} [data] The data to render the view with.
	 *  If rendering a view template this parameter always has to be present
	 *  (use the empty object initializer {} for no data).
	 *  @param {Function} [callback] A success callback to load the view asynchronously
	 *
	 *  @return {jQuery|can.Deferred} The jQuery object or a [can.Deferred] if a deferred has
	 *  been passed in data.
	 */
	"replaceWith", "val"],function(func){
		convert(func);
	});

	return can;
})(module["jquery/jquery.js"], module["can/view/view.js"]);// ## can/observe/observe.js

module['can/observe/observe.js'] = (function(can, bind) {
	// ## observe.js  
	// `can.Observe`  
	// _Provides the observable pattern for JavaScript Objects._  
	//  
	// Returns `true` if something is an object with properties of its own.
	var canMakeObserve = function( obj ) {
			return obj && !can.isDeferred(obj) && (can.isArray(obj) || can.isPlainObject( obj ) || ( obj instanceof can.Observe ));
		},
		
		// Removes all listeners.
		unhookup = function(items, namespace){
			return can.each(items, function(item){
				if(item && item.unbind){
					item.unbind("change" + namespace);
				}
			});
		},
		// Listens to changes on `child` and "bubbles" the event up.  
		// `child` - The object to listen for changes on.  
		// `prop` - The property name is at on.  
		// `parent` - The parent object of prop.
		// `ob` - (optional) The Observe object constructor
		// `list` - (optional) The observable list constructor
		hookupBubble = function( child, prop, parent, Ob, List ) {
			Ob = Ob || Observe;
			List = List || Observe.List;

			// If it's an `array` make a list, otherwise a child.
			if (child instanceof Observe){
				// We have an `observe` already...
				// Make sure it is not listening to this already
				// It's only listening if it has bindings already.
				parent._bindings &&unhookup([child], parent._cid);
			} else if ( can.isArray(child) ) {
				child = new List(child);
			} else {
				child = new Ob(child);
			}
			// only listen if something is listening to you
			if(parent._bindings){
				// Listen to all changes and `batchTrigger` upwards.
				bindToChildAndBubbleToParent(child, prop, parent)
			}
			

			return child;
		},
		bindToChildAndBubbleToParent = function(child, prop, parent){
			child.bind("change" + parent._cid, 
				function( /* ev, attr */ ) {
				// `batchTrigger` the type on this...
				var args = can.makeArray(arguments),
					ev = args.shift();
					args[0] = (prop === "*" ? 
						[ parent.indexOf( child ), args[0]] :
						[ prop, args[0]] ).join(".");

				// track objects dispatched on this observe		
				ev.triggeredNS = ev.triggeredNS || {};

				// if it has already been dispatched exit
				if (ev.triggeredNS[parent._cid]) {
					return;
				}

				ev.triggeredNS[parent._cid] = true;
				// send change event with modified attr to parent	
				can.trigger(parent, ev, args);
				// send modified attr event to parent
				//can.trigger(parent, args[0], args);
			});
		}
		// An `id` to track events for a given observe.
		observeId = 0,
		// A helper used to serialize an `Observe` or `Observe.List`.  
		// `observe` - The observable.  
		// `how` - To serialize with `attr` or `serialize`.  
		// `where` - To put properties, in an `{}` or `[]`.
		serialize = function( observe, how, where ) {
			// Go through each property.
			observe.each(function( val, name ) {
				// If the value is an `object`, and has an `attrs` or `serialize` function.
				where[name] = canMakeObserve(val) && can.isFunction( val[how] ) ?
				// Call `attrs` or `serialize` to get the original data back.
				val[how]() :
				// Otherwise return the value.
				val;
			});
			return where;
		},
		attrParts = function(attr, keepKey) {
			if(keepKey) {
				return [attr];
			}
			return can.isArray(attr) ? attr : (""+attr).split(".");
		},
		// Which batch of events this is for -- might not want to send multiple
		// messages on the same batch.  This is mostly for event delegation.
		batchNum = 1,
		// how many times has start been called without a stop
		transactions = 0,
		// an array of events within a transaction
		batchEvents = [],
		stopCallbacks = [],
		makeBindSetup = function(wildcard){
			return function(){
				var parent = this;
				this._each(function(child, prop){
					if(child && child.bind){
						bindToChildAndBubbleToParent(child, wildcard || prop, parent)
					}
				})
			};
		};
	
	
		
	/**
	 * @add can.Observe
	 */
	var Observe = can.Map = can.Observe = can.Construct( {
	/**
	 * @static
	 */
		// keep so it can be overwritten
		bind : can.bindAndSetup,
		unbind: can.unbindAndTeardown,
		id: "id",
		canMakeObserve : canMakeObserve,
		// starts collecting events
		// takes a callback for after they are updated
		// how could you hook into after ejs
		/**
		 * @parent can.Observe.batchEvents 
		 * `can.Observe.startBatch([batchStopHandler])` starts a 
		 * batch transaction. All change events caused by
		 * [can.Observe::attr] will not be fired until [can.Observe.stopBatch]
		 * is called.  In the following example, the `"first"` and `"change"`
		 * event handlers are not called until [can.Observe.stopBatch] is called:
		 * 
		 *     var person = new can.Observe({
		 * 	     first: "Alexis",
		 *       last:  "Abril"
		 *     });
		 *     
		 *     person.bind("first", function(){
		 * 	     console.log("first changed")
		 *     }).bind("change", function(){
		 * 	     console.log("change")
		 *     });
		 *     
		 *     can.Observe.startBatch();
		 *     person.attr("first","Alex");
		 *     
		 *     setTimeout(function(){
		 * 	     can.Observe.stopBatch();
		 *     },100);
		 * 
		 * Pass a callback to `can.Observe.startBatch` and it will
		 * be called immediately after all events have been triggered. Example:
		 * 
		 *     var date = can.compute(new Date);
		 *     can.Observe.startBatch(function(){
		 * 	     // after trigger
		 *     });
		 *     
		 *     date(newDate);
		 * 
		 *     can.Observe.stopBatch()
		 *     
		 * Calling `can.Observe.startBatch()` increments a
		 * counter that requires an equal number of `stopBatch`. Example:
		 * 
		 *     var selectAll = function(){
		 * 	     can.Observe.startBatch();
		 *       items.each(function(){
		 * 	       item.attr('selected', true)
		 *       })
		 *       can.Observe.stopBatch();
		 *     }
		 * 
		 *     can.Observe.startBatch();
		 *     selectAll();
		 *     person.attr('first','Justin')
		 *     can.Observe.endBatch();
		 *  
		 * @param {Function} [batchStopHandler] A callback that gets called
		 * after all events have been triggered.
		 */
		startBatch: function( batchStopHandler ) {
			transactions++;
			batchStopHandler && stopCallbacks.push(batchStopHandler);
		},
		/**
		 * @parent can.Observe.batchEvents
		 * `can.Observe.stopBatch([force,] [callStart])` decrements the 
		 * internal counter and potentially triggers all pending change events. Example:
		 * 
		 *     var person = new can.Observe({
		 * 	     first: "Alexis",
		 *       last:  "Abril"
		 *     });
		 *     
		 *     person.bind("first", function(){
		 * 	     console.log("first changed")
		 *     }).bind("change", function(){
		 * 	     console.log("change")
		 *     });
		 *     
		 *     can.Observe.startBatch();
		 *     person.attr("first","Alex");
		 *     
		 *     setTimeout(function(){
		 * 	     can.Observe.stopBatch();
		 *     },100);
		 * 
		 * `can.Observe.startBatch(true)` dispatches all
		 * pending requests no matter what the internal transaction
		 * counter is set to. Example:
		 * 
		 *     can.Observe.startBatch();
		 *     can.Observe.startBatch();
		 *     person.attr('first',"Julie");
		 *     can.Observe.stopBatch(true);
		 * 
		 * `can.Observe.startBatch(true, true)` dispatches
		 * all pending requests and immediately calls
		 * `can.Observe.startBatch`.
		 */
		stopBatch: function(force, callStart){
			if(force){
				transactions = 0;
			} else {
				transactions--;
			}
			
			if(transactions == 0){
				var items = batchEvents.slice(0),
					callbacks = stopCallbacks.slice(0);
				batchEvents= [];
				stopCallbacks = [];
				batchNum++;
				callStart && this.startBatch();
				can.each(items, function( args ) {
					can.trigger.apply(can, args);
				});
				can.each(callbacks, function( cb ) {
					cb();
				});
			}
		},
		/**
		 * @parent can.Observe.batchEvents
		 * 
		 * Creates an event on item, but will not send 
		 * immediately if collecting events.  
		 * 
		 * @param {can.Observe} item The item the event should happen on.  
		 * @param {String|Object} event - The event name, ex: `change`, or an object with an event type, ex: `{type: 'change'}`.  
		 * @param {Array} - The arguments to call back the function with.
		 */
		triggerBatch: function( item, event, args ) {
			// Don't send events if initalizing.
			if ( ! item._init) {
				if (transactions == 0 ) {
					return can.trigger(item, event, args);
				} else {
					event = typeof event === "string" ?
						{ type: event } : 
						event;
					event.batchNum = batchNum;
					batchEvents.push([
					item,
					event, 
					args ] );
				}
			}
		},
		/**
		 * `can.Observe.keys( observe )` iterates over an 
		 * observable object to get an array of 
		 * its keys. It also 
		 * 
		 *     var styles = new can.Observe({
		 *       color: "green",
		 *       width: "20px",
		 *       height: "20px"
		 *     });
		 *     
		 *     can.Observe.keys
		 * 
		 * @param {can.Observe} observe The observe to iterate over
		 * @return {Array} array An array of the keys on the object.
		 */
		keys: function(observe) {
			var keys = [];
			Observe.__reading && Observe.__reading(observe, '__keys');
			for(var keyName in observe._data) {
				keys.push(keyName);
			}
			return keys;
		}
	},
	/**
	 * @prototype
	 */
	{
		setup: function( obj ) {
			// `_data` is where we keep the properties.
			this._data = {};
			/**
			 * @attribute _cid
			 *
			 * A globally unique ID for this Observe instance.
			 */
			// The namespace this `object` uses to listen to events.
			can.cid(this, ".observe");
			// Sets all `attrs`.
			this._init = 1;
			this.attr(obj);
			this.bind('change'+this._cid,can.proxy(this._changes,this));
			delete this._init;
		},
		_bindsetup: makeBindSetup(),
		_bindteardown: function(){
			var cid = this._cid;
			this._each(function(child){
				unhookup([child], cid)
			})
		},
		_changes: function(ev, attr, how,newVal, oldVal){
			Observe.triggerBatch(this, {type:attr, batchNum: ev.batchNum}, [newVal,oldVal]);
		},
		_triggerChange: function(attr, how,newVal, oldVal){
			Observe.triggerBatch(this,"change",can.makeArray(arguments))
		},
		// no live binding iterator
		_each: function(callback){
			var data = this.__get();
			for(var prop in data){
				if(data.hasOwnProperty(prop)){
					callback(data[prop],prop)
				}
			}
		},
		/**
		 * Get or set an attribute or attributes on the observe.
		 * 
		 *     o = new can.Observe({});
		 *     
		 *     // sets a user property
		 *     o.attr( 'user', { name: 'hank' } );
		 *     
		 *     // read the user's name
		 *     o.attr( 'user.name' ) //-> 'hank'
		 * 
		 *     // merge multiple properties
		 *     o.attr({
		 *        grade: 'A'
		 *     });
		 * 
		 *     // get properties
		 *     o.attr()           //-> {user: {name: 'hank'}, grade: "A"}
		 * 
		 *     // set multiple properties and remove absent attrs
		 *     o.attr( { foo: 'bar' }, true );
		 * 
		 *     o.attr()           //-> {foo: 'bar'}
		 * 
		 * ## Setting Properties
		 * 
		 * `attr( PROPERTY, VALUE )` sets the observable's PROPERTY to VALUE.  For example:
		 * 
		 *     o = new can.Observe({});
		 *     o.attr( 'user', 'Justin' );
		 * 
		 * This call to attr fires two events on __o__ immediately after the value is set, the first is a "change" event that can be 
		 * listened to like:
		 * 
		 *     o.bind( 'change', function( ev, attr, how, newVal, oldVal ) {} );
		 * 
		 * where:
		 * 
		 *  - ev - the "change" event
		 *  - attr - the name of the attribute changed: `"user"`
		 *  - how - how the attribute was changed: `"add"` because the property was set for the first time
		 *  - newVal - the new value of the property: `"Justin"`
		 *  - oldVal - the old value of the property: `undefined`
		 * 
		 * "change" events are the generic event that gets fired on all changes to an 
		 * observe's properties. The second event shares the name of the property being changed
		 * and can be bound to like:
		 * 
		 *     o.bind( 'name', function( ev, newVal, oldVal ) {} );
		 * 
		 * where:
		 * 
		 *   - ev - the "name" event
		 *   - newVal - the new value of the name property: `'Justin'`
		 *   - oldVal - the old value of the name property: `undefined`
		 * 
		 * `attr( PROPERTY, VALUE )` allows setting of deep properties like:
		 * 
		 *      o = new can.Observe({ person: { name: { first: 'Just' } } });
		 *      o.attr( 'person.name.first', 'Justin' );
		 * 
		 *  All property names should be seperated with a __"."__.
		 * 
		 * `attr( PROPERTIES )` sets multiple properties at once and removes
		 * properties not in `PROPERTIES`.  For example:
		 * 
		 *     o = new can.Observe({ first: 'Just', middle: 'B' });
		 *     o.attr({
		 *       first: 'Justin',
		 *       last: 'Meyer'
		 *     });
		 * 
		 * This results in an object that looks like:
		 * 
		 *     { first: 'Justin', last: 'Meyer' }
		 * 
		 * Notice that the `middle` property is removed.  This results in
		 * 3 change events (and the corresponding property-named events) that
		 * are triggered after all properties have been set:
		 * 
		 * <table>
		 *   <tr><th>attr</th><th>how</th><th>newVal</th><th>oldVal</th></tr>
		 *   <tr>
		 * 	   <td>"first"</td><td>"set"</td><td>"Justin"</td><td>"Just"</td>
		 *   </tr>
		 *   <tr>
		 * 	   <td>"last"</td><td>"add"</td><td>"Meyer"</td><td>undefined</td>
		 *   </tr>
		 *   <tr>
		 * 	   <td>"middle"</td><td>"remove"</td><td>undefined</td><td>"B"</td>
		 *   </tr>
		 * </table>
		 * 
		 * `attr( PROPERTIES , true )` merges properties into existing 
		 * properties. For example:
		 * 
		 *     o = new can.Observe({ first: 'Just', middle: 'B' });
		 *     o.attr({
		 *       first: 'Justin',
		 *       last: 'Meyer'
		 *     })
		 * 
		 * This results in an object that looks like:
		 * 
		 *     { first: 'Justin', middle: 'B', last: 'Meyer' }
		 * 
		 * and results in 2 change events (and the corresponding 
		 * property-named events):
		 * 
		 * <table>
		 *   <tr><th>attr</th><th>how</th><th>newVal</th><th>oldVal</th></tr>
		 *   <tr>
		 * 	   <td>"first"</td><td>"set"</td><td>"Justin"</td><td>"Just"</td>
		 *   </tr>
		 *   <tr>
		 * 	   <td>"last"</td><td>"add"</td><td>"Meyer"</td><td>undefined</td>
		 *   </tr>
		 * </table>
		 * 
		 * Use [can.Observe::removeAttr removeAttr] to remove an attribute.
		 * 
		 * ## Reading Properties
		 * 
		 * `attr( PROPERTY )` returns a property value.  For example:
		 * 
		 *     o = new can.Observe({ first: 'Justin' });
		 *     o.attr( 'first' ) //-> "Justin"
		 * 
		 * You can also read properties that don't conflict with Observe's inherited
		 * methods direclty like:
		 * 
		 *     o.first //-> "Justin"
		 * 
		 * `attr( PROPERTY )` can read nested properties like:
		 * 
		 *      o = new can.Observe({ person: { name: { first: 'Justin' } } });
		 *      o.attr( 'person.name.first' ) //-> "Justin"
		 * 
		 * If `attr( PROPERTY )` returns an object or an array, it returns
		 * the Observe wrapped object or array. For example:
		 * 
		 *      o = new can.Observe({ person: { name: { first: 'Justin' } } });
		 *      o.attr( 'person' ).attr( 'name.first' ) //-> "Justin"
		 * 
		 * 
		 * `attr()` returns all properties in the observe, for example:
		 * 
		 *     o = new can.Observe({ first: 'Justin' });
		 *     o.attr() //-> { first: "Justin" }
		 * 
		 * If the observe has nested objects, `attr()` returns the 
		 * data as plain JS objects, not as observes.  Example:
		 * 
		 *      o = new can.Observe({ person: { name: { first: 'Justin' } } });
		 *      o.attr() //-> { person: { name: { first: 'Justin' } } }
		 * 
		 * @param {String} attr the attribute to read or write.
		 * 
		 *     o.attr( 'name' ) //-> reads the name
		 *     o.attr( 'name', 'Justin' ) //-> writes the name
		 *     
		 * You can read or write deep property names.  For example:
		 * 
		 *     o.attr( 'person', { name: 'Justin' } );
		 *     o.attr( 'person.name' ) //-> 'Justin'
		 * 
		 * @param {Object} [val] if provided, sets the value.
		 * @return {Object} the observable or the attribute property.
		 * 
		 * If you are reading, the property value is returned:
		 * 
		 *     o.attr( 'name' ) //-> Justin
		 *     
		 * If you are writing, the observe is returned for chaining:
		 * 
		 *     o.attr( 'name', 'Brian' ).attr( 'name' ) //-> Brian
		 */
		attr: function( attr, val ) {
			// This is super obfuscated for space -- basically, we're checking
			// if the type of the attribute is not a `number` or a `string`.
			var type = typeof attr;
			if ( type !== "string" && type !== "number" ) {
				return this._attrs(attr, val)
			} else if ( val === undefined ) {// If we are getting a value.
				// Let people know we are reading.
				Observe.__reading && Observe.__reading(this, attr)
				return this._get(attr)
			} else {
				// Otherwise we are setting.
				this._set(attr, val);
				return this;
			}
		},
		/**
		 * Iterates through each attribute, calling handler 
		 * with each attribute name and value.
		 * 
		 *     new Observe({ foo: 'bar' })
		 *       .each( function( value, name ) {
		 *         equals( name, 'foo' );
		 *         equals( value,'bar' );
		 *       });
		 * 
		 * @param {function} handler( value, attrName ) A function that will get 
		 * called back with the name and value of each attribute on the observe.
		 * 
		 * Returning `false` breaks the looping. The following will never
		 * log 3:
		 * 
		 *     new Observe({ a: 1, b: 2, c: 3 })
		 *       .each( function( value, name ) {
		 *         console.log(value);
		 *         if ( name == 2 ) {
		 *           return false;
		 *         }
		 *       });
		 * 
		 * @return {can.Observe} the original observable.
		 */
		each: function() {
			Observe.__reading && Observe.__reading(this, '__keys');
			return can.each.apply(undefined, [this.__get()].concat(can.makeArray(arguments)))
		},
		/**
		 * Removes a property by name from an observe.
		 * 
		 *     o =  new can.Observe({ foo: 'bar' });
		 *     o.removeAttr('foo'); //-> 'bar'
		 * 
		 * This creates a `'remove'` change event. Learn more about events
		 * in [can.Observe.prototype.bind bind] and [can.Observe.prototype.delegate delegate].
		 * 
		 * @param {String} attr the attribute name to remove.
		 * @return {Object} the value that was removed.
		 */
		removeAttr: function( attr ) {
				// Info if this is List or not
			var isList = this instanceof can.Observe.List,
				// Convert the `attr` into parts (if nested).
				parts = attrParts(attr),
				// The actual property to remove.
				prop = parts.shift(),
				// The current value.
				current = isList ? this[prop] : this._data[prop];

			// If we have more parts, call `removeAttr` on that part.
			if ( parts.length ) {
				return current.removeAttr(parts)
			} else {
				if(isList) {
					this.splice(prop, 1)
				} else if( prop in this._data ){
					// Otherwise, `delete`.
					delete this._data[prop];
					// Create the event.
					if (!(prop in this.constructor.prototype)) {
						delete this[prop]
					}
					// Let others know the number of keys have changed
					Observe.triggerBatch(this, "__keys");
					this._triggerChange(prop, "remove", undefined, current);

				}
				return current;
			}
		},
		// Reads a property from the `object`.
		_get: function( attr ) {
			var value = typeof attr === 'string' && !!~attr.indexOf('.') && this.__get(attr);
			if(value) {
				return value;
			}

			// break up the attr (`"foo.bar"`) into `["foo","bar"]`
			var parts = attrParts(attr),
				// get the value of the first attr name (`"foo"`)
				current = this.__get(parts.shift());
			// if there are other attributes to read
			return parts.length ? 
				// and current has a value
				current ?
					// lookup the remaining attrs on current
					current._get(parts) : 
					// or if there's no current, return undefined
					undefined 	
				: 
				// if there are no more parts, return current
				current;
		},
		// Reads a property directly if an `attr` is provided, otherwise
		// returns the "real" data object itself.
		__get: function( attr ) {
			return attr ? this._data[attr] : this._data;
		},
		// Sets `attr` prop as value on this object where.
		// `attr` - Is a string of properties or an array  of property values.
		// `value` - The raw value to set.
		_set: function( attr, value, keepKey) {
			// Convert `attr` to attr parts (if it isn't already).
			var parts = attrParts(attr, keepKey),
				// The immediate prop we are setting.
				prop = parts.shift(),
				// The current value.
				current = this.__get(prop);

			// If we have an `object` and remaining parts.
			if ( canMakeObserve(current) && parts.length ) {
				// That `object` should set it (this might need to call attr).
				current._set(parts, value)
			} else if (!parts.length ) {
				// We're in "real" set territory.
				if(this.__convert){
					value = this.__convert(prop, value)
				}
				this.__set(prop, value, current)
			} else {
				throw "can.Observe: Object does not exist"
			}
		},
		__set : function(prop, value, current){
		
			// Otherwise, we are setting it on this `object`.
			// TODO: Check if value is object and transform
			// are we changing the value.
			if ( value !== current ) {
				// Check if we are adding this for the first time --
				// if we are, we need to create an `add` event.
				var changeType = this.__get().hasOwnProperty(prop) ? "set" : "add";

				// Set the value on data.
				this.___set(prop,

				// If we are getting an object.
				canMakeObserve(value) ?

				// Hook it up to send event.
				hookupBubble(value, prop, this) :
				// Value is normal.
				value);

				if(changeType == "add"){
					// If there is no current value, let others know that
					// the the number of keys have changed
					
					Observe.triggerBatch(this, "__keys", undefined);
					
				}
				// `batchTrigger` the change event.
				this._triggerChange(prop, changeType, value, current);
				
				//Observe.triggerBatch(this, prop, [value, current]);
				// If we can stop listening to our old value, do it.
				current && unhookup([current], this._cid);
			}

		},
		// Directly sets a property on this `object`.
		___set: function( prop, val ) {
			this._data[prop] = val;
			// Add property directly for easy writing.
			// Check if its on the `prototype` so we don't overwrite methods like `attrs`.
			if (!(prop in this.constructor.prototype)) {
				this[prop] = val
			}
		},

		/**
		 * @function bind
		 * `bind( eventType, handler )` Listens to changes on a can.Observe.
		 * 
		 * When attributes of an observe change, two types of events are produced
		 * 
		 *   - "change" events - a generic event so you can listen to any property changes
		 *   - ATTR_NAME events - bind to specific attribute changes
		 * 
		 * Example:
		 * 
		 *     o = new can.Observe({ name: 'Payal' });
		 *     o.bind( 'change', function( ev, attr, how, newVal, oldVal ) {
		 *       
		 *     }).bind( 'name', function( ev, newVal, oldVal ) {
		 *     	
		 *     });
		 *     
		 *     o.attr( 'name', 'Justin' ); 
		 * 
		 * ## Change Events
		 * 
		 * A `'change'` event is triggered on the observe.  These events come
		 * in three flavors:
		 * 
		 *   - `add` - a attribute is added
		 *   - `set` - an existing attribute's value is changed
		 *   - `remove` - an attribute is removed
		 * 
		 * The change event is fired with:
		 * 
		 *  - the attribute changed
		 *  - how it was changed
		 *  - the newValue of the attribute
		 *  - the oldValue of the attribute
		 * 
		 * Example:
		 * 
		 *     o = new can.Observe({ name: 'Payal' });
		 *     o.bind( 'change', function( ev, attr, how, newVal, oldVal ) {
		 *       // ev    -> {type: 'change'}
		 *       // attr  -> "name"
		 *       // how   -> "add"
		 *       // newVal-> "Justin"
		 *       // oldVal-> "Payal"
		 *     });
		 *     
		 *     o.attr( 'name', 'Justin' );
		 * 
		 * ## ATTR_NAME events
		 * 
		 * When a attribute value is changed, an event with the name of the attribute
		 * is triggered on the observable with the new value and old value as 
		 * parameters. For example:
		 * 
		 *     o = new can.Observe({ name: 'Payal' });
		 *     o.bind( 'name', function( ev, newVal, oldVal ) {
		 *       // ev    -> {type : "name"}
		 *       // newVal-> "Justin"
		 *       // oldVal-> "Payal"
		 *     });
		 *     
		 *     o.attr( 'name', 'Justin' );
		 * 
		 * 
		 * @param {String} eventType the event name.  Currently,
		 * only `'change'`  and `ATTR_NAME` events are supported. 
		 * 
		 * @param {Function} handler(event, attr, how, newVal, oldVal) A 
		 * callback function where
		 * 
		 *   - event - the event
		 *   - attr - the name of the attribute changed
		 *   - how - how the attribute was changed (add, set, remove)
		 *   - newVal - the new value of the attribute
		 *   - oldVal - the old value of the attribute
		 * 
		 * @return {can.Observe} the observe for chaining.
		 */
		bind: can.bindAndSetup,
		/**
		 * @function unbind
		 * Unbinds an event listener.  This works similar to jQuery's unbind.  This means you can 
		 * use namespaces or unbind all event handlers for a given event:
		 * 
		 *     // unbind a specific event handler
		 *     o.unbind( 'change', handler );
		 *     
		 *     // unbind all change event handlers bound with the
		 *     // foo namespace
		 *     o.unbind( 'change.foo' );
		 *     
		 *     // unbind all change event handlers
		 *     o.unbind( 'change' );
		 * 
		 * @param {String} eventType - the type of event with
		 * any optional namespaces. 
		 * 
		 * @param {Function} [handler] - The original handler function passed
		 * to [can.Observe.prototype.bind bind].
		 * 
		 * @return {can.Observe} the original observe for chaining.
		 */
		unbind: can.unbindAndTeardown,
		/**
		 * @hide
		 * Get the serialized Object form of the observe.  Serialized
		 * data is typically used to send back to a server.
		 * 
		 *     o.serialize() //-> { name: 'Justin' }
		 *     
		 * Serialize currently returns the same data 
		 * as [can.Observe.prototype.attrs].  However, in future
		 * versions, serialize will be able to return serialized
		 * data similar to [can.Model].  The following will work:
		 * 
		 *     new Observe({time: new Date()})
		 *       .serialize() //-> { time: 1319666613663 }
		 * 
		 * @return {Object} a JavaScript Object that can be 
		 * serialized with `JSON.stringify` or other methods. 
		 * 
		 */
		serialize: function() {
			return serialize(this, 'serialize', {});
		},
		/**
		 * @hide
		 * Set multiple properties on the observable
		 * @param {Object} props
		 * @param {Boolean} remove true if you should remove properties that are not in props
		 */
		_attrs: function( props, remove ) {

			if ( props === undefined ) {
				return serialize(this, 'attr', {})
			}

			props = can.extend({}, props);
			var prop,
				self = this,
				newVal;
			Observe.startBatch();
			this.each(function(curVal, prop){
				newVal = props[prop];

				// If we are merging...
				if ( newVal === undefined ) {
					remove && self.removeAttr(prop);
					return;
				}
				
				if(self.__convert){
					newVal = self.__convert(prop, newVal)
				}

				// if we're dealing with models, want to call _set to let converter run
				if( newVal instanceof can.Observe ) {
					self.__set(prop, newVal, curVal)
				// if its an object, let attr merge
				} else if ( canMakeObserve(curVal) && canMakeObserve(newVal) && curVal.attr ) {
					curVal.attr(newVal, remove)
				// otherwise just set
				} else if ( curVal != newVal ) {
					self.__set(prop, newVal, curVal)
				}

				delete props[prop];
			})
			// Add remaining props.
			for ( var prop in props ) {
				newVal = props[prop];
				this._set(prop, newVal, true)
			}
			Observe.stopBatch()
			return this;
		},

		/**
		 * `compute(prop)` returns a [can.compute] bound to the given property:
		 *
		 *      var obs = new can.Observe({
		 *          name : 'David'
		 *      });
		 *
		 *      var name = obs.compute('name');
		 *
		 *      name.bind('change', function(ev, newName, oldName) {
		 *          console.log('Name changed from ' + oldName + ' to ' + newName);
		 *      });
		 *
		 *      name() // -> "David"
		 *
		 *      obs.attr('name', 'Curtis');
		 *      name() // -> "Curtis"
		 *
		 *      name("Justin");
		 *      name() // -> "Justin"
		 *      obs.attr('name') // -> Justin
		 *
		 * @param prop The name of the property
		 * @return {can.compute} A can.compute instance
		 */
		compute: function(prop) {
			return can.compute(this,prop);
		}
	});
	// Helpers for `observable` lists.
	/**
	 * @class can.Observe.List
	 * @inherits can.Observe
	 * @parent canjs
	 * 
	 * `new can.Observe.List([items])` provides the observable pattern for JavaScript arrays.  It lets you:
	 * 
	 *   - change the structure of an array
	 *   - listen to changes in the array
	 * 
	 * ## Creating an observe list
	 * 
	 * To create an observable list, use `new can.Observe.List( ARRAY )` like:
	 * 
	 *     var hobbies = new can.Observe.List(
	 * 		 			['programming', 'basketball', 'nose picking'])
	 * 
	 * can.Observe.List inherits from [can.Observe], including it's 
	 * [can.Observe.prototype.bind bind], [can.Observe.prototype.each each], and [can.Observe.prototype.unbind unbind] 
	 * methods.
	 * 
	 * can.Observe.List is inherited by [can.Model.List].
	 * 
	 * ## Getting and Setting Properties
	 * 
	 * Similar to an array, use the index operator to access items of a list:
	 * 
	 * 
	 *     list = new can.Observe.List(["a","b"])
	 *     list[1] //-> "b"
	 * 
	 * Or, use the `attr( PROPERTY )` method like:
	 * 
	 *     list = new can.Observe.List(["a","b"])
	 *     list.attr(1)  //-> "b"
	 *
	 * __WARNING:__ while using the index operator with [] is possible, 
	 * it should be noted that changing properties of objects that way
	 * will not call bound events to the observed list that would let
	 * it know that an object in the list has changed. In almost every
	 * case you will use [can.Model.static.findAll findAll].
	 * 
	 * Using the 'attr' method lets Observe know you accessed the 
	 * property. This is used by [can.EJS] for live-binding.
	 * 
	 * Get back a js Array with `attr()`:
	 * 
	 *     list = new can.Observe.List(["a","b"])
	 *     list.attr()  //-> ["a","b"]
	 * 
	 * Change the structure of the array with:
	 * 
	 *    - [can.Observe.List::attr attr]
	 *    - [can.Observe.List::pop pop]
	 *    - [can.Observe.List::push push]
	 *    - [can.Observe.List::shift shift]
	 *    - [can.Observe.List::unshift unshift]
	 *    - [can.Observe.List::splice splice]
	 * 
	 * ## Events
	 * 
	 * When an item is added, removed, or updated in a list, it triggers
	 * events that can be [can.Observe::bind bind]ed to for changes.
	 * 
	 * There are 5 types of events: add, remove, set, length, and change.
	 * 
	 * ### add events
	 * 
	 * Add events are fired when items are added to the list. Listen 
	 * to them like:
	 * 
	 *     list.bind("add", handler(ev, newVals, index) )
	 * 
	 * where:
	 * 
	 *  - `newVals` - the values added to the list
	 *  - `index` - where the items were added
	 * 
	 * ### remove events
	 * 
	 * Removes events are fired when items are removed from the list. Listen 
	 * to them like:
	 * 
	 *     list.bind("remove", handler(ev, oldVals, index) )
	 * 
	 * where:
	 * 
	 *   - `oldVals` - the values removed from the list
	 *   - `index` - where the items were removed
	 * 
	 * ### set events
	 * 
	 * Set events happen when an item in the list is updated. Listen to 
	 * these events with:
	 * 
	 *     list.bind("set", handler(ev, newVal, index) )
	 * 
	 * where:
	 * 
	 *   - `newVal` - the new value at index
	 *   - `index` - where the items were removed
	 * 
	 * ### length events
	 * 
	 * Anytime the length is changed a length attribute event is
	 * fired.
	 * 
	 *     list.bind("length", handler(ev, length) )
	 * 
	 * where:
	 * 
	 * - `length` - the new length of the array.
	 * 
	 * ### change events
	 * 
	 * Change events are fired when any type of change 
	 * happens on the array.  They get called with:
	 * 
	 *     .bind("change", handler(ev, attr, how, newVal, oldVal) )
	 * 
	 * Where:
	 * 
	 *   - `attr` - the index of the item changed
	 *   - `how` - how the item was changed (add, remove, set)
	 *   - `newVal` - For set, a single item. For add events, an array 
	 *     of items. For remove event, undefined.
	 *   - `oldVal` - the old values at `attr`.
	 * 
	 * @constructor Creates a new observable list from an array
	 * 
	 * @param {Array} [items...] the array of items to create the list with
	 */
	var splice = [].splice,
		list = Observe(
	/**
	 * @prototype
	 */
	{
		setup: function( instances, options ) {
			this.length = 0;
			can.cid(this, ".observe")
			this._init = 1;
			if( can.isDeferred(instances) ) {
				this.replace(instances)
			} else {
				this.push.apply(this, can.makeArray(instances || []));
			}
			// this change needs to be ignored
			this.bind('change'+this._cid,can.proxy(this._changes,this));
			can.extend(this, options);
			delete this._init;
		},
		_triggerChange: function(attr, how, newVal, oldVal){
			
			Observe.prototype._triggerChange.apply(this,arguments)
			// `batchTrigger` direct add and remove events...
			if ( !~ attr.indexOf('.')){
				
				if( how === 'add' ) {
					Observe.triggerBatch(this, how, [newVal,+attr]);
					Observe.triggerBatch(this,'length',[this.length]);
				} else if( how === 'remove' ) {
					Observe.triggerBatch(this, how, [oldVal, +attr]);
					Observe.triggerBatch(this,'length',[this.length]);
				} else {
					Observe.triggerBatch(this,how,[newVal, +attr])
				}
				
			}
			
		},
		__get : function(attr){
			return attr ? this[attr] : this;
		},
		___set : function(attr, val){
			this[attr] = val;
			if(+attr >= this.length){
				this.length = (+attr+1)
			}
		},
		_each: function(callback){
			var data = this.__get();
			for(var i =0; i < data.length; i++){
				callback(data[i],i)
			}
		},
		_bindsetup: makeBindSetup("*"),
		// Returns the serialized form of this list.
		/**
		 * @hide
		 * Returns the serialized form of this list.
		 */
		serialize: function() {
			return serialize(this, 'serialize', []);
		},
		/**
		 * Iterates through each item of the list, calling handler 
		 * with each index and value.
		 * 
		 *     new Observe.List(['a'])
		 *       .each(function( value , index ){
		 *         equals(index, 1)
		 *         equals(value,'a')
		 *       })
		 * 
		 * @param {function} handler(value,index) A function that will get 
		 * called back with the index and value of each item on the list.
		 * 
		 * Returning `false` breaks the looping.  The following will never
		 * log 'c':
		 * 
		 *     new Observe(['a','b','c'])
		 *       .each(function(value, index){
		 *         console.log(value)
		 *         if(index == 1){
		 *           return false;
		 *         }
		 *       })
		 * 
		 * @return {can.Observe.List} the original observable.
		 */
		//  
		/**
		 * `splice(index, [ howMany, elements... ] )` remove or add items 
		 * from a specific point in the list.
		 * 
		 * ### Example
		 * 
		 * The following creates a list of numbers and replaces 2 and 3 with
		 * "a", and "b".
		 * 
		 *     var list = new can.Observe.List([0,1,2,3]);
		 *     
		 *     list.splice(1,2, "a", "b"); // results in [0,"a","b",3]
		 *     
		 * This creates 2 change events.  The first event is the removal of 
		 * numbers one and two where it's callback is 
		 * `bind('change', function( ev, attr, how, newVals, oldVals, where ) )`
		 * and it's values are:
		 * 
		 *   - attr - "1" - indicates where the remove event took place
		 *   - how - "remove"
		 *   - newVals - undefined
		 *   - oldVals - [1,2] -the array of removed values
		 *   - where - 1 - the location of where these items were removed
		 * 
		 * The second change event is the addition of the "a", and "b" values where 
		 * the callback values will be:
		 * 
		 *   - attr - "1" - indicates where the add event took place
		 *   - how - "added"
		 *   - newVals - ["a","b"]
		 *   - oldVals - [1, 2] - the array of removed values
		 *   - where - 1 - the location of where these items were added
		 * 
		 * @param {Number} index where to start removing or adding items
		 * @param {Object} [howMany=0] the number of items to remove
		 * @param {Object} [elements...] items to add to the array
		 */
		splice: function( index, howMany ) {
			var args = can.makeArray(arguments),
				i;

			for ( i = 2; i < args.length; i++ ) {
				var val = args[i];
				if ( canMakeObserve(val) ) {
					args[i] = hookupBubble(val, "*", this, this.constructor.Observe, this.constructor)
				}
			}
			if ( howMany === undefined ) {
				howMany = args[1] = this.length - index;
			}
			var removed = splice.apply(this, args);
			can.Observe.startBatch();
			if ( howMany > 0 ) {
				this._triggerChange(""+index, "remove", undefined, removed);
				unhookup(removed, this._cid);
			}
			if ( args.length > 2 ) {
				this._triggerChange(""+index, "add", args.slice(2), removed);
			}
			can.Observe.stopBatch();
			return removed;
		},
		/**
		 * @function attr
		 * Gets or sets an item or items in the observe list.  Examples:
		 * 
		 *     list = new can.Observe.List(["a","b","c"]);
		 *      
		 *     // sets an array item
		 *     list.attr(3,'d')
		 *     
		 *     // read an array's item
		 *     list.attr(3) //-> 'd'
		 * 
		 *     // merge array's properties
		 *     list.attr( ["b","BOO"] )
		 * 
		 *     // get properties
		 *     o.attr()           //-> ["b","BOO","c","d"]
		 *     
		 *     // set array
		 *     o.attr(["item"])
		 *     o.attr() //-> ["item"]
		 * 
		 * ## Setting Properties
		 * 
		 * `attr( array , true )` updates the list to look like array.  For example:
		 * 
		 *     list = new can.Observe.List(["a","b","c"])
		 *     list.attr(["foo"], true)
		 *     
		 *     list.attr() //-> ["foo"]
		 * 
		 * 
		 * When the array is changed, it produces events that detail the changes
		 * in the list. They are listed in the
		 * order they are produced for the above example:
		 * 
		 *   1. `.bind( "change", handler(ev, attr, how, newVal, oldVal) )` where:
		 *       
		 *      - ev = {type: "change"}
		 *      - attr = "0"
		 *      - how = "set"
		 *      - newVal = "foo"
		 *      - oldVal = "a"
		 * 
		 *   2. `.bind( "set", handler(ev, newVal, index) )` where:
		 *       
		 *      - ev = {type: "set"}
		 *      - newVal = "foo"
		 *      - index = 0
		 * 
		 *   3. `.bind( "change", handler(ev, attr, how, newVal, oldVal) )` where:
		 *       
		 *      - ev = {type: "change"}
		 *      - attr = "1"
		 *      - how = "remove"
		 *      - newVal = undefined
		 *      - oldVal = ["b","c"]
		 * 
		 *   4. `.bind( "remove", handler(ev, newVal, index) )` where:
		 *       
		 *      - ev = {type: "remove"}
		 *      - newVal = undefined
		 *      - index = 1
		 * 
		 *   5. `.bind( "length", handler(ev, length) )` where:
		 *       
		 *      - ev = {type: "length"}
		 *      - length = 1
		 * 
		 * In general, it is possible to listen to events and reproduce the
		 * changes in a facsimile of the list.  This is useful for implementing 
		 * high-performance widgets that need to reflect the contents of the list without
		 * redrawing the entire list.  Here's an example of how that would look:
		 * 
		 *     list.bind("set", function(ev, newVal, index){
		 * 	     // update the item at index with newVal
		 *     }).bind("remove", function(ev, oldVals, index){
		 * 	     // remove oldVals.length items at index
		 *     }).bind("add", function(ev, newVals, index){
		 *       // insert newVals at index
		 *     })
		 * 
		 * `attr( array )` merges items into the beginning of the array.  For example:
		 * 
		 *     list = new can.Observe.List(["a","b"])
		 *     list.attr(["foo"])
		 *     
		 *     list.attr() //-> ["foo","b"]
		 * 
		 * `attr( INDEX, VALUE )` sets or updates an item at `INDEX`.  Example:
		 * 
		 *     list.attr(0, "ITEM")
		 * 
		 * ## Reading Properties
		 * 
		 * `attr()` returns the lists content as an array.  For example:
		 * 
		 *      list = new can.Observe.List(["a", {foo: "bar"}])
		 *      list.attr()  //-> ["a", {foo: "bar"}]
		 * 
		 * `attr( INDEX )` reads a property at `INDEX` like:
		 * 
		 *      list = new can.Observe.List(["a", {foo: "bar"}])
		 *      list.attr(0)  //-> "a",
		 * 
		 * @param {Array|Number} items
		 * @param {Boolean|Object} {optional:remove} 
		 * @return {list|Array} returns the props on a read or the observe
		 * list on a write.
		 */
		_attrs: function( items, remove ) {
			if ( items === undefined ) {
				return serialize(this, 'attr', []);
			}

			// Create a copy.
			items = can.makeArray( items );

      		Observe.startBatch();
			this._updateAttrs(items, remove);
			Observe.stopBatch()
		},

	    _updateAttrs : function( items, remove ){
	      var len = Math.min(items.length, this.length);
	
	      for ( var prop = 0; prop < len; prop++ ) {
	        var curVal = this[prop],
	          newVal = items[prop];
	
	        if ( canMakeObserve(curVal) && canMakeObserve(newVal) ) {
	          curVal.attr(newVal, remove)
	        } else if ( curVal != newVal ) {
	          this._set(prop, newVal)
	        } else {
	
	        }
	      }
	      if ( items.length > this.length ) {
	        // Add in the remaining props.
	        this.push.apply( this, items.slice( this.length ) );
	      } else if ( items.length < this.length && remove ) {
	        this.splice(items.length)
	      }
	    }
	}),


		// Converts to an `array` of arguments.
		getArgs = function( args ) {
			return args[0] && can.isArray(args[0]) ?
				args[0] :
				can.makeArray(args);
		};
	// Create `push`, `pop`, `shift`, and `unshift`
	can.each({
		/**
		 * @function push
		 * Add items to the end of the list.
		 * 
		 *     var list = new can.Observe.List([]);
		 *     
		 *     list.attr() // -> []
		 *     
		 *     list.bind('change', function( 
		 *         ev,        // the change event
		 *         attr,      // the attr that was changed,
		 *     			   // for multiple items, "*" is used 
		 *         how,       // "add"
		 *         newVals,   // an array of new values pushed
		 *         oldVals,   // undefined
		 *         where      // the location where these items were added
		 *         ) {
		 *     
		 *     })
		 *     
		 *     list.push('0','1','2'); 
		 *     list.attr() // -> ['0', '1', '2']
		 * 
		 * If you have 2 lists that you wish to merge the contents of,
		 * simply doing a push will push the source list as a new entry
		 * in the list rather than merging it.  Instead do:
		 * 
		 * 	var target = new can.Observe.List([ 1, 2, 3 ]);
		 * 	var source = new can.Observe.List([ 4, 5, 6 ]);
		 * 
		 * 	source.push.apply(source, target); //-> [ 1, 2, 3, 4, 5, 6 ]
		 * 
		 * @return {Number} the number of items in the array
		 */
		push: "length",
		/**
		 * @function unshift
		 * Add items to the start of the list.  This is very similar to
		 * [can.Observe.List::push can.Observe.prototype.List].  Example:
		 * 
		 *     var list = new can.Observe.List(["a","b"]);
		 *     list.unshift(1,2,3) //-> 5
		 *     .attr() //-> [1,2,3,"a","b"]
		 * 
		 * @param {Object} [items...] items to add to the start of the list.
		 * @return {Number} the length of the array.
		 */
		unshift: 0
	},
	// Adds a method
	// `name` - The method name.
	// `where` - Where items in the `array` should be added.
	function( where, name ) {
		var orig = [][name]
		list.prototype[name] = function() {
			// Get the items being added.
			var args = [],
				// Where we are going to add items.
				len = where ? this.length : 0,
				i = arguments.length,
				res,
				val,
				constructor = this.constructor;

			// Go through and convert anything to an `observe` that needs to be converted.
			while(i--){
				val = arguments[i];
				args[i] =  canMakeObserve(val) ?
					hookupBubble(val, "*", this, this.constructor.Observe, this.constructor) :
					val;
			}
			
			// Call the original method.
			res = orig.apply(this, args);

			if ( !this.comparator || args.length ) {

				this._triggerChange(""+len, "add", args, undefined);
			}
						
			return res;
		}
	});

	can.each({
		/**
		 * @function pop
		 * 
		 * Removes an item from the end of the list. Example:
		 * 
		 *     var list = new can.Observe.List([0,1,2]);
		 *     list.pop() //-> 2;
		 *     list.attr() //-> [0,1]
		 * 
		 * This produces a change event like
		 * 
		 *     list.bind('change', function( 
		 *         ev,        // the change event
		 *         attr,      // the attr that was changed, 
		 *     			   // for multiple items, "*" is used 
		 *         how,       // "remove"
		 *         newVals,   // undefined
		 *         oldVals,   // 2
		 *         where      // the location where these items were added
		 *         ) {
		 *     
		 *     })
		 * 
		 * @return {Object} the element at the end of the list or undefined if the
		 * list is empty.
		 */
		pop: "length",
		/**
		 * @function shift
		 * Removes an item from the start of the list.  This is very similar to
		 * [can.Observe.List::pop]. Example:
		 * 
		 *     var list = new can.Observe.List([0,1,2]);
		 *     list.shift() //-> 0;
		 *     list.attr() //-> [1,2]
		 * 
		 * @return {Object} the element at the start of the list
		 */
		shift: 0
	},
	// Creates a `remove` type method
	function( where, name ) {
		list.prototype[name] = function() {
			
			var args = getArgs(arguments),
				len = where && this.length ? this.length - 1 : 0;


			var res = [][name].apply(this, args)

			// Create a change where the args are
			// `*` - Change on potentially multiple properties.
			// `remove` - Items removed.
			// `undefined` - The new values (there are none).
			// `res` - The old, removed values (should these be unbound).
			// `len` - Where these items were removed.
			this._triggerChange(""+len, "remove", undefined, [res])

			if ( res && res.unbind ) {
				res.unbind("change" + this._cid)
			}
			return res;
		}
	});
	
	can.extend(list.prototype, {
		/**
		 * @function indexOf
		 * `indexOf(item)` returns the position of the item in the array.  Returns -1 if the
		 * item is not in the array.  Examples:
		 *
		 *     list = new can.Observe.List(["a","b","c"]);
		 *     list.indexOf("b") //-> 1
		 *     list.indexOf("f") //-> -1
		 *
		 * @param {Object} item the item to look for
		 * @return {Number} the index of the object in the array or -1.
		 */
		indexOf: function(item) {
			this.attr('length')
			return can.inArray(item, this)
		},

		/**
		 * @function join
		 *
		 * `join(separator)` joins the string representation of all elements into a string.
		 *
		 *      list = new can.Observe.List(["a","b","c"]);
		 *      list.join(',') // -> "a, b, c"
		 *
		 * [MDN reference](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/join)
		 *
		 * @param {String} separator The element separator
		 * @return {String} The joined string
		 */
		join : [].join,
		
		/**
		 * @function reverse
		 * 
		 * `reverse()` method transposes the elements of the calling array object in place, 
		 * mutating the array, and returning a reference to the array.
		 * 
		 * 	list = new can.Observe.List(["a","b","c"]);
		 *      list.reverse() // -> ["c", "b", "a"]
		 * 
		 * [MDN reference](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/reverse)
		 * 
		 * @return {Array} reversed array
		 */
		reverse: [].reverse,

		/**
		 * @function slice
		 *
		 * `slice(start [, end])` creates a flat copy of a section of the observable list and returns
		 * a new observable list.
		 *
		 * [MDN reference](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/slice)
		 *
		 * @param {Integer} start The beginning index of the section to extract.
		 * @param {Integer} [end] The end index of the section to extract.
		 * @return {can.Observe.List} The sliced list
		 */
		slice : function() {
			var temp = Array.prototype.slice.apply(this, arguments);
			return new this.constructor( temp );
		},

		/**
		 * @function concat
		 *
		 * `concat(args...)` returns a new can.Observe.List comprised of this list joined with other
		 * array(s), value(s) and can.Observe.Lists.
		 *
		 * [MDN reference](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/concat)
		 *
		 * @param {Array|can.Observe.List} args... One or more arrays or observable lists to concatenate
		 * @return {can.Observe.List} The concatenated list
		 */
		concat : function() {
			var args = [];
			can.each( can.makeArray( arguments ), function( arg, i ) {
				args[i] = arg instanceof can.Observe.List ? arg.serialize() : arg ;
			});
			return new this.constructor(Array.prototype.concat.apply(this.serialize(), args));
		},

		/**
		 * @function forEach
		 *
		 * `forEach(callback [, thisarg])` calls a function for each element in the list.
		 *
		 * > Note that [each can.Observe.each] will iterate over the actual properties.
		 *
		 * [MDN reference](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach)
		 *
		 * @param {Function} callback The callback to execute.
		 * It gets passed the element and the index in the list.
		 * @param {Object} [thisarg] Object to use as `this` when executing `callback`
		 */
		forEach : function( cb, thisarg ) {
			can.each(this, cb, thisarg || this );
		},

		/**
		 * @function replace
		 *
		 * `replace([newList]) replaces the current list with another array,
		 * can.Observe.List or a Deferred that resolves to a list:
		 *
		 *      var list = new can.Observe.List('a','b','c');
		 *      list.replace(['x', 'y']); // -> Fires `remove` and `add` event
		 *      list.serialize() // -> ['x', 'y']
		 *
		 * This allows you to initialize live-binding Controls like this:
		 *
		 *      can.Control({
		 *          init : function () {
		 *              this.list = new Recipe.List();
		 *              this.element.html(can.view('list.ejs', this.list));
		 *              this.list.replace(Recipe.findAll());
		 *          }
		 *      });
		 *
		 * Meaning that the list will be automatically populated once the Deferred returned by `Recipe.findAll()`
		 * resolves.
		 *
		 * @param {can.Observe.List|Array|can.Deferred} [newList] The new list to use. If not passed, the list
		 * will be emptied.
		 * @return {can.Observe.List} The current list
		 */
		replace : function(newList) {
			if(can.isDeferred(newList)) {
				newList.then(can.proxy(this.replace, this));
			} else {
				this.splice.apply(this, [0, this.length].concat(can.makeArray(newList || [])));
			}

			return this;
		}
	});

	can.List = Observe.List = list;
	Observe.setup = function(){
		can.Construct.setup.apply(this, arguments);
		// I would prefer not to do it this way. It should
		// be using the attributes plugin to do this type of conversion.
		this.List = Observe.List({ Observe : this }, {});
	}
	return Observe;
})(module["can/util/jquery/jquery.js"], module["can/util/bind/bind.js"], module["can/construct/construct.js"]);// ## can/model/model.js

module['can/model/model.js'] = (function( can ) {
	
	// ## model.js  
	// `can.Model`  
	// _A `can.Observe` that connects to a RESTful interface._
	//  
	// Generic deferred piping function
	/**
	 * @add can.Model
	 */
	var	pipe = function( def, model, func ) {
		var d = new can.Deferred();
		def.then(function(){
			var args = can.makeArray( arguments );
			args[0] = model[func](args[0]);
			d.resolveWith(d, args);
		},function(){
			d.rejectWith(this, arguments);
		});

		if(typeof def.abort === 'function') {
			d.abort = function() {
				return def.abort();
			}
		}

		return d;
	},
		modelNum = 0,
		ignoreHookup = /change.observe\d+/,
		getId = function( inst ) {
			// Instead of using attr, use __get for performance.
			// Need to set reading
			can.Observe.__reading && can.Observe.__reading(inst, inst.constructor.id)
			return inst.__get(inst.constructor.id);
		},
		// Ajax `options` generator function
		ajax = function( ajaxOb, data, type, dataType, success, error ) {

			var params = {};
			
			// If we get a string, handle it.
			if ( typeof ajaxOb == "string" ) {
				// If there's a space, it's probably the type.
				var parts = ajaxOb.split(/\s+/);
				params.url = parts.pop();
				if ( parts.length ) {
					params.type = parts.pop();
				}
			} else {
				can.extend( params, ajaxOb );
			}

			// If we are a non-array object, copy to a new attrs.
			params.data = typeof data == "object" && ! can.isArray( data ) ?
				can.extend(params.data || {}, data) : data;
	
			// Get the url with any templated values filled out.
			params.url = can.sub(params.url, params.data, true);

			return can.ajax( can.extend({
				type: type || "post",
				dataType: dataType ||"json",
				success : success,
				error: error
			}, params ));
		},
		makeRequest = function( self, type, success, error, method ) {
			var args;
			// if we pass an array as `self` it it means we are coming from
			// the queued request, and we're passing already serialized data
			// self's signature will be: [self, serializedData]
			if(can.isArray(self)){
				args = self[1];
				self = self[0];
			} else {
				args = self.serialize();
			}
			args = [args];
			var deferred,
				// The model.
				model = self.constructor,
				jqXHR;

			// `destroy` does not need data.
			if ( type == 'destroy' ) {
				args.shift();
			}
			// `update` and `destroy` need the `id`.
			if ( type !== 'create' ) {
				args.unshift(getId(self));
			}

			
			jqXHR = model[type].apply(model, args);
			
			deferred = jqXHR.pipe(function(data){
				self[method || type + "d"](data, jqXHR);
				return self;
			});

			// Hook up `abort`
			if(jqXHR.abort){
				deferred.abort = function(){
					jqXHR.abort();
				};
			}

			deferred.then(success,error);
			return deferred;
		},
	
	// This object describes how to make an ajax request for each ajax method.  
	// The available properties are:
	//		`url` - The default url to use as indicated as a property on the model.
	//		`type` - The default http request type
	//		`data` - A method that takes the `arguments` and returns `data` used for ajax.
	/** 
	 * @Static
	 */
	//
		/**
		 * @function bind
		 * `bind(eventType, handler(event, instance))` listens to
		 * __created__, __updated__, __destroyed__ events on all 
		 * instances of the model.
		 * 
		 *     Task.bind("created", function(ev, createdTask){
		 * 	     this //-> Task
		 *       createdTask.attr("name") //-> "Dishes"
		 *     })
		 *     
		 *     new Task({name: "Dishes"}).save();
		 * 
		 * @param {String} eventType The type of event.  It must be
		 * `"created"`, `"udpated"`, `"destroyed"`.
		 * 
		 * @param {Function} handler(event,instance) A callback function
		 * that gets called with the event and instance that was
		 * created, destroyed, or updated.
		 * 
		 * @return {can.Model} the model constructor function.
		 */
		// 
		/**
		 * @function unbind
		 * `unbind(eventType, handler)` removes a listener
		 * attached with [can.Model.bind].
		 * 
		 *     var handler = function(ev, createdTask){
		 * 	     
		 *     }
		 *     Task.bind("created", handler)
		 *     Task.unbind("created", handler)
		 * 
		 * You have to pass the same function to `unbind` that you
		 * passed to `bind`.
		 * 
		 * @param {String} eventType The type of event.  It must be
		 * `"created"`, `"udpated"`, `"destroyed"`.
		 * 
		 * @param {Function} handler(event,instance) A callback function
		 * that was passed to `bind`.
		 * 
		 * @return {can.Model} the model constructor function.
		 */
		// 
		/**
		 * @attribute id
		 * The name of the id field.  Defaults to 'id'. Change this if it is something different.
		 * 
		 * For example, it's common in .NET to use Id.  Your model might look like:
		 * 
		 *     Friend = can.Model({
		 *       id: "Id"
		 *     },{});
		 */
		/**
		 * @attribute removeAttr
		 * Sets whether model conversion should remove non existing attributes or merge with
		 * the existing attributes. The default is `false`.
		 * For example, if `Task.findOne({ id: 1 })` returns
		 *
		 *      { id: 1, name: 'Do dishes', index: 1, color: ['red', 'blue'] }
		 *
         * for the first request and
		 *
		 *      { id: 1, name: 'Really do dishes', color: ['green'] }
		 *
		 *  for the next request, the actual model attributes would look like:
		 *
		 *      { id: 1, name: 'Really do dishes', index: 1, color: ['green', 'blue'] }
		 *
		 *  Because the attributes of the original model and the updated model will
		 *  be merged. Setting `removeAttr` to `true` will result in model attributes like
		 *
		 *      { id: 1, name: 'Really do dishes', color: ['green'] }
		 *
		 */
	ajaxMethods = {
		/**
		 * @function create
		 * `create(attributes) -> Deferred` is used by [can.Model::save save] to create a 
		 * model instance on the server. 
		 * 
		 * ## Implement with a URL
		 * 
		 * The easiest way to implement create is to give it the url 
		 * to post data to:
		 * 
		 *     var Recipe = can.Model({
		 *       create: "/recipes"
		 *     },{})
		 *     
		 * This lets you create a recipe like:
		 *  
		 *     new Recipe({name: "hot dog"}).save();
		 * 
		 * 
		 * ## Implement with a Function
		 * 
		 * You can also implement create by yourself. Create gets called 
		 * with `attrs`, which are the [can.Observe::serialize serialized] model 
		 * attributes.  Create returns a `Deferred` 
		 * that contains the id of the new instance and any other 
		 * properties that should be set on the instance.
		 *  
		 * For example, the following code makes a request 
		 * to `POST /recipes.json {'name': 'hot+dog'}` and gets back
		 * something that looks like:
		 *  
		 *     { 
		 *       "id": 5,
		 *       "createdAt": 2234234329
		 *     }
		 * 
		 * The code looks like:
		 * 
		 *     can.Model("Recipe", {
		 *       create : function( attrs ){
		 *         return $.post("/recipes.json",attrs, undefined ,"json");
		 *       }
		 *     },{})
		 * 
		 * 
		 * @param {Object} attrs Attributes on the model instance
		 * @return {Deferred} A deferred that resolves to 
		 * an object with the id of the new instance and
		 * other properties that should be set on the instance.
		 */
		create : {
			url : "_shortName",
			type :"post"
		},
		/**
		 * @function update
		 * `update( id, attrs ) -> Deferred` is used by [can.Model::save save] to 
		 * update a model instance on the server. 
		 * 
		 * ## Implement with a URL
		 * 
		 * The easist way to implement update is to just give it the url to `PUT` data to:
		 * 
		 *     Recipe = can.Model({
		 *       update: "/recipes/{id}"
		 *     },{});
		 *     
		 * This lets you update a recipe like:
		 *  
		 *     Recipe.findOne({id: 1}, function(recipe){
		 *       recipe.attr('name','salad');
		 *       recipe.save();
		 *     })
		 * 
		 * This will make an XHR request like:
		 * 
		 *     PUT /recipes/1 
		 *     name=salad
		 *  
		 * If your server doesn't use PUT, you can change it to post like:
		 * 
		 *     $.Model("Recipe",{
		 *       update: "POST /recipes/{id}"
		 *     },{});
		 * 
		 * The server should send back an object with any new attributes the model 
		 * should have.  For example if your server udpates the "updatedAt" property, it
		 * should send back something like:
		 * 
		 *     // PUT /recipes/4 {name: "Food"} ->
		 *     {
		 *       updatedAt : "10-20-2011"
		 *     }
		 * 
		 * ## Implement with a Function
		 * 
		 * You can also implement update by yourself.  Update takes the `id` and
		 * `attributes` of the instance to be udpated.  Update must return
		 * a [can.Deferred Deferred] that resolves to an object that contains any 
		 * properties that should be set on the instance.
		 *  
		 * For example, the following code makes a request 
		 * to '/recipes/5.json?name=hot+dog' and gets back
		 * something that looks like:
		 *  
		 *     { 
		 *       updatedAt: "10-20-2011"
		 *     }
		 * 
		 * The code looks like:
		 * 
		 *     Recipe = can.Model({
		 *       update : function(id, attrs ) {
		 *         return $.post("/recipes/"+id+".json",attrs, null,"json");
		 *       }
		 *     },{});
		 * 
		 * 
		 * @param {String} id the id of the model instance
		 * @param {Object} attrs Attributes on the model instance
		 * @return {Deferred} A deferred that resolves to
		 * an object of attribute / value pairs of property changes the client doesn't already 
		 * know about. For example, when you update a name property, the server might 
		 * update other properties as well (such as updatedAt). The server should send 
		 * these properties as the response to updates.  
		 */
		update : {
			data : function(id, attrs){
				attrs = attrs || {};
				var identity = this.id;
				if ( attrs[identity] && attrs[identity] !== id ) {
					attrs["new" + can.capitalize(id)] = attrs[identity];
					delete attrs[identity];
				}
				attrs[identity] = id;
				return attrs;
			},
			type : "put"
		},
		/**
		 * @function destroy
		 * `destroy(id) -> Deferred` is used by [can.Model::destroy] remove a model 
		 * instance from the server.
		 * 
		 * ## Implement with a URL
		 * 
		 * You can implement destroy with a string like:
		 * 
		 *     Recipe = can.Model({
		 *       destroy : "/recipe/{id}"
		 *     },{})
		 * 
		 * And use [can.Model::destroy] to destroy it like:
		 * 
		 *     Recipe.findOne({id: 1}, function(recipe){
		 * 	      recipe.destroy();
		 *     });
		 * 
		 * This sends a `DELETE` request to `/thing/destroy/1`.
		 * 
		 * If your server does not support `DELETE` you can override it like:
		 * 
		 *     Recipe = can.Model({
		 *       destroy : "POST /recipe/destroy/{id}"
		 *     },{})
		 * 
		 * ## Implement with a function
		 * 
		 * Implement destroy with a function like:
		 * 
		 *     Recipe = can.Model({
		 *       destroy : function(id){
		 *         return $.post("/recipe/destroy/"+id,{});
		 *       }
		 *     },{})
		 * 
		 * Destroy just needs to return a deferred that resolves.
		 * 
		 * @param {String|Number} id the id of the instance you want destroyed
		 * @return {Deferred} a deferred that resolves when the model instance is destroyed.
		 */
		destroy : {
			type : "delete",
			data : function(id){
				var args = {};
				args.id = args[this.id] = id;
				return args;
			}
		},
		/**
		 * @function findAll
		 * `findAll( params, success(instances), error(xhr) ) -> Deferred` is used to retrieve model 
		 * instances from the server. Before you can use `findAll`, you must implement it.
		 * 
		 * ## Implement with a URL
		 * 
		 * Implement findAll with a url like:
		 * 
		 *     Recipe = can.Model({
		 *       findAll : "/recipes.json"
		 *     },{});
		 * 
		 * The server should return data that looks like:
		 * 
		 *     [
		 *       {"id" : 57, "name": "Ice Water"},
		 *       {"id" : 58, "name": "Toast"}
		 *     ]
		 * 
		 * ## Implement with an Object
		 * 
		 * Implement findAll with an object that specifies the parameters to
		 * `can.ajax` (jQuery.ajax) like:
		 * 
		 *     Recipe = can.Model({
		 *       findAll : {
		 *         url: "/recipes.xml",
		 *         dataType: "xml"
		 *       }
		 *     },{})
		 * 
		 * ## Implement with a Function
		 * 
		 * To implement with a function, `findAll` is passed __params__ to filter
		 * the instances retrieved from the server and it should return a
		 * deferred that resolves to an array of model data. For example:
		 * 
		 *     Recipe = can.Model({
		 *       findAll : function(params){
		 *         return $.ajax({
		 *           url: '/recipes.json',
		 *           type: 'get',
		 *           dataType: 'json'})
		 *       }
		 *     },{})
		 * 
		 * ## Use
		 * 
		 * After implementing `findAll`, you can use it to retrieve instances of the model
		 * like:
		 * 
		 *     Recipe.findAll({favorite: true}, function(recipes){
		 *       recipes[0].attr('name') //-> "Ice Water"
		 *     }, function( xhr ){
		 *       // called if an error
		 *     }) //-> Deferred
		 * 
		 * The following API details the use of `findAll`.
		 * 
		 * @param {Object} params data to refine the results.  An example might be passing {limit : 20} to
		 * limit the number of items retrieved.
		 * 
		 *     Recipe.findAll({limit: 20})
		 * 
		 * @param {Function} [success(items)] called with a [can.Model.List] of model 
		 * instances.  The model isntances are created from the Deferred's resolved data.
		 * 
		 *     Recipe.findAll({limit: 20}, function(recipes){
		 *       recipes.constructor //-> can.Model.List
		 *     })
		 * 
		 * @param {Function} error(xhr) `error` is called if the Deferred is rejected with the
		 * xhr handler.
		 * 
		 * @return {Deferred} a [can.Deferred Deferred] that __resolves__ to
		 * a [can.Model.List] of the model instances and __rejects__ to the XHR object.
		 * 
		 *     Recipe.findAll()
		 *           .then(function(recipes){
		 * 	
		 *           }, function(xhr){
		 * 	
		 *           })
		 */
		findAll : {
			url : "_shortName"
		},
		/**
		 * @function findOne
		 * `findOne( params, success(instance), error(xhr) ) -> Deferred` is used to retrieve a model 
		 * instance from the server. Before you can use `findOne`, you must implement it.
		 * 
		 * ## Implement with a URL
		 * 
		 * Implement findAll with a url like:
		 * 
		 *     Recipe = can.Model({
		 *       findOne : "/recipes/{id}.json"
		 *     },{});
		 * 
		 * If `findOne` is called like:
		 * 
		 *     Recipe.findOne({id: 57});
		 * 
		 * The server should return data that looks like:
		 * 
		 *     {"id" : 57, "name": "Ice Water"}
		 * 
		 * ## Implement with an Object
		 * 
		 * Implement `findOne` with an object that specifies the parameters to
		 * `can.ajax` (jQuery.ajax) like:
		 * 
		 *     Recipe = can.Model({
		 *       findOne : {
		 *         url: "/recipes/{id}.xml",
		 *         dataType: "xml"
		 *       }
		 *     },{})
		 * 
		 * ## Implement with a Function
		 * 
		 * To implement with a function, `findOne` is passed __params__ to specify
		 * the instance retrieved from the server and it should return a
		 * deferred that resolves to the model data.  Also notice that you now need to
		 * build the URL manually. For example:
		 * 
		 *     Recipe = can.Model({
		 *       findOne : function(params){
		 *         return $.ajax({
		 *           url: '/recipes/' + params.id,
		 *           type: 'get',
		 *           dataType: 'json'})
		 *       }
		 *     },{})
		 * 
		 * ## Use
		 * 
		 * After implementing `findOne`, you can use it to retrieve an instance of the model
		 * like:
		 * 
		 *     Recipe.findOne({id: 57}, function(recipe){
		 * 	     recipe.attr('name') //-> "Ice Water"
		 *     }, function( xhr ){
		 * 	     // called if an error
		 *     }) //-> Deferred
		 * 
		 * The following API details the use of `findOne`.
		 * 
		 * @param {Object} params data to specify the instance. 
		 * 
		 *     Recipe.findAll({id: 20})
		 *
		 * @param {Function} [success(item)] called with a model 
		 * instance.  The model isntance is created from the Deferred's resolved data.
		 * 
		 *     Recipe.findOne({id: 20}, function(recipe){
		 *       recipe.constructor //-> Recipe
		 *     })
		 * 
		 * @param {Function} error(xhr) `error` is called if the Deferred is rejected with the
		 * xhr handler.
		 * 
		 * @return {Deferred} a [can.Deferred Deferred] that __resolves__ to
		 * the model instance and __rejects__ to the XHR object.
		 * 
		 *     Recipe.findOne({id: 20})
		 *           .then(function(recipe){
		 * 	
		 *           }, function(xhr){
		 * 	
		 *           })
		 */
		findOne: {}
	},
		// Makes an ajax request `function` from a string.
		//		`ajaxMethod` - The `ajaxMethod` object defined above.
		//		`str` - The string the user provided. Ex: `findAll: "/recipes.json"`.
		ajaxMaker = function(ajaxMethod, str){
			// Return a `function` that serves as the ajax method.
			return function(data){
				// If the ajax method has it's own way of getting `data`, use that.
				data = ajaxMethod.data ? 
					ajaxMethod.data.apply(this, arguments) :
					// Otherwise use the data passed in.
					data;
				// Return the ajax method with `data` and the `type` provided.
				return ajax(str || this[ajaxMethod.url || "_url"], data, ajaxMethod.type || "get")
			}
		}


	
	
	can.Model = can.Observe({
		fullName: "can.Model",
		setup : function(base){
			// create store here if someone wants to use model without inheriting from it
			this.store = {};
			can.Observe.setup.apply(this, arguments);
			// Set default list as model list
			if(!can.Model){
				return;
			}
			this.List = ML({Observe: this},{});
			var self = this,
				clean = can.proxy(this._clean, self);
			
			
			// go through ajax methods and set them up
			can.each(ajaxMethods, function(method, name){
				// if an ajax method is not a function, it's either
				// a string url like findAll: "/recipes" or an
				// ajax options object like {url: "/recipes"}
				if ( ! can.isFunction( self[name] )) {
					// use ajaxMaker to convert that into a function
					// that returns a deferred with the data
					self[name] = ajaxMaker(method, self[name]);
				}
				// check if there's a make function like makeFindAll
				// these take deferred function and can do special
				// behavior with it (like look up data in a store)
				if (self["make"+can.capitalize(name)]){
					// pass the deferred method to the make method to get back
					// the "findAll" method.
					var newMethod = self["make"+can.capitalize(name)](self[name]);
					can.Construct._overwrite(self, base, name,function(){
						// increment the numer of requests
						this._reqs++;
						var def = newMethod.apply(this, arguments);
						var then = def.then(clean, clean);
						then.abort = def.abort;

						// attach abort to our then and return it
						return then;
					})
				}
			});

			if(self.fullName == "can.Model" || !self.fullName){
				self.fullName = "Model"+(++modelNum);
			}
			// Add ajax converters.
			this._reqs = 0;
			this._url = this._shortName+"/{"+this.id+"}"
		},
		_ajax : ajaxMaker,
		_makeRequest : makeRequest,
		_clean : function(){
			this._reqs--;
			if(!this._reqs){
				for(var id in this.store) {
					if(!this.store[id]._bindings){
						delete this.store[id];
					}
				}
			}
			return arguments[0];
		},
		/**
		 * `can.Model.models(data, xhr)` is used to 
		 * convert the raw response of a [can.Model.findAll] request 
		 * into a [can.Model.List] of model instances.  
		 * 
		 * This method is rarely called directly. Instead the deferred returned
		 * by findAll is piped into `models`.  This creates a new deferred that
		 * resolves to a [can.Model.List] of instances instead of an array of
		 * simple JS objects.
		 * 
		 * If your server is returning data in non-standard way,
		 * overwriting `can.Model.models` is the best way to normalize it.
		 * 
		 * ## Quick Example
		 * 
		 * The following uses models to convert to a [can.Model.List] of model
		 * instances.
		 * 
		 *     Task = can.Model({},{})
		 *     var tasks = Task.models([
		 *       {id: 1, name : "dishes", complete : false},
		 *       {id: 2, name: "laundry", compelte: true}
		 *     ])
		 *     
		 *     tasks.attr("0.complete", true)
		 * 
		 * ## Non-standard Services
		 * 
		 * `can.Model.models` expects data to be an array of name-value pair 
		 * objects like:
		 * 
		 *     [{id: 1, name : "dishes"},{id:2, name: "laundry"}, ...]
		 *     
		 * It can also take an object with additional data about the array like:
		 * 
		 *     {
		 *       count: 15000 //how many total items there might be
		 *       data: [{id: 1, name : "justin"},{id:2, name: "brian"}, ...]
		 *     }
		 * 
		 * In this case, models will return a [can.Model.List] of instances found in 
		 * data, but with additional properties as expandos on the list:
		 * 
		 *     var tasks = Task.models({
		 *       count : 1500,
		 *       data : [{id: 1, name: 'dishes'}, ...]
		 *     })
		 *     tasks.attr("name") // -> 'dishes'
		 *     tasks.count // -> 1500
		 * 
		 * ### Overwriting Models
		 * 
		 * If your service returns data like:
		 * 
		 *     {thingsToDo: [{name: "dishes", id: 5}]}
		 * 
		 * You will want to overwrite models to pass the base models what it expects like:
		 * 
		 *     Task = can.Model({
		 *       models : function(data){
		 *         return can.Model.models.call(this,data.thingsToDo);
		 *       }
		 *     },{})
		 * 
		 * `can.Model.models` passes each intstance's data to `can.Model.model` to
		 * create the individual instances.
		 * 
		 * @param {Array|Objects} instancesRawData An array of raw name - value pairs objects like:
		 * 
		 *      [{id: 1, name : "dishes"},{id:2, name: "laundry"}, ...]
		 * 
		 * Or an Object with a data property and other expando properties like:
		 * 
		 *     {
		 *       count: 15000 //how many total items there might be
		 *       data: [{id: 1, name : "justin"},{id:2, name: "brian"}, ...]
		 *     }
		 *
		 * @param {can.Observe.List} [oldList] If passed, updates oldList with the converted instancesRawData
		 * instead of returning a new model list.
		 * @return {Array} a [can.Model.List] of instances.  Each instance is created with
		 * [can.Model.model].
		 */
		models: function( instancesRawData, oldList ) {

			if ( ! instancesRawData ) {
				return;
			}
      
			if ( instancesRawData instanceof this.List ) {
				return instancesRawData;
			}

			// Get the list type.
			var self = this,
				tmp = [],
				res = oldList instanceof can.Observe.List ? oldList : new( self.List || ML),
				// Did we get an `array`?
				arr = can.isArray(instancesRawData),
				
				// Did we get a model list?
				ml = (instancesRawData instanceof ML),

				// Get the raw `array` of objects.
				raw = arr ?

				// If an `array`, return the `array`.
				instancesRawData :

				// Otherwise if a model list.
				(ml ?

				// Get the raw objects from the list.
				instancesRawData.serialize() :

				// Get the object's data.
				instancesRawData.data),
				i = 0;

			

			if(res.length) {
				res.splice(0);
			}

			can.each(raw, function( rawPart ) {
				tmp.push( self.model( rawPart ));
			});

			// We only want one change event so push everything at once
			res.push.apply(res, tmp);

			if ( ! arr ) { // Push other stuff onto `array`.
				can.each(instancesRawData, function(val, prop){
					if ( prop !== 'data' ) {
						res.attr(prop, val);
					}
				})
			}
			return res;
		},
		/**
		 * `can.Model.model(attributes)` is used to convert data from the server into
		 * a model instance.  It is rarely called directly.  Instead it is invoked as 
		 * a result of [can.Model.findOne] or [can.Model.findAll].  
		 * 
		 * If your server is returning data in non-standard way,
		 * overwriting `can.Model.model` is a good way to normalize it.
		 * 
		 * ## Example
		 * 
		 * The following uses `model` to convert to a model
		 * instance.
		 * 
		 *     Task = can.Model({},{})
		 *     var task = Task.model({id: 1, name : "dishes", complete : false})
		 *     
		 *     tasks.attr("complete", true)
		 * 
		 * `Task.model(attrs)` is very similar to simply calling `new Model(attrs)` except
		 * that it checks the model's store if the instance has already been created.  The model's 
		 * store is a collection of instances that have event handlers.  
		 * 
		 * This means that if the model's store already has an instance, you'll get the same instance
		 * back.  Example:
		 * 
		 *     // create a task
		 *     var taskA = new Task({id: 5, complete: true});
		 * 
		 *     // bind to it, which puts it in the store
		 * 	   taskA.bind("complete", function(){});
		 *     
		 *     // use model to create / retrieve a task
		 *     var taskB = Task.model({id: 5, complete: true});
		 *     
		 *     taskA === taskB //-> true
		 * 
		 * ## Non-standard Services
		 * 
		 * `can.Model.model` expects to retreive attributes of the model 
		 * instance like:
		 * 
		 * 
		 *     {id: 5, name : "dishes"}
		 *     
		 * 
		 * If the service returns data formatted differently, like:
		 * 
		 *     {todo: {name: "dishes", id: 5}}
		 * 
		 * Overwrite `model` like:
		 * 
		 *     Task = can.Model({
		 *       model : function(data){
		 *         return can.Model.model.call(this,data.todo);
		 *       }
		 *     },{});
		 * 
		 * @param {Object} attributes An object of property name and values like:
		 * 
		 *      {id: 1, name : "dishes"}
		 *
		 * @return {model} a model instance.
		 */
		model: function( attributes ) {
			if ( ! attributes ) {
				return;
			}
			if ( attributes instanceof this ) {
				attributes = attributes.serialize();
			}
			var id = attributes[ this.id ],
			    model = (id || id === 0) && this.store[id] ?
				    this.store[id].attr(attributes, this.removeAttr || false) : new this( attributes );
			if(this._reqs){
				this.store[attributes[this.id]] = model;
			}
			return model;
		}
	},
	/**
	 * @prototype
	 */
	{
		/**
		 * `isNew()` returns if the instance is has been created 
		 * on the server.  
		 * This is essentially if the [can.Model.id] property is null or undefined.
		 * 
		 *     new Recipe({id: 1}).isNew() //-> false
		 * @return {Boolean} false if an id is set, true if otherwise.
		 */
		isNew: function() {
			var id = getId(this);
			return ! ( id || id === 0 ); // If `null` or `undefined`
		},
		/**
		 * `model.save([success(model)],[error(xhr)])` creates or updates 
		 * the model instance using [can.Model.create] or
		 * [can.Model.update] depending if the instance
		 * [can.Model::isNew has an id or not].
		 * 
		 * ## Using `save` to create an instance.
		 * 
		 * If `save` is called on an instance that does not have 
		 * an [can.Model.id id] property, it calls [can.Model.create]
		 * with the instance's properties.  It also [can.trigger triggers]
		 * a "created" event on the instance and the model.
		 * 
		 *     // create a model instance
		 *     var todo = new Todo({name: "dishes"})
		 *     
		 *     // listen when the instance is created
		 *     todo.bind("created", function(ev){
		 * 	     this //-> todo
		 *     })
		 *     
		 *     // save it on the server
		 *     todo.save(function(todo){
		 * 	     console.log("todo", todo, "created")
		 *     });
		 * 
		 * ## Using `save` to update an instance.
		 * 
		 * If save is called on an instance that has 
		 * an [can.Model.id id] property, it calls [can.Model.create]
		 * with the instance's properties.  When the save is complete,
		 * it triggers an "updated" event on the instance and the instance's model.
		 * 
		 * Instances with an
		 * __id__ are typically retrieved with [can.Model.findAll] or
		 * [can.Model.findOne].  
		 * 
		 *  
		 *     // get a created model instance
		 *     Todo.findOne({id: 5},function(todo){
		 *       	     
		 *       // listen when the instance is updated
		 *       todo.bind("updated", function(ev){
		 * 	       this //-> todo
		 *       })
		 * 
		 *       // update the instance's property
		 *       todo.attr("complete", true)
		 *       
		 *       // save it on the server
		 *       todo.save(function(todo){
		 * 	       console.log("todo", todo, "updated")
		 *       });
		 * 
		 *     });
		 * 
		 * 
		 * @param {Function} [success(instance,data)]  Called if a successful save.
		 * 
		 * @param {Function} [error(xhr)] Called with (jqXHR) if the 
		 * save was not successful. It is passed the ajax request's jQXHR object.
		 * 
		 * @return {can.Deferred} a deferred that resolves to the instance
		 * after it has been created or updated.
		 */
		save: function( success, error ) {
			return makeRequest(this, this.isNew() ? 'create' : 'update', success, error);
		},
		/**
		 * Destroys the instance by calling 
		 * [Can.Model.destroy] with the id of the instance.
		 * 
		 *     recipe.destroy(success, error);
		 * 
		 * This triggers "destroyed" events on the instance and the 
		 * Model constructor function which can be listened to with
		 * [can.Model::bind] and [can.Model.bind]. 
		 * 
		 *     Recipe = can.Model({
		 *       destroy : "DELETE /services/recipes/{id}",
		 *       findOne : "/services/recipes/{id}"
		 *     },{})
		 *     
		 *     Recipe.bind("destroyed", function(){
		 *       console.log("a recipe destroyed");	
		 *     });
		 * 
		 *     // get a recipe
		 *     Recipe.findOne({id: 5}, function(recipe){
		 *       recipe.bind("destroyed", function(){
		 *         console.log("this recipe destroyed")	
		 *       })
		 *       recipe.destroy();
		 *     })
		 * 
		 * @param {Function} [success(instance)] called if a successful destroy
		 * @param {Function} [error(xhr)] called if an unsuccessful destroy
		 * @return {can.Deferred} a deferred that resolves with the destroyed instance
		 */
		destroy: function( success, error ) {
			if(this.isNew()) {
				var self = this;
				return can.Deferred().done(function(data) {
					self.destroyed(data)
				}).resolve(self);
			}
			return makeRequest(this, 'destroy', success, error, 'destroyed');
		},
		/**
		 * @function bind
		 * 
		 * `bind(eventName, handler(ev, args...) )` is used to listen
		 * to events on this model instance.  Example:
		 * 
		 *     Task = can.Model()
		 *     var task = new Task({name : "dishes"})
		 *     task.bind("name", function(ev, newVal, oldVal){})
		 * 
		 * Use `bind` the
		 * same as [can.Observe::bind] which should be used as
		 * a reference for listening to property changes.
		 * 
		 * Bind on model can be used to listen to when 
		 * an instance is:
		 * 
		 *  - created
		 *  - updated
		 *  - destroyed
		 * 
		 * like:
		 * 
		 *     Task = can.Model()
		 *     var task = new Task({name : "dishes"})
		 * 
		 *     task.bind("created", function(ev, newTask){
		 * 	     console.log("created", newTask)
		 *     })
		 *     .bind("updated", function(ev, updatedTask){
		 *       console.log("updated", updatedTask)
		 *     })
		 *     .bind("destroyed", function(ev, destroyedTask){
		 * 	     console.log("destroyed", destroyedTask)
		 *     })
		 * 
		 *     // create, update, and destroy
		 *     task.save(function(){
		 *       task.attr('name', "do dishes")
		 *           .save(function(){
		 * 	            task.destroy()
		 *           })
		 *     }); 
		 *     
		 * 
		 * `bind` also extends the inherited 
		 * behavior of [can.Observe::bind] to track the number
		 * of event bindings on this object which is used to store
		 * the model instance.  When there are no bindings, the 
		 * model instance is removed from the store, freeing memory.  
		 * 
		 */
		_bindsetup: function(){
			this.constructor.store[this.__get(this.constructor.id)] = this;
			return can.Observe.prototype._bindsetup.apply( this, arguments );
		},
		/**
		 * @function unbind
		 * `unbind(eventName, handler)` removes a listener
		 * attached with [can.Model::bind].
		 * 
		 *     var handler = function(ev, createdTask){
		 * 	     
		 *     }
		 *     task.bind("created", handler)
		 *     task.unbind("created", handler)
		 * 
		 * You have to pass the same function to `unbind` that you
		 * passed to `bind`.
		 * 
		 * Unbind will also remove the instance from the store
		 * if there are no other listeners.
		 * 
		 * @param {String} eventName The type of event.  
		 * 
		 * @param {Function} handler(event,args...) A callback function
		 * that was passed to `bind`.
		 * 
		 * @return {model} the model instance.
		 */
		_bindteardown: function(){
			delete this.constructor.store[getId(this)];
			return can.Observe.prototype._bindteardown.apply( this, arguments );;
		},
		// Change `id`.
		___set: function( prop, val ) {
			can.Observe.prototype.___set.call(this,prop, val)
			// If we add an `id`, move it to the store.
			if(prop === this.constructor.id && this._bindings){
				this.constructor.store[getId(this)] = this;
			}
		}
	});
	
	can.each({
		makeFindAll : "models",
		makeFindOne: "model",
		makeCreate: "model",
		makeUpdate: "model"
	}, function( method, name ) {
		can.Model[name] = function( oldMethod ) {
			return function() {
				var args = can.makeArray(arguments),
					oldArgs = can.isFunction( args[1] ) ? args.splice( 0, 1 ) : args.splice( 0, 2 ),
					def = pipe( oldMethod.apply( this, oldArgs ), this, method );
					def.then( args[0], args[1] );
				// return the original promise
				return def;
			};
		};
	});
				
		can.each([
	/**
	 * @function created
	 * @hide
	 * Called by save after a new instance is created.  Publishes 'created'.
	 * @param {Object} attrs
	 */
	"created",
	/**
	 * @function updated
	 * @hide
	 * Called by save after an instance is updated.  Publishes 'updated'.
	 * @param {Object} attrs
	 */
	"updated",
	/**
	 * @function destroyed
	 * @hide
	 * Called after an instance is destroyed.  
	 *   - Publishes "shortName.destroyed".
	 *   - Triggers a "destroyed" event on this model.
	 *   - Removes the model from the global list if its used.
	 * 
	 */
	"destroyed"], function( funcName ) {
		can.Model.prototype[funcName] = function( attrs ) {
			var stub, 
				constructor = this.constructor;

			// Update attributes if attributes have been passed
			stub = attrs && typeof attrs == 'object' && this.attr(attrs.attr ? attrs.attr() : attrs);
			
			// triggers change event that bubble's like
			// handler( 'change','1.destroyed' ). This is used
			// to remove items on destroyed from Model Lists.
			// but there should be a better way.
			can.trigger(this,"change",funcName)
			

			// Call event on the instance's Class
			can.trigger(constructor,funcName, this);
		};
	});
  
  // Model lists are just like `Observe.List` except that when their items are 
  // destroyed, it automatically gets removed from the list.
  /**
   * @class can.Model.List
   * @inherits can.Observe.List
   * @parent canjs
   *
   * Works exactly like [can.Observe.List] and has all of the same properties,
   * events, and functions as an observable list. The only difference is that 
   * when an item from the list is destroyed, it will automatically get removed
   * from the list.
   *
   * ## Creating a new Model List
   *
   * To create a new model list, just use `new {model_name}.List(ARRAY)` like:
   *
   *     var todo1 = new Todo( { name: "Do the dishes" } ),
   *         todo2 = new Todo( { name: "Wash floors" } )
   *     var todos = new Todo.List( [todo1, todo2] );
   *
   * ### Model Lists in `can.Model`
   * [can.Model.static.findAll can.Model.findAll] or [can.Model.models] will
   * almost always be used to return a `can.Model.List` object, even though it
   * is possible to create new lists like below:
   *
   *     var todos = Todo.models([
   *         new Todo( { name: "Do the dishes" } ),
   *         new Todo( { name: "Wash floors" } )
   *     ])
   *     
   *     todos.constructor // -> can.Model.List
   *
   *     // the most correct way to get a can.Model.List
   *     Todo.findAll({}, function(todos) {
   *         todos.constructor // -> can.Model.List
   *     })
   *
   * ### Extending `can.Model.List`
   *
   * Creating custom `can.Model.Lists` allows you to extend lists with helper
   * functions for a list of a specific type. So, if you wanted to be able to
   * see how many todos were completed and remaining something could be written
   * like:
   *
   *     Todo.List = can.Model.List({
   *         completed: function() {
   *             var completed = 0;
   *             this.each(function(i, todo) {
   *                 completed += todo.attr('complete') ? 1 : 0
   *             })
   *             return completed;
   *         },
   *         remaining: function() {
   *             return this.attr('length') - this.completed();
   *         }
   *     })
   *
   *     Todo.findAll({}, function(todos) {
   *         todos.completed() // -> 0
   *         todos.remaining() // -> 2
   *     });
   *
   * ## Removing models from model list
   *
   * The advantage that `can.Model.List` has over a traditional `can.Observe.List`
   * is that when you destroy a model, if it is in that list, it will automatically
   * be removed from the list. 
   *
   *     // Listen for when something is removed from the todos list.
   *     todos.bind("remove", function( ev, oldVals, indx ) {
   *         console.log(oldVals[indx].attr("name") + " removed")
   *     })
   *
   *     todo1.destroy(); // console shows "Do the dishes removed"
   *
   *
   */
	var ML = can.Model.List = can.Observe.List({
		setup: function(params){
			if( can.isPlainObject(params) && ! can.isArray(params) ){
				can.Observe.List.prototype.setup.apply(this);
				this.replace(this.constructor.Observe.findAll(params))
			} else {
				can.Observe.List.prototype.setup.apply(this,arguments);
			}
		},
		_changes: function(ev, attr){
			can.Observe.List.prototype._changes.apply(this, arguments );
			if(/\w+\.destroyed/.test(attr)){
				var index = this.indexOf(ev.target);
				if (index != -1) {
					this.splice(index, 1);
				}
			}
		}
	})

	return can.Model;
})(module["can/util/jquery/jquery.js"], module["can/observe/observe.js"]);// ## can/view/ejs/ejs.js

module['can/view/ejs/ejs.js'] = (function( can ) {
	// ## ejs.js
	// `can.EJS`  
	// _Embedded JavaScript Templates._

	// Helper methods.
	var extend = can.extend,
		EJS = function( options ) {
			// Supports calling EJS without the constructor
			// This returns a function that renders the template.
			if ( this.constructor != EJS ) {
				var ejs = new EJS(options);
				return function( data, helpers ) {
					return ejs.render(data, helpers);
				};
			}
			// If we get a `function` directly, it probably is coming from
			// a `steal`-packaged view.
			if ( typeof options == "function" ) {
				this.template = {
					fn: options
				};
				return;
			}
			// Set options on self.
			extend(this, options);
			this.template = this.scanner.scan(this.text, this.name);
		};

	/**
	 * @add can.EJS
	 */
	can.EJS = EJS;


	/**
	 * @Prototype
	 */
	EJS.prototype.
	/**
	 * @function render
	 * Renders an object with view helpers attached to the view.
	 * 
	 *     new can.EJS({text: "<%= message %>"}).render({
	 *       message: "foo"
	 *     },{helper: function(){ ... }})
	 *     
	 * @param {Object} object data to be rendered
	 * @param {Object} [extraHelpers] an object with view helpers
	 * @return {String} returns the result of the string
	 */
	render = function( object, extraHelpers ) {
		object = object || {};
		return this.template.fn.call(object, object, new EJS.Helpers(object, extraHelpers || {}));
	};
	
	extend(EJS.prototype, {
		/**
		 * @hide
		 * Singleton scanner instance for parsing templates.
		 */
		scanner: new can.view.Scanner({
			/**
			 * @hide
			 * An ordered token registry for the scanner.
			 * This needs to be ordered by priority to prevent token parsing errors.
			 * Each token is defined as: ["token-name", "string representation", "optional regexp override"]
			 */
			tokens: [
				["templateLeft", "<%%"], // Template
				["templateRight", "%>"], // Right Template
				["returnLeft", "<%=="], // Return Unescaped
				["escapeLeft", "<%="], // Return Escaped
				["commentLeft", "<%#"], // Comment
				["left", "<%"], // Run --- this is hack for now
				["right", "%>"], // Right -> All have same FOR Mustache ...
				["returnRight", "%>"]
			]
		})
	});

	/**
	 * @class can.EJS.Helpers
	 * @parent can.EJS
	 * By adding functions to can.EJS.Helpers.prototype, those functions will be available in the 
	 * views.
	 * 
	 * The following helper converts a given string to upper case:
	 * 
	 * 	can.EJS.Helpers.prototype.toUpper = function(params)
	 * 	{
	 * 		return params.toUpperCase();
	 * 	}
	 * 
	 * Use it like this in any EJS template:
	 * 
	 * 	<%= toUpper('javascriptmvc') %>
	 * 
	 * To access the current DOM element return a function that takes the element as a parameter:
	 * 
	 * 	can.EJS.Helpers.prototype.upperHtml = function(params)
	 * 	{
	 * 		return function(el) {
	 * 			$(el).html(params.toUpperCase());
	 * 		}
	 * 	}
	 * 
	 * In your EJS view you can then call the helper on an element tag:
	 * 
	 * 	<div <%= upperHtml('javascriptmvc') %>></div>
	 * 
	 * 
	 * @constructor Creates a view helper.  This function 
	 * is called internally.  You should never call it.
	 * @param {Object} data The data passed to the 
	 * view.  Helpers have access to it through this._data
	 */
	EJS.Helpers = function( data, extras ) {
		this._data = data;
		this._extras = extras;
		extend(this, extras);
	};

	EJS.Helpers.prototype = {
		/**
		 * `can.EJS.Helpers.list` iterates over an observable list and
		 * sets up live binding. `list` takes a list of observables and a callback 
		 * function with the signature `callback( currentItem, index, itemList )`
		 *
		 * Typically, this will look like:
		 *
		 *     <% list(items, function(item){ %>
		 *          <li><%= item.attr('name') %></li>
		 *     <% }) %>
		 *
		 * Whenever the list of observables changes, such as when an item is added or removed, 
		 * the EJS view will redraw the list in the DOM.
		 */
		// TODO Deprecated!!
		list : function(list, cb){
			
			can.each(list, function(item, i){
				cb(item, i, list)
			})
		},
		each: function(list, cb){
			// Normal arrays don't get live updated
			if (can.isArray(list)) {
				this.list(list, cb);
			}
			else {
				can.view.lists(list, cb);
			}
		}
	};

	// Options for `steal`'s build.
	can.view.register({
		suffix: "ejs",
		// returns a `function` that renders the view.
		script: function( id, src ) {
			return "can.EJS(function(_CONTEXT,_VIEW) { " + new EJS({
				text: src,
				name: id
			}).template.out + " })";
		},
		renderer: function( id, text ) {
			return EJS({
				text: text,
				name: id
			});
		}
	});

	return can;
})(module["can/util/jquery/jquery.js"], module["can/view/view.js"], module["can/util/string/string.js"], module["can/observe/compute/compute.js"], module["can/view/scanner.js"], module["can/view/render.js"]);// ## can/observe/attributes/attributes.js

module['can/observe/attributes/attributes.js'] = (function(can, Observe) {

can.each([ can.Observe, can.Model ], function(clss){
	// in some cases model might not be defined quite yet.
	if(clss === undefined){
		return;
	}
	var isObject = function( obj ) {
		return typeof obj === 'object' && obj !== null && obj;
	};
	
	can.extend(clss, {
		/**
		 * @attribute can.Observe.static.attributes
		 * @parent can.Observe.static
		 *
		 * `can.Observe.attributes` is a property that contains key/value pair(s) of an attribute's name and its
		 * respective type for using in [can.Observe.static.convert convert] and [can.Observe.prototype.serialize serialize].
		 * 
		 *		var Contact = can.Observe({
		 *			attributes : {
		 *				birthday : 'date',
		 *				age: 'number',
		 *				name: 'string'
		 *			}
		 *		});
		 *
		 */
		attributes : {},
		
		/**
		 * @attribute can.Observe.static.convert
		 * @parent can.Observe.static
		 *
		 * You often want to convert from what the observe sends you to a form more useful to JavaScript. 
		 * For example, contacts might be returned from the server with dates that look like: "1982-10-20". 
		 * We can observe to convert it to something closer to `new Date(1982,10,20)`.
		 *
		 * Convert comes with the following types:
		 *
		 * - __date__ Converts to a JS date. Accepts integers or strings that work with Date.parse
		 * - __number__ An integer or number that can be passed to parseFloat
		 * - __boolean__ Converts "false" to false, and puts everything else through Boolean()
		 *
		 * The following sets the birthday attribute to "date" and provides a date conversion function:
		 *
		 *		var Contact = can.Observe({
		 *			attributes : {
		 *				birthday : 'date'
		 *			},
		 *			convert : {
		 *				date : function(raw){
		 *					if(typeof raw == 'string'){
		 *						//- Extracts dates formated 'YYYY-DD-MM'
		 *						var matches = raw.match(/(\d+)-(\d+)-(\d+)/);
		 *	
		 *						//- Parses to date object and returns
		 *						return new Date(matches[1], 
		 *								        (+matches[2])-1, 
		 *									    matches[3]);
		 *
		 *					}else if(raw instanceof Date){
		 *						return raw;
		 *					}
		 *				}
		 *			}
		 *		},{});
		 *
		 *		var contact = new Contact();
		 *
		 *		//- calls convert on attribute set
		 *		contact.attr('birthday', '4-26-2012') 
		 *
		 *		contact.attr('birthday'); //-> Date
		 * 
		 * If a property is set with an object as a value, the corresponding converter is called with the unmerged data (the raw object)
		 * as the first argument, and the old value (a can.Observe) as the second:
		 * 
		 * 		var MyObserve = can.Observe({
	    			attributes: {
	        			nested: "nested"
	    			},
	    			convert: {
						nested: function(data, oldVal) {
							if(oldVal instanceof MyObserve) {
								return oldVal.attr(data);
							}
							return new MyObserve(data);
						}
	    			}
				},{});
		 *
		 * ## Assocations and Convert
		 *
		 * If you have assocations defined within your model(s), you can use convert to automatically
		 * call serialize on those models.
		 * 
		 * 		can.Model("Contact",{
		 * 			attributes : {
		 * 				tasks: "Task.models"
		 * 			}
		 * 		}, {});
		 *
		 * 		can.Model("Task",{
		 * 			attributes : {
		 * 				due : 'date'
		 * 			}
		 * 		},{});
		 *
		 * 		var contact = new Contact({
		 * 			tasks: [ new Task({
		 * 				due: new Date()
		 * 			}) ]
		 * 		});
		 * 
		 * 		contact.seralize(); 
		 * 		//-> { tasks: [ { due: 1333219754627 } ] }
		 * 
		 */
		convert: {
			"date": function( str ) {
				var type = typeof str;
				if ( type === "string" ) {
					return isNaN(Date.parse(str)) ? null : Date.parse(str)
				} else if ( type === 'number' ) {
					return new Date(str)
				} else {
					return str
				}
			},
			"number": function( val ) {
				return parseFloat(val);
			},
			"boolean": function (val) {
				if(val === 'false' || val === '0' || !val) {
					return false;
				}
				return true;
			},
			"default": function( val, oldVal, error, type ) {
				var construct = can.getObject(type),
					context = window,
					realType;
				// if type has a . we need to look it up
				if ( type.indexOf(".") >= 0 ) {
					// get everything before the last .
					realType = type.substring(0, type.lastIndexOf("."));
					// get the object before the last .
					context = can.getObject(realType);
				}
				return typeof construct == "function" ? construct.call(context, val, oldVal) : val;
			}
		},
		/**
		 * @attribute can.Observe.static.serialize
		 * @parent can.Observe.static
		 *
		 * `can.Observe.static.seralize` is object of name-function pairs that are used to 
		 * serialize attributes.
		 *
		 * Similar to [can.Observe.convert], in that the keys of this object correspond to 
		 * the types specified in [can.Observe.attributes].
		 *
		 * By default every attribute will be passed through the 'default' serialization method 
		 * that will return the value if the property holds a primitive value (string, number, ...), 
		 * or it will call the "serialize" method if the property holds an object with the "serialize" method set.
		 *
		 * For example, to serialize all dates to ISO format:
		 *
		 * 		var Contact = can.Observe({
		 * 			attributes : {
		 * 				birthday : 'date'
		 * 			},
		 * 			serialize : {
		 * 				date : function(val, type){
		 * 					return new Date(val).toISOString();
		 * 				}
		 * 			}
		 * 		},{});
		 * 		
		 * 		var contact = new Contact({ 
		 * 			birthday: new Date("Oct 25, 1973") 
		 * 		}).serialize();
		 * 		//-> { "birthday" : "1973-10-25T05:00:00.000Z" }
		 *
		 */
		serialize: {
			"default": function( val, type ) {
				return isObject(val) && val.serialize ? val.serialize() : val;
			},
			"date": function( val ) {
				return val && val.getTime()
			}
		}
	});
	
	// overwrite setup to do this stuff
	var oldSetup = clss.setup;
	
	/**
	 * @hide
	 * @attribute can.Observe.static.setup
	 * @parent can.Observe.attributes
	 *
	 * `can.Observe.static.setup` overrides default `can.Observe` setup to provide
	 * functionality for attributes.
	 *
	 */
	clss.setup = function(superClass, stat, proto){
		var self = this;
		oldSetup.call(self, superClass, stat, proto);

		can.each(["attributes"], function( name ) {
			if (!self[name] || superClass[name] === self[name] ) {
				self[name] = {};
			}
		});

		can.each(["convert", "serialize"], function( name ) {
			if ( superClass[name] != self[name] ) {
				self[name] = can.extend({}, superClass[name], self[name]);
			}
		});
	};
});

var oldSetup = can.Observe.prototype.setup;

can.Observe.prototype.setup = function(obj) {

	var diff = {};

	oldSetup.call(this, obj);

	can.each( this.constructor.defaults, function( value, key ) {
		if ( ! this.hasOwnProperty( key )) {
			diff[key] = value;
		}
	}, this);

	this._init = 1;
	this.attr( diff );
	delete this._init;
};

/**
 * @hide
 * @function can.Observe.prototype.convert
 * @parent can.Observe.attributes
 */
can.Observe.prototype.__convert = function(prop, value){
	// check if there is a

	var Class = this.constructor,
		oldVal = this.attr(prop),
		type, converter;
		
	if(Class.attributes){
		// the type of the attribute
		type = Class.attributes[prop];
		converter = Class.convert[type] || Class.convert['default'];
	}
		
	return value === null || !type ? 
			// just use the value
			value : 
			// otherwise, pass to the converter
			converter.call(Class, value, oldVal, function() {}, type);
};

/**
 * @function can.Observe.prototype.serialize
 * @parent can.Observe.attributes
 *
 * `can.Observe.prototype.serialize` serializes an object for the object. 
 * Serialized data is typically used to send back to a server.
 *
 * You can set the serialization methods similar to the convert methods:
 *
 *		var Contact = can.Observe({
 *			attributes : { 
 *				birthday : 'date'
 *			},
 *			serialize : {
 *				date : function( val, type ){
 *					return val.getYear() + 
 *						"-" + (val.getMonth() + 1) + 
 *						"-" + val.getDate(); 
 *				}
 *			}
 *		},{})
 *
 *		var contact = new Contact();
 *		contact.attr('birthday', new Date());
 *		contact.serialize()
 *		//-> { birthday: 'YYYY-MM-DD' }
 *
 * You can also get and serialize an individual property by passing the attribute
 * name to the `serialize` function.  Building on the above demo, we can serialize
 * the `birthday` attribute only.
 *
 *		contact.serialize('birthday') //-> 'YYYY-MM-DD'
 *
 * @param {Object} attrName (optional) when passed returns only that attribute name
 */
can.Observe.prototype.serialize = function(attrName){
	var where = {},
		Class = this.constructor,
		attrs = {};
		
	if(attrName != undefined){
		attrs[attrName] = this[attrName];
	} else {
		attrs = this.__get();
	}
		
	can.each(attrs, function( val, name ) {
		var type, converter;
		
		type = Class.attributes ? Class.attributes[name] : 0;
		converter = Class.serialize ? Class.serialize[type] : 0;
			
		// if the value is an object, and has a attrs or serialize function
		where[name] = val && typeof val.serialize == 'function' ?
		// call attrs or serialize to get the original data back
		val.serialize() :
		// otherwise if we have  a converter
		converter ? 
			// use the converter
			converter(val, type) : 
			// or return the val
			val
	});
	
	return attrName != undefined ? where[attrName] : where;
};
return can.Observe;
})(module["can/util/jquery/jquery.js"], module["can/observe/observe.js"]);// ## can/observe/delegate/delegate.js

module['can/observe/delegate/delegate.js'] = (function(can) {
	
	
	
	// ** - 'this' will be the deepest item changed
	// * - 'this' will be any changes within *, but * will be the 
	//     this returned
	
	// tells if the parts part of a delegate matches the broken up props of the event
	// gives the prop to use as 'this'
	// - parts - the attribute name of the delegate split in parts ['foo','*']
	// - props - the split props of the event that happened ['foo','bar','0']
	// - returns - the attribute to delegate too ('foo.bar'), or null if not a match 
	var delegateMatches = function(parts, props){
		//check props parts are the same or 
		var len = parts.length,
			i =0,
			// keeps the matched props we will use
			matchedProps = [],
			prop;
		
		// if the event matches
		for(i; i< len; i++){
			prop =  props[i]
			// if no more props (but we should be matching them)
			// return null
			if( typeof prop !== 'string' ) {
				return null;
			} else
			// if we have a "**", match everything
			if( parts[i] == "**" ) {
				return props.join(".");
			} else 
			// a match, but we want to delegate to "*"
			if (parts[i] == "*"){
				// only do this if there is nothing after ...
				matchedProps.push(prop);
			}
			else if(  prop === parts[i]  ) {
				matchedProps.push(prop);
			} else {
				return null;
			}
		}
		return matchedProps.join(".");
	},
		// gets a change event and tries to figure out which
		// delegates to call
		delegateHandler = function(event, prop, how, newVal, oldVal){
			// pre-split properties to save some regexp time
			var props = prop.split("."),
				delegates = (this._observe_delegates || []).slice(0),
				delegate,
				attr,
				matchedAttr,
				hasMatch,
				valuesEqual;
			event.attr = prop;
			event.lastAttr = props[props.length -1 ];
			
			// for each delegate
			for(var i =0; delegate = delegates[i++];){
				
				// if there is a batchNum, this means that this
				// event is part of a series of events caused by a single 
				// attrs call.  We don't want to issue the same event
				// multiple times
				// setting the batchNum happens later
				if((event.batchNum && delegate.batchNum === event.batchNum) || delegate.undelegated ){
					continue;
				}
				
				// reset match and values tests
				hasMatch = undefined;
				valuesEqual = true;

				// yeah, all this under here has to be redone v
				
				// for each attr in a delegate
				for(var a =0 ; a < delegate.attrs.length; a++){
					
					attr = delegate.attrs[a];
					
					// check if it is a match
					if(matchedAttr = delegateMatches(attr.parts, props)){
						hasMatch = matchedAttr;
					}
					// if it has a value, make sure it's the right value
					// if it's set, we should probably check that it has a 
					// value no matter what
					if(attr.value && valuesEqual /* || delegate.hasValues */){
						valuesEqual = attr.value === ""+this.attr(attr.attr)
					} else if (valuesEqual && delegate.attrs.length > 1){
						// if there are multiple attributes, each has to at
						// least have some value
						valuesEqual = this.attr(attr.attr) !== undefined
					}
				}


				
				// if there is a match and valuesEqual ... call back
				if(hasMatch && valuesEqual) {
					// how to get to the changed property from the delegate
					var from = prop.replace(hasMatch+".","");
					
					// if this event is part of a batch, set it on the delegate
					// to only send one event
					if(event.batchNum ){
						delegate.batchNum = event.batchNum
					}
					
					// if we listen to change, fire those with the same attrs
					// TODO: the attrs should probably be using from
					if(  delegate.event === 'change' ){
						arguments[1] = from;
						event.curAttr = hasMatch;
						delegate.callback.apply(this.attr(hasMatch), can.makeArray( arguments));
					} else if(delegate.event === how ){
						
						// if it's a match, callback with the location of the match
						delegate.callback.apply(this.attr(hasMatch), [event,newVal, oldVal, from]);
					} else if(delegate.event === 'set' && 
							 how == 'add' ) {
						// if we are listening to set, we should also listen to add
						delegate.callback.apply(this.attr(hasMatch), [event,newVal, oldVal, from]);
					}
				}
				
			}
		};
		
	can.extend(can.Observe.prototype,{
		/**
		 * @function can.Observe.prototype.delegate
		 * @parent can.Observe.delegate
		 * @plugin can/observe/delegate
		 * 
		 * `delegate( selector, event, handler(ev,newVal,oldVal,from) )` listen for changes 
		 * in a child attribute from the parent. The child attribute
		 * does not have to exist.
		 * 
		 *     
		 *     // create an observable
		 *     var observe = can.Observe({
		 *       foo : {
		 *         bar : "Hello World"
		 *       }
		 *     })
		 *     
		 *     //listen to changes on a property
		 *     observe.delegate("foo.bar","change", function(ev, prop, how, newVal, oldVal){
		 *       // foo.bar has been added, set, or removed
		 *       this //-> 
		 *     });
		 * 
		 *     // change the property
		 *     observe.attr('foo.bar',"Goodbye Cruel World")
		 * 
		 * ## Types of events
		 * 
		 * Delegate lets you listen to add, set, remove, and change events on property.
		 * 
		 * __add__
		 * 
		 * An add event is fired when a new property has been added.
		 * 
		 *     var o = new can.Control({});
		 *     o.delegate("name","add", function(ev, value){
		 *       // called once
		 *       can.$('#name').show()
		 *     })
		 *     o.attr('name',"Justin")
		 *     o.attr('name',"Brian");
		 *     
		 * Listening to add events is useful for 'setup' functionality (in this case
		 * showing the <code>#name</code> element.
		 * 
		 * __set__
		 * 
		 * Set events are fired when a property takes on a new value.  set events are
		 * always fired after an add.
		 * 
		 *     o.delegate("name","set", function(ev, value){
		 *       // called twice
		 *       can.$('#name').text(value)
		 *     })
		 *     o.attr('name',"Justin")
		 *     o.attr('name',"Brian");
		 * 
		 * __remove__
		 * 
		 * Remove events are fired after a property is removed.
		 * 
		 *     o.delegate("name","remove", function(ev){
		 *       // called once
		 *       $('#name').text(value)
		 *     })
		 *     o.attr('name',"Justin");
		 *     o.removeAttr('name');
		 * 
		 * ## Wildcards - matching multiple properties
		 * 
		 * Sometimes, you want to know when any property within some part 
		 * of an observe has changed. Delegate lets you use wildcards to 
		 * match any property name.  The following listens for any change
		 * on an attribute of the params attribute:
		 * 
		 *     var o = can.Control({
		 *       options : {
		 *         limit : 100,
		 *         offset: 0,
		 *         params : {
		 *           parentId: 5
		 *         }
		 *       }
		 *     })
		 *     o.delegate('options.*','change', function(){
		 *       alert('1');
		 *     })
		 *     o.delegate('options.**','change', function(){
		 *       alert('2');
		 *     })
		 *     
		 *     // alerts 1
		 *     // alerts 2
		 *     o.attr('options.offset',100)
		 *     
		 *     // alerts 2
		 *     o.attr('options.params.parentId',6);
		 * 
		 * Using a single wildcard (<code>*</code>) matches single level
		 * properties.  Using a double wildcard (<code>**</code>) matches
		 * any deep property.
		 * 
		 * ## Listening on multiple properties and values
		 * 
		 * Delegate lets you listen on multiple values at once.  The following listens
		 * for first and last name changes:
		 * 
		 *     var o = new can.Observe({
		 *       name : {first: "Justin", last: "Meyer"}
		 *     })
		 *     
		 *     o.bind("name.first,name.last", 
		 *            "set",
		 *            function(ev,newVal,oldVal,from){
		 *     
		 *     })
		 * 
		 * ## Listening when properties are a particular value
		 * 
		 * Delegate lets you listen when a property is __set__ to a specific value:
		 * 
		 *     var o = new can.Observe({
		 *       name : "Justin"
		 *     })
		 *     
		 *     o.bind("name=Brian", 
		 *            "set",
		 *            function(ev,newVal,oldVal,from){
		 *     
		 *     })
		 * 
		 * @param {String} selector The attributes you want to listen for changes in.
		 * 
		 *   Selector should be the property or 
		 *   property names of the element you are searching.  Examples:
		 * 
		 *     "name" - listens to the "name" property changing
		 *     "name, address" - listens to "name" or "address" changing
		 *     "name address" - listens to "name" or "address" changing
		 *     "address.*" - listens to property directly in address
		 *     "address.**" - listens to any property change in address
		 *     "foo=bar" - listens when foo is "bar"
		 * 
		 * @param {String} event The event name.  One of ("set","add","remove","change")
		 * @param {Function} handler(ev,newVal,oldVal,prop) The callback handler 
		 * called with:
		 * 
		 *  - newVal - the new value set on the observe
		 *  - oldVal - the old value set on the observe
		 *  - prop - the prop name that was changed
		 * 
		 * @return {jQuery.Delegate} the delegate for chaining
		 */
		delegate :  function(selector, event, handler){
			selector = can.trim(selector);
			var delegates = this._observe_delegates || (this._observe_delegates = []),
				attrs = [],
				selectorRegex = /([^\s=,]+)(?:=("[^",]*"|'[^',]*'|[^\s"',]*))?(,?)\s*/g,
				matches;
			
			// parse each property in the selector
			while(matches = selectorRegex.exec(selector)) {
				// we need to do a little doctoring to make up for the quotes.
				if(matches[2] && $.inArray(matches[2].substr(0, 1), ['"', "'"]) >= 0) {
					matches[2] = matches[2].substr(1, -1);
				}
				
				attrs.push({
					// the attribute name
					attr: matches[1],
					// the attribute name, pre-split for speed
					parts: matches[1].split('.'),
					// the value associated with this property (if there was one given)
					value: matches[2],
					// whether this selector combines with the one after it with AND or OR
					or: matches[3] === ','
				});
			}

			// delegates has pre-processed info about the event
			delegates.push({
				// the attrs name for unbinding
				selector : selector,
				// an object of attribute names and values {type: 'recipe',id: undefined}
				// undefined means a value was not defined
				attrs : attrs,
				callback : handler,
				event: event
			});
			if(delegates.length === 1){
				this.bind("change",delegateHandler)
			}
			return this;
		},
		/**
		 * @function can.Observe.prototype.undelegate
		 * @parent can.Observe.delegate
		 * 
		 * `undelegate( selector, event, handler )` removes a delegated event handler from an observe.
		 * 
		 *     observe.undelegate("name","set", handler )
		 * 
		 * @param {String} selector the attribute name of the object you want to undelegate from.
		 * @param {String} event the event name
		 * @param {Function} handler the callback handler
		 * @return {jQuery.Delegate} the delegate for chaining
		 */
		undelegate : function(selector, event, handler){
			selector = can.trim(selector);
			
			var i =0,
				delegates = this._observe_delegates || [],
				delegateOb;
			if(selector){
				while(i < delegates.length){
					delegateOb = delegates[i];
					if( delegateOb.callback === handler ||
						(!handler && delegateOb.selector === selector) ){
						delegateOb.undelegated = true;
						delegates.splice(i,1)
					} else {
						i++;
					}
				}
			} else {
				// remove all delegates
				delegates = [];
			}
			if(!delegates.length){
				//can.removeData(this, "_observe_delegates");
				this.unbind("change",delegateHandler)
			}
			return this;
		}
	});
	// add helpers for testing .. 
	can.Observe.prototype.delegate.matches = delegateMatches;
	return can.Observe;
})(module["can/util/jquery/jquery.js"], module["can/observe/observe.js"]);// ## can/observe/setter/setter.js

module['can/observe/setter/setter.js'] = (function(can) {

/**
 * Like [can.camelize|camelize], but the first part is also capitalized
 * @param {String} s
 * @return {String} the classized string
 */
can.classize =  function( s , join) {
	// this can be moved out ..
	// used for getter setter
	var parts = s.split(can.undHash),
		i = 0;
	for (; i < parts.length; i++ ) {
		parts[i] = can.capitalize(parts[i]);
	}

	return parts.join(join || '');
}

var classize = can.classize,
	proto =  can.Observe.prototype,
	old = proto.__set;

proto.__set = function(prop, value, current, success, error){
	// check if there's a setter
	var cap = classize(prop),
		setName = "set" + cap,
		errorCallback = function( errors ) {
			var stub = error && error.call(self, errors);
			
			// if 'setter' is on the page it will trigger
			// the error itself and we dont want to trigger
			// the event twice. :)
			if(stub !== false){
				can.trigger(self, "error", [prop, errors], true);
			}
			
			return false;
		},
		self = this;
		
	// if we have a setter
	if ( this[setName] &&
		// call the setter, if returned value is undefined,
		// this means the setter is async so we 
		// do not call update property and return right away
		( value = this[setName](value, 
			function(value ){ old.call(self,prop, value, current, success, errorCallback) },
			errorCallback ) ) === undefined ) {
		return;
	}
	
	old.call(self,prop, value, current, success, errorCallback);
	
	return this;
};
return can.Observe;
})(module["can/util/jquery/jquery.js"], module["can/observe/attributes/attributes.js"]);// ## can/observe/validations/validations.js

module['can/observe/validations/validations.js'] = (function (can) {
//validations object is by property.  You can have validations that
//span properties, but this way we know which ones to run.
//  proc should return true if there's an error or the error message
	var validate = function (attrNames, options, proc) {
		// normalize argumetns
		if (!proc) {
			proc = options;
			options = {};
		}

		options = options || {};
		attrNames = can.makeArray(attrNames)

		// run testIf if it exists
		if (options.testIf && !options.testIf.call(this)) {
			return;
		}

		var self = this;
		can.each(attrNames, function (attrName) {
			// Add a test function for each attribute
			if (!self.validations[attrName]) {
				self.validations[attrName] = [];
			}

			self.validations[attrName].push(function (newVal) {
				// if options has a message return that, otherwise, return the error
				var res = proc.call(this, newVal, attrName);
				return res === undefined ? undefined : (options.message || res);
			})
		});
	};

	var old = can.Observe.prototype.__set;
	can.Observe.prototype.__set = function (prop, value, current, success, error) {
		var self = this,
			validations = self.constructor.validations,
			errorCallback = function (errors) {
				var stub = error && error.call(self, errors);

				// if 'setter' is on the page it will trigger
				// the error itself and we dont want to trigger
				// the event twice. :)
				if (stub !== false) {
					can.trigger(self, "error", [prop, errors], true);
				}

				return false;
			};

		old.call(self, prop, value, current, success, errorCallback);

		if (validations && validations[prop]) {
			var errors = self.errors(prop);
			errors && errorCallback(errors)
		}

		return this;
	}

	can.each([ can.Observe, can.Model ], function (clss) {
		// in some cases model might not be defined quite yet.
		if (clss === undefined) {
			return;
		}
		var oldSetup = clss.setup;

		can.extend(clss, {
			setup : function (superClass) {
				oldSetup.apply(this, arguments);
				if (!this.validations || superClass.validations === this.validations) {
					this.validations = {};
				}
			},
			/**
			 * @function can.Observe.static.validate
			 * @parent can.Observe.validations
			 * `validate(attrNames, [options,] validateProc(value, attrName) )` validates each of the
			 * specified attributes with the given `validateProc` function.  The function
			 * should return a value if there is an error.  By default, the return value is
			 * the error message.  Validations should be set in the Constructor's static init method.
			 *
			 * The following example validates that a person's age is a number:
			 *
			 *     Person = can.Observe({
			 *         init : function(){
			 *           this.validate(["age"], function(val){
			 *             if( typeof val === 'number' ){
			 *               return "must be a number"
			 *             }
			 *           })
			 *         }
			 *     },{})
			 *
			 *
			 * The error message can be overwritten with `options` __message__ property:
			 *
			 *     Person = can.Observe({
			 *         init : function(){
			 *           this.validate(
			 *             "age",
			 *           {message: "must be a number"},
			 *           function(val){
			 *               if( typeof val === 'number' ){
			 *                 return true
			 *               }
			 *           })
			 *       }
			 *     },{})
			 *
			 * @param {Array|String} attrNames Attribute name(s) to to validate
			 *
			 * @param {Object} [options] Options for the
			 * validations.  Valid options include 'message' and 'testIf'.
			 *
			 * @param {Function} validateProc(value,attrName) Function used to validate each
			 * given attribute. Returns nothing if valid and an error message
			 * otherwise. Function is called in the instance context and takes the
			 * `value` and `attrName` to validate.
			 *
			 */
			validate : validate,

			/**
			 * @attribute can.Observe.static.validationMessages
			 * @parent can.Observe.validations
			 *
			 * `validationMessages` has the default validation error messages that will be returned by the builtin
			 * validation methods. These can be overwritten by assigning new messages
			 * to `can.Observe.validationMessages` in your application setup.
			 *
			 * The following messages (with defaults) are available:
			 *
			 *  * format - "is invalid"
			 *  * inclusion - "is not a valid option (perhaps out of range)"
			 *  * lengthShort - "is too short"
			 *  * lengthLong - "is too long"
			 *  * presence - "can't be empty"
			 *  * range - "is out of range"
			 *
			 * It is important to steal can/observe/validations before
			 * overwriting the messages, otherwise the changes will
			 * be lost once steal loads it later.
			 *
			 * ## Example
			 *
			 *     can.Observe.validationMessages.format = "is invalid dummy!"
			 */
			validationMessages : {
				format : "is invalid",
				inclusion : "is not a valid option (perhaps out of range)",
				lengthShort : "is too short",
				lengthLong : "is too long",
				presence : "can't be empty",
				range : "is out of range",
				numericality: "must be a number"
			},

			/**
			 * @function can.Observe.static.validateFormatOf
			 * @parent can.Observe.validations
			 *
			 * `validateFormatOf(attrNames, regexp, options)` validates where the values of
			 * specified attributes are of the correct form by
			 * matching it against the regular expression provided.
			 *
			 *     init : function(){
			 *          this.validateFormatOf(["email"],/[\w\.]+@]w+\.\w+/,{
			 *            message : "invalid email"
			 *       })
			 *     }
			 *
			 * @param {Array|String} attrNames Attribute name(s) to to validate
			 * @param {RegExp} regexp Regular expression used to match for validation
			 * @param {Object} [options] Options for the validations.  Valid options include 'message' and 'testIf'.
			 */
			validateFormatOf : function (attrNames, regexp, options) {
				validate.call(this, attrNames, options, function (value) {
					if ((typeof value !== 'undefined' && value !== null && value !== '')
						&& String(value).match(regexp) == null) {
						return this.constructor.validationMessages.format;
					}
				});
			},

			/**
			 * @function can.Observe.static.validateInclusionOf
			 * @parent can.Observe.validations
			 *
			 * Validates whether the values of the specified attributes are available in a particular
			 * array.
			 *
			 *     init : function(){
			 *       this.validateInclusionOf(["salutation"],["Mr.","Mrs.","Dr."])
			 *     }
			 *
			 * @param {Array|String} attrNames Attribute name(s) to to validate
			 * @param {Array} inArray Array of options to test for inclusion
			 * @param {Object} [options] Options for the validations.  Valid options include 'message' and 'testIf'.
			 */
			validateInclusionOf : function (attrNames, inArray, options) {
				validate.call(this, attrNames, options, function (value) {
					if (typeof value == 'undefined') {
						return;
					}

					if (can.grep(inArray,function (elm) {
						return (elm == value);
					}).length == 0) {
						return this.constructor.validationMessages.inclusion;
					}
				});
			},

			/**
			 * @function can.Observe.static.validateLengthOf
			 * @parent can.Observe.validations
			 *
			 * Validates that the specified attributes' lengths are in the given range.
			 *
			 *     init : function(){
			 *       this.validateInclusionOf(["suffix"],3,5)
			 *     }
			 *
			 * @param {Number} min Minimum length (inclusive)
			 * @param {Number} max Maximum length (inclusive)
			 * @param {Object} [options] Options for the validations.  Valid options include 'message' and 'testIf'.
			 */
			validateLengthOf : function (attrNames, min, max, options) {
				validate.call(this, attrNames, options, function (value) {
					if (((typeof value === 'undefined' || value === null) && min > 0) ||
							(typeof value !== 'undefined' && value !== null && value.length < min)) {
						return this.constructor.validationMessages.lengthShort + " (min=" + min + ")";
					} else if (typeof value != 'undefined' && value !== null && value.length > max) {
						return this.constructor.validationMessages.lengthLong + " (max=" + max + ")";
					}
				});
			},

			/**
			 * @function can.Observe.static.validatePresenceOf
			 * @parent can.Observe.validations
			 *
			 * Validates that the specified attributes are not blank.
			 *
			 *     init : function(){
			 *       this.validatePresenceOf(["name"])
			 *     }
			 *
			 * @param {Array|String} attrNames Attribute name(s) to to validate
			 * @param {Object} [options] Options for the validations.  Valid options include 'message' and 'testIf'.
			 */
			validatePresenceOf : function (attrNames, options) {
				validate.call(this, attrNames, options, function (value) {
					if (typeof value == 'undefined' || value === "" || value === null) {
						return this.constructor.validationMessages.presence;
					}
				});
			},

			/**
			 * @function can.Observe.static.validateRangeOf
			 * @parent can.Observe.validations
			 *
			 * Validates that the specified attributes are in the given numeric range.
			 *
			 *     init : function(){
			 *       this.validateRangeOf(["age"],21, 130);
			 *     }
			 *
			 * @param {Array|String} attrNames Attribute name(s) to to validate
			 * @param {Number} low Minimum value (inclusive)
			 * @param {Number} hi Maximum value (inclusive)
			 * @param {Object} [options] (optional) Options for the validations.  Valid options include 'message' and 'testIf'.
			 */
			validateRangeOf : function (attrNames, low, hi, options) {
				validate.call(this, attrNames, options, function (value) {
					if (((typeof value == 'undefined' || value === null) && low > 0) ||
							(typeof value !== 'undefined' && value !== null && (value < low || value > hi) )) {
						return this.constructor.validationMessages.range + " [" + low + "," + hi + "]";
					}
				});
			},
			
			/**
			 * @function can.Observe.static.validatesNumericalityOf
			 * @parent can.Observe.validations
			 *
			 * Validates that the specified attributes is a valid Number.
			 *
			 *     init : function(){
			 *       this.validatesNumericalityOf(["age"]);
			 *     }
			 *
			 * @param {Array|String} attrNames Attribute name(s) to to validate
			 */
			validatesNumericalityOf : function (attrNames) {
				validate.call(this, attrNames, function (value) {
					var res = !isNaN(parseFloat(value)) && isFinite(value);
					if (!res) {
						return this.constructor.validationMessages.numericality;
					}
				});
			}
		});
	});

	can.extend(can.Observe.prototype, {
		/**
		 * @function can.Observe.prototype.errors
		 * @parent can.Observe.validations
		 *
		 * Runs the validations on this observe.  You can
		 * also pass it an array of attributes to run only those attributes.
		 * It returns nothing if there are no errors, or an object
		 * of errors by attribute.
		 *
		 * To use validations, it's suggested you use the
		 * observe/validations plugin.
		 *
		 *     can.Observe("Task",{
		 *       init : function(){
		 *         this.validatePresenceOf("dueDate")
		 *       }
		 *     },{});
		 *
		 *     var task = new Task(),
		 *         errors = task.errors()
		 *
		 *     errors.dueDate[0] //-> "can't be empty"
		 *
		 * @param {Array|String} [attrs] An optional list of attributes to get errors for:
		 *
		 *     task.errors(['dueDate','name']);
		 *
		 * Or it can take a single attr name like:
		 *
		 *     task.errors('dueDate')
		 *
		 * @param {Object} [newVal] An optional new value to test setting
		 * on the observe.  If `newVal` is provided,
		 * it returns the errors on the observe if `newVal` was set.
		 *
		 * @return {Object} an object of attributeName : [errors] like:
		 *
		 *     task.errors() // -> {dueDate: ["cant' be empty"]}
		 *
		 * or `null` if there are no errors.
		 */
		errors : function (attrs, newVal) {
			// convert attrs to an array
			if (attrs) {
				attrs = can.isArray(attrs) ? attrs : [attrs];
			}

			var errors = {},
				self = this,
				attr,
			// helper function that adds error messages to errors object
			// attr - the name of the attribute
			// funcs - the validation functions
				addErrors = function (attr, funcs) {
					can.each(funcs, function (func) {
						var res = func.call(self, isTest ? ( self.__convert ?
							self.__convert(attr, newVal) :
							newVal ) : self[attr]);
						if (res) {
							if (!errors[attr]) {
								errors[attr] = [];
							}
							errors[attr].push(res);
						}

					});
				},
				validations = this.constructor.validations,
				isTest = attrs && attrs.length === 1 && arguments.length === 2;

			// go through each attribute or validation and
			// add any errors
			can.each(attrs || validations || {}, function (funcs, attr) {
				// if we are iterating through an array, use funcs
				// as the attr name
				if (typeof attr == 'number') {
					attr = funcs;
					funcs = validations[attr];
				}
				// add errors to the
				addErrors(attr, funcs || []);
			});

			// return errors as long as we have one
			return can.isEmptyObject(errors) ? null : isTest ? errors[attrs[0]] : errors;
		}
	});
	return can.Observe;
})(module["can/util/jquery/jquery.js"], module["can/observe/attributes/attributes.js"]);// ## can/util/string/deparam/deparam.js

module['can/util/string/deparam/deparam.js'] = (function( can ){
	
	// ## deparam.js  
	// `can.deparam`  
	// _Takes a string of name value pairs and returns a Object literal that represents those params._
	var digitTest = /^\d+$/,
		keyBreaker = /([^\[\]]+)|(\[\])/g,
		paramTest = /([^?#]*)(#.*)?$/,
		prep = function( str ) {
			return decodeURIComponent( str.replace(/\+/g, " ") );
		};
	

	can.extend(can, { 
		/**
		 * @function can.deparam
		 * @parent can.util
		 * Takes a string of name value pairs and returns a Object literal that represents those params.
		 * 
		 * @param {String} params a string like <code>"foo=bar&person[age]=3"</code>
		 * @return {Object} A JavaScript Object that represents the params:
		 * 
		 *     {
		 *       foo: "bar",
		 *       person: {
		 *         age: "3"
		 *       }
		 *     }
		 */
		deparam: function(params){
		
			var data = {},
				pairs, lastPart;

			if ( params && paramTest.test( params )) {
				
				pairs = params.split('&'),
				
				can.each( pairs, function( pair ) {

					var parts = pair.split('='),
						key   = prep( parts.shift() ),
						value = prep( parts.join("=")),
						current = data;
					
					if(key) {
						parts = key.match(keyBreaker);
				
						for ( var j = 0, l = parts.length - 1; j < l; j++ ) {
							if (!current[parts[j]] ) {
								// If what we are pointing to looks like an `array`
								current[parts[j]] = digitTest.test(parts[j+1]) || parts[j+1] == "[]" ? [] : {};
							}
							current = current[parts[j]];
						}
						lastPart = parts.pop();
						if ( lastPart == "[]" ) {
							current.push(value);
						} else {
							current[lastPart] = value;
						}
					}
				});
			}
			return data;
		}
	});
	return can;
})(module["can/util/jquery/jquery.js"], module["can/util/string/string.js"]);// ## can/route/route.js

module['can/route/route.js'] = (function(can) {

	// ## route.js  
	// `can.route`  
	// _Helps manage browser history (and client state) by synchronizing the 
	// `window.location.hash` with a `can.Observe`._  
	//   
    // Helper methods used for matching routes.
	var 
		// `RegExp` used to match route variables of the type ':name'.
        // Any word character or a period is matched.
        matcher = /\:([\w\.]+)/g,
        // Regular expression for identifying &amp;key=value lists.
        paramsMatcher = /^(?:&[^=]+=[^&]*)+/,
        // Converts a JS Object into a list of parameters that can be 
        // inserted into an html element tag.
		makeProps = function( props ) {
			var tags = [];
			can.each(props, function(val, name){
				tags.push( ( name === 'className' ? 'class'  : name )+ '="' + 
						(name === "href" ? val : can.esc(val) ) + '"');
			});
			return tags.join(" ");
		},
		// Checks if a route matches the data provided. If any route variable
        // is not present in the data, the route does not match. If all route
        // variables are present in the data, the number of matches is returned 
        // to allow discerning between general and more specific routes. 
		matchesData = function(route, data) {
			var count = 0, i = 0, defaults = {};
			// look at default values, if they match ...
			for( var name in route.defaults ) {
				if(route.defaults[name] === data[name]){
					// mark as matched
					defaults[name] = 1;
					count++;
				}
			}
			for (; i < route.names.length; i++ ) {
				if (!data.hasOwnProperty(route.names[i]) ) {
					return -1;
				}
				if(!defaults[route.names[i]]){
					count++;
				}
				
			}
			
			return count;
		},
		onready = !0,
		location = window.location,
		wrapQuote = function(str) {
			return (str+'').replace(/([.?*+\^$\[\]\\(){}|\-])/g, "\\$1");
		},
		each = can.each,
		extend = can.extend;


	can.route = function( url, defaults ) {
        defaults = defaults || {};
        // Extract the variable names and replace with `RegExp` that will match
		// an atual URL with values.
		var names = [],
			test = url.replace(matcher, function( whole, name, i ) {
				names.push(name);
				var next = "\\"+( url.substr(i+whole.length,1) || can.route._querySeparator );
				// a name without a default value HAS to have a value
				// a name that has a default value can be empty
				// The `\\` is for string-escaping giving single `\` for `RegExp` escaping.
				return "([^" +next+"]"+(defaults[name] ? "*" : "+")+")";
			});

		// Add route in a form that can be easily figured out.
		can.route.routes[url] = {
            // A regular expression that will match the route when variable values 
            // are present; i.e. for `:page/:type` the `RegExp` is `/([\w\.]*)/([\w\.]*)/` which
            // will match for any value of `:page` and `:type` (word chars or period).
			test: new RegExp("^" + test+"($|"+wrapQuote(can.route._querySeparator)+")"),
            // The original URL, same as the index for this entry in routes.
			route: url,
            // An `array` of all the variable names in this route.
			names: names,
            // Default values provided for the variables.
			defaults: defaults,
            // The number of parts in the URL separated by `/`.
			length: url.split('/').length
		};
		return can.route;
	};

	extend(can.route, {

		_querySeparator: '&',
		_paramsMatcher: paramsMatcher,

		/**
		 * @function can.route.param
		 * @parent can.route
		 * Parameterizes the raw JS object representation provided in data.
		 *
		 *     can.route.param( { type: "video", id: 5 } ) 
		 *          // -> "type=video&id=5"
		 *
		 * If a route matching the provided data is found, that URL is built
		 * from the data. Any remaining data is added at the end of the
		 * URL as &amp; separated key/value parameters.
		 *
		 *     can.route(":type/:id")
		 *     
		 *     can.route.param( { type: "video", id: 5 } ) // -> "video/5"
		 *     can.route.param( { type: "video", id: 5, isNew: false } ) 
		 *          // -> "video/5&isNew=false"
		 * 
		 * @param {Object} data Data object containing key/value properies to be parameterized
		 * @return {String} The route URL and &amp; separated parameters.
		 */
		param: function( data , _setRoute ) {
			// Check if the provided data keys match the names in any routes;
			// Get the one with the most matches.
			var route,
				// Need to have at least 1 match.
				matches = 0,
				matchCount,
				routeName = data.route,
				propCount = 0;
				
			delete data.route;
			
			each(data, function(){
				propCount++;
			});
			// Otherwise find route.
			each(can.route.routes, function(temp, name){
				// best route is the first with all defaults matching
				
				
				matchCount = matchesData(temp, data);
				if ( matchCount > matches ) {
					route = temp;
					matches = matchCount;
				}
				if(matchCount >= propCount){
					return false;
				}
			});
			// If we have a route name in our `can.route` data, and it's
			// just as good as what currently matches, use that
			if (can.route.routes[routeName] && matchesData(can.route.routes[routeName], data ) === matches) {
				route = can.route.routes[routeName];
			}
			// If this is match...
			if ( route ) {
				var cpy = extend({}, data),
                    // Create the url by replacing the var names with the provided data.
                    // If the default value is found an empty string is inserted.
					res = route.route.replace(matcher, function( whole, name ) {
                        delete cpy[name];
                        return data[name] === route.defaults[name] ? "" : encodeURIComponent( data[name] );
                    }),
                    after;
				// Remove matching default values
				each(route.defaults, function(val,name){
					if(cpy[name] === val) {
						delete cpy[name];
					}
				});
				
				// The remaining elements of data are added as 
				// `&amp;` separated parameters to the url.
				after = can.param(cpy);
				// if we are paraming for setting the hash
				// we also want to make sure the route value is updated
				if(_setRoute){
					can.route.attr('route',route.route);
				}
				return res + (after ? can.route._querySeparator + after : "");
			}
            // If no route was found, there is no hash URL, only paramters.
			return can.isEmptyObject(data) ? "" : can.route._querySeparator + can.param(data);
		},
		/**
		 * @function can.route.deparam
		 * @parent can.route
		 * 
		 * Creates a data object based on the query string passed into it. This is 
		 * useful to create an object based on the `location.hash`.
		 *
		 *     can.route.deparam("id=5&type=videos") 
		 *          // -> { id: 5, type: "videos" }
		 *
		 * 
		 * It's important to make sure the hash or exclamantion point is not passed
		 * to `can.route.deparam` otherwise it will be included in the first property's
		 * name.
		 *
		 *     can.route.attr("id", 5) // location.hash -> #!id=5
		 *     can.route.attr("type", "videos") 
		 *          // location.hash -> #!id=5&type=videos
		 *     can.route.deparam(location.hash) 
		 *          // -> { #!id: 5, type: "videos" }
		 *
		 * `can.route.deparam` will try and find a matching route and, if it does,
		 * will deconstruct the URL and parse our the key/value parameters into the data object.
		 *
		 *     can.route(":type/:id")
		 *
		 *     can.route.deparam("videos/5");
		 *          // -> { id: 5, route: ":type/:id", type: "videos" }
		 *
		 * @param {String} url Query string to be turned into an object.
		 * @return {Object} Data object containing properties and values from the string
		 */
		deparam: function( url ) {
			// See if the url matches any routes by testing it against the `route.test` `RegExp`.
            // By comparing the URL length the most specialized route that matches is used.
			var route = {
				length: -1
			};
			each(can.route.routes, function(temp, name){
				if ( temp.test.test(url) && temp.length > route.length ) {
					route = temp;
				}
			});
            // If a route was matched.
			if ( route.length > -1 ) { 

				var // Since `RegExp` backreferences are used in `route.test` (parens)
                    // the parts will contain the full matched string and each variable (back-referenced) value.
                    parts = url.match(route.test),
                    // Start will contain the full matched string; parts contain the variable values.
					start = parts.shift(),
                    // The remainder will be the `&amp;key=value` list at the end of the URL.
					remainder = url.substr(start.length - (parts[parts.length-1] === can.route._querySeparator ? 1 : 0) ),
                    // If there is a remainder and it contains a `&amp;key=value` list deparam it.
                    obj = (remainder && can.route._paramsMatcher.test(remainder)) ? can.deparam( remainder.slice(1) ) : {};

                // Add the default values for this route.
				obj = extend(true, {}, route.defaults, obj);
                // Overwrite each of the default values in `obj` with those in 
				// parts if that part is not empty.
				each(parts,function(part,  i){
					if ( part && part !== can.route._querySeparator) {
						obj[route.names[i]] = decodeURIComponent( part );
					}
				});
				obj.route = route.route;
				return obj;
			}
            // If no route was matched, it is parsed as a `&amp;key=value` list.
			if ( url.charAt(0) !== can.route._querySeparator ) {
				url = can.route._querySeparator + url;
			}
			return can.route._paramsMatcher.test(url) ? can.deparam( url.slice(1) ) : {};
		},
		/**
		 * @hide
		 * A can.Observe that represents the state of the history.
		 */
		data: new can.Observe({}),
        /**
         * @attribute
         * @type Object
		 * @hide
		 * 
         * A list of routes recognized by the router indixed by the url used to add it.
         * Each route is an object with these members:
         * 
		 *  - test - A regular expression that will match the route when variable values 
         *    are present; i.e. for :page/:type the `RegExp` is /([\w\.]*)/([\w\.]*)/ which
         *    will match for any value of :page and :type (word chars or period).
		 * 
         *  - route - The original URL, same as the index for this entry in routes.
         * 
		 *  - names - An array of all the variable names in this route
         * 
		 *  - defaults - Default values provided for the variables or an empty object.
         * 
		 *  - length - The number of parts in the URL separated by '/'.
         */
		routes: {},
		/**
		 * @function can.route.ready
		 * @parent can.route
		 * Indicates that all routes have been added and sets can.route.data
		 * based upon the routes and the current hash.
		 * 
		 * By default, ready is fired on jQuery's ready event.  Sometimes
		 * you might want it to happen sooner or earlier.  To do this, call:
		 * 
		 *     can.route.ready(false); //prevents firing by the ready event
		 *     can.route.ready(true); // fire the first route change
		 * 
		 * @param {Boolean} [val] Whether or not to fire the ready event.
		 * @return {can.route} `can.route` object.
		 */
		ready: function(val) {
			if( val === false ) {
				onready = val;
			}
			if( val === true || onready === true ) {
				can.route._setup();
				setState();
			}
			return can.route;
		},
		/**
		 * @function can.route.url
		 * @parent can.route
		 * 
		 * Similar to [can.route.link], but instead of creating an anchor tag, `can.route.url` creates 
		 * only the URL based on the route options passed into it.
		 *
		 *     can.route.url( { type: "videos", id: 5 } ) 
		 *          // -> "#!type=videos&id=5"
		 *
		 * If a route matching the provided data is found the URL is built from the data. Any remaining
		 * data is added at the end of the URL as & separated key/value parameters.
		 *
		 *     can.route(":type/:id")
		 *
		 *     can.route.url( { type: "videos", id: 5 } ) // -> "#!videos/5"
		 *     can.route.url( { type: "video", id: 5, isNew: false } ) 
		 *          // -> "#!video/5&isNew=false"
		 *
		 *
		 * @param {Object} options The route options (variables)
		 * @param {Boolean} merge true if the options should be merged with the current options
		 * @return {String} The route URL & separated parameters
		 */
		url: function( options, merge ) {
			if (merge) {
				options = extend({}, curParams, options)
			}
			return "#!" + can.route.param(options);
		},
		/**
		 * @function can.route.link
		 * @parent can.route
		 * 
		 * Creates and returns an anchor tag with an href of the route 
		 * attributes passed into it, as well as any properies desired
		 * for the tag.
		 *
		 *     can.route.link( "My videos", { type: "videos" }, {}, false )
		 *          // -> <a href="#!type=videos">My videos</a>
		 * 
		 * Other attributes besides href can be added to the anchor tag
		 * by passing in a data object with the attributes desired.
		 *
		 *     can.route.link( "My videos", { type: "videos" }, 
		 *       { className: "new" }, false ) 
		 *          // -> <a href="#!type=videos" class="new">My Videos</a>
		 *
		 * It is possible to utilize the current route options when making anchor
		 * tags in order to make your code more reusable. If merge is set to true,
		 * the route options passed into `can.route.link` will be passed into the
		 * current ones.
		 *
		 *     location.hash = "#!type=videos" 
		 *     can.route.link( "The zoo", { id: 5 }, true )
		 *          // -> <a href="#!type=videos&id=5">The zoo</true>
		 *
		 *     location.hash = "#!type=pictures" 
		 *     can.route.link( "The zoo", { id: 5 }, true )
		 *          // -> <a href="#!type=pictures&id=5">The zoo</true>
		 *
		 *
		 * @param {Object} name The text of the link.
		 * @param {Object} options The route options (variables)
		 * @param {Object} props Properties of the &lt;a&gt; other than href.
		 * @param {Boolean} merge true if the options should be merged with the current options
		 * @return {string} String containing the formatted &lt;a&gt; HTML element
		 */
		link: function( name, options, props, merge ) {
			return "<a " + makeProps(
			extend({
				href: can.route.url(options, merge)
			}, props)) + ">" + name + "</a>";
		},
		/**
		 * @function can.route.current
		 * @parent can.route
		 * 
		 * Checks the page's current URL to see if the route represents the options passed 
		 * into the function.
		 *
		 * Returns true if the options respresent the current URL.
		 * 
		 *     can.route.attr('id', 5) // location.hash -> "#!id=5"
		 *     can.route.current({ id: 5 }) // -> true
		 *     can.route.current({ id: 5, type: 'videos' }) // -> false
		 *     
		 *     can.route.attr('type', 'videos') 
		 *            // location.hash -> #!id=5&type=videos
		 *     can.route.current({ id: 5, type: 'videos' }) // -> true
		 * 
		 * 
		 * @param {Object} options Data object containing properties and values that might represent the route.
         * @return {Boolean} Whether or not the options match the current URL.
		 */
		current: function( options ) {
			return location.hash == "#!" + can.route.param(options)
		},
		_setup: function() {
			// If the hash changes, update the `can.route.data`.
			can.bind.call(window,'hashchange', setState);
		},
		_getHash: function() {
			return location.href.split(/#!?/)[1] || "";
		},
		_setHash: function(serialized) {
			var path = (can.route.param(serialized, true));
			location.hash = "#!" + path;
			return path;
		}
	});
	
	
    // The functions in the following list applied to `can.route` (e.g. `can.route.attr('...')`) will
    // instead act on the `can.route.data` observe.
	each(['bind','unbind','delegate','undelegate','attr','removeAttr'], function(name){
		can.route[name] = function(){
			// `delegate` and `undelegate` require
			// the `can/observe/delegate` plugin
			if(!can.route.data[name]) {
            	return;
			}

			return can.route.data[name].apply(can.route.data, arguments);
		}
	})

	var // A ~~throttled~~ debounced function called multiple times will only fire once the
        // timer runs down. Each call resets the timer.
		timer,
        // Intermediate storage for `can.route.data`.
        curParams,
        // Deparameterizes the portion of the hash of interest and assign the
        // values to the `can.route.data` removing existing values no longer in the hash.
        // setState is called typically by hashchange which fires asynchronously
        // So it's possible that someone started changing the data before the 
        // hashchange event fired.  For this reason, it will not set the route data
        // if the data is changing or the hash already matches the hash that was set.
        setState = can.route.setState = function() {
			var hash = can.route._getHash();
			curParams = can.route.deparam( hash );
			
			// if the hash data is currently changing, or
			// the hash is what we set it to anyway, do NOT change the hash
			if(!changingData || hash !== lastHash){
				can.route.attr(curParams, true);
			}
		},
		// The last hash caused by a data change
		lastHash,
		// Are data changes pending that haven't yet updated the hash
		changingData;

	// If the `can.route.data` changes, update the hash.
    // Using `.serialize()` retrieves the raw data contained in the `observable`.
    // This function is ~~throttled~~ debounced so it only updates once even if multiple values changed.
    // This might be able to use batchNum and avoid this.
	can.route.bind("change", function(ev, attr) {
		// indicate that data is changing
		changingData = 1;
		clearTimeout( timer );
		timer = setTimeout(function() {
			// indicate that the hash is set to look like the data
			changingData = 0;
			var serialized = can.route.data.serialize();

			lastHash = can.route._setHash(serialized);
		}, 1);
	});
	// `onready` event...
	can.bind.call(document,"ready",can.route.ready);

	// Libraries other than jQuery don't execute the document `ready` listener
	// if we are already DOM ready
	if( (document.readyState === 'complete' || document.readyState === "interactive") && onready) {
		can.route.ready();
	}

	// extend route to have a similar property 
	// that is often checked in mustache to determine
	// an object's observability
	can.route.constructor.canMakeObserve = can.Observe.canMakeObserve;

	return can.route;
})(module["can/util/jquery/jquery.js"], module["can/observe/observe.js"], module["can/util/string/deparam/deparam.js"]);// ## can/util/object/object.js

module['can/util/object/object.js'] = (function( can ) {
	
var isArray = can.isArray,
	// essentially returns an object that has all the must have comparisons ...
	// must haves, do not return true when provided undefined
	cleanSet = function(obj, compares){
		var copy = can.extend({}, obj);
		for(var prop in copy) {
			var compare = compares[prop] === undefined ? compares["*"] : compares[prop];
			if( same(copy[prop], undefined, compare ) ) {
				delete copy[prop]
			}
		}
		return copy;
	},
	propCount = function(obj){
		var count = 0;
		for(var prop in obj) count++;
		return count;
	};

/**
 * @class can.Object
 * @parent can.util
 * 
 * Object contains several helper methods that 
 * help compare objects.
 * 
 * ## same
 * 
 * Returns true if two objects are similar.
 * 
 *     can.Object.same({foo: "bar"} , {bar: "foo"}) //-> false
 *   
 * ## subset
 * 
 * Returns true if an object is a set of another set.
 * 
 *     can.Object.subset({}, {foo: "bar"} ) //-> true
 * 
 * ## subsets
 * 
 * Returns the subsets of an object
 * 
 *     can.Object.subsets({userId: 20},
 *                      [
 *                       {userId: 20, limit: 30},
 *                       {userId: 5},
 *                       {}
 *                      ]) 
 *              //->    [{userId: 20, limit: 30}]
 */
can.Object = {};

/**
 * @function same
 * Returns if two objects are the same.  It takes an optional compares object that
 * can be used to make comparisons.
 * 
 * This function does not work with objects that create circular references.
 * 
 * ## Examples
 * 
 *     can.Object.same({name: "Justin"},
 *                   {name: "JUSTIN"}) //-> false
 *     
 *     // ignore the name property
 *     can.Object.same({name: "Brian"},
 *                   {name: "JUSTIN"},
 *                   {name: null})      //-> true
 *     
 *     // ignore case
 *     can.Object.same({name: "Justin"},
 *                   {name: "JUSTIN"},
 *                   {name: "i"})      //-> true
 *     
 *     // deep rule
 *     can.Object.same({ person : { name: "Justin" } },
 *                   { person : { name: "JUSTIN" } },
 *                   { person : { name: "i"      } }) //-> true
 *                   
 *     // supplied compare function
 *     can.Object.same({age: "Thirty"},
 *                   {age: 30},
 *                   {age: function( a, b ){
 *                           if( a == "Thirty" ) { 
 *                             a = 30
 *                           }
 *                           if( b == "Thirty" ) {
 *                             b = 30
 *                           }
 *                           return a === b;
 *                         }})      //-> true
 * 
 * @param {Object} a an object to compare
 * @param {Object} b an object to compare
 * @param {Object} [compares] an object that indicates how to 
 * compare specific properties. 
 * Typically this is a name / value pair
 * 
 *     can.Object.same({name: "Justin"},{name: "JUSTIN"},{name: "i"})
 *     
 * There are two compare functions that you can specify with a string:
 * 
 *   - 'i' - ignores case
 *   - null - ignores this property
 * 
 * @param {Object} [deep] used internally
 */
var same = can.Object.same = function(a, b, compares, aParent, bParent, deep){
	var aType = typeof a,
		aArray = isArray(a),
		comparesType = typeof compares,
		compare;
	
	if(comparesType == 'string' || compares === null ){
		compares = compareMethods[compares];
		comparesType = 'function'
	}
	if(comparesType == 'function'){
		return compares(a, b, aParent, bParent)
	} 
	compares = compares || {};
	
	if(a instanceof Date){
		return a === b;
	}
	if(deep === -1){
		return aType === 'object' || a === b;
	}
	if(aType !== typeof  b || aArray !== isArray(b)){
		return false;
	}
	if(a === b){
		return true;
	}
	if(aArray){
		if(a.length !== b.length){
			return false;
		}
		for(var i =0; i < a.length; i ++){
			compare = compares[i] === undefined ? compares["*"] : compares[i]
			if(!same(a[i],b[i], a, b, compare )){
				return false;
			}
		};
		return true;
	} else if(aType === "object" || aType === 'function'){
		var bCopy = can.extend({}, b);
		for(var prop in a){
			compare = compares[prop] === undefined ? compares["*"] : compares[prop];
			if(! same( a[prop], b[prop], compare , a, b, deep === false ? -1 : undefined )){
				return false;
			}
			delete bCopy[prop];
		}
		// go through bCopy props ... if there is no compare .. return false
		for(prop in bCopy){
			if( compares[prop] === undefined || 
			    ! same( undefined, b[prop], compares[prop] , a, b, deep === false ? -1 : undefined )){
				return false;
			}
		}
		return true;
	} 
	return false;
};

/**
 * @function subsets
 * Returns the sets in 'sets' that are a subset of checkSet
 * @param {Object} checkSet
 * @param {Object} sets
 */
can.Object.subsets = function(checkSet, sets, compares){
	var len = sets.length,
		subsets = [],
		checkPropCount = propCount(checkSet),
		setLength;
		
	for(var i =0; i < len; i++){
		//check this subset
		var set = sets[i];
		if( can.Object.subset(checkSet, set, compares) ){
			subsets.push(set)
		}
	}
	return subsets;
};
/**
 * @function subset
 * Compares if checkSet is a subset of set
 * @param {Object} checkSet
 * @param {Object} set
 * @param {Object} [compares]
 * @param {Object} [checkPropCount]
 */
can.Object.subset = function(subset, set, compares){
	// go through set {type: 'folder'} and make sure every property
	// is in subset {type: 'folder', parentId :5}
	// then make sure that set has fewer properties
	// make sure we are only checking 'important' properties
	// in subset (ones that have to have a value)
	
	var setPropCount =0,
		compares = compares || {};
			
	for(var prop in set){

		if(! same(subset[prop], set[prop], compares[prop], subset, set )  ){
			return false;
		} 
	}
	return true;
}


var compareMethods = {
	"null" : function(){
		return true;
	},
	i : function(a, b){
		return (""+a).toLowerCase() == (""+b).toLowerCase()
	}
}
	
return can.Object;

})(module["can/util/jquery/jquery.js"]);// ## can/observe/backup/backup.js

module['can/observe/backup/backup.js'] = (function (can) {
	var flatProps = function (a) {
		var obj = {};
		for (var prop in a) {
			if (typeof a[prop] !== 'object' || a[prop] === null || a[prop] instanceof Date) {
				obj[prop] = a[prop]
			}
		}
		return obj;
	};

	can.extend(can.Observe.prototype, {

		/**
		 * @function can.Observe.prototype.backup
		 * @plugin can/observe/backup
		 * @parent can.Observe.backup
		 *
		 * `observe.backup()` backs up a [can.Observe] instance, so it can be restored later
		 * by calling [can.Observe.prototype.restore] or checked if it
		 * has changed with [can.Observe.prototype.isDirty]:
		 *
		 *      var recipe = new can.Observe({
		 *           name : 'Pancakes',
		 *           ingredients : [{
		 *               name : "eggs",
		 *               amount : '1'
		 *           }, {
		 *               name : "flour",
		 *               amount : '1 cup'
		 *           }, {
		 *               name : "milk",
		 *               amount : '1 1/4 cup'
		 *           }]
		 *       });
		 *
		 *       recipe.backup();
		 *
		 * @return {can.Observe} The observe instance
		 */
		backup : function () {
			this._backupStore = this._attrs();
			return this;
		},

		/**
		 * @function can.Observe.prototype.isDirty
		 * @plugin can/observe/backup
		 * @parent can.Observe.backup
		 *
		 * `observe.isDirty([checkAssociations])` returns if the observe has changed since the last
		 * [can.Observe.prototype.backup] call. If there is no backup it will return false. If you pass
		 * true, _isDirty_ also checks if any child properties or [can.Model] associations have changed.
		 *
		 *       var recipe = new can.Observe({
		 *           name : 'Pancakes',
		 *           ingredients : [{
		 *               name : "eggs",
		 *               amount : '1'
		 *           }, {
		 *               name : "flour",
		 *               amount : '1 cup'
		 *           }, {
		 *               name : "milk",
		 *               amount : '1 1/4 cup'
		 *           }]
		 *       });
		 *
		 *       recipe.backup();
		 *       // Change the attribute of a nested property
		 *       recipe.attr('ingredients.0.amount', '2');
		 *       recipe.isDirty() // -> false
		 *       recipe.isDirty(true) // -> true
		 *       recipe.attr('name', 'Eggcakes');
		 *       recipe.isDirty() // -> true
		 *
		 * @param {Boolean} [checkAssociations] Whether nested objects should be checked or
		 * not. Defaults to false.
		 * @return {Boolean} true if there are changes,
		 *   false if not or there is no backup
		 */
		isDirty : function (checkAssociations) {
			return this._backupStore &&
				!can.Object.same(this._attrs(),
					this._backupStore,
					undefined,
					undefined,
					undefined,
					!!checkAssociations);
		},

		/**
		 * @function can.Observe.prototype.restore
		 * @parent can.Observe.backup
		 *
		 * `observe.restore([restoreAssociations])` restores the observe to the state of the last time
		 * [can.Observe.prototype.backup] was called if [can.Observe.prototype.isDirty]
		 * returns true. If you pass true, _restore_ will also check and restore all nested properties
		 * and [can.Model] associations.
		 *
		 *      var recipe = new can.Observe({
		 *          name : 'Pancakes',
		 *          ingredients : [{
		 *              name : "eggs",
		 *              amount : '1'
		 *          }, {
		 *              name : "flour",
		 *              amount : '1 cup'
		 *          }, {
		 *              name : "milk",
		 *              amount : '1 1/4 cup'
		 *       }]});
		 *
		 *       recipe.backup();
		 *
		 *       // Change the attribute of a nested observe
		 *       recipe.attr('ingredients.0.amount', '2');
		 *       recipe.attr('name', 'Eggcakes');
		 *       recipe.attr('name') // -> Eggcakes
		 *       recipe.attr('ingredients.0.amount') // -> 2
		 *       recipe.restore(true);
		 *       recipe.attr('name') // -> Pancakes
		 *       recipe.attr('ingredients.0.amount') // -> 1
		 *
		 * @param {Boolean} [restoreAssociations] Whether nested objects should also
		 * be restored or not. Defaults to false.
		 * @return {can.Observe} The observe instance
		 */
		restore : function (restoreAssociations) {
			var props = restoreAssociations ? this._backupStore : flatProps(this._backupStore)

			if (this.isDirty(restoreAssociations)) {
				this._attrs(props);
			}

			return this;
		}

	})

	return can.Observe;
})(module["can/util/jquery/jquery.js"], module["can/observe/observe.js"], module["can/util/object/object.js"]);

window.define = module._define;

window.module = module._orig;