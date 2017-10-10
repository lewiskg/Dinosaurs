(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const dom = require("./dom");

let dinosaurs = [];


// // Old way - Pyramid of DOOM
// let dinoGetter = () => {
// 	$.ajax("./db/dinosaurs1.json").done(function(data1){
// 		console.log("data1", data1);
// 		data1.dinosaurs1.forEach(function(dino){
// 			dinosaurs.push(dino);
// 		});
// 		$.ajax("./db/dinosaurs2.json").done(function(data2){
// 			console.log("data2", data1);
// 			data2.dinosaurs2.forEach(function(dino){
// 			dinosaurs.push(dino);
// 			});
// 			$.ajax("./db/dinosaurs3.json").done(function(data3){
// 				console.log("data2", data1);
// 				data3.dinosaurs3.forEach(function(dino){
// 				dinosaurs.push(dino);
// 				});
// 			console.log("dinosaurs array", dinosaurs);
// 			});
// 		});
// 	});
// };


// const initializer = () => {
// 	dom({name: 'T-rex'});
// };

let firstDinosaurJSON = () => {
		return new Promise(function(resolve, reject) {
		$.ajax('./db/dinosaurs1.json').done(function(data1){
			resolve(data1.dinosaurs1);
		}).fail(function(error1){
			reject(error1);
		});
	});
};

let dinoGetter = () => {
	firstDinosaurJSON().then(function(results){
		console.log("results from dino1 ",results);
	}).catch(function(error){
		console.log("error from dino1 ", error);
	});
};

const initializer = () => {
	dinoGetter();
};

const getDinosaurs = function() {
	return dinosaurs;
};

module.exports = {initializer:initializer, getDinosaurs:getDinosaurs};

},{"./dom":2}],2:[function(require,module,exports){
"use strict";

const domString = (dinosaur) => {
	$('#dinosaur').append(`<h1>${dinosaur.name}</h1>`);
};


module.exports = domString; 
},{}],3:[function(require,module,exports){
"use strict";

const data = require('./data');

$(document).ready(function() {
	data.initializer();
});

},{"./data":1}]},{},[3]);
