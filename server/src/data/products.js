import { Types } from "mongoose";

export const products = [
  {
    //------ Table-----------------
    name: "Coffee Table",
    categoryId: new Types.ObjectId("67239c42ded8e96ba8db0e13"),
    price: 149.99,
    size: "90",
    material: "Glass and Metal",
    color: "Black",
    available: 20,
    description: "A stylish coffee table with a glass top and metal frame.",
  },
  {
    //------ Chair-----------------
    name: "Dining Chair",
    categoryId: new Types.ObjectId("67239c42ded8e96ba8db0e14"),
    price: 89.99,
    size: "45",
    material: "Wood",
    color: "Brown",
    available: 30,
    description: "A comfortable wooden dining chair.",
  },
  {
    name: "Dining Chair",
    categoryId: new Types.ObjectId("67239c42ded8e96ba8db0e14"),
    price: 89.99,
    size: "45",
    material: "Wood",
    color: "Brown",
    available: 30,
    description: "A comfortable wooden dining chair.",
  },
  {
    name: "Armchair",
    categoryId: new Types.ObjectId("67239c42ded8e96ba8db0e14"),
    price: 199.99,
    size: "70",
    material: "Fabric",
    color: "Gray",
    available: 15,
    description: "A cozy armchair perfect for relaxation.",
  },
  {
    name: "Office Chair",
    categoryId: new Types.ObjectId("67239c42ded8e96ba8db0e14"),
    price: 129.99,
    size: "60",
    material: "Mesh",
    color: "Black",
    available: 20,
    description: "An ergonomic office chair for long working hours.",
  },
  {
    name: "Bar Stool",
    categoryId: new Types.ObjectId("67239c42ded8e96ba8db0e14"),
    price: 89.99,
    size: "75",
    material: "Metal",
    color: "Silver",
    available: 10,
    description: "A stylish bar stool with a modern design.",
  },
  {
    name: "Rocking Chair",
    categoryId: new Types.ObjectId("67239c42ded8e96ba8db0e14"),
    price: 149.99,
    size: "70",
    material: "Wood",
    color: "Natural",
    available: 8,
    description: "A classic rocking chair for a relaxing experience.",
  },
  {
    name: "Gaming Chair",
    categoryId: new Types.ObjectId("67239c42ded8e96ba8db0e14"),
    price: 299.99,
    size: "65",
    material: "Synthetic Leather",
    color: "Red and Black",
    available: 5,
    description: "A comfortable gaming chair designed for gamers.",
  },
  {
    name: "Kids Chair",
    categoryId: new Types.ObjectId("67239c42ded8e96ba8db0e14"),
    price: 49.99,
    size: "40",
    material: "Plastic",
    color: "Blue",
    available: 50,
    description: "A colorful chair for kids' rooms.",
  },
  {
    name: "Folding Chair",
    categoryId: new Types.ObjectId("67239c42ded8e96ba8db0e14"),
    price: 39.99,
    size: "50",
    material: "Aluminum",
    color: "Green",
    available: 25,
    description: "A lightweight folding chair for easy storage.",
  },
  {
    name: "Bean Bag Chair",
    categoryId: new Types.ObjectId("67239c42ded8e96ba8db0e14"),
    price: 69.99,
    size: "70",
    material: "Fabric",
    color: "Purple",
    available: 15,
    description: "A fun and casual bean bag chair for lounging.",
  },
  {
    name: "Patio Chair",
    categoryId: new Types.ObjectId("67239c42ded8e96ba8db0e14"),
    price: 129.99,
    size: "60",
    material: "Wicker",
    color: "Beige",
    available: 10,
    description: "A weather-resistant patio chair for outdoor use.",
  },
  {
    //----------- Sofa-----------------
    name: "Leather Sofa",
    categoryId: new Types.ObjectId("67239c42ded8e96ba8db0e15"),
    price: 999.99,
    size: "200",
    material: "Leather",
    color: "Gray",
    available: 10,
    description: "A luxurious leather sofa that fits any living room.",
  },
  {
    //----------- Bed-----------------
    name: "Queen Size Bed",
    categoryId: new Types.ObjectId("67239c42ded8e96ba8db0e16"),
    price: 499.99,
    size: "160x200",
    material: "Wood and Fabric",
    color: "Beige",
    available: 5,
    description: "A cozy queen size bed with a soft headboard.",
  },
  {
    //----------- Wardrobe-----------------
    name: "Wardrobe",
    categoryId: new Types.ObjectId("67239c42ded8e96ba8db0e17"),
    price: 599.99,
    size: "120",
    material: "Wood",
    color: "White",
    available: 8,
    description: "A spacious wardrobe with sliding doors.",
  },
  {
    //----------- Desk-----------------
    name: "Office Desk",
    categoryId: new Types.ObjectId("67239c42ded8e96ba8db0e18"),
    price: 199.99,
    size: "150",
    material: "Wood",
    color: "Black",
    available: 15,
    description: "A stylish office desk with plenty of workspace.",
  },
  {
    //----------- Bookshelf-----------------

    name: "Bookshelf",
    categoryId: new Types.ObjectId("67239c42ded8e96ba8db0e19"),
    price: 129.99,
    size: "80",
    material: "Wood",
    color: "Oak",
    available: 25,
    description: "A wooden bookshelf that holds your favorite books.",
  },
];
