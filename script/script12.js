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
        this.props.remove(this.props.pos);
    }

    handleSave = () => {
        this.props.edit(this.props.pos, this.idTextArea.current.value);
        this.setState({ isEdit: false });
    }

    renderEditTask = () => {
        return (
            <div className="box">
                <textarea ref={this.idTextArea}>{this.props.task}</textarea>
                <button onClick={this.handleSave} className="btn success">Save</button>
            </div>
        )
    }

    renderViewTask = () => {
        return (
            <div className="box">
                <div>{this.props.task}</div>
                <button onClick={this.handleEdit} className="btn light">Edit</button>
                <button onClick={this.handleRemove} className="btn red">Remove</button>
            </div>
        )
    }

    render() {
        return this.state.isEdit ? this.renderEditTask() : this.renderViewTask();
    }
}

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    deleteTask = index => {
        const tasks = [... this.state.tasks];
        tasks.splice(index, 1);
        this.setState({ tasks });
    }

    updateTask = (index, content) => {
        const tasks = [... this.state.tasks];
        tasks[index] = content;
        this.setState({ tasks });
    }

    addTask = content => {
        const tasks = [... this.state.tasks, content];
        this.setState({ tasks });
    }

    render() {
        return (
            <div className="field">
                <button onClick={() => this.addTask("New Task")} className="btn new">Add Task</button>
                {this.state.tasks.map((item, index) => <Task
                    key={index}
                    task={item}
                    pos={index}
                    remove={this.deleteTask}
                    edit={this.updateTask}
                />)}
            </div>
        )
    }
}

ReactDOM.render(
    <TaskList />
    , document.getElementById('root'));