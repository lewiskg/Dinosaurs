"use strict";

const outputDiv = $('#dinosaurs');

const domString = (dinosaur) => {
	console.log("in domString:",dinosaur);

	let domStrang = '';
		domStrang += `<div class=${dinosaur.info === 'Carnivore' ? 'card-bad' : 'card-good'}>`;
		domStrang += 	`<h1>${dinosaur.type}</h1>`;
		domStrang += 	`<h4>${dinosaur.bio}</h14>`;
		if (dinosaur.info ==='Carnivore') {
			domStrang += `<h4> Has some tasty snacks.</h4>`;
		} else {
			domStrang += `<h4>Has some adorable (debatable) friends.</h4>`;
		}
		domStrang += `<div class="card-holder">`;
		dinosaur.snacks.forEach((cat) => {
			domStrang += `<div class="card">`;
			domStrang += `<h5>$cat.name}</h5>`;
			domStrang += `<div class="card-img">`;
			domStrang += `<img src="${cat.imageUrl}>">`;
			domStrang += `</div>`;
			domStrang += `<p class="card-description">${cat.specialSkill}</p>`;
			domStrang += `</div>`;
		});
		domStrang += `</div>`;
		domStrang += `</div>`;
	printToDom(domStrang);
	console.log("in domString:",domStrang);
};

const printToDom = (strang) => {
	outputDiv.append(strang);
};

module.exports = {domString:domString}; 