const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Goal', goalSchema)

// const { DataTypes, Model } = require('sequelize');
// const sequelize = require('../config/postgresSQL'); // Import your Sequelize instance

// class Goal extends Model {}

// Goal.init(
//   {
//     // Define fields
//     userId: {
//       type: DataTypes.UUID, // UUID to match MongoDB's ObjectId behavior
//       allowNull: false,
//       references: {
//         model: 'Users', // Reference to the User model (table name)
//         key: 'id', // The primary key in the User model
//       },
//     },
//     text: {
//       type: DataTypes.STRING, // Equivalent to String in Mongoose
//       allowNull: false, // Required field
//       validate: {
//         notEmpty: {
//           msg: 'Please add a text value',
//         },
//       },
//     },
//   },
//   {
//     sequelize, // Pass the Sequelize instance
//     modelName: 'Goal', // Name of the model
//     tableName: 'goals', // Table name in the database
//     timestamps: true, // Automatically add createdAt and updatedAt fields
//   }
// );

// module.exports = Goal;

