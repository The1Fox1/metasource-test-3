import React from 'react';
import smile from './smile.png'
import frown from './frown.png'

class Table extends React.Component {
    state = {
        max: 100
      }

    render() {
        return (
            <table>
            { MakeRows(this.state.max) }
            </table>
        )
  }
}

const MakeRows = (rowCount) =>{
    let elements = []
    for(let i=1; i<= rowCount; i++){
        if(i% 15 === 0) elements.push(<Row i={i} img1={smile} img2={frown} />)
        else if(i% 5 === 0)  elements.push(<Row i={i} img1={frown} />)
        else if(i% 3 === 0) elements.push(<Row i={i} img1={smile} />)
        else elements.push(<Row i={i}/>)
    }

    return elements
}

const Row = (props) =>{
    return(
        <tr>
            <td>{props.i}</td>
            <td>
                { props.img1 && <img src={props.img1} alt=":)"/> }
                { props.img2 && <img src={props.img2} alt=":("/> }
            </td>
        </tr>
    )
}


export default Table