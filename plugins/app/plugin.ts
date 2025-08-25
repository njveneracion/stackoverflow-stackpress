//stackpress
// routing here
import type { Server } from 'stackpress/server';

export default function plugin(server: Server) {
    server.on('listen', async _ => {
        //on error, show error page
        server.on('error', () => import('./pages/error.js'));
        server.on('error', '@/plugins/app/views/error', -100);
        //on response, check for errors
        server.on('response', async (req, res, ctx) => {
            if (res.error) {
                await ctx.emit('error', req, res);
            }
        });
    });
    server.on('route', async _ => {
        server.get('/api/home', () => import('./pages/home.js'));
        server.get('/api/userinfo', () => import('./pages/home.js'));
        server.get('/api/question/:id', () => import('./pages/questionpage.js'));
        server.post('/question/ask', () => import('./pages/question.js'));
        server.all('/', '@/plugins/app/views/home', -100);
        server.get('/dashboard', '@/plugins/app/views/dashboard', -100);
        server.get('/question/ask', '@/plugins/app/views/question', -100);
        server.get('/question/:id', '@/plugins/app/views/questionpage', -100);

    });
};