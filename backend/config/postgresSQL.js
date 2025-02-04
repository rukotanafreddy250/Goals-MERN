// // config/database.js
// const { Sequelize } = require('sequelize');

// // Create a new Sequelize instance and configure the connection to PostgreSQL
// const sequelize = new Sequelize({
//   dialect: 'postgresql://postgressql_hooby_user:OF8IlvyFMgJE8tQVqzu55lsJxcAmHST2@dpg-cu72g13qf0us73e0v4c0-a.oregon-postgres.render.com/postgressql_hooby', // Specify the database dialect (PostgreSQL)
//   host: 'dpg-cu72g13qf0us73e0v4c0-a',   // Database host (use your database server if not local)
//   port: 5432,          // Default PostgreSQL port (change if necessary)
//   database: 'postgressql_hooby', // Replace with your database name
//   username: 'postgressql_hooby_user', // Replace with your PostgreSQL username
//   password: 'OF8IlvyFMgJE8tQVqzu55lsJxcAmHST2', // Replace with your PostgreSQL password
// //   logging: false,       // Disable logging of SQL queries (optional)
// });

// // Test the connection
// // const sequelize = `postgresql://postgressql_hooby_user:OF8IlvyFMgJE8tQVqzu55lsJxcAmHST2@dpg-cu72g13qf0us73e0v4c0-a.oregon-postgres.render.com/postgressql_hooby`

// try {
    
// } catch (error) {
    
// }
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Database connection has been established successfully.');
//   })
//   .catch((error) => {
//     console.error('Unable to connect to the database:', error);
//   });

// module.exports = sequelize;


// const mongoose = require('mongoose')

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI)

//     console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
//   } catch (error) {
//     console.log(error)
//     process.exit(1)
//   }
// }

// module.exports = connectDB



// const { Sequelize } = require('sequelize');

// // Connection string for Render-hosted PostgreSQL
// const sequelize = new Sequelize(
//   'postgresql://postgressql_hooby_user:OF8IlvyFMgJE8tQVqzu55lsJxcAmHST2@dpg-cu72g13qf0us73e0v4c0-a.oregon-postgres.render.com/postgressql_hooby',
//   {
//     dialect: 'postgres', // Specify the database dialect
//     logging: false,      // Disable SQL logging (optional)
//   }
// );

// // Test the connection
// await sequelize.authenticate()
//   .then(() => {
//     console.log('Connected to the PostgreSQL database successfully!');
//   })
//   .catch((err) => {
//     console.error('Unable to connect to the PostgreSQL database:', err);
//   });

// module.exports = sequelize;

// const { Sequelize } = require('sequelize');

// Connection string for Render-hosted PostgreSQL
// const sequelize = new Sequelize(
//   'postgresql://postgressql_hooby_user:OF8IlvyFMgJE8tQVqzu55lsJxcAmHST2@dpg-cu72g13qf0us73e0v4c0-a.oregon-postgres.render.com/postgressql_hooby',
//   {
//     dialect: 'postgres', // Specify the database dialect
//     logging: false,      // Disable SQL logging (optional)
//   }
// );

// // Function to test and connect to the database
// const connectDB = async () => {
//   try {
//     // Authenticate with the database
//     await sequelize.authenticate();
//     console.log('Connected to the PostgreSQL database successfully!');
//   } catch (error) {
//     console.error('Unable to connect to the PostgreSQL database:', error);
//     process.exit(1); // Exit the process with failure code
//   }
// };

// module.exports = { sequelize, connectDB };

const { Sequelize } = require('sequelize');

// Create a new Sequelize instance and configure the connection to PostgreSQL
const sequelize = new Sequelize(
  'postgressql_hooby', // Database name
  'postgressql_hooby_user', // Database username
  'OF8IlvyFMgJE8tQVqzu55lsJxcAmHST2', // Database password
  {
    host: 'dpg-cu72g13qf0us73e0v4c0-a.oregon-postgres.render.com', // Database host
    dialect: 'postgres', // Specify PostgreSQL
    port: 5432, // Default PostgreSQL port
    logging: false, // Disable SQL logging (optional)
    dialectOptions: {
      ssl: {
        require: true, // Enforce SSL connection
        rejectUnauthorized: false, // Accept self-signed certificates
      },
    },
  }
);

// Function to test and connect to the database
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the PostgreSQL database successfully!');
  } catch (error) {
    console.error('Unable to connect to the PostgreSQL database:', error);
    process.exit(1); // Exit the process with failure code
  }
};

module.exports = { sequelize, connectDB };


