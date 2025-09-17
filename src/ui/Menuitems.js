import { Nav, NavDropdown } from "react-bootstrap";

// 특정 페이지로 이동할 때 사용되는 훅
import { useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate();
    return (
        <>
            {/* 하이퍼링크 : Nav.Link는 다른 페이지로 이동할 때 사용 */}
            <Nav.Link>상품 보기</Nav.Link>
            <NavDropdown title={`연습 문제`}>
                <NavDropdown.Item onClick={() => navigate(`/fruit`)}>과일 1개</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate(`/fruit/list`)}>과일 목록</NavDropdown.Item>
            </NavDropdown>
        </>
    );
}

export default App;