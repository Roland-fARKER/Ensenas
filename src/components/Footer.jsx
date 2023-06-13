

const Fotter = () =>{
    return(
        <footer className="  bg-black rounded-lg shadow m-4 dark:bg-gray-800">

        <div className=" w-full  h-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Tecno Power™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <span className="mr-4 hover:underline  ">About</span>
            </li>
            <li>
                <span  className="mr-4 hover:underline ">Privacy Policy</span>
            </li>
            <li>
                <span  className="mr-4 hover:underline ">Service</span>
            </li>
            <li>
                <span  className="hover:underline">Contact</span>
            </li>
        </ul>
        </div>
    </footer>
        
    );
}

export default Fotter;
