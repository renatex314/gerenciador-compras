import styled from "styled-components";
import InputAlert from "../input-alert/InputAlert";
import Navbar from "../navbar/Navbar";
import { useDispatch } from "react-redux";
import { addCompra, addLista} from "../../redux/reducers/compras";
import { useState } from "react";
import CompraCreator from "../compra-creator";
import ComprasList from "../compras-list";

function App() {
  const [state, setState] = useState({
    dialogOnSuccess: (title => title),
    dialogActive: false
  });
  
  const dispatch = useDispatch();
  
  return (
    <Layout>
      <Title>Gerenciador de compras</Title>
      <Navbar onAddItemClick={() => askCreateNewList(dispatch, setState)}/>
      <CompraCreator onCreateCompraClick={nome => createCompra(dispatch, nome)} />
      <ComprasList />
      {state.dialogActive && <InputAlert id="input-dialog" onSuccess={state.dialogOnSuccess} onCancel={() => setState({dialogActive: false})}/>} 
    </Layout>
  );
}

function createCompra(dispatch, name){
  dispatch(addCompra(name));
}

function askCreateNewList(dispatch, setState){
  setState({
    dialogActive: true,
    dialogOnSuccess: (title => {
      dispatch(addLista(title));
      setState({dialogActive: false});
    })
  });
}

const Title = styled.h1`
  margin: 10px;
`;

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  overflow: hidden;
`;

export default App;
