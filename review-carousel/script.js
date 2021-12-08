const reviews = [
  {
    image:
      'http://learnenglish.britishcouncil.org/sites/podcasts/files/2021-10/RS6715_492969113-hig.jpg',
    name: 'Andrea Luke',
    job: 'Realtor',
    review:
      'My neighbor Georgine has one of these. She works as a fireman and she says it looks colorful.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
    name: 'Justin Luv',
    job: 'Graphic Designer',
    review: 'I saw one of these in Tanzania and I bought one.',
  },
  {
    image:
      'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
    name: 'Alex Mal',
    job: 'Web Developer',
    review: 'My co-worker Bryton has one of these. He says it looks ragged.',
  },
  {
    image:
      'https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg',
    name: 'Christine Luv',
    job: 'Product Manager',
    review:
      'My neighbor Elisha has one of these. She works as a fortune teller and she says it looks floppy.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
    name: 'Product Acquisition',
    job: 'Realtor',
    review: 'I tried to nail it but got strawberry all over it.',
  },
  {
    image: 'http://www.venmond.com/demo/vendroid/img/avatar/big.jpg',
    name: 'Angelica Moph',
    job: 'Client Acquisition',
    review: 'My macaroni penguin loves to play with it.',
  },
];

let currentReviewsIndex = reviews[0];

function getReview(action) {
  const index = reviews.findIndex((item) => item === currentReviewsIndex);
  if (action === 'next') {
    if (index + 1 > reviews.length - 1) {
      currentReviewsIndex = reviews[0];
    } else {
      currentReviewsIndex = reviews[index + 1];
    }
  } else if (action === 'prev') {
    if (index < reviews.length - 1) {
      currentReviewsIndex = reviews[reviews.length - 1];
    } else {
      currentReviewsIndex = reviews[0];
    }
  }

  document.getElementById('image-user').src = currentReviewsIndex.image;
  document.getElementById('name-user').innerHTML = currentReviewsIndex.name;
  document.getElementById('job-user').innerHTML = currentReviewsIndex.job;
  document.getElementById('review-user').innerHTML = currentReviewsIndex.review;
}

getReview();
