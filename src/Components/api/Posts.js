/**
 * Función para traer todos los post desde la api
 */

const getAllPosts = async() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const req = await fetch(url);
        const data = await req.json();
        
        const posts = data.map(post => {
          return  {
                id: post.id,
                userId: post.userId,
                titulo: post.title,
                cuerpo: post.body 
            }
        })

        return posts;
    } catch (error) {
        console.error(error);
    }
}

export {
    getAllPosts
}