import React, { Component } from 'react';
import { getData } from './Room';

class App extends Component {
    list = [];
    constructor(props) {
        super(props);
        const rom = getData();
        if (localStorage && localStorage.getItem('rooms')) {
            this.list = JSON.parse(localStorage.getItem('rooms'));
        } else {
            localStorage.setItem('rooms', JSON.stringify(rom));
            this.list = rom;
        }

        this.state = {
            id: '',
            name: '',
            myfile: '',
            type_room: '',
            area: '',
            price: '',
            oldprice: ''
        };
    }

    saveLocalStorage = (event) => {
        this.list.push(this.state);
        localStorage.setItem('rooms', JSON.stringify(this.list));
        this.setState({
            id: '',
            name: '',
            myfile: '',
            type_room: '',
            area: '',
            price: '',
            oldprice: ''
        });
        event.preventDefault();
    };

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        if (nam === 'myfile') {
            val = event.target.files[0].name;
        }
        this.setState({ [nam]: val });
    };

    handleMessage = (event) => {
        alert('Thanks for your order!');
        event.preventDefault();
    };

    render() {
        return (
            <div className="container">
                <h2>Add Room</h2>
                <form onSubmit={this.saveLocalStorage}>
                    {/* input fields here */}
                </form>

                {/* Navigation bar */}
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">TRANG CHỦ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">PHÒNG VÀ MỨC GIÁ</a>
                    </li>
                    {/* ... */}
                </ul>

                {/* Table */}
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>TYPE ROOM</th>
                            <th>IMAGE</th>
                            <th>AREA</th>
                            <th>PRICE</th>
                            <th>OLDPRICE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.list.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.type_room}</td>
                                <td><img src={"images/" + item.myfile} style={{ width: '50px', height: '50px' }} alt="room" /></td>
                                <td>{item.area}</td>
                                <td>{item.price}</td>
                                <td>{item.oldprice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
