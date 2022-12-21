// import React from "react";
// import Badge from '@mui/material/Badge';
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import DeleteIcon from '@mui/icons-material/Delete';
// import AddIcon from '@mui/icons-material/Add';
// import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'


// import {connect} from 'react-redux'
// export default function App() {
// const [itemCount, setItemCount] = React.useState(1);
// const [count, setCount] = React.useState(1);

// return (
// 	<div style={{ display: "block", padding: 30 }}>
// 	<h4>How to create ShoppingCart Button in ReactJS?</h4>
  
// 	<div>
// 		<Badge color="secondary" badgeContent={itemCount}>
// 		<ShoppingCartIcon />{" "}
// 		</Badge>
// 		<ButtonGroup>
// 		<Button
// 			onClick={() => {
// 			 setItemCount(Math.max(itemCount - 1, 0));
//      // setItemCount(itemCount - 1);
// 			}}
// 		>
// 			{" "}
// 			<HorizontalRuleIcon fontSize="small" />
// 		</Button>
// 		<Button color="success"
// 			onClick={() => {
// 			setItemCount(itemCount + 1);
// 			}}
// 		>
// 			{" "}
// 			<AddIcon fontSize="small" />
// 		</Button>
// 		</ButtonGroup>
    
// 	</div>
//   <Button color="info"  variant="contained">Hello World</Button>


//   <div>
// 		<Badge color="secondary" badgeContent={count}>
// 		<ShoppingCartIcon />{" "}
// 		</Badge>
// 		<ButtonGroup>
// 		<Button
// 			onClick={() => {
// 			 setCount(Math.max(count - 1, 0));
//      // setItemCount(itemCount - 1);
// 			}}
// 		>
// 			{" "}
// 			<HorizontalRuleIcon fontSize="small" />
// 		</Button>
// 		<Button color="success"
// 			onClick={() => {
// 			setCount(count + 1);
// 			}}
// 		>
// 			{" "}
// 			<AddIcon fontSize="small" />
// 		</Button>
// 		</ButtonGroup>
    
// 	</div>
// 	</div>

  
//  );
//  }



import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer'
function App() {
  return (
    <div className="App">
      <HeaderContainer />
    <HomeContainer />
    </div>
  );
}

export default App;