export function getUsers(){
    return `users {
        comments_id
        avatar_url
        id
        username
        status
    }`
}

export function getTasks(limit = 5){
    return `tasks(limit: ${limit}){
            description
            created_task_at
            description
            followers_id
    }`
}

export function tasks_by_posts(id){
    return `tasks_by_pk(id: ${id}) {
        comments_id
        created_at
        description
        followers_id
        group_id
        id
    }`
}

export function tasks_by_user(id){
    return `tasks_by_user(id: ${id}) {
        comments_id
        created_post_at
        description
        id
        isDone
    }`
}


 
