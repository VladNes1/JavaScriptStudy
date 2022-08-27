const newPost = (post, addDate = Date()) => {
    return {
        ...post,
        addDate
    }
}

const firstPost = {
    id: 1,
    name: 'Vlad'
}

const obj = newPost(firstPost);

console.table(obj);