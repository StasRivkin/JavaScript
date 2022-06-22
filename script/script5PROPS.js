class Student extends React.Component {
    render() {
        return (
            <div>
                <h2>name : {this.props.name}</h2>
                <h3>age : {this.props.age}</h3>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <Student name='Peter' age='21' />
        <Student name='Mary' age='18' />
        <Student name='Tigran' age='25' />
    </div>
    , document.getElementById('root'));
