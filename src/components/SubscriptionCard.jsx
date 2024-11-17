import React from 'react';
import Image from 'next/image'; // Import Image component

const SubscriptionCard = ({
  title,
  description,
  views,
  comments,
  date,
  author,
  category,
  authorImage,
  cardImage,
}) => {
  return (
    <div>
      {/* Main Content */}
      <div className="w-[399px] h-[169px] relative">
        <div>
          <div className="w-[261px] ml-5 mb-3 absolute top-8 left-0 text-white text-xl font-bold font-dm-sans leading-tight">
            {title}
          </div>
          {/* Using Image component instead of <img> */}
          <Image
            className="absolute top-8 right-0 w-[89px] h-[50px]"
            src={cardImage}
            alt="Card Thumbnail"
            width={89} // Specify width for Image
            height={50} // Specify height for Image
          />
          <div className="mt-2 w-[248px] ml-5 absolute bottom-[38px] left-0 text-[#969696] text-sm font-normal font-dm-sans leading-tight">
            {description}
          </div>

          {/* Views Image */}
          <div className="ml-5 absolute bottom-0 left-0 flex items-center space-x-2">
            <Image
              className="w-[19px] h-[19px]"
              src="/views.svg"  
              alt="Views Icon"
              width={19}
              height={19}
            />
            <span className="text-[#d9d9d9] text-sm font-normal">{views}</span>
          </div>

          {/* Comments Image */}
          <div className="ml-5 absolute bottom-0 left-20 flex items-center space-x-2">
            <Image
              className="w-[17px] h-[17px]"
              src="/comments.svg"  
              alt="Comments Icon"
              width={17}
              height={17}
            />
            <span className="text-[#d9d9d9] text-sm font-normal">{comments}</span>
          </div>

         {/* Date Image */}
          <div className="absolute bottom-0 right-0 flex items-center space-x-2">
            <span className="text-[#888888] text-sm font-normal">{date}</span>
            <Image
              className="w-[17px] h-[17px]"
              src="/date.svg"  
              alt="Date Icon"
              width={17}
              height={17}
            />
          </div>

          <div className="ml-5 absolute top-2 left-8 text-white text-[10px] font-light font-dm-sans">
            {author}
          </div>
          <div className="absolute top-2 left-[120px] text-white text-[10px] font-light font-dm-sans">
            in {category}
          </div>
          <Image
            className="ml-5 absolute top-1 left-0 w-6 h-6 rounded-full"
            src={authorImage}
            alt="Author"
            width={24} // Specify width for Image
            height={24} // Specify height for Image
          />
        </div>
      </div>

      {/* Divider */}
      <div className="mt-4 mb-4 w-full h-px bg-[#444444]"></div>
    </div>
  );
};

export default SubscriptionCard;
