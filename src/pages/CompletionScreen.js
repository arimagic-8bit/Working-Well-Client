// import React, { Component } from 'react';

// import {actCons} from '../lib/ActivityProvider';
// import {Link} from 'react-router-dom';

// class CompletionScreen extends Component {

//     state={
//         completionArr: [],
//         completion: '00:00'
//     };

//     handleChange = event => {
//         event.persist()
//         const {completion} = this.state;
//         const newArr = [...completion];
//         const value = event.target.value;
//         console.log(value)
//         // newArr[index] = e.target.value;
//         // this.setState({completion:newArr})
//     };

//     render() {

//         const {completion} = this.state;
//         const {allTitle} = this.props;

//         return (
//             <div className='page-container'>
//                 <div className='title-container'>
//                     <h1 className='work-well'><span>W</span>ORK <span>W</span>ELL</h1>
//                 </div>
//                 <div>
//                     <p>Now, <span className='bold'>add</span> a total time you want to dedicate to each of them</p>
                    
//                     {
//                         allTitle.map((title, index) => {
//                             return(
//                             <div key={index}>
//                                 <p>{title}</p>
//                                 <p>
//                                     <input 
//                                     type='text' 
//                                     name='completion'
//                                     value={completion} 
//                                     onChange={this.handleChange}  
//                                     />
//                                 </p>
                                
//                             </div>
//                             )
//                         })
//                     }
                    
//                 </div>
//             </div>
//         )
//     }
// }

// export default actCons(CompletionScreen)
