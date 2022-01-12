
import {Route, Routes} from 'react-router-dom';
import Aryan from './Pages/Aryan';
import Tejas from './Pages/Tejas';
import Jagmeet from './Pages/Jagmeet';
import Deepti from './Pages/Deepti';
import MainNavigation from './components/MainNavigation';
import TodoList from './components/TodoList';
import GetList from './components/GetList';
import ArrayAdd from './components/ArrayAdd';
import PropsEx from './components/ch1_props/PopsEx';
import UseEffectEx from './components/ch15_useEffectHook/UseEffectEx';
import CreateASimpleJsxElement_01 from './components/CreateASimpleJsxElement_01';
import AppContext1 from './components/ContextExample/AppContext1';
import Dsc from './components/DeeptiCounter/Dsc';
import CreateAComplexJsxElement_02 from './components/CreateAComplexJsxElement_02';
import AddCommentsInJsx_03 from './components/AddCommentsInJsx_03';
import MyComponent from './components/CreateAStatelessFunctionalComponent_07';

function App() {
  

  return (
    <div>
    {/* Chapter one Excercise props : Sending from parent component to chile component*/} 
    <text>Example on props where Deepti is being paseed as prop to component PropsEx</text>
    <PropsEx name="Deepti"/>
    {/* Example 01 : Create a Simple JSX Element*/}
    <h1 style={{color:'blue'}}>Example 01 : Create a Simple JSX Element</h1>
    <CreateASimpleJsxElement_01/><br/>
    <h1 style={{color:'red'}}>==================================================</h1>
    
    {/* Example 02 : Create a Complex JSX Element*/}
    <h1 style={{color:'blue'}}>Example 02 : Create a Complex JSX Element</h1>
    <CreateAComplexJsxElement_02/><br/>
    <h1 style={{color:'red'}}>==================================================</h1>
    
    {/* Add comments in JSX */}
    <h1 style={{color:'blue'}}>Example 03 : Go to to the compoent to see how to add comments in JSX </h1>
    <AddCommentsInJsx_03/><br/>
    <h1 style={{color:'red'}}>==================================================</h1>

    {/* Create a Stateless Functional Component*/}
    <h1 style={{color:'blue'}}>Example 07 :Create a Stateless Functional Component </h1>
    <MyComponent/><br/>
    <h1 style={{color:'red'}}>==================================================</h1>



    
    <MainNavigation/>
    <ArrayAdd></ArrayAdd>
    <TodoList/>
    <GetList/>
    <Dsc/>
      <div>
      <Routes>
       < Route path='/deepti'  element={<Deepti/>} />
       < Route path='/jagmeet'  element={<Jagmeet/>} />
       < Route path='/aryanbaby'  element={<Aryan/>} />
       < Route path='/tejasbaby'  element={<Tejas/>} />
       <Route path='/UseEffectEx' element={<UseEffectEx/>} />
      </Routes>
      </div>

      <h3>Using Context </h3>
      <AppContext1/>
      </div>
  );
}

export default App;
