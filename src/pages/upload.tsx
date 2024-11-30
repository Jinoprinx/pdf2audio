import Header from "../components/Header";
import Footer from "../components/Footer";
import FileUploader from "../components/FileUploader";

export default function Upload() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <div className="container mx-auto py-20">
          <h1 className="text-3xl font-bold text-center mb-10">
            Upload Your PDF
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Max file size: 10MB | PDF format only
          </p>
          <FileUploader />
        </div>
      </main>
      <Footer />
    </>
  );
}
