import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

export const sql = neon(process.env.DATABASE_URL);

export async function setupDB() {
  try {
    console.log('Connection established');

    // user table
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        picture VARCHAR(1000)
      );
    `;

    // projects table (overview) 
    await sql`
    CREATE TABLE IF NOT EXISTS projects (
      projectid SERIAL PRIMARY KEY,
      projectName VARCHAR(255) NOT NULL,
      taskAmount INT NOT NULL,
      assignedTo VARCHAR(1000) 
    )
    `;

    //indiivdual task table, using projectID as a foreign key, is the next step here


    console.log('Finished initialising table.');

  } catch (err) {
    console.error('Connection failed.', err);
  }
}