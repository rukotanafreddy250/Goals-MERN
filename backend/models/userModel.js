const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)

// const { DataTypes, Model } = require('sequelize');
// const sequelize = require('../config/postgresSQL'); // Ensure this path is correct

// class User extends Model {}

// User.init(
//   {
//     name: {
//       type: DataTypes.STRING, // String type
//       allowNull: false, // Required field
//       validate: {
//         notEmpty: {
//           msg: 'Please add a name',
//         },
//       },
//     },
//     email: {
//       type: DataTypes.STRING, // Email as a string
//       allowNull: false, // Required field
//       unique: true, // Ensure email is unique
//       validate: {
//         isEmail: {
//           msg: 'Please provide a valid email',
//         },
//       },
//     },
//     password: {
//       type: DataTypes.STRING, // Password as a string
//       allowNull: false, // Required field
//       validate: {
//         notEmpty: {
//           msg: 'Please add a password',
//         },
//       },
//     },
//   },
//   {
//     sequelize, // Pass the Sequelize instance
//     modelName: 'User', // Name of the model
//     tableName: 'users', // Table name in the database
//     timestamps: true, // Automatically add createdAt and updatedAt fields
//   }
// );

// module.exports = User;


// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/postgresSQL'); // Import the Sequelize instance

// const User = sequelize.define(
//   'User',
//   {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: { msg: 'Name is required' },
//       },
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//       validate: {
//         isEmail: { msg: 'Provide a valid email' },
//       },
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: { msg: 'Password is required' },
//       },
//     },
//   },
//   {
//     tableName: 'users', // Explicit table name
//     timestamps: true, // Add createdAt and updatedAt fields
//   }
// );

// module.exports = User;
