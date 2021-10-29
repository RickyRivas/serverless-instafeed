const axios = require('axios')

exports.handler = function instagram(event, context, callback) {
  const endpoint = 'https://api.instagram.com/v1/users/self/media/recent'
  const token = IGQVJXZATJabHVzSWlYRTJpektYVWpaelVPdWIxRDJ2OUFkeDNNSmdIOEpXUURCbkhWYWIzX1d0YkkzanlLeVNIY0RjeXRiLUFNR2ktQnRnVGhNU252Ql9IRkZAGQnV1RzFUMXNla2M1QWhWLVBtS1FvdwZDZD
  const limit = 5

  axios
    .get(`${endpoint}?access_token=${token}&count=${limit}`)
    .then(({ data: { data: posts } }) => {
      callback(null, {
        statusCode: 200,
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(
          posts.map(i => ({
            id: i.id,
            link: i.link,
            images: i.images,
            videos: i.videos,
            caption: i.caption.text,
          })),
        ),
      })
    })
    .catch((e) => {
      callback(e)
    })
}