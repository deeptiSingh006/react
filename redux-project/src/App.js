import Message from "./components/Message";
import RecieveMessage from "./components/RecieveMessage";
import LearnTesting from "./components/LearnTesting";
import Child from "./components/Child";

function App() {
  return (
    <div >
      <Child/>
      <LearnTesting/>
      <Message/>
      <br/><br/>
      <RecieveMessage/>    </div>
  );
}

export default App;
