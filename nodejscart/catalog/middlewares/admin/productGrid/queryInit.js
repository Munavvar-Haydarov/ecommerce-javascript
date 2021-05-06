var { select } = require('../../../../../lib/mysql/query');

module.exports = function (request, response) {
    let query = select("*").from("product");
    query.leftJoin("product_description").on("product.`product_id`", "=", "product_description.`product_description_product_id`");

    return query;
}