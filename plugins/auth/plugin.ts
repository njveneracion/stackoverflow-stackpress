// routing here
import type { Server } from 'stackpress/server';

export default function plugin(server: Server) {
    server.on('route', async _ => {
        server.all('/auth/signin', '@/plugins/auth/views/signin', -100)
        server.post('/auth/signin', () => import('./pages/signin.js'));
    });
};