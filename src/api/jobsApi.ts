import { Job, NewJob } from "../types/job";

const mockJobs: Job[] = [
  {
    title: "Prekiu krovejas",
    price: 1100,
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Lidl-Logo.svg/1200px-Lidl-Logo.svg.png",
    type: "partTime",
    starting_from: "2023-03-11T22:00:00.000Z",
    has_drivers_license: false,
    description: "need strong man",
    user_id: 1,
    id: 8,
    createdAt: "2023-03-02T20:30:06.000000Z",
    updatedAt: "2023-03-02T20:30:06.000000Z",
  },
  {
    title: "Radio host",
    price: 1300,
    image_url: "https://fm.lt/images/stations/Marijos_radijas.jpg",
    type: "partTime",
    starting_from: "2023-04-01T21:00:00.000Z",
    has_drivers_license: false,
    description: "Radio host for Marijos Radijas",
    user_id: 1,
    id: 7,
    createdAt: "2023-03-02T20:29:15.000000Z",
    updatedAt: "2023-03-02T20:29:15.000000Z",
  },
  {
    title: "Esports journalist",
    price: 2300,
    image_url:
      "https://img.freepik.com/free-vector/wolf-esport-gaming-logo-vector-design_343694-1346.jpg?w=360&t=st=1677788852~exp=1677789452~hmac=6d95b4d953ee341e3c73792c0496ba446ae3a85f9b10c6a2a4fe5cf4fe18a75b",
    type: "freelance",
    starting_from: "2023-04-24T21:00:00.000Z",
    has_drivers_license: true,
    description: "Job in English",
    user_id: 1,
    id: 6,
    createdAt: "2023-03-02T20:28:13.000000Z",
    updatedAt: "2023-03-02T20:28:13.000000Z",
  },
  {
    title: "UI designer",
    price: 1200,
    image_url:
      "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=740&t=st=1677788727~exp=1677789327~hmac=d8571d74acaaa6ef3369cb03eac922f49f0b4900eaf9c727c96d017d3b1dd9ad",
    type: "fullTime",
    starting_from: "2023-03-21T22:00:00.000Z",
    has_drivers_license: false,
    description: "Belekas",
    user_id: 1,
    id: 5,
    createdAt: "2023-03-02T20:27:17.000000Z",
    updatedAt: "2023-03-02T20:27:17.000000Z",
  },
  {
    title: "Code tester",
    price: 18.99,
    image_url:
      "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/O6SXYTO4WFPLJPIHA4VD4ABLAU.jpg",
    type: "freelance",
    starting_from: "2023-03-30T21:00:00.000Z",
    has_drivers_license: true,
    description: "Some quick job for everyone.",
    user_id: 1,
    id: 3,
    createdAt: "2023-03-02T19:06:46.000000Z",
    updatedAt: "2023-03-02T19:06:46.000000Z",
  },
];

export const fetchJobs = async (): Promise<Job[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockJobs);
    }, 1000);
  });
};

export const createJob = async (newJob: NewJob): Promise<Job> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ...newJob,
        id: Date.now(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }, 1000);
  });
};
