class Task extends React.Component {

    handleEdit = () => {
        alert(`Pressed Edit Button, task = ${this.props.task}`);
    }

    handleRemove = () => {
        alert(`Pressed Remove Button, task = ${this.props.task}`);
    }

    render() {
        return (
            <div className="box">
                <div>
                    {this.props.task}
                </div>
                <button onClick={this.handleEdit} className="btn light">
                    Edit
                </button>
                <button onClick={this.handleRemove} className="btn red">
                    Remove
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <div className="field">
        <Task task="Task 1" />
        <Task task="Task 2" />
        <Task task="Task 3" />
    </div>
    , document.getElementById('root')
)