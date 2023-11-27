import { Col, Row } from "reactstrap"
import CarouselInicio from "../CarouselInicio"
import ItemCardapio from "../ItemCardapio"

function Home() {
    return (
        <div>
            <Row>
                <Col>
                    {/* Aqui vai o carousel */}
                    <CarouselInicio />
                </Col>
            </Row>

            <Row>
                <Col className="text-center my-3">
                    <h1>Mais pedidos</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                    <ItemCardapio />
                </Col>

                <Col>
                    <ItemCardapio />
                </Col>

                <Col>
                    <ItemCardapio />
                </Col>

                <Col>
                    <ItemCardapio />
                </Col>
            </Row>
        </div>
    )
}

export default Home