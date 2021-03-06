// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const questions = [
    {
      _id: 1,
      title: "Do you like dogs?",
      description: "Because your best buddy is obviously a dog. 😁",
      choices: [
        {
          _id: 1,
          title: "YES",
        },
        {
          _id: 2,
          title: "NO",
        },
      ],
    },
    {
      _id: 2,
      title: "What characteristics do your buddy to have?",
      description: "Because we have to make sure your personalities match. 😁",
      type: "checkbox",
      choices: [
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
      ],
    },
  ];

  res.status(200).json(questions);
};
