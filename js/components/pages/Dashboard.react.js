/*
 * HomePage
 *
 * The Dashboard is only visible to logged in users
 * Route: /dashboard
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import user from './Data.react';
console.log("user:- ",user)
class Dashboard extends Component {
  render() {
    return (
      <article>
          <table className="table-striped" style={{marginTop: "104px"}}>    
            <tr style={{border:"1px solid black"}} >
              <th style={{border:"1px solid black"}}>Name</th>
              <th style={{border:"1px solid black"}}>Age</th>
              <th style={{border:"1px solid black"}}>Gender</th>
              <th style={{border:"1px solid black"}}>Email</th>
            </tr>
          <tbody>
          {user.map(obj => {
                return (
                  <tr key={obj.id} >
                    <td style={{border:"1px solid black"}}>{ obj.name }</td>
                    <td style={{border:"1px solid black"}}>{ obj.age }</td>
                    <td style={{border:"1px solid black"}}>{ obj.gender }</td>
                    <td style={{border:"1px solid black"}}>{ obj.email }</td>
                  </tr>
                );
              }) 
            }
          </tbody>
           
          </table>
      </article>
    );
  }
}

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Dashboard);
