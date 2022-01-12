import {Link} from 'react-router-dom';

function MainNavigation(){
    return(
        <header>
            <div>
                <h1>FAMILY</h1> 
            </div>
            <nav>
                <Link to='/deepti'>Deepti singh</Link> <br/>
                <Link to='/jagmeet'>Jagmeet</Link> <br/>
                <Link to='/aryanbaby'>Aryan</Link> <br/>
                <Link to='/tejasbaby'>Tejas</Link> <br/>
                <Link to="/UseEffectEx">See useEffect Example </Link>
            </nav>

        </header>
    );
}

export default MainNavigation;