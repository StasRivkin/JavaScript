class Task extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        };
        this.idTextArea = React.createRef();
    }

    handleEdit = () => {
        this.setState({ isEdit: true });
    }

    handleRemove = () => {
        alert(`Pressed Remove Button, task = ${this.props.task}`);
    }

    handleSave = () => {
        alert(this.idTextArea.current.value);
        this.setState({ isEdit: false });
    }

    renderEditTask = () => {
        return (
            <div className="box">
                <textarea ref={this.idTextArea}>
                    {this.props.task}
                </textarea>
                <button onClick={this.handleSave} className="btn success">
                    Save
                </button>
            </div>
        )
    }

    renderViewTask = () => {
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

    render() {
        return this.state.isEdit ? this.renderEditTask() : this.renderViewTask();
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