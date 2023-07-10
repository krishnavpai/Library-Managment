const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser, 
  addBook,
  getBooks,
  getBooksTitle
} = require("./user.controller");


router.get("/", checkToken, getUsers);

router.post("/add", createUser);

// router.get("/:id", checkToken, getUserByUserId);
router.post("/login", login);
router.patch("/", checkToken, updateUsers);
router.delete("/", checkToken, deleteUser);

router.post("/addbook", addBook);

router.get("/getbooks", getBooks);

router.get("/get?title=*", getBooksTitle);

module.exports = router;