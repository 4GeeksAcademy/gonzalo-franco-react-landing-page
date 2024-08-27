import React from "react";
import CardPost from "./cardpost.jsx"

const posts = [
    { id: 1, title: 'html5', imgUrl: 'https://picsum.photos/id/125/350/350', description: 'Hola Mundo 1' },
    { id: 2, title: 'css3', imgUrl: 'https://picsum.photos/id/666/350/350', description: 'Hola Mundo 2' },
    { id: 3, title: 'javascript', imgUrl: 'https://picsum.photos/id/777/350/350', description: 'Hola Mundo 3' },
    { id: 4, title: 'python', imgUrl: 'https://picsum.photos/id/539/350/350', description: 'Hola Mundo 4' },
    { id: 5, title: 'python', imgUrl: 'https://picsum.photos/id/539/350/350', description: 'Hola Mundo 4' },
]
const CardSection = () => {
    return (
        <div className="container-fluid d-flex justify-content-between">
            {
                posts.map((post) => {
                    return (
                        <CardPost key={post.id} {...post} />
                    )
                })
            }
        </div>
    )
}

export default CardSection;