export interface IMockServiceData {
  title: string;
  image: string;
  category: string | string[];
  url: string;
  id: string;
}

const randomMovieImgs = [
  "https://api.lorem.space/image/movie?w=160&h=220&hash=8B7BCDC2",
  "https://api.lorem.space/image/movie?w=160&h=220&hash=500B67FB",
  "https://api.lorem.space/image/movie?w=160&h=220&hash=A89D0DE6",
  "https://api.lorem.space/image/movie?w=160&h=220&hash=225E6693",
  "https://api.lorem.space/image/movie?w=160&h=220&hash=9D9539E7",
  "https://api.lorem.space/image/movie?w=160&h=220&hash=BDC01094",
  "https://api.lorem.space/image/movie?w=160&h=220&hash=7F5AE56A",
  "https://api.lorem.space/image/movie?w=160&h=220&hash=4F32C4CF",
  "https://api.lorem.space/image/movie?w=160&h=220&hash=B0E33EF4",
  "https://api.lorem.space/image/movie?w=160&h=220&hash=2D297A22",
];

export const MOCK_SERVICE_1 = [
  {
    title: "explicabo aliquam sapiente",
    image: randomMovieImgs[Math.floor(Math.random() * randomMovieImgs.length)],
    category: ["Comedy"],
    url: "https://elda.biz",
    id: "1",
  },
  {
    title: "dignissimos ut necesfdsfdfds fd fsdsitatibus",
    image: randomMovieImgs[Math.floor(Math.random() * randomMovieImgs.length)],
    category: ["Horror"],
    url: "http://antonetta.com",
    id: "2",
  },
  {
    title: "cupiditate molestiae eaque",
    image: randomMovieImgs[Math.floor(Math.random() * randomMovieImgs.length)],
    category: ["Action"],
    url: "http://trycia.biz",
    id: "3",
  },
  {
    title: "aut aliquid nostrum",
    image: randomMovieImgs[Math.floor(Math.random() * randomMovieImgs.length)],
    category: ["Horror"],
    url: "https://kristofer.info",
    id: "4",
  },
  {
    title: "qui nisi quisquam",
    image: randomMovieImgs[Math.floor(Math.random() * randomMovieImgs.length)],
    category: ["Action", "Horror"],
    url: "http://peyton.net",
    id: "5",
  },
  {
    title: "ad blanditiis similique",
    image: randomMovieImgs[Math.floor(Math.random() * randomMovieImgs.length)],
    category: ["Horror"],
    url: "http://peyton.net",
    id: "6",
  },
  {
    title: "molestiae rerum dolorum",
    image: randomMovieImgs[Math.floor(Math.random() * randomMovieImgs.length)],
    category: ["Romantic", "Animation"],
    url: "http://peyton.net",
    id: "7",
  },
  {
    title: "qui enim quis",
    image: randomMovieImgs[Math.floor(Math.random() * randomMovieImgs.length)],
    category: ["Romantic"],
    url: "http://peyton.net",
    id: "8",
  },
  {
    title: "consectetur veritatis et",
    image: randomMovieImgs[Math.floor(Math.random() * randomMovieImgs.length)],
    category: ["Comedy"],
    url: "http://peyton.net",
    id: "9",
  },
  {
    title: "eum est quia",
    image: randomMovieImgs[Math.floor(Math.random() * randomMovieImgs.length)],
    category: ["Animation"],
    url: "http://peyton.net",
    id: "10",
  },
];

export const MOCK_SERVICE_2 = [
  {
    title: "ut sint ipsum",
    image: randomMovieImgs[Math.floor(Math.random() * randomMovieImgs.length)],
    category: "Animation",
    url: "http://dee.biz",
    id: "1",
  },
  {
    title: "aut et eaque",
    image: randomMovieImgs[Math.floor(Math.random() * randomMovieImgs.length)],
    category: "Horror",
    url: "http://trycia.biz",
    id: "2",
  },
  {
    title: "ipsa perferendis illum",
    image: randomMovieImgs[Math.floor(Math.random() * randomMovieImgs.length)],
    category: "Comedy",
    url: "https://emelia.info",
    id: "3",
  },
  {
    title: "nulla qui repudiandae",
    image: randomMovieImgs[Math.floor(Math.random() * randomMovieImgs.length)],
    category: "Action",
    url: "https://mariela.info",
    id: "4",
  },
  {
    title: "dignissimos aut tempore",
    image: randomMovieImgs[Math.floor(Math.random() * randomMovieImgs.length)],
    category: "Thriller",
    url: "http://peyton.net",
    id: "5",
  },
  {
    title: "perferendis cupiditate qui",
    image: randomMovieImgs[Math.floor(Math.random() * randomMovieImgs.length)],
    category: "Action",
    url: "https://kristofer.info",
    id: "6",
  },
  {
    title: "rerum rerum aut",
    image: randomMovieImgs[Math.floor(Math.random() * randomMovieImgs.length)],
    category: "Comedy",
    url: "http://buddy.name",
    id: "7",
  },
  {
    title: "cupiditate tempora rem",
    image: randomMovieImgs[Math.floor(Math.random() * randomMovieImgs.length)],
    category: "Horror",
    url: "http://krista.org",
    id: "8",
  },
  {
    title: "aspernatur voluptatum quibusdam",
    image: randomMovieImgs[Math.floor(Math.random() * randomMovieImgs.length)],
    category: "Thriller",
    url: "http://antonetta.com",
    id: "9",
  },
  {
    title: "esse aut adipisci",
    image: randomMovieImgs[Math.floor(Math.random() * randomMovieImgs.length)],
    category: "Thriller",
    url: "https://elda.biz",
    id: "10",
  },
];

export const ALL_SERVICES = [MOCK_SERVICE_1, MOCK_SERVICE_2];
