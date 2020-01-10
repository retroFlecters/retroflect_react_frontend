import Layout from '../components/Layout'

const New = () => (
    <Layout>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <h2>New Post</h2>
                    <hr></hr>
                    <div className="jumbotron">
                        <div className="form-group">
                            <label htmlFor="diaryEntry">
                            Diary Entry
                            </label>
                            <textarea className="form-control" id="diaryEntry"
                            rows="5"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="gratitudeEntry">
                            I am grateful for...
                            </label>
                            <textarea className="form-control" id="gratitudeEntry"
                            rows="5"/>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default New;
