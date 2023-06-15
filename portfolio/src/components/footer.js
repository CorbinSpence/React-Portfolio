import react from 'react'

const style = {
    footer:{
        width:'100%',
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'row'
    },
    contacts:{
        paddingTop: '50px',
        paddingBottom: '50px',
        width: '65%'
    },
    contactLink:{
        marginLeft: '10%',
        paddingBottom: '4px',
        color: 'black',
        borderBottom: '2px solid navy',
        textDecoration: 'none',
        fontSize: 'large'
    },
    aside:{
        width: '12%',
        minWidth: '150px',
        marginRight: '7%',
        paddingRight: '3%',
        borderRight: '4px solid navy',
        textAlign: 'right',
        color: 'navy',
        fontSize: 'x-large'
    }
}

export default function footer(){
    return(
        <footer id="Contact Info" class="flex-container" style={style.footer}>
            <aside style={style.aside}>
                <h1>Contact Info</h1>
            </aside>
            <div style={style.contacts}>
                <a href="404.433.0268" style={style.contactLink}>404.433.0268</a>
                <a href="corbinspence16@gmail.com" style={style.contactLink}>corbinspence16@gmail.com</a>
                <a href="https://github.com/CorbinSpence" style={style.contactLink}>Github</a>
                <a href="https://www.linkedin.com/in/corbin-spence-0aa1751b0/" style={style.contactLink}>LinkedIn</a>
            </div>
        </footer>
    )
}