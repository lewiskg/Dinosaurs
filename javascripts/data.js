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
			//console.log("cat results", results);
			makeDinos();
		});
	}).catch(function(error){
		console.log("error from Promise.all", error);
	});
};

let makeDinos = () => {
	dinosaurs.forEach(function(dinos){
		dom.domString(dinos);
	});
};


const initializer = () => {
	dinoGetter();
};

const getDinosaurs = function() {
	return dinosaurs;
};

module.exports = {initializer:initializer, getDinosaurs:getDinosaurs};
