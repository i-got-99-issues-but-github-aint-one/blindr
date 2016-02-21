//const images = [...];

const names = ["William Murphy","Richard Simmons","James Cox","Richard Sanders","James Robinson","James Sullivan","John Taylor","John Ellis","Richard Adams","James Price","James Howard","David Phillips", "Michelle Moore", "Sharon Wright","Kimberly Martinez","Dorothy Ellis","Donna Rogers","Sarah Wilson","Kimberly Rogers","Karen Cox"]

const nicknames = ["vanilla", "milf-hunter", "the stud", "the asshat", "the dipshit", "fuck nugget", "fudgenozzle", "douche-truck", "papi", "butt nugget", "ex-wife", "donald trump"]

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function () {
    const [fname, sname] = names[getRandomInt(0, names.length)].split(' ');
    const nickname = nicknames[getRandomInt(0, nicknames.length)];

    const full_name = `${fname} "${nickname}" ${sname}`

    return {
        name: full_name,
        images: [], //images[getRandomInt(0, images.length)],
        age: getRandomInt(18, 25)
    };
}
