import React from "react";
import CardPost from "./cardpost.jsx"

const posts = [
    { id: 1, title: 'html5', imgUrl: 'https://picsum.photos/id/125/500/325', description: 'Hola Mundo 1' },
    { id: 2, title: 'css3', imgUrl: 'https://picsum.photos/id/666/500/325', description: 'Hola Mundo 2' },
    { id: 3, title: 'javascript', imgUrl: 'https://picsum.photos/id/777/500/325', description: 'Hola Mundo 3' },
    { id: 4, title: 'python', imgUrl: 'https://picsum.photos/id/539/500/325', description: 'Hola Mundo 4' },
    { id: 5, title: 'python', imgUrl: 'https://picsum.photos/id/456/500/325', description: 'Hola Mundo 5' },
]
const CardSection = () => {
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row col-8 row-cols-4 my-2 d-flex justify-content-center">
                {
                    posts.map((post) => {
                        return (
                            <CardPost key={post.id} {...post} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CardSection;