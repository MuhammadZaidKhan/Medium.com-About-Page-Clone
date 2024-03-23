import { Link } from 'react-router-dom';
import articles from './Article-Content';

const ArticlesListPage = () => {
    return (
        <>
            {/* <h1 className='text-center m-10'>Articles</h1> */}
            {articles.map(article => (
                <Link key={article.name} className="text-white font-sans" to={`/articles/${article.name}`}>
                    <hr />
                    <div class="hover:bg-white hover:text-black flex flex-row justify-between">
                        <h3 class="georgia font-serif m-10 text-7xl">
                            {article.title}
                        </h3>
                        <span class="georgia font-serif m-10 text-7xl">→</span>
                    </div>

                    <hr />
                </Link >
            ))}
        </>
    );
}

export default ArticlesListPage;