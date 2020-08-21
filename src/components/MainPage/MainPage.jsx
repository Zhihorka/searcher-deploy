import React,{useState,useEffect} from 'react';
import style from './style.module.css';
import RepositoriesList from '../RepositoriesList/RepositoriesList';
import Paginator from '../Paginator/Paginator';
import SearchBar from '../SearchBar/SearchBar';
import axios from 'axios';


const MainPage = (props) =>{
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [superTrigger, setSuperTrigger] = useState(false);
    const [postsPerPage] = useState(10);
    const [value, setValue] = React.useState(
      localStorage.getItem('searched') || ''
    );
   
    React.useEffect(() => {
      localStorage.setItem('seached', value);
    }, [value]);
   
    const onChange = event => setValue(event.target.value);

    useEffect(() => {
        const fetchPosts = async () => {
          setLoading(true);
          const res = await axios.get(`https://api.github.com/search/repositories?q=${value}+stars:>=1&order=desc&per_page=10&page=${currentPage}`);
          setRepositories(res.data.items);
          setLoading(false);
          
        };
    
        fetchPosts();
      }, [currentPage]);


      useEffect(() => {
        const fetchPosts = async () => {
    
          const res = await axios.get(`https://api.github.com/search/repositories?q=${value}+stars:>=1&order=desc&per_page=10&page=${currentPage}`);
          setRepositories(res.data.items);
          setSuperTrigger(false);
          
        };

        fetchPosts();
      }, [superTrigger]);
  

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = repositories.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);


    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(100 / postsPerPage); i++) {
      pageNumbers.push(i);
    }


    console.log(repositories);
    return(
        <div className = {style.wrapper}>
          <div className = {style.SearchBar}>
             <SearchBar value = {value} onChange = {onChange} setSuperTrigger = {setSuperTrigger} />
          </div>
            <div className = {style.RepositoriesLis}>
            <div>
         <RepositoriesList repositories = {repositories} />
        </div>
            </div>
        <div className = {style.Paginator}>
          <Paginator pageNumbers = {pageNumbers} paginate = {paginate}  setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
      </div>
    )
}

export default MainPage;