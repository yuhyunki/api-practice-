function Menubar() {

    return (
        <>
            <div className='menubar'>
                <div className='title'>
                    Yuhyun's Webpage
                </div>
                <ul className='menu'>
                    <li className='li'><a href="https://naver.com" className='a'>About</a></li>
                    <li className='li'><a href="#" className='a'>Road Map</a></li>
                    <li className='li'><a href="#" className='a'>YK Michelins</a></li>
                    <li className='li'><a href="#" className='a'>Portfolio</a></li>
                    <button className='login'>Log In</button>
                </ul>
            </div>
        </>
    );
}

export default Menubar;