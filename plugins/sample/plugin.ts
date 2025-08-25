//stackpress
//routing here
import type { Server } from 'stackpress/server';

export default function plugin(server: Server) {
    server.on('route', async _ => {
        server.post('/create-post', () => import('./pages/create.js'));
        server.all('/create-post', '@/plugins/sample/views/create', -100)
    });
};