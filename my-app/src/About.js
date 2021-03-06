import {Container, Figure} from "react-bootstrap"

function About () {
    return (
        <Container className="p-3">
            <div>
                <h1>⛺️Get Packin'</h1>
                <Container className='p-5'>
                    <h3>"Where's the stove?"</h3>
                    <div>
                        <p>Nobody likes to realize they forgot something long after they hit the trail. But it's also easy to do! There are so many things to pack and all the gear is usually living on separate lists. Thus the idea for Get Packin' was born: one interactive app for all your gear so you'll never forget anything again! (We make no guarantees)</p>
                    </div>
                </Container>
            </div>
            <Container bg='primary' className='p-1'>
                <h3>Meet the Creators</h3>
                <div>
                    <Figure className='p-3'>
                        <Figure.Image
                            src="https://res.cloudinary.com/do4zijkje/image/upload/v1641247811/1640102957686_pnsax2.jpg"
                            thumbnail
                            width={200}/>
                        <Figure.Caption>
                            David Regan
                        </Figure.Caption>
                    </Figure>
                    <Figure className='p-3'>
                        <Figure.Image
                            src="https://ca.slack-edge.com/T02MD9XTF-U025DNXMGT1-4563e47e63e5-512"
                            thumbnail
                            width={200}/>
                        <Figure.Caption>
                            Nicholas Christensen
                        </Figure.Caption>
                    </Figure>
                </div>
            </Container>
        </Container>
    )
}

export default About