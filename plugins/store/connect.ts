//node
import fs from 'node:fs';
import path from 'node:path';
//modules
import { PGlite } from '@electric-sql/pglite';
//stackpress
import { connect as pglite } from 'stackpress/pglite';

const url = process.env.DATABASE_URL || './.build/database';

/**
 * Some database connections awaits the connection...
 * This is setup this way so it's consistent.
 */
export default async function connect() {
    //this maps the resource to the engine
    return pglite(async () => {
        const file = path.resolve(process.cwd(), url);
        if (!fs.existsSync(path.dirname(file))) {
            fs.mkdirSync(path.dirname(file), { recursive: true });
        }
        return new PGlite(file);
    });
};