class Group extends React.Component {
    render() {
        const subtitle = 'Tel Ran programm';
        return <div>
            <h1>Java-47</h1>
            <h4>{subtitle}</h4>
            </div>
    }
}

ReactDOM.render(<div>
                    <Group />
                    <Group />
                    <Group />
                </div>, document.getElementById('root'));