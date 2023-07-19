import { USERS } from "./Users";

export type postType = {
    imageUrl: string;
    user: string;
    likes: number;
    caption: string;
    profile_picture: string;
    comments: {
        user: string;
        comment: string;
    }[];
}

export const POSTS = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        user: USERS[0].user,
        likes: 7870,
        caption: 'Postal box Kazhchakal',
        profile_picture:USERS[0].image,
        comments:[
            {
                user:USERS[1].user,
                comment:'woah nice'
            },
            {
                user:USERS[2].user,
                comment:'rare piece'
            },
        ]
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        user: USERS[4].user,
        likes: 780,
        caption: 'Postal box Kazhchakal',
        profile_picture:USERS[4].image,
        comments:[
            {
                user:USERS[1].user,
                comment:'woah nice'
            },
            {
                user:USERS[2].user,
                comment:'rare piece'
            },
        ]
    }
]