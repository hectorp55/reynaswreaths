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
        {image: '', description: 'Post Description'},
        {image: '', description: 'Post Description'},
        {image: '', description: 'Post Description'},
        {image: '', description: 'Post Description'},
        {image: '', description: 'Post Description'},
        {image: '', description: 'Post Description'},
        {image: '', description: 'Post Description'},
        {image: '', description: 'Post Description'},
        {image: '', description: 'Post Description'},
        {image: '', description: 'Post Description'},
        {image: '', description: 'Post Description'},
        {image: '', description: 'Post Description'},
        {image: '', description: 'Post Description'},
        {image: '', description: 'Post Description'},
    ];

    return (
        <section className={`${className}`}>
            {/* Limit posts on page to 10 */}
            {posts.slice(0, 10).map((post) => {
                return (
                    <section className="flex flex-col items-center bg-white rounded-md">
                        <div className="h-80 w-full bg-(--apricot) rounded-t-md"></div>
                        <span>{post.description}</span>
                    </section>
                )
               
            })}
        </section>
    )
}

export default Socials