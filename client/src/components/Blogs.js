import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

const Blogs = ({isStored,userName}) => {
    const [blogList,setBlogList] = useState([]);
    const fetchAllBlogs = async() =>{
        try{
            const allBlogResponse = await axios.get('/api/getAllBlogs');
            console.log(allBlogResponse);
            return allBlogResponse;
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchAllBlogs().then(allBlogResponse => setBlogList(allBlogResponse.data));
    },[])
    const blogSubmitHandler = async(e) =>{
        e.preventDefault();
        const body = {userName:userName,BlogPost:e.target.blogInput.value};
        const config ={'headers':{'Content-Type':'application/json'}};
        e.target.blogInput.value = "";
        try{
            const response = await axios.post('/api/submitBlog',JSON.stringify(body),config);
            fetchAllBlogs().then(allBlogResponse => setBlogList(allBlogResponse.data));
            console.log(response);
        }catch(err){
            console.log(err);
        }
    }

    const blogListRender = blogList.map(eachBlog =>(
        <div className="eachBlog" key={eachBlog._id}>
            <h3>{eachBlog.userName} posted:</h3>
            <h4>{eachBlog.BlogPost}</h4>
        </div>
    )) 
    
    return (
        <div>
            {isStored ? (<div>
                <form onSubmit={e => blogSubmitHandler(e)}>
                    <textarea className="blogInput" name="blogInput" placeholder="Write here...."/>
                    <button className="blogInputSubmit" type="submit">Submit</button>
                </form>
            </div>) : (<p>Please Log in to post new blog!</p>)}
            {blogList.length === 0 ? (<p>No Blogs yet</p>) : blogListRender}
        </div>
        
    )
}

const mapStateToProps = state =>({
    isStored:state.authReducer.stored,
    userName:state.logInReducer.userName
})

export default connect(mapStateToProps)(Blogs);
