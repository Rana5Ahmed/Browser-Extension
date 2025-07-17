
    function NavBar() {
        let clicked = false;
        function changeMood() {
            let iconChange = document.getElementById("icon")
            clicked = ! clicked
            if (clicked === true) {
                iconChange.src = "/Browser-Extension/assets/images/icon-sun.svg";
                 document.body.classList.add("dark-mood")
                 document.body.classList.remove("light-mood")
                
            }
            else{
                iconChange.src = "/Browser-Extension/assets/images/icon-moon.svg";
                document.body.classList.add("light-mood")
                document.body.classList.remove("dark-mood")

            }
            
           
            
        }
        return(
            <>
            <nav>
                <img src="/Browser-Extension/assets/images/logo.svg" alt="Main-Logo" />
                <button> <img src="/Browser-Extension/assets/images/icon-moon.svg" alt="Moon-Icon" id="icon" onClick={changeMood}/></button>
            </nav>
            
            </>
        )

    }
    export default NavBar;
