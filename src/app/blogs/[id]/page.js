const blogPosts=({params})=>{
    console.log(params);
    
    return (
        <div>
            {`This is ${params.id}`}
        </div>
    )
}
export default blogPosts;