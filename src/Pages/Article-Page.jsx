import { useParams } from 'react-router-dom';
import articles from './Article-Content';

const ArticlePage = () => {
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);

    return (
        <>
            <div className='pt-5 px-3 bg-white text-black min-h-screen'>
                <h1 className='mb-3'>{article.name}</h1>
                {article.content.map(paragraph => (
                    <p>{paragraph}</p>
                ))}
            </div>
        </>
    );
}

export default ArticlePage;