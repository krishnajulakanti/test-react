import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Login from './components/Crud/Login.js';
import EmployeeList from './components/Crud/EmployeeList.js';
import CreateEmployee from './components/Crud/CreateEmployee.js';
import EditEmployee from './components/Crud/EditEmployee.js';

function App() {

  const [employeeList, setEmployeeList] = useState(()=>{
    const savedState = sessionStorage.getItem('employeeList')
    return savedState ? JSON.parse(savedState) : []
  });

  const updateState = (newEmployee) => { setEmployeeList(newEmployee) }

  useEffect(() => {
    sessionStorage.setItem('employeeList', JSON.stringify(employeeList))
  }, [employeeList])
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='CreateEmployee' element={<CreateEmployee employeeList={employeeList} updateState={updateState} mode={true}/>} />
          <Route path='EmployeeList' element={<EmployeeList employeeList={employeeList} updateState={updateState} />} />
          <Route path='EditEmployee/:id' element={<EditEmployee employeeList={employeeList} updateState={updateState} mode={false} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


<div>
  {/* <Login /> */}
  {/* <GroceriesList products={PRODUCTS}/> */}
  {/* <Tictactoe /> */}
  {/* <UseEffect_Namelist /> */}
  {/* <UseEffect_Timer /> */}
  {/* <UseEffect_Basics /> */}
  {/* <UseState_LoginForm /> */}
  {/* <UseState_Basics /> */}



  {/* <CounterUseEffectMouseEventCleanup /> */}
  {/* <CounterUseEffectMouseEvent /> */}
  {/* <CounterUseEffectHook /> */}
  {/* <CounterUseStateHookWithArray /> */}
  {/* <CounterUseStateHookWithObject /> */}
  {/* <StopWatch /> */}
  {/* <CounterUseStateHook /> */}
  {/* <NameList></NameList> */}
  {/* <FunctionClick></FunctionClick> */}
  {/* <Counter></Counter> */}
  {/* <PostForm></PostForm> */}
  {/* <GetList></GetList> */}
  {/* <Forms/> */}
  {/* <NamesList></NamesList> */}
  {/* <Parent/> */}
  {/* <ClickHandler/> */}
  {/* <Message></Message> */}
  {/* <Greet nickname='Carrot'>
        <button>Submit</button>
      </Greet> */}
  {/* <Greet name='loves'>
        <p>This is children props</p>
      </Greet> */}
  {/* <Greet name='Rabbit' /> */}
</div>