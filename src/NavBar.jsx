    import logo from '../public/assets/images/logo.svg'
    import moonIcon from '../public/assets/images/icon-moon.svg';
    import sunIcon from '../public/assets/images/icon-sun.svg';
    function NavBar() {
        let clicked = false;
        function changeMood() {
            let iconChange = document.getElementById("icon")
            clicked = ! clicked
            if (clicked === true) {
                iconChange.src = {sunIcon};
                 document.body.classList.add("dark-mood")
                 document.body.classList.remove("light-mood")
                
            }
            else{
                iconChange.src = {moonIcon};
                document.body.classList.add("light-mood")
                document.body.classList.remove("dark-mood")

            }
            
           
            
        }
        return(
            <>
            <nav>
                <img src={logo} alt="Main-Logo" />
                <button> <img src={moonIcon} alt="Moon-Icon" id="icon" onClick={changeMood}/></button>
            </nav>
            
            </>
        )

    }
    export default NavBar;
