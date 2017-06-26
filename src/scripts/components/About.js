
import DataStore from 'flux/stores/DataStore.js'

class About extends React.Component {
    render() {
        let page = DataStore.getPageBySlug('about');
        console.log(page);
        return (
            <div>
                <h1>{page.title.rendered}</h1>
                <div>{page.content.rendered}</div>
            </div>
        );
    }
}

export default About;
