import {normalImages, uglyImages} from './photos';

const names = ['William Murphy','Richard Simmons','James Cox','Richard Sanders','James Robinson','James Sullivan','John Taylor','John Ellis','Richard Adams','James Price','James Howard','David Phillips', 'Michelle Moore', 'Sharon Wright','Kimberly Martinez','Dorothy Ellis','Donna Rogers','Sarah Wilson','Kimberly Rogers','Karen Cox'];
const nicknames = ['vanilla', 'milf-hunter', 'the stud', 'the asshat', 'the dipshit', 'fuck nugget', 'fudgenozzle', 'douche-truck', 'papi', 'butt nugget', 'ex-wife', 'donald trump'];

const allImages = [...normalImages, ...uglyImages];

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(array) {
	const min = 0;
	const max = array.length;
	const random = getRandomInt(min, max);
	return array[random];
}

export function genUser() {
	const [fname, sname] = getRandom(names).split(' ');
	const nickname = getRandom(nicknames);

	const images = [
		getRandom(uglyImages),
		getRandom(normalImages),
		getRandom(normalImages),
		getRandom(normalImages),
		getRandom(normalImages),
		getRandom(normalImages),
	];

	images.sort(() => 0.5 - Math.random());

	return {
		name: `${fname} "${nickname}" ${sname}`,
		images: images,
		age: getRandomInt(18, 35),
	};
}

export function genImage() {
	return getRandom(allImages);
}
