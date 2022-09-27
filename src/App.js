import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import DisplayContent from './data1';
import { UseFetch } from './data2';

function App() {
  const {loading, data} = UseFetch();
  const [page, setPage] = useState(0);
  const [content, setContent] = useState([]);
  
  useEffect(()=>{
    if(loading){
      return setContent(data[page])
    }
  }, [loading, page]);

  const nextPage = ()=>{
    setPage((oldPage)=>{
      let nextPage = oldPage + 1
      if(nextPage < data.length - 1){
        nextPage = 0;
      }

      return nextPage;
    })
  }

  const prevPage = ()=>{
    setPage((oldPage)=>{
      let prevPage = oldPage - 1
      if(prevPage < 0){
        prevPage = data.length-1;
      }

      return prevPage;
    })
  }

  const handlePage = (index)=>{
    setPage(index);
  }

  
  return (
    <div className="App">
      <h1>{loading ? 'loading...': 'pagination'}</h1>
      <section>
        {content.map((contents)=>{
            return <DisplayContent
                      key = {contents.id}
                      {...contents}
              
                      />
        })}
        {!loading && (

          <div className='contianer'>
            <button onClick={prevPage}>Previous Page</button>
            {data.map((item, index)=>{
              return (
                <button
                key = {index}
                onClick = {()=>handlePage(index)}
                >{index + 1}</button>
              )
            })}

          <button onClick={nextPage}>Next Page</button>



          </div>

        )}
      </section>
    </div>
  );
}

export default App;
