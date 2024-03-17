import { Form, Button } from "react-bootstrap"

function Home() {
 
    return (
        <>
            <p>Cuentanos, ¿en que te podemos ayudar?</p>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Form>
            <Button>Enviar</Button>
        </>
    )
  }
  
  export default Home