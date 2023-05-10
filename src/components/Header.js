import React from 'react'

const Header = ({handleToggleDarkmode}) => {
    return (
        <div className='header' onClick={()=>{handleToggleDarkmode((previousDarkMode)=>!previousDarkMode)}}>
            {/*Getting state using the hook function passed down as prop...know more about this*/}
            <h1>Jotte</h1>
            <button className='save'>Toggle Modes</button>
        </div>
    )
}

export default Header
