// Ensure web streams (ReadableStream) are available for libraries that expect them
try {
	const _ws = require('web-streams-polyfill/ponyfill');
	if (typeof global.ReadableStream === 'undefined' && _ws && _ws.ReadableStream) global.ReadableStream = _ws.ReadableStream;
	if (typeof global.WritableStream === 'undefined' && _ws && _ws.WritableStream) global.WritableStream = _ws.WritableStream;
	if (typeof global.TransformStream === 'undefined' && _ws && _ws.TransformStream) global.TransformStream = _ws.TransformStream;
} catch (e) {
	// ignore if not installed yet — test runs will surface missing dependency
}

// If the polyfill didn't provide streams, create minimal stubs so imports that check
// for their existence don't throw at module load time.
if (typeof global.ReadableStream === 'undefined') {
	// minimal no-op implementations
	global.ReadableStream = class ReadableStream { constructor() {} };
}
if (typeof global.WritableStream === 'undefined') {
	global.WritableStream = class WritableStream { constructor() {} };
}
if (typeof global.TransformStream === 'undefined') {
	global.TransformStream = class TransformStream { constructor() { this.readable = null; this.writable = null; } };
}

// Provide minimal MessageChannel/MessagePort stubs if missing (some libs check these)
if (typeof global.MessageChannel === 'undefined') {
	global.MessageChannel = class MessageChannel { constructor() { this.port1 = {}; this.port2 = {}; } };
}
if (typeof global.MessagePort === 'undefined') {
	global.MessagePort = class MessagePort { constructor() { this.onmessage = null; } postMessage() {} };
}

// setupTests.js: provide minimal polyfills for TextEncoder/TextDecoder if missing
if (typeof TextDecoder === 'undefined' || typeof TextEncoder === 'undefined') {
	try {
		const util = require('util');
		const TextDecoderImpl = util.TextDecoder;
		const TextEncoderImpl = util.TextEncoder;
		if (typeof TextDecoder === 'undefined') {
			if (typeof TextDecoderImpl !== 'undefined') global.TextDecoder = TextDecoderImpl;
			else global.TextDecoder = function () { this.decode = () => ''; };
		}
		if (typeof TextEncoder === 'undefined') {
			if (typeof TextEncoderImpl !== 'undefined') global.TextEncoder = TextEncoderImpl;
			else global.TextEncoder = function () { this.encode = () => new Uint8Array(); };
		}
	} catch (e) {
		if (typeof TextDecoder === 'undefined') global.TextDecoder = function () { this.decode = () => ''; };
		if (typeof TextEncoder === 'undefined') global.TextEncoder = function () { this.encode = () => new Uint8Array(); };
	}
}

// Configure Enzyme adapter for shallow rendering
try {
	// (debug logs removed)
	const Enzyme = require('enzyme');
	const Adapter = require('enzyme-adapter-react-16');
	Enzyme.configure({ adapter: new Adapter() });
	// expose shallow/mount/render globally for tests to use without importing enzyme directly
	global.shallow = Enzyme.shallow;
	global.mount = Enzyme.mount;
	global.renderEnzyme = Enzyme.render;
} catch (e) {
	// if Enzyme isn't available, report the error so we can debug why shallow isn't set
	// eslint-disable-next-line no-console
	console.error('Enzyme setup failed in setupTests:', e && e.message ? e.message : e);
}
