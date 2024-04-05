import Training from "@/components/Training/Training";
import AdmissionCard from "@/components/admission-card/admission-card";
import Category from "@/components/category/category";
import MainNav from "@/components/main-nav/main-nav";
import RelatedVideos from "@/components/related-videos/related-videos";
import Heading from "@/components/shared/heading/heading";

export default function Home() {
  return (
    <div>
      <MainNav></MainNav>
      <Heading title={"Physical Fitness"}></Heading>
      <Category></Category>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <div className="md:col-span-3">
            <div className=""></div>
          </div>
          <div>
            <AdmissionCard></AdmissionCard>
          </div>
        </div>
        <Training></Training>
      </div>
      <RelatedVideos></RelatedVideos>
    </div>
  );
}
