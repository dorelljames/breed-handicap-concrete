// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const dogs = [
    {
      _id: 1,
      name: "Labrador",
      attributes: [1, 2],
      imageSrc:
        "https://dogtime.com/assets/uploads/gallery/best-service-dog-breeds/servicedogs2.jpg",
    },
    {
      _id: 2,
      name: "Golden Retriever",
      attributes: [3, 4, 5],
      imageSrc:
        "https://dogtime.com/assets/uploads/gallery/best-service-dog-breeds/servicedogs4.jpg",
    },
    {
      _id: 3,
      name: "German Shepherd",
      attributes: [6, 2],
      imageSrc:
        "https://dogtime.com/assets/uploads/gallery/best-service-dog-breeds/servicedogs3.jpg",
    },
  ];

  res.status(200).json(dogs);
};
