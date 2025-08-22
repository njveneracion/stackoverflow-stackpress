//stackpress
import type { ProfileAuth } from 'stackpress';
import { action } from 'stackpress/server';

const secret = process.env.ADMIN_PASS || 'admin';

export default action(async function Populate(_req, _res, ctx) {
    // Create admin
    const admin = await ctx.resolve<ProfileAuth>('auth-signup', {
        type: 'person',
        name: 'Admin',
        username: 'admin',
        email: 'admin@project.com',
        secret: secret,
        roles: ['ADMIN'],
    });
    if (admin.code !== 200) {
        console.log('Error creating admin user', admin);
        return;
    }

    // Sample users
    const user1 = await ctx.resolve<ProfileAuth>('auth-signup', {
        type: 'person',
        name: 'John Developer',
        username: 'johndeveloper',
        email: 'john@example.com',
        secret: 'password123!',
        roles: ['USER'],
    });

    const user2 = await ctx.resolve<ProfileAuth>('auth-signup', {
        type: 'person',
        name: 'Sarah Coder',
        username: 'sarahcoder',
        email: 'sarah@example.com',
        secret: 'password123!',
        roles: ['USER'],
    });

    console.log('Users created successfully');


    // Create posts
    const post1 = await ctx.resolve<{ id: string }>('post-create', {
        profileId: user1.results?.id,
        title: 'How to center a div in CSS?',
        content: 'I am trying to center a div element both horizontally and vertically. What is the best modern way to do this?',
        tags: ['css', 'html', 'frontend']
    });

    const post2 = await ctx.resolve<{ id: string }>('post-create', {
        profileId: user2.results?.id,
        title: 'What is the difference between let, var, and const in JavaScript?',
        content: 'Can someone explain the differences between these three ways of declaring variables in JavaScript?',
        tags: ['javascript', 'es6', 'variables']
    });

    const post3 = await ctx.resolve<{ id: string }>('post-create', {
        profileId: user1.results?.id,
        title: 'What are the benefits of using TypeScript?',
        content: 'I have heard a lot about TypeScript. Can someone explain its benefits over JavaScript?',
        tags: ['typescript', 'javascript', 'frontend']
    });

    if (post1.code !== 200 || post2.code !== 200 || post3.code !== 200) {
        console.log('Error creating posts', post1, post2, post3);
        return;
    }

    // Create comments
    const comment1 = await ctx.resolve<{ id: string }>('comment-create', {
        postId: post1.results?.id,
        profileId: user2.results?.id,
        content: 'You can use flexbox: `display: flex; align-items: center; justify-content: center;` on the parent div.'
    });

    const comment2 = await ctx.resolve<{ id: string }>('comment-create', {
        postId: post2.results?.id,
        profileId: user1.results?.id,
        content: '`var` is function-scoped, while `let` and `const` are block-scoped. Use `const` by default unless you need to reassign.'
    });

    // Add error checking here
    if (comment1.code !== 200 || comment2.code !== 200) {
        console.log('Error creating comments', comment1, comment2);
        return;
    }

    // Create votes
    await ctx.resolve('vote-create', {
        postId: post1.results?.id,
        profileId: user2.results?.id,
        value: 1 // upvote
    });

    await ctx.resolve('vote-create', {
        commentId: comment2.results?.id,
        profileId: user2.results?.id,
        value: -1 // downvote
    });

    console.log('Posts, comments, and votes created successfully');
});
