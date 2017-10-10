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

let secondDinosaurJSON = () => {
	return new Promise(function(resolve, reject) {
		$.ajax('./db/dinosaurs2.json').done(function(data2){
			resolve(data2.dinosaurs2);
		}).fail(function(error2){
			reject(error2);
		});
	});
};

let thirdDinosaurJSON = () => {
	return new Promise(function(resolve, reject) {
		$.ajax('./db/dinosaurs3.json').done(function(data3){
			resolve(data3.dinosaurs3);
		}).fail(function(error3){
			reject(error3);
		});
	});
};

let dinoGetter = () => {
	Promise.all([firstDinosaurJSON(), secondDinosaurJSON(), thirdDinosaurJSON()]).then(function(results){
		console.log("results from promise.all", results);
		results.forEach(function(results){
			results.forEach(function(dino){
				console.log(dino);
				dinosaurs.push(dino);
			});
		});
		makeDinos();
	}).catch(function(error){
		console.log("error from Promise.all", error);
	});
};

let makeDinos = () => {
	dinosaurs.forEach(function(dino){
		dom(dino);
	});
};

// // 3rd one we did: best way to do it for order dependent data load (dino data is independent of each other and doesn't require this method)
// let dinoGetter = () => {
// 	firstDinosaurJSON().then(function(results1){
// 		results1.forEach(function(dino){
// 			dinosaurs.push(dino);
// 		});
// 		return secondDinosaurJSON();
// 	}).then(function(results2){
// 		results2.forEach(function(dino) {
// 				dinosaurs.push(dino);
// 		});
// 		return thirdDinosaurJSON();
// 	}).then(function(results3){
// 		results3.forEach(function(dino) {
// 			dinosaurs.push(dino);
// 		});
// 		console.log("dinosaurs", dinosaurs);
// 		makeDinos();
// 	});
// };

// let makeDinos = () => {
// 	dinosaurs.forEach(function(dino){
// 		dom(dino);
// 	});
// };


// 2nd one we did:
// // PROMISE WORKS - PROMISE PYRAMID OF DOOM
// let dinoGetter = () => {
// 	firstDinosaurJSON().then(function(results1){
// 		results1.forEach(function(dino) {
// 			dinosaurs.push(dino);
// 		});
// 		secondDinosaurJSON().then(function(results2){
// 			results2.forEach(function(dino) {
// 				dinosaurs.push(dino);
// 			});
// 		});
// 		thirdDinosaurJSON().then(function(results3){
// 			results3.forEach(function(dino) {
// 				dinosaurs.push(dino);
// 			});
// 		console.log("results from dino",dinosaurs);	
// 		});
// 	}).catch(function(error){
// 			console.log("error from dino1", error);
// 	});	
// };

// 1st one we did:
// let dinoGetter = () => {
// 	firstDinosaurJSON().then(function(results){
// 		console.log("results from dino1 ",results);
// 	}).catch(function(error){
// 		console.log("error from dino1 ", error);
// 	});
// };

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
	$('#dinosaur').append(`<h1>${dinosaur.type}</h1>`);
};


module.exports = domString; 
},{}],3:[function(require,module,exports){
"use strict";

const data = require('./data');

$(document).ready(function() {
	data.initializer();
});

},{"./data":1}]},{},[3]);
