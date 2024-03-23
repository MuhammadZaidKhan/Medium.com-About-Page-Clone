import { useParams } from 'react-router-dom';
import articles from './Article-Content';

const ArticlePage = () => {
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);

    return (
        <>
            {/* <h1>{article.title}</h1> */}
            {article.content.map(paragraph => (
                <p className='mt-5'>{paragraph}</p>
            ))}
        </>
    );
}

export default ArticlePage;