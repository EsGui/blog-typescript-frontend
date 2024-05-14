import BlogEspecificBody from "@/components/blog_especific_components/BlogEspecificBody";
import HomeHeader from "@/components/home_components/HomeHeader";

export default function BlogEspecific({ params: { slug } } : { params: { slug: string } }) {
    return (
        <div>
            <HomeHeader />
            <BlogEspecificBody slug={ slug } />
        </div>
    )
}