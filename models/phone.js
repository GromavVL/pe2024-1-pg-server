const { deleteById } = require('./user');

class Phone {
  static async create ({ brand, model, price, color, manufactured_year }) {
    try {
      const query = `
      INSERT INTO phones (brand, model, price, color, manufactured_year)
      VALUES( $1, $2, $3, $4, $5)
      RETURNING *
      `;

      const createPhone = await Phone.pool.query(query, [
        brand,
        model,
        price,
        color,
        manufactured_year,
      ]);
      return createPhone.rows[0];
    } catch (err) {
      throw err;
    }
  }
  static async getById (phoneId) {
    try {
      const query = `
        SELECT *
        FROM phones
        WHERE id = $1
        `;

      const foundPhone = await Phone.pool.query(query, [phoneId]);
      return foundPhone.rows[0];
    } catch (err) {
      throw err;
    }
  }
  static async getAll ( limit, offset ) {
    try {
      const query = `
        SELECT *
        FROM phones
        ORDER BY id
        LIMIT $1 OFFSET $2
      `;
      const foundPhone = await Phone.pool.query(query, [limit, offset]);
      // console.log('foundPhone :>> ', foundPhone);
      return foundPhone.rows;
    } catch (err) {
      console.log('err :>> ', err);
      throw err;
    }
  }
  static async updateById (
    { brand, model, price, color, manufactured_year },
    phoneId
  ) {
    try {
      const query = `
      UPDATE phones
      SET brand = $1,
          model = $2,
          price = $3,
          color = $4,
          manufactured_year = $5
      WHERE id = $6
      RETURNING *
      `;

      const updatePhone = await Phone.pool.query(query, [
        brand,
        model,
        price,
        color,
        manufactured_year,
        phoneId,
      ]);
      return updatePhone.rows[0];
    } catch (err) {
      throw err;
    }
  }
  static async deleteById (phoneId) {
    try {
      const query = `
      DELETE FROM phones
      WHERE id = $1
      RETURNING 1;
      `;

      const deletePhone = await Phone.pool.query(query, [phoneId]);
      return deletePhone.rows;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Phone;
