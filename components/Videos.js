import Image from 'next/image';
import { videos } from '@/data/config';

export default function Videos() {
  return (
    <div>
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-purple-400 dark:to-pink-600 dark:text-transparent">
          {videos.title}
        </h2>
      </div>
      <p className="text-lg">{videos.desc}</p>
      <div className="mt-8">
        {videos.videos.map((item, index) => {
          return (
            <div
              key={index}
              className="p-6 border border-lightText rounded-xl mb-4"
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="flex items-center flex-wrap -m-3 pt-5">
                {item.link && (
                  <a
                    href={`${item.link}`}
                    className="flex items-center  py-1 px-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/static/icons/link.svg"
                      width={18}
                      height={18}
                      alt="Link icon"
                    />
                    <span className="ml-2  text-lightText  transition-colors duration-500">
                      {item.info}
                    </span>
                  </a>
                )}
              </div>
              <div className="pt-4">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 rounded-full p-2 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <a
        className="text-lg link link-underline link-underline-black"
        href="https://www.youtube.com/c/TheMaterrwelonn"
      >
        Watch more videos here.
      </a>
    </div>
  );
}
