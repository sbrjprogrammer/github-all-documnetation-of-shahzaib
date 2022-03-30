import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Paper, Grid, CardContent, CardMedia, Typography, CardActionArea, Rating, Button } from '@mui/material';
import { Link } from 'react-router-dom';

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

const ProductItems = ({ shoe, item ,alignment}) => {
	const [ value, setValue ] = React.useState(2);
	
	return (
		<Grid item xs={12} sm={8} md={4} lg={6}>
			<Link key={shoe.name} to={`/products/${alignment}/${item}`}  style={{textDecoration:'none',border:'none'}}>
				<Item >
					<CardActionArea>
						<CardMedia
							component="img"
							image={shoe.img}
							alt="shoe img"
							style={{ width: '100%', height: '50vh', objectFit: 'cover' }}
						/>
						<CardContent
							sx={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: '40vh',
								flexDirection: 'column',
							
							}}
						>
							<Typography gutterBottom variant="h4" component="div" style={{ marginTop: '15px' }}>
								{shoe.name}
							</Typography>
							<Rating
								name="simple-controlled"
								value={value}
								onChange={(event, newValue) => {
									setValue(newValue);
								}}
							/>
							<Typography gutterBottom variant="h5" component="div" style={{ margin: '10px 0px'}}>
								{shoe.price}
							</Typography>
							<Button variant="outlined" color="success" >
								ORDER NOW
							</Button>
						</CardContent>
					</CardActionArea>
				</Item>
			</Link>
		</Grid>
	);
};

export default ProductItems;


