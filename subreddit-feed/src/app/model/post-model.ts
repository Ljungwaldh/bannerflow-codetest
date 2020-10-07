export interface Post {
    id: string;
    thumbnail: string;
    created: number;
    num_comments: number;
    author: string;
    score: number;
    permalink: string;
    title: string;
    selftext: string;
    url: string;
}

// show permalink as a link
// convert epoch created time into human readable