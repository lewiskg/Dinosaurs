"use strict";

const domString = (dinosaur) => {
	$('#dinosaur').append(`<h1>${dinosaur.name}</h1>`);
};


module.exports = domString; 