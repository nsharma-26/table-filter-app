import React from 'react';

function Articles({articles, sortBy}) {

    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                    {

                        articles
                        .sort((a,b)=>sortBy === "date" ? new Date(b.date).getTime() - new Date(a.date).getTime()
                        :
                        sortBy === "upvotes" ? 
                        b.upvotes - a.upvotes : true)
                        .map((article, index)=>
                            <tr key={index} data-testid="article">
                                <td data-testid="article-title">{article.title}</td>
                                <td data-testid="article-upvotes">{article.upvotes}</td>
                                <td data-testid="article-date">{article.date}</td>
                            </tr>
                        )
                        
                    }
                
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
