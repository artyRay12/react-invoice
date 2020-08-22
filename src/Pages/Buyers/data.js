export const emptyArr = new Array(15);

const names = ["Freddie", "Chester", "Robert", "James"];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export const data = emptyArr.fill("").map((_, ind) => {
    return {
        id: ind,
        name: names[getRandomInt(4)],
        avg: getRandomInt(500),
        buyCount: getRandomInt(12),
        total: getRandomInt(1000),
    };
});
