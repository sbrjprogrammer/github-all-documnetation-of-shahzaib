import React, { useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Box, Paper, Grid, Typography, Container } from '@mui/material';
import data from '../Data/data.json'
import Productitem from './Productitem';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	'&:hover': {
		transition: `all 0.2s ease-in-out`,
		transform: 'scale(1.02)'
	}
}));


const Products = () => {
	const [value, setValue] = useState(2);
	const [alignment, setAlignment] = useState('adidas');
  console.log(alignment)
  console.log(data)

	const handleChange = (event, newAlignment) => {
		console.log(newAlignment)
		setAlignment(newAlignment);
	};
	return (

		<>
			<Container style={{display:'flex' ,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>


				<Typography variant='h3' style={{ textAlign: 'center' ,padding:'40px 0px'}}>CATEGORIES</Typography>

				<ToggleButtonGroup color="primary" value={alignment} exclusive onChange={handleChange} style={{ cursor: 'pointer' }}>
					<ToggleButton value="adidas">ADIDAS</ToggleButton>
					<ToggleButton value="">NIKE</ToggleButton>
					<ToggleButton value="reebok">REEBOK</ToggleButton>
					<ToggleButton value="underarmour">UNDERARMOUR</ToggleButton>
				</ToggleButtonGroup>


			</Container>

			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ padding: '20px' }}>
					{Object.keys(data[alignment]).map((item, index) => {
					
          const shoe = data[alignment][item];
		  
           
						return <Productitem shoe={shoe} key={index} item={item} alignment={alignment} />;
					})}
				</Grid>
			</Box>
		</>
	);
};

export default Products;
