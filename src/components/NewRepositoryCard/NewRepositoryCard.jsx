import React,{useEffect} from 'react';
import style from './style.module.css';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core'
import Link from '@material-ui/core/Link';
import StarIcon from '@material-ui/icons/Star';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { yellow } from '@material-ui/core/colors';
import { spacing } from '@material-ui/system';
import {NavLink} from "react-router-dom";


const useStyles = makeStyles({
  root: {
    width: 'auto',
    heigth: '400px',
    justifyContent: "center"
  },
  bullet: {
    display: 'inline-block',
    margin: 'auto',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  marginAutoItem: {
    margin: 'auto'
  },
});

const NewRepositoryCard = ( ) =>  {


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
    const Avatar = localStorage.getItem('ownerAvatarURL');
    const Description = localStorage.getItem('description');
    const repositoryURL =  localStorage.getItem('ownerURL');


  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (

    <div className = {style.wrapper}>
      <div className = {style.button}>
        <Button variant="outlined" color="primary" p={10}>
                    <NavLink to={'/'} className = {style.navLink}>
                        Назад к списку
                    </NavLink>
                </Button>
        </div>
      <div className = {style.repositoryCard}>
        <Box m="auto">
            <Card className={classes.root} variant="outlined">
            <CardContent>
              
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {' '}
                </Typography>
                <img src = {Avatar} className = {style.avatar}></img>
                <Typography variant="h5" component="h2">
                {Name}
                </Typography>
                <div>
                    <StarIcon style={{ color: yellow[500] }} display="inline"/>
                    <Typography className={classes.pos} color="textSecondary" display="inline">
                    {StarsCount}
                    </Typography>
                </div>
                <Typography variant="body2" component="p">
                    {Description}
                </Typography>
            </CardContent>
            <CardActions>
            <Link href={repositoryURL} onClick={preventDefault} variant="body2">
                GitHub link
            </Link>
            </CardActions>
            </Card>
        </Box>
      </div>
    </div>
  );
}


export default NewRepositoryCard