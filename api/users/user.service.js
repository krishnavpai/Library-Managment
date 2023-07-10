const pool = require("../../config/database");

module.exports = {
  
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO registration(firstName, lastName, gender, email, password, number) VALUES(?,?,?,?,?,?)`,
      [
        data.first_name,
        data.last_name,
        data.gender,
        data.email,
        data.password,
        data.number
      ],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },



  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from registration where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserId: (id, callBack) => {
    pool.query(
      `select id,firstName,lastName,gender,email,number from registration where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUsers: callBack => {
    pool.query(
      `select id,firstName,lastName,gender,email,number from registration`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update registration set firstName=?, lastName=?, gender=?, email=?, password=?, number=? where id = ?`,
      [
        data.first_name,
        data.last_name,
        data.gender,
        data.email,
        data.password,
        data.number,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from registration where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  addBook: (data, callBack) => {
    pool.query(
      `INSERT INTO books(bookName, authorName, isbn) VALUES(?,?,?)`,
      [
        data.title,
        data.author,
        data.isbn
      ],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getBooks: callBack => {
    pool.query(
      `select id,bookName,authorName,isbn from books`, 
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getBooksTitle: (title, callBack) => {
    pool.query(
      `SELECT * FROM books WHERE bookName LIKE '%${title}%'`,
      [title],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        console.log(results);
        return callBack(null, results);
      }
    );
  }
            


};