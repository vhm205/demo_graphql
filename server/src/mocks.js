const { faker } = require('@faker-js/faker');

module.exports.mocks = {
    Query: () => ({
        tracksForHome: () => [...new Array(6)],
    }),
    Track: () => ({
        id: () => faker.unique(faker.internet.password),
        title: () => faker.commerce.productName(),
        author: () => {
            return {
                name: faker.company.companyName(),
                photo:
                    'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
            };
        },
        thumbnail: () =>
            'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
        length: () => faker.finance.routingNumber(),
        modulesCount: () => faker.finance.routingNumber(),
    }),
};