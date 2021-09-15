function Header() {
    return (
        <div>
            <h1>Get Packin'</h1>
            <p>A backpacker's interactive packing list</p>
            <nav>
            <a className="button" href="/">
              Gear List
            </a>
            <a className="button" href="/gear/new">
              Add New Gear
            </a>
            <a className="button" href="/about">
              About
            </a>
            </nav>
        </div>
    )
}

export default Header