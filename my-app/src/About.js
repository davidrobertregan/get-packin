import {Container, Figure} from "react-bootstrap"

function About () {
    return (
        <Container className="p-5">
            <div>
                <h1>⛺️Get Packin'</h1>
                <h3>"Where's the stove?"</h3>
                <div>
                    <p>Nobody likes to realize they forgot something long after they hit the trail. But it's also easy to do... there's so many things to pack and all the gear is usually living on multiple separate lists. Thus the idea for Get Packin' was born: one place for all your gear so you'll never forget anything again.</p>
                </div>
            </div>
            <div>
                <h3>Meet the Creators</h3>
                <Container>
                    <Figure>
                        <Figure.Image
                            src="https://static.wixstatic.com/media/065e6b_dd1a8624bd5b40c9848aeec671ed811b.png/v1/fit/w_936%2Ch_733%2Cal_c/file.png"
                            thumbnail
                            width={150}/>
                        <Figure.Image
                            src="http://i.imgur.com/psBBZIV.png"
                            thumbnail
                            width={150}/>
                    </Figure>
                </Container>
            </div>
        </Container>
    )
}

export default About