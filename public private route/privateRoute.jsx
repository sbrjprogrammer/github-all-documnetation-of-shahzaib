
const PrivateRoute=({ children, ...rest }) => {
    // const data = localStorage.getItem("loginUser");
    return(
        <Route 
        {...rest}
        render={()=>data ?(children) :(<Redirect to="/" />)
        }
        />
    ) 
}






const PublicRoute=({ children, ...rest }) => {
    // const data = localStorage.getItem("loginUser");
    return(
        <Route 
        {...rest}
        render={()=>
            !data ?(children) 
            :
            (
                <Redirect to="/home" />
                )
        }
        />
    ) 
}