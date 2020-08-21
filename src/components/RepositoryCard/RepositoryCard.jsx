import React,{useEffect} from 'react';
import style from './style.module.css';
import axios from 'axios';



const RepositoryCard = () =>{
    let Contributors = []
    let TopContributors = [];

    const checker = () =>{
        return( window.location.href)
    }

    const URL = checker();
    var URLparts = URL.split('/');
    var URLlast = URLparts.pop() || URLparts.pop(); 

    useEffect(() => {



        //здесь используемые языки
        const fetchPosts = async () => {
            const res = await axios.get(`https://api.github.com/repos/freeCodeCamp/freeCodeCamp/languages`);
            console.log('используемые языки');
            console.log(res.data);
        };
    
        fetchPosts();
      }, []);



      useEffect(() => {



        //здесь используемые языки
        const fetchContributors = async () => {
            const res = await axios.get(`https://api.github.com/repos/freeCodeCamp/freeCodeCamp/stats/contributors?q=&order=asc`);
            console.log('топ контрибюторов');
            console.log(res.data);
            Contributors = res.data;
            for (let i = 1; i < 11; i++) {
                TopContributors.push(Contributors[Contributors.length - i].author.login);  
            }
            console.log('реальный топ');
            console.log(TopContributors);
        };
    
        fetchContributors();
      }, []);


    const Name = localStorage.getItem('name');
    const StarsCount = localStorage.getItem('starsCount');
    
    return(
        <div className = {style.wrapper}>
            <h1>{URLlast}</h1>
            <h2>{Name}</h2>
            <h2>{StarsCount}</h2>
            <h2></h2>
        </div>
    )
}




export default RepositoryCard