import { useRouter } from "@/lib/router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HomePage } from "@/pages/HomePage";
import { CoursesPage } from "@/pages/CoursesPage";
import { CourseDetailPage } from "@/pages/CourseDetailPage";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";

function App() {
  const { path } = useRouter();

  let page: React.ReactNode;
  if (path === "/" || path === "") {
    page = <HomePage />;
  } else if (path === "/courses") {
    page = <CoursesPage />;
  } else if (path.startsWith("/course/")) {
    const slug = path.replace("/course/", "");
    page = <CourseDetailPage slug={slug} />;
  } else if (path === "/about") {
    page = <AboutPage />;
  } else if (path === "/contact") {
    page = <ContactPage />;
  } else {
    page = (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="font-display text-5xl font-extrabold text-neutral-900">
          404
        </h1>
        <p className="mt-3 text-lg text-neutral-600">
          The page you are looking for does not exist.
        </p>
        <a
          href="#/"
          className="mt-6 rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700"
        >
          Back to Home
        </a>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar currentPath={path} />
      <main className="flex-1">{page}</main>
      <Footer />
    </div>
  );
}

export default App;
