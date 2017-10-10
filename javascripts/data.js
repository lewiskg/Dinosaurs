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
