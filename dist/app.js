(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const dom = require("./dom");

let dinosaurs = [];

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

let allTheCats = () => {
	return new Promise(function(resolve, reject) {
		$.ajax('./db/cats.json').done(function(data4){
			resolve(data4.cats);
		}).fail(function(error4){
			reject(error4);
		});
	});
};

let dinoGetter = () => {
	Promise.all([firstDinosaurJSON(), secondDinosaurJSON(), thirdDinosaurJSON()]).then(function(results){
		allTheCats().then((cats) => {
			// console.log("results from promise.all", results);
			results.forEach(function(results){
				results.forEach(function(dino){
					// console.log(dino);
					dino.snacks = [];
					dino.catIds.forEach((catId) => {
						// console.log("catId", catId);
						cats.forEach((cat) =>{
							if(cat.id === catId){
								dino.snacks.push(cat);
							}
						});
					});
					// console.log(dino);
					dinosaurs.push(dino);
				});			
			});
			// allTheCats().then((results) => {
				// console.log("cat results", results);
		});

		console.log("dino", dinosaurs);
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
