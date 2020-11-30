import React,{useEffect} from 'react';
import {getComments} from './actions/comment';
import store from './reducers/store';
import './App.css';
import Header from '../src/components/header'
import InputFields from '../src/components/inputComponent'
import ListingComponent from '../src/components/listingComponent'


import {connect} from 'react-redux'

function App(props) {

  useEffect(()=>{
    store.dispatch(getComments())
  },[])

  return (
    <>
    <div className="divCss"/>
    <div className="App">
    <Header heading="Comments"/>
    <InputFields/>
    <ListingComponent modelList={props.data.comment.commentList}/>
    </div>
    </>
  );
}

const mapStateToProps = (state) =>{
  return{
      data:state
  }
}

export default connect(mapStateToProps)(App);
