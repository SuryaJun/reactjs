import axios from "axios";
import React from "react";


const url =`https://newsapi.org/v2/top-headlines?country=id&apiKey=3f0ec6c5d4d84e88a5e1b24efad834d8`

class Prom extends React.Component {
    state = {
        artData: [],
        loading: true,
        error: null
    };
    
    News() {
        axios
            .get('https://newsapi.org/v2/top-headlines?country=id&apiKey=3f0ec6c5d4d84e88a5e1b24efad834d8')
            .then(response => 
                response.data.articles.map(
                    newsdata => ({
                        title: `${newsdata.title}`,
                        description: `${newsdata.description}`,
                        content: `${newsdata.content}`,
                        Image: `${newsdata.urlToImage}`,
                        published: `${newsdata.publishedAt}`
                    })

                )
            )

            .then(artData => {
                this.setState({artData, loading: false},
                    // console.log(artData)
                );
            })
            .catch( error => this.setState({ error, loading: false }));
    }

    componentDidMount() {
        this.News();
    }
    render() {
        const {loading, artData} = this.state;
        return (
            <React.Fragment>
                <div className="container nav">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="art art-primary" >
                                <h2 className="text-center">Portal Berita</h2>
                            </div>
                        </div>
                    </div>
                </div>
                
                    {!loading ? (
                        artData.map(data => {
                
                            return (
                                <div key={data.title}>
                                    <div className="cardWrapper">
                                        <div className="card">
                                            <img src={newsdata.urlToImage} alt='' />
                                            <div className="card-body">
                                            <h4 className="card-title">{data.title}</h4>
                                            <p className="card-text">{data.description}</p>
                                            <a href='${url}' className="btn btn-primary" >More..</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        

                <div className="container">
                    <p className="text-center">Wait...</p>
                </div>
                
           </React.Fragment>
        )
    }
}

export default Prom;