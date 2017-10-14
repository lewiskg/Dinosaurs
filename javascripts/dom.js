"use strict";

const domString = (dinosaur) => {
	$('#dinosaur').append(`<h1>${dinosaur.type}</h1>`);
};


module.exports = domString; 