
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="wrapper">
      <Card
      img="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
      title="Fancy product"
      price="45.00"/>
     
      <Card
      img="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
      title_1="Special Item"
      price_1="18.00"/>

     <Card
      img="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
      title_2="Sales Item"
      price_2="20.00"/>
      
       <Card
      img="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
      title_3="Popular Item"
      price_3="90.00"/>
    </div>
  );
}

export default App;
