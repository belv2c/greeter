"use strict";

const french = require('./french');
const italian = require('./italian');
const spanish = require('./spanish');
const english = require('./english');



const greetingGenerator = {
	french, italian, spanish
};




module.exports = greetingGenerator;