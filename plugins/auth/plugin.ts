// routing here
import type { Server } from 'stackpress/server';

export default function plugin(server: Server) {
    server.on('route', async _ => {
        server.all('/auth/signin', '@/plugins/auth/views/signin', -100)
        server.all('/auth/signup', '@/plugins/auth/views/signup', -100)
        server.post('/auth/signin', () => import('./pages/signin.js'));
        server.post('/auth/signup', () => import('./pages/signup.js'));
    });
};