import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { API_BASE_URL } from "../config/config";

function App() {
    const [elementList, setElementList] = useState([]);
    useEffect(() => {
        const url = `${API_BASE_URL}/element/list`;

        axios
            .get(url, {})
            .then((response) => {
                setElementList(response.data);
            });
    });

    return (
        <>
            <Table hover style={{ margin: '5px' }}>
                <thead>
                    <tr>
                        <th>아이디</th>
                        <th>상품명</th>
                        <th>단가</th>
                        <th>카테고리</th>
                        <th>재고</th>
                        <th>이미지</th>
                        <th>상세 설명</th>
                    </tr>
                </thead>
                <tbody>
                    {elementList.map((ele) =>
                        <tr key={ele.id}>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                            <td>{Number(ele.price).toLocaleString()}원</td>
                            <td>{ele.category}</td>
                            <td>{ele.stock}</td>
                            <td>{ele.image}</td>
                            <td>{ele.description}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default App;