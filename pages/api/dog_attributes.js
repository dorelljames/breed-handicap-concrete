export default (req, res) => {
  const dog_attributes = [
    {
      _id: 1,
      title: "Intelligent",
    },
    {
      _id: 2,
      title: "Eager to please",
    },
    {
      _id: 3,
      title: "Even-tempered",
    },
    {
      _id: 4,
      title: "Bred to retrieve and carry objects",
    },
    {
      _id: 5,
      title: "Gentle with kids",
    },
    {
      _id: 6,
      title: "Loyal and obedient",
    },
    {
      _id: 7,
      title: "Protective of their person",
    },
    {
      _id: 8,
      title: "Easy to traim",
    },
    {
      _id: 9,
      title: "Active and fun-loving",
    },
    {
      _id: 10,
      title: "Strong instincts",
    },
    {
      _id: 11,
      title: "Playful",
    },
    {
      _id: 12,
      title: "Love to work",
    },
    {
      _id: 13,
      title: "Gentle, quiet giants",
    },
    {
      _id: 14,
      title: "Quick learners",
    },
  ];

  res.status(200).json(dog_attributes);
};
