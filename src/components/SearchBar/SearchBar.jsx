import React from 'react';
import style from './style.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const SearchBar = (props) =>{

    const classes = useStyles();

    return(
        <div className = {style.wrapper}>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="введите название репозитория" variant="outlined" value={props.value} type="text" onChange={props.onChange} style={{ width: '350px' }}/>
            <div className = {style.submitButton}>
                <Button variant="outlined" color="primary" onClick={() => {props.setSuperTrigger(true)}} size="large">
                    Поиск
                </Button>
            </div>
        </form>
        </div>
    )
}

export default SearchBar;