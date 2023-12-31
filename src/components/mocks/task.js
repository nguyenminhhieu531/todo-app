import { v4 as uuidv4 } from "uuid";
// ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
let items = [
  {
    id: uuidv4(),
    name: "Abc Lorem ipsum sit amet, consectetur adipisicing elit.",
    level: 0, // 0 Small, 1 Medium, 2 High
  },
  {
    id: uuidv4(),
    name: "Def Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    level: 1, // 0 Small, 1 Medium, 2 High
  },
  {
    id: uuidv4(),
    name: "Ghj Lorem ipsum sit amet, consectetur adipisicing elit.",
    level: 2, // 0 Small, 1 Medium, 2 High
  },
  {
    id: uuidv4(),
    name: "123 Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    level: 0, // 0 Small, 1 Medium, 2 High
  },
];

export default items;
