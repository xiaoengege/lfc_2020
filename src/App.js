 
 let html = <input type="text"/>
 let num = 10
 //jsx中的表达式使用{}
function App() {
  if( num <11 ){
    return (
      <div className="App">
        {html}
      </div>
    );
  }else{
    return(
      <h1>{num}</h1>
    )
  }
}

export default App;
