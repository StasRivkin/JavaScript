class Check extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isChecked : false,
        };
    }

    handleCheckBoxChange = () => {
        this.setState({
            isChecked : !this.state.isChecked
        })
    }

    render() {
        const message = this.state.isChecked ? 'Checked' : 'Unchecked';
        
        return (
            <div>
                <input onChange={this.handleCheckBoxChange} type={'checkbox'} defaultChecked = {this.state.isChecked} />
                <p>Checkbox {message}</p>   
            </div>
        )
    }
}

ReactDOM.render(
    <Check/>
    , document.getElementById('root')
);

//state
//props