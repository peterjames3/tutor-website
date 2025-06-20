import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env' }); // Load environment variables from .env file

export default defineConfig({
    schema: './src/db/schema.ts',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
    verbose: true, // Enable verbose logging for debugging
})