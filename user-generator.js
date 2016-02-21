const images = ["girl1.jpg","girl7.jpg","guy4.jpg","hotgirl2.jpg","hotguy3.jpg","girl10.jpg","girl8.jpg","guy5.jpg","hotgirl3.jpg","hotguy4.jpg","girl2.jpg","girl9.jpg","guy6.jpg","hotgirl4.jpeg","uglygirl1.jpg","girl3.jpg","guy1.jpg","guy7.jpg","hotgirl5.jpg","uglygirl2.jpg","girl4.jpg","guy10.jpg","guy8.jpg","hotgirl6.jpg","uglyguy.jpg","girl5.jpg","guy2.jpg","guy9.jpg","hotguy1.jpg","uglyguy2.jpg","girl6.jpg","guy3.jpg","hotgirl1.jpg","hotguy2.jpg"];

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
        images: [images[getRandomInt(0, images.length)]],
        age: getRandomInt(18, 25)
    };
}
