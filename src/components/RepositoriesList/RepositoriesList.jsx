import React from 'react';
import style from './style.module.css';
import axios from 'axios';
import {NavLink} from "react-router-dom";



const megoSaveValuer = (key,props) =>{
  localStorage.setItem(key, props);
}



const RepositoriesList = (props) =>{
      const repositories = props.repositories;
      return (
              <div>
              { repositories.map(repositories =>
                <div className = {style.repositories} onClick={() => {

                  megoSaveValuer('name',repositories.name);
                  megoSaveValuer('repositoryURL',repositories.archive_url);
                  megoSaveValuer('starsCount',repositories.stargazers_count);
                  megoSaveValuer('ownerLogin',repositories.owner.login);
                  megoSaveValuer('ownerURL',repositories.owner.html_url);
                  megoSaveValuer('ownerAvatarURL',repositories.owner.avatar_url);
                  megoSaveValuer('ownerAvatarURL',repositories.owner.avatar_url);
                  megoSaveValuer('description',repositories.description);
                  megoSaveValuer('lastPushDate',repositories.pushed_at.slice(0,4)+' '+repositories.pushed_at.slice(5,10));
          
                }}>
                <NavLink to={'/repository/' + repositories.name}>
                  <h2 className = {style.name}>
                  {repositories.name}</h2>
                </NavLink>
                  <h3 className = {style.fullName}>{repositories.full_name} </h3>
                  <div>
                    <img src = 'https://cdn.iconscout.com/icon/free/png-512/star-bookmark-favorite-shape-rank-like-32386.png' className = {style.starIcon}/>
                    <h3 className = {style.starsCount}>{repositories.stargazers_count} </h3>
                  </div>
                  <h3 className = {style.signText}>Дата последнего коммита</h3>
                  <h3 className = {style.pushedDate}>{repositories.pushed_at.slice(0,4)+' '+repositories.pushed_at.slice(5,10)} </h3>
              </div>
              
              )}
          </div>
      )
}

export default RepositoriesList;
  
  