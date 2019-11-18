import React from 'react';

import './App.css';

const App = () => <PersonList/>;


const PersonList  = () => {
  
  const people = [
    {
      img:21,name:"jhon",job:"developer",
    },
    {
      img:28,name:"dexter",job:"designer",
    },
    {
      img:37,name:"alen",job:"artist",
    },
  ]
  
  return (<section>
    <Person person={people[0]}/>
    <Person person={people[1]}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's.
    </Person>
    <Person person={people[2]}/>
  </section>)
};

const Person = (props) => {

  const {img , name , job } = props.person;
  const {children} = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className='person'> 
    <img src={url} alt=''/>
    <div>
      <h4>{name}</h4>
      <h3>{job}</h3>
      {children}
    </div>
    
    </div>
  )
}


export default App;
