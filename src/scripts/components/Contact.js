import DataStore from 'flux/stores/DataStore.js'

class Contact extends React.Component {
    render() {
        let allData = DataStore.getAll();
        console.log(allData);

        return (
            <div>
                <h1>contact</h1>
            </div>
        );
    }
}

export default Contact;
