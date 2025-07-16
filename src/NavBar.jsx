
    function NavBar() {
        let clicked = false;
        function changeMood() {
            let iconChange = document.getElementById("icon")
            clicked = ! clicked
            if (clicked === true) {
                iconChange.src = "../public/assets/images/icon-sun.svg";
                 document.body.classList.add("dark-mood")
                 document.body.classList.remove("light-mood")
                
            }
            else{
                iconChange.src = "../public/assets/images/icon-moon.svg";
                document.body.classList.add("light-mood")
                document.body.classList.remove("dark-mood")

            }
            
           
            
        }
        return(
            <>
            <nav>
                <img src="../public/assets/images/logo.svg" alt="Main-Logo" />
                <button> <img src="../public/assets/images/icon-moon.svg" alt="Moon-Icon" id="icon" onClick={changeMood}/></button>
            </nav>
            
            </>
        )

    }
    export default NavBar;