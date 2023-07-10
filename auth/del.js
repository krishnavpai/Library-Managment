const { hashSync, genSaltSync, compareSync } = require("bcrypt");


const salt = genSaltSync(10);

body.password = hashSync("test", salt);
console.log(body.password);

$2b$10$oyIWqXaurBjRL.tDOjx5veJtY/qKmkse0UHkls/EZ6mAGi177aCYa
$2b$10$hvPkhX2HnV11X48BaBrMcer82Mtm8O25tVXGuPY6CCwNLxdpd0y7q