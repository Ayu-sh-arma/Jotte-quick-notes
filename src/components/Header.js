import React from 'react'

const Header = ({handleToggleDarkmode}) => {
    return (
        <div className='header'>
            {/*Getting state using the hook function passed down as prop...know more about this*/}
            <h1>Jotte</h1>
            <button className='save' onClick={()=>{handleToggleDarkmode((previousDarkMode)=>!previousDarkMode)}}>Toggle Modes</button>
        </div>
    )
}

export default Header
