//stackpress
//routing here
import type { Server } from 'stackpress/server';

export default function plugin(server: Server) {
    server.on('route', async _ => {
        server.post('/create', () => import('./pages/create.js'));
        server.all('/create', '@/plugins/sample/views/create', -100)
    });
};