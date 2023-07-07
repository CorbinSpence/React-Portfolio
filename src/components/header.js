import react from 'react'

const style = {
    header:{
        backgroundColor: '#2a2a31',
        width: '100%',
        paddingTop: '25px',
        paddingBottom: '25px',
    },
    title:{
        fontSize: '50px',
        fontWeight: 'bold',
        paddingLeft: '3%',
        paddingRight: '1%',
        color: '#2a2a31',
        backgroundColor: 'turquoise'
    },
    nav:{
        float: 'right',
        width: '60%',
        paddingTop: '17px',
        paddingBottom: '17px'
    },
    navLinks:{
        textDecoration: 'none',
        color: 'turquoise',
        borderBottom: '2px solid turquoise',
        marginRight: '5%',
        float: 'right',
        fontSize: 'large',
    }
}

export default function header(){
    return(
        <header style={style.header}>
            <span class="title" style={style.title}>Corbin Spence</span>
            <div class="nav-links" style={style.nav}>
                <a href="#About Me" style={style.navLinks}>About Me</a>
                <a href="#Work" style={style.navLinks}>Work</a>
                <a href="#Contact Info" style={style.navLinks}>Contact Me</a>
                <a href="#Resume" style={style.navLinks}>Resume</a>
            </div>
        </header>
    )
}