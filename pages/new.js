import Layout from '../components/Layout'

const New = () => (
    <Layout>
    <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
            Diary Entry
            </label>
            <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            />
        </div>
    </Layout>
)

export default New;
