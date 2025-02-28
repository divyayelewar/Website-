export const CourseDetail = [
    {
      id: 1,
      title: 'Java Programming for Beginners',
      description: 'Learn Java programming from scratch and build strong foundations.',
      imageUrl: 'https://kvch.in:859/uploads/1733993607521-java_full_stack_development_course.webp',
      students: 75,
      lessons: 15,
      language: 'Java',
      prerequisites: 'No',
      courseCapacity: 30,
      startDate: '01/04/2025',
      tabs: [
        {
          name: 'Information',
          content: {
            statement: 'Course Information',
            description: 'Learn the fundamentals of Java programming including object-oriented concepts, data types, control structures, and more.',
            keyPoints: 
            [
              'Introduction to Java programming',
              'Understanding object-oriented principles',
              'Learning data structures and algorithms',
              'Building real-world Java applications'
            ]
          }
        },
        {
          name: 'Curriculum',
          content: {
            statement: 'Curriculum Information',
            curriculum: [
              { lecture: 'Lecture 1.1 - Introduction to Java', time: '40 Minutes', seats: 30 },
              { lecture: 'Lecture 1.2 - Variables and Data Types', time: '45 Minutes', seats: 30 },
              { lecture: 'Lecture 1.3 - Control Flow Statements', time: '30 Minutes', seats: 30 }
            ]
          }
        },
        {
          name: 'Review',
          content: {
            reviews: [
              {
                name: 'Siya Sharma',
                feedback: '"This course made Java easy to understand. Highly recommended!"',
                profileImage: 'https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg'
              },
              {
                name: 'John Doe',
                feedback: '"Great course for beginners. The concepts were well explained."',
                profileImage: 'https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg'
              }
            ]
          }
        }
      ]
    },
    {
      id: 2,
      title: 'Python Programming for Beginners',
      description: 'Master Python programming language and start building projects in Python.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0O5vslvPjLxhZipJqxdR_a2mBE7f3fQoP4DFZroef8nN1ISjcArlaRfT7EE6QpNOwS8&usqp=CAU',
      students: 67,
      lessons: 12,
      language: 'Python',
      prerequisites: 'No',
      courseCapacity: 25,
      startDate: '10/05/2025',
      tabs: [
        {
          name: 'Information',
          content: {
            statement: 'Course Information',
            description: 'This course covers the fundamentals of Python programming, including variables, data types, loops, functions, and libraries.',
            keyPoints: [
              'Introduction to Python programming',
              'Working with data types and variables',
              'Understanding loops and conditionals',
              'Exploring Python libraries'
            ]
          }
        },
        {
          name: 'Curriculum',
          content: {
            statement: 'Curriculum Information',
            curriculum: [
              { lecture: 'Lecture 1.1 - Introduction to Python', time: '30 Minutes', seats: 25 },
              { lecture: 'Lecture 1.2 - Variables and Data Types', time: '40 Minutes', seats: 25 },
              { lecture: 'Lecture 1.3 - Loops and Conditionals', time: '35 Minutes', seats: 25 }
            ]
          }
        },
        {
          name: 'Review',
          content: {
            reviews: [
              {
                name: 'Asha Singh',
                feedback: '"The course was great! I learned Python quickly and easily."',
                profileImage: 'https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg'
              },
              {
                name: 'Michael Brown',
                feedback: '"Amazing course! Perfect for those starting with Python."',
                profileImage: 'https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg'
              }
            ]
          }
        }
      ]
    },
    {
      id: 3,
      title: 'Oracle Database Fundamentals',
      description: 'Learn how to work with Oracle databases, queries, and relational database management systems.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdh3kzZzQUxhYC06S88bF-lXyonvv62i1TB8sWEPzDuxfX8iSqQ8btjOSBLKssxm5sMI8&usqp=CAU',
      students: 48,
      lessons: 8,
      language: 'Oracle',
      prerequisites: 'Basic knowledge of SQL',
      courseCapacity: 20,
      startDate: '15/06/2025',
      tabs: [
        {
          name: 'Information',
          content: {
            statement: 'Course Information',
            description: 'This course focuses on Oracle SQL and database management systems, including creating tables, writing queries, and using Oracle\'s advanced features.',
            keyPoints: [
              'Understanding Oracle database structure',
              'Writing SQL queries in Oracle',
              'Managing data with Oracle SQL',
              'Implementing advanced Oracle features'
            ]
          }
        },
        {
          name: 'Curriculum',
          content: {
            statement: 'Curriculum Information',
            curriculum: [
              { lecture: 'Lecture 1.1 - Introduction to Oracle', time: '35 Minutes', seats: 20 },
              { lecture: 'Lecture 1.2 - SQL Queries in Oracle', time: '40 Minutes', seats: 20 },
              { lecture: 'Lecture 1.3 - Advanced Oracle Features', time: '45 Minutes', seats: 20 }
            ]
          }
        },
        {
          name: 'Review',
          content: {
            reviews: [
              {
                name: 'Rahul Yadav',
                feedback: '"Great course for learning Oracle! The content was detailed and easy to follow."',
                profileImage: 'https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg'
              },
              {
                name: 'Sophia Roy',
                feedback: '"I gained a solid understanding of Oracle databases. The course was fantastic!"',
                profileImage: 'https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg'
              }
            ]
          }
        }
      ]
    },
    {
      id: 4,
      title: 'AI and Machine Learning Basics',
      description: 'Get started with Artificial Intelligence and Machine Learning concepts with hands-on examples.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxm1tS0g9qbhuHCitP0mpY3fRiAmLlAU8zw&s',
      students: 55,
      lessons: 18,
      language: 'AI',
      prerequisites: 'Basic programming knowledge',
      courseCapacity: 25,
      startDate: '20/07/2025',
      tabs: [
        {
          name: 'Information',
          content: {
            statement: 'Course Information',
            description: 'Explore the fundamentals of AI, including supervised learning, unsupervised learning, and neural networks. Apply machine learning techniques in real-world projects.',
            keyPoints: [
              'Understanding AI fundamentals',
              'Supervised and unsupervised learning',
              'Introduction to neural networks',
              'Hands-on with AI projects'
            ]
          }
        },
        {
          name: 'Curriculum',
          content: {
            statement: 'Curriculum Information',
            curriculum: [
              { lecture: 'Lecture 1.1 - Introduction to AI', time: '40 Minutes', seats: 25 },
              { lecture: 'Lecture 1.2 - Supervised Learning Techniques', time: '45 Minutes', seats: 25 },
              { lecture: 'Lecture 1.3 - Neural Networks and Deep Learning', time: '50 Minutes', seats: 25 }
            ]
          }
        },
        {
          name: 'Review',
          content: {
            reviews: [
              {
                name: 'Ayesha Khan',
                feedback: '"The AI course was very informative and hands-on. I now understand machine learning better."',
                profileImage: 'https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg'
              },
              {
                name: 'David Lee',
                feedback: '"An excellent introduction to AI and ML. Highly recommended!"',
                profileImage: 'https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg'
              }
            ]
          }
        }
      ]
    },
    {
      id: 5,
      title: 'AI and Machine Learning Basics',
      description: 'Get started with Artificial Intelligence and Machine Learning concepts with hands-on examples.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUgdDWCZtoif5bdJmw-DIoDHdtfNcVc0cQj5AUqs8hwLyH4J4Dem1htd53ieh4rAY5Dy0&usqp=CAU',
      students: 55,
      lessons: 18,
      language: 'HTML',
      prerequisites: 'Basic programming knowledge',
      courseCapacity: 25,
      startDate: '20/07/2025',
      tabs: [
        {
          name: 'Information',
          content: {
            statement: 'Course Information',
            description: 'Explore the fundamentals of AI, including supervised learning, unsupervised learning, and neural networks. Apply machine learning techniques in real-world projects.',
            keyPoints: [
              'Understanding AI fundamentals',
              'Supervised and unsupervised learning',
              'Introduction to neural networks',
              'Hands-on with AI projects'
            ]
          }
        },
        {
          name: 'Curriculum',
          content: {
            statement: 'Curriculum Information',
            curriculum: [
              { lecture: 'Lecture 1.1 - Introduction to AI', time: '40 Minutes', seats: 25 },
              { lecture: 'Lecture 1.2 - Supervised Learning Techniques', time: '45 Minutes', seats: 25 },
              { lecture: 'Lecture 1.3 - Neural Networks and Deep Learning', time: '50 Minutes', seats: 25 }
            ]
          }
        },
        {
          name: 'Review',
          content: {
            reviews: [
              {
                name: 'Ayesha Khan',
                feedback: '"The AI course was very informative and hands-on. I now understand machine learning better."',
                profileImage: 'https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg'
              },
              {
                name: 'David Lee',
                feedback: '"An excellent introduction to AI and ML. Highly recommended!"',
                profileImage: 'https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg'
              }
            ]
          }
        }
      ]
    },
    {
      id: 6,
      title: 'AI and Machine Learning Basics',
      description: 'Get started with Artificial Intelligence and Machine Learning concepts with hands-on examples.',
      imageUrl: 'https://img-c.udemycdn.com/course/240x135/1561458_7f3b_2.jpg',
      students: 55,
      lessons: 18,
      language: 'CSS',
      prerequisites: 'Basic programming knowledge',
      courseCapacity: 25,
      startDate: '20/07/2025',
      tabs: [
        {
          name: 'Information',
          content: {
            statement: 'Course Information',
            description: 'Explore the fundamentals of AI, including supervised learning, unsupervised learning, and neural networks. Apply machine learning techniques in real-world projects.',
            keyPoints: [
              'Understanding AI fundamentals',
              'Supervised and unsupervised learning',
              'Introduction to neural networks',
              'Hands-on with AI projects'
            ]
          }
        },
        {
          name: 'Curriculum',
          content: {
            statement: 'Curriculum Information',
            curriculum: [
              { lecture: 'Lecture 1.1 - Introduction to AI', time: '40 Minutes', seats: 25 },
              { lecture: 'Lecture 1.2 - Supervised Learning Techniques', time: '45 Minutes', seats: 25 },
              { lecture: 'Lecture 1.3 - Neural Networks and Deep Learning', time: '50 Minutes', seats: 25 }
            ]
          }
        },
        {
          name: 'Review',
          content: {
            reviews: [
              {
                name: 'Ayesha Khan',
                feedback: '"The AI course was very informative and hands-on. I now understand machine learning better."',
                profileImage: 'https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg'
              },
              {
                name: 'David Lee',
                feedback: '"An excellent introduction to AI and ML. Highly recommended!"',
                profileImage: 'https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg'
              }
            ]
          }
        }
      ]
    },
    {
      id: 7,
      title: 'AI and Machine Learning Basics',
      description: 'Get started with Artificial Intelligence and Machine Learning concepts with hands-on examples.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeo1uoyb6oQS7eePlZNsnk0W_4aB-AbcQ9A&s',
      students: 55,
      lessons: 18,
      language: 'Advance Java',
      prerequisites: 'Basic programming knowledge',
      courseCapacity: 25,
      startDate: '20/07/2025',
      tabs: [
        {
          name: 'Information',
          content: {
            statement: 'Course Information',
            description: 'Explore the fundamentals of AI, including supervised learning, unsupervised learning, and neural networks. Apply machine learning techniques in real-world projects.',
            keyPoints: [
              'Understanding AI fundamentals',
              'Supervised and unsupervised learning',
              'Introduction to neural networks',
              'Hands-on with AI projects'
            ]
          }
        },
        {
          name: 'Curriculum',
          content: {
            statement: 'Curriculum Information',
            curriculum: [
              { lecture: 'Lecture 1.1 - Introduction to AI', time: '40 Minutes', seats: 25 },
              { lecture: 'Lecture 1.2 - Supervised Learning Techniques', time: '45 Minutes', seats: 25 },
              { lecture: 'Lecture 1.3 - Neural Networks and Deep Learning', time: '50 Minutes', seats: 25 }
            ]
          }
        },
        {
          name: 'Review',
          content: {
            reviews: [
              {
                name: 'Ayesha Khan',
                feedback: '"The AI course was very informative and hands-on. I now understand machine learning better."',
                profileImage: 'https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg'
              },
              {
                name: 'David Lee',
                feedback: '"An excellent introduction to AI and ML. Highly recommended!"',
                profileImage: 'https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg'
              }
            ]
          }
        }
      ]
    }
  ];
  