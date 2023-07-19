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
        imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alamy.com%2Fstock-photo%2Findia-post.html&psig=AOvVaw3iTJJ8_QkXICd_Q2Os-rlW&ust=1689837468572000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJD37aKdmoADFQAAAAAdAAAAABAD',
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
        imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alamy.com%2Fstock-photo%2Findia-post.html&psig=AOvVaw3iTJJ8_QkXICd_Q2Os-rlW&ust=1689837468572000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJD37aKdmoADFQAAAAAdAAAAABAD',
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