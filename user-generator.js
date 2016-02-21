//const images = [...];

const names = ['William Murphy','Richard Simmons','James Cox','Richard Sanders','James Robinson','James Sullivan','John Taylor','John Ellis','Richard Adams','James Price','James Howard','David Phillips', 'Michelle Moore', 'Sharon Wright','Kimberly Martinez','Dorothy Ellis','Donna Rogers','Sarah Wilson','Kimberly Rogers','Karen Cox'];
const nicknames = ['vanilla', 'milf-hunter', 'the stud', 'the asshat', 'the dipshit', 'fuck nugget', 'fudgenozzle', 'douche-truck', 'papi', 'butt nugget', 'ex-wife', 'donald trump'];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(array) {
	const min = 0;
	const max = array.length;
  const random = getRandomInt(min, max);
  return array[random];
}

export default function () {
	const [fname, sname] = getRandom(names).split(' ');
	const nickname = getRandom(nicknames);

	return {
		name: `${fname} "${nickname}" ${sname}`,
		images: [], //images[getRandomInt(0, images.length)],
		age: getRandomInt(18, 35),
	};
}
