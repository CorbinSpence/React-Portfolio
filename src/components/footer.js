import react from 'react'

const style = {
    footer:{
        width:'100%',
        marginTop: '10px'
    },
    contacts:{
        paddingTop: '50px',
        paddingBottom: '50px',
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
    },
    flexContainer:{
        display: 'flex',
        flexWrap: 'no-wrap',
        columnGap: '100px'
    },
    flexJustifyCenter:{
        justifyContent: 'center'
    },
    flexAlignCenter:{
        alignContent: 'center'
    },
    flexCol:{
        flexDirection: 'column'
    },
    flexRow:{
        flexDirection: 'row'
    }

}

export default function footer(){
    return(
        <footer id="Contact Links" class="flex-container" style={style.footer}>
            <div style={{...style.contacts, ...style.flexContainer, ...style.flexJustifyCenter}}>
                <div>
                    <a href="404.433.0268" style={style.contactLink}>404.433.0268</a>
                </div>
                <div>
                    <a href="corbinspence16@gmail.com" style={style.contactLink}>corbinspence16@gmail.com</a>
                </div>
                <div>
                    <a href="https://github.com/CorbinSpence" style={style.contactLink}>Github</a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/corbin-spence-0aa1751b0/" style={style.contactLink}>LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}