import Header from './components/Header'
import PageContent from './components/PageContent'
export default function HomeTemplate() {
    return (
        <div className='d-flex' style={{ minHeight: "100vh" }}>
            <Header />
            <PageContent />
        </div>
    )
}
