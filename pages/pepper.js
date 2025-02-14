import Layout from '../components/layout'; 
import Image from 'next/image'; 
import Container from '../components/container'; 
import 'swiper/css'; // Swiper styles
import 'swiper/css/navigation'; // Navigation styles
import 'swiper/css/pagination'; // Pagination styles
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper components
import { Navigation, Pagination, A11y } from 'swiper'; // Swiper modules

const Pepper = () => {
  return (
    <Layout>
      <Container>
         {/* Return Link */}
         <a href="/about" className="text-sm text-[#4056a1] flex items-center underline mb-1">
          {/* Back arrow icon */}
          <span className="mr-2">←</span> Return to Pepper's Owner's About Page
        </a>
        <div className="pt-16 pb-16">
          {/* Page Title */}
          <h1 className="text-7xl font-bold text-[#D64E00] mb-4">Pepper Pittman</h1>

          {/* Subtitle */}
          <h2 className="text-xl font-semibold text-slate-500 mb-4">Small Legs, Big Adventures</h2>

          {/* Line */}
          <hr className="border-t-2 border-[#4056a1] mb-8 w-full" />

          {/* Swiper Carousel for Images */}
          <Swiper
            spaceBetween={10} // Space between slides
            slidesPerView={3} // Number of slides shown at once
            navigation={true} // Navigation arrows
            pagination={{ clickable: true }} // Pagination bullets
            modules={[Navigation, Pagination, A11y]} // Use Swiper modules
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                src="/assets/pepper/pepper7.jpeg"
                alt="Pepper Adventure 1"
                width={300}
                height={300}
                className="object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/pepper/pepper5.jpeg"
                alt="Pepper Adventure 2"
                width={300}
                height={300}
                className="object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/pepper/pepper6.jpeg"
                alt="Pepper Adventure 3"
                width={300}
                height={300}
                className="object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/pepper/pepper4.jpeg"
                alt="Pepper Adventure 3"
                width={300}
                height={300}
                className="object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/pepper/pepper2.jpeg"
                alt="Pepper Adventure 3"
                width={300}
                height={300}
                className="object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/pepper/pepper3.jpeg"
                alt="Pepper Adventure 3"
                width={300}
                height={300}
                className="object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/pepper/pepper1.jpeg"
                alt="Pepper Adventure 3"
                width={300}
                height={300}
                className="object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/pepper/pepper8.jpeg"
                alt="Pepper Adventure 3"
                width={300}
                height={300}
                className="object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/pepper/pepper9.jpeg"
                alt="Pepper Adventure 3"
                width={300}
                height={300}
                className="object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/pepper/pepper10.jpeg"
                alt="Pepper Adventure 3"
                width={300}
                height={300}
                className="object-cover"
              />
            </SwiperSlide>
          </Swiper>

          {/* Bio Paragraph */}
          <p className="text-lg block text-slate-500 mb-4 mt-8">
          Pepper Pittman is a ball of muscle with a heart as big as her adventurous spirit. Though she’s a mutt, when I adopted her as a puppy, I was told she was a German Shepherd mix — but her physical appearance begs to differ. Pepper has traveled far and wide, visiting two countries (the US and Canada) and exploring 15 states from coast to coast. Her longest hike was an impressive 10 miles, and she didn’t even break a sweat. When she’s not hiking, she’s catching up on sleep, often snoozing anywhere from 12 to 20 hours a day.
</p>
<p className="text-lg block text-slate-500 mb-4">
Pepper enjoys moments of stillness, especially when she’s gazing out into the water, contemplating how much she loves her life. Despite her small size, she has the heart and muscle to take on any challenge that comes her way, and with her boundless energy, she's always ready for the next adventure. 
          </p>
          <p className="text-lg block text-slate-500 mb-4">
            Pepper is not to be trusted around children.
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default Pepper;
