import React from 'react';

type Post = {
    image: string,
    description: string,
}
type SocialProps = {
    className: string
}

function Socials({className}: SocialProps) {
    const posts: Post[] = [
        {image: '', description: 'Post Description 1'},
        {image: '', description: 'Post Description 2'},
        {image: '', description: 'Post Description 3'},
        {image: '', description: 'Post Description 4'},
        {image: '', description: 'Post Description 5'},
        {image: '', description: 'Post Description 6'},
        {image: '', description: 'Post Description 7'},
        {image: '', description: 'Post Description 8'},
        {image: '', description: 'Post Description 9'},
        {image: '', description: 'Post Description 10'},
        {image: '', description: 'Post Description 11'},
        {image: '', description: 'Post Description 12'},
        {image: '', description: 'Post Description 13'},
        {image: '', description: 'Post Description 14'},
    ];

    return (
        <section className={`${className}`}>
            {/* Limit posts on page to 10 */}
            {posts.slice(0, 10).map((post) => {
                return (
                    <section key={post.description} className="flex flex-col items-center bg-white rounded-md">
                        <div className="h-80 w-full bg-(--apricot) rounded-t-md"></div>
                        <span>{post.description}</span>
                    </section>
                )
               
            })}
        </section>
    )
}

export default Socials